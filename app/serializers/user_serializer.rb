class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :journal

end
