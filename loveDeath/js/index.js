const vid = document.getElementById("love-death");

const playbutton = document.querySelector('.playbutton');

playbutton.addEventListener('click', function (e) {
    if(document.querySelector('video').playing){ 
        vid.pause();
        playbutton.classList.remove('hidden');
        $("#social-media-links").fadeIn();
    }else{
        vid.play(); 
        playbutton.classList.add('hidden');
        $("#social-media-links").fadeOut();
    }
});

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})

function showLinks() {
    $("#social-media-links").fadeIn();
}