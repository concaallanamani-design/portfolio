const themeBtn = document.getElementById("theme-btn");
themeBtn.onclick = function(){
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML="☀";
    }
    else{
        themeBtn.innerHTML="🌙"
    }
    
}
const topBtn=document.querySelector(".top-btn");
window.addEventListener("scroll", function(){
    if(window.scrollY>300){
        topBtn.classList.add("show");
    }
    else{
        topBtn.classList.remove("show");
    }
});

    


