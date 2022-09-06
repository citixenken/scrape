class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    #GET => Readers
    get "/readers" do
      readers = Reader.all.order(:rating)
      readers.to_json
    end
  
    #POST
    post '/readers' do
      reader = Reader.create(
        comment: params[:comment],
        rating: params[:rating]
      )
      reader.to_json
    end
  
    #PATCH
    patch '/readers/:id' do
      reader = Reader.find(params[:id])
      reader.update(
        comment: params[:comment],
        rating: params[:rating]
      )
      reader.to_json
    end
  
    #DELETE
    delete '/readers/:id' do 
      reader = Reader.find(params[:id])
  
      reader.destroy
  
      reader.to_json
    end
  end
  