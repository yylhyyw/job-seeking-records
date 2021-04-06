import React, { Component } from 'react'
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import Dialog from '@material-ui/core/Dialog';
import MakeStatusChange from './MakeStatusChange'
import '../css/main.css'

const columns = [
    // { field: 'id', headerName: 'ID', width: 100 },
    // { field: 'company', headerName: 'Company', width: 200 },
    // { field: 'jobTitle', headerName: 'Job Title', width: 300 },
    // { field: 'description', headerName: 'Description', width: 1100 },
    // { field: 'date', headerName: 'Apply Date', width: 125 },
    { field: 'id', headerName: 'ID', flex: 0.035, },
    { field: 'company', headerName: 'Company', flex: 0.1, },
    { field: 'jobTitle', headerName: 'Job Title', flex: 0.16, },
    { field: 'description', headerName: 'Description', flex: 0.52, },
    { field: 'date', headerName: 'Apply Date', flex: 0.08, },
    {
        field: 'status', headerName: 'Status', flex: 0.08, cellClassName: (params) => {
            return params.value === 'Rejected' ? 'reject-status-color' : 'status-color'
        }
    },
];

// cellClassName: (params) => clsx('super-app', {
//     negative: params.value === 'Rejected',
//     positive : params.value !== 'Rejected',
// })
export default class Jobs extends Component {

    state = {
        selectedRows: [],
        open: false,
        selectedDescription: '',
        selectedLabel: '',
        selectedRole: ''

    }

    onSelect = (e) => {
        let rows = this.state.selectedRows
        if (e.isSelected) rows.push(e.data)
        else rows = rows.filter(row => row.id !== e.data.id)
        this.setState({
            selectedRows: rows
        })
    }

    onDoubleClick = (e) => {
        console.log(e)
        this.setState({
            open: true,
            selectedDescription: e.row.description,
            selectedLabel: e.row.company,
            selectedRole: e.row.jobTitle
        })
    }

    refresh = () => {
        setTimeout(this.props.refresh, 5)
    }

    open = () => {
        this.setState({
            open: true,
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    render() {
        return (<div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={this.props.rows} columns={columns} pageSize={10} checkboxSelection autoHeight onRowSelected={this.onSelect} onRowDoubleClick={this.onDoubleClick} components={{
                Toolbar: GridToolbar,
            }} />
            <MakeStatusChange selectedRows={this.state.selectedRows} refresh={this.refresh} />


            {/* dialog */}
            <Dialog open={this.state.open} onClose={this.handleClose} >
                <div style={{ margin: '10px' }}>
                    <h3>Description</h3>
                    <h4>Company -- {this.state.selectedLabel}</h4>
                    <h4>Position -- {this.state.selectedRole}</h4>
                    {this.state.selectedDescription}
                </div>
            </Dialog>
        </div>
        );
    }
}
