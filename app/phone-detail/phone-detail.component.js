'use strict';
import * as angular from "angular";
// Register `phoneDetail` component, along with its associated controller and template
class PhoneDetailController {
    static { this.$inject = ['$routeParams', 'Phone']; }
    constructor($routeParams, Phone) {
        this.mainImageUrl = '';
        const phoneId = $routeParams['phoneId'];
        this.phone = Phone.get({ phoneId }, (phone) => {
            this.setImage(phone.images[0]);
        });
    }
    setImage(imageUrl) {
        this.mainImageUrl = imageUrl;
    }
}
angular.
    module('phoneDetail').
    component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone', PhoneDetailController]
});
//# sourceMappingURL=phone-detail.component.js.map