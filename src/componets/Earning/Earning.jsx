import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { Container } from 'react-bootstrap';
import { EarningData } from '../../rupeya';
import styles from "./Earning.module.css";

const Earning = () => {
    return (
        <div className={styles.EarningData}>
            <Container>
                <h1>{EarningData.heading}</h1>
                <Carousel indicators={false} controls={false} className="d-md-none m-4" >
                    {EarningData.data.map((item, index) => (
                        <Carousel.Item key={index} interval={800}>

                            <div className="d-flex justify-content-center align-items-center " style={{ height: '100%' }}>
                                <img src={item.img} alt="Slide" width="250" height="250" className={styles.rounded} loading="lazy" />

                            </div>
                            <div className={styles.content}>
                                <h5>{item.title}</h5>
                            </div>

                        </Carousel.Item>
                    ))}

                </Carousel>
                <div className={styles.container}>
                    {EarningData.data.map((item, index) => (
                        <div key={index} interval={1000}>

                            <div className="d-flex justify-content-center align-items-center " style={{ height: '100%' }}>
                                <img src={item.img} alt="Slide" width="250" height="250" className={styles.rounded} loading="lazy" />

                            </div>
                            <div className={styles.content}>
                                <h5>{item.title}</h5>
                            </div>

                        </div>
                    ))}

                </div>
            </Container>
        </div>
    )
}

export default Earning