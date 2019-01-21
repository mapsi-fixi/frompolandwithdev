import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

let ExcerptBlock = styled.div`

    background: #fff;
    display: flex;
    text-align: left;
    padding: 15px;
    justify-content: space-between;
    border-bottom: 1px solid #f1f1f1;

    &:first-child {

        flex-direction: column;

        h2 {
            font-size: 1.8em;   
        }

         .excerpt-info {
            order: 1;
         }
         .image-content {
            order: 0;
        }
         .image-cont {
            width: 100%;
            height: 290px;
            background-position: center;
            background-size: cover;
        }
    } 

    &:not(:first-child) > .image-content {
        width: 75px;
    } 


    h2 {
        font-size: 1.5em;
    }

    .category {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.8em;
        color: #3c3c3c;
        margin-top: 10px;
    }

    .image-cont {
        width: 75px;
        height: 75px;
        background-position: center;
        background-size: cover;
    }

`;

export default class PostExcerpt extends React.Component {

    render (){
        
        return (
            <ExcerptBlock>
                <div className="excerpt-info">
                    <div className="category">
                        {this.props.post.category}
                    </div>
                    <Link to={"/post/" + this.props.post.id}>
                        <h2>{this.props.post.title}</h2>
                    </Link>                    
                </div>

                <div className="image-content">
                    <Link to={"/post/" + this.props.post.id}>

                        <div className="image-cont" style={ { backgroundImage: 'url('+this.props.post.image+')' } }>
                        </div>
                        
                    </Link>
                </div>
            </ExcerptBlock>
        );

    }

}