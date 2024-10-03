'use strict';

// Register `phoneList` component, along with its associated controller and template

class PhoneListController {
  phones: any[];
  orderProp: string;

  $inject = ['Phone'];
  constructor(Phone: any) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }
}

angular.
  module('phoneList').
  component('phoneList', { //this name is what angularJS uses to match to the <phone-list> element
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone', PhoneListController]
  });
