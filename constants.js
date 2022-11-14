export const emptyItemId = 15;
const itemSizeDefault = 100;
const itemSize425 = 80;
const itemSize320 = 72;
const itemSize280 = 64;
const getRandomUnique = (size) => {
    const array = [];
    while (array.length < size) {
        const number = Math.floor(Math.random() * size);
        if (array.indexOf(number) === -1) {
            array.push(number);
        }
    }
    return array;
};
const generateItem = (itemSize, id, positionId, size) => {
    const rows = Math.sqrt(size);
    const row = Math.floor(positionId / rows);
    const top = Math.floor(positionId / rows) * itemSize;
    const left = (positionId - (row * rows)) * itemSize;
    return {
        id,
        top,
        left,
    };
};
export const generateBoard = (size) => {
    const board = [];
    const innerWidth = window.innerWidth;
    const randomArray = getRandomUnique(size);
    for (let i = 0; i < size; i++) {
        if (innerWidth > 425) {
            board.push(generateItem(itemSizeDefault, i, randomArray[i], size));
        }
        if (innerWidth <= 425 && innerWidth > 320) {
            board.push(generateItem(itemSize425, i, randomArray[i], size));
        }
        if (innerWidth <= 320 && innerWidth > 280) {
            board.push(generateItem(itemSize320, i, randomArray[i], size));
        }
        if (innerWidth <= 280) {
            board.push(generateItem(itemSize280, i, randomArray[i], size));
        }
    }
    return board;
};
export const winBoard = [
    {
        'id': 0,
        'top': 0,
        'left': 0,
    },
    {
        'id': 1,
        'top': 0,
        'left': 100,
    },
    {
        'id': 2,
        'top': 0,
        'left': 200,
    },
    {
        'id': 3,
        'top': 0,
        'left': 300,
    },
    {
        'id': 4,
        'top': 100,
        'left': 0,
    },
    {
        'id': 5,
        'top': 100,
        'left': 100,
    },
    {
        'id': 6,
        'top': 100,
        'left': 200,
    },
    {
        'id': 7,
        'top': 100,
        'left': 300,
    },
    {
        'id': 8,
        'top': 200,
        'left': 0,
    },
    {
        'id': 9,
        'top': 200,
        'left': 100,
    },
    {
        'id': 10,
        'top': 200,
        'left': 200,
    },
    {
        'id': 11,
        'top': 200,
        'left': 300,
    },
    {
        'id': 12,
        'top': 300,
        'left': 0,
    },
    {
        'id': 13,
        'top': 300,
        'left': 100,
    },
    {
        'id': 14,
        'top': 300,
        'left': 200,
    },
    {
        'id': 15,
        'top': 300,
        'left': 300,
    },
];
