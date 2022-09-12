class Article < ActiveRecord::Base
    has_many :reviews
    has_many :readers, through: :reviews

    def leave_review(reader, rating, comment)
        Review.create(comment: comment, rating: rating, reader_id: reader.id, article_id: self.id)
    end

    def print_all_reviews
        reviews.filter { |review| review.articles == self }.map { |review| review.print_preview }
    end

    def average_rating
        self.reviews.map { |review| review.rating }.reduce(:+).to_f / self.reviews.count
    end
end