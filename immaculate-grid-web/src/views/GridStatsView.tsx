import {DailyGrid} from '../APIGrid.ts';
import {Box} from '@mui/material';
import {compileGridStatsCards} from '../stats-calculator.ts';
import GridStatsCard from '../components/GridStatsCard.tsx';
import Grid from '@mui/material/Unstable_Grid2';

export default function GridStatsView({gridData}: { gridData: DailyGrid[] }) {
    const gridStats = compileGridStatsCards(gridData);
    return (
        <Box padding={'2rem'}>
            <Grid container spacing={2} display="flex" justifyContent="center" alignItems="center">
                {gridStats.map(({id, title, description, stats}) => (
                    <Grid key={id}>
                        <GridStatsCard id={id} title={title} description={description} stats={stats}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}