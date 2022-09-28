// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
// import {data} from './data'
// "use strict";
const data = [
  {
      id:1,
      year: 1914,
      events: "- Born in Cresco, Iowa"
  },
  {
      id:2,
      year: 1933,
      events: `- Leaves his family's farm to attend the University of Minnesota, thanks to a Depression era program known as the "National Youth Administration"`
  },
  {
      id:3,
      year: 1935,
      events: ` - Has to stop school and save up more money.
      Works in the Civilian Conservation Corps, helping starving
      Americans. "I saw how food changed them", he said. "All of this left
      scars on me."`
  },
  {
      id:4,
      year: 1937,
      events: "- Finishes university and takes a job in the US Forestry Service"
  },
  {
      id:5,
      year: 1938,
      events: "- Marries wife of 69 years Margret Gibson. Gets laid off due to budget cuts. Inspired by Elvin Charles Stakman, he returns to school study under Stakman, who teaches him about breeding pest-resistent plants."
  },
  {
      id:6,
      year: 1941,
      events: "- Tries to enroll in the military after the Pearl Harbor attack, but is rejected. Instead, the military asked his lab to work on waterproof glue, DDT to control malaria, disinfectants, and other applied science."
  },
]
let ul = document.getElementById('list-events') 

{/* <li><strong>1914</strong> - Born in Cresco, Iowa</li> */}
let listItems = data.map((el)=> `<li key={${el.id}}><strong>${el.year}</strong> ${el.events}</li>`)
ul.innerHTML = listItems.join(' ')
