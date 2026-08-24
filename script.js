"use strict";

/* =========================================================
   MASJID-E-TAWHEED — FINAL WEBSITE JAVASCRIPT
   Umar Bagh • JP Nagar • Bangalore
   ========================================================= */


/* =========================
   PRAYER TIMES
   ========================= */

const PRAYER_TIMES = [
  ["Fajr", "05:30 AM"],
  ["Sunrise", "06:10 AM"],
  ["Dhuhr", "01:15 PM"],
  ["Asr", "04:15 PM"],
  ["Maghrib", "06:30 PM"],
  ["Isha", "08:30 PM"]
];


/* =========================
   KHUTBAHS
   ========================= */

const KHUTBAHS = [
  {
    date: "Friday, 21st August 2026",
    topic: "Takabbur Ki Holnakiyan",
    speaker: "Shaikh Abdurrab Faizi Hafizahullah",
    time: "12:45 PM",
    type: "Jumu'ah Khutbah"
  },
  {
    date: "Friday, 28th August 2026",
    topic: "Islamic Character & Brotherhood",
    speaker: "Shaikh Abdurrab Faizi Hafizahullah",
    time: "12:45 PM",
    type: "Jumu'ah Khutbah"
  },
  {
    date: "Friday, 4th September 2026",
    topic: "Importance of Salah",
    speaker: "Masjid-e-Tawheed",
    time: "12:45 PM",
    type: "Jumu'ah Khutbah"
  }
];


/* =========================
   IMAMS
   ========================= */

const IMAMS = [
  {
    name: "Shaikh Abdurrab Faizi",
    role: "Imam & Khateeb",
    description: "Imam, Khateeb and Islamic educator."
  },
  {
    name: "Shaikh Yunus Hafizahullah",
    role: "Imam",
    description: "Imam and teacher of Qur'an and Sunnah."
  },
  {
    name: "Masjid Administration",
    role: "Khidmat Team",
    description: "Serving the Masjid and local community."
  }
];


/* =========================
   SCHOLARS
   ========================= */

const SCHOLARS = [
  {
    name: "Shaikh Abdurrab Faizi",
    role: "Scholar & Khateeb",
    description: "Lectures, Khutbahs and Islamic reminders."
  },
  {
    name: "Shaikh Yunus",
    role: "Scholar & Teacher",
    description: "Qur'an, Hadith and Islamic education."
  }
];


/* =========================
   PROGRAMS
   ========================= */

const PROGRAMS = [
  {
    number: "01",
    title: "Jumu'ah Khutbah",
    text: "Weekly Friday Khutbah with speaker details, topic and timing.",
    link: "#khutbah",
    action: "View Khutbah →"
  },
  {
    number: "02",
    title: "Maktab & Tarbiyah",
    text: "Children's Islamic education, Qur'an learning and character building.",
    link: "#contact",
    action: "Learn More →"
  },
  {
    number: "03",
    title: "Seerah & Duroos",
    text: "Lectures, Seerah series, Hadith and beneficial Islamic reminders.",
    link: "#media",
    action: "Watch Media →"
  },
  {
    number: "04",
    title: "Ramadan",
    text: "Ramadan timetable, Taraweeh, Iftar, Sehri and special programs.",
    link: "#contact",
    action: "Details →"
  },
  {
    number: "05",
    title: "Hajj & Dhul Hijjah",
    text: "Hajj guidance, Eid arrangements and seasonal reminders.",
    link: "#media",
    action: "Explore →"
  },
  {
    number: "06",
    title: "Community Service",
    text: "Charity drives, food distribution and welfare initiatives.",
    link: "#contact",
    action: "Contact →"
  }
];


/* =========================
   UPCOMING PROGRAMS
   ========================= */

const UPCOMING_PROGRAMS = [
  {
    title: "Dars After Maghrib",
    speaker: "Shaikh Yunus Hafizahullah",
    day: "Weekly"
  },
  {
    title: "Jumu'ah Khutbah",
    speaker: "Shaikh Abdurrab Faizi Hafizahullah",
    day: "Friday"
  },
  {
    title: "Qur'an & Hadith Dars",
    speaker: "Masjid Scholars",
    day: "Weekly"
  }
];


