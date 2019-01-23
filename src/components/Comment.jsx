import React from 'react';
import './Comment.scss';
import { User, userTypes } from './User';

export const Comment = ({comment}) => 
    <li className="comment">
        <div className="comment__text-container">
            <p className="review__description comment__text">
                {comment.text}
            </p>
            <User classList="user--bottom" user={comment.author} userType={userTypes.POSITION}/>
        </div>
    </li>