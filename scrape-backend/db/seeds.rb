scrapped_data = `ruby book_scraper.rb`

puts "🌱 Seeding spices..."

puts scrapped_data

Article.create(scrapped_data)
# Message.create([
#   {
#     body: "Hello 👋",
#     username: "Liza"
#   },
#   {
#     body: "Hi!",
#     username: "Duane"
#   },
#   {
#     body: "let's get this chat app working",
#     username: "Liza"
#   }
# ])

puts "✅ Done seeding!"
