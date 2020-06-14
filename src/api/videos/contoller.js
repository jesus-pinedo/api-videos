const videoRepostiroy = require('./videoRepository')

exports.getVideos = () => {
const videos = videoRepostiroy.getVideos()
	return videos
}

exports.getVideo = (id) => {
	const videos = videoRepostiroy.getVideo(id)
		return videos
	}