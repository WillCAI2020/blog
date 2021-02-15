link1 = {
  init: function () {
    var that = this;
    //这里设置的是刚才的 linklist.json 文件路径
    $.getJSON("/links/linklist_dalao.json", function (data) {
      that.render(data);
    });
  },
  render: function (data) {
    var nickname,
      avatar,
      site,
	  description,
      li = "";
    for (var i = 0; i < data.length; i++) {
      nickname = data[i].nickname;
      avatar = data[i].avatar;
      site = data[i].site;
	  description = data[i].description;
      li +=
        '<div class="blogroll">' + 
        '<img class="avatar" src=" ' + avatar + ' ">' +
		'<a class="friend" href="' +
        site +
        '" target="_blank">' +
        '<div class="name">' + nickname +
        '</div>' +
        '<div class="excerpt">' + description +
        '</div>' +
        '</a>' +
        '</div>';
    }
    $(".link-navigation_dalao").append(li);
  },
};
link1.init();

link2 = {
  init: function () {
    var that = this;
    //这里设置的是刚才的 linklist.json 文件路径
    $.getJSON("/links/linklist.json", function (data) {
      that.render(data);
    });
  },
  render: function (data) {
    var nickname,
      avatar,
      site,
	  description,
      li = "";
    for (var i = 0; i < data.length; i++) {
      nickname = data[i].nickname;
      avatar = data[i].avatar;
      site = data[i].site;
	  description = data[i].description;
      li +=
        '<div class="blogroll">' + 
        '<img class="avatar" src=" ' + avatar + ' ">' +
		'<a class="friend" href="' +
        site +
        '" target="_blank">' +
        '<div class="name">' + nickname +
        '</div>' +
        '<div class="excerpt">' + description +
        '</div>' +
        '</a>' +
        '</div>';
    }
    $(".link-navigation").append(li);
  },
};
link2.init();