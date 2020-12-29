import React from 'react';
import './postGrid.css'
import {PostContainer} from '../popupPost/postContainer';
import {Reddit} from './Reddit';

export class PostGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []}

    }
    componentDidMount() {
        Reddit.getData().then(data => {
            this.setState({data: data});
        });

        

       
        
    }
   

    render() {
       

        return(
            <div className='grid' >
                <div className='gridBox'>
                <p>CLICK ON A POST FOR MORE INFOS!!!</p>

                    {
                        this.state.data.map(posts => { return <PostContainer posts={posts} key={posts.id}  />})
                    }
                

                    <button className='loadmore'>Load More...</button>

                </div>

            </div>
            
            
        );
    }
}