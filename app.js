const isAndroid = () => (navigator.userAgent.match(/android/i)) ? true : false;

const isIphone = () => (navigator.userAgent.match(/iphone/i)) ? true : false;

const isIpad = () => (navigator.userAgent.match(/ipad/i)) ? true : false;

const isIpod = () => (navigator.userAgent.match(/ipod/i)) ? true : false;


const isMobile = () => {
  if (isAndroid()) return true;
  else if (isIphone()) return true;
  else if (isIpad()) return true;
  else if (isIpod()) return true;
  return false;
};

window.addEventListener("load", e => {
  if (isMobile()) {
    // window.location = "https://www.google.com";
    window.location = "./mobile.html";
  }
});
