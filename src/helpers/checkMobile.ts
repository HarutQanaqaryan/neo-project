const devices = new RegExp(
  "Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini",
  "i"
);

export const checkScreen = () => {
  if (devices.test(navigator.userAgent)) {
    return false;
  } else {
    return true;
  }
};
