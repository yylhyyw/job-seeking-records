import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import Jobs from './Jobs'


export default class Main extends Component {

    state = {
        open: false,
        refresh : false,
        rows : []
    }

    componentDidMount(){
        this.getJobs()
    }

    postNewJob = () => {
        const data = {
            company : this.state.companyName,
            jobTitle : this.state.jobTitle,
            description : this.state.description,
            date : this.state.date
        }
        fetch("http://localhost:3000/jobs", {
            method : 'POST',
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


    handleClickOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            open: false,
            refresh : true,
        })
    }

    render() {
        return (<div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Job Applied
                    </Typography>
                    <Button color="inherit" onClick={this.handleClickOpen}>Post</Button>
                </Toolbar>
            </AppBar>
            <Jobs rows={this.state.rows}></Jobs>
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
                        onChange = {(e) => {
                            this.setState({
                                "companyName" : e.target.value
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
                        onChange = {(e) => {
                            this.setState({
                                "jobTitle" : e.target.value
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
                        onChange = {(e) => {
                            this.setState({
                                "description" : e.target.value
                            })
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="date"
                        type="date"
                        fullWidth
                        onChange = {(e) => {
                            this.setState({
                                date : e.target.value
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
