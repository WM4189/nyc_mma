class Gym < ApplicationRecord
    has_many :user_gyms, dependent: :destroy
    has_many :users, through: :user_gyms

    def average_gym_rating
        num = user_gyms.pluck(:rating).count
        sum = user_gyms.sum {|x| x.rating}
        av = sum/num.to_f
        self.update(average_rating: av)
    end

end
