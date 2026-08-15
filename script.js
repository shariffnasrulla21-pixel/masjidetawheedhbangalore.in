/*
  FUTURE-READY CONTENT FILE
  Sir: yahan se future mein dates, speakers, photos, videos aur links asaani se update kiye ja sakte hain.
  Actual Imam photos ko imam cards ke "photo" field mein upload ki hui image ka naam dena hai.
*/

const PRAYER_TIMES = [
  ["Fajr","05:30 AM"],["Sunrise","06:10 AM"],["Dhuhr","01:15 PM"],
  ["Asr","04:15 PM"],["Maghrib","06:30 PM"],["Isha","08:30 PM"]
];

/* Sample structure only — committee-approved timings/events should replace these. */
const KHUTBAHS = [
  {date:"Next Friday", topic:"Jumu'ah Khutbah", speaker:"Speaker details to be added", time:"Khutbah & Salah"},
  {date:"Upcoming Friday", topic:"Islamic Reminder", speaker:"Speaker details to be added", time:"Timing to be added"},
  {date:"Future Program", topic:"Special Dars / Lecture", speaker:"Speaker details to be added", time:"Timing to be added"}
];

/* Replace these placeholder records with actual approved Imam/Khatib names and photos. */
const IMAMS = [
  {name:"Imam / Khatib 01",role:"Imam & Khatib",photo:"",bio:"Official profile photo and short introduction can be added here."},
  {name:"Imam / Khatib 02",role:"Imam & Khatib",photo:"",bio:"Official profile photo and short introduction can be added here."},
  {name:"Imam / Khatib 03",role:"Guest Khatib",photo:"",bio:"Guest speaker profile can be added here."}
];

/* Add YouTube video IDs here. Example: "dQw4w9WgXcQ" */
const VIDEOS = [
  {title:"Jumu'ah Khutbah",desc:"Latest Khutbah recording",id:""},
  {title:"Islamic Lecture",desc:"Dars / Bayan recording",id:""},
  {title:"Special Program",desc:"Community program recording",id:""}
];

/* Set the next major confirmed program here. Format: YYYY-MM-DDTHH:MM:SS */
const NEXT_PROGRAM = {
  title:"Next Special Program",
  date:"2026-09-01T20:00:00",
  text:"Add the confirmed date and program name here."
};

document.getElementById("year").textContent = new Date().getFullYear();

const now = new Date();
document.getElementById("today").textContent = now.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});
document.getElementById("prayerDate").textContent = now.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long"});
const nextFriday = new Date(now);
nextFriday.setDate(now.getDate()+((5-now.getDay()+7)%7||7));
document.getElementById("nextFriday").textContent = nextFriday.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"short"});

document.getElementById("prayerGrid").innerHTML = PRAYER_TIMES.map(x=>`<div class="prayer-card"><div class="name">${x[0]}</div><div class="time">${x[1]}</div></div>`).join("");

document.getElementById("khutbahGrid").innerHTML = KHUTBAHS.map(x=>`<article class="event"><div class="date">${x.date}</div><h3>${x.topic}</h3><p><b>Speaker:</b> ${x.speaker}</p><p><b>Time:</b> ${x.time}</p></article>`).join("");

function imamCard(x){
  const photo = x.photo ? `<img src="${x.photo}" alt="${x.name}" loading="lazy">` : `<div class="placeholder-photo"><span>PHOTO</span></div>`;
  return `<article class="imam"><div class="imam-photo">${photo}</div><div class="imam-body"><div class="eyebrow">PROFILE</div><h3>${x.name}</h3><p><b>${x.role}</b></p><p>${x.bio}</p></div></article>`;
}
document.getElementById("imamSlider").innerHTML = IMAMS.map(imamCard).join("");

let videoIndex=0;
function renderVideo(){
  const v=VIDEOS[videoIndex];
  const art=document.getElementById("videoArt");
  art.innerHTML=v.id ? `<iframe width="100%" height="100%" style="min-height:330px;border:0" src="https://www.youtube.com/embed/${v.id}" title="${v.title}" allowfullscreen></iframe>` : `<div class="play">▶</div>`;
  document.getElementById("videoTitle").textContent=v.title;
  document.getElementById("videoDesc").textContent=v.desc;
  document.getElementById("videoLink").href=v.id?`https://youtu.be/${v.id}`:"#";
  document.getElementById("videoDots").innerHTML=VIDEOS.map((_,i)=>`<span class="dot ${i===videoIndex?"active":""}"></span>`).join("");
}
renderVideo();
setInterval(()=>{videoIndex=(videoIndex+1)%VIDEOS.length;renderVideo()},7000);

let imamStart=0;
function renderImams(){
  const items=[IMAMS[imamStart%IMAMS.length],IMAMS[(imamStart+1)%IMAMS.length],IMAMS[(imamStart+2)%IMAMS.length]];
  document.getElementById("imamSlider").innerHTML=items.map(imamCard).join("");
}
document.getElementById("imamNext").onclick=()=>{imamStart=(imamStart+1)%IMAMS.length;renderImams()};
document.getElementById("imamPrev").onclick=()=>{imamStart=(imamStart-1+IMAMS.length)%IMAMS.length;renderImams()};
setInterval(()=>{imamStart=(imamStart+1)%IMAMS.length;renderImams()},8000);

function countdown(){
  const target=new Date(NEXT_PROGRAM.date).getTime();
  const diff=Math.max(0,target-Date.now());
  const d=Math.floor(diff/86400000),h=Math.floor(diff%86400000/3600000),m=Math.floor(diff%3600000/60000),s=Math.floor(diff%60000/1000);
  document.getElementById("days").textContent=String(d).padStart(2,"0");
  document.getElementById("hours").textContent=String(h).padStart(2,"0");
  document.getElementById("mins").textContent=String(m).padStart(2,"0");
  document.getElementById("secs").textContent=String(s).padStart(2,"0");
  document.getElementById("countTitle").textContent=NEXT_PROGRAM.title;
  document.getElementById("countText").textContent=NEXT_PROGRAM.text;
}
countdown();setInterval(countdown,1000);

const menu=document.querySelector(".menu"),nav=document.querySelector(".nav nav");
menu.onclick=()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.flexDirection="column";nav.style.position="absolute";nav.style.top="62px";nav.style.left="0";nav.style.right="0";nav.style.padding="20px";nav.style.background="#071f18"};
