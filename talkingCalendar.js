const talkingCalendar = function(date) {
  // Your code here
  let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October','November','December'];
  let day = ['1st', '2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th','13th','14th','15th','16th','17th','18th','19th','20th','21th','22th','23th','24th','25th','26th','27th','28th','29th','30th','31th']
  return newDate = month[date.slice(5,7)-1] + " "+ day [date.slice(8,10)-1] + ", " + date.slice (0,4)

//December 2nd, 2017
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
