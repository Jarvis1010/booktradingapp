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
			return React.createElement(BugRow, { id: bug.id, status: bug.status, priority: bug.priority, owner: bug.owner, title: bug.title, key: index });
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
			{ onChange: this._handleChange.bind(this), className: "form-inline" },
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
				{ onClick: this._handleClick.bind(this), type: "submit", className: "btn btn-default" },
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
		this.state = {
			bugs: [{ status: "active", priority: "1", owner: "Me", title: "Testing" }, { status: "inactive", priority: "2", owner: "You", title: "Testing1" }]
		};
	}
	_handleAddBug(bug) {
		this.setState({
			bugs: this.state.bugs.concat([bug])

		});
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
			React.createElement(BugForm, { addBug: this._handleAddBug.bind(this) })
		);
	}
}

ReactDOM.render(React.createElement(BugList, null), document.getElementById('example'));