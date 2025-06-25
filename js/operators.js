if (1 === "1") {
  console.log("Holy smokes it's true!!");
} else {
  console.log("You wish...");
}

var currentAccountBalance = 300;
var purchase = 74.99;
var freeLavaLampVoucher = true;

if (purchase <= currentAccountBalance) {
  console.log("Lava lamps for days.....");
} else if (freeLavaLampVoucher) {
  console.log("Free stuff rocks!!");
} else {
  console.log("You broke bruh.....");
}

var skaterOne = 9.5;
var skaterTwo = 9;
var skaterThree = 9;
var isJackedUp = true;

/* if (skaterTwo < skaterThree && skaterTwo <= skaterOne && skaterOne < 100) {
  console.log("Move skater2 into next round");
} else if (skaterThree < skaterTwo || skaterThree === skaterTwo) {
  console.log("skater3 is steppin up their game!");
} */

if (skaterTwo > skaterThree && skaterTwo <= skaterOne && skaterOne < 100) {
  console.log("Move skater2 into next round");
} else if (
  skaterThree > skaterTwo ||
  (skaterThree === skaterTwo && skaterTwo < skaterOne && !isJackedUp)
) {
  console.log("skater3 is steppin up their game!");
} else if (skaterThree > 5 && isJackedUp) {
  console.log("skater3 takes home the Gold!");
}

var currentLightColor = {
  go: "Green",
  slow: "Yellow",
  stop: "Red",
};

var Green = 3;
var Yellow = 8;
var Red = 12;

console.log("traffic Light: ", currentLightColor);
