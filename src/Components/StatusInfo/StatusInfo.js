import React from 'react';
import './StatusInfo.css';

function StatusInfo({status}) {
    if (status === 'Loading') {
        return (
            <div className='info'>
                <div className='loader'>
                    <h2>Loading</h2>
                    <p>Please wait...</p>
                </div>
            </div>
        );
    }
    else { 
        return (
            <div className='info'>
                <div className='error'>
                    <h2>Oops! Something went wrong.</h2>
                    <p>Error: {status}</p>
                </div>
            </div>
        );
    }
}

export default StatusInfo;