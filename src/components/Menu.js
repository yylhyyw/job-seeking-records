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
        const animTimer = setInterval(this.anim, 10)
        this.setState({
            animTimer: animTimer
        })

        
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.props.close)
    }

    anim = () => {
        const count = this.state.timeCount + 10;
        if (count >= 0) {
            document.body.addEventListener('click', this.props.close)
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

        return (
            
            <div >
                <ButtonGroup style={this.state.menuStyle}
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
