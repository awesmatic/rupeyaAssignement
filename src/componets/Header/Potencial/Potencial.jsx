import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { PotencialData } from '../../../rupeya';
import styles from "./Potencial.module.css"
import { Container } from 'react-bootstrap';

const Potencial = () => {
    return (

        <div className={styles.Potencial}>
            <Container>
                <h1>{PotencialData.heading}</h1>
                <Carousel className="d-md-none">
                    {PotencialData.data.map((item, index) => (
                        <Carousel.Item key={index} interval={1000}>
                            <div className={styles.content}>
                                <h5>{item.title}</h5>
                                <p>{item.content}</p>
                            </div>
                            <div className="d-flex justify-content-center align-items-center" style={{ height: '100%', marginBottom: '2rem' }}>
                                <img src={item.img} alt="Slide" width="250" height="250" loading="lazy" />
                            </div>

                        </Carousel.Item>
                    ))}

                </Carousel>
                <div className={styles.container} >
                    {PotencialData.data.map((item, index) => (
                        <div key={index} interval={1000}>
                            <div className={styles.content}>
                                <h5>{item.title}</h5>
                                <p>{item.content}</p>
                            </div>
                            <div className="d-flex justify-content-center align-items-center" style={{ height: '100%', marginBottom: '2rem' }}>
                                <img src={item.img} alt="Slide" width="250" height="250" loading="lazy" />
                            </div>

                        </div>
                    ))}

                </div>
            </Container>
        </div>

    )
}

export default Potencial