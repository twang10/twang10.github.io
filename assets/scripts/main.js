styles = "body{overflow:hidden}#bg{background:url('../../assets/images/profile3.jpeg') center center no-repeat fixed;background-size:cover;display:block;position:fixed;left:0;right:0;z-index:1;height:110%;width:110%;-webkit-filter:blur(5px);-moz-filter:blur(5px);-o-filter:blur(5px);-ms-filter:blur(5px);filter:blur(5px);margin:-5px -10px -10px -5px}img{width:100%;height:200px;object-fit:cover;z-index:3}#parent{height:100%;position:absolute;width:100%}#box{overflow:hidden;background-color:rgba(255,255,255,.85);z-index:1;position:relative;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:750px;margin-left:auto;margin-right:auto;text-align:center;padding-top:50px;padding-bottom:50px;-webkit-box-shadow:0 0 25px 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 25px 0 rgba(50,50,50,.75);box-shadow:0 0 25px 0 rgba(50,50,50,.75)}#words{width:70%;margin-left:auto;margin-right:auto;font-family:'Open Sans',sans-serif;font-size:16px;font-weight:300;line-height:22px;color:rgba(0,0,0,.8)}.fa{color:rgba(0,0,0,.75);padding:0 5px}.fa:hover{-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-ms-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;color:rgba(120,217,41,.5);top:-5px;position:relative}.rg_embed_footer,.rg_embed_header{display:none}.rg_embed_body{padding-bottom:15px!important}#mobile-copy{display:none}*,:after,:before{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}b,strong{font-weight:600}@media (max-width:750px){img{height:100px}#box{width:100%}#words{font-size:14px;width:95%}.rg_embed{margin-top:0!important;margin-bottom:0!important;border-top:0!important;border-bottom:0!important}.rg_embed_body{padding-bottom:7px;padding-top:7px}@media (min-height:666px){#box{height:100%}img{height:150px}}}@media (max-height:480px){img{display:none}}"

  writeStyleChar = function(which) {
    $('#style-tag').append(which);
  };


writeStyles = function(message, index, interval) {
    var pre;
    if (index < message.length) {
      writeStyleChar(message[index++]);
      return setTimeout((function() {
        return writeStyles(message, index, interval);
      }), interval);
    }
};

time = window.innerWidth <= 2;
writeStyles(styles, 0, time);