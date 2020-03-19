import React, { Component } from 'react'

import Header from '../../components/headers'
import Smallcard from '../../components/card'
import Table from '../../components/table'

import GetLatestShipmentByEmail from '../../services/get_shipment.service'

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {

            },
            counters: {

            },
            tableData : []
        }
    }

    async componentDidMount() {
        const response = await GetLatestShipmentByEmail()
        const { data } = response
        this.setState({ data })
        this._categoryCounter()
    }

    _categoryCounter = () => {
        const counters = this.state.data.data.reduce(
            (previousValue, currentValue) => {
                const { current_status_code } = currentValue
                if (previousValue.hasOwnProperty(current_status_code)) {
                    previousValue[current_status_code] += 1
                } else {
                    previousValue[current_status_code] = 1
                }
                return previousValue
            }, {}
        )
        this.setState({ counters })
    }

    _setTable = (category) => {
        const tableData = this.state.data.data.filter(item => {
            return item.current_status_code === category
        })
        this.setState({tableData})
    }

    _header = () => (
        <Header />
    )

    _categoryCard = () => {
        const keys = Object.keys(this.state.counters);
        return (
            <div style={{display: 'flex', flexDirection: 'row' , justifyContent:'center', marginTop : '20px'}}>
                 {keys.map(item => {
                return (
                    <Smallcard category = {item} count = {this.state.counters[item]} setTable = {this._setTable}/> 
                )
            })}
            </div>
           

        )
    }

    _tableData = () => {
        return(
            <Table tableDetails = {this.state.tableData}/>
        )
    }

    _timeline = () => {

    }

    _dataInsight = () => {
        return (
            <>
                {this._tableData()}
                {this._timeline()}
            </>
        )
    }

    _generateContainer = () => {
        return (
            <>
                {this._header()}
                {this._categoryCard()}
                {this._dataInsight()}
            </>
        )
    }
    render() {
        return (
            <> 
                {this._generateContainer()}
            </>
        )
    }
}




export default Dashboard