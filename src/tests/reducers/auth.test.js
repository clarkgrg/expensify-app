import authReducer from '../../reducers/auth';

test('should set login',() => {
    const uid = '1';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action);
    expect(state.uid).toEqual(uid);
});

test('should set logout',() => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'anything' }, action);
    expect(state).toEqual({});    
});    
    