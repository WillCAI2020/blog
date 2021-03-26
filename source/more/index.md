---
title: 更多
comments: false
type: more
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
        font-size: 1.15em;
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
<style>
    div.timenode {
        position: relative;
		margin: 10px 0;
    }

    div.timenode:before,
    div.timenode:after {
        content: '';
        z-index: 1;
        position: absolute;
        background: rgba(68, 215, 182, 0.5);
        width: 2px;
        left: 7px;
    }

    div.timenode:before {
        top: -50px;
        height: 100px;
    }

    div.timenode:after {
        top: 50px;
        height: calc(100% - 26px);
    }

    div.timenode:last-child:after {
        height: calc(100% - 26px - 16px);
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
    }

    div.timenode .meta,
    div.timenode .body {
        max-width: calc(100% - 24px);
    }

    div.timenode .meta {
        position: relative;
        color: var(--color-meta);
        font-size: 0.875rem;
        line-height: 32px;
        height: 32px;
    }

    div.timenode .meta:before,
    div.timenode .meta:after {
        content: '';
        position: absolute;
        top: 8px;
        z-index: 2;
    }

    div.timenode .meta:before {
        background: rgba(68, 215, 182, 0.5);
        width: 16px;
        height: 16px;
        border-radius: 8px;
    }

    div.timenode .meta:after {
        background: #44d7b6;
        margin-left: 2px;
        margin-top: 2px;
        width: 12px;
        height: 12px;
        border-radius: 6px;
        transform: scale(0.5);
        transition: all 0.28s ease;
        -moz-transition: all 0.28s ease;
        -webkit-transition: all 0.28s ease;
        -o-transition: all 0.28s ease;
    }

    div.timenode .meta p {
        font-weight: bold;
        margin: 0 0 0 24px;
    }

    div.timenode div.body p {
        margin: 0 !important;
    }

    div.timenode .body {
        margin: 4px 0 16px 24px;
        padding: 16px;
        border-radius: 8px;
        background: var(--color-block);
        display: inline-block;
		box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.12);
		transition: all 0.3s;
    }
	.DarkMode div.timenode .body:hover{
		box-shadow: 0 0 8px 3px rgba(255, 255, 255, 0.09);
	}
	div.timenode .body:hover{
		box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.12);
	}

    div.timenode .body:empty {
        display: none;
    }

    div.timenode .body>*:first-child {
        margin-top: 0.25em;
    }

    div.timenode .body>*:last-child {
        margin-bottom: 0.25em;
    }

    div.timenode .body .highlight {
        border: 1px solid #e4e4e4;
    }

    div.timenode:hover .meta {
        color: var(--color-text);
    }

    div.timenode:hover .meta:before {
        background: rgba(255, 87, 34, 0.5);
    }

    div.timenode:hover .meta:after {
        background: #ff5722;
        transform: scale(1);
    }

    div.timenode .body {
        margin: 0 0 0 24px;
        padding: 16px;
        border-radius: 8px;
        background: #f6f6f6;
        display: inline-block;
    }

    div.timenode img {
        width: 100%;
    }
    div.timenode .body ul{
		padding-left: 20px !important;
	}
    #journal {
		margin-top: 100px;
        display: grid;
		justify-content: center;
    }
	#pre{
		margin: 0 0 0 24px;
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

<div id="journal"></div>

<script src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn@1.3.4/js/bubble.min.js"></script>