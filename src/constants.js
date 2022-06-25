export const emptyElementId = 15;

const domItemSizeDefault = 100;
const domItemSize425 = 80;
const domItemSize320 = 72;
const domItemSize280 = 64;

const getRandomUnique = (size) => {
	const array = [];
	while(array.length < size){
		const number = Math.floor(Math.random() * size);
		if(array.indexOf(number) === -1) {
			array.push(number);
		}
	}
	return array;
}

const generateItem = (itemSize, id, positionId, size) => {
	const rows = Math.sqrt(size);
	const row = Math.floor(positionId / rows);
	const top = Math.floor(positionId / rows) * itemSize; 
	const left = (positionId - (row * rows)) * itemSize;

	return {
		id,
		top,
		left,
	}
};

export const generateBoard = (size) => {
	let board = [];
	const innerWidth = window.innerWidth;
	const randomArray = getRandomUnique(size);

	for (let i = 0; i < size; i++) {
		if (innerWidth > 425){
			board.push(generateItem(domItemSizeDefault, i, randomArray[i], size));
		} else if (innerWidth <= 425 && innerWidth > 320 ){
			board.push(generateItem(domItemSize425, i, randomArray[i], size));
		} else if (innerWidth <= 320  && innerWidth > 280 ){
			board.push(generateItem(domItemSize320, i, randomArray[i], size));
		} else if (innerWidth <= 280){
			board.push(generateItem(domItemSize280, i, randomArray[i], size));
		}
	}
	return board;
};


const generateWinBoard = (size) => {
	let board = [];
	const innerWidth = window.innerWidth;

	for (let i = 0; i < size; i++) {
		if (innerWidth > 425){
			board.push(generateItem(domItemSizeDefault, i, i,size));
		} else if (innerWidth <= 425 && innerWidth > 320 ){
			board.push(generateItem(domItemSize425, i, i,size));
		} else if (innerWidth <= 320  && innerWidth > 280 ){
			board.push(generateItem(domItemSize320, i, i,size));
		} else if (innerWidth <= 280){
			board.push(generateItem(domItemSize280, i, i,size));
		}
	}
	return board;
};

export const winBoard = generateWinBoard(16);