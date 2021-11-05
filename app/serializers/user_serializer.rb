class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :journal

  validates :username, :email, uniqueness: true
end
