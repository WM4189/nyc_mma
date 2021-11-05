class GymSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :hours, :average_rating, :link

end
