require 'json'
require 'nokogiri'
require 'open-uri'
require 'pry'
require 'json'
require 'faker'

def create_article_hash
    url = 'https://arstechnica.com/'
    html = URI.open(url)
    parsed_page = Nokogiri::HTML(html)
    published_articles = parsed_page.css('li.tease.article')

    articles = Array.new

    published_articles.each do |published_article|
        
        article = {
            title: published_article.css('header h2 a').text,
            web_url: published_article.css('header h2 a').attribute('href').value,
            byline: published_article.css('header p.excerpt').text,
            author: published_article.css('header p.byline a span').text,
            date_published: published_article.css('header p.byline time.date').text
        }
        articles << article
    end

    articles

    Article.destroy_all
    Reader.destroy_all
    Review.destroy_all

    puts "🌱 Seeding articles..."

    articles.map do |article|
        article_instance = Article.create(article)
        2.times do 
            reader = Reader.create(username: Faker::Name.name)
            Review.create(comment: Faker::Lorem.sentence, rating: rand(1..5), article_id: article_instance[:id], reader_id: reader[:id])
        end
    end
    puts "✅ Done seeding!"
end

create_article_hash
