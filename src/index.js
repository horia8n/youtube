import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBQI1Qb9TTxXLN3aMmS3KSCPbojJknvR9Q';



class App extends Component{

    constructor(props){

        super(props);

        this.state = {videos:[], selectedVideo: null};

        this.videoSearch('canadian news');

    }

    videoSearch(term){
        YTSearch({key:API_KEY, term: term}, (videos) => {
            console.log(videos);
            this.setState({ videos: videos, selectedVideo: videos[0] });
        });
    }

    render() {

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 1000);

            return (
                <div>
                    <SearchBar onSearchTermChange={videoSearch} />
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
                </div>
            );

    }
}
// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     );
// }



ReactDOM.render(<App />, document.querySelector('.container'));