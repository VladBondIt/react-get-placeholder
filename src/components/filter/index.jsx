import React from 'react';
import { ReactComponent as SearchSvg } from './search-black-18dp.svg';

import './filter.scss';

function Filter() {
    return (
        <div className="container">
            <div className="filter">
                <SearchSvg />
            </div>

        </div>
    )
}

export default Filter
