import react, { Fragment } from 'react'
import logoImage from '../../assets/logo.png'
import classes from './Header.css'

function Header() {
    return (
        <Fragment>
            <div className={classes.logo}>
                <img src={ logoImage }/>
            </div>
            <h2>Hello</h2>
        </Fragment>
    )
}

export default Header
