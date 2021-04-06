import React, { Component } from 'react'
import { Button } from '@material-ui/core'

export default class MakeStatusChange extends Component {


    change = (e) => {
        console.log(e.target.className)
        const className = e.target.className
        if (className.includes('Set to Applied')) {
            this.update(0, this.props.selectedRows)
        }
        if (className.includes('Set to OA stage')) {
            this.update(1, this.props.selectedRows)
        }
        if (className.includes('Set to HR Interview')) {
            this.update(2, this.props.selectedRows)
        }
        if (className.includes('Set to code 1st stage Interview')) {
            this.update(3, this.props.selectedRows)
        }
        if (className.includes('Set to code 2nd stage Interview')) {
            this.update(4, this.props.selectedRows)
        }
        if (className.includes('to code 3rd stage Interview')) {
            this.update(5, this.props.selectedRows)
        }
        if (className.includes('Set to Rejected')) {
            this.update(6, this.props.selectedRows)
        }

    }

    // case 0:Set to Applied
    // case 1:Set to OA stage
    // case 2:Set to HR Interview
    // case 3:Set to code 1st stage Interview
    // case 4:Set to code 2nd stage Interview
    // case 5:Set to code 3rd stage Interview
    // case 6:Set Set to Rejected

    update(type, selectedRows) {
        selectedRows.forEach(row => {
            switch (type) {
                case 0:
                    row.status = 'Applied'
                    fetch("http://localhost:3000/jobs/" + row.id, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(row),
                    }).then(response => response.json())
                    break
                case 1:
                    row.status = 'OA stage'
                    fetch("http://localhost:3000/jobs/" + row.id, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(row),
                    }).then(response => response.json())
                    break
                case 2:
                    row.status = 'HR Interview'
                    fetch("http://localhost:3000/jobs/" + row.id, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(row),
                    }).then(response => response.json())
                    break
                case 3:
                    row.status = 'code 1st stage'
                    fetch("http://localhost:3000/jobs/" + row.id, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(row),
                    }).then(response => response.json())
                    break
                case 4:
                    row.status = 'code 2nd stage'
                    fetch("http://localhost:3000/jobs/" + row.id, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(row),
                    }).then(response => response.json())
                    break
                case 5:
                    row.status = 'code 3rd stage'
                    fetch("http://localhost:3000/jobs/" + row.id, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(row),
                    }).then(response => response.json())
                    break
                case 6:
                    row.status = 'Rejected'
                    fetch("http://localhost:3000/jobs/" + row.id, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(row),
                    }).then(response => response.json())
                    break
                default:
                    break
            }
        })

        setTimeout(this.props.refresh, 5)

    }

    render() {
        return (
            <div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'stretch',
                    flexWrap: 'wrap'

                }}>
                    <Button variant="contained" color="primary" onClick={this.change} classes={{
                        label:
                            'Set to Applied'
                    }} style={{ marginTop: '20px' }}>
                        Set to Applied
                </Button>
                    <Button variant="contained" color="primary" style={{ marginTop: '20px' }} onClick={this.change} classes={{
                        label:
                            'Set to OA stage'
                    }}>
                        Set to OA stage
                </Button>
                    <Button variant="contained" color="primary" style={{ marginTop: '20px' }} onClick={this.change} classes={{
                        label:
                            'Set to HR Interview'
                    }}>
                        Set to HR Interview
                </Button>
                    <Button variant="contained" color="primary" style={{ marginTop: '20px' }} onClick={this.change} classes={{
                        label:
                            'Set to code 1st stage Interview'
                    }}>
                        Set to code 1st stage Interview
                </Button>
                    <Button variant="contained" color="primary" style={{ marginTop: '20px' }} onClick={this.change} classes={{
                        label:
                            'Set to code 2nd stage Interview'
                    }}>
                        Set to code 2nd stage Interview
                </Button>
                    <Button variant="contained" color="primary" style={{ marginTop: '20px' }} onClick={this.change} classes={{
                        label:
                            'Set to code 3rd stage Interview'
                    }}>
                        Set to code 3rd stage Interview
                </Button>
                    <Button variant="contained" color="primary" style={{ marginTop: '20px' }} onClick={this.change} classes={{
                        label:
                            'Set to Rejected'
                    }}>
                        Set to Rejected
                </Button>

                </div>
            </div>
        )
    }
    // style= {{position : "absolute", bottom: "10px"}}
}
