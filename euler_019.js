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
var currentYear        = 1900;
var currentMonth       = 1;
var currentDay         = 1;
var currentDayOfWeek   = 1;
var daysInCurrentMonth = daysInMonth[currentMonth - 1];
var sumOfSundays       = 0;

while(true) {
    if (currentYear >= 1901) {
        sumOfSundays += ((days[currentDayOfWeek - 1] === 'Sunday' && currentDay === 1) ? 1 : 0);
    }

    if (currentDay === 31 && currentMonth === 12 && currentYear === 2000) {
        break;
    }

    if (currentDay < daysInCurrentMonth) {
        currentDay++;
    } else {
        currentDay = 1;
        if (currentMonth < 12) {
            currentMonth ++;
        } else {
            currentMonth = 1;
            currentYear++;
        }
        if (currentMonth === 2) {
            if (currentYear % 4 === 0) {
                if (currentYear % 400 === 0) {
                    daysInCurrentMonth = daysInMonth[currentMonth - 1] + 1;
                } else if (currentYear % 100 === 0) {
                    daysInCurrentMonth = daysInMonth[currentMonth - 1];
                } else {
                    daysInCurrentMonth = daysInMonth[currentMonth - 1] + 1;
                }
            } else {
                daysInCurrentMonth = daysInMonth[currentMonth - 1];
            }
        } else {
            daysInCurrentMonth = daysInMonth[currentMonth - 1];
        }
    }
    currentDayOfWeek = currentDayOfWeek < 7 ? (currentDayOfWeek + 1) : 1;
}

// TODO: return your answer for this prompt.
return sumOfSundays;
