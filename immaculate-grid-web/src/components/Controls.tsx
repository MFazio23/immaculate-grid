import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Pagination,
    Paper,
    Select,
    SelectChangeEvent,
    ToggleButton,
    ToggleButtonGroup
} from '@mui/material';
import React, {ChangeEvent} from 'react';
import SearchBar, {SearchOption} from './SearchBar.tsx';

export interface ControlsProps {
    viewMode: string | null;
    onViewModeChanged: (event: React.MouseEvent<HTMLElement>, newViewMode: string | null) => void;
    itemsPerPage: number;
    onItemsPerPageChanged: (event: SelectChangeEvent<number>) => void;
    currentPage?: number;
    onCurrentPageChanged?: (event: ChangeEvent<unknown>, newPage: number) => void;
    pageCount?: number;
    hasSearchBar: boolean;
    searchOptions?: SearchOption[];
    onFiltersChanged?: (filters: SearchOption[]) => void;
}

export function Controls(
    {
        viewMode,
        onViewModeChanged,
        itemsPerPage,
        onItemsPerPageChanged,
        currentPage,
        onCurrentPageChanged,
        pageCount,
        hasSearchBar,
        searchOptions,
        onFiltersChanged,
    }: ControlsProps
) {
    return (
        <Paper elevation={3} style={{margin: '1em', padding: '1em'}}>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <ToggleButtonGroup value={viewMode} exclusive size={'large'} onChange={onViewModeChanged}>
                    <ToggleButton value={'grid'}>Grid</ToggleButton>
                    <ToggleButton value={'list'}>List</ToggleButton>
                </ToggleButtonGroup>

                {!hasSearchBar && <Pagination count={pageCount} page={currentPage} variant="outlined" color="primary"
                                              onChange={onCurrentPageChanged}/>}
                {hasSearchBar && searchOptions &&
                    <SearchBar options={searchOptions} onFiltersChanged={onFiltersChanged}/>}
                <FormControl sx={{minWidth: 120}}>
                    <InputLabel id={"items-per-page-label"}>Items per page</InputLabel>
                    <Select labelId={"items-per-page-label"} id={"items-per-page"} value={itemsPerPage}
                            autoWidth
                            onChange={onItemsPerPageChanged} label="Items per page">
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                        <MenuItem value={-1}>All</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Paper>
    );
}