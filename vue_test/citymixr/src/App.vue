<template>
  <div id="app">
    <div id="header">
      <div id="titleHeader">

        <div id="title">
          DBR
        </div>
        
        <ul id="navbar">
          <li>
            <b-dropdown variant="link" size="lg" class="icons" no-caret>
              <template slot="button-content">
                &#x1F30E;<span class="sr-only">Search</span>
              </template>
              <b-dropdown-item >
                <div id="not1">
                  <div id="not1header">
                    &#x2316;<span class="sr-only" id="location">Search</span>
                    <span id="name">David Nester</span>
                    &#x2304;<span class="sr-only" id="arrow">Search</span>
                    <span id="time">A few seconds ago</span>

                  </div>
                  <div id="not1body">
                    In recent news, I have just discovered how to build this<br/>
                    little dropdown menu, without an anchor tag
                  </div>
                </div>
              </b-dropdown-item>
              <b-dropdown-item >
                2
              </b-dropdown-item>
              <b-dropdown-item >
                3
              </b-dropdown-item>
            </b-dropdown>
          </li>
          <li>
            <b-dropdown variant="link" size="lg" id="requests" class="icons" no-caret>
              <template slot="button-content">
                &#x1F465;<span class="sr-only">Search</span>             
              </template>
              <b-dropdown-item v-for="user in users">
                {{ user.first_name }} {{ user.last_name }}
                would to like to be friends
                <button>accept</button>
                <button>deny</button>
              </b-dropdown-item>
             
            </b-dropdown>
          </li>
        </ul>
      </div>
      <div id="userHeader">
        <button id="userbutton">Click Me</button>
        <b-dropdown id="user" text="Cole Wittrock">
          <b-dropdown-item>
            My Profile
          </b-dropdown-item>
          <b-dropdown-item>
            settings
          </b-dropdown-item>
          <b-dropdown-item>
            Feedback
          </b-dropdown-item>
           <b-dropdown-item>
            Help
          </b-dropdown-item>
           <b-dropdown-item>
            Upgrade
          </b-dropdown-item>
           <b-dropdown-item>
            Apply Biz
          </b-dropdown-item>
           <b-dropdown-item>
            Apply Gig
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <div id="routes">
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/about">
        About
      </router-link>
      <router-link to="/create">
        create event
      </router-link>
    </div>
    <div id="router">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
  export default{
    data(){
      return {
        users: [
          { first_name: 'Bill', last_name: 'Gates'},
          { first_name: 'Elon', last_name: 'Musk'},
          { first_name: 'Steve', last_name: 'Jobs'},
          { first_name: 'Tony', last_name: 'stark'}
        ],
        signed_in: {
          first_name: 'Cole', last_name:'Wittrock'
        }
      } 
    }

  }
</script>
<style>
#app {
  text-align: center;
  width: 100%;
  height: 100pc;
  background: linear-gradient(#0d0d0d, #313131);
}
#router{
  width: 100px;
  display: inline;
}
#header{
  background: linear-gradient(to right, #c244fa, #5c59d7); 
  width: 100%;
  height: 50px;
}
#navbar{
  list-style-type: none;
  padding: 0px;
  margin-left: 150px;
  
}
.icons{
  border-radius: 10px;
  background: transparent;
  border: transparent;
}
#navbar li{
  display: inline;

}

#titleHeader{
  display: inline-block;
  width: 30%;
  height: 100%;
  float: left;
  margin-left: 60px;
}
#title{
  float: left;
  padding: 8px;
  margin-top: 3.5px;
  background-color: black;
  color: white;
  font-family: "Courier New", Courier, monospace;
  border-radius: 15px;

}
#not1{
  width: 370px;
}
#name{
  margin-left: 20px;
  margin-right: 75px;
}
#time{
  margin-left: 25px;
}
#not1body{
  width: 350px;
}
#requests button{
  background: transparent;
  border: transparent;
}
#userHeader{
  width: 35%;
  height: 100%;
  display: inline;
  padding-top: 10px;
  color: white;
  float: right;
  text-align: center;
}

#userHeader button{
  float: left;
}
#routes{
  float: left;
  width: 90px;
  height: 100%;

  background-color: #2d2d32;
}



</style>
