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
family = Gym.create(name: "Family Martial Arts Academy", address: "470 7th Ave Suite 403, New York, NY 10018", link: "https://bryan-k-stoops.mykajabi.com/bryan-stoops-ma", art: "Jeet Kune Do")
progressive = Gym.create(name: "Progressive Martial Arts", address: "175-25 Horace Harding Expy, Fresh Meadows, NY 11365", link: "https://progressivemartialarts.com/", art: "Jeet Kune Do")

unity = Gym.create(name: "Unity Jiu Jitsu School", address: "Stair A Door, 144 W 14th St, New York, NY 10011", link: "https://unityjiujitsu.com/", art: "Brazilian Jiu Jitsu")
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

# Specific
UserGym.create(rating: 5, review: "I can say that this hands down the most professional and legitimate class I’ve ever taken. Nice renovated facility, GREAT instructors who welcomed and spoke to me before and after class. Wonderful experience, killer workout. Sean, Joe, and Danny are incredible teachers. Highly recommend this place.", user_id: wm.id, gym_id: andersons.id )
UserGym.create(rating: 5, review: "Spectacular personal trainers and complete, clean gym. Would highly recommend!", user_id: wm.id, gym_id: andersons.id )

# UserGym.create(rating: 4.5, review: "The Best !! The instructors are Incredible professionals helping us parents shape our children’s minds while also helping those getting into great physical shape !! My kids are happy to go 3-5 days a week and come home every time and tell stories and everyone they know what they learned", user_id: wm.id, gym_id: nu.id )
UserGym.create(rating: 4, review: "As a teacher and father I have the upmost respect for Nubreed Martial Arts Academy. There are plenty of schools much closer to where I reside, but I gladly travel quite a distance to make sure that my kids and I are able to train at one of the most top-notch academies in the country. The owners and staff pay attention to all the details that truly create the ultimate learning experience", user_id: wm.id, gym_id: nu.id )

UserGym.create(rating: 5, review: "Bryan is one of the best instructors that I have had the pleasure to work with and learn from. Very detailed and passionate about martial arts and self defense, Bryan has a vast knowledge in a variety of systems by training with top notch instructors (Guro Dan Inosanto, Chai Sirisute, Guro Virgil Cabada, Sifu Francis Fong)", user_id: wm.id, gym_id: family.id )
# UserGym.create(rating: 4.5, review: "His curriculum is great! it is sometimes hard to find a martial artist who is as good as teaching it as he is good at practicing it and Guro Bryan happens to be both. Awesome guy all around! His classes are fun!", user_id: wm.id, gym_id: family.id )

UserGym.create(rating: 1.5, review: "The owner here is all for money, very disrepectful.Once they lock up your money they don't care the commitment. I had lost $800 in 2 month's, despite my request to freeze my Children's account for their medical issues, PMA still kept on charging from my bank# & never got a service for it. Please don't put your money & Children here.", user_id: wm.id, gym_id: progressive.id )
# UserGym.create(rating: 2, review: "As stated in another review:  This school has gone downhill, a lot of the best students have left because of what Nick has done to the program.  It used to be one that would teach JKD, but now Nick's only concern is making money.  Do yourself a favor and find a school that is about the arts not about the money", user_id: wm.id, gym_id: progressive.id )

# UserGym.create(rating: 2.5, review: "Great gym with great instructors but you need to sign a 1 year contract, the website said it offers MMA training,  but they don't, it's purely a BJJ gym. Lastly, they don't really have a freeze policy. They will charge you for the month and that payment will roll over to the next one.", user_id: wm.id, gym_id: vitor.id )
UserGym.create(rating: 4, review: "I was visting NYC from Europe and was very happy to find Shaolin's bjj school, by chance actually.  For $35 for a day I took 3 top quality classes with techniques, positional sparring and cardio.  Everyone, and not least Shaolin, was very friendly and welcoming.  I can highly recommend visiting this bjj school.", user_id: wm.id, gym_id: vitor.id )

