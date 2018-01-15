const OSC_HAMANAKO = require("./osc_hamanako_2018");

console.log(OSC_HAMANAKO.getTimetable());
console.log(OSC_HAMANAKO.getNextSession(new Date()));
console.log(OSC_HAMANAKO.getNextSession(new Date("2018-02-11 11:15")));
console.log(OSC_HAMANAKO.getNextSession(new Date("2018-02-11 11:30")));
console.log(OSC_HAMANAKO.getNextSession(new Date("2018-02-11 11:46")));
console.log(OSC_HAMANAKO.getNextSession(new Date("2018-02-11 12:46")));
console.log(OSC_HAMANAKO.getNextSession(new Date("2018-02-11 19:02")));