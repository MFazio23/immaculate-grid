import {Autocomplete, Checkbox, darken, lighten, styled, TextField} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export interface SearchOption {
    id: string;
    label: string;
    category: string;
}

const GroupHeader = styled('div')(({theme}) => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: theme.palette.primary.main,
    backgroundColor:
        theme.palette.mode === 'light'
            ? lighten(theme.palette.primary.light, 0.85)
            : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled('ul')({
    padding: 0,
});

export interface SearchBarProps {
    options: SearchOption[],
    onFiltersChanged?: (filters: SearchOption[]) => void;
}

export default function SearchBar({options, onFiltersChanged}: SearchBarProps) {
    return (options && <Autocomplete
        sx={{flexGrow: 1, mx: 2}}
        multiple
        disableCloseOnSelect
        onChange={(_event, value) => {
            onFiltersChanged?.(value);
        }}
        options={options}
        groupBy={(option) => option.category}
        getOptionLabel={(option) => option.label}
        renderOption={(props, option, {selected}) => (
            <li {...props} key={option.id}>
                <Checkbox
                    icon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
                    checkedIcon={<CheckBoxIcon fontSize="small"/>}
                    style={{marginRight: 8}}
                    checked={selected}
                />
                {option.label}
            </li>
        )}
        renderInput={(params) => <TextField {...params} label="Search"/>}
        renderGroup={(params) => (
            <li key={params.key}>
                <GroupHeader>{params.group}</GroupHeader>
                <GroupItems>{params.children}</GroupItems>
            </li>
        )}
    />);
}