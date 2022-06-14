export const checkScreen = () => {
  if (window.matchMedia("(min-width: 800px)").matches) {
    return true;
  } else {
    return false;
  }
};
