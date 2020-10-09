import React, { Component } from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './Drawer.module.css'

const links = [
    'Главная',  'Тесты', 'Профиль'
]

class Drawer extends Component {

    renderLinks() {
        return (
            links.map((link, index) => {
                return (
                    <li key={index}><a href="http:/localhost:3000">{link}</a></li>
                )
            })
        )
    }

    render() {
        const cls = [classes.Drawer]
        if (!this.props.isOpen) {
            cls.push(classes.close)
        }
        return(
            <nav className={cls.join(' ')}>
                <ul>
                    { this.renderLinks() }
                </ul>
            </nav>
        )
    }
}

export default Drawer