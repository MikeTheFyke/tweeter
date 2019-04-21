Tweeter Project	: A single page app built with HTML, CSS, JS, JQuery and AJAX on the client-side and with Node, Express and MongoDB on the server-side.

#Tweeter is a single page twitter clone. 

Functional Requirements
- Primarily a client-side Single Page App (SPA)
- The client-side app communicates with server via AJAX
- Tweets are persisted to MongoDB and survive server restart

Display & Behaviour Requirements

- Navigation Bar
  -> is fixed to the top
  -> has padding on both sides
  -> contains compose button
  -> When a user clicks the Compose button in the navigation bar:
      - if the compose tweet box is currently hidden, then it is shown and the textarea
        inside it is auto focused.
      - if the compose tweet box is currently showing, then it is hidden
      - in either case, transitions between chown and hidden states should be hidden

- Compose Tweet Box
  -> is displayed above list of tweets
  -> is hidden on page load
  -> contains a form for submitting tweets, which itself contains:
      - a textarea for new tweet content
      - a left-aligned button for submitting new tweets
  -> contains a character counter, right aligned which by default shows 140
      - when a user types into the compose tweet textarea, the counter is updated to show how
        many characters a user may still type.
      - the character counter turns red when more than 140 characters have been typed into the 
        compose tweet textarea and it shows how many characters obver the 140 limit have been typed.
  -> when a user submits an invalid tweet (textarea is empty or contains more than 140 characters),
        an appropriate error message is displayed.
  -> when a user submits a valid tweet, the list of tweets is refreshed displaying the new tweet.
  
- Lists of Tweets
  -> Displays tweets in reverse-chronological order, by creation time descending

- Individual Tweets
  -> Have a header, which contains ...
    - avatar on the left
    - name, on the left and after the avatar
    - handle, on the right
  -> Have a body, which contains the tweet text
  -> have a footer, which displays ...
    - how long ago the tweet was created, on the left
    - "Flag", "Re-tweet" and "Like" icons upon hoveing over the tweet, on the right
  



Dependencies include
- body-parser
- chance
- express
- mongodb

This project uses port 8080 http://localhost:8080/
