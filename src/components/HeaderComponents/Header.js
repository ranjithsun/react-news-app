import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {Headerontainer} from './header.style'

function Header(){
    const date = new Date().toDateString();
    return(   
        <Headerontainer>
            <Row>
                <Col className="title">
                    <h1>The News</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                <p>{date}</p>
                </Col>
            </Row>
        </Headerontainer>
    )
}

export default Header;