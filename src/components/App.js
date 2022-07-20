import React from "react";
import SearchBar from './SearchBar';
import youtube from '../Api/youtube';
import VideoList from "./videoList";
import VideoDetail from "./VideoDetails";

class App extends React.Component{
    state={videos: [],SelectedVideo:null}

    onTermSubmit=async (term)=>{
        const response = await youtube.get('/search',{
            params:{
                q:term
            }
        });
        this.setState({videos:response.data.items})
        console.log(this.state.videos);
        this.setState({SelectedVideo: response.data.items[0]});
    };
    
    onVideoSelect =video=>{
        this.setState({SelectedVideo: video});
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column"><VideoDetail video={this.state.SelectedVideo}/></div>
                        <div className="five wide column"> <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;