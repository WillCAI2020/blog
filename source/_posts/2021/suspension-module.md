---
title: 添加一个悬浮组件（next 主题）
top: 998
tags: [hexo,next]
categories: [博客]
date: 2021-02-27 21:38:38
rc: 11
keywords: next,美化
---

<p class='div-border green'>为博客添加一个悬浮组件，内置功能：回到顶端、实现深色模式、跳转评论区、播放背景音乐。</p>

<!--more-->

{% note primary  no-icon%}

本文所用代码大部分来源于此文：[hexo（sakura）给博客增添侧边栏（回到顶部，跳转评论，深色模式，播放音乐）](https://blog.csdn.net/cungudafa/article/details/106500877),以及[大佬Sanarous](https://bestzuo.cn/)的网站源码，我只是基于这些代码，结合我自己的喜好，就 next 主题做出些简陋的改变。

{% endnote %}

下面先给出实际操作。

## 操作

很简单，把如下代码放入`根目录/source/_data/body-end.njk`文件中即可。（body-end.njk 内的代码经 next 主题的注入功能后会添加至静态网页 `</body>`标签上方）

{% fold 点击显/隐代码 %}

```html
{# 添加小组件 #}
<div id="RightDownBtn">
    <a id="btn" href="javascript:void(0)" target="_self" style="" title="回到顶部">
        <svg style=" width: 1.5em;height: 1.5em;" class="icon" aria-hidden="true">
            <use xlink:href="#icon-xuanfufanhuidingbu">
                <svg id="icon-xuanfufanhuidingbu" viewBox="0 0 1024 1024">
                    <path d="M0 512c0 282.624 229.376 512 512 512s512-229.376 512-512S794.624 0 512 0 0 229.376 0 512z"
                        fill="#1989FA"></path>
                    <path
                        d="M736.768 263.68H287.232c-12.288 0-23.04 10.752-23.04 23.04s10.752 23.04 23.04 23.04H737.28c12.288 0 23.04-10.752 23.04-23.04s-10.752-23.04-23.552-23.04m-207.872 105.472c-1.536-1.536-4.608-4.608-7.68-4.608-3.072-1.536-6.144-1.536-7.68-1.536-3.072 0-6.144 0-7.68 1.536-3.072 1.536-4.608 3.072-7.68 4.608l-186.368 186.368c-9.216 9.216-9.216 23.04 0 32.768 9.216 9.216 23.04 9.216 32.768 0l145.92-145.92V737.28c0 12.288 10.752 23.04 23.04 23.04s23.04-10.752 23.04-23.04V442.368l145.92 145.92c4.608 4.608 10.752 6.144 16.896 6.144 6.144 0 12.288-1.536 16.896-6.144 9.216-9.216 9.216-23.04 0-32.768l-187.392-186.368z"
                        fill="#FFFFFF"></path>
                </svg>
            </use>
        </svg>
    </a>
    <a onclick="scrollToComment()" target="_self" title="转至评论区">
		<svg style=" width: 1.5em;height: 1.5em;" class="icon" aria-hidden="true">
			<use xlink:href="#icon-ketangtaolun">
				<svg t=1592151989892 id=icon-ketangtaolun viewBox="0 0 1025 1024" version=1.1
					xmlns="http://www.w3.org/2000/svg" p-id=36645>
					<path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#FF5A20" p-id=36646></path>
					<path
						d="M238.481236 628.415011V378.631347c1.130243-2.260486 2.260486-3.390728 2.260486-5.651215 12.432671-42.949227 48.600442-72.335541 93.810154-72.33554 122.066225-1.130243 244.13245-1.130243 366.198676 0 45.209713 0 81.377483 28.256071 93.810154 72.33554 1.130243 2.260486 2.260486 4.520971 2.260486 5.651215v252.04415l-3.390728 10.172185c-13.562914 41.818985-47.470199 67.81457-91.549669 67.81457h-66.684327c-102.852097-1.130243-202.313466 19.214128-297.253863 57.642384-4.520971 2.260486-10.172185 3.390728-15.8234 5.651214v-64.423841c-14.693157-6.781457-28.256071-11.302428-39.558499-18.083885-24.865342-11.302428-36.16777-35.037528-44.07947-61.033113z m291.602649-81.377483c20.344371 0 36.16777-16.953642 36.167771-37.298014 0-19.214128-15.8234-32.777042-39.558499-32.777042-19.214128 0-33.907285 14.693157-33.907285 33.907285 1.130243 20.344371 18.083885 37.298013 37.298013 36.167771z m-126.587196 0c18.083885 0 33.907285-15.8234 32.777042-35.037528 0-20.344371-16.953642-36.16777-37.298014-35.037528-18.083885 0-32.777042 16.953642-32.777042 37.298014 2.260486 18.083885 18.083885 32.777042 37.298014 32.777042z m285.951435-33.907285c0-20.344371-15.8234-36.16777-37.298014-35.037528-18.083885 0-32.777042 16.953642-32.777042 36.167771 0 18.083885 16.953642 32.777042 36.167771 32.777042 18.083885 0 33.907285-15.8234 33.907285-33.907285z"
						fill="#FFFFFF" p-id=36647></path>
				</svg>
			</use>
		</svg>
    </a>
	<a onclick="switchNightMode()" title="深色模式">
		<svg style=" width: 1.5em;height: 1.5em;" class="icon" aria-hidden="true">
			<use id="modeicon" xlink:href="#icon-_moon">
			</use>
		</svg>
	</a>
	<svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
		<symbol id="icon-sun" viewBox="0 0 1024 1024">
			<path
				d="M511.99976 511.99976m-511.99976 0a511.99976 511.99976 0 1 0 1023.99952 0 511.99976 511.99976 0 1 0-1023.99952 0Z"
				fill="#91D2F2"></path>
			<path
				d="M144.623932 868.455593C237.679889 964.327548 367.831828 1023.99952 511.99976 1023.99952c269.983873 0 490.99977-209.007902 510.455761-474.031778C956.991551 535.703749 887.559584 527.999753 815.623618 527.999753c-309.535855 0-572.895731 142.055933-670.999686 340.45584z"
				fill="#198058"></path>
			<path
				d="M979.623541 575.99973c-351.319835 0-647.791696 155.655927-741.279653 368.639827A509.359761 509.359761 0 0 0 511.99976 1023.99952c260.839878 0 475.967777-195.111909 507.799762-447.31979a1194.34344 1194.34344 0 0 0-40.175981-0.68z"
				fill="#1E9969"></path>
			<path
				d="M69.711967 769.831639C158.503926 921.815568 323.271848 1023.99952 511.99976 1023.99952a509.455761 509.455761 0 0 0 269.631874-76.783964C657.111692 828.375612 464.271782 751.999648 247.623884 751.999648c-61.575971 0-121.183943 6.271997-177.911917 17.831991z"
				fill="#6AA33A"></path>
			<path
				d="M487.887771 1023.39152c-86.543959-122.151943-236.911889-214.679899-417.591804-252.543881 85.11996 144.919932 239.415888 244.279885 417.591804 252.543881z"
				fill="#95E652"></path>
			<path
				d="M394.159815 167.999921l-45.255979 45.255979L303.647858 167.999921l45.255978-45.255979zM394.159815 503.999764l-45.255979 45.255979L303.655858 503.999764l45.247978-45.247979z"
				fill="#FFF8E6"></path>
			<path
				d="M180.879915 290.719864l45.247979 45.247979-45.255979 45.255978-45.255979-45.255978zM516.903758 290.719864l45.247978 45.247979-45.247978 45.247978-45.247979-45.247978z"
				fill="#FFF8E6"></path>
			<path d="M198.087907 185.207913h63.99997v63.99997h-63.99997zM435.671796 422.791802h63.99997v63.99997h-63.99997z"
				fill="#FFF8E6"></path>
			<path d="M198.087907 422.791802h63.99997v63.99997h-63.99997zM435.671796 185.207913h63.99997v63.99997h-63.99997z"
				fill="#FFF8E6"></path>
			<path
				d="M348.879836 335.999843m-183.999913 0a183.999914 183.999914 0 1 0 367.999827 0 183.999914 183.999914 0 1 0-367.999827 0Z"
				fill="#FFEAB3"></path>
			<path
				d="M348.879836 335.999843m-159.999925 0a159.999925 159.999925 0 1 0 319.99985 0 159.999925 159.999925 0 1 0-319.99985 0Z"
				fill="#FFDC80"></path>
		</symbol>
		<symbol id="icon-_moon" viewBox="0 0 1024 1024">
			<path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#323232"></path>
			<path
				d="M512 512m-407.005867 0a407.005867 407.005867 0 1 0 814.011734 0 407.005867 407.005867 0 1 0-814.011734 0Z"
				fill="#494A4A"></path>
			<path
				d="M748.1344 633.9584c0-1.143467 0.085333-2.286933 0.085333-3.413333a69.512533 69.512533 0 0 0-8.823466-33.979734q-1.058133-1.911467-2.2528-3.7376l-0.187734-0.3072a70.485333 70.485333 0 0 0-5.2736-7.099733l-0.238933-0.273067q-1.3312-1.536-2.730667-3.003733l-0.3072-0.324267a70.894933 70.894933 0 0 0-6.417066-5.819733l-0.5632-0.443733q-1.467733-1.160533-3.003734-2.235734l-0.494933-0.341333q-1.706667-1.2288-3.6352-2.3552l-0.256-0.136533q-1.706667-0.989867-3.413333-1.8944l-0.887467-0.4608q-1.604267-0.802133-3.242667-1.536l-0.6144-0.273067q-1.928533-0.836267-3.9424-1.553067l-0.8192-0.273066a54.8864 54.8864 0 0 0-3.242666-1.024l-1.143467-0.324267a85.248 85.248 0 0 0-3.601067-0.887467l-0.546133-0.119466a67.345067 67.345067 0 0 0-4.1984-0.733867l-1.143467-0.136533q-1.706667-0.2048-3.2768-0.341334l-1.245866-0.1024a74.786133 74.786133 0 0 0-4.386134-0.1536 69.8368 69.8368 0 0 0-20.48 3.037867 104.106667 104.106667 0 0 0-12.1344-11.076267 258.696533 258.696533 0 0 0-449.9456-248.763733 183.1424 183.1424 0 0 1 106.939734-34.2528c5.12 0 10.24 0.221867 15.36 0.631467a183.125333 183.125333 0 0 1 50.5344 11.52h0.170666q3.874133 1.501867 7.68 3.157333l0.256 0.1024 7.441067 3.413333 0.273067 0.136534q3.669333 1.826133 7.253333 3.805866l0.221867 0.119467q3.618133 2.013867 7.133866 4.164267a184.610133 184.610133 0 0 1 26.760534 20.036266h0.085333q2.986667 2.696533 5.870933 5.5296l0.324267 0.3072q2.781867 2.7648 5.461333 5.632l0.443734 0.477867q2.6112 2.833067 5.12 5.768533l0.494933 0.580267q2.4576 2.9184 4.795733 5.956267l0.494934 0.648533q2.321067 3.037867 4.522666 6.178133l0.426667 0.6144q2.2016 3.1744 4.283733 6.4512l0.324267 0.529067q2.116267 3.413333 4.078933 6.826667l0.170667 0.3072c1.553067 2.7136 3.0208 5.495467 4.437333 8.2944a56.149333 56.149333 0 0 0-12.578133 2.304 82.824533 82.824533 0 0 0-134.007467 18.039466 42.530133 42.530133 0 0 0-53.009066 41.079467 104.277333 104.277333 0 0 0-42.2912 80.110933 13.653333 13.653333 0 0 0 0 1.4336v0.426667c0 0.136533 0.1024 0.682667 0.187733 1.024s0 0.3072 0.1024 0.4608 0.2048 0.733867 0.324267 1.092267l0.1024 0.3072a15.36 15.36 0 0 0 0.580266 1.416533l0.1024 0.187733a16.520533 16.520533 0 0 0 0.648534 1.211734l0.221866 0.3584c0.221867 0.3584 0.4608 0.733867 0.7168 1.092266l0.221867 0.3072a26.333867 26.333867 0 0 0 2.338133 2.798934l0.119467 0.119466q0.6144 0.631467 1.297067 1.262934l0.2048 0.187733q0.7168 0.648533 1.501866 1.297067 1.706667 1.416533 3.720534 2.781866c0.6656 0.4608 1.348267 0.904533 2.065066 1.348267 26.914133 16.7936 87.995733 28.535467 159.044267 28.535467 19.3536 0 37.956267-0.8704 55.3472-2.474667l-0.494933 0.750933-0.426667 0.6144q-2.2016 3.140267-4.539733 6.178134l-0.477867 0.631466q-2.338133 3.037867-4.795733 5.956267l-0.494934 0.580267q-2.491733 2.935467-5.12 5.7856l-0.443733 0.477866q-2.679467 2.884267-5.461333 5.649067l-0.3072 0.290133q-2.884267 2.833067-5.870934 5.546667a184.8832 184.8832 0 0 1-26.7776 20.036267q-3.515733 2.167467-7.150933 4.181333l-0.187733 0.1024q-3.584 1.979733-7.2704 3.805867l-0.256 0.136533q-3.6864 1.826133-7.458134 3.413333l-0.238933 0.1024q-3.805867 1.706667-7.68 3.157334h-0.136533a183.057067 183.057067 0 0 1-50.551467 11.52c-5.12 0.4096-10.24 0.631467-15.36 0.631466a183.159467 183.159467 0 0 1-106.939733-34.2528 258.5088 258.5088 0 0 0 180.138666 107.093334 109.550933 109.550933 0 0 0-3.259733 26.453333 16.520533 16.520533 0 0 0 0.1024 1.706667v0.529066c0 0.170667 0.136533 0.853333 0.221867 1.262934l0.136533 0.5632 0.392533 1.365333 0.136534 0.4096a13.892267 13.892267 0 0 0 0.733866 1.706667l0.119467 0.238933c0.238933 0.512 0.512 1.006933 0.802133 1.501867l0.273067 0.443733q0.4096 0.682667 0.887467 1.365333l0.273066 0.375467a33.0752 33.0752 0 0 0 2.9184 3.413333l0.1536 0.1536 1.5872 1.553067 0.273067 0.256 1.8432 1.621333q2.116267 1.706667 4.625067 3.413334l2.56 1.706666c33.467733 20.8896 109.431467 35.4816 197.802666 35.4816 119.330133 0 216.046933-26.606933 216.046934-59.409066a131.413333 131.413333 0 0 0-56.285867-102.058667z"
				fill="#323232"></path>
			<path
				d="M573.8496 401.8176v-2.781867a56.200533 56.200533 0 0 0-72.6016-53.725866 82.824533 82.824533 0 0 0-134.007467 18.039466 42.530133 42.530133 0 0 0-53.009066 41.079467 104.277333 104.277333 0 0 0-42.257067 80.0768c0 26.385067 77.7728 47.786667 173.7216 47.786667s173.7216-21.384533 173.7216-47.786667a105.659733 105.659733 0 0 0-45.568-82.688z"
				fill="#CDCCCA"></path>
			<path
				d="M293.768533 506.2656a104.277333 104.277333 0 0 1 42.2912-80.110933 42.530133 42.530133 0 0 1 53.009067-41.079467 82.807467 82.807467 0 0 1 134.007467-18.039467 56.32 56.32 0 0 1 43.758933 4.642134 56.2176 56.2176 0 0 0-65.518933-26.4192 82.824533 82.824533 0 0 0-134.007467 18.039466 42.530133 42.530133 0 0 0-53.009067 41.079467 104.277333 104.277333 0 0 0-42.325333 80.128c0 8.413867 7.936 16.3328 21.845333 23.210667a13.294933 13.294933 0 0 1-0.0512-1.450667z"
				fill="#E8E9EC"></path>
			<path
				d="M453.4784 166.912a258.338133 258.338133 0 0 0-210.944 108.919467 183.995733 183.995733 0 1 1 0 299.451733 258.6624 258.6624 0 1 0 210.944-408.388267z"
				fill="#DDAE2A"></path>
			<path
				d="M364.834133 608.9216q7.594667 0.631467 15.36 0.648533a183.995733 183.995733 0 0 0 0-367.9744q-7.748267 0-15.36 0.631467a183.995733 183.995733 0 0 1 0 366.6944z"
				fill="#EDC849"></path>
			<path
				d="M794.7776 605.969067c0-1.143467 0.085333-2.286933 0.085333-3.413334a69.973333 69.973333 0 0 0-90.299733-66.833066 102.997333 102.997333 0 0 0-166.656 22.4256 52.906667 52.906667 0 0 0-65.928533 51.0976 129.706667 129.706667 0 0 0-52.599467 99.6352c0 32.8192 96.733867 59.409067 216.046933 59.409066s216.046933-26.606933 216.046934-59.409066a131.413333 131.413333 0 0 0-56.695467-102.912z"
				fill="#CDCCCA"></path>
			<path
				d="M446.481067 735.914667a129.706667 129.706667 0 0 1 52.599466-99.6352 52.906667 52.906667 0 0 1 65.928534-51.080534 102.997333 102.997333 0 0 1 166.6048-22.442666 69.973333 69.973333 0 0 1 54.408533 5.7856 69.973333 69.973333 0 0 0-81.476267-32.853334 102.997333 102.997333 0 0 0-166.656 22.4256 52.906667 52.906667 0 0 0-65.928533 51.0976 129.706667 129.706667 0 0 0-52.599467 99.6352c0 10.478933 9.864533 20.309333 27.170134 28.859734a17.408 17.408 0 0 1-0.0512-1.792z"
				fill="#E8E9EC"></path>
		</symbol>
	</svg>
    <a onclick="music_on();" id="musicmobbtn" title="播放背景音乐">
        <svg style=" width: 1.5em;height: 1.5em;" id="music" aria-hidden="true">
            <use id="modeicon" xlink:href="#icon-icon-music">
                <svg id="icon-icon-music" viewBox="0 0 1024 1024">
                    <path
                        d="M997.45185173 512A485.45185173 485.45185173 0 1 1 26.54814827 512a485.45185173 485.45185173 0 0 1 970.90370346 0"
                        fill="#9025FC"></path>
                    <path
                        d="M478.56450347 602.59745173S403.9869632 545.19277013 369.03442987 537.78962987c-82.1020448-17.41558507-136.47265173 35.8020736-133.37789654 106.192592 4.36906667 100.42785173 127.37042987 123.85090347 194.66619307 111.3505184 67.3564448-12.37902187 101.09534827-57.04059307 108.86257707-111.83597014 7.76722987-54.79537813 46.84610347-263.9037632 46.84610346-263.9037632s66.26417813 61.28829653 85.2574816 82.3447712c26.4571264 29.3698368-0.1820448 79.85682987-0.18204373 79.8568288s72.39300693-12.07561493 90.23336213-104.97896213c12.31834027-64.1403264-23.36237013-76.64071147-65.71804373-110.37961493-82.76954027-65.7787264-121.2416-90.2940448-145.63555627-95.45197014-24.27259307-5.0972448-45.02565973 4.42974827-45.8145184 81.4952288-0.84954027 77.0654816-25.60758507 290.1181632-25.60758506 290.1181632"
                        fill="#FFFFFF"></path>
                </svg>
            </use>
        </svg>
    </a>
	<audio id="bg_music" src="{{theme.bg_music}}" loop="loop"></audio>
	<script>
			
		function music_on() {
			var audio1 = document.getElementById('bg_music');
			if (audio1.paused) {
				audio1.play();
				$("svg#music").addClass("xuanzhuan");
				
			}else{
				audio1.pause();
				$('svg#music').removeClass("xuanzhuan");
				audio1.currentTime = 0;//音乐从头播放
			}
		}
	    function BackTOP() {
			$("#btn").hide();
			$(function () {
				$(window).scroll(function () {
					if ($(window).scrollTop() > 50) {
						$("#btn").fadeIn(200);
					} else {
						$("#btn").fadeOut(200);
					}
				});
				$("#btn").click(function () {
					$('body,html').animate({
							scrollTop: 0
						},
						500);
					return false;
				});
			})
		}
		function scrollToComment() {
		  var t = $("#valine-comments").offset().top;
		  $("html,body").animate({ scrollTop: t }, 500);
		}	
		function switchNightMode() {
		  $(
			'<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>'
		  ).appendTo($("body")),
			setTimeout(function () {
			  var DarkMode =
				document.cookie.replace(
				  /(?:(?:^|.*;\s*)DarkMode\s*\=\s*([^;]*).*$)|^.*$/,
				  "$1"
				) || "0";
			  DarkMode == "0"
				? ($("html").addClass("DarkMode"),
				  (document.cookie = "DarkMode=1;path=/"),
				  console.log("夜间模式开启"),
				  $("#modeicon").attr("xlink:href", "#icon-sun"))
				: ($("html").removeClass("DarkMode"),
				  (document.cookie = "DarkMode=0;path=/"),
				  console.log("夜间模式关闭"),
				  $("#modeicon").attr("xlink:href", "#icon-_moon")),
				setTimeout(function () {
				  $(".Cuteen_DarkSky").fadeOut(1e3, function () {
					$(this).remove();
				  });
				}, 2e3);
			}),
			50;
		}

		function checkNightMode() {
		  if ($("html").hasClass("n-f")) {
			$("html").removeClass("day");
			$("html").addClass("DarkMode");
			$("#modeicon").attr("xlink:href", "#icon-sun");
			return;
		  }
		  if ($("html").hasClass("d-f")) {
			$("html").removeClass("DarkMode");
			$("html").addClass("day");
			$("#modeicon").attr("xlink:href", "#icon-_moon");

			return;
		  }
		  if (
			document.cookie.replace(
			  /(?:(?:^|.*;\s*)DarkMode\s*\=\s*([^;]*).*$)|^.*$/,
			  "$1"
			) === ""
		  ) {
			if (new Date().getHours() >= 23 || new Date().getHours() < 7) {
			  $("html").addClass("DarkMode");
			  document.cookie = "DarkMode=1;path=/";
			  console.log("夜间模式开启");
			  $("#modeicon").attr("xlink:href", "#icon-sun");
			} else {
			  $("html").removeClass("DarkMode");
			  document.cookie = "DarkMode=0;path=/";
			  console.log("夜间模式关闭");
			  $("#modeicon").attr("xlink:href", "#icon-_moon");
			}
		  } else {
			var DarkMode =
			  document.cookie.replace(
				/(?:(?:^|.*;\s*)DarkMode\s*\=\s*([^;]*).*$)|^.*$/,
				"$1"
			  ) || "0";
			if (DarkMode == "0") {
			  $("html").removeClass("DarkMode");
			  $("#modeicon").attr("xlink:href", "#icon-_moon");
			} else if (DarkMode == "1") {
			  $("html").addClass("DarkMode");
			  $("#modeicon").attr("xlink:href", "#icon-sun");
			}
		  }
		}
		BackTOP();		
		checkNightMode();
	</script>
</div>
```

{% endfold  %}

此外，我们还要加入自己的 css 样式。把如下代码放入 `根目录/source/_data/styles.styl`中即可。

{% fold 点击显/隐代码 %}

```stylus
/****************************************/
/*************悬浮组件 begin*************/
/****************************************/
/* 整体 begin */
#RightDownBtn > a {
  width: 1.5em;
  height: 1.5em;
  margin: 0.3125rem 0;
  transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border-bottom: none !important;
}
#RightDownBtn svg.icon,
#RightDownBtn svg#music,
#RightDownBtn a {
  width: 21px !important;
  height: 21px !important;
}
#RightDownBtn {
  position: fixed;
  right: 32px;
  bottom: 64px;
  padding: 0.3125rem 0.5rem;
  background: #fff;
  border-radius: 0.1875rem;
  box-shadow: 0 0 0.3125rem rgba(0, 0, 0, 0.4);
  transition: 0.3s ease all;
  z-index: 1000;
  align-items: flex-end;
  flex-direction: column;
  display: -moz-flex;
  display: flex;
  float: right;
}
/* 组件部分 end */

/* 深色模式 begin */
.DarkMode .blogroll,
.DarkMode #RightDownBtn,
.DarkMode strong,
.DarkMode .note,
.DarkMode img {
  filter: brightness(0.7) !important;
  -webkit-filter: brightness(0.7) !important;
}

.DarkMode #RightDownBtn {
  background: #222c;
}

.DarkMode body {
  background: #12121c !important;
}

/*主体 main-inner */
.DarkMode .main-inner {
  background: rgba(40, 44, 52, 0.5); /*区分阴影度*/
}

.DarkMode .post-block,				/*文章*/
.DarkMode .main-menu,				/*header上部分颜色*/
.DarkMode  .sub-menu,				/* 设置二级标题 */
.DarkMode  .popup,					/*搜索*/
.DarkMode  .search-result-container {
  background: #282c34 !important; /*背景颜色*/
}

/* 文章块 post-block */
.DarkMode .post-block {
  opacity: 1;
}

.DarkMode .post-block,				/*文章*/
.DarkMode .menu-item a,				/*menu*/
.DarkMode .site-author-name,		/*侧栏作者*/
.DarkMode .site-description,		/*侧栏描述*/
.DarkMode .site-state-item-count,	/*侧栏分类数*/
.DarkMode .site-state-item-name,	/*侧栏分类名*/
.DarkMode .links-of-author-item a,	/*社交*/
.DarkMode .sidebar-nav li,			/*侧栏分类标题*/
.DarkMode .post-toc ol a,			/*上下文颜色*/
.DarkMode .post-nav-item a,			/*侧栏文章标题*/
.DarkMode .footer,					/*页脚颜色*/
.DarkMode  .search-input,			/*搜索*/
.DarkMode  .search-result-container,
.DarkMode  .search-result-list a,
.DarkMode  .back-to-top,
.DarkMode  #waifu-tips,
.DarkMode  a.vlogin-btn,
.DarkMode  .vright .vheader .vnick,
.DarkMode  .vmail,
.DarkMode  .vlink,
.DarkMode  .veditor,
.DarkMode  .vcol button,
.DarkMode  .vcount,
.DarkMode  .vempty,
.DarkMode  .vpreview p,
.DarkMode  .vpreview h1,
.DarkMode  .vpreview h2,
.DarkMode  .vpreview h3,
.DarkMode  .vpreview ol,
.DarkMode  .vcontent p,
.DarkMode  .vcontent h1,
.DarkMode  .vcontent h2,
.DarkMode  .vcontent h3,
.DarkMode  .vcontent ol {
  /* live2d 文字颜色 */
  color: rgba(255, 255, 255, 0.6) !important;
}

/* header上部*/
.DarkMode .main-menu {
  border-radius: 0 0 $myradius $myradius; /*设置圆角*/
}
/* 设置 brand 背景 */
.DarkMode .site-brand-container {
  background: url(https://cdn.jsdelivr.net/gh/WillCAI2020/cdn/images/header-bg1.webp);
  background-repeat: repeat;
  background-position: 70% 20%;
  background-size: cover;
}
/* 设置header下部 */
.DarkMode .sidebar-inner {
  background: #282c34;
}

.DarkMode a.menu-item-active {
  border-radius: $myradius;
  background: #382d2d; /* 选中时显现颜色*/
}
.DarkMode .menu-item a:hover {
  border-radius: $myradius;
  background: #382d2d; /* 移动至所显现颜色*/
  color: aqua !important;
}

.DarkMode .site-state-item-count,
.DarkMode .site-state-item-name,
.DarkMode .links-of-author-item a {
  &:hover {
    background: #382d2d;
    color: aqua !important;
  }
}

.DarkMode .post-toc ol a {
  &:hover {
    border-bottom-color: #fc6423;
    color: #fc6423 !important;
  }
}

.DarkMode .sidebar-toc-active .sidebar-nav-toc,					/*侧栏选中时*/
.DarkMode .sidebar-overview-active .sidebar-nav-overview
.DarkMode .post-toc .nav .active > a {
  color: aqua !important;
  border-bottom-color: aqua !important;
}

/* 文章尾部上下文 */
.DarkMode .post-nav-item a:hover {
  color: #fc6423 !important; /* 移动至所显现颜色*/
}

/* 设置二级标题 */
.DarkMode .sub-menu {
  background: #282c34;
}

.DarkMode .search-header {
  background: #353232 !important;
}
/* 搜索页面鼠标划入变化 */
.DarkMode .search-result-list a {
  border-bottom: 1px solid white;
  &:hover {
    color: aqua !important;
    border-bottom: 1px solid aqua;
  }
}

.DarkMode #waifu-tips span {
  color: purple; /* live2d 注意颜色 */
}

/* 设置超链接 */
.DarkMode .post-meta-item a,
.DarkMode .post-body p a {
  color: rgba(0, 255, 255, 0.6);
  border-bottom: 1px solid rgba(0, 255, 255, 0.6);
  &:hover {
    color: #fc6423 !important;
    border-bottom: 1px solid #fc6423;
  }
}

/* 评论区 */
.DarkMode .comments {
  background: #282c34;
}

.DarkMode a.vlogin-btn {
  &:hover {
    color: #fc6423;
    border-bottom-color: #fc6423 !important;
  }
}
.DarkMode .vcol button {
  &:hover {
    color: #fc6423 !important;
    border-color: #fc6423 !important;
  }
}

.DarkMode .vcol span.vicon,
.DarkMode .vcol svg.markdown {
  fill: currentColor;
  color: rgba(255, 255, 255, 0.6);
}

.DarkMode .posts-collapse .post-content .post-title a{	/* 归档 */
	color: rgba(255, 255, 255, 0.6);
  &:hover {
    color: #fc6423;
	}	
}

.DarkMode .breadcrumb a{
	color: rgb(170,145,145,0.6);
	border-bottom-color: rgb(170,145,145,0.6);
}
.DarkMode .posts-collapse .post-content .post-header,
.DarkMode .breadcrumb a{
  &:hover {
    color: #fc6423 !important;
    border-color: #fc6423 !important;
	}
}

/* pagination-当前页码 */
.DarkMode .pagination .page-number.current {
  background: rgba(255, 255, 255, 0.6);
  color: black;
}

/* pagination-页码按钮 */
.DarkMode .pagination .prev,
.DarkMode .pagination .next,
.DarkMode .pagination .page-number {
  color: rgba(255, 255, 255, 0.6);

  &:hover {
    color: black !important;
    background: rgba(255, 255, 255, 0.6);
  }
}

/* 深色模式 end */

/* sun and noon */
.Cuteen_DarkSky,
.Cuteen_DarkSky:before {
  content: "";
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 88888888;
}

.Cuteen_DarkSky {
  background: linear-gradient(#feb8b0, #fef9db);
}

.Cuteen_DarkSky:before {
  transition: 2s ease all;
  opacity: 0;
  background: linear-gradient(#4c3f6d, #6c62bb, #93b1ed);
}

.DarkMode .Cuteen_DarkSky:before {
  opacity: 1;
}

.Cuteen_DarkPlanet {
  z-index: 99999999;
  position: fixed;
  left: -50%;
  top: -50%;
  width: 200%;
  height: 200%;
  -webkit-animation: CuteenPlanetMove 2s cubic-bezier(0.7, 0, 0, 1);
  animation: CuteenPlanetMove 2s cubic-bezier(0.7, 0, 0, 1);
  transform-origin: center bottom;
}

@-webkit-keyframes CuteenPlanetMove {
  0% {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes CuteenPlanetMove {
  0% {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

.Cuteen_DarkPlanet:after {
  position: absolute;
  left: 35%;
  top: 40%;
  width: 9.375rem;
  height: 9.375rem;
  border-radius: 50%;
  content: "";
  background: linear-gradient(#fefefe, #fffbe8);
}
/* sun and noon.end */

/* 音乐-旋转 */
.xuanzhuan {
  -webkit-animation: rotate 3s linear infinite;
  -moz-animation: rotate 3s linear infinite;
  -o-animation: rotate 3s linear infinite;
  animation: rotate 3s linear infinite;
}
@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes rotate {
  from {
    -moz-transform: rotate(0);
  }
  to {
    -moz-transform: rotate(359deg);
  }
}
@-o-keyframes rotate {
  from {
    -o-transform: rotate(0);
  }
  to {
    -o-transform: rotate(359deg);
  }
}
@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
/****************************************/
/*************悬浮组件 end***************/
/****************************************/
```

{% endfold %}

<p class='div-border yellow'>上述样式文件中，深色模式部分代码基本上是我根据自己的喜好及页面相关布局而编写的，若有人使用，希望能视自身情况加以删除或修改，否则就可能不大好看了喔🙃！</p>

注意：

* 把 scrollToComment() 函数中的 valine-comments 切换为评论区容器对应的id（若为 class 则把 # 换为 . ），当然如果你用的也是 valine 评论，那大概率是不用换的啦。

* 样式文件中设置圆角我选择使用参数`$myradius`，这个参数的值放在 `根目录/source/_data/variables.styl`中，即在 variables.styl 文件中添加这么一行即可（参数的值为圆角半径大小，根据喜好修改即可）：

  ```stylus
  //radius
  $myradius                     = 12px;
  ```

  当然直接把`$myradius`修改为 12px 或其它你喜欢的大小也可😂！

* 在主题配置文件 _config.yml 中加入：（我配置文件采用的方法为主题与站点配置文件二合一）

  ```yaml
  bg_music: https://cdn.jsdelivr.net/gh/WillCAI2020/cdn/music/慵懒的猫.mp3
  ```

  以设置音乐的地址。

## 原理

代码实现的原理[此文](https://blog.csdn.net/cungudafa/article/details/106500877)已经讲的很清楚了，接下来的讲解只是个人探索过程中的学习笔记。

首先是使用`<div id="RightDownBtn"></div>`容器添加悬浮组件，组件各部分以`<a></a>`标签包裹，共有四个部分，故而共有四个`<a></a>`标签。每个部分所使用的图形是 svg 格式，故而容器内还有`<svg></svg>`标签。同时给不同部分均设立了不同的点击事件，即点击该组件部分将会执行对应的函数，从而产生相应的效果。

### 回到顶部

```javascript
 function BackTOP() {
        $("#btn").hide();
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() > 50) {
                    $("#btn").fadeIn(200);
                } else {
                    $("#btn").fadeOut(200);
                }
            });
            $("#btn").click(function () {
                $('body,html').animate({
                        scrollTop: 0
                    },
                    500);
                return false;
            });
        })
    }
```

该功能的实现依靠 BackTOP() 函数完成。该函数能监听滚动条，若滚动条所处的高度达不到函数中 if 设置的要求，则将隐藏 id 为 btn 的回到顶部按钮（`$("#btn").hide();`）。当 click 此按钮后，将设置滚动条高度为 0，即实现回到顶部。最后写上一行 `BackTOP();`即为调用此函数。

### 跳转评论区

```javascript
function scrollToComment() {
    var t = $("#valine-comments").offset().top;
    $("html,body").animate({ scrollTop: t }, 500);
  }	
```

当该按钮经历 onclick 事件后，会调用 scrollToComment() 函数。此函数执行的效果就是跳转至锚点 #valine-comments。而不同的评论组件，其对应的id很大可能是不同的，这个时候修改一下就行了。

### 切换深色模式

{% fold 点击显/隐代码 %}

```javascript
function switchNightMode() {
    $(
      '<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>'
    ).appendTo($("body")),
      setTimeout(function () {
        var DarkMode =
          document.cookie.replace(
            /(?:(?:^|.*;\s*)DarkMode\s*\=\s*([^;]*).*$)|^.*$/,
            "$1"
          ) || "0";
        DarkMode == "0"
          ? ($("html").addClass("DarkMode"),
            (document.cookie = "DarkMode=1;path=/"),
            console.log("夜间模式开启"),
            $("#modeicon").attr("xlink:href", "#icon-sun"))
          : ($("html").removeClass("DarkMode"),
            (document.cookie = "DarkMode=0;path=/"),
            console.log("夜间模式关闭"),
            $("#modeicon").attr("xlink:href", "#icon-_moon")),
          setTimeout(function () {
            $(".Cuteen_DarkSky").fadeOut(1e3, function () {
              $(this).remove();
            });
          }, 2e3);
      }),
      50;
  }

  function checkNightMode() {
    if ($("html").hasClass("n-f")) {
      $("html").removeClass("day");
      $("html").addClass("DarkMode");
      $("#modeicon").attr("xlink:href", "#icon-sun");
      return;
    }
    if ($("html").hasClass("d-f")) {
      $("html").removeClass("DarkMode");
      $("html").addClass("day");
      $("#modeicon").attr("xlink:href", "#icon-_moon");

      return;
    }
    if (
      document.cookie.replace(
        /(?:(?:^|.*;\s*)DarkMode\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      ) === ""
    ) {
      if (new Date().getHours() >= 23 || new Date().getHours() < 7) {
        $("html").addClass("DarkMode");
        document.cookie = "DarkMode=1;path=/";
        console.log("夜间模式开启");
        $("#modeicon").attr("xlink:href", "#icon-sun");
      } else {
        $("html").removeClass("DarkMode");
        document.cookie = "DarkMode=0;path=/";
        console.log("夜间模式关闭");
        $("#modeicon").attr("xlink:href", "#icon-_moon");
      }
    } else {
      var DarkMode =
        document.cookie.replace(
          /(?:(?:^|.*;\s*)DarkMode\s*\=\s*([^;]*).*$)|^.*$/,
          "$1"
        ) || "0";
      if (DarkMode == "0") {
        $("html").removeClass("DarkMode");
        $("#modeicon").attr("xlink:href", "#icon-_moon");
      } else if (DarkMode == "1") {
        $("html").addClass("DarkMode");
        $("#modeicon").attr("xlink:href", "#icon-sun");
      }
    }
  }
```

{% endfold  %}

onclick 调用的是 switchNightMode() 函数，该函数会先在`<body></body>`中加个一个属性 Cuteen_DarkSky 的div 容器，结合样式文件中的设计，最终效果即为切换前的动画。然后还会为 html（body 的外层容器） 加一个类 DarkMode，我们便可以通过 DarkMode 选择器来实现深色模式下的样式设计。还有个 checkNightMode() 函数是直接调用的，此函数实现的功能有通过 cookie 来记录当前状态（DarkMode 为1则为深色模式），以及通过`if (new Date().getHours() >= 23 || new Date().getHours() < 7)`做到当时间为23~7 点时，自动设置深色模式。

我对这些的具体实现一窍不通，也只能靠作者的讲解稍微了解了一下大概的含义。

这里再谈谈深色模式下的样式，首先最主要的是把 body 的背景颜色设置为深色（background: #12121c !important;），其次还有如 post-block、main-menu 等容器背景，我将其设为浅一点的深色（#282c34）。然后是各容器的文字颜色，比如post-block、footer等，普遍设置为浅白色（color: rgba(255, 255, 255, 0.6) !important;），其中 0.6 表示透明度，表现为颜色没那么亮。还有利用属性 `filter: brightness(.7);`来降低元素的亮度，其中 .7 可修改，普遍适用于 RightDownBtn、img、note 等。此外还可以设置深色模式下超链接的表现、搜索界面的表现等等，具体可见我的样式文件。

### 播放背景音乐

```js
function music_on() {
    var audio1 = document.getElementById('bg_music');
    if (audio1.paused) {
        audio1.play();
        $("svg#music").addClass("xuanzhuan");
        
    }else{
        audio1.pause();
        $('svg#music').removeClass("xuanzhuan");
        audio1.currentTime = 0;//音乐从头播放
    }
}
```

onclick 事件调用 music_on() 函数，其中有着简单的判断，若音乐停止（paused），则播放（play）它，反之亦然。

音乐的实现则利用 html 对应的元素 `<audio></audio>`，此处即为`<audio id="bg_music" src="{{theme.bg_music}}" loop="loop"></audio>`，audio 具体可见此文：[HTML 5 视频/音频参考手册](https://www.w3school.com.cn/html5/html5_ref_audio_video_dom.asp)。此处有个地方很关键，src 的地址是一个参数，其值放在配置文件中。因而我们需要在配置文件中设置这个参数，即为音乐的地址。

在把此功能搬到 next 主题时，我遇到问题 "<" 报错，原代码为 `<%= theme.bg_music%>`，意思也是调用主题内设置的参数，但是我直接搬运可不行，我得找出如何表达调用主题参数的方法，自己试了好几个参数表示方法，都不成功，然后想到 next 主题用 Nunjucks 引擎来渲染文件，去搜了下 Nunjucks 参数的表示形式，发现了 `{{}}`，于是尝试成功。

此外，原代码并未有旋转功能，我看到大佬[Sanarous](https://bestzuo.cn/)的博客，点击音乐按钮有旋转的功能，于是我也想加一个。于是打开 F12，选中该元素，发现当音乐播放的时候，元素会加上类 xuanzhuan，又看到深色模式中代码也涉及了添加类，于是马上操作起来，即`$("选择器").addClass("类名");`以及`$('选择器').removeClass("类名");`，实现播放时加类，停止时去除类。然后就是 F12 、 ctrl + F 找到 xuanzhuan 的样式配置来，发现通过 rotate 实现，于是我 copy 了相关代码放入我的样式文件中，成功实现旋转功能。

## 总结

经过这次探索，我更加熟悉如何利用 F12 寻找资源以及修改样式，还学到了很多的 css 属性，当然也只不过是留下了个映像，等要用的时候再查寻具体用法😂。总而言之，收获良多，也很开心又实现了一个个小功能！😁