var timer = document.querySelector('.timer');
var toggleBtn = document.querySelector('.toggle');
var resetBtn = document.querySelector('.reset');
var lapBtn = document.querySelector('.lap');
var lapBox = document.querySelector('.lap_box');

var watch = new Stopwatch(timer, lapBox);

toggleBtn.addEventListener('click', function() {
    if (watch.isOn) {
        watch.stop();
        toggleBtn.textContent = 'Start';
        toggleBtn.classList.remove("on");
    } else {
        watch.start();
        toggleBtn.textContent = 'Stop';
        toggleBtn.classList.add("on");
    }
});

resetBtn.addEventListener('click', function() {
    watch.reset();
    toggleBtn.textContent = 'Start';
    toggleBtn.classList.remove("on");
});

lapBtn.addEventListener('click', function() {
    watch.lap();
});
