import {Box, Typography} from '@mui/material';
import {PlayerInfoBoxProps} from './PlayerInfoBoxProps';

export const PlayerSeasonInfoBox = ({player}: PlayerInfoBoxProps) => {

    const data = [
        {
            label: '6+ WAR',
            value: player.teamInfo.some(team => team.war6Plus),
            teams: player.teamInfo.filter(team => team.war6Plus)
        },
        {
            label: '.300+ BA',
            value: player.teamInfo.some(team => team.battingAverage300),
            teams: player.teamInfo.filter(team => team.battingAverage300)
        },
        {
            label: '40+ 2B',
            value: player.teamInfo.some(team => team.doubles40),
            teams: player.teamInfo.filter(team => team.doubles40)
        },
        {
            label: '200+ H',
            value: player.teamInfo.some(team => team.hits200),
            teams: player.teamInfo.filter(team => team.hits200)
        },
        {
            label: '10+ HR',
            value: player.teamInfo.some(team => team.homeRuns10),
            teams: player.teamInfo.filter(team => team.homeRuns10)
        },
        {
            label: '30+ HR',
            value: player.teamInfo.some(team => team.homeRuns30),
            teams: player.teamInfo.filter(team => team.homeRuns30)
        },
        {
            label: '40+ HR',
            value: player.teamInfo.some(team => team.homeRuns40),
            teams: player.teamInfo.filter(team => team.homeRuns40)
        },
        {
            label: '100+ R',
            value: player.teamInfo.some(team => team.runs100),
            teams: player.teamInfo.filter(team => team.runs100)
        },
        {
            label: '100+ RBI',
            value: player.teamInfo.some(team => team.rbi100),
            teams: player.teamInfo.filter(team => team.rbi100)
        },
        {
            label: 'ERA <3.00',
            value: player.teamInfo.some(team => team.eraSub3),
            teams: player.teamInfo.filter(team => team.eraSub3)
        },
        {
            label: '200+ K',
            value: player.teamInfo.some(team => team.so200),
            teams: player.teamInfo.filter(team => team.so200)
        },
        {
            label: '10+ W',
            value: player.teamInfo.some(team => team.w10),
            teams: player.teamInfo.filter(team => team.w10)
        },
        {
            label: '20+ W',
            value: player.teamInfo.some(team => team.w20),
            teams: player.teamInfo.filter(team => team.w20)
        }
    ]

    const anyData = data.some(item => item.value);

    return (
        <Box>
            <Typography variant={'h5'}>Season highlights</Typography>

            {anyData ? data.map((item, index) => (
                item.value ?
                    <Typography key={index} variant={'body1'}>
                        {item.label} ({item.teams.map(team => team.id).join('/')})
                    </Typography> : null
            )) : <Typography variant={'body1'}>No career highlights</Typography>}
        </Box>
    );
}
