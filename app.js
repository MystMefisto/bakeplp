//Variables
let prevScrollpos = window.pageYOffset;

// EventListeners

//Functions

//Ocultar
  window.setTimeout(function () {
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav-bar").style.top = "0";
      } else {
        document.getElementById("nav-bar").style.top = "-15%";
      }
      prevScrollpos = currentScrollPos;
    }
  }, 500);