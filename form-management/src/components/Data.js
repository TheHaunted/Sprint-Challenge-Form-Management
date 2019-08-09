import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Data = (props) => {
    const [data, setData] = useState({})
    console.log('data', data);
    useEffect(() => {
        console.log('axios.get');
        axios.get('http://localhost:5000/api/restricted/data')
            // .then(res => console.log('res', res))
            .then(res => setData(res))
            .catch(err => console.log(err))
    }, [])

    if (data) {
        return (
            data.data.map(item => {
                return (
                    <div>
                        <div>{item.data}</div>
                    </div>
                )
            })
        )
    } else {
        return <div>empty</div>
    }
}

export default Data;