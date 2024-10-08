let box = document.querySelectorAll('.box');
let res = document.querySelector('.winner');
let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let resultContainer = document.querySelector('.result');
let gameContainer = document.querySelector('.container');
let player = document.querySelector('.player'); //newly

let turn = false;
let winnerFound = false;
let moves = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

p1.classList.add('player-select');

box.forEach( b => {
    b.addEventListener('click', () => {
        if (!winnerFound && b.innerText === ''){
            b.innerText = (turn == false)?'O':'X';
            moves ++;
            if(!turn){
                p2.classList.add('player-select');
                p1.classList.remove('player-select');
            }
            else{
                p1.classList.add('player-select');
                p2.classList.remove('player-select');
            }
            turn = !(turn);
            checkWinner();

            if(moves === 9 && !winnerFound){
                res.innerText = 'Its a Draw';
                gameContainer.classList.add('blur');
                resultContainer.classList.add('show');
                player.classList.add('blur'); //newly
                document.querySelector('.player-select').classList.remove('player-select');
            }
        }
    });
});

const checkWinner = () => {
    for(let pattern of winPatterns){
        let p1 = box[pattern[0]].innerText;
        let p2 = box[pattern[1]].innerText;
        let p3 = box[pattern[2]].innerText;

        if(p1 != '' && p2 != '' && p3 != ''){
            if(p1 === p2 && p2 === p3){
                res.innerText = (p1 === 'O')?'Player 1 wins':'Player 2 wins';
                winnerFound = true;
                gameContainer.classList.add('blur');
                resultContainer.classList.add('show');
                player.classList.add('blur');
                document.querySelector('.player-select').classList.remove('player-select');
                return;
            }
        }
    }   
}

document.querySelector('.reset').addEventListener('click', () => {
    location.reload();
});