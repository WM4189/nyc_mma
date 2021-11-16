# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




## (rails db:reset ********************************)
puts "Deleting old data..."
Gym.destroy_all
User.destroy_all
UserGym.destroy_all
Art.destroy_all

puts "🌱 Seeding Gyms..."
andersons = Gym.create(name: "Anderson's Martial Arts Academy", address: "412 Broadway #2, New York, NY, 10013", link: "https://www.andersonsmartialarts.com/", art: "Jeet Kune Do")
uma = Gym.create(name: "Unlimited Martial Arts", address: "505 Union Ave, Brooklyn, NY 11211", link: "https://unlimitedmartialartsacademy.com/", art: "Jeet Kune Do")
maa = Gym.create(name: "Martial Arts Academy", address: "184 N 8th St, Brooklyn, NY 11211", link: "https://www.nymaa.com/", art: "Jeet Kune Do")
nu = Gym.create(name: "Nubreed Martial Arts Academy", address: "150-43 14th Ave, Whitestone, NY 11357", link: "https://www.nubreedmartialarts.com/", art: "Jeet Kune Do")
family = Gym.create(name: "Family Martial Arts Academy NYC", address: "470 7th Ave Suite 403, New York, NY 10018", link: "https://bryan-k-stoops.mykajabi.com/bryan-stoops-ma", art: "Jeet Kune Do")
progressive = Gym.create(name: "Progressive Martial Arts", address: "175-25 Horace Harding Expy, Fresh Meadows, NY 11365", link: "https://progressivemartialarts.com/", art: "Jeet Kune Do")

unlimited = Gym.create(name: "Unity Jiu Jitsu School", address: "Stair A Door, 144 W 14th St, New York, NY 10011", link: "https://unityjiujitsu.com/", art: "Brazilian Jiu Jitsu")
ronin = Gym.create(name: "Ronin Athletics", address: "265 Madison Ave FL 5, New York, NY 10016", link: "https://roninathletics.com/", art: "Brazilian Jiu Jitsu")
radical = Gym.create(name: "Radical MMA", address: "235 W 29th St, New York, NY 10001", link: "https://radicalmmanyc.com/", art: "Brazilian Jiu Jitsu")
vitor = Gym.create(name: "Vitor Shaolin's Brazilian Jiu Jitsu", address: "780 8th Ave #7000, New York, NY 10036", link: "https://www.bjjnewyorkcity.com/", art: "Brazilian Jiu Jitsu")
tenth = Gym.create(name: "10th Planet Brazilian Jiu Jitsu", address: "35 W 43rd St 4th Floor, New York, NY 10036", link: "https://www.10thplanetjjnyc.com/", art: "Brazilian Jiu Jitsu")
renzo = Gym.create(name: "Renzo Gracie Academy", address: "224 W 30th St, New York, NY 10001", link: "https://renzogracieacademy.com/", art: "Brazilian Jiu Jitsu")
clock = Gym.create(name: "Clockwork Jiu Jitsu", address: "650 Broadway 2nd floor, New York, NY 10012", link: "https://www.clockworkbjj.com/", art: "Brazilian Jiu Jitsu")

kings = Gym.create(name: "Kings Combat", address: "219 S 3rd St, Brooklyn, NY 11211", link: "https://kingscombatwillyb.com/", art: "Muay Thai")
ultimate = Gym.create(name: "Ultimate Gym", address: "5 W 30th St, New York, NY 10001", link: "https://ultimategymny.com/", art: "Muay Thai")
evolution = Gym.create(name: "Evolution Muay Thai", address: "109 W 25th St, New York, NY 10001", link: "https://evolutionmuaythai.com/", art: "Muay Thai")
five = Gym.create(name: "Five Points Academy", address: "148 Lafayette St, New York, NY 10013", link: "https://www.academyfivepoints.com/", art: "Muay Thai")
square = Gym.create(name: "Square Circle", address: "139 Fulton St #706, New York, NY 10038", link: "https://squarecirclenewyork.com/", art: "Muay Thai")
wat = Gym.create(name: "The Wat", address: "291 Broadway, New York, NY 10007", link: "https://www.thewat.com/", art: "Muay Thai")

church = Gym.create(name: "Church Street Boxing Gym", address: "25 Park Pl, New York, NY 10007", link: "https://csboxinggym.com/", art: "Boxing")
mendez = Gym.create(name: "Mendez Boxing", address: "23 E 26th St, New York, NY 10010", link: "https://www.mendezboxingny.com/", art: "Boxing")
overthrow = Gym.create(name: "Overthrow Boxing Club", address: "9 Bleecker St, New York, NY 10012", link: "https://overthrownyc.com/", art: "Boxing")
gleason = Gym.create(name: "Gleason's Gym", address: "130 Water St, Brooklyn, NY 11201", link: "https://www.gleasonsgym.com/", art: "Boxing")
hudson = Gym.create(name: "Hudson Boxing Gym", address: "406 Broadway Lower Level, New York, NY 10013", link: "https://www.instagram.com/hudsonboxing/?hl=en", art: "Boxing" )
trinity = Gym.create(name: "Trinity Boxing Club", address: "116 Duane St, New York, NY 10007", link: "https://trinityboxing.com/", art: "Boxing")

