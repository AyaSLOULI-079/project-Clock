const clock = document.querySelector('#clock')
// const clockContainer = document.querySelector('#clockContainer')
// const clock = document.querySelector('#hour')
// const clock = document.querySelector('#minute')
// const clock = document.querySelector('#second')



  setInterval(() => {
    //object of date()
    d = new Date(); 
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    //converting current time
    hr_rotation = 30 * hr + min / 2; 
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
  
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;

    if(hr == 0){
      hr = 12;
    }
    if(hr > 12){
    hr = hr - 12;
    session = "PM";
    }
    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    let time = hr + ":" + min + ":" + sec + " " + session;
    document.getElementById("clock").innerHTML = time;
    // d.toLocaleTimeString()
}, 1000);







