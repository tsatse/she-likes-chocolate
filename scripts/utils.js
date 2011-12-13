define(function() {
    var Utils = {
        get_new_id: function(counter_name) {
                function format_result(name, value) {
                    return name + "_" + value;
                }
                var result = '';
                if(!counter_name) {
                    counter_name = "#default_id_name#";
                }
                if(!this.counters) {
                    this.counters = {};
                }
                if(!this.counters.hasOwnProperty(counter_name)) {
                    this.counters[counter_name] = 0;
                }
                result = format_result(counter_name, this.counters[counter_name]);
                this.counters[counter_name]++;
                return result;
            },
            
        get_element_position: function(element) {
                var left = 0;
                var top = 0;
                var e = element;
                while (e.offsetParent != undefined && e.offsetParent != null)
                {
                    left += e.offsetLeft + (e.clientLeft != null ? e.clientLeft : 0);
                    top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
                    e = e.offsetParent;
                }
                return {
                    x: left,
                    y: top
                }
            },
            
        get_mouse_position: function(event, dom_element) {
                var result = {};
                if (event.pageX != undefined && event.pageY != undefined) {
                    result.x = event.pageX;
                    result.y = event.pageY;
                }
                else {
                    result.x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                    result.y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
                }
                if(dom_element) {
                    var element_position = Utils.get_element_position(dom_element);
                    result.x -= element_position.x;
                    result.y -= element_position.y;
                }
                // result.x = event.layerX - 8;
                // result.y = event.layerY - 8;
                return result;
            },
            
        assert_not_null: function(value, message) {
                if(!value) {
                    alert("Sorry, something went wrong : " + message);
                }
            },
            
        empty_dom_element: function(dom_element) {
                while ( dom_element.childNodes.length >= 1 ) {
                    dom_element.removeChild( dom_element.firstChild );       
                }
            }
    };
    return Utils;
});