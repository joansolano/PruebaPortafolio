import React from 'react';

export default (props) => {
    const course = props.element;
    return (
        <div className="shadow p-4 bg-white mr-4 rounded">
            <h4 className="font-bold">
                <a href={course.url} target="_blank" rel="noopener noreferrer">{course.title}</a>
            </h4>
            <div className="text-center">
                <span className="inline-block bg-red-300 text-red-700 p-2 mt-2 radius">Progreso: {parseInt(course.progress)}%</span>
            </div>
        </div>
    )
}