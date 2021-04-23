import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default class Menu extends Component {

    state = {
        timeCount: -200,
        menuStyle: {
            position: 'absolute',
            left: '-200px',
            top: '63px',
            width: '200px',
            zIndex: '2',
        }
    }

    componentDidMount() {
        const animTimer = setInterval(this.anim, 60)
        this.setState({
            animTimer: animTimer
        })
    }

    anim = () => {
        const count = this.state.timeCount + 48;
        if (count >= 0) {
            this.setState({
                timeCount: 0,
                menuStyle: {
                    position: 'absolute',
                    top: '63px',
                    left: 0 + 'px',
                    width: '200px',
                    zIndex: '1',
                },
            })
            clearInterval(this.state.animTimer);
        } else {
            this.setState({
                timeCount: count,
                menuStyle: {
                    position: 'absolute',
                    top: '63px',
                    left: count + 'px',
                    width: '200px',
                    zIndex: '1',
                },
            })
        }

    }
    render() {
        console.log(this)
        return (
            
            <div >
                <ButtonGroup id="menu" style={this.state.menuStyle}
                    orientation="vertical"
                    color="primary"
                    aria-label="Menu Button Gourp"
                >
                    <Button color="primary" variant="contained" onClick={() => this.props.switch('jobBoard')}>Job Board</Button>
                    <Button color="primary" variant="contained" onClick={this.props.post}>Post</Button>
                    <Button color="primary" variant="contained" onClick={() => this.props.switch('generator')}>Generate Resume</Button>
                    <Button color="primary" variant="contained" onClick={() => this.props.switch('items')}>My Resume Itmes</Button>
                    <Button color="primary" variant="contained" onClick={() => this.props.switch('setting')}>My Resume Setting</Button>
                    <Button color="secondary" variant="contained" onClick={this.props.close}>Close</Button>
                </ButtonGroup>
            </div>

        )
    }
}
