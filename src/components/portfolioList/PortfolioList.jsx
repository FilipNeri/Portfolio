import React from 'react'
import "./portfolioList.scss"

export default function PortfolioList({title,active, setSelected, id}){
    return(
        <div className={ active ? "portfolioList active":"portfolioList"} id='portfolioList' onClick={()=>setSelected(id)}>
            {title}
        </div>
    )
}