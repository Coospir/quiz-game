import React, { Component } from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import classes from './Drawer.module.css'

const links = [
    {
        link: 'Главная',
        href: '/'
    },
         
    {
        link: 'Тестирование',
        href: '/quizes'
    },

    {
        link: 'Аккаунт',
        href: '/account'
    }
]

class Drawer extends Component {

    renderLinks() {
        return (
            links.map((link, index) => {
                return (
                    <>
                    <li key={index}>
                        <Link to={link.href}>{link.link}</Link>
                    </li>
                    <Switch>
                      <Route
                        key={index}
                        path={link.href}
                        exact={true}
                        children={link.link}
                      />
                  </Switch>
                  </>
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
            <Router>
            <nav className={cls.join(' ')}>
                <ul>
                    { this.renderLinks() }
                </ul>
            </nav>
            { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null }
            </Router>
        )
    }
}

export default Drawer