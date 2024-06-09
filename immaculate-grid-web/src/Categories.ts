enum CategoryType {
    Award = "Award",
    Born = "Born",
    Career = "Career",
    Season = "Season",
    Position = "Position",
    Event = "Misc",
    Team = "Team",
}

interface Category {
    id: string;
    text: string;
    shortText: string;
    type: CategoryType;
}

export const categoryMappings: Record<string, Category> = {
    born_outside_usa: {
        id: "born_outside_usa",
        text: "Born outside the USA",
        shortText: "Born outside USA",
        type: CategoryType.Born
    },
    born_DOM: {
        id: "born_DOM",
        text: "Born in the Dominican Republic",
        shortText: "Born in the DR",
        type: CategoryType.Born
    },
    born_PRI: {id: "born_PRI", text: "Born in Puerto Rico", shortText: "Born in PR", type: CategoryType.Born},
    career_40_war: {id: "career_40_war", text: "40+ WAR Career", shortText: "40+ WAR", type: CategoryType.Career},
    career_award_hof: {id: "career_award_hof", text: "Hall of Fame", shortText: "HOF", type: CategoryType.Career},
    career_b_avg_300: {
        id: "career_b_avg_300",
        text: ".300+ AVG Career",
        shortText: ".300+ AVG",
        type: CategoryType.Career
    },
    career_b_h_2000: {
        id: "career_b_h_2000",
        text: "2000+ Hits Career",
        shortText: "2000+ Hits",
        type: CategoryType.Career
    },
    career_b_h_3000: {
        id: "career_b_h_3000",
        text: "3000+ Hits Career",
        shortText: "3000+ Hits",
        type: CategoryType.Career
    },
    career_b_hr_300: {id: "career_b_hr_300", text: "300+ HR Career", shortText: "300+ HR", type: CategoryType.Career},
    career_b_hr_500: {id: "career_b_hr_500", text: "500+ HR Career", shortText: "500+ HR", type: CategoryType.Career},
    career_p_era_300: {
        id: "career_p_era_300",
        text: "≤ 3.00 ERA Career",
        shortText: "≤ 3.00 ERA",
        type: CategoryType.Career
    },
    career_p_so_2000: {id: "career_p_so_2000", text: "2000+ K Career", shortText: "2000+ K", type: CategoryType.Career},
    career_p_so_3000: {id: "career_p_so_3000", text: "3000+ K Career", shortText: "3000+ K", type: CategoryType.Career},
    career_p_sv_300: {
        id: "career_p_sv_300",
        text: "300+ Save Career",
        shortText: "300+ Saves",
        type: CategoryType.Career
    },
    career_p_w_200: {id: "career_p_w_200", text: "200+ Wins Career", shortText: "200+ Wins", type: CategoryType.Career},
    career_p_w_300: {id: "career_p_w_300", text: "300+ Wins Career", shortText: "300+ Wins", type: CategoryType.Career},
    career_played_nlb: {
        id: "career_played_nlb",
        text: "Played in the Major Negro&nbsp;Lgs",
        shortText: "Played in NLB",
        type: CategoryType.Career
    },
    career_single_team: {
        id: "career_single_team",
        text: "Played Entire Career with One Team",
        shortText: "Single Team",
        type: CategoryType.Career
    },
    first_round_draft_pick: {
        id: "first_round_draft_pick",
        text: "First Round Draft Pick",
        shortText: "1st Round Pick",
        type: CategoryType.Event
    },
    season_6_war: {id: "season_6_war", text: "6+ WAR Season", shortText: "6+ WAR", type: CategoryType.Season},
    season_allstar: {id: "season_allstar", text: "All-Star", shortText: "All-Star", type: CategoryType.Award},
    season_award_cy_young: {
        id: "season_award_cy_young",
        text: "Cy Young",
        shortText: "Cy Young",
        type: CategoryType.Award
    },
    season_award_gold_glove: {
        id: "season_award_gold_glove",
        text: "Gold Glove",
        shortText: "Gold Glove",
        type: CategoryType.Award
    },
    season_award_mvp: {id: "season_award_mvp", text: "MVP", shortText: "MVP", type: CategoryType.Award},
    season_award_roty: {
        id: "season_award_roty",
        text: "Rookie of the Year",
        shortText: "ROY",
        type: CategoryType.Award
    },
    season_award_silver_slugger: {
        id: "season_award_silver_slugger",
        text: "Silver Slugger",
        shortText: "Silver Slugger",
        type: CategoryType.Award
    },
    season_b_avg_300: {
        id: "season_b_avg_300",
        text: ".300+ AVG Season",
        shortText: ".300+ AVG",
        type: CategoryType.Season
    },
    season_b_doubles_40: {
        id: "season_b_doubles_40",
        text: "40+ 2B Season",
        shortText: "40+ 2B",
        type: CategoryType.Season
    },
    season_b_h_200: {id: "season_b_h_200", text: "200+ Hits Season", shortText: "200+ Hits", type: CategoryType.Season},
    season_b_hr_10: {id: "season_b_hr_10", text: "10+ HR Season", shortText: "10+ HR", type: CategoryType.Season},
    season_b_hr_30: {id: "season_b_hr_30", text: "30+ HR Season", shortText: "30+ HR", type: CategoryType.Season},
    season_b_hr_30_sb_30: {
        id: "season_b_hr_30_sb_30",
        text: "30+ HR / 30+ SB Season",
        shortText: "30+ HR / 30+ SB",
        type: CategoryType.Season
    },
    season_b_hr_40: {id: "season_b_hr_40", text: "40+ HR Season", shortText: "40+ HR", type: CategoryType.Season},
    season_b_r_100: {id: "season_b_r_100", text: "100+ Run Season", shortText: "100+ Runs", type: CategoryType.Season},
    season_b_rbi_100: {
        id: "season_b_rbi_100",
        text: "100+ RBI Season",
        shortText: "100+ RBIs",
        type: CategoryType.Season
    },
    season_b_sb_30: {id: "season_b_sb_30", text: "30+ SB Season", shortText: "30+ SB", type: CategoryType.Season},
    season_no_hitter: {
        id: "season_no_hitter",
        text: "Threw a No-Hitter",
        shortText: "No-Hitter",
        type: CategoryType.Event
    },
    season_p_era_300: {
        id: "season_p_era_300",
        text: "≤ 3.00 ERA Season",
        shortText: "≤ 3.00 ERA",
        type: CategoryType.Season
    },
    season_p_so_200: {id: "season_p_so_200", text: "200+ K Season", shortText: "200+ K", type: CategoryType.Season},
    season_p_sv_30: {id: "season_p_sv_30", text: "30+ Save Season", shortText: "30+ Saves", type: CategoryType.Season},
    season_p_sv_40: {id: "season_p_sv_40", text: "40+ Save Season", shortText: "40+ Saves", type: CategoryType.Season},
    season_p_w_10: {id: "season_p_w_10", text: "10+ Win Season", shortText: "10+ Wins", type: CategoryType.Season},
    season_p_w_20: {id: "season_p_w_20", text: "20+ Win Season", shortText: "20+ Wins", type: CategoryType.Season},
    season_pos_p: {id: "season_pos_p", text: "Pitched", shortText: "P", type: CategoryType.Position},
    season_pos_c: {id: "season_pos_c", text: "Played Catcher", shortText: "C", type: CategoryType.Position},
    season_pos_1b: {id: "season_pos_1b", text: "Played First Base", shortText: "1B", type: CategoryType.Position},
    season_pos_2b: {id: "season_pos_2b", text: "Played Second Base", shortText: "2B", type: CategoryType.Position},
    season_pos_3b: {id: "season_pos_3b", text: "Played Third Base", shortText: "3B", type: CategoryType.Position},
    season_pos_ss: {id: "season_pos_ss", text: "Played Shortstop", shortText: "SS", type: CategoryType.Position},
    season_pos_lf: {id: "season_pos_lf", text: "Played Left Field", shortText: "LF", type: CategoryType.Position},
    season_pos_cf: {id: "season_pos_cf", text: "Played Center Field", shortText: "CF", type: CategoryType.Position},
    season_pos_rf: {id: "season_pos_rf", text: "Played Right Field", shortText: "RF", type: CategoryType.Position},
    season_pos_of: {id: "season_pos_of", text: "Played Outfield", shortText: "OF", type: CategoryType.Position},
    season_pos_dh: {id: "season_pos_dh", text: "Designated Hitter", shortText: "DH", type: CategoryType.Position},
    ws_champ: {id: "ws_champ", text: "World Series Champion", shortText: "WS Champ", type: CategoryType.Event},
}

