var SELECTED_LIST_ITEM_ID = "selectedListItemID",
    FORM_ACTION = "currentFormAction",
    COLLECTION_NAME = "nameOfCurrentCollectionForCRUD";

// Events
Template.appLayout.events({
  'click #TheList li': function(event, template) {
      Session.set(SELECTED_LIST_ITEM_ID, this._id);
  },
  'click a.insert': function(event, template) {
      Session.set(FORM_ACTION, 'INSERT');
  },
  'click a.update': function(event, template) {
      Session.set(FORM_ACTION, 'UPDATE');
  }
});

// Helpers
Template.registerHelper('isInserting', function() {
  return (Session.get(FORM_ACTION) == 'INSERT');
});
Template.registerHelper('isUpdating', function() {
  return (Session.get(FORM_ACTION) == 'UPDATE');
});
Template.registerHelper('whatTemplate', function() {
  var controller = Iron.controller();
  var collection_name =  controller.state.get('COLLECTION_NAME');

  if (Session.get(FORM_ACTION) == 'INSERT') {
    return collection_name + ".insert";
  } else if (Session.get(FORM_ACTION) == 'UPDATE') {
    return collection_name + ".update";
  } else {
    return collection_name + ".view";
  }
})



/*if (Meteor.isClient) {
  Template.appLayout.helpers({
    activeIfTemplateIs: function (template) {
      var currentRoute = Router.current();
      return currentRoute &&
        template === currentRoute.lookupTemplate() ? 'active' : '';
    }
  });
}

Template.appLayout.rendered = function() {
  this.find('#slide-container')._uihooks = {
    insertElement: function(node, next) {
      $(node).addClass('sliding-in sliding ' + navDirection);
      $(node).insertBefore(next);

      // start the animation:
      Meteor.setTimeout(function() {
        $(node).removeClass(navDirection);
      }, 10);

      Meteor.setTimeout(function() {
        $(node).removeClass('sliding-in sliding');
      }, 400);
    },

    removeElement: function(node) {
      //var direction = navDirection === 'left' ? 'right' : 'left';
      var direction = 'left';
      $(node).addClass('sliding ' + direction);
      Meteor.setTimeout(function() {
        $(node).remove();
      }, 400);
    }
  };
}

Template.appLayout.events({
  'click [data-toggle-modal]': function (event) {
    var targetModalId = $(event.currentTarget).data('toggle-modal');
    var $targetModal = $('#' + targetModalId);
    $targetModal.toggleClass("active");
  },

  'click [data-nav-direction]': function(event) {
    navDirection = $(event.currentTarget).data('nav-direction');
  }
});*/
