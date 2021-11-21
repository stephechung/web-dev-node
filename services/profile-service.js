let profiles = require('../data/profile.json');

module.exports = (app) => {
    
    const getCurrentProfile = (req, res) => {
        res.json(profiles);
    }

    app.get('/api/profile', getCurrentProfile);

    const updateProfile = (req, res) => {
        profiles = profiles.map(profile => {
            if (profile.firstName === "Y'shtola") {

                const updatedProfile ={
                    ...req.body,
                }
                console.log(updatedProfile)
                return updatedProfile;

            }
        })
        res.sendStatus(200)

    } 
    app.put('/api/profile', updateProfile);

};