UserGym.create(rating: 5, review: "Jiu Jitsu is a personal journey. You want to learn valuable and real world applicable techniques, show up to a class. You’ll find out who you are. Rey and Cece learned directly under Eddie Bravo what more could you ask for. They’re as battle tested and knowledgable as instructors come in the sport.", user_id: wm.id, gym_id: tenth.id )
# UserGym.create(rating: 4.5, review: "I was visiting from Dubai and Ray and Cece made me feel very welcome, they had just had brand new mats installed which made for a great space, you can pay for a drop in class for which I stayed for 3hrs, great warm up drills, then technique and finished with rolling. Fun times. Great people on the mat, I will def visit again", user_id: wm.id, gym_id: tenth.id )

# UserGym.create(rating: 0.5, review: "Don't train here if you are beginner- intermediate advanced. This place is a injury factory, and you will pay extra for the 'name value' (comparatively to the other MMA gyms in NYC), but you will never see Renzo teaching beginner/intermediate or even many of the advanced classes, and 90% of the other coaches do not care unless you are a fighter or black belt. Ego is not left at the door, and a safe and friendly training environment to prevent injuries is not a culture that is fostered here, expect to get injured more often than you should. This is a decent gym if you are a fighter or high ranking belt, great place to learn leg locks (which you can only learn when you get to a much higher level), anything else and I highly recommend NOT to train here. Same problem with Marcelo's, but Marcelo is actually there quite often... still I recommend instead training at one of the smaller MMA gyms in the area.", user_id: wm.id, gym_id: renzo.id )

UserGym.create(rating: 4.5, review: "I was a student here at Clockwork Jiujitsu a while ago, but I got injured due to work, and I tried coming back, but injuries always followed me around. Josh always coached very well and is always in class paying full attention to his students. He’s a legit black belt with real knowledge of the game, how to compete and also how to be disciplined. He and his instructors always taught very well and gave all the littlest details on how to improve our jiujitsu game. This place is professional, courteous and always looking out for students best interest. Very worth the prices and very high level jiujitsu", user_id: wm.id, gym_id: clock.id )

UserGym.create(rating: 4, review: "Hands down, best choice I’ve made training at Unity. VERY friendly team who make me actually want to go train. I look forward to walking through the doors and always feel amazing when I leave.", user_id: wm.id, gym_id: unity.id )

UserGym.create(rating: 2, review: "Too many good studios in NYC to waste time here.  Dingy, instructor lacks energy & warmth,  very small class sizes. Below average", user_id: wm.id, gym_id: five.id )
UserGym.create(rating: 2.5, review: "The martial arts tutors always use very foul language even in front of kids. My nephew goes there for practice and the first time I heard the tutors using foul language I thought my ears were playing tricks on me. They use the F word too often. Some of the kids are just 7 years old.", user_id: wm.id, gym_id: five.id )

UserGym.create(rating: 2, review: "Beware of deceptive marketing/sales tactics. A '30 day free trial' is advertised on the site. But you have to come in for an 'assessment' first. After this 30 min assessment, they try to get you to sign up for a membership which is overpriced I'll add. But back to the 'free trial'. Apparently it's only Wednesday 5:30 classes that are free the first month, meaning you only get a 4 day free trial really. That is if you can make those classes. If this was stated explicitly on the site I wouldn't have even wasted my time.", user_id: wm.id, gym_id: renzo.id )
UserGym.create(rating: 3, review: "My boyfriend has been going to this gym for two months now and absolutely loves it! He loves the atmosphere and the people he gets to train with. I would recommend trying out a free lesson like he did! I'm sure you will love it too!", user_id: wm.id, gym_id: square.id )

