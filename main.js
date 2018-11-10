var playPause = anime({
    targets: 'div.box',
    translateY: [
      { value: 150, duration: 400 },
      { value: 0, duration: 500 }
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine',
    },
    delay: function(elements, index, totalElements){
        return index * 1000;
    },
    autoplay:false,
    loop:true
  });

  document.querySelector('#boxes .play').onclick = playPause.play;
  document.querySelector('#boxes .pause').onclick = playPause.pause;