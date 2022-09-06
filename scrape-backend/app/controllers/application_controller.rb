class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # GET => Articles
  get "/articles" do
    articles = Article.all.order(:created_at)
  end

end
