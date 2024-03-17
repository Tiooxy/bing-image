const axios = require('axios')

async function igstalk(query) {
			return new Promise((resolve, reject) => {
				try {
	    const {
            data
        } = await axios.get(`https://instasupersave.com/api/ig/userInfoByUsername/mrbeast`);
        const result = {
username: res.username 
fullname: res.full_name 
post_count: res.media_count 
followers: res.follower_count 
following: res.following_count
verifed: res.is_verified
private: res.is_private
external_url: res.external_url 
biography: res.biography 
}
					resolve(result)
				} catch (e) {
					reject(e)
				}
			})
		}
		
exports.igstalk = igstalk
