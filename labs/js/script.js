// //document
// //1. Illustrating the DOM
// console.log(document);

// //2. Events
// //3. Event Handling

// let body = document.querySelector('body');
// console.log(body);

// //attach an eventlistener (event,action)
// function clickAction(){
//     console.log('someone clicked me');
// }
// //arrivalInCar, arrivalOnFoot
// body.addEventListener('click',clickAction);

// let mainParagraph = document.getElementById('form-paragraph');

// console.log(mainParagraph);
// mainParagraph.addEventListener('mouseover',function(e){
//     console.log('someone hovered over me');
// });

// document.getElementById('cname').
// addEventListener('keydown',function(){
//     console.log('typing ongoing');
// });


//once done with LA_3 - lab assignment three
//@TODO : Tutorial - LA_3 - JS work

//1. preventTyping

//2. == and == in js (show examples)
// ===(Strict Equality) - compares both value and type and no type conversion is  performed; if the types are different it returns false
// 5 === '5' //false number and string values
// == (Loose Equality) - after type conversion; JavaScript tries to convert operands to the same type before comparing
// 5 == '5' - String 5 is converted to number 5
//3. let quantity = parseInt(quantityInput.value); || 1;
//write the above line as an if statement
//let quantity = parseInt(quantityInput.value);
//if(!quantity){
// quantity = 1 ;}
//4. Implement clearForm()

//5. Getting missing data (prefs, ordertotal, payment method and town)

//6. formatting the food items nicely Rice(1), Beans(1)

//7. Show order details as a popup - inbuilt alert()instead of console.log()

//8. Use a js popup library to show the order details (bonus)

//constant - fooditems
const foodPrices = {
    'Chapo' : 20,
    'Ugali' : 15,
    'Rice'  : 25,
    'Beans' : 30,
    'Ndengu': 35,
    'Beef'  : 150
}

function showError(inputElementId, errorElementId,errorMessage){
    // add an error class to the phone input
    document.getElementById(inputElementId).classList.add('error');
    // textContent is a property that controls the text inside the element. - 
    // .textContent = message ; means, set the text inside this element to the value stored in the variable message
    document.getElementById(errorElementId).textContent=errorMessage;
    // display the nameError div
    document.getElementById(errorElementId).style.display = "block";
}

function hideError(inputElementId,errorElementId){
    // remove an error class to the phone input
    document.getElementById(inputElementId).classList.remove('error');
    // updating the error message to nothing
    document.getElementById(errorElementId).textContent="";
    // hide the nameError div
    document.getElementById(errorElementId).style.display = "none";
}

// illustrating the dom
console.log(document);

// illustrating events and event handling
function logMe(){
    console.log('Event Fired');
}
document.querySelector('body').addEventListener('click',logMe);
document.getElementById('food-items')
.addEventListener('click',logMe);

function dummy(){
    console.log('Some mouse hovered over me');
}

function toggleServings(foodItem){
    let foodItemCkbox = document.getElementById(foodItem); //Chapo
    let foodItemServingsDiv = 
    document.getElementById(foodItem + '-servings');//Chapo-servings
//Written as document.getElementById(foodItem-servings)
    // the checkbox is checked
    if(foodItemCkbox.checked){

        foodItemServingsDiv.style.display = 'block';
        document.getElementById(foodItem+'-qty').
        addEventListener('input',calculateTotal);// whenever the user types or changes something in this input field, run the calculateTotal function

   }else{
    // the checkbox is unchecked
    foodItemServingsDiv.style.display = 'none';
   //reset the quantity to one
   document.getElementById(foodItem+'-qty').value=1;


   }

   calculateTotal();
   
}

function calculateTotal(){
    let total = 0;
    let hasSelectedItems = false;

    //Object.keys() -  returns an array of all keys in an object
    let foodItemsArray = Object.keys(foodPrices);
    console.log(foodItemsArray);//["Chapo","Ugali","Rice","Beans","Ndengu","Beef"]

    //Loop
    foodItemsArray.forEach(item => {
        let checkbox = document.getElementById(item);
        //if it is there (not null) and it is checked
        if(checkbox && checkbox.checked){

            hasSelectedItems = true;
            //compute
            let quantityInput =  document.getElementById(item + '-qty');
            let quantity = parseInt(quantityInput.value);
            if(!quantity){
                quantity = 1;
            }
            //@TODO write the above line as an if statement

            total += foodPrices[item] * quantity;
            //total = total + (foodPrices[item] * quantity);
        }
    });

    //display the total to the user
    totalDiv = document.getElementById('orderTotal');

    if(hasSelectedItems){
        totalDiv.style.display = 'block';
        document.getElementById('totalAmount').textContent=total;
    }else{
        totalDiv.style.display = 'none';
        document.getElementById('totalAmount').textContent=total=0;
    }




    console.log(Object.keys(foodPrices));
    // Array ['Chapo','Ugali',...].forEach()
}

//an event listener/handler for the submit event
document.getElementById('contactForm')
.addEventListener('submit',function(e){
    //the handling of the event
    //illustrate prevent default behavior
    e.preventDefault();

    console.log('Submit event triggered');

    //get the data from the form
    // name, phone, email, fooditems,
})


