let time = document.querySelector(".time_ms");
let time_s = document.querySelector(".time_s");
let time_m = document.querySelector(".time_m");
let sec = 0;
let min = 0;
let milli_sec = 0;
let clock;

function start(){
  
    document.querySelector("#startButt").disabled = true;

        clock = setInterval (() => {

            milli_sec++;
            time.innerHTML = milli_sec < 10 ? ":0" + milli_sec : ":" + milli_sec;

            if(milli_sec > 100){
                milli_sec = 0;
                sec++;               
                time_s.innerHTML = sec < 10 ?  ":0"+sec : ":" +sec;
                
                if(sec > 60){
                    min++;
                    sec = 0;
                    time_m.innerHTML = min < 10 ? ":0"+min : min;
                }
            }        
        }, 10)
       
   
}

function reset(){
        sec = 0;
        milli_sec = 0;
        time_m.innerHTML = "00"
        time.innerHTML = ":00";
        time_s.innerHTML = ":00";
}
function stop(){
    document.querySelector("#startButt").disabled = false;
    clearInterval(clock);
}
