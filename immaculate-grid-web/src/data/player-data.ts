import {BRefPlayer, Player, PlayerCareerStats, PlayerPositions, PlayerTeam} from '../Player';

const playerApiUrl = 'https://api.sports-reference.com/v1/br/players?search=';

interface APIResult {
    players: BRefPlayer[];
    updated: number;
}

const getProperTeamId = (teamId: string): string => {
    switch (teamId) {
        case 'ANA':
            return 'LAA';
        case 'FLA':
            return 'MIA';
        case 'MON':
            return 'WSN';
        case 'WSH':
            return 'WSN';
        case 'TBD':
            return 'TBR';
        default:
            return teamId;
    }
}

const mapTeamInfo = (teams: BRefPlayer['teams']): PlayerTeam[] =>
    teams.map((team) => ({
        id: getProperTeamId(team.id),
        war6Plus: team.season_6_war === 1,
        allStar: team.season_allstar === 1,
        goldGlove: team.season_award_gold_glove === 1,
        mvp: team.season_award_mvp === 1,
        roty: team.season_award_roty === 1,
        cyYoung: team.season_award_cy_young === 1,
        silverSlugger: team.season_award_silver_slugger === 1,
        battingAverage300: team.season_b_avg_300 === 1,
        doubles40: team.season_b_doubles_40 === 1,
        hits200: team.season_b_h_200 === 1,
        homeRuns10: team.season_b_hr_10 === 1,
        homeRuns30: team.season_b_hr_30 === 1,
        homeRuns40: team.season_b_hr_40 === 1,
        runs100: team.season_b_r_100 === 1,
        rbi100: team.season_b_rbi_100 === 1,
        eraSub3: team.season_p_era_300 === 1,
        so200: team.season_p_so_200 === 1,
        w10: team.season_p_w_10 === 1,
        w20: team.season_p_w_20 === 1,
        worldSeriesChamp: team.ws_champ === 1,
        positions: {
            pitcher: team.season_pos_p === 1,
            catcher: team.season_pos_c === 1,
            firstBase: team.season_pos_1b === 1,
            secondBase: team.season_pos_2b === 1,
            thirdBase: team.season_pos_3b === 1,
            shortstop: team.season_pos_ss === 1,
            leftField: team.season_pos_lf === 1,
            centerField: team.season_pos_cf === 1,
            rightField: team.season_pos_rf === 1,
            outfield: team.season_pos_of === 1,
            designatedHitter: team.season_pos_dh === 1,
        }
    }))

const mapCareerStats = (player: BRefPlayer): PlayerCareerStats => ({
    war40: player.career_40_war === 1,
    battingAverage300: player.career_b_avg_300 === 1,
    hits2000: player.career_b_h_2000 === 1,
    hits3000: player.career_b_h_3000 === 1,
    homeRuns300: player.career_b_hr_300 === 1,
    homeRuns500: player.career_b_hr_500 === 1,
    eraSub3: player.career_p_era_300 === 1,
    wins200: player.career_p_w_200 === 1,
    wins300: player.career_p_w_300 === 1,
    saves300: player.career_p_sv_300 === 1,
    strikeouts2000: player.career_p_so_2000 === 1,
    strikeouts3000: player.career_p_so_3000 === 1,
})

const positionMap = {
    'P': 'pitcher',
    'C': 'catcher',
    '1B': 'firstBase',
    '2B': 'secondBase',
    '3B': 'thirdBase',
    'SS': 'shortstop',
    'LF': 'leftField',
    'CF': 'centerField',
    'RF': 'rightField',
    'OF': 'outfield',
    'DH': 'designatedHitter',
}

const mapPositionList = (teamInfo: PlayerTeam[]): string => {
    const allPositions = teamInfo.map(team => team.positions);
    const positionsList = Object.entries(positionMap).reduce((positionArray, [id, field]) => {
        if (allPositions.some(position => position[field as keyof PlayerPositions])) {
            return [...positionArray, id];
        }
        return positionArray;
    }, [] as string[]);

    if (positionsList.some(position => position === 'LF' || position === 'CF' || position === 'RF')) {
        return positionsList.filter(p => p !== 'OF').join('/');
    }
    return positionsList.join('/');
}

const convertPlayers = (players: BRefPlayer[]): Player[] =>
    players.map((player) => {
        const teamInfo = mapTeamInfo(player.teams);
        const positionList = mapPositionList(teamInfo);
        return ({
            id: player.id,
            link: player.link,
            name: player.name,
            detailedName: player.name_detailed,
            years: player.years,
            headshotUrl: player.headshot_url,
            birthCountry: player.birth_country,
            bornOutsideUSA: player.birth_country !== 'USA',
            hallOfFame: player.career_award_hof === 1,
            teamList: teamInfo.map((team) => team.id).join('/'),
            teamInfo: teamInfo,
            positionList: positionList,
            singleTeam: player.career_single_team === 1,
            playedInNLB: player.career_played_nlb === 1,
            careerStats: mapCareerStats(player),
            draftInfo: player.draft?.map((draft) => ({
                id: getProperTeamId(draft.id),
                firstRoundPick: draft.first_round_draft_pick === 1,
            })) ?? [],
        });
    })

export const searchPlayer = async (searchTerm: string): Promise<Player[]> => {
    const url = `${playerApiUrl}${searchTerm}`;

    const result = await fetch(url);

    const resultData: APIResult = await result.json()


    return convertPlayers(resultData.players);
}
