<template>
  <div id="app">
    <nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-secondary">
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarToggler" aria-controls="navBarToggler" aria-expanded="false" aria-label="Azure Java WebApplication Sample">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navBarToggler">
          <a class="navbar-brand" href="#/Home">蔵書管理アプリケーション</a>
          <ul class="navbar-nav">
            <li><a class="nav-link"><router-link id="HomeNav" class="text-white" to="/Home">ホーム</router-link></a></li>
            <li><a class="nav-link"><router-link id="BooklistNav" class="text-white" to="/Booklist">書籍リスト</router-link></a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container" role="main" style="margin-top: 80px !important;">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  .list-group-item { word-wrap: break-word; }
  #booklist button { margin-left: 5px; }
</style>

