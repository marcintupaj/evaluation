import React, { Component } from 'react';
import './CollapseText.scss';
import { COLLAPSE_HEIGHT } from '../config';

export class CollapseText extends Component {
    state = {
        isWrapperCollapsed: false,
    };

    constructor() {
        super();
        this._toggleElement = this._toggleElement.bind(this);
    }

    componentDidMount() {
        const collapseHeight = this.props.height | COLLAPSE_HEIGHT;
        const textHeight = this.element.clientHeight;
        const isWrapperHighEnough = textHeight > collapseHeight;
        
        this.setState(() => ({
            isWrapperHighEnough,
            isWrapperCollapsed: isWrapperHighEnough,
        }))
    }

    Gradient = () => {
        const {
            color,
        } = this.props;
        const {
            isWrapperCollapsed,
        } = this.state;

        return (
            <div className="gradient"
                style={{background: isWrapperCollapsed ? `linear-gradient(to bottom, #${color}00 0%, #${color}ff 100%)` : 'transparent'}} />
        );
    }
    

    render() {
        const {
            isWrapperCollapsed,
        } = this.state;

        const {
            children,
            height,
        } = this.props;

        const wrapperCollapsedClass = isWrapperCollapsed
        ? 'wrapper--collapsed'
        : '';
        const wrapperCollapsedStyles = {maxHeight: isWrapperCollapsed ? height : 'none'};

        return (
            <div className={`wrapper ${wrapperCollapsedClass}`}
                ref={element => this.element = element}
                onClick={this._toggleElement}
                style={wrapperCollapsedStyles}>
                {children}
                <this.Gradient />
            </div>
            )
        }

    _toggleElement() {
        this.setState(prevState => ({
            isWrapperCollapsed: prevState.isWrapperHighEnough && !prevState.isWrapperCollapsed,
        }));
    }
}