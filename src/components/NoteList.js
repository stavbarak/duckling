import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import NoteThumb from 'components/NoteThumb';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });



const NoteList = ({ data, classes }) => {
    console.log(classes)
    let noteItem = data.map((item, i) => {
        return (   
            <Grid item xs={4} key= {(i)} >
                <NoteThumb 
                className={classes.paper}              
                id={ item.snipId } 
                title={ item.title } 
                date={ item.dateSnipped }
                codeString ={ item.content }
                />   
            </Grid>
        )
    });

    return (
        <Grid container spacing={3} className="noteGrid">
            { noteItem }
        </Grid>
    )
}


export default withStyles(styles)(NoteList);
