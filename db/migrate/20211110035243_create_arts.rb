class CreateArts < ActiveRecord::Migration[6.1]
  def change
    create_table :arts do |t|
      t.text :bjj
      t.text :boxing
      t.text :capoeira
      t.text :jkd
      t.text :thai

      t.timestamps
    end
  end
end
