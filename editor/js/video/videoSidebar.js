
  function openWebVideos() {
    sidebar = document.getElementById("video-web-sidebar");
    sidebar.style.transition = "bottom 0.5s";
    sidebar.style.bottom = "0"; 
  }


  function closeWebVideos() {
    sidebar = document.getElementById("video-web-sidebar");
    sidebar.style.transition = "bottom 0.5s";
    sidebar.style.bottom = "-135px"; 
  }


  function openMediaVideos() {
    // sidebar = document.getElementById("video-web-sidebar");
    // sidebar.style.transition = "bottom 0.5s";
    // sidebar.style.bottom = "0"; 
  }


  function closeMediaVideos() {
    // sidebar = document.getElementById("video-web-sidebar");
    // sidebar.style.transition = "bottom 0.5s";
    // sidebar.style.bottom = "-135px"; 
  }
  

  function closeVideoSidebars(){
    closeWebVideos();
    closeMediaVideos();
  }