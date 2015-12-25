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

test('is focused', function(assert) {
  this.render(hbs`{{ember-trix autofocus=true}}`);
  assert.ok(this.$('trix-editor').attr('autofocus'), 'is focused');

  this.render(hbs`{{ember-trix}}`);
  assert.notOk(this.$('trix-editor').attr('autofocus'), 'is not focused');
});

test('placeholder is set up', function(assert) {
  this.render(hbs`{{ember-trix}}`);
  assert.notOk(this.$('trix-editor').attr('placeholder'), 'placeholder is not set');

  this.render(hbs`{{ember-trix placeholder="hello world"}}`);
  assert.equal(this.$('trix-editor').attr('placeholder'), 'hello world', 'placeholder is set up');
});

test('config is merged', function(assert) {
  this.set('config', {lang: {captionPlaceholder: 'Input something'}});
  this.render(hbs`{{ember-trix config=config}}`);
  assert.equal(window.Trix.config.lang.captionPlaceholder, 'Input something', 'caption has been customized');
});
