import React from 'react';
import { ReactComponent as SearchSvg } from './search-black-18dp.svg';

import './filter.scss';

function Filter({ onHandleChange }) {

    const onInput = (e) => {
        onHandleChange(e)
    }

    return (
        <div className="container">
            <div className="filter">
                <div className="filter__body">
                    <div className="filter__icon">
                        <SearchSvg />
                    </div>
                    <input
                        onChange={onInput}
                        type="text"
                        name="text"
                        placeholder="Author" />
                </div>
            </div>

        </div>
    )
}

export default Filter
