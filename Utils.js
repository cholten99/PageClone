// Helper function from : http://goo.gl/ZFacl

/* jQuery.values: get or set all of the name/value pairs from child input controls   
 * @argument data {array} If included, will populate all child controls.
 * @returns element if data was provided, or array of values if not
*/

$.fn.values = function(data) {
   var inps = $(this).find(":input").get();

    if(typeof data != "object") {
       // return all data
        data = {};

        $.each(inps, function() {
            if (this.name && (this.checked
                        || /select|textarea/i.test(this.nodeName)
                        || /text|hidden|password/i.test(this.type))) {
                data[this.name] = $(this).val();
            }
        });
        return data;
    } else {
        $.each(inps, function() {
            if (this.name && data[this.name]) {
                if(this.type == "checkbox" || this.type == "radio") {
                    $(this).prop("checked", (data[this.name] == $(this).val()));
                } else {
                    $(this).val(data[this.name]);
                }
            } else if (this.type == "checkbox") {
                $(this).prop("checked", false);
            }
       });
       return $(this);
    }
};