//for迴圈-重複執行一段程式，直到滿足條件為止

export function NumberOutput(){
    for (let i = 0; i<=10; i++) {
        console.log(i);
    }
}
//for 與 while的差別 是否在最初 就決定了迴圈的次數是否在最初 就決定了迴圈的次數
//While迴圈
/*迴圈格式
while(條件式){重複執行程式} */
export function NumberOutputWhile(){
    let i=0;
    while(i<=10){
        console.log(i);
        i++;
    }
}
