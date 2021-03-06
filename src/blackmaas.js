/* Javascript component that can fill Satan Ipsum and Satan Image content 
 * from blackmaas.com into HTML elements that have the appropriate class
 */

(function(base, factory) {

    // RequireJS
    if (typeof define === "function" && define.amd) {
        define(factory);

    // CommonJS
    } else if (typeof exports === "object") {
          module.exports = factory();

    // Global Space
    } else {
        base.Blackmaas = factory();
    }

}(this, function(){
    var Blackmaas = function(ipsum,images){
        var replace_ipsum = ipsum === false ? false : true;
        var replace_images = images === false ? false : true;
        var image_color = null;
        var image_choice = null;

        var _IpsumNode = function(node){
            var _node = node;
            // get paragraph count from node attribute data-paragraph-count
            var _nParagraphs = _node.getAttribute('data-paragraph-count') || 4;
            // get sentence variance from node attribute data-sentence-variance
            var _sentenceVariance = _node.getAttribute('data-sentence-variance',10) || 0;
            // get enochian included boolean from node attribute data-include-enochian
            var _includeEnochian = _node.getAttribute('data-include-enochian') || false;
            // get enochian weight from node attribute data-enochian-weight
            var _enochianWeight = _node.getAttribute('data-enochian-weight') || 1;
            
            var _data = "p="+_nParagraphs+"&sentence_variance="+_sentenceVariance+"&include_enochian="+_includeEnochian+"&enochian_weight="+_enochianWeight;

            var _getIpsum = function(){
                var xhr = new XMLHttpRequest();
                xhr.open('GET','http://blackmaas.com/ipsum/generate?'+_data,true);
                xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                xhr.onreadystatechange=function() {
                    if (xhr.readyState==4 && xhr.status==200){
                        _node.innerHTML=JSON.parse(xhr.responseText)['text'];
                    }
                }
                xhr.send();
            }
            return {
                getIpsum: _getIpsum
            }
        }

        var _ipsum = function(){
            var nodes = document.getElementsByClassName('satan-ipsum')
            var node_length = nodes.length;
            while(node_length > 0){
                var _node = new _IpsumNode(nodes[node_length-1]);
                _node.getIpsum();
                node_length--;
            }
        }

        var _images = function(){
            var nodes = document.getElementsByClassName('satan-image')
            var node_length = nodes.length;
            var images=['pentagram','skull','blackmaas','baphomet'];
            var colors=['black','blood'];
            while(node_length > 0){
                var _image_choice = image_choice;
                var _image_color = image_color;
                var _node = nodes[node_length-1];
                node_length--;
                //get image width from node attribute data-image-width
                var _width = _node.getAttribute('data-image-width') || 350;
                // get image height from node attribute data-image-height
                var _height = _node.getAttribute('data-image-height') || 500;
                // get an image. if an image is defined by a data attribute, use that.
                // if not, use the global image type.
                // if no global image type was defined, pick one at random
                _image_choice = _node.getAttribute('data-image-type') ? _node.getAttribute('data-image-type') : _image_choice;
                var _image = _image_choice ? _image_choice : images[Math.floor((Math.random()*images.length)+1)-1];
                // get a color. if a color is defined by a data attribute, use that.
                // if not, use the global color type
                // if no global color type was defined, pick one at random
                _image_color = _node.getAttribute('data-image-color') ? _node.getAttribute('data-image-color') : _image_color;
                var _color = _image_color ? _image_color : Math.floor((Math.random()*2)+1) % 2 === 0 ? 'black' : 'blood';

                var data = "width="+_width+"&height="+_height+"&image="+_image+"&color="+_color;
                _node.src="http://blackmaas.com/image/generate?"+data;
            }
        }

        var _setColor = function(color){
            image_color = color;
            return this;
        }

        var _setImage = function(image){
            image_choice = image;
            return this;
        }

        var _hailSatan = function(){
            if(replace_ipsum){
                _ipsum();
            }
            if(replace_images){
                _images();
            }
        }
        
        return {
            hailSatan: _hailSatan,
            setColor: _setColor,
            setImage: _setImage
        }

    }
    return Blackmaas;
}));