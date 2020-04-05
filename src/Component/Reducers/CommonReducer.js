const intialState={
    isloader:false,
    spendingModal:false,
    incomeModal:false

}

const common = (state = intialState, action) => {
    switch (action.type) {
      case 'SHOW_INCOME':
        return {
          ...state,
          incomeModal:true,
          spendingModal:false,
        }
      case 'HIDE_INCOME':
        return {
          ...state,
          incomeModal:false,
          spendingModal:false,
        }
       case 'ADD_INCOME_SPENDING':
        return {
            ...state,
            incomeModal:false,
            spendingModal:false,
          }
        case 'SHOW_SPENDING':
        return {
          ...state,
          spendingModal:true,
          incomeModal:false,
        }
      case 'HIDE_SPENDING':
        return {
          ...state,
          spendingModal:false,
          incomeModal:false,
        }
      default:
        return state
    }
  }
  
  export default common