UserGym.create(rating: 5, review: "Before I get into it, let me just say the Wat, in general is a great gym. Ajarn Phil Nurse is the man and his classes are great. I train at a few of the big gyms in the city & Brooklyn, and the Wat is easily in my top 3.  I took a class recently that I didn't think was so great - I wasn't into the coach's teaching style - I made my concerns known and the gym got at me immediately and cleared everything up. Very cool place to train.", user_id: wm.id, gym_id: wat.id )

UserGym.create(rating: 2.5, review: "Seemed to have a sub who taught the class that I attended and it was not very organized. He was coming up with exercises to do on the spot and some of it was not conducive to the crowded class. However, I did still get a decent workout, even if it was all over the place.", user_id: wm.id, gym_id: church.id )
UserGym.create(rating: 3, review: "Good workout. Challenging and you feel energetic after you’re done. The place is really dirty. I was there for an hour and I saw 3 cockroaches. The place is smelly... sad cause the class is good but....", user_id: wm.id, gym_id: church.id )

UserGym.create(rating: 1.5, review: "It's a favoritism/greed game in this facility. I went to be trained by one of the boxing trainers there and it was more of a touch and go type training they did with me. I paid $200 and wasn't trained correctly, I also noticed that the trainers will work with people that tip them on the side ;and if you're paying $200 a month to be trained why I gotta give you more money to do the job I'm paying you to do in the first place? White privilege is real in this gym", user_id: wm.id, gym_id: mendez.id )

UserGym.create(rating: 1, review: "The instructors seem a bit too 'friendly' with some of the young women training here...", user_id: wm.id, gym_id: overthrow.id )
UserGym.create(rating: 1, review: "Wish there were more female trainers here..  Male trainers here are so typical...", user_id: wm.id, gym_id: overthrow.id )

UserGym.create(rating: 3, review: "Good Gym meet alot of famous boxers as they normally workout there. Gym is pricey. The trainers some are great some are horrible but you'll def learn boxing here quick.", user_id: wm.id, gym_id: gleason.id )

UserGym.create(rating: 5, review: "Empowering experience. I'm an experienced martial artist and I took up private boxing classes with Coach Ricardo Andre in February . In all my years training in combat, I never trained boxing like this before. Ricardo has it down like science. I love this gym 🥊", user_id: wm.id, gym_id: hudson.id )
UserGym.create(rating: 5, review: "I'm super unfit as I haven't been exercising since forever. I struggled at the beginning but I had the best time ever! Such a great workout!", user_id: wm.id, gym_id: hudson.id )

UserGym.create(rating: 2, review: "there are better gyms (value for money, amenities, and training staff) in the city! can see that owner actively picks on people who negatively review his gym, but if you want to spend $$$ and not learn boxing — go to rumble!!", user_id: wm.id, gym_id: trinity.id )

UserGym.create(rating: 5, review: "Fantastic instructor at the helm of this lively and tight-knit group. I wandered around for some time, looking for a Capoeira group after moving to NYC; within one or two sessions, I knew that I wanted to stay on with them. I have had a lot of fun and lost a good amount of body fat in my few years with them", user_id: wm.id, gym_id: team.id )

UserGym.create(rating: 4, review: "I love coming here! The people are very nice and the instructors are very professional. Everyone is very kind and helpful. Worth checking out!", user_id: wm.id, gym_id: aba.id )

UserGym.create(rating: 5, review: "I love Professor Sabia's classes at PMT. The classes are extremely fun, full of energy and always very welcoming!!!  If you are looking to train Capoeira come by Sabia's class.  You will love it!", user_id: wm.id, gym_id: luanda.id )

UserGym.create(rating: 5, review: "Working in midtown, I stopped by the ACC purely on it's convenient location on a whim without understanding what Capoeira was. Five years later, I am still here training.", user_id: wm.id, gym_id: arte.id )

UserGym.create(rating: 5, review: "Capoeira is a great full body workout. The class is a combination of cardio routines and self defense movements. The group is supportive and the classes are fit for all levels of experience. The studio is large and clean, with a very good vibe. Very convenient for people that want a fun and complete workout on a Saturday morning.", user_id: wm.id, gym_id: ra.id )

