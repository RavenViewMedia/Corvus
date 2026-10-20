
function u(){const n=new Date();const d=new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',day:'2-digit',month:'short',year:'numeric'}).format(n).toUpperCase();const t=new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',hour:'2-digit',minute:'2-digit',hour12:false,timeZoneName:'short'}).format(n).replace(':','');document.getElementById('clock').innerHTML=d+'<br>'+t;}
u();setInterval(u,1000);
