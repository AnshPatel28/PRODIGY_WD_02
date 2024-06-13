function Stopwatch(elem, lapBox) {
    var time = 0;
    var offset;
    var interval;

    function update() {
        if (this.isOn) {
            time += delta();
        }
        elem.textContent = timeFormatter(time);
    }

    function delta() {
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    }

    function timeFormatter(time) {
        var date = new Date(time);
        var minutes = date.getUTCMinutes().toString();
        var seconds = date.getUTCSeconds().toString();
        var milliseconds = date.getUTCMilliseconds().toString();

        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }

        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }

        while (milliseconds.length < 3) {
            milliseconds = '0' + milliseconds;
        }

        return `${minutes}:${seconds}.${milliseconds}`;
    }

    this.start = function() {
        if (!this.isOn) {
            interval = setInterval(update.bind(this), 10);
            offset = Date.now();
            this.isOn = true;
        }
    };

    this.stop = function() {
        if (this.isOn) {
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };

    this.reset = function() {
        this.stop();
        time = 0;
        elem.textContent = '00:00.000';
        lapBox.innerHTML = '';
    };

    this.lap = function() {
        if (this.isOn) {
            var lapTime = document.createElement("li");
            lapTime.textContent = elem.textContent;
            lapTime.classList.add('lapItem');
            lapBox.appendChild(lapTime);
        }
    };

    this.isOn = false;
}
