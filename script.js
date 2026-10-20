// ===============================
// CORVUS v1.0
// Script
// ===============================

// ---------- CLOCK ----------
function updateClock() {
    const now = new Date();

    const date = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        day: "2-digit",
        month: "short",
        year: "numeric"
    }).format(now).toUpperCase();

    const timeParts = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZoneName: "short"
    }).formatToParts(now);

    let hour = "";
    let minute = "";
    let zone = "";

    timeParts.forEach(part => {
        if (part.type === "hour") hour = part.value;
        if (part.type === "minute") minute = part.value;
        if (part.type === "timeZoneName") zone = part.value;
    });

    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");

    if (dateElement) dateElement.textContent = date;
    if (timeElement) timeElement.textContent = `${hour}${minute} ${zone}`;
}

updateClock();
setInterval(updateClock, 1000);

// ---------- SIDEBAR ----------
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});

// ---------- STATUS RIBBON ----------

const ribbon = document.querySelector(".status-ribbon");

const ribbonMessages = [

    "● COLLECTION ONLINE",

    "● SATELLITE READY",

    "● CYBER MONITORING",

    "● WEATHER FEEDS",

    "● SECURE SESSION"

];

let ribbonIndex = 0;

function animateRibbon() {

    if (!ribbon) return;

    ribbon.innerHTML = "";

    ribbonMessages.forEach((message, index) => {

        const span = document.createElement("span");

        span.textContent = message;

        span.style.opacity = index === ribbonIndex ? "1" : "0.45";

        ribbon.appendChild(span);

    });

    ribbonIndex++;

    if (ribbonIndex >= ribbonMessages.length) {

        ribbonIndex = 0;

    }

}

animateRibbon();

setInterval(animateRibbon, 1500);

// ---------- FUTURE PLACEHOLDERS ----------

// World Map
// Live Feed
// Raven Alerts
// Threat Level
// API Integrations