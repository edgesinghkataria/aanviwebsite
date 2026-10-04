/*
  Replace this array whenever you have the final picture URLs.

  Order is exactly the visual reading order of the page:
  top section first, then left-to-right within each row, then the next row down.
*/
const portfolioImages = [
  "https://assets.aanvikarmakar.com/IMG_1344.jpeg",
  "https://assets.aanvikarmakar.com/IMG_1452.jpeg",
  "https://assets.aanvikarmakar.com/IMG_1320.jpeg",
  "https://assets.aanvikarmakar.com/9976f3e267reels7436d8reels2dreelsd82e78ec09f.MP4",
  "https://assets.aanvikarmakar.com/IMG_1428.jpeg",
  "https://assets.aanvikarmakar.com/IMG_1405.jpeg",
  "https://assets.aanvikarmakar.com/IMG_1415.jpeg",
  "https://assets.aanvikarmakar.com/IMG_1370.jpeg",
  "https://assets.aanvikarmakar.com/IMG_1395.jpeg",
  "https://assets.aanvikarmakar.com/IMG_1394.jpeg",
  "https://assets.aanvikarmakar.com/IMG_1387.jpeg",
  "https://assets.aanvikarmakar.com/IMG_1441.jpeg",
  "https://assets.aanvikarmakar.com/IMG_1449.jpeg",
  "https://assets.aanvikarmakar.com/IMG_1363.jpeg",
  "https://assets.aanvikarmakar.com/b5de54c5-5fd8-4642-a513-bc6479f9e078.jpeg",
  "https://assets.aanvikarmakar.com/IMG_1453.jpeg",
  "https://assets.aanvikarmakar.com/IMG_1464.jpeg",
  "https://assets.aanvikarmakar.com/IMG_1472.jpeg",
  "https://assets.aanvikarmakar.com/9b48429c-c2d6-4c19-8ac5-3e5b440a8535.jpeg",
  "https://assets.aanvikarmakar.com/IMG_1335.jpeg",
  "https://assets.aanvikarmakar.com/IMG_1345.jpeg"
];

const imageSlotOrder = [
  "hero",
  "intro",
  "aboutPortrait",
  "reelVideo",
  "devdas1",
  "devdas2",
  "devdas3",
  "designer1",
  "designer2",
  "designer3",
  "designer4",
  "designer5",
  "designer6"
];

const characterCaptions = [
  "Lady in red - not just a color, but a whole statement",
  "High fashion, higher ambitions",
  "Serving SPF: Sass, Power, Flirt",
  "In the details lies the story - expression, light, and presence",
  "In a world full of noise, elegance whispers",
  "A frame of couture. A soul of fire",
  "No caption needed - this is what fashion sounds like when it screams",
  "Floral fantasies and sunlight serenades"
];

const getImage = (slotName) => portfolioImages[imageSlotOrder.indexOf(slotName)] || "";

// Load portfolio images
document.querySelectorAll(".js-sequence-image").forEach((image) => {
  const src = getImage(image.dataset.slot);
  if (!src) {
    image.classList.add("is-empty");
    return;
  }

  image.src = src;
});

// Load video
document.querySelectorAll("[data-video-slot]").forEach((video) => {
  const src = getImage(video.dataset.videoSlot);
  if (src) {
    video.src = src;
    video.load();
  }
});

// Gallery creation
const gallery = document.querySelector("[data-gallery='character']");
const characterImages = portfolioImages.slice(imageSlotOrder.length);

characterImages.forEach((src, index) => {
  const figure = document.createElement("figure");
  figure.className = "gallery-card";

  const image = document.createElement("img");
  image.src = src;
  image.alt = characterCaptions[index] || `Aanvi Karmakar character still ${index + 1}`;

  const caption = document.createElement("figcaption");
  caption.innerHTML = `<span>${characterCaptions[index] || "Portfolio still"}</span><em>${String(index + 1).padStart(2, "0")}</em>`;

  figure.append(image, caption);
  gallery.append(figure);
});

// ========== SCROLL ANIMATIONS ==========

const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

// Observer for fade-in elements
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100);
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe gallery cards
document.querySelectorAll('.gallery-card').forEach(card => {
  fadeObserver.observe(card);
});

// Observe catalog cards
document.querySelectorAll('.catalog-card').forEach(card => {
  fadeObserver.observe(card);
});

// Observe designer rows
document.querySelectorAll('.designer-row').forEach(row => {
  fadeObserver.observe(row);
});

// ========== HERO PARALLAX ==========
const heroImage = document.querySelector('.hero-image');
const heroSection = document.querySelector('.hero');

if (heroImage && heroSection) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const scrollProgress = scrolled / heroBottom;

    if (scrollProgress < 1) {
      const parallaxAmount = scrolled * 0.4;
      heroImage.style.transform = `translateY(${parallaxAmount}px)`;
    }
  }, { passive: true });
}

// ========== INTRO CARD REVEAL ==========
const introCard = document.querySelector('.intro-card');
const introImage = document.querySelector('.intro-image');

if (introCard) {
  const introObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        introCard.classList.add('animate-slide-left');
        if (introImage) {
          introImage.classList.add('animate-slide-right');
        }
        introObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  introObserver.observe(introCard);
}

// ========== ABOUT SECTION REVEALS ==========
const aboutTiles = document.querySelectorAll('.about-tile');
const aboutCenter = document.querySelector('.about-center');

if (aboutTiles.length > 0 || aboutCenter) {
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate-fade-up');
        }, index * 150);
        aboutObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  aboutTiles.forEach(tile => aboutObserver.observe(tile));
  if (aboutCenter) aboutObserver.observe(aboutCenter);
}

// ========== REEL SECTION REVEAL ==========
const reelFrame = document.querySelector('.reel-frame');

if (reelFrame) {
  const reelObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-scale');
        reelObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reelObserver.observe(reelFrame);
}

// ========== SECTION HEADING REVEALS ==========
const sectionHeadings = document.querySelectorAll('.section-heading, .designer-intro, .character-title, .identity');

sectionHeadings.forEach(heading => {
  const headingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-up');
        headingObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  headingObserver.observe(heading);
});

// ========== MEASUREMENTS SECTION ANIMATIONS ==========
const measurementsParts = document.querySelectorAll(
  '.measurements-header, .measurements-stats, .measurements-detail, .measurements-appearance'
);

measurementsParts.forEach((el) => {
  const mObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        mObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  mObserver.observe(el);
});

// ========== IMAGE HOVER SCALE EFFECT ==========
document.querySelectorAll('.js-sequence-image').forEach(img => {
  img.addEventListener('mouseenter', function() {
    if (!this.classList.contains('is-empty')) {
      this.style.transform = 'scale(1.01)';
    }
  });

  img.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});