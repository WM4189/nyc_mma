class CreateGyms < ActiveRecord::Migration[6.1]
  def change
    create_table :gyms do |t|
      t.string :name
      t.text :address
      t.text :hours
      t.float :average_rating
      t.text :link

      t.timestamps
    end
  end
end
