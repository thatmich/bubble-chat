import React from 'react';
// import { useState, createRef} from 'react';

import './Draggable.css'
//https://stackoverflow.com/questions/20926551/recommended-way-of-making-react-component-div-draggable?answertab=votes#tab-top
const throttle = (f) => {
    let token = null, lastArgs = null;
    const invoke = () => {
        f(...lastArgs);
        token = null;
    };
    const result = (...args) => {
        lastArgs = args;
        if (!token) {
            token = requestAnimationFrame(invoke);
        }
    };
    result.cancel = () => token && cancelAnimationFrame(token);
    return result;
};

class Draggable extends React.PureComponent {
    _relX = 0;
    _relY = 0;
    _ref = React.createRef();
    
    _onMouseDown = (event) => {
        if (event.button !== 0) {
            return;
        }
        const {scrollLeft, scrollTop, clientLeft, clientTop} = document.body;
        // Try to avoid calling `getBoundingClientRect` if you know the size
        // of the moving element from the beginning. It forces reflow and is
        // the laggiest part of the code right now. Luckily it's called only
        // once per click.
        const {left, top} = this._ref.current.getBoundingClientRect();
        this._relX = event.pageX - (left + scrollLeft - clientLeft);
        this._relY = event.pageY - (top + scrollTop - clientTop);
        //console.log(this._relX);
        document.addEventListener('mousemove', this._onMouseMove);
        document.addEventListener('mouseup', this._onMouseUp);
        event.preventDefault();
    };
    
    _onMouseUp = (event) => {
        document.removeEventListener('mousemove', this._onMouseMove);
        document.removeEventListener('mouseup', this._onMouseUp);
        event.preventDefault();
        this.props.onRelease();
    };
    
    _onMouseMove = (event) => {
        this.props.onMove(
            event.pageX - this._relX,
            event.pageY - this._relY,
        );
        event.preventDefault();
    };
    
    _update = throttle(() => {
        let x = this.props.x;
        let y = this.props.y;
        this._ref.current.style.transform = `translate(${x}px, ${y}px)`;
        // console.log('' + x + ' ' + y);
        // console.log(this.props);
    });
    
    componentDidMount() {
        this._ref.current.addEventListener('mousedown', this._onMouseDown);
        this._update();
    }
    
    componentDidUpdate() {
        this._update();
    }
    
    componentWillUnmount() {
        this._ref.current.removeEventListener('mousedown', this._onMouseDown);
        this._update.cancel();
    }
    
    render() {
        return (
            <div className="draggable" ref={this._ref} style={{position:'absolute'}}>
                {this.props.children}
            </div>
        );
    }
}

export default Draggable;