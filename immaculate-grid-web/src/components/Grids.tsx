import Grid from '@mui/material/Unstable_Grid2';
import {GridCard} from './GridCard.tsx';
import {DailyGrid} from '../APIGrid.ts';

export default function Grids({filteredGrids}: { filteredGrids: DailyGrid[] }) {
    return (<Grid container spacing={2}
                  display="flex" justifyContent="center" alignItems="center">
        {filteredGrids && filteredGrids.map((grid) => (
            <Grid key={grid.gridId}>
                <GridCard key={grid.gridId} grid={grid}/>
            </Grid>
        ))}
    </Grid>)
}