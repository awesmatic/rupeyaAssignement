import React from 'react';
import './Orbit.css';
import { Container } from 'react-bootstrap';
import { orbit } from '../../rupeya';

const Orbit = () => {
    return (
        <div className='orbit'>

            <Container>
                <div className='content'>
                    <h3>{orbit.title}</h3>
                    <p>{orbit.content}</p>
                </div>
                <div id="circle-orbit-container">
                    <div id="inner-orbit" className="orbit">


                    </div>

                    <div id="middle-orbit" className="orbit">
                        {orbit.orbit2.map((item, index) => (
                            <div key={index} className="middle-orbit-circles" style={{
                                top: `${index * 40}px`,
                                left: `${index * 40}px`,
                            }}>{item}</div>
                        ))}
                    </div>

                    <div id="outer-orbit" className="orbit" >
                        {orbit.orbit3.map((item, index) => (
                            <div className="outer-orbit-circles" style={{
                                top: `${index * 80}px`,
                                left: `${index * 80}px`,
                            }}>{item}</div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default Orbit;
