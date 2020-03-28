import React from 'react';

export default (props) => (
    <li className="flex items-center">
        <div className="w-10/12 overflow-x-hidden">
            <h4 className="text-green-500 font-bold truncate">{props.repo.name}</h4>
            <p className="text-sm text-gray-500 overflow-y-hidden" style={{height: "1.5em"}}>{props.repo.description}</p>
        </div>
        <div className="flex-1 text-right">
           <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer"> Ver </a> 
        </div>    
    </li>
)