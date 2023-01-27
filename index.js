    function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //console.log(audio)
    if(!audio) {
      return // stop the function 
    }
    // rewind to start
    audio.currentTime = 0;
    audio.play();
    //console.log(key)
    
    key.classList.add('playing');
    key.classList.remove('playing');
    key.classList.toggle('playing');

  }


  const keys = document.querySelectorAll('.key');

  function removeTransition(e) {
    if(e.propertyName !== 'transform')
    return //skip it if is not transitionform
    this.classList.remove('playing');
  }

  keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
  });

  window.addEventListener('keydown', playSound);

   /*
  window.addEventListener('keydown', (e) => {
    //console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //console.log(audio)
    if(!audio) {
      return // stop the function 
    }
    // rewind to start
    audio.currentTime = 0;
    audio.play();
    //console.log(key)
    
    key.classList.add('playing');
    key.classList.remove('playing');
    key.classList.toggle('playing');
  }); 
  */
  