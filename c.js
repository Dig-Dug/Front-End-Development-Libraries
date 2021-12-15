const JSX = <h1>Hello JSX!</h1>;

const JSX = <div>
 <h1></h1>
 <p></p>
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
{/* Comment!!! elements out of div will not transpile*/}
</div>

//Render HTML Elements to the DOM^
/**ReactDOM.render(componentToRender, targetNode),
 *  where the first argument is the React element or component
 *  that you want to render, and the second argument 
 * is the DOM node that you want to render the component to. */

 const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // (componentToRender, where to render)
  //There is a div with id='challenge-node' available for you to use. 
  
  ReactDOM.render(JSX, document.getElementById('challenge-node'))


/********************Define an HTML Class in JSX */
const JSX = (
    <div className ="myDiv">
      <h1>Add a class to this div</h1>
    </div>
  );

/*********Learn About Self-Closing JSX Tags */
const JSX = (
    <div>
      <h2>Welcome to React!</h2> <br/ >
      <p>Be sure to close all tags!</p>
     <hr/>
    </div>
  );

/**Create a Stateless Functional Component___________ */
/**stateless functional component that 
 * assigns an HTML class in JSX */
 const MyComponent = function() {
    // Change code below this line
  return(
  <div>""</div>
  )
  // Change code above this line
  }

/**Create a React Component_________________________ */
/**
 class Kitten extends React.Component {  <- many useful React features, such as local state and lifecycle hooks
  constructor(props) {  <- It uses super() to call the constructor of the parent class, in this case React.Component
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
} */
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    } render() {
  return(
  <div>
  <h1>Hello React!</h1>
  </div>
  ) }
  };

/**Create a Component with Composition______________ */
/**return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
) */
const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* Change code below this line */ }
  
  <ChildComponent/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };

  /**Use React to Render Nested Components-------- */
  const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        { /* Change code below this line */ }
  <TypesOfFruit/>
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
  <Fruits/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };

  //Compose React Components-------------
  class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          { /* Change code below this line */ }
          <NonCitrus/>
          <Citrus/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
          <Fruits/>
          { /* Change code above this line */ }
          <Vegetables />
        </div>
      );
    }
  };

  //Render a Class Component to the DOM---------------------
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          {/* Change code below this line */}
  <Fruits/>
  <Vegetables/>
          {/* Change code above this line */}
        </div>
      );
    }
  };
 // Change code below this line
ReactDOM.render(<TypesOfFood/>, document.getElementById('challenge-node'))


//Write a React Component from Scratch----------------
// Change code below this line
class MyComponent extends React.Component {
    constructor(props){
      super(props);
    }
  render(){
    return(
      <div>
      <h1>My First React Component!</h1>
      </div>
    )
  }
  }
  
  ReactDOM.render(<MyComponent/>,document.getElementById('challenge-node'))


/**Pass Props to a Stateless Functional Component......... */

const CurrentDate = (props) => {
    return (
      <div>
        { /* Change code below this line */ }
        <p>The current date is:  {props.date} </p>
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* Change code below this line */ }
          <CurrentDate date={Date()} />
          { /* Change code above this line */ }
        </div>
      );
    }
  };
///////TODOOOOOOOOOOOOO
/***....Pass an Array as Props+++++++++++.. */
/**<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent> */

const List = (props) => {
  { /* Change code below this line */ }
 
 return <p>{props.tasks.join(', ')}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        
         <List tasks={["walk dog", "workout"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["walk dog", "workout","wolk dog"]}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};

//Use Default Props___________________

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Change code below this line
ShoppingCart.defaultProps = {  
  items : 0
}

//Override Default Props___________________

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items
    quantity = {10} 
    />
    { /* Change code above this line */ }
  }
};


//Use PropTypes to Define the Props You Expect___________________

//MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
//https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
//import PropTypes from 'prop-types';

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = {quantity: PropTypes.number.isRequired}
// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};

//Access Props Using this.props___________________
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="Sara"/>;
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong >{this.props.name}</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};

//Review Using Props with Stateless Functional Components___________________

/**A stateless functional component is any function you 
write which accepts props and returns JSX. A stateless 
component, on the other hand, is a class that extends
React.Component, but does not use internal state
Finally, a stateful component is a class component 
that does maintain its own internal state. */

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
};
// Change code below this line
const Camper = (props) => {
  return (
    <p>{props.name}</p>
  );
}
Camper.defaultProps = {
  name: 'CamperBot'
}
Camper.propTypes = { name: PropTypes.string.isRequired }





//Create a Stateful Component___________________
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
this.state = {name}  // <- worked there!!!
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

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
        <h1>{this.state.name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};

//Render State in the User Interface Another Way
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
const name = this.state.name;
console.log(name)
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

//Use State to Toggle an Element___________________
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line

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




