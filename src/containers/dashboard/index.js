import React,{Component} from 'react'

import Header from '../../components/headers'

import GetLatestShipmentByEmail from '../../services/get_shipment.service'

class Dashboard extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            data : {

            },
            counters : {

            }
        }
    }

    async componentDidMount() {
        const response = await GetLatestShipmentByEmail()
        const {data} = response
        this.setState({data})
        this._categoryCounter()
    }

    _categoryCounter = () => {
        const counters = this.state.data.data.reduce(
            (previousValue, currentValue) => {
                const {current_status_code} = currentValue
                if(previousValue.hasOwnProperty(current_status_code)){
                    previousValue[current_status_code] += 1
                }else{
                    previousValue[current_status_code] = 1
                }
                return previousValue
            },{}
        )
        this.setState({counters})
    }

    _header = () => (
        <Header/>
    )   

    _categoryCard = () => {
        return(
            <h1>category card</h1>
        )
    }

    _dataInsight = () => {
        return(
            <h1>data insight</h1>
        )
    }

    _generateContainer = () => {
        return(
            <>
                {this._header()}
                {this._categoryCard()}
                {this._dataInsight()}
            </>
        )
    }
    render(){
        return(
            <>
                {this._generateContainer()}
            </>
        )
    }
}

export default Dashboard