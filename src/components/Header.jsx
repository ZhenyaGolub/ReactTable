import React from 'react'

export const Header = ({ headers }) => {
    
    const { amount, text } = headers;

    const headersList = new Array(amount).fill(text).map((header, index) => {
        return (
            <div key={index}>{header}</div>
        )
    })

    return (
        <div className="headers">
          <div className="track">
            {headersList}
          </div>
        </div>
    )
}
