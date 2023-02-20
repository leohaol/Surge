//由本群重庆佬提供，key和小白脸大佬修改完善。
let $ = {
BD:'https://www.baidu.com',
YT:'https://www.youtube.com/',
GG:'https://www.google.com/generate_204',
GH:'https://www.github.com'
}

!(async () => {
await Promise.all([http('BD')http('GH')http('GG')http('YT')]).then((x)=>{
	$done({
    title: 'Network Connectivity Test',
    content: x.join('\n'),
    icon: 'timer',
    'icon-color': '#FF5A9AF9',
  })
})
})();

function http(req) {
    return new Promise((r) => {
			let time = Date.now();
        $httpClient.post($[req], (err, resp, data) => {
            r(req +
						'\xa0\xa0\xa0\t: ' +
						(Date.now() - time)+' ms');
        });
    });
}
