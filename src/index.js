//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
let React = require("react");
let ReactDOM = require("react-dom");

var greetingStyles = {
  color: "red"
};

const currentHour = new Date().getHours();
let greeting;

if (currentHour >= 0 && currentHour < 12) {
  greeting = "Good morning";
} else if (currentHour >= 12 && currentHour < 18) {
  greeting = "Good Afternoon";
  greetingStyles.color = "green";
} else {
  greeting = "Good evening";
  greetingStyles.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={greetingStyles}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
