import React from 'react'
import Button from '@material-ui/core/Button'

export default function ResultItem({ key, title, year }) {
    return (
        <li key={key}>
            {title} ({year}) <Button variant="outlined" size="small">Nominate</Button>
        </li>
    )
}
