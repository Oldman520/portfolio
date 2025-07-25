let one =1;
let two =2;
console.log((one+two)*two/(two*3));
//導入模塊
import {Years, ChangeMessage} from './module/alldate.js';
import { NumberOutput,NumberOutputWhile } from './module/loop.js';
import { Banner } from './module/carousel.js';
import { navBar } from './module/navbar.js';
// 呼叫函式 (參數應用)
Years("Year");
ChangeMessage();
NumberOutput();
NumberOutputWhile();
// Banner();
navBar();
