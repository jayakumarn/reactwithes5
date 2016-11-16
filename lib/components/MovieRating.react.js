var MovieRating = React.createClass({
    displayName: "MovieRating",

    render: function () {
        var ratingValue = this.props.rating;
        var ratingControl = [];

        for (var index = 0; index < ratingValue; index++) {
            ratingControl.push(React.createElement("span", { className: "glyphicon glyphicon-star" }));
        }

        return React.createElement(
            "div",
            null,
            ratingControl
        );
    }
});