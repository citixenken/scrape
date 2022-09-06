class Reader < ActiveRecord::Base
    has_many :reviews
    has_many :articles, through: :reviews
end