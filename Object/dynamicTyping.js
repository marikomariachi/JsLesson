var customer = {
    id :1 ,
    contanctName: "Sefa Özer"
}
customer.country = "Turkey";
customer.sayHello = function () {
    alert("hello "+this.contanctName);
}
customer.sayHello();