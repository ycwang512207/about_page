window.addEventListener('scroll',function(){
    const aboutSection = document.querySelector('.about');
    if (window.scrollY > 100) { // 滾動距離達到 100px 顯示 about 部分
        aboutSection.style.display = 'block';
    }
});