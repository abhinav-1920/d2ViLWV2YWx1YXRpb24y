/*
* Write a function that will take a date and compare with today date and return text:
* - Today: same year, same month, same date
* - Yesterday: date = today - 1
* - This week: today - 7 < date < today - 1
* - Last week: today - 14 < date <= today - 7
* - This month: same year, same month, date <= today - 14
* - Last month: month = current month - 1
* - This year: same year
* - last year: year = current year - 1
* - Long time ago: everything else
*
* Lastly, please write a unit test for calculateRelativeDate function
* */

const calculateRelativeDate = (inputDate) => {
  const date = new Date(inputDate);
  const todayDate = new Date();
  const timeDiffernce = todayDate.getTime() - date.getTime();
  console.log(timeDiffernce);
  const dayDifference = timeDiffernce / (1000 * 60 * 60 * 24);
console.log(dayDifference);
  if (date.toDateString() === todayDate.toDateString()) {
    return "Today";
  } else if (dayDifference === 1) {
    console.log(dayDifference);
    return "Yesterday";
  } else if (dayDifference > 1 && dayDifference < 7) {
    return "This week";
  } else if (dayDifference >= 7 && dayDifference < 14) {
    return "Last week";
  } else if (date.getFullYear() === todayDate.getFullYear() && date.getMonth() === todayDate.getMonth() && date.getDate() <= todayDate.getDate() - 14) {
    return "This month";
  } else if (date.getMonth() === todayDate.getMonth() - 1) {
    return 'Last month';
  } else if (date.getFullYear() === todayDate.getFullYear()) {
    return "This year";
  } else if (date.getFullYear() === todayDate.getFullYear() - 1) {
    return "Last year";
  } else {
    return "Long time ago";
  }
};
const View = {
  init: () => {
    document.getElementById('relative-date-btn').addEventListener('click', () => {
      const msgElement = document.getElementById('relative-date-msg');
      const inputDateElem = document.getElementById('relative-date-input');
      console.log(inputDateElem.value);
      msgElement.textContent = calculateRelativeDate(inputDateElem.value);
    });
  }
};

document.addEventListener('DOMContentLoaded', View.init);
export {calculateRelativeDate};
