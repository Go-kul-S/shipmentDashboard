import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


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
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={this.state.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header