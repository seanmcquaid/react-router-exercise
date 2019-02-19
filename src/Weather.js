import React, { Component } from 'react';
import axios from "axios";

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state={
			icon: "",
			temp: "",
			temp_min: "",
			temp_max: "",
			desc: ""			
		}
	}

	componentDidMount() {
		var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
		axios.get(url).then((weatherInfo)=>{
			let details = weatherInfo.data
			console.log(details)
			this.setState({
				icon : details.weather[0].icon,
				temp: details.main.temp,
				temp_min: details.main.temp_min,
				temp_max: details.main.temp_max,
				desc: details.weather[0].description
			})
		})
	}

	render(){
		let iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`;
		return(
			<div>
				<h1>Real-time Atlanta Weather!</h1>
				<div className="weatherInfo">
					<img src={iconUrl}/>
					<div>Current Temp: {this.state.temp}</div>
					<div>Temp Max: {this.state.temp_max}</div>
					<div>Temp Min: {this.state.temp_min}</div>
					<div>Description: {this.state.desc}</div>
				</div>
			</div>
		);
	}
}

export default Weather;
