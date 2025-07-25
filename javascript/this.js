//全域環境 在瀏覽器的環境之下，全域作用域內的this指向windows物件
//在node.js環境中，全域的this事globalThis，但在頂層程式碼內this會是空對象
console.log(this);


//物件方式中的this當this被物件的方法調用時，他指向該物件
const obj={
    name:"Alice",
    greet(){
        console.log(this.name);
    }
};
obj.greet();
//因為greetFunc()在全域懷境下執行，所以this 指向window
const greetFunc=obj.greet

//構造函式中的this使用new關鍵字時，this會指向新建立的物件
function Person(name){
    this.name=name;
}
const person1 = new Person("Bob");
console.log(person1.name);

//箭頭函式中的this 箭頭函式沒有自己的this
const obja = {
    name:"Alice",
    greet: function(){
        const arrowFunc=()=>{
            //this繼承obja
            console.log(this.name)
        };
        arrowFunc();
    }
}
obja.greet();
//使用傳統函式，則this變成window使叟傳統函式，則this變成window
const objb = {
    name:"Alice",
    greet: function(){
        const normalFunc=()=>{
            //this是window輸出 unedefined
            console.log(this.name)
        };
        normalFunc();
    }
}
objb.greet();

//DOM事件監聽中的this 在事件監聽中，this預設指向觸發事件的DOM元素
document.getElementById("myButton").addEventListener("click",function(){
    console.log(this)
})
//this 指向外層作用域(通常是window)
document.getElementById("myButton").addEventListener("click",()=>{
    console.log(this)
})
/*call()、apply()、bind()是javascript當中用來改變this指向的函數。他們通常用於在某個文件中，將this指向指定的物件，並執行該函式 */
//call():立即執行，參數逐一傳遞(立即執行，簡單參數)
//apply():立即執行，參數用陣列傳遞(陣列形式參數傳遞)
//bind():返回新函式，不立即執行(事件處理延遲執行)

function callExample(){
    function Greet(greeting, punctuation){
        console.log(`${greeting},my name is ${this.name}${punctuation}`)
    }
    const Person2 ={name:"Alice"};
    Greet.call(Person2,"Hello","!");
}
function applyExample(){
    function Greet(greeting, punctuation){
        console.log(`${greeting},my name is ${this.name}${punctuation}`)
    }
    const Person2 ={name:"Bob"};
    Greet.apply(Person2,["Hello","!"]);
}
function bindExample(){
    function Greet(greeting, punctuation){
        console.log(`${greeting},my name is ${this.name}${punctuation}`)
    }
    //綁定this與第一個參數(可部分預設)
    const person ={name:"Charlie"};
    //呼叫之後給予第二個參數
    const boundGreet = Greet.bind(person,"Hey")
    boundGreet("!!");
}
callExample();
applyExample();
bindExample()
// call apply bind 實務應用
//1.物件方法共用(使用call或apply在不同物件間共用方法)
function CallApplyExample(){
    const userOne={name:"Alice"}
    const userTwo={name:"Bob"}

    function sayHello(){
        console.log(`hello, my name is ${this.name}`);
        
    }
    sayHello.call(userOne);
    sayHello.apply(userTwo);
}
CallApplyExample();
//事件處理使用bind讓this綁定正確的物件
function BindExample(){
    const counter={
        count:0,
        subtraction(){
            if(this.count>0){
                this.count--;
            console.log("this.count");
            document.getElementById("number").textContent=this.count;
            }else{
                console.log("計數已為零，按鈕已禁用");
                document.getElementById("sub").disabled=true;
            }
            
        },
        addition(){
            this.count++;
            console.log("this.count");
            document.getElementById("number").textContent=this.count;
        }
        
    };
    document.getElementById("number").textContent=0;
    const ButtonSub = document.getElementById("sub");
    ButtonSub.addEventListener("click",counter.subtraction.bind(counter));

    const ButtonAdd = document.getElementById("add");
    ButtonAdd.addEventListener("click",counter.addition.bind(counter));
}

BindExample();