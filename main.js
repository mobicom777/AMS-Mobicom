var myOptions = {
	"nativeControlsForTouch": false,
	 "logo": { "enabled": false },
	techOrder: ["azureHtml5JS", "html5", "flashSS", "silverlightSS", ],
	controls: true,
	autoplay: true,
	width: "640",
	height: "400",
}
myPlayer = amp("azuremediaplayer", myOptions);
myPlayer.src([
        {
                "src": "http://mobicom.streaming.mediaservices.windows.net/93cc415a-41fb-43e7-853b-129341508a55/099c7357-ce27-4ed7-98e2-111a1ba455c4.ism/manifest",
                "type": "application/vnd.ms-sstr+xml"
        }
]);
