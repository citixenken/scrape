class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # GET => Articles
  get "/articles" do
    articles = Article.all.order(:created_at)
    articles.to_json
  end

  #POST
  post '/articles' do
    article = Article.create(
      title: params[:title],
      web_url: params[:web_url],
      byline: params[:byline],
      author: params[:author],
      date_published: params[:date_published]
    )
    article.to_json
  end

  #PATCH
  patch '/articles/:id' do
    article = Article.find(params[:id])
    article.update(
      title: params[:title],
      web_url: params[:web_url],
      byline: params[:byline],
      author: params[:author],
      date_published: params[:date_published]
    )
    article.to_json
  end

  #DELETE
  delete '/articles/:id' do 
    article = Article.find(params[:id])

    article.destroy

    article.to_json
  end


end