//get a specific element namely the form
let formElement = document.
getElementById('contactForm');
console.log(formElement);
//attach an event listener to that element
formElement.addEventListener('submit',
    function(e){
        //preventdefault behavior
        e.preventDefault();
        // boolean variable to keep track of the form state(valid or not) 
        let isValid = true;
        //check if the event handler is working
        console.log('someone submitted me');

        //get the data
        let name = document.getElementById('cname').value.trim();
        let phone = document.getElementById('phone').value.trim();
        let email = document.getElementById('email').value.trim();
        let foodItems = document.querySelectorAll("input[name='food[]']:checked");
               
        //validating the name
        if(name.length < 5){
            //highlight the revelant input box
            document.getElementById('cname').
            classList.add('error');
            //display the error message
            document.getElementById('nameError')
            .textContent = "The name must be more than 5 characters";
            isValid=false;

            //display the element
            document.getElementById('nameError').
            style.display='block';

        }else{
             //removing highlight 
            document.getElementById('cname').
            classList.remove('error');
            //no message
            document.getElementById('nameError')
            .textContent = "";

            //hide the element
            document.getElementById('nameError').
            style.display='none';

        }

        if(phone.length != 10){
            //highlight the revelant input box
            document.getElementById('phone').
            classList.add('error');
            //display the error message
            document.getElementById('phoneError')
            .textContent = "The phone number must be exactly 10 characters e.g 0712345678";
            isValid=false;

            //display the element
            document.getElementById('phoneError').
            style.display='block';

        }else{
             //removing highlight 
            document.getElementById('phone').
            classList.remove('error');
            //no message
            document.getElementById('phoneError')
            .textContent = "";

            //hide the element
            document.getElementById('phoneError').
            style.display='none';

        }

        // ensure that atleast one food item is selected
        // == and ==== (difference)?
        if(foodItems.length === 0 ){
            showError('food-items','foodError',
                "Please choose at least one food item"
            );
            document.getElementById('food-items').style.border='solid';
            isValid=false;
          }else{
            hideError('Chapo','foodError');
             document.getElementById('food-items').style.border='none';
        }  
        
     if (isValid) {
    //  an empty array to hold ordered food items
    let orderedItems = [];

    // Looping through each checked food item
    foodItems.forEach(item => {
        let foodName = item.value; // get food name like 'Rice'
        let qty = document.getElementById(foodName + '-qty').value; // get quantity from input
        orderedItems.push(`${foodName} (${qty})`); // format like 'Rice (2)'
    });

    // Obtaining the payment method chosen by the user
    let selectedPayment = document.querySelector("input[name='mode']:checked");
    let paymentMethod = selectedPayment ? selectedPayment.getAttribute('data-text') : "Not selected";

    // Obtaining the selected town from dropdown
    let townSelect = document.getElementById('town');
    let town = townSelect.options[townSelect.selectedIndex].text || "Not selected";

    // Getting preferences text, trimmed to remove extra spaces
    let prefs = document.getElementById('prefs').value.trim();

    // Get the total amount text from the page
    let total = document.getElementById('totalAmount').textContent;

    // Create the message string for the alert popup
    let message = 
        " Order Details:\n" +
        "--------------------------\n" +
        " Name: " + name + "\n" +
        " Phone: " + phone + "\n" +
        "Email: " + email + "\n" +
        "Food Items: " + orderedItems.join(', ') + "\n" + // nicely formatted list .join() - combines all elements in an array and combines them into one single string, specify a comma that goes in between each element
        " Payment: " + paymentMethod + "\n" +
        " Town: " + town + "\n" +
        " Preferences: " + (prefs || "None") + "\n" +
        " Total: KSh " + total + "\n" +
        "--------------------------";

    // Show the popup with the order details
    // Show popup with SweetAlert2
Swal.fire({
    //objects that I want it to display
    title: 'Order Details',
    html: `<pre style="text-align:left;">${message}</pre>`,//the popup will display a formatted block
    icon: 'info',
    confirmButtonText: 'OK'
});
//submit the form now
this.submit();

}
});

     // Implementing the preventTyping function - Prevents typing into certain inputs
     // It prevents users from manually typing numbers or text into input fields 
function preventTyping(event) {
    event.preventDefault(); // Prevent any key from affecting the input
}

//implementing the clearForm function 
// This function clears the form when the "Clear Form" button is clicked
function clearForm() {
    // Get the whole form
    const form = document.getElementById('contactForm');
    
    // Reset all the form fields to their default values
    form.reset();

    // Hide all error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.style.display = 'none'; // hide error
        error.textContent = ''; // clear the error text
    });

    // Remove red border (error class) from input fields
    const errorInputs = document.querySelectorAll('.error');
    errorInputs.forEach(input => {
        input.classList.remove('error');
    });

    // Hide all the servings input areas and reset their values to 1
    const foodItems = ['Chapo', 'Ugali', 'Rice', 'Beans', 'Ndengu', 'Beef'];
    foodItems.forEach(item => {
        // Hide servings section
        const servingsDiv = document.getElementById(`${item}-servings`);
        if (servingsDiv) {
            servingsDiv.style.display = 'none';
        }

        // Set quantity back to 1
        const qtyInput = document.getElementById(`${item}-qty`);
        if (qtyInput) {
            qtyInput.value = 1;
        }
    });

    // Hide the order total section and reset the total amount to 0
    const totalDiv = document.getElementById('orderTotal');
    if (totalDiv) {
        totalDiv.style.display = 'none'; // hide the total area
        document.getElementById('totalAmount').textContent = '0'; //resets: set amount to zero
    }

    // Log to console to confirm the function worked
    console.log('Form is cleared');


}

