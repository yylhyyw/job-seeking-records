import React, { Component } from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Parse from './generator-tools/Parse'
import Select from './generator-tools/Select'
import { Button } from '@material-ui/core'

export default class Generator extends Component {

    state = {
        finishedSteps: new Set(),
        activeStep: 0,
        findKeySet: null
    }

    steps = ['Scan key words', 'Select key words', 'Generated Resume']

    checkSteps = (index) => {
        return this.state.finishedSteps.has(index)
    }

    handleNext = (index, data) => {
        switch(index) {
            case 0:
                this.setState({
                    findKeySet : data
                })
              break;
            case 1:
                this.setState({
                    findKeySet : data
                })
              break;
            default:
          }
        this.setState({
            activeStep: this.state.activeStep + 1
        })
    }

    render() {
        return (
            <div style={{ position: 'absolute', left: '10%', right: '10%' }}>
                <Stepper activeStep={this.state.activeStep}>
                    {this.steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {this.state.activeStep === 0 ? <Parse next = {this.handleNext}/> : null}
                    {this.state.activeStep === 1 ? <Select keySet = {this.state.findKeySet} next = {this.handleNext}/> : null}
                </div>

            </div>
        )
    }
}
