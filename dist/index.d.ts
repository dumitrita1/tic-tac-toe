declare const optionsToWin: Array<Array<number>>;
declare const html: HTMLHtmlElement;
declare const checkboxes: NodeList;
declare function isCheckedByPlayer(checkbox: HTMLInputElement, player: number): boolean;
declare function hasWon(player: number): boolean;
declare function handleCheckboxClick(event: MouseEvent): void;
