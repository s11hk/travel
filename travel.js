const character = document.getElementById("character");
const tree = document.getElementById("tree");
const castle = document.getElementById("castle");
const ruin = document.getElementById("ruin");
const date=(document.getElementById("date").innerHTML=new Date().getFullYear());

tree.addEventListener("click", (e) => {
    character.classList.add("animate1");
    setTimeout(function(){
        alert("Welcome to History of Japanese Sengoku!");
        character.classList.remove("animate1");
        window.location.href = 'travel2.html';
}, 3700);
});

castle.addEventListener("click", (e) => {
    character.classList.add("animate2");
    setTimeout(function(){
        alert("Welcome to Honnō-ji Temple!");
        character.classList.remove("animate2");
        window.location.href = 'travel3.html';
}, 3700);
});
ruin.addEventListener("click", (e) => {
    character.classList.add("animate3");
    setTimeout(function(){
        alert("Welcome to Tomb of Akechi Mitsuhide!");
        character.classList.remove("animate3");
        window.location.href = 'travel4.html';
}, 3700);
});

document.addEventListener('DOMContentLoaded', function() {
    var homemusic = document.getElementById('homemusic');
    homemusic.volume = 0.3;
    homemusic.play();
});