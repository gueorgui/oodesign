class Product {
  constructor(name) {
    this.name = name;
  }

  describe() {
    return `This product is: ${this.name}`;
  }
}

module.exports = Product;