interface Team {
    id: string;
    name: string;
    imageId: string;
}

export const teamMappings: Record<string, Team> = {
    ANA: {id: "ANA", name: "Los Angeles Angels", imageId: "ANA"},
    ARI: {id: "ARI", name: "Arizona Diamondbacks", imageId: "ARI"},
    ATL: {id: "ATL", name: "Atlanta Braves", imageId: "ATL"},
    BAL: {id: "BAL", name: "Baltimore Orioles", imageId: "BAL"},
    BOS: {id: "BOS", name: "Boston Red Sox", imageId: "BOS"},
    CHC: {id: "CHC", name: "Chicago Cubs", imageId: "CHC"},
    CHW: {id: "CHW", name: "Chicago White Sox", imageId: "CHW"},
    CIN: {id: "CIN", name: "Cincinnati Reds", imageId: "CIN"},
    CLE: {id: "CLE", name: "Cleveland Guardians", imageId: "CLE"},
    COL: {id: "COL", name: "Colorado Rockies", imageId: "COL"},
    DET: {id: "DET", name: "Detroit Tigers", imageId: "DET"},
    FLA: {id: "FLA", name: "Florida Marlins", imageId: "FLA"},
    HOU: {id: "HOU", name: "Houston Astros", imageId: "HOU"},
    KCR: {id: "KCR", name: "Kansas City Royals", imageId: "KCR"},
    LAD: {id: "LAD", name: "Los Angeles Dodgers", imageId: "LAD"},
    MIL: {id: "MIL", name: "Milwaukee Brewers", imageId: "MIL"},
    MIN: {id: "MIN", name: "Minnesota Twins", imageId: "MIN"},
    NYM: {id: "NYM", name: "New York Mets", imageId: "NYM"},
    NYY: {id: "NYY", name: "New York Yankees", imageId: "NYY"},
    OAK: {id: "OAK", name: "Oakland Athletics", imageId: "OAK"},
    PHI: {id: "PHI", name: "Philadelphia Phillies", imageId: "PHI"},
    PIT: {id: "PIT", name: "Pittsburgh Pirates", imageId: "PIT"},
    SDP: {id: "SDP", name: "San Diego Padres", imageId: "SDP"},
    SEA: {id: "SEA", name: "Seattle Mariners", imageId: "SEA"},
    SFG: {id: "SFG", name: "San Francisco Giants", imageId: "SFG"},
    STL: {id: "STL", name: "St. Louis Cardinals", imageId: "STL"},
    TBD: {id: "TBD", name: "Tampa Bay Rays", imageId: "TBD"},
    TEX: {id: "TEX", name: "Texas Rangers", imageId: "TEX"},
    TOR: {id: "TOR", name: "Toronto Blue Jays", imageId: "TOR"},
    WSN: {id: "WSN", name: "Washington Nationals", imageId: "WSN"},
}

