// Here we used getElementId method that will return an object reference to the button
let button = document.getElementById('button');
// Here we Attached a click event to our button. When the user clicks on the button it will generate some output
button.addEventListener('click', function(){
    // Here we used getElementId method that will return an object reference to the identified element
    let billAmount = document.getElementById('bill').value;
    let tipPercentage = document.getElementById('tip-percent').value;
    let totalpeople = document.getElementById('people').value;
    // Here we have given some condition to handle exceptions
    if (billAmount > 0 && tipPercentage > 0)
    {
        // Here is another condition to handle exception
        if(tipPercentage <= 100)
        {
            // This is the calculation that is being done in our project and once button is clicked this will get executed and display the result
            let tip = document.getElementById('tipperperson').value = (parseFloat(billAmount) * parseFloat(tipPercentage)) / 100 / parseFloat(totalpeople);
            document.getElementById('totalperperson').value = (parseFloat(billAmount) + parseFloat(tip) * parseFloat(totalpeople)) / parseFloat(totalpeople) ;
        }
        else
        {
            // alert will display a pop-up message written below
            alert("Tip percent should not exceed above 100%")
        }
        // Here is one more condition to handle any remaining exception
        if (totalpeople <= 0)
        {
            // alert will display a pop-up message written below
            alert("Number of people should be 1 or more");}    
    }
    else
    {
        // alert will display a pop-up message written below
        alert("Bill and Tip% should be more than 0")
    }
})
// Code execution completed
