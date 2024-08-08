import React, { useState, useEffect } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container text-center mt-5">
            <div className="card">
                <div className="card-body">
                    <h1 className="display-4">Contador de Segundos</h1>
                    <p className="lead">{seconds} segundos</p>
                    <button className="btn btn-primary btn-lg" onClick={() => setSeconds(0)}>Resetear</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
