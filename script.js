window.addEventListener('mousemove', function (e) {
    [.7, .9, .8, .5, .25, .6, .4, .3, .2].forEach(function (i) {
      var j = (1 - i) * 50;
      var elem = document.createElement('div');
      var size = Math.ceil(Math.random() * 10 * i) + 'px';
      var precision = 50; // 2 decimals
      var randomnum = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1*precision);   
      var rOpacity = randomnum/10;
      var rSize = randomnum/120;
      elem.style.position = 'fixed';
      elem.classList.add('star-five')
      elem.style.zIndex = 6;
      elem.style.transform = `rotate(35deg) scale(${rSize})`
      elem.style.top = e.pageY - window.scrollY + Math.round(Math.random() * j - j / 2) - 100 + 'px';
      elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) - 100 + 'px';
      elem.style.opacity = rOpacity;
      elem.style.pointerEvents = 'none';
      document.body.appendChild(elem);
      window.setTimeout(function () {
        document.body.removeChild(elem);
      }, Math.round(Math.random() * i * 1000));
    }); 
  }, false);