// const canvas = document.getElementById("launchCanvas");
// const ctx = canvas.getContext("2d");

// const launchKey = "launchAnimationTime";
// const now = Date.now();
// const lastLaunch = localStorage.getItem(launchKey);

// // ⏱️ 10 minutes = 600000 ms
// if (lastLaunch && (now - lastLaunch < 10000)) {
//     canvas.remove();
// } else {

// localStorage.setItem(launchKey, now);

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let particles = [];
// let stars = [];

// let rocket = {
//     x: canvas.width / 2,
//     y: canvas.height,
//     speed: 7
// };


// // ⭐ STAR BACKGROUND
// for (let i = 0; i < 80; i++) {
//     stars.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         r: Math.random() * 2
//     });
// }

// function drawStars(){
//     ctx.fillStyle="white";
//     stars.forEach(s=>{
//         ctx.beginPath();
//         ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
//         ctx.fill();
//     })
// }


// // 💥 FIREWORK
// function createFirework(x, y) {
//     for (let i = 0; i < 120; i++) {
//         particles.push({
//             x: x,
//             y: y,
//             angle: Math.random() * Math.PI * 2,
//             speed: Math.random() * 6 + 2,
//             radius: Math.random() * 3 + 1,
//             life: 100
//         });
//     }
// }


// // 🚀 ROCKET
// function drawRocket() {

//     ctx.beginPath();
//     ctx.arc(rocket.x, rocket.y, 4, 0, Math.PI * 2);
//     ctx.fillStyle = "white";
//     ctx.fill();

//     rocket.y -= rocket.speed;

//     if (rocket.y < canvas.height / 2) {
//         createFirework(rocket.x, rocket.y);
//         rocket = null;
//     }
// }


// function animate() {

//     let grad = ctx.createLinearGradient(0,0,0,canvas.height);
//     grad.addColorStop(0,"#020111");
//     grad.addColorStop(1,"#000000");

//     ctx.fillStyle = grad;
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     drawStars();

//     if (rocket) {
//         drawRocket();
//     }

//     particles.forEach((p, i) => {

//         p.x += Math.cos(p.angle) * p.speed;
//         p.y += Math.sin(p.angle) * p.speed;

//         p.speed *= 0.96;
//         p.life--;

//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//         ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
//         ctx.shadowColor = "white";
//         ctx.shadowBlur = 8;
//         ctx.fill();

//         if (p.life <= 0) {
//             particles.splice(i, 1);
//         }

//     });

//     requestAnimationFrame(animate);
// }


// window.onload = () => {

//     animate();

//     setTimeout(() => {

//         canvas.style.opacity = "0";

//         setTimeout(()=>{
//             canvas.remove();
//         },1500);

//     }, 1800);

// };

// }




















const canvas = document.getElementById("launchCanvas");
const ctx = canvas.getContext("2d");

const launchKey = "launchAnimationTime";
const now = Date.now();
const lastLaunch = localStorage.getItem(launchKey);

// 10 seconds
if (lastLaunch && (now - lastLaunch < 100)) {
    canvas.remove();
} else {

localStorage.setItem(launchKey, now);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
let stars = [];

let rocket = {
    x: canvas.width / 2,
    y: canvas.height,
    speed: 7
};

// ⭐ Stars
for (let i = 0; i < 800; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2
    });
}

function drawStars(){
    ctx.fillStyle="white";
    stars.forEach(s=>{
        ctx.beginPath();
        ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        ctx.fill();
    });
}

// 💥 Firework
function createFirework(x, y) {
    for (let i = 0; i < 320; i++) {
        particles.push({
            x,
            y,
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 16 + 2,
            radius: Math.random() * 4 + 1,
            life: 100
        });
    }
}

// 🚀 Rocket
function drawRocket() {
    ctx.beginPath();
    ctx.arc(rocket.x, rocket.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();

    rocket.y -= rocket.speed;

    if (rocket.y < canvas.height / 2.5) {
        createFirework(rocket.x, rocket.y);
        rocket = null;
    }
}

function animate() {

    let grad = ctx.createLinearGradient(0,0,0,canvas.height);
    grad.addColorStop(0,"#020111");
    grad.addColorStop(1,"#000000eb");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawStars();

    if (rocket) drawRocket();

    particles.forEach((p, i) => {

        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;

        p.speed *= 1;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
        ctx.shadowColor = "white";
        ctx.shadowBlur = 8;
        ctx.fill();

        if (p.life <= 0) particles.splice(i, 1);

    });

    requestAnimationFrame(animate);
}

// 🚀 Direct start (no delay)
animate();

setTimeout(() => {
    canvas.style.opacity = "0";
    setTimeout(()=> canvas.remove(), 400);
}, 1800);

}