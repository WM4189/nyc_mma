class GymSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :hours, :average_rating, :link, :art

  has_many :user_gyms
end
