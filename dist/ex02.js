"use strict";
// Exercise: Create an enum `DaysOfWeek` with values for each day of the week.
// Then, write a function `isWeekend` that accepts a value from the enum and returns `true` if it's Saturday or Sunday, and `false` otherwise.
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek["Sunday"] = "Sunday";
    DaysOfWeek["Monday"] = "Monday";
    DaysOfWeek["Tuesday"] = "Tuesday";
    DaysOfWeek["Wednesday"] = "Wednesday";
    DaysOfWeek["Thursday"] = "Thursday";
    DaysOfWeek["Friday"] = "Friday";
    DaysOfWeek["Saturday"] = "Saturday";
})(DaysOfWeek || (DaysOfWeek = {}));
function isWeekend(day) {
    return day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday;
}
console.log(isWeekend(DaysOfWeek.Saturday));
console.log(isWeekend(DaysOfWeek.Wednesday));
// Expected output:
// true
// false
