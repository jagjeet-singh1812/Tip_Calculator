const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

let numberOfPeople=Number(numberOfPeopleDiv.innerText);

//  'billTotalInput' = User input for bill total
//  'tipInput' = User input for tip
//  'numberOfPeople' = Current number of people you're splitting the bill between
//  'perPersonTotal' = Total dollar value owed per person

const calculateBill = () => {
  // get bill from user input & convert it into a number from string
  const bill=Number(billInput.value);

  // get the tip from user & convert it into a percentage (divide by 100)
  const tip_percentage= Number(tipInput.value)/100;

  // get the total tip amount
  const tip= tip_percentage*bill;

  // calculate the total (tip amount + bill)
  const totalbill= bill+ tip;

  // calculate the per person total (total divided by number of people)
 const perpersontotal=totalbill/numberOfPeople;

  // update the perPersonTotal on DOM & show it to user
    perPersonTotalDiv.innerText=`$${perpersontotal.toFixed(2).toLocaleString('en-US')}`;
    // for commas in amount
}

// ** to increse the number of people  **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople+=1;
  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText=numberOfPeople;
  // calculate the bill based on the new number of people
  calculateBill();
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (as you know you can't decrease the number of people to 0 or negative!)
if(numberOfPeople<=1){
    return
}
  // decrement the amount of people
numberOfPeople-=1
  // update the DOM with the new number of people
numberOfPeopleDiv.innerText=numberOfPeople;
  // calculate the bill based on the new number of people
calculateBill();
}