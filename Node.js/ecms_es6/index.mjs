//import myFucntion, { myFucntion2, myFucntion3 }  from "./second.mjs"
import myFucntion, * as mf from "./second.mjs"

console.log(myFucntion())
console.log(mf.myFucntion2())
console.log(mf.myFucntion3())