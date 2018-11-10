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

  var enlargeThisBox = anime ({
    targets: '#enlargebox',
    translateX: {
      value: 700,
      duration: 800
    },
    rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
      },
      scale: {
        value: 2,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
      },
      delay: 250,
      autoplay: true,
    loop:true
  });

  function enlargeBox() {
    enlargeThisBox.play;
  }


  document.querySelector('#boxes .play').onclick = playPause.play;
  document.querySelector('#boxes .pause').onclick = playPause.pause;