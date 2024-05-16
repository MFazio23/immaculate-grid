import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import {DailyGrid} from '../APIGrid.ts';
import GridListItem from './GridListItem.tsx';

export default function GridList({filteredGrids}: { filteredGrids: DailyGrid[] }) {
    const columns = [
        {field: 'id', headerName: 'ID'},
        {field: 'date', headerName: 'Date'},
        {field: 'rows', headerName: 'Rows'},
        {field: 'cols', headerName: 'Columns'},
    ]
    return (
        <TableContainer component={Paper} sx={{width: 'auto', mx: '1em'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map(column => (
                            <TableCell key={column.field}>{column.headerName}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredGrids.map(grid => <GridListItem key={grid.gridId} grid={grid}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}