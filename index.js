
class CountdownTimer {
  constructor(selector, targetDate) {
    this.element = document.querySelector(selector);
    this.targetDate = targetDate;

    this.days = document.querySelector('[data-value="days"]');
    this.hours = document.querySelector('[data-value="hours"]');
    this.minutes = document.querySelector('[data-value="mins"]');
    this.seconds = document.querySelector('[data-value="secs"]');
  }

  getDays() {
    const days = Math.floor(this.targetDate / (1000 * 60 * 60 * 24));
    return transformValues(days);
  }

  getHours() {
    const hours = Math.floor((this.targetDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return transformValues(hours);
  }

  getMinutes() {
    const mins = Math.floor((this.targetDate % (1000 * 60 * 60)) / (1000 * 60));
    return transformValues(mins); 
  }

  getSeconds() {
   const secs = Math.floor((this.targetDate % (1000 * 60)) / 1000);
   return transformValues(secs);
  }

  render() {
    this.days.textContent = `${this.getDays()}`;
    this.hours.textContent = `${this.getHours()}`;
    this.minutes.textContent = `${this.getMinutes()}`;
    this.seconds.textContent = `${this.getSeconds()}`;
  }

  init() {
    const interval = setInterval(() => {
      this.targetDate -= 1000;

      if (this.targetDate <= 0) {
        this.targetDate = 0;
        clearInterval(interval);
      }
      this.render()
    }, 1000);
  }
}

function transformValues(value) {
  return String(value).padStart(2, '0')
}

const targetDate = new Date('May 01, 2021');
const timerToDate = targetDate - new Date;
const timer = new CountdownTimer('#timer-1',timerToDate);

timer.init()

