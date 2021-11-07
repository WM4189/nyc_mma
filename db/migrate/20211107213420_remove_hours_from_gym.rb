class RemoveHoursFromGym < ActiveRecord::Migration[6.1]
  def change
    remove_column :gyms, :hours 
  end
end
