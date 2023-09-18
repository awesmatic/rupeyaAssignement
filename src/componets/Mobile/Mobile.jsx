import React from 'react'
import { Container } from 'react-bootstrap'
import styles from "./Mobile.module.css"
import { mobileSection } from "../../rupeya"

const Mobile = () => {
    return (
        <div className={styles.mobile} >
            <Container className={styles.container}>
                <div className={styles.content}>
                    <h1>{mobileSection.title}</h1>
                    <h4>{mobileSection.content}</h4>
                    <img src={mobileSection.googlePlay} alt="Brand Logo" width="160" height="50" loading="lazy" ></img>
                </div>
                <div className={styles.mobilePic}>
                    <img src={mobileSection.mobilePic} alt="MObile Logo" loading="lazy"  ></img>
                </div>
            </Container>
        </div>
    )
}

export default Mobile