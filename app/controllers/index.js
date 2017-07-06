import Ember from 'ember';
import {
    validator,
    buildValidations
} from 'ember-cp-validations';

const Validations = buildValidations({
    username: [validator('presence', {
        presence: true,
        message: 'Username is required.'
    })],
    password: [validator('presence', {
        presence: true,
        message: 'Password is required.'
    })]
});

export default Ember.Controller.extend(Validations, {
    actions:{
        submit: function(){

        }
    }
});
