import React from "react"
import styles from "./WeatherBlock.module.css"

const WeatherBlock = ({data}) =>{
    return (
        <div className={styles.block}>
            <p className={styles.label}>Date is : {data.applicable_date}</p>
            <p className={styles.label}>Humidity : {data.humidity}</p>
            <p className={styles.label}>Max temperature : { Math.round((data.max_temp + Number.EPSILON) * 100) / 100 }</p>
            <p className={styles.label}>Min temperature : { Math.round((data.min_temp + Number.EPSILON) * 100) / 100 }</p>
            <p className={styles.label}>Predictability : {data.predictability}</p>
            <p className={styles.label}>Visibility : { Math.round((data.visibility + Number.EPSILON) * 100) / 100 }</p>
            <p className={styles.label}>Weather : {data.weather_state_name}</p>
            <p className={styles.label}>Wind Direction : {data.wind_direction_compass}</p>
            <p className={styles.label}>Wind Speed : {Math.round((data.wind_speed + Number.EPSILON) * 100) / 100}</p>
        </div>
    )
}

export default WeatherBlock;