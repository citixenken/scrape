# require 'httparty'
require 'nokogiri'
require 'open-uri'
require 'pry'
require 'json'

def create_project_hash
    url = 'https://arstechnica.com/'
    html = URI.open(url)
    parsed_page = Nokogiri::HTML(html)
    published_articles = parsed_page.css('li.tease.article')

    articles = Array.new
    
    published_articles.each do |published_article|
        
        article = {

            title: published_article.css('header h2 a').text,
            # image: published_article.css('figure div.listing.listing-large').attribute('style').value,
            web_url: published_article.css('header h2 a').attribute('href').value,
            byline: published_article.css('header p.excerpt').text,
            author: published_article.css('header p.byline a span').text,
            date_published: published_article.css('header p.byline time.date').text
        }
        articles << article
        # binding.pry
    end
    # binding.pry

    puts articles.to_json
end

create_project_hash