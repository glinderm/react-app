export const labels = {
    0: null,
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
    9: 'I',
    10: 'J'
}

export function newBoard () {
    const newBoard = [];
    for (let i = 0; i < 11; i++) {
        let newRow = [];
        for (let j = 0; j < 11; j++) {
            if (i === 0) {
                newRow.push(String(j));
            }
            if (j === 0) {
                newRow.push(labels[j]);
            }
            else {
                newRow.push(" ");
            }
        }
        newBoard.push(newRow);
    }
    return newBoard;
}