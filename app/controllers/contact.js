// app/controllers/contact.js
import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  message: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValid: Ember.computed.gte('message.length', 5),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveMessage() {
      const email = this.get('emailAddress');
      const message = this.get('message');

      const newContact = this.store.createRecord('contact', {
        email: email,
        message: message
      });

      newContact.save().then((response) => {
        this.set('responseMessage', `Thank you! Your message has been sent! ${response.get('id')}`);
        this.set('emailAddress', '');
      });

    }
  }

});
