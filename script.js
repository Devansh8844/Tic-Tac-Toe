let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new");
let msgDiv = document.querySelector(".msg");
let msg = document.querySelector("#ms");

let turnO = true;

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

const resetgame = () => {
    turnO = true;
    enableBoxes();
    msgDiv.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) { 
        box.disabled = false;
    }
};

const enableBoxes = () => {
    for(let box of boxes) { 
        box.disabled = true;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText= `Congratulations, Winner is ${winner}`;
    msgDiv.classList.remove("hide");
};

const checkWinner = () => {
    for(let pattern of winPattern) {
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
                if(pos1Val === pos2Val && pos2Val === pos3Val) {
                    console.log("winner",pos1Val);
                    showWinner(pos1Val);
                }
            }
    }
};


newgame.addEventListener("click", resetgame);

reset.addEventListener("click", resetgame);