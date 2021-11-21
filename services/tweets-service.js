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
            "userName": "Yshtola FFXIV",
            "verified": false,
            "handle": "ysthola_FFXIV",
            "time": "2h",
            "avatar-image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/554802fe-c63a-43b8-b1ce-903ae6324422/dbnmc4m-256b4a52-9bd2-4032-92ce-949bf515e4e8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1NDgwMmZlLWM2M2EtNDNiOC1iMWNlLTkwM2FlNjMyNDQyMlwvZGJubWM0bS0yNTZiNGE1Mi05YmQyLTQwMzItOTJjZS05NDliZjUxNWU0ZTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gfN3L8GduHKxD7BoxI7e8HYDwtcVtf3CLp-P_a7Z-SY",
            "logo-image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/554802fe-c63a-43b8-b1ce-903ae6324422/dbnmc4m-256b4a52-9bd2-4032-92ce-949bf515e4e8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1NDgwMmZlLWM2M2EtNDNiOC1iMWNlLTkwM2FlNjMyNDQyMlwvZGJubWM0bS0yNTZiNGE1Mi05YmQyLTQwMzItOTJjZS05NDliZjUxNWU0ZTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gfN3L8GduHKxD7BoxI7e8HYDwtcVtf3CLp-P_a7Z-SY",
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
