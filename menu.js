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
        now.toLocaleTimeString("en-US")
    }
setInterval(updateTime,1000);
updateTime();

//Date

function createCalendar(){
    const cal = document.getElementById("calendar");
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const firstDay = new Date(year,month,1).getDay();
    const lastDate = new Date(year,month+1,0).getDate();
    const monthName = now.toLocaleString("en-US",{
        month:"long"
    });

    let html = `<h3>${monthName} ${year}</h3>`;

    html += `
    <table>
        <tr>
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
        </tr>
        <tr>
    `;

    for(let i =0; i<firstDay;i++){
        html+="<td></td>";   
    }
    for(let d=1; d<=lastDate; d++){
        if((firstDay+d-1)%7===0 && d!==1){
            html+="</tr><tr>";
        }
        if(d===now.getDate()){
            html+=`<td style="
                color:#fff;
                background:#00cfff;
                text-align:center;
            ">${d}</td>`;
        }else{
            html+=`<td>${d}</td>`;
        }
    }
    html+="</tr></table>";
    cal.innerHTML=html;
}
createCalendar();

//Hp
// HP System

function updateHP(){
    const now = new Date();

    // ชั่วโมงจริง 0-23
    let hour = now.getHours();

    // ลดเลือดตามเวลา
    let hp = 100 - (hour * 5);
    if(hp < 0){
        hp = 0;
    }
    
    const hpBar = document.getElementById("Hp-bar");

    // เปลี่ยนสีเลือด
    if(hp > 50){
        hpBar.style.background = "green";
    }else if(hp > 15){
        hpBar.style.background = "yellow";
    }else{
        hpBar.style.background = "red";
    }
    hpBar.style.width = hp + "%";
    document.getElementById("Hp-text").textContent =
    "Admin : " + hp + "%";
}


setInterval(updateHP,1000);
updateHP();


//popup
const popup = document.getElementById("popup_mysatus");
const popup1 = document.getElementById("popup_data");
const btndata = document.getElementById("btnData");

toggle.addEventListener("click", () => {
        closePopup1();
    if (popup.style.display === "block") {
        closePopup();
    } else {
        openPopup();
    }
});
//popup1
btndata.addEventListener("click", () => {
    if (popup1.style.display === "block") {
        closePopup1();
    } else {
        openPopup1();
    }
});















//function
//open
//btn1
function openPopup() {
    popup.style.display = "block";
    requestAnimationFrame(() => {
        popup.classList.add("show");
    });
}

function closePopup() {
    popup.classList.remove("show");

    setTimeout(() => {
        popup.style.display = "none";
    }, 250);
}

//btn2
function openPopup1(){
    popup1.style.display = "block";
    requestAnimationFrame(()=>{
        popup1.classList.add("show");
    });
}
function closePopup1(){
    popup1.classList.remove("show");

    setTimeout(()=>{
        popup1.style.display = "none"
    },250);
}