// ==============================
// CORVUS v0.2
// Live Eastern Military Clock
// ==============================

function updateClock() {

    const now = new Date();

    const eastern = new Date(
        now.toLocaleString("en-US", {
            timeZone: "America/New_York"
        })
    );

    const months = [
        "JAN","FEB","MAR","APR","MAY","JUN",
        "JUL","AUG","SEP","OCT","NOV","DEC"
    ];

    const day = String(eastern.getDate()).padStart(2,"0");
    const month = months[eastern.getMonth()];
    const year = eastern.getFullYear();

    const hours = String(eastern.getHours()).padStart(2,"0");
    const minutes = String(eastern.getMinutes()).padStart(2,"0");
    const seconds = String(eastern.getSeconds()).padStart(2,"0");

    // Determine EST vs EDT
    const tz = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        timeZoneName: "short"
    })
    .formatToParts(now)
    .find(part => part.type === "timeZoneName").value;

    document.getElementById("date").textContent =
        `${day} ${month} ${year}`;

    document.getElementById("time").textContent =
        `${hours}:${minutes}:${seconds} ${tz}`;

}

updateClock();

setInterval(updateClock, 1000);