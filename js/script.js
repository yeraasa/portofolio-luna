const componentFiles = {
  navbar: "components/navbar.html",
  home: "components/home.html",
  about: "components/about.html",
  projects: "components/projects.html",
  contact: "components/contact.html",
  footer: "components/footer.html"
};

async function loadComponents() {
  await Promise.all(
    Object.entries(componentFiles).map(async ([id, file]) => {
      const target = document.getElementById(id);
      if (!target) return;

      const response = await fetch(file);
      if (!response.ok) throw new Error(`Failed to load ${file}`);
      target.innerHTML = await response.text();
    })
  );

  initPortfolio();
}

function initPortfolio() {
  initMobileMenu();
  initCarousel();
  initReveal();
  initActiveNavigation();
  initSectionTransition();
}

function initMobileMenu() {
  const button = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");
  if (!button || !menu) return;

  button.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden", isOpen);
    button.setAttribute("aria-expanded", String(!isOpen));
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      button.setAttribute("aria-expanded", "false");
    });
  });
}

function initCarousel() {
  const track = document.getElementById("carousel-track");
  const next = document.getElementById("next-btn");
  const prev = document.getElementById("prev-btn");
  const counter = document.getElementById("carousel-counter");
  const cards = document.querySelectorAll(".project-card");

  if (!track || !next || !prev || !counter || !cards.length) return;

  const step = () => cards[0].getBoundingClientRect().width + 32;

  const update = () => {
    const index = Math.min(
      Math.max(Math.round(track.scrollLeft / step()), 0),
      cards.length - 1
    );
    counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;
  };

  next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
  prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
  track.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach(el => observer.observe(el));
}

function initActiveNavigation() {
  const sections = [
    document.getElementById("home"),
    document.getElementById("About"),
    document.getElementById("Projects"),
    document.getElementById("Contact")
  ].filter(Boolean);

  const links = document.querySelectorAll("[data-section]");
  if (!sections.length || !links.length) return;

  const setActive = id => {
    links.forEach(link => {
      const active = link.dataset.section === id;
      link.classList.toggle("text-primary", active);
      link.classList.toggle("text-on-surface-variant", !active);

      if (link.classList.contains("nav-desktop-link")) {
        link.classList.toggle("border-primary", active);
        link.classList.toggle("border-transparent", !active);
      }
    });
  };

  const updateFromScroll = () => {
    const marker = window.scrollY + 140;
    let current = sections[0].id;

    sections.forEach(section => {
      if (section.offsetTop <= marker) current = section.id;
    });

    setActive(current);
  };

  window.addEventListener("scroll", updateFromScroll, { passive: true });
  window.addEventListener("resize", updateFromScroll);

  links.forEach(link => {
    link.addEventListener("click", event => {
      const id = link.dataset.section;
      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      setActive(id);
      runSectionTransition(id);
    });
  });

  updateFromScroll();
}

function initSectionTransition() {
  const transition = document.getElementById("page-transition");
  if (!transition) return;

  document.querySelectorAll('a[href^="projects/"]').forEach(link => {
    link.addEventListener("click", event => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      event.preventDefault();

      transition.classList.add("is-active");
      setTimeout(() => {
        window.location.href = link.href;
      }, 480);
    });
  });
}
function runSectionTransition(id) {
  const transition = document.getElementById("page-transition");
  const label = document.getElementById("page-transition-label");
  const target = document.getElementById(id);

  if (!transition || !target) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    target.scrollIntoView({ behavior: "auto", block: "start" });
    return;
  }

  const labels = {
    home: "HOME ",
    About: "ABOUT ",
    Projects: "PROJECTS ",
    Contact: "CONTACT"
    
  };

  if (label) {
    label.textContent = labels[id] || id.toUpperCase();
  }

  transition.classList.remove("is-active");
  void transition.offsetWidth;

  transition.classList.add("is-active");

  setTimeout(() => {
    target.scrollIntoView({
      behavior: "auto",
      block: "start"
    });

    transition.classList.remove("is-active");
  }, 550);
}


document.addEventListener("DOMContentLoaded", loadComponents);
