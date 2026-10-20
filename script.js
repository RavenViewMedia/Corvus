// ==========================================
// CORVUS v3
// Intelligence Operations Center
// ==========================================

// ---------- CLOCK ----------

function updateClock() {

    const now = new Date();

    const date = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        day: "2-digit",
        month: "short",
        year: "numeric"
    }).format(now).toUpperCase();

    const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZoneName: "short"
    }).formatToParts(now);

    let h = "";
    let m = "";
    let s = "";
    let z = "";

    parts.forEach(part => {

        if (part.type === "hour") h = part.value;
        if (part.type === "minute") m = part.value;
        if (part.type === "second") s = part.value;
        if (part.type === "timeZoneName") z = part.value;

    });

    document.getElementById("date").textContent = date;
    document.getElementById("time").textContent =
        `${h}${m}${s} ${z}`;

}

updateClock();

setInterval(updateClock,1000);


// ---------- NAVIGATION ----------

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(item=>item.classList.remove("active"));

        link.classList.add("active");

    });

});


// ---------- STATUS BAR ----------

const statusBar=document.querySelector(".status-bar");

const statusMessages=[

"● COLLECTION ONLINE",

"● SATELLITES CONNECTED",

"● CYBER MONITORING",

"● WEATHER ACTIVE",

"● MARITIME TRACKING",

"● SECURE SESSION"

];

let statusIndex=0;

function updateStatus(){

    if(!statusBar) return;

    statusBar.innerHTML="";

    statusMessages.forEach((message,index)=>{

        const span=document.createElement("span");

        span.textContent=message;

        span.style.opacity=index===statusIndex ? "1" : ".35";

        statusBar.appendChild(span);

    });

    statusIndex++;

    if(statusIndex>=statusMessages.length){

        statusIndex=0;

    }

}

updateStatus();

setInterval(updateStatus,1200);


// ---------- PANEL GLOW ----------

const panels=document.querySelectorAll(".widget,.map-panel");

panels.forEach(panel=>{

    panel.addEventListener("mousemove",e=>{

        const rect=panel.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        panel.style.background=
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(100,180,255,.14),
        rgba(15,24,38,.95) 55%)`;

    });

    panel.addEventListener("mouseleave",()=>{

        panel.style.background="rgba(15,24,38,.88)";

    });

});


// ---------- RANDOM FEED ----------

const feedItems=[

"NSA publishes cyber advisory.",

"Russian aircraft activity detected.",

"USGS detects moderate earthquake.",

"CISA issues vulnerability bulletin.",

"Typhoon intensifies in Pacific.",

"Chinese naval exercise announced.",

"New NOTAM issued over Middle East.",

"Major shipping disruption reported."

];

const feed=document.querySelector(".widget:last-child ul");

function addFeed(){

    if(!feed) return;

    const li=document.createElement("li");

    const t=new Date();

    const hh=String(t.getHours()).padStart(2,"0");

    const mm=String(t.getMinutes()).padStart(2,"0");

    li.innerHTML=`${hh}${mm} • ${feedItems[Math.floor(Math.random()*feedItems.length)]}`;

    feed.prepend(li);

    while(feed.children.length>8){

        feed.removeChild(feed.lastChild);

    }

}

setInterval(addFeed,7000);


// ---------- FUTURE ----------

// Leaflet Map

// RSS Feeds

// APIs

// AI Briefing

// Alert Engine