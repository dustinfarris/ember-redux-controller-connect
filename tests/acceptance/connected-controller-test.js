import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | connected controller');

test('computed properties', function(assert) {
  visit('/item/123?testQuery=ABCDEFG');

  andThen(function() {
    assert.equal(currentURL(), '/item/123?testQuery=ABCDEFG', 'url should contain query');
    assert.equal(find('.item-name').text(), 'Item number one two three', 'redux state change should be rendered');
    assert.equal(find('.computed-query-param').text(), 'ABCDEFG', 'computed query params should be rendered');
  });
});