const categoryOrder = [
    CategoryType.Position,
    CategoryType.Season,
    CategoryType.Career,
    CategoryType.Award,
    CategoryType.Event,
    CategoryType.Born,
]

export const getSearchOptions = () => {
    const categorySearchOptions = Object.keys(categoryMappings).map((key) => {
        return {
            id: key,
            label: categoryMappings[key].text,
            category: categoryMappings[key].type
        };
    }).sort((a, b) => {
        return categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
    });

    const teamSearchOptions = Object.keys(teamMappings).map((key) => {
        return {
            id: key,
            label: teamMappings[key].name,
            category: CategoryType.Team
        };
    });

    return [...teamSearchOptions, ...categorySearchOptions];
}


const getImage = (type: string, teamId: string) => `https://cdn.ssref.net/req/202306191/tlogo/br/ig/${type}/${teamId}.svg`

export const headerMapping = (header: string) => {
    const category: Category = categoryMappings[header] || null;
    const team: Team = teamMappings[header] || null;
    if (category) {
        return {
            id: header,
            text: category.shortText
        };
    } else if (team) {
        return {
            id: header,
            text: team.id,
            lightImage: getImage('light', team.imageId),
            darkImage: getImage('dark', team.imageId),
        };
    } else {
        return {
            id: header,
            text: header
        };
    }
}