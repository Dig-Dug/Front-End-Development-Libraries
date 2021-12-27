//Create a Redux Store-------------------------

/**const yourVariableName = yourMethodName();


Hint: Keep in mind that the `createStore()` method is available from
 the Redux object. For example: `Redux.createStore()`

### Step 3. Pass in an argument to your method.

```javascript
const yourVariableName = yourMethodName(yourArgumentName); */

const reducer = (state = 5) => {
    return state;
  }
  
  // Redux methods are available from a Redux object
  // For example: Redux.createStore()
  // Define the store here:
  
const store = Redux.createStore(reducer);



//Get State from the Redux Store---------------------

const store = Redux.createStore(
    (state = 5) => state
  );
  
  // Change code below this line
  const currentState = store.getState()

  //Define a Redux Action----------------------------------
  const action = {
    type: 'LOGIN',
    
  }

  //Define an Action Creator------------------------
  const action = {
    type: 'LOGIN'
  }
  // Define an action creator here:
  
  function actionCreator(){
    return action;
  }

  //Dispatch an Action Event------------------
  const store = Redux.createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  // Dispatch the action here: //both are equivalent, but the first is the one
  store.dispatch(loginAction())
  store.dispatch({type: 'LOGIN'})


  //Handle an Action in the Store---------------------
  const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    // Change code below this line
    console.log(state,defaultState)
 switch (action.type) {
    case 'LOGIN':
      return   {login:true} 
    default:
      return state
  } 
    // Change code above this line
  };
  
  const store = Redux.createStore(reducer);
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };


//Use a Switch Statement to Handle Multiple Actions--------------
const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    // Change code below this line
    switch (action.type) {
        case 'LOGIN' :
          return {authenticated:true}
          case 'LOGOUT':
          return {authenticated:false}
        default:
          return state
      }
    // Change code above this line
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };

  //Use const for Action Types-------------------