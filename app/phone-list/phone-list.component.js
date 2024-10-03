'use strict';
// Register `phoneList` component, along with its associated controller and template
class PhoneListController {
    constructor(Phone) {
        this.$inject = ['Phone'];
        this.phones = Phone.query();
        this.orderProp = 'age';
    }
}
angular.
    module('phoneList').
    component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone', PhoneListController]
});
//# sourceMappingURL=phone-list.component.js.map