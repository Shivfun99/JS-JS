let currentPlayer="X";
let arr=Array(9).fill(null);

let win=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];


function handleClick(e){

    let i=e.id;

    if(arr[i]!=null)
        return;

    arr[i]=currentPlayer;
    e.innerText=currentPlayer;

    if(checkWinner()){
        document.getElementById("winner").innerText=currentPlayer+" Wins";
        return;
    }

    currentPlayer=currentPlayer=="X"?"O":"X";
}


function checkWinner(){

    for(let x of win){

        let a=x[0],b=x[1],c=x[2];

        if(arr[a]!=null && arr[a]==arr[b] && arr[b]==arr[c])
            return true;
    }

    return false;
}


function resetGame(){

    arr=Array(9).fill(null);
    currentPlayer="X";

    let cells=document.getElementsByClassName("col");

    for(let c of cells)
        c.innerText="";

    document.getElementById("winner").innerText="";
}