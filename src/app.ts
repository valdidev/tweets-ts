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


