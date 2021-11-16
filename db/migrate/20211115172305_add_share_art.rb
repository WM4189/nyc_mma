class AddShareArt < ActiveRecord::Migration[6.1]
  def change
    add_column :arts, :share, :text
  end
end
