# frozen_string_literal: true

# An implementation of the Factory design pattern
class ProductFactory
  private_class_method :new

  def initialize
    @registered_products = {}
  end

  def self.instance
    @instance ||= new
    @instance
  end

  def register_product(product_id, product_class)
    @registered_products[product_id] = product_class
  end

  def create_product(product_id)
    if @registered_products.include?(product_id)
      @registered_products[product_id].new('test')
    else
      throw ArgumentError 'Invalid product ID'
    end
  end
end

# The objects that will be created by the Factory class
class Product
  def initialize(name)
    @name = name
  end

  def describe
    "This product is: #{@name}"
  end
end

# A more specific class that we will register with the factory
class SpecificProduct < Product
  ProductFactory.instance.register_product('SPECIFIC', SpecificProduct)

  def initialize(name)
    name = "Specific #{name}"
    super(name)
  end
end
