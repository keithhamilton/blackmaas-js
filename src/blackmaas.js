/* Javascript component that can fill Satan Ipsum and Satan Image content 
 * from blackmaas.com into HTML elements that have the appropriate class
 */

window.Blackmaas = (function(){
    var _Blackmaas = function(ipsum,images){
        var replace_ipsum = ipsum;
        var replace_images = images;

        var IpsumNode = function(node){
            var _node = node;
            // get paragraph count from node attribute data-paragraph-count
            var _nParagraphs = _node.getAttribute('data-paragraph-count') || 4;
            // get sentence variance from node attribute data-sentence-variance
            var _sentenceVariance = _node.getAttribute('data-sentence-variance',10) || 0;
            // get enochian included boolean from node attribute data-include-enochian
            var _includeEnochian = _node.getAttribute('data-include-enochian') || false;
            // get enochian weight from node attribute data-enochian-weight
            var _enochianWeight = _node.getAttribute('data-enochian-weight') || 1;
            
            var data = "p="+_nParagraphs+"&sentence_variance="+_sentenceVariance+"&include_enochian="+_includeEnochian+"&enochian_weight="+_enochianWeight;

            var getIpsum = function(){
                var xhr = new XMLHttpRequest();
                xhr.open('GET','http://blackmaas.com/ipsum/generate?'+data,true);
                xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                xhr.onreadystatechange=function() {
                    if (xhr.readyState==4 && xhr.status==200){
                        _node.innerHTML=JSON.parse(xhr.responseText)['text'];
                    }
                }
                xhr.send();
            }
            return {
                getIpsum: getIpsum
            }
        }

        var ipsum = function(){
            var nodes = document.getElementsByClassName('satan-ipsum')
            var node_length = nodes.length;
            while(node_length > 0){
                var _node = new IpsumNode(nodes[node_length-1]);
                _node.getIpsum();
                node_length--;
            }
        }

        var images = function(){
            var nodes = document.getElementsByClassName('satan-image')
            var node_length = nodes.length;
            while(node_length > 0){
                var _node = nodes[node_length-1];
                node_length--;
                //get image width from node attribute data-image-width
                var _width = _node.getAttribute('data-image-width') || 350;
                // get image height from node attribute data-image-height
                var _height = _node.getAttribute('data-image-height') || 500;

                var data = "width="+_width+"&height="+_height;
                _node.src="http://blackmaas.com/image/generate?"+data;
            }
        }

        var hailSatan = function(){
            if(replace_ipsum){
                ipsum();
            }
            if(replace_images){
                images();
            }
        }
        
        return {
            hailSatan: hailSatan
        }

    }
    return _Blackmaas;
})()