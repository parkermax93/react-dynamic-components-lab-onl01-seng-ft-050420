import React, { Component } from 'react'

class Comment extends React.Component {
    render() {
        return (
            <div>
                {this.props.commentText}
            </div>
        )
    }
}