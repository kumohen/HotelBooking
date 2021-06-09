import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="spinner-border text-danger" role="status" style={{height:"100px",width:"100px",marginTop:"100px"}}>
             <span className="sr-only">Loading...</span>
</div>
        </div>
    );
};

export default Loading;