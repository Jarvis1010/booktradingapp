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
	render() {
		return React.createElement(
			"div",
			{ className: "col-xs-12 text-center" },
			"Place Holder Text for Form"
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
			React.createElement(BugForm, null)
		);
	}
}

ReactDOM.render(React.createElement(BugList, null), document.getElementById('example'));