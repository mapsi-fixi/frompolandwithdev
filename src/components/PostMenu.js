import React from 'react';
import {Link} from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

fontawesome.library.add(faBars, faArrowLeft );

export default class PostMenu extends React.Component {

    render (){

        return (
            <Link to="/">  
                <FontAwesomeIcon icon="arrow-left" />
            </Link>
        );

    }

}