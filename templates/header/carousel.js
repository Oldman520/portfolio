/*
出示進入頁面時，圖片應該每三秒自動切換

修正
手動點擊 上一張或下一張:
1.圖片立即切換
2.自動播放會停止，避免短時間切換過快
3.如果三秒
*/

export function Banner(){
    //宣告變數 設定為圖片的索引
    let currentIndex = 0;
    //宣告常數 (值無法變更)讀取框架的類別(class)名稱
    const images=document.querySelectorAll("#Carousel > li")
    //宣告常數 讀取圖片的長度(張數)
    const totalImages = images.length;
    //存放自動播放的定時器
    let autoPlayInterval;
    //存放延遲重啟的定時器
    let restartTimeout;
    //顯示下一張圖片的函式
    function ShowNextImage(){
        //移除目前顯示的類別 Active
        images[currentIndex].classList.remove("active");
        //計算張數的索引值 求餘數(%) 被除數(目前的索引值)%總張數
        currentIndex = (currentIndex + 1) % totalImages;
        //顯示下一張圖片
        images[currentIndex].classList.add("active");

    }

    function ShowPrevImage(){
        //移除目前顯示的類別 Active
        images[currentIndex].classList.remove("active");
        //計算張數的索引值 求餘數(%) 被除數(目前的索引值)%總張數
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        //顯示下一張圖片
        images[currentIndex].classList.add("active");

    }
    //啟動自動輪播 計時器 3秒切換一張圖 秒數為毫秒
    function startAutoPlay(){
        autoPlayInterval = setInterval(ShowNextImage,3000)
    }
    //停止自動輪播
    function stopAutoPlay(){
        //清除定時器
        clearInterval(autoPlayInterval);
        //防止計時器重覆
        clearTimeout(restartTimeout);
    }
    //延遲三秒後重新啟動自動輪播
    function restartAutoPlay(){
        restartTimeout = setTimeout(startAutoPlay, 3000);
    }

    startAutoPlay();

    //按鈕功能
    const btnPrev=document.getElementById("prevBtn");
    btnPrev.addEventListener("click",()=>{
        //停止自動輪播
        stopAutoPlay();
        //顯示上一張圖片
        ShowPrevImage();
        //延遲三秒後重新自動輪播
        restartAutoPlay();
    });
    const btnNext=document.getElementById("nextBtn")
    btnNext.addEventListener("click",()=>{
        //停止自動輪播
        stopAutoPlay();
        //顯示下一張圖片
        ShowNextImage();
        //延遲三秒後重新啟動自動輪播
        restartAutoPlay();
    })

    
}