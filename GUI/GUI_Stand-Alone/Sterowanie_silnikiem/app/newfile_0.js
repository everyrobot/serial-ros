/*
 * gc global variable provides access to GUI Composer infrastructure components and project information.
 * For more information, please see the Working with Javascript guide in the online help.
 */
var gc = gc || {};
gc.services = gc.services || {};

/*
*  Boilerplate code for creating computed data bindings
*/
document.addEventListener('gc-databind-ready', function() 
{
    /* 
	*   Add custom computed value databindings here, using the following method:
	*
    *   function gc.databind.registry.bind(targetBinding, modelBinding, [getter], [setter]);
	*
	*   param targetBinding - single binding string or expression, or array of binding strings for multi-way binding.
	*   param modelBinding - single binding string or expression, or array of binding strings for multi-way binding.
	*   param getter - (optional) - custom getter function for computing the targetBinding value(s) based on modelBinding value(s).
	*   param setter - (optional) - custom setter function for computing the modelBinding value(s) based on targetBinding value(s).
    */
	
	// For example, a simple computed values based on simple expression
	// gc.databind.registry.bind('widget.id.propertyName', "targetVariable == 1 ? 'binding is one' : 'binding is not one'");
	
	// Or a custom two-way binding with custome getter and setter functions.  (setter is optional)  (getter only indicates one-way binding)
	// gc.databind.registry.bind('widget.id.propertyName', "targetVariable", function(value) { return value*5/9 + 32; }, function(value) { (return value-32)*9/5; });
	
	// Event 1 to n bindings
    
    gc.databind.registry.bind('widget.ti_widget_numberbox.value', 
    
    // dependant bindings needed in order to compute the date, in name/value pairs.
    "gParametersVars.goal_mode",
    // getter for date computation
    function(value) 
    {
        return value;
    },
    function(value) 
    {
        return value;
    });

	
	gc.databind.registry.bind('widget.ti_widget_textbox.value', 
    
    // dependant bindings needed in order to compute the date, in name/value pairs.
    "gResultsVars.motor_position_rad",
    // getter for date computation
    function(value) 
    {
        var toQ24 = value/(Math.pow(2,24));
        return Math.round(toQ24 * 10000)/10000;
    },
    function(value) 
    {
        return Math.round(value*(Math.pow(2,24)));
    });
	
    gc.databind.registry.bind('widget.ti_widget_textbox_accel.value', 
    
    // dependant bindings needed in order to compute the date, in name/value pairs.
    "device.gParametersVars.motor_accel_limit",
    // getter for date computation
    function(value) 
    {
        var toQ24 = value/(Math.pow(2,24));
        return Math.round(toQ24 * 10000)/10000;
    },
    function(value) 
    {
        return Math.round(value*(Math.pow(2,24)));
    });
    
    gc.databind.registry.bind('widget.ti_widget_textbox_decel.value', 
    "device.gParametersVars.motor_decel_limit",
    function(value) 
    {
        var toQ24 = value/(Math.pow(2,24));
        return Math.round(toQ24 * 10000)/10000;
    },
    function(value) 
    {
        return Math.round(value*(Math.pow(2,24)));
    });
    
    gc.databind.registry.bind('widget.ti_widget_textbox_speed.value', 
    "device.gParametersVars.motor_speed_limit",
    function(value) 
    {
        var toQ24 = value/(Math.pow(2,24));
        return Math.round(toQ24 * 10000)/10000;
    },
    function(value) 
    {
        return Math.round(value*(Math.pow(2,24)));
    });
    
    gc.databind.registry.bind('widget.ti_widget_textbox_current.value', 
    "device.gParametersVars.motor_output_max_A",
    function(value) 
    {
        var toQ24 = value/(Math.pow(2,24));
        return Math.round(toQ24 * 10000)/10000;
    },
    function(value) 
    {
        return Math.round(value*(Math.pow(2,24)));
    });
    
    gc.databind.registry.bind('widget.ti_widget_slider_speed.value', 
    "device.gParametersVars.velocity_sp",
    function(value) 
    {
        var toQ24 = value/(Math.pow(2,24));
        return Math.round(toQ24 * 100)/100;
    },
    function(value) 
    {
        return Math.round(value*(Math.pow(2,24)));
    });
    
    gc.databind.registry.bind('widget.ti_widget_slider_position.value', 
    "device.gParametersVars.motor_position_sp",
    function(value) 
    {
        var toQ24 = value/(Math.pow(2,24));
        return Math.round(toQ24 * 100)/100;
    },
    function(value) 
    {
        return Math.round(value*(Math.pow(2,24)));
    });
    
        gc.databind.registry.bind('widget.ti_widget_textbox1.value', 
    "device.gParametersVars.velocity_sp",
    function(value) 
    {
        var toQ24 = value/(Math.pow(2,24));
        return Math.round(toQ24 * 100)/100;
    },
    function(value) 
    {
        return Math.round(value*(Math.pow(2,24)));
    });
    
    gc.databind.registry.bind('widget.ti_widget_textbox2.value', 
    "device.gParametersVars.motor_position_sp",
    function(value) 
    {
        var toQ24 = value/(Math.pow(2,24));
        return Math.round(toQ24 * 100)/100;
    },
    function(value) 
    {
        return Math.round(value*(Math.pow(2,24)));
    });
	
	
});

/*
*  Boilerplate code for creating custom actions
*/
document.addEventListener('gc-nav-ready', function() 
{
    /* 
	*   Add custom actions for menu items using the following api:
	*
    *   function gc.nav.registryAction(id, runable, [isAvailable], [isVisible]);
	*
	*   param id - uniquely identifies the action, and should correspond to the action property of the menuaction widget.
	*   param runable - function that performs the custom action.
	*   param isAvailable - (optional) - function called when the menu action is about to appear.  Return false to disable the action, or true to enable it.
	*   param isVisible - (optional) - function called when the menu action is about to appear.  Return false to hide the action, or true to make it visible.
    */
	
	// For example,
	// gc.nav.registerAction('myCustomCloseAction', function() { window.close(); }, function() { return true; }, function() { return true; });
	
	// Alternatively, to programmatically disable a menu action at any time use:
	// gc.nav.disableAction('myCustomCloseAction);    then enable it again using:  gc.nav.enableAction('myCustomCloseAction'); 
});

/*
*  Boilerplate code for working with components in the application gist
*/
/*

var initComplete = false;
var templateObj;

// Wait for DOMContentLoaded event before trying to access the application template
var init = function() {
    templateObj = document.querySelector('#template_obj');

    // Wait for the template to fire a dom-change event to indicate that it has been 'stamped'
    // before trying to access components in the application.
	templateObj.addEventListener('dom-change',function(){
	    if (initComplete) return;
	    this.async(function(){
    	    initComplete = true;
    	    console.log("Application template has been stamped.");
  	        // Now that the template has been stamped, you can use 'automatic node finding' $ syntax to access widgets.
  	        // e.g. to access a widget with an id of 'widget_id' you can use templateObj.$.widgetId

        },1);

	});
};

templateObj = document.querySelector('#template_obj');
if (templateObj) {
    init();
} else {
    document.addEventListener('DOMContentLoaded',init.bind(this))
}
*/

