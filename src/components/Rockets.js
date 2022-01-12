import React, {useEffect, useState} from 'react';
import Rocket from "./Rocket";

const Rockets = () => {

    const [flightList, setFlightList] = useState([])
    useEffect(() =>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(flight => {
                let filter = flight.filter(flight => flight.launch_year !== '2020')
                setFlightList(filter)
            })
    },[])
    return (
        <div>
            {
                flightList.map(value => <Rocket key={value.flight_number}
                item={value}/>)
            }
        </div>
    );
};

export default Rockets;