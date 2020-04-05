import React,{Fragment, Component, PureComponent} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import Home from '../Component/Home/Home';
import Nomatch from '../Common/Nomatch';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import axios from 'axios';
import {loadExpenseList,updateSpendIncomeBalance} from '../Component/Actions/ExpenseAction';
import IncomeModal from '../Component/Home/IncomeModal';
import SpendingModal from '../Component/Home/SpendingModal';


  class PublicLayout extends PureComponent{
   
    constructor(props){
        super(props);
    }

    componentDidMount() {
        axios("https://jsonblob.com/api/b12e3037-7704-11ea-9f37-1b0cacc8b512")
        .then(response=>{
            let datas = response.data;
            const totalspending = datas.filter(data => data.type == 'spend').reduce((acc, val) => {
                return acc + val.amount;
              }, 0);
            const totalincome = datas.filter(data => data.type == 'income').reduce((acc, val) => {
                return acc + val.amount;
              }, 0);
            const balance = totalincome - totalspending;
            this.props.loadExpenseList(response.data,totalspending,totalincome,balance);
        })
      }

      componentDidUpdate(prevProps) {
        if (this.props.expenseList !== prevProps.expenseList) {
            let datas = this.props.expenseList;
            const totalspending = datas.filter(data => data.type == 'spend').reduce((acc, val) => {
                return acc + parseInt(val.amount);
              }, 0);
            const totalincome = datas.filter(data => data.type == 'income').reduce((acc, val) => {
                return acc + parseInt(val.amount);
              }, 0);
            const balance = totalincome - totalspending;
            this.props.updateSpendIncomeBalance(totalspending,totalincome,balance);
         
        }
      }

    render(){
        const {isloader,balance,totalSpending,totalIncome} = this.props;
        const loaderWrapClass = isloader ? "loadershow" : "hidden";
        const loaderClass = isloader ? "" : "hidden";
        return(
            <Fragment>
                <Header
                   balance ={balance}
                   totalSpending={totalSpending}
                   totalIncome={totalIncome}
                
                />
                <div className={`loaderWrap private ${loaderWrapClass} `}>
                    <div className={`loader ${loaderClass}`}>
                        <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            timeout={500000000} //3 secs
                            visible={isloader}
                        />
                    </div>
                </div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="*">
                        <Nomatch />
                    </Route>
                </Switch>
                <IncomeModal/>
                <SpendingModal/>
                <Footer/>
            </Fragment>
        )
    }
  }
  
  

  const mapStateToProps = state => ({
    isloader: state.expense.isloader,
    balance: state.expense.balance,
    totalSpending: state.expense.totalSpending,
    totalIncome: state.expense.totalIncome,
    expenseList: state.expense.expenseList
  })

  

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loadExpenseList,updateSpendIncomeBalance }, dispatch)
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(PublicLayout)