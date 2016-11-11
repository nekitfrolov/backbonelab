
var Person = Backbone.Model.extend({
    defaults: {
        name: 'Dima',
        age: 23,
        job: 'web-developer',
        words: "Hello Worlds"
    }
  });

   var PersonView = Backbone.View.extend({
       initialize: function () {
       },
       tagName: 'div',
       className: 'TOP',
       id: 'STAN',

       render: function () {
           this.$el.html(this.model.get('words'));
        }
      });
   var person = new Person;
   var personView = new PersonView({model: person});
