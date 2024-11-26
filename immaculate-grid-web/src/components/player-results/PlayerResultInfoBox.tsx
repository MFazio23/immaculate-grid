import {Box, Typography} from '@mui/material';
import {PlayerInfoBoxProps} from './PlayerInfoBoxProps';
import {PlayerDraftInfo} from '../../Player';

export const PlayerResultInfoBox = ({player}: PlayerInfoBoxProps) => {
    const firstRoundPick: PlayerDraftInfo | undefined = player.draftInfo.find(draft => draft.firstRoundPick)
    return (
        <Box>
            <Typography variant={'h4'}>{player?.name}</Typography>
            <Typography variant={'body2'}>{player?.years}</Typography>
            <Typography variant={'body1'}>{player?.teamList}</Typography>
            <Typography variant={'body1'}>{player?.positionList}</Typography>
            {firstRoundPick ?
                <Typography variant={'body1'}>{`First round pick (${firstRoundPick.id})`}</Typography> :
                null
            }
        </Box>
    );
}
