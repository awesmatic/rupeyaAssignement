import React from 'react';
import { Container } from 'react-bootstrap';
import StarRatings from "react-star-ratings";
import { financial } from '../../rupeya';
import styles from "./Financial.module.css";

export const Financial = () => {
    return (
        <div className={styles.financial}>
            <Container className={styles.container}>
                <div className={styles.content}>

                    <h1>{financial.title}</h1>
                    <p>{financial.content}</p>
                    <img src={financial.googlePlay} alt="Brand Logo" width="160" height="50" loading="lazy" ></img>
                    <div>
                        <StarRatings
                            rating={Number(4.4)}
                            starRatedColor="yellow"
                            numberOfStars={5}
                            name="rating"
                            starDimension="20px"
                        />
                    </div>
                    <h6>{financial.rating.rate}  *  {financial.rating.reviews}</h6>
                    <h3>{financial.Partners.title}</h3>
                    <div className={styles.partners}>
                        {financial.Partners.partnersImg.map((item, index) => (
                            <div className={styles.partnersImg} key={index}>
                                <img src={item} alt="Brand Logo" width="120" height="50" loading="lazy" ></img>
                            </div>

                        ))}
                    </div>



                </div>
                <div
                    className={styles.mobileImg}>
                    <img src={financial.mobilePic} alt="MObile Logo" loading="lazy"  ></img>
                </div>
            </Container>
        </div>
    )
}
