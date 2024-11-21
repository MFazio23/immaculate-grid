import {Box, Typography} from '@mui/material';
import {PlayerInfoBoxProps} from './PlayerInfoBoxProps';

export const PlayerResultInfoBox = ({player}: PlayerInfoBoxProps) =>
    (
        <Box>
            <Typography variant={'h4'}>{player?.name}</Typography>
            <Typography variant={'body2'}>{player?.years}</Typography>
            <Typography variant={'body1'}>{player?.teamList}</Typography>
            <Typography variant={'body1'}>{player?.positionList}</Typography>
        </Box>
    )
