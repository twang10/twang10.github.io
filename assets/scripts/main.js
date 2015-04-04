
styles = ["body{overflow:hidden;background-color:#fff}img{width:100%;height:200px;object-fit:cover;z-index:3;border-bottom:3px rgba(120,217,41,.7) solid}#bg{background:url(http://i.imgur.com/rG6V6Ai.jpg) center center no-repeat fixed;background-size:cover;display:block;position:fixed;left:0;right:0;z-index:1;height:110%;width:110%;-webkit-filter:blur(5px);-moz-filter:blur(5px);-o-filter:blur(5px);-ms-filter:blur(5px);filter:blur(5px);margin:-5px -10px -10px -5px}#parent{height:100%;position:absolute;width:100%}#box{overflow:hidden;background-color:rgba(255,255,255,.85);z-index:1;position:relative;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:750px;margin-left:auto;margin-right:auto;text-align:center;padding-bottom:50px;-webkit-box-shadow:0 0 25px 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 25px 0 rgba(50,50,50,.75);box-shadow:0 0 25px 0 rgba(50,50,50,.75)}#words{width:70%;margin-left:auto;margin-right:auto;font-family:'Open Sans',sans-serif;font-size:16px;font-weight:300;line-height:22px;color:rgba(0,0,0,.8)}b,strong{font-weight:600}"]
mobileStyles="@media only screen and (max-width:750px){img{height:200px}#box{width:100%;height:100%;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}#words{width:95%}#words p{font-size:16px}.rg_embed{margin-top:0!important;margin-bottom:0!important;border-top:0!important;border-bottom:0!important}.rg_embed_body{padding-bottom:7px;padding-top:7px}#bg{display:none}}@media only screen and (min-device-width:375px) and (max-device-width:500px){img{height:150px}#words p{font-size:16px}}@media only screen and (max-device-width:374px){img{height:100px}#words p{font-size:14px}}@media (max-height:480px){img{display:none}}"

buttons = ['<a href="mailto:thomas.wang@tufts.edu"><i class="fa fa-envelope fa-2x"></i></a>',
				'<a href="http://github.com/twang10"><i class="fa fa-github fa-2x"></i></a>',
                '<a href="http://twitter.com/wangisms"><i class="fa fa-twitter fa-2x"></i></a>',
                '<a href="http://blog.womtang.me"><i class="fa fa-tumblr fa-2x"></i></a>',
                '<a href="http://instagram.com/thomascool7"><i class="fa fa-instagram fa-2x"></i></a>',
                '<a href="http://foursquare.com/wangisms"><i class="fa fa-foursquare fa-2x"></i></a>']

writeChar = function(c) {
	$('#style-tag').append(c);
};


writeStyles = function(message, index, interval) {
    if (index < message.length) {
      writeChar(message[index++]);
      return setTimeout((function() {
        return writeStyles(message, index, interval);
      }), interval);
    }
    writeButtons(buttons, 0);
};

writeButtons = function (buttons, index) {
	if (index < buttons.length) {
		$('#buttons').append(buttons[index++])
		setTimeout((function() {
			writeButtons(buttons, index)
		}), 200);
	}
}

if (window.innerWidth >= 667) {
	writeStyles(styles, 0, 0);

} else {
	$('#style-tag').append(styles)
	$('#buttons').append(buttons.join(''))
}

$('#style-tag').append(mobileStyles)

