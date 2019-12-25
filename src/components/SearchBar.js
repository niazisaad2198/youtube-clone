import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
            search_string : ''
        }
    }

    onFormSubmit = event =>{
        event.preventDefault();

        this.props.onFormSubmit(this.state.search_string);
    }
    onInputChange = event =>{
        this.setState({
            search_string: event.target.value
        });
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.onFormSubmit}>
                    <div className='form-group'>
                        <center>
                            <label className='search-label'>
                                Youtube Video Search
                            </label>
                        </center>
                        <input type='text' className='form-control searchbar-width' value = {this.state.search_string} onChange = {this.onInputChange}></input>
                        <button style={{marginLeft:'1%'}} className='btn btn-light' onClick={this.onFormSubmit}>Search</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;