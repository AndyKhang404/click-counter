import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			click_counter: 0,
		};
	}

	render(){
		return (
			<div className="app" onClick={(event)=>this.setState({click_counter: this.state.click_counter + 1})}>
				<div className="app-text">
					You have clicked <strong>{this.state.click_counter}</strong> times {'\n'}
				</div>
				<button className="app-reset" onClick={(event)=>{
						event.stopPropagation();
						this.setState({click_counter: 0});
				}}><strong>Reset</strong></button>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root'),
)