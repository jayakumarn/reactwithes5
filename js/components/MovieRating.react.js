var MovieRating=React.createClass({
   render : function()
    {
         var ratingValue = this.props.rating;
        var ratingControl = [];

        for (var index=0; index<ratingValue;index++) {
            ratingControl.push(<span className="glyphicon glyphicon-star" />)
        }
                         
        return (<div>
                {ratingControl}
                </div>
        )
    }
});