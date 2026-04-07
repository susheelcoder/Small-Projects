// mobile 3dot
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = navMenu.querySelectorAll("a");

// menu button click
menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("active");
});

// menu ke link par click → menu close
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// menu ke andar click par page close na ho
navMenu.addEventListener("click", (e) => {
    e.stopPropagation();
});

// page par kahi bhi click → menu close
document.addEventListener("click", () => {
    navMenu.classList.remove("active");
});

// ------------------------------------------------//


// youtab video play 
let players = [];

function onYouTubeIframeAPIReady() {

    const videos = document.querySelectorAll(".yt-video");

    videos.forEach((video, i) => {

        video.id = "video" + i;

        players[i] = new YT.Player(video.id);

    });

}


document.addEventListener("click", function (e) {

    if (e.target.classList.contains("sound-btn")) {

        const box = e.target.closest(".insta-box");
        const iframe = box.querySelector(".yt-video");
        const index = iframe.id.replace("video", "");

        const player = players[index];

        if (player.isMuted()) {
            player.unMute();
            e.target.innerHTML = "🔊";
        } else {
            player.mute();
            e.target.innerHTML = "🔇";
        }

    }

});

// ------------------------------------------------------------------------//