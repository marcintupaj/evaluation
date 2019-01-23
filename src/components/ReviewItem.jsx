import React, { Component } from 'react';
import './Reviews.scss';
import { User, userTypes } from './User';
import { Comment } from './Comment';
import { Marks } from './Marks';

const currentUser = require('../data/currentUser.json');

export class ReviewItem extends Component {
    state = {
        comments: [],
        commentText: '',
        isFormExtended: false,
        isDescriptionExtended: false,
    };

    componentDidMount() {
        this.setState(() => ({
            comments: this.props.review.comments,
        }))
    }

    CommentButton = () => 
        <div className="comment__button-container button-container">
            <span className="btn btn-primary" onClick={this._toggleCommentForm.bind(this)}>
                Add comment
            </span>
        </div>

    Form = () => 
        <div className="review__comment-form-container">
            <form onSubmit={(e) => this._onSubmit(e, currentUser)} className="review__comment-form">
                <label htmlFor="comment-text" className="review__comment-form-label">Comment</label>
                <textarea
                    id="comment-text"
                    className="review__comment-text"
                    rows="5"
                    value={this.state.commentText}
                    placeholder="Enter your opinion"
                    onChange={(e) => this._onTextChange(e)}/>
                <button type="submit" className="btn btn-primary">
                Submit comment</button>
            </form>
        </div>

    render() {
        const {
            comments,
            isDescriptionExtended,
            isFormExtended,
        } = this.state;

        const {
            review,
        } = this.props;

        return (
            <li className="review__item">
                <User classList="user--review-header" user={review.author} userType={userTypes.DATE}/>
                <Marks marks={review.marks}/>
                <h3 className="review__title">{review.title}</h3>
                <p className={`review__description ${isDescriptionExtended && 'review__description--extended'}`}
                    onClick={this._toggleDescription.bind(this)}>
                    {review.text}
                </p>
                {
                    !isFormExtended
                    ? <this.CommentButton />
                    : <this.Form />
                }
                <ul className="comments">
                    { 
                        comments.map(comment => 
                            <Comment key={comment.id} comment={comment}/>)
                    }
                </ul>
            </li>
        )
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
                    id: Math.random().toString(36).substr(2, 9), // fake id
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

    _toggleDescription() {
        this.setState(prevState => ({
            isDescriptionExtended: !prevState.isDescriptionExtended,
        }));
    }
}