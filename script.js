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
  "designer6",
  "identityPortrait"
];

const characterCaptions = [
  "Lady in red - not just a color, but a whole statement",
  "High fashion, higher ambitions",
  "Serving SPF: Sass, Power, Flirt",
  "In the details lies the story - expression, light, and presence",
  "In a world full of noise, elegance whispers",
  "A frame of couture. A soul of fire",
  "No caption needed - this is what fashion sounds like when it screams"
];

const galleryRatios = ["0.76", "0.9", "0.7", "1.08", "0.82", "0.72", "0.95"];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const getImage = (slotName) => portfolioImages[imageSlotOrder.indexOf(slotName)] || "";
const getHeaderOffset = () => (document.querySelector(".site-header")?.getBoundingClientRect().height || 0) + 22;
const scrollToHash = (hash, updateHistory = true) => {
  if (!hash || hash === "#") return false;

  const target = document.querySelector(hash);
  if (!target) return false;

  const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion ? "auto" : "smooth"
  });

  if (updateHistory) {
    history.pushState(null, "", hash);
  }

  return true;
};

document.querySelectorAll(".js-sequence-image").forEach((image) => {
  const src = getImage(image.dataset.slot);

  if (!src) {
    image.classList.add("is-empty");
    return;
  }

  image.src = src;
});

document.querySelectorAll("[data-video-slot]").forEach((video) => {
  const src = getImage(video.dataset.videoSlot);

  if (src) {
    video.src = src;
    video.load();
  }
});

const gallery = document.querySelector("[data-gallery='character']");
const characterImages = portfolioImages.slice(imageSlotOrder.length);

if (gallery) {
  characterImages.forEach((src, index) => {
    const figure = document.createElement("figure");
    figure.className = "gallery-card reveal-on-scroll";
    figure.style.setProperty("--gallery-ratio", galleryRatios[index % galleryRatios.length]);
    figure.tabIndex = 0;

    const image = document.createElement("img");
    image.src = src;
    image.alt = characterCaptions[index] || `Aanvi Karmakar character still ${index + 1}`;
    image.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `<span>${characterCaptions[index] || "Portfolio still"}</span><em>${String(index + 1).padStart(2, "0")}</em>`;

    figure.append(image, caption);
    gallery.append(figure);
  });
}

const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

const closeMenu = () => {
  if (!navToggle || !navLinks) return;
  navToggle.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open menu");
  navLinks.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  navLinks?.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");

    if (hash && scrollToHash(hash)) {
      event.preventDefault();
      closeMenu();
    }
  });
});

window.addEventListener("load", () => {
  if (window.location.hash) {
    window.setTimeout(() => scrollToHash(window.location.hash, false), 80);
  }
});

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    revealObserver.unobserve(entry.target);
  });
}, {
  threshold: 0.12,
  rootMargin: "0px 0px -70px 0px"
});

document.querySelectorAll(".reveal-on-scroll").forEach((element) => {
  revealObserver.observe(element);
});

const navItems = [...document.querySelectorAll(".nav-links a[href^='#']")];
const sections = navItems
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const activeObserver = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (!visible) return;

  navItems.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
  });
}, {
  threshold: [0.2, 0.45, 0.65],
  rootMargin: "-30% 0px -55% 0px"
});

sections.forEach((section) => activeObserver.observe(section));

const heroImage = document.querySelector(".hero-image");
const heroSection = document.querySelector(".hero");

if (heroImage && heroSection && !prefersReducedMotion) {
  window.addEventListener("scroll", () => {
    const heroHeight = heroSection.offsetHeight || 1;
    const progress = Math.min(window.scrollY / heroHeight, 1);
    heroImage.style.transform = `translateY(${progress * 42}px) scale(1.02)`;
  }, { passive: true });
}

if (!prefersReducedMotion) {
  document.querySelectorAll(".magnetic-image").forEach((image) => {
    image.addEventListener("mousemove", (event) => {
      const rect = image.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
      image.style.transform = `scale(1.035) translate(${x}px, ${y}px)`;
    });

    image.addEventListener("mouseleave", () => {
      image.style.transform = "";
    });
  });
}

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxCaption = lightbox?.querySelector("p");
const lightboxClose = lightbox?.querySelector(".lightbox-close");
const transparentPixel = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

const openLightbox = (image) => {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = image.alt;
  lightbox.hidden = false;
  document.body.classList.add("lightbox-open");
  lightboxClose?.focus();
};

const closeLightbox = () => {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;
  lightbox.hidden = true;
  lightboxImage.src = transparentPixel;
  lightboxImage.alt = "";
  lightboxCaption.textContent = "";
  document.body.classList.remove("lightbox-open");
};

document.querySelectorAll("[data-lightbox-trigger]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const image = trigger.querySelector("img");
    if (image) openLightbox(image);
  });
});

document.querySelectorAll(".gallery-card").forEach((card) => {
  const image = card.querySelector("img");

  card.addEventListener("click", () => {
    if (image) openLightbox(image);
  });

  card.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && image) {
      event.preventDefault();
      openLightbox(image);
    }
  });
});

lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
    closeMenu();
  }
});
