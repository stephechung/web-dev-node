let tweets = require('../data/tweets.json');

module.exports = (app) => {
    const findAllTweets = (req, res) => {
        res.json(tweets);
    }

    app.get('/api/tweets', findAllTweets);

    const createTweet = (req, res) => {
        const newTweet ={
            _id: (new Date()).getTime() + '',
            "topic": "Web Development",
            "userName": "giuseppe",
            "verified": false,
            "handle": "giuseppe",
            "time": "2h",
            "avatar-image": "https://www.pngitem.com/pimgs/m/206-2067317_pensive-cowboy-emoji-transparent-hd-png-download.png",
            "logo-image": "https://www.pngitem.com/pimgs/m/206-2067317_pensive-cowboy-emoji-transparent-hd-png-download.png",
            "stats": {
                "comments": 0,
                "retweets": 0,
                "likes": 0
            },
            ...req.body,
        }
        newTweet['_id'] = (new Date()).getTime().toString();
        tweets = [
            newTweet,
            ...tweets
        ];
        res.json(newTweet);
    }

    app.post('/api/tweets', createTweet);

    const deleteTweet = (req, res) => {
        console.log(req.params)
        tweets = tweets.filter(tweet => tweet._id !== req.params['id']);
        res.sendStatus(200);
    }
    app.delete('/api/tweets/:id', deleteTweet);

    const likeTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.map(tweet => {
            if (tweet._id === id) {
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.stats.likes--;
                } else {
                    tweet.liked = true;
                    tweet.stats.likes++;
                }
                return tweet;
            } else {
                return tweet;
            }
        });
        res.sendStatus(200);
    }
    app.put('/api/tweets/:id/like', likeTweet);
};
