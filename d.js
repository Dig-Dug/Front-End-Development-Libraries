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