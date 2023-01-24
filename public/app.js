"use strict";
function createMainTweet() {
    const id = crypto.randomUUID();
    const tweet = createTweet();
    return {
        id,
        tweets: [tweet],
    };
}
function createTweet() {
    const id = crypto.randomUUID();
    const message = "";
    return {
        id,
        message,
    };
}
function renderView(tweetView) {
    var _a;
    let view = document.querySelector("#container-" + tweetView.id);
    if (view) {
        view.innerHTML = "";
    }
    else {
        view = document.createElement("div");
        view.id = "container-" + tweetView.id;
        view.classList.add("mainContainer");
        (_a = document.querySelector("#tweets")) === null || _a === void 0 ? void 0 : _a.append(view);
    }
    for (const tweet of tweetView.tweets) {
        //renderTweet
    }
}
function renderTweet(tweetView, view, tweet, last) {
    const tweetContainer = document.createElement("div");
    tweetContainer.id = "container-" + tweet.id;
    tweetContainer.classList.add("tweetContainer");
    const form = document.createElement("form");
    form.id = "form-" + tweet.id;
    tweetContainer.appendChild(form);
    const textarea = document.createElement("textarea");
    textarea.id = "textarea-" + tweet.id;
    textarea.value = tweet.message;
    textarea.maxLength = 250;
    const buttonAddMore = document.createElement("button");
    buttonAddMore.classList.add("button", "buttonNew");
    buttonAddMore.value = "Add another tweet";
    buttonAddMore.append(document.createTextNode("Add another tweet"));
    const countContainer = document.createElement("div");
    countContainer.classList.add("countContainer");
    if (last) {
        form.appendChild(buttonAddMore);
    }
    view.appendChild(tweetContainer);
}
