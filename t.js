class A1 { a() { return 1; } }
class A2 { a() { return 2; } }
class B1 extends A1 { getSuper() { return super.a(); } }
class B2 extends A2 { }
let b1 = new B1();
let b2 = new B2();
b2.getSuper = b1.getSuper;
console.log(b2.getSuper());