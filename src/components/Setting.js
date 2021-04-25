import React, { Component } from 'react'
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       justifyContent: 'center',
//       flexWrap: 'wrap',
//       '& > *': {
//         margin: theme.spacing(0.5),
//       },
//     },
//   }));
const myStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '0',
    padding: '0.5',
    flexDirection:'row'
}
export default class Setting extends Component {
    state = {
        key: ['Python', 'Java', 'C'],
        inputText : ''
    }

    handleDelete = (index) => {
        const newKey = this.state.key.filter((value,i) => i !== index)
        this.setState({
            key:newKey
        })
    };

    handleAdd = (e) => {
        e.preventDefault();
        const newKey = this.state.key
        newKey.push(this.state.inputText)
        this.setState({
            key : newKey,
            inputText : ''
        })
    }

    
    render() {
        const keyList = this.state.key.map((value, index) => {
            return (
                <ul style={{listStyle: 'none'}}key={value+index}>
                    <li
                    // key={value}
                    >
                    <Chip
                        label={value}
                        onDelete={ () => this.handleDelete(index)}
                        // key={value}
                    />
                    </li>
                </ul>
            )
        })

        return (
            <div>
                <div style={myStyle}>{keyList}</div>
                
                <form noValidate autoComplete="off">
                    <TextField onChange={(value)=>this.setState({inputText : value.target.value})} id="standard-basic" label="Skill" value={this.state.inputText}/>
                    <Button style={{marginTop:'4px'}} variant="contained" color="primary" value="Add" type = "submit" onClick = { (e) => this.handleAdd(e)}>Add</Button>
                </form>
            </div>
        )
    }
}
