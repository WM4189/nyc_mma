class UserGymSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review
  has_one :user
  has_one :gym

  validates :rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }
end
