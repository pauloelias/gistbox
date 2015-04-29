var Gist = React.createClass({

  render: function() {
    return (
      <div>
        {this.props.username}'s last Gist is <a href={this.props.url}>here</a>.
      </div>
    );
  }

});

export default Gist;