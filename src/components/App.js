import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const axios = require('axios');


const KEY = 'AIzaSyDilFopP0yeDV3eDo08vajcWqktfhWRQCI';

class App extends React.Component{
    state = {videos:[], selectedVideo: null};

/* For default input
componentDidMount(){
    this.onTermSubmit('')
}
*/
onTermSubmit = async (term) =>{
    console.log(term);
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
        params: {
        part: 'snippet',
        maxResults: 50,
        key : KEY,
        q: term
        }
    });
    this.setState( {
        videos: response.data.items,
        selectedVideo : response.data.items[0]
    } );
}

onVideoSelect = (video)=>{
    this.setState({selectedVideo:video});
}

    render(){
        return(
            <div>
                <SearchBar onFormSubmit = {this.onTermSubmit}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-9">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="col-3">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;