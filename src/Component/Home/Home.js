import React ,{Component,PureComponent} from 'react';
import { Container, Jumbotron, Button, Image, Card, ListGroup, Row, Col } from 'react-bootstrap';
import './Home.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {incomeModelShow,spendModelShow} from '../Actions/ExpenseAction';

class Home extends PureComponent{
    constructor(props){
        super(props);
    }

    handleIncome(){
       this.props.incomeModelShow();
    }
    handleSpend(){
        this.props.spendModelShow();
     }
    render(){
        if(this.props.expenselists){
        return(
            <Container fluid className="homepage">
                <Card className="spendinglists">
                    <ListGroup variant="flush">
                    {
                        this.props.expenselists.map((list,index)=>{
                            let colorClass = 'listred';
                            if(list.type=='income'){
                                colorClass = 'listgreen';
                            }
                            return(
                                <ListGroup.Item   key={index}>
                                    <Row>
                                        <Col md={4} xs={12}>
                                        <span>{list.date}</span><br/>
                                        <span className={colorClass}>{list.amount}Kc</span>
                                        </Col>
                                        <Col md={4} xs={12}>{list.desc}</Col>
                                        <Col md={4} xs={12}>Delete</Col>
                                    </Row>
                                </ListGroup.Item>
                            )

                        })
                    }
                    </ListGroup>
                </Card>
                <Col md={12} xs={12}>
                    <Row className="footerpart">
                        <Col md={12} xs={12}>
                            <Button className="btn-income" onClick={()=>this.handleIncome()} variant="success">Add Income</Button> 
                            <Button onClick={()=>this.handleSpend()} variant="danger">Add Spending</Button>
                        </Col>
                    </Row>
                </Col>
            </Container>
        )
        }else{
            return(
            <Container fluid className="homepage">
            <Card className="spendinglists">
                <ListGroup variant="flush">
                    No Data Found
                </ListGroup>
            </Card>
            <Col md={12} xs={12}>
                    <Row className="footerpart">
                        <Col md={2} xs={12}>
                            <Button onClick={()=>this.handleIncome()} variant="success">Add Income</Button> 
                        </Col>
                        <Col md={2} xs={12}>
                            <Button onClick={()=>this.handleSpend()} variant="danger">Add Spending</Button>
                        </Col>
                    </Row>
            </Col>
        </Container> 
            )
        }
    }
}
const mapStateToProps = state => ({
    expenselists: state.expense.expenseList
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ incomeModelShow,spendModelShow }, dispatch)
  }

export default connect(mapStateToProps,mapDispatchToProps)(Home)