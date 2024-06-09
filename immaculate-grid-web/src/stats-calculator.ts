import {GridStatsCardProps} from './components/GridStatsCard.tsx';
import {DailyGrid} from './APIGrid.ts';
import {categoryMappings, teamMappings} from './Categories.ts';

const totalGrids = (gridData: DailyGrid[]): GridStatsCardProps => {
    return {
        id: 'total-grids',
        title: 'Total Grids',
        description: 'The total number of grids.',
        stats: [{id: 'total-grids', title: 'Total Grids', count: gridData.length}]
    }
}

const mostUsedTeams = (gridData: DailyGrid[]): GridStatsCardProps => {
    const teams =
        gridData.flatMap(grid => [...grid.rows, ...grid.cols]).filter(id => !!teamMappings[id]);

    const teamCounts = teams.reduce((counts: Record<string, number>, teamId) => {
        counts[teamId] = (counts[teamId] || 0) + 1;
        return counts;
    }, {});

    const sortedTeamCounts =
        Object.entries(teamCounts).sort(([, teamACount], [, teamBCount]) => teamBCount - teamACount)

    const mappedTeams = sortedTeamCounts.slice(0, 5).map(([teamId, count]) => (
        {
            id: teamId,
            title: teamMappings[teamId].name,
            count
        }
    ));

    return {
        id: 'most-used-teams',
        title: 'Most Used Teams',
        description: 'The teams used in the most grids.',
        stats: mappedTeams
    }
}

const mostUsedCategories = (gridData: DailyGrid[]): GridStatsCardProps => {
    const categories =
        gridData.flatMap(grid => [...grid.rows, ...grid.cols]).filter(id => !!categoryMappings[id]);

    const categoryCounts = categories.reduce((counts: Record<string, number>, categoryId) => {
        counts[categoryId] = (counts[categoryId] || 0) + 1;
        return counts;
    }, {});

    const sortedCategoryCounts =
        Object.entries(categoryCounts).sort(([, categoryACount], [, categoryBCount]) => categoryBCount - categoryACount)

    const mappedCategories = sortedCategoryCounts.slice(0, 5).map(([categoryId, count]) => (
        {
            id: categoryId,
            title: categoryMappings[categoryId].shortText,
            count
        }
    ));

    return {
        id: 'most-used-categories',
        title: 'Most Used Categories',
        description: 'The categories used in the most grids.',
        stats: mappedCategories
    }
}

export const compileGridStatsCards = (gridData: DailyGrid[]): GridStatsCardProps[] => {
    return [
        totalGrids(gridData),
        mostUsedTeams(gridData),
        mostUsedCategories(gridData),
    ];
}