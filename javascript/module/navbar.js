//宣告陣列，將元素存入陣列之中；陣列資料，讀取索引值，索引值為0
export function navBar(){
    let menuButton=["關於Oldman","相關技能","作品集","聯絡表單"];
    let menuLink=["#Abouts","#Skills","#Workss","#Contacts"];
    let menuLiId=["NavAbout","NavSkills","NavWorkss","NavContacts"]

    //新增html標籤；利用清單列舉資料ul...li

    //宣告變數 承接資料的主框架(父)
    let navId = document.getElementById("navBar");
    //在主框架之內新增ul標籤
    let Ul = document.createElement("ul");
    //添加(標籤屬性)ul的id
    Ul.setAttribute("id","MenuContent");
    //在導覽列之內添加ul標籤
    navId.appendChild(Ul);

    //迴圈 讀取所有資料 for (初始值變數:迴圈條件；每次執行後的動作)
    //若讀取的是 陣列資料，迴圈條件設定為資料的長度

    for (let i=0; i<menuButton.length;i++){
        //新增li
        let Li = document.createElement("li");
        //新增 超連結  a
        let aLink = document.createElement("a");

        //添加標籤
        Ul.appendChild(Li);
        Li.appendChild(aLink);
        //超連結(a)標籤之內新增文字
        aLink.textContent=menuButton[i];
        //寫入標籤屬性
        Li.setAttribute("id",menuLiId[i]);
        aLink.setAttribute("href",menuLink[i]);
    }

}
