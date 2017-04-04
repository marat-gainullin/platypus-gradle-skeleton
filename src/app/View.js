/**
 * 
 * @author mg
 */
define(['forms', 'environment', 'logger', 'invoke'],
        function (Forms, Env, Logger, Invoke, ModuleName) {
            function module_constructor() {
                var self = this
                        , form = Forms.loadForm(ModuleName);

                self.show = function () {
                    if (Env.agent === Env.HTML5) {
                        form.view.showOn(document.getElementById('Main'));
                    } else {
                        form.show();
                        Invoke.later(function () {
                            form.maximize();
                        });
                    }
                };
            }
            return module_constructor;
        }
);