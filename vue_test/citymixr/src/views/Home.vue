<template>
  <div class="home">
  	<h1>welcome to the page</h1>
  
  	<div id="events" v-for="event in events">
  		<p>
	  		<h5>title: {{event.title}}</h5>
	  		<h5>location: {{event.location}}</h5>
	  		<img :src="event.url">
	  	</p>

  	</div>
  </div>
</template>

<script>



export default {
  data(){
		return {
			events: [
				{title: 'Interview', location: 'Dallas', url:"http://res.cloudinary.com/culturemap-com/image/upload/q_auto/ar_4:3,c_fill,g_faces:center,w_1200/v1508855968/photos/263214_original.jpg"},
				{title: 'Gold Rush Rally', location: 'Boston', url:"https://www.revvolution.com/image/albums-1-61y-s4-gv-b8/join-us-for-the-ride-of-your-life-goldrush-rally-gr8est-ndash-2016-boston-washington-d-c-charlotte-nashville-colorado-springs--140056.jpeg"},
				{title: 'Rally Finale', location: 'L.A.', url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfMp1XM29pcfOSped0aY57AqQK2v5ykK35maRowesDq2JeCzBb"},
				{title: 'Horizon Festival', location: 'Denver', url:"http://compass.xboxlive.com/assets/21/a4/21a42f0a-a156-4d27-a3d7-50c92209ff94.jpg?n=horizon_features_1.jpg"},
				{title: 'Learn to Code', location: 'Dallas', url: "http://res.cloudinary.com/culturemap-com/image/upload/q_auto/ar_4:3,c_fill,g_faces:center,w_1200/v1508855968/photos/263214_original.jpg"},
				{title: 'Tech Talk', location: 'Irving', url:"https://odis.homeaway.com/odis/destination/3715d519-3359-4110-8156-0c2a5e6ce7e0.hw1.jpg"},
				{title: 'Car Show', location: 'Geneva', url:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/IntAutoSalonGenf08.JPG/300px-IntAutoSalonGenf08.JPG"},
				{title: 'Hiking', location: 'rockwall', url:"https://ap.rdcpix.com/897337174/b5fcbf25e315b85d500e8887cd0b3bb8l-m0xd-w640_h480_q80.jpg"},
				{title: 'Drinking', location: 'Dallas', url:"https://static1.squarespace.com/static/5a7b2e44ace864cccb7ec064/t/5a8cb482ec212dd66fbf90fc/1519170701115/D-Magazine-Nightlife-Cidercade-051317-Bret-Redman-054-677x452.jpg"}			
			]
		}
	}
}
</script>

<style>
.home{
	background-color: gray;
}
.title{
	color: blue;
}

#events p{
	
}
#events img{
	height: 200px;
	width: 400px;
}

</style>
