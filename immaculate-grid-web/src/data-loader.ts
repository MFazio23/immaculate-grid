import {APIGrid, DailyGrid, DailyGridSquare} from './APIGrid.ts';
import {headerMapping} from './Categories.ts';

const mapGrid = (apiGrid: APIGrid): DailyGrid => {
    const rows = ['', ...apiGrid.rows];
    const cols = ['', ...apiGrid.cols];

    const squares: DailyGridSquare[][] = rows.map((row, rowIndex) => {
        return cols.map((col, colIndex) => {
            if (rowIndex === 0 && colIndex === 0) {
                return {id: '', text: ''};
            }
            if (rowIndex === 0) {
                return headerMapping(col);
            }
            if (colIndex === 0) {
                return headerMapping(row);
            }
            const results = apiGrid.possibleAnswers[row]?.[col];
            return {id: `${row}-${col}`, text: results?.count?.toString() ?? '', link: results?.link};
        });
    });

    return ({
        gridId: apiGrid.gridId,
        date: apiGrid.date,
        rows: apiGrid.rows,
        cols: apiGrid.cols,
        cells: squares
    })
}

export const loadGrids = async (): Promise<DailyGrid[]> => {
    const response = await fetch('https://faziodb.firebaseio.com/immaculate-grid.json');
    const gridJson = await response.json();
    return gridJson.slice(1).reverse().map((grid: APIGrid) => mapGrid(grid));
}