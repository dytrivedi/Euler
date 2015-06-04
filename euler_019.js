// Problem 19
// ==========
// 
// You are given the following information, but you may prefer to do some
// research for yourself.
// 
//   * 1 Jan 1900 was a Monday.
//   * Thirty days has September,
//     April, June and November.
//     All the rest have thirty-one,
//     Saving February alone,
//     Which has twenty-eight, rain or shine.
//     And on leap years, twenty-nine.
//   * A leap year occurs on any year evenly divisible by 4, but not on a
//     century unless it is divisible by 400.
// 
// How many Sundays fell on the first of the month during the twentieth
// century (1 Jan 1901 to 31 Dec 2000)?

var days        = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var currentDayOfWeek   = 1;
var sumOfSundays       = 0;

for (var year = 1900; year <= 2000; year++) {
    for (var month = 1; month <= 12; month++) {
        var daysInCurrentMonth;
        if (month === 2) {
            if (year % 4 === 0) {
                if (year % 400 === 0) {
                    daysInCurrentMonth = daysInMonth[month - 1] + 1;
                } else if (year % 100 === 0) {
                    daysInCurrentMonth = daysInMonth[month - 1];
                } else {
                    daysInCurrentMonth = daysInMonth[month - 1] + 1;
                }
            } else {
                daysInCurrentMonth = daysInMonth[month - 1];
            }
        } else {
            daysInCurrentMonth = daysInMonth[month - 1];
        }
        for (var day = 1; day <= daysInCurrentMonth; day++) {
            if (year >= 1901) {
                sumOfSundays += ((days[currentDayOfWeek - 1] === 'Sunday' && day === 1) ? 1 : 0);
            }
            currentDayOfWeek = currentDayOfWeek < 7 ? (currentDayOfWeek + 1) : 1;
        }
    }
}
// TODO: return your answer for this prompt.
return sumOfSundays;
