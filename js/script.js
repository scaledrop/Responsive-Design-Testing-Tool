    var firstPage = "w3c.org";

    function loaded(frameURL, webURL, URLLocation) {
        //window.location.href = 'http://www.scaledrop.com'+'?url='+webURL;
        webURL = 'http://'+webURL;
        $('.iFrame iframe').attr({src: webURL, sandbox: 'allow-same-origin allow-forms allow-scripts', seamless: 'seamless'});
        return false;

    }

    function URLChange(newURL){
        var URLString = window.location.href.split('?url=');
        var URL = URLString[1];
        var URLMatch =  URL.match(/[a-z0-9-]+(\.[a-z0-9-]+)/);
        if(URLMatch && URL !=''){
          URL = URL;
        }
        else{
          alert("Please enter correct website url");
          URL = firstPage;
        }
        loaded('', URL, '');
    }
    //when document loads
    $(function(){
        loaded('', firstPage, '');
        URLChange(firstPage);
        
    });
    //when button clicks
    $(".buttonWrapper button").click(function(){
        var buttonIframe = $(this).attr('class')+"Iframe";
        $('.iFrame').hide();
        $('.' + buttonIframe ).show();
    });
    //when the webURL searchbox is used
    $('#formURL').submit(function(){
        var inputURL = $('#webURL input[type=search]').val();
        inputURL=inputURL.replace('http://','').replace('https://','');
        //$(this).submit(function() {window.location.replace("?"+inputURL); })
        loaded('' , inputURL, inputURL);
        return false;
    });
    //when frame loads
    $('iframe').load(function(){
        var webURL = '',
        inputVal = $('#webURL input[type=search]').val();
        if( inputVal != ''){
          webURL = $('#webURL input[type=search]').val();
        }
        else {
          webURL = firstPage;
        }
    });
    