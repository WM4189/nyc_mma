class User < ApplicationRecord
    has_many :user_gyms
    has_many :gyms, through: :user_gyms
    
    has_secure_password
end
