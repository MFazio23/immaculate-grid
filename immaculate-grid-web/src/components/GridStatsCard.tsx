import {Card, CardContent, CardHeader, Typography} from '@mui/material';

export interface GridStats {
    id: string;
    title: string;
    count: number;
}

export interface GridStatsCardProps {
    id: string;
    title: string;
    description?: string;
    stats: GridStats[]
}

export default function GridStatsCard({title, description, stats}: GridStatsCardProps) {
    return (
        <Card style={{height: '20em', width: '20em'}}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant="body2" gutterBottom>
                    {description}
                </Typography>
                {stats.map(({id, title, count}) => (
                    <Typography variant={'h6'} key={id}>
                        {title}: {count}
                    </Typography>
                ))}
            </CardContent>
        </Card>
    )
}