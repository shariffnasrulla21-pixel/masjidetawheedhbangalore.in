/* Masjid-e-Tawheed: live prayer countdown
   Update these times whenever the Masjid publishes a new timetable. */
const prayerTimes = [
  {name:"Fajr", time:"05:30"},
  {name:"Zuhr", time:"13:15"},
  {name:"Asr", time:"16:15"},
  {name:"Maghrib", time:"18:30"},
  {name:"Isha", time:"20:30"}
];

const grid=document.getElementById("prayerGrid");
const nextName=document.getElementById("nextPrayerName");
const countdown=document.getElementById("countdown");

function renderPrayerCards(){
  grid.innerHTML=prayerTimes.map((p,i)=>`
    <article class="prayer-card" id="prayer-${i}">
      <h3>${p.name}</h3><p>${formatTime(p.time)}</p>
    </article>`).join("");
}
function formatTime(t){
  const [h,m]=t.split(":").map(Number);
  const suffix=h>=12?"PM":"AM";
  const hh=((h+11)%12)+1;
  return `${String(hh).padStart(2,"0")}:${String(m).padStart(2,"0")} ${suffix}`;
}
function getNextPrayer(){
  const now=new Date();
  for(let i=0;i<prayerTimes.length;i++){
    const [h,m]=prayerTimes[i].time.split(":").map(Number);
    const d=new Date(now);
    d.setHours(h,m,0,0);
    if(d>now) return {index:i,date:d};
  }
  const [h,m]=prayerTimes[0].time.split(":").map(Number);
  const d=new Date(now);
  d.setDate(d.getDate()+1); d.setHours(h,m,0,0);
  return {index:0,date:d};
}
function updateCountdown(){
  const next=getNextPrayer();
  const now=new Date();
  let seconds=Math.max(0,Math.floor((next.date-now)/1000));
  const h=Math.floor(seconds/3600); seconds%=3600;
  const m=Math.floor(seconds/60); const s=seconds%60;
  nextName.textContent=prayerTimes[next.index].name;
  countdown.textContent=[h,m,s].map((x,i)=>String(x).padStart(i===0?2:2,"0")).join(":");
  document.querySelectorAll(".prayer-card").forEach(x=>x.classList.remove("next"));
  const card=document.getElementById(`prayer-${next.index}`);
  if(card) card.classList.add("next");
}
renderPrayerCards();
updateCountdown();
setInterval(updateCountdown,1000);
