import React from 'react'
import ExpandLessTwoToneIcon from '@mui/icons-material/ExpandLessTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import UnfoldMoreTwoToneIcon from '@mui/icons-material/UnfoldMoreTwoTone';

const downIcon = <ExpandMoreTwoToneIcon style={{ fontSize: '15px' }} />
const upIcon = <ExpandLessTwoToneIcon style={{ fontSize: '15px' }}/>
const noneIcon = <UnfoldMoreTwoToneIcon style={{ fontSize: '15px' }}/>

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

        if (!sort) {
            return down
        } else if(sort === down || sort === '1b') {
            return up
        }
    return ''
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        console.log('onChangeCallback SuperSort')
        debugger
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {icon}

        </span>

    )
}

export default SuperSort
