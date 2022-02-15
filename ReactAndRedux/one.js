//Getting Started with React Redux----------------------
class DisplayMessages extends React.Component {
    // Change code below this line
  constructor(props){
    super(props);
    this.state={
      input: "",
      messages: []
    }
  }
    // Change code above this line
    render() {
      return <div />
    }
  };

  //Manage State Locally First----------------------------
  class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    }
    // Add handleChange() and submitMessage() methods here

        // Change code below this line
        handleChange(e) {
          this.setState({
          input: e.target.value})
                 }
        
            submitMessage(){ //this.inputTitle.value = "";
                this.setState({
               input : ""
                })
              }
        // Change code above this line
      
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* Render an input, button, and ul below this line */ }
          <input onChange={this.handleChange.bind(this)} value={this.state.input}></input>
        <button></button><ul></ul><li></li>
          { /* Change code above this line */ }
        </div>
      );
    }
  };

  //Extract State Logic to Redux----------------------------
  //First, define an action type ADD and set it to a const ADD. 
  const ADD = 'ADD';
  //define an action creator addMessage() 
  //which creates the action to add a message. 
  //You'll need to pass a message to this action 
  //creator and include the message in the returned action.
  const addMessage = ()=>{ {
    return {
        type : "ADD",
        message: "message"
    }  
    }  }
 /**Then create a reducer called messageReducer()
  *  that handles the state for the messages.
  *  The initial state should equal an empty array. 
  * This reducer should add a message to the array 
  * of messages held in state, or return the current state.  */
 const messageReducer = (state = [],action)=>{
 switch(action.type){
 case ADD : return "message"
 default: return state;
 }
 };
 //Finally, create your Redux store and pass it the reducer.
 const store = Redux.createStore(messageReducer);