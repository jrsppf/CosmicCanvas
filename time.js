const updateTime = () => {
    let today = new Date();
    let time;
    
    if (today.getMinutes() < 10) {
      time = `${today.getHours()}:0${today.getMinutes()}`;
    } else if (today.getMinutes() >= 10) {
      time = `${today.getHours()}:${today.getMinutes()}`;
    }
    
    let t = document.getElementById("currentTime");
    t.innerHTML = time;
  }
  
  setInterval(updateTime, 10);
  