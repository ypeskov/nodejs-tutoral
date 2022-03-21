const log = console.log;
class Obj {
  x = 1;

  y = 2;

  func = () => { log(this); };

  f2() {
    log(this);
  }
}

const o = new Obj();
o.func();
o.f2();