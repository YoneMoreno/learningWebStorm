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
        alert("not implemented")
    }



    $(document).ready(function () {
       $("#orderForm").on("submit", function () {
          submitOrder({validate: false, size: "large", crust: "thin", topping: ["pepperoni", "sausage"]});
           return false;
       });
    });

    var dog = new Animal();
    dog.name = "Lucky";
    dog.legCount = 3;
    dog.feed("Fish");

    var toInsert ="<div>\n    <ul>\n        <li>Lorem ipsum dolor.</li>\n        <li>Blanditiis, explicabo, tempora.</li>\n        <li>Commodi, distinctio, labore?</li>\n        <li>Hic, obcaecati, ratione.</li>\n        <li>Id, incidunt, temporibus.</li>\n    </ul>\n</div>"

    // language=JavaScript
    var toExecute = "var x = 0;\nx++;\nx = 5;";

    // language=RegExp
    var ex = "[0-9A-Za-z ]*";
})();