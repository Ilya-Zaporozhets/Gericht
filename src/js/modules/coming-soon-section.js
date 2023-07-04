// class CountdownTimer {
//   constructor({ selector, targetTime }) {
//     this.targetTime = targetTime;
//     this.selector = document.querySelector(`${selector}`);
//     this.days = this.selector.querySelector('span[data-value="days"]');
//     this.hours = this.selector.querySelector('span[data-value="hours"]');
//     this.mins = this.selector.querySelector('span[data-value="mins"]');
//     this.secs = this.selector.querySelector('span[data-value="secs"]');
//     this.runTimer();
//   }

//   runTimer() {
//     interval: null;

//     setTimeout(() => {
//       this.timer();

//       this.interval = setInterval(() => {
//         this.timer();
//       }, 1000);
//     });
//   }

//   timer() {
//     const currentTime = new Date();
//     const differenceTime = this.targetTime - currentTime;
//     this.dataTime(differenceTime);
//   }

//   dataTime(time) {
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     this.days.textContent = days;

//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     this.hours.textContent = hours;

//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     this.mins.textContent = mins;

//     const secs = Math.floor((time % (1000 * 60)) / 1000);
//     this.secs.textContent = secs;

//     if (days == 0 && hours == 0 && mins == 0 && secs == 0) {
//       this.stopInterval();
//     }
//   }

//   stopInterval() {
//     clearInterval(this.interval);
//   }
// }

// const counterDown = new CountdownTimer({
//   selector: "#timer-1",
//   targetTime: new Date("Octovber 24, 2024 10:35:00").getTime(),
// });


class CountdownTimer {
  constructor({ selector, targetTime }) {
    this.targetTime = targetTime;
    this.selector = document.querySelector(`${selector}`);
    this.days = this.selector ? this.selector.querySelector('span[data-value="days"]') : null;
    this.hours = this.selector ? this.selector.querySelector('span[data-value="hours"]') : null;
    this.mins = this.selector ? this.selector.querySelector('span[data-value="mins"]') : null;
    this.secs = this.selector ? this.selector.querySelector('span[data-value="secs"]') : null;

    if (this.selector && this.days && this.hours && this.mins && this.secs) {
      this.runTimer();
    }
  }

  runTimer() {
    setTimeout(() => {
      this.timer();

      this.interval = setInterval(() => {
        this.timer();
      }, 1000);
    });
  }

  timer() {
    const currentTime = new Date();
    const differenceTime = this.targetTime - currentTime;
    this.dataTime(differenceTime);
  }

  dataTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.days.textContent = days;

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.hours.textContent = hours;

    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    this.mins.textContent = mins;

    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.secs.textContent = secs;

    if (days == 0 && hours == 0 && mins == 0 && secs == 0) {
      this.stopInterval();
    }
  }

  stopInterval() {
    clearInterval(this.interval);
  }
}

const counterDown = new CountdownTimer({
  selector: "#timer-1",
  targetTime: new Date("Octovber 24, 2024 10:35:00").getTime(),
});
