import React from 'react';

export default (props) => {
    const certificate = props.element;
    return (
        <div className="shadow p-4 bg-white mr-4 rounded">
            <h4 className="font-bold">{certificate.title}</h4>
            <div className="text-center">
                <span className="inline-block bg-red-300 text-red-700 p-2 mt-2 radius">Calificación: {certificate.score}</span>
            </div>
        </div>  
    )
}

    
