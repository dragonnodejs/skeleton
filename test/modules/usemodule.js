/**
 * Testmodule to use the configuration of the module
 * @param services
 * @param module
 */
module.exports = function(services, module) {
    services.module = {
        a: module.a,
        b: module.b
    };
};