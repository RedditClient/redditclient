import React from 'react';
import './postContainer.css'
import defaultPic from '../popupPost/default.jpg'
import follow from '../popupPost/follow.png'
import comment from '../popupPost/comments.png'

export class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.img = this.img.bind(this);
        this.state = {time: ''}
      
       
    }

    img()  {
        if (this.props.posts.img === 'self' || this.props.posts.img === 'default' ) {
            return defaultPic;

        } else  {
            return this.props.posts.img;

        }
    }

 

    render() {
        return(
            <div className='post'>
                <div className='box'>
                <div id='topBox'>
                <p className='title'>{this.props.posts.title}</p>
                <a href={this.props.posts.url} target='_blank' rel="noreferrer"><p id='author' >@{this.props.posts.author}</p></a></div>
                

                <a href={this.props.posts.url} target='_blank' rel="noreferrer"><img id='thumbnail' src={this.img()} alt="Post impression"/></a>
                <div className='infos'>
                    <p id='followers'><img id='followpic' src={follow} alt="follow"/>{this.props.posts.follower}</p>
                    <p id='comment'><img id='commentpic' src={comment} alt="follow"/>{this.props.posts.comments}</p>

                    <p id='date'>{this.state.time}</p>

                </div>
                </div>
                


            </div>
        );

    }
}