import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ReactSVG } from 'react-svg';
import '../../assets/logo.svg'


class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            root: {
              flexGrow: 1,
            },
            menuButton: {
              marginRight: 2,
            },
            title: {
              flexGrow: 1,
            },
          }
    }
    render() {
        return (
            <AppBar position="static" style={{backgroundColor: '#fff'}}>

                <Toolbar>
                    <Typography variant="h6" className={this.state.title} style={{color: '#271D18'}}>
                        Intugine
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header