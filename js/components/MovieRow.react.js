var MovieRow = React.createClass({

    
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    
     getInitialState: function() {
         return {movie:this.props.movie}
     },
    
    handleIncrementRating: function(e){        
     var newChange = this.state.movie;        
     if(newChange.rating < 5) {
                newChange.rating += 1;
                this.setState({movie: newChange});
            }   
    },
    
    handleDecrementRating: function(e){
    var newChange = this.state.movie;        
     if(newChange.rating > 1) {
                newChange.rating -= 1;
                this.setState({movie: newChange});
            }   
    },

    render: function() {
 
        var answer = this.props.answer;

        return (
            <tr>
            <td>{ this.state.movie.title }</td>
       <td>{ this.state.movie.length }</td>       
            <td><MovieRating rating={this.state.movie.rating}/></td>
            <td>
        <div className="btn-group">
          <button className="btn btn-default" onClick={this.handleIncrementRating}>
            <span className="glyphicon glyphicon-plus" />
          </button>
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-minus" onClick={this.handleDecrementRating} />
          </button>
        </div>
            </td>
            </tr>
      

            
        )
    }

});