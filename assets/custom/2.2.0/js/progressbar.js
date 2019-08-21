(function ($) {
    'use strict';

    /** Document ready handler **/
    $(document).ready(function () {
        // Load scripts for each section (portfolio, counter ...)
        sectionsScripts();
    });

    /** Set of sections scripts **/
    function sectionsScripts() {

        /** Script for Progress Bars **/
        (function () {
            if ($('[data-progressbar]').length) {
                $('[data-progressbar]').each(function (key, bar) {

                    var data = progressbarConfig($(bar).data());

                    switch (data.progressbar) {
                        case 'line':
                            bar = new ProgressBar.Line(bar, data);
                            break;
                        case 'circle':
                            bar = new ProgressBar.Circle(bar, data);
                            break;
                        case 'semicircle':
                            bar = new ProgressBar.SemiCircle(bar, data);
                            break;
                    }

                    bar.animate(data.value);
                });
            }
        })();
    }

    /** Config for progress bar **/
    function progressbarConfig(data) {
        return {
            value: (typeof data.progressbarValue != "undefined") ? parseFloat(data.progressbarValue) : 1,
            progressbar: (typeof data.progressbar != "undefined") ? data.progressbar : 'circle',
            color: (typeof data.progressbarColor != "undefined") ? data.progressbarColor : '#fff',
            strokeWidth: (typeof data.progressbarStrokewidth != "undefined") ? parseInt(data.progressbarStrokewidth) : 4,
            trailWidth: (typeof data.progressbarTrailwidth != "undefined") ? parseFloat(data.progressbarTrailwidth) : 1,
            trailColor: (typeof data.progressbarTrailcolor != "undefined") ? data.progressbarTrailcolor : '#f4f4f4',
            easing: (typeof data.progressbarEasing != "undefined") ? data.progressbarEasing : 'easeInOut',
            duration: (typeof data.progressbarDuration != "undefined") ? parseInt(data.progressbarDuration) : 1400,
            text: {
                autoStyleContainer: false
            },
            from: (typeof data.progressbarFrom != "undefined") ? data.progressbarFrom : { color: '#aaa', width: 1 },
            to: (typeof data.progressbarTo != "undefined") ? data.progressbarTo : { color: '#333', width: 4 },
            // Set default step function for all animate calls
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);

                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                    circle.setText('');
                } else {
                    circle.setText(value + '%');
                }
            }
        };
    }

})(jQuery);