---
title: 相册
type: "album"
---
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/zyoushuo/Blog@master/hexo/css/album_css.css">


<style>
@media only screen and (min-width:960px){
	.row{
		margin-left: -15px;
		margin-right: -15px;
		display: flex;
		justify-content: center;
	}
	.col-md-4{
		width: 33.33333333%;
		float: left;
	}
	.col-md-4,
	.col-sm-6{
		position: relative;
		min-height: 1px;
		padding-left: 25px;
		padding-right: 25px;
	}
}
.box .album-title{
  font-family: Acme,"Noto Serif SC";
  color: #1e272e;
  font-size: 23px;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: 3em;
}
.box img{
	border-radius: 0 !important;
}
@media only screen and (max-width:479px){
  .box .album-title{ font-size: 16px; }
  .box .album-post{ font-size: 9px; }
}
.DarkMode .box .album-post{
	color: #000 !important;
}
.box .album-post{
  font-family: Acme,"Noto Serif SC";
  font-size: 16px;
  text-transform: capitalize;
  margin: 0 0 10px;
  display: block;
}	
</style>
<div class="htmleaf-container">
    <div class="demo">
        <div class="div_container">
            <div class="row">
                <div class="col-md-4 col-sm-6">
                    <div class="box">
                        <a href="photo.html">
						<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn/images/loading_cai.webp" data-src="https://cdn.jsdelivr.net/gh/zyoushuo/Blog/images/album_page1.jpg" alt="photo">				
						</a>
                        <div class="box-content">
                            <span class="album-title"><a href="photo.html" style="color:#000;">壁纸</a>
                            </span>
                            <span class="album-post">乐在分享</span>
                            <ul class="icon">
                                <li><a href="photo.html" target="_blank"><i class="fa fa-search"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="box">
                        <a href="picture.html">
						<img class="lazyload" src="https://cdn.jsdelivr.net/gh/WillCAI2020/cdn/images/loading_cai.webp" data-src="https://cdn.jsdelivr.net/gh/zyoushuo/Blog/images/album_page2.jpg" alt="picture">
						</a>
                        <div class="box-content">
                            <span class="album-title"><a href="picture.html"
                                    style="color:#000;">记录生活</a></span>
                            <span class="album-post">不负美好时光</span>
                            <ul class="icon">
                                <li><a href="picture.html" target="_blank"><i class="fa fa-search"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


