# Dumbnail: The Ultimate Memeshot Maker

I created the site to be a one-stop-shop for creating _memeshots_ -- a meme in the version of a screenshot.

As of now it has YouTube thumbnails, tweets, Instagram posts, iMessage, and ChatGPT conversations. My goal is for Dumbnail to be an open-source social media with feeds, user auth, etc, all dedicated to the art of the meme.

<img src="https://user-images.githubusercontent.com/92326059/233871356-8b4b6480-19c7-478d-a2e0-f643455da28b.png" align="left" width="350px" >

## For Starters

What makes Dumbnail unique is that it has these interesting type of memes all in one place instead of scattered about the internet.

Plus, I think I was the first (not sure if it has since been copied) to create fake thumbnails or ChatGPT convos; for ChatGPT I had it up within the week of its release.

There are many other possible additions as well, almost too much to count. But what's cool is that they all fall into only a few catergories of memes:

1. Social Media Content:
   - Thumbnails
   - Tweets
   - Posts (Insta, Reddit, LinkedIn, etc.)
2. Messaging:
   - DMs
   - iMessage
   - Facebook Messenger
   - WhatsApp
3. Legacy Memes:
   - Distracted Boyfriend
   - Change My Mind
   - Exit 12
4. Unique Content:
   - DraftKings lineups
   - Genius lyric cards
   - Stock Portfolios

## Thoughts

People post memes to every social media, but most of them (if not all) aren't created there. Why not cut out the middle man? Make Dumbnail the hub for memes. _Memehub_...?

<img src="https://user-images.githubusercontent.com/92326059/233871700-1d1271e7-98a1-49f6-a7d0-0c2cb07b3fcf.png" align="right" width="325px" >

My coding isn't the best (the site is running at https://dumbnail.com on a DO server and I'm slowly realizing I'm out of my league. _should I use GH pages instead since it's free?_

I've done a lot of the grunt work, scaffolding and designing the basics, while also providing the vision, but now I want others to contribute to the project as well. To fix bugs, make sure it can scale, add features, etc. Don't get me wrong, I'm still gonna work on it, I just don't think I can accomplish all I want to do by myself.

Lastly, as someone who loves the art of the meme, but who also doesn't like the idea of fake screenshots spreading misinformation, I would want some way for users to check if an image was created on Dumbnail after the fact. Maybe uploading the file to check it for similiar memes created and stored in our (future) backend.

## Why Open Source?
The thing about the meme business, especially this kind, is that the actual sites change constantly; updates, design changes, profile changes, etc. Dumbnail would need to stay up to date so that the memes would be as accurate as possible (a cool feature I wanted was to keep different versions of apps [old twitter v. new twitter]). 

These potentially continuous changes and updates will be more than I can handle, I assume.

## Features

Here are some features I want to add that I think will help beef up and legitamize the site.

- User auth, in-app messaging, friends, a network, etc.
- A feed where users can post memes they've created or like and comment on others' posts, etc.
- A whole bunch of templates (constantly growing) for users to create their memes. I'll leave a list of potential templates at the bottom, but feel free to create your own.

**BONUS:** I also think it would be cool if the example memes on the home page were newly generated on each refresh through a combination of AI to write simple text and a function to determine numbers/amount of messages, etc.

**BONUS #2**: I also think someting interesting is creating user objects for dumbnail, meaning, Elon Musk has had multiple profile images. These would all be stored in an Elon object so the most accurate memes can be made (ex: spoofing an older tweet).

## Bugs

<img src="https://user-images.githubusercontent.com/92326059/233872109-e6cdd629-6cfc-4230-897a-0072072027eb.png" align="left" width="350px" >

The only big bug right now is that downloading a screenshot doesn't work on Safari. It's something to do with the package I'm using. I filled out an issue here https://github.com/bubkoo/html-to-image/issues/348 but no one has figured out how to fix it, or, if they have, I can't figure out how to implement it.

Of course there are probably many more bugs and, much like their namesake, are probably well hidden within my code. This being the case, the site does reasonably well.

## Contributing

I'm new to open source, but I assume anyone familiar knows how to help and will know how to contribute. I assume just make a pull request?

## Templates

#### Social Media Content

- YouTube thumbnail, posts (both feed view and detail view, with including comments as an option)
- Tweets, Twitter trending, threads (there's a lot here)
- Instagram posts, stories
- Reddit posts
- LinkedIn posts
- Tinder bio
- Spotify song, playlist

#### Messaging

- iMessage (groups and DMs)
- WhatsApp (groups and DMs)
- Tinder
- ChatGPT
- Instagram DMs
- Slack
- Reddit
- UberEats, Uber, Lyft, and similiar delivery-style apps
- Xbox live

#### Legacy Memes

- Distracted Boyfriend
- Change My Mind
- Exit 12
- Basic meme creator, with lettering, etc.

#### Unique Content

- DraftKings, Fanduel parlays and DFS
- Wordle
- Yugeeoh cards
- Yearbook photos
- Billboards
- FaceTime
- Google, Bing search results
