class CreateAccounts < ActiveRecord::Migration
  def change
    create_table :accounts do |t|
      t.string :fname
      t.string :mname
      t.string :lname
      t.string :title
      t.string :phone
      t.string :fax
      t.string :email
      t.string :address

      t.timestamps
    end
  end
end
