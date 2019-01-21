import React from 'react';
import PostExcerpt from './PostExcerpt';
import styled from 'styled-components';
import posed from 'react-pose';
import postList  from './../data/postdata';

const CategorySlide = styled.div`

    position: relative;
    height: 30px;
    overflow: hidden;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: #f7f7f7;

    ul {
        position: absolute;
        top: 0;
        left: 0;
        list-style: none;
        padding: 5px 0 5px 15px;
        margin-top: 0;
        display: flex;

        li {
            display: inline-block;
            margin-right: 30px;
            font-size: 1.2em;
        }

    }
`;

const DraggableList = posed.ul({
    draggable: 'x',
    dragBounds: { left: -100, right: 0 }
})

export default class PostsList extends React.Component {

    componentDidMount(){

        setTimeout( () => {
            window.scrollTo(0,0);
        }, 400 )

    }

    // getting post from mock
    getPosts(){

        return postList.map( ( elem ) => {
            return <PostExcerpt post={elem} key={elem.id}/>
        });

    }

    // render content with post list
    render (){

        return (
            <div>
                <CategorySlide>
                    <DraggableList>
                        <li>#TheNews</li>
                        <li>#Politics</li>
                        <li>#World</li>
                        <li>#Us</li>
                    </DraggableList>
                </CategorySlide>
                <div>
                    {this.getPosts()}
                </div>
            </div>
        );

    }

}