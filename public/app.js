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
		return React.createElement(
			"div",
			{ className: "col-xs-12 text-center" },
			"Place Holder Text for Table"
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

class BugList extends React.Component {
	render() {
		return React.createElement(
			"div",
			null,
			React.createElement(BugFilter, null),
			React.createElement(BugTable, null),
			React.createElement(BugForm, null)
		);
	}
}

ReactDOM.render(React.createElement(BugList, null), document.getElementById('example'));