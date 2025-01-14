import React from 'react'
import Icon from '../Icon/Icon'

import './List.scss';

const List = ({ items=[], icon, hasNumbers=false, className, ...props }) => {
    return (
        <ul className={`List ${className}`} {...props}>
            { items.map((item, i) => (
                <li className="List__item" key={i}>
                    {hasNumbers ? (
                        <div className="List__item__number">
                            { i + 1 }.
                        </div>
                    ) : (
                        icon || <Icon className="List__item__icon" name="asterisk" size="m" />
                    )}
                    <div className="List__item__text">
                        { item }
                    </div>
                </li>
            )) }
        </ul>
    )
}

export default List
