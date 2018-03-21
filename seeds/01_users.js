
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then( () => {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          name: 'Camila',
          spotify_id: 30,
          age: 21,
          gender: 'Female',
          description: `Because I'm a good girl, I tend to fall for the bad boy persona, and it ends up biting me in the butt. They end up not knowing how to treat me, and I end up completely devastated.`,
          latitude: 38.123435,
          longitude: -123.343423,
          photo: 'https://media.pitchfork.com/photos/593ed188f6f585756595afc0/1:1/w_300/ad2f17a9.png',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'female',
          match_score: 100,
          top_tracks: {
            "The Beatles": 'Hello',
            "Gregory Allen": 'Stable Song',
            "fish": 'some weird fish song',
            "Kanye West": 'Wolves',
            "The lumineers":'Sick in The Head',
            "The Head and the Heart":'Another Story',
            "Simon & Garfunkel": `Kathy's Song`,
            "The Wood Brothers": 'Postcards From Hell',
            "The Chainsmokers": 'Roses',
            "Tallest Man on Earth":'Love is All'
          },
          top_artists: {
            "The Beatles": 'The Beatles',
            "Gregory Allen": 'Stable Song',
            "fish": 'fish',
            "Kanye West": 'Kanye West',
            "The Lumineers":'The Lumineers',
            "The Head and the Heart":'The Head and the Heart',
            "Simon & Garfunkel": `Simon & Garfunkel`,
            "The Wood Brothers": 'The Wood Brothers',
            "The Chainsmokers": 'The Chainsmokers',
            "Tallest Man on Earth":'Tallest Man on Earth'
          },
          is_initialized: true
        },
        {
          id: 2,
          name: 'Sophia',
          spotify_id: 98,
          age: 24,
          gender: 'Female',
          description: `I think the sexiest thing on anybody is intelligence. I respect somebody who has a brain and wants to use it more than a pretty face and status. Marriage is not about age; it's about finding the right person. I've always been the long-term relationship, go-home-and-meet-mom girl.`,
          latitude: 38.123435,
          longitude: -123.343423,
          photo: 'https://i.pinimg.com/474x/19/05/9a/19059a24d4c28b6a0f9bdbe7dfd6dcd4.jpg',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'male',
          match_score: 56,
          top_tracks: {
            "Jill Andrews": `I'm so in Love with You`,
            "Gregory Allen": `Oh City Lights`,
            "The Avett Brothers": 'Murder in the City',
            "Mandolin Orange": 'Runnin Red',
            "Simon & Garfunkel":'Song for the Asking',
            "The Head and the Heart":'Another Story',
            "Simon & Garfunkel": `Kathy's Song`,
            "The Wood Brothers": 'Postcards From Hell',
            "The Chainsmokers": 'Roses',
            "Jill Andrews":'A Way to You Again'
          },
          top_artists: {
            "Jill Andrews": `Jill Andrews`,
            "Gregory Allen": `Gregory Allen`,
            "The Avett Brothers": 'The Avett Brothers',
            "Mandolin Orange": 'Mandolin Orange',
            "Simon & Garfunkel":'Simon & Garfunkel',
            "The Head and the Heart":'The Head and the Heart',
            "Simon & Garfunkel": `Simon & Garfunkel`,
            "The Wood Brothers": 'The Wood Brothers',
            "The Chainsmokers": 'The Chainsmokers',
            "Jill Andrews":'Jill Andrews'
          },
        },
        {
          id: 3,
          name: 'Emma',
          spotify_id: 38,
          age: 29,
          gender: 'Female',
          description: `I just live my life how I live as a person. I certainly am not, like, a saint or an angel by any means. I'm not anything like that. But I live just how I live. I mean, I have a little paranoia, but that's about it.`,
          latitude: 38.123435,
          longitude: -123.343423,
          photo: 'https://pbs.twimg.com/profile_images/848009415206858752/cDMhhlfF_400x400.jpg',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'male',
          match_score: 89,
          top_tracks: {
            "Jill Andrews": `I'm so in Love with You`,
            "Gregory Allen": `Oh City Lights`,
            "The Avett Brothers": 'Murder in the City',
            "Mandolin Orange": 'Runnin Red',
            "Simon & Garfunkel":'Song for the Asking',
            "The Head and the Heart":'Another Story',
            "Simon & Garfunkel": `Kathy's Song`,
            "The Wood Brothers": 'Postcards From Hell',
            "The Chainsmokers": 'Roses',
            "Jill Andrews":'A Way to You Again'
          },
          top_artists: {
            "Jill Andrews": `Jill Andrews`,
            "Gregory Allen": `Gregory Allen`,
            "The Avett Brothers": 'The Avett Brothers',
            "Mandolin Orange": 'Mandolin Orange',
            "Simon & Garfunkel":'Simon & Garfunkel',
            "The Head and the Heart":'The Head and the Heart',
            "Simon & Garfunkel": `Simon & Garfunkel`,
            "The Wood Brothers": 'The Wood Brothers',
            "The Chainsmokers": 'The Chainsmokers',
            "Jill Andrews":'Jill Andrews'
          },
        },
        {
          id: 4,
          name: 'Blake',
          spotify_id: 98,
          age: 30,
          gender: 'female',
          description: `When I have bad days, I just eat lots of chocolate ice cream and dance to the 'Lion King' soundtrack. It's really odd, but it's true.`,
          latitude: 38.123435,
          longitude: -123.343423,
          photo: 'https://media1.popsugar-assets.com/files/thumbor/AXQvyuxxedjd4ewC2RmftrmjqMw/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/05/12/622/n/1922153/d9b67e8d_edit_img_image_41288338_1463060612_a/i/Makeup-Light.jpg',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'male',
          match_score: 98,
          top_tracks: {
            beetles: 'hello',
            fish: 'some weird fish song',
            fake_artist: 'fake_artist greatest hits',

          },
          top_artists: {
            beetles: 'beetles',
            fish: 'fish',
            fake_artist: 'fake_artist',
          },
        },
        {
          id: 5,
          name: 'Ariana',
          spotify_id: 98,
          age: 24,
          gender: 'female',
          description: `Love is a really scary thing, and you never know what's going to happen. It's one of the most beautiful things in life, but it's one of the most terrifying. It's worth the fear because you have more knowledge, experience, you learn from people, and you have memories.
          `,
          latitude: 38.123435,
          longitude: -123.343423,
          photo: 'http://images.indianexpress.com/2015/10/arianagrande759.jpg',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'male',
          match_score: 100,
          top_tracks: {
            "Katy Perry": 'Kissed a Girl',
            fish: 'some weird fish song',
            fake_artist: 'fake_artist greatest hits',

          },
          top_artists: {
            beetles: 'beetles',
            fish: 'fish',
            fake_artist: 'fake_artist',
          },
        },
        {
          id: 6,
          name: 'Taylor',
          spotify_id: 98,
          age: 28,
          gender: 'female',
          description: `Love is a really scary thing, and you never know what's going to happen. It's one of the most beautiful things in life, but it's one of the most terrifying. It's worth the fear because you have more knowledge, experience, you learn from people, and you have memories.
          `,
          latitude: 38.123435,
          longitude: -123.343423,
          photo: 'https://i1.wp.com/celebmix.com/wp-content/uploads/2017/11/taylor-swift-releases-lyric-video-for-call-it-what-you-want-01.jpg?w=636&ssl=1',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'male',
          match_score: 40,
          top_tracks: {
            "Katy Perry": 'Kissed a Girl',
            fish: 'some weird fish song',
            fake_artist: 'fake_artist greatest hits',

          },
          top_artists: {
            beetles: 'beetles',
            fish: 'fish',
            fake_artist: 'fake_artist',
          },
        },
        {
          id: 7,
          name: 'Natalie',
          spotify_id: 98,
          age: 28,
          gender: 'female',
          description: `Love is a really scary thing, and you never know what's going to happen. It's one of the most beautiful things in life, but it's one of the most terrifying. It's worth the fear because you have more knowledge, experience, you learn from people, and you have memories.
          `,
          latitude: 38.123435,
          longitude: -123.343423,
          photo: 'https://i1.wp.com/micheltelles.atarde.com.br/wp-content/uploads/2018/02/5-60.jpg?zoom=2&fit=600%2C600',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'male',
          match_score: 61,
          top_tracks: {
            "Katy Perry": 'Kissed a Girl',
            fish: 'some weird fish song',
            fake_artist: 'fake_artist greatest hits',

          },
          top_artists: {
            beetles: 'beetles',
            fish: 'fish',
            fake_artist: 'fake_artist',
          },
        },
        {
          id: 8,
          name: 'Katy',
          spotify_id: 98,
          age: 28,
          gender: 'female',
          description: `Love is a really scary thing, and you never know what's going to happen. It's one of the most beautiful things in life, but it's one of the most terrifying. It's worth the fear because you have more knowledge, experience, you learn from people, and you have memories.
          `,
          latitude: 38.123435,
          longitude: -123.343423,
          photo: 'https://media.npr.org/assets/img/2013/10/25/photo_katyperry_300rgb_wide-a85a8d81418055dce3ddd552ba7c1cbcf4c1a19a-s1100-c15.jpg',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'male',
          match_score: 73,
          top_tracks: {
            "Katy Perry": 'Kissed a Girl',
            fish: 'some weird fish song',
            fake_artist: 'fake_artist greatest hits',

          },
          top_artists: {
            beetles: 'beetles',
            fish: 'fish',
            fake_artist: 'fake_artist',
          },
        },
        {
          id: 9,
          name: 'Emma',
          spotify_id: 98,
          age: 27,
          gender: 'female',
          description: `Love is a really scary thing, and you never know what's going to happen. It's one of the most beautiful things in life, but it's one of the most terrifying. It's worth the fear because you have more knowledge, experience, you learn from people, and you have memories.
          `,
          latitude: 38.123435,
          longitude: -123.343423,
          photo: 'https://pbs.twimg.com/profile_images/725087606522843137/VmtIbx5p_400x400.jpg',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'male',
          match_score: 82,
          top_tracks: {
            "Katy Perry": 'Kissed a Girl',
            fish: 'some weird fish song',
            fake_artist: 'fake_artist greatest hits',

          },
          top_artists: {
            beetles: 'beetles',
            fish: 'fish',
            fake_artist: 'fake_artist',
          },
          
        },
        {
          id: 10,
          name: 'Camila',
          spotify_id: 30,
          age: 21,
          gender: 'Female',
          description: `Because I'm a good girl, I tend to fall for the bad boy persona, and it ends up biting me in the butt. They end up not knowing how to treat me, and I end up completely devastated.`,
          latitude: 38.123435,
          longitude: -123.343423,
          photo: 'https://media.pitchfork.com/photos/593ed188f6f585756595afc0/1:1/w_300/ad2f17a9.png',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'female',
          match_score: 100,
          top_tracks: {
            "The Beatles": 'Hello',
            "Gregory Allen": 'Stable Song',
            "fish": 'some weird fish song',
            "Kanye West": 'Wolves',
            "The lumineers":'Sick in The Head',
            "The Head and the Heart":'Another Story',
            "Simon & Garfunkel": `Kathy's Song`,
            "The Wood Brothers": 'Postcards From Hell',
            "The Chainsmokers": 'Roses',
            "Tallest Man on Earth":'Love is All'
          },
          top_artists: {
            "The Beatles": 'The Beatles',
            "Gregory Allen": 'Stable Song',
            "fish": 'fish',
            "Kanye West": 'Kanye West',
            "The Lumineers":'The Lumineers',
            "The Head and the Heart":'The Head and the Heart',
            "Simon & Garfunkel": `Simon & Garfunkel`,
            "The Wood Brothers": 'The Wood Brothers',
            "The Chainsmokers": 'The Chainsmokers',
            "Tallest Man on Earth":'Tallest Man on Earth'
          },
          is_initialized: true
        },
        {
          id: 11,
          name: 'Sophia',
          spotify_id: 98,
          age: 24,
          gender: 'Female',
          description: `I think the sexiest thing on anybody is intelligence. I respect somebody who has a brain and wants to use it more than a pretty face and status. Marriage is not about age; it's about finding the right person. I've always been the long-term relationship, go-home-and-meet-mom girl.`,
          latitude: 38.123435,
          longitude: -123.343423,
          photo: 'https://i.pinimg.com/474x/19/05/9a/19059a24d4c28b6a0f9bdbe7dfd6dcd4.jpg',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'male',
          match_score: 56,
          top_tracks: {
            "Jill Andrews": `I'm so in Love with You`,
            "Gregory Allen": `Oh City Lights`,
            "The Avett Brothers": 'Murder in the City',
            "Mandolin Orange": 'Runnin Red',
            "Simon & Garfunkel":'Song for the Asking',
            "The Head and the Heart":'Another Story',
            "Simon & Garfunkel": `Kathy's Song`,
            "The Wood Brothers": 'Postcards From Hell',
            "The Chainsmokers": 'Roses',
            "Jill Andrews":'A Way to You Again'
          },
          top_artists: {
            "Jill Andrews": `Jill Andrews`,
            "Gregory Allen": `Gregory Allen`,
            "The Avett Brothers": 'The Avett Brothers',
            "Mandolin Orange": 'Mandolin Orange',
            "Simon & Garfunkel":'Simon & Garfunkel',
            "The Head and the Heart":'The Head and the Heart',
            "Simon & Garfunkel": `Simon & Garfunkel`,
            "The Wood Brothers": 'The Wood Brothers',
            "The Chainsmokers": 'The Chainsmokers',
            "Jill Andrews":'Jill Andrews'
          },
        },
        {
          id: 12,
          name: 'Emma',
          spotify_id: 38,
          age: 29,
          gender: 'Female',
          description: `I just live my life how I live as a person. I certainly am not, like, a saint or an angel by any means. I'm not anything like that. But I live just how I live. I mean, I have a little paranoia, but that's about it.`,
          latitude: 38.123435,
          longitude: -123.343423,
          photo: 'https://pbs.twimg.com/profile_images/848009415206858752/cDMhhlfF_400x400.jpg',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'male',
          match_score: 89,
          top_tracks: {
            "Jill Andrews": `I'm so in Love with You`,
            "Gregory Allen": `Oh City Lights`,
            "The Avett Brothers": 'Murder in the City',
            "Mandolin Orange": 'Runnin Red',
            "Simon & Garfunkel":'Song for the Asking',
            "The Head and the Heart":'Another Story',
            "Simon & Garfunkel": `Kathy's Song`,
            "The Wood Brothers": 'Postcards From Hell',
            "The Chainsmokers": 'Roses',
            "Jill Andrews":'A Way to You Again'
          },
          top_artists: {
            "Jill Andrews": `Jill Andrews`,
            "Gregory Allen": `Gregory Allen`,
            "The Avett Brothers": 'The Avett Brothers',
            "Mandolin Orange": 'Mandolin Orange',
            "Simon & Garfunkel":'Simon & Garfunkel',
            "The Head and the Heart":'The Head and the Heart',
            "Simon & Garfunkel": `Simon & Garfunkel`,
            "The Wood Brothers": 'The Wood Brothers',
            "The Chainsmokers": 'The Chainsmokers',
            "Jill Andrews":'Jill Andrews'
          },
        },
        {
          id: 13,
          name: 'Blake',
          spotify_id: 98,
          age: 30,
          gender: 'female',
          description: `When I have bad days, I just eat lots of chocolate ice cream and dance to the 'Lion King' soundtrack. It's really odd, but it's true.`,
          latitude: 38.123435,
          longitude: -123.343423,
          photo: 'https://media1.popsugar-assets.com/files/thumbor/AXQvyuxxedjd4ewC2RmftrmjqMw/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/05/12/622/n/1922153/d9b67e8d_edit_img_image_41288338_1463060612_a/i/Makeup-Light.jpg',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'male',
          match_score: 98,
          top_tracks: {
            beetles: 'hello',
            fish: 'some weird fish song',
            fake_artist: 'fake_artist greatest hits',

          },
          top_artists: {
            beetles: 'beetles',
            fish: 'fish',
            fake_artist: 'fake_artist',
          },
        },
        {
          id: 14,
          name: 'Ariana',
          spotify_id: 98,
          age: 24,
          gender: 'female',
          description: `Love is a really scary thing, and you never know what's going to happen. It's one of the most beautiful things in life, but it's one of the most terrifying. It's worth the fear because you have more knowledge, experience, you learn from people, and you have memories.
          `,
          latitude: 38.123435,
          longitude: -123.343423,
          photo: 'http://images.indianexpress.com/2015/10/arianagrande759.jpg',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'male',
          match_score: 100,
          top_tracks: {
            "Katy Perry": 'Kissed a Girl',
            fish: 'some weird fish song',
            fake_artist: 'fake_artist greatest hits',

          },
          top_artists: {
            beetles: 'beetles',
            fish: 'fish',
            fake_artist: 'fake_artist',
          },
        },
        {
          id: 15,
          name: 'Taylor',
          spotify_id: 98,
          age: 28,
          gender: 'female',
          description: `Love is a really scary thing, and you never know what's going to  happen. It's one of the most beautiful things in life, but it's one of the most terrifying. It's worth the fear because you have more knowledge, experience, you learn from people, and you have memories.
          `,
          latitude: 38.123435,
          longitude: -123.343423,
          photo: 'https://i1.wp.com/celebmix.com/wp-content/uploads/2017/11/taylor-swift-releases-lyric-video-for-call-it-what-you-want-01.jpg?w=636&ssl=1',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'male',
          match_score: 40,
          top_tracks: {
            "Katy Perry": 'Kissed a Girl',
            fish: 'some weird fish song',
            fake_artist: 'fake_artist greatest hits',

          },
          top_artists: {
            beetles: 'beetles',
            fish: 'fish',
            fake_artist: 'fake_artist',
          },
        },
        {
          id: 16,
          name: 'Natalie',
          spotify_id: 98,
          age: 28,
          gender: 'female',
          description: `Love is a really scary thing, and you never know what's going to happen. It's one of the most beautiful things in life, but it's one of the most terrifying. It's worth the fear because you have more knowledge, experience, you learn from people, and you have memories.
          `,
          latitude: 38.123435,
          longitude: -123.343423,
          photo: 'https://i1.wp.com/micheltelles.atarde.com.br/wp-content/uploads/2018/02/5-60.jpg?zoom=2&fit=600%2C600',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'male',
          match_score: 61,
          top_tracks: {
            "Katy Perry": 'Kissed a Girl',
            fish: 'some weird fish song',
            fake_artist: 'fake_artist greatest hits',

          },
          top_artists: {
            beetles: 'beetles',
            fish: 'fish',
            fake_artist: 'fake_artist',
          },
        },
        {
          id: 17,
          name: 'Katy',
          spotify_id: 98,
          age: 28,
          gender: 'female',
          description: `Love is a really scary thing, and you never know what's going to happen. It's one of the most beautiful things in life, but it's one of the most terrifying. It's worth the fear because you have more knowledge, experience, you learn from people, and you have memories.
          `,
          latitude: 38.123435,
          longitude: -123.343423,
          photo: 'https://media.npr.org/assets/img/2013/10/25/photo_katyperry_300rgb_wide-a85a8d81418055dce3ddd552ba7c1cbcf4c1a19a-s1100-c15.jpg',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'male',
          match_score: 73,
          top_tracks: {
            "Katy Perry": 'Kissed a Girl',
            fish: 'some weird fish song',
            fake_artist: 'fake_artist greatest hits',

          },
          top_artists: {
            beetles: 'beetles',
            fish: 'fish',
            fake_artist: 'fake_artist',
          },
        },
        {
          id: 18,
          name: 'Emma',
          spotify_id: 98,
          age: 27,
          gender: 'female',
          description: `Love is a really scary thing, and you never know what's going to happen. It's one of the most beautiful things in life, but it's one of the most terrifying. It's worth the fear because you have more knowledge, experience, you learn from people, and you have memories.
          `,
          latitude: 38.123435,
          longitude: -123.343423,
          photo: 'https://pbs.twimg.com/profile_images/725087606522843137/VmtIbx5p_400x400.jpg',
          age_range: '20-30',
          radius: 30,
          desired_gender: 'male',
          match_score: 82,
          top_tracks: {
            "Katy Perry": 'Kissed a Girl',
            fish: 'some weird fish song',
            fake_artist: 'fake_artist greatest hits',

          },
          top_artists: {
            beetles: 'beetles',
            fish: 'fish',
            fake_artist: 'fake_artist',
          },
          
        },
      ]);
    });
};
