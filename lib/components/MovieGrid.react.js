

var MovieGrid = React.createClass({
    displayName: "MovieGrid",

    render: function () {

        var allMovies = this.props.allMovies;
        var movies = [];

        for (var key in allMovies) {
            movies.push(React.createElement(MovieRow, { key: key, id: key, movie: allMovies[key] }));
        }

        return React.createElement(
            "div",
            null,
            React.createElement(
                "table",
                { className: "table" },
                React.createElement(
                    "tbody",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(MovieHeader, null)
                    ),
                    React.createElement(
                        "tr",
                        null,
                        movies
                    )
                )
            )
        );
    }
});