import {DailyGrid, DailyGridSquare} from '../APIGrid.ts';
import {Card, CardContent, CardHeader, Link, Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

interface GridCardProps {
    grid: DailyGrid;
}

export function GridCard({grid}: GridCardProps) {
    const theme = useTheme();
    const gridName = `Grid #${grid.gridId}`;

    const getSquare = (square: DailyGridSquare) => {
        const image = theme.palette.mode === 'dark' ? square.darkImage : square.lightImage;
        if (image) {
            return <img style={{maxHeight: '3em', maxWidth: '3em'}} src={image} alt={square.text}/>;
        } else if (square.link) {
            return <Link underline="none" href={square.link}><Typography>{square.text}</Typography></Link>;
        } else {
            return <Typography>{square.text}</Typography>;
        }
    }

    const cardHeader =
        <Link href={`https://www.immaculategrid.com/grid-${grid.gridId}`} underline="none">{gridName}</Link>

    return (
        <Card>
            <CardHeader title={cardHeader} subheader={grid.date}/>
            <CardContent>
                <Grid container width={'20em'}
                      style={{border: '1px solid black', borderRadius: 10, overflow: 'hidden'}}
                      spacing={1}>
                    {grid.cells.map((squareRow, rowIndex) => (
                        squareRow.map((square, colIndex) => (
                            <Grid xs={3} height={'4em'} key={`${rowIndex}-${colIndex}`}
                                  display="flex" justifyContent="center" alignItems="center"
                                  style={{border: '1px solid #CCC'}}>
                                {getSquare(square)}
                            </Grid>
                        ))
                    ))}
                </Grid>
            </CardContent>
        </Card>
    )
}