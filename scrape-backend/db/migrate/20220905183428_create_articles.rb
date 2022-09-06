class CreateArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :web_url
      t.string :byline
      t.string :author
      t.string :date_published
      t.timestamps
    end
  end
end
