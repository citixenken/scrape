class Review < ActiveRecord::Base
    belongs_to :article
    belongs_to :reader

    def print_preview
        "Review for #{article.title} by #{reader.username}: #{self.rating}. #{self.comment}"
    end
end