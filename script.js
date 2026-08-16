 "use strict";

const PRAYER_TIMES = [
  ["Fajr", "05:30 AM"],
  ["Sunrise", "06:10 AM"],
  ["Dhuhr", "01:15 PM"],
  ["Asr", "04:15 PM"],
  ["Maghrib", "06:30 PM"],
  ["Isha", "08:30 PM"]
];

const KHUTBAHS = [
  {
    date: "Next Friday",
    topic: "Jumu'ah Khutbah",
    speaker: "To Be Announced",
    time: "12:45 PM"
  },
  {
    date: "Upcoming Friday",
    topic: "Islamic Reminder",
    speaker: "Speaker details to be added",
    time: "12:45 PM"
  },
  {
    date: "Future Program",
    topic: "Special Dars / Lecture",
    speaker: "Speaker details to be added",
    time: "To Be Announced"
  },
 {
  date: "28 August 2026",
  topic: "Monthly Deeni Program",
  speaker: "Shaikh Abdul Haseeb Madani Hafizahullah",
  time: "Maghrib to Isha • Separate Arrangement for Ladies"
 }
];

const IMAMS = [
{
  name: "Shaikh Abdurrab Faizi Hafizahullah",
  role: "Imam & Khatib",
  photo: "imam-photos/b221074b9291515796d0018b9ee32ba3b751d77501f20cb7baf80da1a9149069.png",
  bio: "Imam & Khatib, Masjid-e-Tawheed Ahle Hadees"
}
 
];
const SCHOLARS = [
  {
    name: "Shaikh Abdul Azeem Umari Madani Hafizahullah",
    photo: "1000434229_d4061e62a924661630fa9183e7d969cf-12_25_2024, 3_41_20 PM_20260816_153434_0000.png"
  },
  {
    name: "Shaikh Abdul Qadeer Umari Hafizahullah",
    photo: "1000034871_905dd019df6634062d0d71e776822ce9-1_20_2026, 11_02_05 AM_20260816_153002_0000.png",
  },
  {
    name: "Shaikh Abdul Haseeb Umari Madani Hafizahullah",
    photo: "1000722363_f85d57fea00a94b89b937a77a28a1422-11_29_2025, 7_39_04 AM_20260816_153112_0000.png"
  },
  {
    name: "Shaikh Abdul Gaffar Salfi",
    photo: "1000481026_be5ecb8db0417276d346771d6f8f05c6-2_23_2025, 11_13_51 PM_20260816_153338_0000.png"
  },
  {
    name: "Shaikh Yasir Al-Jabri Madani (Jeddah)",
    photo: "1000443782_32858afbc0e172fd90ef6093cbe38bf9-1_10_2025, 9_56_17 PM_20260816_153407_0000.jpg"
  },
  {
    name: "Shaikh Sabir Ali Umari Aallawi Hafizahullah",
    photo: "1000071096_b9dbd0a2cba293b671554d78fab89536-2_27_2026, 11_39_36 PM_20260816_152942_0000.jpg"
  },
  {
    name: "Shaikh Abdul Azeem Madani Hafizahullah",
    photo: "1000091870_bcd2b7cd860025b583ec0..."
  },
  {
    name: "Shaikh Abdul Raheem Sagri Jamai Hafizahullah",
    photo: "1000221596_577ee3d50631494ef05b3db91302c918-1_27_2024, 4_33_07 PM_20260816_153530_0000.png"
  },
  {
    name: "Shaikh Imran Ahmed Jamai Hafizahullah",
    photo: "1000418546_ee1b8ce9dd749f274af35ee0cb2be6f3-12_5_2024, 2_04_42 PM_20260816_153446_0000.png"
  },
  {
    name: "Shaikh Ajaz Ahamed Nadvi Hafizahullah",
    photo: "1000627731_102c02787715ee574e620d2cad4fb71b-9_6_2025, 3_29_44 PM_20260816_153200_0000.jpg"
  }
];

function renderScholars() {
  const grid = document.getElementById("scholarsGrid");
  if (!grid) return;

  grid.innerHTML = SCHOLARS.map(item => `
    <div class="scholar-card">
      <img src="${encodeURI(item.photo)}" alt="${item.name}">
      <h3>${item.name}</h3>
    </div>
  `).join("");
}
document.addEventListener("DOMContentLoaded", renderScholars);
const VIDEOS = [
  {
    title: "Jumu'ah Khutbah",
    desc: "Latest Khutbah recording",
    id: ""
  },
  {
    title: "Islamic Lecture",
    desc: "Dars / Bayan recording",
    id: ""
  },
  {
    title: "Special Program",
    desc: "Community program recording",
    id: ""
  }
];

