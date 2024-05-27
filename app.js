let btms=document.querySelectorAll(".box");
let newgame=document.querySelector(".newgame");
let reset=document.querySelector(".reset");
let p=document.querySelector("#message");
let value=true;
btms.forEach((btm)=>{
  btm.addEventListener("click",()=>{
    console.log("btm was clicked");
    if(value){
      btm.innerText="X";
      value=false;
    }
    else{
      btm.innerText="O";
      value=true;
    }
    btm.disabled=true;
    chechwinner();
  })
});

let sequence=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const chechwinner=()=>{
  for(pattern of sequence){

    let val1=btms[pattern[0]].innerText;
    let val2=btms[pattern[1]].innerText;
    let val3=btms[pattern[2]].innerText;

    if(val1!="" && val2!="" && val3!=""){
      if(val1===val2&&val1===val3){
        console.log("winner");
        showwinner(val1);
      }
    }
  }
};

const showwinner=(winner)=>{
  p.innerText=`Congratulation! winner is ${winner}`;
  p.classList.remove("hide");
  disabled();
}
const disabled=()=>{
  for(let btm of btms){
    btm.disabled=true;
  }
}
const enable=()=>{

  p.classList.add("hide");
  for(let btm of btms){
    btm.disabled=false;
    btm.innerText="";
  }
}
const resetgame=()=>{
  value=true;
  enable();
}