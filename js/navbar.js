class Navi extends HTMLElement {
  constructor(path) {
      super();
      this.path = path;
      console.log(path)
  }
  connectedCallback(path) {
      console.log(path);
      this.innerHTML = `
    <div class="topnav" id="navbar">
      <div class="title">
        <a class="Logo" href="index.html"><img alt="Debate Club Logo" /></a>
      </div>
      <div class="pages">
        <a href="index.html" id="home" class="inactive"
          ><img src="../resources/navbar/home_icon.svg" alt="Home Icon"> HOME</a
        >
        <a href="upcoming.html" id="upcoming" class="inactive"
          ><img src="../resources/navbar/upcoming_icon.svg" alt="Upcoming Icon"> UPCOMING</a
        >
        <a href="team.html" id="team" class="inactive"
          ><img src="../resources/navbar/team_icon.svg" alt="Team Icon"> THE TEAM</a
        >
        <a href="about.html" id="archive" class="inactive"
          ><img src="../resources/navbar/archive_icon.svg" alt="Archive Icon"> ARCHIVE</a
        >
      </div>
      <div class="right">
        <a href="javascript:void(0)" onclick="toggle()" class="arrow"
          ><img id="iconPic" src="../resources/navbar/down.svg"
        /></a>
      </div>
    </div>
      `;
  }
}

function active(id){
  document.getElementById(id).classList.add("active");
  document.getElementById(id).classList.remove("inactive");
}

customElements.define("na-vi", Navi);

function toggle() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " open";
      document.getElementById("iconPic").src = "../resources/navbar/up.svg";
    } else {
      x.className = "topnav";
      document.getElementById("iconPic").src = "../resources/navbar/down.svg";
    }
  }