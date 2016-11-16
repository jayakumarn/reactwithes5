

var MovieGrid = React.createClass({
  render: function() {
      
       var allMovies = this.props.allMovies;
        var movies = [];

        for (var key in allMovies) {
            movies.push(<MovieRow key={key} id={key} movie={allMovies[key] } />)
        }

    return (
           
      <div>
            
        <table className="table">
          <tbody><tr>
              <MovieHeader />
            </tr>
                         <tr>
                { movies }
            </tr>
                         
            
          </tbody></table>
      </div>
    );
  }
});
