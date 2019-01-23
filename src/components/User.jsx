import React from 'react';
import './User.scss';
import {
    DATE_LOCALE,
    DATE_FORMAT_OPTIONS
} from '../config';

export const userTypes = {
    DATE: 'date',
    POSITION: 'position',
};

export const User = ({ classList, user, userType }) => {
    const secondaryText = userType === userTypes.DATE
        ? _getDateString(user.addedDate)
        : user.position;

    return (
        <div className={`${classList} user`}>
            <div className="user__avatar">
                <img src={user.avatar} alt={user.name} className="user__avatar-image" />
            </div>
            <h5 className="user__name">{user.name}</h5>
            <p className="user__secondary">{secondaryText}</p>
        </div>
    );
}

const _getDateString = (date) => 
    new Intl.DateTimeFormat(DATE_LOCALE, DATE_FORMAT_OPTIONS).format(date);