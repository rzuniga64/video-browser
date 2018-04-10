import React, { Component } from 'react';
import _ from 'lodash';
import logo from './logo.svg';
import './app.css';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBcYhW96BlmpdEZ_2IyLHwR9kh2fMmqRvU';

/**
 *  Class that allows a user to enter a search term and gets back a list of videos relating to the term.
 */
class App extends Component {

    /**
     * The video list does not have any state so we can make it a plain functional component.
     * We need to pass the search result from the parent, App, to the child, VideoList.
     * Define a property on the JSX tag: <Videos videos={this.state.videos} />.
     * Passing data like this is called passing ‘props’ in React.
     * The way we are passing is being given to a ‘prop’. The ‘prop’ gets passed to VideoList.
     * Every time the application re-renders the ‘prop’ such as when we set state, VideoList will get the new list of
     * videos.
     *
     * @param props
     */
    constructor(props) {
        super(props);

        // set the initial state. We don’t want to render a list of undefined videos or selected video.
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    /**
     * Takes a search term and uses YouTube API to return a list of videos related to the term.
     * @param term
     */
    videoSearch(term) {

        // YTSearch(options, callback). Search is an asynchronous operation.
        YTSearch({ key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            //console.log(videos);
        });
    }

     render() {
         /*Create a fat arrow function that calls videoSearch. We pass it to _debounce of the lodash library. _debounce
           takes that function and return a new function that can be called only once every 3 ms. */
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div className="search-bar">
                    {/*Pass the videoSearch and pass it down to SearchBar under the property onSearchTermChange.*/}
                    <SearchBar onSearchTermChange={videoSearch}/>
                    {/* Pass a callback from App to VideoList and from VideoList into VideoListItem. Whenever the
                       VideoListItem is clicked it will run the callback for the video that belongs to it. */}
                    <VideoDetail video={this.state.selectedVideo}/> {/* pass the selected video to VideoDetail */}
                    <VideoList
                        videos={this.state.videos}
                        /* onVideoSelect is a function that takes a video and updates App state with selected video.
                         If VideoList calls onVideoSelect with a video the selected video on App will update.
                         We are passing onVideoSelect as a property to VideoList. VideoList now has a property on props.
                         called props.onVideoSelect. */
                        onVideoSelect={selectedVideo => this.setState({selectedVideo}) } />
                </div>
            </div>
        );
    }
}

export default App;
