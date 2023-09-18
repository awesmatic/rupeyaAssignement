import React from 'react'
import { Link } from "react-router-dom"
import styles from "./Login.module.css"

export const LoginPage = () => {
    return (
        <div className={styles.login}>
            <div className={styles.container}>
                <div className={styles.form_box}>
                    <h1 className="m-3">LOGIN</h1>
                    <div className="body-form">
                        <form>
                            <div className="input-group mb-3">

                                <input type="text" className="form-control" placeholder="Username" />
                            </div>
                            <div className="input-group mb-3">

                                <input type="text" className="form-control" placeholder="Password" />
                            </div>
                            <Link to="/">Home</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
