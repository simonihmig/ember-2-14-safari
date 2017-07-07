import Ember from 'ember';
import {
    validator,
    buildValidations
} from 'ember-cp-validations';

const Validations = buildValidations({
    username: [validator('presence', {
        presence: true,
        message: 'Username is required.'
    })]
});

export default Ember.Controller.extend(Validations, {
    username: '',
    password: '',
    actions:{
        submit: function(){

        }
    }
});
