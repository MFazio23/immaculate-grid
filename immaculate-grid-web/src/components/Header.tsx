import {AppBar, IconButton, Toolbar, Typography, useTheme} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GridOnIcon from '@mui/icons-material/GridOn';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SummarizeIcon from '@mui/icons-material/Summarize';
import {Link, useLocation} from 'react-router-dom';
import {useContext} from 'react';
import {ColorModeContext} from '../App.tsx';

export function Header() {
    const theme = useTheme();
    const location = useLocation();
    const colorMode = useContext(ColorModeContext);
    const isGridList = location.pathname === '/grid-list' || location.pathname === '/';
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6">Immaculate Grid grid list</Typography>
                {!isGridList && <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="view-grid-list"
                    sx={{ml: 1, mr: 'auto'}}
                    title={'View grid list'}
                    component={Link}
                    to="/grid-list">
                    {<ListAltIcon/>}
                </IconButton>}
                {location.pathname !== '/grid-stats' && <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="view-grid-stats"
                    sx={{ml: 1, mr: 'auto'}}
                    title={'View grid stats'}
                    component={Link}
                    to="/grid-stats">
                    {<SummarizeIcon/>}
                </IconButton>}
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="go-to-immaculate-grid"
                    sx={{ml: 1}}
                    title={'Go to ImmaculateGrid.com'}
                    href={'https://www.immaculategrid.com/'}>
                    {<GridOnIcon/>}
                </IconButton>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="mode"
                    sx={{ml: 1}}
                    title={`Change to ${theme.palette.mode === 'dark' ? `light` : 'dark'} mode`}
                    onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}