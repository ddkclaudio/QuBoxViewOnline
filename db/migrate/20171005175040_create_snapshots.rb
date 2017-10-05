class CreateSnapshots < ActiveRecord::Migration
  def change
    create_table :snapshots do |t|
      t.integer :number_of_snapshot
      t.integer :qaddw_dell
      t.integer :qaddw_change
      t.integer :qaddw_add
      t.integer :qaddw_cancel
      t.integer :qaddsw_dell
      t.integer :qaddsw_change
      t.integer :qaddsw_add
      t.integer :qaddsw_cancel
      t.integer :qadd_dell
      t.integer :qadd_change
      t.integer :qadd_add
      t.integer :qadd_cancel
      t.float :vwap
      t.float :rps
      t.text :frequencia
      t.integer :tinha_buraco
      t.float :acumulado
      t.integer :delete_no_add
      t.integer :teve_iceberg
      t.integer :teve_add_secundario
      t.float :preco
      t.text :ofi
      t.integer :id_mbp

      t.timestamps null: true
    end
  end
end