UserGym.create(rating: 5, review: "Joy was so helpful and everyone made us feel so comfortable during our first class. We have now taken a total of 2 classes and will definitely be back", user_id: wm.id, gym_id: train.id )

# Generic
UserGym.create(rating: 4, review: "AMAZING GYM, AMAZING WORKOUTS! The staff here is incredibly friendly and extremely qualified! They know how to push you to the limit in the best way possible with your workouts. You will not leave disappointed! Such a family vibe as soon as you walk in the doors – I highly recommend checking this gym out.", user_id: wm.id, gym_id: kings.id )

UserGym.create(rating: 3, review: "I love this place. I highly recommend this place to anyone who wants to get in shape. The trainers are really awesome and helpful, they make you feel really comfortable. The 45 min training goes super fast and you really enjoy doing it. Everyday is a new training, so it is never boring.", user_id: wm.id, gym_id: ultimate.id )
UserGym.create(rating: 2, review: "I started my membership in early 2020, but cancelled in April due to COVID. I have been waiting for a promised refund ever since. Their emails keep promising 5 days, then 30, then 5-6. I have been a fitness member of a variety of clubs for more than 30 years. This one is THE biggest disappointment!! Don't waste your money. There are other choices!", user_id: wm.id, gym_id: evolution.id )

UserGym.create(rating: 3, review: "Excellent personal training. Trainers who really care and go above and beyond to help you achieve your goals. Small and private gym that feels more personal. Highly recommended!", user_id: wm.id, gym_id: radical.id )
UserGym.create(rating: 3, review: "This gym has the best energy, staff, and feel. Everything is so clean, every trainer closely watches and corrects everyone’s form, and a DJ on Saturday. Keep doing exactly what you are doing.", user_id: wm.id, gym_id: uma.id )

UserGym.create(rating: 1, review: "Don't ever go to this gym. They will charge you even after you cancel your membership. Always read before signing and ask for copies and never trust anything they say.", user_id: wm.id, gym_id: maa.id )

UserGym.create(rating: 4, review: "The workouts are fun, the fellow members are inspiring, the workouts are led by personal trainers who give hands on instant feedback and adjustments during the workouts and just the right amount of encouragement. The music is blaring and the atmosphere is awesome. You will not do the same workout twice and if you go you will see the results no question. It’s a life changing gym experience and I recommend it highly to all my fiends and family.", user_id: wm.id, gym_id: ronin.id )
UserGym.create(rating: 1, review: "The worst gym in the world! How dare are they to keep charging us even though they ”saying” our contract was cancelled? I want my money back!! I never agreed with my membership with this brand!", user_id: wm.id, gym_id: maa.id )


andersons.average_gym_rating 
uma.average_gym_rating 
maa.average_gym_rating 
nu.average_gym_rating 
family.average_gym_rating 
progressive.average_gym_rating 

unity.average_gym_rating 
ronin.average_gym_rating 
radical.average_gym_rating 
vitor.average_gym_rating 
tenth.average_gym_rating 
renzo.average_gym_rating 
clock.average_gym_rating 

kings.average_gym_rating 
ultimate.average_gym_rating 
evolution.average_gym_rating 
five.average_gym_rating 
square.average_gym_rating 
wat.average_gym_rating 

church.average_gym_rating 
mendez.average_gym_rating 
overthrow.average_gym_rating 
gleason.average_gym_rating 
hudson.average_gym_rating 
trinity.average_gym_rating 

team.average_gym_rating
aba.average_gym_rating 
luanda.average_gym_rating 
arte.average_gym_rating 
ra.average_gym_rating 
train.average_gym_rating 


Art.create(bjj: "Bjj History", boxing: "Boxing History", capoeira: "Capp History", jkd: "JKD History", thai: "Thai History", share: "Community Share")

puts "✅ Done seeding!"