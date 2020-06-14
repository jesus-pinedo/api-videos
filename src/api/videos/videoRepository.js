const data = [
	{	
		id:0,
		title:'¿Qué es CodelyTV? 🍄🔝 - Formación para programadores y divulgación del mundo del desarrollo',
		url:'https://www.youtube.com/watch?v=rpMQd2DazTc',
		embed:'https://www.youtube.com/embed/rpMQd2DazTc',
		thumbnail:'https://img.youtube.com/vi/rpMQd2DazTc/maxresdefault.jpg',
	},
	{ 	
		id:1,
		title:'Introducción a PHP: Cómo configurar tu entorno de desarrollo 🐘',
		url: 'https://www.youtube.com/embed/watch?v=v2IjMrpZog4',
		embed: 'https://www.youtube.com/embed/v2IjMrpZog4',
		thumbnail: 'https://img.youtube.com/vi/v2IjMrpZog4/maxresdefault.jpg',
	},
	{ 
		id:2,
		title:'Comunicación entre microservicios: 🕋 Event-Driven Architecture',
		url: 'https://www.youtube.com/watch?v=V4mjxJ5czog',
		embed: 'https://www.youtube.com/embed/V4mjxJ5czog',
		thumbnail: 'https://img.youtube.com/vi/V4mjxJ5czog/maxresdefault.jpg',
	},
	{ 	
		id:3,
		title:'🤔 Cuándo usar #interfaces… y cuándo EVITARLAS',
		url: 'https://www.youtube.com/watch?v=uP1CoHtjALg',
		embed: 'https://www.youtube.com/embed/uP1CoHtjALg',
		thumbnail: 'https://img.youtube.com/vi/uP1CoHtjALg/maxresdefault.jpg',
	},
	{ 
		id:4,
		title:'Qué es la "Composición sobre herencia" 👨‍👩‍👧‍👦🚔 (#CompositionOverInheritance)',
		url: 'https://www.youtube.com/watch?v=OyTPDFyGWRc',
		embed: 'https://www.youtube.com/embed/OyTPDFyGWRc',
		thumbnail: 'https://img.youtube.com/vi/OyTPDFyGWRc/maxresdefault.jpg',
	},
	{ 
		id:5,
		title:'ReactJS vs VueJS vs Angular 6 ⚡️| 1/5 Qué aporta un framework y qué es un componente',
		url: 'https://www.youtube.com/watch?v=lttZCIin4HM',
		embed: 'https://www.youtube.com/embed/lttZCIin4HM',
		thumbnail: 'https://img.youtube.com/vi/lttZCIin4HM/maxresdefault.jpg',
	}
]; 


exports.getVideos = () =>{
	return data
}

exports.addVideo = (newVideo) => new Promise((resolve, reject) => {	
	setTimeout(() => { 
		newVideo.id = FAKE_DATA.length + 1;
		FAKE_DATA.push(newVideo);
		return resolve({ok:1});
	},FAKE_DELAY);
});
 
exports.getVideo = (idVideo)  => {	
		const video = data.find((el) => parseInt(el.id) === parseInt(idVideo));
		console.log("Video Found",!video)
		if(!video) {
			console.log("Video not Found",video)
			return {message:"No se ha encontrado el video"}
		}

		if(video) return video;
}

