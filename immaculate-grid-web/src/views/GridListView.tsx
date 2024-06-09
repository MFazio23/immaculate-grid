import React, {ChangeEvent, useEffect, useState} from 'react';
import {DailyGrid} from '../APIGrid.ts';
import {Box, SelectChangeEvent} from '@mui/material';
import {Controls} from '../components/Controls.tsx';
import {SearchOption} from '../components/SearchBar.tsx';
import {getSearchOptions} from '../Categories.ts';
import '../Extensions.ts'
import Grids from '../components/Grids.tsx';
import GridList from '../components/GridList.tsx';

const filterGrids = (grids: DailyGrid[], filters: SearchOption[]) =>
    filters.length > 0 ?
        grids.filter(grid =>
            filters.all(filter => (
                [...grid.rows, ...grid.cols]).any(gridCategory => gridCategory === filter.id)
            )
        ) :
        grids

export function GridListView({gridData}: { gridData: DailyGrid[] }) {
    const [viewMode, setViewMode] = useState<string>(localStorage.getItem('viewMode') || 'grid');
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageCount, setPageCount] = useState<number>(1);
    const [filteredGrids, setFilteredGrids] = useState<DailyGrid[]>([]);
    const [searchOptions] = useState<SearchOption[]>(getSearchOptions());
    const [selectedFilters, setSelectedFilters] = useState<SearchOption[]>([]);

    useEffect(() => {
        const filteredGrids = filterGrids(gridData, selectedFilters);
        setPageCount(Math.ceil(filteredGrids.length / itemsPerPage));
        if (itemsPerPage === -1) {
            setFilteredGrids(filteredGrids);
        } else {
            const start = (currentPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            setFilteredGrids(filteredGrids.slice(start, end));
        }
    }, [gridData, currentPage, itemsPerPage, selectedFilters])

    const handleViewModeChange = (_event: React.MouseEvent<HTMLElement>, nullableViewMode: string | null) => {
        const newViewMode = nullableViewMode || 'grid';
        localStorage.setItem('viewMode', newViewMode);
        setViewMode(newViewMode);
    }

    const handleItemsPerPageChange = (event: SelectChangeEvent<number>) => {
        const itemCount = event.target.value;
        //TODO: Why does this think it's possibly a string?
        setItemsPerPage(typeof itemCount === 'number' ? itemCount : parseInt(itemCount));
    }

    const handleCurrentPageChanged = (_event: ChangeEvent<unknown>, newPage: number) => {
        setCurrentPage(newPage);
    }

    const handleFiltersChanged = (filters: SearchOption[]) => {
        setSelectedFilters(filters);
    }

    return (
        <Box>
            <Box p={'2rem'}>
                <Controls viewMode={viewMode} onViewModeChanged={handleViewModeChange} itemsPerPage={itemsPerPage}
                          onItemsPerPageChanged={handleItemsPerPageChange}
                          hasSearchBar={true} searchOptions={searchOptions} onFiltersChanged={handleFiltersChanged}/>
                {viewMode === 'grid' ?
                    <Grids filteredGrids={filteredGrids}/> :
                    <GridList filteredGrids={filteredGrids}/>
                }
                <Controls viewMode={viewMode} onViewModeChanged={handleViewModeChange}
                          itemsPerPage={itemsPerPage} onItemsPerPageChanged={handleItemsPerPageChange}
                          currentPage={currentPage} onCurrentPageChanged={handleCurrentPageChanged}
                          pageCount={pageCount} hasSearchBar={false}/>
            </Box>
        </Box>
    )
}