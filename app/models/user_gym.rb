class UserGym < ApplicationRecord
  belongs_to :user
  belongs_to :gym
end