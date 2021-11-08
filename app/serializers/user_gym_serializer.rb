class UserGymSerializer < ActiveModel::Serializer
  attributes :rating, :review, :gym_id
  has_one :user
  has_one :gym

end
