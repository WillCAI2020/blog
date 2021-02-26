const ap = new APlayer({
    container: document.getElementById('aplayer'),
	fixed: true,
	autoplay: true,
    audio: [
		{
			name: '慵懒的猫',
			artist: 'Hea2t',
			url: 'https://cdn.jsdelivr.net/gh/WillCAI2020/cdn/music/慵懒的猫.mp3',
			cover: 'http://p1.music.126.net/89f0ghqzPenQCwwxki4_fw==/109951164594173915.jpg?param=130y130'
		},
		{
			name: '飞鸟与蝉',
			artist: '可可',
			url: 'http://m10.music.126.net/20210227014636/d9cc07bee3cb0c40e76e9a11eee638f1/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3804202104/c2aa/fcec/3724/a31684e04242eb1538f1ef75b900624b.mp3',
			cover: 'http://p2.music.126.net/4pTCC_lBDmoiti8lxOu8_Q==/109951165277363176.jpg?param=130y130'
		}
	]
});