class User < ApplicationRecord
    has_many :user_gyms, dependent: :destroy
    has_many :gyms, through: :user_gyms
    
    has_secure_password


    def favorite_gym
        user_gym = user_gyms.max_by {|obj| obj.rating}
        id = user_gym.gym_id
        Gym.find(id)
    end

end
