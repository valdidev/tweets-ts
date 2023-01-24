type Message = string;
type Title = string;
type Id = string;

interface Tweet {
  id: Id;
  message: Message;
}

interface TweetView {
  id: Id;
  tweets: Tweet[];
}

function createMainTweet(): TweetView {
  const id = crypto.randomUUID();
  const tweet = createTweet();

  return {
    id,
    tweets: [tweet],
  };
}

function createTweet(): Tweet {
  const id = crypto.randomUUID();
  const message = "";

  return {
    id,
    message,
  };
}

function renderView(tweetView: TweetView) {
  let view = document.querySelector("#container-" + tweetView.id);

  if (view) {
    view.innerHTML = "";
  } else {
    view = document.createElement("div");
    view.id = "container-" + tweetView.id;
    view.classList.add("mainContainer");
    document.querySelector("#tweets")?.append(view);
  }

  for (const tweet of tweetView.tweets) {
    //renderTweet
  }
}
