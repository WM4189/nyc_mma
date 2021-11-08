class GymSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :average_rating, :link, :art#, :average_gym_rating

  has_many :user_gyms
end
