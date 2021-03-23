---
title: 更多
comments: false
---
<style>
  .single-thumbnail-card {
    position: relative;
    max-width: 900px;
    margin: 50px auto;
  }

  .container {
    border-radius: 10px;
    height: 350px;
    width: 100%;
    overflow: hidden;
    filter: brightness(90%);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 22px 50px -24px rgba(0, 0, 0, .6);
    background-image: url(https://gitee.com/WillCAI2020/pic-go/raw/master/img/20210323162559.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: scroll;
  }

  .content {
    font-size: 1.25em;
    text-align: center;
    padding-bottom: 20px;
    top: auto;
    padding: 1.2rem;
    background: linear-gradient(to right, #f1f1f1, #45ed63);
    -webkit-background-clip: text;
    color: transparent;
  }

  #cardbg_canvas {
    position: absolute;
    bottom: 0;
  }
</style>
<div id="card_canvas" class="single-thumbnail-card">
  <div class="container">
    <div class="content">
      <span id="title">金缕衣</span>
      <div id="sentence">
        劝君莫惜金缕衣，劝君惜取少年时。<br>
        花开堪折直须折，莫待无花空折枝。
      </div>
    </div>
    <canvas id="cardbg_canvas"></canvas>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.3.4/js/bubble.min.js"></script>