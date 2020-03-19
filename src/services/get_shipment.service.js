import Axios from 'axios'

const GetLatestShipmentByEmail = async() => {
    return await Axios.post(
        'https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank', 
        {
            "email": "mayankmittal@intugine.com"
        },
        {
            headers : {
                Authorization : 'Bearer tTU3gFVUdP'
            }
        }
    )
}

export default GetLatestShipmentByEmail