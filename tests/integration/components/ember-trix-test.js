import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-trix', 'Integration | Component | ember trix', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{ember-trix}}`);
  assert.equal(this.$('trix-editor').length, 1, 'trix-editor exists');
});

test('apply class names', function(assert) {
  this.render(hbs`{{ember-trix class="c1 c2"}}`);
  assert.ok(this.$('trix-editor').hasClass('c1'), 'has class c1');
  assert.ok(this.$('trix-editor').hasClass('c2'), 'has class c2');
});
