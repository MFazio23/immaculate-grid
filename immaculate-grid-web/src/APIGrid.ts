export interface APIGrid {
    gridId: number;
    date: string;
    displayName: string;
    cols: string[];
    rows: string[];
    possibleAnswers: Record<string, Record<string, { count: number, link: string }>>;
}

export interface DailyGrid {
    gridId: number;
    date: string;
    rows: string[];
    cols: string[];
    cells: DailyGridSquare[][]
}

export interface DailyGridSquare {
    id: string;
    text?: string;
    lightImage?: string | undefined;
    darkImage?: string | undefined;
    link?: string;
}