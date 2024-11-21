import {Autocomplete, Box, debounce, TextField, Typography} from '@mui/material';
import {useEffect, useMemo, useState} from 'react';
import {searchPlayer} from '../data/player-data';
import {PlayerResultCard} from '../components/player-results/PlayerResultCard';
import {Player} from '../Player';

export function PlayerSearchView() {
    const [searchValue, setSearchValue] = useState('');
    const [players, setPlayers] = useState<Player[]>([]);
    const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

    const searchPlayers = useMemo(() => debounce(
        (request: { input: string }) => {
            if (request.input && request.input !== selectedPlayer?.name) {
                searchPlayer(request.input).then((result) => {
                    console.log("Search player result", result);
                    setPlayers(result || []);
                });
            }
        },
        500
    ), [selectedPlayer?.name]);

    useEffect(() => {
        if (searchValue) {
            searchPlayers({input: searchValue})
        } else {
            setPlayers([]);
        }

        return () => {
        }
    }, [searchValue, searchPlayers]);

    // I'm allowing the any for the props here. It's not ideal but meh.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const renderOption = (props: any, player: Player) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {key: key, ...optionProps} = props;
        return (
            <Box key={player.id} p={2} component="li" {...optionProps} width={'100%'}>
                <Box display={'flex'} width={'100%'} justifyContent='space-between' flexDirection='row'
                     alignContent='center'>
                    <Typography variant="h6">{player.name}</Typography>
                    <Typography variant="body2" alignSelf='center'>{player.years}</Typography>
                </Box>
            </Box>
        )
    }

    return (
        <Box p={3}>
            <Autocomplete
                sx={{width: 300, margin: '0 auto'}}
                filterOptions={(x) => x}
                options={players}
                value={selectedPlayer}
                inputValue={searchValue}
                autoHighlight={true}
                onInputChange={(_e, value: string | null) => setSearchValue(value ?? '')}
                onChange={(_event, newValue) => {
                    console.log("Selected player", newValue);
                    if (typeof newValue === 'string') {
                        return;
                    }
                    if (newValue) {
                        setSelectedPlayer(newValue);
                    }
                    setPlayers([])
                }}
                disableCloseOnSelect={true}
                getOptionLabel={(option) => typeof option === 'string' ? option : option.name}
                freeSolo={true}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                noOptionsText={'No players found'}
                renderInput={(params) => <TextField {...params} label="Search for a player"/>}
                renderOption={renderOption}
            />
            <PlayerResultCard selectedPlayer={selectedPlayer}/>
            <Typography variant={'caption'}>Data and data rights from Immaculate Grid. This is all theirs, I'm just
                doing this to have more fun at the game.</Typography>
        </Box>
    )
}
