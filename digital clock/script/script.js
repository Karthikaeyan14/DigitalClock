document.addEventListener("DOMContentLoaded", function() {
    const clock = document.querySelector('.clock');

    function runClock() {
        var time = new Date();
        var hrs = time.getHours();
        var min = time.getMinutes();
        var sec = time.getSeconds();
        var txt = hrs >= 12 ? "PM" : "AM";

        if (hrs > 12) {
            hrs = hrs - 12;
        } else if (hrs === 0) {
            hrs = 12;
        }

        hrs = hrs < 10 ? '0' + hrs : hrs;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;

        //console.log(`${hrs}:${min}:${sec} ${txt}`);

        clock.innerHTML = `${hrs}:${min}:${sec} ${txt}`;
    }

    runClock();
    setInterval(runClock, 1000);
});

