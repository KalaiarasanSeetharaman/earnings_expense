import React,{PureComponent} from 'react';
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {incomeModelHide,addIncomeSpending} from '../Actions/ExpenseAction';

class IncomeModal extends PureComponent{

    constructor(props){
        super(props);
        this.state={
            payload:{
                date:this.formatDate(),
                type:'income',
                amount:0,
                desc:''
            }
        }
    }

    formatDate() {
        var d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [day,month, year ].join('.');
    }

    handleIncomeClose(){
        this.props.incomeModelHide();
    }
    
    handleOnBlur({target}){
        this.setState(prevState => ({
            payload: {
                ...prevState.payload,
                [target.name]:target.value
            }
          }));
    }

    handleIncomeSaveClick(e){
        if(this.state.amount>0){
            e.preventDefault();
            this.props.addIncomeSpending(this.state.payload);
            this.setState(prevState => ({
                payload: {
                    ...prevState.payload,
                    amount:0,
                    desc:''
                }
            }));
        }
    }

    render(){
        const {show} = this.props;
        const {date, format, mode, inputFormat} = this.state;
        return(
            <Modal show={show} onHide={()=>this.handleIncomeClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Income</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="formforIncome">
                        <Form.Label>Income</Form.Label>
                        <Form.Control pattern="^-?[0-9]\d*\.?\d*$" type="text" name="amount" onBlur={(e)=>this.handleOnBlur(e)} placeholder="Enter income" required />
                    </Form.Group>

                    <Form.Group controlId="formDesc">
                        <Form.Label>Desctription</Form.Label>
                        <Form.Control type="text" name="desc" onBlur={(e)=>this.handleOnBlur(e)} placeholder="Desctription"   required/>
                    </Form.Group>
                    <Button variant="primary" type="submit"  onClick={(e)=>this.handleIncomeSaveClick(e)}>
                        Submit
                    </Button>
                </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>this.handleIncomeClose()}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
const mapStateToProps = state => ({
    show: state.common.incomeModal
})
function mapDispatchToProps(dispatch) {
    return bindActionCreators({incomeModelHide,addIncomeSpending }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(IncomeModal)
