journal = {
  init: function () {
    var that = this;
    $.getJSON("/more/journal.json", function (data) {
      that.render(data);
    });
  },
  render: function (data) {
    var time,
      content,
	  pre = "";
      li = "";
	pre += '<span id="pre">......</span>';
    for (var i = 0; i < data.length; i++) {
      time = data[i].time;
      content = data[i].content;
      li +=
        '<div class="timenode" v-for="item in contents" v-cloak>' + 
        '<div class="meta">' +
		'<p>' +
        '<time v-bind:datetime="item.attributes.time">' + time + '</time>' +
        '</p>' +
        '</div>'+
        '<div class="body">' +
        '<p v-html="item.attributes.content">' + content + '</p>' +
        '</div>' +
        '</div>';
    }
	$("#journal").append(pre);		
    $("#journal").append(li);
  },
};
journal.init();