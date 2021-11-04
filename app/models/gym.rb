class Gym < ApplicationRecord
    has_many :user_gyms
    has_many :users, through: :user_gyms
end
