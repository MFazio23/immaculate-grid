import './App.css'
import React, {useEffect, useState} from 'react';
import {createTheme, CssBaseline, Link, ThemeProvider, useMediaQuery} from '@mui/material';
import {loadGrids} from './data-loader.ts';
import {DailyGrid} from './APIGrid.ts';
import {Header} from './components/Header.tsx';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import {GridListView} from './views/GridListView.tsx';
import GridStatsView from './views/GridStatsView.tsx';
import ErrorView from './views/ErrorView.tsx';

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});

const AppLayout = () => (
    <>
        <Header/>
        <Outlet/>
        <Link href="https://www.flaticon.com/free-icons/grid" title="grid icons">
            Grid icons created by Freepik - Flaticon
        </Link>
    </>
)


function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [gridData, setGridData] = useState<DailyGrid[]>([]);

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
    const browserRouter = createBrowserRouter([
            {
                path: "/",
                element: <AppLayout/>,
                errorElement: <ErrorView/>,
                children: [
                    {
                        index: true,
                        element: <GridListView gridData={gridData}/>
                    },
                    {
                        path: "/grid-list",
                        element: <GridListView gridData={gridData}/>
                    },
                    {
                        path: "/grid-stats",
                        element: <GridStatsView gridData={gridData}/>
                    }
                ]
            }
        ]
    )

    if (import.meta.hot) {
        import.meta.hot.dispose(() => browserRouter.dispose());
    }

    useEffect(() => {
        const loadDataAsync = async () => {
            const apiGrids = await loadGrids();
            setGridData(apiGrids);
        }
        loadDataAsync();
    }, []);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <RouterProvider router={browserRouter}/>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App;

