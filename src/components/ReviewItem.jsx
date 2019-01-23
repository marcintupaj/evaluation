import React, { Component } from 'react';
import './Reviews.scss';
import { User, userTypes } from './User';
import { Comment } from './Comment';
import { Marks } from './Marks';
import { CollapseText } from '../common/CollapseText';
import { COLLAPSE_COLORS } from '../config';
const currentUser = require('../data/currentUser.json');

export class ReviewItem extends Component {
    state = {
        comments: [],
        commentText: '',
        isFormExtended: false,
    };

    constructor() {
        super();
        this._toggleCommentForm = this._toggleCommentForm.bind(this);
    }

    componentDidMount() {
        this.setState(() => ({
            comments: this.props.review.comments,
        }))
    }

    CommentButton = () => 
        <div className="comment__button-container button-container">
            <span className="btn btn-primary" onClick={this._toggleCommentForm}>
                Add comment
            </span>
        </div>

    Form = () => 
        <div className="review__comment-form-container">
            <form onSubmit={(event) => this._onSubmit(event, currentUser)} className="review__comment-form">
                <label htmlFor="comment-text" className="review__comment-form-label">Comment</label>
                <textarea
                    id="comment-text"
                    className="review__comment-text"
                    rows="5"
                    value={this.state.commentText}
                    placeholder="Enter your opinion"
                    onChange={(event) => this._onTextChange(event)}/>
                <button type="submit" className="btn btn-primary">
                    Submit comment
                </button>
            </form>
        </div>
    
    CommentsSection = () => !this.state.comments.length // remove condition to handle multiple comments
        ? <this.CommentsFormSection/>
        : null

    CommentsFormSection = () => !this.state.isFormExtended
        ? <this.CommentButton />
        : <this.Form />

    render() {
        const {
            comments,
        } = this.state;

        const {
            review,
        } = this.props;

        return (
            <li className="review__item">
                <User classList="user--review-header" user={review.author} userType={userTypes.DATE}/>
                <h2 className="review__title">{review.title}</h2>
                <Marks marks={review.marks}/>
                <CollapseText height={100} color={COLLAPSE_COLORS.WHITE}>
                    <p className="review__description">
                        {review.text}
                    </p>
                </CollapseText>
                <this.CommentsSection />
                <ul className="comments">
                    { 
                        comments.map(comment => 
                            <Comment key={comment.id} comment={comment}/>)
                    }
                </ul>
            </li>
        );
    }

    _onTextChange(event) {
        const commentText = event.currentTarget.value;
        this._updateComment(commentText);
    }

    _onSubmit(event, user) {
        event.preventDefault();

        this._toggleCommentForm();
        this._addComment(this.state.commentText, user);
        this._resetForm();
    }

    _resetForm() {
        this._updateComment('');
    }

    _addComment(commentText, user) {
        this.setState(prevState => ({
            comments: [
                {
                    id: this._getRandomId(),
                    author: {
                        ...user,
                        addedDate: new Date().getTime(),
                    },
                    text: commentText,
                },
                ...prevState.comments,
            ],
        }));
    }

    _updateComment(commentText) {
        this.setState(() => ({
            commentText,
        }));
    }

    _toggleCommentForm() {
        this.setState(prevState => ({
            isFormExtended: !prevState.isFormExtended,
        }));
    }

    _getRandomId() {
        return Math.random().toString(36).substr(2, 9);
    }
}