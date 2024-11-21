import {Box, Typography} from '@mui/material';
import {PlayerInfoBoxProps} from './PlayerInfoBoxProps';

export const PlayerCareerInfoBox = ({player}: PlayerInfoBoxProps) => {
    const data = [
        {
            label: '40+ WAR',
            value: player.careerStats?.war40 == true
        },
        {
            label: '.300+ Batting Average',
            value: player.careerStats?.battingAverage300 == true
        },
        {
            label: '2000+ Hits',
            value: player.careerStats?.hits2000 == true
        },
        {
            label: '3000+ Hits',
            value: player.careerStats?.hits3000 == true
        },
        {
            label: '300+ Home Runs',
            value: player.careerStats?.homeRuns300 == true
        },
        {
            label: '500+ Home Runs',
            value: player.careerStats?.homeRuns500 == true
        },
        {
            label: 'ERA < 3.00',
            value: player.careerStats?.eraSub3 == true
        },
        {
            label: '200+ Wins',
            value: player.careerStats?.wins200 == true
        },
        {
            label: '300+ Wins',
            value: player.careerStats?.wins300 == true
        },
        {
            label: '300+ Saves',
            value: player.careerStats?.saves300 == true
        },
        {
            label: '2000+ Strikeouts',
            value: player.careerStats?.strikeouts2000 == true
        },
        {
            label: '3000+ Strikeouts',
            value: player.careerStats?.strikeouts3000 == true
        }
    ];

    const anyData = data.some(item => item.value);

    return (
        <Box>
            <Typography variant={'h5'}>Career highlights</Typography>

            {anyData ? data.map((item, index) => (
                item.value ?
                    <Typography key={index} variant={'body1'}>
                        {item.label}
                    </Typography> : null
            )) : <Typography variant={'body1'}>No career highlights</Typography>}
        </Box>
    );
}
