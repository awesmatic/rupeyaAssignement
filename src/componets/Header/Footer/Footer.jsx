import React from 'react'
import { PlayStoreButton } from '../common/PlayStoreButton';
import styles from './Footer.module.css'
import Container from 'react-bootstrap/Container';
import { logo, footer } from '../../../rupeya';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <Container>
                <div className={styles.box1}>
                    <div className={styles.social} >
                        <img src={logo} alt="Brand Logo" width="120" height="30" loading="lazy" ></img>
                        <p>{footer.title}</p>
                        <PlayStoreButton />
                    </div>
                    <div className={styles.product}>
                        {footer.products.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}

                    </div>
                    <div className={styles.company}>
                        {footer.company.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}

                    </div>
                    <div className={styles.contact}>
                        {footer.contact.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
                <div className={styles.box2}>
                    <div className={styles.policy}>
                        {footer.policy.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>

                    <div className={styles.copyright}>
                        <p>{footer.copyright}</p>
                    </div>

                </div>
            </Container>
        </div>
    )
}
