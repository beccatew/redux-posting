10.times do
Post.create(
  name: Faker::Simpsons.character,
  quote: Faker::Simpsons.quote,
  image: Faker::Avatar.image("my-own-slug", "50x50")
)
end
