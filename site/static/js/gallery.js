/**
 * Multi-Instance Modal Gallery
 * Handles multiple independent gallery instances on the same page
 */

class ModalGallery {
  constructor(galleryId) {
    this.galleryId = galleryId;
    this.currentImageIndex = 0;
    this.screenshots = [];
    this.title = '';

    this.init();
  }

  init() {
    // Load gallery data from JSON script tag
    this.loadGalleryData();

    // Bind event listeners
    this.bindEvents();
  }

  loadGalleryData() {
    const dataScript = document.querySelector(`script.gallery-data[data-gallery-id="${this.galleryId}"]`);
    if (dataScript) {
      const data = JSON.parse(dataScript.textContent);
      this.screenshots = data.screenshots;
      this.title = data.title;
    }
  }

  bindEvents() {
    // Thumbnail click events
    const thumbnails = document.querySelectorAll(`img.gallery-thumbnail[data-gallery-id="${this.galleryId}"]`);
    console.log(`Found ${thumbnails.length} thumbnails for gallery ${this.galleryId}`);

    thumbnails.forEach((thumbnail, idx) => {
      console.log(`Binding click event to thumbnail ${idx} for gallery ${this.galleryId}`);
      thumbnail.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.imageIndex);
        console.log(`Thumbnail clicked: gallery=${this.galleryId}, index=${index}`);
        this.openModal(index);
      });
    });

    // Modal controls
    const modal = document.getElementById(`imageModal_${this.galleryId}`);
    if (!modal) return;

    // Close button
    const closeBtn = modal.querySelector('.gallery-close');
    const prevBtn = modal.querySelector('.gallery-prev');
    const nextBtn = modal.querySelector('.gallery-next');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeModal());
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.previousImage());
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.nextImage());
    }

    // Click outside to close
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.closeModal();
      }
    });

    // Touch/swipe support
    const modalImage = modal.querySelector('.gallery-image');
    if (modalImage) {
      this.setupTouchEvents(modalImage);
    }
  }

  openModal(index) {
    this.currentImageIndex = index;
    const modal = document.getElementById(`imageModal_${this.galleryId}`);
    const modalImage = document.getElementById(`modalImage_${this.galleryId}`);
    const counter = document.getElementById(`imageCounter_${this.galleryId}`);

    if (!modal || !modalImage || !counter) return;

    // Update image and counter
    modalImage.src = this.screenshots[this.currentImageIndex].src;
    modalImage.alt = this.screenshots[this.currentImageIndex].alt;
    counter.textContent = `${this.currentImageIndex + 1} / ${this.screenshots.length}`;

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    const modal = document.getElementById(`imageModal_${this.galleryId}`);
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.screenshots.length;
    this.updateModalImage();
  }

  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.screenshots.length) % this.screenshots.length;
    this.updateModalImage();
  }

  updateModalImage() {
    const modalImage = document.getElementById(`modalImage_${this.galleryId}`);
    const counter = document.getElementById(`imageCounter_${this.galleryId}`);

    if (modalImage && counter) {
      modalImage.src = this.screenshots[this.currentImageIndex].src;
      modalImage.alt = this.screenshots[this.currentImageIndex].alt;
      counter.textContent = `${this.currentImageIndex + 1} / ${this.screenshots.length}`;
    }
  }

  setupTouchEvents(element) {
    let touchStartX = 0;
    let touchEndX = 0;

    element.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    element.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe(touchStartX, touchEndX);
    });
  }

  handleSwipe(startX, endX) {
    const swipeThreshold = 50;
    const diff = startX - endX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextImage(); // Swipe left - next image
      } else {
        this.previousImage(); // Swipe right - previous image
      }
    }
  }
}

// Gallery Manager - handles multiple gallery instances
class GalleryManager {
  constructor() {
    this.galleries = new Map();
    this.init();
  }

  init() {
    // Initialize galleries immediately if DOM is already loaded, otherwise wait for DOMContentLoaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.initializeGalleries();
        this.setupKeyboardNavigation();
      });
    } else {
      // DOM is already loaded
      this.initializeGalleries();
      this.setupKeyboardNavigation();
    }
  }

  initializeGalleries() {
    // Find all gallery data scripts
    const galleryDataScripts = document.querySelectorAll('script.gallery-data');
    console.log('Found gallery data scripts:', galleryDataScripts.length);

    galleryDataScripts.forEach(script => {
      const galleryId = script.dataset.galleryId;
      console.log('Initializing gallery:', galleryId);
      if (galleryId && !this.galleries.has(galleryId)) {
        const gallery = new ModalGallery(galleryId);
        this.galleries.set(galleryId, gallery);
        console.log('Gallery initialized:', galleryId);
      }
    });

    console.log('Total galleries initialized:', this.galleries.size);
  }

  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      // Find the currently open modal
      const openModal = document.querySelector('.gallery-modal:not(.hidden)');
      if (!openModal) return;

      const galleryId = openModal.id.replace('imageModal_', '');
      const gallery = this.galleries.get(galleryId);

      if (!gallery) return;

      switch (e.key) {
        case 'Escape':
          gallery.closeModal();
          break;
        case 'ArrowLeft':
          gallery.previousImage();
          break;
        case 'ArrowRight':
          gallery.nextImage();
          break;
      }
    });
  }
}

// Initialize the gallery manager
new GalleryManager();
