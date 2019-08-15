const Product = require('./product.js');

class SpecificProduct extends Product {
  constructor(name) {
    super(`Specific ${name}`);
  }
}

module.exports = SpecificProduct;
