var TSV = TSV || {}; TSV.ViewerScript = {
    Helper: {
        getInnerViewerDiv: function (regId) { return document.getElementById('ts3v_' + regId); }, getOuterViewerDiv: function (regId) { return document.getElementById('ts3viewer_' + regId); }, storageAvailable: function (type) {
            try { var storage = window[type]; var x = '__storage_test__'; storage.setItem(x, x); storage.removeItem(x); return true; }
            catch (e) { return false; }
        }
    }, Loader: {
        staticFilesUrl: 'https://static.tsviewer.com/', pageUrl: 'https://www.tsviewer.com/', scriptLoaders: {}, styleSheetGenerators: {}, urlParsers: {}, ScriptLoader: function (url, onLoadCallback, onErrorCallback) {
        this.url = url; this.onLoadCallback = onLoadCallback; this.onErrorCallback = onErrorCallback; this.element = null; this.createAndAppend = function () { this.element = document.createElement('script'); this.element.type = 'text/javascript'; this.element.charset = 'utf-8'; this.element.async = 1; this.element.src = this.url; document.head.appendChild(this.element); this.element.onload = this.onLoadCallback; this.element.onerror = this.onErrorCallback; }; this.remove = function () { document.head.removeChild(this.element); }
        }, UrlParser: function (url) {
        this.url = url; this.parsed = null; this.getUrl = function () { return this.url; }; this.getParsed = function () {
                if (this.parsed == null) { this.parse(); }
                return this.parsed;
            }; this.parse = function () {
                var vars = {}; this.url.replace
                    (/[?&]+([^=&]+)=?([^&]*)?/gi, function (m, key, value) {
                        if (typeof value == 'undefined') { value = null; }
                        vars[key] = value;
                    }); this.parsed = vars;
            };
        }, StyleSheetGenerator: function (params) {
        this.params = params; this.generatedCss = null; this.element = null; this.getCss = function () {
            if (this.generatedCss === null) { this.generate(); }
            return this.generatedCss;
        }; this.append = function () { this.element = document.createElement('style'); this.element.type = 'text/css'; this.element.innerHTML = this.getCss(); document.head.appendChild(this.element); }; this.remove = function () { document.head.removeChild(this.element); }; this.generate = function () {
                var sl = '#' + 'ts3v_' + this.getValue('ID'); var css = ''; css += sl + ' * ' +
                    '{' +
                    'border: 0;' +
                    'margin: 0;' +
                    'padding: 0;' +
                    'line-height: inherit;' +
                    '}' +
                    sl +
                    '{' +
                    'display: block;' +
                    'width: 100%;' +
                    'height: 100%;' +
                    'text-align: left !important;' +
                    'line-height: 16px;' +
                    'overflow: auto;' +
                    'padding-bottom: 4px;' +
                    '}' +
                    sl + ', ' +
                    sl + ' small, ' +
                    sl + ' .tsv_server a:link, ' +
                    sl + ' .tsv_server a:visited, ' +
                    sl + ' .tsv_server a:active, ' +
                    sl + ' .tsv_server a:hover, ' +
                    sl + ' .tsv_serverinfo, ' +
                    sl + ' .tsv_serverinfo a:link, ' +
                    sl + ' .tsv_serverinfo a:visited, ' +
                    sl + ' .tsv_serverinfo a:active, ' +
                    sl + ' .tsv_serverinfo:hover, ' +
                    sl + ' .tsv_serverinfo:hover a:hover, ' +
                    sl + ' .tsv_channel, ' +
                    sl + ' .tsv_channel:hover, ' +
                    sl + ' .tsv_user, ' +
                    sl + ' .tsv_user a:link, ' +
                    sl + ' .tsv_user a:visited, ' +
                    sl + ' .tsv_user a:active, ' +
                    sl + ' .tsv_user:hover, ' +
                    sl + ' .tsv_user:hover a:hover, ' +
                    sl + ' .tsv_spacer, ' +
                    sl + ' .tsv_content ' +
                    '{' +
                    this.getRule('color', this.getColor('text')) +
                    this.getRule('font-family', this.getFontFamily()) +
                    this.getRule('font-size', this.getPixelSize('text_size')) +
                    '}' +
                    sl + ' .tsv_level ' +
                    '{' +
                    'line-height: 1.5;' +
                    'clear: both;' +
                    'white-space: nowrap;' +
                    '}' +
                    sl + '.hideEmptyChannels .tsv_channel.tsv_empty, ' +
                    sl + '.hideEmptyChannels .tsv_spacer.tsv_empty ' +
                    '{' +
                    'display: none;' +
                    '}' +
                    sl + '.hideEmptyChannels .tsv_channel ' +
                    '{' +
                    'margin-top: 4px !important;' +
                    '}' +
                    sl + ' .tsv_serverinfo ' +
                    '{' +
                    'margin-bottom: 4px !important;' +
                    '}' +
                    sl + '.hideEmptyChannels .tsv_serverinfo ' +
                    '{' +
                    'margin-bottom: 0 !important;' +
                    '}' +
                    sl + '.hideEmptyChannels .tsv_level.tsv_channel .tsv_content, ' +
                    sl + '.hideEmptyChannels .tsv_level.tsv_spacer .tsv_content ' +
                    '{' +
                    'padding-left: 0 !important;' +
                    '}' +
                    sl + '.hideEmptyChannels .tsv_level.tsv_user .tsv_content ' +
                    '{' +
                    'padding-left: 40px !important;' +
                    '}' +
                    sl + '.hideFlags .tsv_level.tsv_user .tsv_suffix .tsv_flag ' +
                    '{' +
                    'display: none !important;' +
                    '}'; for (var i = 0; i <= 8; i++) {
                    css += sl + ' .tsv_level .tsv_content.tsv_depth_' + i +
                    '{' +
                    'padding-left: ' + (i * 20) + 'px' +
                    '}';
                }
                css += sl + ' .tsv_content ' +
                    '{' +
                    'box-sizing: border-box;' +
                    '-moz-box-sizing: border-box;' +
                    '-webkit-box-sizing: border-box;' +
                    'background: none !important;' +
                    'background-color: transparent !important;' +
                    'float: none !important;' +
                    'width: auto !important;' +
                    '}' +
                    sl + ' .tsv_level .tsv_content:before, ' +
                    sl + ' .tsv_level .tsv_content:after, ' +
                    sl + ' .tsv_user:before, ' +
                    sl + ' .tsv_user:after, ' +
                    sl + ' .tsv_user .tsv_flag:before, ' +
                    sl + ' .tsv_user .tsv_flag:after ' +
                    '{' +
                    'content: initial;' +
                    'display: none;' +
                    'clear: none;' +
                    '}' +
                    sl + ' .tsv_level img ' +
                    '{' +
                    'vertical-align: text-top;' +
                    'height: 16px;' +
                    'width: 16px;' +
                    '}' +
                    sl + ' .tsv_suffix ' +
                    '{' +
                    'float: right;' +
                    'position: relative;' +
                    'text-align: right;' +
                    '}' +
                    sl + ' .tsv_suffix i ' +
                    '{' +
                    'margin-left: 3px;' +
                    '}' +
                    sl + ' .tsv_prefixIcon ' +
                    '{' +
                    'margin-right: 6px;' +
                    '}' +
                    sl + ' .tsv_left ' +
                    '{' +
                    'text-align: left;' +
                    '}' +
                    sl + ' .tsv_center ' +
                    '{' +
                    'text-align: center;' +
                    '}' +
                    sl + ' .tsv_right ' +
                    '{' +
                    'text-align: right;' +
                    '}' +
                    sl + ' .tsv_server a:link, ' + sl + ' .tsv_server a:visited ' +
                    '{' +
                    this.getDefaultDefinition('text_s', false) +
                    '}' +
                    sl + ' .tsv_server a:active, ' + sl + ' .tsv_server a:hover ' +
                    '{' +
                    this.getDefaultDefinition('text_s', true) +
                    '}' +
                    sl + ' .tsv_serverinfo a:link, ' + sl + ' .tsv_serverinfo a:visited' +
                    '{' +
                    this.getDefaultDefinition('text_i', false) +
                    '}' +
                    sl + ' .tsv_serverinfo a:active, ' + sl + ' .tsv_serverinfo a:hover ' +
                    '{' +
                    this.getDefaultDefinition('text_i', true) +
                    '}' +
                    sl + ' .tsv_channel .tsv_content ' +
                    '{' +
                    this.getDefaultDefinition('text_c', false) +
                    '}' +
                    sl + ' .tsv_channel:hover .tsv_content ' +
                    '{' +
                    this.getDefaultDefinition('text_c', true) +
                    '}' +
                    sl + ' .tsv_user, ' + sl + ' .tsv_user a:link, ' + sl + ' .tsv_user a:visited, ' + sl + ' .tsv_user a:active ' +
                    '{' +
                    this.getDefaultDefinition('text_u', false) +
                    '}' +
                    sl + ' .tsv_user:hover, ' + sl + ' .tsv_user:hover a:hover ' +
                    '{' +
                    this.getDefaultDefinition('text_u', true) +
                    '}' +
                    sl + ' .tsv_user .tsv_content .ts3v_user_tooltip ' +
                    '{' +
                    'display: none !important;' +
                    'position: absolute;' +
                    'z-index: 100;' +
                    'background-color: white;' +
                    'color: grey;' +
                    'font-size: 11px;' +
                    'font-weight: normal;' +
                    'width: 127px;' +
                    'overflow: hidden;' +
                    'padding: 3px;' +
                    'border-radius: 3px;' +
                    'box-sizing: border-box;' +
                    'box-shadow: 0 1px 3px #888;' +
                    '}' +
                    sl + ' .tsv_user .tsv_content .ts3v_user_tooltip div label ' +
                    '{' +
                    'color: grey;' +
                    'white-space: nowrap;' +
                    'display: inline-block;' +
                    'width: 48px;' +
                    'font-size: 11px;' +
                    'font-weight: normal;' +
                    'font-family: inherit;' +
                    'text-align: right;' +
                    'padding-right: 8px;' +
                    'line-height: inherit;' +
                    '}' +
                    sl + ' .tsv_user .tsv_content .ts3v_user_tooltip div span ' +
                    '{' +
                    'color: black;' +
                    'white-space: nowrap;' +
                    'display: inline-block;' +
                    'font-size: 11px;' +
                    'font-weight: normal;' +
                    'font-family: inherit;' +
                    'line-height: inherit;' +
                    '}' +
                    sl + ' .tsv_user .tsv_content .ts3v_user_tooltip a.boxedLink ' +
                    '{' +
                    'display: block !important;' +
                    'color: #545454 !important;' +
                    'background-color: #F1F1F1 !important;' +
                    'font-size: 10px !important;' +
                    'margin-top: 4px !important;' +
                    'margin-bottom: 4px !important;' +
                    'border: 1px solid #d8d8d8 !important;' +
                    'padding: 1px 5px !important;' +
                    'text-align: center !important;' +
                    'font-weight: normal !important;' +
                    '}' +
                    sl + ' .tsv_user .tsv_content .ts3v_user_tooltip a.boxedLink:hover ' +
                    '{' +
                    'color: #000000 !important;' +
                    'background-color: #ffcc00 !important;' +
                    'border: 1px solid #d78e00 !important;' +
                    '}' +
                    sl + ' .tsv_user .tsv_content .ts3v_user_tooltip .tsv_userBanner ' +
                    '{' +
                    'width: 121px;' +
                    'height: 23px;' +
                    'display: block;' +
                    '}' +
                    sl + ' .tsv_user:hover .tsv_content .ts3v_user_tooltip ' +
                    '{' +
                    'display: block !important;' +
                    '}'; var iconsPath = TSV.ViewerScript.Loader.staticFilesUrl + 'images/ts3/'; var iconSet = this.getValue('iconset', 'default'); var viewerImages = ['host', 'tree', 'group_icon_100', 'group_icon_200', 'group_icon_300', 'group_icon_400', 'group_icon_500', 'group_icon_600', 'channel_full', 'channel_pass', 'channel_open', 'channel_flag_default', 'channel_flag_password', 'channel_flag_music', 'channel_flag_moderated', 'client_away', 'client_priority', 'client_cc', 'client_idle', 'client_talker', 'client_mic_muted', 'client_mic_disabled', 'client_snd_disabled', 'client_snd_muted', 'client_cc_talk', 'client_cc_idle']; var flagImages = ['ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'an', 'ao', 'ar', 'as', 'at', 'au', 'aw', 'ax', 'az', 'ba', 'bb', 'bd', 'be', 'bf', 'bg', 'bh', 'bi', 'bj', 'bl', 'bm', 'bn', 'bo', 'br', 'bs', 'bt', 'bv', 'bw', 'by', 'bz', 'ca', 'cc', 'cd', 'cf', 'cg', 'ch', 'ci', 'ck', 'cl', 'cm', 'cn', 'co', 'cr', 'cs', 'cu', 'cv', 'cx', 'cy', 'cz', 'de', 'dj', 'dk', 'dm', 'do', 'dz', 'ec', 'ee', 'eg', 'eh', 'er', 'es', 'et', 'fi', 'fj', 'fk', 'fm', 'fo', 'fr', 'ga', 'gb', 'gd', 'ge', 'gf', 'gg', 'gh', 'gi', 'gl', 'gm', 'gn', 'gp', 'gq', 'gr', 'gs', 'gt', 'gu', 'gw', 'gy', 'hk', 'hm', 'hn', 'hr', 'ht', 'hu', 'id', 'ie', 'il', 'im', 'in', 'io', 'iq', 'ir', 'is', 'it', 'je', 'jm', 'jo', 'jp', 'ke', 'kg', 'kh', 'ki', 'km', 'kn', 'kp', 'kr', 'kw', 'ky', 'kz', 'la', 'lb', 'lc', 'li', 'lk', 'lr', 'ls', 'lt', 'lu', 'lv', 'ly', 'ma', 'mc', 'md', 'me', 'mg', 'mh', 'mk', 'ml', 'mm', 'mn', 'mo', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx', 'my', 'mz', 'na', 'nc', 'ne', 'nf', 'ng', 'ni', 'nl', 'no', 'np', 'nr', 'nu', 'nz', 'om', 'pa', 'pe', 'pf', 'pg', 'ph', 'pk', 'pl', 'pm', 'pn', 'pr', 'ps', 'pt', 'pw', 'py', 'qa', 're', 'ro', 'rs', 'ru', 'rw', 'sa', 'sb', 'sc', 'sd', 'se', 'sg', 'sh', 'si', 'sj', 'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'st', 'sv', 'sy', 'sz', 'tc', 'td', 'tf', 'tg', 'th', 'tj', 'tk', 'tl', 'tm', 'tn', 'to', 'tr', 'tt', 'tv', 'tw', 'tz', 'ua', 'ug', 'uk', 'um', 'us', 'uy', 'uz', 'va', 'vc', 've', 'vg', 'vi', 'vn', 'vu', 'wf', 'ws', 'ye', 'yt', 'za', 'zm', 'zw']; for (i = 0; i < viewerImages.length; i++) {
                    css += sl + ' i.tsv_viewer.' + viewerImages[i] + ' ' +
                    '{' +
                    'background-image: url(' + iconsPath + 'viewer/' + iconSet + '/' + viewerImages[i] + '.png);' +
                    '}';
                }
                for (i = 0; i < flagImages.length; i++) {
                    css += sl + ' i.tsv_flag.' + flagImages[i] + ' ' +
                    '{' +
                    'background-image: url(' + iconsPath + 'flags/' + flagImages[i] + '.png);' +
                    '}';
                }
                css += sl + ' .tsv_level.tsv_spacer.tsv_center i.tsv_viewer.tree, ' +
                    sl + ' .tsv_level.tsv_spacer.tsv_right i.tsv_viewer.tree ' +
                    '{' +
                    'background-image: none;' +
                    'width: 0 !important;' +
                    '}'; css += sl + ' i.tsv_viewer.tree ' +
                        '{' +
                        'margin-right: 4px;' +
                        '}'; css += sl + ' i ' +
                            '{' +
                            'display: inline-block !important;' +
                            'vertical-align: text-bottom !important;' +
                            'background-size: contain !important;' +
                            'background-repeat: no-repeat !important;' +
                            '}' +
                            sl + ' i.tsv_viewer ' +
                            '{' +
                            'width: 16px !important;' +
                            'height: 16px !important;' +
                            '}' +
                            sl + ' i.tsv_flag ' +
                            '{' +
                            'width: 16px !important;' +
                            'height: 11px !important;' +
                            'vertical-align: middle !important;' +
                            '}'; this.generatedCss = css;
            }; this.getDefaultDefinition = function (key, isHover) {
                var css = ''; var keySuffix = ''; if (isHover) { keySuffix = '_h'; }
                css += 'display: inline !important;' +
                    'text-align: left !important;' +
                    this.getRule('color', this.getColor(key + '_color' + keySuffix)) +
                    this.getRuleWithKey('font-weight', key + '_weight' + keySuffix, null) +
                    this.getRuleWithKey('font-style', key + '_style' + keySuffix, null) +
                    this.getRuleWithKey('font-variant', key + '_variant' + keySuffix, null) +
                    this.getRuleWithKey('text-decoration', key + '_decoration' + keySuffix, 'none'); return css;
            }; this.getRuleWithKey = function (property, key, defaultValue) { return this.getRule(property, this.getValue(key, defaultValue)); }; this.getRule = function (property, value) {
                if (value !== null) { return property + ': ' + value + ' !important;'; }
                else { return ''; }
            }; this.getColor = function (key) {
                var value = null; if (key != 'text') { value = this.getValue(key); }
                if (value === null) { value = this.getValue('text'); }
                if (value !== null) { return '#' + value; }
                else { return value; }
            }; this.getPixelSize = function (key) {
                var value = this.getValue(key); if (value !== null) { return value + 'px'; }
                else { return value; }
            }; this.getValue = function (key, defaultValue) {
                if (typeof this.params[key] != 'undefined' && this.params[key] !== null) { return this.params[key]; }
                else {
                    if (typeof defaultValue != 'undefined') { return defaultValue; }
                    return null;
                }
            }; this.getFontFamily = function () {
                var param = this.getValue('text_family'); if (param !== null) {
                    switch (param) { case '2': return "Times New Roman, Times, serif"; case '3': return "Georgia, Times New Roman, Times, serif"; case '4': return "Verdana, Arial, Helvetica, sans-serif"; case '5': return "Arial, Helvetica, sans-serif"; case '6': return "inherit"; }
                }
                return "'Segoe UI', FreeSans, sans-serif";
            };
        }, init: function (url, regId, maxRepetitions) {
            if (this.blockUnauthorizedApp(regId)) { return; }
            this.urlParsers[regId] = new this.UrlParser(url); this.styleSheetGenerators[regId] = new this.StyleSheetGenerator(this.urlParsers[regId].getParsed()); this.styleSheetGenerators[regId].append(); this.load(regId);
        }, blockUnauthorizedApp: function (regId) {
            if (window.location.hostname == 'bploeg.com') { var message = '<div style="font-family: Roboto, sans-serif;">'; message += '<div style="font-size: 14px; margin-bottom: 24px;">This unauthorized App has been replaced by the TSViewer.com WebApp. Get it on Google Play.</div>'; message += '<div style="background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 8px; margin: 8px;" onclick="window.location.href=\'https://play.google.com/store/apps/details?id=com.tsviewer.webapp\'">'; message += '<img style="display: inline-block; vertical-align: middle; width: 42px; margin-right: 16px;" src="https://lh3.googleusercontent.com/3S-JzTDrxSDQ84O0MtFuaxYrjqffmxWa05Y5BPyQKpjBpsIsVZS-w1G9DwRInehQUg=w300-rw">'; message += '<div style="display: inline-block; vertical-align: middle;"><div style="font-size: 16px;">TSViewer.com</div><div style="font-size: 12px; color: grey;">Viewer for TeamSpeak 3</div></div>'; message += '</div>'; message += '<a style="clear: both; display: block; margin-top: 32px;" href="https://play.google.com/store/apps/details?id=com.tsviewer.webapp"><img src="' + TSV.ViewerScript.Loader.staticFilesUrl + 'images/play_store_badge_bright.png" style="width: 106px; float: right;"></a>'; message += '</div>'; TSV.ViewerScript.Helper.getOuterViewerDiv(regId).innerHTML = message; return true; }
            else { return false; }
        }, load: function (regId) {
            var onLoadCallback = function () { this.finishUpdate(regId, true); }.bind(this); var onErrorCallback = function () { this.finishUpdate(regId, false); }.bind(this); this.scriptLoaders[regId] = new this.ScriptLoader
                (this.urlParsers[regId].getUrl(), onLoadCallback, onErrorCallback); this.scriptLoaders[regId].createAndAppend(); TSV.ViewerScript.Helper.getOuterViewerDiv(regId).innerHTML = ' <img src="' + this.staticFilesUrl + 'images/loading_14.svg" alt="" title="' + regId + '" /> Querying TS3 with <a href="' + this.pageUrl + '" target="_blank">TSViewer.com</a>';
        }, finishUpdate: function (regId, success) {
            var html; if (!success) { html = 'Could not load the TSViewer<br>Please report this issue via <a href="mailto:info@tsviewer.com?subject=TS3Viewer Loader Error">email</a>'; }
            else { html = TSV.ViewerScript.Data[regId]['html']; }
            TSV.ViewerScript.Helper.getOuterViewerDiv(regId).innerHTML = html; if (typeof TSV.TsviewerPage != 'undefined' && typeof TSV.TsviewerPage.receiveData == 'function') { TSV.TsviewerPage.receiveData(); }
            else { this.applyLocalStoragePreferences(regId); }
            if (typeof displayClientData == 'undefined') {
            window.displayClientData = function (div) { }
            }
            TSV.ViewerScript.ToolTips.addEvents(regId);
        }, refresh: function (regId) { this.scriptLoaders[regId].remove(); delete TSV.ViewerScript.Data[regId]; this.load(regId); }, setUrl: function (regId, url) {
            if (this.urlParsers[regId].getUrl() != url) { this.urlParsers[regId] = new this.UrlParser(url); }
        }, redoCss: function (regId) { this.styleSheetGenerators[regId].remove(); this.styleSheetGenerators[regId] = new this.StyleSheetGenerator(this.urlParsers[regId].getParsed()); this.styleSheetGenerators[regId].append(); }, applyLocalStoragePreferences: function (regId) {
            if (TSV.ViewerScript.Helper.storageAvailable('localStorage')) { this.applyLocalStoragePreference_hideEmptyChannels(regId); }
            else { console.info('local storage not available'); }
        }, applyLocalStoragePreference_hideEmptyChannels: function (regId) {
            var varName = 'hideEmptyChannels'; var userPreference = localStorage.getItem('tsv_' + regId + '_' + varName); if (userPreference !== null) {
                var viewerClassList = TSV.ViewerScript.Helper.getInnerViewerDiv(regId).classList; if (JSON.parse(userPreference) == true) {
                    if (!viewerClassList.contains(varName)) { viewerClassList.add(varName); }
                    else { }
                }
                else {
                    if (viewerClassList.contains(varName)) { viewerClassList.remove(varName); }
                    else { }
                }
            }
            else { }
        }, toggleEmptyChannels: function (regId) {
            var varName = 'hideEmptyChannels'; var viewerClassList = TSV.ViewerScript.Helper.getInnerViewerDiv(regId).classList; viewerClassList.toggle(varName); if (TSV.ViewerScript.Helper.storageAvailable('localStorage')) { localStorage.setItem('tsv_' + regId + '_' + varName, viewerClassList.contains(varName)); }
            else { }
        }
    }, ToolTips: {
        addEvents: function (regId) {
            var viewerDiv = TSV.ViewerScript.Helper.getInnerViewerDiv(regId); var querySelect = viewerDiv.querySelectorAll('div.tsv_level.tsv_user'); var _this = this; for (var i = 0; i < querySelect.length; i++) {
                querySelect[i].addEventListener('mouseenter', function (target) { _this.onMouseEnter(target, regId); });
            }
        }, onMouseEnter: function (mouseEvent, regId) { var div = mouseEvent.target; this.createHtml(div, regId); this.reposition(div, regId, mouseEvent); }, reposition: function (div, regId, mouseEvent) {
            if (this.isChromium()) {
                var viewerInner = TSV.ViewerScript.Helper.getInnerViewerDiv(regId); var toolTip = div.querySelector('.ts3v_user_tooltip'); if (viewerInner.scrollTop > 0) { toolTip.style.marginTop = '-' + viewerInner.scrollTop + 'px'; }
                else { toolTip.style.marginTop = '0'; }
            }
        }, isChromium: function () {
            if (typeof this.isChromiumReturn == 'undefined') { var isChromium = window.chrome, winNav = window.navigator, vendorName = winNav.vendor, isOpera = winNav.userAgent.indexOf("OPR") > -1, isIEedge = winNav.userAgent.indexOf("Edge") > -1, isIOSChrome = winNav.userAgent.match("CriOS"); if (isIOSChrome) { this.isChromiumReturn = true; } else if (isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false) { this.isChromiumReturn = true; } else { this.isChromiumReturn = false; } }
            return this.isChromiumReturn;
        }, createHtml: function (element, regId) {
            if (!element.classList.contains('ts3v_tooltip_created')) { element.classList.add('ts3v_tooltip_created'); var tooltip = this.HtmlCreator.create(element, regId); element.querySelector('.tsv_content').appendChild(tooltip); }
        }, HtmlCreator: {
            create: function (div, regId) {
                var tooltip = document.createElement('div'); tooltip.classList.add('ts3v_user_tooltip'); if (div.dataset.client_away == 1) {
                    var awayMessage = div.dataset.client_away_message; if (awayMessage == '') { awayMessage = '-'; }
                    tooltip.appendChild(this.createDataDiv('away', awayMessage));
                }
                if (div.dataset.client_input_overall_muted == 1) { tooltip.appendChild(this.createDataDiv('mic', 'muted')); }
                if (div.dataset.client_output_overall_muted == 1) { tooltip.appendChild(this.createDataDiv('speaker', 'muted')); }
                var onlineTimeHuman = this.getHumanTimePassed(div.dataset.client_lastconnected, true, false); tooltip.appendChild(this.createDataDiv('online', onlineTimeHuman)); var idleTime = div.dataset.client_idle_time; if (idleTime > 60000) { var idleHuman = this.getHumanTimePassed(idleTime, false, true); tooltip.appendChild(this.createDataDiv('idle', idleHuman)); }
                tooltip.appendChild(this.createDataDiv('known', this.getHumanTimePassed(div.dataset.client_created, true, false))); var serverIp = TSV.ViewerScript.Data[regId]['net_ip']; var udpPort = TSV.ViewerScript.Data[regId]['net_udp_port']; var channelId = div.dataset.cid; tooltip.appendChild(this.createBoxedLink('connect to client', this.getConnectToUserLink(serverIp, udpPort, channelId), 'connect to the clients channel')); var encodedUniqueIdentifier = encodeURIComponent(div.dataset.client_unique_identifier); tooltip.appendChild(this.createBoxedLink('add buddy', this.getUserInfoLink(encodedUniqueIdentifier), 'go to userinfo & add as buddy')); tooltip.appendChild(this.createUserBanner(encodedUniqueIdentifier)); return tooltip;
            }, createDataDiv: function (labelName, data) { var div = document.createElement('div'); var label = document.createElement('label'); var dataSpan = document.createElement('span'); label.textContent = labelName; dataSpan.textContent = data; div.appendChild(label); div.appendChild(dataSpan); return div; }, getConnectToUserLink: function (ip, udpPort, channelId) { return 'ts3server://' + ip + '?port=' + udpPort + '&cid=' + channelId; }, getUserInfoLink: function (uniqueIdentifier) { var a = document.createElement('a'); a.href = TSV.ViewerScript.Loader.pageUrl + 'index.php?page=userinfo&ident=' + uniqueIdentifier; return a; }, createUserBanner: function (uniqueIdentifier) { var ub = document.createElement('img'); ub.classList.add('tsv_userBanner'); ub.src = 'https://userb.tsviewer.com/3_t-i/' + uniqueIdentifier + '.png'; var a = document.createElement('a'); a.href = TSV.ViewerScript.Loader.pageUrl + 'index.php?page=userbanners&ident=' + uniqueIdentifier; a.title = 'TS3 UserBanner'; a.appendChild(ub); return a; }, createBoxedLink: function (text, href, title) { var a = document.createElement('a'); a.classList.add('boxedLink'); a.href = href; a.textContent = text; a.title = title; return a; }, getTimePassedlObject: function (intervalInSeconds) {
                var result = {}; var structure = { day: 86400, hour: 3600, minute: 60, second: 1 }; Object.keys(structure).forEach(function (key) { result[key] = Math.floor(intervalInSeconds / structure[key]); intervalInSeconds -= result[key] * structure[key]; }); return result;
            }, getHumanTimePassed: function (value, isSeconds, isDelta) {
                if (!isSeconds) { value = value / 1000; }
                if (!isDelta) { value = (new Date().getTime() / 1000) - value; }
                var interval = this.getTimePassedlObject(value); if (interval.day > 0) {
                    var hourString = ''; if (interval.day < 3) { hourString = ', ' + interval.hour + ' hrs' }
                    return interval.day + ' dys' + hourString;
                }
                else if (interval.hour > 0) { return interval.hour + ' hrs, ' + interval.minute + ' min'; }
                else if (interval.minute > 0) { return interval.minute + ' min'; }
                else { return interval.second + ' sec'; }
            }
        }
    }, Data: {}
}; var ts3v_display = TSV.ViewerScript.Loader;