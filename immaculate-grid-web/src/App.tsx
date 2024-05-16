import './App.css'
import React from 'react';
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from '@mui/material';
import {GridApp} from './GridApp.tsx';

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});


function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const [mode, setMode] = React.useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );


    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <GridApp/>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App;