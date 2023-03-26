import React from 'react'

const Loader = () => {
    return (
        <div style={{ position: 'absolute', width: '100vw', height: '90vh', zIndex: 999, backgroundColor: 'white' }} className='loader'>
            <div style={{ position: 'absolute', top: '45%', left: '45%' }} className="wrapper">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    )
}

export default Loader;