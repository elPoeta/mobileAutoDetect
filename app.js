const isIphone = () => {
  if (navigator.userAgent.match(/iphone/i)) return true;
  return false;
};

const isIpod = () => {
  if (navigator.userAgent.match(/ipod/i)) return true;
  return false;
};

const isAndroid = () => {
  if (navigator.userAgent.match(/android/i)) return true;
  return false;
};

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
