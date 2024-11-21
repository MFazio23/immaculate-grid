export interface Player {
    id: string;
    link: string;
    name: string;
    detailedName: string;
    years: string;
    headshotUrl: string;
    birthCountry: string;
    bornOutsideUSA: boolean;
    hallOfFame: boolean;
    teamList: string;
    positionList: string;
    teamInfo: PlayerTeam[];
    singleTeam: boolean;
    playedInNLB: boolean;
    careerStats: PlayerCareerStats;
    draftInfo: PlayerDraftInfo[];
}

export interface PlayerDraftInfo {
    id: string;
    firstRoundPick: boolean;
}

export interface PlayerCareerStats {
    war40: boolean;
    battingAverage300: boolean;
    hits2000: boolean;
    hits3000: boolean;
    homeRuns300: boolean;
    homeRuns500: boolean;
    eraSub3: boolean;
    wins200: boolean;
    wins300: boolean;
    saves300: boolean;
    strikeouts2000: boolean;
    strikeouts3000: boolean;
}

export interface PlayerTeam {
    id: string;
    war6Plus: boolean;
    allStar: boolean;
    goldGlove: boolean;
    mvp: boolean;
    roty: boolean;
    cyYoung: boolean;
    silverSlugger: boolean;
    battingAverage300: boolean;
    doubles40: boolean;
    hits200: boolean;
    homeRuns10: boolean;
    homeRuns30: boolean;
    homeRuns40: boolean;
    runs100: boolean;
    rbi100: boolean;
    eraSub3: boolean;
    so200: boolean;
    w10: boolean;
    w20: boolean;
    worldSeriesChamp: boolean;
    positions: PlayerPositions;
}

export interface PlayerPositions {
    pitcher: boolean;
    catcher: boolean;
    firstBase: boolean;
    secondBase: boolean;
    thirdBase: boolean;
    shortstop: boolean;
    leftField: boolean;
    centerField: boolean;
    rightField: boolean;
    outfield: boolean;
    designatedHitter: boolean;
}

export interface BRefPlayer {
    birth_country: string;
    career_40_war?: number;
    career_award_hof?: number;
    career_b_avg_300?: number;
    career_b_h_2000?: number;
    career_b_h_3000?: number;
    career_b_hr_300?: number;
    career_b_hr_500?: number;
    career_p_era_300?: number;
    career_p_w_200?: number;
    career_p_w_300?: number;
    career_p_so_2000?: number;
    career_p_so_3000?: number;
    career_p_sv_300?: number;
    career_single_team?: number;
    career_played_nlb?: number;
    headshot_url: string;
    id: string;
    link: string;
    name: string;
    name_detailed: string;
    teams: {
        id: string;
        season_6_war?: number;
        season_allstar?: number;
        season_award_cy_young?: number;
        season_award_gold_glove?: number;
        season_award_mvp?: number;
        season_award_roty?: number;
        season_award_silver_slugger?: number;
        season_no_hitter?: number;
        season_b_avg_300?: number;
        season_b_doubles_40?: number;
        season_b_h_200?: number;
        season_b_hr_10?: number;
        season_b_hr_30?: number;
        season_b_hr_40?: number;
        season_b_r_100?: number;
        season_b_rbi_100?: number;
        season_p_era_300?: number;
        season_p_so_200?: number;
        season_p_w_10?: number;
        season_p_w_20?: number;
        season_pos_p?: number;
        season_pos_c?: number;
        season_pos_1b?: number;
        season_pos_2b?: number;
        season_pos_3b?: number;
        season_pos_ss?: number;
        season_pos_lf?: number;
        season_pos_cf?: number;
        season_pos_rf?: number;
        season_pos_of?: number;
        season_pos_dh?: number;
        ws_champ?: number;
    }[];
    draft: {
        id: string;
        first_round_draft_pick?: number;
    }[];
    years: string;
}
