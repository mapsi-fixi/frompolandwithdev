import React from 'react';
import styled from 'styled-components';
import ZoomImg from './ZoomImg';
import posed from 'react-pose';
import postList  from './../data/postdata';

const StyledPost = styled.div`
    @import url('family=Noto+Serif:400,400i,700,700i&amp;subset=latin-ext');
    font-family: 'Noto Serif';

    .categories {
        
        font-family: 'Roboto', sans-serif;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.8em;
        color: #3c3c3c;
        margin-top: 10px;
    }

    h1 {
        font-weight: 700;
        font-style: italic;
        font-size: 2.4em;
    }

    .post-content {
        font-size: 1.4em;
        color: #8a8989;
        margin-bottom: 30px;
    }

`;

const AnimateContent = posed.div({
    
    init: { opacity: 0,scale: .9, y: 30},
    enter: { opacity: 1,scale:1, y: 0, delay: 600,transition: { duration: 100 } }

});

const PostContent = styled(AnimateContent)`
    padding: 15px;
`;

const RoundedImg = styled.div`
    border-radius: 40px;
    width: 50px;
    height: 50px;
    background-position: center;
    background-size: cover;
    background-image: url(${props => props.src});
`;

const PostAuthor = styled.div`
    font-size:2em;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    > * {
        margin-right: 10px;
    }

    span {
        color: #808080;
    }

    a {
        
        color: #2f2f2f;
        border-bottom: 1px solid;
        font-weight: 700;

    }

   

`;

export default class SinglePost extends React.Component {

    componentDidMount(){

        setTimeout( () => {
            window.scrollTo(0,0);
        }, 400 )

    }

    getPostData(){

        let post = postList.find( elem => elem.id === parseInt( this.props.match.params.id ) );
        return post;

    }

    render (){

        let post = this.getPostData();
        
        return (
            <StyledPost>

                <ZoomImg
                    imageHeight={300}
                    src={post.image}
                />
 
                <PostContent key={"postcontent" + post.id}>
                    <div className="categories">
                        {post.category}
                    </div>
                    <h1>{post.title}</h1>
                    <div className="post-content">
                        {post.content}
                    </div>
                    <PostAuthor>
                        <RoundedImg src={post.image}/>
                        <span>by</span>
                        <a>Marcin Dragan</a>
                    </PostAuthor>
                </PostContent>
            </StyledPost>
        );

    }

}