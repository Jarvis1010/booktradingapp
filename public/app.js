var React = require("react");
var ReactDOM = require("react-dom");

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class BugFilter extends React.Component {
	render() {
		return React.createElement(
			"div",
			{ className: "col-xs-12 text-center" },
			"Place Holder Text for Filter"
		);
	}
}

class BugTable extends React.Component {

	render() {
		var bugRows = this.props.bugList.map((bug, index) => {
			return React.createElement(BugRow, _extends({}, bug, { key: index }));
		});
		return React.createElement(
			"table",
			{ className: "table" },
			React.createElement(
				"tbody",
				null,
				bugRows
			)
		);
	}
}

class BugForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this._handleChange = this._handleChange.bind(this);
		this._handleClick = this._handleClick.bind(this);
	}
	_handleClick(e) {
		e.preventDefault();
		this.props.addBug(this.state);
		this.setState({ owner: "", title: "", status: "", priority: "" });
	}
	_handleChange(e) {
		e.preventDefault();
		let target = e.target;
		this.setState({ [target.name]: target.value });
	}
	render() {
		return React.createElement(
			"form",
			{ onChange: this._handleChange, className: "form-inline" },
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ "for": "owner" },
					"Owner"
				),
				React.createElement("input", { value: this.state.owner, name: "owner", type: "text", className: "form-control", id: "owner", placeholder: "Jane Doe" })
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ "for": "title" },
					"Title"
				),
				React.createElement("input", { value: this.state.title, name: "title", type: "text", className: "form-control", id: "title", placeholder: "title" })
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ "for": "status" },
					"Status"
				),
				React.createElement("input", { value: this.state.status, name: "status", type: "text", className: "form-control", id: "status", placeholder: "status" })
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ "for": "priority" },
					"Priority"
				),
				React.createElement("input", { value: this.state.priority, name: "priority", type: "text", className: "form-control", id: "priority", placeholder: "priority" })
			),
			React.createElement(
				"button",
				{ onClick: this._handleClick, className: "btn btn-default" },
				"Submit"
			)
		);
	}
}

class BugRow extends React.Component {
	render() {
		return React.createElement(
			"tr",
			null,
			React.createElement(
				"td",
				null,
				this.props.id
			),
			React.createElement(
				"td",
				null,
				this.props.status
			),
			React.createElement(
				"td",
				null,
				this.props.priority
			),
			React.createElement(
				"td",
				null,
				this.props.owner
			),
			React.createElement(
				"td",
				null,
				this.props.title
			)
		);
	}
}

class BugList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { bugs: [] };
		this._handleAddBug = this._handleAddBug.bind(this);
	}

	_fetchBugs() {
		let request = {
			method: 'GET',
			url: '/api/bugs',
			success: results => {
				this.setState({ bugs: results });
				console.log(this.state);
			}
		};
		$.ajax(request);
	}

	_handleAddBug(bug) {

		$.post('/api/bugs', bug, res => {
			this.setState({
				bugs: this.state.bugs.concat(res)
			});
		});
	}
	componentWillMount() {
		this._fetchBugs();
	}
	render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				{ className: "text-center" },
				"Bug Filter"
			),
			React.createElement(BugFilter, null),
			React.createElement(BugTable, { bugList: this.state.bugs }),
			React.createElement(BugForm, { addBug: this._handleAddBug })
		);
	}
}

ReactDOM.render(React.createElement(BugList, null), document.getElementById('example'));