/* =========================
   HELPER
   ========================= */

function getElement(id) {
  return document.getElementById(id);
}


/* =========================
   PRAYER GRID
   ========================= */

function renderPrayerTimes() {
  const grid = getElement("prayerGrid");

  if (!grid) return;

  grid.innerHTML = "";

  PRAYER_TIMES.forEach(function (prayer, index) {
    const card = document.createElement("article");
    card.className = "prayer-card";

    card.innerHTML = `
      <div class="prayer-number">0${index + 1}</div>
      <div class="prayer-name">${prayer[0]}</div>
      <div class="prayer-time">${prayer[1]}</div>
    `;

    grid.appendChild(card);
  });
}


/* =========================
   KHUTBAH GRID
   ========================= */

function renderKhutbahs() {
  const grid = getElement("khutbahGrid");

  if (!grid) return;

  grid.innerHTML = "";

  KHUTBAHS.forEach(function (item) {
    const card = document.createElement("article");
    card.className = "event-card";

    card.innerHTML = `
      <div class="event-date">${item.date}</div>
      <h3>${item.topic}</h3>
      <p>${item.speaker}</p>
      <small>${item.type} • ${item.time}</small>
    `;

    grid.appendChild(card);
  });
}


/* =========================
   IMAMS SLIDER
   ========================= */

let imamIndex = 0;

function renderImams() {
  const slider = getElement("imamSlider");

  if (!slider) return;

  slider.innerHTML = "";

  IMAMS.forEach(function (imam, index) {
    const card = document.createElement("article");
    card.className = "imam-card";

    if (index === imamIndex) {
      card.classList.add("active");
    }

    card.innerHTML = `
      <div class="imam-icon">◉</div>
      <h3>${imam.name}</h3>
      <strong>${imam.role}</strong>
      <p>${imam.description}</p>
    `;

    slider.appendChild(card);
  });
}


/* =========================
   IMAM NEXT BUTTON
   ========================= */

function setupImamButton() {
  const button = getElement("imamNext");

  if (!button) return;

  button.addEventListener("click", function () {
    imamIndex++;

    if (imamIndex >= IMAMS.length) {
      imamIndex = 0;
    }

    renderImams();
  });
}


/* =========================
   SCHOLARS
   ========================= */

function renderScholars() {
  const grid = getElement("scholarsGrid");

  if (!grid) return;

  grid.innerHTML = "";

  SCHOLARS.forEach(function (scholar) {
    const card = document.createElement("article");
    card.className = "scholar-card";

    card.innerHTML = `
      <div class="scholar-icon">★</div>
      <h3>${scholar.name}</h3>
      <strong>${scholar.role}</strong>
      <p>${scholar.description}</p>
    `;

    grid.appendChild(card);
  });
}


/* =========================
   PROGRAMS
   ========================= */

function renderPrograms() {
  const grid = document.querySelector(".program-grid");

  if (!grid) return;

  grid.innerHTML = "";

  PROGRAMS.forEach(function (program) {
    const article = document.createElement("article");

    article.className = "program-card";

    article.innerHTML = `
      <span>${program.number}</span>
      <h3>${program.title}</h3>
      <p>${program.text}</p>
      <a href="${program.link}">${program.action}</a>
    `;

    grid.appendChild(article);
  });
}


/* =========================
   UPCOMING PROGRAMS
   ========================= */

function renderUpcomingPrograms() {
  const container = document.querySelector(".upcoming-programs");

  if (!container) return;

  container.innerHTML = "";

  UPCOMING_PROGRAMS.forEach(function (program) {
    const item = document.createElement("div");

    item.className = "upcoming-item";

    item.innerHTML = `
      <div>
        <strong>${program.title}</strong>
        <small>${program.speaker}</small>
      </div>
      <span>${program.day} ›</span>
    `;

    container.appendChild(item);
  });
}


/* =========================
   LIVE CLOCK
   ========================= */

function updateClock() {
  const clock = getElement("liveClock");

  if (!clock) return;

  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}


/* =========================
   COUNTDOWN
   ========================= */

