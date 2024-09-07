let boxes = document.querySelectorAll('.box');
let reset_btn = document.querySelector('.reset');
let new_game = document.querySelector('#new-btn');
let msg_container = document.querySelector('.msg-container');
let msg = document.querySelector("#msg");
let turn0 = true; // playerX, player0
/* Winning Pattern
0,1,2          ARRAYS let arr = ["apple", "banana", "orange"]; 1D Array
3,4,5          
6,7,8
0,3,6
1,4,7
2,5,8
0,4,8
2,4,6
*/
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn0 = true;
    EnableBoxes();
    msg_container.classList.add("hide");
    msg.innerText="";
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0 === true){
            box.innerText = "O";
            turn0 = false;
        }
        else { // playerX
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled =true; // So user can not change values of the box once it has input
        
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = "Congratulations, Winner is " + winner;
    msg_container.classList.remove("hide");
    disableBoxes();
}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const EnableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const checkWinner = () =>{
    for(let patern of winPattern){
        
        let post1val = boxes[patern[0]].innerText;
        let post1va2 = boxes[patern[1]].innerText;
        let post1va3 = boxes[patern[2]].innerText;
        
        if(post1val != "" && post1va2 != "" && post1va3 != ""){
            if(post1val === post1va2 && post1va2 == post1va3){
                console.log("Winner",post1val);
                showWinner(post1val);
                break;

            }
        }
        
    }
}
new_game.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);