import Ember from 'ember';
import connect from 'ember-redux-controller-connect';


const { Controller, Logger } = Ember;


/**
 * `stateToComputed()` works the same way as it does for Components, but
 * instead of `attrs` it receives `params` which includes the URL params and
 * any query params that might have been specified in the Controller.
 */
const stateToComputed = (state, params) => {

  Logger.debug(params);

  return {
    item: getItemById(state, params.item_id),
    computedQueryParam: params.testQuery
  }
};


/**
 * Set up the controller in the usual way.  Here, we are specifying to Ember
 * that we want to capture the "testQuery" query param, if it is present.
 */
const ItemController = Controller.extend({
  queryParams: ['testQuery']
});


export default connect(stateToComputed)(ItemController);
