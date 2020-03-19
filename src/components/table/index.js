import React, { Component } from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class TableComponent extends Component{
    render(){
        console.log(this.props.tableDetails, "from table ")
        return(
            <TableContainer component={Paper}>
                <Table style={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>AWBNUMBER</TableCell>
                        <TableCell align="right">TRANSPORTER</TableCell>
                        <TableCell align="right">SOURCE</TableCell>
                        <TableCell align="right">DESTINATION</TableCell>
                        <TableCell align="right">BRAND</TableCell>
                        <TableCell align="right">START DATE</TableCell>
                        <TableCell align="right">ETD</TableCell>
                        <TableCell align="right">STATUS</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.props.tableDetails.map(row => (
                        <TableRow onClick={()=> {this.props.setTimeline(row._id)}}>
                        <TableCell component="th" scope="row">{row.awbno}</TableCell>
                        <TableCell align="right">{row.carrier}</TableCell>
                        <TableCell align="right">{row.from}</TableCell>
                        <TableCell align="right">{row.to}</TableCell>
                        <TableCell align="right">{row.order_data}</TableCell>
                        <TableCell align="right">{row.pickup_date}</TableCell>
                        <TableCell align="right">{row.extra_fields ? row.extra_fields.expected_delivery_date : '-'}</TableCell>
                        <TableCell align="right">{row.current_status}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default TableComponent