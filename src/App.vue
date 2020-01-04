<template>
  <div id="app">
    <div class="container">

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand">KickstandsUp</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Get Started
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/rides?attending=true">My Rides</a>
                <a class="dropdown-item" href="/rides?attending=false">Rides</a>
                <a class="dropdown-item" href="/rides/new">Create Ride</a>
              </div>
            </li>
      
          </ul>
          <li class="navbar-nav ml-auto">
            <a class="nav-link" href="/signup">Sign Up</a>
            <a class="nav-link" href="/login">Login</a>
            <a class="nav-link" href="/logout">Logout</a>    
          </li>
        </div>
      </nav>
      <router-view/>
    </div>
  </div>
</template>

<style>

/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>