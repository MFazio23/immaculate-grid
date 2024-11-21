import {Box, Card, CardContent, CardMedia, Grid2 as Grid} from '@mui/material';
import {Player} from '../../Player';
import {PlayerResultInfoBox} from './PlayerResultInfoBox';
import {PlayerAwardInfoBox} from './PlayerAwardInfoBox';
import {PlayerCareerInfoBox} from './PlayerCareerInfoBox';
import {PlayerSeasonInfoBox} from './PlayerSeasonInfoBox';

interface PlayerResultCardProps {
    selectedPlayer: Player | null,
}

export function PlayerResultCard({selectedPlayer: player}: PlayerResultCardProps) {
    if (!player) {
        return null;
    }
    const photoUrl = player ? `https://www.baseball-reference.com/req/${player.headshotUrl}` : '';
    return (
        <Box margin="0 auto" pt={1} alignSelf="center" width={'100%'} maxWidth={800}>
            <Card sx={{display: 'flex', position: 'relative', justifyContent: 'space-between'}}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <CardContent sx={{flex: '1 0 auto'}}>
                        <Grid container={true} spacing={2}>
                            <Grid width={200}>
                                <PlayerResultInfoBox player={player}/>
                            </Grid>
                            <Grid width={200}>
                                <PlayerAwardInfoBox player={player}/>
                            </Grid>
                            <Grid width={200}>
                                <PlayerCareerInfoBox player={player}/>
                            </Grid>
                            <Grid width={200}>
                                <PlayerSeasonInfoBox player={player}/>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Box sx={{display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>

                    </Box>
                </Box>
                {player ? <CardMedia
                    component="img"
                    sx={{position: 'absolute', right: 0, top: 0, width: 120, height: 180}}
                    image={photoUrl}
                    alt={`${player.name} headshot`}
                /> : null}
            </Card>
        </Box>
    );
}
