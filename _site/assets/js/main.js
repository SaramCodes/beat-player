//selecting the intro button below

var btn = document.querySelector('.intro-btn');
var intro = document.querySelector('.intro');  
var introContain = document.querySelector('.intro-contain');
var key = document.querySelector('.key');

var aboutContain = document.createElement("div");
aboutContain.classList.add('about-contain');
aboutContain.innerHTML = `
<div class="mugshot"></div>
<p>I'm Saram. I'm a full stack web developer. This simple webapp was made in my free time. Thanks for using!💕</p>
<br>
<p> Want to know more about me 😄? Visit my <a href="https://saramcodes.github.io" target="_blank">Portfolio</a></p>
<br>
<p>Made with 💖, Javascript, Sass, Jekyll and good old HTML</p>
`;


var header = document.createElement("div");
header.classList.add('header');
header.innerHTML = `
        <div class="head-title">Beat Player ✨🎶</div>
        <div class="head-info">Click for more info 👉</div>
`


function quitIntroScreen(){
    intro.classList.replace('intro-enter','intro-leave')
    introContain.style.height = '-0%';
}

function addMusicKeys(){
    var musicDiv = document.createElement('div');
    musicDiv.classList.add('music-div');
    document.body.appendChild(musicDiv);
    musicDiv.innerHTML = `        
        <div class="key" data-key="65">
        A
        <div class="key-thumb">kick</div>
        </div>
        <div class="key" data-key="83">
        S
        <div class="key-thumb">snare</div>
        </div>
        <div class="key" data-key="68">
        D
        <div class="key-thumb">clap</div>
        </div>
        <div class="key" data-key="70">
        F
        <div class="key-thumb">hi-hat</div>
        </div>
        <div class="key" data-key="71">
        G
        <div class="key-thumb">cymbal</div>
        </div>
        <div class="key" data-key="72">
        H
        <div class="key-thumb">hat</div>
        </div>
        <div class="key" data-key="74">
        J
        <div class="key-thumb">tom</div>
        </div>
        <div class="key" data-key="75">
        K
        <div class="key-thumb">percussion</div>
        </div>
        <div class="key" data-key="76">
        L
        <div class="key-thumb">bass</div>
        </div>
`;
    document.body.appendChild(aboutContain);
    document.body.appendChild(header);


}



function showAbout(){
    var musicWali = document.querySelector('.music-div');
    var aboutWali = document.querySelector('.about-contain');
    var infoWali = document.querySelector('.head-info');
    console.log('I was called')

    if(musicWali.style.left === '0%'|| aboutWali.style.left === '200%' || infoWali.innerHTML === "Click for more info 👉" ){
        musicWali.style.left = '-200%';
        aboutWali.style.left = '50%';
        infoWali.innerHTML = "Go Back 👈";
    } else{
        musicWali.style.left = '0%';
        aboutWali.style.left = '200%';
        infoWali.innerHTML = "Click for more info 👉";

    }
    


}



function deleteIntroScreen(){ 
    introContain.remove();
    intro.remove();
    addMusicKeys();
    window.addEventListener('keydown', addMusic);
    var key = document.querySelectorAll('.key');
    key.forEach(function (key){key.addEventListener('transitionend', keyUp)});
    key.forEach(function (key){key.addEventListener('touchstart', touchMusic)});

    var headInfo = document.querySelector('.head-info');
    headInfo.addEventListener('click', showAbout);
}


function touchMusic(e){
    var theKey = this.dataset.key;
    var music = document.querySelector(`audio[data-key="${theKey}"]`);
    if(!music) return;
    music.currentTime = 0;
    music.play();
    this.classList.add('wave');
}

function addMusic(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play()
    key.classList.add('wave');
}


btn.addEventListener('click', quitIntroScreen);
introContain.addEventListener('transitionend', deleteIntroScreen);






function keyUp(){
    this.classList.remove('wave');
}








