import React, {Component} from "react";

export default class ListItem extends Component {
	render() {
		return (
			<li
			  className="listItem"
			  onClick={() => this.props.handleListItemClick(this.props)}
			  onKeyPress={ () => this.props.sidebarItemClick(this.props)}
                tabIndex="3"
                aria-label={this.props.name}
                role="button"
			>
				<img
				  src={
				  	this.props.categories[0].icon.prefix +
				  	"32" +
				  	this.props.categories[0].icon.suffix
				  } 
				  alt={this.props.categories[0].name}
				/>
			  	{this.props.name}
			</li>
		);	
	}
}