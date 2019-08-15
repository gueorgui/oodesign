const singleton = Symbol('singleton');
const singletonEnforcer = Symbol('enforcer');

class ProductFactory {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) return null;
    this.registeredProducts = {};
  }

  registerProduct(productId, productClass) {
    this.registeredProducts[productId] = productClass;
  }

  createProduct(productId) {
    let product = null;
    if (this.registeredProducts[productId]) {
      product = new this.registeredProducts[productId]('test');
    }
    return product;
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new ProductFactory(singletonEnforcer);
    }
    return this[singleton];
  }
}

module.exports = ProductFactory;
