class Gym < ApplicationRecord
    has_many :user_gyms, dependent: :destroy
    has_many :users, through: :user_gyms

    def average_rating
        num = user_gyms.pluck(:rating).count
        sum = user_gyms.sum {|x| x.rating}
        sum/num.to_f
    end

end
