anime({
    targets: 'div.box',
    translateY: [
      { value: 150, duration: 500 },
      { value: 0, duration: 500 }
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine',
    },
    delay: function(elements, index, totalElements){
        return index * 1000;
    },
    loop:true
  });