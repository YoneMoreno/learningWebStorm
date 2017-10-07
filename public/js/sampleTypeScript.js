var FooBar = (function () {
    function FooBar() {
        this.name = "Yone";
    }
    FooBar.prototype.showMe = function () {
        console.log(this.name);
    };
    return FooBar;
}());
var foo = new FooBar();
foo.showMe();
