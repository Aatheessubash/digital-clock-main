const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");


function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";


    if (h > 12) {
        ampmEl.innerText ="PM";
        h = h-12;
    }
  
   
    h = h<10 ? "0"+h : h;
    s = s<10 ? "0"+s : s;
    m = m<10 ? "0"+m : m;


    hourEl.innerText = h;
    minuteEl.innerText =m;
    secondEl.innerText =s;
    

    setTimeout(()=>{
        updateClock()
    },1000)
}
updateClock()
