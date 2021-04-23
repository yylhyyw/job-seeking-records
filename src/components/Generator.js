import React, { Component } from 'react'
import { Button } from '@material-ui/core'

export default class Generator extends Component {

    state = {
        keyWords : ['java', 'python'],
        description : '',
        findKeys : null
    }


    style = {
        position : 'relative',
        left : '0',
        right : '0',
        width : '100%',
        top:'0',
        height : '50%',
    }

    parse = () => {
        let body = this.state.description
        const set = this.state.keyWords
        body = body.replaceAll(/\n/g, " ")
        const arr = body.split(' ')
        const keyWords = new Set()
        arr.forEach( (s) => {
            let word = s.toLowerCase()
            set.forEach( key => {
                if(word.includes(key)) keyWords.add(key)
            })
        })
        this.setState({
            findKeys : keyWords
        })
    }

    renderList = () => {
        if(this.state.findKeys === null) return null;
        const listItems = []
        this.state.findKeys.forEach( x => {
            let time = new Date().getTime
            listItems.push(<li key={time}>{x}</li>)
        })

        return <ul>
            {listItems}
        </ul>
    }
    render() {
        return (
            <div style={{position : 'absolute', left : '10%', right : '10%'}}>
                <h3>Please Import Your Job Description Here:</h3>
                <div style={this.style}>
                    <textarea style={{width : '100%', height:'500px'}}name="Description" id="description" onChange={(e) => this.setState({
                        description : e.target.value
                    })}></textarea>
                </div>
                <div>
                <Button style={{marginTop : "20px"}}color="secondary" variant="contained" onClick={this.parse}>Analyze</Button>
                </div>
                {this.renderList()}
            </div>
        )
    }
}
