
export function loadExpenseList(lists,toatlSpending,totalIncome,balance){
    return(
        {
            type:'LOAD_EXPENSE',
            lists,
            toatlSpending,
            totalIncome,
            balance
          }
    )
}
export function incomeModelShow(){
    return(
        {
            type:'SHOW_INCOME',
          }
    )
}
export function incomeModelHide(){
    return(
        {
            type:'HIDE_INCOME'
          }
    )
}

export function spendModelShow(){
    return(
        {
            type:'SHOW_SPENDING',
          }
    )
}
export function spendModelHide(){
    return(
        {
            type:'HIDE_SPENDING'
          }
    )
}

export function addIncomeSpending(data){
    return(
        {
            type:'ADD_INCOME_SPENDING',
            data
          }
    )
}

export function updateSpendIncomeBalance(toatlSpending,totalIncome,balance){
    return(
        {
            type:'UPDATE_INCOME_SPENDING',
            toatlSpending,
            totalIncome,
            balance
          }
    )
}