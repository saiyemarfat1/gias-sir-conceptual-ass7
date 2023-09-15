/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./Home.css";
import Cart from '../Cart/Cart';

const Home = () => {
    // use fake data with fetch
    const [allActors, setAllActors] = useState([]);
    const [selectedActors, setSelectedActors] = useState([])

    useEffect(() => {
        fetch("/public/data.json")
            .then((res) => res.json())
            .then((data) => setAllActors(data))

    }, [])


    const handleSelectActor = (actor) => {
        setSelectedActors([...selectedActors, actor])
    }
    console.log(selectedActors);

    return (
        <div className='container'>
            <div className="home-container">
                <div className="card-container">
                    {
                        allActors.map(actor => (
                            <div key={actor.id} className="card">
                                <card className="img">
                                    <img className='photo' src={actor.image} alt="" />
                                    <h2 className='author-name'>{actor.name}i</h2>
                                    <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</small></p>
                                    <div className="info">
                                        <p>Salary: {actor.salary}$</p>
                                        <p>{actor.role}</p>
                                    </div>
                                </card>
                                <button onClick={() => handleSelectActor(actor)} className="card-btn">Select</button>

                            </div>
                        ))
                    }
                </div>
                <div className="cart">
                    <h1>This is card</h1>
                </div>
            </div>

        </div>
    );
};

export default Home;