function toggle() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " open";
      document.getElementById("iconPic").src = "../resources/up.svg";
    } else {
      x.className = "topnav";
      document.getElementById("iconPic").src = "../resources/down.svg";
    }
  }