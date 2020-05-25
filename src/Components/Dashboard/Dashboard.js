import React from "react"
import WeatherBlock from "./WeatherBlock";
import Loader from "./Loader";
import styles from "./Dashboard.module.css"

class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {Data: null}
    }
    componentDidMount() {
        fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/924938/")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({Data : data});
            });
    }

    render() {
        if (this.state.Data !== null){
            return (
                <div>
                    <h1>Weather Dashboard</h1>
                    <div className={styles.wrapper}>
                        {this.state.Data.consolidated_weather.map(x =>{
                            return <WeatherBlock data={x} key={x.id}/>
                        })}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className={styles.loader_wrapper}>
                    <Loader/>
                </div>
            )
        }
    }
}

export default Dashboard;