import React from 'react'
import './Page.css'

export default function Page({ displayLink, link, title, snippet }) {
    return (
        <div className="page">
            <a href={link} target="_blank">
                <h2 className="title">{title}</h2>
            </a>
            <h3 className="display-link">{displayLink}</h3>
            <p className="snippet">{snippet}</p>
        </div>
    )
}
