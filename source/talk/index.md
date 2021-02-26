---
title: 留言墙
type: "talk"
---


<style>
.poem-wrap {
  position: relative;
  width: 730px;
  max-width: 80%;
  border: 2px solid #797979;
  border-top: none;
  text-align: center;
  margin: 80px auto;
}
.poem-wrap span {
  font-size: 30px !important;
  position: relative;
  margin-top: -20px;
  margin-bottom: 16px;
  display: inline-block;
  letter-spacing: 4px;
  color: #797979;
  font-weight: bolder;
}
.poem-wrap p {
  width: 70%;
  margin: auto;
  line-height: 30px;
  color: #797979;
}
.poem-wrap p#poem {
  font-size: 25px;
  text-align: center;
}
.poem-wrap p#info {
  font-size: 15px;
  margin: 15px auto;
  text-align: center;
}
@media (max-width: 685px) {
  .poem-wrap .poem-border {
    width: 18%;
  }
}
@media (max-width: 500px) {
  .poem-wrap .poem-wrap {
    margin-top: 60px;
    margin-bottom: 20px;
    border-top: 2px solid #797979;
  }
  .poem-wrap .poem-wrap span {
    margin: 20px 6px;
  }
  .poem-wrap .poem-border {
    display: none;
  }
}
.poem-border {
  position: absolute;
  height: 2px;
  width: 27%;
  background-color: #797979;
}
.poem-right {
  right: 0;
}
.poem-left {
  left: 0;
}
</style>
<div class="poem-wrap">
    <div class="poem-border poem-left"></div>
    <div class="poem-border poem-right"></div>
    <span><b>念两句诗</b></span>
    <p id="poem">挑选中...</p>
    <p id="info">
		<script src="https://sdk.jinrishici.com/v2/browser/jinrishici.js" charset="utf-8"></script>
        <script type="text/javascript">
            jinrishici.load(function (result) {
                poem.innerHTML = result.data.content
                info.innerHTML = '【' + result.data.origin.dynasty + '】' + result.data.origin.author + '《' + result.data.origin.title + '》'
            });
        </script>
    </p>
</div>