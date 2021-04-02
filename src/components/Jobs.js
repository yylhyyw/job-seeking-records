import React, { Component } from 'react'
import { DataGrid } from '@material-ui/data-grid';


const columns = [
    // { field: 'id', headerName: 'ID', width: 100 },
    // { field: 'company', headerName: 'Company', width: 200 },
    // { field: 'jobTitle', headerName: 'Job Title', width: 300 },
    // { field: 'description', headerName: 'Description', width: 1100 },
    // { field: 'date', headerName: 'Apply Date', width: 125 },
    { field: 'id', headerName: 'ID',flex: 0.035,},
    { field: 'company', headerName: 'Company', flex: 0.1,},
    { field: 'jobTitle', headerName: 'Job Title',  flex: 0.16,},
    { field: 'description', headerName: 'Description',  flex: 0.6,},
    { field: 'date', headerName: 'Apply Date',  flex: 0.08,},
];

export default class Jobs extends Component {

    render() {
        return (<div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={this.props.rows} columns={columns} pageSize={10} checkboxSelection autoHeight/>
        </div>
        );
    }
}
