//use the lifecycle Method "componentWillMount"
/** These are called lifecycle methods, or lifecycle hooks,
 *  and allow you to catch components at certain points in time.
 *  This can be before they are rendered, before they update, 
 * before they receive props, before they unmount, and so on.
 *  Here is a list of some of the main lifecycle methods: 
 * componentWillMount() 
 * componentDidMount() 
 * shouldComponentUpdate() 
 * componentDidUpdate() 
 * componentWillUnmount() */
 class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
      // The componentWillMount() method is called before
      //the render() method when a component is being mounted to the DOM.
  console.log("lol")
      // Change code above this line
    }
    render() {
      return <div />
    }
  };

  //Use the Lifecycle Method componentDidMount-----------------------
  /**The best practice with React is to place API calls
   *  or any calls to your server in the lifecycle method
   *  componentDidMount() */

   class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
//just an example after 2.5 seconds shows "1273"
      setTimeout(() => {
        this.setState({
          activeUsers: 1273
        });
      }, 2500);
    }
    render() {
      return (
        <div>
          {/* Change code below this line */}
          <h1>Active Users: {this.state.activeUsers}</h1>
          {/* Change code above this line */}
        </div>
      );
    }
  }
  ///////////ADD EVENT LISTENERS////////////////
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
 // Change code below this line
 componentDidMount() {
  document.addEventListener('keydown', this.handleKeyPress, true);
    }
    componentWillUnmount() {
  document.removeEventListener('keydown', this.handleKeyPress, true);
    }
    // Change code above this line
    handleEnter() {
      this.setState((state) => ({
        message: state.message + 'You pressed the enter key! '
      }));
    }
    handleKeyPress(event) {
      if (event.keyCode === 13) {
        this.handleEnter();
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
        </div>
      );
    }
  };


  //Optimize Re-Renders with shouldComponentUpdate---------
  class OnlyEvens extends React.Component {
    constructor(props) {
      super(props);
    }
    //shouldComponentUpdate()----props comparison
    shouldComponentUpdate(nextProps, nextState) {

      console.log('Should I update?');
      // Change code below this line
  if( nextProps.value % 2 == 0){ console.log("ee")
  return  true;
   } 
    
     // Change code above this line
    }
    componentDidUpdate() {
      console.log('Component re-rendered.');
    }
    render() {
      return <h1>{this.props.value}</h1>;
    }
  }
  
  class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0
      };
      this.addValue = this.addValue.bind(this);
    }
    addValue() {
      this.setState(state => ({
        value: state.value + 1
      }));
    }
    render() {
      return (
        <div>
          <button onClick={this.addValue}>Add</button>
          <OnlyEvens value={this.state.value} />
        </div>
      );
    }
  }


  ////Introducing Inline Styles-----------------
 //check camelCase
//<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: "72px"}}>Big Red</div>
    );
  }
};

//Add Inline Styles in React-----------------
const styles ={color:"purple",
 fontSize: 40,
 border:
 "2px solid purple" }; 

// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={{color: styles.color, fontSize: styles.fontSize,border: styles.border}}>Style Me!</div>
    );
    // Change code above this line
  }
};

//Use Advanced JavaScript in React Render Method-----------------
//You can also write JavaScript directly in your render methods,
// before the return statement, without inserting it inside of curly braces

const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    let i = 0;
    for(i in possibleAnswers){
    const answer = Math.random(possibleAnswers[i])// Change this line
    console.log(possibleAnswers[i]);
    this.state.randomIndex = possibleAnswers[i]; //<- not working
  }; 
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {/* Change code below this line */}
          {this.state.randomIndex}
          {/* Change code above this line */}
        </p>
      </div>
    );
  }
}

///////Render with an If-Else Condition-----------------

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line //please outside the return
if(this.state.display == true){
<div>    <button onClick={this.toggleDisplay}>Toggle Display</button>
     <h1>Displayed!</h1>
       </div>
} else{
console.log("3");
 <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
        
       </div>
}
    return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
     
       </div> 
    );
  }
};

/**if (isLoggedIn) {
  button = <LogoutButton onClick={this.handleLogoutClick} />;
} else {
  button = <LoginButton onClick={this.handleLoginClick} />;
}

return (
  <div>
    <Greeting isLoggedIn={isLoggedIn} />
    {button}
  </div>
); */


//Use && for a More Concise Conditional------
/* class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    {this.state.display  && <div> <button onClick={this.toggleDisplay}>Toggle Display</button><div>}
    { this.state.display && <div> <button onClick={this.toggleDisplay}>Toggle Display</button><h1>Displayed!</h1></div>}      
   
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
       
       </div>
    );
  }
}; */



//Pass a Callback as Props-----------------

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Change code below this line */ }
        <GetInput/> 
        <RenderInput input={this.state.inputValue}/>
        { /* Change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};