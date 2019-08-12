# frozen_string_literal: true

# An implementation of the Singleton pattern
class Singleton
  private_class_method :new
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def self.create(*params)
    @instance ||= new(*params)
    @instance
  end
end
