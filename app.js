const loginButton = document.getElementById('btn');
loginButton.addEventListener('click', function (event) {
    const allItems = document.getElementById('full-items');
    allItems.style.display = 'none';
    document.getElementById('transaction').style.display = 'block';
})

//New deposit part

document.getElementById("depositBtn").addEventListener('click', function () {

    const depositedAmountString = document.getElementById('depositedAmount').value;
    const depositedAmountNumber = parseFloat(depositedAmountString); //Got Input Deposit

    var currentDeposit = document.getElementById('currentDeposit').innerText; // '00'
    var currentDepositNumber = parseFloat(currentDeposit); // Got Current Deposit
    var total = currentDepositNumber + depositedAmountNumber; // Got total Deposit
    
    document.getElementById("currentDeposit").innerText = total;

    //Adding with total Balance
    
    var currentBalanceString = document.getElementById("currentBalance").innerText;
    var currentBalanceNumber = parseFloat(currentBalanceString); //Got Current Balance
    var totalBalance = currentBalanceNumber + depositedAmountNumber;

    document.getElementById('currentBalance').innerText = totalBalance;

    document.getElementById('depositedAmount').value = ""; // To vanish the written old amount
})

//New Withdraw Part

document.getElementById("withdrawBtn").addEventListener('click', function(){
    var withdrawAmountString = document.getElementById("withdrawnAmount").value;
    var withdrawAmountNumber = parseFloat(withdrawAmountString); //Got withdraw number

    var currentWithdraw = document.getElementById('currentWithdraw').innerText;
    var currentWithdrawNumber = parseFloat(currentWithdraw); //Got current withdraw

    var totalWithdraw =  withdrawAmountNumber + currentWithdrawNumber; // Total withdraw amount

    document.getElementById('currentWithdraw').innerText = totalWithdraw;

    //Substracting from total Balance

    var currentBalanceString = document.getElementById("currentBalance").innerText;
    var currentBalanceNumber = parseFloat(currentBalanceString); //Got Current Balance
    var totalBalance = currentBalanceNumber + -1 * withdrawAmountNumber;

    document.getElementById('currentBalance').innerText = totalBalance;
    document.getElementById('withdrawnAmount').value = ""; // To vanish the written old amount
})
