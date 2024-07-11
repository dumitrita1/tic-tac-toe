const optionsToWin = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6] 
];

const html = document.querySelector('html');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

function isCheckedByPlayer(checkbox, player) {
    return checkbox.checked && parseInt(checkbox.getAttribute('data-player')) === player;   
}

function hasWon(player) {
    for (const options of optionsToWin) {
        const checkbox1 = checkboxes[options[0]];
        const checkbox2 = checkboxes[options[1]];
        const checkbox3 = checkboxes[options[2]];

        if (
            isCheckedByPlayer(checkbox1, player)  &&
            isCheckedByPlayer(checkbox2, player) && 
            isCheckedByPlayer(checkbox3, player)
        ) {
            return true;
        }
    }

    return false;
}

function handleCheckboxClick(event) {
    const checkbox = event.target;

    if (checkbox.hasAttribute('data-player') || html.hasAttribute('data-winner')) {
        event.preventDefault();
        return;
    }

    const currentPlayer = parseInt(html.getAttribute('data-current-player'));
    checkbox.setAttribute('data-player', currentPlayer);

    if (hasWon(currentPlayer)) {
        html.setAttribute('data-winner', currentPlayer);
        return
    }

    if (currentPlayer === 1) {
        html.setAttribute('data-current-player', 2);
    } else {
        html.setAttribute('data-current-player', 1);
    }
}

html.setAttribute('data-current-player', 1);

for (const checkbox of checkboxes) {
    checkbox.addEventListener('click', handleCheckboxClick);
}