$(function () {
  const playerTrack = $("#player-track");
  const bgArtwork = $("#player-bg-artwork");
  const albumName = $("#album-name");
  const trackName = $("#track-name");
  const albumArt = $("#album-art");
  const sArea = $("#seek-bar-container");
  const seekBar = $("#seek-bar");
  const trackTime = $("#track-time");
  const seekTime = $("#seek-time");
  const sHover = $("#s-hover");
  const playPauseButton = $("#play-pause-button");
  const tProgress = $("#current-time");
  const tTime = $("#track-length");
  const playPreviousTrackButton = $("#play-previous");
  const playNextTrackButton = $("#play-next");
  const albums = ["KRUSHCLUB"];
  const trackNames = [
    "Hey - Luci4",
    "Friesengjung - Vieze",
    "Narcissistic Gem - Marluxiam",
    "Kurxxed Emeraldz - Luci4",
    "Udnthav2know - Marluxiam",
    "Jerk! - Jnhygs",
    "Borderline Personality - Odetari",
    "Hands up! - 6arelyhuman",
    "Dance Dance Dance - Vxjoking",
    "HHA - Tomorrow",
    "To my Crush - Senpaix",
    "Eyes on me - Asteria",
    "Masquerade - Siouxxie",
    "Project X - Kets4eki",
    "Hey bitch - D3r",
    "Go! - 7sirens",
    "In my dms - Kest4eki",
    "Let me see - Lumi Athena",
    "Trynna fuck - Kets4eki",
    "Crystals - Pr1svx",
    "Crxzy - Sofyvnoxo",
    "Rock your Body - Kets4eki",
    "Ur so pretty date me - Snave",
    "Farben - Orange Sector",
    "If u want - Adore",
    "Melody and Bars - Axxad",
    "Wutiwant - Saraunh0ly",
    "Faster and Harder - 6arelyhuman",
    "Juice - Daryana",
    "Edgy - Luvwillow",
    "Uh Oh - Prodkaz",
    "Hey Ho - Splats",
    "I don't wna cry - Kurffew",
    "Clear Eyes - Bleachblonde",
    "Distorded Persona - RaiLovesU ",
    "So bitter - Stxlkin",
    "Lonely - Dinaseclipse",
    "SMB - Odetari",
    "Haunted - Laura Les",
    "Poser - Ilyproxy",
    "Too Many Lines - Kets4eki",
    "Pretty Scene Girl - Clover!",
    "Dream - Romanceplanet",
    "Falling from Sky - Romanceplanet",
    "Mememe- 100 Gecs"
  ];
  const albumArtworks = ["_1", "_2", "_3", "_4", "_5", "_6", "_7", "_8", "_9", "_10", "_11", "_12", "_13", "_14", "_15", "_16", "_17", "_18", "_19", "_20", "_21", "_22", "_23", "_24", "_25", "_26", "_27", "_28", "_29", "_30", "_31", "_32", "_33", "_34", "_35", "_36", "_37", "_38", "_39", "_40", "_41", "_42", "_43", "_44", "_45"];
  const trackUrl = [
    "https://audio.jukehost.co.uk/wvAAmFbu2p5NDzDDOGUYzxhSkHrKayPS.mp3",
    "https://audio.jukehost.co.uk/RGhG8XKxL39jqzZpMuo5yY9GkzGLUCwN.mp3",
    "https://audio.jukehost.co.uk/QhiwU7vHuoyJ3t1oteAIKW56sBsBK7MU.mp3",
    "https://audio.jukehost.co.uk/Xl2jXaxzgv6jS7lA1conI7g7fOO5rOjs.mp3",
    "https://audio.jukehost.co.uk/X2HRnBtDvcgej3iWviIhDM3xJQGhg5oE.mp3",
    "https://audio.jukehost.co.uk/aoI5Xbk2csgJfdJPrv9n0RY95Ne5gDmb.mp3",
    "https://audio.jukehost.co.uk/qbcToI7ZdIuIImfRjKPVYEhFtFsGbIXX.mp3",
    "https://audio.jukehost.co.uk/MxmHXbYxgJwsy55WdJJL2dJqIlFR4GGV.mp3",
    "https://audio.jukehost.co.uk/09myj6fLz3Hh5x3XkolfgI0fVEiZhG63.mp3",
    "https://audio.jukehost.co.uk/3Y5J8eRT618EGwmRvbTwIvrOdE14O3Ly.mp3",
    "https://audio.jukehost.co.uk/4ZBASRaD3hcCRBnYHlkcdANVOapRTnN9.mp3",
    "https://audio.jukehost.co.uk/9BlHQwuQ6i8uL2wxII4s0Tht8MlLiHaV.mp3",
    "https://audio.jukehost.co.uk/5ATy8EzgGeP2TUPfxNjSC4DTijrdU8PT.mp3",
    "https://audio.jukehost.co.uk/rhyvm49DSmZoPqs03zkwkIMCbfHrTiBF.mp3",
    "https://audio.jukehost.co.uk/wjasWvVlp2lQkZjCfoaznzYYoxaqJAZe.mp3",
    "https://audio.jukehost.co.uk/XgsfuJkkHCz5VPkRJXRgaZwQHNhxgCoj.mp3",
    "https://audio.jukehost.co.uk/LvwgJxmY4WRnqvHDNERPlzZX8vjgXtXo.mp3",
    "https://audio.jukehost.co.uk/nfKTlG99Ww7KaVrN15Yu3Tl4M1vdd8PH.mp3",
    "https://audio.jukehost.co.uk/MErFHW2Hhry5O9JZl9fZB9W2b6CPJ5A4.mp3",
    "https://audio.jukehost.co.uk/GtGTgEQ0WGeoqB1934tKaRN8jaTrKNWD.mp3",
    "https://audio.jukehost.co.uk/l1zjShH0gis9l7cbmsL0CEPOfv2LA5mh.mp3",
    "https://audio.jukehost.co.uk/qhDaDHBLODMCU0slADpQM7NEdxDwXrbS.mp3",
    "https://audio.jukehost.co.uk/Gzrpzn0NaeKGMsypGeRZZ3bqB1vhH9tA.mp3",
    "https://audio.jukehost.co.uk/QMp3rB8a0Hzurhiz9hienSAeg1pYy34l.mp3",
    "https://audio.jukehost.co.uk/qfSS7RjsesAeraWFub7Kq0TttW7HenuF.mp3",
    "https://audio.jukehost.co.uk/ghxOrx68PNUQVfU3tyXZq6ZPXOaCfvFW.mp3",
    "https://audio.jukehost.co.uk/l2FRlBHy8xiHO9DrIEym6t7X0niLhYlh.mp3",
    "https://audio.jukehost.co.uk/YWOQXQJ1Yv9IgRYlmC3DlvYdmS9FLk0h.mp3",
    "https://audio.jukehost.co.uk/7dMIpmaLj6j2Q2XgXvGvgtYsbZlco7ny.mp3",
    "https://audio.jukehost.co.uk/dI9Ia1qjvSVSHgNIGaEvDEAhTumUKcHS.mp3",
    "https://audio.jukehost.co.uk/gxbRxvT2zVnG2AYAkol14A0p8GDAc62Z.mp3",
    "https://audio.jukehost.co.uk/l1al3VzA0OB6nSNNcXlpvd58wiaOVuSh.mp3",
    "https://audio.jukehost.co.uk/AEaHQFzrNp3ecqrglgWsfFKlzsvXcqO5.mp3",
    "https://audio.jukehost.co.uk/PLMTIOjr8j5faaQZANUG5gTYiGVaDhhv.mp3",
    "https://audio.jukehost.co.uk/9uJtKiA1cgfOvtGaPZH0MWBj1CcvgBZz.mp3",
    "https://audio.jukehost.co.uk/SfAlY0XFHTvH3DcfZTwAyfVK3Da6iYcF.mp3",
    "https://audio.jukehost.co.uk/fOPBdZzZEbmHgbs7a54ULcRboWezTX5Z.mp3",
    "https://audio.jukehost.co.uk/DWTFmGx5fsKi98HBdGxmJBn8MPPf7ggi.mp3",
    "https://audio.jukehost.co.uk/QA6RtS9RGcHDOigDYNSyORqJYNNsUGLh.mp3",
    "https://audio.jukehost.co.uk/i4FOyto4di2Bg0tOW7aINFtahGpM8wEK.mp3",
    "https://audio.jukehost.co.uk/hMx5kjd2wcQCNJUu6ALvPz9VqULM6S2o.mp3",
    "https://audio.jukehost.co.uk/bjLOSzp58VrXCOhEwaIfiMY2EtaXhbZU.mp3",

 "https://audio.jukehost.co.uk/01a0bae6-242b-7109-aa32-408106e1208b.mp3",
    
 "https://audio.jukehost.co.uk/01a0b61f-3a63-73ee-bccc-cc869cd8761f.mp3",
    
"https://audio.jukehost.co.uk/01a0b620-52d8-725a-9edc-f8467f7e1e48.mp3"
  ];

  let bgArtworkUrl,
    i = playPauseButton.find("i"),
    seekT,
    seekLoc,
    seekBarPos,
    cM,
    ctMinutes,
    ctSeconds,
    curMinutes,
    curSeconds,
    durMinutes,
    durSeconds,
    playProgress,
    bTime,
    nTime = 0,
    buffInterval = null,
    tFlag = false,
    currIndex = -1;

  function playPause() {
    setTimeout(function () {
      if (audio.paused) {
        playerTrack.addClass("active");
        albumArt.addClass("active");
        checkBuffering();
        i.attr("class", "fas fa-pause");
        audio.play();
      } else {
        playerTrack.removeClass("active");
        albumArt.removeClass("active");
        clearInterval(buffInterval);
        albumArt.removeClass("buffering");
        i.attr("class", "fas fa-play");
        audio.pause();
      }
    }, 300);
  }

  function showHover(event) {
    seekBarPos = sArea.offset();
    seekT = event.clientX - seekBarPos.left;
    seekLoc = audio.duration * (seekT / sArea.outerWidth());

    sHover.width(seekT);

    cM = seekLoc / 60;

    ctMinutes = Math.floor(cM);
    ctSeconds = Math.floor(seekLoc - ctMinutes * 60);

    if (ctMinutes < 0 || ctSeconds < 0) return;

    if (ctMinutes < 0 || ctSeconds < 0) return;

    if (ctMinutes < 10) ctMinutes = "0" + ctMinutes;
    if (ctSeconds < 10) ctSeconds = "0" + ctSeconds;

    if (isNaN(ctMinutes) || isNaN(ctSeconds)) seekTime.text("--:--");
    else seekTime.text(ctMinutes + ":" + ctSeconds);

    seekTime.css({ left: seekT, "margin-left": "-21px" }).fadeIn(0);
  }

  function hideHover() {
    sHover.width(0);
    seekTime
      .text("00:00")
      .css({ left: "0px", "margin-left": "0px" })
      .fadeOut(0);
  }

  function playFromClickedPos() {
    audio.currentTime = seekLoc;
    seekBar.width(seekT);
    hideHover();
  }

  function updateCurrTime() {
    nTime = new Date();
    nTime = nTime.getTime();

    if (!tFlag) {
      tFlag = true;
      trackTime.addClass("active");
    }

    curMinutes = Math.floor(audio.currentTime / 60);
    curSeconds = Math.floor(audio.currentTime - curMinutes * 60);

    durMinutes = Math.floor(audio.duration / 60);
    durSeconds = Math.floor(audio.duration - durMinutes * 60);

    playProgress = (audio.currentTime / audio.duration) * 100;

    if (curMinutes < 10) curMinutes = "0" + curMinutes;
    if (curSeconds < 10) curSeconds = "0" + curSeconds;

    if (durMinutes < 10) durMinutes = "0" + durMinutes;
    if (durSeconds < 10) durSeconds = "0" + durSeconds;

    if (isNaN(curMinutes) || isNaN(curSeconds)) tProgress.text("00:00");
    else tProgress.text(curMinutes + ":" + curSeconds);

    if (isNaN(durMinutes) || isNaN(durSeconds)) tTime.text("00:00");
    else tTime.text(durMinutes + ":" + durSeconds);

    if (
      isNaN(curMinutes) ||
      isNaN(curSeconds) ||
      isNaN(durMinutes) ||
      isNaN(durSeconds)
    )
      trackTime.removeClass("active");
    else trackTime.addClass("active");

    seekBar.width(playProgress + "%");

    if (playProgress == 100) {
      i.attr("class", "fa fa-play");
      seekBar.width(0);
      tProgress.text("00:00");
      albumArt.removeClass("buffering").removeClass("active");
      clearInterval(buffInterval);
    }
  }

  function checkBuffering() {
    clearInterval(buffInterval);
    buffInterval = setInterval(function () {
      if (nTime == 0 || bTime - nTime > 1000) albumArt.addClass("buffering");
      else albumArt.removeClass("buffering");

      bTime = new Date();
      bTime = bTime.getTime();
    }, 100);
  }

  function selectTrack(flag) {
    if (flag == 0 || flag == 1) ++currIndex;
    else --currIndex;

    if (currIndex > -1 && currIndex < albumArtworks.length) {
      if (flag == 0) i.attr("class", "fa fa-play");
      else {
        albumArt.removeClass("buffering");
        i.attr("class", "fa fa-pause");
      }

      seekBar.width(0);
      trackTime.removeClass("active");
      tProgress.text("00:00");
      tTime.text("00:00");

      currAlbum = albums[currIndex];
      currTrackName = trackNames[currIndex];
      currArtwork = albumArtworks[currIndex];

      audio.src = trackUrl[currIndex];

      nTime = 0;
      bTime = new Date();
      bTime = bTime.getTime();

      if (flag != 0) {
        audio.play();
        playerTrack.addClass("active");
        albumArt.addClass("active");

        clearInterval(buffInterval);
        checkBuffering();
      }

      albumName.text(currAlbum);
      trackName.text(currTrackName);
      albumArt.find("img.active").removeClass("active");
      $("#" + currArtwork).addClass("active");

      bgArtworkUrl = $("#" + currArtwork).attr("src");

      bgArtwork.css({ "background-image": "url(" + bgArtworkUrl + ")" });
    } else {
      if (flag == 0 || flag == 1) --currIndex;
      else ++currIndex;
    }
  }

  function initPlayer() {
    audio = new Audio();

    selectTrack(0);

    audio.loop = false;

    playPauseButton.on("click", playPause);

    sArea.mousemove(function (event) {
      showHover(event);
    });

    sArea.mouseout(hideHover);

    sArea.on("click", playFromClickedPos);

    $(audio).on("timeupdate", updateCurrTime);

    playPreviousTrackButton.on("click", function () {
      selectTrack(-1);
    });
    playNextTrackButton.on("click", function () {
      selectTrack(1);
    });
      
  }

  initPlayer();
});