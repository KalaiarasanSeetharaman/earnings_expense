import React,{useState, useEffect} from 'react';
import './Header.css';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Header =({balance,totalSpending,totalIncome})=>{
    return(
        <Container id="headerContainer" fluid>
            <header>
                <Row>
                    <Col md={12}>
                        <h4 className="balanceTitle">
                        Balance 
                        </h4>
                    </Col>
                    <Col md={12}>
                        <span className="balance">
                            {balance}Kc 
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={6}>
                        <Row>
                            <Col md={4} xs={4}>
                                <h6 className="incomeTitle">
                                Income:  
                                </h6>
                            </Col>
                            <Col md={6} xs={6}>
                                <span className="totalIncome">
                                    {totalIncome}Kc 
                                </span>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} xs={6}>
                        <Row>
                            <Col md={4} xs={4}>
                                <h6 className="spendTitle">
                                Spendings:  
                                </h6>
                            </Col>
                            <Col md={6} xs={6}>
                                <span className="totalSpending">
                                    {totalSpending}Kc 
                                </span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </header>
        </Container>
    )
}
export default Header;