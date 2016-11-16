var MovieHeader = React.createClass({
    displayName: "MovieHeader",

    render: function () {

        return React.createElement(
            "tr",
            null,
            React.createElement(
                "th",
                null,
                "Title"
            ),
            React.createElement(
                "th",
                null,
                "Length"
            ),
            React.createElement(
                "th",
                null,
                "Rating"
            ),
            React.createElement("th", null)
        );
    }
});