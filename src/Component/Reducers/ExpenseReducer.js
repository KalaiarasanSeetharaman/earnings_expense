const intialState={
    isloader:false,
    totalIncome:0,
    totalSpending:0,
    balance:0,
    expenseList:[]

}

const expense = (state = intialState, action) => {
    switch (action.type) {
      case 'LOAD_EXPENSE':
        return {
          ...state,
            totalIncome:action.totalIncome,
            totalSpending:action.toatlSpending,
            balance:action.balance,
            expenseList: action.lists,
        }
        case 'ADD_INCOME_SPENDING':
        return {
          ...state,
            expenseList:[
              ...state.expenseList,
              action.data
            ],
        }
        case 'UPDATE_INCOME_SPENDING':
        return {
          ...state,
          totalIncome:action.totalIncome,
          totalSpending:action.toatlSpending,
          balance:action.balance
        }
      default:
        return state
    }
  }
  
  export default expense