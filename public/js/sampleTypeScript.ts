class FooBar {
    private name = "Yone";
    showMe(){
        console.log(this.name);
    }
}

var foo = new FooBar();
foo.showMe();