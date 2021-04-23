import React, { Component } from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

export default class Generator extends Component {
    
    state = {
        skipped : new Set(),
        activeStep : 0,
    }

    steps = ['Scan key words', 'Select key words', 'Generated Resume']

    render() {
        return (
            <div style={{position : 'absolute', left : '10%', right : '10%'}}>
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
            </div>
        )
    }
}
