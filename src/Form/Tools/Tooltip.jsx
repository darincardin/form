
var Tooltip = function(elem, loaderContext)  {

         var input = $(elem).find('.form-control');

         var placement = window.innerWidth > 540 ? 'right' : 'top';
         input.popover({ placement: placement, html:true, trigger: 'focus' });
    
         var value = function(val) {
			 
           if (val === undefined) return input.data('bs.popover').options.content;
           input.data('bs.popover').options.content = val;
         }

         return {
            show: function(data) {
				
               if (data != value()) {
                  value(data);
                  input.popover('show');
               }
            },
            hide: function() {
               value("");
               input.popover('hide');
            }
         }
};

export default Tooltip