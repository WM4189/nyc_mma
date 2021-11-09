class ChangeUserGymRatingType < ActiveRecord::Migration[6.1]
  def change
    change_column :user_gyms, :rating, :float
  end
end
