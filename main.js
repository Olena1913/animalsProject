//навігація по сайту
document.addEventListener('DOMContentLoaded', function(){
    const links = document.querySelectorAll('.nav-link');
    
    for (let i = 0; i<links.length; i++){
        links[i].addEventListener('click', function(event) {
            event.preventDefault();

            const blockID = event.target.getAttribute('href').substr(1);
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    }
});
//відкрити відео
const videoCare = document.querySelectorAll('.video');
for(video of videoCare) {
    video.addEventListener('click', function(){
        const videoOpen = this.closest('.care-content-video'); 
        const videoPicture = videoOpen.querySelector('.video-picture');
        const careVideo = videoOpen.querySelector('.video-object');
        const videoPlay = videoOpen.querySelector('.btnvideo');
        if (careVideo.paused) {
            videoPicture.style.display='none';
            videoPlay.style.display='none';
            careVideo.play();
        } else {
            videoPicture.style.display='block';
            videoPlay.style.display='block';
            careVideo.pause();
            }
    });
};

//для однієї кнопки коли використовуємо id
// const recentlyDots = document.querySelector('#recently');
// const recentlyMore = document.querySelector('#recent-more');
// const showMore = document.querySelector('#show-more');


// showMore.addEventListener('click', function(){
//     if(recentlyDots.style.display === "none") {
//         recentlyDots.style.display="inline";
//         showMore.innerHTML="Read more+";
//         recentlyMore.style.display = "none";
//     }else {
//         recentlyDots.style.display="none";
//         showMore.innerHTML="Pull up";
//         recentlyMore.style.display = "inline";
//     }
// })

//для багатьох кнопок відкрити ще текст який схований
const showBtns = document.querySelectorAll('.more');
for(more of showBtns) {
    more.addEventListener('click', function() {
        const card = this.closest('.recent-card');
        const recentlyDots = card.querySelector('.recently');
        const recentlyMore = card.querySelector('.recent-more');

        if(recentlyDots.style.display === "none") {
            recentlyDots.style.display="inline";
            recentlyMore.style.display = "none";
            this.textContent = 'Read more+'
        }else {
            recentlyDots.style.display="none";
            recentlyMore.style.display = "inline";
            this.textContent = 'Pull up'
            }
    });
}