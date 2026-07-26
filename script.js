let billAmountInput = document.getElementById("billAmount");
let percentageTipInput = document.getElementById("percentageTip");
let tipAmountInput = document.getElementById("tipAmount");
let totalAmountInput = document.getElementById("totalAmount");
let errorMessage = document.getElementById("errorMessage");

// Clear the default hardcoded error text on page load so it starts empty
errorMessage.textContent = "";

function calculatedAmount() {
    let billValue = billAmountInput.value.trim();
    let tipPercentValue = percentageTipInput.value.trim();

    // Test Case 1, 2, & 3: Check if either of the fields are empty
    if (billValue === "" || tipPercentValue === "") {
        errorMessage.textContent = "Please Enter a Valid Input.";
    } else {
        // If both inputs are filled, the error message MUST be empty
        errorMessage.textContent = "";

        // Convert values to numbers for calculations
        let bill = parseFloat(billValue);
        let tipPercent = parseFloat(tipPercentValue);

        // Calculate Tip and Total
        let calculatedTip = (tipPercent / 100) * bill;
        let calculatedTotal = bill + calculatedTip;

        // Update the UI with results (rounded to 2 decimal places)
        tipAmountInput.value = calculatedTip.toFixed(2);
        totalAmountInput.value = calculatedTotal.toFixed(2);
    }
}