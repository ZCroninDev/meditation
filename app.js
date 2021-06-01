const app = () =>  {
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const outline = document.querySelector(".moving-outline circle");
    const video = document.querySelector(".vid-container video");
    //Sounds
    const sounds = document.querySelectorAll(".sound-picker button");
    //Time Display
    const timeDisplay = document.querySelector(".time-display");
    const outlineLength = outline.getTotalLength();
    //Duration
    const timeSelect = document.querySelectorAll(".time-select button");
    let fakeDuration = 600;
    
    outline.style.strokeDashoffset = outlineLength;
    outline.style.strokeDasharray = outlineLength;
    timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
      fakeDuration % 60
    )}`;
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	// see lines 72-86, same as below

    sounds.forEach(sound => {
      sound.addEventListener("click", function() {
        song.src = this.getAttribute("data-sound");
        video.src = this.getAttribute("data-video");
        checkPlaying(song);
      });
    });
    
    play.addEventListener("click", function() {
      checkPlaying(song);
    });
    
    
    
    timeSelect.forEach(option => {
      option.addEventListener("click", function() {
        fakeDuration = this.getAttribute("data-time");
        timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
          fakeDuration % 60
        )}`;
		/*
		// Here also is weirdness with the seconds display
		// up to you, this being a personal project I'd probably just throw a '0' after the :${Math.floor()}
		// section. If it was for a client, I'd throw more logic in like we did below for the ticker as we wind down.
		// simple fix would look like:
		//
		// 		timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:0${Math.floor(
        // 			fakeDuration % 60									   ^^^^
        // 		)}`;
		*/
      });
    });
    
    const checkPlaying = song => {
      if (song.paused) {
        song.play();
        video.play();
        play.src = "./svg/pause.svg";
      } else {
        song.pause();
        video.pause();
        play.src = "./svg/play.svg";
      }
    };
    
    song.ontimeupdate = function() {
      let currentTime = song.currentTime;
      let elapsed = fakeDuration - currentTime;
      let seconds = Math.floor(elapsed % 60);
	  /*
	  //
	  // something to improve how seconds are rendered if this only returns singular numbers:
	  // seconds = seconds < 10 ? '0' + seconds : seconds
	  //
	  // this reads as:
	  //
	  // 		if seconds < 10 {
	  //			seconds = '0' + seconds
	  // 		}
	  // 		else {
	  //			seconds = seconds
	  // 		}
	  //
	  */
      let minutes = Math.floor(elapsed / 60);
      timeDisplay.textContent = `${minutes}:${seconds}`;
      let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
      outline.style.strokeDashoffset = progress;
    
      if (currentTime >= fakeDuration) {
        song.pause();
        song.currentTime = 0;
        play.src = "./svg/play.svg";
        video.pause();
      }
    };

}   
app();