import {Box, Typography} from '@mui/material';
import {PlayerInfoBoxProps} from './PlayerInfoBoxProps';

export const PlayerAwardInfoBox = ({player}: PlayerInfoBoxProps) => {
    const data = [
        {
            label: 'Hall of Fame',
            value: player.hallOfFame,
        },
        {
            label: 'MVP',
            value: player.teamInfo.some(team => team.mvp),
            teams: player.teamInfo.filter(team => team.mvp)
        },
        {
            label: 'Cy Young',
            value: player.teamInfo.some(team => team.cyYoung),
            teams: player.teamInfo.filter(team => team.cyYoung)
        },
        {
            label: 'Gold Glove',
            value: player.teamInfo.some(team => team.goldGlove),
            teams: player.teamInfo.filter(team => team.goldGlove)
        },
        {
            label: 'Silver Slugger',
            value: player.teamInfo.some(team => team.silverSlugger),
            teams: player.teamInfo.filter(team => team.silverSlugger)
        },
        {
            label: 'Rookie of the Year',
            value: player.teamInfo.some(team => team.roty),
            teams: player.teamInfo.filter(team => team.roty)
        },
        {
            label: 'All-Star',
            value: player.teamInfo.some(team => team.allStar),
            teams: player.teamInfo.filter(team => team.allStar)
        },
    ]

    const anyData = data.some(item => item.value);

    return (
        <Box>
            <Typography variant={'h5'}>Awards/Info</Typography>

            {anyData ? data.map((item, index) => (
                item.value ?
                    <Typography key={index} variant={'body1'}>
                        {item.label} {item.teams ? `(${item.teams.map(team => team.id).join('/')})` : null}
                    </Typography> : null
            )) : <Typography variant={'body1'}>No awards</Typography>}
        </Box>
    );
}
