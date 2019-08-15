// Every symbol value returned from Symbol() is unique.  A symbol value may be used as an
// identifier for object properties; this is the data type's only purpose.
const singleton = Symbol('singleton');
const singletonEnforcer = Symbol('enforcer');

class Singleton {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) return null;
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new Singleton(singletonEnforcer);
    }
    return this[singleton];
  }
}

module.exports = Singleton;
