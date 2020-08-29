function appendBlock(income, id) {
    // income is annual income divided by 10,000
    let parentGrid = document.getElementById(id)

    for (let i = 1; i <= income; i += 1) {
        let div = document.createElement('div');
        div.className += 'block';
        parentGrid.appendChild(div);
    }

}

function appendSquare(networth, id) {
    // networth is the net worth divided by 100,000
    console.log("script called")
    let parentGrid = document.getElementById(id)

    for (let i = 1; i <= networth; i += 1) {
        let div = document.createElement('div');
        div.className += 'square';
        parentGrid.appendChild(div);
    }

}

function appendBigSquare(bigNetworth, id) {
    // bigNetWorth is the net worth divided by 100,000,000
    console.log("script called")
    let parentGrid = document.getElementById(id)

    for (let i = 1; i <= bigNetworth; i += 1) {
        let div = document.createElement('div');
        div.className += 'big-square';
        parentGrid.appendChild(div);
    }

}