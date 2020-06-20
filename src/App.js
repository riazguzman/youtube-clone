import React from "react";

import { Grid } from "@material-ui/core";

import {SearchBar, VideoDetail } from "./components";

import youtube from "./api/youtube";

import VideoList from "./components/VideoList";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideos: null,
    }
  }

  handleSubmit = async (searchTerm) => {
     const response = await youtube.get('search' , {
      params: {
      part: 'snippet',
      maxResults: 4,
      key: 'AIzaSyAjkPfAgob-GH0LYEYmHErdQO7XBW5LSQY ',
      q: searchTerm
  }
 
  });   console.log(response);
   this.setState( { videos: response.data.items, selectedVideo: response.data.items[0]})
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  componentDidMount(){
    this.handleSubmit('youtube')
  }

  render() {
    const {videos, selectedVideo} = this.state;
    return (
      <Grid container justify="center" spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
              <VideoList videos = {videos} onVideoSelect={this.onVideoSelect}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

}

export default App;
