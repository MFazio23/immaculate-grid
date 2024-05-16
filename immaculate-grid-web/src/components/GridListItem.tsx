import {DailyGrid} from '../APIGrid.ts';
import {Link, TableCell, TableRow} from '@mui/material';
import {headerMapping} from '../Categories.ts';

export default function GridListItem({grid}: { grid: DailyGrid }) {
    return (
        <TableRow key={grid.gridId}>
            <TableCell>
                <Link underline="none" href={`https://www.immaculategrid.com/grid-${grid.gridId}`}>{grid.gridId}</Link>
            </TableCell>
            <TableCell>{grid.date}</TableCell>
            <TableCell>{grid.rows.map(row => headerMapping(row).text).join(', ')}</TableCell>
            <TableCell>{grid.cols.map(col => headerMapping(col).text).join(', ')}</TableCell>
        </TableRow>
    )
}