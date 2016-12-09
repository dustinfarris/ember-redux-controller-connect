import Ember from 'ember';
import componentConnect from 'ember-redux/components/connect';

export default (stateToComputed=() => ({}), dispatchToActions=() => ({})) => {

  return Controller => {

    const ConnectedController = componentConnect(stateToComputed, dispatchToActions)(Controller);

    return ConnectedController.extend({

      getAttrs() {
        debugger;
      }
    })
  }
}
