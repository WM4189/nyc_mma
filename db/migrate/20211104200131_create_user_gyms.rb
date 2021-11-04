class CreateUserGyms < ActiveRecord::Migration[6.1]
  def change
    create_table :user_gyms do |t|
      t.integer :rating
      t.text :review
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :gym, null: false, foreign_key: true

      t.timestamps
    end
  end
end
