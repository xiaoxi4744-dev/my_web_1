const sound1 = document.getElementById("clickSound_1");
const sound2 = document.getElementById("clickSound_2");

const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

// เสียงทุกปุ่ม
document.querySelectorAll("#toggle").forEach(btn=>{
    btn.addEventListener("click",()=>{
        sound1.currentTime=0;
        sound1.play();
    });
});
document.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",()=>{
        sound2.currentTime=0;
        sound2.play();
    });
});

// เปิดปิดเมนู
toggle.addEventListener("click",()=>{
    menu.classList.toggle("show");
});

//calender
//Time

    function updateTime(){

        const now = new Date();

        document.getElementById("clock").textContent = 
        now.toLocaleTimeString("en-GB")
    }
setInterval(updateTime,1000);
updateTime();

//Date