team = Gym.create(name: "Capoeira Team", address: "4 W 43rd St, New York, NY 10036", link: "https://capoeirateam.nyc/", art: "Capoeira")
aba = Gym.create(name: "ABA Capoeira Center", address: "107 Suffolk St, New York, NY 10002", link: "https://www.newyorkcapoeira.com/", art: "Capoeira")
luanda = Gym.create(name: "Capoeira Luanda", address: "28 W 25th St, New York, NY 10022", link: "http://www.capoeiraluandanyc.com/", art: "Capoeira")
arte = Gym.create(name: "Arte Capoeira Center", address: "18 Bleecker St, New York, NY 10012", link: "https://www.instagram.com/artecapoeiracenter/?hl=en", art: "Capoeira")
ra = Gym.create(name: "Rã Capoeira", address: "80-03 Roosevelt Ave 2nd floor, Queens, NY 11372", link: "https://racapoeira.com/", art: "Capoeira")
train = Gym.create(name: "Capoeira Training Center", address: "440 Lafayette St, New York, NY 10003", link: "https://www.capoeiratrainingcenter.com/", art: "Capoeira")



puts "🌱 Seeding Users..."
wm = User.create(username: "Willson", email:"wm@email.com", password: "password", journal: "Training Journal Entries!!!!!!")
User.create(username: "Guest", email: "Guest", password: "password", journal: "Training Journal Entries!!!!!!")

# jake = User.create(username: "Jake", email:"jake@email.com", password: "password", journal: "Training Journal Entries!!!!!!")
# luie = User.create(username: "Luie", email:"sweet_lu@email.com", password: "password", journal: "Training Journal Entries!!!!!!")
# jackle = User.create(username: "Jackle", email:"cactus_jack@email.com", password: "password", journal: "Training Journal Entries!!!!!!")
# tonka = User.create(username: "Tonka", email:"t_bone@email.com", password: "password", journal: "Training Journal Entries!!!!!!")

puts "🌱 Seeding UserGyms..."
UserGym.create(rating: 4, review: "AMAZING GYM, AMAZING WORKOUTS! The staff here is incredibly friendly and extremely qualified! They know how to push you to the limit in the best way possible with your workouts. You will not leave disappointed! Such a family vibe as soon as you walk in the doors – I highly recommend checking this gym out.", user_id: wm.id, gym_id: kings.id )
UserGym.create(rating: 4, review: "Hands down, best choice I’ve made training at Unlimited. VERY friendly team who make me actually want to go train. I look forward to walking through the doors and always feel amazing when I leave.", user_id: wm.id, gym_id: unlimited.id )

UserGym.create(rating: 3, review: "I love this place. I highly recommend this place to anyone who wants to get in shape. The trainers are really awesome and helpful, they make you feel really comfortable. The 45 min training goes super fast and you really enjoy doing it. Everyday is a new training, so it is never boring.", user_id: wm.id, gym_id: ultimate.id )
UserGym.create(rating: 2, review: "I started my membership in early 2020, but cancelled in April due to COVID. I have been waiting for a promised refund ever since. Their emails keep promising 5 days, then 30, then 5-6. I have been a fitness member of a variety of clubs for more than 30 years. This one is THE biggest disappointment!! Don't waste your money. There are other choices!", user_id: wm.id, gym_id: evolution.id )

UserGym.create(rating: 3, review: "Excellent personal training. Trainers who really care and go above and beyond to help you achieve your goals. Small and private gym that feels more personal. Highly recommended!", user_id: wm.id, gym_id: radical.id )
UserGym.create(rating: 3, review: "This gym has the best energy, staff, and feel. Everything is so clean, every trainer closely watches and corrects everyone’s form, and a DJ on Saturday. Keep doing exactly what you are doing.", user_id: wm.id, gym_id: uma.id )

UserGym.create(rating: 1, review: "Don't ever go to this gym. They will charge you even after you cancel your membership. Always read before signing and ask for copies and never trust anything they say.", user_id: wm.id, gym_id: maa.id )
UserGym.create(rating: 5, review: "Spectacular personal trainers and complete, clean gym. Would highly recommend!", user_id: wm.id, gym_id: andersons.id )
UserGym.create(rating: 5, review: "Great mix of functional fitness with traditional gym equipment. Lots of space for Olympic lifting too. Unless you’re here in the early morning or the evening, there are never too many people which is nice. There are classes offered in the morning, at noon and in the evening – good, varied range of different options.", user_id: wm.id, gym_id: andersons.id )

UserGym.create(rating: 4, review: "The workouts are fun, the fellow members are inspiring, the workouts are led by personal trainers who give hands on instant feedback and adjustments during the workouts and just the right amount of encouragement. The music is blaring and the atmosphere is awesome. You will not do the same workout twice and if you go you will see the results no question. It’s a life changing gym experience and I recommend it highly to all my fiends and family.", user_id: wm.id, gym_id: ronin.id )
UserGym.create(rating: 1, review: "The worst gym in the world! How dare are they to keep charging us even though they ”saying” our contract was cancelled? I want my money back!! I never agreed with my membership with this brand!", user_id: wm.id, gym_id: maa.id )

andersons.average_gym_rating
uma.average_gym_rating 
maa.average_gym_rating
unlimited.average_gym_rating
ronin.average_gym_rating
radical.average_gym_rating
kings.average_gym_rating
ultimate.average_gym_rating
evolution.average_gym_rating

Art.create(bjj: "Bjj History", boxing: "Boxing History", capoeira: "Capp History", jkd: "JKD History", thai: "Thai History", share: "Community Share")

puts "✅ Done seeding!"