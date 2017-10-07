// index.js
(function () {
    "use strict";

    /**
     * Submits an order
     * @param parameters
     */
    function submitOrder(parameters) {
        var validate = parameters.validate;
        var size = parameters.size;
        var crust = parameters.crust;
        var topping = parameters.topping;
        alert("not implemented");
    }

    $(document).ready(function () {
       $("#orderForm").on("submit", function () {
          submitOrder({validate: false, size: "large", crust: "thin", topping: ["pepperoni", "sausage"]});
           return false;
       });
    });
})();