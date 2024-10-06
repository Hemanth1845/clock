function updateclock(){

    const date = new Date();
    let hours = date.getHours();
    const meridian = hours >= 12 ? "PM":"AM";
    hours = hours%12 || 12;
    hours.toString().padStart(2,0);
    const minutes = date.getMinutes().toString().padStart(2,0);
    const seconds = date.getSeconds().toString().padStart(2,0);
    const timestring = `${hours}:${minutes}:${seconds}:${meridian}`;
    document.getElementById("clock").textContent= timestring;
}

updateclock();
setInterval(updateclock,1000);