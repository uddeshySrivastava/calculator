                                TODO LIST 
1. Header, footer  > logo, home, about 
2. Main >  ( 1st component )
>  what do you want to do ?
> options :- add, sub, mul, div
3. after select option ( 2nd component )
> enter 1st number  you want to (add)  : Prompt
> enter 2nd number  you want to (add)  : Prompt
> button (add) on click 
4. answer (after add 2 digit :answer )
> your answer is (answer)


UI 

1. Componet will be in center of the page.
2. Color will be B\W.
3. It should be mobile and desktop responsive.

FUNC 

1. useState() // to manage all the state.
2. window.prompt() // to get values from user.
3. onClick() in <button> // to call or run the function
4. object ArithmeticFunctions > add, sub, div, mul. // with the help of keys and value.
5. in function > parseInt()  // to convert sstring into number.
6. if ...else & isNan() // to check if the value is not NaN. 
7. Alert to show the confirmation.  
8. Show data in html by dynamic variables // we can use useState variables.       


/////////////////////////////////////////////////////////////////////

HTML Structure:

Set up the basic structure of the HTML file with a header, footer, and main content section.
Add a logo, home, and about links in the header.
UI Design:

Use black and white colors for the UI.
Ensure the UI is mobile and desktop responsive.
Component Setup:

Create a centered component within the main section.
Use CSS to center the component on the page.
State Management:

Use useState() to manage all the necessary state variables.
User Input:

Use window.prompt() to get values from the user.
Create a dropdown or radio buttons to select the arithmetic operation.
Store the selected operation in state.
Calculation:

Implement arithmetic functions for add, subtract, multiply, and divide.
Store these functions as keys and values in an object called ArithmeticFunctions.
Button Click:

Add a button with an onClick() event handler.
When the button is clicked, call the appropriate arithmetic function based on the selected operation.
Validation and Calculation:

Use parseInt() to convert user input strings into numbers.
Check if the entered values are valid numbers using if...else statements and isNaN().
If any value is not valid, display an alert or error message to the user.
Perform the arithmetic operation and store the result in a variable.
Display the Result:

Use dynamic variables (e.g., {result}) to display the calculated result in the HTML code.
Update the result variable in state using useState().
CSS Styling:

Apply CSS styles to make the UI responsive on both mobile and desktop devices.
Use media queries and frameworks like Bootstrap for responsiveness.
Test and Refactor:

Test the functionality of the application in a browser.
Ensure the arithmetic operations work correctly and the UI is responsive.
Refactor the code if necessary and make any additional improvements or additions.