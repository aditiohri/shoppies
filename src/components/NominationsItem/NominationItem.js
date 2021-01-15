import React from 'react';
import { Button } from '@material-ui/core';

export default function NominationItem({ movie }) {
    return (
        <li key={movie.id}>
            {movie.title} ({movie.year}){" "}
      <Button color="danger" variant="outlined" size="small" onClick={console.log('NominationItem: ', movie)}>
        Remove
      </Button>
        </li>
    )
}