function setupCountdown() {

  const daysEl = getElement("days");
  const hoursEl = getElement("hours");
  const minsEl = getElement("mins");
  const secsEl = getElement("secs");

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  /*
    Next special program:
    30 August 2026, 07:00 PM
  */

  const targetDate = new Date("2026-08-30T19:00:00+05:30");

  function updateCountdown() {

    const now = new Date();

    let difference = targetDate.getTime() - now.getTime();

    if (difference < 0) {
      difference = 0;
    }

    const days = Math.floor(
      difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
      (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
      (difference / 1000) % 60
    );

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minsEl.textContent = String(minutes).padStart(2, "0");
    secsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();

  setInterval(updateCountdown, 1000);
}


/* =========================
   MOBILE MENU
   ========================= */

function setupMobileMenu() {

  const menuButton =
    document.querySelector(".menu-btn") ||
    document.querySelector(".hamburger") ||
    document.querySelector("[aria-label='Menu']");

  const menu =
    document.querySelector(".mobile-menu") ||
    document.querySelector(".nav-menu") ||
    document.querySelector("nav");

  if (!menuButton || !menu) return;

  menuButton.addEventListener("click", function () {

    menu.classList.toggle("active");

    menuButton.classList.toggle("active");

  });
}


/* =========================
   SMOOTH NAVIGATION
   ========================= */

function setupSmoothNavigation() {

  document.querySelectorAll("a[href^='#']").forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId =
        link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });
}


/* =========================
   BACK TO TOP
   ========================= */

function setupBackToTop() {

  const button =
    document.querySelector(".back-top");

  if (!button) return;

  window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {
      button.classList.add("show");
    } else {
      button.classList.remove("show");
    }

  });

  button.addEventListener("click", function () {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });
}


/* =========================
   CURRENT YEAR
   ========================= */

function updateYear() {

  document.querySelectorAll("[data-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

}


/* =========================
   LIVE STATUS
   ========================= */

function setupLiveStatus() {

  const liveElements =
    document.querySelectorAll(".live-now");

  liveElements.forEach(function (element) {

    element.classList.add("pulse");

  });

}


/* =========================
   VIDEO FALLBACK
   ========================= */

function setupVideo() {

  const videoArea =
    getElement("videoArea");

  if (!videoArea) return;

  const iframe =
    videoArea.querySelector("iframe");

  if (!iframe) return;

  iframe.addEventListener("error", function () {

    videoArea.classList.add("video-error");

  });

}


/* =========================
   SEARCH BUTTON
   ========================= */

function setupSearch() {

  const searchButton =
    document.querySelector(".search-btn");

  if (!searchButton) return;

  searchButton.addEventListener("click", function () {

    const query =
      window.prompt(
        "Masjid-e-Tawheed mein kya search karna hai?"
      );

    if (!query) return;

    const text =
      document.body.innerText.toLowerCase();

    if (text.includes(query.toLowerCase())) {

      alert(
        "Search result website par available hai."
      );

    } else {

      alert(
        "Is waqt matching information nahi mili."
      );

    }

  });

}


/* =========================
   ACTIVE NAVIGATION
   ========================= */

function setupActiveNavigation() {

  const sections =
    document.querySelectorAll("section[id]");

  const links =
    document.querySelectorAll("a[href^='#']");

  if (!sections.length || !links.length) return;

  window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

      const top =
        section.getBoundingClientRect().top;

      if (top <= 150) {
        current = section.id;
      }

    });

    links.forEach(function (link) {

      link.classList.remove("active");

      if (
        link.getAttribute("href") === "#" + current
      ) {

        link.classList.add("active");

      }

    });

  });

}


/* =========================
   INITIALIZE WEBSITE
   ========================= */

document.addEventListener("DOMContentLoaded", function () {

  renderPrayerTimes();

  renderKhutbahs();

  renderImams();

  renderScholars();

  renderPrograms();

  renderUpcomingPrograms();

  setupImamButton();

  setupCountdown();

  setupMobileMenu();

  setupSmoothNavigation();

  setupBackToTop();

  updateYear();

  setupLiveStatus();

  setupVideo();

  setupSearch();

  setupActiveNavigation();

  updateClock();

  setInterval(updateClock, 1000);

});


/* =========================
   SAFETY CHECK
   ========================= */

window.addEventListener("load", function () {

  document.body.classList.add("website-loaded");

});
