//Render State in the User Interface

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      return (
        <div>
          { /* Change code below this line */ }
   <h1>{this.name }</h1>
          { /* Change code above this line */ }
        </div>
      );
    }
  };


  /*Render State in the User Interface Another Way_______
  /**There is another way to access state in a component. 
   *In the render() method, before the return statement,
   * you can write JavaScript directly. */

   class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      // Change code below this line
  const name = name
      // Change code above this line
      return (
        <div>
          { /* Change code below this line */ }
  <h1>{name}</h1>
          { /* Change code above this line */ }
        </div>
      );
    }
  };

/**Set State with this.setState_______________________ */
//method for updating component state called setState
/**this.setState({
  username: 'Lewis'
}); */



class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      // Change code below this line
  this.setState({
    name: "React Rocks!"
  })
      // Change code above this line
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };


  //////Bind 'this' to a Class Method______-------_____
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "Hello"
      };
      // Change code below this line
  this.handleClick = this.handleClick.bind(this);
      // Change code above this line
    }
    handleClick() {
      this.setState({
        text: "You clicked!"
      });
    }
    render() {
      return (
        <div>
          { /* Change code below this line */ }
          <button onClick={this.handleClick}>Click Me</button>
          { /* Change code above this line */ }
          <h1>{this.state.text}</h1>
        </div>
      );
    }
  };

  //Use State to Toggle an Element---------------------
  /**Using a function with setState guarantees you are
   *  working with the most current values of state 
   * and props.  
   * 
    this.setState((state, props) => ({
  counter: state.counter + props.increment
}));  OR (only for state)
  this.setState(state => ({
  counter: state.counter + 1
}));
   * */
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      // Change code below this line
  this.setState(state => ({
    visibility : state
  }))
      // Change code above this line
    }
    // Change code below this line
  toggleVisibility(){
    this.setState({
      visibility: true
    });
  }
    // Change code above this line
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  }

 
  //Write a Simple Counter-------------------------
  class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      // Change code below this line
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
      // Change code above this line
    }
    // Change code below this line
    increment() {
        this.setState({
          count :  + 1
        });
      } 
      decrement() {
        this.setState({
          count : - 1
        });
      }
      reset() {
        this.setState({
          count : 0
        });
      }
    // Change code above this line
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };

  //Create a Controlled Input----------------------------

  
  class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      // Change code below this line
  this.handleChange = this.handleChange.bind(this);
      // Change code above this line
    }
    // Change code below this line
   handleChange(event) {
     this.setState({ input : event.target.value})  
      }
    // Change code above this line
    render() {
      return (
        <div>
          { /* Change code below this line */}
   <input type="text" value={this.state.input} onChange={this.handleChange}/>
          { /* Change code above this line */}
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };

  /**Create a Controlled Form------------------------- */
  class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({input: event.target.value});
    }
    handleSubmit(event) {
      // Change code below this line
  this.setState({ input : event.target.submit})  
        
   event.preventDefault();
  
      // Change code above this line
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            {/* Change code below this line */}
   <input type="text" value={this.state.input} onChange={this.handleChange}/>
            {/* Change code above this line */}
            <button type='submit'>Submit!</button>
          </form>
          {/* Change code below this line */}
  <h1 submit={this.state.input}>{this.state.input}</h1>
          {/* Change code above this line */}
        </div>
      );
    }
  }

  /** Pass State as Props to Child Components------------*/

  class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'CamperBot'
      }
    }
    render() {
      return (
         <div>
           {/* Change code below this line */}
           <Navbar name ={this.state.name}/>
           {/* Change code above this line */}
         </div>
      );
    }
  };
  
  class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
      <div>
        {/* Change code below this line */}
        <h1 >Hello, my name is:  {this.props.name}</h1>
        {/* Change code above this line */}
      </div>
      );
    }
  };

  //pass a callback as props:::::::::::::::::::::::::
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
<GetInput inputValue = {this.props.input}/>
<RenderInput inputValue = {this.props.input}/>
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