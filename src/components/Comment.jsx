import React from 'react';
import './Comment.scss';
import { User, userTypes } from './User';
import { CollapseText } from '../common/CollapseText';
import { COLLAPSE_COLORS } from '../config';

export const Comment = ({ comment }) => 
    <li className="comment">
        <div className="comment__text-container">
            <span className="comment__heading">Comment</span>
            <CollapseText height={70} color={COLLAPSE_COLORS.GREY}>
                <p className="review__description comment__text">
                    {comment.text}
                </p>
            </CollapseText>
            <User classList="user--bottom" user={comment.author} userType={userTypes.POSITION}/>
        </div>
    </li>