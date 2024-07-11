const optionsToWin: Array<Array<number>> = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6] 
];

const html: HTMLHtmlElement = document.querySelector('html');
const checkboxes: NodeList = document.querySelectorAll('input[type="checkbox"]');

function isCheckedByPlayer(checkbox: HTMLInputElement, player: number): boolean {
    return checkbox.checked && parseInt(checkbox.getAttribute('data-player')) === player;   
}

function hasWon(player: number): boolean {
    for (const options of optionsToWin) {
        const checkbox1: HTMLInputElement = checkboxes[options[0]] as HTMLInputElement;
        const checkbox2: HTMLInputElement = checkboxes[options[1]] as HTMLInputElement;
        const checkbox3: HTMLInputElement = checkboxes[options[2]] as HTMLInputElement;

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

function handleCheckboxClick(event: MouseEvent): void {
    const checkbox = event.target as HTMLInputElement;

    if (checkbox.hasAttribute('data-player') || html.hasAttribute('data-winner')) {
        event.preventDefault();
        return;
    }

    const currentPlayer = parseInt(html.getAttribute('data-current-player'));
    checkbox.setAttribute('data-player', currentPlayer.toString());

    if (hasWon(currentPlayer)) {
        html.setAttribute('data-winner', currentPlayer.toString());
        return
    }

    if (currentPlayer === 1) {
        html.setAttribute('data-current-player', "2");
    } else {
        html.setAttribute('data-current-player', "1");
    }
}

html.setAttribute('data-current-player', "1");

for (const checkbox of checkboxes) {
    checkbox.addEventListener('click', handleCheckboxClick);
}