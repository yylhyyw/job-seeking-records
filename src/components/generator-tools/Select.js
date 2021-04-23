import React, { Component } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '@material-ui/core'



export default class Select extends Component {


    state = {
        newKeySet: new Set(this.props.keySet),
        renderList: []
    }

    componentDidMount() {
        this.renderCheckBox(this.state.newKeySet)
    }
    renderCheckBox = (newKeySet) => {
        const renderList = []
        this.props.keySet.forEach((value) => {

            renderList.push(
                <FormControlLabel
                    control={<Checkbox checked={newKeySet.has(value)} onChange={() => this.handleChange(value)} name={value} />}
                    label={value}
                    key={value}
                />)
        })

        this.setState({
            newKeySet: newKeySet,
            renderList: renderList
        })
    }

    handleChange = (key) => {
        const newKeySet = this.state.newKeySet
        if (newKeySet.has(key)) newKeySet.delete(key)
        else newKeySet.add(key)
        this.renderCheckBox(newKeySet)


    }

    render() {
        return (
            <div>
                <FormGroup row>
                    {this.state.renderList}
                </FormGroup>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => this.props.next(1, this.state.newKeySet)} 
                        style={{ marginTop: "20px" }}
                    >
                        {'Next'}
                    </Button>
                </div>
            </div>

        )
    }
}
