var currentplayer = "X";
var cells = document.querySelectorAll('td');
var statusText = document.getElementById('status');
var strong = document.createElement("strong");
var optionsToWin = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
var grid = [
    false, false, false,
    false, true, false,
    false, false, false,
];
function handleCellClick(event) {
    console.log('Cell clicked:', event);
}
cells.forEach(function (cell) { return cell.addEventListener('click', handleCellClick); });
statusText === null || statusText === void 0 ? void 0 : statusText.appendChild(strong);
strong.textContent = ("The winner is " + currentplayer);
function handleClick(event) {
    var gridCell = event.target;
    if (gridCell.classList.contain('player-1')) {
        gridCell.classList.replace('player-1', 'player-2');
    }
    else {
        gridCell.classList.replace('player-2', 'player-1');
    }
}
//# sourceMappingURL=index.js.map