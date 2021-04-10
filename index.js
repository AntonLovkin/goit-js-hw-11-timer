class CountdownTimer {
  constructor(selector, targetDate) {
    this.element = document.querySelector(selector);
    this.targetDate = targetDate;
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
    this.element.innerHTML = `
    ${this.getDays()}
    :${this.getHours()}
    :${this.getMinutes()}
    :${this.getSeconds()}
    `;
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

const targetDate = new Date('Jul 17, 2021')
const timer = new CountdownTimer('.test', targetDate - new Date);
timer.init()

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });


/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
const secs = Math.floor((time % (1000 * 60)) / 1000);