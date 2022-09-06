class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    #GET => Reviews
    get "/reviews" do
      reviews = Review.all.order(:username)
      reviews.to_json
    end
  
    #POST
    post '/reviews' do
      review = Review.create(
        username: params[:username]
      )
      review.to_json
    end
  
    #PATCH
    patch '/reviews/:id' do
      review = Review.find(params[:id])
      review.update(
        username: params[:username]
      )
      review.to_json
    end
  
    #DELETE
    delete '/reviews/:id' do 
      review = Review.find(params[:id])
  
      review.destroy
  
      review.to_json
    end
  end
  