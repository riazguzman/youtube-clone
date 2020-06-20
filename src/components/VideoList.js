import React from 'react';

import {Grid} from '@material-ui/core';

import VideoItem from './VideoItem';


let VideoList = ({videos, onVideoSelect}) => {

    const listOfVideos = videos.map((video,id) => <VideoItem onVideoSelect={onVideoSelect} videos={videos[id]} key={id} />)

    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    )
    
}

export default VideoList;