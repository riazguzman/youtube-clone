import React from 'react';

import { Grid, Paper, Typography} from '@material-ui/core';

const VideoItem = ({videos, onVideoSelect}) => {
    console.log(videos.snippet);
    return (
        <Grid item xs={12}>
            <Paper onClick={() => onVideoSelect(videos)} style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                <img style={{marginRight: '20px'}} alt='thumbnail' src={videos.snippet.thumbnails.medium.url}/>
                <Typography variant="subtitle1"><b>{videos.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;