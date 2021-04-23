import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import MenuIcon from '@material-ui/icons/Menu';
import Jobs from './Jobs'
import Menu from './Menu'
import Generator from './Generator';
import Items from './Items';
import Setting from './Setting'


export default class Main extends Component {

    state = {
        open: false,
        rows: [],
        currentPanel: 'jobBoard',
        menuHidden: true
    }

    componentDidMount() {
        this.getJobs()
    }

    postNewJob = () => {
        const data = {
            company: this.state.companyName,
            jobTitle: this.state.jobTitle,
            description: this.state.description,
            date: this.state.date
        }
        fetch("http://localhost:3000/jobs", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
            .then(data => {
                console.log('Success:', data)
                this.getJobs()
                this.handleClose()
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    getJobs = () => {
        fetch("http://localhost:3000/jobs")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        rows: result
                    })
                },
                (error) => {
                    console.log(error)
                }

            )
    }

    switchPanel = (name) => {
        this.setState({
            currentPanel: name
        })
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    MenuAction = () => {
        if (this.state.menuHidden) {
            this.setState({
                menuHidden: false
            })
        } else {
            this.setState({
                menuHidden: true
            })
        }
    }

    refresh = () => {
        this.getJobs()
    }


    render() {
        return (<div>
            <div id="main-body">
                <AppBar position="static">
                    <Toolbar>
                        <div>
                            <IconButton id="menu" edge="start" color="inherit" aria-label="menu" onClick={this.MenuAction}>
                                <MenuIcon />
                            </IconButton>
                        </div>

                        <Typography variant="h6">
                            Job Applied
                        </Typography>

                    </Toolbar>
                </AppBar>
                <MuiAlert severity="error">
                    If change status not work immediately, try refresh the page (It looks like JSON-SERVER can't handle a lot of request at one time.)</MuiAlert>
                <MuiAlert severity="info">
                    Double Click a row to view Description</MuiAlert>
                {this.state.currentPanel === 'jobBoard' ? <Jobs rows={this.state.rows} refresh={this.refresh}></Jobs> : null}
                {this.state.currentPanel === 'generator' ? <Generator /> : null}
                {this.state.currentPanel === 'items' ? <Items /> : null}
                {this.state.currentPanel === 'setting' ? <Setting /> : null}
            </div>

            {this.state.menuHidden ? null : <Menu switch={this.switchPanel} close={this.MenuAction} post={this.handleClickOpen} />}





            {/* Dialog to add jobs */}
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Record</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Create new record of your application to a new job here.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="companyName"
                        label="Company Name"
                        type="text"
                        onChange={(e) => {
                            this.setState({
                                "companyName": e.target.value
                            })
                        }}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="jobTitle"
                        label="Job Title"
                        type="text"
                        onChange={(e) => {
                            this.setState({
                                "jobTitle": e.target.value
                            })
                        }}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                        rows={4}
                        multiline
                        onChange={(e) => {
                            this.setState({
                                "description": e.target.value
                            })
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="date"
                        type="date"
                        fullWidth
                        onChange={(e) => {
                            this.setState({
                                date: e.target.value
                            })
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={this.postNewJob} color="primary">
                        Create
          </Button>
                </DialogActions>
            </Dialog>
        </div>
        )
    }
}
