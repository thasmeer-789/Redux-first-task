const redux = require('redux')
const createStore = redux.createStore
const BUY_CAKE = 'BUY_CAKE'

function buycake() {
    return{
        type : BUY_CAKE,
        info: 'First action'
    }
}

(previousState, action) => newState

const initialState ={
    numOfCake : 10
}

const reducer =(state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
        numOfCake:state.numOfCake -1
    }
    default: return state
}
}

const store = createStore(reducer)
console.log('initialState', store.getState());
const unsubscribe = store.subscribe(()=> console.log('Updated state' , store.getState()));
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
unsubscribe()
 