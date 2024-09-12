// document.getElementById('btn-play').addEventListener('click',function(){
//     const homeSection =document.getElementById('home-section');
//     homeSection.classList.add('hidden')
//     const playGroundSection =document.getElementById('play-ground');
//     // console.log(playGroundSection.classList)
//     playGroundSection.classList.remove('hidden');
// })

function play(){
    hideElementById('home-section');
    showElementById('play-ground');
}