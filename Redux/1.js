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
  



  const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
  
    switch (action.type) {
      case LOGIN: 
        return {
          authenticated: true
        }
      case LOGOUT: 
        return {
          authenticated: false
        }
  
      default:
        return state;
  
    }
  
  };
  const LOGIN = 'LOGIN';
    const LOGOUT = 'LOGOUT';
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: LOGIN
    }
  };
  
  const logoutUser = () => {
    return {
      type: LOGOUT
    }
  };


  //Register a Store Listener------------------------
  //https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-register-a-store-listener/301446
  const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
const unsubscribe = store.subscribe(reducer)
unsubscribe() //callback function
const addOne = () => (count += 1); //increase


store.subscribe(addOne); //1 2 3 pass function to method
// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);


//Combine Multiple Reducers---------------------
/**const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
}); */
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};
 // Define the root reducer here
const rootReducer = Redux.combineReducers({
  count: counterReducer ,
  auth: authReducer 
});
/////////////////////
const store = Redux.createStore(rootReducer);

//Send Action Data to the Store----------------------------
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
      return state = addNoteText;
    
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return  note = {
    type: 'ADD_NOTE', 
    text: note
  }
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());