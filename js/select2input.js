/*******************************************************************************
select2input
Copyright (c) 2011. Daniel Martuszewski

Licences: MIT, GPL
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
******************************************************************************/

/*
* Name:select2input
* Version: 1.0
*/

var options = new Array();
(function( $ ) {
    $.fn.select2input = function() {
        var currentLength,
            maxLength = 1;
        return this.each(function(index, obj) {
            $(obj).children('option').each(function(index, el) {
                options.push(el.value);
                currentLength = el.value.length;
                if( currentLength > maxLength) {
                    maxLength = currentLength
                }
            });
        
            var input = '<input type="text" value="' + obj.value
                + '" name="' + obj.name
                + '" id="' + obj.id
                + '" size="' + maxLength
                + '" onclick="rorateValues(this)" />';
            $(obj).replaceWith(input);
        });
    }

})(jQuery);

function rorateValues(obj) {
    var len = options.length;
    if($(obj).val() === options[len-1]) {
        $(obj).val(options[0]);
    } else {
        var index = jQuery.inArray($(obj).val(), options);
        $(obj).val(options[index+1]);
    }
}
