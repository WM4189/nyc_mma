class AddArtToGym < ActiveRecord::Migration[6.1]
  def change
    add_column :gyms, :art, :string
  end
end
