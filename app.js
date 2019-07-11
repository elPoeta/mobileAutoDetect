const deviceAndroid = "android";
const deviceIphone = "iphone";
const deviceIpod = "ipod";

//Initialize our user agent string to lower case.
const userAgent = navigator.userAgent.toLowerCase();

//**************************
// Detects if the current device is an iPhone.
const isIphone = () => {
  if (userAgent.search(deviceIphone) > -1) return true;
  return false;
};

//**************************
// Detects if the current device is an iPod Touch.
const isIpod = () => {
  if (userAgent.search(deviceIpod) > -1) return true;
  return false;
};

//**************************
// Detects if the current device is an Android.
const isAndroid = () => {
  if (userAgent.search(deviceAndroid) > -1) return true;
  return false;
};

//**************************
// Detects if the current device is a mobile device.
const isMobile = () => {
  if (isAndroid()) return true;
  else if (isIphone()) return true;
  else if (isIpod()) return true;

  return false;
};

window.addEventListener("load", e => {
  if (isMobile()) {
    window.location = "https://www.google.com";
  }
});
