export function Years(id){
    //取得html元素(id)
// let Year= document.getElementById("Year");
let Year= document.getElementById(id);
//時間函式Date()為物件，所以需要實體化之後再應用
let Years = new Date().getFullYear();
Year.textContent=Years;
};

//邏輯運算子 按照時間顯示不同的訊息

/*將2個以上的條件合併成1個
  1.晚上7點之後到九點前顯示現在為商品特價時間
  2.早上9點或下午3點的時間顯示目前所有商品打7折
  3.其他時間顯示要不要購買商品
*/
export function ChangeMessage(){
    //宣告變數 實體化 時間函數 取 小時來用 目前取得的小時為二十四小時制
    let Hour = new Date().getHours();
    let Text = document.getElementById("MessageText");

    if(Hour >= 7 && Hour < 21){
        console.log("現在為商品特價時間");
        Text.textContent="現在為商品特價時間";
    }else if(Hour === 9 || Hour === 15){
        console.log("目前商品打7折");
        Text.textContent="目前商品打7折";
    }else{
        console.log("要不要購買商品");
        Text.textContent="要不要購買商品";
    }
}


