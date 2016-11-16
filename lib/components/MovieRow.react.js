var MovieRow = React.createClass({
    displayName: "MovieRow",


    propTypes: {
        movie: React.PropTypes.object.isRequired
    },

    getInitialState: function () {
        return { movie: this.props.movie };
    },

    handleIncrementRating: function (e) {
        var newChange = this.state.movie;
        if (newChange.rating < 5) {
            newChange.rating += 1;
            this.setState({ movie: newChange });
        }
    },

    handleDecrementRating: function (e) {
        var newChange = this.state.movie;
        if (newChange.rating > 1) {
            newChange.rating -= 1;
            this.setState({ movie: newChange });
        }
    },

    render: function () {

        var answer = this.props.answer;

        return React.createElement(
            "tr",
            null,
            React.createElement(
                "td",
                null,
                this.state.movie.title
            ),
            React.createElement(
                "td",
                null,
                this.state.movie.length
            ),
            React.createElement(
                "td",
                null,
                React.createElement(MovieRating, { rating: this.state.movie.rating })
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "btn-group" },
                    React.createElement(
                        "button",
                        { className: "btn btn-default", onClick: this.handleIncrementRating },
                        React.createElement("span", { className: "glyphicon glyphicon-plus" })
                    ),
                    React.createElement(
                        "button",
                        { className: "btn btn-default" },
                        React.createElement("span", { className: "glyphicon glyphicon-minus", onClick: this.handleDecrementRating })
                    )
                )
            )
        );
    }

});