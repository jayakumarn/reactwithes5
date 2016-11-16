var MovieList = React.createClass({
    
    getInitialState: function() {
        
        return {
            allMovies: {
                "1": {
                    
                    id: 1,
                    title: "Super Man",
                    rating: 1,
                    length: " 120 Minutes"
                },
                "2": {
                    id: 2,
                    title: "Jurrasic world",
                    rating: 2,
                    length: "80 Minutes"
                },
                "3": {
                    id: 3,
                    title: "kunfu panda",
                    rating: 3,
                    length: "90 Minutes"
                }
            }
        }
        
    },
   
    render: function () {
        return ( 
            <div>
                <MovieGrid  allMovies={ this.state.allMovies } />

              
            </div>
        )
    }
    
});