const intro=document.getElementById("intro");setTimeout(()=>{intro.style.opacity="0";setTimeout(()=>intro.remove(),1000)},1400);

const start=new Date("2026-01-11T00:00:00+03:30"), counter=document.getElementById("counter");
function tick(){let d=Math.max(0,Date.now()-start.getTime()),days=Math.floor(d/864e5);d%=864e5;let h=Math.floor(d/36e5),m=Math.floor((d%36e5)/6e4);counter.textContent=`${days} روز · ${h} ساعت · ${m} دقیقه`};tick();setInterval(tick,60000);

const audio=document.getElementById("audio"), musicBtn=document.getElementById("musicBtn");
musicBtn.onclick=()=>{if(audio.paused){audio.play().then(()=>musicBtn.textContent="Ⅱ توقف").catch(()=>alert("فایل our-song.mp3 را کنار سایت قرار بده."))}else{audio.pause();musicBtn.textContent="♪ پخش آهنگ"}};

document.querySelectorAll(".photo input").forEach(input=>input.addEventListener("change",e=>{const file=e.target.files[0];if(!file)return;const url=URL.createObjectURL(file),box=e.target.parentElement;box.querySelector("span").style.display="none";let img=document.createElement("img");img.src=url;box.appendChild(img)}));

const modal=document.getElementById("secret");document.getElementById("secretBtn").onclick=()=>modal.classList.add("open");document.getElementById("closeSecret").onclick=()=>modal.classList.remove("open");modal.onclick=e=>{if(e.target===modal)modal.classList.remove("open")};