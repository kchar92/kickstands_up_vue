<template>

   <div id="app">
    <header id="header" class="alt">
          <h1 id="logo"><a href="/login">KickstandsUp</a></h1>
          <nav id="nav">
            <ul>
              <li><a href="/rides?attending=true">My Rides</a></li>
              <li><a href="/rides?attending=false">Rides</a></li>
              <li><a href="/rides/new">Create A Ride</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/logout">Logout</a></li>
              <!-- <li class="submenu">
                <a href="/login">Login</a>
                <ul>
                  <li><a href="/logout">Logout</a></li>
                </ul>
              </li> -->
              <li><a href="/signup" class="button primary">Sign Up</a></li>
            </ul>
          </nav>
        </header>
    <router-view/>
  </div>
</template>

<style>

</style>