import React from 'react';
import './Marks.scss';
import { STARS_TOTAL } from '../config';

export const Marks = ({ marks }) => {
    const thumbVariantClass = marks.positive
        ? 'marks__thumb--up'
        : 'marks__thumb--down';
    const thumbIconVariantClass = marks.positive
        ? 'fa-thumbs-up'
        : 'fa-thumbs-down';

    return (
        <div className="marks">
            <span className={`marks__thumb ${thumbVariantClass}`}>
                <i className={`fas ${thumbIconVariantClass}`}/>
            </span>
            <div className="marks__stars-container">
                { _getStars(marks.scored) }
                <span className="marks__stars-count">{marks.scored}/{STARS_TOTAL}</span>
            </div>
        </div>
    );
}

const _getStars = (scored) => {
    let starsList = [];

    for (let index = 0; index < STARS_TOTAL; index++) {
        starsList.push(
            <i key={index} className={`fas fa-star star ${index < scored ? 'star--active' : ''}`} />
        );
    }

    return starsList;
};