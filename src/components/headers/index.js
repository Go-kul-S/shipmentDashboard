import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from '../../assets/logo.svg'
import Profile from '../../assets/profile.svg'


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
                    <img src={Logo} alt="Logo"/>
                    <Typography edge="start" variant="h6" className={this.state.title} style={{color: '#271D18', fontWeight : '600'}}>
                        Intugine
                    </Typography>
                    <span style={{float:"right", margin:"auto"}}>
                      <Typography variant="h6" style={{color: '#271D18', float : "right", fontWeight : '600'}}>
                          Home
                      </Typography>
                    </span>
                    <span style={{float:"right", margin:'10px'}}>
                      <Typography variant="h6" style={{color: '#271D18', float : "right", fontWeight : '600'}}>
                          Brands
                      </Typography>
                      </span>
                    <span style={{float:"right", margin: '10px'}}>
                      <Typography variant="h6" style={{color: '#271D18', float : "right", fontWeight : '600'}}>
                          Transporters
                      </Typography>
                    </span>
                    <img src={Profile} alt="profile"/>
                      
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header