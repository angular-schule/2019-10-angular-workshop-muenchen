"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(id) {
        this.id = id;
    }
    Customer.prototype.fooBar = function () {
        var _this = this;
        setTimeout(function () {
            console.log('ID ist ' + _this.id);
        }, 2000);
        return '';
    };
    Customer.prototype.bar = function (foo) {
        if (typeof foo === 'string') {
            return '';
        }
        return foo; // ist number
    };
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map