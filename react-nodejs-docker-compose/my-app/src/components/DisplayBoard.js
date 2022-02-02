import React from 'react'

export const DisplayBoard = ({numberOfSamples, getAllSamples}) => {
    
    return(
        <div className="display-board">
            <h4>Samples Created</h4>
            <div className="number">
            {numberOfSamples}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllSamples()} className="btn btn-warning">Get all Samples</button>
            </div>
        </div>
    )
}