const NEXT_PROGRAM = {
  title: "Monthly Deeni Program",
date: "2026-08-28T18:30:00",
text: "Shaikh Abdul Haseeb Madani Hafizahullah • Maghrib to Isha • Separate Arrangement for Ladies"
};

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function renderPrayerTimes() {
  const grid = document.getElementById("prayerGrid");
  if (!grid) return;

  grid.innerHTML = PRAYER_TIMES.map(item => `
    <div class="prayer-card">
      <div class="name">${item[0]}</div>
      <div class="time">${item[1]}</div>
    </div>
  `).join("");
}

function renderKhutbahs() {
  const grid = document.getElementById("khutbahGrid");
  if (!grid) return;

  grid.innerHTML = KHUTBAHS.map(item => `
    <article class="event">
      <div class="date">${item.date}</div>
      <h3>${item.topic}</h3>
      <p>${item.speaker}</p>
      <span>${item.time}</span>
    </article>
  `).join("");
}

function imamCard(item) {
  const photo = item.photo
    ? `<img src="${item.photo}" alt="${item.name}" loading="lazy">`
    : `<div class="placeholder-photo">PROFILE PHOTO</div>`;

  return `
    <article class="imam">
      <div class="imam-photo">${photo}</div>
      <div class="imam-body">
        <h3>${item.name}</h3>
        <div class="eyebrow">${item.role}</div>
        <p>${item.bio}</p>
      </div>
    </article>
  `;
}

let imamStart = 0;

function renderImams() {
  const slider = document.getElementById("imamSlider");
  if (!slider || !IMAMS.length) return;

const items = [
  IMAMS[imamStart % IMAMS.length]
];

  slider.innerHTML = items.map(imamCard).join("");
}

function nextImam() {
  imamStart = (imamStart + 1) % IMAMS.length;
  renderImams();
}

function previousImam() {
  imamStart = (imamStart - 1 + IMAMS.length) % IMAMS.length;
  renderImams();
}

function renderVideo() {
  const video = VIDEOS[videoIndex];
  if (!video) return;

  const area = document.getElementById("videoArea");

  if (area) {
    if (video.id) {
      area.innerHTML = `
        <iframe
          width="100%"
          height="330"
          src="https://www.youtube.com/embed/${video.id}"
          title="${video.title}"
          frameborder="0"
          allowfullscreen>
        </iframe>
      `;
    } else {
      area.innerHTML = `
        <div class="video-placeholder">
          <strong>${video.title}</strong>
          <span>YouTube video will appear here</span>
        </div>
      `;
    }
  }

  setText("videoTitle", video.title);
  setText("videoDesc", video.desc);

  const link = document.getElementById("videoLink");
  if (link) {
    link.href = video.id
      ? `https://www.youtube.com/watch?v=${video.id}`
      : "#";
  }

  const dots = document.getElementById("videoDots");
  if (dots) {
    dots.innerHTML = VIDEOS.map((_, i) =>
      `<span class="${i === videoIndex ? "active" : ""}"></span>`
    ).join("");
  }
}

let videoIndex = 0;

function nextVideo() {
  videoIndex = (videoIndex + 1) % VIDEOS.length;
  renderVideo();
}

function countdown() {
  const target = new Date(NEXT_PROGRAM.date).getTime();
  const diff = Math.max(0, target - Date.now());

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  setText("days", String(days).padStart(2, "0"));
  setText("hours", String(hours).padStart(2, "0"));
  setText("mins", String(mins).padStart(2, "0"));
  setText("secs", String(secs).padStart(2, "0"));
  setText("countTitle", NEXT_PROGRAM.title);
  setText("countText", NEXT_PROGRAM.text);
}

function updateDates() {
  const now = new Date();

  setText("year", now.getFullYear());

  const today = document.getElementById("today");
  if (today) {
    today.textContent = now.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }

  const prayerDate = document.getElementById("prayerDate");
  if (prayerDate) {
    prayerDate.textContent = now.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  }

  const nextFriday = new Date(now);
  const daysUntilFriday = (5 - now.getDay() + 7) % 7;
  nextFriday.setDate(now.getDate() + daysUntilFriday);

  const friday = document.getElementById("nextFriday");
  if (friday) {
    friday.textContent = nextFriday.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  }
}

function setupNavigation() {
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", event => {
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

function setupMenu() {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav");

  if (!menu || !nav) return;

  menu.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateDates();
  renderPrayerTimes();
  renderKhutbahs();
  renderImams();
 renderScholars();
  renderVideo();
  countdown();
  setupNavigation();
  setupMenu();

  const next = document.getElementById("imamNext");
  if (next) next.addEventListener("click", nextImam);

  const prev = document.getElementById("imamPrev");
  if (prev) prev.addEventListener("click", previousImam);

  document.querySelectorAll("img").forEach(img => {
    img.loading = "lazy";
  });

  setInterval(nextVideo, 7000);
  setInterval(nextImam, 8000);
  setInterval(countdown, 1000);

  document.documentElement.classList.add("js-ready");

  console.log("Masjid-e-Tawheed website system loaded successfully.");
});     
  
