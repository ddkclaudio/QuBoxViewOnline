class CreateMbps < ActiveRecord::Migration
  def change
    create_table :mbps do |t|
      t.float :bid_price_0
      t.integer :bid_quantity_0
      t.float :ask_price_0
      t.integer :ask_quantity_0
      t.float :bid_price_1
      t.integer :bid_quantity_1
      t.float :ask_price_1
      t.integer :ask_quantity_1
      t.float :bid_price_2
      t.integer :bid_quantity_2
      t.float :ask_price_2
      t.integer :ask_quantity_2
      t.float :bid_price_3
      t.integer :bid_quantity_3
      t.float :ask_price_3
      t.integer :ask_quantity_3
      t.float :bid_price_4
      t.integer :bid_quantity_4
      t.float :ask_price_4
      t.integer :ask_quantity_4

      t.timestamps null: true
    end
  end
end
