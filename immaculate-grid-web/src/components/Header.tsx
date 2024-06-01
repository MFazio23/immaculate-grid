import {AppBar, IconButton, Toolbar, Typography, useTheme} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GridOnIcon from '@mui/icons-material/GridOn';
import {useContext} from 'react';
import {ColorModeContext} from '../App.tsx';

export function Header() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6">Immaculate Grid</Typography>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="mode"
                    sx={{ml: 'auto'}}
                    title={'Go to ImmaculateGrid.com'}
                    href={'https://www.immaculategrid.com/'}
                >
                    {<GridOnIcon/>}
                </IconButton>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="mode"
                    sx={{ml: 1}}
                    title={`Change to ${theme.palette.mode === 'dark' ? `light` : 'dark'} mode`}
                    onClick={colorMode.toggleColorMode}
                >
                    {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}