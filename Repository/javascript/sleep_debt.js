let getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 7;
  } else if (day === "wednesday") {
    return 5;
  } else if (day === "thursday") {
    return 3;
  } else if (day === "friday") {
    return 7;
  } else if (day === "saturday") {
    return 10;
  } else if (day === "sunday") {
    return 5;
  } else {
    return "WTF ";
  }
};

let getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");
console.log(getActualSleepHours());

let getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours * 7;
};
console.log(getIdealSleepHours());

let calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("got more sleep than needed");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("sleep it off");
  } else {
    console.log("dead");
  }
};

calculateSleepDebt();
