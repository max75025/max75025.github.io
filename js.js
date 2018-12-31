var stack = [];
var img = document.getElementById("img");
var main = document.getElementById("main");
var cart = document.getElementById("cart");

Array.prototype.shuffle = function(b) {
    var i = this.length,
        j, t;
    while (i) {
        j = Math.floor((i--) * Math.random());
        t = b && typeof this[i].shuffle !== 'undefined' ? this[i].shuffle() : this[i];
        this[i] = this[j];
        this[j] = t;
    }
    return this;
};

function createStack() {
    var arr = [];
    for (var i = 76; i >= 1; i--) {
        arr.push(i);
    }

    stack = arr.shuffle();
    //alert(stack);
    main.style.display = "none";
    cart.style.display = "block";

    setImg();
}

function setImg() {
    try {
        img.src = "./img/" + stack.pop() + ".png";
        if (stack.length == 0) {
            error;
        }
    } catch (e) {
        alert("игра окончена");
        main.style.display = "block";
        cart.style.display = "none";
    }

}