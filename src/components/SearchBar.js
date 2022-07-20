import React from 'react';

class SearchBar extends React.Component {
    state={term:''}
    onFormSubmit=(event)=>{
        event.preventDefault();//it prevent to refresh the site on enter;
        this.props.onFormSubmit(this.state.term);
      
    };
    render() {
        return (
            <div className=' search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className="ui form" >
                    <div className='field'>
                        <label ><h3>Video Search</h3></label>
                        <input
                         type="text" 
                         value={this.state.term} 
                         onChange={(e)=>{this.setState({term:e.target.value})}}
                         />
                        
                    </div>

                </form>
            </div>
        );
    }
}
export default SearchBar;