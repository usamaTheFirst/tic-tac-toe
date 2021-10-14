console.log('Starting......');
let currentTurn = 'X';
let info = document.querySelector('.info');
let ding = new Audio('ding.mp3')
let winMusic = new Audio('win.mp3')

let gameWon = false;

function changeTurn() {

    currentTurn = currentTurn === "X" ? 'O' : 'X';
}


let boxes = document.getElementsByClassName('gamebox');
Array.from(boxes).forEach(element => {
    let boxText = element.getElementsByTagName('span')[0];
    element.addEventListener('click', () => {
        if (boxText.innerText === "" && !gameWon) {
            boxText.innerText = currentTurn;
            // currentTurn = changeTurn();
            ding.play();
            winLogic()

            if (!gameWon) {

                changeTurn();
                changeInfo();

            }
        }

    });
});

function reset() {

    let gametext = document.querySelectorAll('.gametext');

    gametext.forEach(elem => {
        elem.innerText = "";

    });
    currentTurn = "X";
    gameWon = false;



}

function changeInfo() {
    info.innerText = currentTurn + " turn";
}



const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function winLogic() {
    let gametext = document.querySelectorAll('.gametext');

    wins.forEach(win => {
        if ((gametext[win[0]].innerText === gametext[win[1]].innerText && gametext[win[1]].innerText === gametext[win[2]].innerText) && (gametext[win[0]].innerText !== "")) {
            info.innerText = currentTurn + " Won!!";
            gameWon = true;
            winMusic.play();



        }


    })
}