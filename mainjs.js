document.addEventListener("DOMContentLoaded", function () {
    // 確保 DOM 載入後才執行

    document.getElementById("coverLink").addEventListener("click", function () {
        document.getElementById("cover").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("aboutMeLink").addEventListener("click", function () {
        document.getElementById("aboutMe").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("portfolioLink").addEventListener("click", function () {
        document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
    });
});
