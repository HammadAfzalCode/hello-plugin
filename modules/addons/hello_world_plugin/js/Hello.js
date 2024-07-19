(function (global) {
    function HelloWorldPlugin() { }

    HelloWorldPlugin.prototype.sayHello = function () {
        alert('Hello World');
    };

    // Expose the plugin to the global object
    global.HelloWorldPlugin = HelloWorldPlugin;
})(this);

// Usage:
// var hello = new HelloWorldPlugin();
// hello.sayHello();
