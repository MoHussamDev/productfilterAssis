import _ from 'lodash';
export const reducers = {
    binder : function (state, action) {
        switch (action.type) {
            case 'HANDLECHANGES':
                return {...state,...action.payload}
            case 'NESTEDCHANGE':
               return { ...state ,..._.set(state,action.payload.target, action.payload.value)};
               case 'BIRTHDATEREDUCER':
                return { ...state ,..._.set(state,action.payload.target, action.payload.value)};
            default:
                return state
          }
    }

}