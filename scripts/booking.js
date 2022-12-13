/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let numberOfDays = 0;
let dailyRate = 35;
let totalCost = 0;


window.onload = () =>{
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
    const monday = document.getElementById('monday');
    const tuesday = document.getElementById('tuesday');
    const wednesday = document.getElementById('wednesday');
    const thursday = document.getElementById('thursday');
    const friday = document.getElementById('friday');

    monday.addEventListener('click', function(){
        monday.style.backgroundColor = '#E5AF42';
        numberOfDays++;
        recalculate();

    },{once:true});
    tuesday.addEventListener('click', function(){
        tuesday.style.backgroundColor = '#E5AF42';
        numberOfDays++;
        recalculate();
    },{once:true});
    wednesday.addEventListener('click', function(){
        wednesday.style.backgroundColor = '#E5AF42';
        numberOfDays++;
        recalculate();
    },{once:true});
    thursday.addEventListener('click', function(){
        thursday.style.backgroundColor = '#E5AF42';
        numberOfDays++;
        recalculate();
    },{once:true});
    friday.addEventListener('click', function(){
        friday.style.backgroundColor = '#E5AF42';
        numberOfDays++;
        recalculate();
    },{once:true});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
    const clearDays = document.getElementById('clear-button');
    clearDays.addEventListener('click', function(){
        location.reload();
    });

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
    const half = document.getElementById('half');
    half.addEventListener('click', function(){
        dailyRate = 20;
        half.style.backgroundColor = '#E5AF42';
        full.style.backgroundColor = 'white';
    });

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
    const full = document.getElementById('full');
    full.addEventListener('click', function(){
        dailyRate = 35;
        full.style.backgroundColor = '#E5AF42';
        half.style.backgroundColor = 'white';
    });

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
    const calculatedCost = document.getElementById('calculated-cost');

    function recalculate(){
        totalCost = dailyRate * numberOfDays;
        calculatedCost.innerHTML = totalCost;
    }
};