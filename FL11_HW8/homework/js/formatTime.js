function formatTime(time) {
    const minInDay = 1440;
    const minInHour = 60;
    let days = Math.floor(time / minInDay);
    let hours = Math.floor((time % minInDay) / minInHour);
    let minutes = Math.floor(time % minInHour);
    return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s).';
}

console.log(formatTime(5678));