document.addEventListener("DOMContentLoaded",function(){
    setTimeout(function(){
        //隱藏loading畫面
        document.querySelector(".loading").style.display = "none";
        //顯示main內容
        document.querySelector(".main").style.display = "flex";
        //更改body為可滾動
        document.body.style.overflow = "auto";
    }, 11000);
});