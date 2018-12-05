import React, {Component} from 'react';



class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {term: ''};
    }


    render() {

        return (
            <div className="search-bar">
                {/*<input   value={this.state.term}   onChange={event => this.setState({term: event.target.value})}   />*/}
                <input   value={this.state.term}   onChange={event => this.onInputChange(event.target.value)}   />
            </div>
        );
        // return <input onChange={this.onInputChange} />

    }


    onInputChange(term){
        console.log(term);
        this.setState({term});
        this.props.onSearchTermChange(term);
    }


}

export default SearchBar;