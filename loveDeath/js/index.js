const vid = document.getElementById("love-death");

const playbutton = document.querySelector('.playbutton');

playbutton.addEventListener('click', function (e) {
    if(document.querySelector('video').playing){ 
        vid.pause();
        playbutton.classList.remove('hidden');
    }else{
        vid.play(); 
        playbutton.classList.add('hidden');
    }
});

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})