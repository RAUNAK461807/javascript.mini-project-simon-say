 let gameseq = [];
 let userseq = [];

 
  let started= false;
  let level=0;
 
  let btns=["red","blue","green","yellow"];





let h2=document.querySelector("h2");




 document.addEventListener("keypress",function(){
  if(started==false){
    console.log("game is started");
   started=true;
   levelup();
  }
  
 });





 function btnflash(btn)
{
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
    
  },250);
};





function userflash(btn)
{
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
    
  },250);
};



 function levelup()
 {
    level++;
    h2.innerText=`level${level}`;
    let ranindex=Math.floor(Math.random()*4);
    let rancolour=btns[ranindex];
    let ranbtn=document.querySelector(`.${rancolour}`);
    gameseq.push(rancolour);
    console.log("gameseq");
    btnflash(ranbtn);
 };



 function checkans() {
  let lastIndex = userseq.length - 1;
  if (userseq[lastIndex] === gameseq[lastIndex]) {
    if (userseq.length === gameseq.length) {
      setTimeout(() => {
        userseq = [];
        levelup();
      }, 1000);
      
    }
  } else {
    h2.innerHTML = `Game Over!your score is <b>${level}<b> <br>Press any key to restart.`;
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
  }
}



function btnpress(){
  let btn=this;
  userflash(btn);
  usercolour=btn.getAttribute("id");
  userseq.push(usercolour);
  checkans(userseq.length-1);
}



let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns){
  btn.addEventListener("click",btnpress);
}