<template>
  <div id="topnav" class="container-fluid topnav">
    <div class="header row">
      <div id="topmenu" class="menu">
        <ul>
          <li>
            <router-link to="/">
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/cv">
              CV
            </router-link>
          </li>
          <li>
            <a href="https://www.errietta.me/blog" target="_blank">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  color: #FFF9FD;
  text-align: center;
  font-size: 20pt
}

.topnav {
  position: -moz-sticky;
  position: -webkit-sticky;
  position: -o-sticky;
  position: -ms-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #FFF7F5;
  opacity: .8;
  width: 100%;
  padding: 15px 0;
}

.menu {
  font-size: 14pt;
  text-transform: uppercase;
  width: 100%;
}

.menu ul {
  list-style-type: none;
  margin: 0;
}

.menu ul li {
  display: inline;
  border-right: 1px solid #786D87;
  padding-right: 5px;
}

.menu ul li:last-child {
  border: 0
}

.menu ul li a {
  color: #C13832
}

.menu ul li a.nuxt-link-exact-active {
  color: #95368C;
  font-weight: 700;
}

</style>
