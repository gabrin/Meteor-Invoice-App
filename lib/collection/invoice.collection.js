Invoices = new Mongo.Collection("invoices");

Invoices.attachSchema(new SimpleSchema({
  invoiceNumber: {
    type: String,
    label: "Invoice No.",
    max: 200
  },

  customer: {
    type: Object,
    label: "Customer"
  },
  "customer.name": {
    type: String,
    label: "Customer Name"
  },
  "customer.company": {
    type: String,
    label: "Customer Company"
  },
  "customer.taxNumber": {
    type: String,
    label: "Customer Tax Number"
  },
  "customer.address": {
    type: String,
    label: "Customer Address"
  },

  orderedItems: {
    type: Array,
    label: "Ordered Items"
  },
  "orderedItems.$": {
    type: Object
  },
  "orderedItems.$.name": {
    type: String,
    label: "Product Name",
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 1
      }
    }
  },
  "orderedItems.$.unitPrice": {
    type: String,
    label: "Unit Price",
    autoform: {
      afFieldInput: {
        class: 'unit-price'
      }
    }
  },
  "orderedItems.$.quantity": {
    type: String,
    label: "Quantity",
    autoform: {
      afFieldInput: {
        class: 'quantity'
      }
    }
  },
  "orderedItems.$.totalPrice": {
    type: String,
    label: "Total Price",
    autoform: {
      afFieldInput: {
        class: 'total-price'
      }
    }
  },

  total: {
    type: Object,
    label: "Total"
  },
  "total.beforeGST": {
    type: String,
    label: "Total before GST"
  },
  "total.GST": {
    type: String,
    label: "GST"
  },
  "total.afterGST": {
    type: String,
    label: "Total after GST"
  },
}));

Invoices.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

if (Meteor.isServer) {
  Meteor.publish("invoices", function () {
    return Invoices.find({});
  });
}
