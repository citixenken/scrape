require_relative "./config/environment"
require_relative "./app/controllers/article_controller"
require_relative "./app/controllers/reader_controller"
require_relative "./app/controllers/review_controller"


# Allow CORS (Cross-Origin Resource Sharing) requests
use Rack::Cors do
  allow do
    origins '*' # allow requests from ALL frontend origins (if you deploy your application, change this to only allow requests from YOUR frontend origin)
    resource '*', headers: :any, methods: [:get, :post, :delete, :put, :patch, :options, :head]
  end
end

# Parse JSON from the request body into the params hash
use Rack::JSONBodyParser

# Our application
# run ApplicationController

use ReviewController
use ReaderController
run ArticleController
