import React from 'react'
import Filter from '../filter'
import Posts from '../posts';

import './app.scss';

function App() {
    return (
        <div className="wrapper">
            <Filter />
            <Posts />
        </div>
    )
}

export default App
