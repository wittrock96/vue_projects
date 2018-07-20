<template>
	<div id="create">
		<form v-on:submit="createEvent">
	  		<input type="text" v-model="newEvent.heading">
	  		<br/>

	  		<input type="text" v-model="newEvent.location">
	  		<br/>

	  		<input type="submit" value="submit">
	  	  
	  	</form>
	</div>
	
</template>


<script>

export default {
	data(){
		return{
			newEvent: {}
		}
	}

		
}
</script>

<style>

#create{
	text-align: center;
	background-color: red;
}
</style>



