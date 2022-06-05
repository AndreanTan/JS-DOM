const boxElement = document.querySelectorAll(".box"); //karena membutuhkan nodelist agar bisa dimanipulasi
const cross="cross";
const circle="circle";
const restart=document.getElementById("restart");

let turn=cross;

function swapTurn(){
    turn=!turn;
}

function placeMark(box,currentClass){
    box.classlist.add(currentClass);
}

function handleClick (e){
    const boxTarget =e.target;
    if(turn === cross){
        boxTarget.style.background ="yellow";
        turn=circle;
    }else{
        boxTarget.style.background="blue";
        turn=cross;
    }
}

function restartGame(){
    startGame();
}

function startGame (){
    boxElement.forEach(box => {
        box.style.background='white';
        box.addEventListener("click",handleClick,{once:true}) //agar hanya bisa diisi dengan satu warna atau satu circle/cross
    })
}

startGame();
restart.addEventListener("click",restartGame);

