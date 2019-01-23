import React from 'react';
import { ReviewItem } from './ReviewItem';
import './Reviews.scss';

const reviewsData = require('../data/reviews.json');
export const Reviews = () => 
    <div className="container">
        <div className="review">
            <ul className="review__list">
                { 
                    reviewsData.map(review => 
                        <ReviewItem key={review.id} review={review}/>)
                }
            </ul>
        </div>
    </div>