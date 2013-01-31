class Account < ActiveRecord::Base
  attr_accessible :address, :email, :fax, :fname, :lname, :mname, :phone, :title
end
