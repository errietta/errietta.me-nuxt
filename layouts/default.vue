<template>
  <div id="app">
    <div class="wrap">
      <app-nav />
      <section class="content">
        <router-view />
        <app-footer />
      </section>
    </div>
  </div>
</template>

<script>
import NavComponent from '../components/Nav.vue'
import FooterComponent from '../components/Footer.vue'

export default {
  components: {
    'app-nav': NavComponent,
    'app-footer': FooterComponent
  }
}
</script>

<style>
html {
  font-display: swap;
}
#app {
  font-family: 'Fira Sans', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0;
  font-size: large;
  background: linear-gradient(to bottom,rgba(255,117,206,1) 0,rgba(251,166,225,1) 46%,rgba(255,255,255,1) 100%) fixed;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff75ce', endColorstr='#ffffff', GradientType=0)
}

.center {
  text-align: center
}

a {
  color: #7D2C29;
  text-decoration: none
}

.underline {
  text-decoration: underline;
}

.wrap {
  max-width: 1200px;
  padding: 0 30px 00px;
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (max-device-width: 900px) {
  .wrap {
    padding: 0;
  }
}


body {
  margin: 0;
}

blockquote p {
  margin: 0 0 15px
}

blockquote {
  background: #FFEAFD;
  border-left: 10px solid #FFA3F5;
  margin: 1.5em 10px;
  padding: .5em 10px;
  quotes: "\201C""\201C""\201C""\201C"
}

blockquote:before {
  color: #FFA3F5;
  content: open-quote;
  font-size: 4em;
  line-height: .1em;
  margin-right: .25em;
  vertical-align: -.4em
}

blockquote p {
  display: inline
}

blockquote {
  font-size: 17.5px
}

blockquote ol:last-child,blockquote p:last-child,blockquote ul:last-child {
  margin-bottom: 0
}

blockquote .small,blockquote footer,blockquote small {
  display: block;
  font-size: 80%;
  line-height: 1.42857143;
  color: #999
}

blockquote .small:before,blockquote footer:before,blockquote small:before {
  content: '\2014 \00A0'
}

.blockquote-reverse,blockquote.pull-right {
  padding-right: 15px;
  padding-left: 0;
  border-right: 5px solid #eee;
  border-left: 0;
  text-align: right
}

.blockquote-reverse .small:before,.blockquote-reverse footer:before,.blockquote-reverse small:before,blockquote.pull-right .small:before,blockquote.pull-right footer:before,blockquote.pull-right small:before {
  content: ''
}

.blockquote-reverse .small:after,.blockquote-reverse footer:after,.blockquote-reverse small:after,blockquote.pull-right .small:after,blockquote.pull-right footer:after,blockquote.pull-right small:after {
  content: '\00A0 \2014'
}

.content,footer {
  background-color: #fff;
  padding: 10px
}

.cursive {
  font-family: 'Indie Flower',cursive
}

.nomargin {
  margin: 0 !important;
}
p {
  margin: 0 30px 30px 40px
}

</style>
