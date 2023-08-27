/*! For license information please see index.bundle.js.LICENSE.txt */
(() => {
	var e = {
			4184: (e, n) => {
				var t;
				! function() {
					"use strict";
					var r = {}.hasOwnProperty;

					function i() {
						for (var e = [], n = 0; n < arguments.length; n++) {
							var t = arguments[n];
							if (t) {
								var a = typeof t;
								if ("string" === a || "number" === a) e.push(t);
								else if (Array.isArray(t)) {
									if (t.length) {
										var o = i.apply(null, t);
										o && e.push(o)
									}
								} else if ("object" === a) {
									if (t.toString !== Object.prototype.toString && !t.toString.toString()
										.includes("[native code]")) {
										e.push(t.toString());
										continue
									}
									for (var s in t) r.call(t, s) && t[s] && e.push(s)
								}
							}
						}
						return e.join(" ")
					}
					e.exports ? (i.default = i, e.exports = i) : void 0 === (t = function() {
						return i
					}.apply(n, [])) || (e.exports = t)
				}()
			},
			8397: (e, n, t) => {
				"use strict";
				t.d(n, {
					Z: () => s
				});
				var r = t(8081),
					i = t.n(r),
					a = t(3645),
					o = t.n(a)()(i());
				o.push([e.id, "/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n.scrollbar-container {\n  position: relative;\n  height: 100%; }", ""]);
				const s = o
			},
			51: (e, n, t) => {
				"use strict";
				t.d(n, {
					Z: () => g
				});
				var r = t(8081),
					i = t.n(r),
					a = t(3645),
					o = t.n(a),
					s = t(1667),
					l = t.n(s),
					c = new URL(t(947), t.b),
					u = new URL(t(1538), t.b),
					d = new URL(t(5874), t.b),
					p = o()(i()),
					f = l()(c),
					h = l()(u),
					m = l()(d);
				p.push([e.id, "\nbody {\n    padding: 0;\n    margin: 0;\n}\n\nbody * {\n    box-sizing: border-box;\n    font-family: 'Abel', sans-serif;;\n}\n\nbutton, input {\n    border: 1px solid #777;\n    border-radius: 5px;\n    padding: 10px;\n}\n\ninput {\n    padding: 5px;\n}\n\ninput[type=\"file\"] {\n    display: none;\n}\n\nbutton {\n    cursor: pointer;\n    padding: 8px 12px;\n}\n\nbutton.secondary {\n    background: rgb(35, 68, 92);\n}\n\nbutton.med {\n    min-width: 80px;\n}\n\nbutton.big {\n    min-width: 130px;\n}\n\nbutton.danger {\n    background: rgb(223,53,54);\n}\n\n.page {\n    height: 100vh;\n}\n\n.game {\n    display: flex;\n}\n\n.game .content {\n    flex: 1;\n    padding-left: 20px;\n    padding-right: 20px;\n    font-size: 14px;\n    height: calc(100vh - 160px);\n    /*overflow-y: auto;*/\n}\n\n.game .right-panel {\n    position: relative;\n    height: calc(100vh - 160px);\n}\n\n.game .right-panel.expanded {\n    width: 320px;\n    padding: 0 16px;\n}\n\n.game .right-panel.collapsed {\n    width: 0;\n}\n\n.game .right-panel.collapsed .submenu {\n    display: none;\n}\n\n.game .right-panel .expand-collapse-panel {\n    position: absolute;\n    display: flex;\n    width: 32px;\n    height: 32px;\n    font-size: 20px;\n    left: 0px;\n    top: 0px;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    border-radius: 4px;\n}\n\n.game .right-panel .submenu {\n    margin-left: 48px;\n}\n\n.game .right-panel.collapsed .expand-collapse-panel {\n    left: -48px;\n}\n\n.game .right-panel .add-to-queue select,\n.game .right-panel .add-to-queue button\n{\n    margin: 5px 0;\n    width: 140px;\n}\n\n.game .right-panel .queue-item {\n    display: flex;\n    justify-content: space-between;\n    padding: 5px 0;\n    align-items: center;\n    font-size: 12px;\n}\n\n.game .right-panel .queue-item .move-controls {\n    width: 30px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.game .right-panel .queue-item .move-controls .move {\n    cursor: pointer;\n    padding: 5px;\n}\n\n.game .right-panel .queue-item p {\n    margin: 5px 0;\n    width: 140px;\n    text-overflow: ellipsis;\n}\n\n.game .right-panel .event-item {\n    font-size: 12px;\n}\n\n.game .right-panel .event-item.colonist-arrived .line,\n.game .right-panel .event-item.expedition-arrived .line{\n    color: #90fd70;\n}\n\n.game .right-panel .event-item.colonist-died .line {\n    color: #ff6767;\n}\n\n.game .right-panel .event-item .time {\n    color: #9799f9;\n}\n.game .right-panel .event-item .line {\n    display: inline-block;\n    margin-left: 8px;\n}\n\n.game .right-panel .filters .feature-list {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.game .right-panel .filters .feature-list .filter-entry{\n    width: 130px;\n}\n\n\n.game .sidebar {\n    height: calc(100vh - 160px);\n}\n\n.header {\n    height: 140px;\n}\n\n.header .top {\n    padding: 16px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.header .top h1 {\n    margin: 0 0 20px;\n}\n\n.header .menu ul {\n    list-style: none;\n    display: flex;\n    padding: 0;\n    margin: 0 0 8px;\n}\n\n.header .menu ul li .menu-inner {\n    padding: 8px 16px;\n    cursor: pointer;\n}\n\n.flex {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.sidebar {\n    padding: 0;\n    margin: 0;\n}\n\n.resources-sidebar .resource-item {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 5px 8px;\n    font-size: 14px;\n}\n\n.resources-sidebar .resource-item p {\n    margin: 0;\n}\n\n.resources-sidebar .resource-item .resource {\n    width: 80px;\n}\n\n.features-block {\n    border: 1px solid #222;\n    padding: 12px;\n    border-radius: 4px;\n    margin-bottom: 8px;\n}\n\n.features-block .features-title {\n    margin-bottom: 16px;\n    font-size: 16px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.feature-list.flex {\n    flex-wrap: wrap;\n    justify-content: flex-start;\n}\n\n.buildings-wrap .chips-wrap .chip {\n    width: 270px;\n}\n\n.chips-wrap .chip {\n    width: 200px;\n    height: 40px;\n    padding: 8px;\n    border: 1px solid #234;\n    border-radius: 4px;\n    position: relative;\n    margin: 5px 20px;\n    font-size: 15px;\n    position: relative;\n    background-color: #222222;\n}\n\n.chips-wrap .chip .bg {\n    position: absolute;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: #172334;\n    border-radius: 4px;\n}\n\n.animated .chips-wrap .chip .bg {\n    transition-property: width;\n    transition-duration: 0.2s;\n}\n\n.chips-wrap.building-unlock .chip .bg {\n    background-color: #376384;\n}\n\n.chips-wrap.resource-unlock .chip .bg {\n    background-color: #377334;\n}\n\n.chips-wrap.special .chip .bg {\n    background-color: #775374;\n}\n\n\n.chips-wrap .chip .chip-content {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n}\n\n.chips-wrap .chip .chip-content .stick-left {\n    flex: 1;\n    padding-left: 5px;\n    cursor: pointer;\n}\n\n.chips-wrap .chip .name-label {\n    text-overflow: ellipsis;\n    max-width: calc(100% - 30px);\n    white-space: nowrap;\n    overflow: hidden;\n    display: inline-block;\n    user-select: none;\n}\n\n.chips-wrap.disabled .chip {\n    color: #999;\n    cursor: not-allowed;\n    border-color: #444;\n}\n\nbody .chips-wrap.warning .chip {\n    border-color: rgba(244, 202, 44, 0.3);\n}\n\nbody .chips-wrap.warning .chip:after {\n    background-image: url(" + f + ");\n    background-size: 25px 25px;\n    display: block;\n    position: absolute;\n    width: 25px;\n    height: 25px;\n    z-index: 3;\n    content: '';\n    top: -10px;\n    right: -10px;\n}\n\n.chips-wrap.usage-highlight .chip {\n    border-color: #eeaa44;\n}\n\n.chips-wrap.disabled.blocked.soft-lock .chip {\n    color: #ff5757;\n    cursor: not-allowed;\n}\n\n.chips-wrap.disabled.soft-lock .chip {\n    color: #ffa767;\n    cursor: not-allowed;\n}\n\n.chips-wrap.enabled .chip .chip-content .stick-left:hover {\n    filter: brightness(140%);\n}\n\n.chips-wrap .chip .stick-right {\n    position: absolute;\n    right: 8px;\n    top: 2px;\n    display: flex;\n    align-items: center;\n}\n\n.chips-wrap .chip .level-label {\n    padding: 5px;\n    font-size: 12px;\n    border-radius: 8px;\n}\n\n.chips-wrap .chip .controls {\n    display: block;\n    font-size: 18px;\n    padding: 3px 2px;\n}\n\n.chips-wrap .chip .controls .control {\n    display: block;\n    width: 24px;\n    height: 24px;\n    text-align: center;\n    cursor: pointer;\n}\n.chips-wrap .chip .controls.disabled .control {\n    display: block;\n    width: 24px;\n    height: 24px;\n    text-align: center;\n    cursor: not-allowed;\n}\n\n.chips-wrap .chip .controls:not(.disabled) .control:hover {\n    border-radius: 50%;\n}\n\n.description-hint {\n    padding: 16px;\n    border-radius: 4px;\n}\n\n.description-hint .description {\n    font-size: 13px;\n}\n\n.description-hint .wrap {\n    padding: 8px 0;\n}\n\n.cost-block {\n    width: 160px;\n    padding-bottom: 4px;\n}\n\n.cost-block p.requirement,\n.gain-block p.requirement{\n    font-size: 13px;\n    padding-bottom: 2px;\n    margin-bottom: 2px;\n    margin-top: 4px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.gain-block p.requirement.green {\n    color: #90fd70;\n}\n\n.gain-block p.requirement.red {\n    color: #ff6767;\n}\n\n.cost-block .requirement.missing {\n    color: #ff6767;\n}\n\n.cost-block .progressBar {\n    width: 100%;\n    position: relative;\n    height: 3px;\n    background: #333;\n}\n\n.cost-block .progressBar .filling {\n    background: #575989;\n    height: 100%;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n}\n\n.submenu {\n    display: flex;\n    justify-content: flex-start;\n}\n\n.submenu .submenu-item {\n    padding: 8px 16px;\n    cursor: pointer;\n}\n\n.jobs .feature-list {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.job-card {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 380px;\n    padding: 8px;\n    margin: 8px;\n    border-radius: 4px;\n}\n\n.job-card .job-labour {\n    width: 40px;\n    padding-left: 5px;\n}\n\n.job-card .title {\n    width: 160px;\n}\n.job-card .set-amount {\n    display: flex;\n    align-items: center;\n}\n\n\n.job-card .set-amount button {\n    width: 30px;\n    height: 30px;\n    border-radius: 4px;\n    padding: 4px;\n    cursor: pointer;\n    margin: 0 4px;\n}\n\n.job-card .set-amount input {\n    width: 80px;\n    height: 30px;\n    border-radius: 4px;\n}\n\n.resources-sidebar {\n    height: calc(100% - 40px);\n    display: flex;\n    flex-direction: column;\n}\n\n.resources-sidebar .main-resources-wrap {\n    max-height: calc(100vh - 550px);\n}\n\n.resources-sidebar .main-resources-wrap .main-resources {\n    height: 100%;\n}\n\n.resources-sidebar .bottom-block {\n    position: absolute;\n    bottom: 12px\n}\n\n.resources-sidebar .secondary-resources {\n    display: flex;\n    flex: 1;\n    min-height: 0px;\n}\n\n.resources-sidebar .secondary-resources .secondary-wrap {\n    width: 100%;\n}\n\n.resources-sidebar .secondary-resources .container-scrollable {\n    height: calc(100% - 50px);\n}\n\n.heading-pre-menu {\n    display: flex;\n}\n\n.heading-pre-menu .env-wrap {\n    margin-left: 40px;\n    display: flex;\n}\n.heading-pre-menu .env-wrap p {\n    margin: 5px 0;\n}\n\n.heading-pre-menu .env-wrap .time-wrap {\n    margin-left: 20px;\n}\n\n.heading-pre-menu .env-wrap .use-mult {\n    display: flex;\n}\n\n.heading-pre-menu .env-wrap .use-mult .item {\n    margin-right: 10px;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.heading-pre-menu .env-wrap .use-mult .item.selected {\n    color: #ee7744;\n}\n\n.inner .editor-wrap.columns {\n    height: calc(100vh - 220px);\n}\n\n.inner .editor-wrap.columns .ship-stats-wrap {\n    height: calc(100vh - 340px);\n}\n\n.small-note {\n    font-size: 12px;\n    font-style: italic;\n}\n\n@media screen and (max-height: 850px) {\n\n   /* .resources-sidebar .main-resources {\n        height: calc(100vh - 550px);\n    }*/\n\n    .resources-sidebar .secondary-resources .container-scrollable {\n        height: 150px;\n    }\n\n}\n\n.hint-caps p {\n    display: flex;\n    justify-content: space-between;\n    font-size: 12px;\n    margin: 4px;\n}\n\n.break-down .block {\n    padding-left: 12px;\n    padding-bottom: 12px;\n}\n\n.break-down .block p {\n    display: flex;\n    justify-content: space-between;\n    font-size: 12px;\n    margin: 4px;\n}\n\n.break-down .block p span:first-child {\n    margin-right: 20px;\n}\n\n.fit-height {\n    height: 100%;\n}\n\n.inner-scrollable.planet,\n.inner-scrollable.science {\n    height: calc(100% - 35px);\n}\n\n.inner {}\n\n.goal-paper {\n    width: 320px;\n    height: 100px;\n    padding: 4px;\n}\n\n.goal-paper .goal-container p {\n    font-size: 12px;\n    margin: 5px;\n}\n\n.goal-paper .goal-container .goal-req {\n    display: flex;\n    justify-content: space-between;\n}\n\n.goal-req.complete span{\n    color: #45cd45;\n}\n\n.goal-paper.features-block .features-title {\n    margin-bottom: 8px;\n}\n\n.settings .set-row {\n    display: flex;\n    padding: 4px;\n}\n\n.settings .set-row .label {\n    width: 30%;\n}\n\n.settings .set-row .val textarea {\n    height: 100px;\n    width: 300px;\n    margin: 5px 0px;\n    display: block;\n}\n\n.happiness .factor-wrap {\n    margin-right: 25px;\n    padding-right: 15px;\n}\n\n.overview.population .line {\n    display: flex;\n}\n\n.overview.population .line p{\n    width: 150px;\n}\n\n.overview.happiness .feature-list .line {\n    display: flex;\n}\n\n.law-description .title {\n    font-weight: bold;\n}\n\n.laws-list .law-box {\n    padding: 10px;\n}\n\n.laws-list .law-box .law-options {\n    display: flex;\n}\n\n.laws-list .law-box .law-options .option-box {\n    padding: 4px 12px;\n    cursor: pointer;\n    margin: 0 10px;\n}\n\n.law-option-inner p {\n    margin: 0;\n}\n\n.version-panes {\n    display: flex;\n}\n\n.version-title {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.version-panes .about {\n    margin: 0 30px;\n    max-width: 300px;\n}\n\n.goal-paper.features-block .features-title span {\n    color: #ee7744;\n}\n\n.goal-paper.features-block {\n    border-color: #233444;\n}\n\n.transmit-wrap .bold {\n    color: #ee7744;\n    font-weight: bold;\n}\n\n.popup-link {\n    color: #ee7744;\n    cursor: pointer;\n}\n\n.expeditions-wrap .chips-wrap .chip {\n    width: 340px;\n    margin-left: 10px;\n    margin-top: 10px;\n}\n\n.notification-container {\n    position: relative;\n}\n\n.notification-container.label-wrap {\n    padding-right: 18px;\n}\n\n.notification-container span.new-label {\n    position: absolute;\n    display: block;\n    top: 0;\n    right: 0;\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    background-color: #ee7744;\n}\n\n.animated .notification-container span.new-label {\n    animation: blinkingBackground 2s infinite;\n}\n\n@keyframes blinkingBackground{\n    0%\t\t{ background-color: #ee7744;}\n    25%\t\t{ background-color: #fd5020;}\n    50%\t\t{ background-color: #ef0a1a;}\n    75%\t\t{ background-color: #fd5020;}\n    100%\t        { background-color: #ee7744;}\n}\n\n.notification-container.action-wrap span.new-label,\n.notification-container.building-wrap span.new-label,\n.notification-container.upgrade-wrap span.new-label,\n.notification-container.science-wrap span.new-label {\n    right: 10px;\n}\n\n.notification-container span.new-label::after{\n    content: '!';\n    color: #fff;\n    padding-left: 6px;\n    display: block;\n    margin-top: -3px;\n}\n\n.buildings-cat-label {\n    padding-right: 20px;\n}\n\n.science-wrap {\n    width: 238px;\n}\n\n.expeditions-mode {\n    display: flex;\n    justify-content: space-around;\n}\n\n.expeditions-mode span {\n    font-size: 14px;\n}\n\n.expeditions-mode .mode {\n    text-decoration: underline;\n    margin-top: 0px;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.expeditions-mode .mode.selected {\n    color: #ee7744;\n}\n\n.change-log {\n    height: calc(100vh - 160px);\n}\n\n.research-body .feature-list{\n    height: calc(100vh - 330px);\n}\n\n.search-wrap .chips-wrap .chip {\n    margin-left: 0;\n}\n\n.search-filter {\n    margin-top: 12px;\n    margin-bottom: 8px;\n}\n.search-filter p {\n    font-size: 16px;\n}\n\n.list-wrap.planets-wrap {\n    width: 220px;\n}\n\n\n@media screen and (min-width: 1900px){\n\n/*    body .game .sidebar {\n        height: auto;\n    }*/\n\n    body .game .content {\n        font-size: 16px;\n    }\n\n    body .chips-wrap .chip {\n        width: 250px;\n        font-size: 17px;\n    }\n\n    body .buildings-wrap .chips-wrap .chip {\n        width: 300px;\n    }\n\n    body .chips-wrap .chip .level-label {\n        font-size: 14px;\n    }\n\n    body .chips-wrap .chip .controls {\n        display: block;\n        font-size: 20px;\n        padding: 3px 2px;\n    }\n\n    body .chips-wrap .chip .controls.disabled .control {\n        width: 28px;\n        height: 28px;\n    }\n\n    body .resources-sidebar .resource-item {\n        font-size: 16px;\n    }\n\n    body .features-block .features-title .collapse-expand {\n        font-size: 15px;\n    }\n\n    body .header .menu-item .menu-inner {\n        font-size: 17px;\n    }\n\n    body .features-block .features-title {\n        font-size: 17px;\n    }\n}\n\n@media screen and (max-width: 1280px){\n    .header {\n        height: 160px;\n    }\n\n    .header .menu ul {\n        flex-wrap: wrap;\n    }\n}\n\n.show-hide-resources {\n    display: none;\n}\n\n.info-tooltip {\n    display: none;\n}\n\n.statistics-list .stat-item {\n    padding: 4px 8px;\n    display: flex;\n}\n\n.statistics-list .stat-item p {\n    margin: 0;\n}\n\n.statistics-list .stat-item .label {\n    width: 40%;\n}\n\n.preloader {\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    height: 100vh;\n    width: 100vw;\n    background-color: #09010f;\n    z-index: 5;\n}\n\n.preloader .logo-container {\n    height: min(100vh - 400px, 500px);\n    margin: calc(max(50px, 100vh - 800px)) auto auto;\n    width: 100%;\n    text-align: center;\n}\n\n.preloader .logo-container img {\n    object-fit: contain;\n    margin: auto;\n    height: 100%;\n}\n\n.preloader .loading-container {\n    display: flex;\n    justify-content: center;\n    margin-top: 40px;\n}\n\n.preloader .loading-container .loading-inner {\n    display: flex;\n    align-items: center;\n    width: 150px;\n    justify-content: space-between;\n}\n.preloader .loading-container .loading-inner * {\n    color: #fff;\n}\n\n\n.preloader .loading-container .loading-text {\n    font-weight: bold;\n    font-size: 24px;\n    color: #fff;\n}\n\n.preloader .loading-container .did-you-knew {\n    text-align: center;\n    padding: 0 20px;\n    color: #fff;\n}\n\n.preloader .loading-container .did-you-knew * {\n    color: #fff;\n}\n\n.preloader .loading-container .did-you-knew .title {\n    font-size: 18px;\n    font-weight: bold;\n    display: block;\n    margin-bottom: 10px;\n    color: #fff;\n}\n\n.eff-dropped {\n    color: #ee7744;\n    font-style: italic;\n    font-size: 12px;\n}\n\n.eff-dropped .missing-resource {\n    display: block;\n}\n\n.editor-wrap.columns {\n    display: flex;\n    justify-content: space-between;\n}\n.editor-wrap.columns .column {\n    padding: 20px;\n}\n\n.loader-column {\n    width: 240px;\n    height: calc(100% - 40px);\n    border: 1px solid #222;\n}\n\n.loader-column .select-item {\n    padding: 5px 10px;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.loader-column .select-item.invalid {\n    color: #ff6767;\n}\n\n.loader-column .select-item .delete-model.disabled {\n    cursor: default;\n    color: #999999;\n}\n\n.loader-column .select-item:hover {\n    color: #ee7744;\n}\n\n.loader-column .select-item.selected {\n    font-weight: bold;\n    cursor: default;\n}\n\n.editor-wrap {\n    height: calc(100vh - 200px);\n}\n\n.editor-column {\n    flex: 1;\n    height: calc(100vh - 240px);\n}\n\n.editor-column .slot-container.invalid .heading-wrap p {\n    color: #ff6767;\n}\n\n.editor-column .slot-container select {\n    margin-right: 10px;\n    width: 140px;\n}\n\n.editor-totals .editor-row {\n    margin: 8px 0;\n}\n\n.editor-totals .editor-row button {\n    width: 140px;\n}\n\n.editor-totals .stats .row {\n    display: flex;\n    justify-content: space-between;\n}\n\n.editor-totals .stats .row p {\n    margin: 0;\n    padding: 5px 5px;\n}\n\n.editor-totals .validation-error {\n    margin-bottom: 16px;\n    margin-top: 8px;\n    color: #fd3030;\n}\n\n.slot-container-outer .stats-wrap {\n    display: flex;\n}\n\n.slot-container-outer .stats-wrap > div {\n    margin: 0 10px;\n}\n\n.ship-totals .row {\n    display: flex;\n    justify-content: space-between;\n}\n\n.ship-totals .row p {\n    margin: 0;\n    padding: 5px 5px;\n    font-size: 13px;\n}\n\n.hangar-wrap {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.spaceship-inner-wrap .title-wrap {\n    display: flex;\n    justify-content: space-between;\n}\n\n.spaceship-card {\n    width: 300px;\n    padding: 20px;\n    border: 1px solid #222222;\n    border-radius: 4px;\n    margin: 10px;\n}\n\n.spaceship-inner-wrap .chips-wrap .chip {\n    margin: 5px 0px;\n    width: 260px;\n}\n.spaceship-inner-wrap .button {\n    width: 260px;\n}\n\n.editor-column.fleets .line-wrap {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.editor-column.fleets .line-wrap .slot-container {\n    padding: 10px;\n    border: 1px solid #222;\n    margin: 10px;\n    width: 200px;\n}\n\n.battle-wrap .top-pane {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    border: 1px solid #222;\n}\n\n.battle-content .battle-centered {\n    margin-top: calc(max(10vh, 30px));\n    text-align: center;\n}\n\n.travel-bar {\n    width: 50%;\n    position: relative;\n    height: 12px;\n    margin: auto;\n}\n\n.travel-bar .travel-bar-inner {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 10px;\n}\n\n.animated .travel-bar .travel-bar-inner {\n    transition-property: width;\n    transition-duration: 0.2s;\n}\n\n.fight-space {\n    position: relative;\n    width: 100%;\n    height: calc(100vh - 310px);\n    border: 1px solid #222;\n}\n\n.fight-space .bullet {\n    width: 4px;\n    height: 4px;\n    border-radius: 50%;\n    position: absolute;\n}\n\n.animated .fight-space .bullet {\n    transition-property: left, top;\n    transition-duration: 0.2s;\n    transition-delay: 0s;\n    transition-timing-function: linear;\n}\n\n.fight-space .bullet.side-0 {\n    background-color: #77dddd;\n}\n\n.fight-space .bullet.side-1 {\n    background-color: #dd7777;\n}\n\n.fight-space .space-unit {\n    position: absolute;\n}\n\n.fight-space .space-unit .name-cont {\n    font-size: 12px;\n    margin: 0;\n}\n\n.fight-space .space-unit .image-container {\n    width: 40px;\n    height: 40px;\n}\n\n.fight-space .space-unit .image-container.enemy {\n    background-image: url(" + h + ");\n    background-size: contain;\n    transform: rotate(180deg);\n}\n\n.fight-space .space-unit .image-container.my {\n    background-image: url(" + m + ");\n    background-size: contain;\n}\n\n.bars-container .bar-outer {\n    height: 8px;\n    width: 50px;\n    position: relative;\n    border: 1px solid #222;\n    background-color: #999999;\n}\n\n.bars-container.wide .bar-outer {\n    width: 120px;\n}\n\n.bars-container .bar-outer .bar-inner {\n    height: 6px;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.bars-container .bar-outer.shield-bar .bar-inner {\n    background-color: #589dd7;\n}\n\n.bars-container .bar-outer.durability-bar .bar-inner {\n    background-color: #58dd77;\n}\n\n.bars-container .bar-outer.recharge-bar .bar-inner {\n    background-color: #e8dd67;\n}\n\n.bars-container .bar-outer.pilot .bar-inner {\n    background-color: #58add7;\n}\n\n.current-planet-wrap .feature-list {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}\n\n.description-hint .att {\n    margin: 5px 0;\n    font-size: 14px;\n}\n\n.star-modifs p {\n    margin: 5px 5px;\n    font-size: 13px;\n}\n\n@media screen and (max-width: 860px){\n\n    .resources-sidebar .main-resources-wrap {\n        max-height: unset;\n    }\n\n    .game .sidebar {\n        height: auto;\n    }\n\n    .heading-pre-menu {\n        display: block;\n    }\n\n    .heading-pre-menu .env-wrap {\n        margin-left: 12px;\n    }\n    /* Mobile version */\n    .header .menu ul li {\n        width: 160px;\n    }\n\n    .header {\n        height: auto;\n    }\n\n    .game {\n        display: block;\n    }\n\n    .page {\n        height: auto;\n        min-height: 100vh;\n    }\n\n    .resources-sidebar {\n        width: 100%;\n        height: auto;\n    }\n\n    .resources-sidebar .secondary-resources .container-scrollable {\n        height: auto;\n    }\n\n    body .show-hide-resources {\n        display: block;\n        padding: 5px 10px;\n    }\n\n    .resources-sidebar.hidden {\n        display: none;\n    }\n\n    .header .top {\n        display: block;\n    }\n\n    .header .menu ul li.selected .menu-inner {\n        border-bottom: 1px solid #344555;\n        background: #344555;\n        color: #ee7744;\n        padding-bottom: 8px;\n    }\n\n    .header .menu ul li .menu-inner {\n        border: 1px solid #344555;\n    }\n\n    .bottom-block {\n        display: none;\n    }\n\n    .goal-paper.features-block {\n        width: 100%;\n        height: auto;\n    }\n\n    body .chips-wrap .chip {\n        width: 250px;\n        font-size: 17px;\n    }\n\n    body .feature-list.flex {\n        display: block;\n    }\n\n    body .chips-wrap .chip {\n        width: 80%;\n        font-size: 17px;\n    }\n\n    body .buildings-wrap .chips-wrap .chip {\n        width: 80%;\n        font-size: 17px;\n    }\n\n    body .job-card-wrap .job-card {\n        min-width: 80vw;\n        font-size: 17px;\n    }\n\n    body .info-tooltip {\n        display: block;\n    }\n\n    body .info-tooltip .info-tooltip-inner{\n        display: flex;\n        width: 28px;\n        height: 28px;\n        background: #575989;\n        border-radius: 50%;\n        font-size: 20px;\n        align-items: center;\n        justify-content: center;\n        margin-left: 5px;\n        margin-right: 5px;\n    }\n\n    body .mobile-tooltip {\n        position: absolute;\n        width: calc(100vw - 100px);\n        height: calc(100vh - 100px);\n        top: 50px;\n        left: 50px;\n        background: #131518;\n        padding: 20px;\n        border: 1px solid #223344;\n    }\n\n    body .mobile-tooltip-wrap {\n        background: rgba(21,21,21,0.7);\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100vw;\n        height: 100vh;\n        z-index: 3;\n    }\n\n    body .mobile-tooltip-wrap.hidden {\n        display: none;\n    }\n\n    body .mobile-tooltip .head {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    body .mobile-tooltip .head .close {\n        font-size: 20px;\n    }\n\n    body .mobile-tooltip-wrap .mobile-tooltip .body {\n        max-height: calc(100% - 40px);\n        overflow-y: scroll;\n    }\n\n    .settings .set-row .val textarea {\n        width: calc(0.6 * 100vw);\n    }\n\n    body .resources-sidebar .resource-item p {\n        display: flex;\n        font-size: 16px;\n    }\n\n    body .science-wrap {\n        width: auto;\n    }\n\n    .version-panes {\n        display: block;\n    }\n\n    body .inner-scrollable.planet,\n    body .inner-scrollable.science {\n        height: auto;\n    }\n\n    body .game .content {\n        height: auto;\n    }\n\n    body .resources-sidebar .resource-item {\n        padding: 3px 8px;\n    }\n\n    body .resources-sidebar .main-resources {\n        height: auto;\n    }\n\n    body .resources-sidebar .secondary-resources {\n        height: auto;\n    }\n\n    body .editor-wrap.columns {\n        display: flex;\n        flex-direction: column;\n    }\n\n    body .editor-wrap.columns .column {\n        height: auto;\n        width: 100%;\n    }\n\n    body .editor-wrap.columns .column.editor-totals {\n        order: 2;\n    }\n\n    body .editor-wrap.columns .column.editor-column {\n        order: 1;\n    }\n\n    body .inner .editor-wrap.columns .ship-stats-wrap {\n        height: auto;\n    }\n\n    body .battle-wrap .top-pane {\n        display: block;\n    }\n\n    body .battle-wrap .top-pane > div {\n        margin-bottom: 10px;\n    }\n\n    body .battle-wrap .bars-container.wide .bar-outer {\n        width: calc(100% - 120px);\n    }\n\n    body .battle-wrap .bars-container.wide {\n        display: flex;\n    }\n\n    body .battle-wrap .top-pane button,\n    body .battle-wrap .top-pane select{\n        width: calc(100% - 40px);\n    }\n\n    body .battle-wrap .top-pane input[type=\"number\"] {\n        width: calc(100% - 80px);\n    }\n\n    body .battle-content .battle-centered {\n        padding-bottom: 30px;\n    }\n}\n\n@media screen and (max-width: 650px){\n\n\n}\n\np.no-margin {\n    margin-top: 4px;\n    margin-bottom: 8px;\n}\n\n.queue-list .queue-utils {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 13px;\n}\n\n.clickable-highlight {\n    cursor: pointer;\n}\n\n.expeditions-map .map-cell {\n    width: 30px;\n    height: 30px;\n    box-sizing: border-box;\n}\n\n.expeditions-map .map-cell.selected {\n    width: 30px;\n    height: 30px;\n    box-sizing: border-box;\n    border: 1px solid #ff6767;\n}\n\n.expeditions-map .map-cell.current {\n    width: 30px;\n    height: 30px;\n    box-sizing: border-box;\n    border: 1px solid #56afff;\n}\n\n.expeditions-map .map-cell.home {\n    background: #222222;\n}\n\n.expeditions-map .map-row {\n    display: flex;\n}\n\n.description-hint .loot-line {\n    display: flex;\n}\n\n.description-hint .loot-line p {\n    margin-right: 20px;\n}\n\n.description-hint .loot-line p{\n    font-size: 13px;\n}\n\n/* Themes */\nbody.dark-theme * {\n    color: #ffffff;\n}\n\nbody.dark-theme .page {\n    background-color: #131115;\n}\n\nbody.dark-theme input {\n    background: #233444;\n}\n\nbody.dark-theme button {\n    background: #344555;\n    border-radius: 0;\n    border-color: #575989;\n}\n\nbody.dark-theme button:hover {\n    background: #575989;\n}\n\nbody.dark-theme button:disabled {\n    background: rgba(31,41,51,0.5);\n    pointer-events: none;\n}\n\nbody.dark-theme select {\n    border: 1px solid #777;\n    border-radius: 5px;\n    padding: 8px;\n    min-width: 163px;\n    background: rgb(19, 25, 38);\n    color: #fff;\n}\n\nbody.dark-theme .right-panel .expand-collapse-panel {\n    background-color: rgb(19, 25, 38);\n    border-color: #fff;\n}\n\nbody.dark-theme .game .right-panel .queue-item .move-controls .move:hover {\n    color: #ffa767;\n}\n\nbody.dark-theme .game .right-panel .queue-item .close:hover {\n    cursor: pointer;\n    color: #ee7744;\n}\n\nbody.dark-theme .header .menu ul li .menu-inner:hover {\n    color: #e74;\n}\n\nbody.dark-theme .header .menu ul li.selected .menu-inner {\n    border-bottom: 5px solid #e74;\n    padding-bottom: 4px;\n    pointer-events: none;\n}\n\nbody.dark-theme .resources-sidebar {\n    width: 360px;\n    border: 1px solid #222;\n}\n\n\nbody.dark-theme .resources-sidebar .hl.resource-item.missing-highlight,\nbody.dark-theme .resources-sidebar .resource-item.missing-highlight * {\n    background: #fd3030;\n    color: #fff;\n}\n\nbody.dark-theme .resources-sidebar .hl.resource-item.produced-highlight,\nbody.dark-theme .resources-sidebar .resource-item.produced-highlight * {\n    background: #30ad30;\n    color: #fff;\n}\n\nbody.dark-theme .resources-sidebar .hl.resource-item.consumed-highlight,\nbody.dark-theme .resources-sidebar .resource-item.consumed-highlight * {\n    background: #fd7050;\n    color: #fff;\n}\n\nbody.dark-theme .resources-sidebar .resource-item.negative p {\n    color: #fd7050;\n}\n\nbody.dark-theme .resources-sidebar .resource-item.capped p {\n    color: #ffe0a0;\n}\n\nbody.dark-theme .resources-sidebar .resource-item:nth-child(even) {\n    background: #131115;\n}\n\nbody.dark-theme .resources-sidebar .resource-item:nth-child(odd) {\n    background: #222;\n}\n\nbody.dark-theme .features-block .features-title .collapse-expand {\n    font-size: 12px;\n    color: #ee7744;\n    cursor: pointer;\n}\n\nbody.dark-theme .chips-wrap .chip {\n    border: 1px solid #234;\n    background-color: #222;\n}\n\nbody.dark-theme .chips-wrap .chip .bg {\n    background-color: #193344;\n}\n\nbody.dark-theme .chips-wrap.building-unlock .chip .bg {\n    background-color: #376384;\n}\n\nbody.dark-theme .chips-wrap.resource-unlock .chip .bg {\n    background-color: #377334;\n}\n\nbody.dark-theme .chips-wrap.special .chip .bg {\n    background-color: #775374;\n}\n\nbody.dark-theme .chips-wrap .chip .controls.disabled .control {\n    color: #ccbbaa;\n}\n\nbody.dark-theme .chips-wrap .chip .controls:not(.disabled) .control:hover {\n    background: #344555;\n    border: 1px solid #222;\n    border-radius: 50%;\n}\n\nbody.dark-theme .description-hint {\n    background: #131518;\n    border: 1px solid #222;\n}\n\nbody.dark-theme .chips-wrap .chip .level-label {\n    background: #344555;\n    border: 1px solid #222;\n}\n\nbody.dark-theme .hint-caps {\n    background: #131115;\n    padding: 16px;\n}\n\nbody.dark-theme .chips-wrap.disabled .chip span.name-label {\n    color: #cba;\n}\n\nbody.dark-theme .chips-wrap.disabled.blocked.soft-lock .chip span.name-label {\n    color: #ff5757;\n}\n\nbody.dark-theme .chips-wrap.disabled.soft-lock .chip span.name-label {\n    color: #ffa767;\n    cursor: not-allowed;\n}\n\nbody.dark-theme .chips-wrap.usage-highlight .chip {\n    border-color: #eeaa44;\n}\n\nbody.dark-theme .travel-bar {\n    border: 1px solid #222222;\n    background: #223344;\n}\n\nbody.dark-theme .travel-bar .travel-bar-inner {\n    background: #575989;\n}\n\nbody.dark-theme .cost-block .progressBar .filling {\n    background: #575989;\n}\n\nbody.dark-theme .job-card {\n    border: 1px solid #222;\n}\n\nbody.dark-theme .job-card .set-amount button {\n    background: #233444;\n    border: 1px solid #222222;\n}\n\nbody.dark-theme .job-card .set-amount button:hover {\n    background: #344555;\n}\n\nbody.dark-theme .job-card .set-amount input {\n    background: #131115;\n    border: 1px solid #222222;\n    border-radius: 4px;\n}\n\nbody.dark-theme .settings .set-row .val textarea {\n    background: #222222;\n}\n\nbody.dark-theme .happiness .factor-wrap .factor.excess {\n    color: #ffe0a0;\n}\n\nbody.dark-theme .laws-list .law-box .law-options .option-box {\n    padding: 4px 12px;\n    border: 1px solid #222222;\n    cursor: pointer;\n    margin: 0 10px;\n}\n\nbody.dark-theme .laws-list .law-box .law-options .option-box.selected {\n    background-color: #233444;\n}\n\nbody.dark-theme .submenu .submenu-item.selected {\n    color: #ee7744;\n}\n\n@media screen and (max-width: 860px) {\n    body.dark-theme .mobile-tooltip {\n        background: #131518;\n        border: 1px solid #223344;\n    }\n\n    body.dark-theme .mobile-tooltip-wrap {\n        background: rgba(21,21,21,0.7);\n    }\n}\n\nbody.dark-theme .clickable-highlight {\n    color: #ee7744;\n}\n\n/* THEME: LIGHT THEME */\n\nbody.light-theme * {\n    font-family: 'Lato', sans-serif;\n}\n\nbody.light-theme * {\n    color: #222;\n}\n\nbody.light-theme .page {\n    background-color: #f6f1f6;\n}\n\nbody.light-theme input {\n    background: #eee;\n    border: 1px solid #333;\n    border-radius: 2px;\n}\n\nbody.light-theme button {\n    background: #eee;\n    color: #222222;\n    border-radius: 4px;\n    border-color: #333;\n}\n\n\nbody.light-theme button:hover {\n    background: #ccc;\n}\n\nbody.light-theme button:disabled {\n    background: rgba(31,41,51,0.5);\n    pointer-events: none;\n}\n\nbody.light-theme select {\n    border: 1px solid #333;\n    border-radius: 5px;\n    padding: 8px;\n    min-width: 163px;\n    background: #eee;\n    color: #333;\n}\n\nbody.light-theme .right-panel .expand-collapse-panel {\n    background-color: #eee;\n    border-color: #333;\n}\n\nbody.light-theme .game .right-panel .queue-item .move-controls .move:hover {\n    color: #3558aa;\n}\n\nbody.light-theme .game .right-panel .queue-item .close:hover {\n    cursor: pointer;\n    color: #3558aa;\n}\n\nbody.light-theme .header .menu ul li .menu-inner:hover {\n    color: #3558aa;\n}\n\nbody.light-theme .header .menu ul li.selected .menu-inner {\n    border-bottom: 2px solid #35488a;\n    padding-bottom: 4px;\n    pointer-events: none;\n}\n\nbody.light-theme .resources-sidebar {\n    width: 360px;\n    border: 1px solid #777;\n    border-radius: 4px;\n    background: #eee;\n}\n\nbody.light-theme .resources-sidebar .hl.resource-item.missing-highlight,\nbody.light-theme .resources-sidebar .resource-item.missing-highlight * {\n    background: #fda0a0;\n    color: #222;\n}\n\nbody.light-theme .resources-sidebar .hl.resource-item.produced-highlight,\nbody.light-theme .resources-sidebar .resource-item.produced-highlight * {\n    background: #a0fda0;\n    color: #222;\n}\n\nbody.light-theme .resources-sidebar .hl.resource-item.consumed-highlight,\nbody.light-theme .resources-sidebar .resource-item.consumed-highlight * {\n    background: #ffd090;\n    color: #222;\n}\n\nbody.light-theme .resources-sidebar .resource-item.negative p {\n    color: #fd7050;\n}\n\nbody.light-theme .resources-sidebar .resource-item.capped p {\n    color: #8f6020;\n}\n\nbody.light-theme .resources-sidebar .resource-item:nth-child(even) {\n    background: #eee9ee;\n}\n\nbody.light-theme .resources-sidebar .resource-item:nth-child(odd) {\n    background: #f6f6f6;\n}\n\nbody.light-theme .features-block .features-title .collapse-expand {\n    font-size: 12px;\n    color: #112224;\n    cursor: pointer;\n}\n\nbody.light-theme .label-wrap {\n    font-weight: bold;\n}\n\nbody.light-theme .chips-wrap .chip {\n    border: 1px solid #333;\n    background-color: #ddd;\n}\n\nbody.light-theme .chips-wrap .chip .stick-left {\n    width: 150px;\n}\n\nbody.light-theme .buildings-wrap .chips-wrap .chip .stick-left {\n    width: 200px;\n}\n\nbody.light-theme .chips-wrap .chip * {\n    color: #000;\n}\n\nbody.light-theme .chips-wrap .chip .bg {\n    background-color: #fff;\n    border-right: 1px solid #888;\n}\n\nbody.light-theme .chips-wrap.building-unlock .chip .bg {\n    background-color: #67c3f4;\n}\n\nbody.light-theme .chips-wrap.resource-unlock .chip .bg {\n    background-color: #a7f3a4;\n}\n\nbody.light-theme .chips-wrap.special .chip .bg {\n    background-color: #d7a3d4;\n}\n\nbody.light-theme .chips-wrap .chip-content {\n    display: flex;\n    align-items: center;\n}\n\nbody.light-theme .chips-wrap .chip-content .name-label {\n    font-size: 14px;\n}\n\nbody.light-theme .chips-wrap .chip-content .stick-right {\n    position: relative;\n    flex-shrink: 0;\n    top: -2px;\n}\n\nbody.light-theme .chips-wrap .chip .controls.disabled .control {\n    color: #555;\n}\n\nbody.light-theme .chips-wrap .chip .controls:not(.disabled) .control:hover {\n    background: #123;\n    border: 1px solid #123;\n    color: #fff;\n    border-radius: 50%;\n}\n\nbody.light-theme .description-hint {\n    background: #fff;\n    border: 1px solid #222;\n}\n\nbody.light-theme .chips-wrap .chip .level-label {\n    background: none;\n    border: none;\n    font-size: 13px;\n}\n\nbody.light-theme .hint-caps {\n    background: #fff;\n    padding: 16px;\n    border: 1px solid #222;\n    border-radius: 4px;\n}\n\nbody.light-theme .notification-container span.new-label::after {\n    margin-top: 0;\n    padding-left: 5px;\n}\n\nbody.light-theme .chips-wrap.disabled .chip span.name-label {\n    color: #444;\n}\n\nbody.light-theme .chips-wrap.disabled.blocked.soft-lock .chip span.name-label {\n    color: #ef0707;\n}\n\nbody.light-theme .chips-wrap.disabled.soft-lock .chip span.name-label {\n    color: #7f6707;\n    cursor: not-allowed;\n}\n\nbody.light-theme .travel-bar {\n    border: 1px solid #222222;\n    background: #eee;\n}\n\nbody.light-theme .travel-bar .travel-bar-inner {\n    background: #123;\n}\n\nbody.light-theme .cost-block .progressBar .filling {\n    background: #37a939;\n}\n\nbody.light-theme .job-card {\n    border: 1px solid #222;\n}\n\nbody.light-theme .job-card .set-amount button {\n    background: #eee;\n    border: 1px solid #222222;\n}\n\nbody.light-theme .job-card .set-amount button:hover {\n    background: #ccc;\n}\n\nbody.light-theme .job-card .set-amount input {\n    background: #fff;\n    border: 1px solid #222222;\n    border-radius: 4px;\n}\n\nbody.light-theme .settings .set-row .val textarea {\n    background: #eee;\n    border: 1px solid #222222;\n    border-radius: 4px;\n}\n\nbody.light-theme .happiness .factor-wrap .factor.excess {\n    color: #8f6020;\n}\n\nbody.light-theme .laws-list .law-box .law-options .option-box {\n    padding: 4px 12px;\n    border: 1px solid #222222;\n    cursor: pointer;\n    margin: 0 10px;\n}\n\nbody.light-theme .laws-list .law-box .law-options .option-box.selected {\n    background-color: #ccc;\n}\n\nbody.light-theme .submenu .submenu-item.selected {\n    color: #3558aa;\n}\n\n\n@media screen and (max-width: 860px) {\n    body.light-theme .mobile-tooltip {\n        background: #eee;\n        border: 1px solid #222;\n    }\n\n    body.light-theme .mobile-tooltip-wrap {\n        background: #eee;\n    }\n}\n\nbody.light-theme .clickable-highlight {\n    color: #3558aa;\n}\n\nbody.light-theme .chips-wrap.usage-highlight .chip {\n    border-color: #55a8fa;\n}\n\n\n/* THEME: BLACK THEME */\n\nbody.black-theme * {\n    /*font-family: 'Nunito', sans-serif;*/\n    font-family: 'DM Sans', sans-serif;\n}\n\nbody.black-theme * {\n    color: #fff;\n}\n\nbody.black-theme .page {\n    background-color: #111;\n}\n\nbody.black-theme input {\n    background: #333;\n    border: 1px solid #333;\n    border-radius: 2px;\n}\n\nbody.black-theme button {\n    background: #000;\n    color: #fff;\n    border-radius: 4px;\n    border-color: #333;\n}\n\n\nbody.black-theme button:hover {\n    background: #111;\n}\n\nbody.black-theme button:disabled {\n    background: rgba(31,41,51,0.5);\n    pointer-events: none;\n}\n\nbody.black-theme select {\n    border: 1px solid #333;\n    border-radius: 5px;\n    padding: 8px;\n    min-width: 163px;\n    background: #111;\n    color: #fff;\n}\n\nbody.black-theme .right-panel .expand-collapse-panel {\n    background-color: #111;\n    border-color: #fff;\n}\n\nbody.black-theme .game .right-panel .queue-item .move-controls .move:hover {\n    color: #eee;\n}\n\nbody.black-theme .game .right-panel .queue-item .close:hover {\n    cursor: pointer;\n    color: #eee;\n}\n\nbody.black-theme .header .menu ul li .menu-inner:hover {\n    color: #eee;\n}\n\nbody.black-theme .header .menu ul li.selected .menu-inner {\n    border-bottom: 2px solid #eee;\n    padding-bottom: 4px;\n    pointer-events: none;\n}\n\nbody.black-theme .resources-sidebar {\n    width: 360px;\n    border: 1px solid #777;\n    border-radius: 4px;\n    background: #111;\n}\n\nbody.black-theme .resources-sidebar .hl.resource-item.missing-highlight,\nbody.black-theme .resources-sidebar .resource-item.missing-highlight * {\n    background: #fd3030;\n    color: #fff;\n}\n\nbody.black-theme .resources-sidebar .hl.resource-item.produced-highlight,\nbody.black-theme .resources-sidebar .resource-item.produced-highlight * {\n    background: #30ad30;\n    color: #fff;\n}\n\nbody.black-theme .resources-sidebar .hl.resource-item.consumed-highlight,\nbody.black-theme .resources-sidebar .resource-item.consumed-highlight * {\n    background: #fd7050;\n    color: #fff;\n}\n\nbody.black-theme .resources-sidebar .resource-item.negative p {\n    color: #fd7050;\n}\n\nbody.black-theme .resources-sidebar .resource-item.capped p {\n    color: #ffe0a0;\n}\n\nbody.black-theme .resources-sidebar .resource-item:nth-child(even) {\n    background: #111;\n}\n\nbody.black-theme .resources-sidebar .resource-item:nth-child(odd) {\n    background: #333;\n}\n\nbody.black-theme .features-block .features-title .collapse-expand {\n    font-size: 12px;\n    color: #fff;\n    cursor: pointer;\n}\n\nbody.black-theme .label-wrap {\n    font-weight: bold;\n}\n\nbody.black-theme .chips-wrap .chip {\n    border: 1px solid #333;\n    background-color: #333;\n}\n\nbody.black-theme .chips-wrap .chip .stick-left {\n    width: 150px;\n}\n\nbody.black-theme .buildings-wrap .chips-wrap .chip .stick-left {\n    width: 200px;\n}\n\nbody.black-theme .chips-wrap .chip * {\n    color: #fff;\n}\n\nbody.black-theme .chips-wrap .chip .bg {\n    background-color: #000;\n}\n\nbody.black-theme .chips-wrap.building-unlock .chip .bg {\n    background-color: #67c3f4;\n}\n\nbody.black-theme .chips-wrap.resource-unlock .chip .bg {\n    background-color: #a7f3a4;\n}\n\nbody.black-theme .chips-wrap.special .chip .bg {\n    background-color: #d7a3d4;\n}\n\nbody.black-theme .chips-wrap .chip-content {\n    display: flex;\n    align-items: center;\n}\n\nbody.black-theme .chips-wrap .chip-content .name-label {\n    font-size: 14px;\n}\n\nbody.black-theme .chips-wrap .chip-content .stick-right {\n    position: relative;\n    flex-shrink: 0;\n    top: -2px;\n}\n\nbody.black-theme .chips-wrap .chip .controls.disabled .control {\n    color: #555;\n}\n\nbody.black-theme .chips-wrap .chip .controls:not(.disabled) .control:hover {\n    background: #222;\n    border: 1px solid #333;\n    color: #fff;\n    border-radius: 50%;\n}\n\nbody.black-theme .description-hint {\n    background: #222;\n    border: 1px solid #555;\n}\n\nbody.black-theme .chips-wrap .chip .level-label {\n    background: none;\n    border: none;\n    font-size: 13px;\n}\n\nbody.black-theme .hint-caps {\n    background: #222;\n    padding: 16px;\n    border: 1px solid #555;\n    border-radius: 4px;\n}\n\nbody.black-theme .notification-container span.new-label::after {\n    margin-top: 0;\n    padding-left: 5px;\n}\n\nbody.black-theme .chips-wrap.disabled .chip span.name-label {\n    color: #eee;\n}\n\nbody.black-theme .chips-wrap.disabled.blocked.soft-lock .chip span.name-label {\n    color: #ff5717;\n}\n\nbody.black-theme .chips-wrap.disabled.soft-lock .chip span.name-label {\n    color: #ffa727;\n    cursor: not-allowed;\n}\n\nbody.black-theme .travel-bar {\n    border: 1px solid #555;\n    background: #555;\n}\n\nbody.black-theme .travel-bar .travel-bar-inner {\n    background: #555;\n}\n\nbody.black-theme .cost-block .progressBar .filling {\n    background: #eee;\n}\n\nbody.black-theme .job-card {\n    border: 1px solid #222;\n}\n\nbody.black-theme .job-card .set-amount button {\n    background: #000;\n    border: 1px solid #222222;\n}\n\nbody.black-theme .job-card .set-amount button:hover {\n    background: #333;\n}\n\nbody.black-theme .job-card .set-amount input {\n    background: #222;\n    border: 1px solid #222222;\n    border-radius: 4px;\n}\n\nbody.black-theme .settings .set-row .val textarea {\n    background: #222;\n    border: 1px solid #222222;\n    border-radius: 4px;\n}\n\nbody.black-theme .happiness .factor-wrap .factor.excess {\n    color: #ffe0a0;\n}\n\nbody.black-theme .laws-list .law-box .law-options .option-box {\n    padding: 4px 12px;\n    border: 1px solid #222222;\n    cursor: pointer;\n    margin: 0 10px;\n}\n\nbody.black-theme .laws-list .law-box .law-options .option-box.selected {\n    background-color: #000;\n}\n\nbody.black-theme .submenu .submenu-item.selected {\n    color: #ee7744;\n}\n\n\n@media screen and (max-width: 860px) {\n    body.black-theme .mobile-tooltip {\n        background: #131518;\n        border: 1px solid #333;\n    }\n\n    body.black-theme .mobile-tooltip-wrap {\n        background: rgba(21,21,21,0.7);\n    }\n}\n\nbody.black-theme .clickable-highlight {\n    color: #ee7744;\n}\n\nbody.black-theme .chips-wrap.usage-highlight .chip {\n    border-color: #ee7744;\n}", ""]);
				const g = p
			},
			3645: e => {
				"use strict";
				e.exports = function(e) {
					var n = [];
					return n.toString = function() {
						return this.map((function(n) {
								var t = "",
									r = void 0 !== n[5];
								return n[4] && (t += "@supports (".concat(n[4], ") {")), n[2] && (t += "@media ".concat(n[2], " {")), r && (t += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {")), t += e(n), r && (t += "}"), n[2] && (t += "}"), n[4] && (t += "}"), t
							}))
							.join("")
					}, n.i = function(e, t, r, i, a) {
						"string" == typeof e && (e = [
							[null, e, void 0]
						]);
						var o = {};
						if (r)
							for (var s = 0; s < this.length; s++) {
								var l = this[s][0];
								null != l && (o[l] = !0)
							}
						for (var c = 0; c < e.length; c++) {
							var u = [].concat(e[c]);
							r && o[u[0]] || (void 0 !== a && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
								.concat(u[1], "}")), u[5] = a), t && (u[2] ? (u[1] = "@media ".concat(u[2], " {")
								.concat(u[1], "}"), u[2] = t) : u[2] = t), i && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {")
								.concat(u[1], "}"), u[4] = i) : u[4] = "".concat(i)), n.push(u))
						}
					}, n
				}
			},
			1667: e => {
				"use strict";
				e.exports = function(e, n) {
					return n || (n = {}), e ? (e = String(e.__esModule ? e.default : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), n.hash && (e += n.hash), /["'() \t\n]|(%20)/.test(e) || n.needQuotes ? '"'.concat(e.replace(/"/g, '\\"')
						.replace(/\n/g, "\\n"), '"') : e) : e
				}
			},
			8081: e => {
				"use strict";
				e.exports = function(e) {
					return e[1]
				}
			},
			8679: (e, n, t) => {
				"use strict";
				var r = t(1296),
					i = {
						childContextTypes: !0,
						contextType: !0,
						contextTypes: !0,
						defaultProps: !0,
						displayName: !0,
						getDefaultProps: !0,
						getDerivedStateFromError: !0,
						getDerivedStateFromProps: !0,
						mixins: !0,
						propTypes: !0,
						type: !0
					},
					a = {
						name: !0,
						length: !0,
						prototype: !0,
						caller: !0,
						callee: !0,
						arguments: !0,
						arity: !0
					},
					o = {
						$$typeof: !0,
						compare: !0,
						defaultProps: !0,
						displayName: !0,
						propTypes: !0,
						type: !0
					},
					s = {};

				function l(e) {
					return r.isMemo(e) ? o : s[e.$$typeof] || i
				}
				s[r.ForwardRef] = {
					$$typeof: !0,
					render: !0,
					defaultProps: !0,
					displayName: !0,
					propTypes: !0
				}, s[r.Memo] = o;
				var c = Object.defineProperty,
					u = Object.getOwnPropertyNames,
					d = Object.getOwnPropertySymbols,
					p = Object.getOwnPropertyDescriptor,
					f = Object.getPrototypeOf,
					h = Object.prototype;
				e.exports = function e(n, t, r) {
					if ("string" != typeof t) {
						if (h) {
							var i = f(t);
							i && i !== h && e(n, i, r)
						}
						var o = u(t);
						d && (o = o.concat(d(t)));
						for (var s = l(n), m = l(t), g = 0; g < o.length; ++g) {
							var v = o[g];
							if (!(a[v] || r && r[v] || m && m[v] || s && s[v])) {
								var b = p(t, v);
								try {
									c(n, v, b)
								} catch (e) {}
							}
						}
					}
					return n
				}
			},
			6103: (e, n) => {
				"use strict";
				var t = "function" == typeof Symbol && Symbol.for,
					r = t ? Symbol.for("react.element") : 60103,
					i = t ? Symbol.for("react.portal") : 60106,
					a = t ? Symbol.for("react.fragment") : 60107,
					o = t ? Symbol.for("react.strict_mode") : 60108,
					s = t ? Symbol.for("react.profiler") : 60114,
					l = t ? Symbol.for("react.provider") : 60109,
					c = t ? Symbol.for("react.context") : 60110,
					u = t ? Symbol.for("react.async_mode") : 60111,
					d = t ? Symbol.for("react.concurrent_mode") : 60111,
					p = t ? Symbol.for("react.forward_ref") : 60112,
					f = t ? Symbol.for("react.suspense") : 60113,
					h = t ? Symbol.for("react.suspense_list") : 60120,
					m = t ? Symbol.for("react.memo") : 60115,
					g = t ? Symbol.for("react.lazy") : 60116,
					v = t ? Symbol.for("react.block") : 60121,
					b = t ? Symbol.for("react.fundamental") : 60117,
					x = t ? Symbol.for("react.responder") : 60118,
					y = t ? Symbol.for("react.scope") : 60119;

				function w(e) {
					if ("object" == typeof e && null !== e) {
						var n = e.$$typeof;
						switch (n) {
							case r:
								switch (e = e.type) {
									case u:
									case d:
									case a:
									case s:
									case o:
									case f:
										return e;
									default:
										switch (e = e && e.$$typeof) {
											case c:
											case p:
											case g:
											case m:
											case l:
												return e;
											default:
												return n
										}
								}
							case i:
								return n
						}
					}
				}

				function j(e) {
					return w(e) === d
				}
				n.AsyncMode = u, n.ConcurrentMode = d, n.ContextConsumer = c, n.ContextProvider = l, n.Element = r, n.ForwardRef = p, n.Fragment = a, n.Lazy = g, n.Memo = m, n.Portal = i, n.Profiler = s, n.StrictMode = o, n.Suspense = f, n.isAsyncMode = function(e) {
					return j(e) || w(e) === u
				}, n.isConcurrentMode = j, n.isContextConsumer = function(e) {
					return w(e) === c
				}, n.isContextProvider = function(e) {
					return w(e) === l
				}, n.isElement = function(e) {
					return "object" == typeof e && null !== e && e.$$typeof === r
				}, n.isForwardRef = function(e) {
					return w(e) === p
				}, n.isFragment = function(e) {
					return w(e) === a
				}, n.isLazy = function(e) {
					return w(e) === g
				}, n.isMemo = function(e) {
					return w(e) === m
				}, n.isPortal = function(e) {
					return w(e) === i
				}, n.isProfiler = function(e) {
					return w(e) === s
				}, n.isStrictMode = function(e) {
					return w(e) === o
				}, n.isSuspense = function(e) {
					return w(e) === f
				}, n.isValidElementType = function(e) {
					return "string" == typeof e || "function" == typeof e || e === a || e === d || e === s || e === o || e === f || e === h || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === l || e.$$typeof === c || e.$$typeof === p || e.$$typeof === b || e.$$typeof === x || e.$$typeof === y || e.$$typeof === v)
				}, n.typeOf = w
			},
			1296: (e, n, t) => {
				"use strict";
				e.exports = t(6103)
			},
			4772: (e, n, t) => {
				"use strict";

				function r(e) {
					return getComputedStyle(e)
				}

				function i(e, n) {
					for (var t in n) {
						var r = n[t];
						"number" == typeof r && (r += "px"), e.style[t] = r
					}
					return e
				}

				function a(e) {
					var n = document.createElement("div");
					return n.className = e, n
				}
				t.r(n), t.d(n, {
					default: () => R
				});
				var o = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

				function s(e, n) {
					if (!o) throw new Error("No element matching method supported");
					return o.call(e, n)
				}

				function l(e) {
					e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
				}

				function c(e, n) {
					return Array.prototype.filter.call(e.children, (function(e) {
						return s(e, n)
					}))
				}
				var u = function(e) {
						return "ps__thumb-" + e
					},
					d = function(e) {
						return "ps__rail-" + e
					},
					p = "ps__child--consume",
					f = "ps--focus",
					h = "ps--clicking",
					m = function(e) {
						return "ps--active-" + e
					},
					g = function(e) {
						return "ps--scrolling-" + e
					},
					v = {
						x: null,
						y: null
					};

				function b(e, n) {
					var t = e.element.classList,
						r = g(n);
					t.contains(r) ? clearTimeout(v[n]) : t.add(r)
				}

				function x(e, n) {
					v[n] = setTimeout((function() {
						return e.isAlive && e.element.classList.remove(g(n))
					}), e.settings.scrollingThreshold)
				}
				var y = function(e) {
						this.element = e, this.handlers = {}
					},
					w = {
						isEmpty: {
							configurable: !0
						}
					};
				y.prototype.bind = function(e, n) {
					void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(n), this.element.addEventListener(e, n, !1)
				}, y.prototype.unbind = function(e, n) {
					var t = this;
					this.handlers[e] = this.handlers[e].filter((function(r) {
						return !(!n || r === n) || (t.element.removeEventListener(e, r, !1), !1)
					}))
				}, y.prototype.unbindAll = function() {
					for (var e in this.handlers) this.unbind(e)
				}, w.isEmpty.get = function() {
					var e = this;
					return Object.keys(this.handlers)
						.every((function(n) {
							return 0 === e.handlers[n].length
						}))
				}, Object.defineProperties(y.prototype, w);
				var j = function() {
					this.eventElements = []
				};

				function k(e) {
					if ("function" == typeof window.CustomEvent) return new CustomEvent(e);
					var n = document.createEvent("CustomEvent");
					return n.initCustomEvent(e, !1, !1, void 0), n
				}

				function N(e, n, t, r, i) {
					var a;
					if (void 0 === r && (r = !0), void 0 === i && (i = !1), "top" === n) a = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
					else {
						if ("left" !== n) throw new Error("A proper axis should be provided");
						a = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
					}! function(e, n, t, r, i) {
						var a = t[0],
							o = t[1],
							s = t[2],
							l = t[3],
							c = t[4],
							u = t[5];
						void 0 === r && (r = !0), void 0 === i && (i = !1);
						var d = e.element;
						e.reach[l] = null, d[s] < 1 && (e.reach[l] = "start"), d[s] > e[a] - e[o] - 1 && (e.reach[l] = "end"), n && (d.dispatchEvent(k("ps-scroll-" + l)), n < 0 ? d.dispatchEvent(k("ps-scroll-" + c)) : n > 0 && d.dispatchEvent(k("ps-scroll-" + u)), r && function(e, n) {
							b(e, n), x(e, n)
						}(e, l)), e.reach[l] && (n || i) && d.dispatchEvent(k("ps-" + l + "-reach-" + e.reach[l]))
					}(e, t, a, r, i)
				}

				function E(e) {
					return parseInt(e, 10) || 0
				}
				j.prototype.eventElement = function(e) {
					var n = this.eventElements.filter((function(n) {
						return n.element === e
					}))[0];
					return n || (n = new y(e), this.eventElements.push(n)), n
				}, j.prototype.bind = function(e, n, t) {
					this.eventElement(e)
						.bind(n, t)
				}, j.prototype.unbind = function(e, n, t) {
					var r = this.eventElement(e);
					r.unbind(n, t), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1)
				}, j.prototype.unbindAll = function() {
					this.eventElements.forEach((function(e) {
						return e.unbindAll()
					})), this.eventElements = []
				}, j.prototype.once = function(e, n, t) {
					var r = this.eventElement(e),
						i = function(e) {
							r.unbind(n, i), t(e)
						};
					r.bind(n, i)
				};
				var S = {
					isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
					supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
					supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
					isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
				};

				function C(e) {
					var n = e.element,
						t = Math.floor(n.scrollTop),
						r = n.getBoundingClientRect();
					e.containerWidth = Math.round(r.width), e.containerHeight = Math.round(r.height), e.contentWidth = n.scrollWidth, e.contentHeight = n.scrollHeight, n.contains(e.scrollbarXRail) || (c(n, d("x"))
							.forEach((function(e) {
								return l(e)
							})), n.appendChild(e.scrollbarXRail)), n.contains(e.scrollbarYRail) || (c(n, d("y"))
							.forEach((function(e) {
								return l(e)
							})), n.appendChild(e.scrollbarYRail)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = T(e, E(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = E((e.negativeScrollAdjustment + n.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = T(e, E(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = E(t * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
						function(e, n) {
							var t = {
									width: n.railXWidth
								},
								r = Math.floor(e.scrollTop);
							n.isRtl ? t.left = n.negativeScrollAdjustment + e.scrollLeft + n.containerWidth - n.contentWidth : t.left = e.scrollLeft, n.isScrollbarXUsingBottom ? t.bottom = n.scrollbarXBottom - r : t.top = n.scrollbarXTop + r, i(n.scrollbarXRail, t);
							var a = {
								top: r,
								height: n.railYHeight
							};
							n.isScrollbarYUsingRight ? n.isRtl ? a.right = n.contentWidth - (n.negativeScrollAdjustment + e.scrollLeft) - n.scrollbarYRight - n.scrollbarYOuterWidth - 9 : a.right = n.scrollbarYRight - e.scrollLeft : n.isRtl ? a.left = n.negativeScrollAdjustment + e.scrollLeft + 2 * n.containerWidth - n.contentWidth - n.scrollbarYLeft - n.scrollbarYOuterWidth : a.left = n.scrollbarYLeft + e.scrollLeft, i(n.scrollbarYRail, a), i(n.scrollbarX, {
								left: n.scrollbarXLeft,
								width: n.scrollbarXWidth - n.railBorderXWidth
							}), i(n.scrollbarY, {
								top: n.scrollbarYTop,
								height: n.scrollbarYHeight - n.railBorderYWidth
							})
						}(n, e), e.scrollbarXActive ? n.classList.add(m("x")) : (n.classList.remove(m("x")), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, n.scrollLeft = !0 === e.isRtl ? e.contentWidth : 0), e.scrollbarYActive ? n.classList.add(m("y")) : (n.classList.remove(m("y")), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, n.scrollTop = 0)
				}

				function T(e, n) {
					return e.settings.minScrollbarLength && (n = Math.max(n, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (n = Math.min(n, e.settings.maxScrollbarLength)), n
				}

				function O(e, n) {
					var t = n[0],
						r = n[1],
						i = n[2],
						a = n[3],
						o = n[4],
						s = n[5],
						l = n[6],
						c = n[7],
						u = n[8],
						d = e.element,
						p = null,
						f = null,
						m = null;

					function g(n) {
						n.touches && n.touches[0] && (n[i] = n.touches[0].pageY), d[l] = p + m * (n[i] - f), b(e, c), C(e), n.stopPropagation(), n.type.startsWith("touch") && n.changedTouches.length > 1 && n.preventDefault()
					}

					function v() {
						x(e, c), e[u].classList.remove(h), e.event.unbind(e.ownerDocument, "mousemove", g)
					}

					function y(n, o) {
						p = d[l], o && n.touches && (n[i] = n.touches[0].pageY), f = n[i], m = (e[r] - e[t]) / (e[a] - e[s]), o ? e.event.bind(e.ownerDocument, "touchmove", g) : (e.event.bind(e.ownerDocument, "mousemove", g), e.event.once(e.ownerDocument, "mouseup", v), n.preventDefault()), e[u].classList.add(h), n.stopPropagation()
					}
					e.event.bind(e[o], "mousedown", (function(e) {
						y(e)
					})), e.event.bind(e[o], "touchstart", (function(e) {
						y(e, !0)
					}))
				}
				var A = {
						"click-rail": function(e) {
							e.element, e.event.bind(e.scrollbarY, "mousedown", (function(e) {
								return e.stopPropagation()
							})), e.event.bind(e.scrollbarYRail, "mousedown", (function(n) {
								var t = n.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect()
									.top > e.scrollbarYTop ? 1 : -1;
								e.element.scrollTop += t * e.containerHeight, C(e), n.stopPropagation()
							})), e.event.bind(e.scrollbarX, "mousedown", (function(e) {
								return e.stopPropagation()
							})), e.event.bind(e.scrollbarXRail, "mousedown", (function(n) {
								var t = n.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect()
									.left > e.scrollbarXLeft ? 1 : -1;
								e.element.scrollLeft += t * e.containerWidth, C(e), n.stopPropagation()
							}))
						},
						"drag-thumb": function(e) {
							O(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), O(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
						},
						keyboard: function(e) {
							var n = e.element;
							e.event.bind(e.ownerDocument, "keydown", (function(t) {
								if (!(t.isDefaultPrevented && t.isDefaultPrevented() || t.defaultPrevented) && (s(n, ":hover") || s(e.scrollbarX, ":focus") || s(e.scrollbarY, ":focus"))) {
									var r, i = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
									if (i) {
										if ("IFRAME" === i.tagName) i = i.contentDocument.activeElement;
										else
											for (; i.shadowRoot;) i = i.shadowRoot.activeElement;
										if (s(r = i, "input,[contenteditable]") || s(r, "select,[contenteditable]") || s(r, "textarea,[contenteditable]") || s(r, "button,[contenteditable]")) return
									}
									var a = 0,
										o = 0;
									switch (t.which) {
										case 37:
											a = t.metaKey ? -e.contentWidth : t.altKey ? -e.containerWidth : -30;
											break;
										case 38:
											o = t.metaKey ? e.contentHeight : t.altKey ? e.containerHeight : 30;
											break;
										case 39:
											a = t.metaKey ? e.contentWidth : t.altKey ? e.containerWidth : 30;
											break;
										case 40:
											o = t.metaKey ? -e.contentHeight : t.altKey ? -e.containerHeight : -30;
											break;
										case 32:
											o = t.shiftKey ? e.containerHeight : -e.containerHeight;
											break;
										case 33:
											o = e.containerHeight;
											break;
										case 34:
											o = -e.containerHeight;
											break;
										case 36:
											o = e.contentHeight;
											break;
										case 35:
											o = -e.contentHeight;
											break;
										default:
											return
									}
									e.settings.suppressScrollX && 0 !== a || e.settings.suppressScrollY && 0 !== o || (n.scrollTop -= o, n.scrollLeft += a, C(e), function(t, r) {
										var i = Math.floor(n.scrollTop);
										if (0 === t) {
											if (!e.scrollbarYActive) return !1;
											if (0 === i && r > 0 || i >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation
										}
										var a = n.scrollLeft;
										if (0 === r) {
											if (!e.scrollbarXActive) return !1;
											if (0 === a && t < 0 || a >= e.contentWidth - e.containerWidth && t > 0) return !e.settings.wheelPropagation
										}
										return !0
									}(a, o) && t.preventDefault())
								}
							}))
						},
						wheel: function(e) {
							var n = e.element;

							function t(t) {
								var i = function(e) {
										var n = e.deltaX,
											t = -1 * e.deltaY;
										return void 0 !== n && void 0 !== t || (n = -1 * e.wheelDeltaX / 6, t = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (n *= 10, t *= 10), n != n && t != t && (n = 0, t = e.wheelDelta), e.shiftKey ? [-t, -n] : [n, t]
									}(t),
									a = i[0],
									o = i[1];
								if (! function(e, t, i) {
									if (!S.isWebKit && n.querySelector("select:focus")) return !0;
									if (!n.contains(e)) return !1;
									for (var a = e; a && a !== n;) {
										if (a.classList.contains(p)) return !0;
										var o = r(a);
										if (i && o.overflowY.match(/(scroll|auto)/)) {
											var s = a.scrollHeight - a.clientHeight;
											if (s > 0 && (a.scrollTop > 0 && i < 0 || a.scrollTop < s && i > 0)) return !0
										}
										if (t && o.overflowX.match(/(scroll|auto)/)) {
											var l = a.scrollWidth - a.clientWidth;
											if (l > 0 && (a.scrollLeft > 0 && t < 0 || a.scrollLeft < l && t > 0)) return !0
										}
										a = a.parentNode
									}
									return !1
								}(t.target, a, o)) {
									var s = !1;
									e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (o ? n.scrollTop -= o * e.settings.wheelSpeed : n.scrollTop += a * e.settings.wheelSpeed, s = !0) : e.scrollbarXActive && !e.scrollbarYActive && (a ? n.scrollLeft += a * e.settings.wheelSpeed : n.scrollLeft -= o * e.settings.wheelSpeed, s = !0) : (n.scrollTop -= o * e.settings.wheelSpeed, n.scrollLeft += a * e.settings.wheelSpeed), C(e), s = s || function(t, r) {
										var i = Math.floor(n.scrollTop),
											a = 0 === n.scrollTop,
											o = i + n.offsetHeight === n.scrollHeight,
											s = 0 === n.scrollLeft,
											l = n.scrollLeft + n.offsetWidth === n.scrollWidth;
										return !(Math.abs(r) > Math.abs(t) ? a || o : s || l) || !e.settings.wheelPropagation
									}(a, o), s && !t.ctrlKey && (t.stopPropagation(), t.preventDefault())
								}
							}
							void 0 !== window.onwheel ? e.event.bind(n, "wheel", t) : void 0 !== window.onmousewheel && e.event.bind(n, "mousewheel", t)
						},
						touch: function(e) {
							if (S.supportsTouch || S.supportsIePointer) {
								var n = e.element,
									t = {},
									i = 0,
									a = {},
									o = null;
								S.supportsTouch ? (e.event.bind(n, "touchstart", u), e.event.bind(n, "touchmove", d), e.event.bind(n, "touchend", f)) : S.supportsIePointer && (window.PointerEvent ? (e.event.bind(n, "pointerdown", u), e.event.bind(n, "pointermove", d), e.event.bind(n, "pointerup", f)) : window.MSPointerEvent && (e.event.bind(n, "MSPointerDown", u), e.event.bind(n, "MSPointerMove", d), e.event.bind(n, "MSPointerUp", f)))
							}

							function s(t, r) {
								n.scrollTop -= r, n.scrollLeft -= t, C(e)
							}

							function l(e) {
								return e.targetTouches ? e.targetTouches[0] : e
							}

							function c(e) {
								return !(e.pointerType && "pen" === e.pointerType && 0 === e.buttons || (!e.targetTouches || 1 !== e.targetTouches.length) && (!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
							}

							function u(e) {
								if (c(e)) {
									var n = l(e);
									t.pageX = n.pageX, t.pageY = n.pageY, i = (new Date)
										.getTime(), null !== o && clearInterval(o)
								}
							}

							function d(o) {
								if (c(o)) {
									var u = l(o),
										d = {
											pageX: u.pageX,
											pageY: u.pageY
										},
										f = d.pageX - t.pageX,
										h = d.pageY - t.pageY;
									if (function(e, t, i) {
										if (!n.contains(e)) return !1;
										for (var a = e; a && a !== n;) {
											if (a.classList.contains(p)) return !0;
											var o = r(a);
											if (i && o.overflowY.match(/(scroll|auto)/)) {
												var s = a.scrollHeight - a.clientHeight;
												if (s > 0 && (a.scrollTop > 0 && i < 0 || a.scrollTop < s && i > 0)) return !0
											}
											if (t && o.overflowX.match(/(scroll|auto)/)) {
												var l = a.scrollWidth - a.clientWidth;
												if (l > 0 && (a.scrollLeft > 0 && t < 0 || a.scrollLeft < l && t > 0)) return !0
											}
											a = a.parentNode
										}
										return !1
									}(o.target, f, h)) return;
									s(f, h), t = d;
									var m = (new Date)
										.getTime(),
										g = m - i;
									g > 0 && (a.x = f / g, a.y = h / g, i = m),
										function(t, r) {
											var i = Math.floor(n.scrollTop),
												a = n.scrollLeft,
												o = Math.abs(t),
												s = Math.abs(r);
											if (s > o) {
												if (r < 0 && i === e.contentHeight - e.containerHeight || r > 0 && 0 === i) return 0 === window.scrollY && r > 0 && S.isChrome
											} else if (o > s && (t < 0 && a === e.contentWidth - e.containerWidth || t > 0 && 0 === a)) return !0;
											return !0
										}(f, h) && o.preventDefault()
								}
							}

							function f() {
								e.settings.swipeEasing && (clearInterval(o), o = setInterval((function() {
									e.isInitialized ? clearInterval(o) : a.x || a.y ? Math.abs(a.x) < .01 && Math.abs(a.y) < .01 ? clearInterval(o) : e.element ? (s(30 * a.x, 30 * a.y), a.x *= .8, a.y *= .8) : clearInterval(o) : clearInterval(o)
								}), 10))
							}
						}
					},
					_ = function(e, n) {
						var t = this;
						if (void 0 === n && (n = {}), "string" == typeof e && (e = document.querySelector(e)), !e || !e.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
						for (var o in this.element = e, e.classList.add("ps"), this.settings = {
							handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
							maxScrollbarLength: null,
							minScrollbarLength: null,
							scrollingThreshold: 1e3,
							scrollXMarginOffset: 0,
							scrollYMarginOffset: 0,
							suppressScrollX: !1,
							suppressScrollY: !1,
							swipeEasing: !0,
							useBothWheelAxes: !1,
							wheelPropagation: !0,
							wheelSpeed: 1
						}, n) this.settings[o] = n[o];
						this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
						var s, l, c = function() {
								return e.classList.add(f)
							},
							p = function() {
								return e.classList.remove(f)
							};
						this.isRtl = "rtl" === r(e)
							.direction, !0 === this.isRtl && e.classList.add("ps__rtl"), this.isNegativeScroll = (l = e.scrollLeft, e.scrollLeft = -1, s = e.scrollLeft < 0, e.scrollLeft = l, s), this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, this.event = new j, this.ownerDocument = e.ownerDocument || document, this.scrollbarXRail = a(d("x")), e.appendChild(this.scrollbarXRail), this.scrollbarX = a(u("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", c), this.event.bind(this.scrollbarX, "blur", p), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
						var h = r(this.scrollbarXRail);
						this.scrollbarXBottom = parseInt(h.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = E(h.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = E(h.borderLeftWidth) + E(h.borderRightWidth), i(this.scrollbarXRail, {
							display: "block"
						}), this.railXMarginWidth = E(h.marginLeft) + E(h.marginRight), i(this.scrollbarXRail, {
							display: ""
						}), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = a(d("y")), e.appendChild(this.scrollbarYRail), this.scrollbarY = a(u("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", c), this.event.bind(this.scrollbarY, "blur", p), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
						var m = r(this.scrollbarYRail);
						this.scrollbarYRight = parseInt(m.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = E(m.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function(e) {
							var n = r(e);
							return E(n.width) + E(n.paddingLeft) + E(n.paddingRight) + E(n.borderLeftWidth) + E(n.borderRightWidth)
						}(this.scrollbarY) : null, this.railBorderYWidth = E(m.borderTopWidth) + E(m.borderBottomWidth), i(this.scrollbarYRail, {
							display: "block"
						}), this.railYMarginHeight = E(m.marginTop) + E(m.marginBottom), i(this.scrollbarYRail, {
							display: ""
						}), this.railYHeight = null, this.railYRatio = null, this.reach = {
							x: e.scrollLeft <= 0 ? "start" : e.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
							y: e.scrollTop <= 0 ? "start" : e.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
						}, this.isAlive = !0, this.settings.handlers.forEach((function(e) {
							return A[e](t)
						})), this.lastScrollTop = Math.floor(e.scrollTop), this.lastScrollLeft = e.scrollLeft, this.event.bind(this.element, "scroll", (function(e) {
							return t.onScroll(e)
						})), C(this)
					};
				_.prototype.update = function() {
					this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, i(this.scrollbarXRail, {
						display: "block"
					}), i(this.scrollbarYRail, {
						display: "block"
					}), this.railXMarginWidth = E(r(this.scrollbarXRail)
						.marginLeft) + E(r(this.scrollbarXRail)
						.marginRight), this.railYMarginHeight = E(r(this.scrollbarYRail)
						.marginTop) + E(r(this.scrollbarYRail)
						.marginBottom), i(this.scrollbarXRail, {
						display: "none"
					}), i(this.scrollbarYRail, {
						display: "none"
					}), C(this), N(this, "top", 0, !1, !0), N(this, "left", 0, !1, !0), i(this.scrollbarXRail, {
						display: ""
					}), i(this.scrollbarYRail, {
						display: ""
					}))
				}, _.prototype.onScroll = function(e) {
					this.isAlive && (C(this), N(this, "top", this.element.scrollTop - this.lastScrollTop), N(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
				}, _.prototype.destroy = function() {
					this.isAlive && (this.event.unbindAll(), l(this.scrollbarX), l(this.scrollbarY), l(this.scrollbarXRail), l(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
				}, _.prototype.removePsClasses = function() {
					this.element.className = this.element.className.split(" ")
						.filter((function(e) {
							return !e.match(/^ps([-_].+|)$/)
						}))
						.join(" ")
				};
				const R = _
			},
			2703: (e, n, t) => {
				"use strict";
				var r = t(414);

				function i() {}

				function a() {}
				a.resetWarningCache = i, e.exports = function() {
					function e(e, n, t, i, a, o) {
						if (o !== r) {
							var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
							throw s.name = "Invariant Violation", s
						}
					}

					function n() {
						return e
					}
					e.isRequired = e;
					var t = {
						array: e,
						bigint: e,
						bool: e,
						func: e,
						number: e,
						object: e,
						string: e,
						symbol: e,
						any: e,
						arrayOf: n,
						element: e,
						elementType: e,
						instanceOf: n,
						node: e,
						objectOf: n,
						oneOf: n,
						oneOfType: n,
						shape: n,
						exact: n,
						checkPropTypes: a,
						resetWarningCache: i
					};
					return t.PropTypes = t, t
				}
			},
			5697: (e, n, t) => {
				e.exports = t(2703)()
			},
			414: e => {
				"use strict";
				e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
			},
			4448: (e, n, t) => {
				"use strict";
				var r = t(7294),
					i = t(3840);

				function a(e) {
					for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
					return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
				}
				var o = new Set,
					s = {};

				function l(e, n) {
					c(e, n), c(e + "Capture", n)
				}

				function c(e, n) {
					for (s[e] = n, e = 0; e < n.length; e++) o.add(n[e])
				}
				var u = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
					d = Object.prototype.hasOwnProperty,
					p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
					f = {},
					h = {};

				function m(e, n, t, r, i, a, o) {
					this.acceptsBooleans = 2 === n || 3 === n || 4 === n, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = a, this.removeEmptyString = o
				}
				var g = {};
				"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ")
					.forEach((function(e) {
						g[e] = new m(e, 0, !1, e, null, !1, !1)
					})), [
						["acceptCharset", "accept-charset"],
						["className", "class"],
						["htmlFor", "for"],
						["httpEquiv", "http-equiv"]
					].forEach((function(e) {
						var n = e[0];
						g[n] = new m(n, 1, !1, e[1], null, !1, !1)
					})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
						g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
					})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
						g[e] = new m(e, 2, !1, e, null, !1, !1)
					})), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ")
					.forEach((function(e) {
						g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
					})), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
						g[e] = new m(e, 3, !0, e, null, !1, !1)
					})), ["capture", "download"].forEach((function(e) {
						g[e] = new m(e, 4, !1, e, null, !1, !1)
					})), ["cols", "rows", "size", "span"].forEach((function(e) {
						g[e] = new m(e, 6, !1, e, null, !1, !1)
					})), ["rowSpan", "start"].forEach((function(e) {
						g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
					}));
				var v = /[\-:]([a-z])/g;

				function b(e) {
					return e[1].toUpperCase()
				}

				function x(e, n, t, r) {
					var i = g.hasOwnProperty(n) ? g[n] : null;
					(null !== i ? 0 !== i.type : r || !(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && (function(e, n, t, r) {
						if (null == n || function(e, n, t, r) {
							if (null !== t && 0 === t.type) return !1;
							switch (typeof n) {
								case "function":
								case "symbol":
									return !0;
								case "boolean":
									return !r && (null !== t ? !t.acceptsBooleans : "data-" !== (e = e.toLowerCase()
										.slice(0, 5)) && "aria-" !== e);
								default:
									return !1
							}
						}(e, n, t, r)) return !0;
						if (r) return !1;
						if (null !== t) switch (t.type) {
							case 3:
								return !n;
							case 4:
								return !1 === n;
							case 5:
								return isNaN(n);
							case 6:
								return isNaN(n) || 1 > n
						}
						return !1
					}(n, t, i, r) && (t = null), r || null === i ? function(e) {
						return !!d.call(h, e) || !d.call(f, e) && (p.test(e) ? h[e] = !0 : (f[e] = !0, !1))
					}(n) && (null === t ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : i.mustUseProperty ? e[i.propertyName] = null === t ? 3 !== i.type && "" : t : (n = i.attributeName, r = i.attributeNamespace, null === t ? e.removeAttribute(n) : (t = 3 === (i = i.type) || 4 === i && !0 === t ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))))
				}
				"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ")
					.forEach((function(e) {
						var n = e.replace(v, b);
						g[n] = new m(n, 1, !1, e, null, !1, !1)
					})), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ")
					.forEach((function(e) {
						var n = e.replace(v, b);
						g[n] = new m(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
					})), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
						var n = e.replace(v, b);
						g[n] = new m(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
					})), ["tabIndex", "crossOrigin"].forEach((function(e) {
						g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
					})), g.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
						g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
					}));
				var y = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
					w = Symbol.for("react.element"),
					j = Symbol.for("react.portal"),
					k = Symbol.for("react.fragment"),
					N = Symbol.for("react.strict_mode"),
					E = Symbol.for("react.profiler"),
					S = Symbol.for("react.provider"),
					C = Symbol.for("react.context"),
					T = Symbol.for("react.forward_ref"),
					O = Symbol.for("react.suspense"),
					A = Symbol.for("react.suspense_list"),
					_ = Symbol.for("react.memo"),
					R = Symbol.for("react.lazy");
				Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
				var I = Symbol.for("react.offscreen");
				Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
				var P = Symbol.iterator;

				function L(e) {
					return null === e || "object" != typeof e ? null : "function" == typeof(e = P && e[P] || e["@@iterator"]) ? e : null
				}
				var M, D = Object.assign;

				function U(e) {
					if (void 0 === M) try {
						throw Error()
					} catch (e) {
						var n = e.stack.trim()
							.match(/\n( *(at )?)/);
						M = n && n[1] || ""
					}
					return "\n" + M + e
				}
				var F = !1;

				function z(e, n) {
					if (!e || F) return "";
					F = !0;
					var t = Error.prepareStackTrace;
					Error.prepareStackTrace = void 0;
					try {
						if (n)
							if (n = function() {
								throw Error()
							}, Object.defineProperty(n.prototype, "props", {
								set: function() {
									throw Error()
								}
							}), "object" == typeof Reflect && Reflect.construct) {
								try {
									Reflect.construct(n, [])
								} catch (e) {
									var r = e
								}
								Reflect.construct(e, [], n)
							} else {
								try {
									n.call()
								} catch (e) {
									r = e
								}
								e.call(n.prototype)
							}
						else {
							try {
								throw Error()
							} catch (e) {
								r = e
							}
							e()
						}
					} catch (n) {
						if (n && r && "string" == typeof n.stack) {
							for (var i = n.stack.split("\n"), a = r.stack.split("\n"), o = i.length - 1, s = a.length - 1; 1 <= o && 0 <= s && i[o] !== a[s];) s--;
							for (; 1 <= o && 0 <= s; o--, s--)
								if (i[o] !== a[s]) {
									if (1 !== o || 1 !== s)
										do {
											if (o--, 0 > --s || i[o] !== a[s]) {
												var l = "\n" + i[o].replace(" at new ", " at ");
												return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
											}
										} while (1 <= o && 0 <= s);
									break
								}
						}
					} finally {
						F = !1, Error.prepareStackTrace = t
					}
					return (e = e ? e.displayName || e.name : "") ? U(e) : ""
				}

				function H(e) {
					switch (e.tag) {
						case 5:
							return U(e.type);
						case 16:
							return U("Lazy");
						case 13:
							return U("Suspense");
						case 19:
							return U("SuspenseList");
						case 0:
						case 2:
						case 15:
							return z(e.type, !1);
						case 11:
							return z(e.type.render, !1);
						case 1:
							return z(e.type, !0);
						default:
							return ""
					}
				}

				function B(e) {
					if (null == e) return null;
					if ("function" == typeof e) return e.displayName || e.name || null;
					if ("string" == typeof e) return e;
					switch (e) {
						case k:
							return "Fragment";
						case j:
							return "Portal";
						case E:
							return "Profiler";
						case N:
							return "StrictMode";
						case O:
							return "Suspense";
						case A:
							return "SuspenseList"
					}
					if ("object" == typeof e) switch (e.$$typeof) {
						case C:
							return (e.displayName || "Context") + ".Consumer";
						case S:
							return (e._context.displayName || "Context") + ".Provider";
						case T:
							var n = e.render;
							return (e = e.displayName) || (e = "" !== (e = n.displayName || n.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
						case _:
							return null !== (n = e.displayName || null) ? n : B(e.type) || "Memo";
						case R:
							n = e._payload, e = e._init;
							try {
								return B(e(n))
							} catch (e) {}
					}
					return null
				}

				function W(e) {
					var n = e.type;
					switch (e.tag) {
						case 24:
							return "Cache";
						case 9:
							return (n.displayName || "Context") + ".Consumer";
						case 10:
							return (n._context.displayName || "Context") + ".Provider";
						case 18:
							return "DehydratedFragment";
						case 11:
							return e = (e = n.render)
								.displayName || e.name || "", n.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
						case 7:
							return "Fragment";
						case 5:
							return n;
						case 4:
							return "Portal";
						case 3:
							return "Root";
						case 6:
							return "Text";
						case 16:
							return B(n);
						case 8:
							return n === N ? "StrictMode" : "Mode";
						case 22:
							return "Offscreen";
						case 12:
							return "Profiler";
						case 21:
							return "Scope";
						case 13:
							return "Suspense";
						case 19:
							return "SuspenseList";
						case 25:
							return "TracingMarker";
						case 1:
						case 0:
						case 17:
						case 2:
						case 14:
						case 15:
							if ("function" == typeof n) return n.displayName || n.name || null;
							if ("string" == typeof n) return n
					}
					return null
				}

				function G(e) {
					switch (typeof e) {
						case "boolean":
						case "number":
						case "string":
						case "undefined":
						case "object":
							return e;
						default:
							return ""
					}
				}

				function Y(e) {
					var n = e.type;
					return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === n || "radio" === n)
				}

				function X(e) {
					e._valueTracker || (e._valueTracker = function(e) {
						var n = Y(e) ? "checked" : "value",
							t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
							r = "" + e[n];
						if (!e.hasOwnProperty(n) && void 0 !== t && "function" == typeof t.get && "function" == typeof t.set) {
							var i = t.get,
								a = t.set;
							return Object.defineProperty(e, n, {
								configurable: !0,
								get: function() {
									return i.call(this)
								},
								set: function(e) {
									r = "" + e, a.call(this, e)
								}
							}), Object.defineProperty(e, n, {
								enumerable: t.enumerable
							}), {
								getValue: function() {
									return r
								},
								setValue: function(e) {
									r = "" + e
								},
								stopTracking: function() {
									e._valueTracker = null, delete e[n]
								}
							}
						}
					}(e))
				}

				function V(e) {
					if (!e) return !1;
					var n = e._valueTracker;
					if (!n) return !0;
					var t = n.getValue(),
						r = "";
					return e && (r = Y(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== t && (n.setValue(e), !0)
				}

				function q(e) {
					if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
					try {
						return e.activeElement || e.body
					} catch (n) {
						return e.body
					}
				}

				function $(e, n) {
					var t = n.checked;
					return D({}, n, {
						defaultChecked: void 0,
						defaultValue: void 0,
						value: void 0,
						checked: null != t ? t : e._wrapperState.initialChecked
					})
				}

				function K(e, n) {
					var t = null == n.defaultValue ? "" : n.defaultValue,
						r = null != n.checked ? n.checked : n.defaultChecked;
					t = G(null != n.value ? n.value : t), e._wrapperState = {
						initialChecked: r,
						initialValue: t,
						controlled: "checkbox" === n.type || "radio" === n.type ? null != n.checked : null != n.value
					}
				}

				function Q(e, n) {
					null != (n = n.checked) && x(e, "checked", n, !1)
				}

				function Z(e, n) {
					Q(e, n);
					var t = G(n.value),
						r = n.type;
					if (null != t) "number" === r ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
					else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
					n.hasOwnProperty("value") ? ee(e, n.type, t) : n.hasOwnProperty("defaultValue") && ee(e, n.type, G(n.defaultValue)), null == n.checked && null != n.defaultChecked && (e.defaultChecked = !!n.defaultChecked)
				}

				function J(e, n, t) {
					if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
						var r = n.type;
						if (!("submit" !== r && "reset" !== r || void 0 !== n.value && null !== n.value)) return;
						n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n
					}
					"" !== (t = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== t && (e.name = t)
				}

				function ee(e, n, t) {
					"number" === n && q(e.ownerDocument) === e || (null == t ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t))
				}
				var ne = Array.isArray;

				function te(e, n, t, r) {
					if (e = e.options, n) {
						n = {};
						for (var i = 0; i < t.length; i++) n["$" + t[i]] = !0;
						for (t = 0; t < e.length; t++) i = n.hasOwnProperty("$" + e[t].value), e[t].selected !== i && (e[t].selected = i), i && r && (e[t].defaultSelected = !0)
					} else {
						for (t = "" + G(t), n = null, i = 0; i < e.length; i++) {
							if (e[i].value === t) return e[i].selected = !0, void(r && (e[i].defaultSelected = !0));
							null !== n || e[i].disabled || (n = e[i])
						}
						null !== n && (n.selected = !0)
					}
				}

				function re(e, n) {
					if (null != n.dangerouslySetInnerHTML) throw Error(a(91));
					return D({}, n, {
						value: void 0,
						defaultValue: void 0,
						children: "" + e._wrapperState.initialValue
					})
				}

				function ie(e, n) {
					var t = n.value;
					if (null == t) {
						if (t = n.children, n = n.defaultValue, null != t) {
							if (null != n) throw Error(a(92));
							if (ne(t)) {
								if (1 < t.length) throw Error(a(93));
								t = t[0]
							}
							n = t
						}
						null == n && (n = ""), t = n
					}
					e._wrapperState = {
						initialValue: G(t)
					}
				}

				function ae(e, n) {
					var t = G(n.value),
						r = G(n.defaultValue);
					null != t && ((t = "" + t) !== e.value && (e.value = t), null == n.defaultValue && e.defaultValue !== t && (e.defaultValue = t)), null != r && (e.defaultValue = "" + r)
				}

				function oe(e) {
					var n = e.textContent;
					n === e._wrapperState.initialValue && "" !== n && null !== n && (e.value = n)
				}

				function se(e) {
					switch (e) {
						case "svg":
							return "http://www.w3.org/2000/svg";
						case "math":
							return "http://www.w3.org/1998/Math/MathML";
						default:
							return "http://www.w3.org/1999/xhtml"
					}
				}

				function le(e, n) {
					return null == e || "http://www.w3.org/1999/xhtml" === e ? se(n) : "http://www.w3.org/2000/svg" === e && "foreignObject" === n ? "http://www.w3.org/1999/xhtml" : e
				}
				var ce, ue, de = (ue = function(e, n) {
					if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = n;
					else {
						for ((ce = ce || document.createElement("div"))
							.innerHTML = "<svg>" + n.valueOf()
							.toString() + "</svg>", n = ce.firstChild; e.firstChild;) e.removeChild(e.firstChild);
						for (; n.firstChild;) e.appendChild(n.firstChild)
					}
				}, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, n, t, r) {
					MSApp.execUnsafeLocalFunction((function() {
						return ue(e, n)
					}))
				} : ue);

				function pe(e, n) {
					if (n) {
						var t = e.firstChild;
						if (t && t === e.lastChild && 3 === t.nodeType) return void(t.nodeValue = n)
					}
					e.textContent = n
				}
				var fe = {
						animationIterationCount: !0,
						aspectRatio: !0,
						borderImageOutset: !0,
						borderImageSlice: !0,
						borderImageWidth: !0,
						boxFlex: !0,
						boxFlexGroup: !0,
						boxOrdinalGroup: !0,
						columnCount: !0,
						columns: !0,
						flex: !0,
						flexGrow: !0,
						flexPositive: !0,
						flexShrink: !0,
						flexNegative: !0,
						flexOrder: !0,
						gridArea: !0,
						gridRow: !0,
						gridRowEnd: !0,
						gridRowSpan: !0,
						gridRowStart: !0,
						gridColumn: !0,
						gridColumnEnd: !0,
						gridColumnSpan: !0,
						gridColumnStart: !0,
						fontWeight: !0,
						lineClamp: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						tabSize: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0,
						fillOpacity: !0,
						floodOpacity: !0,
						stopOpacity: !0,
						strokeDasharray: !0,
						strokeDashoffset: !0,
						strokeMiterlimit: !0,
						strokeOpacity: !0,
						strokeWidth: !0
					},
					he = ["Webkit", "ms", "Moz", "O"];

				function me(e, n, t) {
					return null == n || "boolean" == typeof n || "" === n ? "" : t || "number" != typeof n || 0 === n || fe.hasOwnProperty(e) && fe[e] ? ("" + n)
						.trim() : n + "px"
				}

				function ge(e, n) {
					for (var t in e = e.style, n)
						if (n.hasOwnProperty(t)) {
							var r = 0 === t.indexOf("--"),
								i = me(t, n[t], r);
							"float" === t && (t = "cssFloat"), r ? e.setProperty(t, i) : e[t] = i
						}
				}
				Object.keys(fe)
					.forEach((function(e) {
						he.forEach((function(n) {
							n = n + e.charAt(0)
								.toUpperCase() + e.substring(1), fe[n] = fe[e]
						}))
					}));
				var ve = D({
					menuitem: !0
				}, {
					area: !0,
					base: !0,
					br: !0,
					col: !0,
					embed: !0,
					hr: !0,
					img: !0,
					input: !0,
					keygen: !0,
					link: !0,
					meta: !0,
					param: !0,
					source: !0,
					track: !0,
					wbr: !0
				});

				function be(e, n) {
					if (n) {
						if (ve[e] && (null != n.children || null != n.dangerouslySetInnerHTML)) throw Error(a(137, e));
						if (null != n.dangerouslySetInnerHTML) {
							if (null != n.children) throw Error(a(60));
							if ("object" != typeof n.dangerouslySetInnerHTML || !("__html" in n.dangerouslySetInnerHTML)) throw Error(a(61))
						}
						if (null != n.style && "object" != typeof n.style) throw Error(a(62))
					}
				}

				function xe(e, n) {
					if (-1 === e.indexOf("-")) return "string" == typeof n.is;
					switch (e) {
						case "annotation-xml":
						case "color-profile":
						case "font-face":
						case "font-face-src":
						case "font-face-uri":
						case "font-face-format":
						case "font-face-name":
						case "missing-glyph":
							return !1;
						default:
							return !0
					}
				}
				var ye = null;

				function we(e) {
					return (e = e.target || e.srcElement || window)
						.correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
				}
				var je = null,
					ke = null,
					Ne = null;

				function Ee(e) {
					if (e = gi(e)) {
						if ("function" != typeof je) throw Error(a(280));
						var n = e.stateNode;
						n && (n = bi(n), je(e.stateNode, e.type, n))
					}
				}

				function Se(e) {
					ke ? Ne ? Ne.push(e) : Ne = [e] : ke = e
				}

				function Ce() {
					if (ke) {
						var e = ke,
							n = Ne;
						if (Ne = ke = null, Ee(e), n)
							for (e = 0; e < n.length; e++) Ee(n[e])
					}
				}

				function Te(e, n) {
					return e(n)
				}

				function Oe() {}
				var Ae = !1;

				function _e(e, n, t) {
					if (Ae) return e(n, t);
					Ae = !0;
					try {
						return Te(e, n, t)
					} finally {
						Ae = !1, (null !== ke || null !== Ne) && (Oe(), Ce())
					}
				}

				function Re(e, n) {
					var t = e.stateNode;
					if (null === t) return null;
					var r = bi(t);
					if (null === r) return null;
					t = r[n];
					e: switch (n) {
						case "onClick":
						case "onClickCapture":
						case "onDoubleClick":
						case "onDoubleClickCapture":
						case "onMouseDown":
						case "onMouseDownCapture":
						case "onMouseMove":
						case "onMouseMoveCapture":
						case "onMouseUp":
						case "onMouseUpCapture":
						case "onMouseEnter":
							(r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
							break e;
						default:
							e = !1
					}
					if (e) return null;
					if (t && "function" != typeof t) throw Error(a(231, n, typeof t));
					return t
				}
				var Ie = !1;
				if (u) try {
					var Pe = {};
					Object.defineProperty(Pe, "passive", {
						get: function() {
							Ie = !0
						}
					}), window.addEventListener("test", Pe, Pe), window.removeEventListener("test", Pe, Pe)
				} catch (ue) {
					Ie = !1
				}

				function Le(e, n, t, r, i, a, o, s, l) {
					var c = Array.prototype.slice.call(arguments, 3);
					try {
						n.apply(t, c)
					} catch (e) {
						this.onError(e)
					}
				}
				var Me = !1,
					De = null,
					Ue = !1,
					Fe = null,
					ze = {
						onError: function(e) {
							Me = !0, De = e
						}
					};

				function He(e, n, t, r, i, a, o, s, l) {
					Me = !1, De = null, Le.apply(ze, arguments)
				}

				function Be(e) {
					var n = e,
						t = e;
					if (e.alternate)
						for (; n.return;) n = n.return;
					else {
						e = n;
						do {
							0 != (4098 & (n = e)
								.flags) && (t = n.return), e = n.return
						} while (e)
					}
					return 3 === n.tag ? t : null
				}

				function We(e) {
					if (13 === e.tag) {
						var n = e.memoizedState;
						if (null === n && null !== (e = e.alternate) && (n = e.memoizedState), null !== n) return n.dehydrated
					}
					return null
				}

				function Ge(e) {
					if (Be(e) !== e) throw Error(a(188))
				}

				function Ye(e) {
					return null !== (e = function(e) {
						var n = e.alternate;
						if (!n) {
							if (null === (n = Be(e))) throw Error(a(188));
							return n !== e ? null : e
						}
						for (var t = e, r = n;;) {
							var i = t.return;
							if (null === i) break;
							var o = i.alternate;
							if (null === o) {
								if (null !== (r = i.return)) {
									t = r;
									continue
								}
								break
							}
							if (i.child === o.child) {
								for (o = i.child; o;) {
									if (o === t) return Ge(i), e;
									if (o === r) return Ge(i), n;
									o = o.sibling
								}
								throw Error(a(188))
							}
							if (t.return !== r.return) t = i, r = o;
							else {
								for (var s = !1, l = i.child; l;) {
									if (l === t) {
										s = !0, t = i, r = o;
										break
									}
									if (l === r) {
										s = !0, r = i, t = o;
										break
									}
									l = l.sibling
								}
								if (!s) {
									for (l = o.child; l;) {
										if (l === t) {
											s = !0, t = o, r = i;
											break
										}
										if (l === r) {
											s = !0, r = o, t = i;
											break
										}
										l = l.sibling
									}
									if (!s) throw Error(a(189))
								}
							}
							if (t.alternate !== r) throw Error(a(190))
						}
						if (3 !== t.tag) throw Error(a(188));
						return t.stateNode.current === t ? e : n
					}(e)) ? Xe(e) : null
				}

				function Xe(e) {
					if (5 === e.tag || 6 === e.tag) return e;
					for (e = e.child; null !== e;) {
						var n = Xe(e);
						if (null !== n) return n;
						e = e.sibling
					}
					return null
				}
				var Ve = i.unstable_scheduleCallback,
					qe = i.unstable_cancelCallback,
					$e = i.unstable_shouldYield,
					Ke = i.unstable_requestPaint,
					Qe = i.unstable_now,
					Ze = i.unstable_getCurrentPriorityLevel,
					Je = i.unstable_ImmediatePriority,
					en = i.unstable_UserBlockingPriority,
					nn = i.unstable_NormalPriority,
					tn = i.unstable_LowPriority,
					rn = i.unstable_IdlePriority,
					an = null,
					on = null,
					sn = Math.clz32 ? Math.clz32 : function(e) {
						return 0 == (e >>>= 0) ? 32 : 31 - (ln(e) / cn | 0) | 0
					},
					ln = Math.log,
					cn = Math.LN2,
					un = 64,
					dn = 4194304;

				function pn(e) {
					switch (e & -e) {
						case 1:
							return 1;
						case 2:
							return 2;
						case 4:
							return 4;
						case 8:
							return 8;
						case 16:
							return 16;
						case 32:
							return 32;
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return 4194240 & e;
						case 4194304:
						case 8388608:
						case 16777216:
						case 33554432:
						case 67108864:
							return 130023424 & e;
						case 134217728:
							return 134217728;
						case 268435456:
							return 268435456;
						case 536870912:
							return 536870912;
						case 1073741824:
							return 1073741824;
						default:
							return e
					}
				}

				function fn(e, n) {
					var t = e.pendingLanes;
					if (0 === t) return 0;
					var r = 0,
						i = e.suspendedLanes,
						a = e.pingedLanes,
						o = 268435455 & t;
					if (0 !== o) {
						var s = o & ~i;
						0 !== s ? r = pn(s) : 0 != (a &= o) && (r = pn(a))
					} else 0 != (o = t & ~i) ? r = pn(o) : 0 !== a && (r = pn(a));
					if (0 === r) return 0;
					if (0 !== n && n !== r && 0 == (n & i) && ((i = r & -r) >= (a = n & -n) || 16 === i && 0 != (4194240 & a))) return n;
					if (0 != (4 & r) && (r |= 16 & t), 0 !== (n = e.entangledLanes))
						for (e = e.entanglements, n &= r; 0 < n;) i = 1 << (t = 31 - sn(n)), r |= e[t], n &= ~i;
					return r
				}

				function hn(e, n) {
					switch (e) {
						case 1:
						case 2:
						case 4:
							return n + 250;
						case 8:
						case 16:
						case 32:
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return n + 5e3;
						default:
							return -1
					}
				}

				function mn(e) {
					return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
				}

				function gn(e) {
					for (var n = [], t = 0; 31 > t; t++) n.push(e);
					return n
				}

				function vn(e, n, t) {
					e.pendingLanes |= n, 536870912 !== n && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[n = 31 - sn(n)] = t
				}

				function bn(e, n) {
					var t = e.entangledLanes |= n;
					for (e = e.entanglements; t;) {
						var r = 31 - sn(t),
							i = 1 << r;
						i & n | e[r] & n && (e[r] |= n), t &= ~i
					}
				}
				var xn = 0;

				function yn(e) {
					return 1 < (e &= -e) ? 4 < e ? 0 != (268435455 & e) ? 16 : 536870912 : 4 : 1
				}
				var wn, jn, kn, Nn, En, Sn = !1,
					Cn = [],
					Tn = null,
					On = null,
					An = null,
					_n = new Map,
					Rn = new Map,
					In = [],
					Pn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

				function Ln(e, n) {
					switch (e) {
						case "focusin":
						case "focusout":
							Tn = null;
							break;
						case "dragenter":
						case "dragleave":
							On = null;
							break;
						case "mouseover":
						case "mouseout":
							An = null;
							break;
						case "pointerover":
						case "pointerout":
							_n.delete(n.pointerId);
							break;
						case "gotpointercapture":
						case "lostpointercapture":
							Rn.delete(n.pointerId)
					}
				}

				function Mn(e, n, t, r, i, a) {
					return null === e || e.nativeEvent !== a ? (e = {
						blockedOn: n,
						domEventName: t,
						eventSystemFlags: r,
						nativeEvent: a,
						targetContainers: [i]
					}, null !== n && null !== (n = gi(n)) && jn(n), e) : (e.eventSystemFlags |= r, n = e.targetContainers, null !== i && -1 === n.indexOf(i) && n.push(i), e)
				}

				function Dn(e) {
					var n = mi(e.target);
					if (null !== n) {
						var t = Be(n);
						if (null !== t)
							if (13 === (n = t.tag)) {
								if (null !== (n = We(t))) return e.blockedOn = n, void En(e.priority, (function() {
									kn(t)
								}))
							} else if (3 === n && t.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === t.tag ? t.stateNode.containerInfo : null)
					}
					e.blockedOn = null
				}

				function Un(e) {
					if (null !== e.blockedOn) return !1;
					for (var n = e.targetContainers; 0 < n.length;) {
						var t = qn(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
						if (null !== t) return null !== (n = gi(t)) && jn(n), e.blockedOn = t, !1;
						var r = new(t = e.nativeEvent)
							.constructor(t.type, t);
						ye = r, t.target.dispatchEvent(r), ye = null, n.shift()
					}
					return !0
				}

				function Fn(e, n, t) {
					Un(e) && t.delete(n)
				}

				function zn() {
					Sn = !1, null !== Tn && Un(Tn) && (Tn = null), null !== On && Un(On) && (On = null), null !== An && Un(An) && (An = null), _n.forEach(Fn), Rn.forEach(Fn)
				}

				function Hn(e, n) {
					e.blockedOn === n && (e.blockedOn = null, Sn || (Sn = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, zn)))
				}

				function Bn(e) {
					function n(n) {
						return Hn(n, e)
					}
					if (0 < Cn.length) {
						Hn(Cn[0], e);
						for (var t = 1; t < Cn.length; t++) {
							var r = Cn[t];
							r.blockedOn === e && (r.blockedOn = null)
						}
					}
					for (null !== Tn && Hn(Tn, e), null !== On && Hn(On, e), null !== An && Hn(An, e), _n.forEach(n), Rn.forEach(n), t = 0; t < In.length; t++)(r = In[t])
						.blockedOn === e && (r.blockedOn = null);
					for (; 0 < In.length && null === (t = In[0])
						.blockedOn;) Dn(t), null === t.blockedOn && In.shift()
				}
				var Wn = y.ReactCurrentBatchConfig;

				function Gn(e, n, t, r) {
					var i = xn,
						a = Wn.transition;
					Wn.transition = null;
					try {
						xn = 1, Xn(e, n, t, r)
					} finally {
						xn = i, Wn.transition = a
					}
				}

				function Yn(e, n, t, r) {
					var i = xn,
						a = Wn.transition;
					Wn.transition = null;
					try {
						xn = 4, Xn(e, n, t, r)
					} finally {
						xn = i, Wn.transition = a
					}
				}

				function Xn(e, n, t, r) {
					var i = qn(e, n, t, r);
					if (null === i) Br(e, n, r, Vn, t), Ln(e, r);
					else if (function(e, n, t, r, i) {
						switch (n) {
							case "focusin":
								return Tn = Mn(Tn, e, n, t, r, i), !0;
							case "dragenter":
								return On = Mn(On, e, n, t, r, i), !0;
							case "mouseover":
								return An = Mn(An, e, n, t, r, i), !0;
							case "pointerover":
								var a = i.pointerId;
								return _n.set(a, Mn(_n.get(a) || null, e, n, t, r, i)), !0;
							case "gotpointercapture":
								return a = i.pointerId, Rn.set(a, Mn(Rn.get(a) || null, e, n, t, r, i)), !0
						}
						return !1
					}(i, e, n, t, r)) r.stopPropagation();
					else if (Ln(e, r), 4 & n && -1 < Pn.indexOf(e)) {
						for (; null !== i;) {
							var a = gi(i);
							if (null !== a && wn(a), null === (a = qn(e, n, t, r)) && Br(e, n, r, Vn, t), a === i) break;
							i = a
						}
						null !== i && r.stopPropagation()
					} else Br(e, n, r, null, t)
				}
				var Vn = null;

				function qn(e, n, t, r) {
					if (Vn = null, null !== (e = mi(e = we(r))))
						if (null === (n = Be(e))) e = null;
						else if (13 === (t = n.tag)) {
						if (null !== (e = We(n))) return e;
						e = null
					} else if (3 === t) {
						if (n.stateNode.current.memoizedState.isDehydrated) return 3 === n.tag ? n.stateNode.containerInfo : null;
						e = null
					} else n !== e && (e = null);
					return Vn = e, null
				}

				function $n(e) {
					switch (e) {
						case "cancel":
						case "click":
						case "close":
						case "contextmenu":
						case "copy":
						case "cut":
						case "auxclick":
						case "dblclick":
						case "dragend":
						case "dragstart":
						case "drop":
						case "focusin":
						case "focusout":
						case "input":
						case "invalid":
						case "keydown":
						case "keypress":
						case "keyup":
						case "mousedown":
						case "mouseup":
						case "paste":
						case "pause":
						case "play":
						case "pointercancel":
						case "pointerdown":
						case "pointerup":
						case "ratechange":
						case "reset":
						case "resize":
						case "seeked":
						case "submit":
						case "touchcancel":
						case "touchend":
						case "touchstart":
						case "volumechange":
						case "change":
						case "selectionchange":
						case "textInput":
						case "compositionstart":
						case "compositionend":
						case "compositionupdate":
						case "beforeblur":
						case "afterblur":
						case "beforeinput":
						case "blur":
						case "fullscreenchange":
						case "focus":
						case "hashchange":
						case "popstate":
						case "select":
						case "selectstart":
							return 1;
						case "drag":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "mousemove":
						case "mouseout":
						case "mouseover":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "scroll":
						case "toggle":
						case "touchmove":
						case "wheel":
						case "mouseenter":
						case "mouseleave":
						case "pointerenter":
						case "pointerleave":
							return 4;
						case "message":
							switch (Ze()) {
								case Je:
									return 1;
								case en:
									return 4;
								case nn:
								case tn:
									return 16;
								case rn:
									return 536870912;
								default:
									return 16
							}
						default:
							return 16
					}
				}
				var Kn = null,
					Qn = null,
					Zn = null;

				function Jn() {
					if (Zn) return Zn;
					var e, n, t = Qn,
						r = t.length,
						i = "value" in Kn ? Kn.value : Kn.textContent,
						a = i.length;
					for (e = 0; e < r && t[e] === i[e]; e++);
					var o = r - e;
					for (n = 1; n <= o && t[r - n] === i[a - n]; n++);
					return Zn = i.slice(e, 1 < n ? 1 - n : void 0)
				}

				function et(e) {
					var n = e.keyCode;
					return "charCode" in e ? 0 === (e = e.charCode) && 13 === n && (e = 13) : e = n, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
				}

				function nt() {
					return !0
				}

				function tt() {
					return !1
				}

				function rt(e) {
					function n(n, t, r, i, a) {
						for (var o in this._reactName = n, this._targetInst = r, this.type = t, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(i) : i[o]);
						return this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue) ? nt : tt, this.isPropagationStopped = tt, this
					}
					return D(n.prototype, {
						preventDefault: function() {
							this.defaultPrevented = !0;
							var e = this.nativeEvent;
							e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nt)
						},
						stopPropagation: function() {
							var e = this.nativeEvent;
							e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nt)
						},
						persist: function() {},
						isPersistent: nt
					}), n
				}
				var it, at, ot, st = {
						eventPhase: 0,
						bubbles: 0,
						cancelable: 0,
						timeStamp: function(e) {
							return e.timeStamp || Date.now()
						},
						defaultPrevented: 0,
						isTrusted: 0
					},
					lt = rt(st),
					ct = D({}, st, {
						view: 0,
						detail: 0
					}),
					ut = rt(ct),
					dt = D({}, ct, {
						screenX: 0,
						screenY: 0,
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						getModifierState: kt,
						button: 0,
						buttons: 0,
						relatedTarget: function(e) {
							return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
						},
						movementX: function(e) {
							return "movementX" in e ? e.movementX : (e !== ot && (ot && "mousemove" === e.type ? (it = e.screenX - ot.screenX, at = e.screenY - ot.screenY) : at = it = 0, ot = e), it)
						},
						movementY: function(e) {
							return "movementY" in e ? e.movementY : at
						}
					}),
					pt = rt(dt),
					ft = rt(D({}, dt, {
						dataTransfer: 0
					})),
					ht = rt(D({}, ct, {
						relatedTarget: 0
					})),
					mt = rt(D({}, st, {
						animationName: 0,
						elapsedTime: 0,
						pseudoElement: 0
					})),
					gt = D({}, st, {
						clipboardData: function(e) {
							return "clipboardData" in e ? e.clipboardData : window.clipboardData
						}
					}),
					vt = rt(gt),
					bt = rt(D({}, st, {
						data: 0
					})),
					xt = {
						Esc: "Escape",
						Spacebar: " ",
						Left: "ArrowLeft",
						Up: "ArrowUp",
						Right: "ArrowRight",
						Down: "ArrowDown",
						Del: "Delete",
						Win: "OS",
						Menu: "ContextMenu",
						Apps: "ContextMenu",
						Scroll: "ScrollLock",
						MozPrintableKey: "Unidentified"
					},
					yt = {
						8: "Backspace",
						9: "Tab",
						12: "Clear",
						13: "Enter",
						16: "Shift",
						17: "Control",
						18: "Alt",
						19: "Pause",
						20: "CapsLock",
						27: "Escape",
						32: " ",
						33: "PageUp",
						34: "PageDown",
						35: "End",
						36: "Home",
						37: "ArrowLeft",
						38: "ArrowUp",
						39: "ArrowRight",
						40: "ArrowDown",
						45: "Insert",
						46: "Delete",
						112: "F1",
						113: "F2",
						114: "F3",
						115: "F4",
						116: "F5",
						117: "F6",
						118: "F7",
						119: "F8",
						120: "F9",
						121: "F10",
						122: "F11",
						123: "F12",
						144: "NumLock",
						145: "ScrollLock",
						224: "Meta"
					},
					wt = {
						Alt: "altKey",
						Control: "ctrlKey",
						Meta: "metaKey",
						Shift: "shiftKey"
					};

				function jt(e) {
					var n = this.nativeEvent;
					return n.getModifierState ? n.getModifierState(e) : !!(e = wt[e]) && !!n[e]
				}

				function kt() {
					return jt
				}
				var Nt = D({}, ct, {
						key: function(e) {
							if (e.key) {
								var n = xt[e.key] || e.key;
								if ("Unidentified" !== n) return n
							}
							return "keypress" === e.type ? 13 === (e = et(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? yt[e.keyCode] || "Unidentified" : ""
						},
						code: 0,
						location: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						repeat: 0,
						locale: 0,
						getModifierState: kt,
						charCode: function(e) {
							return "keypress" === e.type ? et(e) : 0
						},
						keyCode: function(e) {
							return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
						},
						which: function(e) {
							return "keypress" === e.type ? et(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
						}
					}),
					Et = rt(Nt),
					St = rt(D({}, dt, {
						pointerId: 0,
						width: 0,
						height: 0,
						pressure: 0,
						tangentialPressure: 0,
						tiltX: 0,
						tiltY: 0,
						twist: 0,
						pointerType: 0,
						isPrimary: 0
					})),
					Ct = rt(D({}, ct, {
						touches: 0,
						targetTouches: 0,
						changedTouches: 0,
						altKey: 0,
						metaKey: 0,
						ctrlKey: 0,
						shiftKey: 0,
						getModifierState: kt
					})),
					Tt = rt(D({}, st, {
						propertyName: 0,
						elapsedTime: 0,
						pseudoElement: 0
					})),
					Ot = D({}, dt, {
						deltaX: function(e) {
							return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
						},
						deltaY: function(e) {
							return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
						},
						deltaZ: 0,
						deltaMode: 0
					}),
					At = rt(Ot),
					_t = [9, 13, 27, 32],
					Rt = u && "CompositionEvent" in window,
					It = null;
				u && "documentMode" in document && (It = document.documentMode);
				var Pt = u && "TextEvent" in window && !It,
					Lt = u && (!Rt || It && 8 < It && 11 >= It),
					Mt = String.fromCharCode(32),
					Dt = !1;

				function Ut(e, n) {
					switch (e) {
						case "keyup":
							return -1 !== _t.indexOf(n.keyCode);
						case "keydown":
							return 229 !== n.keyCode;
						case "keypress":
						case "mousedown":
						case "focusout":
							return !0;
						default:
							return !1
					}
				}

				function Ft(e) {
					return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
				}
				var zt = !1,
					Ht = {
						color: !0,
						date: !0,
						datetime: !0,
						"datetime-local": !0,
						email: !0,
						month: !0,
						number: !0,
						password: !0,
						range: !0,
						search: !0,
						tel: !0,
						text: !0,
						time: !0,
						url: !0,
						week: !0
					};

				function Bt(e) {
					var n = e && e.nodeName && e.nodeName.toLowerCase();
					return "input" === n ? !!Ht[e.type] : "textarea" === n
				}

				function Wt(e, n, t, r) {
					Se(r), 0 < (n = Gr(n, "onChange"))
						.length && (t = new lt("onChange", "change", null, t, r), e.push({
							event: t,
							listeners: n
						}))
				}
				var Gt = null,
					Yt = null;

				function Xt(e) {
					Mr(e, 0)
				}

				function Vt(e) {
					if (V(vi(e))) return e
				}

				function qt(e, n) {
					if ("change" === e) return n
				}
				var $t = !1;
				if (u) {
					var Kt;
					if (u) {
						var Qt = "oninput" in document;
						if (!Qt) {
							var Zt = document.createElement("div");
							Zt.setAttribute("oninput", "return;"), Qt = "function" == typeof Zt.oninput
						}
						Kt = Qt
					} else Kt = !1;
					$t = Kt && (!document.documentMode || 9 < document.documentMode)
				}

				function Jt() {
					Gt && (Gt.detachEvent("onpropertychange", er), Yt = Gt = null)
				}

				function er(e) {
					if ("value" === e.propertyName && Vt(Yt)) {
						var n = [];
						Wt(n, Yt, e, we(e)), _e(Xt, n)
					}
				}

				function nr(e, n, t) {
					"focusin" === e ? (Jt(), Yt = t, (Gt = n)
						.attachEvent("onpropertychange", er)) : "focusout" === e && Jt()
				}

				function tr(e) {
					if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Vt(Yt)
				}

				function rr(e, n) {
					if ("click" === e) return Vt(n)
				}

				function ir(e, n) {
					if ("input" === e || "change" === e) return Vt(n)
				}
				var ar = "function" == typeof Object.is ? Object.is : function(e, n) {
					return e === n && (0 !== e || 1 / e == 1 / n) || e != e && n != n
				};

				function or(e, n) {
					if (ar(e, n)) return !0;
					if ("object" != typeof e || null === e || "object" != typeof n || null === n) return !1;
					var t = Object.keys(e),
						r = Object.keys(n);
					if (t.length !== r.length) return !1;
					for (r = 0; r < t.length; r++) {
						var i = t[r];
						if (!d.call(n, i) || !ar(e[i], n[i])) return !1
					}
					return !0
				}

				function sr(e) {
					for (; e && e.firstChild;) e = e.firstChild;
					return e
				}

				function lr(e, n) {
					var t, r = sr(e);
					for (e = 0; r;) {
						if (3 === r.nodeType) {
							if (t = e + r.textContent.length, e <= n && t >= n) return {
								node: r,
								offset: n - e
							};
							e = t
						}
						e: {
							for (; r;) {
								if (r.nextSibling) {
									r = r.nextSibling;
									break e
								}
								r = r.parentNode
							}
							r = void 0
						}
						r = sr(r)
					}
				}

				function cr(e, n) {
					return !(!e || !n) && (e === n || (!e || 3 !== e.nodeType) && (n && 3 === n.nodeType ? cr(e, n.parentNode) : "contains" in e ? e.contains(n) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(n))))
				}

				function ur() {
					for (var e = window, n = q(); n instanceof e.HTMLIFrameElement;) {
						try {
							var t = "string" == typeof n.contentWindow.location.href
						} catch (e) {
							t = !1
						}
						if (!t) break;
						n = q((e = n.contentWindow)
							.document)
					}
					return n
				}

				function dr(e) {
					var n = e && e.nodeName && e.nodeName.toLowerCase();
					return n && ("input" === n && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === n || "true" === e.contentEditable)
				}

				function pr(e) {
					var n = ur(),
						t = e.focusedElem,
						r = e.selectionRange;
					if (n !== t && t && t.ownerDocument && cr(t.ownerDocument.documentElement, t)) {
						if (null !== r && dr(t))
							if (n = r.start, void 0 === (e = r.end) && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
							else if ((e = (n = t.ownerDocument || document) && n.defaultView || window)
							.getSelection) {
							e = e.getSelection();
							var i = t.textContent.length,
								a = Math.min(r.start, i);
							r = void 0 === r.end ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = lr(t, a);
							var o = lr(t, r);
							i && o && (1 !== e.rangeCount || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && ((n = n.createRange())
								.setStart(i.node, i.offset), e.removeAllRanges(), a > r ? (e.addRange(n), e.extend(o.node, o.offset)) : (n.setEnd(o.node, o.offset), e.addRange(n)))
						}
						for (n = [], e = t; e = e.parentNode;) 1 === e.nodeType && n.push({
							element: e,
							left: e.scrollLeft,
							top: e.scrollTop
						});
						for ("function" == typeof t.focus && t.focus(), t = 0; t < n.length; t++)(e = n[t])
							.element.scrollLeft = e.left, e.element.scrollTop = e.top
					}
				}
				var fr = u && "documentMode" in document && 11 >= document.documentMode,
					hr = null,
					mr = null,
					gr = null,
					vr = !1;

				function br(e, n, t) {
					var r = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
					vr || null == hr || hr !== q(r) || (r = "selectionStart" in (r = hr) && dr(r) ? {
						start: r.selectionStart,
						end: r.selectionEnd
					} : {
						anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window)
								.getSelection())
							.anchorNode,
						anchorOffset: r.anchorOffset,
						focusNode: r.focusNode,
						focusOffset: r.focusOffset
					}, gr && or(gr, r) || (gr = r, 0 < (r = Gr(mr, "onSelect"))
						.length && (n = new lt("onSelect", "select", null, n, t), e.push({
							event: n,
							listeners: r
						}), n.target = hr)))
				}

				function xr(e, n) {
					var t = {};
					return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t
				}
				var yr = {
						animationend: xr("Animation", "AnimationEnd"),
						animationiteration: xr("Animation", "AnimationIteration"),
						animationstart: xr("Animation", "AnimationStart"),
						transitionend: xr("Transition", "TransitionEnd")
					},
					wr = {},
					jr = {};

				function kr(e) {
					if (wr[e]) return wr[e];
					if (!yr[e]) return e;
					var n, t = yr[e];
					for (n in t)
						if (t.hasOwnProperty(n) && n in jr) return wr[e] = t[n];
					return e
				}
				u && (jr = document.createElement("div")
					.style, "AnimationEvent" in window || (delete yr.animationend.animation, delete yr.animationiteration.animation, delete yr.animationstart.animation), "TransitionEvent" in window || delete yr.transitionend.transition);
				var Nr = kr("animationend"),
					Er = kr("animationiteration"),
					Sr = kr("animationstart"),
					Cr = kr("transitionend"),
					Tr = new Map,
					Or = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

				function Ar(e, n) {
					Tr.set(e, n), l(n, [e])
				}
				for (var _r = 0; _r < Or.length; _r++) {
					var Rr = Or[_r];
					Ar(Rr.toLowerCase(), "on" + (Rr[0].toUpperCase() + Rr.slice(1)))
				}
				Ar(Nr, "onAnimationEnd"), Ar(Er, "onAnimationIteration"), Ar(Sr, "onAnimationStart"), Ar("dblclick", "onDoubleClick"), Ar("focusin", "onFocus"), Ar("focusout", "onBlur"), Ar(Cr, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
				var Ir = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
					Pr = new Set("cancel close invalid load scroll toggle".split(" ")
						.concat(Ir));

				function Lr(e, n, t) {
					var r = e.type || "unknown-event";
					e.currentTarget = t,
						function(e, n, t, r, i, o, s, l, c) {
							if (He.apply(this, arguments), Me) {
								if (!Me) throw Error(a(198));
								var u = De;
								Me = !1, De = null, Ue || (Ue = !0, Fe = u)
							}
						}(r, n, void 0, e), e.currentTarget = null
				}

				function Mr(e, n) {
					n = 0 != (4 & n);
					for (var t = 0; t < e.length; t++) {
						var r = e[t],
							i = r.event;
						r = r.listeners;
						e: {
							var a = void 0;
							if (n)
								for (var o = r.length - 1; 0 <= o; o--) {
									var s = r[o],
										l = s.instance,
										c = s.currentTarget;
									if (s = s.listener, l !== a && i.isPropagationStopped()) break e;
									Lr(i, s, c), a = l
								} else
									for (o = 0; o < r.length; o++) {
										if (l = (s = r[o])
											.instance, c = s.currentTarget, s = s.listener, l !== a && i.isPropagationStopped()) break e;
										Lr(i, s, c), a = l
									}
						}
					}
					if (Ue) throw e = Fe, Ue = !1, Fe = null, e
				}

				function Dr(e, n) {
					var t = n[pi];
					void 0 === t && (t = n[pi] = new Set);
					var r = e + "__bubble";
					t.has(r) || (Hr(n, e, 2, !1), t.add(r))
				}

				function Ur(e, n, t) {
					var r = 0;
					n && (r |= 4), Hr(t, e, r, n)
				}
				var Fr = "_reactListening" + Math.random()
					.toString(36)
					.slice(2);

				function zr(e) {
					if (!e[Fr]) {
						e[Fr] = !0, o.forEach((function(n) {
							"selectionchange" !== n && (Pr.has(n) || Ur(n, !1, e), Ur(n, !0, e))
						}));
						var n = 9 === e.nodeType ? e : e.ownerDocument;
						null === n || n[Fr] || (n[Fr] = !0, Ur("selectionchange", !1, n))
					}
				}

				function Hr(e, n, t, r) {
					switch ($n(n)) {
						case 1:
							var i = Gn;
							break;
						case 4:
							i = Yn;
							break;
						default:
							i = Xn
					}
					t = i.bind(null, n, t, e), i = void 0, !Ie || "touchstart" !== n && "touchmove" !== n && "wheel" !== n || (i = !0), r ? void 0 !== i ? e.addEventListener(n, t, {
						capture: !0,
						passive: i
					}) : e.addEventListener(n, t, !0) : void 0 !== i ? e.addEventListener(n, t, {
						passive: i
					}) : e.addEventListener(n, t, !1)
				}

				function Br(e, n, t, r, i) {
					var a = r;
					if (0 == (1 & n) && 0 == (2 & n) && null !== r) e: for (;;) {
						if (null === r) return;
						var o = r.tag;
						if (3 === o || 4 === o) {
							var s = r.stateNode.containerInfo;
							if (s === i || 8 === s.nodeType && s.parentNode === i) break;
							if (4 === o)
								for (o = r.return; null !== o;) {
									var l = o.tag;
									if ((3 === l || 4 === l) && ((l = o.stateNode.containerInfo) === i || 8 === l.nodeType && l.parentNode === i)) return;
									o = o.return
								}
							for (; null !== s;) {
								if (null === (o = mi(s))) return;
								if (5 === (l = o.tag) || 6 === l) {
									r = a = o;
									continue e
								}
								s = s.parentNode
							}
						}
						r = r.return
					}
					_e((function() {
						var r = a,
							i = we(t),
							o = [];
						e: {
							var s = Tr.get(e);
							if (void 0 !== s) {
								var l = lt,
									c = e;
								switch (e) {
									case "keypress":
										if (0 === et(t)) break e;
									case "keydown":
									case "keyup":
										l = Et;
										break;
									case "focusin":
										c = "focus", l = ht;
										break;
									case "focusout":
										c = "blur", l = ht;
										break;
									case "beforeblur":
									case "afterblur":
										l = ht;
										break;
									case "click":
										if (2 === t.button) break e;
									case "auxclick":
									case "dblclick":
									case "mousedown":
									case "mousemove":
									case "mouseup":
									case "mouseout":
									case "mouseover":
									case "contextmenu":
										l = pt;
										break;
									case "drag":
									case "dragend":
									case "dragenter":
									case "dragexit":
									case "dragleave":
									case "dragover":
									case "dragstart":
									case "drop":
										l = ft;
										break;
									case "touchcancel":
									case "touchend":
									case "touchmove":
									case "touchstart":
										l = Ct;
										break;
									case Nr:
									case Er:
									case Sr:
										l = mt;
										break;
									case Cr:
										l = Tt;
										break;
									case "scroll":
										l = ut;
										break;
									case "wheel":
										l = At;
										break;
									case "copy":
									case "cut":
									case "paste":
										l = vt;
										break;
									case "gotpointercapture":
									case "lostpointercapture":
									case "pointercancel":
									case "pointerdown":
									case "pointermove":
									case "pointerout":
									case "pointerover":
									case "pointerup":
										l = St
								}
								var u = 0 != (4 & n),
									d = !u && "scroll" === e,
									p = u ? null !== s ? s + "Capture" : null : s;
								u = [];
								for (var f, h = r; null !== h;) {
									var m = (f = h)
										.stateNode;
									if (5 === f.tag && null !== m && (f = m, null !== p && null != (m = Re(h, p)) && u.push(Wr(h, m, f))), d) break;
									h = h.return
								}
								0 < u.length && (s = new l(s, c, null, t, i), o.push({
									event: s,
									listeners: u
								}))
							}
						}
						if (0 == (7 & n)) {
							if (l = "mouseout" === e || "pointerout" === e, (!(s = "mouseover" === e || "pointerover" === e) || t === ye || !(c = t.relatedTarget || t.fromElement) || !mi(c) && !c[di]) && (l || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, l ? (l = r, null !== (c = (c = t.relatedTarget || t.toElement) ? mi(c) : null) && (c !== (d = Be(c)) || 5 !== c.tag && 6 !== c.tag) && (c = null)) : (l = null, c = r), l !== c)) {
								if (u = pt, m = "onMouseLeave", p = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (u = St, m = "onPointerLeave", p = "onPointerEnter", h = "pointer"), d = null == l ? s : vi(l), f = null == c ? s : vi(c), (s = new u(m, h + "leave", l, t, i))
									.target = d, s.relatedTarget = f, m = null, mi(i) === r && ((u = new u(p, h + "enter", c, t, i))
										.target = f, u.relatedTarget = d, m = u), d = m, l && c) e: {
									for (p = c, h = 0, f = u = l; f; f = Yr(f)) h++;
									for (f = 0, m = p; m; m = Yr(m)) f++;
									for (; 0 < h - f;) u = Yr(u),
									h--;
									for (; 0 < f - h;) p = Yr(p),
									f--;
									for (; h--;) {
										if (u === p || null !== p && u === p.alternate) break e;
										u = Yr(u), p = Yr(p)
									}
									u = null
								}
								else u = null;
								null !== l && Xr(o, s, l, u, !1), null !== c && null !== d && Xr(o, d, c, u, !0)
							}
							if ("select" === (l = (s = r ? vi(r) : window)
								.nodeName && s.nodeName.toLowerCase()) || "input" === l && "file" === s.type) var g = qt;
							else if (Bt(s))
								if ($t) g = ir;
								else {
									g = tr;
									var v = nr
								}
							else(l = s.nodeName) && "input" === l.toLowerCase() && ("checkbox" === s.type || "radio" === s.type) && (g = rr);
							switch (g && (g = g(e, r)) ? Wt(o, g, t, i) : (v && v(e, s, r), "focusout" === e && (v = s._wrapperState) && v.controlled && "number" === s.type && ee(s, "number", s.value)), v = r ? vi(r) : window, e) {
								case "focusin":
									(Bt(v) || "true" === v.contentEditable) && (hr = v, mr = r, gr = null);
									break;
								case "focusout":
									gr = mr = hr = null;
									break;
								case "mousedown":
									vr = !0;
									break;
								case "contextmenu":
								case "mouseup":
								case "dragend":
									vr = !1, br(o, t, i);
									break;
								case "selectionchange":
									if (fr) break;
								case "keydown":
								case "keyup":
									br(o, t, i)
							}
							var b;
							if (Rt) e: {
								switch (e) {
									case "compositionstart":
										var x = "onCompositionStart";
										break e;
									case "compositionend":
										x = "onCompositionEnd";
										break e;
									case "compositionupdate":
										x = "onCompositionUpdate";
										break e
								}
								x = void 0
							}
							else zt ? Ut(e, t) && (x = "onCompositionEnd") : "keydown" === e && 229 === t.keyCode && (x = "onCompositionStart");
							x && (Lt && "ko" !== t.locale && (zt || "onCompositionStart" !== x ? "onCompositionEnd" === x && zt && (b = Jn()) : (Qn = "value" in (Kn = i) ? Kn.value : Kn.textContent, zt = !0)), 0 < (v = Gr(r, x))
									.length && (x = new bt(x, e, null, t, i), o.push({
										event: x,
										listeners: v
									}), (b || null !== (b = Ft(t))) && (x.data = b))), (b = Pt ? function(e, n) {
									switch (e) {
										case "compositionend":
											return Ft(n);
										case "keypress":
											return 32 !== n.which ? null : (Dt = !0, Mt);
										case "textInput":
											return (e = n.data) === Mt && Dt ? null : e;
										default:
											return null
									}
								}(e, t) : function(e, n) {
									if (zt) return "compositionend" === e || !Rt && Ut(e, n) ? (e = Jn(), Zn = Qn = Kn = null, zt = !1, e) : null;
									switch (e) {
										case "paste":
										default:
											return null;
										case "keypress":
											if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
												if (n.char && 1 < n.char.length) return n.char;
												if (n.which) return String.fromCharCode(n.which)
											}
											return null;
										case "compositionend":
											return Lt && "ko" !== n.locale ? null : n.data
									}
								}(e, t)) && 0 < (r = Gr(r, "onBeforeInput"))
								.length && (i = new bt("onBeforeInput", "beforeinput", null, t, i), o.push({
									event: i,
									listeners: r
								}), i.data = b)
						}
						Mr(o, n)
					}))
				}

				function Wr(e, n, t) {
					return {
						instance: e,
						listener: n,
						currentTarget: t
					}
				}

				function Gr(e, n) {
					for (var t = n + "Capture", r = []; null !== e;) {
						var i = e,
							a = i.stateNode;
						5 === i.tag && null !== a && (i = a, null != (a = Re(e, t)) && r.unshift(Wr(e, a, i)), null != (a = Re(e, n)) && r.push(Wr(e, a, i))), e = e.return
					}
					return r
				}

				function Yr(e) {
					if (null === e) return null;
					do {
						e = e.return
					} while (e && 5 !== e.tag);
					return e || null
				}

				function Xr(e, n, t, r, i) {
					for (var a = n._reactName, o = []; null !== t && t !== r;) {
						var s = t,
							l = s.alternate,
							c = s.stateNode;
						if (null !== l && l === r) break;
						5 === s.tag && null !== c && (s = c, i ? null != (l = Re(t, a)) && o.unshift(Wr(t, l, s)) : i || null != (l = Re(t, a)) && o.push(Wr(t, l, s))), t = t.return
					}
					0 !== o.length && e.push({
						event: n,
						listeners: o
					})
				}
				var Vr = /\r\n?/g,
					qr = /\u0000|\uFFFD/g;

				function $r(e) {
					return ("string" == typeof e ? e : "" + e)
						.replace(Vr, "\n")
						.replace(qr, "")
				}

				function Kr(e, n, t) {
					if (n = $r(n), $r(e) !== n && t) throw Error(a(425))
				}

				function Qr() {}
				var Zr = null;

				function Jr(e, n) {
					return "textarea" === e || "noscript" === e || "string" == typeof n.children || "number" == typeof n.children || "object" == typeof n.dangerouslySetInnerHTML && null !== n.dangerouslySetInnerHTML && null != n.dangerouslySetInnerHTML.__html
				}
				var ei = "function" == typeof setTimeout ? setTimeout : void 0,
					ni = "function" == typeof clearTimeout ? clearTimeout : void 0,
					ti = "function" == typeof Promise ? Promise : void 0,
					ri = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== ti ? function(e) {
						return ti.resolve(null)
							.then(e)
							.catch(ii)
					} : ei;

				function ii(e) {
					setTimeout((function() {
						throw e
					}))
				}

				function ai(e, n) {
					var t = n,
						r = 0;
					do {
						var i = t.nextSibling;
						if (e.removeChild(t), i && 8 === i.nodeType)
							if ("/$" === (t = i.data)) {
								if (0 === r) return e.removeChild(i), void Bn(n);
								r--
							} else "$" !== t && "$?" !== t && "$!" !== t || r++;
						t = i
					} while (t);
					Bn(n)
				}

				function oi(e) {
					for (; null != e; e = e.nextSibling) {
						var n = e.nodeType;
						if (1 === n || 3 === n) break;
						if (8 === n) {
							if ("$" === (n = e.data) || "$!" === n || "$?" === n) break;
							if ("/$" === n) return null
						}
					}
					return e
				}

				function si(e) {
					e = e.previousSibling;
					for (var n = 0; e;) {
						if (8 === e.nodeType) {
							var t = e.data;
							if ("$" === t || "$!" === t || "$?" === t) {
								if (0 === n) return e;
								n--
							} else "/$" === t && n++
						}
						e = e.previousSibling
					}
					return null
				}
				var li = Math.random()
					.toString(36)
					.slice(2),
					ci = "__reactFiber$" + li,
					ui = "__reactProps$" + li,
					di = "__reactContainer$" + li,
					pi = "__reactEvents$" + li,
					fi = "__reactListeners$" + li,
					hi = "__reactHandles$" + li;

				function mi(e) {
					var n = e[ci];
					if (n) return n;
					for (var t = e.parentNode; t;) {
						if (n = t[di] || t[ci]) {
							if (t = n.alternate, null !== n.child || null !== t && null !== t.child)
								for (e = si(e); null !== e;) {
									if (t = e[ci]) return t;
									e = si(e)
								}
							return n
						}
						t = (e = t)
							.parentNode
					}
					return null
				}

				function gi(e) {
					return !(e = e[ci] || e[di]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
				}

				function vi(e) {
					if (5 === e.tag || 6 === e.tag) return e.stateNode;
					throw Error(a(33))
				}

				function bi(e) {
					return e[ui] || null
				}
				var xi = [],
					yi = -1;

				function wi(e) {
					return {
						current: e
					}
				}

				function ji(e) {
					0 > yi || (e.current = xi[yi], xi[yi] = null, yi--)
				}

				function ki(e, n) {
					yi++, xi[yi] = e.current, e.current = n
				}
				var Ni = {},
					Ei = wi(Ni),
					Si = wi(!1),
					Ci = Ni;

				function Ti(e, n) {
					var t = e.type.contextTypes;
					if (!t) return Ni;
					var r = e.stateNode;
					if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
					var i, a = {};
					for (i in t) a[i] = n[i];
					return r && ((e = e.stateNode)
						.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = a), a
				}

				function Oi(e) {
					return null != e.childContextTypes
				}

				function Ai() {
					ji(Si), ji(Ei)
				}

				function _i(e, n, t) {
					if (Ei.current !== Ni) throw Error(a(168));
					ki(Ei, n), ki(Si, t)
				}

				function Ri(e, n, t) {
					var r = e.stateNode;
					if (n = n.childContextTypes, "function" != typeof r.getChildContext) return t;
					for (var i in r = r.getChildContext())
						if (!(i in n)) throw Error(a(108, W(e) || "Unknown", i));
					return D({}, t, r)
				}

				function Ii(e) {
					return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ni, Ci = Ei.current, ki(Ei, e), ki(Si, Si.current), !0
				}

				function Pi(e, n, t) {
					var r = e.stateNode;
					if (!r) throw Error(a(169));
					t ? (e = Ri(e, n, Ci), r.__reactInternalMemoizedMergedChildContext = e, ji(Si), ji(Ei), ki(Ei, e)) : ji(Si), ki(Si, t)
				}
				var Li = null,
					Mi = !1,
					Di = !1;

				function Ui(e) {
					null === Li ? Li = [e] : Li.push(e)
				}

				function Fi() {
					if (!Di && null !== Li) {
						Di = !0;
						var e = 0,
							n = xn;
						try {
							var t = Li;
							for (xn = 1; e < t.length; e++) {
								var r = t[e];
								do {
									r = r(!0)
								} while (null !== r)
							}
							Li = null, Mi = !1
						} catch (n) {
							throw null !== Li && (Li = Li.slice(e + 1)), Ve(Je, Fi), n
						} finally {
							xn = n, Di = !1
						}
					}
					return null
				}
				var zi = y.ReactCurrentBatchConfig;

				function Hi(e, n) {
					if (e && e.defaultProps) {
						for (var t in n = D({}, n), e = e.defaultProps) void 0 === n[t] && (n[t] = e[t]);
						return n
					}
					return n
				}
				var Bi = wi(null),
					Wi = null,
					Gi = null,
					Yi = null;

				function Xi() {
					Yi = Gi = Wi = null
				}

				function Vi(e) {
					var n = Bi.current;
					ji(Bi), e._currentValue = n
				}

				function qi(e, n, t) {
					for (; null !== e;) {
						var r = e.alternate;
						if ((e.childLanes & n) !== n ? (e.childLanes |= n, null !== r && (r.childLanes |= n)) : null !== r && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
						e = e.return
					}
				}

				function $i(e, n) {
					Wi = e, Yi = Gi = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & n) && (vs = !0), e.firstContext = null)
				}

				function Ki(e) {
					var n = e._currentValue;
					if (Yi !== e)
						if (e = {
							context: e,
							memoizedValue: n,
							next: null
						}, null === Gi) {
							if (null === Wi) throw Error(a(308));
							Gi = e, Wi.dependencies = {
								lanes: 0,
								firstContext: e
							}
						} else Gi = Gi.next = e;
					return n
				}
				var Qi = null,
					Zi = !1;

				function Ji(e) {
					e.updateQueue = {
						baseState: e.memoizedState,
						firstBaseUpdate: null,
						lastBaseUpdate: null,
						shared: {
							pending: null,
							interleaved: null,
							lanes: 0
						},
						effects: null
					}
				}

				function ea(e, n) {
					e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
						baseState: e.baseState,
						firstBaseUpdate: e.firstBaseUpdate,
						lastBaseUpdate: e.lastBaseUpdate,
						shared: e.shared,
						effects: e.effects
					})
				}

				function na(e, n) {
					return {
						eventTime: e,
						lane: n,
						tag: 0,
						payload: null,
						callback: null,
						next: null
					}
				}

				function ta(e, n) {
					var t = e.updateQueue;
					null !== t && (t = t.shared, null !== vl && 0 != (1 & e.mode) && 0 == (2 & gl) ? (null === (e = t.interleaved) ? (n.next = n, null === Qi ? Qi = [t] : Qi.push(t)) : (n.next = e.next, e.next = n), t.interleaved = n) : (null === (e = t.pending) ? n.next = n : (n.next = e.next, e.next = n), t.pending = n))
				}

				function ra(e, n, t) {
					if (null !== (n = n.updateQueue) && (n = n.shared, 0 != (4194240 & t))) {
						var r = n.lanes;
						t |= r &= e.pendingLanes, n.lanes = t, bn(e, t)
					}
				}

				function ia(e, n) {
					var t = e.updateQueue,
						r = e.alternate;
					if (null !== r && t === (r = r.updateQueue)) {
						var i = null,
							a = null;
						if (null !== (t = t.firstBaseUpdate)) {
							do {
								var o = {
									eventTime: t.eventTime,
									lane: t.lane,
									tag: t.tag,
									payload: t.payload,
									callback: t.callback,
									next: null
								};
								null === a ? i = a = o : a = a.next = o, t = t.next
							} while (null !== t);
							null === a ? i = a = n : a = a.next = n
						} else i = a = n;
						return t = {
							baseState: r.baseState,
							firstBaseUpdate: i,
							lastBaseUpdate: a,
							shared: r.shared,
							effects: r.effects
						}, void(e.updateQueue = t)
					}
					null === (e = t.lastBaseUpdate) ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n
				}

				function aa(e, n, t, r) {
					var i = e.updateQueue;
					Zi = !1;
					var a = i.firstBaseUpdate,
						o = i.lastBaseUpdate,
						s = i.shared.pending;
					if (null !== s) {
						i.shared.pending = null;
						var l = s,
							c = l.next;
						l.next = null, null === o ? a = c : o.next = c, o = l;
						var u = e.alternate;
						null !== u && (s = (u = u.updateQueue)
							.lastBaseUpdate) !== o && (null === s ? u.firstBaseUpdate = c : s.next = c, u.lastBaseUpdate = l)
					}
					if (null !== a) {
						var d = i.baseState;
						for (o = 0, u = c = l = null, s = a;;) {
							var p = s.lane,
								f = s.eventTime;
							if ((r & p) === p) {
								null !== u && (u = u.next = {
									eventTime: f,
									lane: 0,
									tag: s.tag,
									payload: s.payload,
									callback: s.callback,
									next: null
								});
								e: {
									var h = e,
										m = s;
									switch (p = n, f = t, m.tag) {
										case 1:
											if ("function" == typeof(h = m.payload)) {
												d = h.call(f, d, p);
												break e
											}
											d = h;
											break e;
										case 3:
											h.flags = -65537 & h.flags | 128;
										case 0:
											if (null == (p = "function" == typeof(h = m.payload) ? h.call(f, d, p) : h)) break e;
											d = D({}, d, p);
											break e;
										case 2:
											Zi = !0
									}
								}
								null !== s.callback && 0 !== s.lane && (e.flags |= 64, null === (p = i.effects) ? i.effects = [s] : p.push(s))
							} else f = {
								eventTime: f,
								lane: p,
								tag: s.tag,
								payload: s.payload,
								callback: s.callback,
								next: null
							}, null === u ? (c = u = f, l = d) : u = u.next = f, o |= p;
							if (null === (s = s.next)) {
								if (null === (s = i.shared.pending)) break;
								s = (p = s)
									.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null
							}
						}
						if (null === u && (l = d), i.baseState = l, i.firstBaseUpdate = c, i.lastBaseUpdate = u, null !== (n = i.shared.interleaved)) {
							i = n;
							do {
								o |= i.lane, i = i.next
							} while (i !== n)
						} else null === a && (i.shared.lanes = 0);
						Nl |= o, e.lanes = o, e.memoizedState = d
					}
				}

				function oa(e, n, t) {
					if (e = n.effects, n.effects = null, null !== e)
						for (n = 0; n < e.length; n++) {
							var r = e[n],
								i = r.callback;
							if (null !== i) {
								if (r.callback = null, r = t, "function" != typeof i) throw Error(a(191, i));
								i.call(r)
							}
						}
				}
				var sa = (new r.Component)
					.refs;

				function la(e, n, t, r) {
					t = null == (t = t(r, n = e.memoizedState)) ? n : D({}, n, t), e.memoizedState = t, 0 === e.lanes && (e.updateQueue.baseState = t)
				}
				var ca = {
					isMounted: function(e) {
						return !!(e = e._reactInternals) && Be(e) === e
					},
					enqueueSetState: function(e, n, t) {
						e = e._reactInternals;
						var r = Hl(),
							i = Bl(e),
							a = na(r, i);
						a.payload = n, null != t && (a.callback = t), ta(e, a), null !== (n = Wl(e, i, r)) && ra(n, e, i)
					},
					enqueueReplaceState: function(e, n, t) {
						e = e._reactInternals;
						var r = Hl(),
							i = Bl(e),
							a = na(r, i);
						a.tag = 1, a.payload = n, null != t && (a.callback = t), ta(e, a), null !== (n = Wl(e, i, r)) && ra(n, e, i)
					},
					enqueueForceUpdate: function(e, n) {
						e = e._reactInternals;
						var t = Hl(),
							r = Bl(e),
							i = na(t, r);
						i.tag = 2, null != n && (i.callback = n), ta(e, i), null !== (n = Wl(e, r, t)) && ra(n, e, r)
					}
				};

				function ua(e, n, t, r, i, a, o) {
					return "function" == typeof(e = e.stateNode)
						.shouldComponentUpdate ? e.shouldComponentUpdate(r, a, o) : !(n.prototype && n.prototype.isPureReactComponent && or(t, r) && or(i, a))
				}

				function da(e, n, t) {
					var r = !1,
						i = Ni,
						a = n.contextType;
					return "object" == typeof a && null !== a ? a = Ki(a) : (i = Oi(n) ? Ci : Ei.current, a = (r = null != (r = n.contextTypes)) ? Ti(e, i) : Ni), n = new n(t, a), e.memoizedState = null !== n.state && void 0 !== n.state ? n.state : null, n.updater = ca, e.stateNode = n, n._reactInternals = e, r && ((e = e.stateNode)
						.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), n
				}

				function pa(e, n, t, r) {
					e = n.state, "function" == typeof n.componentWillReceiveProps && n.componentWillReceiveProps(t, r), "function" == typeof n.UNSAFE_componentWillReceiveProps && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && ca.enqueueReplaceState(n, n.state, null)
				}

				function fa(e, n, t, r) {
					var i = e.stateNode;
					i.props = t, i.state = e.memoizedState, i.refs = sa, Ji(e);
					var a = n.contextType;
					"object" == typeof a && null !== a ? i.context = Ki(a) : (a = Oi(n) ? Ci : Ei.current, i.context = Ti(e, a)), i.state = e.memoizedState, "function" == typeof(a = n.getDerivedStateFromProps) && (la(e, n, a, t), i.state = e.memoizedState), "function" == typeof n.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (n = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), n !== i.state && ca.enqueueReplaceState(i, i.state, null), aa(e, t, i, r), i.state = e.memoizedState), "function" == typeof i.componentDidMount && (e.flags |= 4194308)
				}
				var ha = [],
					ma = 0,
					ga = null,
					va = 0,
					ba = [],
					xa = 0,
					ya = null,
					wa = 1,
					ja = "";

				function ka(e, n) {
					ha[ma++] = va, ha[ma++] = ga, ga = e, va = n
				}

				function Na(e, n, t) {
					ba[xa++] = wa, ba[xa++] = ja, ba[xa++] = ya, ya = e;
					var r = wa;
					e = ja;
					var i = 32 - sn(r) - 1;
					r &= ~(1 << i), t += 1;
					var a = 32 - sn(n) + i;
					if (30 < a) {
						var o = i - i % 5;
						a = (r & (1 << o) - 1)
							.toString(32), r >>= o, i -= o, wa = 1 << 32 - sn(n) + i | t << i | r, ja = a + e
					} else wa = 1 << a | t << i | r, ja = e
				}

				function Ea(e) {
					null !== e.return && (ka(e, 1), Na(e, 1, 0))
				}

				function Sa(e) {
					for (; e === ga;) ga = ha[--ma], ha[ma] = null, va = ha[--ma], ha[ma] = null;
					for (; e === ya;) ya = ba[--xa], ba[xa] = null, ja = ba[--xa], ba[xa] = null, wa = ba[--xa], ba[xa] = null
				}
				var Ca = null,
					Ta = null,
					Oa = !1,
					Aa = null;

				function _a(e, n) {
					var t = xc(5, null, null, 0);
					t.elementType = "DELETED", t.stateNode = n, t.return = e, null === (n = e.deletions) ? (e.deletions = [t], e.flags |= 16) : n.push(t)
				}

				function Ra(e, n) {
					switch (e.tag) {
						case 5:
							var t = e.type;
							return null !== (n = 1 !== n.nodeType || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n) && (e.stateNode = n, Ca = e, Ta = oi(n.firstChild), !0);
						case 6:
							return null !== (n = "" === e.pendingProps || 3 !== n.nodeType ? null : n) && (e.stateNode = n, Ca = e, Ta = null, !0);
						case 13:
							return null !== (n = 8 !== n.nodeType ? null : n) && (t = null !== ya ? {
									id: wa,
									overflow: ja
								} : null, e.memoizedState = {
									dehydrated: n,
									treeContext: t,
									retryLane: 1073741824
								}, (t = xc(18, null, null, 0))
								.stateNode = n, t.return = e, e.child = t, Ca = e, Ta = null, !0);
						default:
							return !1
					}
				}

				function Ia(e) {
					return 0 != (1 & e.mode) && 0 == (128 & e.flags)
				}

				function Pa(e) {
					if (Oa) {
						var n = Ta;
						if (n) {
							var t = n;
							if (!Ra(e, n)) {
								if (Ia(e)) throw Error(a(418));
								n = oi(t.nextSibling);
								var r = Ca;
								n && Ra(e, n) ? _a(r, t) : (e.flags = -4097 & e.flags | 2, Oa = !1, Ca = e)
							}
						} else {
							if (Ia(e)) throw Error(a(418));
							e.flags = -4097 & e.flags | 2, Oa = !1, Ca = e
						}
					}
				}

				function La(e) {
					for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
					Ca = e
				}

				function Ma(e) {
					if (e !== Ca) return !1;
					if (!Oa) return La(e), Oa = !0, !1;
					var n;
					if ((n = 3 !== e.tag) && !(n = 5 !== e.tag) && (n = "head" !== (n = e.type) && "body" !== n && !Jr(e.type, e.memoizedProps)), n && (n = Ta)) {
						if (Ia(e)) {
							for (e = Ta; e;) e = oi(e.nextSibling);
							throw Error(a(418))
						}
						for (; n;) _a(e, n), n = oi(n.nextSibling)
					}
					if (La(e), 13 === e.tag) {
						if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
						e: {
							for (e = e.nextSibling, n = 0; e;) {
								if (8 === e.nodeType) {
									var t = e.data;
									if ("/$" === t) {
										if (0 === n) {
											Ta = oi(e.nextSibling);
											break e
										}
										n--
									} else "$" !== t && "$!" !== t && "$?" !== t || n++
								}
								e = e.nextSibling
							}
							Ta = null
						}
					} else Ta = Ca ? oi(e.stateNode.nextSibling) : null;
					return !0
				}

				function Da() {
					Ta = Ca = null, Oa = !1
				}

				function Ua(e) {
					null === Aa ? Aa = [e] : Aa.push(e)
				}

				function Fa(e, n, t) {
					if (null !== (e = t.ref) && "function" != typeof e && "object" != typeof e) {
						if (t._owner) {
							if (t = t._owner) {
								if (1 !== t.tag) throw Error(a(309));
								var r = t.stateNode
							}
							if (!r) throw Error(a(147, e));
							var i = r,
								o = "" + e;
							return null !== n && null !== n.ref && "function" == typeof n.ref && n.ref._stringRef === o ? n.ref : (n = function(e) {
								var n = i.refs;
								n === sa && (n = i.refs = {}), null === e ? delete n[o] : n[o] = e
							}, n._stringRef = o, n)
						}
						if ("string" != typeof e) throw Error(a(284));
						if (!t._owner) throw Error(a(290, e))
					}
					return e
				}

				function za(e, n) {
					throw e = Object.prototype.toString.call(n), Error(a(31, "[object Object]" === e ? "object with keys {" + Object.keys(n)
						.join(", ") + "}" : e))
				}

				function Ha(e) {
					return (0, e._init)(e._payload)
				}

				function Ba(e) {
					function n(n, t) {
						if (e) {
							var r = n.deletions;
							null === r ? (n.deletions = [t], n.flags |= 16) : r.push(t)
						}
					}

					function t(t, r) {
						if (!e) return null;
						for (; null !== r;) n(t, r), r = r.sibling;
						return null
					}

					function r(e, n) {
						for (e = new Map; null !== n;) null !== n.key ? e.set(n.key, n) : e.set(n.index, n), n = n.sibling;
						return e
					}

					function i(e, n) {
						return (e = wc(e, n))
							.index = 0, e.sibling = null, e
					}

					function o(n, t, r) {
						return n.index = r, e ? null !== (r = n.alternate) ? (r = r.index) < t ? (n.flags |= 2, t) : r : (n.flags |= 2, t) : (n.flags |= 1048576, t)
					}

					function s(n) {
						return e && null === n.alternate && (n.flags |= 2), n
					}

					function l(e, n, t, r) {
						return null === n || 6 !== n.tag ? ((n = Ec(t, e.mode, r))
							.return = e, n) : ((n = i(n, t))
							.return = e, n)
					}

					function c(e, n, t, r) {
						var a = t.type;
						return a === k ? d(e, n, t.props.children, r, t.key) : null !== n && (n.elementType === a || "object" == typeof a && null !== a && a.$$typeof === R && Ha(a) === n.type) ? ((r = i(n, t.props))
							.ref = Fa(e, n, t), r.return = e, r) : ((r = jc(t.type, t.key, t.props, null, e.mode, r))
							.ref = Fa(e, n, t), r.return = e, r)
					}

					function u(e, n, t, r) {
						return null === n || 4 !== n.tag || n.stateNode.containerInfo !== t.containerInfo || n.stateNode.implementation !== t.implementation ? ((n = Sc(t, e.mode, r))
							.return = e, n) : ((n = i(n, t.children || []))
							.return = e, n)
					}

					function d(e, n, t, r, a) {
						return null === n || 7 !== n.tag ? ((n = kc(t, e.mode, r, a))
							.return = e, n) : ((n = i(n, t))
							.return = e, n)
					}

					function p(e, n, t) {
						if ("string" == typeof n && "" !== n || "number" == typeof n) return (n = Ec("" + n, e.mode, t))
							.return = e, n;
						if ("object" == typeof n && null !== n) {
							switch (n.$$typeof) {
								case w:
									return (t = jc(n.type, n.key, n.props, null, e.mode, t))
										.ref = Fa(e, null, n), t.return = e, t;
								case j:
									return (n = Sc(n, e.mode, t))
										.return = e, n;
								case R:
									return p(e, (0, n._init)(n._payload), t)
							}
							if (ne(n) || L(n)) return (n = kc(n, e.mode, t, null))
								.return = e, n;
							za(e, n)
						}
						return null
					}

					function f(e, n, t, r) {
						var i = null !== n ? n.key : null;
						if ("string" == typeof t && "" !== t || "number" == typeof t) return null !== i ? null : l(e, n, "" + t, r);
						if ("object" == typeof t && null !== t) {
							switch (t.$$typeof) {
								case w:
									return t.key === i ? c(e, n, t, r) : null;
								case j:
									return t.key === i ? u(e, n, t, r) : null;
								case R:
									return f(e, n, (i = t._init)(t._payload), r)
							}
							if (ne(t) || L(t)) return null !== i ? null : d(e, n, t, r, null);
							za(e, t)
						}
						return null
					}

					function h(e, n, t, r, i) {
						if ("string" == typeof r && "" !== r || "number" == typeof r) return l(n, e = e.get(t) || null, "" + r, i);
						if ("object" == typeof r && null !== r) {
							switch (r.$$typeof) {
								case w:
									return c(n, e = e.get(null === r.key ? t : r.key) || null, r, i);
								case j:
									return u(n, e = e.get(null === r.key ? t : r.key) || null, r, i);
								case R:
									return h(e, n, t, (0, r._init)(r._payload), i)
							}
							if (ne(r) || L(r)) return d(n, e = e.get(t) || null, r, i, null);
							za(n, r)
						}
						return null
					}

					function m(i, a, s, l) {
						for (var c = null, u = null, d = a, m = a = 0, g = null; null !== d && m < s.length; m++) {
							d.index > m ? (g = d, d = null) : g = d.sibling;
							var v = f(i, d, s[m], l);
							if (null === v) {
								null === d && (d = g);
								break
							}
							e && d && null === v.alternate && n(i, d), a = o(v, a, m), null === u ? c = v : u.sibling = v, u = v, d = g
						}
						if (m === s.length) return t(i, d), Oa && ka(i, m), c;
						if (null === d) {
							for (; m < s.length; m++) null !== (d = p(i, s[m], l)) && (a = o(d, a, m), null === u ? c = d : u.sibling = d, u = d);
							return Oa && ka(i, m), c
						}
						for (d = r(i, d); m < s.length; m++) null !== (g = h(d, i, m, s[m], l)) && (e && null !== g.alternate && d.delete(null === g.key ? m : g.key), a = o(g, a, m), null === u ? c = g : u.sibling = g, u = g);
						return e && d.forEach((function(e) {
							return n(i, e)
						})), Oa && ka(i, m), c
					}

					function g(i, s, l, c) {
						var u = L(l);
						if ("function" != typeof u) throw Error(a(150));
						if (null == (l = u.call(l))) throw Error(a(151));
						for (var d = u = null, m = s, g = s = 0, v = null, b = l.next(); null !== m && !b.done; g++, b = l.next()) {
							m.index > g ? (v = m, m = null) : v = m.sibling;
							var x = f(i, m, b.value, c);
							if (null === x) {
								null === m && (m = v);
								break
							}
							e && m && null === x.alternate && n(i, m), s = o(x, s, g), null === d ? u = x : d.sibling = x, d = x, m = v
						}
						if (b.done) return t(i, m), Oa && ka(i, g), u;
						if (null === m) {
							for (; !b.done; g++, b = l.next()) null !== (b = p(i, b.value, c)) && (s = o(b, s, g), null === d ? u = b : d.sibling = b, d = b);
							return Oa && ka(i, g), u
						}
						for (m = r(i, m); !b.done; g++, b = l.next()) null !== (b = h(m, i, g, b.value, c)) && (e && null !== b.alternate && m.delete(null === b.key ? g : b.key), s = o(b, s, g), null === d ? u = b : d.sibling = b, d = b);
						return e && m.forEach((function(e) {
							return n(i, e)
						})), Oa && ka(i, g), u
					}
					return function e(r, a, o, l) {
						if ("object" == typeof o && null !== o && o.type === k && null === o.key && (o = o.props.children), "object" == typeof o && null !== o) {
							switch (o.$$typeof) {
								case w:
									e: {
										for (var c = o.key, u = a; null !== u;) {
											if (u.key === c) {
												if ((c = o.type) === k) {
													if (7 === u.tag) {
														t(r, u.sibling), (a = i(u, o.props.children))
															.return = r, r = a;
														break e
													}
												} else if (u.elementType === c || "object" == typeof c && null !== c && c.$$typeof === R && Ha(c) === u.type) {
													t(r, u.sibling), (a = i(u, o.props))
														.ref = Fa(r, u, o), a.return = r, r = a;
													break e
												}
												t(r, u);
												break
											}
											n(r, u), u = u.sibling
										}
										o.type === k ? ((a = kc(o.props.children, r.mode, l, o.key))
											.return = r, r = a) : ((l = jc(o.type, o.key, o.props, null, r.mode, l))
											.ref = Fa(r, a, o), l.return = r, r = l)
									}
									return s(r);
								case j:
									e: {
										for (u = o.key; null !== a;) {
											if (a.key === u) {
												if (4 === a.tag && a.stateNode.containerInfo === o.containerInfo && a.stateNode.implementation === o.implementation) {
													t(r, a.sibling), (a = i(a, o.children || []))
														.return = r, r = a;
													break e
												}
												t(r, a);
												break
											}
											n(r, a), a = a.sibling
										}(a = Sc(o, r.mode, l))
										.return = r,
										r = a
									}
									return s(r);
								case R:
									return e(r, a, (u = o._init)(o._payload), l)
							}
							if (ne(o)) return m(r, a, o, l);
							if (L(o)) return g(r, a, o, l);
							za(r, o)
						}
						return "string" == typeof o && "" !== o || "number" == typeof o ? (o = "" + o, null !== a && 6 === a.tag ? (t(r, a.sibling), (a = i(a, o))
							.return = r, r = a) : (t(r, a), (a = Ec(o, r.mode, l))
							.return = r, r = a), s(r)) : t(r, a)
					}
				}
				var Wa = Ba(!0),
					Ga = Ba(!1),
					Ya = {},
					Xa = wi(Ya),
					Va = wi(Ya),
					qa = wi(Ya);

				function $a(e) {
					if (e === Ya) throw Error(a(174));
					return e
				}

				function Ka(e, n) {
					switch (ki(qa, n), ki(Va, e), ki(Xa, Ya), e = n.nodeType) {
						case 9:
						case 11:
							n = (n = n.documentElement) ? n.namespaceURI : le(null, "");
							break;
						default:
							n = le(n = (e = 8 === e ? n.parentNode : n)
								.namespaceURI || null, e = e.tagName)
					}
					ji(Xa), ki(Xa, n)
				}

				function Qa() {
					ji(Xa), ji(Va), ji(qa)
				}

				function Za(e) {
					$a(qa.current);
					var n = $a(Xa.current),
						t = le(n, e.type);
					n !== t && (ki(Va, e), ki(Xa, t))
				}

				function Ja(e) {
					Va.current === e && (ji(Xa), ji(Va))
				}
				var eo = wi(0);

				function no(e) {
					for (var n = e; null !== n;) {
						if (13 === n.tag) {
							var t = n.memoizedState;
							if (null !== t && (null === (t = t.dehydrated) || "$?" === t.data || "$!" === t.data)) return n
						} else if (19 === n.tag && void 0 !== n.memoizedProps.revealOrder) {
							if (0 != (128 & n.flags)) return n
						} else if (null !== n.child) {
							n.child.return = n, n = n.child;
							continue
						}
						if (n === e) break;
						for (; null === n.sibling;) {
							if (null === n.return || n.return === e) return null;
							n = n.return
						}
						n.sibling.return = n.return, n = n.sibling
					}
					return null
				}
				var to = [];

				function ro() {
					for (var e = 0; e < to.length; e++) to[e]._workInProgressVersionPrimary = null;
					to.length = 0
				}
				var io = y.ReactCurrentDispatcher,
					ao = y.ReactCurrentBatchConfig,
					oo = 0,
					so = null,
					lo = null,
					co = null,
					uo = !1,
					po = !1,
					fo = 0,
					ho = 0;

				function mo() {
					throw Error(a(321))
				}

				function go(e, n) {
					if (null === n) return !1;
					for (var t = 0; t < n.length && t < e.length; t++)
						if (!ar(e[t], n[t])) return !1;
					return !0
				}

				function vo(e, n, t, r, i, o) {
					if (oo = o, so = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, io.current = null === e || null === e.memoizedState ? Jo : es, e = t(r, i), po) {
						o = 0;
						do {
							if (po = !1, fo = 0, 25 <= o) throw Error(a(301));
							o += 1, co = lo = null, n.updateQueue = null, io.current = ns, e = t(r, i)
						} while (po)
					}
					if (io.current = Zo, n = null !== lo && null !== lo.next, oo = 0, co = lo = so = null, uo = !1, n) throw Error(a(300));
					return e
				}

				function bo() {
					var e = 0 !== fo;
					return fo = 0, e
				}

				function xo() {
					var e = {
						memoizedState: null,
						baseState: null,
						baseQueue: null,
						queue: null,
						next: null
					};
					return null === co ? so.memoizedState = co = e : co = co.next = e, co
				}

				function yo() {
					if (null === lo) {
						var e = so.alternate;
						e = null !== e ? e.memoizedState : null
					} else e = lo.next;
					var n = null === co ? so.memoizedState : co.next;
					if (null !== n) co = n, lo = e;
					else {
						if (null === e) throw Error(a(310));
						e = {
							memoizedState: (lo = e)
								.memoizedState,
							baseState: lo.baseState,
							baseQueue: lo.baseQueue,
							queue: lo.queue,
							next: null
						}, null === co ? so.memoizedState = co = e : co = co.next = e
					}
					return co
				}

				function wo(e, n) {
					return "function" == typeof n ? n(e) : n
				}

				function jo(e) {
					var n = yo(),
						t = n.queue;
					if (null === t) throw Error(a(311));
					t.lastRenderedReducer = e;
					var r = lo,
						i = r.baseQueue,
						o = t.pending;
					if (null !== o) {
						if (null !== i) {
							var s = i.next;
							i.next = o.next, o.next = s
						}
						r.baseQueue = i = o, t.pending = null
					}
					if (null !== i) {
						o = i.next, r = r.baseState;
						var l = s = null,
							c = null,
							u = o;
						do {
							var d = u.lane;
							if ((oo & d) === d) null !== c && (c = c.next = {
								lane: 0,
								action: u.action,
								hasEagerState: u.hasEagerState,
								eagerState: u.eagerState,
								next: null
							}), r = u.hasEagerState ? u.eagerState : e(r, u.action);
							else {
								var p = {
									lane: d,
									action: u.action,
									hasEagerState: u.hasEagerState,
									eagerState: u.eagerState,
									next: null
								};
								null === c ? (l = c = p, s = r) : c = c.next = p, so.lanes |= d, Nl |= d
							}
							u = u.next
						} while (null !== u && u !== o);
						null === c ? s = r : c.next = l, ar(r, n.memoizedState) || (vs = !0), n.memoizedState = r, n.baseState = s, n.baseQueue = c, t.lastRenderedState = r
					}
					if (null !== (e = t.interleaved)) {
						i = e;
						do {
							o = i.lane, so.lanes |= o, Nl |= o, i = i.next
						} while (i !== e)
					} else null === i && (t.lanes = 0);
					return [n.memoizedState, t.dispatch]
				}

				function ko(e) {
					var n = yo(),
						t = n.queue;
					if (null === t) throw Error(a(311));
					t.lastRenderedReducer = e;
					var r = t.dispatch,
						i = t.pending,
						o = n.memoizedState;
					if (null !== i) {
						t.pending = null;
						var s = i = i.next;
						do {
							o = e(o, s.action), s = s.next
						} while (s !== i);
						ar(o, n.memoizedState) || (vs = !0), n.memoizedState = o, null === n.baseQueue && (n.baseState = o), t.lastRenderedState = o
					}
					return [o, r]
				}

				function No() {}

				function Eo(e, n) {
					var t = so,
						r = yo(),
						i = n(),
						o = !ar(r.memoizedState, i);
					if (o && (r.memoizedState = i, vs = !0), r = r.queue, Mo(To.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || null !== co && 1 & co.memoizedState.tag) {
						if (t.flags |= 2048, _o(9, Co.bind(null, t, r, i, n), void 0, null), null === vl) throw Error(a(349));
						0 != (30 & oo) || So(t, n, i)
					}
					return i
				}

				function So(e, n, t) {
					e.flags |= 16384, e = {
						getSnapshot: n,
						value: t
					}, null === (n = so.updateQueue) ? (n = {
						lastEffect: null,
						stores: null
					}, so.updateQueue = n, n.stores = [e]) : null === (t = n.stores) ? n.stores = [e] : t.push(e)
				}

				function Co(e, n, t, r) {
					n.value = t, n.getSnapshot = r, Oo(n) && Wl(e, 1, -1)
				}

				function To(e, n, t) {
					return t((function() {
						Oo(n) && Wl(e, 1, -1)
					}))
				}

				function Oo(e) {
					var n = e.getSnapshot;
					e = e.value;
					try {
						var t = n();
						return !ar(e, t)
					} catch (e) {
						return !0
					}
				}

				function Ao(e) {
					var n = xo();
					return "function" == typeof e && (e = e()), n.memoizedState = n.baseState = e, e = {
						pending: null,
						interleaved: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: wo,
						lastRenderedState: e
					}, n.queue = e, e = e.dispatch = Vo.bind(null, so, e), [n.memoizedState, e]
				}

				function _o(e, n, t, r) {
					return e = {
						tag: e,
						create: n,
						destroy: t,
						deps: r,
						next: null
					}, null === (n = so.updateQueue) ? (n = {
						lastEffect: null,
						stores: null
					}, so.updateQueue = n, n.lastEffect = e.next = e) : null === (t = n.lastEffect) ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e), e
				}

				function Ro() {
					return yo()
						.memoizedState
				}

				function Io(e, n, t, r) {
					var i = xo();
					so.flags |= e, i.memoizedState = _o(1 | n, t, void 0, void 0 === r ? null : r)
				}

				function Po(e, n, t, r) {
					var i = yo();
					r = void 0 === r ? null : r;
					var a = void 0;
					if (null !== lo) {
						var o = lo.memoizedState;
						if (a = o.destroy, null !== r && go(r, o.deps)) return void(i.memoizedState = _o(n, t, a, r))
					}
					so.flags |= e, i.memoizedState = _o(1 | n, t, a, r)
				}

				function Lo(e, n) {
					return Io(8390656, 8, e, n)
				}

				function Mo(e, n) {
					return Po(2048, 8, e, n)
				}

				function Do(e, n) {
					return Po(4, 2, e, n)
				}

				function Uo(e, n) {
					return Po(4, 4, e, n)
				}

				function Fo(e, n) {
					return "function" == typeof n ? (e = e(), n(e), function() {
						n(null)
					}) : null != n ? (e = e(), n.current = e, function() {
						n.current = null
					}) : void 0
				}

				function zo(e, n, t) {
					return t = null != t ? t.concat([e]) : null, Po(4, 4, Fo.bind(null, n, e), t)
				}

				function Ho() {}

				function Bo(e, n) {
					var t = yo();
					n = void 0 === n ? null : n;
					var r = t.memoizedState;
					return null !== r && null !== n && go(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e)
				}

				function Wo(e, n) {
					var t = yo();
					n = void 0 === n ? null : n;
					var r = t.memoizedState;
					return null !== r && null !== n && go(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e)
				}

				function Go(e, n) {
					var t = xn;
					xn = 0 !== t && 4 > t ? t : 4, e(!0);
					var r = ao.transition;
					ao.transition = {};
					try {
						e(!1), n()
					} finally {
						xn = t, ao.transition = r
					}
				}

				function Yo() {
					return yo()
						.memoizedState
				}

				function Xo(e, n, t) {
					var r = Bl(e);
					t = {
						lane: r,
						action: t,
						hasEagerState: !1,
						eagerState: null,
						next: null
					}, qo(e) ? $o(n, t) : (Ko(e, n, t), null !== (e = Wl(e, r, t = Hl())) && Qo(e, n, r))
				}

				function Vo(e, n, t) {
					var r = Bl(e),
						i = {
							lane: r,
							action: t,
							hasEagerState: !1,
							eagerState: null,
							next: null
						};
					if (qo(e)) $o(n, i);
					else {
						Ko(e, n, i);
						var a = e.alternate;
						if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = n.lastRenderedReducer)) try {
							var o = n.lastRenderedState,
								s = a(o, t);
							if (i.hasEagerState = !0, i.eagerState = s, ar(s, o)) return
						} catch (e) {}
						null !== (e = Wl(e, r, t = Hl())) && Qo(e, n, r)
					}
				}

				function qo(e) {
					var n = e.alternate;
					return e === so || null !== n && n === so
				}

				function $o(e, n) {
					po = uo = !0;
					var t = e.pending;
					null === t ? n.next = n : (n.next = t.next, t.next = n), e.pending = n
				}

				function Ko(e, n, t) {
					null !== vl && 0 != (1 & e.mode) && 0 == (2 & gl) ? (null === (e = n.interleaved) ? (t.next = t, null === Qi ? Qi = [n] : Qi.push(n)) : (t.next = e.next, e.next = t), n.interleaved = t) : (null === (e = n.pending) ? t.next = t : (t.next = e.next, e.next = t), n.pending = t)
				}

				function Qo(e, n, t) {
					if (0 != (4194240 & t)) {
						var r = n.lanes;
						t |= r &= e.pendingLanes, n.lanes = t, bn(e, t)
					}
				}
				var Zo = {
						readContext: Ki,
						useCallback: mo,
						useContext: mo,
						useEffect: mo,
						useImperativeHandle: mo,
						useInsertionEffect: mo,
						useLayoutEffect: mo,
						useMemo: mo,
						useReducer: mo,
						useRef: mo,
						useState: mo,
						useDebugValue: mo,
						useDeferredValue: mo,
						useTransition: mo,
						useMutableSource: mo,
						useSyncExternalStore: mo,
						useId: mo,
						unstable_isNewReconciler: !1
					},
					Jo = {
						readContext: Ki,
						useCallback: function(e, n) {
							return xo()
								.memoizedState = [e, void 0 === n ? null : n], e
						},
						useContext: Ki,
						useEffect: Lo,
						useImperativeHandle: function(e, n, t) {
							return t = null != t ? t.concat([e]) : null, Io(4194308, 4, Fo.bind(null, n, e), t)
						},
						useLayoutEffect: function(e, n) {
							return Io(4194308, 4, e, n)
						},
						useInsertionEffect: function(e, n) {
							return Io(4, 2, e, n)
						},
						useMemo: function(e, n) {
							var t = xo();
							return n = void 0 === n ? null : n, e = e(), t.memoizedState = [e, n], e
						},
						useReducer: function(e, n, t) {
							var r = xo();
							return n = void 0 !== t ? t(n) : n, r.memoizedState = r.baseState = n, e = {
								pending: null,
								interleaved: null,
								lanes: 0,
								dispatch: null,
								lastRenderedReducer: e,
								lastRenderedState: n
							}, r.queue = e, e = e.dispatch = Xo.bind(null, so, e), [r.memoizedState, e]
						},
						useRef: function(e) {
							return e = {
									current: e
								}, xo()
								.memoizedState = e
						},
						useState: Ao,
						useDebugValue: Ho,
						useDeferredValue: function(e) {
							var n = Ao(e),
								t = n[0],
								r = n[1];
							return Lo((function() {
								var n = ao.transition;
								ao.transition = {};
								try {
									r(e)
								} finally {
									ao.transition = n
								}
							}), [e]), t
						},
						useTransition: function() {
							var e = Ao(!1),
								n = e[0];
							return e = Go.bind(null, e[1]), xo()
								.memoizedState = e, [n, e]
						},
						useMutableSource: function() {},
						useSyncExternalStore: function(e, n, t) {
							var r = so,
								i = xo();
							if (Oa) {
								if (void 0 === t) throw Error(a(407));
								t = t()
							} else {
								if (t = n(), null === vl) throw Error(a(349));
								0 != (30 & oo) || So(r, n, t)
							}
							i.memoizedState = t;
							var o = {
								value: t,
								getSnapshot: n
							};
							return i.queue = o, Lo(To.bind(null, r, o, e), [e]), r.flags |= 2048, _o(9, Co.bind(null, r, o, t, n), void 0, null), t
						},
						useId: function() {
							var e = xo(),
								n = vl.identifierPrefix;
							if (Oa) {
								var t = ja;
								n = ":" + n + "R" + (t = (wa & ~(1 << 32 - sn(wa) - 1))
									.toString(32) + t), 0 < (t = fo++) && (n += "H" + t.toString(32)), n += ":"
							} else n = ":" + n + "r" + (t = ho++)
								.toString(32) + ":";
							return e.memoizedState = n
						},
						unstable_isNewReconciler: !1
					},
					es = {
						readContext: Ki,
						useCallback: Bo,
						useContext: Ki,
						useEffect: Mo,
						useImperativeHandle: zo,
						useInsertionEffect: Do,
						useLayoutEffect: Uo,
						useMemo: Wo,
						useReducer: jo,
						useRef: Ro,
						useState: function() {
							return jo(wo)
						},
						useDebugValue: Ho,
						useDeferredValue: function(e) {
							var n = jo(wo),
								t = n[0],
								r = n[1];
							return Mo((function() {
								var n = ao.transition;
								ao.transition = {};
								try {
									r(e)
								} finally {
									ao.transition = n
								}
							}), [e]), t
						},
						useTransition: function() {
							return [jo(wo)[0], yo()
								.memoizedState
							]
						},
						useMutableSource: No,
						useSyncExternalStore: Eo,
						useId: Yo,
						unstable_isNewReconciler: !1
					},
					ns = {
						readContext: Ki,
						useCallback: Bo,
						useContext: Ki,
						useEffect: Mo,
						useImperativeHandle: zo,
						useInsertionEffect: Do,
						useLayoutEffect: Uo,
						useMemo: Wo,
						useReducer: ko,
						useRef: Ro,
						useState: function() {
							return ko(wo)
						},
						useDebugValue: Ho,
						useDeferredValue: function(e) {
							var n = ko(wo),
								t = n[0],
								r = n[1];
							return Mo((function() {
								var n = ao.transition;
								ao.transition = {};
								try {
									r(e)
								} finally {
									ao.transition = n
								}
							}), [e]), t
						},
						useTransition: function() {
							return [ko(wo)[0], yo()
								.memoizedState
							]
						},
						useMutableSource: No,
						useSyncExternalStore: Eo,
						useId: Yo,
						unstable_isNewReconciler: !1
					};

				function ts(e, n) {
					try {
						var t = "",
							r = n;
						do {
							t += H(r), r = r.return
						} while (r);
						var i = t
					} catch (e) {
						i = "\nError generating stack: " + e.message + "\n" + e.stack
					}
					return {
						value: e,
						source: n,
						stack: i
					}
				}

				function rs(e, n) {
					try {
						console.error(n.value)
					} catch (e) {
						setTimeout((function() {
							throw e
						}))
					}
				}
				var is, as, os, ss = "function" == typeof WeakMap ? WeakMap : Map;

				function ls(e, n, t) {
					(t = na(-1, t))
					.tag = 3, t.payload = {
						element: null
					};
					var r = n.value;
					return t.callback = function() {
						_l || (_l = !0, Rl = r), rs(0, n)
					}, t
				}

				function cs(e, n, t) {
					(t = na(-1, t))
					.tag = 3;
					var r = e.type.getDerivedStateFromError;
					if ("function" == typeof r) {
						var i = n.value;
						t.payload = function() {
							return r(i)
						}, t.callback = function() {
							rs(0, n)
						}
					}
					var a = e.stateNode;
					return null !== a && "function" == typeof a.componentDidCatch && (t.callback = function() {
						rs(0, n), "function" != typeof r && (null === Il ? Il = new Set([this]) : Il.add(this));
						var e = n.stack;
						this.componentDidCatch(n.value, {
							componentStack: null !== e ? e : ""
						})
					}), t
				}

				function us(e, n, t) {
					var r = e.pingCache;
					if (null === r) {
						r = e.pingCache = new ss;
						var i = new Set;
						r.set(n, i)
					} else void 0 === (i = r.get(n)) && (i = new Set, r.set(n, i));
					i.has(t) || (i.add(t), e = fc.bind(null, e, n, t), n.then(e, e))
				}

				function ds(e) {
					do {
						var n;
						if ((n = 13 === e.tag) && (n = null === (n = e.memoizedState) || null !== n.dehydrated), n) return e;
						e = e.return
					} while (null !== e);
					return null
				}

				function ps(e, n, t, r, i) {
					return 0 == (1 & e.mode) ? (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, 1 === t.tag && (null === t.alternate ? t.tag = 17 : ((n = na(-1, 1))
						.tag = 2, ta(t, n))), t.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e)
				}

				function fs(e, n) {
					if (!Oa) switch (e.tailMode) {
						case "hidden":
							n = e.tail;
							for (var t = null; null !== n;) null !== n.alternate && (t = n), n = n.sibling;
							null === t ? e.tail = null : t.sibling = null;
							break;
						case "collapsed":
							t = e.tail;
							for (var r = null; null !== t;) null !== t.alternate && (r = t), t = t.sibling;
							null === r ? n || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
					}
				}

				function hs(e) {
					var n = null !== e.alternate && e.alternate.child === e.child,
						t = 0,
						r = 0;
					if (n)
						for (var i = e.child; null !== i;) t |= i.lanes | i.childLanes, r |= 14680064 & i.subtreeFlags, r |= 14680064 & i.flags, i.return = e, i = i.sibling;
					else
						for (i = e.child; null !== i;) t |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
					return e.subtreeFlags |= r, e.childLanes = t, n
				}

				function ms(e, n, t) {
					var r = n.pendingProps;
					switch (Sa(n), n.tag) {
						case 2:
						case 16:
						case 15:
						case 0:
						case 11:
						case 7:
						case 8:
						case 12:
						case 9:
						case 14:
							return hs(n), null;
						case 1:
						case 17:
							return Oi(n.type) && Ai(), hs(n), null;
						case 3:
							return r = n.stateNode, Qa(), ji(Si), ji(Ei), ro(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (Ma(n) ? n.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 == (256 & n.flags) || (n.flags |= 1024, null !== Aa && (ql(Aa), Aa = null))), hs(n), null;
						case 5:
							Ja(n);
							var i = $a(qa.current);
							if (t = n.type, null !== e && null != n.stateNode) as(e, n, t, r), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
							else {
								if (!r) {
									if (null === n.stateNode) throw Error(a(166));
									return hs(n), null
								}
								if (e = $a(Xa.current), Ma(n)) {
									r = n.stateNode, t = n.type;
									var o = n.memoizedProps;
									switch (r[ci] = n, r[ui] = o, e = 0 != (1 & n.mode), t) {
										case "dialog":
											Dr("cancel", r), Dr("close", r);
											break;
										case "iframe":
										case "object":
										case "embed":
											Dr("load", r);
											break;
										case "video":
										case "audio":
											for (i = 0; i < Ir.length; i++) Dr(Ir[i], r);
											break;
										case "source":
											Dr("error", r);
											break;
										case "img":
										case "image":
										case "link":
											Dr("error", r), Dr("load", r);
											break;
										case "details":
											Dr("toggle", r);
											break;
										case "input":
											K(r, o), Dr("invalid", r);
											break;
										case "select":
											r._wrapperState = {
												wasMultiple: !!o.multiple
											}, Dr("invalid", r);
											break;
										case "textarea":
											ie(r, o), Dr("invalid", r)
									}
									for (var l in be(t, o), i = null, o)
										if (o.hasOwnProperty(l)) {
											var c = o[l];
											"children" === l ? "string" == typeof c ? r.textContent !== c && (Kr(r.textContent, c, e), i = ["children", c]) : "number" == typeof c && r.textContent !== "" + c && (Kr(r.textContent, c, e), i = ["children", "" + c]) : s.hasOwnProperty(l) && null != c && "onScroll" === l && Dr("scroll", r)
										} switch (t) {
										case "input":
											X(r), J(r, o, !0);
											break;
										case "textarea":
											X(r), oe(r);
											break;
										case "select":
										case "option":
											break;
										default:
											"function" == typeof o.onClick && (r.onclick = Qr)
									}
									r = i, n.updateQueue = r, null !== r && (n.flags |= 4)
								} else {
									l = 9 === i.nodeType ? i : i.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = se(t)), "http://www.w3.org/1999/xhtml" === e ? "script" === t ? ((e = l.createElement("div"))
										.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = l.createElement(t, {
										is: r.is
									}) : (e = l.createElement(t), "select" === t && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, t), e[ci] = n, e[ui] = r, is(e, n), n.stateNode = e;
									e: {
										switch (l = xe(t, r), t) {
											case "dialog":
												Dr("cancel", e), Dr("close", e), i = r;
												break;
											case "iframe":
											case "object":
											case "embed":
												Dr("load", e), i = r;
												break;
											case "video":
											case "audio":
												for (i = 0; i < Ir.length; i++) Dr(Ir[i], e);
												i = r;
												break;
											case "source":
												Dr("error", e), i = r;
												break;
											case "img":
											case "image":
											case "link":
												Dr("error", e), Dr("load", e), i = r;
												break;
											case "details":
												Dr("toggle", e), i = r;
												break;
											case "input":
												K(e, r), i = $(e, r), Dr("invalid", e);
												break;
											case "option":
											default:
												i = r;
												break;
											case "select":
												e._wrapperState = {
													wasMultiple: !!r.multiple
												}, i = D({}, r, {
													value: void 0
												}), Dr("invalid", e);
												break;
											case "textarea":
												ie(e, r), i = re(e, r), Dr("invalid", e)
										}
										for (o in be(t, i), c = i)
											if (c.hasOwnProperty(o)) {
												var u = c[o];
												"style" === o ? ge(e, u) : "dangerouslySetInnerHTML" === o ? null != (u = u ? u.__html : void 0) && de(e, u) : "children" === o ? "string" == typeof u ? ("textarea" !== t || "" !== u) && pe(e, u) : "number" == typeof u && pe(e, "" + u) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (s.hasOwnProperty(o) ? null != u && "onScroll" === o && Dr("scroll", e) : null != u && x(e, o, u, l))
											} switch (t) {
											case "input":
												X(e), J(e, r, !1);
												break;
											case "textarea":
												X(e), oe(e);
												break;
											case "option":
												null != r.value && e.setAttribute("value", "" + G(r.value));
												break;
											case "select":
												e.multiple = !!r.multiple, null != (o = r.value) ? te(e, !!r.multiple, o, !1) : null != r.defaultValue && te(e, !!r.multiple, r.defaultValue, !0);
												break;
											default:
												"function" == typeof i.onClick && (e.onclick = Qr)
										}
										switch (t) {
											case "button":
											case "input":
											case "select":
											case "textarea":
												r = !!r.autoFocus;
												break e;
											case "img":
												r = !0;
												break e;
											default:
												r = !1
										}
									}
									r && (n.flags |= 4)
								}
								null !== n.ref && (n.flags |= 512, n.flags |= 2097152)
							}
							return hs(n), null;
						case 6:
							if (e && null != n.stateNode) os(0, n, e.memoizedProps, r);
							else {
								if ("string" != typeof r && null === n.stateNode) throw Error(a(166));
								if (t = $a(qa.current), $a(Xa.current), Ma(n)) {
									if (r = n.stateNode, t = n.memoizedProps, r[ci] = n, (o = r.nodeValue !== t) && null !== (e = Ca)) switch (l = 0 != (1 & e.mode), e.tag) {
										case 3:
											Kr(r.nodeValue, t, l);
											break;
										case 5:
											!0 !== e.memoizedProps[void 0] && Kr(r.nodeValue, t, l)
									}
									o && (n.flags |= 4)
								} else(r = (9 === t.nodeType ? t : t.ownerDocument)
									.createTextNode(r))[ci] = n, n.stateNode = r
							}
							return hs(n), null;
						case 13:
							if (ji(eo), r = n.memoizedState, Oa && null !== Ta && 0 != (1 & n.mode) && 0 == (128 & n.flags)) {
								for (r = Ta; r;) r = oi(r.nextSibling);
								return Da(), n.flags |= 98560, n
							}
							if (null !== r && null !== r.dehydrated) {
								if (r = Ma(n), null === e) {
									if (!r) throw Error(a(318));
									if (!(r = null !== (r = n.memoizedState) ? r.dehydrated : null)) throw Error(a(317));
									r[ci] = n
								} else Da(), 0 == (128 & n.flags) && (n.memoizedState = null), n.flags |= 4;
								return hs(n), null
							}
							return null !== Aa && (ql(Aa), Aa = null), 0 != (128 & n.flags) ? (n.lanes = t, n) : (r = null !== r, t = !1, null === e ? Ma(n) : t = null !== e.memoizedState, r && !t && (n.child.flags |= 8192, 0 != (1 & n.mode) && (null === e || 0 != (1 & eo.current) ? 0 === jl && (jl = 3) : rc())), null !== n.updateQueue && (n.flags |= 4), hs(n), null);
						case 4:
							return Qa(), null === e && zr(n.stateNode.containerInfo), hs(n), null;
						case 10:
							return Vi(n.type._context), hs(n), null;
						case 19:
							if (ji(eo), null === (o = n.memoizedState)) return hs(n), null;
							if (r = 0 != (128 & n.flags), null === (l = o.rendering))
								if (r) fs(o, !1);
								else {
									if (0 !== jl || null !== e && 0 != (128 & e.flags))
										for (e = n.child; null !== e;) {
											if (null !== (l = no(e))) {
												for (n.flags |= 128, fs(o, !1), null !== (r = l.updateQueue) && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; null !== t;) e = r, (o = t)
													.flags &= 14680066, null === (l = o.alternate) ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = null === e ? null : {
														lanes: e.lanes,
														firstContext: e.firstContext
													}), t = t.sibling;
												return ki(eo, 1 & eo.current | 2), n.child
											}
											e = e.sibling
										}
									null !== o.tail && Qe() > Al && (n.flags |= 128, r = !0, fs(o, !1), n.lanes = 4194304)
								}
							else {
								if (!r)
									if (null !== (e = no(l))) {
										if (n.flags |= 128, r = !0, null !== (t = e.updateQueue) && (n.updateQueue = t, n.flags |= 4), fs(o, !0), null === o.tail && "hidden" === o.tailMode && !l.alternate && !Oa) return hs(n), null
									} else 2 * Qe() - o.renderingStartTime > Al && 1073741824 !== t && (n.flags |= 128, r = !0, fs(o, !1), n.lanes = 4194304);
								o.isBackwards ? (l.sibling = n.child, n.child = l) : (null !== (t = o.last) ? t.sibling = l : n.child = l, o.last = l)
							}
							return null !== o.tail ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = Qe(), n.sibling = null, t = eo.current, ki(eo, r ? 1 & t | 2 : 1 & t), n) : (hs(n), null);
						case 22:
						case 23:
							return Jl(), r = null !== n.memoizedState, null !== e && null !== e.memoizedState !== r && (n.flags |= 8192), r && 0 != (1 & n.mode) ? 0 != (1073741824 & yl) && (hs(n), 6 & n.subtreeFlags && (n.flags |= 8192)) : hs(n), null;
						case 24:
						case 25:
							return null
					}
					throw Error(a(156, n.tag))
				}
				is = function(e, n) {
					for (var t = n.child; null !== t;) {
						if (5 === t.tag || 6 === t.tag) e.appendChild(t.stateNode);
						else if (4 !== t.tag && null !== t.child) {
							t.child.return = t, t = t.child;
							continue
						}
						if (t === n) break;
						for (; null === t.sibling;) {
							if (null === t.return || t.return === n) return;
							t = t.return
						}
						t.sibling.return = t.return, t = t.sibling
					}
				}, as = function(e, n, t, r) {
					var i = e.memoizedProps;
					if (i !== r) {
						e = n.stateNode, $a(Xa.current);
						var a, o = null;
						switch (t) {
							case "input":
								i = $(e, i), r = $(e, r), o = [];
								break;
							case "select":
								i = D({}, i, {
									value: void 0
								}), r = D({}, r, {
									value: void 0
								}), o = [];
								break;
							case "textarea":
								i = re(e, i), r = re(e, r), o = [];
								break;
							default:
								"function" != typeof i.onClick && "function" == typeof r.onClick && (e.onclick = Qr)
						}
						for (u in be(t, r), t = null, i)
							if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && null != i[u])
								if ("style" === u) {
									var l = i[u];
									for (a in l) l.hasOwnProperty(a) && (t || (t = {}), t[a] = "")
								} else "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (s.hasOwnProperty(u) ? o || (o = []) : (o = o || [])
									.push(u, null));
						for (u in r) {
							var c = r[u];
							if (l = null != i ? i[u] : void 0, r.hasOwnProperty(u) && c !== l && (null != c || null != l))
								if ("style" === u)
									if (l) {
										for (a in l) !l.hasOwnProperty(a) || c && c.hasOwnProperty(a) || (t || (t = {}), t[a] = "");
										for (a in c) c.hasOwnProperty(a) && l[a] !== c[a] && (t || (t = {}), t[a] = c[a])
									} else t || (o || (o = []), o.push(u, t)), t = c;
							else "dangerouslySetInnerHTML" === u ? (c = c ? c.__html : void 0, l = l ? l.__html : void 0, null != c && l !== c && (o = o || [])
									.push(u, c)) : "children" === u ? "string" != typeof c && "number" != typeof c || (o = o || [])
								.push(u, "" + c) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (s.hasOwnProperty(u) ? (null != c && "onScroll" === u && Dr("scroll", e), o || l === c || (o = [])) : (o = o || [])
									.push(u, c))
						}
						t && (o = o || [])
							.push("style", t);
						var u = o;
						(n.updateQueue = u) && (n.flags |= 4)
					}
				}, os = function(e, n, t, r) {
					t !== r && (n.flags |= 4)
				};
				var gs = y.ReactCurrentOwner,
					vs = !1;

				function bs(e, n, t, r) {
					n.child = null === e ? Ga(n, null, t, r) : Wa(n, e.child, t, r)
				}

				function xs(e, n, t, r, i) {
					t = t.render;
					var a = n.ref;
					return $i(n, i), r = vo(e, n, t, r, a, i), t = bo(), null === e || vs ? (Oa && t && Ea(n), n.flags |= 1, bs(e, n, r, i), n.child) : (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~i, Fs(e, n, i))
				}

				function ys(e, n, t, r, i) {
					if (null === e) {
						var a = t.type;
						return "function" != typeof a || yc(a) || void 0 !== a.defaultProps || null !== t.compare || void 0 !== t.defaultProps ? ((e = jc(t.type, null, r, n, n.mode, i))
							.ref = n.ref, e.return = n, n.child = e) : (n.tag = 15, n.type = a, ws(e, n, a, r, i))
					}
					if (a = e.child, 0 == (e.lanes & i)) {
						var o = a.memoizedProps;
						if ((t = null !== (t = t.compare) ? t : or)(o, r) && e.ref === n.ref) return Fs(e, n, i)
					}
					return n.flags |= 1, (e = wc(a, r))
						.ref = n.ref, e.return = n, n.child = e
				}

				function ws(e, n, t, r, i) {
					if (null !== e && or(e.memoizedProps, r) && e.ref === n.ref) {
						if (vs = !1, 0 == (e.lanes & i)) return n.lanes = e.lanes, Fs(e, n, i);
						0 != (131072 & e.flags) && (vs = !0)
					}
					return Ns(e, n, t, r, i)
				}

				function js(e, n, t) {
					var r = n.pendingProps,
						i = r.children,
						a = null !== e ? e.memoizedState : null;
					if ("hidden" === r.mode)
						if (0 == (1 & n.mode)) n.memoizedState = {
							baseLanes: 0,
							cachePool: null
						}, ki(wl, yl), yl |= t;
						else {
							if (0 == (1073741824 & t)) return e = null !== a ? a.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = {
								baseLanes: e,
								cachePool: null
							}, n.updateQueue = null, ki(wl, yl), yl |= e, null;
							n.memoizedState = {
								baseLanes: 0,
								cachePool: null
							}, r = null !== a ? a.baseLanes : t, ki(wl, yl), yl |= r
						}
					else null !== a ? (r = a.baseLanes | t, n.memoizedState = null) : r = t, ki(wl, yl), yl |= r;
					return bs(e, n, i, t), n.child
				}

				function ks(e, n) {
					var t = n.ref;
					(null === e && null !== t || null !== e && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152)
				}

				function Ns(e, n, t, r, i) {
					var a = Oi(t) ? Ci : Ei.current;
					return a = Ti(n, a), $i(n, i), t = vo(e, n, t, r, a, i), r = bo(), null === e || vs ? (Oa && r && Ea(n), n.flags |= 1, bs(e, n, t, i), n.child) : (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~i, Fs(e, n, i))
				}

				function Es(e, n, t, r, i) {
					if (Oi(t)) {
						var a = !0;
						Ii(n)
					} else a = !1;
					if ($i(n, i), null === n.stateNode) null !== e && (e.alternate = null, n.alternate = null, n.flags |= 2), da(n, t, r), fa(n, t, r, i), r = !0;
					else if (null === e) {
						var o = n.stateNode,
							s = n.memoizedProps;
						o.props = s;
						var l = o.context,
							c = t.contextType;
						c = "object" == typeof c && null !== c ? Ki(c) : Ti(n, c = Oi(t) ? Ci : Ei.current);
						var u = t.getDerivedStateFromProps,
							d = "function" == typeof u || "function" == typeof o.getSnapshotBeforeUpdate;
						d || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (s !== r || l !== c) && pa(n, o, r, c), Zi = !1;
						var p = n.memoizedState;
						o.state = p, aa(n, r, o, i), l = n.memoizedState, s !== r || p !== l || Si.current || Zi ? ("function" == typeof u && (la(n, t, u, r), l = n.memoizedState), (s = Zi || ua(n, t, s, r, p, l, c)) ? (d || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || ("function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" == typeof o.componentDidMount && (n.flags |= 4194308)) : ("function" == typeof o.componentDidMount && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = l), o.props = r, o.state = l, o.context = c, r = s) : ("function" == typeof o.componentDidMount && (n.flags |= 4194308), r = !1)
					} else {
						o = n.stateNode, ea(e, n), s = n.memoizedProps, c = n.type === n.elementType ? s : Hi(n.type, s), o.props = c, d = n.pendingProps, p = o.context, l = "object" == typeof(l = t.contextType) && null !== l ? Ki(l) : Ti(n, l = Oi(t) ? Ci : Ei.current);
						var f = t.getDerivedStateFromProps;
						(u = "function" == typeof f || "function" == typeof o.getSnapshotBeforeUpdate) || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (s !== d || p !== l) && pa(n, o, r, l), Zi = !1, p = n.memoizedState, o.state = p, aa(n, r, o, i);
						var h = n.memoizedState;
						s !== d || p !== h || Si.current || Zi ? ("function" == typeof f && (la(n, t, f, r), h = n.memoizedState), (c = Zi || ua(n, t, c, r, p, h, l) || !1) ? (u || "function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate || ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(r, h, l), "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, h, l)), "function" == typeof o.componentDidUpdate && (n.flags |= 4), "function" == typeof o.getSnapshotBeforeUpdate && (n.flags |= 1024)) : ("function" != typeof o.componentDidUpdate || s === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || s === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = h), o.props = r, o.state = h, o.context = l, r = c) : ("function" != typeof o.componentDidUpdate || s === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || s === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), r = !1)
					}
					return Ss(e, n, t, r, a, i)
				}

				function Ss(e, n, t, r, i, a) {
					ks(e, n);
					var o = 0 != (128 & n.flags);
					if (!r && !o) return i && Pi(n, t, !1), Fs(e, n, a);
					r = n.stateNode, gs.current = n;
					var s = o && "function" != typeof t.getDerivedStateFromError ? null : r.render();
					return n.flags |= 1, null !== e && o ? (n.child = Wa(n, e.child, null, a), n.child = Wa(n, null, s, a)) : bs(e, n, s, a), n.memoizedState = r.state, i && Pi(n, t, !0), n.child
				}

				function Cs(e) {
					var n = e.stateNode;
					n.pendingContext ? _i(0, n.pendingContext, n.pendingContext !== n.context) : n.context && _i(0, n.context, !1), Ka(e, n.containerInfo)
				}

				function Ts(e, n, t, r, i) {
					return Da(), Ua(i), n.flags |= 256, bs(e, n, t, r), n.child
				}
				var Os = {
					dehydrated: null,
					treeContext: null,
					retryLane: 0
				};

				function As(e) {
					return {
						baseLanes: e,
						cachePool: null
					}
				}

				function _s(e, n, t) {
					var r, i = n.pendingProps,
						o = eo.current,
						s = !1,
						l = 0 != (128 & n.flags);
					if ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)), r ? (s = !0, n.flags &= -129) : null !== e && null === e.memoizedState || (o |= 1), ki(eo, 1 & o), null === e) return Pa(n), null !== (e = n.memoizedState) && null !== (e = e.dehydrated) ? (0 == (1 & n.mode) ? n.lanes = 1 : "$!" === e.data ? n.lanes = 8 : n.lanes = 1073741824, null) : (o = i.children, e = i.fallback, s ? (i = n.mode, s = n.child, o = {
						mode: "hidden",
						children: o
					}, 0 == (1 & i) && null !== s ? (s.childLanes = 0, s.pendingProps = o) : s = Nc(o, i, 0, null), e = kc(e, i, t, null), s.return = n, e.return = n, s.sibling = e, n.child = s, n.child.memoizedState = As(t), n.memoizedState = Os, e) : Rs(n, o));
					if (null !== (o = e.memoizedState)) {
						if (null !== (r = o.dehydrated)) {
							if (l) return 256 & n.flags ? (n.flags &= -257, Ls(e, n, t, Error(a(422)))) : null !== n.memoizedState ? (n.child = e.child, n.flags |= 128, null) : (s = i.fallback, o = n.mode, i = Nc({
									mode: "visible",
									children: i.children
								}, o, 0, null), (s = kc(s, o, t, null))
								.flags |= 2, i.return = n, s.return = n, i.sibling = s, n.child = i, 0 != (1 & n.mode) && Wa(n, e.child, null, t), n.child.memoizedState = As(t), n.memoizedState = Os, s);
							if (0 == (1 & n.mode)) n = Ls(e, n, t, null);
							else if ("$!" === r.data) n = Ls(e, n, t, Error(a(419)));
							else if (i = 0 != (t & e.childLanes), vs || i) {
								if (null !== (i = vl)) {
									switch (t & -t) {
										case 4:
											s = 2;
											break;
										case 16:
											s = 8;
											break;
										case 64:
										case 128:
										case 256:
										case 512:
										case 1024:
										case 2048:
										case 4096:
										case 8192:
										case 16384:
										case 32768:
										case 65536:
										case 131072:
										case 262144:
										case 524288:
										case 1048576:
										case 2097152:
										case 4194304:
										case 8388608:
										case 16777216:
										case 33554432:
										case 67108864:
											s = 32;
											break;
										case 536870912:
											s = 268435456;
											break;
										default:
											s = 0
									}
									0 !== (i = 0 != (s & (i.suspendedLanes | t)) ? 0 : s) && i !== o.retryLane && (o.retryLane = i, Wl(e, i, -1))
								}
								rc(), n = Ls(e, n, t, Error(a(421)))
							} else "$?" === r.data ? (n.flags |= 128, n.child = e.child, n = mc.bind(null, e), r._reactRetry = n, n = null) : (t = o.treeContext, Ta = oi(r.nextSibling), Ca = n, Oa = !0, Aa = null, null !== t && (ba[xa++] = wa, ba[xa++] = ja, ba[xa++] = ya, wa = t.id, ja = t.overflow, ya = n), (n = Rs(n, n.pendingProps.children))
								.flags |= 4096);
							return n
						}
						return s ? (i = Ps(e, n, i.children, i.fallback, t), s = n.child, o = e.child.memoizedState, s.memoizedState = null === o ? As(t) : {
							baseLanes: o.baseLanes | t,
							cachePool: null
						}, s.childLanes = e.childLanes & ~t, n.memoizedState = Os, i) : (t = Is(e, n, i.children, t), n.memoizedState = null, t)
					}
					return s ? (i = Ps(e, n, i.children, i.fallback, t), s = n.child, o = e.child.memoizedState, s.memoizedState = null === o ? As(t) : {
						baseLanes: o.baseLanes | t,
						cachePool: null
					}, s.childLanes = e.childLanes & ~t, n.memoizedState = Os, i) : (t = Is(e, n, i.children, t), n.memoizedState = null, t)
				}

				function Rs(e, n) {
					return (n = Nc({
							mode: "visible",
							children: n
						}, e.mode, 0, null))
						.return = e, e.child = n
				}

				function Is(e, n, t, r) {
					var i = e.child;
					return e = i.sibling, t = wc(i, {
						mode: "visible",
						children: t
					}), 0 == (1 & n.mode) && (t.lanes = r), t.return = n, t.sibling = null, null !== e && (null === (r = n.deletions) ? (n.deletions = [e], n.flags |= 16) : r.push(e)), n.child = t
				}

				function Ps(e, n, t, r, i) {
					var a = n.mode,
						o = (e = e.child)
						.sibling,
						s = {
							mode: "hidden",
							children: t
						};
					return 0 == (1 & a) && n.child !== e ? ((t = n.child)
							.childLanes = 0, t.pendingProps = s, n.deletions = null) : (t = wc(e, s))
						.subtreeFlags = 14680064 & e.subtreeFlags, null !== o ? r = wc(o, r) : (r = kc(r, a, i, null))
						.flags |= 2, r.return = n, t.return = n, t.sibling = r, n.child = t, r
				}

				function Ls(e, n, t, r) {
					return null !== r && Ua(r), Wa(n, e.child, null, t), (e = Rs(n, n.pendingProps.children))
						.flags |= 2, n.memoizedState = null, e
				}

				function Ms(e, n, t) {
					e.lanes |= n;
					var r = e.alternate;
					null !== r && (r.lanes |= n), qi(e.return, n, t)
				}

				function Ds(e, n, t, r, i) {
					var a = e.memoizedState;
					null === a ? e.memoizedState = {
						isBackwards: n,
						rendering: null,
						renderingStartTime: 0,
						last: r,
						tail: t,
						tailMode: i
					} : (a.isBackwards = n, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = t, a.tailMode = i)
				}

				function Us(e, n, t) {
					var r = n.pendingProps,
						i = r.revealOrder,
						a = r.tail;
					if (bs(e, n, r.children, t), 0 != (2 & (r = eo.current))) r = 1 & r | 2, n.flags |= 128;
					else {
						if (null !== e && 0 != (128 & e.flags)) e: for (e = n.child; null !== e;) {
							if (13 === e.tag) null !== e.memoizedState && Ms(e, t, n);
							else if (19 === e.tag) Ms(e, t, n);
							else if (null !== e.child) {
								e.child.return = e, e = e.child;
								continue
							}
							if (e === n) break e;
							for (; null === e.sibling;) {
								if (null === e.return || e.return === n) break e;
								e = e.return
							}
							e.sibling.return = e.return, e = e.sibling
						}
						r &= 1
					}
					if (ki(eo, r), 0 == (1 & n.mode)) n.memoizedState = null;
					else switch (i) {
						case "forwards":
							for (t = n.child, i = null; null !== t;) null !== (e = t.alternate) && null === no(e) && (i = t), t = t.sibling;
							null === (t = i) ? (i = n.child, n.child = null) : (i = t.sibling, t.sibling = null), Ds(n, !1, i, t, a);
							break;
						case "backwards":
							for (t = null, i = n.child, n.child = null; null !== i;) {
								if (null !== (e = i.alternate) && null === no(e)) {
									n.child = i;
									break
								}
								e = i.sibling, i.sibling = t, t = i, i = e
							}
							Ds(n, !0, t, null, a);
							break;
						case "together":
							Ds(n, !1, null, null, void 0);
							break;
						default:
							n.memoizedState = null
					}
					return n.child
				}

				function Fs(e, n, t) {
					if (null !== e && (n.dependencies = e.dependencies), Nl |= n.lanes, 0 == (t & n.childLanes)) return null;
					if (null !== e && n.child !== e.child) throw Error(a(153));
					if (null !== n.child) {
						for (t = wc(e = n.child, e.pendingProps), n.child = t, t.return = n; null !== e.sibling;) e = e.sibling, (t = t.sibling = wc(e, e.pendingProps))
							.return = n;
						t.sibling = null
					}
					return n.child
				}

				function zs(e, n) {
					switch (Sa(n), n.tag) {
						case 1:
							return Oi(n.type) && Ai(), 65536 & (e = n.flags) ? (n.flags = -65537 & e | 128, n) : null;
						case 3:
							return Qa(), ji(Si), ji(Ei), ro(), 0 != (65536 & (e = n.flags)) && 0 == (128 & e) ? (n.flags = -65537 & e | 128, n) : null;
						case 5:
							return Ja(n), null;
						case 13:
							if (ji(eo), null !== (e = n.memoizedState) && null !== e.dehydrated) {
								if (null === n.alternate) throw Error(a(340));
								Da()
							}
							return 65536 & (e = n.flags) ? (n.flags = -65537 & e | 128, n) : null;
						case 19:
							return ji(eo), null;
						case 4:
							return Qa(), null;
						case 10:
							return Vi(n.type._context), null;
						case 22:
						case 23:
							return Jl(), null;
						default:
							return null
					}
				}
				var Hs = !1,
					Bs = !1,
					Ws = "function" == typeof WeakSet ? WeakSet : Set,
					Gs = null;

				function Ys(e, n) {
					var t = e.ref;
					if (null !== t)
						if ("function" == typeof t) try {
							t(null)
						} catch (t) {
							pc(e, n, t)
						} else t.current = null
				}

				function Xs(e, n, t) {
					try {
						t()
					} catch (t) {
						pc(e, n, t)
					}
				}
				var Vs = !1;

				function qs(e, n, t) {
					var r = n.updateQueue;
					if (null !== (r = null !== r ? r.lastEffect : null)) {
						var i = r = r.next;
						do {
							if ((i.tag & e) === e) {
								var a = i.destroy;
								i.destroy = void 0, void 0 !== a && Xs(n, t, a)
							}
							i = i.next
						} while (i !== r)
					}
				}

				function $s(e, n) {
					if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
						var t = n = n.next;
						do {
							if ((t.tag & e) === e) {
								var r = t.create;
								t.destroy = r()
							}
							t = t.next
						} while (t !== n)
					}
				}

				function Ks(e) {
					var n = e.ref;
					if (null !== n) {
						var t = e.stateNode;
						e.tag, e = t, "function" == typeof n ? n(e) : n.current = e
					}
				}

				function Qs(e, n, t) {
					if (on && "function" == typeof on.onCommitFiberUnmount) try {
						on.onCommitFiberUnmount(an, n)
					} catch (e) {}
					switch (n.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							if (null !== (e = n.updateQueue) && null !== (e = e.lastEffect)) {
								var r = e = e.next;
								do {
									var i = r,
										a = i.destroy;
									i = i.tag, void 0 !== a && (0 != (2 & i) || 0 != (4 & i)) && Xs(n, t, a), r = r.next
								} while (r !== e)
							}
							break;
						case 1:
							if (Ys(n, t), "function" == typeof(e = n.stateNode)
								.componentWillUnmount) try {
								e.props = n.memoizedProps, e.state = n.memoizedState, e.componentWillUnmount()
							} catch (e) {
								pc(n, t, e)
							}
							break;
						case 5:
							Ys(n, t);
							break;
						case 4:
							il(e, n, t)
					}
				}

				function Zs(e) {
					var n = e.alternate;
					null !== n && (e.alternate = null, Zs(n)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (n = e.stateNode) && (delete n[ci], delete n[ui], delete n[pi], delete n[fi], delete n[hi]), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
				}

				function Js(e) {
					return 5 === e.tag || 3 === e.tag || 4 === e.tag
				}

				function el(e) {
					e: for (;;) {
						for (; null === e.sibling;) {
							if (null === e.return || Js(e.return)) return null;
							e = e.return
						}
						for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
							if (2 & e.flags) continue e;
							if (null === e.child || 4 === e.tag) continue e;
							e.child.return = e, e = e.child
						}
						if (!(2 & e.flags)) return e.stateNode
					}
				}

				function nl(e) {
					e: {
						for (var n = e.return; null !== n;) {
							if (Js(n)) break e;
							n = n.return
						}
						throw Error(a(160))
					}
					var t = n;
					switch (t.tag) {
						case 5:
							n = t.stateNode, 32 & t.flags && (pe(n, ""), t.flags &= -33), rl(e, t = el(e), n);
							break;
						case 3:
						case 4:
							n = t.stateNode.containerInfo, tl(e, t = el(e), n);
							break;
						default:
							throw Error(a(161))
					}
				}

				function tl(e, n, t) {
					var r = e.tag;
					if (5 === r || 6 === r) e = e.stateNode, n ? 8 === t.nodeType ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (8 === t.nodeType ? (n = t.parentNode)
						.insertBefore(e, t) : (n = t)
						.appendChild(e), null != (t = t._reactRootContainer) || null !== n.onclick || (n.onclick = Qr));
					else if (4 !== r && null !== (e = e.child))
						for (tl(e, n, t), e = e.sibling; null !== e;) tl(e, n, t), e = e.sibling
				}

				function rl(e, n, t) {
					var r = e.tag;
					if (5 === r || 6 === r) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
					else if (4 !== r && null !== (e = e.child))
						for (rl(e, n, t), e = e.sibling; null !== e;) rl(e, n, t), e = e.sibling
				}

				function il(e, n, t) {
					for (var r, i, o = n, s = !1;;) {
						if (!s) {
							s = o.return;
							e: for (;;) {
								if (null === s) throw Error(a(160));
								switch (r = s.stateNode, s.tag) {
									case 5:
										i = !1;
										break e;
									case 3:
									case 4:
										r = r.containerInfo, i = !0;
										break e
								}
								s = s.return
							}
							s = !0
						}
						if (5 === o.tag || 6 === o.tag) {
							e: for (var l = e, c = o, u = t, d = c;;)
								if (Qs(l, d, u), null !== d.child && 4 !== d.tag) d.child.return = d, d = d.child;
								else {
									if (d === c) break e;
									for (; null === d.sibling;) {
										if (null === d.return || d.return === c) break e;
										d = d.return
									}
									d.sibling.return = d.return, d = d.sibling
								}i ? (l = r, c = o.stateNode, 8 === l.nodeType ? l.parentNode.removeChild(c) : l.removeChild(c)) : r.removeChild(o.stateNode)
						}
						else if (18 === o.tag) i ? (l = r, c = o.stateNode, 8 === l.nodeType ? ai(l.parentNode, c) : 1 === l.nodeType && ai(l, c), Bn(l)) : ai(r, o.stateNode);
						else if (4 === o.tag) {
							if (null !== o.child) {
								r = o.stateNode.containerInfo, i = !0, o.child.return = o, o = o.child;
								continue
							}
						} else if (Qs(e, o, t), null !== o.child) {
							o.child.return = o, o = o.child;
							continue
						}
						if (o === n) break;
						for (; null === o.sibling;) {
							if (null === o.return || o.return === n) return;
							4 === (o = o.return)
								.tag && (s = !1)
						}
						o.sibling.return = o.return, o = o.sibling
					}
				}

				function al(e, n) {
					switch (n.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							return qs(3, n, n.return), $s(3, n), void qs(5, n, n.return);
						case 1:
						case 12:
						case 17:
							return;
						case 5:
							var t = n.stateNode;
							if (null != t) {
								var r = n.memoizedProps,
									i = null !== e ? e.memoizedProps : r;
								e = n.type;
								var o = n.updateQueue;
								if (n.updateQueue = null, null !== o) {
									for ("input" === e && "radio" === r.type && null != r.name && Q(t, r), xe(e, i), n = xe(e, r), i = 0; i < o.length; i += 2) {
										var s = o[i],
											l = o[i + 1];
										"style" === s ? ge(t, l) : "dangerouslySetInnerHTML" === s ? de(t, l) : "children" === s ? pe(t, l) : x(t, s, l, n)
									}
									switch (e) {
										case "input":
											Z(t, r);
											break;
										case "textarea":
											ae(t, r);
											break;
										case "select":
											e = t._wrapperState.wasMultiple, t._wrapperState.wasMultiple = !!r.multiple, null != (o = r.value) ? te(t, !!r.multiple, o, !1) : e !== !!r.multiple && (null != r.defaultValue ? te(t, !!r.multiple, r.defaultValue, !0) : te(t, !!r.multiple, r.multiple ? [] : "", !1))
									}
									t[ui] = r
								}
							}
							return;
						case 6:
							if (null === n.stateNode) throw Error(a(162));
							return void(n.stateNode.nodeValue = n.memoizedProps);
						case 3:
							return void(null !== e && e.memoizedState.isDehydrated && Bn(n.stateNode.containerInfo));
						case 13:
						case 19:
							return void
							function(e) {
								var n = e.updateQueue;
								if (null !== n) {
									e.updateQueue = null;
									var t = e.stateNode;
									null === t && (t = e.stateNode = new Ws), n.forEach((function(n) {
										var r = gc.bind(null, e, n);
										t.has(n) || (t.add(n), n.then(r, r))
									}))
								}
							}(n)
					}
					throw Error(a(163))
				}

				function ol(e, n, t) {
					Gs = e, sl(e, n, t)
				}

				function sl(e, n, t) {
					for (var r = 0 != (1 & e.mode); null !== Gs;) {
						var i = Gs,
							a = i.child;
						if (22 === i.tag && r) {
							var o = null !== i.memoizedState || Hs;
							if (!o) {
								var s = i.alternate,
									l = null !== s && null !== s.memoizedState || Bs;
								s = Hs;
								var c = Bs;
								if (Hs = o, (Bs = l) && !c)
									for (Gs = i; null !== Gs;) l = (o = Gs)
										.child, 22 === o.tag && null !== o.memoizedState ? ul(i) : null !== l ? (l.return = o, Gs = l) : ul(i);
								for (; null !== a;) Gs = a, sl(a, n, t), a = a.sibling;
								Gs = i, Hs = s, Bs = c
							}
							ll(e)
						} else 0 != (8772 & i.subtreeFlags) && null !== a ? (a.return = i, Gs = a) : ll(e)
					}
				}

				function ll(e) {
					for (; null !== Gs;) {
						var n = Gs;
						if (0 != (8772 & n.flags)) {
							var t = n.alternate;
							try {
								if (0 != (8772 & n.flags)) switch (n.tag) {
									case 0:
									case 11:
									case 15:
										Bs || $s(5, n);
										break;
									case 1:
										var r = n.stateNode;
										if (4 & n.flags && !Bs)
											if (null === t) r.componentDidMount();
											else {
												var i = n.elementType === n.type ? t.memoizedProps : Hi(n.type, t.memoizedProps);
												r.componentDidUpdate(i, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
											} var o = n.updateQueue;
										null !== o && oa(n, o, r);
										break;
									case 3:
										var s = n.updateQueue;
										if (null !== s) {
											if (t = null, null !== n.child) switch (n.child.tag) {
												case 5:
												case 1:
													t = n.child.stateNode
											}
											oa(n, s, t)
										}
										break;
									case 5:
										var l = n.stateNode;
										if (null === t && 4 & n.flags) {
											t = l;
											var c = n.memoizedProps;
											switch (n.type) {
												case "button":
												case "input":
												case "select":
												case "textarea":
													c.autoFocus && t.focus();
													break;
												case "img":
													c.src && (t.src = c.src)
											}
										}
										break;
									case 6:
									case 4:
									case 12:
									case 19:
									case 17:
									case 21:
									case 22:
									case 23:
										break;
									case 13:
										if (null === n.memoizedState) {
											var u = n.alternate;
											if (null !== u) {
												var d = u.memoizedState;
												if (null !== d) {
													var p = d.dehydrated;
													null !== p && Bn(p)
												}
											}
										}
										break;
									default:
										throw Error(a(163))
								}
								Bs || 512 & n.flags && Ks(n)
							} catch (e) {
								pc(n, n.return, e)
							}
						}
						if (n === e) {
							Gs = null;
							break
						}
						if (null !== (t = n.sibling)) {
							t.return = n.return, Gs = t;
							break
						}
						Gs = n.return
					}
				}

				function cl(e) {
					for (; null !== Gs;) {
						var n = Gs;
						if (n === e) {
							Gs = null;
							break
						}
						var t = n.sibling;
						if (null !== t) {
							t.return = n.return, Gs = t;
							break
						}
						Gs = n.return
					}
				}

				function ul(e) {
					for (; null !== Gs;) {
						var n = Gs;
						try {
							switch (n.tag) {
								case 0:
								case 11:
								case 15:
									var t = n.return;
									try {
										$s(4, n)
									} catch (e) {
										pc(n, t, e)
									}
									break;
								case 1:
									var r = n.stateNode;
									if ("function" == typeof r.componentDidMount) {
										var i = n.return;
										try {
											r.componentDidMount()
										} catch (e) {
											pc(n, i, e)
										}
									}
									var a = n.return;
									try {
										Ks(n)
									} catch (e) {
										pc(n, a, e)
									}
									break;
								case 5:
									var o = n.return;
									try {
										Ks(n)
									} catch (e) {
										pc(n, o, e)
									}
							}
						} catch (e) {
							pc(n, n.return, e)
						}
						if (n === e) {
							Gs = null;
							break
						}
						var s = n.sibling;
						if (null !== s) {
							s.return = n.return, Gs = s;
							break
						}
						Gs = n.return
					}
				}
				var dl, pl = Math.ceil,
					fl = y.ReactCurrentDispatcher,
					hl = y.ReactCurrentOwner,
					ml = y.ReactCurrentBatchConfig,
					gl = 0,
					vl = null,
					bl = null,
					xl = 0,
					yl = 0,
					wl = wi(0),
					jl = 0,
					kl = null,
					Nl = 0,
					El = 0,
					Sl = 0,
					Cl = null,
					Tl = null,
					Ol = 0,
					Al = 1 / 0,
					_l = !1,
					Rl = null,
					Il = null,
					Pl = !1,
					Ll = null,
					Ml = 0,
					Dl = 0,
					Ul = null,
					Fl = -1,
					zl = 0;

				function Hl() {
					return 0 != (6 & gl) ? Qe() : -1 !== Fl ? Fl : Fl = Qe()
				}

				function Bl(e) {
					return 0 == (1 & e.mode) ? 1 : 0 != (2 & gl) && 0 !== xl ? xl & -xl : null !== zi.transition ? (0 === zl && (e = un, 0 == (4194240 & (un <<= 1)) && (un = 64), zl = e), zl) : 0 !== (e = xn) ? e : e = void 0 === (e = window.event) ? 16 : $n(e.type)
				}

				function Wl(e, n, t) {
					if (50 < Dl) throw Dl = 0, Ul = null, Error(a(185));
					var r = Gl(e, n);
					return null === r ? null : (vn(r, n, t), 0 != (2 & gl) && r === vl || (r === vl && (0 == (2 & gl) && (El |= n), 4 === jl && $l(r, xl)), Yl(r, t), 1 === n && 0 === gl && 0 == (1 & e.mode) && (Al = Qe() + 500, Mi && Fi())), r)
				}

				function Gl(e, n) {
					e.lanes |= n;
					var t = e.alternate;
					for (null !== t && (t.lanes |= n), t = e, e = e.return; null !== e;) e.childLanes |= n, null !== (t = e.alternate) && (t.childLanes |= n), t = e, e = e.return;
					return 3 === t.tag ? t.stateNode : null
				}

				function Yl(e, n) {
					var t = e.callbackNode;
					! function(e, n) {
						for (var t = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
							var o = 31 - sn(a),
								s = 1 << o,
								l = i[o]; - 1 === l ? 0 != (s & t) && 0 == (s & r) || (i[o] = hn(s, n)) : l <= n && (e.expiredLanes |= s), a &= ~s
						}
					}(e, n);
					var r = fn(e, e === vl ? xl : 0);
					if (0 === r) null !== t && qe(t), e.callbackNode = null, e.callbackPriority = 0;
					else if (n = r & -r, e.callbackPriority !== n) {
						if (null != t && qe(t), 1 === n) 0 === e.tag ? function(e) {
							Mi = !0, Ui(e)
						}(Kl.bind(null, e)) : Ui(Kl.bind(null, e)), ri((function() {
							0 === gl && Fi()
						})), t = null;
						else {
							switch (yn(r)) {
								case 1:
									t = Je;
									break;
								case 4:
									t = en;
									break;
								case 16:
								default:
									t = nn;
									break;
								case 536870912:
									t = rn
							}
							t = vc(t, Xl.bind(null, e))
						}
						e.callbackPriority = n, e.callbackNode = t
					}
				}

				function Xl(e, n) {
					if (Fl = -1, zl = 0, 0 != (6 & gl)) throw Error(a(327));
					var t = e.callbackNode;
					if (uc() && e.callbackNode !== t) return null;
					var r = fn(e, e === vl ? xl : 0);
					if (0 === r) return null;
					if (0 != (30 & r) || 0 != (r & e.expiredLanes) || n) n = ic(e, r);
					else {
						n = r;
						var i = gl;
						gl |= 2;
						var o = tc();
						for (vl === e && xl === n || (Al = Qe() + 500, ec(e, n));;) try {
							oc();
							break
						} catch (n) {
							nc(e, n)
						}
						Xi(), fl.current = o, gl = i, null !== bl ? n = 0 : (vl = null, xl = 0, n = jl)
					}
					if (0 !== n) {
						if (2 === n && 0 !== (i = mn(e)) && (r = i, n = Vl(e, i)), 1 === n) throw t = kl, ec(e, 0), $l(e, r), Yl(e, Qe()), t;
						if (6 === n) $l(e, r);
						else {
							if (i = e.current.alternate, 0 == (30 & r) && ! function(e) {
								for (var n = e;;) {
									if (16384 & n.flags) {
										var t = n.updateQueue;
										if (null !== t && null !== (t = t.stores))
											for (var r = 0; r < t.length; r++) {
												var i = t[r],
													a = i.getSnapshot;
												i = i.value;
												try {
													if (!ar(a(), i)) return !1
												} catch (e) {
													return !1
												}
											}
									}
									if (t = n.child, 16384 & n.subtreeFlags && null !== t) t.return = n, n = t;
									else {
										if (n === e) break;
										for (; null === n.sibling;) {
											if (null === n.return || n.return === e) return !0;
											n = n.return
										}
										n.sibling.return = n.return, n = n.sibling
									}
								}
								return !0
							}(i) && (2 === (n = ic(e, r)) && 0 !== (o = mn(e)) && (r = o, n = Vl(e, o)), 1 === n)) throw t = kl, ec(e, 0), $l(e, r), Yl(e, Qe()), t;
							switch (e.finishedWork = i, e.finishedLanes = r, n) {
								case 0:
								case 1:
									throw Error(a(345));
								case 2:
								case 5:
									cc(e, Tl);
									break;
								case 3:
									if ($l(e, r), (130023424 & r) === r && 10 < (n = Ol + 500 - Qe())) {
										if (0 !== fn(e, 0)) break;
										if (((i = e.suspendedLanes) & r) !== r) {
											Hl(), e.pingedLanes |= e.suspendedLanes & i;
											break
										}
										e.timeoutHandle = ei(cc.bind(null, e, Tl), n);
										break
									}
									cc(e, Tl);
									break;
								case 4:
									if ($l(e, r), (4194240 & r) === r) break;
									for (n = e.eventTimes, i = -1; 0 < r;) {
										var s = 31 - sn(r);
										o = 1 << s, (s = n[s]) > i && (i = s), r &= ~o
									}
									if (r = i, 10 < (r = (120 > (r = Qe() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * pl(r / 1960)) - r)) {
										e.timeoutHandle = ei(cc.bind(null, e, Tl), r);
										break
									}
									cc(e, Tl);
									break;
								default:
									throw Error(a(329))
							}
						}
					}
					return Yl(e, Qe()), e.callbackNode === t ? Xl.bind(null, e) : null
				}

				function Vl(e, n) {
					var t = Cl;
					return e.current.memoizedState.isDehydrated && (ec(e, n)
						.flags |= 256), 2 !== (e = ic(e, n)) && (n = Tl, Tl = t, null !== n && ql(n)), e
				}

				function ql(e) {
					null === Tl ? Tl = e : Tl.push.apply(Tl, e)
				}

				function $l(e, n) {
					for (n &= ~Sl, n &= ~El, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n;) {
						var t = 31 - sn(n),
							r = 1 << t;
						e[t] = -1, n &= ~r
					}
				}

				function Kl(e) {
					if (0 != (6 & gl)) throw Error(a(327));
					uc();
					var n = fn(e, 0);
					if (0 == (1 & n)) return Yl(e, Qe()), null;
					var t = ic(e, n);
					if (0 !== e.tag && 2 === t) {
						var r = mn(e);
						0 !== r && (n = r, t = Vl(e, r))
					}
					if (1 === t) throw t = kl, ec(e, 0), $l(e, n), Yl(e, Qe()), t;
					if (6 === t) throw Error(a(345));
					return e.finishedWork = e.current.alternate, e.finishedLanes = n, cc(e, Tl), Yl(e, Qe()), null
				}

				function Ql(e, n) {
					var t = gl;
					gl |= 1;
					try {
						return e(n)
					} finally {
						0 === (gl = t) && (Al = Qe() + 500, Mi && Fi())
					}
				}

				function Zl(e) {
					null !== Ll && 0 === Ll.tag && 0 == (6 & gl) && uc();
					var n = gl;
					gl |= 1;
					var t = ml.transition,
						r = xn;
					try {
						if (ml.transition = null, xn = 1, e) return e()
					} finally {
						xn = r, ml.transition = t, 0 == (6 & (gl = n)) && Fi()
					}
				}

				function Jl() {
					yl = wl.current, ji(wl)
				}

				function ec(e, n) {
					e.finishedWork = null, e.finishedLanes = 0;
					var t = e.timeoutHandle;
					if (-1 !== t && (e.timeoutHandle = -1, ni(t)), null !== bl)
						for (t = bl.return; null !== t;) {
							var r = t;
							switch (Sa(r), r.tag) {
								case 1:
									null != (r = r.type.childContextTypes) && Ai();
									break;
								case 3:
									Qa(), ji(Si), ji(Ei), ro();
									break;
								case 5:
									Ja(r);
									break;
								case 4:
									Qa();
									break;
								case 13:
								case 19:
									ji(eo);
									break;
								case 10:
									Vi(r.type._context);
									break;
								case 22:
								case 23:
									Jl()
							}
							t = t.return
						}
					if (vl = e, bl = e = wc(e.current, null), xl = yl = n, jl = 0, kl = null, Sl = El = Nl = 0, Tl = Cl = null, null !== Qi) {
						for (n = 0; n < Qi.length; n++)
							if (null !== (r = (t = Qi[n])
								.interleaved)) {
								t.interleaved = null;
								var i = r.next,
									a = t.pending;
								if (null !== a) {
									var o = a.next;
									a.next = i, r.next = o
								}
								t.pending = r
							} Qi = null
					}
					return e
				}

				function nc(e, n) {
					for (;;) {
						var t = bl;
						try {
							if (Xi(), io.current = Zo, uo) {
								for (var r = so.memoizedState; null !== r;) {
									var i = r.queue;
									null !== i && (i.pending = null), r = r.next
								}
								uo = !1
							}
							if (oo = 0, co = lo = so = null, po = !1, fo = 0, hl.current = null, null === t || null === t.return) {
								jl = 1, kl = n, bl = null;
								break
							}
							e: {
								var o = e,
									s = t.return,
									l = t,
									c = n;
								if (n = xl, l.flags |= 32768, null !== c && "object" == typeof c && "function" == typeof c.then) {
									var u = c,
										d = l,
										p = d.tag;
									if (0 == (1 & d.mode) && (0 === p || 11 === p || 15 === p)) {
										var f = d.alternate;
										f ? (d.updateQueue = f.updateQueue, d.memoizedState = f.memoizedState, d.lanes = f.lanes) : (d.updateQueue = null, d.memoizedState = null)
									}
									var h = ds(s);
									if (null !== h) {
										h.flags &= -257, ps(h, s, l, 0, n), 1 & h.mode && us(o, u, n), c = u;
										var m = (n = h)
											.updateQueue;
										if (null === m) {
											var g = new Set;
											g.add(c), n.updateQueue = g
										} else m.add(c);
										break e
									}
									if (0 == (1 & n)) {
										us(o, u, n), rc();
										break e
									}
									c = Error(a(426))
								} else if (Oa && 1 & l.mode) {
									var v = ds(s);
									if (null !== v) {
										0 == (65536 & v.flags) && (v.flags |= 256), ps(v, s, l, 0, n), Ua(c);
										break e
									}
								}
								o = c,
								4 !== jl && (jl = 2),
								null === Cl ? Cl = [o] : Cl.push(o),
								c = ts(c, l),
								l = s;do {
									switch (l.tag) {
										case 3:
											l.flags |= 65536, n &= -n, l.lanes |= n, ia(l, ls(0, c, n));
											break e;
										case 1:
											o = c;
											var b = l.type,
												x = l.stateNode;
											if (0 == (128 & l.flags) && ("function" == typeof b.getDerivedStateFromError || null !== x && "function" == typeof x.componentDidCatch && (null === Il || !Il.has(x)))) {
												l.flags |= 65536, n &= -n, l.lanes |= n, ia(l, cs(l, o, n));
												break e
											}
									}
									l = l.return
								} while (null !== l)
							}
							lc(t)
						} catch (e) {
							n = e, bl === t && null !== t && (bl = t = t.return);
							continue
						}
						break
					}
				}

				function tc() {
					var e = fl.current;
					return fl.current = Zo, null === e ? Zo : e
				}

				function rc() {
					0 !== jl && 3 !== jl && 2 !== jl || (jl = 4), null === vl || 0 == (268435455 & Nl) && 0 == (268435455 & El) || $l(vl, xl)
				}

				function ic(e, n) {
					var t = gl;
					gl |= 2;
					var r = tc();
					for (vl === e && xl === n || ec(e, n);;) try {
						ac();
						break
					} catch (n) {
						nc(e, n)
					}
					if (Xi(), gl = t, fl.current = r, null !== bl) throw Error(a(261));
					return vl = null, xl = 0, jl
				}

				function ac() {
					for (; null !== bl;) sc(bl)
				}

				function oc() {
					for (; null !== bl && !$e();) sc(bl)
				}

				function sc(e) {
					var n = dl(e.alternate, e, yl);
					e.memoizedProps = e.pendingProps, null === n ? lc(e) : bl = n, hl.current = null
				}

				function lc(e) {
					var n = e;
					do {
						var t = n.alternate;
						if (e = n.return, 0 == (32768 & n.flags)) {
							if (null !== (t = ms(t, n, yl))) return void(bl = t)
						} else {
							if (null !== (t = zs(t, n))) return t.flags &= 32767, void(bl = t);
							if (null === e) return jl = 6, void(bl = null);
							e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
						}
						if (null !== (n = n.sibling)) return void(bl = n);
						bl = n = e
					} while (null !== n);
					0 === jl && (jl = 5)
				}

				function cc(e, n) {
					var t = xn,
						r = ml.transition;
					try {
						ml.transition = null, xn = 1,
							function(e, n, t) {
								do {
									uc()
								} while (null !== Ll);
								if (0 != (6 & gl)) throw Error(a(327));
								var r = e.finishedWork,
									i = e.finishedLanes;
								if (null === r) return null;
								if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(a(177));
								e.callbackNode = null, e.callbackPriority = 0;
								var o = r.lanes | r.childLanes;
								if (function(e, n) {
									var t = e.pendingLanes & ~n;
									e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
									var r = e.eventTimes;
									for (e = e.expirationTimes; 0 < t;) {
										var i = 31 - sn(t),
											a = 1 << i;
										n[i] = 0, r[i] = -1, e[i] = -1, t &= ~a
									}
								}(e, o), e === vl && (bl = vl = null, xl = 0), 0 == (2064 & r.subtreeFlags) && 0 == (2064 & r.flags) || Pl || (Pl = !0, vc(nn, (function() {
									return uc(), null
								}))), o = 0 != (15990 & r.flags), 0 != (15990 & r.subtreeFlags) || o) {
									o = ml.transition, ml.transition = null;
									var s = xn;
									xn = 1;
									var l = gl;
									gl |= 4, hl.current = null,
										function(e, n) {
											if (dr(e = ur())) {
												if ("selectionStart" in e) var t = {
													start: e.selectionStart,
													end: e.selectionEnd
												};
												else e: {
													var r = (t = (t = e.ownerDocument) && t.defaultView || window)
														.getSelection && t.getSelection();
													if (r && 0 !== r.rangeCount) {
														t = r.anchorNode;
														var i = r.anchorOffset,
															o = r.focusNode;
														r = r.focusOffset;
														try {
															t.nodeType, o.nodeType
														} catch (e) {
															t = null;
															break e
														}
														var s = 0,
															l = -1,
															c = -1,
															u = 0,
															d = 0,
															p = e,
															f = null;
														n: for (;;) {
															for (var h; p !== t || 0 !== i && 3 !== p.nodeType || (l = s + i), p !== o || 0 !== r && 3 !== p.nodeType || (c = s + r), 3 === p.nodeType && (s += p.nodeValue.length), null !== (h = p.firstChild);) f = p, p = h;
															for (;;) {
																if (p === e) break n;
																if (f === t && ++u === i && (l = s), f === o && ++d === r && (c = s), null !== (h = p.nextSibling)) break;
																f = (p = f)
																	.parentNode
															}
															p = h
														}
														t = -1 === l || -1 === c ? null : {
															start: l,
															end: c
														}
													} else t = null
												}
												t = t || {
													start: 0,
													end: 0
												}
											} else t = null;
											for (Zr = {
												focusedElem: e,
												selectionRange: t
											}, Gs = n; null !== Gs;)
												if (e = (n = Gs)
													.child, 0 != (1028 & n.subtreeFlags) && null !== e) e.return = n, Gs = e;
												else
													for (; null !== Gs;) {
														n = Gs;
														try {
															var m = n.alternate;
															if (0 != (1024 & n.flags)) switch (n.tag) {
																case 0:
																case 11:
																case 15:
																case 5:
																case 6:
																case 4:
																case 17:
																	break;
																case 1:
																	if (null !== m) {
																		var g = m.memoizedProps,
																			v = m.memoizedState,
																			b = n.stateNode,
																			x = b.getSnapshotBeforeUpdate(n.elementType === n.type ? g : Hi(n.type, g), v);
																		b.__reactInternalSnapshotBeforeUpdate = x
																	}
																	break;
																case 3:
																	var y = n.stateNode.containerInfo;
																	if (1 === y.nodeType) y.textContent = "";
																	else if (9 === y.nodeType) {
																		var w = y.body;
																		null != w && (w.textContent = "")
																	}
																	break;
																default:
																	throw Error(a(163))
															}
														} catch (e) {
															pc(n, n.return, e)
														}
														if (null !== (e = n.sibling)) {
															e.return = n.return, Gs = e;
															break
														}
														Gs = n.return
													}
											m = Vs, Vs = !1
										}(e, r),
										function(e, n) {
											for (Gs = n; null !== Gs;) {
												var t = (n = Gs)
													.deletions;
												if (null !== t)
													for (var r = 0; r < t.length; r++) {
														var i = t[r];
														try {
															il(e, i, n);
															var a = i.alternate;
															null !== a && (a.return = null), i.return = null
														} catch (e) {
															pc(i, n, e)
														}
													}
												if (t = n.child, 0 != (12854 & n.subtreeFlags) && null !== t) t.return = n, Gs = t;
												else
													for (; null !== Gs;) {
														n = Gs;
														try {
															var o = n.flags;
															if (32 & o && pe(n.stateNode, ""), 512 & o) {
																var s = n.alternate;
																if (null !== s) {
																	var l = s.ref;
																	null !== l && ("function" == typeof l ? l(null) : l.current = null)
																}
															}
															if (8192 & o) switch (n.tag) {
																case 13:
																	if (null !== n.memoizedState) {
																		var c = n.alternate;
																		null !== c && null !== c.memoizedState || (Ol = Qe())
																	}
																	break;
																case 22:
																	var u = null !== n.memoizedState,
																		d = n.alternate,
																		p = null !== d && null !== d.memoizedState;
																	e: {
																		i = u;
																		for (var f = null, h = r = t = n;;) {
																			if (5 === h.tag) {
																				if (null === f) {
																					f = h;
																					var m = h.stateNode;
																					if (i) {
																						var g = m.style;
																						"function" == typeof g.setProperty ? g.setProperty("display", "none", "important") : g.display = "none"
																					} else {
																						var v = h.stateNode,
																							b = h.memoizedProps.style,
																							x = null != b && b.hasOwnProperty("display") ? b.display : null;
																						v.style.display = me("display", x)
																					}
																				}
																			} else if (6 === h.tag) null === f && (h.stateNode.nodeValue = i ? "" : h.memoizedProps);
																			else if ((22 !== h.tag && 23 !== h.tag || null === h.memoizedState || h === r) && null !== h.child) {
																				h.child.return = h, h = h.child;
																				continue
																			}
																			if (h === r) break;
																			for (; null === h.sibling;) {
																				if (null === h.return || h.return === r) break e;
																				f === h && (f = null), h = h.return
																			}
																			f === h && (f = null), h.sibling.return = h.return, h = h.sibling
																		}
																	}
																	if (u && !p && 0 != (1 & t.mode)) {
																		Gs = t;
																		for (var y = t.child; null !== y;) {
																			for (t = Gs = y; null !== Gs;) {
																				var w = (r = Gs)
																					.child;
																				switch (r.tag) {
																					case 0:
																					case 11:
																					case 14:
																					case 15:
																						qs(4, r, r.return);
																						break;
																					case 1:
																						Ys(r, r.return);
																						var j = r.stateNode;
																						if ("function" == typeof j.componentWillUnmount) {
																							var k = r.return;
																							try {
																								j.props = r.memoizedProps, j.state = r.memoizedState, j.componentWillUnmount()
																							} catch (e) {
																								pc(r, k, e)
																							}
																						}
																						break;
																					case 5:
																						Ys(r, r.return);
																						break;
																					case 22:
																						if (null !== r.memoizedState) {
																							cl(t);
																							continue
																						}
																				}
																				null !== w ? (w.return = r, Gs = w) : cl(t)
																			}
																			y = y.sibling
																		}
																	}
															}
															switch (4102 & o) {
																case 2:
																	nl(n), n.flags &= -3;
																	break;
																case 6:
																	nl(n), n.flags &= -3, al(n.alternate, n);
																	break;
																case 4096:
																	n.flags &= -4097;
																	break;
																case 4100:
																	n.flags &= -4097, al(n.alternate, n);
																	break;
																case 4:
																	al(n.alternate, n)
															}
														} catch (e) {
															pc(n, n.return, e)
														}
														if (null !== (t = n.sibling)) {
															t.return = n.return, Gs = t;
															break
														}
														Gs = n.return
													}
											}
										}(e, r), pr(Zr), Zr = null, e.current = r, ol(r, e, i), Ke(), gl = l, xn = s, ml.transition = o
								} else e.current = r;
								if (Pl && (Pl = !1, Ll = e, Ml = i), 0 === (o = e.pendingLanes) && (Il = null), function(e) {
									if (on && "function" == typeof on.onCommitFiberRoot) try {
										on.onCommitFiberRoot(an, e, void 0, 128 == (128 & e.current.flags))
									} catch (e) {}
								}(r.stateNode), Yl(e, Qe()), null !== n)
									for (t = e.onRecoverableError, r = 0; r < n.length; r++) t(n[r]);
								if (_l) throw _l = !1, e = Rl, Rl = null, e;
								0 != (1 & Ml) && 0 !== e.tag && uc(), 0 != (1 & (o = e.pendingLanes)) ? e === Ul ? Dl++ : (Dl = 0, Ul = e) : Dl = 0, Fi()
							}(e, n, t)
					} finally {
						ml.transition = r, xn = t
					}
					return null
				}

				function uc() {
					if (null !== Ll) {
						var e = yn(Ml),
							n = ml.transition,
							t = xn;
						try {
							if (ml.transition = null, xn = 16 > e ? 16 : e, null === Ll) var r = !1;
							else {
								if (e = Ll, Ll = null, Ml = 0, 0 != (6 & gl)) throw Error(a(331));
								var i = gl;
								for (gl |= 4, Gs = e.current; null !== Gs;) {
									var o = Gs,
										s = o.child;
									if (0 != (16 & Gs.flags)) {
										var l = o.deletions;
										if (null !== l) {
											for (var c = 0; c < l.length; c++) {
												var u = l[c];
												for (Gs = u; null !== Gs;) {
													var d = Gs;
													switch (d.tag) {
														case 0:
														case 11:
														case 15:
															qs(8, d, o)
													}
													var p = d.child;
													if (null !== p) p.return = d, Gs = p;
													else
														for (; null !== Gs;) {
															var f = (d = Gs)
																.sibling,
																h = d.return;
															if (Zs(d), d === u) {
																Gs = null;
																break
															}
															if (null !== f) {
																f.return = h, Gs = f;
																break
															}
															Gs = h
														}
												}
											}
											var m = o.alternate;
											if (null !== m) {
												var g = m.child;
												if (null !== g) {
													m.child = null;
													do {
														var v = g.sibling;
														g.sibling = null, g = v
													} while (null !== g)
												}
											}
											Gs = o
										}
									}
									if (0 != (2064 & o.subtreeFlags) && null !== s) s.return = o, Gs = s;
									else e: for (; null !== Gs;) {
										if (0 != (2048 & (o = Gs)
											.flags)) switch (o.tag) {
											case 0:
											case 11:
											case 15:
												qs(9, o, o.return)
										}
										var b = o.sibling;
										if (null !== b) {
											b.return = o.return, Gs = b;
											break e
										}
										Gs = o.return
									}
								}
								var x = e.current;
								for (Gs = x; null !== Gs;) {
									var y = (s = Gs)
										.child;
									if (0 != (2064 & s.subtreeFlags) && null !== y) y.return = s, Gs = y;
									else e: for (s = x; null !== Gs;) {
										if (0 != (2048 & (l = Gs)
											.flags)) try {
											switch (l.tag) {
												case 0:
												case 11:
												case 15:
													$s(9, l)
											}
										} catch (e) {
											pc(l, l.return, e)
										}
										if (l === s) {
											Gs = null;
											break e
										}
										var w = l.sibling;
										if (null !== w) {
											w.return = l.return, Gs = w;
											break e
										}
										Gs = l.return
									}
								}
								if (gl = i, Fi(), on && "function" == typeof on.onPostCommitFiberRoot) try {
									on.onPostCommitFiberRoot(an, e)
								} catch (e) {}
								r = !0
							}
							return r
						} finally {
							xn = t, ml.transition = n
						}
					}
					return !1
				}

				function dc(e, n, t) {
					ta(e, n = ls(0, n = ts(t, n), 1)), n = Hl(), null !== (e = Gl(e, 1)) && (vn(e, 1, n), Yl(e, n))
				}

				function pc(e, n, t) {
					if (3 === e.tag) dc(e, e, t);
					else
						for (; null !== n;) {
							if (3 === n.tag) {
								dc(n, e, t);
								break
							}
							if (1 === n.tag) {
								var r = n.stateNode;
								if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Il || !Il.has(r))) {
									ta(n, e = cs(n, e = ts(t, e), 1)), e = Hl(), null !== (n = Gl(n, 1)) && (vn(n, 1, e), Yl(n, e));
									break
								}
							}
							n = n.return
						}
				}

				function fc(e, n, t) {
					var r = e.pingCache;
					null !== r && r.delete(n), n = Hl(), e.pingedLanes |= e.suspendedLanes & t, vl === e && (xl & t) === t && (4 === jl || 3 === jl && (130023424 & xl) === xl && 500 > Qe() - Ol ? ec(e, 0) : Sl |= t), Yl(e, n)
				}

				function hc(e, n) {
					0 === n && (0 == (1 & e.mode) ? n = 1 : (n = dn, 0 == (130023424 & (dn <<= 1)) && (dn = 4194304)));
					var t = Hl();
					null !== (e = Gl(e, n)) && (vn(e, n, t), Yl(e, t))
				}

				function mc(e) {
					var n = e.memoizedState,
						t = 0;
					null !== n && (t = n.retryLane), hc(e, t)
				}

				function gc(e, n) {
					var t = 0;
					switch (e.tag) {
						case 13:
							var r = e.stateNode,
								i = e.memoizedState;
							null !== i && (t = i.retryLane);
							break;
						case 19:
							r = e.stateNode;
							break;
						default:
							throw Error(a(314))
					}
					null !== r && r.delete(n), hc(e, t)
				}

				function vc(e, n) {
					return Ve(e, n)
				}

				function bc(e, n, t, r) {
					this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
				}

				function xc(e, n, t, r) {
					return new bc(e, n, t, r)
				}

				function yc(e) {
					return !(!(e = e.prototype) || !e.isReactComponent)
				}

				function wc(e, n) {
					var t = e.alternate;
					return null === t ? ((t = xc(e.tag, n, e.key, e.mode))
						.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = 14680064 & e.flags, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = null === n ? null : {
						lanes: n.lanes,
						firstContext: n.firstContext
					}, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t
				}

				function jc(e, n, t, r, i, o) {
					var s = 2;
					if (r = e, "function" == typeof e) yc(e) && (s = 1);
					else if ("string" == typeof e) s = 5;
					else e: switch (e) {
						case k:
							return kc(t.children, i, o, n);
						case N:
							s = 8, i |= 8;
							break;
						case E:
							return (e = xc(12, t, n, 2 | i))
								.elementType = E, e.lanes = o, e;
						case O:
							return (e = xc(13, t, n, i))
								.elementType = O, e.lanes = o, e;
						case A:
							return (e = xc(19, t, n, i))
								.elementType = A, e.lanes = o, e;
						case I:
							return Nc(t, i, o, n);
						default:
							if ("object" == typeof e && null !== e) switch (e.$$typeof) {
								case S:
									s = 10;
									break e;
								case C:
									s = 9;
									break e;
								case T:
									s = 11;
									break e;
								case _:
									s = 14;
									break e;
								case R:
									s = 16, r = null;
									break e
							}
							throw Error(a(130, null == e ? e : typeof e, ""))
					}
					return (n = xc(s, t, n, i))
						.elementType = e, n.type = r, n.lanes = o, n
				}

				function kc(e, n, t, r) {
					return (e = xc(7, e, r, n))
						.lanes = t, e
				}

				function Nc(e, n, t, r) {
					return (e = xc(22, e, r, n))
						.elementType = I, e.lanes = t, e.stateNode = {}, e
				}

				function Ec(e, n, t) {
					return (e = xc(6, e, null, n))
						.lanes = t, e
				}

				function Sc(e, n, t) {
					return (n = xc(4, null !== e.children ? e.children : [], e.key, n))
						.lanes = t, n.stateNode = {
							containerInfo: e.containerInfo,
							pendingChildren: null,
							implementation: e.implementation
						}, n
				}

				function Cc(e, n, t, r, i) {
					this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gn(0), this.expirationTimes = gn(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gn(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
				}

				function Tc(e, n, t, r, i, a, o, s, l) {
					return e = new Cc(e, n, t, s, l), 1 === n ? (n = 1, !0 === a && (n |= 8)) : n = 0, a = xc(3, null, null, n), e.current = a, a.stateNode = e, a.memoizedState = {
						element: r,
						isDehydrated: t,
						cache: null,
						transitions: null
					}, Ji(a), e
				}

				function Oc(e, n, t) {
					var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
					return {
						$$typeof: j,
						key: null == r ? null : "" + r,
						children: e,
						containerInfo: n,
						implementation: t
					}
				}

				function Ac(e) {
					if (!e) return Ni;
					e: {
						if (Be(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(a(170));
						var n = e;do {
							switch (n.tag) {
								case 3:
									n = n.stateNode.context;
									break e;
								case 1:
									if (Oi(n.type)) {
										n = n.stateNode.__reactInternalMemoizedMergedChildContext;
										break e
									}
							}
							n = n.return
						} while (null !== n);
						throw Error(a(171))
					}
					if (1 === e.tag) {
						var t = e.type;
						if (Oi(t)) return Ri(e, t, n)
					}
					return n
				}

				function _c(e, n, t, r, i, a, o, s, l) {
					return (e = Tc(t, r, !0, e, 0, a, 0, s, l))
						.context = Ac(null), t = e.current, (a = na(r = Hl(), i = Bl(t)))
						.callback = null != n ? n : null, ta(t, a), e.current.lanes = i, vn(e, i, r), Yl(e, r), e
				}

				function Rc(e, n, t, r) {
					var i = n.current,
						a = Hl(),
						o = Bl(i);
					return t = Ac(t), null === n.context ? n.context = t : n.pendingContext = t, (n = na(a, o))
						.payload = {
							element: e
						}, null !== (r = void 0 === r ? null : r) && (n.callback = r), ta(i, n), null !== (e = Wl(i, o, a)) && ra(e, i, o), o
				}

				function Ic(e) {
					return (e = e.current)
						.child ? (e.child.tag, e.child.stateNode) : null
				}

				function Pc(e, n) {
					if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
						var t = e.retryLane;
						e.retryLane = 0 !== t && t < n ? t : n
					}
				}

				function Lc(e, n) {
					Pc(e, n), (e = e.alternate) && Pc(e, n)
				}
				dl = function(e, n, t) {
					if (null !== e)
						if (e.memoizedProps !== n.pendingProps || Si.current) vs = !0;
						else {
							if (0 == (e.lanes & t) && 0 == (128 & n.flags)) return vs = !1,
								function(e, n, t) {
									switch (n.tag) {
										case 3:
											Cs(n), Da();
											break;
										case 5:
											Za(n);
											break;
										case 1:
											Oi(n.type) && Ii(n);
											break;
										case 4:
											Ka(n, n.stateNode.containerInfo);
											break;
										case 10:
											var r = n.type._context,
												i = n.memoizedProps.value;
											ki(Bi, r._currentValue), r._currentValue = i;
											break;
										case 13:
											if (null !== (r = n.memoizedState)) return null !== r.dehydrated ? (ki(eo, 1 & eo.current), n.flags |= 128, null) : 0 != (t & n.child.childLanes) ? _s(e, n, t) : (ki(eo, 1 & eo.current), null !== (e = Fs(e, n, t)) ? e.sibling : null);
											ki(eo, 1 & eo.current);
											break;
										case 19:
											if (r = 0 != (t & n.childLanes), 0 != (128 & e.flags)) {
												if (r) return Us(e, n, t);
												n.flags |= 128
											}
											if (null !== (i = n.memoizedState) && (i.rendering = null, i.tail = null, i.lastEffect = null), ki(eo, eo.current), r) break;
											return null;
										case 22:
										case 23:
											return n.lanes = 0, js(e, n, t)
									}
									return Fs(e, n, t)
								}(e, n, t);
							vs = 0 != (131072 & e.flags)
						}
					else vs = !1, Oa && 0 != (1048576 & n.flags) && Na(n, va, n.index);
					switch (n.lanes = 0, n.tag) {
						case 2:
							var r = n.type;
							null !== e && (e.alternate = null, n.alternate = null, n.flags |= 2), e = n.pendingProps;
							var i = Ti(n, Ei.current);
							$i(n, t), i = vo(null, n, r, e, i, t);
							var o = bo();
							return n.flags |= 1, "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Oi(r) ? (o = !0, Ii(n)) : o = !1, n.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, Ji(n), i.updater = ca, n.stateNode = i, i._reactInternals = n, fa(n, r, e, t), n = Ss(null, n, r, !0, o, t)) : (n.tag = 0, Oa && o && Ea(n), bs(null, n, i, t), n = n.child), n;
						case 16:
							r = n.elementType;
							e: {
								switch (null !== e && (e.alternate = null, n.alternate = null, n.flags |= 2), e = n.pendingProps, r = (i = r._init)(r._payload), n.type = r, i = n.tag = function(e) {
									if ("function" == typeof e) return yc(e) ? 1 : 0;
									if (null != e) {
										if ((e = e.$$typeof) === T) return 11;
										if (e === _) return 14
									}
									return 2
								}(r), e = Hi(r, e), i) {
									case 0:
										n = Ns(null, n, r, e, t);
										break e;
									case 1:
										n = Es(null, n, r, e, t);
										break e;
									case 11:
										n = xs(null, n, r, e, t);
										break e;
									case 14:
										n = ys(null, n, r, Hi(r.type, e), t);
										break e
								}
								throw Error(a(306, r, ""))
							}
							return n;
						case 0:
							return r = n.type, i = n.pendingProps, Ns(e, n, r, i = n.elementType === r ? i : Hi(r, i), t);
						case 1:
							return r = n.type, i = n.pendingProps, Es(e, n, r, i = n.elementType === r ? i : Hi(r, i), t);
						case 3:
							e: {
								if (Cs(n), null === e) throw Error(a(387));r = n.pendingProps,
								i = (o = n.memoizedState)
								.element,
								ea(e, n),
								aa(n, r, null, t);
								var s = n.memoizedState;
								if (r = s.element, o.isDehydrated) {
									if (o = {
										element: r,
										isDehydrated: !1,
										cache: s.cache,
										transitions: s.transitions
									}, n.updateQueue.baseState = o, n.memoizedState = o, 256 & n.flags) {
										n = Ts(e, n, r, t, i = Error(a(423)));
										break e
									}
									if (r !== i) {
										n = Ts(e, n, r, t, i = Error(a(424)));
										break e
									}
									for (Ta = oi(n.stateNode.containerInfo.firstChild), Ca = n, Oa = !0, Aa = null, t = Ga(n, null, r, t), n.child = t; t;) t.flags = -3 & t.flags | 4096, t = t.sibling
								} else {
									if (Da(), r === i) {
										n = Fs(e, n, t);
										break e
									}
									bs(e, n, r, t)
								}
								n = n.child
							}
							return n;
						case 5:
							return Za(n), null === e && Pa(n), r = n.type, i = n.pendingProps, o = null !== e ? e.memoizedProps : null, s = i.children, Jr(r, i) ? s = null : null !== o && Jr(r, o) && (n.flags |= 32), ks(e, n), bs(e, n, s, t), n.child;
						case 6:
							return null === e && Pa(n), null;
						case 13:
							return _s(e, n, t);
						case 4:
							return Ka(n, n.stateNode.containerInfo), r = n.pendingProps, null === e ? n.child = Wa(n, null, r, t) : bs(e, n, r, t), n.child;
						case 11:
							return r = n.type, i = n.pendingProps, xs(e, n, r, i = n.elementType === r ? i : Hi(r, i), t);
						case 7:
							return bs(e, n, n.pendingProps, t), n.child;
						case 8:
						case 12:
							return bs(e, n, n.pendingProps.children, t), n.child;
						case 10:
							e: {
								if (r = n.type._context, i = n.pendingProps, o = n.memoizedProps, s = i.value, ki(Bi, r._currentValue), r._currentValue = s, null !== o)
									if (ar(o.value, s)) {
										if (o.children === i.children && !Si.current) {
											n = Fs(e, n, t);
											break e
										}
									} else
										for (null !== (o = n.child) && (o.return = n); null !== o;) {
											var l = o.dependencies;
											if (null !== l) {
												s = o.child;
												for (var c = l.firstContext; null !== c;) {
													if (c.context === r) {
														if (1 === o.tag) {
															(c = na(-1, t & -t))
															.tag = 2;
															var u = o.updateQueue;
															if (null !== u) {
																var d = (u = u.shared)
																	.pending;
																null === d ? c.next = c : (c.next = d.next, d.next = c), u.pending = c
															}
														}
														o.lanes |= t, null !== (c = o.alternate) && (c.lanes |= t), qi(o.return, t, n), l.lanes |= t;
														break
													}
													c = c.next
												}
											} else if (10 === o.tag) s = o.type === n.type ? null : o.child;
											else if (18 === o.tag) {
												if (null === (s = o.return)) throw Error(a(341));
												s.lanes |= t, null !== (l = s.alternate) && (l.lanes |= t), qi(s, t, n), s = o.sibling
											} else s = o.child;
											if (null !== s) s.return = o;
											else
												for (s = o; null !== s;) {
													if (s === n) {
														s = null;
														break
													}
													if (null !== (o = s.sibling)) {
														o.return = s.return, s = o;
														break
													}
													s = s.return
												}
											o = s
										}
								bs(e, n, i.children, t),
								n = n.child
							}
							return n;
						case 9:
							return i = n.type, r = n.pendingProps.children, $i(n, t), r = r(i = Ki(i)), n.flags |= 1, bs(e, n, r, t), n.child;
						case 14:
							return i = Hi(r = n.type, n.pendingProps), ys(e, n, r, i = Hi(r.type, i), t);
						case 15:
							return ws(e, n, n.type, n.pendingProps, t);
						case 17:
							return r = n.type, i = n.pendingProps, i = n.elementType === r ? i : Hi(r, i), null !== e && (e.alternate = null, n.alternate = null, n.flags |= 2), n.tag = 1, Oi(r) ? (e = !0, Ii(n)) : e = !1, $i(n, t), da(n, r, i), fa(n, r, i, t), Ss(null, n, r, !0, e, t);
						case 19:
							return Us(e, n, t);
						case 22:
							return js(e, n, t)
					}
					throw Error(a(156, n.tag))
				};
				var Mc = "function" == typeof reportError ? reportError : function(e) {
					console.error(e)
				};

				function Dc(e) {
					this._internalRoot = e
				}

				function Uc(e) {
					this._internalRoot = e
				}

				function Fc(e) {
					return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
				}

				function zc(e) {
					return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
				}

				function Hc() {}

				function Bc(e, n, t, r, i) {
					var a = t._reactRootContainer;
					if (a) {
						var o = a;
						if ("function" == typeof i) {
							var s = i;
							i = function() {
								var e = Ic(o);
								s.call(e)
							}
						}
						Rc(n, o, e, i)
					} else o = function(e, n, t, r, i) {
						if (i) {
							if ("function" == typeof r) {
								var a = r;
								r = function() {
									var e = Ic(o);
									a.call(e)
								}
							}
							var o = _c(n, r, e, 0, null, !1, 0, "", Hc);
							return e._reactRootContainer = o, e[di] = o.current, zr(8 === e.nodeType ? e.parentNode : e), Zl(), o
						}
						for (; i = e.lastChild;) e.removeChild(i);
						if ("function" == typeof r) {
							var s = r;
							r = function() {
								var e = Ic(l);
								s.call(e)
							}
						}
						var l = Tc(e, 0, !1, null, 0, !1, 0, "", Hc);
						return e._reactRootContainer = l, e[di] = l.current, zr(8 === e.nodeType ? e.parentNode : e), Zl((function() {
							Rc(n, l, t, r)
						})), l
					}(t, n, e, i, r);
					return Ic(o)
				}
				Uc.prototype.render = Dc.prototype.render = function(e) {
					var n = this._internalRoot;
					if (null === n) throw Error(a(409));
					Rc(e, n, null, null)
				}, Uc.prototype.unmount = Dc.prototype.unmount = function() {
					var e = this._internalRoot;
					if (null !== e) {
						this._internalRoot = null;
						var n = e.containerInfo;
						Zl((function() {
							Rc(null, e, null, null)
						})), n[di] = null
					}
				}, Uc.prototype.unstable_scheduleHydration = function(e) {
					if (e) {
						var n = Nn();
						e = {
							blockedOn: null,
							target: e,
							priority: n
						};
						for (var t = 0; t < In.length && 0 !== n && n < In[t].priority; t++);
						In.splice(t, 0, e), 0 === t && Dn(e)
					}
				}, wn = function(e) {
					switch (e.tag) {
						case 3:
							var n = e.stateNode;
							if (n.current.memoizedState.isDehydrated) {
								var t = pn(n.pendingLanes);
								0 !== t && (bn(n, 1 | t), Yl(n, Qe()), 0 == (6 & gl) && (Al = Qe() + 500, Fi()))
							}
							break;
						case 13:
							var r = Hl();
							Zl((function() {
								return Wl(e, 1, r)
							})), Lc(e, 1)
					}
				}, jn = function(e) {
					13 === e.tag && (Wl(e, 134217728, Hl()), Lc(e, 134217728))
				}, kn = function(e) {
					if (13 === e.tag) {
						var n = Hl(),
							t = Bl(e);
						Wl(e, t, n), Lc(e, t)
					}
				}, Nn = function() {
					return xn
				}, En = function(e, n) {
					var t = xn;
					try {
						return xn = e, n()
					} finally {
						xn = t
					}
				}, je = function(e, n, t) {
					switch (n) {
						case "input":
							if (Z(e, t), n = t.name, "radio" === t.type && null != n) {
								for (t = e; t.parentNode;) t = t.parentNode;
								for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
									var r = t[n];
									if (r !== e && r.form === e.form) {
										var i = bi(r);
										if (!i) throw Error(a(90));
										V(r), Z(r, i)
									}
								}
							}
							break;
						case "textarea":
							ae(e, t);
							break;
						case "select":
							null != (n = t.value) && te(e, !!t.multiple, n, !1)
					}
				}, Te = Ql, Oe = Zl;
				var Wc = {
						usingClientEntryPoint: !1,
						Events: [gi, vi, bi, Se, Ce, Ql]
					},
					Gc = {
						findFiberByHostInstance: mi,
						bundleType: 0,
						version: "18.0.0-fc46dba67-20220329",
						rendererPackageName: "react-dom"
					},
					Yc = {
						bundleType: Gc.bundleType,
						version: Gc.version,
						rendererPackageName: Gc.rendererPackageName,
						rendererConfig: Gc.rendererConfig,
						overrideHookState: null,
						overrideHookStateDeletePath: null,
						overrideHookStateRenamePath: null,
						overrideProps: null,
						overridePropsDeletePath: null,
						overridePropsRenamePath: null,
						setErrorHandler: null,
						setSuspenseHandler: null,
						scheduleUpdate: null,
						currentDispatcherRef: y.ReactCurrentDispatcher,
						findHostInstanceByFiber: function(e) {
							return null === (e = Ye(e)) ? null : e.stateNode
						},
						findFiberByHostInstance: Gc.findFiberByHostInstance || function() {
							return null
						},
						findHostInstancesForRefresh: null,
						scheduleRefresh: null,
						scheduleRoot: null,
						setRefreshHandler: null,
						getCurrentFiber: null,
						reconcilerVersion: "18.0.0-fc46dba67-20220329"
					};
				if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
					var Xc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (!Xc.isDisabled && Xc.supportsFiber) try {
						an = Xc.inject(Yc), on = Xc
					} catch (ue) {}
				}
				n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wc, n.createPortal = function(e, n) {
					var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
					if (!Fc(n)) throw Error(a(200));
					return Oc(e, n, null, t)
				}, n.createRoot = function(e, n) {
					if (!Fc(e)) throw Error(a(299));
					var t = !1,
						r = "",
						i = Mc;
					return null != n && (!0 === n.unstable_strictMode && (t = !0), void 0 !== n.identifierPrefix && (r = n.identifierPrefix), void 0 !== n.onRecoverableError && (i = n.onRecoverableError)), n = Tc(e, 1, !1, null, 0, t, 0, r, i), e[di] = n.current, zr(8 === e.nodeType ? e.parentNode : e), new Dc(n)
				}, n.findDOMNode = function(e) {
					if (null == e) return null;
					if (1 === e.nodeType) return e;
					var n = e._reactInternals;
					if (void 0 === n) {
						if ("function" == typeof e.render) throw Error(a(188));
						throw e = Object.keys(e)
							.join(","), Error(a(268, e))
					}
					return null === (e = Ye(n)) ? null : e.stateNode
				}, n.flushSync = function(e) {
					return Zl(e)
				}, n.hydrate = function(e, n, t) {
					if (!zc(n)) throw Error(a(200));
					return Bc(null, e, n, !0, t)
				}, n.hydrateRoot = function(e, n, t) {
					if (!Fc(e)) throw Error(a(405));
					var r = null != t && t.hydratedSources || null,
						i = !1,
						o = "",
						s = Mc;
					if (null != t && (!0 === t.unstable_strictMode && (i = !0), void 0 !== t.identifierPrefix && (o = t.identifierPrefix), void 0 !== t.onRecoverableError && (s = t.onRecoverableError)), n = _c(n, null, e, 1, null != t ? t : null, i, 0, o, s), e[di] = n.current, zr(e), r)
						for (e = 0; e < r.length; e++) i = (i = (t = r[e])
							._getVersion)(t._source), null == n.mutableSourceEagerHydrationData ? n.mutableSourceEagerHydrationData = [t, i] : n.mutableSourceEagerHydrationData.push(t, i);
					return new Uc(n)
				}, n.render = function(e, n, t) {
					if (!zc(n)) throw Error(a(200));
					return Bc(null, e, n, !1, t)
				}, n.unmountComponentAtNode = function(e) {
					if (!zc(e)) throw Error(a(40));
					return !!e._reactRootContainer && (Zl((function() {
						Bc(null, null, e, !1, (function() {
							e._reactRootContainer = null, e[di] = null
						}))
					})), !0)
				}, n.unstable_batchedUpdates = Ql, n.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
					if (!zc(t)) throw Error(a(200));
					if (null == e || void 0 === e._reactInternals) throw Error(a(38));
					return Bc(e, n, t, !1, r)
				}, n.version = "18.0.0-fc46dba67-20220329"
			},
			745: (e, n, t) => {
				"use strict";
				var r = t(3935);
				n.s = r.createRoot, r.hydrateRoot
			},
			3935: (e, n, t) => {
				"use strict";
				! function e() {
					if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
						__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
					} catch (e) {
						console.error(e)
					}
				}(), e.exports = t(4448)
			},
			9921: (e, n) => {
				"use strict";
				var t = 60103,
					r = 60106,
					i = 60107,
					a = 60108,
					o = 60114,
					s = 60109,
					l = 60110,
					c = 60112,
					u = 60113,
					d = 60120,
					p = 60115,
					f = 60116,
					h = 60121,
					m = 60122,
					g = 60117,
					v = 60129,
					b = 60131;
				if ("function" == typeof Symbol && Symbol.for) {
					var x = Symbol.for;
					t = x("react.element"), r = x("react.portal"), i = x("react.fragment"), a = x("react.strict_mode"), o = x("react.profiler"), s = x("react.provider"), l = x("react.context"), c = x("react.forward_ref"), u = x("react.suspense"), d = x("react.suspense_list"), p = x("react.memo"), f = x("react.lazy"), h = x("react.block"), m = x("react.server.block"), g = x("react.fundamental"), v = x("react.debug_trace_mode"), b = x("react.legacy_hidden")
				}
				n.isValidElementType = function(e) {
					return "string" == typeof e || "function" == typeof e || e === i || e === o || e === v || e === a || e === u || e === d || e === b || "object" == typeof e && null !== e && (e.$$typeof === f || e.$$typeof === p || e.$$typeof === s || e.$$typeof === l || e.$$typeof === c || e.$$typeof === g || e.$$typeof === h || e[0] === m)
				}, n.typeOf = function(e) {
					if ("object" == typeof e && null !== e) {
						var n = e.$$typeof;
						switch (n) {
							case t:
								switch (e = e.type) {
									case i:
									case o:
									case a:
									case u:
									case d:
										return e;
									default:
										switch (e = e && e.$$typeof) {
											case l:
											case c:
											case f:
											case p:
											case s:
												return e;
											default:
												return n
										}
								}
							case r:
								return n
						}
					}
				}
			},
			9864: (e, n, t) => {
				"use strict";
				e.exports = t(9921)
			},
			1964: (e, n, t) => {
				"use strict";
				Object.defineProperty(n, "__esModule", {
					value: !0
				});
				var r, i = (r = t(6120)) && r.__esModule ? r : {
					default: r
				};
				n.default = i.default, e.exports = n.default
			},
			6120: (e, n, t) => {
				"use strict";
				Object.defineProperty(n, "__esModule", {
					value: !0
				});
				var r = Object.assign || function(e) {
						for (var n = 1; n < arguments.length; n++) {
							var t = arguments[n];
							for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
						}
						return e
					},
					i = function() {
						function e(e, n) {
							for (var t = 0; t < n.length; t++) {
								var r = n[t];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
							}
						}
						return function(n, t, r) {
							return t && e(n.prototype, t), r && e(n, r), n
						}
					}(),
					a = t(7294),
					o = c(a),
					s = t(5697),
					l = c(t(4772));

				function c(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				var u = {
					"ps-scroll-y": "onScrollY",
					"ps-scroll-x": "onScrollX",
					"ps-scroll-up": "onScrollUp",
					"ps-scroll-down": "onScrollDown",
					"ps-scroll-left": "onScrollLeft",
					"ps-scroll-right": "onScrollRight",
					"ps-y-reach-start": "onYReachStart",
					"ps-y-reach-end": "onYReachEnd",
					"ps-x-reach-start": "onXReachStart",
					"ps-x-reach-end": "onXReachEnd"
				};
				Object.freeze(u);
				var d = function(e) {
					function n(e) {
						! function(e, n) {
							if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
						}(this, n);
						var t = function(e, n) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !n || "object" != typeof n && "function" != typeof n ? e : n
						}(this, (n.__proto__ || Object.getPrototypeOf(n))
							.call(this, e));
						return t.handleRef = t.handleRef.bind(t), t._handlerByEvent = {}, t
					}
					return function(e, n) {
						if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
						e.prototype = Object.create(n && n.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
					}(n, e), i(n, [{
						key: "componentDidMount",
						value: function() {
							this.props.option && console.warn('react-perfect-scrollbar: the "option" prop has been deprecated in favor of "options"'), this._ps = new l.default(this._container, this.props.options || this.props.option), this._updateEventHook(), this._updateClassName()
						}
					}, {
						key: "componentDidUpdate",
						value: function(e) {
							this._updateEventHook(e), this.updateScroll(), e.className !== this.props.className && this._updateClassName()
						}
					}, {
						key: "componentWillUnmount",
						value: function() {
							var e = this;
							Object.keys(this._handlerByEvent)
								.forEach((function(n) {
									var t = e._handlerByEvent[n];
									t && e._container.removeEventListener(n, t, !1)
								})), this._handlerByEvent = {}, this._ps.destroy(), this._ps = null
						}
					}, {
						key: "_updateEventHook",
						value: function() {
							var e = this,
								n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
							Object.keys(u)
								.forEach((function(t) {
									var r = e.props[u[t]],
										i = n[u[t]];
									if (r !== i) {
										if (i) {
											var a = e._handlerByEvent[t];
											e._container.removeEventListener(t, a, !1), e._handlerByEvent[t] = null
										}
										if (r) {
											var o = function() {
												return r(e._container)
											};
											e._container.addEventListener(t, o, !1), e._handlerByEvent[t] = o
										}
									}
								}))
						}
					}, {
						key: "_updateClassName",
						value: function() {
							var e = this.props.className,
								n = this._container.className.split(" ")
								.filter((function(e) {
									return e.match(/^ps([-_].+|)$/)
								}))
								.join(" ");
							this._container && (this._container.className = "scrollbar-container" + (e ? " " + e : "") + (n ? " " + n : ""))
						}
					}, {
						key: "updateScroll",
						value: function() {
							this.props.onSync(this._ps)
						}
					}, {
						key: "handleRef",
						value: function(e) {
							this._container = e, this.props.containerRef(e)
						}
					}, {
						key: "render",
						value: function() {
							var e = this.props,
								n = (e.className, e.style),
								t = (e.option, e.options, e.containerRef, e.onScrollY, e.onScrollX, e.onScrollUp, e.onScrollDown, e.onScrollLeft, e.onScrollRight, e.onYReachStart, e.onYReachEnd, e.onXReachStart, e.onXReachEnd, e.component),
								i = (e.onSync, e.children),
								a = function(e, n) {
									var t = {};
									for (var r in e) n.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
									return t
								}(e, ["className", "style", "option", "options", "containerRef", "onScrollY", "onScrollX", "onScrollUp", "onScrollDown", "onScrollLeft", "onScrollRight", "onYReachStart", "onYReachEnd", "onXReachStart", "onXReachEnd", "component", "onSync", "children"]),
								s = t;
							return o.default.createElement(s, r({
								style: n,
								ref: this.handleRef
							}, a), i)
						}
					}]), n
				}(a.Component);
				n.default = d, d.defaultProps = {
					className: "",
					style: void 0,
					option: void 0,
					options: void 0,
					containerRef: function() {},
					onScrollY: void 0,
					onScrollX: void 0,
					onScrollUp: void 0,
					onScrollDown: void 0,
					onScrollLeft: void 0,
					onScrollRight: void 0,
					onYReachStart: void 0,
					onYReachEnd: void 0,
					onXReachStart: void 0,
					onXReachEnd: void 0,
					onSync: function(e) {
						return e.update()
					},
					component: "div"
				}, d.propTypes = {
					children: s.PropTypes.node.isRequired,
					className: s.PropTypes.string,
					style: s.PropTypes.object,
					option: s.PropTypes.object,
					options: s.PropTypes.object,
					containerRef: s.PropTypes.func,
					onScrollY: s.PropTypes.func,
					onScrollX: s.PropTypes.func,
					onScrollUp: s.PropTypes.func,
					onScrollDown: s.PropTypes.func,
					onScrollLeft: s.PropTypes.func,
					onScrollRight: s.PropTypes.func,
					onYReachStart: s.PropTypes.func,
					onYReachEnd: s.PropTypes.func,
					onXReachStart: s.PropTypes.func,
					onXReachEnd: s.PropTypes.func,
					onSync: s.PropTypes.func,
					component: s.PropTypes.string
				}, e.exports = n.default
			},
			5251: (e, n, t) => {
				"use strict";
				var r = t(7294),
					i = Symbol.for("react.element"),
					a = Symbol.for("react.fragment"),
					o = Object.prototype.hasOwnProperty,
					s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
					l = {
						key: !0,
						ref: !0,
						__self: !0,
						__source: !0
					};

				function c(e, n, t) {
					var r, a = {},
						c = null,
						u = null;
					for (r in void 0 !== t && (c = "" + t), void 0 !== n.key && (c = "" + n.key), void 0 !== n.ref && (u = n.ref), n) o.call(n, r) && !l.hasOwnProperty(r) && (a[r] = n[r]);
					if (e && e.defaultProps)
						for (r in n = e.defaultProps) void 0 === a[r] && (a[r] = n[r]);
					return {
						$$typeof: i,
						type: e,
						key: c,
						ref: u,
						props: a,
						_owner: s.current
					}
				}
				n.Fragment = a, n.jsx = c, n.jsxs = c
			},
			2408: (e, n) => {
				"use strict";
				var t = Symbol.for("react.element"),
					r = Symbol.for("react.portal"),
					i = Symbol.for("react.fragment"),
					a = Symbol.for("react.strict_mode"),
					o = Symbol.for("react.profiler"),
					s = Symbol.for("react.provider"),
					l = Symbol.for("react.context"),
					c = Symbol.for("react.forward_ref"),
					u = Symbol.for("react.suspense"),
					d = Symbol.for("react.memo"),
					p = Symbol.for("react.lazy"),
					f = Symbol.iterator,
					h = {
						isMounted: function() {
							return !1
						},
						enqueueForceUpdate: function() {},
						enqueueReplaceState: function() {},
						enqueueSetState: function() {}
					},
					m = Object.assign,
					g = {};

				function v(e, n, t) {
					this.props = e, this.context = n, this.refs = g, this.updater = t || h
				}

				function b() {}

				function x(e, n, t) {
					this.props = e, this.context = n, this.refs = g, this.updater = t || h
				}
				v.prototype.isReactComponent = {}, v.prototype.setState = function(e, n) {
					if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
					this.updater.enqueueSetState(this, e, n, "setState")
				}, v.prototype.forceUpdate = function(e) {
					this.updater.enqueueForceUpdate(this, e, "forceUpdate")
				}, b.prototype = v.prototype;
				var y = x.prototype = new b;
				y.constructor = x, m(y, v.prototype), y.isPureReactComponent = !0;
				var w = Array.isArray,
					j = Object.prototype.hasOwnProperty,
					k = {
						current: null
					},
					N = {
						key: !0,
						ref: !0,
						__self: !0,
						__source: !0
					};

				function E(e, n, r) {
					var i, a = {},
						o = null,
						s = null;
					if (null != n)
						for (i in void 0 !== n.ref && (s = n.ref), void 0 !== n.key && (o = "" + n.key), n) j.call(n, i) && !N.hasOwnProperty(i) && (a[i] = n[i]);
					var l = arguments.length - 2;
					if (1 === l) a.children = r;
					else if (1 < l) {
						for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
						a.children = c
					}
					if (e && e.defaultProps)
						for (i in l = e.defaultProps) void 0 === a[i] && (a[i] = l[i]);
					return {
						$$typeof: t,
						type: e,
						key: o,
						ref: s,
						props: a,
						_owner: k.current
					}
				}

				function S(e) {
					return "object" == typeof e && null !== e && e.$$typeof === t
				}
				var C = /\/+/g;

				function T(e, n) {
					return "object" == typeof e && null !== e && null != e.key ? function(e) {
						var n = {
							"=": "=0",
							":": "=2"
						};
						return "$" + e.replace(/[=:]/g, (function(e) {
							return n[e]
						}))
					}("" + e.key) : n.toString(36)
				}

				function O(e, n, i, a, o) {
					var s = typeof e;
					"undefined" !== s && "boolean" !== s || (e = null);
					var l = !1;
					if (null === e) l = !0;
					else switch (s) {
						case "string":
						case "number":
							l = !0;
							break;
						case "object":
							switch (e.$$typeof) {
								case t:
								case r:
									l = !0
							}
					}
					if (l) return o = o(l = e), e = "" === a ? "." + T(l, 0) : a, w(o) ? (i = "", null != e && (i = e.replace(C, "$&/") + "/"), O(o, n, i, "", (function(e) {
						return e
					}))) : null != o && (S(o) && (o = function(e, n) {
						return {
							$$typeof: t,
							type: e.type,
							key: n,
							ref: e.ref,
							props: e.props,
							_owner: e._owner
						}
					}(o, i + (!o.key || l && l.key === o.key ? "" : ("" + o.key)
						.replace(C, "$&/") + "/") + e)), n.push(o)), 1;
					if (l = 0, a = "" === a ? "." : a + ":", w(e))
						for (var c = 0; c < e.length; c++) {
							var u = a + T(s = e[c], c);
							l += O(s, n, i, u, o)
						} else if (u = function(e) {
							return null === e || "object" != typeof e ? null : "function" == typeof(e = f && e[f] || e["@@iterator"]) ? e : null
						}(e), "function" == typeof u)
							for (e = u.call(e), c = 0; !(s = e.next())
								.done;) l += O(s = s.value, n, i, u = a + T(s, c++), o);
						else if ("object" === s) throw n = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === n ? "object with keys {" + Object.keys(e)
						.join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
					return l
				}

				function A(e, n, t) {
					if (null == e) return e;
					var r = [],
						i = 0;
					return O(e, r, "", "", (function(e) {
						return n.call(t, e, i++)
					})), r
				}

				function _(e) {
					if (-1 === e._status) {
						var n = e._result;
						(n = n())
						.then((function(n) {
							0 !== e._status && -1 !== e._status || (e._status = 1, e._result = n)
						}), (function(n) {
							0 !== e._status && -1 !== e._status || (e._status = 2, e._result = n)
						})), -1 === e._status && (e._status = 0, e._result = n)
					}
					if (1 === e._status) return e._result.default;
					throw e._result
				}
				var R = {
						current: null
					},
					I = {
						transition: null
					},
					P = {
						ReactCurrentDispatcher: R,
						ReactCurrentBatchConfig: I,
						ReactCurrentOwner: k
					};
				n.Children = {
					map: A,
					forEach: function(e, n, t) {
						A(e, (function() {
							n.apply(this, arguments)
						}), t)
					},
					count: function(e) {
						var n = 0;
						return A(e, (function() {
							n++
						})), n
					},
					toArray: function(e) {
						return A(e, (function(e) {
							return e
						})) || []
					},
					only: function(e) {
						if (!S(e)) throw Error("React.Children.only expected to receive a single React element child.");
						return e
					}
				}, n.Component = v, n.Fragment = i, n.Profiler = o, n.PureComponent = x, n.StrictMode = a, n.Suspense = u, n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P, n.cloneElement = function(e, n, r) {
					if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
					var i = m({}, e.props),
						a = e.key,
						o = e.ref,
						s = e._owner;
					if (null != n) {
						if (void 0 !== n.ref && (o = n.ref, s = k.current), void 0 !== n.key && (a = "" + n.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
						for (c in n) j.call(n, c) && !N.hasOwnProperty(c) && (i[c] = void 0 === n[c] && void 0 !== l ? l[c] : n[c])
					}
					var c = arguments.length - 2;
					if (1 === c) i.children = r;
					else if (1 < c) {
						l = Array(c);
						for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
						i.children = l
					}
					return {
						$$typeof: t,
						type: e.type,
						key: a,
						ref: o,
						props: i,
						_owner: s
					}
				}, n.createContext = function(e) {
					return (e = {
							$$typeof: l,
							_currentValue: e,
							_currentValue2: e,
							_threadCount: 0,
							Provider: null,
							Consumer: null,
							_defaultValue: null,
							_globalName: null
						})
						.Provider = {
							$$typeof: s,
							_context: e
						}, e.Consumer = e
				}, n.createElement = E, n.createFactory = function(e) {
					var n = E.bind(null, e);
					return n.type = e, n
				}, n.createRef = function() {
					return {
						current: null
					}
				}, n.forwardRef = function(e) {
					return {
						$$typeof: c,
						render: e
					}
				}, n.isValidElement = S, n.lazy = function(e) {
					return {
						$$typeof: p,
						_payload: {
							_status: -1,
							_result: e
						},
						_init: _
					}
				}, n.memo = function(e, n) {
					return {
						$$typeof: d,
						type: e,
						compare: void 0 === n ? null : n
					}
				}, n.startTransition = function(e) {
					var n = I.transition;
					I.transition = {};
					try {
						e()
					} finally {
						I.transition = n
					}
				}, n.unstable_act = function() {
					throw Error("act(...) is not supported in production builds of React.")
				}, n.useCallback = function(e, n) {
					return R.current.useCallback(e, n)
				}, n.useContext = function(e) {
					return R.current.useContext(e)
				}, n.useDebugValue = function() {}, n.useDeferredValue = function(e) {
					return R.current.useDeferredValue(e)
				}, n.useEffect = function(e, n) {
					return R.current.useEffect(e, n)
				}, n.useId = function() {
					return R.current.useId()
				}, n.useImperativeHandle = function(e, n, t) {
					return R.current.useImperativeHandle(e, n, t)
				}, n.useInsertionEffect = function(e, n) {
					return R.current.useInsertionEffect(e, n)
				}, n.useLayoutEffect = function(e, n) {
					return R.current.useLayoutEffect(e, n)
				}, n.useMemo = function(e, n) {
					return R.current.useMemo(e, n)
				}, n.useReducer = function(e, n, t) {
					return R.current.useReducer(e, n, t)
				}, n.useRef = function(e) {
					return R.current.useRef(e)
				}, n.useState = function(e) {
					return R.current.useState(e)
				}, n.useSyncExternalStore = function(e, n, t) {
					return R.current.useSyncExternalStore(e, n, t)
				}, n.useTransition = function() {
					return R.current.useTransition()
				}, n.version = "18.0.0-fc46dba67-20220329"
			},
			7294: (e, n, t) => {
				"use strict";
				e.exports = t(2408)
			},
			5893: (e, n, t) => {
				"use strict";
				e.exports = t(5251)
			},
			53: (e, n) => {
				"use strict";

				function t(e, n) {
					var t = e.length;
					e.push(n);
					e: for (; 0 < t;) {
						var r = t - 1 >>> 1,
							i = e[r];
						if (!(0 < a(i, n))) break e;
						e[r] = n, e[t] = i, t = r
					}
				}

				function r(e) {
					return 0 === e.length ? null : e[0]
				}

				function i(e) {
					if (0 === e.length) return null;
					var n = e[0],
						t = e.pop();
					if (t !== n) {
						e[0] = t;
						e: for (var r = 0, i = e.length, o = i >>> 1; r < o;) {
							var s = 2 * (r + 1) - 1,
								l = e[s],
								c = s + 1,
								u = e[c];
							if (0 > a(l, t)) c < i && 0 > a(u, l) ? (e[r] = u, e[c] = t, r = c) : (e[r] = l, e[s] = t, r = s);
							else {
								if (!(c < i && 0 > a(u, t))) break e;
								e[r] = u, e[c] = t, r = c
							}
						}
					}
					return n
				}

				function a(e, n) {
					var t = e.sortIndex - n.sortIndex;
					return 0 !== t ? t : e.id - n.id
				}
				if ("object" == typeof performance && "function" == typeof performance.now) {
					var o = performance;
					n.unstable_now = function() {
						return o.now()
					}
				} else {
					var s = Date,
						l = s.now();
					n.unstable_now = function() {
						return s.now() - l
					}
				}
				var c = [],
					u = [],
					d = 1,
					p = null,
					f = 3,
					h = !1,
					m = !1,
					g = !1,
					v = "function" == typeof setTimeout ? setTimeout : null,
					b = "function" == typeof clearTimeout ? clearTimeout : null,
					x = "undefined" != typeof setImmediate ? setImmediate : null;

				function y(e) {
					for (var n = r(u); null !== n;) {
						if (null === n.callback) i(u);
						else {
							if (!(n.startTime <= e)) break;
							i(u), n.sortIndex = n.expirationTime, t(c, n)
						}
						n = r(u)
					}
				}

				function w(e) {
					if (g = !1, y(e), !m)
						if (null !== r(c)) m = !0, I(j);
						else {
							var n = r(u);
							null !== n && P(w, n.startTime - e)
						}
				}

				function j(e, t) {
					m = !1, g && (g = !1, b(S), S = -1), h = !0;
					var a = f;
					try {
						for (y(t), p = r(c); null !== p && (!(p.expirationTime > t) || e && !O());) {
							var o = p.callback;
							if ("function" == typeof o) {
								p.callback = null, f = p.priorityLevel;
								var s = o(p.expirationTime <= t);
								t = n.unstable_now(), "function" == typeof s ? p.callback = s : p === r(c) && i(c), y(t)
							} else i(c);
							p = r(c)
						}
						if (null !== p) var l = !0;
						else {
							var d = r(u);
							null !== d && P(w, d.startTime - t), l = !1
						}
						return l
					} finally {
						p = null, f = a, h = !1
					}
				}
				"undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
				var k, N = !1,
					E = null,
					S = -1,
					C = 5,
					T = -1;

				function O() {
					return !(n.unstable_now() - T < C)
				}

				function A() {
					if (null !== E) {
						var e = n.unstable_now();
						T = e;
						var t = !0;
						try {
							t = E(!0, e)
						} finally {
							t ? k() : (N = !1, E = null)
						}
					} else N = !1
				}
				if ("function" == typeof x) k = function() {
					x(A)
				};
				else if ("undefined" != typeof MessageChannel) {
					var _ = new MessageChannel,
						R = _.port2;
					_.port1.onmessage = A, k = function() {
						R.postMessage(null)
					}
				} else k = function() {
					v(A, 0)
				};

				function I(e) {
					E = e, N || (N = !0, k())
				}

				function P(e, t) {
					S = v((function() {
						e(n.unstable_now())
					}), t)
				}
				n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(e) {
					e.callback = null
				}, n.unstable_continueExecution = function() {
					m || h || (m = !0, I(j))
				}, n.unstable_forceFrameRate = function(e) {
					0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : C = 0 < e ? Math.floor(1e3 / e) : 5
				}, n.unstable_getCurrentPriorityLevel = function() {
					return f
				}, n.unstable_getFirstCallbackNode = function() {
					return r(c)
				}, n.unstable_next = function(e) {
					switch (f) {
						case 1:
						case 2:
						case 3:
							var n = 3;
							break;
						default:
							n = f
					}
					var t = f;
					f = n;
					try {
						return e()
					} finally {
						f = t
					}
				}, n.unstable_pauseExecution = function() {}, n.unstable_requestPaint = function() {}, n.unstable_runWithPriority = function(e, n) {
					switch (e) {
						case 1:
						case 2:
						case 3:
						case 4:
						case 5:
							break;
						default:
							e = 3
					}
					var t = f;
					f = e;
					try {
						return n()
					} finally {
						f = t
					}
				}, n.unstable_scheduleCallback = function(e, i, a) {
					var o = n.unstable_now();
					switch (a = "object" == typeof a && null !== a && "number" == typeof(a = a.delay) && 0 < a ? o + a : o, e) {
						case 1:
							var s = -1;
							break;
						case 2:
							s = 250;
							break;
						case 5:
							s = 1073741823;
							break;
						case 4:
							s = 1e4;
							break;
						default:
							s = 5e3
					}
					return e = {
						id: d++,
						callback: i,
						priorityLevel: e,
						startTime: a,
						expirationTime: s = a + s,
						sortIndex: -1
					}, a > o ? (e.sortIndex = a, t(u, e), null === r(c) && e === r(u) && (g ? (b(S), S = -1) : g = !0, P(w, a - o))) : (e.sortIndex = s, t(c, e), m || h || (m = !0, I(j))), e
				}, n.unstable_shouldYield = O, n.unstable_wrapCallback = function(e) {
					var n = f;
					return function() {
						var t = f;
						f = n;
						try {
							return e.apply(this, arguments)
						} finally {
							f = t
						}
					}
				}
			},
			3840: (e, n, t) => {
				"use strict";
				e.exports = t(53)
			},
			6774: e => {
				e.exports = function(e, n, t, r) {
					var i = t ? t.call(r, e, n) : void 0;
					if (void 0 !== i) return !!i;
					if (e === n) return !0;
					if ("object" != typeof e || !e || "object" != typeof n || !n) return !1;
					var a = Object.keys(e),
						o = Object.keys(n);
					if (a.length !== o.length) return !1;
					for (var s = Object.prototype.hasOwnProperty.bind(n), l = 0; l < a.length; l++) {
						var c = a[l];
						if (!s(c)) return !1;
						var u = e[c],
							d = n[c];
						if (!1 === (i = t ? t.call(r, u, d, c) : void 0) || void 0 === i && u !== d) return !1
					}
					return !0
				}
			},
			3379: e => {
				"use strict";
				var n = [];

				function t(e) {
					for (var t = -1, r = 0; r < n.length; r++)
						if (n[r].identifier === e) {
							t = r;
							break
						} return t
				}

				function r(e, r) {
					for (var a = {}, o = [], s = 0; s < e.length; s++) {
						var l = e[s],
							c = r.base ? l[0] + r.base : l[0],
							u = a[c] || 0,
							d = "".concat(c, " ")
							.concat(u);
						a[c] = u + 1;
						var p = t(d),
							f = {
								css: l[1],
								media: l[2],
								sourceMap: l[3],
								supports: l[4],
								layer: l[5]
							};
						if (-1 !== p) n[p].references++, n[p].updater(f);
						else {
							var h = i(f, r);
							r.byIndex = s, n.splice(s, 0, {
								identifier: d,
								updater: h,
								references: 1
							})
						}
						o.push(d)
					}
					return o
				}

				function i(e, n) {
					var t = n.domAPI(n);
					return t.update(e),
						function(n) {
							if (n) {
								if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap && n.supports === e.supports && n.layer === e.layer) return;
								t.update(e = n)
							} else t.remove()
						}
				}
				e.exports = function(e, i) {
					var a = r(e = e || [], i = i || {});
					return function(e) {
						e = e || [];
						for (var o = 0; o < a.length; o++) {
							var s = t(a[o]);
							n[s].references--
						}
						for (var l = r(e, i), c = 0; c < a.length; c++) {
							var u = t(a[c]);
							0 === n[u].references && (n[u].updater(), n.splice(u, 1))
						}
						a = l
					}
				}
			},
			569: e => {
				"use strict";
				var n = {};
				e.exports = function(e, t) {
					var r = function(e) {
						if (void 0 === n[e]) {
							var t = document.querySelector(e);
							if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
								t = t.contentDocument.head
							} catch (e) {
								t = null
							}
							n[e] = t
						}
						return n[e]
					}(e);
					if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
					r.appendChild(t)
				}
			},
			9216: e => {
				"use strict";
				e.exports = function(e) {
					var n = document.createElement("style");
					return e.setAttributes(n, e.attributes), e.insert(n, e.options), n
				}
			},
			3565: (e, n, t) => {
				"use strict";
				e.exports = function(e) {
					var n = t.nc;
					n && e.setAttribute("nonce", n)
				}
			},
			7795: e => {
				"use strict";
				e.exports = function(e) {
					var n = e.insertStyleElement(e);
					return {
						update: function(t) {
							! function(e, n, t) {
								var r = "";
								t.supports && (r += "@supports (".concat(t.supports, ") {")), t.media && (r += "@media ".concat(t.media, " {"));
								var i = void 0 !== t.layer;
								i && (r += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")), r += t.css, i && (r += "}"), t.media && (r += "}"), t.supports && (r += "}");
								var a = t.sourceMap;
								a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), n.styleTagTransform(r, e, n.options)
							}(n, e, t)
						},
						remove: function() {
							! function(e) {
								if (null === e.parentNode) return !1;
								e.parentNode.removeChild(e)
							}(n)
						}
					}
				}
			},
			4589: e => {
				"use strict";
				e.exports = function(e, n) {
					if (n.styleSheet) n.styleSheet.cssText = e;
					else {
						for (; n.firstChild;) n.removeChild(n.firstChild);
						n.appendChild(document.createTextNode(e))
					}
				}
			},
			1538: (e, n, t) => {
				e.exports = t.p + "e993a905749c966d32bd9d8175bd00cf.png"
			},
			904: (e, n, t) => {
				e.exports = t.p + "4ef1d46d3144ae58fbbdda533092ea04.png"
			},
			5874: (e, n, t) => {
				e.exports = t.p + "990147b814997d2a85dc3ce62f4bf203.png"
			},
			947: e => {
				e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXmSURBVHgB7ZxNTBtHFMefbcBgAzEHTB0QNYfmEBLJBVuKFCScoh4KqhQlJWp7wccKVQqHfpwqqNR7LlGvTY6VWqWnXjiUVj00gkpUrXJoK5FDgimoaqAlgQIm8zY76/GytvdjZnaizE9asWOvLfvvt/P+8/YtMVCYkZGRUn9/f2p9ff0+KEoLqM18pVLBv0OgKDFQFBJ9c5FI5G2ypTKZTKRcLi+BgkRAQXK5XDYajX5HxMuaDz06OjoaWl1dfQSKEQUFIcItMOIhKSLoPCiIchGI0ReLxdacniOiXlpZWVkChVAuAol4X9D98XNtcHawmueOj4+Vi0KlBETbQv4U6Xh6rANmJ5PsIcXR0dHLoBCqRaAVYZP5OKRPRY1t+mK7dQCJwhvkNE+BIigjIIm+eZo4eolok/mqaLifiD+brvEYklDmQBGU8IGYOIgwt8hmqFaa6IDhwVbr+baWCLSSqfCXtUNjTI7L9fX1fbmxsRG6rVEiAk3bYpyWGH3F8/ETx0yRKGQSijK2JnQBTdM8Q8e2pFEDOxcSwUv5fL4IIRO6gLjioPtoW4YH6y/P8bTOv1I9tVWwNaEKiLaFXXGgbWlGaSJhJRRC0bQ+oRGagKYVsSLorYsdhmVpBh4zla/OkeQHCNXWhCYgOXWvs7ZlqhB3/Vq0Nb1VsVNh2ppQ1sL29e7sZOJE5v3s9u+wuLxZ89j3N8es/aVf9+Hzbx/TIVZrXiXVmvsgmVAiEG0L3a9nW7Z3D+DB5l7NxoKvYW0Nu4aWiXQBSfRdZm3L/Dtd4BfW1hCKYdga6QIS8W7QfbQtbhJHPdDW4HtQcJ0MkpEqIGtb0Iq4sS2U7qSzP7TZmhxeCgCJSBMQEwfUVFvaG0Zfd6K14ZiSbI/Ybc28TFsjTUC2TI+J49pYe8Pj60WcEw62RtoKRYqA9vWubfIPDEYhWiEK+aHmzIgXjhQBWdtSIGtZJ9sSFEwobPlflq0RLiAmDjb6ZiYSIIqZ12reW4qtkRGB1nwU1LY0Y6gvBm8wCaVSqQiPQqEC2sv0XmyLX66RogRb/iefYQEEIkxAcxIv0TEmDpHRR8GEMj1WU3i9LtLWCPtGdtsSNHF0Jd1fvpmSaGuECMjDtnQnWmzjVvCC3daISihCBCQW4g7dx8ThJ/q8GGkn7LZGVPmfu4BmiT1HxzISRz1kdDWIiEDPZXpRyOhq4Prt7LaleL4NwkZ0VwM3Ac3uggU6lmVbmlHH1mSBE9y+oZsyfViI7GrgIiD5RXOsbfnwShJUQ1RXAxcBiXg1tiWbVq/5X1RXQ2AB/XQX+KE/Hfx9HboaAieUQALay/Q8bQsPwew4dDUELv8HOtdw3vNSpvfChbM9NRfSuzv5TAtoa5Z++x+2to0beGhXwwL4xHeDpbne/YaOsSky28d37sPlHN3irXwiG5s1k+Q0Xv7jwBgHbdb0/alY25JNx5SyLc3g2dXgS0B7d8EHVzrheYNXV4MvAXl2F9Tj4dae0WA0/v6P8O6nP8Pde/8AT9DWsOV/v10NnudA07aUcB8Tx+xU0lgu8ebNj+7CD6t/w87uoSHm10tluDDcAwO9/LLzmdMtsLi6DwdHxvClTCazXS6Xf/LyHp5Cx25bxs/FhUTf4vIWPNh6cuLxr4iIPOHR1eDp23vtLvDLzu6B4+MPN58Ab4J2NbgWUHR3AcvrhTR0JU5aoqvFDPDGqauhUCjk3L7etYAk1VuTrKjuAgr6vk9KZ2pERPGuFk+DCOzlf3I92XVCcTX7m4nD8ko33zslpda38/gQ7q39aySOgbS4iEfW/jqCj2/tWGO3t9a6ysIkO92hdxKhbbkkyTTj6mOArImDXmByQ09nFP7bP4Y/15+lZGJrimSFcpusUPYava5pGIXRXRAW9q4GN+X/hgKG1V0QFn66Ghqqwbu74HkAy/8vp62ZLcWuupyom0Qa/e+CF41GCaVuBLLdBS86jcr/jgLauws04d/UqNFoNBqNRqPRaDQajUaj0Wg0Go1GEyZPAUR8agTL/FG2AAAAAElFTkSuQmCC"
			}
		},
		n = {};

	function t(r) {
		var i = n[r];
		if (void 0 !== i) return i.exports;
		var a = n[r] = {
			id: r,
			exports: {}
		};
		return e[r](a, a.exports, t), a.exports
	}
	t.m = e, t.n = e => {
		var n = e && e.__esModule ? () => e.default : () => e;
		return t.d(n, {
			a: n
		}), n
	}, t.d = (e, n) => {
		for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
			enumerable: !0,
			get: n[r]
		})
	}, t.u = e => e + ".index.bundle.js", t.g = function() {
		if ("object" == typeof globalThis) return globalThis;
		try {
			return this || new Function("return this")()
		} catch (e) {
			if ("object" == typeof window) return window
		}
	}(), t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), t.r = e => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, (() => {
		var e;
		t.g.importScripts && (e = t.g.location + "");
		var n = t.g.document;
		if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
			var r = n.getElementsByTagName("script");
			r.length && (e = r[r.length - 1].src)
		}
		if (!e) throw new Error("Automatic publicPath is not supported in this browser");
		e = e.replace(/#.*$/, "")
			.replace(/\?.*$/, "")
			.replace(/\/[^\/]+$/, "/"), t.p = e
	})(), t.b = document.baseURI || self.location.href, (() => {
		"use strict";
		var e = t(5893),
			n = t(745),
			r = t(7294),
			i = r.createContext(null),
			a = function(e) {
				e()
			},
			o = function() {
				return a
			},
			s = {
				notify: function() {},
				get: function() {
					return []
				}
			};

		function l(e, n) {
			var t, r = s;

			function i() {
				l.onStateChange && l.onStateChange()
			}

			function a() {
				t || (t = n ? n.addNestedSub(i) : e.subscribe(i), r = function() {
					var e = o(),
						n = null,
						t = null;
					return {
						clear: function() {
							n = null, t = null
						},
						notify: function() {
							e((function() {
								for (var e = n; e;) e.callback(), e = e.next
							}))
						},
						get: function() {
							for (var e = [], t = n; t;) e.push(t), t = t.next;
							return e
						},
						subscribe: function(e) {
							var r = !0,
								i = t = {
									callback: e,
									next: null,
									prev: t
								};
							return i.prev ? i.prev.next = i : n = i,
								function() {
									r && null !== n && (r = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : n = i.next)
								}
						}
					}
				}())
			}
			var l = {
				addNestedSub: function(e) {
					return a(), r.subscribe(e)
				},
				notifyNestedSubs: function() {
					r.notify()
				},
				handleChangeWrapper: i,
				isSubscribed: function() {
					return Boolean(t)
				},
				trySubscribe: a,
				tryUnsubscribe: function() {
					t && (t(), t = void 0, r.clear(), r = s)
				},
				getListeners: function() {
					return r
				}
			};
			return l
		}
		var c = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? r.useLayoutEffect : r.useEffect;
		const u = function(e) {
			var n = e.store,
				t = e.context,
				a = e.children,
				o = (0, r.useMemo)((function() {
					var e = l(n);
					return {
						store: n,
						subscription: e
					}
				}), [n]),
				s = (0, r.useMemo)((function() {
					return n.getState()
				}), [n]);
			c((function() {
				var e = o.subscription;
				return e.onStateChange = e.notifyNestedSubs, e.trySubscribe(), s !== n.getState() && e.notifyNestedSubs(),
					function() {
						e.tryUnsubscribe(), e.onStateChange = null
					}
			}), [o, s]);
			var u = t || i;
			return r.createElement(u.Provider, {
				value: o
			}, a)
		};
		var d = t(8679),
			p = t.n(d),
			f = t(9864);

		function h() {
			return h = Object.assign || function(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = arguments[n];
					for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
				}
				return e
			}, h.apply(this, arguments)
		}

		function m() {
			return (0, r.useContext)(i)
		}

		function g(e) {
			void 0 === e && (e = i);
			var n = e === i ? m : function() {
				return (0, r.useContext)(e)
			};
			return function() {
				return n()
					.store
			}
		}
		var v = g();

		function b(e) {
			void 0 === e && (e = i);
			var n = e === i ? v : g(e);
			return function() {
				return n()
					.dispatch
			}
		}
		var x = b(),
			y = function(e, n) {
				return e === n
			};

		function w(e) {
			void 0 === e && (e = i);
			var n = e === i ? m : function() {
				return (0, r.useContext)(e)
			};
			return function(e, t) {
				void 0 === t && (t = y);
				var i = n(),
					a = function(e, n, t, i) {
						var a, o = (0, r.useReducer)((function(e) {
								return e + 1
							}), 0)[1],
							s = (0, r.useMemo)((function() {
								return l(t, i)
							}), [t, i]),
							u = (0, r.useRef)(),
							d = (0, r.useRef)(),
							p = (0, r.useRef)(),
							f = (0, r.useRef)(),
							h = t.getState();
						try {
							if (e !== d.current || h !== p.current || u.current) {
								var m = e(h);
								a = void 0 !== f.current && n(m, f.current) ? f.current : m
							} else a = f.current
						} catch (e) {
							throw u.current && (e.message += "\nThe error may be correlated with this previous error:\n" + u.current.stack + "\n\n"), e
						}
						return c((function() {
							d.current = e, p.current = h, f.current = a, u.current = void 0
						})), c((function() {
							function e() {
								try {
									var e = t.getState();
									if (e === p.current) return;
									var r = d.current(e);
									if (n(r, f.current)) return;
									f.current = r, p.current = e
								} catch (e) {
									u.current = e
								}
								o()
							}
							return s.onStateChange = e, s.trySubscribe(), e(),
								function() {
									return s.tryUnsubscribe()
								}
						}), [t, s]), a
					}(e, t, i.store, i.subscription);
				return (0, r.useDebugValue)(a), a
			}
		}
		var j, k = w(),
			N = t(3935);

		function E(e, n, t) {
			return n in e ? Object.defineProperty(e, n, {
				value: t,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[n] = t, e
		}

		function S(e, n) {
			var t = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				n && (r = r.filter((function(n) {
					return Object.getOwnPropertyDescriptor(e, n)
						.enumerable
				}))), t.push.apply(t, r)
			}
			return t
		}

		function C(e) {
			for (var n = 1; n < arguments.length; n++) {
				var t = null != arguments[n] ? arguments[n] : {};
				n % 2 ? S(Object(t), !0)
					.forEach((function(n) {
						E(e, n, t[n])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t))
					.forEach((function(n) {
						Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
					}))
			}
			return e
		}

		function T(e) {
			return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
		}
		j = N.unstable_batchedUpdates, a = j;
		var O = "function" == typeof Symbol && Symbol.observable || "@@observable",
			A = function() {
				return Math.random()
					.toString(36)
					.substring(7)
					.split("")
					.join(".")
			},
			_ = {
				INIT: "@@redux/INIT" + A(),
				REPLACE: "@@redux/REPLACE" + A(),
				PROBE_UNKNOWN_ACTION: function() {
					return "@@redux/PROBE_UNKNOWN_ACTION" + A()
				}
			};

		function R(e) {
			if ("object" != typeof e || null === e) return !1;
			for (var n = e; null !== Object.getPrototypeOf(n);) n = Object.getPrototypeOf(n);
			return Object.getPrototypeOf(e) === n
		}

		function I(e) {
			for (var n = Object.keys(e), t = {}, r = 0; r < n.length; r++) {
				var i = n[r];
				"function" == typeof e[i] && (t[i] = e[i])
			}
			var a, o = Object.keys(t);
			try {
				! function(e) {
					Object.keys(e)
						.forEach((function(n) {
							var t = e[n];
							if (void 0 === t(void 0, {
								type: _.INIT
							})) throw new Error(T(12));
							if (void 0 === t(void 0, {
								type: _.PROBE_UNKNOWN_ACTION()
							})) throw new Error(T(13))
						}))
				}(t)
			} catch (e) {
				a = e
			}
			return function(e, n) {
				if (void 0 === e && (e = {}), a) throw a;
				for (var r = !1, i = {}, s = 0; s < o.length; s++) {
					var l = o[s],
						c = t[l],
						u = e[l],
						d = c(u, n);
					if (void 0 === d) throw n && n.type, new Error(T(14));
					i[l] = d, r = r || d !== u
				}
				return (r = r || o.length !== Object.keys(e)
					.length) ? i : e
			}
		}

		function P() {
			for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
			return 0 === n.length ? function(e) {
				return e
			} : 1 === n.length ? n[0] : n.reduce((function(e, n) {
				return function() {
					return e(n.apply(void 0, arguments))
				}
			}))
		}
		var L = function(e) {
				return "@@redux-saga/" + e
			},
			M = L("CANCEL_PROMISE"),
			D = L("CHANNEL_END"),
			U = L("IO"),
			F = L("MATCH"),
			z = L("MULTICAST"),
			H = L("SAGA_ACTION"),
			B = L("SELF_CANCELLATION"),
			W = L("TASK"),
			G = L("TASK_CANCEL"),
			Y = L("TERMINATE"),
			X = L("LOCATION"),
			V = function(e) {
				return null == e
			},
			q = function(e) {
				return null != e
			},
			$ = function(e) {
				return "function" == typeof e
			},
			K = function(e) {
				return "string" == typeof e
			},
			Q = Array.isArray,
			Z = function(e) {
				return e && $(e.then)
			},
			J = function(e) {
				return e && $(e.next) && $(e.throw)
			},
			ee = function e(n) {
				return n && (K(n) || re(n) || $(n) || Q(n) && n.every(e))
			},
			ne = function(e) {
				return e && $(e.take) && $(e.close)
			},
			te = function(e) {
				return $(e) && e.hasOwnProperty("toString")
			},
			re = function(e) {
				return Boolean(e) && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
			};
		const ie = function(e, n) {
			var t;
			void 0 === n && (n = !0);
			var r = new Promise((function(r) {
				t = setTimeout(r, e, n)
			}));
			return r[M] = function() {
				clearTimeout(t)
			}, r
		};
		var ae = function(e) {
				return function() {
					return e
				}
			},
			oe = ae(!0),
			se = function() {},
			le = function(e) {
				return e
			};
		"function" == typeof Symbol && Symbol.asyncIterator && Symbol.asyncIterator;
		var ce = function(e, n) {
			h(e, n), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(n)
				.forEach((function(t) {
					e[t] = n[t]
				}))
		};

		function ue(e, n) {
			var t = e.indexOf(n);
			t >= 0 && e.splice(t, 1)
		}

		function de(e) {
			var n = !1;
			return function() {
				n || (n = !0, e())
			}
		}
		var pe = function(e) {
				throw e
			},
			fe = function(e) {
				return {
					value: e,
					done: !0
				}
			};

		function he(e, n, t) {
			void 0 === n && (n = pe), void 0 === t && (t = "iterator");
			var r = {
				meta: {
					name: t
				},
				next: e,
				throw: n,
				return: fe,
				isSagaIterator: !0
			};
			return "undefined" != typeof Symbol && (r[Symbol.iterator] = function() {
				return r
			}), r
		}

		function me(e, n) {
			var t = n.sagaStack;
			console.error(e), console.error(t)
		}
		var ge = function(e) {
				return Array.apply(null, new Array(e))
			},
			ve = function(e) {
				return function(n) {
					return e(Object.defineProperty(n, H, {
						value: !0
					}))
				}
			},
			be = function(e) {
				return e === Y
			},
			xe = function(e) {
				return e === G
			},
			ye = function(e) {
				return be(e) || xe(e)
			};

		function we(e, n) {
			var t, r = Object.keys(e),
				i = r.length,
				a = 0,
				o = Q(e) ? ge(i) : {},
				s = {};
			return r.forEach((function(e) {
				var r = function(r, s) {
					t || (s || ye(r) ? (n.cancel(), n(r, s)) : (o[e] = r, ++a === i && (t = !0, n(o))))
				};
				r.cancel = se, s[e] = r
			})), n.cancel = function() {
				t || (t = !0, r.forEach((function(e) {
					return s[e].cancel()
				})))
			}, s
		}

		function je(e) {
			return {
				name: e.name || "anonymous",
				location: ke(e)
			}
		}

		function ke(e) {
			return e[X]
		}
		var Ne = {
			isEmpty: oe,
			put: se,
			take: se
		};
		var Ee = function(e) {
				return function(e, n) {
					void 0 === e && (e = 10);
					var t = new Array(e),
						r = 0,
						i = 0,
						a = 0,
						o = function(n) {
							t[i] = n, i = (i + 1) % e, r++
						},
						s = function() {
							if (0 != r) {
								var n = t[a];
								return t[a] = null, r--, a = (a + 1) % e, n
							}
						},
						l = function() {
							for (var e = []; r;) e.push(s());
							return e
						};
					return {
						isEmpty: function() {
							return 0 == r
						},
						put: function(s) {
							var c;
							if (r < e) o(s);
							else switch (n) {
								case 1:
									throw new Error("Channel's Buffer overflow!");
								case 3:
									t[i] = s, a = i = (i + 1) % e;
									break;
								case 4:
									c = 2 * e, t = l(), r = t.length, i = t.length, a = 0, t.length = c, e = c, o(s)
							}
						},
						take: s,
						flush: l
					}
				}(e, 4)
			},
			Se = "TAKE",
			Ce = "CALL",
			Te = "FORK",
			Oe = function(e, n) {
				var t;
				return (t = {})[U] = !0, t.combinator = !1, t.type = e, t.payload = n, t
			};

		function Ae(e, n) {
			return void 0 === e && (e = "*"), ee(e) ? Oe(Se, {
				pattern: e
			}) : ne(t = e) && t[z] && q(n) && ee(n) ? Oe(Se, {
				channel: e,
				pattern: n
			}) : ne(e) ? Oe(Se, {
				channel: e
			}) : void 0;
			var t
		}

		function _e(e, n) {
			return V(n) && (n = e, e = void 0), Oe("PUT", {
				channel: e,
				action: n
			})
		}

		function Re(e, n) {
			var t, r = null;
			return $(e) ? t = e : (Q(e) ? (r = e[0], t = e[1]) : (r = e.context, t = e.fn), r && K(t) && $(r[t]) && (t = r[t])), {
				context: r,
				fn: t,
				args: n
			}
		}

		function Ie(e) {
			for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
			return Oe(Ce, Re(e, t))
		}

		function Pe(e) {
			for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
			return Oe(Te, Re(e, t))
		}

		function Le(e) {
			return void 0 === e && (e = B), Oe("CANCEL", e)
		}
		var Me = Ie.bind(null, ie);
		const De = function() {
			var e = {};
			return e.promise = new Promise((function(n, t) {
				e.resolve = n, e.reject = t
			})), e
		};
		var Ue = [],
			Fe = 0;

		function ze(e) {
			try {
				We(), e()
			} finally {
				Ge()
			}
		}

		function He(e) {
			Ue.push(e), Fe || (We(), Ye())
		}

		function Be(e) {
			try {
				return We(), e()
			} finally {
				Ye()
			}
		}

		function We() {
			Fe++
		}

		function Ge() {
			Fe--
		}

		function Ye() {
			var e;
			for (Ge(); !Fe && void 0 !== (e = Ue.shift());) ze(e)
		}
		var Xe = function(e) {
				return function(n) {
					return e.some((function(e) {
						return Qe(e)(n)
					}))
				}
			},
			Ve = function(e) {
				return function(n) {
					return e(n)
				}
			},
			qe = function(e) {
				return function(n) {
					return n.type === String(e)
				}
			},
			$e = function(e) {
				return function(n) {
					return n.type === e
				}
			},
			Ke = function() {
				return oe
			};

		function Qe(e) {
			var n = "*" === e ? Ke : K(e) ? qe : Q(e) ? Xe : te(e) ? qe : $(e) ? Ve : re(e) ? $e : null;
			if (null === n) throw new Error("invalid pattern: " + e);
			return n(e)
		}
		var Ze = {
				type: D
			},
			Je = function(e) {
				return e && e.type === D
			};

		function en(e) {
			void 0 === e && (e = Ee());
			var n = !1,
				t = [];
			return {
				take: function(r) {
					n && e.isEmpty() ? r(Ze) : e.isEmpty() ? (t.push(r), r.cancel = function() {
						ue(t, r)
					}) : r(e.take())
				},
				put: function(r) {
					if (!n) {
						if (0 === t.length) return e.put(r);
						t.shift()(r)
					}
				},
				flush: function(t) {
					n && e.isEmpty() ? t(Ze) : t(e.flush())
				},
				close: function() {
					if (!n) {
						n = !0;
						var e = t;
						t = [];
						for (var r = 0, i = e.length; r < i; r++)(0, e[r])(Ze)
					}
				}
			}
		}

		function nn() {
			var e, n, t, r, i, a, o = (n = !1, r = t = [], i = function() {
					r === t && (r = t.slice())
				}, a = function() {
					n = !0;
					var e = t = r;
					r = [], e.forEach((function(e) {
						e(Ze)
					}))
				}, (e = {})[z] = !0, e.put = function(e) {
					if (!n)
						if (Je(e)) a();
						else
							for (var i = t = r, o = 0, s = i.length; o < s; o++) {
								var l = i[o];
								l[F](e) && (l.cancel(), l(e))
							}
				}, e.take = function(e, t) {
					void 0 === t && (t = Ke), n ? e(Ze) : (e[F] = t, i(), r.push(e), e.cancel = de((function() {
						i(), ue(r, e)
					})))
				}, e.close = a, e),
				s = o.put;
			return o.put = function(e) {
				e[H] ? s(e) : He((function() {
					s(e)
				}))
			}, o
		}

		function tn(e, n) {
			var t = e[M];
			$(t) && (n.cancel = t), e.then(n, (function(e) {
				n(e, !0)
			}))
		}
		var rn, an = 0,
			on = function() {
				return ++an
			};

		function sn(e) {
			e.isRunning() && e.cancel()
		}
		var ln = ((rn = {})
			.TAKE = function(e, n, t) {
				var r = n.channel,
					i = void 0 === r ? e.channel : r,
					a = n.pattern,
					o = n.maybe,
					s = function(e) {
						e instanceof Error ? t(e, !0) : !Je(e) || o ? t(e) : t(Y)
					};
				try {
					i.take(s, q(a) ? Qe(a) : null)
				} catch (e) {
					return void t(e, !0)
				}
				t.cancel = s.cancel
			}, rn.PUT = function(e, n, t) {
				var r = n.channel,
					i = n.action,
					a = n.resolve;
				He((function() {
					var n;
					try {
						n = (r ? r.put : e.dispatch)(i)
					} catch (e) {
						return void t(e, !0)
					}
					a && Z(n) ? tn(n, t) : t(n)
				}))
			}, rn.ALL = function(e, n, t, r) {
				var i = r.digestEffect,
					a = an,
					o = Object.keys(n);
				if (0 !== o.length) {
					var s = we(n, t);
					o.forEach((function(e) {
						i(n[e], a, s[e], e)
					}))
				} else t(Q(n) ? [] : {})
			}, rn.RACE = function(e, n, t, r) {
				var i = r.digestEffect,
					a = an,
					o = Object.keys(n),
					s = Q(n) ? ge(o.length) : {},
					l = {},
					c = !1;
				o.forEach((function(e) {
					var n = function(n, r) {
						c || (r || ye(n) ? (t.cancel(), t(n, r)) : (t.cancel(), c = !0, s[e] = n, t(s)))
					};
					n.cancel = se, l[e] = n
				})), t.cancel = function() {
					c || (c = !0, o.forEach((function(e) {
						return l[e].cancel()
					})))
				}, o.forEach((function(e) {
					c || i(n[e], a, l[e], e)
				}))
			}, rn.CALL = function(e, n, t, r) {
				var i = n.context,
					a = n.fn,
					o = n.args,
					s = r.task;
				try {
					var l = a.apply(i, o);
					if (Z(l)) return void tn(l, t);
					if (J(l)) return void bn(e, l, s.context, an, je(a), !1, t);
					t(l)
				} catch (e) {
					t(e, !0)
				}
			}, rn.CPS = function(e, n, t) {
				var r = n.context,
					i = n.fn,
					a = n.args;
				try {
					var o = function(e, n) {
						V(e) ? t(n) : t(e, !0)
					};
					i.apply(r, a.concat(o)), o.cancel && (t.cancel = o.cancel)
				} catch (e) {
					t(e, !0)
				}
			}, rn.FORK = function(e, n, t, r) {
				var i = n.context,
					a = n.fn,
					o = n.args,
					s = n.detached,
					l = r.task,
					c = function(e) {
						var n = e.context,
							t = e.fn,
							r = e.args;
						try {
							var i = t.apply(n, r);
							if (J(i)) return i;
							var a = !1;
							return he((function(e) {
								return a ? {
									value: e,
									done: !0
								} : (a = !0, {
									value: i,
									done: !Z(i)
								})
							}))
						} catch (e) {
							return he((function() {
								throw e
							}))
						}
					}({
						context: i,
						fn: a,
						args: o
					}),
					u = function(e, n) {
						return e.isSagaIterator ? {
							name: e.meta.name
						} : je(n)
					}(c, a);
				Be((function() {
					var n = bn(e, c, l.context, an, u, s, void 0);
					s ? t(n) : n.isRunning() ? (l.queue.addTask(n), t(n)) : n.isAborted() ? l.queue.abort(n.error()) : t(n)
				}))
			}, rn.JOIN = function(e, n, t, r) {
				var i = r.task,
					a = function(e, n) {
						if (e.isRunning()) {
							var t = {
								task: i,
								cb: n
							};
							n.cancel = function() {
								e.isRunning() && ue(e.joiners, t)
							}, e.joiners.push(t)
						} else e.isAborted() ? n(e.error(), !0) : n(e.result())
					};
				if (Q(n)) {
					if (0 === n.length) return void t([]);
					var o = we(n, t);
					n.forEach((function(e, n) {
						a(e, o[n])
					}))
				} else a(n, t)
			}, rn.CANCEL = function(e, n, t, r) {
				var i = r.task;
				n === B ? sn(i) : Q(n) ? n.forEach(sn) : sn(n), t()
			}, rn.SELECT = function(e, n, t) {
				var r = n.selector,
					i = n.args;
				try {
					t(r.apply(void 0, [e.getState()].concat(i)))
				} catch (e) {
					t(e, !0)
				}
			}, rn.ACTION_CHANNEL = function(e, n, t) {
				var r = n.pattern,
					i = en(n.buffer),
					a = Qe(r),
					o = function n(t) {
						Je(t) || e.channel.take(n, a), i.put(t)
					},
					s = i.close;
				i.close = function() {
					o.cancel(), s()
				}, e.channel.take(o, a), t(i)
			}, rn.CANCELLED = function(e, n, t, r) {
				t(r.task.isCancelled())
			}, rn.FLUSH = function(e, n, t) {
				n.flush(t)
			}, rn.GET_CONTEXT = function(e, n, t, r) {
				t(r.task.context[n])
			}, rn.SET_CONTEXT = function(e, n, t, r) {
				var i = r.task;
				ce(i.context, n), t()
			}, rn);

		function cn(e, n) {
			return e + "?" + n
		}

		function un(e) {
			var n = e.name,
				t = e.location;
			return t ? n + "  " + cn(t.fileName, t.lineNumber) : n
		}

		function dn(e) {
			var n, t, r = (n = e, (t = [])
				.concat.apply(t, n.map((function(e) {
					return e.cancelledTasks
				}))));
			return r.length ? ["Tasks cancelled due to error:"].concat(r)
				.join("\n") : ""
		}
		var pn = null,
			fn = [],
			hn = function(e) {
				e.crashedEffect = pn, fn.push(e)
			},
			mn = function() {
				pn = null, fn.length = 0
			},
			gn = function() {
				var e, n, t = fn[0],
					r = fn.slice(1),
					i = t.crashedEffect ? (e = t.crashedEffect, (n = ke(e)) ? n.code + "  " + cn(n.fileName, n.lineNumber) : "") : null;
				return ["The above error occurred in task " + un(t.meta) + (i ? " \n when executing effect " + i : "")].concat(r.map((function(e) {
						return "    created by " + un(e.meta)
					})), [dn(fn)])
					.join("\n")
			};

		function vn(e, n, t, r, i, a, o) {
			var s;
			void 0 === o && (o = se);
			var l, c, u = 0,
				d = null,
				p = [],
				f = Object.create(t),
				h = function(e, n, t) {
					var r, i = [],
						a = !1;

					function o(e) {
						p.push.apply(p, h.getTasks()
							.map((function(e) {
								return e.meta.name
							}))), l(), t(e, !0)
					}

					function s(n) {
						i.push(n), n.cont = function(s, l) {
							a || (ue(i, n), n.cont = se, l ? o(s) : (n === e && (r = s), i.length || (a = !0, t(r))))
						}
					}

					function l() {
						a || (a = !0, i.forEach((function(e) {
							e.cont = se, e.cancel()
						})), i = [])
					}
					return s(e), {
						addTask: s,
						cancelAll: l,
						abort: o,
						getTasks: function() {
							return i
						}
					}
				}(n, 0, m);

			function m(n, t) {
				if (t) {
					if (u = 2, hn({
						meta: i,
						cancelledTasks: p
					}), g.isRoot) {
						var r = gn();
						mn(), e.onError(n, {
							sagaStack: r
						})
					}
					c = n, d && d.reject(n)
				} else n === G ? u = 1 : 1 !== u && (u = 3), l = n, d && d.resolve(n);
				g.cont(n, t), g.joiners.forEach((function(e) {
					e.cb(n, t)
				})), g.joiners = null
			}
			var g = ((s = {})[W] = !0, s.id = r, s.meta = i, s.isRoot = a, s.context = f, s.joiners = [], s.queue = h, s.cancel = function() {
				0 === u && (u = 1, h.cancelAll(), m(G, !1))
			}, s.cont = o, s.end = m, s.setContext = function(e) {
				ce(f, e)
			}, s.toPromise = function() {
				return d || (d = De(), 2 === u ? d.reject(c) : 0 !== u && d.resolve(l)), d.promise
			}, s.isRunning = function() {
				return 0 === u
			}, s.isCancelled = function() {
				return 1 === u || 0 === u && 1 === n.status
			}, s.isAborted = function() {
				return 2 === u
			}, s.result = function() {
				return l
			}, s.error = function() {
				return c
			}, s);
			return g
		}

		function bn(e, n, t, r, i, a, o) {
			var s = e.finalizeRunEffect((function(n, t, r) {
				Z(n) ? tn(n, r) : J(n) ? bn(e, n, c.context, t, i, !1, r) : n && n[U] ? (0, ln[n.type])(e, n.payload, r, u) : r(n)
			}));
			d.cancel = se;
			var l = {
					meta: i,
					cancel: function() {
						0 === l.status && (l.status = 1, d(G))
					},
					status: 0
				},
				c = vn(e, l, t, r, i, a, o),
				u = {
					task: c,
					digestEffect: p
				};
			return o && (o.cancel = c.cancel), d(), c;

			function d(e, t) {
				try {
					var i;
					t ? (i = n.throw(e), mn()) : xe(e) ? (l.status = 1, d.cancel(), i = $(n.return) ? n.return(G) : {
						done: !0,
						value: G
					}) : i = be(e) ? $(n.return) ? n.return() : {
						done: !0
					} : n.next(e), i.done ? (1 !== l.status && (l.status = 3), l.cont(i.value)) : p(i.value, r, d)
				} catch (e) {
					if (1 === l.status) throw e;
					l.status = 2, l.cont(e, !0)
				}
			}

			function p(n, t, r, i) {
				void 0 === i && (i = "");
				var a, o = on();

				function l(t, i) {
					a || (a = !0, r.cancel = se, e.sagaMonitor && (i ? e.sagaMonitor.effectRejected(o, t) : e.sagaMonitor.effectResolved(o, t)), i && function(e) {
						pn = e
					}(n), r(t, i))
				}
				e.sagaMonitor && e.sagaMonitor.effectTriggered({
					effectId: o,
					parentEffectId: t,
					label: i,
					effect: n
				}), l.cancel = se, r.cancel = function() {
					a || (a = !0, l.cancel(), l.cancel = se, e.sagaMonitor && e.sagaMonitor.effectCancelled(o))
				}, s(n, o, l)
			}
		}

		function xn(e, n) {
			for (var t = e.channel, r = void 0 === t ? nn() : t, i = e.dispatch, a = e.getState, o = e.context, s = void 0 === o ? {} : o, l = e.sagaMonitor, c = e.effectMiddlewares, u = e.onError, d = void 0 === u ? me : u, p = arguments.length, f = new Array(p > 2 ? p - 2 : 0), h = 2; h < p; h++) f[h - 2] = arguments[h];
			var m, g = n.apply(void 0, f),
				v = on();
			if (l && (l.rootSagaStarted = l.rootSagaStarted || se, l.effectTriggered = l.effectTriggered || se, l.effectResolved = l.effectResolved || se, l.effectRejected = l.effectRejected || se, l.effectCancelled = l.effectCancelled || se, l.actionDispatched = l.actionDispatched || se, l.rootSagaStarted({
				effectId: v,
				saga: n,
				args: f
			})), c) {
				var b = P.apply(void 0, c);
				m = function(e) {
					return function(n, t, r) {
						return b((function(n) {
							return e(n, t, r)
						}))(n)
					}
				}
			} else m = le;
			var x = {
				channel: r,
				dispatch: ve(i),
				getState: a,
				sagaMonitor: l,
				onError: d,
				finalizeRunEffect: m
			};
			return Be((function() {
				var e = bn(x, g, s, v, je(n), !0, void 0);
				return l && l.effectResolved(v, e), e
			}))
		}
		const yn = function(e) {
			var n, t = void 0 === e ? {} : e,
				r = t.context,
				i = void 0 === r ? {} : r,
				a = t.channel,
				o = void 0 === a ? nn() : a,
				s = t.sagaMonitor,
				l = function(e, n) {
					if (null == e) return {};
					var t, r, i = {},
						a = Object.keys(e);
					for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (i[t] = e[t]);
					return i
				}(t, ["context", "channel", "sagaMonitor"]);

			function c(e) {
				var t = e.getState,
					r = e.dispatch;
				return n = xn.bind(null, h({}, l, {
						context: i,
						channel: o,
						dispatch: r,
						getState: t,
						sagaMonitor: s
					})),
					function(e) {
						return function(n) {
							s && s.actionDispatched && s.actionDispatched(n);
							var t = e(n);
							return o.put(n), t
						}
					}
			}
			return c.run = function() {
				return n.apply(void 0, arguments)
			}, c.setContext = function(e) {
				ce(i, e)
			}, c
		};
		var wn = function(e, n) {
				return {
					type: e,
					make: function(t) {
						return {
							type: e,
							payload: n(t)
						}
					}
				}
			},
			jn = function(e) {
				for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
				return function(n, r) {
					return t.reduce((function(e, n) {
						return n(e, r) || e
					}), n || e)
				}
			},
			kn = function(e, n) {
				return function(t, r) {
					return r.type === e.type ? n(t, r) : t
				}
			},
			Nn = function(e) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
					return e
				};
				return {
					type: e,
					send: function(r) {
						var i;
						return null === (i = t.g.worker) || void 0 === i ? void 0 : i.postMessage({
							type: e,
							payload: n(r)
						})
					}
				}
			},
			En = function() {
				this.actions = {
					list: []
				}, this.upgrades = {
					list: []
				}, this.buildings = {
					list: []
				}
			};
		const Sn = jn(new En);
		var Cn = function() {
			this.resources = []
		};
		const Tn = jn(new Cn);
		var On = function() {
			this.isUnlocked = !1, this.colonists = 0, this.maxColonists = 0, this.jobs = {
				list: [],
				freeWorkers: 0
			}, this.effects = {
				happiness: 0,
				effects: []
			}
		};
		const An = jn(new On);
		var _n = function() {
			this.isUnlocked = !1, this.maxSlots = 0, this.jobs = {
				list: [],
				craftingSlots: 0
			}
		};
		const Rn = jn(new _n);
		var In = function() {
			this.research = {
				list: []
			}, this.isUnlocked = !1
		};
		const Pn = jn(new In);
		var Ln = function() {
			this.index = 0, this.current = {
				requirements: [],
				id: "none",
				name: "None"
			}
		};
		const Mn = jn(new Ln);
		var Dn = function() {
			this.isUnlocked = !1, this.laws = []
		};
		const Un = jn(new Dn);
		var Fn = function() {
			this.isUnlocked = !0, this.spaceship = {
				isUnlocked: !1,
				list: []
			}, this.hangar = {
				isUnlocked: !1,
				ships: []
			}, this.fleet = {
				isUnlocked: !1,
				list: []
			}, this.battle = {
				isUnlocked: !1,
				battlefield: {
					level: 0,
					xpBonus: 1,
					kpBonus: 1,
					isAutoprogres: !1,
					isFighting: !1,
					isAutofight: !1,
					travelSpeed: 0,
					travelEta: "",
					travelProgress: 0,
					maxLevel: 0,
					fuelConsumption: 0
				},
				fleetSelectable: [],
				fight: {
					inProgress: !1,
					me: [],
					enemy: [],
					bullets: []
				},
				pilot: {
					xp: 0,
					maxXp: 10,
					level: 0,
					bonus: ""
				}
			}
		};
		const zn = jn(new Fn);
		var Hn = function() {
			this.isUnlocked = !1, this.isInProgress = !1, this.lastLooted = [], this.eta = "", this.percentage = 0, this.progress = 0, this.numExpeditions = 0, this.multiplier = "", this.currentX = 0, this.currentY = 0, this.runningX = 0, this.runningY = 0, this.map = {
				cells: []
			}, this.tileName = "", this.potentialEta = ""
		};
		const Bn = jn(new Hn);
		var Wn = function() {
			this.isUnlocked = !1, this.transmitKnowledge = {
				isUnlocked: !1,
				kp: "0",
				upgrades: [],
				prestige: {
					isAvailable: !1,
					potentialGain: "0",
					description: ""
				}
			}, this.colonizePlanet = {
				current: {
					name: "Default",
					description: "",
					cost: [],
					gain: [],
					gainMult: [],
					gainEffect: [],
					effectMult: [],
					consume: [],
					max: [],
					isAvailable: !0,
					consumeEffect: [],
					xpGain: 1,
					progress: "",
					maxMult: [],
					climateChange: "",
					daysPerYear: "365",
					climateHarshness: 1,
					disastersLevel: 0,
					starClass: "G",
					starModif: []
				},
				isPrestigeAvailable: !1,
				available: [],
				isUnlocked: !1,
				currentXP: 0,
				search: {
					isAvailable: !1,
					cost: [],
					progress: "",
					filter: {
						isAvailable: !1,
						modifierName: "None",
						modifiersAvailable: []
					},
					disastersLevel: 0
				},
				prestige: {
					isAvailable: !1,
					potentialGain: "",
					potentialBonus: "",
					currentBonus: "",
					gainBattleMult: "",
					gainBase: ""
				},
				upgrades: []
			}
		};
		const Gn = jn(new Wn);
		var Yn = function() {
			this.new = {}
		};
		const Xn = jn(new Yn);
		var Vn = function() {
			this.timeInGame = 0, this.timeThisPlanet = 0, this.timeThisPrestige = 0, this.maxColonists = 0, this.maxHappiness = 0, this.numPrestiges = 0, this.numColonized = 0, this.kpTotal = 0, this.kpMaxGain = 0, this.xpTotal = 0, this.xpMaxGain = 0, this.exoticCollected = 0
		};
		const qn = jn(new Vn);
		var $n = function() {
			this.climate = {
				year: 0,
				day: 0,
				season: "Undefined",
				temperature: "Absolute Zero"
			}, this.bankedTime = {
				multiplier: 1,
				amountLeft: 0
			}
		};
		const Kn = jn(new $n);
		var Qn = function() {
			this.slots = 0, this.maxSlots = 0, this.queue = [], this.selection = {
				isAvailable: !1,
				scopes: [],
				choices: {}
			}
		};
		const Zn = jn(new Qn);
		var Jn, et, nt, tt;
		! function(e) {
			e.STONE = "stone", e.POWER = "power", e.ORE = "ore", e.BIOMASS = "biomass", e.OXYGEN = "oxygen", e.NUTRITION = "nutrition", e.WATER = "water", e.RESEARCH = "research", e.WOOD = "wood", e.IRON = "iron", e.PLATINUM = "platinum", e.ANOMALITIES = "anomalities", e.DARK_MATTER = "dark-matter", e.ANTIMATTER = "antimatter", e.PRESSED_BLOCK = "pressed-block", e.BEAM = "beam", e.BRICK = "brick", e.PLATE = "plate", e.WIRE = "wire", e.FUEL = "fuel", e.RUBBER = "rubber", e.PLASTICS = "plastics", e.SEMICONDUCTOR = "semiconductor", e.COMPUTER = "computer", e.ROCKET_ENGINE = "rocket-engine", e.GRAPHENE = "graphene", e.MAGNETO = "magneto", e.DM_BLOCK = "DM_BLOCK", e.KNOWLEDGE_POINT = "knowledge-point", e.COLONIZE_XP = "XP"
		}(Jn || (Jn = {})),
		function(e) {
			e.BUILDING = "Building", e.UPGRADE = "Upgrade", e.RESEARCH = "Research"
		}(et || (et = {})),
		function(e) {
			e.BUILDING = "Building", e.UPGRADE = "Upgrade", e.RESEARCH = "Research", e.LAW = "Law", e.ACTION = "Action", e.PRESTIGE = "Prestige", e.COLONIST_ARRIVED = "Colonist Arrived", e.COLONIST_DIED = "Colonist Died", e.EXPEDITION_ARRIVED = "Expedition", e.RARE_GAIN = "Rare Gain", e.EVENT = "Event", e.DISASTER = "Disaster"
		}(nt || (nt = {})),
		function(e) {
			e.DARK = "dark", e.BLACK = "black", e.LIGHT = "light"
		}(tt || (tt = {}));
		var rt = function() {
			var e;
			this.filters = ((e = {})[nt.UPGRADE] = !0, e[nt.ACTION] = !0, e[nt.RESEARCH] = !0, e[nt.RARE_GAIN] = !0, e[nt.PRESTIGE] = !0, e[nt.EXPEDITION_ARRIVED] = !0, e[nt.COLONIST_ARRIVED] = !0, e[nt.COLONIST_DIED] = !0, e[nt.BUILDING] = !0, e[nt.LAW] = !0, e[nt.EVENT] = !0, e[nt.DISASTER] = !0, e), this.events = []
		};
		const it = jn(new rt);
		var at = {
				setUI: wn("[game] update ui", (function(e) {
					return e
				})),
				purchaseMax: Nn("[game] purchase max", (function(e) {
					return e
				})),
				exportToFile: Nn("[game] export file", (function(e) {
					return e
				})),
				exportToText: Nn("[game] export text", (function(e) {
					return e
				})),
				loadGame: Nn("[game] load", (function(e) {
					return e
				})),
				triggerSave: Nn("[game] trigger save", (function(e) {
					return e
				})),
				turnAnimations: Nn("[game] toggle animations", (function(e) {
					return e
				})),
				toggleTheme: Nn("[game] toggle theme", (function(e) {
					return e
				})),
				abandonPlanet: Nn("[colonize-planet] do abandon", (function(e) {
					return e
				}))
			},
			ot = function() {
				return ot = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, ot.apply(this, arguments)
			},
			st = jn(new function() {
				this.landingZone = new En, this.colony = new On, this.science = new In, this.resources = new Cn, this.crafting = new _n, this.goals = new Ln, this.laws = new Dn, this.space = new Fn, this.prestige = new Wn, this.expeditions = new Hn, this.newNotifications = new Yn, this.statistics = new Vn, this.environment = new $n, this.queueItems = new Qn, this.eventLogs = new rt, this.settings = {
					turnAnimationsOn: !0,
					theme: tt.DARK
				}, this.timeInGame = "00:00:00", this.timeInPrestige = "00:00:00"
			}, kn(at.setUI, (function(e, n) {
				var t = n.payload;
				return ot(ot({}, e), t)
			}))),
			lt = function() {
				for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
				var r = "function" != typeof n[0] && n.shift(),
					i = n;
				if (void 0 === r) throw new TypeError("The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined.");
				return function(e, n) {
					for (var t = arguments.length, a = Array(t > 2 ? t - 2 : 0), o = 2; o < t; o++) a[o - 2] = arguments[o];
					var s = void 0 === e,
						l = void 0 === n;
					return s && l && r ? r : i.reduce((function(e, t, r) {
						if (void 0 === t) throw new TypeError("An undefined reducer was passed in at index " + r);
						return t.apply(void 0, [e, n].concat(a))
					}), s && !l && r ? r : e)
				}
			}(I({
				resources: Tn,
				landingZone: Sn,
				crafting: Rn,
				science: Pn,
				colony: An,
				goals: Mn,
				laws: Un,
				space: zn,
				expeditions: Bn,
				prestige: Gn,
				newNotifications: Xn,
				statistics: qn,
				environment: Kn,
				settings: jn({}),
				queueItems: Zn,
				eventLogs: it
			}), st);
		const ct = lt;
		var ut, dt, pt = {
			changePage: wn("[nav] change page", (function(e) {
				return e
			}))
		};
		! function(e) {
			e.PLANET = "planet", e.SPACE = "space", e.SCIENCE = "science", e.LAWS = "laws", e.PRESTIGE = "prestige", e.SETTINGS = "settings", e.STATISTICS = "statistics", e.ABOUT = "about"
		}(ut || (ut = {})),
		function(e) {
			e[e.INFO = 0] = "INFO", e[e.WARN = 1] = "WARN", e[e.ALERT = 2] = "ALERT"
		}(dt || (dt = {}));
		var ft = function() {
			return ft = Object.assign || function(e) {
				for (var n, t = 1, r = arguments.length; t < r; t++)
					for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
				return e
			}, ft.apply(this, arguments)
		};
		const ht = jn(new function() {
			this.page = ut.PLANET
		}, kn(pt.changePage, (function(e, n) {
			var t = n.payload;
			return ft(ft({}, e), {
				page: t,
				subPage: null
			})
		})));
		var mt = {
				setCollapsed: wn("[ui] set collapsed", (function(e) {
					return e
				})),
				setMissingHighlight: wn("[ui] highlight missing", (function(e) {
					return e
				})),
				setUsageHighlight: wn("[ui] highlight usage", (function(e) {
					return e
				})),
				setProduceHighlight: wn("[ui] highlight produce", (function(e) {
					return e
				})),
				setConsumeHighlight: wn("[ui] highlight consume", (function(e) {
					return e
				})),
				stopLoading: wn("[ui] stop loading", (function(e) {
					return e
				})),
				setKeyIsHold: wn("[ui] key is hold", (function(e) {
					return e
				}))
			},
			gt = function() {
				return gt = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, gt.apply(this, arguments)
			};
		const vt = jn(new function() {
			this.collapsedStatus = {}, this.missingResourcesHighlight = {}, this.producingResourcesHighlight = {}, this.consumingResourcesHighlight = {}, this.keys = {}, this.isLoading = !0
		}, kn(mt.setCollapsed, (function(e, n) {
			var t, r = n.payload;
			return gt(gt({}, e), {
				collapsedStatus: gt(gt({}, e.collapsedStatus), (t = {}, t[r.id] = r.status, t))
			})
		})), kn(mt.setMissingHighlight, (function(e, n) {
			var t = n.payload;
			return gt(gt({}, e), {
				missingResourcesHighlight: t
			})
		})), kn(mt.setUsageHighlight, (function(e, n) {
			var t = n.payload;
			return gt(gt({}, e), {
				usageHighlight: t
			})
		})), kn(mt.setProduceHighlight, (function(e, n) {
			var t = n.payload;
			return gt(gt({}, e), {
				producingResourcesHighlight: t
			})
		})), kn(mt.setConsumeHighlight, (function(e, n) {
			var t = n.payload;
			return gt(gt({}, e), {
				consumingResourcesHighlight: t
			})
		})), kn(mt.stopLoading, (function(e, n) {
			return n.payload, gt(gt({}, e), {
				isLoading: !1
			})
		})), kn(mt.setKeyIsHold, (function(e, n) {
			var t, r = n.payload;
			return r.key.toLowerCase(), gt(gt({}, e), {
				keys: gt(gt({}, e.keys), (t = {}, t[r.key] = !!r.isHold || void 0, t))
			})
		})));
		var bt = {
				postNotificationMessage: wn("[notification] post message", (function(e) {
					return e
				})),
				delNotification: wn("[notification] delete message", (function(e) {
					return e
				}))
			},
			xt = function() {
				return xt = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, xt.apply(this, arguments)
			},
			yt = function(e, n, t) {
				if (t || 2 === arguments.length)
					for (var r, i = 0, a = n.length; i < a; i++) !r && i in n || (r || (r = Array.prototype.slice.call(n, 0, i)), r[i] = n[i]);
				return e.concat(r || Array.prototype.slice.call(n))
			},
			wt = I({
				navigation: ht,
				notifications: jn(new function() {
					this.messages = []
				}, kn(bt.postNotificationMessage, (function(e, n) {
					var t = n.payload;
					return xt(xt({}, e), {
						messages: yt(yt([], e.messages, !0), [{
							id: "msg_".concat(Math.round(1e4 * Math.random())),
							message: t,
							date: new Date,
							type: dt.INFO
						}], !1)
					})
				})), kn(bt.delNotification, (function(e, n) {
					var t = n.payload;
					return xt(xt({}, e), {
						messages: e.messages.filter((function(e) {
							return e.id !== t
						}))
					})
				}))),
				uiState: vt
			});
		const jt = I({
			game: ct,
			ui: wt
		});
		var kt = function(e) {
				return {
					done: !0,
					value: e
				}
			},
			Nt = {};

		function Et(e) {
			return ne(e) ? "channel" : te(e) ? String(e) : $(e) ? e.name : String(e)
		}

		function St(e, n, t) {
			var r, i, a, o = n;

			function s(n, t) {
				if (o === Nt) return kt(n);
				if (t && !i) throw o = Nt, t;
				r && r(n);
				var s = t ? e[i](t) : e[o]();
				return o = s.nextState, a = s.effect, r = s.stateUpdater, i = s.errorState, o === Nt ? kt(n) : a
			}
			return he(s, (function(e) {
				return s(null, e)
			}), t)
		}

		function Ct(e, n) {
			for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), i = 2; i < t; i++) r[i - 2] = arguments[i];
			var a, o = {
					done: !1,
					value: Ae(e)
				},
				s = function(e) {
					return {
						done: !1,
						value: Pe.apply(void 0, [n].concat(r, [e]))
					}
				},
				l = function(e) {
					return a = e
				};
			return St({
				q1: function() {
					return {
						nextState: "q2",
						effect: o,
						stateUpdater: l
					}
				},
				q2: function() {
					return {
						nextState: "q1",
						effect: s(a)
					}
				}
			}, "q1", "takeEvery(" + Et(e) + ", " + n.name + ")")
		}

		function Tt(e, n) {
			for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), i = 2; i < t; i++) r[i - 2] = arguments[i];
			var a, o, s = {
					done: !1,
					value: Ae(e)
				},
				l = function(e) {
					return {
						done: !1,
						value: Pe.apply(void 0, [n].concat(r, [e]))
					}
				},
				c = function(e) {
					return {
						done: !1,
						value: Le(e)
					}
				},
				u = function(e) {
					return a = e
				},
				d = function(e) {
					return o = e
				};
			return St({
				q1: function() {
					return {
						nextState: "q2",
						effect: s,
						stateUpdater: d
					}
				},
				q2: function() {
					return a ? {
						nextState: "q3",
						effect: c(a)
					} : {
						nextState: "q1",
						effect: l(o),
						stateUpdater: u
					}
				},
				q3: function() {
					return {
						nextState: "q1",
						effect: l(o),
						stateUpdater: u
					}
				}
			}, "q1", "takeLatest(" + Et(e) + ", " + n.name + ")")
		}

		function Ot(e, n) {
			for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), i = 2; i < t; i++) r[i - 2] = arguments[i];
			return Pe.apply(void 0, [Ct, e, n].concat(r))
		}

		function At(e, n) {
			for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), i = 2; i < t; i++) r[i - 2] = arguments[i];
			return Pe.apply(void 0, [Tt, e, n].concat(r))
		}
		var _t = function(e, n) {
			var t, r, i, a, o = {
				label: 0,
				sent: function() {
					if (1 & i[0]) throw i[1];
					return i[1]
				},
				trys: [],
				ops: []
			};
			return a = {
				next: s(0),
				throw: s(1),
				return: s(2)
			}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
				return this
			}), a;

			function s(a) {
				return function(s) {
					return function(a) {
						if (t) throw new TypeError("Generator is already executing.");
						for (; o;) try {
							if (t = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1]))
								.done) return i;
							switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
								case 0:
								case 1:
									i = a;
									break;
								case 4:
									return o.label++, {
										value: a[1],
										done: !1
									};
								case 5:
									o.label++, r = a[1], a = [0];
									continue;
								case 7:
									a = o.ops.pop(), o.trys.pop();
									continue;
								default:
									if (!((i = (i = o.trys)
										.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
										o = 0;
										continue
									}
									if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
										o.label = a[1];
										break
									}
									if (6 === a[0] && o.label < i[1]) {
										o.label = i[1], i = a;
										break
									}
									if (i && o.label < i[2]) {
										o.label = i[2], o.ops.push(a);
										break
									}
									i[2] && o.ops.pop(), o.trys.pop();
									continue
							}
							a = n.call(e, o)
						} catch (e) {
							a = [6, e], r = 0
						} finally {
							t = i = 0
						}
						if (5 & a[0]) throw a[1];
						return {
							value: a[0] ? a[1] : void 0,
							done: !0
						}
					}([a, s])
				}
			}
		};
		const Rt = function() {
			function e() {}
			return e.exportGameString = function(e) {
				var n;
				return _t(this, (function(t) {
					return (n = document.getElementById("export-text-cont")) && (n.innerText = btoa(JSON.stringify(e.payload)), n.focus(), n.select()), [2]
				}))
			}, e.exportGame = function(e) {
				var n, t;
				return _t(this, (function(r) {
					return n = new Blob([JSON.stringify(e.payload)], {
							type: "text/html"
						}), (t = document.createElement("a"))
						.href = URL.createObjectURL(n), t.download = "ignited-space-save-".concat(new Date, ".json"), t.hidden = !0, document.body.appendChild(t), t.innerHTML = "someinnerhtml", t.click(), [2]
				}))
			}, e.run = function() {
				return _t(this, (function(n) {
					switch (n.label) {
						case 0:
							return [4, (t = [Ie(e.startupWorker), Ie(e.listen)], r = Oe("ALL", t), r.combinator = !0, r)];
						case 1:
							return n.sent(), [2]
					}
					var t, r
				}))
			}, e.saveGame = function(e) {
				var n = e.payload;
				return _t(this, (function(e) {
					return window.localStorage.setItem("gameData", JSON.stringify(n)), console.log("game saved", n), [2]
				}))
			}, e.saveAndReloadGame = function(e) {
				var n = e.payload;
				return _t(this, (function(e) {
					return window.localStorage.setItem("gameData", JSON.stringify(n)), console.log("game saved", n), window.location.reload(), [2]
				}))
			}, e.listen = function() {
				return _t(this, (function(n) {
					switch (n.label) {
						case 0:
							return [4, At("[game] save", e.saveGame)];
						case 1:
							return n.sent(), [4, At("[game] save and reload", e.saveAndReloadGame)];
						case 2:
							return n.sent(), [4, At("[game] export to file", e.exportGame)];
						case 3:
							return n.sent(), [4, At("[game] export to string", e.exportGameString)];
						case 4:
							return n.sent(), [4, At("loaded", e.listenInitialized)];
						case 5:
							return n.sent(), [2]
					}
				}))
			}, e.listenInitialized = function(e) {
				var n, r, i = e.payload;
				return _t(this, (function(e) {
					switch (e.label) {
						case 0:
							return n = t.g.worker, (r = localStorage.getItem("gameData")) ? [4, Me(3e3)] : [3, 2];
						case 1:
							e.sent(), n.postMessage({
								type: "[game] load",
								payload: JSON.parse(r)
							}), e.label = 2;
						case 2:
							return [4, Me(3e3)];
						case 3:
							return e.sent(), console.log("---LOADED---", i), [4, _e(mt.stopLoading.make())];
						case 4:
							return e.sent(), [2]
					}
				}))
			}, e.startupWorker = function() {
				var e;
				return _t(this, (function(n) {
					switch (n.label) {
						case 0:
							return e = new Worker(new URL(t.p + t.u(418), t.b)), t.g.worker = e, e.postMessage({
								type: "initialize",
								payload: {
									a: 1
								}
							}), [4, Ot(function(n, t) {
								void 0 === t && (t = Ne);
								var r, i, a = !1,
									o = en(t),
									s = function() {
										a || (a = !0, $(r) && r(), o.close())
									};
								return r = de((i = function(e) {
									Je(e) ? s() : o.put(e)
								}, e.onmessage = function(e) {
									i(e && e.data)
								}, r = function() {})), a && r(), {
									take: o.take,
									flush: o.flush,
									close: s
								}
							}(), (function(e) {
								return _t(this, (function(n) {
									switch (n.label) {
										case 0:
											return "object" != typeof e && (e = JSON.parse(e)), !0 === (e.type && "string" == typeof e.type) ? [3, 1] : [3, 3];
										case 1:
											return [4, _e(e)];
										case 2:
											return n.sent(), [3, 4];
										case 3:
											return [3, 4];
										case 4:
											return [2]
									}
								}))
							}))];
						case 1:
							return n.sent(), window.onkeydown = function(e) {
								"m" === e.key && at.purchaseMax.send()
							}, [2]
					}
				}))
			}, e
		}();
		var It = yn(),
			Pt = function e(n, t, r) {
				var i;
				if ("function" == typeof t && "function" == typeof r || "function" == typeof r && "function" == typeof arguments[3]) throw new Error(T(0));
				if ("function" == typeof t && void 0 === r && (r = t, t = void 0), void 0 !== r) {
					if ("function" != typeof r) throw new Error(T(1));
					return r(e)(n, t)
				}
				if ("function" != typeof n) throw new Error(T(2));
				var a = n,
					o = t,
					s = [],
					l = s,
					c = !1;

				function u() {
					l === s && (l = s.slice())
				}

				function d() {
					if (c) throw new Error(T(3));
					return o
				}

				function p(e) {
					if ("function" != typeof e) throw new Error(T(4));
					if (c) throw new Error(T(5));
					var n = !0;
					return u(), l.push(e),
						function() {
							if (n) {
								if (c) throw new Error(T(6));
								n = !1, u();
								var t = l.indexOf(e);
								l.splice(t, 1), s = null
							}
						}
				}

				function f(e) {
					if (!R(e)) throw new Error(T(7));
					if (void 0 === e.type) throw new Error(T(8));
					if (c) throw new Error(T(9));
					try {
						c = !0, o = a(o, e)
					} finally {
						c = !1
					}
					for (var n = s = l, t = 0; t < n.length; t++)(0, n[t])();
					return e
				}

				function h(e) {
					if ("function" != typeof e) throw new Error(T(10));
					a = e, f({
						type: _.REPLACE
					})
				}

				function m() {
					var e, n = p;
					return (e = {
						subscribe: function(e) {
							if ("object" != typeof e || null === e) throw new Error(T(11));

							function t() {
								e.next && e.next(d())
							}
							return t(), {
								unsubscribe: n(t)
							}
						}
					})[O] = function() {
						return this
					}, e
				}
				return f({
					type: _.INIT
				}), (i = {
					dispatch: f,
					subscribe: p,
					getState: d,
					replaceReducer: h
				})[O] = m, i
			}(jt, function() {
				for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
				return function(e) {
					return function() {
						var t = e.apply(void 0, arguments),
							r = function() {
								throw new Error(T(15))
							},
							i = {
								getState: t.getState,
								dispatch: function() {
									return r.apply(void 0, arguments)
								}
							},
							a = n.map((function(e) {
								return e(i)
							}));
						return r = P.apply(void 0, a)(t.dispatch), C(C({}, t), {}, {
							dispatch: r
						})
					}
				}
			}(It));

		function Lt() {
			return "undefined" != typeof window
		}

		function Mt() {
			return window.vam || "production"
		}

		function Dt() {
			return "development" === Mt()
		}

		function Ut(e, {
			[e]: n,
			...t
		}) {
			return t
		}

		function Ft(e = {
			debug: !0
		}) {
			var n;
			if (!Lt()) return;
			! function(e = "auto") {
				window.vam = "auto" !== e ? e : function() {
					try {
						const e = "production";
						if ("development" === e || "test" === e) return "development"
					} catch (e) {}
					return "production"
				}()
			}(e.mode), window.va || (window.va = function(...e) {
				(window.vaq = window.vaq || [])
				.push(e)
			}), e.beforeSend && (null == (n = window.va) || n.call(window, "beforeSend", e.beforeSend));
			const t = Dt() ? "https://va.vercel-scripts.com/v1/script.debug.js" : "/_vercel/insights/script.js";
			if (document.head.querySelector(`script[src*="${t}"]`)) return;
			const r = document.createElement("script");
			r.src = t, r.defer = !0, r.setAttribute("data-sdkn", "@vercel/analytics"), r.setAttribute("data-sdkv", "1.0.1"), Dt() && !1 === e.debug && r.setAttribute("data-debug", "false"), document.head.appendChild(r)
		}
		It.run(Rt.run);
		var zt = function(e, n) {
				var t, r;
				if (Lt())
					if (n) try {
						const t = function(e, n) {
							let t = e;
							const r = [];
							for (const [i, a] of Object.entries(e)) "object" == typeof a && null !== a && (n.strip ? t = Ut(i, t) : r.push(i));
							if (r.length > 0 && !n.strip) throw Error(`The following properties are not valid: ${r.join(", ")}. Only strings, numbers, booleans, and null are allowed.`);
							return t
						}(n, {
							strip: "production" === Mt()
						});
						null == (r = window.va) || r.call(window, "event", {
							name: e,
							data: t
						})
					} catch (e) {
						e instanceof Error && Dt() && console.error(e)
					} else null == (t = window.va) || t.call(window, "event", {
						name: e
					});
					else console.warn("[Vercel Web Analytics] Server-side execution of `track()` is currently not supported.")
			},
			Ht = t(3379),
			Bt = t.n(Ht),
			Wt = t(7795),
			Gt = t.n(Wt),
			Yt = t(569),
			Xt = t.n(Yt),
			Vt = t(3565),
			qt = t.n(Vt),
			$t = t(9216),
			Kt = t.n($t),
			Qt = t(4589),
			Zt = t.n(Qt),
			Jt = t(51),
			er = {};
		er.styleTagTransform = Zt(), er.setAttributes = qt(), er.insert = Xt()
			.bind(null, "head"), er.domAPI = Gt(), er.insertStyleElement = Kt(), Bt()(Jt.Z, er), Jt.Z && Jt.Z.locals && Jt.Z.locals;
		var nr = function(e) {
				return e.ui.navigation.page
			},
			tr = t(4184),
			rr = t.n(tr),
			ir = function(e) {
				return e.game.science
			},
			ar = function(e) {
				return e.game.science.isUnlocked
			},
			or = function(e) {
				return e.game.goals
			};

		function sr(e) {
			if (null == e) return window;
			if ("[object Window]" !== e.toString()) {
				var n = e.ownerDocument;
				return n && n.defaultView || window
			}
			return e
		}

		function lr(e) {
			return e instanceof sr(e)
				.Element || e instanceof Element
		}

		function cr(e) {
			return e instanceof sr(e)
				.HTMLElement || e instanceof HTMLElement
		}

		function ur(e) {
			return "undefined" != typeof ShadowRoot && (e instanceof sr(e)
				.ShadowRoot || e instanceof ShadowRoot)
		}
		var dr = Math.max,
			pr = Math.min,
			fr = Math.round;

		function hr() {
			var e = navigator.userAgentData;
			return null != e && e.brands ? e.brands.map((function(e) {
					return e.brand + "/" + e.version
				}))
				.join(" ") : navigator.userAgent
		}

		function mr() {
			return !/^((?!chrome|android).)*safari/i.test(hr())
		}

		function gr(e, n, t) {
			void 0 === n && (n = !1), void 0 === t && (t = !1);
			var r = e.getBoundingClientRect(),
				i = 1,
				a = 1;
			n && cr(e) && (i = e.offsetWidth > 0 && fr(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && fr(r.height) / e.offsetHeight || 1);
			var o = (lr(e) ? sr(e) : window)
				.visualViewport,
				s = !mr() && t,
				l = (r.left + (s && o ? o.offsetLeft : 0)) / i,
				c = (r.top + (s && o ? o.offsetTop : 0)) / a,
				u = r.width / i,
				d = r.height / a;
			return {
				width: u,
				height: d,
				top: c,
				right: l + u,
				bottom: c + d,
				left: l,
				x: l,
				y: c
			}
		}

		function vr(e) {
			var n = sr(e);
			return {
				scrollLeft: n.pageXOffset,
				scrollTop: n.pageYOffset
			}
		}

		function br(e) {
			return e ? (e.nodeName || "")
				.toLowerCase() : null
		}

		function xr(e) {
			return ((lr(e) ? e.ownerDocument : e.document) || window.document)
				.documentElement
		}

		function yr(e) {
			return gr(xr(e))
				.left + vr(e)
				.scrollLeft
		}

		function wr(e) {
			return sr(e)
				.getComputedStyle(e)
		}

		function jr(e) {
			var n = wr(e),
				t = n.overflow,
				r = n.overflowX,
				i = n.overflowY;
			return /auto|scroll|overlay|hidden/.test(t + i + r)
		}

		function kr(e, n, t) {
			void 0 === t && (t = !1);
			var r, i, a = cr(n),
				o = cr(n) && function(e) {
					var n = e.getBoundingClientRect(),
						t = fr(n.width) / e.offsetWidth || 1,
						r = fr(n.height) / e.offsetHeight || 1;
					return 1 !== t || 1 !== r
				}(n),
				s = xr(n),
				l = gr(e, o, t),
				c = {
					scrollLeft: 0,
					scrollTop: 0
				},
				u = {
					x: 0,
					y: 0
				};
			return (a || !a && !t) && (("body" !== br(n) || jr(s)) && (c = (r = n) !== sr(r) && cr(r) ? {
				scrollLeft: (i = r)
					.scrollLeft,
				scrollTop: i.scrollTop
			} : vr(r)), cr(n) ? ((u = gr(n, !0))
				.x += n.clientLeft, u.y += n.clientTop) : s && (u.x = yr(s))), {
				x: l.left + c.scrollLeft - u.x,
				y: l.top + c.scrollTop - u.y,
				width: l.width,
				height: l.height
			}
		}

		function Nr(e) {
			var n = gr(e),
				t = e.offsetWidth,
				r = e.offsetHeight;
			return Math.abs(n.width - t) <= 1 && (t = n.width), Math.abs(n.height - r) <= 1 && (r = n.height), {
				x: e.offsetLeft,
				y: e.offsetTop,
				width: t,
				height: r
			}
		}

		function Er(e) {
			return "html" === br(e) ? e : e.assignedSlot || e.parentNode || (ur(e) ? e.host : null) || xr(e)
		}

		function Sr(e) {
			return ["html", "body", "#document"].indexOf(br(e)) >= 0 ? e.ownerDocument.body : cr(e) && jr(e) ? e : Sr(Er(e))
		}

		function Cr(e, n) {
			var t;
			void 0 === n && (n = []);
			var r = Sr(e),
				i = r === (null == (t = e.ownerDocument) ? void 0 : t.body),
				a = sr(r),
				o = i ? [a].concat(a.visualViewport || [], jr(r) ? r : []) : r,
				s = n.concat(o);
			return i ? s : s.concat(Cr(Er(o)))
		}

		function Tr(e) {
			return ["table", "td", "th"].indexOf(br(e)) >= 0
		}

		function Or(e) {
			return cr(e) && "fixed" !== wr(e)
				.position ? e.offsetParent : null
		}

		function Ar(e) {
			for (var n = sr(e), t = Or(e); t && Tr(t) && "static" === wr(t)
				.position;) t = Or(t);
			return t && ("html" === br(t) || "body" === br(t) && "static" === wr(t)
				.position) ? n : t || function(e) {
				var n = /firefox/i.test(hr());
				if (/Trident/i.test(hr()) && cr(e) && "fixed" === wr(e)
					.position) return null;
				var t = Er(e);
				for (ur(t) && (t = t.host); cr(t) && ["html", "body"].indexOf(br(t)) < 0;) {
					var r = wr(t);
					if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || n && "filter" === r.willChange || n && r.filter && "none" !== r.filter) return t;
					t = t.parentNode
				}
				return null
			}(e) || n
		}
		var _r = "top",
			Rr = "bottom",
			Ir = "right",
			Pr = "left",
			Lr = "auto",
			Mr = [_r, Rr, Ir, Pr],
			Dr = "start",
			Ur = "end",
			Fr = "viewport",
			zr = "popper",
			Hr = Mr.reduce((function(e, n) {
				return e.concat([n + "-" + Dr, n + "-" + Ur])
			}), []),
			Br = [].concat(Mr, [Lr])
			.reduce((function(e, n) {
				return e.concat([n, n + "-" + Dr, n + "-" + Ur])
			}), []),
			Wr = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

		function Gr(e) {
			var n = new Map,
				t = new Set,
				r = [];

			function i(e) {
				t.add(e.name), [].concat(e.requires || [], e.requiresIfExists || [])
					.forEach((function(e) {
						if (!t.has(e)) {
							var r = n.get(e);
							r && i(r)
						}
					})), r.push(e)
			}
			return e.forEach((function(e) {
				n.set(e.name, e)
			})), e.forEach((function(e) {
				t.has(e.name) || i(e)
			})), r
		}
		var Yr = {
			placement: "bottom",
			modifiers: [],
			strategy: "absolute"
		};

		function Xr() {
			for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
			return !n.some((function(e) {
				return !(e && "function" == typeof e.getBoundingClientRect)
			}))
		}

		function Vr(e) {
			void 0 === e && (e = {});
			var n = e,
				t = n.defaultModifiers,
				r = void 0 === t ? [] : t,
				i = n.defaultOptions,
				a = void 0 === i ? Yr : i;
			return function(e, n, t) {
				void 0 === t && (t = a);
				var i, o, s = {
						placement: "bottom",
						orderedModifiers: [],
						options: Object.assign({}, Yr, a),
						modifiersData: {},
						elements: {
							reference: e,
							popper: n
						},
						attributes: {},
						styles: {}
					},
					l = [],
					c = !1,
					u = {
						state: s,
						setOptions: function(t) {
							var i = "function" == typeof t ? t(s.options) : t;
							d(), s.options = Object.assign({}, a, s.options, i), s.scrollParents = {
								reference: lr(e) ? Cr(e) : e.contextElement ? Cr(e.contextElement) : [],
								popper: Cr(n)
							};
							var o, c, p = function(e) {
								var n = Gr(e);
								return Wr.reduce((function(e, t) {
									return e.concat(n.filter((function(e) {
										return e.phase === t
									})))
								}), [])
							}((o = [].concat(r, s.options.modifiers), c = o.reduce((function(e, n) {
									var t = e[n.name];
									return e[n.name] = t ? Object.assign({}, t, n, {
										options: Object.assign({}, t.options, n.options),
										data: Object.assign({}, t.data, n.data)
									}) : n, e
								}), {}), Object.keys(c)
								.map((function(e) {
									return c[e]
								}))));
							return s.orderedModifiers = p.filter((function(e) {
								return e.enabled
							})), s.orderedModifiers.forEach((function(e) {
								var n = e.name,
									t = e.options,
									r = void 0 === t ? {} : t,
									i = e.effect;
								if ("function" == typeof i) {
									var a = i({
										state: s,
										name: n,
										instance: u,
										options: r
									});
									l.push(a || function() {})
								}
							})), u.update()
						},
						forceUpdate: function() {
							if (!c) {
								var e = s.elements,
									n = e.reference,
									t = e.popper;
								if (Xr(n, t)) {
									s.rects = {
										reference: kr(n, Ar(t), "fixed" === s.options.strategy),
										popper: Nr(t)
									}, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach((function(e) {
										return s.modifiersData[e.name] = Object.assign({}, e.data)
									}));
									for (var r = 0; r < s.orderedModifiers.length; r++)
										if (!0 !== s.reset) {
											var i = s.orderedModifiers[r],
												a = i.fn,
												o = i.options,
												l = void 0 === o ? {} : o,
												d = i.name;
											"function" == typeof a && (s = a({
												state: s,
												options: l,
												name: d,
												instance: u
											}) || s)
										} else s.reset = !1, r = -1
								}
							}
						},
						update: (i = function() {
							return new Promise((function(e) {
								u.forceUpdate(), e(s)
							}))
						}, function() {
							return o || (o = new Promise((function(e) {
								Promise.resolve()
									.then((function() {
										o = void 0, e(i())
									}))
							}))), o
						}),
						destroy: function() {
							d(), c = !0
						}
					};
				if (!Xr(e, n)) return u;

				function d() {
					l.forEach((function(e) {
						return e()
					})), l = []
				}
				return u.setOptions(t)
					.then((function(e) {
						!c && t.onFirstUpdate && t.onFirstUpdate(e)
					})), u
			}
		}
		var qr = {
			passive: !0
		};
		const $r = {
			name: "eventListeners",
			enabled: !0,
			phase: "write",
			fn: function() {},
			effect: function(e) {
				var n = e.state,
					t = e.instance,
					r = e.options,
					i = r.scroll,
					a = void 0 === i || i,
					o = r.resize,
					s = void 0 === o || o,
					l = sr(n.elements.popper),
					c = [].concat(n.scrollParents.reference, n.scrollParents.popper);
				return a && c.forEach((function(e) {
						e.addEventListener("scroll", t.update, qr)
					})), s && l.addEventListener("resize", t.update, qr),
					function() {
						a && c.forEach((function(e) {
							e.removeEventListener("scroll", t.update, qr)
						})), s && l.removeEventListener("resize", t.update, qr)
					}
			},
			data: {}
		};

		function Kr(e) {
			return e.split("-")[0]
		}

		function Qr(e) {
			return e.split("-")[1]
		}

		function Zr(e) {
			return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
		}

		function Jr(e) {
			var n, t = e.reference,
				r = e.element,
				i = e.placement,
				a = i ? Kr(i) : null,
				o = i ? Qr(i) : null,
				s = t.x + t.width / 2 - r.width / 2,
				l = t.y + t.height / 2 - r.height / 2;
			switch (a) {
				case _r:
					n = {
						x: s,
						y: t.y - r.height
					};
					break;
				case Rr:
					n = {
						x: s,
						y: t.y + t.height
					};
					break;
				case Ir:
					n = {
						x: t.x + t.width,
						y: l
					};
					break;
				case Pr:
					n = {
						x: t.x - r.width,
						y: l
					};
					break;
				default:
					n = {
						x: t.x,
						y: t.y
					}
			}
			var c = a ? Zr(a) : null;
			if (null != c) {
				var u = "y" === c ? "height" : "width";
				switch (o) {
					case Dr:
						n[c] = n[c] - (t[u] / 2 - r[u] / 2);
						break;
					case Ur:
						n[c] = n[c] + (t[u] / 2 - r[u] / 2)
				}
			}
			return n
		}
		var ei = {
			top: "auto",
			right: "auto",
			bottom: "auto",
			left: "auto"
		};

		function ni(e) {
			var n, t = e.popper,
				r = e.popperRect,
				i = e.placement,
				a = e.variation,
				o = e.offsets,
				s = e.position,
				l = e.gpuAcceleration,
				c = e.adaptive,
				u = e.roundOffsets,
				d = e.isFixed,
				p = o.x,
				f = void 0 === p ? 0 : p,
				h = o.y,
				m = void 0 === h ? 0 : h,
				g = "function" == typeof u ? u({
					x: f,
					y: m
				}) : {
					x: f,
					y: m
				};
			f = g.x, m = g.y;
			var v = o.hasOwnProperty("x"),
				b = o.hasOwnProperty("y"),
				x = Pr,
				y = _r,
				w = window;
			if (c) {
				var j = Ar(t),
					k = "clientHeight",
					N = "clientWidth";
				j === sr(t) && "static" !== wr(j = xr(t))
					.position && "absolute" === s && (k = "scrollHeight", N = "scrollWidth"), j = j, (i === _r || (i === Pr || i === Ir) && a === Ur) && (y = Rr, m -= (d && j === w && w.visualViewport ? w.visualViewport.height : j[k]) - r.height, m *= l ? 1 : -1), i !== Pr && (i !== _r && i !== Rr || a !== Ur) || (x = Ir, f -= (d && j === w && w.visualViewport ? w.visualViewport.width : j[N]) - r.width, f *= l ? 1 : -1)
			}
			var E, S = Object.assign({
					position: s
				}, c && ei),
				C = !0 === u ? function(e) {
					var n = e.x,
						t = e.y,
						r = window.devicePixelRatio || 1;
					return {
						x: fr(n * r) / r || 0,
						y: fr(t * r) / r || 0
					}
				}({
					x: f,
					y: m
				}) : {
					x: f,
					y: m
				};
			return f = C.x, m = C.y, l ? Object.assign({}, S, ((E = {})[y] = b ? "0" : "", E[x] = v ? "0" : "", E.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", E)) : Object.assign({}, S, ((n = {})[y] = b ? m + "px" : "", n[x] = v ? f + "px" : "", n.transform = "", n))
		}
		const ti = {
				name: "computeStyles",
				enabled: !0,
				phase: "beforeWrite",
				fn: function(e) {
					var n = e.state,
						t = e.options,
						r = t.gpuAcceleration,
						i = void 0 === r || r,
						a = t.adaptive,
						o = void 0 === a || a,
						s = t.roundOffsets,
						l = void 0 === s || s,
						c = {
							placement: Kr(n.placement),
							variation: Qr(n.placement),
							popper: n.elements.popper,
							popperRect: n.rects.popper,
							gpuAcceleration: i,
							isFixed: "fixed" === n.options.strategy
						};
					null != n.modifiersData.popperOffsets && (n.styles.popper = Object.assign({}, n.styles.popper, ni(Object.assign({}, c, {
						offsets: n.modifiersData.popperOffsets,
						position: n.options.strategy,
						adaptive: o,
						roundOffsets: l
					})))), null != n.modifiersData.arrow && (n.styles.arrow = Object.assign({}, n.styles.arrow, ni(Object.assign({}, c, {
						offsets: n.modifiersData.arrow,
						position: "absolute",
						adaptive: !1,
						roundOffsets: l
					})))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
						"data-popper-placement": n.placement
					})
				},
				data: {}
			},
			ri = {
				name: "applyStyles",
				enabled: !0,
				phase: "write",
				fn: function(e) {
					var n = e.state;
					Object.keys(n.elements)
						.forEach((function(e) {
							var t = n.styles[e] || {},
								r = n.attributes[e] || {},
								i = n.elements[e];
							cr(i) && br(i) && (Object.assign(i.style, t), Object.keys(r)
								.forEach((function(e) {
									var n = r[e];
									!1 === n ? i.removeAttribute(e) : i.setAttribute(e, !0 === n ? "" : n)
								})))
						}))
				},
				effect: function(e) {
					var n = e.state,
						t = {
							popper: {
								position: n.options.strategy,
								left: "0",
								top: "0",
								margin: "0"
							},
							arrow: {
								position: "absolute"
							},
							reference: {}
						};
					return Object.assign(n.elements.popper.style, t.popper), n.styles = t, n.elements.arrow && Object.assign(n.elements.arrow.style, t.arrow),
						function() {
							Object.keys(n.elements)
								.forEach((function(e) {
									var r = n.elements[e],
										i = n.attributes[e] || {},
										a = Object.keys(n.styles.hasOwnProperty(e) ? n.styles[e] : t[e])
										.reduce((function(e, n) {
											return e[n] = "", e
										}), {});
									cr(r) && br(r) && (Object.assign(r.style, a), Object.keys(i)
										.forEach((function(e) {
											r.removeAttribute(e)
										})))
								}))
						}
				},
				requires: ["computeStyles"]
			},
			ii = {
				name: "offset",
				enabled: !0,
				phase: "main",
				requires: ["popperOffsets"],
				fn: function(e) {
					var n = e.state,
						t = e.options,
						r = e.name,
						i = t.offset,
						a = void 0 === i ? [0, 0] : i,
						o = Br.reduce((function(e, t) {
							return e[t] = function(e, n, t) {
								var r = Kr(e),
									i = [Pr, _r].indexOf(r) >= 0 ? -1 : 1,
									a = "function" == typeof t ? t(Object.assign({}, n, {
										placement: e
									})) : t,
									o = a[0],
									s = a[1];
								return o = o || 0, s = (s || 0) * i, [Pr, Ir].indexOf(r) >= 0 ? {
									x: s,
									y: o
								} : {
									x: o,
									y: s
								}
							}(t, n.rects, a), e
						}), {}),
						s = o[n.placement],
						l = s.x,
						c = s.y;
					null != n.modifiersData.popperOffsets && (n.modifiersData.popperOffsets.x += l, n.modifiersData.popperOffsets.y += c), n.modifiersData[r] = o
				}
			};
		var ai = {
			left: "right",
			right: "left",
			bottom: "top",
			top: "bottom"
		};

		function oi(e) {
			return e.replace(/left|right|bottom|top/g, (function(e) {
				return ai[e]
			}))
		}
		var si = {
			start: "end",
			end: "start"
		};

		function li(e) {
			return e.replace(/start|end/g, (function(e) {
				return si[e]
			}))
		}

		function ci(e, n) {
			var t = n.getRootNode && n.getRootNode();
			if (e.contains(n)) return !0;
			if (t && ur(t)) {
				var r = n;
				do {
					if (r && e.isSameNode(r)) return !0;
					r = r.parentNode || r.host
				} while (r)
			}
			return !1
		}

		function ui(e) {
			return Object.assign({}, e, {
				left: e.x,
				top: e.y,
				right: e.x + e.width,
				bottom: e.y + e.height
			})
		}

		function di(e, n, t) {
			return n === Fr ? ui(function(e, n) {
				var t = sr(e),
					r = xr(e),
					i = t.visualViewport,
					a = r.clientWidth,
					o = r.clientHeight,
					s = 0,
					l = 0;
				if (i) {
					a = i.width, o = i.height;
					var c = mr();
					(c || !c && "fixed" === n) && (s = i.offsetLeft, l = i.offsetTop)
				}
				return {
					width: a,
					height: o,
					x: s + yr(e),
					y: l
				}
			}(e, t)) : lr(n) ? function(e, n) {
				var t = gr(e, !1, "fixed" === n);
				return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
			}(n, t) : ui(function(e) {
				var n, t = xr(e),
					r = vr(e),
					i = null == (n = e.ownerDocument) ? void 0 : n.body,
					a = dr(t.scrollWidth, t.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
					o = dr(t.scrollHeight, t.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
					s = -r.scrollLeft + yr(e),
					l = -r.scrollTop;
				return "rtl" === wr(i || t)
					.direction && (s += dr(t.clientWidth, i ? i.clientWidth : 0) - a), {
						width: a,
						height: o,
						x: s,
						y: l
					}
			}(xr(e)))
		}

		function pi(e) {
			return Object.assign({}, {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			}, e)
		}

		function fi(e, n) {
			return n.reduce((function(n, t) {
				return n[t] = e, n
			}), {})
		}

		function hi(e, n) {
			void 0 === n && (n = {});
			var t = n,
				r = t.placement,
				i = void 0 === r ? e.placement : r,
				a = t.strategy,
				o = void 0 === a ? e.strategy : a,
				s = t.boundary,
				l = void 0 === s ? "clippingParents" : s,
				c = t.rootBoundary,
				u = void 0 === c ? Fr : c,
				d = t.elementContext,
				p = void 0 === d ? zr : d,
				f = t.altBoundary,
				h = void 0 !== f && f,
				m = t.padding,
				g = void 0 === m ? 0 : m,
				v = pi("number" != typeof g ? g : fi(g, Mr)),
				b = p === zr ? "reference" : zr,
				x = e.rects.popper,
				y = e.elements[h ? b : p],
				w = function(e, n, t, r) {
					var i = "clippingParents" === n ? function(e) {
							var n = Cr(Er(e)),
								t = ["absolute", "fixed"].indexOf(wr(e)
									.position) >= 0 && cr(e) ? Ar(e) : e;
							return lr(t) ? n.filter((function(e) {
								return lr(e) && ci(e, t) && "body" !== br(e)
							})) : []
						}(e) : [].concat(n),
						a = [].concat(i, [t]),
						o = a[0],
						s = a.reduce((function(n, t) {
							var i = di(e, t, r);
							return n.top = dr(i.top, n.top), n.right = pr(i.right, n.right), n.bottom = pr(i.bottom, n.bottom), n.left = dr(i.left, n.left), n
						}), di(e, o, r));
					return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
				}(lr(y) ? y : y.contextElement || xr(e.elements.popper), l, u, o),
				j = gr(e.elements.reference),
				k = Jr({
					reference: j,
					element: x,
					strategy: "absolute",
					placement: i
				}),
				N = ui(Object.assign({}, x, k)),
				E = p === zr ? N : j,
				S = {
					top: w.top - E.top + v.top,
					bottom: E.bottom - w.bottom + v.bottom,
					left: w.left - E.left + v.left,
					right: E.right - w.right + v.right
				},
				C = e.modifiersData.offset;
			if (p === zr && C) {
				var T = C[i];
				Object.keys(S)
					.forEach((function(e) {
						var n = [Ir, Rr].indexOf(e) >= 0 ? 1 : -1,
							t = [_r, Rr].indexOf(e) >= 0 ? "y" : "x";
						S[e] += T[t] * n
					}))
			}
			return S
		}
		const mi = {
			name: "flip",
			enabled: !0,
			phase: "main",
			fn: function(e) {
				var n = e.state,
					t = e.options,
					r = e.name;
				if (!n.modifiersData[r]._skip) {
					for (var i = t.mainAxis, a = void 0 === i || i, o = t.altAxis, s = void 0 === o || o, l = t.fallbackPlacements, c = t.padding, u = t.boundary, d = t.rootBoundary, p = t.altBoundary, f = t.flipVariations, h = void 0 === f || f, m = t.allowedAutoPlacements, g = n.options.placement, v = Kr(g), b = l || (v !== g && h ? function(e) {
							if (Kr(e) === Lr) return [];
							var n = oi(e);
							return [li(e), n, li(n)]
						}(g) : [oi(g)]), x = [g].concat(b)
						.reduce((function(e, t) {
							return e.concat(Kr(t) === Lr ? function(e, n) {
								void 0 === n && (n = {});
								var t = n,
									r = t.placement,
									i = t.boundary,
									a = t.rootBoundary,
									o = t.padding,
									s = t.flipVariations,
									l = t.allowedAutoPlacements,
									c = void 0 === l ? Br : l,
									u = Qr(r),
									d = u ? s ? Hr : Hr.filter((function(e) {
										return Qr(e) === u
									})) : Mr,
									p = d.filter((function(e) {
										return c.indexOf(e) >= 0
									}));
								0 === p.length && (p = d);
								var f = p.reduce((function(n, t) {
									return n[t] = hi(e, {
										placement: t,
										boundary: i,
										rootBoundary: a,
										padding: o
									})[Kr(t)], n
								}), {});
								return Object.keys(f)
									.sort((function(e, n) {
										return f[e] - f[n]
									}))
							}(n, {
								placement: t,
								boundary: u,
								rootBoundary: d,
								padding: c,
								flipVariations: h,
								allowedAutoPlacements: m
							}) : t)
						}), []), y = n.rects.reference, w = n.rects.popper, j = new Map, k = !0, N = x[0], E = 0; E < x.length; E++) {
						var S = x[E],
							C = Kr(S),
							T = Qr(S) === Dr,
							O = [_r, Rr].indexOf(C) >= 0,
							A = O ? "width" : "height",
							_ = hi(n, {
								placement: S,
								boundary: u,
								rootBoundary: d,
								altBoundary: p,
								padding: c
							}),
							R = O ? T ? Ir : Pr : T ? Rr : _r;
						y[A] > w[A] && (R = oi(R));
						var I = oi(R),
							P = [];
						if (a && P.push(_[C] <= 0), s && P.push(_[R] <= 0, _[I] <= 0), P.every((function(e) {
							return e
						}))) {
							N = S, k = !1;
							break
						}
						j.set(S, P)
					}
					if (k)
						for (var L = function(e) {
							var n = x.find((function(n) {
								var t = j.get(n);
								if (t) return t.slice(0, e)
									.every((function(e) {
										return e
									}))
							}));
							if (n) return N = n, "break"
						}, M = h ? 3 : 1; M > 0 && "break" !== L(M); M--);
					n.placement !== N && (n.modifiersData[r]._skip = !0, n.placement = N, n.reset = !0)
				}
			},
			requiresIfExists: ["offset"],
			data: {
				_skip: !1
			}
		};

		function gi(e, n, t) {
			return dr(e, pr(n, t))
		}
		const vi = {
				name: "preventOverflow",
				enabled: !0,
				phase: "main",
				fn: function(e) {
					var n = e.state,
						t = e.options,
						r = e.name,
						i = t.mainAxis,
						a = void 0 === i || i,
						o = t.altAxis,
						s = void 0 !== o && o,
						l = t.boundary,
						c = t.rootBoundary,
						u = t.altBoundary,
						d = t.padding,
						p = t.tether,
						f = void 0 === p || p,
						h = t.tetherOffset,
						m = void 0 === h ? 0 : h,
						g = hi(n, {
							boundary: l,
							rootBoundary: c,
							padding: d,
							altBoundary: u
						}),
						v = Kr(n.placement),
						b = Qr(n.placement),
						x = !b,
						y = Zr(v),
						w = "x" === y ? "y" : "x",
						j = n.modifiersData.popperOffsets,
						k = n.rects.reference,
						N = n.rects.popper,
						E = "function" == typeof m ? m(Object.assign({}, n.rects, {
							placement: n.placement
						})) : m,
						S = "number" == typeof E ? {
							mainAxis: E,
							altAxis: E
						} : Object.assign({
							mainAxis: 0,
							altAxis: 0
						}, E),
						C = n.modifiersData.offset ? n.modifiersData.offset[n.placement] : null,
						T = {
							x: 0,
							y: 0
						};
					if (j) {
						if (a) {
							var O, A = "y" === y ? _r : Pr,
								_ = "y" === y ? Rr : Ir,
								R = "y" === y ? "height" : "width",
								I = j[y],
								P = I + g[A],
								L = I - g[_],
								M = f ? -N[R] / 2 : 0,
								D = b === Dr ? k[R] : N[R],
								U = b === Dr ? -N[R] : -k[R],
								F = n.elements.arrow,
								z = f && F ? Nr(F) : {
									width: 0,
									height: 0
								},
								H = n.modifiersData["arrow#persistent"] ? n.modifiersData["arrow#persistent"].padding : {
									top: 0,
									right: 0,
									bottom: 0,
									left: 0
								},
								B = H[A],
								W = H[_],
								G = gi(0, k[R], z[R]),
								Y = x ? k[R] / 2 - M - G - B - S.mainAxis : D - G - B - S.mainAxis,
								X = x ? -k[R] / 2 + M + G + W + S.mainAxis : U + G + W + S.mainAxis,
								V = n.elements.arrow && Ar(n.elements.arrow),
								q = V ? "y" === y ? V.clientTop || 0 : V.clientLeft || 0 : 0,
								$ = null != (O = null == C ? void 0 : C[y]) ? O : 0,
								K = I + X - $,
								Q = gi(f ? pr(P, I + Y - $ - q) : P, I, f ? dr(L, K) : L);
							j[y] = Q, T[y] = Q - I
						}
						if (s) {
							var Z, J = "x" === y ? _r : Pr,
								ee = "x" === y ? Rr : Ir,
								ne = j[w],
								te = "y" === w ? "height" : "width",
								re = ne + g[J],
								ie = ne - g[ee],
								ae = -1 !== [_r, Pr].indexOf(v),
								oe = null != (Z = null == C ? void 0 : C[w]) ? Z : 0,
								se = ae ? re : ne - k[te] - N[te] - oe + S.altAxis,
								le = ae ? ne + k[te] + N[te] - oe - S.altAxis : ie,
								ce = f && ae ? function(e, n, t) {
									var r = gi(e, n, t);
									return r > t ? t : r
								}(se, ne, le) : gi(f ? se : re, ne, f ? le : ie);
							j[w] = ce, T[w] = ce - ne
						}
						n.modifiersData[r] = T
					}
				},
				requiresIfExists: ["offset"]
			},
			bi = {
				name: "arrow",
				enabled: !0,
				phase: "main",
				fn: function(e) {
					var n, t = e.state,
						r = e.name,
						i = e.options,
						a = t.elements.arrow,
						o = t.modifiersData.popperOffsets,
						s = Kr(t.placement),
						l = Zr(s),
						c = [Pr, Ir].indexOf(s) >= 0 ? "height" : "width";
					if (a && o) {
						var u = function(e, n) {
								return pi("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, n.rects, {
									placement: n.placement
								})) : e) ? e : fi(e, Mr))
							}(i.padding, t),
							d = Nr(a),
							p = "y" === l ? _r : Pr,
							f = "y" === l ? Rr : Ir,
							h = t.rects.reference[c] + t.rects.reference[l] - o[l] - t.rects.popper[c],
							m = o[l] - t.rects.reference[l],
							g = Ar(a),
							v = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
							b = h / 2 - m / 2,
							x = u[p],
							y = v - d[c] - u[f],
							w = v / 2 - d[c] / 2 + b,
							j = gi(x, w, y),
							k = l;
						t.modifiersData[r] = ((n = {})[k] = j, n.centerOffset = j - w, n)
					}
				},
				effect: function(e) {
					var n = e.state,
						t = e.options.element,
						r = void 0 === t ? "[data-popper-arrow]" : t;
					null != r && ("string" != typeof r || (r = n.elements.popper.querySelector(r))) && ci(n.elements.popper, r) && (n.elements.arrow = r)
				},
				requires: ["popperOffsets"],
				requiresIfExists: ["preventOverflow"]
			};

		function xi(e, n, t) {
			return void 0 === t && (t = {
				x: 0,
				y: 0
			}), {
				top: e.top - n.height - t.y,
				right: e.right - n.width + t.x,
				bottom: e.bottom - n.height + t.y,
				left: e.left - n.width - t.x
			}
		}

		function yi(e) {
			return [_r, Ir, Rr, Pr].some((function(n) {
				return e[n] >= 0
			}))
		}
		var wi = Vr({
				defaultModifiers: [$r, {
					name: "popperOffsets",
					enabled: !0,
					phase: "read",
					fn: function(e) {
						var n = e.state,
							t = e.name;
						n.modifiersData[t] = Jr({
							reference: n.rects.reference,
							element: n.rects.popper,
							strategy: "absolute",
							placement: n.placement
						})
					},
					data: {}
				}, ti, ri, ii, mi, vi, bi, {
					name: "hide",
					enabled: !0,
					phase: "main",
					requiresIfExists: ["preventOverflow"],
					fn: function(e) {
						var n = e.state,
							t = e.name,
							r = n.rects.reference,
							i = n.rects.popper,
							a = n.modifiersData.preventOverflow,
							o = hi(n, {
								elementContext: "reference"
							}),
							s = hi(n, {
								altBoundary: !0
							}),
							l = xi(o, r),
							c = xi(s, i, a),
							u = yi(l),
							d = yi(c);
						n.modifiersData[t] = {
							referenceClippingOffsets: l,
							popperEscapeOffsets: c,
							isReferenceHidden: u,
							hasPopperEscaped: d
						}, n.attributes.popper = Object.assign({}, n.attributes.popper, {
							"data-popper-reference-hidden": u,
							"data-popper-escaped": d
						})
					}
				}]
			}),
			ji = "tippy-content",
			ki = "tippy-arrow",
			Ni = "tippy-svg-arrow",
			Ei = {
				passive: !0,
				capture: !0
			},
			Si = function() {
				return document.body
			};

		function Ci(e, n, t) {
			if (Array.isArray(e)) {
				var r = e[n];
				return null == r ? Array.isArray(t) ? t[n] : t : r
			}
			return e
		}

		function Ti(e, n) {
			var t = {}.toString.call(e);
			return 0 === t.indexOf("[object") && t.indexOf(n + "]") > -1
		}

		function Oi(e, n) {
			return "function" == typeof e ? e.apply(void 0, n) : e
		}

		function Ai(e, n) {
			return 0 === n ? e : function(r) {
				clearTimeout(t), t = setTimeout((function() {
					e(r)
				}), n)
			};
			var t
		}

		function _i(e) {
			return [].concat(e)
		}

		function Ri(e, n) {
			-1 === e.indexOf(n) && e.push(n)
		}

		function Ii(e) {
			return [].slice.call(e)
		}

		function Pi(e) {
			return Object.keys(e)
				.reduce((function(n, t) {
					return void 0 !== e[t] && (n[t] = e[t]), n
				}), {})
		}

		function Li() {
			return document.createElement("div")
		}

		function Mi(e) {
			return ["Element", "Fragment"].some((function(n) {
				return Ti(e, n)
			}))
		}

		function Di(e, n) {
			e.forEach((function(e) {
				e && (e.style.transitionDuration = n + "ms")
			}))
		}

		function Ui(e, n) {
			e.forEach((function(e) {
				e && e.setAttribute("data-state", n)
			}))
		}

		function Fi(e, n, t) {
			var r = n + "EventListener";
			["transitionend", "webkitTransitionEnd"].forEach((function(n) {
				e[r](n, t)
			}))
		}

		function zi(e, n) {
			for (var t = n; t;) {
				var r;
				if (e.contains(t)) return !0;
				t = null == t.getRootNode || null == (r = t.getRootNode()) ? void 0 : r.host
			}
			return !1
		}
		var Hi = {
				isTouch: !1
			},
			Bi = 0;

		function Wi() {
			Hi.isTouch || (Hi.isTouch = !0, window.performance && document.addEventListener("mousemove", Gi))
		}

		function Gi() {
			var e = performance.now();
			e - Bi < 20 && (Hi.isTouch = !1, document.removeEventListener("mousemove", Gi)), Bi = e
		}

		function Yi() {
			var e, n = document.activeElement;
			if ((e = n) && e._tippy && e._tippy.reference === e) {
				var t = n._tippy;
				n.blur && !t.state.isVisible && n.blur()
			}
		}
		var Xi = !("undefined" == typeof window || "undefined" == typeof document || !window.msCrypto),
			Vi = Object.assign({
				appendTo: Si,
				aria: {
					content: "auto",
					expanded: "auto"
				},
				delay: 0,
				duration: [300, 250],
				getReferenceClientRect: null,
				hideOnClick: !0,
				ignoreAttributes: !1,
				interactive: !1,
				interactiveBorder: 2,
				interactiveDebounce: 0,
				moveTransition: "",
				offset: [0, 10],
				onAfterUpdate: function() {},
				onBeforeUpdate: function() {},
				onCreate: function() {},
				onDestroy: function() {},
				onHidden: function() {},
				onHide: function() {},
				onMount: function() {},
				onShow: function() {},
				onShown: function() {},
				onTrigger: function() {},
				onUntrigger: function() {},
				onClickOutside: function() {},
				placement: "top",
				plugins: [],
				popperOptions: {},
				render: null,
				showOnCreate: !1,
				touch: !0,
				trigger: "mouseenter focus",
				triggerTarget: null
			}, {
				animateFill: !1,
				followCursor: !1,
				inlinePositioning: !1,
				sticky: !1
			}, {
				allowHTML: !1,
				animation: "fade",
				arrow: !0,
				content: "",
				inertia: !1,
				maxWidth: 350,
				role: "tooltip",
				theme: "",
				zIndex: 9999
			}),
			qi = Object.keys(Vi);

		function $i(e) {
			var n = (e.plugins || [])
				.reduce((function(n, t) {
					var r, i = t.name,
						a = t.defaultValue;
					return i && (n[i] = void 0 !== e[i] ? e[i] : null != (r = Vi[i]) ? r : a), n
				}), {});
			return Object.assign({}, e, n)
		}

		function Ki(e, n) {
			var t = Object.assign({}, n, {
				content: Oi(n.content, [e])
			}, n.ignoreAttributes ? {} : function(e, n) {
				return (n ? Object.keys($i(Object.assign({}, Vi, {
						plugins: n
					}))) : qi)
					.reduce((function(n, t) {
						var r = (e.getAttribute("data-tippy-" + t) || "")
							.trim();
						if (!r) return n;
						if ("content" === t) n[t] = r;
						else try {
							n[t] = JSON.parse(r)
						} catch (e) {
							n[t] = r
						}
						return n
					}), {})
			}(e, n.plugins));
			return t.aria = Object.assign({}, Vi.aria, t.aria), t.aria = {
				expanded: "auto" === t.aria.expanded ? n.interactive : t.aria.expanded,
				content: "auto" === t.aria.content ? n.interactive ? null : "describedby" : t.aria.content
			}, t
		}

		function Qi(e, n) {
			e.innerHTML = n
		}

		function Zi(e) {
			var n = Li();
			return !0 === e ? n.className = ki : (n.className = Ni, Mi(e) ? n.appendChild(e) : Qi(n, e)), n
		}

		function Ji(e, n) {
			Mi(n.content) ? (Qi(e, ""), e.appendChild(n.content)) : "function" != typeof n.content && (n.allowHTML ? Qi(e, n.content) : e.textContent = n.content)
		}

		function ea(e) {
			var n = e.firstElementChild,
				t = Ii(n.children);
			return {
				box: n,
				content: t.find((function(e) {
					return e.classList.contains(ji)
				})),
				arrow: t.find((function(e) {
					return e.classList.contains(ki) || e.classList.contains(Ni)
				})),
				backdrop: t.find((function(e) {
					return e.classList.contains("tippy-backdrop")
				}))
			}
		}

		function na(e) {
			var n = Li(),
				t = Li();
			t.className = "tippy-box", t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
			var r = Li();

			function i(t, r) {
				var i = ea(n),
					a = i.box,
					o = i.content,
					s = i.arrow;
				r.theme ? a.setAttribute("data-theme", r.theme) : a.removeAttribute("data-theme"), "string" == typeof r.animation ? a.setAttribute("data-animation", r.animation) : a.removeAttribute("data-animation"), r.inertia ? a.setAttribute("data-inertia", "") : a.removeAttribute("data-inertia"), a.style.maxWidth = "number" == typeof r.maxWidth ? r.maxWidth + "px" : r.maxWidth, r.role ? a.setAttribute("role", r.role) : a.removeAttribute("role"), t.content === r.content && t.allowHTML === r.allowHTML || Ji(o, e.props), r.arrow ? s ? t.arrow !== r.arrow && (a.removeChild(s), a.appendChild(Zi(r.arrow))) : a.appendChild(Zi(r.arrow)) : s && a.removeChild(s)
			}
			return r.className = ji, r.setAttribute("data-state", "hidden"), Ji(r, e.props), n.appendChild(t), t.appendChild(r), i(e.props, e.props), {
				popper: n,
				onUpdate: i
			}
		}
		na.$$tippy = !0;
		var ta = 1,
			ra = [],
			ia = [];

		function aa(e, n) {
			var t, r, i, a, o, s, l, c, u = Ki(e, Object.assign({}, Vi, $i(Pi(n)))),
				d = !1,
				p = !1,
				f = !1,
				h = !1,
				m = [],
				g = Ai(V, u.interactiveDebounce),
				v = ta++,
				b = (c = u.plugins)
				.filter((function(e, n) {
					return c.indexOf(e) === n
				})),
				x = {
					id: v,
					reference: e,
					popper: Li(),
					popperInstance: null,
					props: u,
					state: {
						isEnabled: !0,
						isVisible: !1,
						isDestroyed: !1,
						isMounted: !1,
						isShown: !1
					},
					plugins: b,
					clearDelayTimeouts: function() {
						clearTimeout(t), clearTimeout(r), cancelAnimationFrame(i)
					},
					setProps: function(n) {
						if (!x.state.isDestroyed) {
							I("onBeforeUpdate", [x, n]), Y();
							var t = x.props,
								r = Ki(e, Object.assign({}, t, Pi(n), {
									ignoreAttributes: !0
								}));
							x.props = r, G(), t.interactiveDebounce !== r.interactiveDebounce && (M(), g = Ai(V, r.interactiveDebounce)), t.triggerTarget && !r.triggerTarget ? _i(t.triggerTarget)
								.forEach((function(e) {
									e.removeAttribute("aria-expanded")
								})) : r.triggerTarget && e.removeAttribute("aria-expanded"), L(), R(), j && j(t, r), x.popperInstance && (Q(), J()
									.forEach((function(e) {
										requestAnimationFrame(e._tippy.popperInstance.forceUpdate)
									}))), I("onAfterUpdate", [x, n])
						}
					},
					setContent: function(e) {
						x.setProps({
							content: e
						})
					},
					show: function() {
						var e = x.state.isVisible,
							n = x.state.isDestroyed,
							t = !x.state.isEnabled,
							r = Hi.isTouch && !x.props.touch,
							i = Ci(x.props.duration, 0, Vi.duration);
						if (!(e || n || t || r || T()
							.hasAttribute("disabled") || (I("onShow", [x], !1), !1 === x.props.onShow(x)))) {
							if (x.state.isVisible = !0, C() && (w.style.visibility = "visible"), R(), z(), x.state.isMounted || (w.style.transition = "none"), C()) {
								var a = A();
								Di([a.box, a.content], 0)
							}
							var o, l, c;
							s = function() {
									var e;
									if (x.state.isVisible && !h) {
										if (h = !0, w.offsetHeight, w.style.transition = x.props.moveTransition, C() && x.props.animation) {
											var n = A(),
												t = n.box,
												r = n.content;
											Di([t, r], i), Ui([t, r], "visible")
										}
										P(), L(), Ri(ia, x), null == (e = x.popperInstance) || e.forceUpdate(), I("onMount", [x]), x.props.animation && C() && function(e, n) {
											B(e, (function() {
												x.state.isShown = !0, I("onShown", [x])
											}))
										}(i)
									}
								}, l = x.props.appendTo, c = T(), (o = x.props.interactive && l === Si || "parent" === l ? c.parentNode : Oi(l, [c]))
								.contains(w) || o.appendChild(w), x.state.isMounted = !0, Q()
						}
					},
					hide: function() {
						var e = !x.state.isVisible,
							n = x.state.isDestroyed,
							t = !x.state.isEnabled,
							r = Ci(x.props.duration, 1, Vi.duration);
						if (!(e || n || t) && (I("onHide", [x], !1), !1 !== x.props.onHide(x))) {
							if (x.state.isVisible = !1, x.state.isShown = !1, h = !1, d = !1, C() && (w.style.visibility = "hidden"), M(), H(), R(!0), C()) {
								var i = A(),
									a = i.box,
									o = i.content;
								x.props.animation && (Di([a, o], r), Ui([a, o], "hidden"))
							}
							P(), L(), x.props.animation ? C() && function(e, n) {
								B(e, (function() {
									!x.state.isVisible && w.parentNode && w.parentNode.contains(w) && n()
								}))
							}(r, x.unmount) : x.unmount()
						}
					},
					hideWithInteractivity: function(e) {
						O()
							.addEventListener("mousemove", g), Ri(ra, g), g(e)
					},
					enable: function() {
						x.state.isEnabled = !0
					},
					disable: function() {
						x.hide(), x.state.isEnabled = !1
					},
					unmount: function() {
						x.state.isVisible && x.hide(), x.state.isMounted && (Z(), J()
							.forEach((function(e) {
								e._tippy.unmount()
							})), w.parentNode && w.parentNode.removeChild(w), ia = ia.filter((function(e) {
								return e !== x
							})), x.state.isMounted = !1, I("onHidden", [x]))
					},
					destroy: function() {
						x.state.isDestroyed || (x.clearDelayTimeouts(), x.unmount(), Y(), delete e._tippy, x.state.isDestroyed = !0, I("onDestroy", [x]))
					}
				};
			if (!u.render) return x;
			var y = u.render(x),
				w = y.popper,
				j = y.onUpdate;
			w.setAttribute("data-tippy-root", ""), w.id = "tippy-" + x.id, x.popper = w, e._tippy = x, w._tippy = x;
			var k = b.map((function(e) {
					return e.fn(x)
				})),
				N = e.hasAttribute("aria-expanded");
			return G(), L(), R(), I("onCreate", [x]), u.showOnCreate && ee(), w.addEventListener("mouseenter", (function() {
				x.props.interactive && x.state.isVisible && x.clearDelayTimeouts()
			})), w.addEventListener("mouseleave", (function() {
				x.props.interactive && x.props.trigger.indexOf("mouseenter") >= 0 && O()
					.addEventListener("mousemove", g)
			})), x;

			function E() {
				var e = x.props.touch;
				return Array.isArray(e) ? e : [e, 0]
			}

			function S() {
				return "hold" === E()[0]
			}

			function C() {
				var e;
				return !(null == (e = x.props.render) || !e.$$tippy)
			}

			function T() {
				return l || e
			}

			function O() {
				var e, n, t = T()
					.parentNode;
				return t ? null != (n = _i(t)[0]) && null != (e = n.ownerDocument) && e.body ? n.ownerDocument : document : document
			}

			function A() {
				return ea(w)
			}

			function _(e) {
				return x.state.isMounted && !x.state.isVisible || Hi.isTouch || a && "focus" === a.type ? 0 : Ci(x.props.delay, e ? 0 : 1, Vi.delay)
			}

			function R(e) {
				void 0 === e && (e = !1), w.style.pointerEvents = x.props.interactive && !e ? "" : "none", w.style.zIndex = "" + x.props.zIndex
			}

			function I(e, n, t) {
				var r;
				void 0 === t && (t = !0), k.forEach((function(t) {
					t[e] && t[e].apply(t, n)
				})), t && (r = x.props)[e].apply(r, n)
			}

			function P() {
				var n = x.props.aria;
				if (n.content) {
					var t = "aria-" + n.content,
						r = w.id;
					_i(x.props.triggerTarget || e)
						.forEach((function(e) {
							var n = e.getAttribute(t);
							if (x.state.isVisible) e.setAttribute(t, n ? n + " " + r : r);
							else {
								var i = n && n.replace(r, "")
									.trim();
								i ? e.setAttribute(t, i) : e.removeAttribute(t)
							}
						}))
				}
			}

			function L() {
				!N && x.props.aria.expanded && _i(x.props.triggerTarget || e)
					.forEach((function(e) {
						x.props.interactive ? e.setAttribute("aria-expanded", x.state.isVisible && e === T() ? "true" : "false") : e.removeAttribute("aria-expanded")
					}))
			}

			function M() {
				O()
					.removeEventListener("mousemove", g), ra = ra.filter((function(e) {
						return e !== g
					}))
			}

			function D(n) {
				if (!Hi.isTouch || !f && "mousedown" !== n.type) {
					var t = n.composedPath && n.composedPath()[0] || n.target;
					if (!x.props.interactive || !zi(w, t)) {
						if (_i(x.props.triggerTarget || e)
							.some((function(e) {
								return zi(e, t)
							}))) {
							if (Hi.isTouch) return;
							if (x.state.isVisible && x.props.trigger.indexOf("click") >= 0) return
						} else I("onClickOutside", [x, n]);
						!0 === x.props.hideOnClick && (x.clearDelayTimeouts(), x.hide(), p = !0, setTimeout((function() {
							p = !1
						})), x.state.isMounted || H())
					}
				}
			}

			function U() {
				f = !0
			}

			function F() {
				f = !1
			}

			function z() {
				var e = O();
				e.addEventListener("mousedown", D, !0), e.addEventListener("touchend", D, Ei), e.addEventListener("touchstart", F, Ei), e.addEventListener("touchmove", U, Ei)
			}

			function H() {
				var e = O();
				e.removeEventListener("mousedown", D, !0), e.removeEventListener("touchend", D, Ei), e.removeEventListener("touchstart", F, Ei), e.removeEventListener("touchmove", U, Ei)
			}

			function B(e, n) {
				var t = A()
					.box;

				function r(e) {
					e.target === t && (Fi(t, "remove", r), n())
				}
				if (0 === e) return n();
				Fi(t, "remove", o), Fi(t, "add", r), o = r
			}

			function W(n, t, r) {
				void 0 === r && (r = !1), _i(x.props.triggerTarget || e)
					.forEach((function(e) {
						e.addEventListener(n, t, r), m.push({
							node: e,
							eventType: n,
							handler: t,
							options: r
						})
					}))
			}

			function G() {
				var e;
				S() && (W("touchstart", X, {
						passive: !0
					}), W("touchend", q, {
						passive: !0
					})), (e = x.props.trigger, e.split(/\s+/)
						.filter(Boolean))
					.forEach((function(e) {
						if ("manual" !== e) switch (W(e, X), e) {
							case "mouseenter":
								W("mouseleave", q);
								break;
							case "focus":
								W(Xi ? "focusout" : "blur", $);
								break;
							case "focusin":
								W("focusout", $)
						}
					}))
			}

			function Y() {
				m.forEach((function(e) {
					var n = e.node,
						t = e.eventType,
						r = e.handler,
						i = e.options;
					n.removeEventListener(t, r, i)
				})), m = []
			}

			function X(e) {
				var n, t = !1;
				if (x.state.isEnabled && !K(e) && !p) {
					var r = "focus" === (null == (n = a) ? void 0 : n.type);
					a = e, l = e.currentTarget, L(), !x.state.isVisible && Ti(e, "MouseEvent") && ra.forEach((function(n) {
						return n(e)
					})), "click" === e.type && (x.props.trigger.indexOf("mouseenter") < 0 || d) && !1 !== x.props.hideOnClick && x.state.isVisible ? t = !0 : ee(e), "click" === e.type && (d = !t), t && !r && ne(e)
				}
			}

			function V(e) {
				var n = e.target,
					t = T()
					.contains(n) || w.contains(n);
				if ("mousemove" !== e.type || !t) {
					var r = J()
						.concat(w)
						.map((function(e) {
							var n, t = null == (n = e._tippy.popperInstance) ? void 0 : n.state;
							return t ? {
								popperRect: e.getBoundingClientRect(),
								popperState: t,
								props: u
							} : null
						}))
						.filter(Boolean);
					(function(e, n) {
						var t = n.clientX,
							r = n.clientY;
						return e.every((function(e) {
							var n = e.popperRect,
								i = e.popperState,
								a = e.props.interactiveBorder,
								o = i.placement.split("-")[0],
								s = i.modifiersData.offset;
							if (!s) return !0;
							var l = "bottom" === o ? s.top.y : 0,
								c = "top" === o ? s.bottom.y : 0,
								u = "right" === o ? s.left.x : 0,
								d = "left" === o ? s.right.x : 0,
								p = n.top - r + l > a,
								f = r - n.bottom - c > a,
								h = n.left - t + u > a,
								m = t - n.right - d > a;
							return p || f || h || m
						}))
					})(r, e) && (M(), ne(e))
				}
			}

			function q(e) {
				K(e) || x.props.trigger.indexOf("click") >= 0 && d || (x.props.interactive ? x.hideWithInteractivity(e) : ne(e))
			}

			function $(e) {
				x.props.trigger.indexOf("focusin") < 0 && e.target !== T() || x.props.interactive && e.relatedTarget && w.contains(e.relatedTarget) || ne(e)
			}

			function K(e) {
				return !!Hi.isTouch && S() !== e.type.indexOf("touch") >= 0
			}

			function Q() {
				Z();
				var n = x.props,
					t = n.popperOptions,
					r = n.placement,
					i = n.offset,
					a = n.getReferenceClientRect,
					o = n.moveTransition,
					l = C() ? ea(w)
					.arrow : null,
					c = a ? {
						getBoundingClientRect: a,
						contextElement: a.contextElement || T()
					} : e,
					u = [{
						name: "offset",
						options: {
							offset: i
						}
					}, {
						name: "preventOverflow",
						options: {
							padding: {
								top: 2,
								bottom: 2,
								left: 5,
								right: 5
							}
						}
					}, {
						name: "flip",
						options: {
							padding: 5
						}
					}, {
						name: "computeStyles",
						options: {
							adaptive: !o
						}
					}, {
						name: "$$tippy",
						enabled: !0,
						phase: "beforeWrite",
						requires: ["computeStyles"],
						fn: function(e) {
							var n = e.state;
							if (C()) {
								var t = A()
									.box;
								["placement", "reference-hidden", "escaped"].forEach((function(e) {
									"placement" === e ? t.setAttribute("data-placement", n.placement) : n.attributes.popper["data-popper-" + e] ? t.setAttribute("data-" + e, "") : t.removeAttribute("data-" + e)
								})), n.attributes.popper = {}
							}
						}
					}];
				C() && l && u.push({
					name: "arrow",
					options: {
						element: l,
						padding: 3
					}
				}), u.push.apply(u, (null == t ? void 0 : t.modifiers) || []), x.popperInstance = wi(c, w, Object.assign({}, t, {
					placement: r,
					onFirstUpdate: s,
					modifiers: u
				}))
			}

			function Z() {
				x.popperInstance && (x.popperInstance.destroy(), x.popperInstance = null)
			}

			function J() {
				return Ii(w.querySelectorAll("[data-tippy-root]"))
			}

			function ee(e) {
				x.clearDelayTimeouts(), e && I("onTrigger", [x, e]), z();
				var n = _(!0),
					r = E(),
					i = r[0],
					a = r[1];
				Hi.isTouch && "hold" === i && a && (n = a), n ? t = setTimeout((function() {
					x.show()
				}), n) : x.show()
			}

			function ne(e) {
				if (x.clearDelayTimeouts(), I("onUntrigger", [x, e]), x.state.isVisible) {
					if (!(x.props.trigger.indexOf("mouseenter") >= 0 && x.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(e.type) >= 0 && d)) {
						var n = _(!1);
						n ? r = setTimeout((function() {
							x.state.isVisible && x.hide()
						}), n) : i = requestAnimationFrame((function() {
							x.hide()
						}))
					}
				} else H()
			}
		}

		function oa(e, n) {
			void 0 === n && (n = {});
			var t = Vi.plugins.concat(n.plugins || []);
			document.addEventListener("touchstart", Wi, Ei), window.addEventListener("blur", Yi);
			var r, i = Object.assign({}, n, {
					plugins: t
				}),
				a = (r = e, Mi(r) ? [r] : function(e) {
					return Ti(e, "NodeList")
				}(r) ? Ii(r) : Array.isArray(r) ? r : Ii(document.querySelectorAll(r)))
				.reduce((function(e, n) {
					var t = n && aa(n, i);
					return t && e.push(t), e
				}), []);
			return Mi(e) ? a[0] : a
		}
		oa.defaultProps = Vi, oa.setDefaultProps = function(e) {
			Object.keys(e)
				.forEach((function(n) {
					Vi[n] = e[n]
				}))
		}, oa.currentInput = Hi;
		var sa = Object.assign({}, ri, {
				effect: function(e) {
					var n = e.state,
						t = {
							popper: {
								position: n.options.strategy,
								left: "0",
								top: "0",
								margin: "0"
							},
							arrow: {
								position: "absolute"
							},
							reference: {}
						};
					Object.assign(n.elements.popper.style, t.popper), n.styles = t, n.elements.arrow && Object.assign(n.elements.arrow.style, t.arrow)
				}
			}),
			la = function(e, n) {
				var t;
				void 0 === n && (n = {});
				var r, i = e,
					a = [],
					o = [],
					s = n.overrides,
					l = [],
					c = !1;

				function u() {
					o = i.map((function(e) {
							return _i(e.props.triggerTarget || e.reference)
						}))
						.reduce((function(e, n) {
							return e.concat(n)
						}), [])
				}

				function d() {
					a = i.map((function(e) {
						return e.reference
					}))
				}

				function p(e) {
					i.forEach((function(n) {
						e ? n.enable() : n.disable()
					}))
				}

				function f(e) {
					return i.map((function(n) {
						var t = n.setProps;
						return n.setProps = function(i) {
								t(i), n.reference === r && e.setProps(i)
							},
							function() {
								n.setProps = t
							}
					}))
				}

				function h(e, n) {
					var t = o.indexOf(n);
					if (n !== r) {
						r = n;
						var l = (s || [])
							.concat("content")
							.reduce((function(e, n) {
								return e[n] = i[t].props[n], e
							}), {});
						e.setProps(Object.assign({}, l, {
							getReferenceClientRect: "function" == typeof l.getReferenceClientRect ? l.getReferenceClientRect : function() {
								var e;
								return null == (e = a[t]) ? void 0 : e.getBoundingClientRect()
							}
						}))
					}
				}
				p(!1), d(), u();
				var m, g, v, b = {
						fn: function() {
							return {
								onDestroy: function() {
									p(!0)
								},
								onHidden: function() {
									r = null
								},
								onClickOutside: function(e) {
									e.props.showOnCreate && !c && (c = !0, r = null)
								},
								onShow: function(e) {
									e.props.showOnCreate && !c && (c = !0, h(e, a[0]))
								},
								onTrigger: function(e, n) {
									h(e, n.currentTarget)
								}
							}
						}
					},
					x = oa(Li(), Object.assign({}, (m = n, g = ["overrides"], v = Object.assign({}, m), g.forEach((function(e) {
						delete v[e]
					})), v), {
						plugins: [b].concat(n.plugins || []),
						triggerTarget: o,
						popperOptions: Object.assign({}, n.popperOptions, {
							modifiers: [].concat((null == (t = n.popperOptions) ? void 0 : t.modifiers) || [], [sa])
						})
					})),
					y = x.show;
				x.show = function(e) {
					if (y(), !r && null == e) return h(x, a[0]);
					if (!r || null != e) {
						if ("number" == typeof e) return a[e] && h(x, a[e]);
						if (i.indexOf(e) >= 0) {
							var n = e.reference;
							return h(x, n)
						}
						return a.indexOf(e) >= 0 ? h(x, e) : void 0
					}
				}, x.showNext = function() {
					var e = a[0];
					if (!r) return x.show(0);
					var n = a.indexOf(r);
					x.show(a[n + 1] || e)
				}, x.showPrevious = function() {
					var e = a[a.length - 1];
					if (!r) return x.show(e);
					var n = a.indexOf(r),
						t = a[n - 1] || e;
					x.show(t)
				};
				var w = x.setProps;
				return x.setProps = function(e) {
					s = e.overrides || s, w(e)
				}, x.setInstances = function(e) {
					p(!0), l.forEach((function(e) {
						return e()
					})), i = e, p(!1), d(), u(), l = f(x), x.setProps({
						triggerTarget: o
					})
				}, l = f(x), x
			};
		oa.setDefaultProps({
			render: na
		});
		const ca = oa;

		function ua(e, n) {
			if (null == e) return {};
			var t, r, i = {},
				a = Object.keys(e);
			for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (i[t] = e[t]);
			return i
		}
		var da = "undefined" != typeof window && "undefined" != typeof document;

		function pa(e, n) {
			e && ("function" == typeof e && e(n), {}.hasOwnProperty.call(e, "current") && (e.current = n))
		}

		function fa() {
			return da && document.createElement("div")
		}

		function ha(e, n) {
			if (e === n) return !0;
			if ("object" == typeof e && null != e && "object" == typeof n && null != n) {
				if (Object.keys(e)
					.length !== Object.keys(n)
					.length) return !1;
				for (var t in e) {
					if (!n.hasOwnProperty(t)) return !1;
					if (!ha(e[t], n[t])) return !1
				}
				return !0
			}
			return !1
		}

		function ma(e) {
			var n = [];
			return e.forEach((function(e) {
				n.find((function(n) {
					return ha(e, n)
				})) || n.push(e)
			})), n
		}

		function ga(e, n) {
			var t, r;
			return Object.assign({}, n, {
				popperOptions: Object.assign({}, e.popperOptions, n.popperOptions, {
					modifiers: ma([].concat((null == (t = e.popperOptions) ? void 0 : t.modifiers) || [], (null == (r = n.popperOptions) ? void 0 : r.modifiers) || []))
				})
			})
		}
		var va = da ? r.useLayoutEffect : r.useEffect;

		function ba(e) {
			var n = (0, r.useRef)();
			return n.current || (n.current = "function" == typeof e ? e() : e), n.current
		}

		function xa(e, n, t) {
			t.split(/\s+/)
				.forEach((function(t) {
					t && e.classList[n](t)
				}))
		}
		var ya = {
			name: "className",
			defaultValue: "",
			fn: function(e) {
				var n = e.popper.firstElementChild,
					t = function() {
						var n;
						return !!(null == (n = e.props.render) ? void 0 : n.$$tippy)
					};

				function r() {
					e.props.className && !t() || xa(n, "add", e.props.className)
				}
				return {
					onCreate: r,
					onBeforeUpdate: function() {
						t() && xa(n, "remove", e.props.className)
					},
					onAfterUpdate: r
				}
			}
		};

		function wa(e) {
			return function(n) {
				var t = n.children,
					i = n.content,
					a = n.visible,
					o = n.singleton,
					s = n.render,
					l = n.reference,
					c = n.disabled,
					u = void 0 !== c && c,
					d = n.ignoreAttributes,
					p = void 0 === d || d,
					f = (n.__source, n.__self, ua(n, ["children", "content", "visible", "singleton", "render", "reference", "disabled", "ignoreAttributes", "__source", "__self"])),
					h = void 0 !== a,
					m = void 0 !== o,
					g = (0, r.useState)(!1),
					v = g[0],
					b = g[1],
					x = (0, r.useState)({}),
					y = x[0],
					w = x[1],
					j = (0, r.useState)(),
					k = j[0],
					E = j[1],
					S = ba((function() {
						return {
							container: fa(),
							renders: 1
						}
					})),
					C = Object.assign({
						ignoreAttributes: p
					}, f, {
						content: S.container
					});
				h && (C.trigger = "manual", C.hideOnClick = !1), m && (u = !0);
				var T = C,
					O = C.plugins || [];
				s && (T = Object.assign({}, C, {
					plugins: m && null != o.data ? [].concat(O, [{
						fn: function() {
							return {
								onTrigger: function(e, n) {
									var t = o.data.children.find((function(e) {
										return e.instance.reference === n.currentTarget
									}));
									e.state.$$activeSingletonInstance = t.instance, E(t.content)
								}
							}
						}
					}]) : O,
					render: function() {
						return {
							popper: S.container
						}
					}
				}));
				var A = [l].concat(t ? [t.type] : []);
				return va((function() {
					var n = l;
					l && l.hasOwnProperty("current") && (n = l.current);
					var t = e(n || S.ref || fa(), Object.assign({}, T, {
						plugins: [ya].concat(C.plugins || [])
					}));
					return S.instance = t, u && t.disable(), a && t.show(), m && o.hook({
							instance: t,
							content: i,
							props: T,
							setSingletonContent: E
						}), b(!0),
						function() {
							t.destroy(), null == o || o.cleanup(t)
						}
				}), A), va((function() {
					var e;
					if (1 !== S.renders) {
						var n = S.instance;
						n.setProps(ga(n.props, T)), null == (e = n.popperInstance) || e.forceUpdate(), u ? n.disable() : n.enable(), h && (a ? n.show() : n.hide()), m && o.hook({
							instance: n,
							content: i,
							props: T,
							setSingletonContent: E
						})
					} else S.renders++
				})), va((function() {
					var e;
					if (s) {
						var n = S.instance;
						n.setProps({
							popperOptions: Object.assign({}, n.props.popperOptions, {
								modifiers: [].concat(((null == (e = n.props.popperOptions) ? void 0 : e.modifiers) || [])
									.filter((function(e) {
										return "$$tippyReact" !== e.name
									})), [{
										name: "$$tippyReact",
										enabled: !0,
										phase: "beforeWrite",
										requires: ["computeStyles"],
										fn: function(e) {
											var n, t = e.state,
												r = null == (n = t.modifiersData) ? void 0 : n.hide;
											y.placement === t.placement && y.referenceHidden === (null == r ? void 0 : r.isReferenceHidden) && y.escaped === (null == r ? void 0 : r.hasPopperEscaped) || w({
												placement: t.placement,
												referenceHidden: null == r ? void 0 : r.isReferenceHidden,
												escaped: null == r ? void 0 : r.hasPopperEscaped
											}), t.attributes.popper = {}
										}
									}])
							})
						})
					}
				}), [y.placement, y.referenceHidden, y.escaped].concat(A)), r.createElement(r.Fragment, null, t ? (0, r.cloneElement)(t, {
					ref: function(e) {
						S.ref = e, pa(t.ref, e)
					}
				}) : null, v && (0, N.createPortal)(s ? s(function(e) {
					var n = {
						"data-placement": e.placement
					};
					return e.referenceHidden && (n["data-reference-hidden"] = ""), e.escaped && (n["data-escaped"] = ""), n
				}(y), k, S.instance) : i, S.container))
			}
		}

		function ja(e) {
			return function(n) {
				var t = void 0 === n ? {} : n,
					i = t.disabled,
					a = void 0 !== i && i,
					o = t.overrides,
					s = void 0 === o ? [] : o,
					l = (0, r.useState)(!1),
					c = l[0],
					u = l[1],
					d = ba({
						children: [],
						renders: 1
					});
				return va((function() {
					if (c) {
						var n = d.children,
							t = d.sourceData;
						if (t) {
							var r = e(n.map((function(e) {
								return e.instance
							})), Object.assign({}, t.props, {
								popperOptions: t.instance.props.popperOptions,
								overrides: s,
								plugins: [ya].concat(t.props.plugins || [])
							}));
							return d.instance = r, a && r.disable(),
								function() {
									r.destroy(), d.children = n.filter((function(e) {
										return !e.instance.state.isDestroyed
									}))
								}
						}
					} else u(!0)
				}), [c]), va((function() {
					if (c)
						if (1 !== d.renders) {
							var e = d.children,
								n = d.instance,
								t = d.sourceData;
							if (n && t) {
								var r = t.props,
									i = (r.content, ua(r, ["content"]));
								n.setProps(ga(n.props, Object.assign({}, i, {
									overrides: s
								}))), n.setInstances(e.map((function(e) {
									return e.instance
								}))), a ? n.disable() : n.enable()
							}
						} else d.renders++
				})), (0, r.useMemo)((function() {
					return [{
						data: d,
						hook: function(e) {
							d.sourceData = e, d.setSingletonContent = e.setSingletonContent
						},
						cleanup: function() {
							d.sourceData = null
						}
					}, {
						hook: function(e) {
							var n, t;
							d.children = d.children.filter((function(n) {
								var t = n.instance;
								return e.instance !== t
							})), d.children.push(e), (null == (n = d.instance) ? void 0 : n.state.isMounted) && (null == (t = d.instance) ? void 0 : t.state.$$activeSingletonInstance) === e.instance && (null == d.setSingletonContent || d.setSingletonContent(e.content)), d.instance && !d.instance.state.isDestroyed && d.instance.setInstances(d.children.map((function(e) {
								return e.instance
							})))
						},
						cleanup: function(e) {
							d.children = d.children.filter((function(n) {
								return n.instance !== e
							})), d.instance && !d.instance.state.isDestroyed && d.instance.setInstances(d.children.map((function(e) {
								return e.instance
							})))
						}
					}]
				}), [])
			}
		}
		var ka = function(e, n) {
				return (0, r.forwardRef)((function(t, i) {
					var a = t.children,
						o = ua(t, ["children"]);
					return r.createElement(e, Object.assign({}, n, o), a ? (0, r.cloneElement)(a, {
						ref: function(e) {
							pa(i, e), pa(a.ref, e)
						}
					}) : null)
				}))
			},
			Na = ja(la);
		const Ea = ka(wa(ca));
		var Sa = function(e) {
				return e.ui.uiState.missingResourcesHighlight
			},
			Ca = function(e) {
				return e.ui.uiState.usageHighlight
			},
			Ta = function(e) {
				return e.ui.uiState.producingResourcesHighlight
			},
			Oa = function(e) {
				return e.ui.uiState.consumingResourcesHighlight
			},
			Aa = function(e) {
				return e.ui.uiState.isLoading
			},
			_a = function(e) {
				return function(n) {
					var t;
					return null !== (t = n.ui.uiState.keys[e]) && void 0 !== t && t
				}
			},
			Ra = function() {
				return Ra = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, Ra.apply(this, arguments)
			},
			Ia = function(n) {
				var t = n.content,
					r = n.children;
				return t ? (0, e.jsx)(Ea, Ra({
					duration: 20,
					content: (0, e.jsx)("div", Ra({
						className: "description-hint"
					}, {
						children: t
					})),
					placement: "right"
				}, {
					children: r
				})) : r
			},
			Pa = function(n) {
				n.id;
				var t = n.label,
					r = n.children,
					i = n.isHidden,
					a = n.className,
					o = n.contentClassName,
					s = n.hint,
					l = n.isCollapsable,
					c = n.isCollapsed,
					u = n.toggleCollapsed;
				return i ? null : (0, e.jsxs)("div", Ra({
					className: "".concat(a, " features-block")
				}, {
					children: [(0, e.jsx)(Ia, Ra({
						content: s
					}, {
						children: (0, e.jsxs)("div", Ra({
							className: "features-title"
						}, {
							children: [(0, e.jsx)("span", {
								children: t
							}), l ? (0, e.jsx)("span", Ra({
								className: "collapse-expand",
								onClick: u
							}, {
								children: c ? "Expand" : "Collapse"
							})) : null]
						}))
					})), c && l ? null : (0, e.jsx)("div", Ra({
						className: "feature-list ".concat(o || "")
					}, {
						children: r
					}))]
				}))
			},
			La = function(n) {
				var t = n.id,
					r = n.label,
					i = n.children,
					a = n.isHidden,
					o = n.className,
					s = n.contentClassName,
					l = n.hint,
					c = n.isCollapsable,
					u = k(function(e) {
						return function(n) {
							var t;
							return null !== (t = n.ui.uiState.collapsedStatus[e]) && void 0 !== t && t
						}
					}(t)),
					d = x();
				return (0, e.jsx)(Pa, {
					id: t,
					label: r,
					className: o,
					isHidden: a,
					children: i,
					contentClassName: s,
					hint: l,
					isCollapsable: c,
					isCollapsed: u,
					toggleCollapsed: function() {
						d(mt.setCollapsed.make({
							id: t,
							status: !u
						}))
					}
				})
			},
			Ma = function() {
				return Ma = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, Ma.apply(this, arguments)
			},
			Da = function(n) {
				var t = n.goal,
					r = (0, e.jsx)("div", Ma({
						className: "goal-container"
					}, {
						children: (0, e.jsx)("div", Ma({
							className: "goal-requirements"
						}, {
							children: t.requirements.map((function(n) {
								return (0, e.jsxs)("p", Ma({
									className: "goal-req ".concat(n.isComplete ? "complete" : "")
								}, {
									children: [(0, e.jsx)("span", Ma({
										className: "req-name"
									}, {
										children: n.text
									})), (0, e.jsxs)("span", Ma({
										className: "req-target"
									}, {
										children: [Math.round(100 * n.actual) / 100, "/", n.target]
									}))]
								}))
							}))
						}))
					}));
				return (0, e.jsx)(La, Ma({
					id: "main-goals",
					label: "Goal: ".concat(t.name),
					className: "goal-paper"
				}, {
					children: t.hint ? (0, e.jsx)(Ea, Ma({
						content: (0, e.jsx)("div", Ma({
							className: "description-hint"
						}, {
							children: (0, e.jsx)("p", {
								children: t.hint
							})
						}))
					}, {
						children: r
					})) : r
				}))
			},
			Ua = function() {
				var n = k(or);
				return (0, e.jsx)(Da, {
					goal: n.current
				})
			},
			Fa = function(e) {
				return e.game.laws
			},
			za = function(e) {
				return e.game.laws.isUnlocked
			},
			Ha = function(e) {
				return e.game.space
			},
			Ba = function(e) {
				return e.game.space.isUnlocked
			},
			Wa = function(e) {
				return e.game.space.spaceship.isUnlocked
			},
			Ga = function(e) {
				return e.game.space.hangar.isUnlocked
			},
			Ya = function(e) {
				return e.game.space.fleet.isUnlocked
			},
			Xa = function(e) {
				return e.game.space.battle.isUnlocked
			},
			Va = function(e) {
				return e.game.prestige.isUnlocked
			},
			qa = function(e) {
				return e.game.prestige.colonizePlanet.isUnlocked
			},
			$a = function(e) {
				return e.game.prestige.transmitKnowledge
			},
			Ka = function(e) {
				return e.game.prestige.colonizePlanet
			},
			Qa = function(e) {
				return e.game.newNotifications
			},
			Za = {
				setViewed: Nn("[new-notification] set viewed", (function(e) {
					return e
				}))
			},
			Ja = function() {
				return Ja = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, Ja.apply(this, arguments)
			},
			eo = (0, r.forwardRef)((function(n, t) {
				var r = n.id,
					i = n.children,
					a = n.className,
					o = k(function(e) {
						return function(n) {
							return n.game.newNotifications.new[e]
						}
					}(r));
				return (0, e.jsxs)("div", Ja({
					ref: t,
					className: "".concat(a, " notification-container ")
						.concat(o ? "new-label" : ""),
					onMouseEnter: function() {
						Za.setViewed.send({
							id: r
						})
					}
				}, {
					children: [i, o ? (0, e.jsx)("span", {
						className: "new-label"
					}) : null]
				}))
			})),
			no = function(e) {
				return e.game.environment
			};

		function to(e) {
			if (e > 1e12) return "Never";
			if (!e || e < 0) return "00:00:00";
			e = Number(e);
			var n = Math.floor(e / 3600),
				t = Math.floor(e % 3600 / 60),
				r = Math.floor(e % 3600 % 60);
			return (n > 9 ? "".concat(n, ":") : "0".concat(n, ":")) + (t > 9 ? "".concat(t, ":") : "0".concat(t, ":")) + (r > 9 ? "".concat(r) : "0".concat(r))
		}

		function ro(e, n, t) {
			if (void 0 === n && (n = 3), void 0 === t && (t = 12), Math.abs(e) > Math.pow(10, t)) return e.toExponential(n);
			if (Math.abs(e) < 1e-4) return "0.00";
			if (Math.abs(e) < 1) return e.toFixed(n);
			var r = Math.abs(e),
				i = Math.log10(r),
				a = Math.floor(i / 3),
				o = r / Math.pow(10, 3 * a),
				s = "";
			switch (a) {
				case 1:
					s = "K";
					break;
				case 2:
					s = "M";
					break;
				case 3:
					s = "B";
					break;
				case 4:
					s = "T";
					break;
				default:
					s = ""
			}
			return "".concat((Math.sign(e) * o)
					.toPrecision(n))
				.concat(s)
		}
		var io, ao, oo, so, lo, co, uo = {
				setMultiplier: Nn("[banked-time] set multiplier", (function(e) {
					return e
				}))
			},
			po = function() {
				return po = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, po.apply(this, arguments)
			},
			fo = function() {
				var n = k(no),
					t = function(e) {
						uo.setMultiplier.send(e)
					};
				return (0, e.jsxs)("div", po({
					className: "env-wrap"
				}, {
					children: [(0, e.jsxs)("div", po({
						className: "time-season"
					}, {
						children: [(0, e.jsxs)("p", po({
							className: "time"
						}, {
							children: ["Year ", n.climate.year, ", Day ", Math.floor(n.climate.day)]
						})), (0, e.jsxs)("p", po({
							className: "climate"
						}, {
							children: ["Season: ", n.climate.season, ", Weather: ", n.climate.temperature]
						}))]
					})), (0, e.jsxs)("div", po({
						className: "time-wrap"
					}, {
						children: [(0, e.jsxs)("div", po({
							className: "use-mult"
						}, {
							children: [(0, e.jsx)("p", po({
								className: "item ".concat(1 === n.bankedTime.multiplier ? "selected" : ""),
								onClick: function() {
									return t(1)
								}
							}, {
								children: "x1"
							})), (0, e.jsx)("p", po({
								className: "item ".concat(2 === n.bankedTime.multiplier ? "selected" : ""),
								onClick: function() {
									return t(2)
								}
							}, {
								children: "x2"
							})), (0, e.jsx)("p", po({
								className: "item ".concat(4 === n.bankedTime.multiplier ? "selected" : ""),
								onClick: function() {
									return t(4)
								}
							}, {
								children: "x4"
							}))]
						})), (0, e.jsxs)("p", po({
							className: "remaining-time"
						}, {
							children: ["Banked time: ", to(n.bankedTime.amountLeft)]
						}))]
					}))]
				}))
			},
			ho = function() {
				return ho = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, ho.apply(this, arguments)
			},
			mo = function() {
				var n = k(nr),
					t = k(ar),
					r = k(za),
					i = k(Ba),
					a = k(Va),
					o = x();
				return (0, e.jsx)("div", ho({
					className: "menu"
				}, {
					children: (0, e.jsxs)("ul", {
						children: [(0, e.jsx)("li", ho({
							className: rr()({
								"menu-item": !0,
								selected: n === ut.PLANET
							}),
							onClick: function() {
								return o(pt.changePage.make(ut.PLANET))
							}
						}, {
							children: (0, e.jsx)(eo, ho({
								id: "planet",
								className: "menu-inner"
							}, {
								children: "Planet"
							}))
						})), t ? (0, e.jsx)("li", ho({
							className: rr()({
								"menu-item": !0,
								selected: n === ut.SCIENCE
							}),
							onClick: function() {
								return o(pt.changePage.make(ut.SCIENCE))
							}
						}, {
							children: (0, e.jsx)(eo, ho({
								id: "science",
								className: "menu-inner"
							}, {
								children: "Science"
							}))
						})) : null, i ? (0, e.jsx)("li", ho({
							className: rr()({
								"menu-item": !0,
								selected: n === ut.SPACE
							}),
							onClick: function() {
								return o(pt.changePage.make(ut.SPACE))
							}
						}, {
							children: (0, e.jsx)(eo, ho({
								id: "space",
								className: "menu-inner"
							}, {
								children: "Space"
							}))
						})) : null, r ? (0, e.jsx)("li", ho({
							className: rr()({
								"menu-item": !0,
								selected: n === ut.LAWS
							}),
							onClick: function() {
								return o(pt.changePage.make(ut.LAWS))
							}
						}, {
							children: (0, e.jsx)(eo, ho({
								id: "laws",
								className: "menu-inner"
							}, {
								children: "Laws & Order"
							}))
						})) : null, a ? (0, e.jsx)("li", ho({
							className: rr()({
								"menu-item": !0,
								selected: n === ut.PRESTIGE
							}),
							onClick: function() {
								return o(pt.changePage.make(ut.PRESTIGE))
							}
						}, {
							children: (0, e.jsx)(eo, ho({
								id: "prestige",
								className: "menu-inner"
							}, {
								children: "Prestige"
							}))
						})) : null, (0, e.jsx)("li", ho({
							className: rr()({
								"menu-item": !0,
								selected: n === ut.SETTINGS
							}),
							onClick: function() {
								return o(pt.changePage.make(ut.SETTINGS))
							}
						}, {
							children: (0, e.jsx)(eo, ho({
								id: "settings",
								className: "menu-inner"
							}, {
								children: "Settings"
							}))
						})), (0, e.jsx)("li", ho({
							className: rr()({
								"menu-item": !0,
								selected: n === ut.ABOUT
							}),
							onClick: function() {
								return o(pt.changePage.make(ut.ABOUT))
							}
						}, {
							children: (0, e.jsx)(eo, ho({
								id: "about",
								className: "menu-inner"
							}, {
								children: "About & Change Log"
							}))
						})), (0, e.jsx)("li", ho({
							className: rr()({
								"menu-item": !0,
								selected: n === ut.STATISTICS
							}),
							onClick: function() {
								return o(pt.changePage.make(ut.STATISTICS))
							}
						}, {
							children: (0, e.jsx)(eo, ho({
								id: "statistics",
								className: "menu-inner"
							}, {
								children: "Statistics"
							}))
						})), (0, e.jsx)("li", {
							children: (0, e.jsx)(eo, ho({
								id: "support",
								className: "menu-inner"
							}, {
								children: (0, e.jsx)("a", ho({
									href: "https://patreon.com/user?u=83421544",
									target: "_blank"
								}, {
									children: "Support project"
								}))
							}))
						})]
					})
				}))
			},
			go = function() {
				return (0, e.jsx)("div", ho({
					className: "header"
				}, {
					children: (0, e.jsxs)("div", ho({
						className: "top"
					}, {
						children: [(0, e.jsxs)("div", ho({
							className: "left"
						}, {
							children: [(0, e.jsxs)("div", ho({
								className: "heading-pre-menu"
							}, {
								children: [(0, e.jsx)("h1", {
									children: "Ignited Space"
								}), (0, e.jsx)(fo, {})]
							})), (0, e.jsx)(mo, {})]
						})), (0, e.jsx)(Ua, {})]
					}))
				}))
			},
			vo = function(e) {
				return e.game.landingZone
			},
			bo = {
				doAction: Nn("[landing-zone] do action", (function(e) {
					return e
				})),
				doBuild: Nn("[landing-zone] do build", (function(e) {
					return e
				})),
				setBuildingAmount: Nn("[landing-zone] set building amount", (function(e) {
					return e
				})),
				doUpgrade: Nn("[landing-zone] do upgrade", (function(e) {
					return e
				}))
			};
		! function(e) {
			e.CHARGE = "charge", e.DRILL_ROCK = "drillRock", e.DRILL_ORE = "drillOre", e.COLLECT_BIOMASS = "collectBiomass"
		}(io || (io = {})),
		function(e) {
			e.REPAIR_DRILL = "repair-drill", e.REPAIR_CABLE = "repair-cable", e.REPAIR_MANIPULATORS = "repair-manipulators", e.REPAIR_MACHINERY = "repair-machinery", e.AUTO_QUARRYING = "autoquarrying", e.AUTO_MINERS = "autominers", e.COMBUSTION = "combustion", e.REPAIR_STORAGE_MODULE = "storage-module", e.REPAIR_BATTERY = "repair-battery", e.COMBUSTION_CAMERA = "combuscion-camera", e.THERMAL_TECH = "thermal-tech", e.MINE_TECH = "mine-tech", e.QUARRY_TECH = "quarry-tech", e.BIO_TECH = "bio-tech", e.STORAGE_TECH = "storage-tech", e.BACTERIA_SELECTION = "bacteria-selection", e.THERMAL_TECH2 = "thermal-tech2", e.OXYGEN_CAMERAS = "oxygen-cameras", e.RESERVE_BATTERIES = "reserve-batteries", e.OXYGEN_COMPRESSORS = "oxygen-compressors", e.WATER_PUMPING = "water-pumping", e.ELECTROLITES = "electrolites", e.SUPPLY_MODULE = "supply-module", e.DOCKING_MODULE = "docking-module", e.RESEARCH_MODULE = "research-module", e.CARGO_SORTING = "cargo-sorting", e.FARMING_TOOLS = "farming-tools", e.DEEP_MINING = "deep-mining", e.UNDERGROUND_VAULTS = "underground-vaults", e.WATER_DRILLING = "water-drill", e.FERTILIZING = "fertilizing", e.FLORA = "flora", e.FLAMMABILITY = "flammability", e.CRANES = "cranes", e.CARGO_CRANES = "cargo-cranes", e.FORESTER_TOOLS = "forester-tools", e.BROADLEAVED = "broad-leaved", e.WOODEN_FURNITURE = "furniture", e.IRON_TOOLS = "iron-tools", e.IRON_PARTS = "iron-parts", e.IRON_CONTAINERS = "iron-containers", e.IMPROVED_WIRES = "improved wires", e.REFRACTORY_MATERIALS = "refractory-materials", e.METAL_WORKING = "metal-working", e.CEMENT = "cement", e.TREE_CARE = "tree-care", e.NATURAL_ENVIRONMENT = "natural-environment", e.FRUIT_TREES = "fruit-trees", e.WATER_FILTERING = "water-filtering", e.CHEMICAL_ANALYSIS = "chemical-analysis", e.BETTER_ELECTROLITES = "better-electrolites", e.HIGH_TEMPERATURE_ENGINE = "high-temperature-engine", e.PLATINUM_MINING = "platinum-mining", e.PLATINUM_DRILLS = "platinum-drills", e.PLATINUM_TOOLS = "platinum-tools", e.SOCIAL_RESEARCH_CENTER = "social-research-center", e.COTTAGES = "cottages", e.ENTERTAINMENT = "entertainment", e.ADVANCED_METALLURGY = "advanced_metallurgy", e.COMPOSITE_METALS = "composite_metals", e.HEAT_INSULATING_CAMERAS = "heat_insulating_cameras", e.GERMETISATION = "germetisation", e.RUBBER_DETAILS = "rubber_details", e.IMPROVED_WIRING = "improved_wiring", e.ENERGY_SAVING = "energy_saving", e.ENERGY_SAVING_EXPEDITION_DRONES = "energy-saving-expedition-drones", e.SURVEILLANCE_CAMERAS = "surveillance_cameras", e.COMPUTERS = "computers", e.INDUSTRY_AUTOMATION = "idustrial_automation", e.BUILDING_PRINTING = "building_printer", e.ORGANISM_PRINTING = "organs_printing", e.BETTER_DIAGNOSTICS = "better-diagnostics", e.MULTISTORE_WAREHOUSES = "multistore_warehouses", e.GMO = "GMO", e.LASER_CUTTING = "laser-cutting", e.IMPROVED_LITHOGRAPHY = "improved-lithography", e.BETTER_PHOTOELEMENTS = "better-photo-elements", e.GREAT_RADIO_TRANSMITTER = "great_radio_transmitter", e.FLIGHT_TECHNOLOGY = "flight-technology", e.FASTER_ROCKETS = "faster-rockets", e.CONDUCTIVE_NANOPARTICLES = "conductive-nanoparticles", e.NANO_BOTS = "nano_bots", e.TELESCOPE = "telescope", e.GENES_MODIFICATION = "genes_modification", e.GRAVITATIONAL_LENSING = "gravitational_lensing", e.RADIATIVE_DISSOCIATION = "radiative_dissociation", e.FUEL_PROCESSING_CATALYSATION = "fuel_processing_catalysation", e.IMPULSE_ENGINE = "impulse_engine", e.PLASMA_KNIFE = "plasma_knife", e.NANO_TRANSISTORS = "nano_transistors", e.UF_POLYMERYSATION = "uf-polymerysation", e.BULLETPROOF_POLYMERS = "bulletproof_polymers", e.COLD_SYNTHESIS = "cold_synthesis", e.ELECTRIC_TRACTION = "electric_traction", e.EFFICIENT_CONDUCTION = "efficient_conduction", e.GRAPHENE_SYNTHESIS = "graphene_generation", e.GRAPHENE_DRILLS = "graphene_drills", e.GRAPHENE_SENSORS = "graphene_sensors", e.GRAPHENE_MEMBRANES = "graphene_membranes", e.COMPOSITE_BUILDING_MATERIALS = "composite_building_materials", e.PLATINUM_ALLOYS = "platinum-alloys", e.STRONG_CISTERN = "strong_cistern", e.EFFICIENT_COLLIDERS = "efficient_colliders", e.NEUTRON_CANON = "neutron_canon", e.MAGNETIC_FIELD_GENERATOR = "magnetic_field_generator", e.CONTROLLABLE_THERMONUCLEAR_REACTIONS = "controllable_thermonuclear_reactions", e.ADVANCED_EVAPORATORS = "advanced_evaporators", e.NEUTRINO_DETECTORS = "neutrino_detectors", e.NEUTRINO_COOLERS = "neutrino_coolers", e.QUARK_CANON = "quark_canon", e.FUEL_COOLERS = "fuel_coolers", e.MAGNETO_COOLING = "magneto_cooling", e.ADVANCED_REFRIGERATOR = "advanced_refrigerator", e.FROZEN_BIOMASS = "frozen_biomass", e.IMPROVED_REFRIGERATION = "improved_refrigeration", e.BATTERIES_COOLERS = "batteries_coolers", e.ORBITAL_CLINIC = "orbital_clinics", e.ORBITAL_BIORESEARCH = "orbital_bioresearch", e.NANO_BIOBOTS = "nano_biobots", e.HIGH_ENERGY_PLASMA_KNIFE = "high_energy_plasma_knife", e.NUCLEAR_SYNTHESIS_CONTROL = "nuclear_synthesis_control", e.PORTABLE_MAGNETOS = "portable_magnetos", e.ADVANCED_MAGNETO_CONSTRUCTION = "advanced_magneto_construction", e.FERMENTS_DELIVERY_NANOBOTS = "ferments_delivery_nanobots", e.FUEL_PROCESSING_NANOBOTS = "fuel_processing_nanobots", e.GORMONE_DELIVERY_NANOBOTS = "gormone_delivery_nanobots", e.QUARK_GLUON_CANON = "quark_gluon_canon", e.QUARK_GLUON_KNIFE = "quark_gluon_knife", e.QUANTUM_HALLS_EFFECT = "quantum_halls_effect", e.MAGNETIC_SPECTROGRAPHY = "magnetic_spectrography", e.SYNTHETIC_NEURONES = "synthetic_neurones", e.ADVANCED_GRAPHENE_SYNTHESIS = "advanced_graphene_synthesis", e.NANOBOTS_MAGNETO_CONSTRUCTION = "nanobots-magneto-construction", e.MAGNETIC_DEFECT_DETECTORS = "magnetic_defect_detection", e.HIGH_DENSITY_PRESSING = "high_density_pressing", e.MAGNETIC_PRESS = "magnetic_press", e.PRESSED_ARMOR = "pressed_armor", e.CONDUCTING_BACTERIA = "conducting_bacteria", e.ORGANICS_PROCESSING_BACTERIA = "organics_processing_bacteria", e.GRAVITONE_DETECTORS = "gravitone_detectors", e.QUANTUM_TELEPORT = "quantum_teleport", e.QUANTUM_ENCRYPTION = "quantum_encryption", e.HUMAN_LIKE_HELPERS = "human_like_helpers", e.DARK_MATTER_TOOLS = "dark_matter_tools", e.DARK_MATTER_CORPUS = "dark_matter_corpus", e.ADVANCED_ORGANICS_PROCESSING = "advanced_organics_processing", e.FOOD_SAVING_BACTERIA = "food_saving_bacteria", e.DEGENERATE_MATTER_CANON = "degenerate_matter_canon", e.OPTIMIZED_MATERIALS_PROCESSING = "optimized_material_processing", e.OPTIMIZED_SPACESHIPS_MATERIALS = "optimized_spaceships_materials", e.PARTICLE_SCATTERERS = "particle_scatterers", e.IMPROVED_LASERS = "improved-lasers", e.LASER_TARGETING = "laser-targeting", e.POLISHING_BACTERIA = "polishing-bacteria", e.CORROSION_EATING_BACTERIA = "corrosion-eating-bacteria", e.DARK_MATTER_PROCESSING = "dark-matter-processing", e.DARK_MATTER_CAPTURE = "dark-matter-capture", e.FUEL_DELIVERY_BACTERIA = "fuel-delivery-bacteria", e.ORGANIC_PROCESSING_INCUBATOR = "organic-processing-incubator", e.BOSE_EINSTEIN_SPACESHIP_BATTERIES = "improved-spaceship-power-distribution", e.BOSE_EINSTEIN_BATTERIES = "improved-batteries", e.ANTIMATTER_COLLECTION = "antimatter-collection", e.ANTIMATTER_KNIFE = "antimatter-knife", e.POSITRON_CANON = "positron-canon", e.POSITRON_WEAPONS = "positron-weapons", e.PORTABLE_BATTERIES = "advanced-portable-batteries", e.HIGH_PRESSED_BLOCKS = "high-pressed-blocks", e.ANNIHILATION_BEAM = "annihilation-beam", e.HUGE_GAMMA_TRANSMITTER = "HUGE_GAMMA_TRANSMITTER", e.RADIATION_BLOWING = "radiation-blowing", e.HYPERSPACE_ENGINE = "hyperspace-engine", e.MASS_PRODUCTION_TELEPORT = "mass-production-teleport", e.FUEL_PURIFICATION_BACTERIA = "fuel-purification-bacteria", e.UNIVERSAL_MICRO_HELPERS = "universal-micro-helpers", e.ORGANIC_COMPUTATION = "organic-computation", e.PHOTOEFFECT_ORGANICS = "photoeffect-organics"
		}(ao || (ao = {})),
		function(e) {
			e.QUARRY = "quarry", e.MINE = "mine", e.BACTERIA_INCUBATOR = "bacteria-incubator", e.THERMOELECTRIC_STATION = "thermo-electric-station", e.STORAGE = "storage-section", e.STORAGE_HUB = "storage-hub", e.OXYGEN_COLLECTOR = "oxygen-collector", e.WATER_PUMP = "water-pump", e.WATER_STORAGE = "water-storage", e.BATTERY = "battery", e.LIVING_CABIN = "living-cabin", e.METEO_STATION = "meteo-station", e.MONUMENT = "monument", e.CLINIC = "clinic", e.PARK = "park", e.BIO_LAB = "bio-lab", e.FOREST_PLANT = "forest-plant", e.SMELTER = "smelter", e.EXPEDITION_CENTER = "expedition_center", e.WAREHOUSE = "warehouse", e.TANK = "tank", e.COTTAGE = "cottage", e.CINEMA = "cinema", e.SOCIAL_RESEARCH_CENTER = "social_research_center", e.METALLURGY_COMPLEX = "metallurgy_complex", e.BUILDING_FACTORY = "building_factory", e.STORAGE_CONTAINER = "storage_container", e.SOLAR_PANEL = "solar-panel", e.SHRINE = "shrine", e.DATA_CENTER = "data-center", e.APARTMENT = "apartment", e.PANDEMIC_RESEARCH_CENTER = "pandemic-research-center", e.ELECTRONICS_FACTORY = "electronics-factory", e.TEMPLE = "temple", e.ADMINISTRATIVE_CENTER = "administrative_center", e.SOLAR_SATELLITE = "solar-satellite", e.ORBITAL_TOURISM_CENTER = "orbital-tourism-center", e.ICE_MELTING_STATION = "ice-melting-station", e.FUEL_FACTORY = "fuel-factory", e.SYNTHETIC_NEURONES_FACTORY = "synthetic_neurones_factory", e.NANOBOTS_FACTORY = "nanobots-factory", e.SPACE_TELESCOPE = "space-telescope", e.ZOO = "zoo", e.SPACE_STORAGE_HUB = "space_storage_hub", e.SMELTING_FACTORY = "smelting_factory", e.PLUTO_MONUMENT = "pluto_monument", e.PLATINUM_MINE = "platinum-mine", e.FLORA_PLANT = "flora_plant", e.TROPIC_FOREST_PLANT = "tropic_forest_plant", e.ORGANIC_PROCESSING_FACTORY = "organics_processing_factory", e.THERMONUCLEAR_PLANT = "thermonuclear_plant", e.ADRONIC_COLLIDER = "adronic_collider", e.SPACESHIP_STATION = "spaceship_station", e.SPACESHIP_FACTORY = "spaceship_factory", e.ORBITAL_LIVING_MODULE = "orbital_living_module", e.ORBITAL_SUPPLY_MODULE = "orbital_supply_module", e.DARK_MATTER_COLLECTOR = "dark_matter_collector", e.DARK_MATTER_STORAGE = "dark_matter_storage", e.ANTIMATTER_EXTRACTOR = "antimatter-extractor", e.ANTIMATTER_CAPACITOR = "antimatter-capacitor", e.ANTIMATTER_STUDY_CENTER = "antimatter-study-center", e.MAGNETIC_PRESS = "magnetic-press", e.FUEL_PURIFICATION_STATION = "fuel-purification-station", e.EXOTIC_MATTER_FACTORY = "exotic-matter-factory"
		}(oo || (oo = {})),
		function(e) {
			e.POWER = "Power", e.INDUSTRIAL = "Industrial", e.STORAGE = "Storage", e.SCIENCE = "Science", e.MILITARY = "Military", e.PUBLIC = "Public", e.RESIDENTAL = "Residental"
		}(so || (so = {})),
		function(e) {
			e.ORBIT = "Orbit", e.MOON = "Moon", e.AID = "Aid", e.VENUS = "Venus", e.OUTER = "Outer Orbit", e.INTERSTELLAR = "Interstellar"
		}(lo || (lo = {})),
		function(e) {
			e.BUILDING = "building-unlock", e.SPECIAL = "special-unlock", e.RESOURCE = "resource-unlock", e.UPGRADE = "upgrade"
		}(co || (co = {}));
		var xo = function() {
				return xo = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, xo.apply(this, arguments)
			},
			yo = function(n) {
				var t = n.isVisible,
					r = n.children,
					i = n.onClose;
				return (0, e.jsx)("div", xo({
					className: "mobile-tooltip-wrap ".concat(t ? "" : "hidden")
				}, {
					children: (0, e.jsxs)("div", xo({
						className: "mobile-tooltip"
					}, {
						children: [(0, e.jsxs)("div", xo({
							className: "head"
						}, {
							children: [(0, e.jsx)("span", {}), (0, e.jsx)("span", xo({
								className: "close",
								onClick: i
							}, {
								children: "X"
							}))]
						})), (0, e.jsx)("div", xo({
							className: "body"
						}, {
							children: r
						}))]
					}))
				}))
			},
			wo = function() {
				return wo = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, wo.apply(this, arguments)
			},
			jo = function(n) {
				var t = n.label,
					i = n.className,
					a = n.progress,
					o = n.isAvailable,
					s = n.isBlocked,
					l = n.onClick,
					c = n.children,
					u = n.level,
					d = n.maxLevel,
					p = n.isLevelControllable,
					f = n.onChangeAmount,
					h = n.onMouseEnter,
					m = n.onMouseLeave,
					g = n.placement,
					v = (n.fillColor, n.progressColor, n.isWarning),
					b = (n.isAllowMulti, (0, r.useState)(!1)),
					x = b[0],
					y = b[1],
					w = window.innerWidth <= 860,
					j = Na(),
					k = j[0],
					N = j[1],
					E = ["chips-wrap"];
				i && E.push(i), s && E.push("blocked"), o ? E.push("enabled") : E.push("disabled"), v && E.push("warning");
				var S = (0, e.jsx)("div", wo({
					className: E.join(" ")
				}, {
					children: (0, e.jsxs)("div", wo({
						className: "chip v2"
					}, {
						children: [(0, e.jsx)("div", {
							className: "bg",
							style: {
								width: "".concat(a, "%")
							}
						}), (0, e.jsxs)("div", wo({
							className: "chip-content"
						}, {
							children: [(0, e.jsx)("div", wo({
								onClick: l,
								className: "stick-left",
								onMouseEnter: null != h ? h : void 0,
								onMouseLeave: null != m ? m : void 0
							}, {
								children: (0, e.jsx)("span", wo({
									className: "name-label"
								}, {
									children: t
								}))
							})), (0, e.jsxs)("span", wo({
								className: "stick-right"
							}, {
								children: [p ? (0, e.jsx)(Ea, wo({
									placement: "right",
									singleton: N,
									content: (0, e.jsxs)("div", wo({
										className: "description-hint"
									}, {
										children: [(0, e.jsx)("p", {
											children: "Hold Shift to decrease by 5"
										}), (0, e.jsx)("p", {
											children: "Hold Ctrl to decrease to 0"
										})]
									}))
								}, {
									children: (0, e.jsx)("span", wo({
										className: "controls ".concat((u || 0) < 1 ? "disabled" : "")
									}, {
										children: (0, e.jsx)("span", wo({
											className: "minus control",
											onClick: function(e) {
												e.preventDefault(), e.stopPropagation();
												var n = e.shiftKey ? 5 : 1,
													t = e.ctrlKey ? 0 : Math.max((u || 0) - n, 0);
												f && f(t)
											}
										}, {
											children: "-"
										}))
									}))
								})) : null, null != u ? (0, e.jsxs)("span", wo({
									className: "level-label"
								}, {
									children: [u, d ? "/".concat(d) : ""]
								})) : null, p ? (0, e.jsx)(Ea, wo({
									placement: "right",
									singleton: N,
									content: (0, e.jsxs)("div", wo({
										className: "description-hint"
									}, {
										children: [(0, e.jsx)("p", {
											children: "Hold Shift to increase by 5"
										}), (0, e.jsxs)("p", {
											children: ["Hold Ctrl to increase to ", d]
										})]
									}))
								}, {
									children: (0, e.jsx)("span", wo({
										className: "controls ".concat((u || 0) > (d || 0) - 1 ? "disabled" : "")
									}, {
										children: (0, e.jsx)("span", wo({
											className: "plus control",
											onClick: function(e) {
												e.preventDefault(), e.stopPropagation();
												var n = e.shiftKey ? 5 : 1,
													t = e.ctrlKey ? d || 0 : Math.min((u || 0) + n, d || 0);
												f && f(t)
											}
										}, {
											children: "+"
										}))
									}))
								})) : null, (0, e.jsx)("span", wo({
									className: "info-tooltip",
									onClick: function(e) {
										e.preventDefault(), e.stopPropagation(), y(!0)
									}
								}, {
									children: (0, e.jsx)("span", wo({
										className: "info-tooltip-inner"
									}, {
										children: "!"
									}))
								}))]
							}))]
						}))]
					}))
				}));
				return w ? (0, e.jsxs)(e.Fragment, {
					children: [S, x ? (0, e.jsx)(yo, wo({
						isVisible: x,
						onClose: function() {
							return y(!1)
						}
					}, {
						children: c
					})) : null]
				}) : (0, e.jsxs)(e.Fragment, {
					children: [(0, e.jsx)(Ea, {
						singleton: k,
						duration: 20
					}), c ? (0, e.jsx)(Ea, wo({
						duration: 20,
						singleton: N,
						content: (0, e.jsx)("div", wo({
							className: "description-hint"
						}, {
							children: c
						})),
						inlinePositioning: !1,
						placement: w ? "auto" : null != g ? g : "right"
					}, {
						children: S
					})) : S]
				})
			},
			ko = function() {
				return ko = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, ko.apply(this, arguments)
			},
			No = function(n) {
				var t = n.cost,
					r = n.showBars,
					i = void 0 === r || r;
				return (0, e.jsxs)("div", ko({
					className: "cost-block"
				}, {
					children: [(0, e.jsxs)("p", ko({
						className: rr()({
							requirement: !0,
							missing: !t.isAvailable
						})
					}, {
						children: [(0, e.jsxs)("span", {
							children: [t.name, ":  ", t.amount]
						}), !t.isAvailable && i ? (0, e.jsx)("span", {
							children: t.eta
						}) : (0, e.jsx)("span", {})]
					})), i ? (0, e.jsx)("div", ko({
						className: "progressBar"
					}, {
						children: (0, e.jsx)("div", {
							className: "filling",
							style: {
								width: "".concat(t.percentage, "%")
							}
						})
					})) : null]
				}))
			},
			Eo = function() {
				return Eo = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, Eo.apply(this, arguments)
			},
			So = function(n) {
				var t, r = n.gain,
					i = n.className;
				return (0, e.jsx)("div", Eo({
					className: "gain-block"
				}, {
					children: (0, e.jsxs)("p", Eo({
						className: rr()(Eo({
							requirement: !0
						}, i ? (t = {}, t[i] = !0, t) : {}))
					}, {
						children: [r.name, ":  ", r.amount]
					}))
				}))
			},
			Co = function(e) {
				var n = {};
				e && e.forEach((function(e) {
					return n[e.id] = e.eta
				})), Pt.dispatch(mt.setMissingHighlight.make(n))
			},
			To = function(e) {
				var n = {};
				e && e.forEach((function(e) {
					return n[e.id] = !0
				})), Pt.dispatch(mt.setConsumeHighlight.make(n))
			},
			Oo = function(e) {
				var n = {};
				e && e.forEach((function(e) {
					return n[e.id] = !0
				})), Pt.dispatch(mt.setProduceHighlight.make(n))
			},
			Ao = {
				addToQueue: Nn("[queue] add", (function(e) {
					return e
				})),
				deleteFromQueue: Nn("[queue] delete", (function(e) {
					return e
				})),
				moveQueue: Nn("[queue] move", (function(e) {
					return e
				})),
				sortByEta: Nn("[queue] sort by eta", (function(e) {
					return e
				}))
			},
			_o = function() {
				return _o = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, _o.apply(this, arguments)
			},
			Ro = function(e, n, t) {
				if (t || 2 === arguments.length)
					for (var r, i = 0, a = n.length; i < a; i++) !r && i in n || (r || (r = Array.prototype.slice.call(n, 0, i)), r[i] = n[i]);
				return e.concat(r || Array.prototype.slice.call(n))
			},
			Io = function(n) {
				var t = n.actions,
					r = k(Ca);
				return (0, e.jsx)(La, _o({
					isCollapsable: !0,
					id: "landing-zone-actions",
					label: (0, e.jsx)(eo, _o({
						id: "planet:landing-zone:actions",
						className: "label-wrap"
					}, {
						children: "Drone Actions"
					})),
					className: "actions-wrap",
					contentClassName: "flex"
				}, {
					children: t.list.filter((function(e) {
							return e.isUnlocked
						}))
						.map((function(n) {
							return (0, e.jsx)(eo, _o({
								id: "planet:landing-zone:actions:".concat(n.id),
								className: "action-wrap"
							}, {
								children: (0, e.jsxs)(jo, _o({
									label: n.name,
									isAvailable: n.isAvailable,
									isBlocked: n.isBlocked,
									progress: n.progress,
									className: "feature-item ".concat(n.etaNum > 1e80 ? "soft-lock" : "", " ")
										.concat(r && n.cost.find((function(e) {
											return e.id === r
										})) ? "usage-highlight" : ""),
									onClick: function() {
										return e = n.id, void bo.doAction.send({
											id: e
										});
										var e
									},
									onMouseEnter: function() {
										return Co(n.cost.filter((function(e) {
											return !e.isAvailable
										})))
									},
									onMouseLeave: function() {
										return Co(null)
									}
								}, {
									children: [(0, e.jsx)("p", _o({
										className: "title"
									}, {
										children: n.name
									})), (0, e.jsx)("p", _o({
										className: "description"
									}, {
										children: n.description
									})), (0, e.jsxs)("div", _o({
										className: "costs wrap"
									}, {
										children: [(0, e.jsx)("span", {
											children: "Consume"
										}), n.cost.map((function(n) {
											return (0, e.jsx)(No, {
												cost: n
											})
										}))]
									})), (0, e.jsxs)("div", _o({
										className: "gain wrap"
									}, {
										children: [(0, e.jsx)("span", {
											children: "Produce"
										}), n.gain.map((function(n) {
											return (0, e.jsx)(So, {
												gain: n
											})
										}))]
									}))]
								}))
							}))
						}))
				}))
			},
			Po = function(n) {
				var t = n.upgrades,
					r = n.isQHold,
					i = k(Ca);
				return (0, e.jsx)(La, _o({
					isCollapsable: !0,
					id: "landing-zone-upgrades",
					label: (0, e.jsx)(eo, _o({
						id: "planet:landing-zone:upgrades",
						className: "upgrades-wrap label-wrap"
					}, {
						children: "Drone Upgrades"
					})),
					className: "actions-wrap",
					contentClassName: "flex"
				}, {
					children: t.list.filter((function(e) {
							return e.isUnlocked && !e.isMaxedOut
						}))
						.map((function(n) {
							return (0, e.jsx)(eo, _o({
								id: "planet:landing-zone:upgrades:".concat(n.id),
								className: "upgrade-wrap"
							}, {
								children: (0, e.jsxs)(jo, _o({
									label: n.name,
									isAvailable: n.isAvailable,
									isBlocked: n.isBlocked,
									progress: n.progress,
									className: "feature-item ".concat(n.etaNum > 1e80 ? "soft-lock" : "", " ")
										.concat(i && n.cost.find((function(e) {
											return e.id === i
										})) ? "usage-highlight" : "", " ")
										.concat(n.unlockType),
									onClick: function(e) {
										var t;
										r || !n.isAvailable ? Ao.addToQueue.send({
											scope: et.UPGRADE,
											id: n.id
										}) : (t = n.id, bo.doUpgrade.send({
											id: t
										}))
									},
									level: n.level,
									maxLevel: n.maxLevel,
									onMouseEnter: function() {
										Co(n.cost.filter((function(e) {
											return !e.isAvailable
										}))), Oo(n.gainMult.filter((function(e) {
											return e.amountValue > 1
										}))), To(n.gainMult.filter((function(e) {
											return e.amountValue < 1
										})))
									},
									onMouseLeave: function() {
										Co(null), Oo(null), To(null)
									}
								}, {
									children: [(0, e.jsx)("p", _o({
										className: "title"
									}, {
										children: n.name
									})), (0, e.jsx)("p", _o({
										className: "description"
									}, {
										children: n.description
									})), n.cost.length ? (0, e.jsxs)("div", _o({
										className: "costs wrap"
									}, {
										children: [(0, e.jsx)("span", {
											children: "Cost"
										}), n.cost.map((function(n) {
											return (0, e.jsx)(No, {
												cost: n
											})
										}))]
									})) : (0, e.jsx)(e.Fragment, {}), n.consume.length ? (0, e.jsxs)("div", _o({
										className: "costs wrap"
									}, {
										children: [(0, e.jsx)("span", {
											children: "Consume"
										}), n.consume.map((function(n) {
											return (0, e.jsx)(So, {
												gain: n
											})
										}))]
									})) : (0, e.jsx)(e.Fragment, {}), n.gain.length ? (0, e.jsxs)("div", _o({
										className: "gain wrap"
									}, {
										children: [(0, e.jsx)("span", {
											children: "Produce"
										}), n.gain.map((function(n) {
											return (0, e.jsx)(So, {
												gain: n
											})
										}))]
									})) : (0, e.jsx)(e.Fragment, {}), n.max.length ? (0, e.jsxs)("div", _o({
										className: "store wrap"
									}, {
										children: [(0, e.jsx)("span", {
											children: "Storage"
										}), n.max.map((function(n) {
											return (0, e.jsx)(So, {
												gain: n
											})
										}))]
									})) : (0, e.jsx)(e.Fragment, {}), n.gainMult.length ? (0, e.jsxs)("div", _o({
										className: "gain wrap"
									}, {
										children: [(0, e.jsx)("span", {
											children: "Income Bonuses"
										}), n.gainMult.map((function(n) {
											return (0, e.jsx)(So, {
												gain: n
											})
										}))]
									})) : (0, e.jsx)(e.Fragment, {}), n.maxMult.length ? (0, e.jsxs)("div", _o({
										className: "store wrap"
									}, {
										children: [(0, e.jsx)("span", {
											children: "Storage Bonuses"
										}), n.maxMult.map((function(n) {
											return (0, e.jsx)(So, {
												gain: n
											})
										}))]
									})) : (0, e.jsx)(e.Fragment, {}), (0, e.jsx)("p", {
										children: "Hold Q while clicking to add item into queue"
									})]
								}))
							}))
						}))
				}))
			},
			Lo = function(n) {
				var t = n.buildings,
					r = n.isQHold,
					i = k(Ca),
					a = t.list.filter((function(e) {
						return e.isUnlocked && Object.values(so)
							.includes(e.category)
					}))
					.reduce((function(e, n) {
						return e[n.category] ? e[n.category].push(n) : e[n.category] = [n], e
					}), {});
				return (0, e.jsx)("div", {
					children: Object.entries(a)
						.map((function(n) {
							var t = n[0],
								a = n[1];
							return (0, e.jsx)(La, _o({
								isCollapsable: !0,
								id: "landing-zone-buildings-".concat(t),
								label: (0, e.jsx)(eo, _o({
									id: "planet:landing-zone:building:".concat(t),
									className: "buildings-cat-label label-wrap"
								}, {
									children: "".concat(t, " Buildings")
								})),
								className: "buildings-wrap",
								contentClassName: "flex"
							}, {
								children: a.map((function(n) {
									var a;
									return (0, e.jsx)(eo, _o({
										id: "planet:landing-zone:building:".concat(t, ":")
											.concat(n.id),
										className: "building-wrap"
									}, {
										children: (0, e.jsxs)(jo, _o({
											label: n.name,
											isAvailable: n.isAvailable,
											isBlocked: n.isBlocked,
											progress: n.progress,
											className: "feature-item ".concat(n.etaNum > 1e80 ? "soft-lock" : "", " ")
												.concat(i && n.cost.find((function(e) {
													return e.id === i
												})) ? "usage-highlight" : ""),
											onClick: function(e) {
												var t;
												r || !n.isAvailable ? Ao.addToQueue.send({
													scope: et.BUILDING,
													id: n.id
												}) : (t = n.id, zt("building_built", {
													id: t
												}), bo.doBuild.send({
													id: t
												}))
											},
											level: n.activeAmount || 0,
											maxLevel: n.level,
											isLevelControllable: !0,
											onChangeAmount: function(e) {
												var t, r;
												console.log("amount: ", e), t = n.id, r = e, bo.setBuildingAmount.send({
													id: t,
													amount: r
												})
											},
											onMouseEnter: function() {
												Co(n.cost.filter((function(e) {
													return !e.isAvailable
												}))), Oo(Ro(Ro([], n.gainMult.filter((function(e) {
													return e.amountValue > 1
												})), !0), n.gain, !0)), To(Ro(Ro([], n.gainMult.filter((function(e) {
													return e.amountValue < 1
												})), !0), n.consume, !0))
											},
											onMouseLeave: function() {
												Co(null), Oo(null), To(null)
											},
											isWarning: n.efficiency.isDropped
										}, {
											children: [(0, e.jsx)("p", _o({
												className: "title"
											}, {
												children: n.name
											})), (0, e.jsx)("p", _o({
												className: "description"
											}, {
												children: n.description
											})), n.efficiency.isDropped ? (0, e.jsxs)("p", _o({
												className: "eff-dropped"
											}, {
												children: ["Efficiency: ", ro(100 * n.efficiency.efficiency), "%", (0, e.jsxs)("span", _o({
													className: "missing-resource"
												}, {
													children: ["Missing ", null === (a = n.efficiency.missingResource) || void 0 === a ? void 0 : a.name]
												}))]
											})) : (0, e.jsx)(e.Fragment, {}), n.cost.length ? (0, e.jsxs)("div", _o({
												className: "costs wrap"
											}, {
												children: [(0, e.jsx)("span", {
													children: "Cost"
												}), n.cost.map((function(n) {
													return (0, e.jsx)(No, {
														cost: n
													})
												}))]
											})) : (0, e.jsx)(e.Fragment, {}), n.consume.length ? (0, e.jsxs)("div", _o({
												className: "costs wrap"
											}, {
												children: [(0, e.jsx)("span", {
													children: "Consume"
												}), n.consume.map((function(n) {
													return (0, e.jsx)(So, {
														gain: n
													})
												}))]
											})) : (0, e.jsx)(e.Fragment, {}), n.gain.length ? (0, e.jsxs)("div", _o({
												className: "gain wrap"
											}, {
												children: [(0, e.jsx)("span", {
													children: "Produce"
												}), n.gain.map((function(n) {
													return (0, e.jsx)(So, {
														gain: n
													})
												}))]
											})) : (0, e.jsx)(e.Fragment, {}), n.gainMult.length ? (0, e.jsxs)("div", _o({
												className: "gain wrap"
											}, {
												children: [(0, e.jsx)("span", {
													children: "Income Bonuses"
												}), n.gainMult.map((function(n) {
													return (0, e.jsx)(So, {
														gain: n
													})
												}))]
											})) : (0, e.jsx)(e.Fragment, {}), n.max.length ? (0, e.jsxs)("div", _o({
												className: "store wrap"
											}, {
												children: [(0, e.jsx)("span", {
													children: "Storage"
												}), n.max.map((function(n) {
													return (0, e.jsx)(So, {
														gain: n
													})
												}))]
											})) : (0, e.jsx)(e.Fragment, {}), n.consumeEffect.length ? (0, e.jsxs)("div", _o({
												className: "costs wrap"
											}, {
												children: [(0, e.jsx)("span", {
													children: "Negative Effect"
												}), n.consumeEffect.map((function(n) {
													return (0, e.jsx)(So, {
														gain: n
													})
												}))]
											})) : (0, e.jsx)(e.Fragment, {}), n.gainEffect.length ? (0, e.jsxs)("div", _o({
												className: "gain wrap"
											}, {
												children: [(0, e.jsx)("span", {
													children: "Positive Effect"
												}), n.gainEffect.map((function(n) {
													return (0, e.jsx)(So, {
														gain: n
													})
												}))]
											})) : (0, e.jsx)(e.Fragment, {}), (0, e.jsx)("p", {
												children: "Hold Q while clicking to add item into queue"
											})]
										}))
									}))
								}))
							}))
						}))
				})
			},
			Mo = function() {
				var n = k(vo),
					t = (k(Qa), k(_a("q")));
				return (0, e.jsxs)(e.Fragment, {
					children: [(0, e.jsx)(Io, {
						actions: n.actions
					}), (0, e.jsx)(Po, {
						upgrades: n.upgrades,
						isQHold: t
					}), (0, e.jsx)(Lo, {
						buildings: n.buildings,
						isQHold: t
					})]
				})
			},
			Do = function(e) {
				return e.game.colony
			},
			Uo = function(e) {
				return e.game.colony.isUnlocked
			},
			Fo = function(e) {
				return e.game.colony.effects.happiness
			},
			zo = {
				assignColonist: Nn("[colony] assign colonists", (function(e) {
					return e
				}))
			},
			Ho = function(e) {
				return e.game.resources
			},
			Bo = function(e) {
				return e.game.timeInPrestige
			},
			Wo = function(e) {
				return e.game.settings
			},
			Go = function(e) {
				return e.game.settings.turnAnimationsOn
			},
			Yo = function(e) {
				return e.game.settings.theme
			},
			Xo = function() {
				return Xo = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, Xo.apply(this, arguments)
			},
			Vo = function(n) {
				var t = n.breakdown;
				return t ? (0, e.jsxs)("div", Xo({
					className: "break-down"
				}, {
					children: [t.income.length ? (0, e.jsx)("div", Xo({
						className: "block incomes"
					}, {
						children: t.income.map((function(n) {
							return (0, e.jsxs)("p", Xo({
								className: "line"
							}, {
								children: [(0, e.jsx)("span", {
									children: n.label
								}), (0, e.jsx)("span", {
									children: n.value
								})]
							}))
						}))
					})) : null, t.multiplier.length ? (0, e.jsx)("div", Xo({
						className: "block mult"
					}, {
						children: t.multiplier.map((function(n) {
							return (0, e.jsxs)("p", Xo({
								className: "line"
							}, {
								children: [(0, e.jsx)("span", {
									children: n.label
								}), (0, e.jsx)("span", {
									children: n.value
								})]
							}))
						}))
					})) : null, t.consumption.length ? (0, e.jsx)("div", Xo({
						className: "block cons"
					}, {
						children: t.consumption.map((function(n) {
							return (0, e.jsxs)("p", Xo({
								className: "line"
							}, {
								children: [(0, e.jsx)("span", {
									children: n.label
								}), (0, e.jsx)("span", {
									children: n.value
								})]
							}))
						}))
					})) : null]
				})) : (0, e.jsx)(e.Fragment, {})
			},
			qo = t(1964),
			$o = t.n(qo),
			Ko = function(e) {
				return e.game.expeditions
			},
			Qo = function(e) {
				return e.game.expeditions.isUnlocked
			},
			Zo = {
				sendExpedition: Nn("[expedition-v2] send", (function(e) {
					return e
				})),
				setExpeditionMode: Nn("[expedition-v2] set mode", (function(e) {
					return e
				}))
			},
			Jo = function() {
				return Jo = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, Jo.apply(this, arguments)
			},
			es = function(n) {
				var t, i, a, o, s, l, c = n.resource,
					u = n.className,
					d = void 0 === u ? "" : u,
					p = n.isDetailMode,
					f = void 0 !== p && p,
					h = (0, r.useState)(!1),
					m = h[0],
					g = h[1],
					v = (0, r.useState)(!1),
					b = v[0],
					y = v[1],
					w = window.innerWidth <= 860,
					j = x(),
					k = function(e) {
						j(mt.setUsageHighlight.make(e))
					};
				return (0, e.jsxs)("div", Jo({
					className: "resource-item ".concat(d),
					onMouseEnter: function() {
						return k(c.id)
					},
					onMouseLeave: function() {
						return k(void 0)
					}
				}, {
					children: [(0, e.jsx)("p", Jo({
						className: "resource"
					}, {
						children: c.name
					})), (0, e.jsx)(Ea, Jo({
						duration: 20,
						placement: "right",
						content: (0, e.jsx)(is, {
							isDetailMode: f || w,
							name: c.name,
							breakdown: f || w ? null === (t = c.breakdown) || void 0 === t ? void 0 : t.max : null === (i = c.breakdownCollapsed) || void 0 === i ? void 0 : i.max,
							toEmpty: c.toEmptyTime,
							toMax: c.toFullTime
						})
					}, {
						children: (0, e.jsxs)("p", Jo({
							className: "amount"
						}, {
							children: [c.amount, c.hasMaxLimit ? " / ".concat(c.max) : "", (0, e.jsx)("span", Jo({
								className: "info-tooltip",
								onClick: function(e) {
									e.preventDefault(), e.stopPropagation(), y(!0)
								}
							}, {
								children: (0, e.jsx)("span", Jo({
									className: "info-tooltip-inner"
								}, {
									children: "!"
								}))
							}))]
						}))
					})), w ? (0, e.jsx)(yo, Jo({
						isVisible: b,
						onClose: function() {
							return y(!1)
						}
					}, {
						children: (0, e.jsx)(is, {
							isDetailMode: !0,
							name: c.name,
							breakdown: null === (a = c.breakdown) || void 0 === a ? void 0 : a.max,
							toEmpty: c.toEmptyTime,
							toMax: c.toFullTime
						})
					})) : null, (0, e.jsx)(Ea, Jo({
						placement: "right",
						duration: 20,
						content: (0, e.jsx)(as, {
							isDetailMode: f || w,
							name: c.name,
							breakdown: f || w ? null === (o = c.breakdown) || void 0 === o ? void 0 : o.income : null === (s = c.breakdownCollapsed) || void 0 === s ? void 0 : s.income
						})
					}, {
						children: (0, e.jsxs)("p", {
							children: [c.balance, (0, e.jsx)("span", Jo({
								className: "info-tooltip",
								onClick: function(e) {
									e.preventDefault(), e.stopPropagation(), g(!0)
								}
							}, {
								children: (0, e.jsx)("span", Jo({
									className: "info-tooltip-inner"
								}, {
									children: "!"
								}))
							}))]
						})
					})), w ? (0, e.jsx)(yo, Jo({
						isVisible: m,
						onClose: function() {
							return g(!1)
						}
					}, {
						children: (0, e.jsx)(as, {
							isDetailMode: !0,
							name: c.name,
							breakdown: null === (l = c.breakdown) || void 0 === l ? void 0 : l.income
						})
					})) : null]
				}))
			},
			ns = function(e) {
				return e.game.crafting
			},
			ts = function(e) {
				return e.game.crafting.isUnlocked
			},
			rs = function() {
				return rs = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, rs.apply(this, arguments)
			},
			is = function(n) {
				var t = n.name,
					r = n.breakdown,
					i = n.toEmpty,
					a = n.toMax,
					o = n.isDetailMode;
				return (0, e.jsxs)("div", rs({
					className: "hint-caps"
				}, {
					children: [(0, e.jsxs)("p", {
						children: [t, " Breakdown:"]
					}), (0, e.jsx)(Vo, {
						breakdown: r
					}), o ? null : (0, e.jsx)("p", rs({
						className: "small-note"
					}, {
						children: "Hold Ctrl to see more details"
					})), (0, e.jsxs)("div", rs({
						className: "to-empty-or-full"
					}, {
						children: [i ? (0, e.jsxs)("p", {
							children: ["To empty: ", i]
						}) : null, a ? (0, e.jsxs)("p", {
							children: ["To max: ", a]
						}) : null]
					}))]
				}))
			},
			as = function(n) {
				var t = n.breakdown,
					r = n.name,
					i = n.isDetailMode;
				return (0, e.jsxs)("div", rs({
					className: "hint-caps"
				}, {
					children: [(0, e.jsxs)("p", {
						children: [r, " Breakdown:"]
					}), (0, e.jsx)(Vo, {
						breakdown: t
					}), i ? null : (0, e.jsx)("p", rs({
						className: "small-note"
					}, {
						children: "Hold Ctrl to see more details"
					}))]
				}))
			},
			os = function(n) {
				var t = n.isHidden,
					i = k(Ho),
					a = k(Do),
					o = k(ns),
					s = (k(Bo), k(Fo)),
					l = k(Sa),
					c = k(Ta),
					u = k(Oa),
					d = k(Ko),
					p = (0, r.useState)(!1),
					f = p[0],
					h = p[1],
					m = x(),
					g = function(e, n) {
						m(mt.setKeyIsHold.make({
							key: e,
							isHold: n
						}))
					};
				(0, r.useEffect)((function() {
					var e = function(e) {
						e.ctrlKey ? h(!0) : g(e.key, !0)
					};
					document.addEventListener("keydown", e);
					var n = function(e) {
						console.log("released", e.ctrlKey, e.key), "Control" === e.key ? h(!1) : g(e.key, !1)
					};
					return document.addEventListener("keyup", n),
						function() {
							document.removeEventListener("keydown", e), document.removeEventListener("keyup", n)
						}
				}), []);
				var v = function(e) {
					return l[e] ? "hl missing-highlight" : c[e] ? "hl produced-highlight" : u[e] ? "hl consumed-highlight" : null
				};
				return (0, e.jsxs)("div", rs({
					className: "resources-sidebar ".concat(t ? "hidden" : "")
				}, {
					children: [d.isUnlocked ? (0, e.jsxs)("div", rs({
							className: "expeditions-wrap"
						}, {
							children: [(0, e.jsx)(jo, rs({
								label: "Expedition",
								progress: (Math.round(100 * d.percentage) / 100)
									.toString(),
								isAvailable: !0,
								isBlocked: !1,
								onClick: function() {
									Zo.sendExpedition.send()
								},
								placement: "right",
								fillColor: "#131925",
								progressColor: "#192935"
							}, {
								children: (0, e.jsxs)("div", {
									children: [(0, e.jsxs)("p", rs({
										className: "loot-mult"
									}, {
										children: ["Loot multiplier: x", d.multiplier]
									})), (0, e.jsxs)("p", rs({
										className: "num-exps"
									}, {
										children: ["Expeditions completed: ", d.numExpeditions]
									})), d.isInProgress ? (0, e.jsxs)("p", rs({
										className: "eta"
									}, {
										children: ["Time to complete: ", d.eta]
									})) : null, (0, e.jsxs)("div", rs({
										className: "last-loot gain wrap"
									}, {
										children: [(0, e.jsx)("span", {
											children: "Last Loot"
										}), d.lastLooted.map((function(n) {
											return (0, e.jsx)(So, {
												gain: n
											})
										}))]
									}))]
								})
							})), (0, e.jsxs)("div", rs({
								className: "expeditions-mode flex"
							}, {
								children: [(0, e.jsxs)("span", {
									children: [d.tileName, " [", d.currentX, ";", d.currentY, "]"]
								}), (0, e.jsxs)("span", {
									children: ["ETA: ", d.potentialEta]
								})]
							}))]
						})) : null, a.isUnlocked ? (0, e.jsxs)("div", rs({
							className: "resource-item ".concat(a.jobs.freeWorkers + o.jobs.craftingSlots > 0 ? "capped" : "")
						}, {
							children: [(0, e.jsx)("p", rs({
								className: "resource"
							}, {
								children: "Colonists"
							})), (0, e.jsxs)("p", rs({
								className: "amount"
							}, {
								children: [a.colonists, "/", a.maxColonists, a.jobs.freeWorkers + o.jobs.craftingSlots > 0 ? "(".concat(a.jobs.freeWorkers + o.jobs.craftingSlots, ")") : ""]
							})), (0, e.jsxs)("p", {
								children: [Math.round(100 * s), "%"]
							})]
						})) : null, (0, e.jsx)("div", rs({
							className: "main-resources-wrap"
						}, {
							children: (0, e.jsx)("div", rs({
								className: "main-resources"
							}, {
								children: (0, e.jsx)($o(), {
									children: i.resources.filter((function(e) {
											return e.isUnlocked && !e.isSecondary && !e.isHidden
										}))
										.map((function(n) {
											var t;
											return (0, e.jsx)(es, {
												isDetailMode: f,
												resource: n,
												className: "".concat(null !== (t = v(n.id)) && void 0 !== t ? t : "".concat(n.isNegative ? " negative" : "".concat(n.isCapped ? " capped" : "")))
											})
										}))
								})
							}))
						})), i.resources.filter((function(e) {
							return e.isUnlocked && e.isSecondary
						}))
						.length ? (0, e.jsx)("div", rs({
							className: "secondary-resources"
						}, {
							children: (0, e.jsxs)("div", rs({
								className: "secondary-wrap"
							}, {
								children: [(0, e.jsx)("p", rs({
									className: "subtitle"
								}, {
									children: "Craftable"
								})), (0, e.jsx)("div", rs({
									className: "container-scrollable"
								}, {
									children: (0, e.jsx)($o(), {
										children: i.resources.filter((function(e) {
												return e.isUnlocked && e.isSecondary
											}))
											.map((function(n) {
												var t;
												return (0, e.jsx)(es, {
													isDetailMode: f,
													resource: n,
													className: "".concat(null !== (t = v(n.id)) && void 0 !== t ? t : "".concat(n.isNegative ? " negative" : "".concat(n.isCapped ? " capped" : "")))
												})
											}))
									})
								}))]
							}))
						})) : null
					]
				}))
			},
			ss = function() {
				return ss = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, ss.apply(this, arguments)
			},
			ls = function(e, n, t) {
				if (t || 2 === arguments.length)
					for (var r, i = 0, a = n.length; i < a; i++) !r && i in n || (r || (r = Array.prototype.slice.call(n, 0, i)), r[i] = n[i]);
				return e.concat(r || Array.prototype.slice.call(n))
			},
			cs = function(n) {
				var t = n.one,
					i = n.onMouseEnter,
					a = n.onMouseLeave,
					o = (0, r.useState)(!1),
					s = o[0],
					l = o[1],
					c = Na(),
					u = c[0],
					d = c[1],
					p = window.innerWidth <= 860,
					f = function(e, n) {
						zo.assignColonist.send({
							id: e,
							amount: n
						})
					},
					h = (0, e.jsxs)(e.Fragment, {
						children: [(0, e.jsx)("p", ss({
							className: "title"
						}, {
							children: t.name
						})), (0, e.jsx)("p", ss({
							className: "description"
						}, {
							children: t.description
						})), t.consume.length ? (0, e.jsxs)("div", ss({
							className: "costs wrap"
						}, {
							children: [(0, e.jsx)("span", {
								children: "Consume"
							}), t.consume.map((function(n) {
								return (0, e.jsx)(So, {
									gain: n
								})
							}))]
						})) : (0, e.jsx)(e.Fragment, {}), t.gain.length ? (0, e.jsxs)("div", ss({
							className: "gain wrap"
						}, {
							children: [(0, e.jsx)("span", {
								children: "Produce"
							}), t.gain.map((function(n) {
								return (0, e.jsx)(So, {
									gain: n
								})
							}))]
						})) : (0, e.jsx)(e.Fragment, {}), t.multiplier.length ? (0, e.jsxs)("div", ss({
							className: "mult wrap"
						}, {
							children: [(0, e.jsx)("span", {
								children: "Storage Bonuses"
							}), t.multiplier.map((function(n) {
								return (0, e.jsx)(So, {
									gain: n
								})
							}))]
						})) : (0, e.jsx)(e.Fragment, {})]
					}),
					m = p ? null : (0, e.jsx)("div", ss({
						className: "description-hint"
					}, {
						children: h
					}));
				return (0, e.jsxs)("div", ss({
					onMouseEnter: i,
					onMouseLeave: a
				}, {
					children: [(0, e.jsx)(Ea, {
						singleton: u,
						duration: 20
					}), (0, e.jsx)(Ea, ss({
						singleton: d,
						duration: 20,
						placement: "right",
						content: m
					}, {
						children: (0, e.jsx)(eo, ss({
							id: "planet:colony:jobs:".concat(t.id),
							className: "job-card-wrap"
						}, {
							children: (0, e.jsxs)("div", ss({
								className: "job-card"
							}, {
								children: [(0, e.jsx)("div", ss({
									className: "title"
								}, {
									children: (0, e.jsx)("p", {
										children: t.name
									})
								})), (0, e.jsx)("div", ss({
									className: "controls"
								}, {
									children: (0, e.jsxs)("div", ss({
										className: "set-amount"
									}, {
										children: [(0, e.jsx)("button", ss({
											className: "control minus",
											onClick: function(e) {
												return f(t.id, t.amount - 5)
											}
										}, {
											children: "-5"
										})), (0, e.jsx)(Ea, ss({
											placement: "right",
											singleton: d,
											content: (0, e.jsx)("div", ss({
												className: "description-hint"
											}, {
												children: (0, e.jsx)("p", {
													children: "Hold Ctrl to set 0"
												})
											}))
										}, {
											children: (0, e.jsx)("button", ss({
												className: "control minus",
												onClick: function(e) {
													e.ctrlKey ? f(t.id, 0) : f(t.id, t.amount - 1)
												}
											}, {
												children: "-"
											}))
										})), (0, e.jsx)("input", {
											type: "number",
											value: t.amount,
											onChange: function(e) {
												return f(t.id, +e.target.value)
											}
										}), (0, e.jsx)("div", ss({
											className: "job-labour"
										}, {
											children: t.labour ? (0, e.jsxs)("span", {
												children: ["+", t.labour]
											}) : null
										})), (0, e.jsx)(Ea, ss({
											placement: "right",
											singleton: d,
											content: (0, e.jsx)("div", ss({
												className: "description-hint"
											}, {
												children: (0, e.jsx)("p", {
													children: "Hold Ctrl to set max"
												})
											}))
										}, {
											children: (0, e.jsx)("button", ss({
												className: "control plus",
												onClick: function(e) {
													e.ctrlKey ? f(t.id, 1e10) : f(t.id, t.amount + 1)
												}
											}, {
												children: "+"
											}))
										})), (0, e.jsx)("button", ss({
											className: "control plus",
											onClick: function(e) {
												return f(t.id, t.amount + 5)
											}
										}, {
											children: "+5"
										}))]
									}))
								})), (0, e.jsx)("span", ss({
									className: "info-tooltip",
									onClick: function(e) {
										e.preventDefault(), e.stopPropagation(), l(!0)
									}
								}, {
									children: (0, e.jsx)("span", ss({
										className: "info-tooltip-inner"
									}, {
										children: "!"
									}))
								}))]
							}))
						}))
					})), s && p ? (0, e.jsx)(yo, ss({
						isVisible: s,
						onClose: function() {
							return l(!1)
						}
					}, {
						children: h
					})) : null]
				}))
			},
			us = function() {
				var n = k(Do);
				return (0, e.jsxs)("div", ss({
					className: "colony-wrap"
				}, {
					children: [(0, e.jsx)(La, ss({
						id: "colony-overview",
						label: "Overview",
						className: "overview population"
					}, {
						children: (0, e.jsxs)("div", ss({
							className: "line"
						}, {
							children: [(0, e.jsxs)("p", {
								children: ["Population: ", n.colonists, "/", n.maxColonists]
							}), (0, e.jsxs)("p", {
								children: ["Free colonists: ", n.jobs.freeWorkers]
							})]
						}))
					})), (0, e.jsx)(La, ss({
						isCollapsable: !0,
						id: "colony-happiness",
						label: "Happiness: ".concat(Math.round(100 * n.effects.happiness), "%"),
						className: "overview happiness",
						hint: "Happiness affects your colonists productivity. Has no effect on machinery production."
					}, {
						children: (0, e.jsx)("div", ss({
							className: "line"
						}, {
							children: n.effects.effects.filter((function(e) {
									return e.isUnlocked
								}))
								.map((function(n) {
									return (0, e.jsx)(Ea, ss({
										placement: "right",
										duration: 20,
										content: (0, e.jsx)(as, {
											isDetailMode: !0,
											name: n.name,
											breakdown: n.breakdown
										})
									}, {
										children: (0, e.jsx)(eo, ss({
											id: "planet:colony:effects:".concat(n.id),
											className: "factor-wrap"
										}, {
											children: (0, e.jsxs)("p", ss({
												className: "factor ".concat(n.excess > 0 ? "excess" : "")
											}, {
												children: [n.name, ": ", n.amount, " ", n.excess > 0 ? "(".concat(ro(n.excess), ")") : ""]
											}))
										}))
									}))
								}))
						}))
					})), (0, e.jsx)(La, ss({
						isCollapsable: !0,
						id: "colony-jobs",
						label: (0, e.jsx)(eo, ss({
							id: "planet:colony:jobs",
							className: "label-wrap"
						}, {
							children: "Jobs"
						})),
						className: "jobs"
					}, {
						children: n.jobs.list.filter((function(e) {
								return e.isUnlocked
							}))
							.map((function(n) {
								return (0, e.jsx)(cs, {
									one: n,
									onMouseEnter: function() {
										Oo(ls(ls([], n.multiplier.filter((function(e) {
											return e.amountValue > 1
										})), !0), n.gain, !0)), To(ls(ls([], n.multiplier.filter((function(e) {
											return e.amountValue < 1
										})), !0), n.consume, !0))
									},
									onMouseLeave: function() {
										Oo(null), To(null)
									}
								})
							}))
					}))]
				}))
			},
			ds = {
				assignCrafter: Nn("[crafting] assign crafter", (function(e) {
					return e
				}))
			},
			ps = function() {
				return ps = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, ps.apply(this, arguments)
			},
			fs = function(e, n, t) {
				if (t || 2 === arguments.length)
					for (var r, i = 0, a = n.length; i < a; i++) !r && i in n || (r || (r = Array.prototype.slice.call(n, 0, i)), r[i] = n[i]);
				return e.concat(r || Array.prototype.slice.call(n))
			},
			hs = function(n) {
				var t = n.one,
					i = n.onMouseEnter,
					a = n.onMouseLeave,
					o = (0, r.useState)(!1),
					s = o[0],
					l = o[1],
					c = Na(),
					u = c[0],
					d = c[1],
					p = window.innerWidth <= 860,
					f = function(e, n) {
						ds.assignCrafter.send({
							id: e,
							amount: n
						})
					},
					h = (0, e.jsxs)(e.Fragment, {
						children: [(0, e.jsx)("p", ps({
							className: "title"
						}, {
							children: t.name
						})), t.consume.length ? (0, e.jsxs)("div", ps({
							className: "costs wrap"
						}, {
							children: [(0, e.jsx)("span", {
								children: "Consume"
							}), t.consume.map((function(n) {
								return (0, e.jsx)(So, {
									gain: n
								})
							}))]
						})) : (0, e.jsx)(e.Fragment, {}), t.gain.length ? (0, e.jsxs)("div", ps({
							className: "gain wrap"
						}, {
							children: [(0, e.jsx)("span", {
								children: "Produce"
							}), t.gain.map((function(n) {
								return (0, e.jsx)(So, {
									gain: n
								})
							}))]
						})) : (0, e.jsx)(e.Fragment, {})]
					}),
					m = p ? null : (0, e.jsx)("div", ps({
						className: "description-hint"
					}, {
						children: h
					}));
				return (0, e.jsxs)("div", ps({
					onMouseEnter: i,
					onMouseLeave: a
				}, {
					children: [(0, e.jsx)(Ea, {
						singleton: u,
						duration: 20
					}), (0, e.jsx)(Ea, ps({
						singleton: d,
						duration: 20,
						placement: "right",
						content: m
					}, {
						children: (0, e.jsx)(eo, ps({
							id: "planet:crafting:jobs:".concat(t.id),
							className: "job-card-wrap"
						}, {
							children: (0, e.jsxs)("div", ps({
								className: "job-card"
							}, {
								children: [(0, e.jsx)("div", ps({
									className: "title"
								}, {
									children: (0, e.jsx)("p", {
										children: t.name
									})
								})), (0, e.jsx)("div", ps({
									className: "controls"
								}, {
									children: (0, e.jsxs)("div", ps({
										className: "set-amount"
									}, {
										children: [(0, e.jsx)("button", ps({
											className: "control minus",
											onClick: function(e) {
												return f(t.id, t.amount - 5)
											}
										}, {
											children: "-5"
										})), (0, e.jsx)(Ea, ps({
											placement: "right",
											singleton: d,
											content: (0, e.jsx)("div", ps({
												className: "description-hint"
											}, {
												children: (0, e.jsx)("p", {
													children: "Hold Ctrl to set 0"
												})
											}))
										}, {
											children: (0, e.jsx)("button", ps({
												className: "control minus",
												onClick: function(e) {
													e.ctrlKey ? f(t.id, 0) : f(t.id, t.amount - 1)
												}
											}, {
												children: "-"
											}))
										})), (0, e.jsx)("input", {
											type: "number",
											value: t.amount,
											onChange: function(e) {
												return f(t.id, +e.target.value)
											}
										}), (0, e.jsx)(Ea, ps({
											placement: "right",
											singleton: d,
											content: (0, e.jsx)("div", ps({
												className: "description-hint"
											}, {
												children: (0, e.jsx)("p", {
													children: "Hold Ctrl to set max"
												})
											}))
										}, {
											children: (0, e.jsx)("button", ps({
												className: "control plus",
												onClick: function(e) {
													e.ctrlKey ? f(t.id, 1e10) : f(t.id, t.amount + 1)
												}
											}, {
												children: "+"
											}))
										})), (0, e.jsx)("button", ps({
											className: "control plus",
											onClick: function(e) {
												return f(t.id, t.amount + 5)
											}
										}, {
											children: "+5"
										}))]
									}))
								})), (0, e.jsx)("span", ps({
									className: "info-tooltip",
									onClick: function(e) {
										e.preventDefault(), e.stopPropagation(), l(!0)
									}
								}, {
									children: (0, e.jsx)("span", ps({
										className: "info-tooltip-inner"
									}, {
										children: "!"
									}))
								}))]
							}))
						}))
					})), s && p ? (0, e.jsx)(yo, ps({
						isVisible: s,
						onClose: function() {
							return l(!1)
						}
					}, {
						children: h
					})) : null]
				}))
			},
			ms = function() {
				var n = k(ns);
				return (0, e.jsxs)("div", ps({
					className: "crafting-wrap"
				}, {
					children: [(0, e.jsx)(La, ps({
						id: "crafting-overview",
						label: "Overview",
						className: "overview"
					}, {
						children: (0, e.jsxs)("div", ps({
							className: "line"
						}, {
							children: [(0, e.jsxs)("p", {
								children: ["Crafting Slots: ", n.maxSlots]
							}), (0, e.jsxs)("p", {
								children: ["Free slots: ", n.jobs.craftingSlots]
							})]
						}))
					})), (0, e.jsx)(La, ps({
						id: "crafting-jobs",
						label: (0, e.jsx)(eo, ps({
							id: "planet:crafting:jobs",
							className: "label-wrap"
						}, {
							children: "Jobs"
						})),
						className: "jobs"
					}, {
						children: n.jobs.list.filter((function(e) {
								return e.isUnlocked
							}))
							.map((function(n) {
								return (0, e.jsx)(hs, {
									one: n,
									onMouseEnter: function() {
										Oo(fs([], n.gain, !0)), To(fs([], n.consume, !0))
									},
									onMouseLeave: function() {
										Oo(null), To(null)
									}
								})
							}))
					}))]
				}))
			};

		function gs(e, n) {
			var t, i = (0, r.useState)(null),
				a = i[0],
				o = i[1];
			return [null != a ? a : (null === (t = JSON.parse(localStorage.getItem("cache") || "{}")) || void 0 === t ? void 0 : t[e]) || n, function(n) {
				var t = JSON.parse(localStorage.getItem("cache") || "{}");
				t || (t = {}), t[e] = n, o(n), localStorage.setItem("cache", JSON.stringify(t))
			}]
		}

		function vs() {
			localStorage.removeItem("cache")
		}
		var bs, xs, ys = function() {
				return ys = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, ys.apply(this, arguments)
			},
			ws = function(n) {
				var t = n.expeditions,
					r = n.resources.resources.reduce((function(e, n) {
						return e[n.id] = n.name, e
					}), {});
				return (0, e.jsx)("div", ys({
					className: "expeditions-wrap"
				}, {
					children: (0, e.jsx)($o(), {
						children: (0, e.jsx)("div", ys({
							className: "expeditions-map"
						}, {
							children: t.map.cells.map((function(n) {
								return (0, e.jsx)("div", ys({
									className: "map-row"
								}, {
									children: n.map((function(n) {
										return (0, e.jsx)(Ea, ys({
											duration: 0,
											content: (0, e.jsxs)("div", ys({
												className: "description-hint"
											}, {
												children: [(0, e.jsx)("p", ys({
													className: "title"
												}, {
													children: n.name
												})), (0, e.jsx)("p", ys({
													className: "description"
												}, {
													children: n.description
												})), (0, e.jsxs)("div", ys({
													className: "loot"
												}, {
													children: [Object.entries(n.loot)
														.map((function(n) {
															var t = n[0],
																i = n[1];
															return (0, e.jsxs)("div", ys({
																className: "loot-line"
															}, {
																children: [(0, e.jsx)("p", ys({
																	className: "name"
																}, {
																	children: r[t]
																})), (0, e.jsxs)("p", ys({
																	className: "chance"
																}, {
																	children: [ro(100 * i.chance), "%"]
																})), (0, e.jsxs)("p", ys({
																	className: "amounts"
																}, {
																	children: [ro(i.min), " - ", ro(i.max)]
																}))]
															}))
														})), (0, e.jsxs)("div", ys({
															className: "loot-line"
														}, {
															children: [(0, e.jsx)("p", ys({
																className: "name"
															}, {
																children: "Big loot"
															})), (0, e.jsxs)("p", ys({
																className: "chance"
															}, {
																children: [ro(100 * n.bigFindChance.chance), "%"]
															})), (0, e.jsxs)("p", ys({
																className: "amounts"
															}, {
																children: ["x", ro(n.bigFindChance.multiplier)]
															}))]
														}))
													]
												})), (0, e.jsx)("p", ys({
													className: "eta"
												}, {
													children: to(n.time)
												}))]
											}))
										}, {
											children: (0, e.jsx)("div", {
												className: "map-cell ".concat(0 === n.x && 0 === n.y ? "home" : "", " ")
													.concat(n.x === t.currentX && n.y === t.currentY ? "selected" : "", " ")
													.concat(n.x === t.runningX && n.y === t.runningY ? "current" : ""),
												style: {
													backgroundColor: n.color
												},
												onClick: function() {
													return function(e, n) {
														Zo.setExpeditionMode.send({
															x: e,
															y: n
														})
													}(n.x, n.y)
												}
											})
										}))
									}))
								}))
							}))
						}))
					})
				}))
			},
			js = function() {
				var n = k(Ko),
					t = k(Ho);
				return (0, e.jsx)(ws, {
					expeditions: n,
					resources: t
				})
			},
			ks = function() {
				return ks = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, ks.apply(this, arguments)
			},
			Ns = function(n) {
				var t = n.page;
				return "landingZone" === t ? (0, e.jsx)(Mo, {}) : "colony" === t ? (0, e.jsx)(us, {}) : "crafting" === t ? (0, e.jsx)(ms, {}) : "expeditions" === t ? (0, e.jsx)(js, {}) : (0, e.jsx)("p", {
					children: "None"
				})
			},
			Es = function() {
				var n = gs("landing-zone-page", "landingZone"),
					t = n[0],
					r = n[1],
					i = k(Uo),
					a = k(ts),
					o = k(Qo);
				return (0, e.jsxs)("div", ks({
					className: "fit-height"
				}, {
					children: [(0, e.jsxs)("div", ks({
						className: "submenu"
					}, {
						children: [(0, e.jsx)(eo, ks({
							id: "planet:landing-zone",
							className: "submenu-item-wrap"
						}, {
							children: (0, e.jsx)("div", ks({
								className: "submenu-item ".concat("landingZone" === t ? "selected" : ""),
								onClick: function() {
									return r("landingZone")
								}
							}, {
								children: "Landing zone"
							}))
						})), i ? (0, e.jsx)(eo, ks({
							id: "planet:colony",
							className: "submenu-item-wrap"
						}, {
							children: (0, e.jsx)("div", ks({
								className: "submenu-item ".concat("colony" === t ? "selected" : ""),
								onClick: function() {
									return r("colony")
								}
							}, {
								children: "Colony"
							}))
						})) : null, a ? (0, e.jsx)(eo, ks({
							id: "planet:crafting",
							className: "submenu-item-wrap"
						}, {
							children: (0, e.jsx)("div", ks({
								className: "submenu-item ".concat("crafting" === t ? "selected" : ""),
								onClick: function() {
									return r("crafting")
								}
							}, {
								children: "Crafting"
							}))
						})) : null, o ? (0, e.jsx)(eo, ks({
							id: "planet:expeditions",
							className: "submenu-item-wrap"
						}, {
							children: (0, e.jsx)("div", ks({
								className: "submenu-item ".concat("expeditions" === t ? "selected" : ""),
								onClick: function() {
									return r("expeditions")
								}
							}, {
								children: "Expeditions"
							}))
						})) : null]
					})), (0, e.jsx)("div", ks({
						className: "inner-scrollable planet"
					}, {
						children: (0, e.jsx)($o(), {
							children: (0, e.jsx)("div", ks({
								className: "inner"
							}, {
								children: (0, e.jsx)(Ns, {
									page: t
								})
							}))
						})
					}))]
				}))
			},
			Ss = {
				doResearch: Nn("[science] do research", (function(e) {
					return e
				}))
			},
			Cs = function() {
				return Cs = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, Cs.apply(this, arguments)
			},
			Ts = function() {
				var n = k(ir),
					t = (0, r.useState)(!1),
					i = t[0],
					a = t[1],
					o = k(_a("q"));
				return (0, e.jsx)("div", Cs({
					className: "researches-wrap"
				}, {
					children: (0, e.jsx)("div", Cs({
						className: "research-body"
					}, {
						children: (0, e.jsx)(La, Cs({
							id: "science-researches",
							label: (0, e.jsxs)("div", Cs({
								className: "research-heading"
							}, {
								children: [(0, e.jsx)("p", Cs({
									className: "title"
								}, {
									children: "Researches"
								})), (0, e.jsx)("p", Cs({
									className: "popup-link",
									onClick: function() {
										return a(!i)
									}
								}, {
									children: i ? "Hide researched" : "Show researched"
								}))]
							})),
							className: "researches"
						}, {
							children: (0, e.jsx)($o(), {
								children: n.research.list.filter((function(e) {
										return e.isUnlocked && (!e.isResearched || i)
									}))
									.map((function(n) {
										return (0, e.jsx)(eo, Cs({
											id: "science:researches:".concat(n.id),
											className: "science-wrap"
										}, {
											children: (0, e.jsxs)(jo, Cs({
												label: n.name,
												isAvailable: n.isAvailable && !n.isResearched,
												isBlocked: n.isBlocked,
												progress: n.progress,
												className: "feature-item ".concat(n.etaNum > 1e80 ? "soft-lock" : ""),
												onClick: function() {
													var e;
													o || !n.isAvailable ? Ao.addToQueue.send({
														scope: et.RESEARCH,
														id: n.id
													}) : (e = n.id, zt("research_requested", {
														id: e
													}), Ss.doResearch.send({
														id: e
													}))
												},
												onMouseEnter: function() {
													return Co(n.cost.filter((function(e) {
														return !e.isAvailable
													})))
												},
												onMouseLeave: function() {
													return Co(null)
												}
											}, {
												children: [(0, e.jsx)("p", Cs({
													className: "title"
												}, {
													children: n.name
												})), (0, e.jsx)("p", Cs({
													className: "description"
												}, {
													children: n.description
												})), (0, e.jsxs)("div", Cs({
													className: "costs wrap"
												}, {
													children: [(0, e.jsx)("span", {
														children: "Cost"
													}), n.cost.map((function(n) {
														return (0, e.jsx)(No, {
															cost: n
														})
													}))]
												})), (0, e.jsx)("p", {
													children: "Hold Q while clicking to add item into queue"
												})]
											}))
										}))
									}))
							})
						}))
					}))
				}))
			},
			Os = function() {
				return Os = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, Os.apply(this, arguments)
			},
			As = function(n) {
				return "research" === n.page ? (0, e.jsx)(Ts, {}) : (0, e.jsx)("p", {
					children: "None"
				})
			},
			_s = function() {
				var n = (0, r.useState)("research"),
					t = n[0],
					i = n[1];
				return (0, e.jsxs)("div", Os({
					className: "fit-height"
				}, {
					children: [(0, e.jsx)("div", Os({
						className: "submenu"
					}, {
						children: (0, e.jsx)(eo, Os({
							id: "science:researches",
							className: "submenu-wrap"
						}, {
							children: (0, e.jsx)("div", Os({
								className: "submenu-item ".concat("research" === t ? "selected" : ""),
								onClick: function() {
									return i("research")
								}
							}, {
								children: "Research"
							}))
						}))
					})), (0, e.jsx)("div", Os({
						className: "inner-scrollable science"
					}, {
						children: (0, e.jsx)(As, {
							page: t
						})
					}))]
				}))
			},
			Rs = function() {
				return Rs = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, Rs.apply(this, arguments)
			},
			Is = function() {
				x();
				var n = (0, r.useRef)(null),
					t = (0, r.useState)(""),
					i = t[0],
					a = t[1];
				return (0, e.jsxs)(La, Rs({
					id: "settings-import-export",
					label: "Game Data",
					className: "settings"
				}, {
					children: [(0, e.jsxs)("div", Rs({
						className: "set-row"
					}, {
						children: [(0, e.jsx)("div", Rs({
							className: "label"
						}, {
							children: "Export to file"
						})), (0, e.jsx)("div", Rs({
							className: "val"
						}, {
							children: (0, e.jsx)("button", Rs({
								onClick: function() {
									at.exportToFile.send()
								}
							}, {
								children: "Export"
							}))
						}))]
					})), (0, e.jsxs)("div", Rs({
						className: "set-row"
					}, {
						children: [(0, e.jsx)("div", Rs({
							className: "label"
						}, {
							children: "Import from file"
						})), (0, e.jsxs)("div", Rs({
							className: "val"
						}, {
							children: [(0, e.jsx)("input", {
								type: "file",
								ref: n,
								onChange: function(e) {
									var n = e.target.files[0];
									if (n) {
										var t = new FileReader;
										t.readAsText(n, "UTF-8"), t.onload = function(e) {
											var n, t = null === (n = e.target) || void 0 === n ? void 0 : n.result;
											t ? (console.log("Content to import: ", t), at.loadGame.send(JSON.parse(t))) : alert("Error importing file")
										}, t.onerror = function(e) {
											alert(e)
										}
									}
								}
							}), (0, e.jsx)("button", Rs({
								className: "import",
								onClick: function() {
									var e;
									null === (e = n.current) || void 0 === e || e.click()
								}
							}, {
								children: "Select file"
							}))]
						}))]
					})), (0, e.jsxs)("div", Rs({
						className: "set-row"
					}, {
						children: [(0, e.jsx)("div", Rs({
							className: "label"
						}, {
							children: "Get export text"
						})), (0, e.jsxs)("div", Rs({
							className: "val"
						}, {
							children: [(0, e.jsx)("textarea", {
								id: "export-text-cont"
							}), (0, e.jsx)("button", Rs({
								onClick: function() {
									at.exportToText.send()
								}
							}, {
								children: "Export text"
							}))]
						}))]
					})), (0, e.jsxs)("div", Rs({
						className: "set-row"
					}, {
						children: [(0, e.jsx)("div", Rs({
							className: "label"
						}, {
							children: "Import from text"
						})), (0, e.jsxs)("div", Rs({
							className: "val"
						}, {
							children: [(0, e.jsx)("textarea", Rs({
								onChange: function(e) {
									return a(e.target.value)
								}
							}, {
								children: i
							})), (0, e.jsx)("button", Rs({
								className: "import",
								onClick: function() {
									at.loadGame.send(JSON.parse(atob(i)))
								}
							}, {
								children: "Import"
							}))]
						}))]
					})), (0, e.jsxs)("div", Rs({
						className: "set-row"
					}, {
						children: [(0, e.jsx)("div", Rs({
							className: "label"
						}, {
							children: "Save"
						})), (0, e.jsx)("div", Rs({
							className: "val"
						}, {
							children: (0, e.jsx)("button", Rs({
								onClick: function() {
									at.triggerSave.send()
								}
							}, {
								children: "Save"
							}))
						}))]
					})), (0, e.jsxs)("div", Rs({
						className: "set-row"
					}, {
						children: [(0, e.jsx)("div", Rs({
							className: "label"
						}, {
							children: "Abandon Planet"
						})), (0, e.jsx)("div", Rs({
							className: "val"
						}, {
							children: (0, e.jsx)("button", Rs({
								onClick: function() {
									confirm("This action will move you to default planet without any bonuses/XP gain. Are you sure?") && at.abandonPlanet.send()
								}
							}, {
								children: "Abandon"
							}))
						}))]
					})), (0, e.jsxs)("div", Rs({
						className: "set-row"
					}, {
						children: [(0, e.jsx)("div", Rs({
							className: "label"
						}, {
							children: "Hard reset"
						})), (0, e.jsx)("div", Rs({
							className: "val"
						}, {
							children: (0, e.jsx)("button", Rs({
								onClick: function() {
									confirm("This action will remove all your game data. Are you sure?") && (window.localStorage.removeItem("gameData"), window.location.reload())
								}
							}, {
								children: "Wipe game data"
							}))
						}))]
					}))]
				}))
			},
			Ps = function(n) {
				var t = n.settings;
				return (0, e.jsxs)(La, Rs({
					id: "settings-import-export",
					label: "UI Preferences",
					className: "settings"
				}, {
					children: [(0, e.jsxs)("div", Rs({
						className: "set-row"
					}, {
						children: [(0, e.jsx)("div", Rs({
							className: "label"
						}, {
							children: "Toggle animations"
						})), (0, e.jsxs)("div", Rs({
							className: "val"
						}, {
							children: [(0, e.jsx)("button", Rs({
								onClick: function() {
									at.turnAnimations.send(!t.turnAnimationsOn)
								}
							}, {
								children: t.turnAnimationsOn ? "On" : "Off"
							})), (0, e.jsx)("p", {
								children: "This will save game and reload page"
							})]
						}))]
					})), (0, e.jsxs)("div", Rs({
						className: "set-row"
					}, {
						children: [(0, e.jsx)("div", Rs({
							className: "label"
						}, {
							children: "Toggle theme"
						})), (0, e.jsxs)("div", Rs({
							className: "val"
						}, {
							children: [(0, e.jsx)("select", Rs({
								onChange: function(e) {
									return n = e.target.value, void at.toggleTheme.send(n);
									var n
								}
							}, {
								children: Object.values(tt)
									.map((function(n) {
										return (0, e.jsx)("option", Rs({
											selected: n === t.theme
										}, {
											children: n
										}))
									}))
							})), (0, e.jsx)("p", {
								children: "Changing this will save game and reload page"
							})]
						}))]
					}))]
				}))
			},
			Ls = function() {
				var n = k(Wo);
				return (0, e.jsx)($o(), {
					children: (0, e.jsxs)(e.Fragment, {
						children: [(0, e.jsx)(Is, {}), (0, e.jsx)(Ps, {
							settings: n
						})]
					})
				})
			};
		! function(e) {
			e.SCIENCE = "Science", e.ECONOMY = "Economy", e.SOCIAL = "Social"
		}(bs || (bs = {})),
		function(e) {
			e.EXPERIMENTAL_MEDICINE = "experimental_medicine", e.WATER_FILTERING = "water_filtering", e.RESEARCH_GRANTS = "research_grants", e.INDUSTRIALIZATION = "industrialization", e.FOREST_BEHAVOUR = "forest_behavour", e.SECURITY_DOTATIONS = "security_dotations", e.ARTIFICIAL_ORGANS = "artificial_organs", e.COAL_BURNING = "coal_burning", e.CLEAR_CUTTING = "clear_cutting", e.FOOD_CHEMICAL_PROCESSING = "food_chemical_processing", e.ELECTROTHERMAL_SMELTING = "electrothermal_smelting", e.ORBITAL_BIOEXPERIMENT = "orbital_bioexperiment", e.AGRESSIVE_BACTERIA_USAGE = "agressive-bacteria-usage", e.MASSMEDIA = "mass-media-mode", e.LIGHTNING_MODE = "lightning-mode", e.PARK_ZONES_UPKEEP = "park-zones-upkeep", e.EXOTIC_MATTER_EXPERIMENTS = "exotic-matter-study", e.FUEL_PROCESSING = "fuel-processing", e.TEMPLE_RIGHTS = "temple-rights", e.FURNACE_SMELTING = "furnace-smelting"
		}(xs || (xs = {}));
		var Ms, Ds, Us, Fs = {
				selectLawOption: Nn("[laws] set option", (function(e) {
					return e
				}))
			},
			zs = function() {
				return zs = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, zs.apply(this, arguments)
			},
			Hs = function(n) {
				var t = n.laws,
					r = x();
				return (0, e.jsx)("div", zs({
					className: "laws-list"
				}, {
					children: t.map((function(n) {
						return (0, e.jsx)(eo, zs({
							id: "laws:orders:".concat(n.category, ":")
								.concat(n.id),
							className: "law-box-wrap"
						}, {
							children: (0, e.jsxs)("div", zs({
								className: "law-box"
							}, {
								children: [(0, e.jsxs)("div", zs({
									className: "law-description"
								}, {
									children: [(0, e.jsx)("p", zs({
										className: "title"
									}, {
										children: n.name
									})), (0, e.jsx)("p", zs({
										className: "description"
									}, {
										children: n.description
									}))]
								})), (0, e.jsx)("div", zs({
									className: "law-options"
								}, {
									children: n.options.map((function(t, i) {
										return (0, e.jsx)("div", zs({
											className: "option-box ".concat(t.isSelected ? "selected" : "")
										}, {
											children: (0, e.jsx)(Ea, zs({
												placement: "right",
												duration: 20,
												content: (0, e.jsxs)("div", zs({
													className: "description-hint"
												}, {
													children: [(0, e.jsx)("p", zs({
														className: "title"
													}, {
														children: t.name
													})), (0, e.jsx)("p", zs({
														className: "description"
													}, {
														children: t.description
													})), t.consume.length ? (0, e.jsxs)("div", zs({
														className: "costs wrap"
													}, {
														children: [(0, e.jsx)("span", {
															children: "Consume"
														}), t.consume.map((function(n) {
															return (0, e.jsx)(So, {
																gain: n
															})
														}))]
													})) : (0, e.jsx)(e.Fragment, {}), t.gain.length ? (0, e.jsxs)("div", zs({
														className: "gain wrap"
													}, {
														children: [(0, e.jsx)("span", {
															children: "Produce"
														}), t.gain.map((function(n) {
															return (0, e.jsx)(So, {
																gain: n
															})
														}))]
													})) : (0, e.jsx)(e.Fragment, {}), t.gainMult.length ? (0, e.jsxs)("div", zs({
														className: "gain wrap"
													}, {
														children: [(0, e.jsx)("span", {
															children: "Income Multipliers"
														}), t.gainMult.map((function(n) {
															return (0, e.jsx)(So, {
																gain: n
															})
														}))]
													})) : (0, e.jsx)(e.Fragment, {}), t.max.length ? (0, e.jsxs)("div", zs({
														className: "store wrap"
													}, {
														children: [(0, e.jsx)("span", {
															children: "Storage"
														}), t.max.map((function(n) {
															return (0, e.jsx)(So, {
																gain: n
															})
														}))]
													})) : (0, e.jsx)(e.Fragment, {}), t.consumeEffect.length ? (0, e.jsxs)("div", zs({
														className: "costs wrap"
													}, {
														children: [(0, e.jsx)("span", {
															children: "Negative Effect"
														}), t.consumeEffect.map((function(n) {
															return (0, e.jsx)(So, {
																gain: n
															})
														}))]
													})) : (0, e.jsx)(e.Fragment, {}), t.gainEffect.length ? (0, e.jsxs)("div", zs({
														className: "gain wrap"
													}, {
														children: [(0, e.jsx)("span", {
															children: "Positive Effect"
														}), t.gainEffect.map((function(n) {
															return (0, e.jsx)(So, {
																gain: n
															})
														}))]
													})) : (0, e.jsx)(e.Fragment, {})]
												}))
											}, {
												children: (0, e.jsx)("div", zs({
													className: "law-option-inner",
													onClick: function(e) {
														return t = n.id, a = i, void r(Fs.selectLawOption.send({
															id: t,
															optionId: a
														}));
														var t, a
													}
												}, {
													children: (0, e.jsx)("p", {
														children: t.name
													})
												}))
											}))
										}))
									}))
								}))]
							}))
						}))
					}))
				}))
			},
			Bs = function() {
				var n = gs("laws-category", bs.SOCIAL),
					t = n[0],
					r = n[1],
					i = k(Fa)
					.laws.filter((function(e) {
						return e.isUnlocked && e.category === t
					}));
				return (0, e.jsxs)("div", zs({
					className: "fit-height"
				}, {
					children: [(0, e.jsx)("div", zs({
						className: "submenu"
					}, {
						children: Object.values(bs)
							.map((function(n) {
								return (0, e.jsx)(eo, zs({
									id: "laws:orders:".concat(n),
									className: "submenu-wrap"
								}, {
									children: (0, e.jsx)("div", zs({
										className: "submenu-item ".concat(t === n ? "selected" : ""),
										onClick: function() {
											return r(n)
										}
									}, {
										children: n
									}))
								}))
							}))
					})), (0, e.jsx)("div", zs({
						className: "inner-scrollable planet"
					}, {
						children: (0, e.jsx)($o(), {
							children: (0, e.jsx)("div", zs({
								className: "inner"
							}, {
								children: (0, e.jsx)(Hs, {
									laws: i
								})
							}))
						})
					}))]
				}))
			},
			Ws = function() {
				return Ws = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, Ws.apply(this, arguments)
			},
			Gs = function() {
				return (0, e.jsx)("div", Ws({
					className: "fit-height"
				}, {
					children: (0, e.jsxs)("div", Ws({
						className: "version-panes"
					}, {
						children: [(0, e.jsxs)("div", Ws({
							className: "about"
						}, {
							children: [(0, e.jsxs)("p", {
								children: ["This game was pretty much inspired by ", (0, e.jsx)("a", Ws({
									href: "https://kittensgame.com/web/",
									target: "_blank"
								}, {
									children: "Kittens game"
								})), ", but it's not a clone."]
							}), (0, e.jsx)("p", {
								children: "You start with broken ship on hostile planet. Your main goal is to prepare for first colonists to arrive, and build prosperous civilisation"
							}), (0, e.jsx)("p", {}), (0, e.jsx)("p", {
								children: "By Strange Matter Gaming"
							}), (0, e.jsx)("p", {
								children: (0, e.jsx)("a", Ws({
									className: "popup-link",
									href: "https://patreon.com/user?u=83421544",
									target: "_blank"
								}, {
									children: "Support on Patreon"
								}))
							}), (0, e.jsx)("p", {
								children: (0, e.jsx)("a", Ws({
									className: "popup-link",
									href: "https://discord.gg/TRRvKf4ZTG",
									target: "_blank"
								}, {
									children: "Join our Discord"
								}))
							})]
						})), (0, e.jsx)("div", Ws({
							className: "change-log"
						}, {
							children: (0, e.jsxs)($o(), {
								children: [(0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.2.6a Balance Hotfix"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "26/08/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Reduced default event frequency"
										}), (0, e.jsx)("li", {
											children: "Increased colonists arrival time"
										}), (0, e.jsx)("li", {
											children: "Decreased colonists death speed"
										}), (0, e.jsx)("li", {
											children: "Updated some XP prices"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.2.6 Regular Update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "26/08/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Added events and disasters"
										}), (0, e.jsx)("li", {
											children: "Reworked expeditions"
										}), (0, e.jsx)("li", {
											children: "Added new XP upgrades related to planet modifiers/complexity"
										}), (0, e.jsx)("li", {
											children: 'Added XP upgrade unlocking new "Labor" job, that auto-assign to jobs depending on what resource is negative'
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.2.5 Small Update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "22/08/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Added color themes settings"
										}), (0, e.jsx)("li", {
											children: "Added option to sort queue by ETA"
										}), (0, e.jsx)("li", {
											children: "Clicking on unavailable item will now add it to queue"
										}), (0, e.jsx)("li", {
											children: "XP bonus now shown on planet options"
										}), (0, e.jsx)("li", {
											children: "Produced/Consumed/Boosted resources are now highlighted when you hover over building/job"
										}), (0, e.jsx)("li", {
											children: "Plenty of other less significant fixes"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.2.4a Small Update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "21/08/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Decreased power requirements for some early-game buildings"
										}), (0, e.jsx)("li", {
											children: "Fixed bug when queue didnt cleared on reset"
										}), (0, e.jsx)("li", {
											children: "Fixed XP calculation formula for some modifiers"
										}), (0, e.jsx)("li", {
											children: "Typo fixes"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.2.4 Minor Update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "20/08/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Added 7 new early- & mid-game laws"
										}), (0, e.jsx)("li", {
											children: "New planet modifiers"
										}), (0, e.jsx)("li", {
											children: "Added possibility to swap items in queue"
										}), (0, e.jsx)("li", {
											children: "Added possibility to filter events"
										}), (0, e.jsx)("li", {
											children: "Minor bugs and typos fixes"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.2.3 Regular update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "19/08/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Added new late game content: buildings, resources, researches"
										}), (0, e.jsx)("li", {
											children: "Implemented queue for buildings/researches"
										}), (0, e.jsx)("li", {
											children: "Implemented event log"
										}), (0, e.jsx)("li", {
											children: "Added specific highlight to upgrades unlocking buildings/researches"
										}), (0, e.jsx)("li", {
											children: "Update some buildings and techs requirements"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.2.2b Tiny UI update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "09/08/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Selected sub-tabs are now refreshed on prestige"
										}), (0, e.jsx)("li", {
											children: "Some grammar fixes"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.2.2a Tiny UI update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "29/07/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Selected sub-tabs are now remembered when you switch between pages"
										}), (0, e.jsx)("li", {
											children: "Tiny performance related fixes"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.2.2 Regular UI and QoL Update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "28/07/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Fixed UI for mobile devices on spaceships and fights tabs"
										}), (0, e.jsx)("li", {
											children: "Implemented shortened view of resource breakdown (Can press Ctrl to view detailed)"
										}), (0, e.jsx)("li", {
											children: "Transmit knowledge upgrades now can be purchased in bulk pressing Shift/Ctrl"
										}), (0, e.jsx)("li", {
											children: "Fixed bug when timers might not show on spaceship construction page"
										}), (0, e.jsx)("li", {
											children: "Fixed bug when progress on hangar tab might be shown incorrectly"
										}), (0, e.jsx)("li", {
											children: "Fixed memory-leak when have space fights on while speed up time turned on"
										}), (0, e.jsx)("li", {
											children: "Added highlight and amount over cap for capped colony happiness aspects"
										}), (0, e.jsx)("li", {
											children: "Fixed bug when on mobile tooltip popups didn't shown content on overflow"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.2.1 Small Update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "26/07/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Added offline time progression"
										}), (0, e.jsx)("li", {
											children: "Fixed some bugs related to spaceships crafting"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.2.0c UI Hotfix Update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "25/07/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: 'Added "On/Off" animations option'
										}), (0, e.jsx)("li", {
											children: "Fixed white space issue "
										}), (0, e.jsx)("li", {
											children: "Fixed bug with resources display on mobile"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.2.0b Hotfix Update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "24/07/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Fixed bug related to KP bonus from fights"
										}), (0, e.jsx)("li", {
											children: "Fixed scroll behavior for craftables list"
										}), (0, e.jsx)("li", {
											children: "Fixed display bug for XP bonus in next run"
										}), (0, e.jsx)("li", {
											children: "Fixed bug when research grant law didn't impact on meteo-station when it start consuming power"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.2.0a Hotfix Update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "22/07/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Fixed bug related to building/scrapping ships"
										}), (0, e.jsx)("li", {
											children: "Fixed bug prevented XP bonus from fights to work in some cases"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.2.0 Big Update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "22/07/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Almost 20 new late game researches and tones of upgrades"
										}), (0, e.jsx)("li", {
											children: "New game mechanics - space fights"
										}), (0, e.jsx)("li", {
											children: "Added 2nd layer prestige upgrades"
										}), (0, e.jsx)("li", {
											children: "Some calculations fixes and optimizations"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.1.0c Tiny Fix"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "05/07/2023"
										}))]
									})), (0, e.jsx)("ul", Ws({
										className: "features"
									}, {
										children: (0, e.jsx)("li", {
											children: "Fixed issue when materials with 0 capacity could be produced"
										})
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.1.0b Small Fixes"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "05/07/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Fixed issue when false warning on building efficiency dropped appeared"
										}), (0, e.jsx)("li", {
											children: "Fixed layout issue on smaller screens"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.1.0a Small Fixes"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "04/07/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Added warning on buildings running on lower efficiency"
										}), (0, e.jsx)("li", {
											children: "Updated formula to calculate XP bonus"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.1.0 Big Update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "02/07/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Added new late game content"
										}), (0, e.jsx)("li", {
											children: "Fixed/changed some goals"
										}), (0, e.jsx)("li", {
											children: "Changed game loading mechanism to prevent data loss"
										}), (0, e.jsx)("li", {
											children: "Implemented statistics page"
										}), (0, e.jsx)("li", {
											children: "Fixed some buildings prices"
										}), (0, e.jsx)("li", {
											children: "Updated second prestige layer - fixed some formulas"
										}), (0, e.jsx)("li", {
											children: 'Added "Weather" mechanics, available on some planets'
										}), (0, e.jsx)("li", {
											children: 'Increased "Expeditions" rewards'
										}), (0, e.jsx)("li", {
											children: "Small UI and QoL fixes"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.0.5c Small Hotfix Update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "29/06/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Continued goals"
										}), (0, e.jsx)("li", {
											children: "Fixed some bugs in buildings bonuses"
										}), (0, e.jsx)("li", {
											children: "Fixed some bugs in prestige mechanics"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.0.5b Small Hotfix Update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "28/06/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Increased some buildings efficiency"
										}), (0, e.jsx)("li", {
											children: "You can now press Shift or Ctrl to batch enable/disable buildings"
										}), (0, e.jsx)("li", {
											children: "Fixed UI bug on mobile on pages with small amount of content"
										}), (0, e.jsx)("li", {
											children: "Fixed some other small bugs"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.0.5a Small Hotfix Update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "26/06/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Fixed descriptions for some prestige upgrades"
										}), (0, e.jsx)("li", {
											children: "Fixed bug when Organics mastery was missing"
										}), (0, e.jsx)("li", {
											children: "Fixed layout issues on some devices"
										}), (0, e.jsx)("li", {
											children: "Fixed bug in formula for second layer prestige bonus calculation"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.0.5 Content Update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "25/06/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Added new late game content"
										}), (0, e.jsx)("li", {
											children: "Added second prestige level"
										}), (0, e.jsx)("li", {
											children: "Increased factories bonuses"
										}), (0, e.jsx)("li", {
											children: "Decreased some upgrades bonuses"
										}), (0, e.jsx)("li", {
											children: "Fixed weird scroll behaviour on mobile"
										}), (0, e.jsx)("li", {
											children: "Fixed some prestige upgrades descriptions"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.0.4a Hotfix"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "18/06/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Fixed display on album-oriented screens"
										}), (0, e.jsx)("li", {
											children: "Fix bug with building efficiency calculation"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.0.4 Minor update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "18/06/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Add few new researches and buildings"
										}), (0, e.jsx)("li", {
											children: "Added highlight for buildings that use howered resource"
										}), (0, e.jsx)("li", {
											children: "Expedition button now on the top"
										}), (0, e.jsx)("li", {
											children: "Added +/-5 controls for jobs and crafters"
										}), (0, e.jsx)("li", {
											children: "Colonists now assigned automatically to artisans once you run out of free crafters but have free colonists"
										}), (0, e.jsx)("li", {
											children: "Warehouses now provide nutrition capacity"
										}), (0, e.jsx)("li", {
											children: "Fixed descriptions"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.0.3b Mobile friendly UI version"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "16/06/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Items that require more capacity are now highlighted differently"
										}), (0, e.jsx)("li", {
											children: "Added mobile support (Experimental and might be buggy)"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.0.3a Hotfix update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "16/06/2023"
										}))]
									})), (0, e.jsx)("ul", Ws({
										className: "features"
									}, {
										children: (0, e.jsx)("li", {
											children: "Fixed bugs with expeditions"
										})
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.0.3 Minor update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "15/06/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Added notifications for new buildings/upgrades/laws"
										}), (0, e.jsx)("li", {
											children: "Re-balanced some buildings: Smelters and Monuments prices reduces, increased Smelter ore upkeep, removed Warehouse power upkeep"
										}), (0, e.jsx)("li", {
											children: "Added new laws"
										}), (0, e.jsx)("li", {
											children: "Added expedition length settings"
										}), (0, e.jsx)("li", {
											children: "Added 2 new science researches, 3 upgrades and 1 building"
										}), (0, e.jsx)("li", {
											children: "Fixed some mistakes in descriptions"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.0.2d Small update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "12/06/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Edited upgrade descriptions"
										}), (0, e.jsx)("li", {
											children: "Fixed bug when not active expedition centers provided boost to expedition multiplier"
										}), (0, e.jsx)("li", {
											children: "Fixed bug when locked resources still were displaying in bonuses or requirements list"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.0.2c Small hotfix update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "10/06/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Expedition center now also requires Geography research"
										}), (0, e.jsx)("li", {
											children: "Fixed descriptions of some upgrades"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.0.2b Expeditions added"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "09/06/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: 'Added "Expeditions" - active way to speed up getting resources'
										}), (0, e.jsx)("li", {
											children: "Inverted colors for in-progress items"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.0.2a Small UI updates"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "09/06/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Available actions are now highlighted on hover"
										}), (0, e.jsx)("li", {
											children: "Items that will never be available now highlighted in different color"
										}), (0, e.jsx)("li", {
											children: "Controls are shown disabled now when they not available"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.0.2 Prestige mechanics & New content"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "08/06/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Added prestige mechanics"
										}), (0, e.jsx)("li", {
											children: "Added new early space content (researches, buildings)"
										}), (0, e.jsx)("li", {
											children: "Negative and capped resources are now highlighted"
										}), (0, e.jsx)("li", {
											children: "Fixed bug when max colonists amount could be not integer value"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.0.1a UI and small features update"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "03/06/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Added highlight on missing resource when hower over building/upgrade/research"
										}), (0, e.jsx)("li", {
											children: "Popups will now appear always to right"
										}), (0, e.jsx)("li", {
											children: "Changed size and background for buildable/upgradeable items to make them easier to see/click"
										}), (0, e.jsx)("li", {
											children: "Added manual save and hard reset buttons"
										})]
									}))]
								})), (0, e.jsxs)("div", Ws({
									className: "version-block"
								}, {
									children: [(0, e.jsxs)("div", Ws({
										className: "version-title"
									}, {
										children: [(0, e.jsx)("h3", {
											children: "v0.0.1 First Playable Prototype"
										}), (0, e.jsx)("span", Ws({
											className: "date"
										}, {
											children: "02/06/2023"
										}))]
									})), (0, e.jsxs)("ul", Ws({
										className: "features"
									}, {
										children: [(0, e.jsx)("li", {
											children: "Approximately 48 hours of playable content"
										}), (0, e.jsx)("li", {
											children: "Basic game mechanics: buildings, researches, upgrades, colony management"
										})]
									}))]
								}))]
							})
						}))]
					}))
				}))
			},
			Ys = function() {
				return Ys = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, Ys.apply(this, arguments)
			},
			Xs = function(e, n, t) {
				if (t || 2 === arguments.length)
					for (var r, i = 0, a = n.length; i < a; i++) !r && i in n || (r || (r = Array.prototype.slice.call(n, 0, i)), r[i] = n[i]);
				return e.concat(r || Array.prototype.slice.call(n))
			},
			Vs = function(n) {
				var t = n.buildings,
					r = n.isQHold,
					i = k(Ca),
					a = t.list.filter((function(e) {
						return e.isUnlocked && Object.values(lo)
							.includes(e.category)
					}))
					.reduce((function(e, n) {
						return e[n.category] ? e[n.category].push(n) : e[n.category] = [n], e
					}), {});
				return (0, e.jsx)("div", {
					children: Object.entries(a)
						.map((function(n) {
							var t = n[0],
								a = n[1];
							return (0, e.jsx)(La, Ys({
								isCollapsable: !0,
								id: "space-buildings-".concat(t),
								label: (0, e.jsx)(eo, Ys({
									id: "space:building:".concat(t),
									className: "label-wrap"
								}, {
									children: "".concat(t, " Buildings")
								})),
								className: "buildings-wrap",
								contentClassName: "flex"
							}, {
								children: a.map((function(n) {
									var a;
									return (0, e.jsx)(eo, Ys({
										id: "space:building:".concat(t, ":")
											.concat(n.id),
										className: "building-wrap"
									}, {
										children: (0, e.jsxs)(jo, Ys({
											label: n.name,
											isAvailable: n.isAvailable,
											isBlocked: n.isBlocked,
											progress: n.progress,
											className: "feature-item ".concat(i && n.cost.find((function(e) {
												return e.id === i
											})) ? "usage-highlight" : ""),
											onClick: function() {
												var e;
												r || !n.isAvailable ? Ao.addToQueue.send({
													scope: et.BUILDING,
													id: n.id
												}) : (e = n.id, bo.doBuild.send({
													id: e
												}))
											},
											level: n.activeAmount || 0,
											maxLevel: n.level,
											isLevelControllable: !0,
											onChangeAmount: function(e) {
												var t, r;
												console.log("amount: ", e), t = n.id, r = e, bo.setBuildingAmount.send({
													id: t,
													amount: r
												})
											},
											onMouseEnter: function() {
												Co(n.cost.filter((function(e) {
													return !e.isAvailable
												}))), Oo(Xs(Xs([], n.gainMult.filter((function(e) {
													return e.amountValue > 1
												})), !0), n.gain, !0)), To(Xs(Xs([], n.gainMult.filter((function(e) {
													return e.amountValue < 1
												})), !0), n.consume, !0))
											},
											onMouseLeave: function() {
												Co(null), Oo(null), To(null)
											}
										}, {
											children: [(0, e.jsx)("p", Ys({
												className: "title"
											}, {
												children: n.name
											})), (0, e.jsx)("p", Ys({
												className: "description"
											}, {
												children: n.description
											})), n.efficiency.isDropped ? (0, e.jsxs)("p", Ys({
												className: "eff-dropped"
											}, {
												children: ["Efficiency: ", ro(100 * n.efficiency.efficiency), "%", (0, e.jsxs)("span", Ys({
													className: "missing-resource"
												}, {
													children: ["Missing ", null === (a = n.efficiency.missingResource) || void 0 === a ? void 0 : a.name]
												}))]
											})) : (0, e.jsx)(e.Fragment, {}), n.cost.length ? (0, e.jsxs)("div", Ys({
												className: "costs wrap"
											}, {
												children: [(0, e.jsx)("span", {
													children: "Cost"
												}), n.cost.map((function(n) {
													return (0, e.jsx)(No, {
														cost: n
													})
												}))]
											})) : (0, e.jsx)(e.Fragment, {}), n.consume.length ? (0, e.jsxs)("div", Ys({
												className: "costs wrap"
											}, {
												children: [(0, e.jsx)("span", {
													children: "Consume"
												}), n.consume.map((function(n) {
													return (0, e.jsx)(So, {
														gain: n
													})
												}))]
											})) : (0, e.jsx)(e.Fragment, {}), n.gain.length ? (0, e.jsxs)("div", Ys({
												className: "gain wrap"
											}, {
												children: [(0, e.jsx)("span", {
													children: "Produce"
												}), n.gain.map((function(n) {
													return (0, e.jsx)(So, {
														gain: n
													})
												}))]
											})) : (0, e.jsx)(e.Fragment, {}), n.gainMult.length ? (0, e.jsxs)("div", Ys({
												className: "gain wrap"
											}, {
												children: [(0, e.jsx)("span", {
													children: "Income Bonuses"
												}), n.gainMult.map((function(n) {
													return (0, e.jsx)(So, {
														gain: n
													})
												}))]
											})) : (0, e.jsx)(e.Fragment, {}), n.max.length ? (0, e.jsxs)("div", Ys({
												className: "store wrap"
											}, {
												children: [(0, e.jsx)("span", {
													children: "Storage"
												}), n.max.map((function(n) {
													return (0, e.jsx)(So, {
														gain: n
													})
												}))]
											})) : (0, e.jsx)(e.Fragment, {}), n.consumeEffect.length ? (0, e.jsxs)("div", Ys({
												className: "costs wrap"
											}, {
												children: [(0, e.jsx)("span", {
													children: "Negative Effect"
												}), n.consumeEffect.map((function(n) {
													return (0, e.jsx)(So, {
														gain: n
													})
												}))]
											})) : (0, e.jsx)(e.Fragment, {}), n.gainEffect.length ? (0, e.jsxs)("div", Ys({
												className: "gain wrap"
											}, {
												children: [(0, e.jsx)("span", {
													children: "Positive Effect"
												}), n.gainEffect.map((function(n) {
													return (0, e.jsx)(So, {
														gain: n
													})
												}))]
											})) : (0, e.jsx)(e.Fragment, {}), (0, e.jsx)("p", {
												children: "Hold Q while clicking to add item into queue"
											})]
										}))
									}))
								}))
							}))
						}))
				})
			},
			qs = function() {
				var n = k(vo),
					t = k(_a("q"));
				return (0, e.jsx)(e.Fragment, {
					children: (0, e.jsx)(Vs, {
						buildings: n.buildings,
						isQHold: t
					})
				})
			},
			$s = {
				doCreate: Nn("[spaceship-constructor] create-new", (function(e) {
					return e
				})),
				doEdit: Nn("[spaceship-constructor] load-to-editor", (function(e) {
					return e
				})),
				doSave: Nn("[spaceship-constructor] save", (function(e) {
					return e
				})),
				doSetId: Nn("[spaceship-constructor] set part id", (function(e) {
					return e
				})),
				doSetLevel: Nn("[spaceship-constructor] set part level", (function(e) {
					return e
				})),
				doSetName: Nn("[spaceship-constructor] set name", (function(e) {
					return e
				})),
				doDeleteModel: Nn("[spaceship-constructor] delete", (function(e) {
					return e
				})),
				doBuildShip: Nn("[spaceship-hangar] build", (function(e) {
					return e
				})),
				doDestroyShip: Nn("[spaceship-hangar] destroy", (function(e) {
					return e
				})),
				doCreateFleet: Nn("[spaceship-fleet] create-new", (function(e) {
					return e
				})),
				doEditFleet: Nn("[spaceship-fleet] load-to-editor", (function(e) {
					return e
				})),
				doSaveFleet: Nn("[spaceship-fleet] save", (function(e) {
					return e
				})),
				doSetFleetId: Nn("[spaceship-fleet] set id", (function(e) {
					return e
				})),
				doSetFleetName: Nn("[spaceship-fleet] set name", (function(e) {
					return e
				})),
				doDeleteFleet: Nn("[spaceship-fleet] delete", (function(e) {
					return e
				})),
				doSetBattleFleet: Nn("[space-battlefield] set fleet", (function(e) {
					return e
				})),
				doSetBattleLevel: Nn("[space-battlefield] set level", (function(e) {
					return e
				})),
				doToggleFight: Nn("[space-battlefield] toggle fight", (function(e) {
					return e
				})),
				doToggleAutoFight: Nn("[space-battlefield] toggle autofight", (function(e) {
					return e
				})),
				doToggleAutoAdvance: Nn("[space-battlefield] toggle autoprogress", (function(e) {
					return e
				}))
			},
			Ks = function() {
				return Ks = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, Ks.apply(this, arguments)
			},
			Qs = function(n) {
				var t, r, i, a, o, s, l, c, u = n.spaceship;
				return (0, e.jsxs)("div", Ks({
					className: "editor-wrap columns"
				}, {
					children: [(0, e.jsxs)("div", Ks({
						className: "loader-column column"
					}, {
						children: [(0, e.jsx)("div", Ks({
							className: "select-item primary",
							onClick: function() {
								$s.doCreate.send()
							}
						}, {
							children: "+ Create New"
						})), (0, e.jsx)($o(), {
							children: u.list.map((function(n) {
								var t;
								return (0, e.jsxs)("div", Ks({
									className: "select-item ".concat((null === (t = u.shipConstructor) || void 0 === t ? void 0 : t.uuid) === n.uuid ? "selected" : ""),
									onClick: function() {
										return e = n.uuid, void $s.doEdit.send({
											uuid: e
										});
										var e
									}
								}, {
									children: [n.name, (0, e.jsx)(Ea, Ks({
										placement: "right",
										content: n.amountPurchased > 0 ? (0, e.jsx)("div", Ks({
											className: "description-hint"
										}, {
											children: "You cant delete model since you have spaceships purchased"
										})) : (0, e.jsx)("div", Ks({
											className: "description-hint"
										}, {
											children: "Delete model"
										}))
									}, {
										children: (0, e.jsx)("span", Ks({
											className: "delete-model ".concat(n.amountPurchased > 0 ? "disabled" : ""),
											onClick: function() {
												return e = n.uuid, void $s.doDeleteModel.send(e);
												var e
											}
										}, {
											children: "X"
										}))
									}))]
								}))
							}))
						})]
					})), (0, e.jsx)("div", Ks({
						className: "editor-totals column"
					}, {
						children: u.shipConstructor ? (0, e.jsxs)(e.Fragment, {
							children: [(0, e.jsx)("div", Ks({
								className: "editor-row"
							}, {
								children: (0, e.jsx)("input", {
									value: null === (t = u.shipConstructor) || void 0 === t ? void 0 : t.name,
									onChange: function(e) {
										return n = e.target.value, void $s.doSetName.send(n);
										var n
									}
								})
							})), (0, e.jsx)("div", Ks({
								className: "editor-row"
							}, {
								children: (0, e.jsx)("button", Ks({
									onClick: function() {
										$s.doSave.send()
									}
								}, {
									children: "Save"
								}))
							})), (null === (r = u.shipConstructor) || void 0 === r ? void 0 : r.validationError) ? (0, e.jsx)("p", Ks({
								className: "validation-error"
							}, {
								children: null === (i = u.shipConstructor) || void 0 === i ? void 0 : i.validationError
							})) : null, (0, e.jsx)("div", Ks({
								className: "ship-stats-wrap"
							}, {
								children: (0, e.jsxs)($o(), {
									children: [(0, e.jsx)(La, Ks({
										id: "stats",
										label: "Ship Stats",
										className: "stats"
									}, {
										children: Object.entries((null === (o = null === (a = u.shipConstructor) || void 0 === a ? void 0 : a.totalStats) || void 0 === o ? void 0 : o.stats) || {})
											.map((function(n) {
												var t = n[0],
													r = n[1];
												return (0, e.jsxs)("div", Ks({
													className: "row"
												}, {
													children: [(0, e.jsx)("p", Ks({
														className: "label"
													}, {
														children: t
													})), (0, e.jsx)("p", Ks({
														className: "value"
													}, {
														children: ro(r)
													}))]
												}))
											}))
									})), (0, e.jsx)(La, Ks({
										id: "stats",
										label: "Ship Costs",
										className: "stats"
									}, {
										children: ((null === (l = null === (s = u.shipConstructor) || void 0 === s ? void 0 : s.totalStats) || void 0 === l ? void 0 : l.costs) || [])
											.map((function(n) {
												return (0, e.jsx)(No, {
													cost: n
												})
											}))
									}))]
								})
							}))]
						}) : null
					})), (0, e.jsx)("div", Ks({
						className: "editor-column column"
					}, {
						children: (0, e.jsx)($o(), {
							children: Object.entries((null === (c = u.shipConstructor) || void 0 === c ? void 0 : c.parts) || {})
								.map((function(n) {
									var t, r, i, a, o, s, l = n[0],
										c = n[1],
										d = (null === (r = null === (t = u.shipConstructor) || void 0 === t ? void 0 : t.availableParts) || void 0 === r ? void 0 : r.filter((function(e) {
											return e.category === c.category
										}))) || [];
									return (0, e.jsxs)(La, Ks({
										id: "part-".concat(c.category),
										label: c.category,
										className: "slot-container-outer"
									}, {
										children: [(0, e.jsxs)("div", Ks({
											className: "slot-container"
										}, {
											children: [(0, e.jsxs)("select", Ks({
												className: "details-selection",
												onChange: function(e) {
													return function(e, n) {
														$s.doSetId.send({
															key: e,
															id: n
														})
													}(l, e.target.value)
												}
											}, {
												children: [d.map((function(n) {
													var t;
													return (0, e.jsx)("option", Ks({
														value: n.id,
														selected: n.id === (null === (t = c.data) || void 0 === t ? void 0 : t.id)
													}, {
														children: n.name
													}))
												})), (0, e.jsx)("option", Ks({
													value: "none",
													selected: !(null === (i = c.data) || void 0 === i ? void 0 : i.id)
												}, {
													children: "None"
												}))]
											})), (0, e.jsx)("input", {
												type: "number",
												value: (null === (a = c.data) || void 0 === a ? void 0 : a.level) || 0,
												onChange: function(e) {
													return function(e, n) {
														$s.doSetLevel.send({
															key: e,
															level: n
														})
													}(l, Math.round(+e.target.value))
												}
											})]
										})), c.data ? (0, e.jsxs)("div", Ks({
											className: "stats-wrap"
										}, {
											children: [(null === (o = c.data) || void 0 === o ? void 0 : o.cost.length) ? (0, e.jsxs)("div", Ks({
												className: "costs wrap"
											}, {
												children: [(0, e.jsx)("span", {
													children: "Costs"
												}), null === (s = c.data) || void 0 === s ? void 0 : s.cost.map((function(n) {
													return (0, e.jsx)(No, {
														cost: n,
														showBars: !1
													})
												}))]
											})) : null, (0, e.jsxs)("div", Ks({
												className: "gain wrap"
											}, {
												children: [(0, e.jsx)("span", {
													children: "Bonuses"
												}), c.data.gain.map((function(n) {
													return (0, e.jsx)(So, {
														gain: n
													})
												})), c.data.gainMult.map((function(n) {
													return (0, e.jsx)(So, {
														gain: n
													})
												})), c.data.consume.map((function(n) {
													return (0, e.jsx)(So, {
														gain: n
													})
												}))]
											}))]
										})) : (0, e.jsx)(e.Fragment, {})]
									}))
								}))
						})
					}))]
				}))
			},
			Zs = function() {
				var n = k(Ha);
				return (0, e.jsx)(e.Fragment, {
					children: (0, e.jsx)(Qs, {
						spaceship: n.spaceship
					})
				})
			},
			Js = function() {
				return Js = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, Js.apply(this, arguments)
			},
			el = function(n) {
				var t = n.ship,
					i = (0, r.useState)(!1),
					a = i[0],
					o = i[1],
					s = window.innerWidth <= 860,
					l = (0, e.jsxs)(e.Fragment, {
						children: [(0, e.jsx)("p", Js({
							className: "title"
						}, {
							children: t.name
						})), (0, e.jsx)("div", Js({
							className: "ship-totals"
						}, {
							children: Object.entries(t.stats.stats || {})
								.map((function(n) {
									var t = n[0],
										r = n[1];
									return (0, e.jsxs)("div", Js({
										className: "row"
									}, {
										children: [(0, e.jsx)("p", Js({
											className: "label"
										}, {
											children: t
										})), (0, e.jsx)("p", Js({
											className: "value"
										}, {
											children: ro(r)
										}))]
									}))
								}))
						}))]
					}),
					c = s ? null : (0, e.jsx)("div", Js({
						className: "description-hint"
					}, {
						children: l
					}));
				return (0, e.jsxs)("div", Js({
					className: "spaceship-card"
				}, {
					children: [(0, e.jsxs)("div", Js({
						className: "spaceship-inner-wrap"
					}, {
						children: [(0, e.jsx)(Ea, Js({
							content: c,
							placement: "right"
						}, {
							children: (0, e.jsxs)("div", Js({
								className: "title-wrap"
							}, {
								children: [(0, e.jsx)("p", {
									children: t.name
								}), (0, e.jsx)("p", {
									children: Math.round(t.amount)
								}), (0, e.jsx)("span", Js({
									className: "info-tooltip",
									onClick: function(e) {
										e.preventDefault(), e.stopPropagation(), o(!0)
									}
								}, {
									children: (0, e.jsx)("span", Js({
										className: "info-tooltip-inner"
									}, {
										children: "!"
									}))
								}))]
							}))
						})), (0, e.jsxs)(jo, Js({
							label: "Build",
							progress: t.progress,
							isAvailable: t.isAvailable,
							isBlocked: t.isBlocked,
							onMouseEnter: function() {
								return Co(t.stats.costs.filter((function(e) {
									return !e.isAvailable
								})))
							},
							onMouseLeave: function() {
								return Co(null)
							},
							onClick: function() {
								return e = t.id, void $s.doBuildShip.send(e);
								var e
							}
						}, {
							children: [(0, e.jsx)("p", Js({
								className: "title"
							}, {
								children: "Costs:"
							})), (0, e.jsx)(e.Fragment, {
								children: t.stats.costs.map((function(n) {
									return (0, e.jsx)(No, {
										cost: n
									})
								}))
							})]
						})), (0, e.jsx)("button", Js({
							onClick: function() {
								return e = t.id, void $s.doDestroyShip.send(e);
								var e
							},
							disabled: t.amount <= 0
						}, {
							children: "Scrap (return 80% of resources)"
						}))]
					})), a && s ? (0, e.jsx)(yo, Js({
						isVisible: a,
						onClose: function() {
							return o(!1)
						}
					}, {
						children: l
					})) : null]
				}))
			},
			nl = function(n) {
				var t = n.hangar;
				return (0, e.jsx)("div", Js({
					className: "hangar-wrap"
				}, {
					children: t.ships.map((function(n) {
						return (0, e.jsx)(el, {
							ship: n
						})
					}))
				}))
			},
			tl = function() {
				var n = k(Ha);
				return (0, e.jsx)(nl, {
					hangar: n.hangar
				})
			},
			rl = function() {
				return rl = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, rl.apply(this, arguments)
			},
			il = function(n) {
				var t, r, i, a = n.fleet,
					o = null === (t = a.editing) || void 0 === t ? void 0 : t.slots.filter((function(e) {
						return 0 === e.line
					}))
					.sort((function(e, n) {
						return e.column - n.column
					})),
					s = null === (r = a.editing) || void 0 === r ? void 0 : r.slots.filter((function(e) {
						return 1 === e.line
					}))
					.sort((function(e, n) {
						return e.column - n.column
					})),
					l = [o, s];
				return (0, e.jsxs)("div", rl({
					className: "editor-wrap columns"
				}, {
					children: [(0, e.jsxs)("div", rl({
						className: "loader-column column"
					}, {
						children: [(0, e.jsx)("div", rl({
							className: "select-item primary",
							onClick: function() {
								$s.doCreateFleet.send()
							}
						}, {
							children: "+ Create New"
						})), (0, e.jsx)($o(), {
							children: a.list.map((function(n) {
								var t;
								return (0, e.jsxs)("div", rl({
									className: "select-item ".concat((null === (t = a.editing) || void 0 === t ? void 0 : t.uuid) === n.uuid ? "selected" : "", " ")
										.concat(n.isInvalid ? "invalid" : ""),
									onClick: function() {
										return e = n.uuid, void $s.doEditFleet.send({
											uuid: e
										});
										var e
									}
								}, {
									children: [n.name, (0, e.jsx)("span", rl({
										className: "delete-model",
										onClick: function() {
											return e = n.uuid, void $s.doDeleteFleet.send(e);
											var e
										}
									}, {
										children: "X"
									}))]
								}))
							}))
						})]
					})), (0, e.jsx)("div", rl({
						className: "editor-totals column"
					}, {
						children: a.editing ? (0, e.jsxs)(e.Fragment, {
							children: [(0, e.jsx)("div", rl({
								className: "editor-row"
							}, {
								children: (0, e.jsx)("input", {
									value: null === (i = a.editing) || void 0 === i ? void 0 : i.name,
									onChange: function(e) {
										return n = e.target.value, void $s.doSetFleetName.send(n);
										var n
									}
								})
							})), (0, e.jsx)("div", rl({
								className: "editor-row"
							}, {
								children: (0, e.jsx)("button", rl({
									onClick: function() {
										$s.doSaveFleet.send()
									}
								}, {
									children: "Save"
								}))
							}))]
						}) : null
					})), (0, e.jsx)("div", rl({
						className: "editor-column column fleets"
					}, {
						children: a.editing ? l.map((function(n, t) {
							return (0, e.jsx)(La, rl({
								id: "line-".concat(t),
								label: "Line ".concat(t + 1),
								className: "fleet-lines"
							}, {
								children: (0, e.jsx)("div", rl({
									className: "line-wrap"
								}, {
									children: null == n ? void 0 : n.map((function(n, t) {
										var r;
										return (0, e.jsxs)("div", rl({
											className: "slot-container  ".concat(n.isInvalid ? "invalid" : "")
										}, {
											children: [(0, e.jsx)("div", rl({
												className: "heading-wrap"
											}, {
												children: n.stats && n.selectedName ? (0, e.jsx)(Ea, rl({
													placement: "right",
													content: (0, e.jsxs)("div", rl({
														className: "description-hint"
													}, {
														children: [(0, e.jsx)("p", rl({
															className: "title"
														}, {
															children: "Stats"
														})), (0, e.jsx)("div", rl({
															className: "ship-totals"
														}, {
															children: Object.entries(n.stats || {})
																.map((function(n) {
																	var t = n[0],
																		r = n[1];
																	return (0, e.jsxs)("div", rl({
																		className: "row"
																	}, {
																		children: [(0, e.jsx)("p", rl({
																			className: "label"
																		}, {
																			children: t
																		})), (0, e.jsx)("p", rl({
																			className: "value"
																		}, {
																			children: ro(r)
																		}))]
																	}))
																}))
														}))]
													}))
												}, {
													children: (0, e.jsx)("p", {
														children: n.selectedName
													})
												})) : (0, e.jsxs)("p", {
													children: ["Slot ", t + 1, " empty"]
												})
											})), (0, e.jsx)("div", rl({
												className: "selection"
											}, {
												children: (0, e.jsxs)("select", rl({
													className: "details-selection",
													onChange: function(e) {
														return function(e, n, t) {
															$s.doSetFleetId.send({
																modelId: e,
																line: n,
																column: t
															})
														}(e.target.value, n.line, n.column)
													}
												}, {
													children: [null === (r = a.editing) || void 0 === r ? void 0 : r.options.filter((function(e) {
															return e.available > e.used || e.id === n.selectedUUID
														}))
														.map((function(t) {
															return (0, e.jsx)("option", rl({
																value: t.id,
																selected: t.id === n.selectedUUID
															}, {
																children: t.name
															}))
														})), (0, e.jsx)("option", rl({
															value: "none",
															selected: !n.selectedUUID
														}, {
															children: "None"
														}))
													]
												}))
											}))]
										}))
									}))
								}))
							}))
						})) : (0, e.jsx)("h3", rl({
							className: "select-fleet"
						}, {
							children: "Select or create fleet"
						}))
					}))]
				}))
			},
			al = function() {
				var n = k(Ha);
				return (0, e.jsx)(e.Fragment, {
					children: (0, e.jsx)(il, {
						fleet: n.fleet
					})
				})
			};
		! function(e) {
			e.HEAD = "Head", e.CORPUS = "Corpus", e.WEAPONS = "Weapons", e.POWER_SUPPLY = "Power Supply", e.ENGINE = "Engine"
		}(Ms || (Ms = {})),
		function(e) {
			e.DURABILITY = "Durability", e.SHIELD_CAP = "Shield Capacity", e.SHIELD_MITIGATION = "Shield Mitigation", e.DAMAGE = "Damage", e.WEAPON_COOLDOWN = "Weapon Cooldown", e.HULL_REPAIR = "Hull Repair", e.SHIELD_REGEN = "Shield Regen", e.SPEED = "Speed", e.POWER = "Power", e.FUEL_CONSUMPTION = "Fuel Consumption"
		}(Ds || (Ds = {})),
		function(e) {
			e.ACTUAL_DURABILITY = "Actual Durability", e.ACTUAL_SHIELD = "Actual Shield", e.ACTUAL_RECHARGE = "Actual Recharge"
		}(Us || (Us = {}));
		var ol = function() {
				return ol = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, ol.apply(this, arguments)
			},
			sl = function(n) {
				var t = n.isEnemy,
					r = n.position,
					i = n.unit;
				return (0, e.jsxs)("div", ol({
					className: "space-unit",
					style: ol({}, r)
				}, {
					children: [(0, e.jsx)("p", ol({
						className: "name-cont"
					}, {
						children: i.name
					})), (0, e.jsx)(Ea, ol({
						placement: "right",
						content: (0, e.jsxs)("div", ol({
							className: "description-hint"
						}, {
							children: [(0, e.jsxs)("p", {
								children: ["Shield: ", ro(i.stats[Us.ACTUAL_SHIELD]), "/", ro(i.stats[Ds.SHIELD_CAP])]
							}), (0, e.jsxs)("p", {
								children: ["Durability: ", ro(i.stats[Us.ACTUAL_DURABILITY]), "/", ro(i.stats[Ds.DURABILITY])]
							}), (0, e.jsxs)("p", {
								children: ["Damage: ", ro(i.stats[Ds.DAMAGE])]
							}), (0, e.jsxs)("p", {
								children: ["Weapon cooldown: ", ro(i.stats[Ds.WEAPON_COOLDOWN])]
							})]
						}))
					}, {
						children: (0, e.jsxs)("div", ol({
							className: "bars-container"
						}, {
							children: [(0, e.jsx)("div", ol({
								className: "shield-bar bar-outer"
							}, {
								children: (0, e.jsx)("div", {
									className: "bar-inner",
									style: {
										width: "".concat(100 * i.stats[Us.ACTUAL_SHIELD] / i.stats[Ds.SHIELD_CAP], "%")
									}
								})
							})), (0, e.jsx)("div", ol({
								className: "durability-bar bar-outer"
							}, {
								children: (0, e.jsx)("div", {
									className: "bar-inner",
									style: {
										width: "".concat(100 * i.stats[Us.ACTUAL_DURABILITY] / i.stats[Ds.DURABILITY], "%")
									}
								})
							})), (0, e.jsx)("div", ol({
								className: "recharge-bar bar-outer"
							}, {
								children: (0, e.jsx)("div", {
									className: "bar-inner",
									style: {
										width: "".concat(100 * i.stats[Us.ACTUAL_RECHARGE] / i.stats[Ds.WEAPON_COOLDOWN], "%")
									}
								})
							}))]
						}))
					})), (0, e.jsx)("div", {
						className: "image-container ".concat(t ? "enemy" : "my")
					})]
				}))
			},
			ll = function(n) {
				var t = n.battle,
					i = (0, r.useRef)(null),
					a = (0, r.useState)(0),
					o = a[0],
					s = a[1],
					l = (0, r.useState)(0),
					c = l[0],
					u = l[1];
				(0, r.useLayoutEffect)((function() {
					var e, n;
					s((null === (e = null == i ? void 0 : i.current) || void 0 === e ? void 0 : e.offsetWidth) || 0), u((null === (n = null == i ? void 0 : i.current) || void 0 === n ? void 0 : n.offsetHeight) || 0)
				}), []);
				var d = function(e, n, t, r) {
					return void 0 === t && (t = 0), void 0 === r && (r = 0), {
						left: e / 100 * o - t,
						top: n / 100 * c * .9 - r
					}
				};
				return (0, e.jsxs)("div", ol({
					className: "fight-space",
					ref: i
				}, {
					children: [t.fight.enemy.map((function(n) {
						return (0, e.jsx)(sl, {
							isEnemy: !0,
							position: d(n.x, n.y, 25, 20),
							unit: n
						})
					})), t.fight.me.map((function(n) {
						return (0, e.jsx)(sl, {
							position: d(n.x, n.y, 25, 20),
							unit: n
						})
					})), t.fight.bullets.map((function(n) {
						return (0, e.jsx)("div", {
							className: "bullet side-".concat(n.side),
							id: n.uuid,
							style: d(n.x, n.y)
						}, n.uuid)
					}))]
				}))
			},
			cl = function() {
				return cl = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, cl.apply(this, arguments)
			},
			ul = function(n) {
				var t = n.battle,
					i = window.innerWidth <= 860,
					a = (0, r.useState)(!1),
					o = a[0],
					s = a[1];
				return (0, e.jsxs)("div", cl({
					className: "top-pane"
				}, {
					children: [(0, e.jsxs)("div", {
						children: [(0, e.jsxs)("p", {
							children: ["Selected fleet: ", t.battlefield.selectedFleetName]
						}), (0, e.jsxs)("select", cl({
							onChange: function(e) {
								return n = e.target.value, void $s.doSetBattleFleet.send(n);
								var n
							}
						}, {
							children: [t.fleetSelectable.filter((function(e) {
									return !e.isInvalid
								}))
								.map((function(n) {
									return (0, e.jsx)("option", cl({
										value: n.uuid,
										selected: n.isEditing
									}, {
										children: n.name
									}))
								})), (0, e.jsx)("option", cl({
									selected: !t.battlefield.selectedFleetId
								}, {
									children: "None"
								}))
							]
						}))]
					}), (0, e.jsxs)("div", {
						children: [(0, e.jsxs)("div", {
							children: [(0, e.jsx)("input", {
								type: "number",
								value: t.battlefield.level,
								onChange: function(e) {
									return n = +e.target.value, void $s.doSetBattleLevel.send(n);
									var n
								}
							}), "of ", t.battlefield.maxLevel, (0, e.jsxs)("p", cl({
								className: "no-margin"
							}, {
								children: ["x", ro(t.battlefield.xpBonus), " to XP and x", ro(t.battlefield.kpBonus), " KP gain this run based on max level"]
							}))]
						}), (0, e.jsxs)("div", {
							children: [(0, e.jsx)("input", {
								type: "checkbox",
								checked: t.battlefield.isAutofight,
								onChange: function() {
									$s.doToggleAutoFight.send(!t.battlefield.isAutofight)
								}
							}), (0, e.jsx)("span", {
								children: "Autofight"
							})]
						}), (0, e.jsxs)("div", {
							children: [(0, e.jsx)("input", {
								type: "checkbox",
								checked: t.battlefield.isAutoprogres,
								onChange: function() {
									$s.doToggleAutoAdvance.send(!t.battlefield.isAutoprogres)
								}
							}), (0, e.jsx)("span", {
								children: "Auto-advance"
							})]
						})]
					}), (0, e.jsxs)("div", {
						children: [(0, e.jsx)(Ea, cl({
							placement: "right",
							content: (0, e.jsxs)("div", cl({
								className: "description-hint"
							}, {
								children: [(0, e.jsxs)("p", {
									children: ["Durability and Dmg. bonus: ", t.pilot.bonus]
								}), (0, e.jsxs)("p", {
									children: ["Level: ", t.pilot.level, " (", ro(t.pilot.xp), " / ", ro(t.pilot.maxXp), " XP)"]
								}), (0, e.jsx)("p", {
									children: "Your pilot XP is transferred along with other knowledge, so it won't reset on prestige"
								})]
							}))
						}, {
							children: (0, e.jsxs)("div", cl({
								className: "pilot-container"
							}, {
								children: [(0, e.jsxs)("p", {
									children: ["Pilot level: ", t.pilot.level]
								}), (0, e.jsxs)("div", cl({
									className: "bars-container wide"
								}, {
									children: [(0, e.jsx)("div", cl({
										className: "bar-outer pilot"
									}, {
										children: (0, e.jsx)("div", {
											className: "bar-inner",
											style: {
												width: "".concat(100 * t.pilot.xp / t.pilot.maxXp, "%")
											}
										})
									})), (0, e.jsx)("span", cl({
										className: "info-tooltip",
										onClick: function(e) {
											e.preventDefault(), e.stopPropagation(), s(!0)
										}
									}, {
										children: (0, e.jsx)("span", cl({
											className: "info-tooltip-inner"
										}, {
											children: "!"
										}))
									}))]
								}))]
							}))
						})), o && i ? (0, e.jsx)(yo, cl({
							isVisible: o,
							onClose: function() {
								return s(!1)
							}
						}, {
							children: (0, e.jsxs)("div", cl({
								className: "description-hint"
							}, {
								children: [(0, e.jsxs)("p", {
									children: ["Durability and Dmg. bonus: ", t.pilot.bonus]
								}), (0, e.jsxs)("p", {
									children: ["Level: ", t.pilot.level, " (", ro(t.pilot.xp), " / ", ro(t.pilot.maxXp), " XP)"]
								}), (0, e.jsx)("p", {
									children: "Your pilot XP is transferred along with other knowledge, so it won't reset on prestige"
								})]
							}))
						})) : null]
					}), (0, e.jsx)("div", {
						children: (0, e.jsx)("button", cl({
							onClick: function() {
								return !1, void $s.doToggleFight.send(false)
							}
						}, {
							children: "Stop"
						}))
					})]
				}))
			},
			dl = function(n) {
				var t = n.battle;
				return t.battlefield.selectedFleetId ? t.battlefield.isFighting ? t.battlefield.travelProgress < 1 ? (0, e.jsxs)("div", cl({
					className: "battle-centered"
				}, {
					children: [(0, e.jsxs)("p", {
						children: ["Time to reach opponent: ", t.battlefield.travelEta]
					}), (0, e.jsxs)("p", {
						children: ["Fuel consumption: ", ro(t.battlefield.fuelConsumption)]
					}), (0, e.jsx)("div", cl({
						className: "travel-bar"
					}, {
						children: (0, e.jsx)("div", {
							className: "travel-bar-inner",
							style: {
								width: "".concat(100 * t.battlefield.travelProgress, "%")
							}
						})
					}))]
				})) : t.fight.inProgress ? (0, e.jsx)(ll, {
					battle: t
				}) : (0, e.jsx)(e.Fragment, {}) : (0, e.jsxs)("div", cl({
					className: "battle-centered"
				}, {
					children: [(0, e.jsxs)("p", {
						children: ["Time to reach opponent: ", t.battlefield.travelEta]
					}), (0, e.jsxs)("p", {
						children: ["Fuel consumption: ", ro(t.battlefield.fuelConsumption)]
					}), (0, e.jsx)("button", cl({
						onClick: function() {
							return !0, void $s.doToggleFight.send(true)
						}
					}, {
						children: "Start Fight"
					}))]
				})) : (0, e.jsx)("div", cl({
					className: "battle-centered"
				}, {
					children: (0, e.jsx)("h4", {
						children: "Select fleet to fight"
					})
				}))
			},
			pl = function(n) {
				var t = n.battle;
				return (0, e.jsxs)("div", cl({
					className: "battle-wrap"
				}, {
					children: [(0, e.jsx)(ul, {
						battle: t
					}), (0, e.jsx)("div", cl({
						className: "battle-content"
					}, {
						children: (0, e.jsx)(dl, {
							battle: t
						})
					}))]
				}))
			},
			fl = function() {
				var n = k(Ha);
				return (0, e.jsx)(pl, {
					battle: n.battle
				})
			},
			hl = function() {
				return hl = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, hl.apply(this, arguments)
			},
			ml = function(n) {
				var t = n.page;
				return "spaceBuildings" === t ? (0, e.jsx)(qs, {}) : "spaceshipConstructor" === t ? (0, e.jsx)(Zs, {}) : "spaceshipHangar" === t ? (0, e.jsx)(tl, {}) : "spaceshipFleet" === t ? (0, e.jsx)(al, {}) : "spaceBattle" === t ? (0, e.jsx)(fl, {}) : (0, e.jsx)("p", {
					children: "None"
				})
			},
			gl = function() {
				var n = gs("space-page", "spaceBuildings"),
					t = n[0],
					r = n[1],
					i = k(Wa),
					a = k(Ga),
					o = k(Ya),
					s = k(Xa);
				return (0, e.jsxs)("div", hl({
					className: "fit-height"
				}, {
					children: [(0, e.jsxs)("div", hl({
						className: "submenu"
					}, {
						children: [(0, e.jsx)("div", hl({
							className: "submenu-item ".concat("spaceBuildings" === t ? "selected" : ""),
							onClick: function() {
								return r("spaceBuildings")
							}
						}, {
							children: "Space Constructions"
						})), i ? (0, e.jsx)("div", hl({
							className: "submenu-item ".concat("spaceshipConstructor" === t ? "selected" : ""),
							onClick: function() {
								return r("spaceshipConstructor")
							}
						}, {
							children: "Space Ships"
						})) : null, a ? (0, e.jsx)("div", hl({
							className: "submenu-item ".concat("spaceshipHangar" === t ? "selected" : ""),
							onClick: function() {
								return r("spaceshipHangar")
							}
						}, {
							children: "Space Hangar"
						})) : null, o ? (0, e.jsx)("div", hl({
							className: "submenu-item ".concat("spaceshipFleet" === t ? "selected" : ""),
							onClick: function() {
								return r("spaceshipFleet")
							}
						}, {
							children: "Fleets"
						})) : null, s ? (0, e.jsx)("div", hl({
							className: "submenu-item ".concat("spaceBattle" === t ? "selected" : ""),
							onClick: function() {
								return r("spaceBattle")
							}
						}, {
							children: "Battles"
						})) : null]
					})), (0, e.jsx)("div", hl({
						className: "inner-scrollable planet"
					}, {
						children: (0, e.jsx)($o(), {
							children: (0, e.jsx)("div", hl({
								className: "inner"
							}, {
								children: (0, e.jsx)(ml, {
									page: t
								})
							}))
						})
					}))]
				}))
			},
			vl = {
				doTKUpgrade: Nn("[transmit-knowledge] do upgrade", (function(e) {
					return e
				})),
				doTKPrestige: Nn("[transmit-knowledge] do prestige", (function(e) {
					return e
				})),
				doColonizeSearch: Nn("[colonize-planet] do search", (function(e) {
					return e
				})),
				doColonizeSetSearchFilter: Nn("[colonize-planet] set search filter", (function(e) {
					return e
				})),
				doColonizeSetDisasters: Nn("[colonize-planet] set disasters", (function(e) {
					return e
				})),
				doColonizePrestige: Nn("[colonize-planet] do prestige", (function(e) {
					return e
				})),
				doXPUpgrade: Nn("[colonize-planet] do upgrade", (function(e) {
					return e
				}))
			},
			bl = function() {
				return bl = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, bl.apply(this, arguments)
			},
			xl = function(n) {
				var t = n.state,
					r = function(e, n) {
						vl.doTKUpgrade.send({
							id: e,
							amount: n
						})
					},
					i = t.upgrades.filter((function(e) {
						return e.isUnlocked
					}))
					.reduce((function(e, n) {
						return e[n.category] ? e[n.category].push(n) : e[n.category] = [n], e
					}), {});
				return (0, e.jsx)(La, bl({
					id: "transmit-knowledge-upgrades",
					label: "Transmit Knowledge Upgrades: ".concat(t.kp, " points left"),
					className: "actions-wrap"
				}, {
					children: Object.entries(i)
						.map((function(n) {
							var t = n[0],
								i = n[1];
							return (0, e.jsx)(La, bl({
								isCollapsable: !0,
								id: "kp-upgrades-".concat(t),
								label: "".concat(t),
								className: "kp-wrap",
								contentClassName: "flex"
							}, {
								children: i.filter((function(e) {
										return e.isUnlocked
									}))
									.map((function(n) {
										return (0, e.jsxs)(jo, bl({
											label: n.name,
											isAvailable: n.isAvailable,
											isBlocked: !1,
											progress: n.progress,
											className: "feature-item",
											onClick: function(e) {
												e.shiftKey ? r(n.id, 5) : e.ctrlKey ? r(n.id, 1e200) : r(n.id, 1)
											},
											level: n.level,
											maxLevel: n.maxLevel,
											onMouseEnter: function() {
												return Co(n.cost.filter((function(e) {
													return !e.isAvailable
												})))
											},
											onMouseLeave: function() {
												return Co(null)
											}
										}, {
											children: [(0, e.jsx)("p", bl({
												className: "title"
											}, {
												children: n.name
											})), (0, e.jsx)("p", bl({
												className: "description"
											}, {
												children: n.description
											})), n.cost.length ? (0, e.jsxs)("div", bl({
												className: "costs wrap"
											}, {
												children: [(0, e.jsx)("span", {
													children: "Cost"
												}), n.cost.map((function(n) {
													return (0, e.jsx)(No, {
														cost: n
													})
												}))]
											})) : (0, e.jsx)(e.Fragment, {}), (0, e.jsx)("p", bl({
												className: "note"
											}, {
												children: "Hold Shift to purchase 5"
											})), (0, e.jsx)("p", bl({
												className: "note"
											}, {
												children: "Hold Ctrl to purchase max"
											}))]
										}))
									}))
							}))
						}))
				}))
			},
			yl = function(n) {
				var t = n.transmit;
				return (0, e.jsx)(La, bl({
					id: "do-transmit",
					label: "Transmit knowledge",
					className: "transmit-wrap"
				}, {
					children: t.prestige.isAvailable ? (0, e.jsxs)("div", {
						children: [(0, e.jsx)("p", {
							children: "You will lose all your resources, upgrades, buildings and science. But you will transmit your knowledge to next colonizers, making their progress much faster."
						}), (0, e.jsxs)("p", {
							children: ["You will earn ", (0, e.jsx)("span", bl({
								className: "bold"
							}, {
								children: t.prestige.potentialGain
							})), " knowledge points (based on your current population) that can be used to purchase various upgrades"]
						}), (0, e.jsx)("button", bl({
							onClick: function() {
								confirm("Are you sure?") && (vl.doTKPrestige.send({}), vs())
							}
						}, {
							children: "Transmit Knowledge and leave the planet"
						}))]
					}) : (0, e.jsx)("div", bl({
						className: "unavail-explanation"
					}, {
						children: (0, e.jsx)("p", {
							children: 'Transmit knowledge only available once you have more than 50 colonizers and did "Great Radio Transmitter" under landing zone upgrades section'
						})
					}))
				}))
			},
			wl = function() {
				var n = k($a);
				return (0, e.jsxs)(e.Fragment, {
					children: [(0, e.jsx)(yl, {
						transmit: n
					}), (0, e.jsx)(xl, {
						state: n
					})]
				})
			},
			jl = function() {
				return jl = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, jl.apply(this, arguments)
			},
			kl = function(n) {
				var t = n.state;
				return t.isPrestigeAvailable ? (0, e.jsxs)(La, jl({
					id: "planets-available",
					label: "Colonize Planets",
					className: "actions-wrap"
				}, {
					children: [(0, e.jsxs)("div", jl({
						className: "desc-wrap"
					}, {
						children: [(0, e.jsxs)("p", {
							children: ["You have ", ro(t.currentXP), " XP points, providing X", t.prestige.currentBonus, " multiplier to your KP gain"]
						}), (0, e.jsxs)("p", {
							children: ["You will lose all your resources, upgrades, buildings and science. Knowledge points and upgrades you already have will persist. You won't receive any transmit knowledge but you will receive ", t.prestige.potentialGain, " XP points. (x", t.prestige.gainBase, " from planet difficulty ", t.prestige.gainBattleMult ? ", x".concat(t.prestige.gainBattleMult, " from max level beaten in fights") : "", ") Your KP gain multiplier will be X", t.prestige.potentialBonus]
						})]
					})), (0, e.jsx)("div", jl({
						className: "list-wrap planets-wrap"
					}, {
						children: t.available.map((function(n, t) {
							return (0, e.jsxs)(jo, jl({
								label: (0, e.jsxs)(e.Fragment, {
									children: [n.name, " (x", ro(n.xpGain), ")"]
								}),
								isAvailable: n.isAvailable,
								isBlocked: !1,
								progress: n.progress,
								className: "feature-item",
								onClick: function() {
									return e = t, void(confirm("When you colonize new planet you aren't awarded any KP, but you gain XP instead. In case you select too hard planet you can abondon it in \"Settings\" tab, and you'll be landed to default planet. Are you sure?") && (vl.doColonizePrestige.send({
										id: e
									}), vs()));
									var e
								},
								onMouseEnter: function() {
									return Co(n.cost.filter((function(e) {
										return !e.isAvailable
									})))
								},
								onMouseLeave: function() {
									return Co(null)
								}
							}, {
								children: [(0, e.jsx)("p", jl({
									className: "title"
								}, {
									children: n.name
								})), (0, e.jsx)("p", jl({
									className: "description"
								}, {
									children: n.description
								})), (0, e.jsxs)("p", jl({
									className: "att"
								}, {
									children: ["Days per year: ", n.daysPerYear]
								})), (0, e.jsxs)("p", jl({
									className: "att"
								}, {
									children: ["Seasons: ", n.climateChange]
								})), (0, e.jsxs)("p", jl({
									className: "att"
								}, {
									children: ["Star class: ", n.starClass]
								})), (0, e.jsx)("div", jl({
									className: "star-modifs"
								}, {
									children: n.starModif.map((function(n) {
										return (0, e.jsx)("p", jl({
											className: "star-effect"
										}, {
											children: n
										}))
									}))
								})), n.cost.length ? (0, e.jsxs)("div", jl({
									className: "costs wrap"
								}, {
									children: [(0, e.jsx)("span", {
										children: "Cost"
									}), n.cost.map((function(n) {
										return (0, e.jsx)(No, {
											cost: n
										})
									})), n.consume.length ? (0, e.jsxs)("div", jl({
										className: "costs wrap"
									}, {
										children: [(0, e.jsx)("span", {
											children: "Consume"
										}), n.consume.map((function(n) {
											return (0, e.jsx)(So, {
												gain: n
											})
										}))]
									})) : (0, e.jsx)(e.Fragment, {}), n.gain.length ? (0, e.jsxs)("div", jl({
										className: "gain wrap"
									}, {
										children: [(0, e.jsx)("span", {
											children: "Produce"
										}), n.gain.map((function(n) {
											return (0, e.jsx)(So, {
												gain: n
											})
										}))]
									})) : (0, e.jsx)(e.Fragment, {}), n.max.length ? (0, e.jsxs)("div", jl({
										className: "store wrap"
									}, {
										children: [(0, e.jsx)("span", {
											children: "Storage"
										}), n.max.map((function(n) {
											return (0, e.jsx)(So, {
												gain: n
											})
										}))]
									})) : (0, e.jsx)(e.Fragment, {}), n.gainMult.length ? (0, e.jsxs)("div", jl({
										className: "gain wrap"
									}, {
										children: [(0, e.jsx)("span", {
											children: "Income Multipliers"
										}), n.gainMult.map((function(n) {
											return (0, e.jsx)(So, {
												className: n.amountValue < 1 ? "red" : "green",
												gain: n
											})
										}))]
									})) : (0, e.jsx)(e.Fragment, {}), n.maxMult.length ? (0, e.jsxs)("div", jl({
										className: "store wrap"
									}, {
										children: [(0, e.jsx)("span", {
											children: "Storage Multipliers"
										}), n.maxMult.map((function(n) {
											return (0, e.jsx)(So, {
												className: n.amountValue < 1 ? "red" : "green",
												gain: n
											})
										}))]
									})) : (0, e.jsx)(e.Fragment, {}), n.effectMult.length ? (0, e.jsxs)("div", jl({
										className: "gain wrap"
									}, {
										children: [(0, e.jsx)("span", {
											children: "Effects"
										}), n.effectMult.map((function(n) {
											return (0, e.jsx)(So, {
												className: n.amountValue < 1 ? "red" : "green",
												gain: n
											})
										}))]
									})) : (0, e.jsx)(e.Fragment, {}), (0, e.jsx)("div", jl({
										className: "store wrap"
									}, {
										children: (0, e.jsxs)("span", {
											children: ["XP Gain: x", ro(n.xpGain)]
										})
									})), (0, e.jsx)("div", jl({
										className: "store wrap"
									}, {
										children: (0, e.jsxs)("span", {
											children: ["Weather: x", ro(n.climateHarshness)]
										})
									}))]
								})) : (0, e.jsx)(e.Fragment, {})]
							}))
						}))
					})), (0, e.jsxs)("div", jl({
						className: "search-wrap"
					}, {
						children: [t.search.filter.isAvailable ? (0, e.jsxs)("div", jl({
							className: "search-filter"
						}, {
							children: [(0, e.jsx)("p", {
								children: "Select search for specific modifier. This will increase search cost"
							}), (0, e.jsxs)("select", jl({
								onChange: function(e) {
									return n = e.target.value, console.log("setting filter option: ", n), void vl.doColonizeSetSearchFilter.send({
										id: n
									});
									var n
								}
							}, {
								children: [t.search.filter.modifiersAvailable.map((function(n) {
									return (0, e.jsx)("option", jl({
										value: n.id,
										selected: n.name === t.search.filter.modifierName
									}, {
										children: n.name
									}))
								})), (0, e.jsx)("option", jl({
									selected: !t.search.filter.modifierName || "None" === t.search.filter.modifierName
								}, {
									children: "None"
								}))]
							}))]
						})) : null, (0, e.jsxs)("div", jl({
							className: "disasters-selector"
						}, {
							children: [(0, e.jsx)("p", {
								children: "Select disasters harshness (be careful, it can significantly ramp up difficulty)"
							}), (0, e.jsxs)("select", jl({
								onChange: function(e) {
									return n = +e.target.value, void vl.doColonizeSetDisasters.send({
										level: n
									});
									var n
								}
							}, {
								children: [(0, e.jsx)("option", jl({
									value: 0,
									selected: 0 === t.search.disastersLevel
								}, {
									children: "Small"
								})), (0, e.jsx)("option", jl({
									value: 1,
									selected: 1 === t.search.disastersLevel
								}, {
									children: "Realistic"
								})), (0, e.jsx)("option", jl({
									value: 2,
									selected: 2 === t.search.disastersLevel
								}, {
									children: "Hard"
								})), (0, e.jsx)("option", jl({
									value: 3,
									selected: 3 === t.search.disastersLevel
								}, {
									children: "Incredible"
								}))]
							}))]
						})), (0, e.jsxs)(jo, jl({
							label: "Search New Planets",
							isAvailable: t.search.isAvailable,
							isBlocked: !1,
							progress: t.search.progress,
							className: "feature-item search-item",
							onClick: function() {
								vl.doColonizeSearch.send({})
							},
							onMouseEnter: function() {
								return Co(t.search.cost.filter((function(e) {
									return !e.isAvailable
								})))
							},
							onMouseLeave: function() {
								return Co(null)
							}
						}, {
							children: [(0, e.jsx)("p", jl({
								className: "title"
							}, {
								children: "Search New Planets"
							})), (0, e.jsx)("p", jl({
								className: "description"
							}, {
								children: "Regenerate list of planets available for colonization"
							})), t.search.cost.length ? (0, e.jsxs)("div", jl({
								className: "costs wrap"
							}, {
								children: [(0, e.jsx)("span", {
									children: "Cost"
								}), t.search.cost.map((function(n) {
									return (0, e.jsx)(No, {
										cost: n
									})
								}))]
							})) : (0, e.jsx)(e.Fragment, {})]
						}))]
					}))]
				})) : (0, e.jsx)(La, jl({
					className: "",
					id: "colonize-unavailable",
					label: "Colonize"
				}, {
					children: (0, e.jsxs)("div", jl({
						className: "description-wrap"
					}, {
						children: [(0, e.jsx)("p", {
							children: "You should build Spaceship Orbital Station to be able to reach other stars"
						}), (0, e.jsxs)("p", {
							children: ["You have ", ro(t.currentXP), " XP points, providing X", t.prestige.currentBonus, " multiplier to your KP gain"]
						})]
					}))
				}))
			},
			Nl = function(n) {
				var t = n.colonize;
				return (0, e.jsxs)(La, jl({
					isCollapsable: !0,
					id: "current-planet",
					label: "Current Planet",
					className: "current-planet-wrap"
				}, {
					children: [(0, e.jsxs)("div", jl({
						className: "planet-column"
					}, {
						children: [(0, e.jsxs)("p", {
							children: ["Name: ", t.current.name]
						}), (0, e.jsxs)("p", {
							children: ["Description: ", t.current.description]
						}), (0, e.jsxs)("p", jl({
							className: "att"
						}, {
							children: ["Days per year: ", t.current.daysPerYear]
						})), (0, e.jsxs)("p", jl({
							className: "att"
						}, {
							children: ["Seasons: ", t.current.climateChange]
						})), (0, e.jsxs)("p", jl({
							className: "att"
						}, {
							children: ["Disasters level: ", t.current.disastersLevel]
						})), (0, e.jsxs)("p", jl({
							className: "att"
						}, {
							children: ["Star class: ", t.current.starClass]
						})), (0, e.jsx)("div", jl({
							className: "star-modifs"
						}, {
							children: t.current.starModif.map((function(n) {
								return (0, e.jsx)("p", jl({
									className: "star-effect"
								}, {
									children: n
								}))
							}))
						})), (0, e.jsxs)("p", jl({
							className: "att"
						}, {
							children: ["KP Gain multiplier: ", ro(t.current.xpGain)]
						}))]
					})), (0, e.jsxs)("div", jl({
						className: "planet-column"
					}, {
						children: [t.current.consume.length ? (0, e.jsxs)("div", jl({
							className: "costs wrap"
						}, {
							children: [(0, e.jsx)("span", {
								children: "Consume"
							}), t.current.consume.map((function(n) {
								return (0, e.jsx)(So, {
									gain: n
								})
							}))]
						})) : (0, e.jsx)(e.Fragment, {}), t.current.gain.length ? (0, e.jsxs)("div", jl({
							className: "gain wrap"
						}, {
							children: [(0, e.jsx)("span", {
								children: "Produce"
							}), t.current.gain.map((function(n) {
								return (0, e.jsx)(So, {
									gain: n
								})
							}))]
						})) : (0, e.jsx)(e.Fragment, {}), t.current.gainMult.length ? (0, e.jsxs)("div", jl({
							className: "gain wrap"
						}, {
							children: [(0, e.jsx)("span", {
								children: "Income Multipliers"
							}), t.current.gainMult.map((function(n) {
								return (0, e.jsx)(So, {
									className: n.amountValue < 1 ? "red" : "",
									gain: n
								})
							}))]
						})) : (0, e.jsx)(e.Fragment, {})]
					})), (0, e.jsxs)("div", jl({
						className: "planet-column"
					}, {
						children: [t.current.max.length ? (0, e.jsxs)("div", jl({
							className: "store wrap"
						}, {
							children: [(0, e.jsx)("span", {
								children: "Storage"
							}), t.current.max.map((function(n) {
								return (0, e.jsx)(So, {
									gain: n
								})
							}))]
						})) : (0, e.jsx)(e.Fragment, {}), t.current.maxMult.length ? (0, e.jsxs)("div", jl({
							className: "store wrap"
						}, {
							children: [(0, e.jsx)("span", {
								children: "Storage Multipliers"
							}), t.current.maxMult.map((function(n) {
								return (0, e.jsx)(So, {
									className: n.amountValue < 1 ? "red" : "",
									gain: n
								})
							}))]
						})) : (0, e.jsx)(e.Fragment, {}), t.current.effectMult.length ? (0, e.jsxs)("div", jl({
							className: "effects wrap"
						}, {
							children: [(0, e.jsx)("span", {
								children: "Effects Multipliers"
							}), t.current.effectMult.map((function(n) {
								return (0, e.jsx)(So, {
									className: n.amountValue < 1 ? "red" : "",
									gain: n
								})
							}))]
						})) : (0, e.jsx)(e.Fragment, {})]
					}))]
				}))
			},
			El = function(n) {
				var t = n.upgrades;
				return (0, e.jsx)(La, jl({
					isCollapsable: !0,
					id: "xp-upgrades",
					label: "XP Upgrades",
					className: "xp-wrap",
					contentClassName: "flex"
				}, {
					children: t.filter((function(e) {
							return e.isUnlocked
						}))
						.map((function(n) {
							return (0, e.jsxs)(jo, jl({
								label: n.name,
								isAvailable: n.isAvailable,
								isBlocked: !1,
								progress: n.progress,
								className: "feature-item",
								onClick: function() {
									return e = n.id, void vl.doXPUpgrade.send({
										id: e
									});
									var e
								},
								level: n.level,
								maxLevel: n.maxLevel,
								onMouseEnter: function() {
									return Co(n.cost.filter((function(e) {
										return !e.isAvailable
									})))
								},
								onMouseLeave: function() {
									return Co(null)
								}
							}, {
								children: [(0, e.jsx)("p", jl({
									className: "title"
								}, {
									children: n.name
								})), (0, e.jsx)("p", jl({
									className: "description"
								}, {
									children: n.description
								})), n.cost.length ? (0, e.jsxs)("div", jl({
									className: "costs wrap"
								}, {
									children: [(0, e.jsx)("span", {
										children: "Cost"
									}), n.cost.map((function(n) {
										return (0, e.jsx)(No, {
											cost: n
										})
									}))]
								})) : (0, e.jsx)(e.Fragment, {})]
							}))
						}))
				}))
			},
			Sl = function() {
				var n = k(Ka);
				return (0, e.jsxs)(e.Fragment, {
					children: [(0, e.jsx)(kl, {
						state: n
					}), (0, e.jsx)(Nl, {
						colonize: n
					}), (0, e.jsx)(El, {
						upgrades: n.upgrades
					})]
				})
			},
			Cl = function() {
				return Cl = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, Cl.apply(this, arguments)
			},
			Tl = function(n) {
				var t = n.page;
				return "transmitKnowledge" === t ? (0, e.jsx)(wl, {}) : "colonize" === t ? (0, e.jsx)(Sl, {}) : (0, e.jsx)("p", {
					children: "None"
				})
			},
			Ol = function() {
				var n = gs("prestige-page", "transmitKnowledge"),
					t = n[0],
					r = n[1],
					i = k(qa);
				return (0, e.jsxs)("div", Cl({
					className: "fit-height"
				}, {
					children: [(0, e.jsxs)("div", Cl({
						className: "submenu"
					}, {
						children: [(0, e.jsx)(eo, Cl({
							id: "prestige:transmit-knowledge",
							className: "submenu-item-wrap"
						}, {
							children: (0, e.jsx)("div", Cl({
								className: "submenu-item ".concat("transmitKnowledge" === t ? "selected" : ""),
								onClick: function() {
									return r("transmitKnowledge")
								}
							}, {
								children: "Transmit Knowledge"
							}))
						})), i ? (0, e.jsx)(eo, Cl({
							id: "prestige:colonize",
							className: "submenu-item-wrap"
						}, {
							children: (0, e.jsx)("div", Cl({
								className: "submenu-item ".concat("colonize" === t ? "selected" : ""),
								onClick: function() {
									return r("colonize")
								}
							}, {
								children: "Colonize New Planet"
							}))
						})) : null]
					})), (0, e.jsx)("div", Cl({
						className: "inner-scrollable planet"
					}, {
						children: (0, e.jsx)($o(), {
							children: (0, e.jsx)("div", Cl({
								className: "inner"
							}, {
								children: (0, e.jsx)(Tl, {
									page: t
								})
							}))
						})
					}))]
				}))
			},
			Al = function(e) {
				return e.game.statistics
			},
			_l = function() {
				return _l = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, _l.apply(this, arguments)
			},
			Rl = function(n) {
				var t = n.stats;
				return (0, e.jsx)(La, _l({
					id: "stats",
					label: "General Statistics",
					className: "statistics-list"
				}, {
					children: (0, e.jsxs)(e.Fragment, {
						children: [(0, e.jsxs)("div", _l({
							className: "stat-item"
						}, {
							children: [(0, e.jsx)("p", _l({
								className: "label"
							}, {
								children: "Time In Game"
							})), (0, e.jsx)("p", _l({
								className: "value"
							}, {
								children: to(t.timeInGame)
							}))]
						})), t.numPrestiges ? (0, e.jsxs)(e.Fragment, {
							children: [(0, e.jsxs)("div", _l({
								className: "stat-item"
							}, {
								children: [(0, e.jsx)("p", _l({
									className: "label"
								}, {
									children: "Transmit Knowledge Prestiges"
								})), (0, e.jsx)("p", _l({
									className: "value"
								}, {
									children: t.numPrestiges
								}))]
							})), (0, e.jsxs)("div", _l({
								className: "stat-item"
							}, {
								children: [(0, e.jsx)("p", _l({
									className: "label"
								}, {
									children: "Time This Prestige"
								})), (0, e.jsx)("p", _l({
									className: "value"
								}, {
									children: to(t.timeThisPrestige)
								}))]
							})), (0, e.jsxs)("div", _l({
								className: "stat-item"
							}, {
								children: [(0, e.jsx)("p", _l({
									className: "label"
								}, {
									children: "Total KP Gain (All time)"
								})), (0, e.jsx)("p", _l({
									className: "value"
								}, {
									children: Math.round(t.kpTotal || 0)
								}))]
							})), (0, e.jsxs)("div", _l({
								className: "stat-item"
							}, {
								children: [(0, e.jsx)("p", _l({
									className: "label"
								}, {
									children: "Max KP Gain (per prestige)"
								})), (0, e.jsx)("p", _l({
									className: "value"
								}, {
									children: Math.round(t.kpMaxGain || 0)
								}))]
							}))]
						}) : null, t.numColonized ? (0, e.jsxs)(e.Fragment, {
							children: [(0, e.jsxs)("div", _l({
								className: "stat-item"
							}, {
								children: [(0, e.jsx)("p", _l({
									className: "label"
								}, {
									children: "Colonize Prestiges"
								})), (0, e.jsx)("p", _l({
									className: "value"
								}, {
									children: t.numColonized
								}))]
							})), (0, e.jsxs)("div", _l({
								className: "stat-item"
							}, {
								children: [(0, e.jsx)("p", _l({
									className: "label"
								}, {
									children: "Time This Planet"
								})), (0, e.jsx)("p", _l({
									className: "value"
								}, {
									children: to(t.timeThisPlanet)
								}))]
							})), (0, e.jsxs)("div", _l({
								className: "stat-item"
							}, {
								children: [(0, e.jsx)("p", _l({
									className: "label"
								}, {
									children: "Total XP Gain (All time)"
								})), (0, e.jsx)("p", _l({
									className: "value"
								}, {
									children: ro(t.xpTotal || 0)
								}))]
							})), (0, e.jsxs)("div", _l({
								className: "stat-item"
							}, {
								children: [(0, e.jsx)("p", _l({
									className: "label"
								}, {
									children: "Max XP Gain (per prestige)"
								})), (0, e.jsx)("p", _l({
									className: "value"
								}, {
									children: ro(+t.xpMaxGain || 0)
								}))]
							}))]
						}) : null, (0, e.jsxs)("div", _l({
							className: "stat-item"
						}, {
							children: [(0, e.jsx)("p", _l({
								className: "label"
							}, {
								children: "Maximum Colonists"
							})), (0, e.jsx)("p", _l({
								className: "value"
							}, {
								children: t.maxColonists
							}))]
						})), (0, e.jsxs)("div", _l({
							className: "stat-item"
						}, {
							children: [(0, e.jsx)("p", _l({
								className: "label"
							}, {
								children: "Maximum Happiness"
							})), (0, e.jsxs)("p", _l({
								className: "value"
							}, {
								children: [t.maxHappiness, "%"]
							}))]
						})), (0, e.jsxs)("div", _l({
							className: "stat-item"
						}, {
							children: [(0, e.jsx)("p", _l({
								className: "label"
							}, {
								children: "Exotic Matter Collected"
							})), (0, e.jsx)("p", _l({
								className: "value"
							}, {
								children: ro(+t.exoticCollected || 0)
							}))]
						}))]
					})
				}))
			},
			Il = function() {
				var n = gs("statistics-page", "General"),
					t = n[0],
					r = n[1],
					i = k(Al);
				return (0, e.jsxs)("div", _l({
					className: "fit-height"
				}, {
					children: [(0, e.jsx)("div", _l({
						className: "submenu"
					}, {
						children: Object.values(["General"])
							.map((function(n) {
								return (0, e.jsx)(eo, _l({
									id: "stats:General",
									className: "submenu-wrap"
								}, {
									children: (0, e.jsx)("div", _l({
										className: "submenu-item ".concat(t === n ? "selected" : ""),
										onClick: function() {
											return r(n)
										}
									}, {
										children: n
									}))
								}))
							}))
					})), (0, e.jsx)("div", _l({
						className: "inner-scrollable stats"
					}, {
						children: (0, e.jsx)($o(), {
							children: (0, e.jsx)("div", _l({
								className: "inner"
							}, {
								children: (0, e.jsx)(Rl, {
									stats: i
								})
							}))
						})
					}))]
				}))
			},
			Pl = function() {
				var n = k(nr);
				return n === ut.PLANET ? (0, e.jsx)(Es, {}) : n === ut.SCIENCE ? (0, e.jsx)(_s, {}) : n === ut.SPACE ? (0, e.jsx)(gl, {}) : n === ut.SETTINGS ? (0, e.jsx)(Ls, {}) : n === ut.LAWS ? (0, e.jsx)(Bs, {}) : n === ut.PRESTIGE ? (0, e.jsx)(Ol, {}) : n === ut.ABOUT ? (0, e.jsx)(Gs, {}) : n === ut.STATISTICS ? (0, e.jsx)(Il, {}) : (0, e.jsx)("h2", {
					children: "Empty and cold here"
				})
			},
			Ll = t(8397),
			Ml = {};
		Ml.styleTagTransform = Zt(), Ml.setAttributes = qt(), Ml.insert = Xt()
			.bind(null, "head"), Ml.domAPI = Gt(), Ml.insertStyleElement = Kt(), Bt()(Ll.Z, Ml), Ll.Z && Ll.Z.locals && Ll.Z.locals;
		var Dl = t(904),
			Ul = t.n(Dl),
			Fl = {
				"aria-busy": !0,
				role: "status"
			},
			zl = function(e) {
				return {
					display: e ? "flex" : "none"
				}
			},
			Hl = function() {
				return Hl = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, Hl.apply(this, arguments)
			};
		const Bl = function(e) {
			var n = e.wrapperStyle,
				t = void 0 === n ? {} : n,
				i = e.visible,
				a = void 0 === i || i,
				o = e.wrapperClass,
				s = void 0 === o ? "" : o,
				l = e.height,
				c = void 0 === l ? 100 : l,
				u = e.width,
				d = void 0 === u ? 100 : u,
				p = e.color,
				f = void 0 === p ? "#4fa94d" : p,
				h = e.outerCircleColor,
				m = e.innerCircleColor,
				g = e.barColor,
				v = e.ariaLabel,
				b = void 0 === v ? "circles-with-bar-loading" : v;
			return r.createElement("div", Hl({
				style: Hl(Hl({}, zl(a)), t),
				className: s,
				"aria-label": b
			}, Fl, {
				"data-testid": "circles-with-bar-wrapper"
			}), r.createElement("svg", {
				version: "1.1",
				id: "L1",
				xmlns: "http://www.w3.org/2000/svg",
				x: "0px",
				y: "0px",
				height: "".concat(c),
				width: "".concat(d),
				viewBox: "0 0 100 100",
				enableBackground: "new 0 0 100 100",
				xmlSpace: "preserve",
				"data-testid": "circles-with-bar-svg"
			}, r.createElement("circle", {
				fill: "none",
				stroke: "".concat(h || f),
				strokeWidth: "6",
				strokeMiterlimit: "15",
				strokeDasharray: "14.2472,14.2472",
				cx: "50",
				cy: "50",
				r: "47"
			}, r.createElement("animateTransform", {
				attributeName: "transform",
				attributeType: "XML",
				type: "rotate",
				dur: "5s",
				from: "0 50 50",
				to: "360 50 50",
				repeatCount: "indefinite"
			})), r.createElement("circle", {
				fill: "none",
				stroke: "".concat(m || f),
				strokeWidth: "1",
				strokeMiterlimit: "10",
				strokeDasharray: "10,10",
				cx: "50",
				cy: "50",
				r: "39"
			}, r.createElement("animateTransform", {
				attributeName: "transform",
				attributeType: "XML",
				type: "rotate",
				dur: "5s",
				from: "0 50 50",
				to: "-360 50 50",
				repeatCount: "indefinite"
			})), r.createElement("g", {
				fill: "".concat(g || f),
				"data-testid": "circles-with-bar-svg-bar"
			}, r.createElement("rect", {
				x: "30",
				y: "35",
				width: "5",
				height: "30"
			}, r.createElement("animateTransform", {
				attributeName: "transform",
				dur: "1s",
				type: "translate",
				values: "0 5 ; 0 -5; 0 5",
				repeatCount: "indefinite",
				begin: "0.1"
			})), r.createElement("rect", {
				x: "40",
				y: "35",
				width: "5",
				height: "30"
			}, r.createElement("animateTransform", {
				attributeName: "transform",
				dur: "1s",
				type: "translate",
				values: "0 5 ; 0 -5; 0 5",
				repeatCount: "indefinite",
				begin: "0.2"
			})), r.createElement("rect", {
				x: "50",
				y: "35",
				width: "5",
				height: "30"
			}, r.createElement("animateTransform", {
				attributeName: "transform",
				dur: "1s",
				type: "translate",
				values: "0 5 ; 0 -5; 0 5",
				repeatCount: "indefinite",
				begin: "0.3"
			})), r.createElement("rect", {
				x: "60",
				y: "35",
				width: "5",
				height: "30"
			}, r.createElement("animateTransform", {
				attributeName: "transform",
				dur: "1s",
				type: "translate",
				values: "0 5 ; 0 -5; 0 5",
				repeatCount: "indefinite",
				begin: "0.4"
			})), r.createElement("rect", {
				x: "70",
				y: "35",
				width: "5",
				height: "30"
			}, r.createElement("animateTransform", {
				attributeName: "transform",
				dur: "1s",
				type: "translate",
				values: "0 5 ; 0 -5; 0 5",
				repeatCount: "indefinite",
				begin: "0.5"
			})))))
		};
		var Wl = t(6774),
			Gl = t.n(Wl);
		const Yl = function(e) {
				function n(e, r, l, c, p) {
					for (var f, h, m, g, y, j = 0, k = 0, N = 0, E = 0, S = 0, R = 0, P = m = f = 0, M = 0, D = 0, U = 0, F = 0, z = l.length, H = z - 1, B = "", W = "", G = "", Y = ""; M < z;) {
						if (h = l.charCodeAt(M), M === H && 0 !== k + E + N + j && (0 !== k && (h = 47 === k ? 10 : 47), E = N = j = 0, z++, H++), 0 === k + E + N + j) {
							if (M === H && (0 < D && (B = B.replace(d, "")), 0 < B.trim()
								.length)) {
								switch (h) {
									case 32:
									case 9:
									case 59:
									case 13:
									case 10:
										break;
									default:
										B += l.charAt(M)
								}
								h = 59
							}
							switch (h) {
								case 123:
									for (f = (B = B.trim())
										.charCodeAt(0), m = 1, F = ++M; M < z;) {
										switch (h = l.charCodeAt(M)) {
											case 123:
												m++;
												break;
											case 125:
												m--;
												break;
											case 47:
												switch (h = l.charCodeAt(M + 1)) {
													case 42:
													case 47:
														e: {
															for (P = M + 1; P < H; ++P) switch (l.charCodeAt(P)) {
																case 47:
																	if (42 === h && 42 === l.charCodeAt(P - 1) && M + 2 !== P) {
																		M = P + 1;
																		break e
																	}
																	break;
																case 10:
																	if (47 === h) {
																		M = P + 1;
																		break e
																	}
															}
															M = P
														}
												}
												break;
											case 91:
												h++;
											case 40:
												h++;
											case 34:
											case 39:
												for (; M++ < H && l.charCodeAt(M) !== h;);
										}
										if (0 === m) break;
										M++
									}
									if (m = l.substring(F, M), 0 === f && (f = (B = B.replace(u, "")
											.trim())
										.charCodeAt(0)), 64 === f) {
										switch (0 < D && (B = B.replace(d, "")), h = B.charCodeAt(1)) {
											case 100:
											case 109:
											case 115:
											case 45:
												D = r;
												break;
											default:
												D = _
										}
										if (F = (m = n(r, D, m, h, p + 1))
											.length, 0 < I && (y = s(3, m, D = t(_, B, U), r, T, C, F, h, p, c), B = D.join(""), void 0 !== y && 0 === (F = (m = y.trim())
												.length) && (h = 0, m = "")), 0 < F) switch (h) {
											case 115:
												B = B.replace(w, o);
											case 100:
											case 109:
											case 45:
												m = B + "{" + m + "}";
												break;
											case 107:
												m = (B = B.replace(v, "$1 $2")) + "{" + m + "}", m = 1 === A || 2 === A && a("@" + m, 3) ? "@-webkit-" + m + "@" + m : "@" + m;
												break;
											default:
												m = B + m, 112 === c && (W += m, m = "")
										} else m = ""
									} else m = n(r, t(r, B, U), m, c, p + 1);
									G += m, m = U = D = P = f = 0, B = "", h = l.charCodeAt(++M);
									break;
								case 125:
								case 59:
									if (1 < (F = (B = (0 < D ? B.replace(d, "") : B)
											.trim())
										.length)) switch (0 === P && (f = B.charCodeAt(0), 45 === f || 96 < f && 123 > f) && (F = (B = B.replace(" ", ":"))
										.length), 0 < I && void 0 !== (y = s(1, B, r, e, T, C, W.length, c, p, c)) && 0 === (F = (B = y.trim())
										.length) && (B = "\0\0"), f = B.charCodeAt(0), h = B.charCodeAt(1), f) {
										case 0:
											break;
										case 64:
											if (105 === h || 99 === h) {
												Y += B + l.charAt(M);
												break
											}
										default:
											58 !== B.charCodeAt(F - 1) && (W += i(B, f, h, B.charCodeAt(2)))
									}
									U = D = P = f = 0, B = "", h = l.charCodeAt(++M)
							}
						}
						switch (h) {
							case 13:
							case 10:
								47 === k ? k = 0 : 0 === 1 + f && 107 !== c && 0 < B.length && (D = 1, B += "\0"), 0 < I * L && s(0, B, r, e, T, C, W.length, c, p, c), C = 1, T++;
								break;
							case 59:
							case 125:
								if (0 === k + E + N + j) {
									C++;
									break
								}
							default:
								switch (C++, g = l.charAt(M), h) {
									case 9:
									case 32:
										if (0 === E + j + k) switch (S) {
											case 44:
											case 58:
											case 9:
											case 32:
												g = "";
												break;
											default:
												32 !== h && (g = " ")
										}
										break;
									case 0:
										g = "\\0";
										break;
									case 12:
										g = "\\f";
										break;
									case 11:
										g = "\\v";
										break;
									case 38:
										0 === E + k + j && (D = U = 1, g = "\f" + g);
										break;
									case 108:
										if (0 === E + k + j + O && 0 < P) switch (M - P) {
											case 2:
												112 === S && 58 === l.charCodeAt(M - 3) && (O = S);
											case 8:
												111 === R && (O = R)
										}
										break;
									case 58:
										0 === E + k + j && (P = M);
										break;
									case 44:
										0 === k + N + E + j && (D = 1, g += "\r");
										break;
									case 34:
									case 39:
										0 === k && (E = E === h ? 0 : 0 === E ? h : E);
										break;
									case 91:
										0 === E + k + N && j++;
										break;
									case 93:
										0 === E + k + N && j--;
										break;
									case 41:
										0 === E + k + j && N--;
										break;
									case 40:
										0 === E + k + j && (0 === f && (2 * S + 3 * R == 533 || (f = 1)), N++);
										break;
									case 64:
										0 === k + N + E + j + P + m && (m = 1);
										break;
									case 42:
									case 47:
										if (!(0 < E + j + N)) switch (k) {
											case 0:
												switch (2 * h + 3 * l.charCodeAt(M + 1)) {
													case 235:
														k = 47;
														break;
													case 220:
														F = M, k = 42
												}
												break;
											case 42:
												47 === h && 42 === S && F + 2 !== M && (33 === l.charCodeAt(F + 2) && (W += l.substring(F, M + 1)), g = "", k = 0)
										}
								}
								0 === k && (B += g)
						}
						R = S, S = h, M++
					}
					if (0 < (F = W.length)) {
						if (D = r, 0 < I && void 0 !== (y = s(2, W, D, e, T, C, F, c, p, c)) && 0 === (W = y)
							.length) return Y + W + G;
						if (W = D.join(",") + "{" + W + "}", 0 != A * O) {
							switch (2 !== A || a(W, 2) || (O = 0), O) {
								case 111:
									W = W.replace(x, ":-moz-$1") + W;
									break;
								case 112:
									W = W.replace(b, "::-webkit-input-$1") + W.replace(b, "::-moz-$1") + W.replace(b, ":-ms-input-$1") + W
							}
							O = 0
						}
					}
					return Y + W + G
				}

				function t(e, n, t) {
					var i = n.trim()
						.split(m);
					n = i;
					var a = i.length,
						o = e.length;
					switch (o) {
						case 0:
						case 1:
							var s = 0;
							for (e = 0 === o ? "" : e[0] + " "; s < a; ++s) n[s] = r(e, n[s], t)
								.trim();
							break;
						default:
							var l = s = 0;
							for (n = []; s < a; ++s)
								for (var c = 0; c < o; ++c) n[l++] = r(e[c] + " ", i[s], t)
									.trim()
					}
					return n
				}

				function r(e, n, t) {
					var r = n.charCodeAt(0);
					switch (33 > r && (r = (n = n.trim())
						.charCodeAt(0)), r) {
						case 38:
							return n.replace(g, "$1" + e.trim());
						case 58:
							return e.trim() + n.replace(g, "$1" + e.trim());
						default:
							if (0 < 1 * t && 0 < n.indexOf("\f")) return n.replace(g, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
					}
					return e + n
				}

				function i(e, n, t, r) {
					var o = e + ";",
						s = 2 * n + 3 * t + 4 * r;
					if (944 === s) {
						e = o.indexOf(":", 9) + 1;
						var l = o.substring(e, o.length - 1)
							.trim();
						return l = o.substring(0, e)
							.trim() + l + ";", 1 === A || 2 === A && a(l, 1) ? "-webkit-" + l + l : l
					}
					if (0 === A || 2 === A && !a(o, 1)) return o;
					switch (s) {
						case 1015:
							return 97 === o.charCodeAt(10) ? "-webkit-" + o + o : o;
						case 951:
							return 116 === o.charCodeAt(3) ? "-webkit-" + o + o : o;
						case 963:
							return 110 === o.charCodeAt(5) ? "-webkit-" + o + o : o;
						case 1009:
							if (100 !== o.charCodeAt(4)) break;
						case 969:
						case 942:
							return "-webkit-" + o + o;
						case 978:
							return "-webkit-" + o + "-moz-" + o + o;
						case 1019:
						case 983:
							return "-webkit-" + o + "-moz-" + o + "-ms-" + o + o;
						case 883:
							if (45 === o.charCodeAt(8)) return "-webkit-" + o + o;
							if (0 < o.indexOf("image-set(", 11)) return o.replace(S, "$1-webkit-$2") + o;
							break;
						case 932:
							if (45 === o.charCodeAt(4)) switch (o.charCodeAt(5)) {
								case 103:
									return "-webkit-box-" + o.replace("-grow", "") + "-webkit-" + o + "-ms-" + o.replace("grow", "positive") + o;
								case 115:
									return "-webkit-" + o + "-ms-" + o.replace("shrink", "negative") + o;
								case 98:
									return "-webkit-" + o + "-ms-" + o.replace("basis", "preferred-size") + o
							}
							return "-webkit-" + o + "-ms-" + o + o;
						case 964:
							return "-webkit-" + o + "-ms-flex-" + o + o;
						case 1023:
							if (99 !== o.charCodeAt(8)) break;
							return "-webkit-box-pack" + (l = o.substring(o.indexOf(":", 15))
								.replace("flex-", "")
								.replace("space-between", "justify")) + "-webkit-" + o + "-ms-flex-pack" + l + o;
						case 1005:
							return f.test(o) ? o.replace(p, ":-webkit-") + o.replace(p, ":-moz-") + o : o;
						case 1e3:
							switch (n = (l = o.substring(13)
									.trim())
								.indexOf("-") + 1, l.charCodeAt(0) + l.charCodeAt(n)) {
								case 226:
									l = o.replace(y, "tb");
									break;
								case 232:
									l = o.replace(y, "tb-rl");
									break;
								case 220:
									l = o.replace(y, "lr");
									break;
								default:
									return o
							}
							return "-webkit-" + o + "-ms-" + l + o;
						case 1017:
							if (-1 === o.indexOf("sticky", 9)) break;
						case 975:
							switch (n = (o = e)
								.length - 10, s = (l = (33 === o.charCodeAt(n) ? o.substring(0, n) : o)
									.substring(e.indexOf(":", 7) + 1)
									.trim())
								.charCodeAt(0) + (0 | l.charCodeAt(7))) {
								case 203:
									if (111 > l.charCodeAt(8)) break;
								case 115:
									o = o.replace(l, "-webkit-" + l) + ";" + o;
									break;
								case 207:
								case 102:
									o = o.replace(l, "-webkit-" + (102 < s ? "inline-" : "") + "box") + ";" + o.replace(l, "-webkit-" + l) + ";" + o.replace(l, "-ms-" + l + "box") + ";" + o
							}
							return o + ";";
						case 938:
							if (45 === o.charCodeAt(5)) switch (o.charCodeAt(6)) {
								case 105:
									return l = o.replace("-items", ""), "-webkit-" + o + "-webkit-box-" + l + "-ms-flex-" + l + o;
								case 115:
									return "-webkit-" + o + "-ms-flex-item-" + o.replace(k, "") + o;
								default:
									return "-webkit-" + o + "-ms-flex-line-pack" + o.replace("align-content", "")
										.replace(k, "") + o
							}
							break;
						case 973:
						case 989:
							if (45 !== o.charCodeAt(3) || 122 === o.charCodeAt(4)) break;
						case 931:
						case 953:
							if (!0 === E.test(e)) return 115 === (l = e.substring(e.indexOf(":") + 1))
								.charCodeAt(0) ? i(e.replace("stretch", "fill-available"), n, t, r)
								.replace(":fill-available", ":stretch") : o.replace(l, "-webkit-" + l) + o.replace(l, "-moz-" + l.replace("fill-", "")) + o;
							break;
						case 962:
							if (o = "-webkit-" + o + (102 === o.charCodeAt(5) ? "-ms-" + o : "") + o, 211 === t + r && 105 === o.charCodeAt(13) && 0 < o.indexOf("transform", 10)) return o.substring(0, o.indexOf(";", 27) + 1)
								.replace(h, "$1-webkit-$2") + o
					}
					return o
				}

				function a(e, n) {
					var t = e.indexOf(1 === n ? ":" : "{"),
						r = e.substring(0, 3 !== n ? t : 10);
					return t = e.substring(t + 1, e.length - 1), P(2 !== n ? r : r.replace(N, "$1"), t, n)
				}

				function o(e, n) {
					var t = i(n, n.charCodeAt(0), n.charCodeAt(1), n.charCodeAt(2));
					return t !== n + ";" ? t.replace(j, " or ($1)")
						.substring(4) : "(" + n + ")"
				}

				function s(e, n, t, r, i, a, o, s, l, u) {
					for (var d, p = 0, f = n; p < I; ++p) switch (d = R[p].call(c, e, f, t, r, i, a, o, s, l, u)) {
						case void 0:
						case !1:
						case !0:
						case null:
							break;
						default:
							f = d
					}
					if (f !== n) return f
				}

				function l(e) {
					return void 0 !== (e = e.prefix) && (P = null, e ? "function" != typeof e ? A = 1 : (A = 2, P = e) : A = 0), l
				}

				function c(e, t) {
					var r = e;
					if (33 > r.charCodeAt(0) && (r = r.trim()), r = [r], 0 < I) {
						var i = s(-1, t, r, r, T, C, 0, 0, 0, 0);
						void 0 !== i && "string" == typeof i && (t = i)
					}
					var a = n(_, r, t, 0, 0);
					return 0 < I && void 0 !== (i = s(-2, a, r, r, T, C, a.length, 0, 0, 0)) && (a = i), O = 0, C = T = 1, a
				}
				var u = /^\0+/g,
					d = /[\0\r\f]/g,
					p = /: */g,
					f = /zoo|gra/,
					h = /([,: ])(transform)/g,
					m = /,\r+?/g,
					g = /([\t\r\n ])*\f?&/g,
					v = /@(k\w+)\s*(\S*)\s*/,
					b = /::(place)/g,
					x = /:(read-only)/g,
					y = /[svh]\w+-[tblr]{2}/,
					w = /\(\s*(.*)\s*\)/g,
					j = /([\s\S]*?);/g,
					k = /-self|flex-/g,
					N = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
					E = /stretch|:\s*\w+\-(?:conte|avail)/,
					S = /([^-])(image-set\()/,
					C = 1,
					T = 1,
					O = 0,
					A = 1,
					_ = [],
					R = [],
					I = 0,
					P = null,
					L = 0;
				return c.use = function e(n) {
					switch (n) {
						case void 0:
						case null:
							I = R.length = 0;
							break;
						default:
							if ("function" == typeof n) R[I++] = n;
							else if ("object" == typeof n)
								for (var t = 0, r = n.length; t < r; ++t) e(n[t]);
							else L = 0 | !!n
					}
					return e
				}, c.set = l, void 0 !== e && l(e), c
			},
			Xl = {
				animationIterationCount: 1,
				borderImageOutset: 1,
				borderImageSlice: 1,
				borderImageWidth: 1,
				boxFlex: 1,
				boxFlexGroup: 1,
				boxOrdinalGroup: 1,
				columnCount: 1,
				columns: 1,
				flex: 1,
				flexGrow: 1,
				flexPositive: 1,
				flexShrink: 1,
				flexNegative: 1,
				flexOrder: 1,
				gridRow: 1,
				gridRowEnd: 1,
				gridRowSpan: 1,
				gridRowStart: 1,
				gridColumn: 1,
				gridColumnEnd: 1,
				gridColumnSpan: 1,
				gridColumnStart: 1,
				msGridRow: 1,
				msGridRowSpan: 1,
				msGridColumn: 1,
				msGridColumnSpan: 1,
				fontWeight: 1,
				lineHeight: 1,
				opacity: 1,
				order: 1,
				orphans: 1,
				tabSize: 1,
				widows: 1,
				zIndex: 1,
				zoom: 1,
				WebkitLineClamp: 1,
				fillOpacity: 1,
				floodOpacity: 1,
				stopOpacity: 1,
				strokeDasharray: 1,
				strokeDashoffset: 1,
				strokeMiterlimit: 1,
				strokeOpacity: 1,
				strokeWidth: 1
			};
		var Vl = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
		const ql = function(e) {
			var n = Object.create(null);
			return function(e) {
				return void 0 === n[e] && (n[e] = (t = e, Vl.test(t) || 111 === t.charCodeAt(0) && 110 === t.charCodeAt(1) && t.charCodeAt(2) < 91)), n[e];
				var t
			}
		}();

		function $l() {
			return ($l = Object.assign || function(e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
					}
					return e
				})
				.apply(this, arguments)
		}
		var Kl = function(e, n) {
				for (var t = [e[0]], r = 0, i = n.length; r < i; r += 1) t.push(n[r], e[r + 1]);
				return t
			},
			Ql = function(e) {
				return null !== e && "object" == typeof e && "[object Object]" === (e.toString ? e.toString() : Object.prototype.toString.call(e)) && !(0, f.typeOf)(e)
			},
			Zl = Object.freeze([]),
			Jl = Object.freeze({});

		function ec(e) {
			return "function" == typeof e
		}

		function nc(e) {
			return e.displayName || e.name || "Component"
		}

		function tc(e) {
			return e && "string" == typeof e.styledComponentId
		}
		var rc = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled",
			ic = "undefined" != typeof window && "HTMLElement" in window,
			ac = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && (void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY && "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY));

		function oc(e) {
			for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
			throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : ""))
		}
		var sc = function() {
				function e(e) {
					this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e
				}
				var n = e.prototype;
				return n.indexOfGroup = function(e) {
					for (var n = 0, t = 0; t < e; t++) n += this.groupSizes[t];
					return n
				}, n.insertRules = function(e, n) {
					if (e >= this.groupSizes.length) {
						for (var t = this.groupSizes, r = t.length, i = r; e >= i;)(i <<= 1) < 0 && oc(16, "" + e);
						this.groupSizes = new Uint32Array(i), this.groupSizes.set(t), this.length = i;
						for (var a = r; a < i; a++) this.groupSizes[a] = 0
					}
					for (var o = this.indexOfGroup(e + 1), s = 0, l = n.length; s < l; s++) this.tag.insertRule(o, n[s]) && (this.groupSizes[e]++, o++)
				}, n.clearGroup = function(e) {
					if (e < this.length) {
						var n = this.groupSizes[e],
							t = this.indexOfGroup(e),
							r = t + n;
						this.groupSizes[e] = 0;
						for (var i = t; i < r; i++) this.tag.deleteRule(t)
					}
				}, n.getGroup = function(e) {
					var n = "";
					if (e >= this.length || 0 === this.groupSizes[e]) return n;
					for (var t = this.groupSizes[e], r = this.indexOfGroup(e), i = r + t, a = r; a < i; a++) n += this.tag.getRule(a) + "/*!sc*/\n";
					return n
				}, e
			}(),
			lc = new Map,
			cc = new Map,
			uc = 1,
			dc = function(e) {
				if (lc.has(e)) return lc.get(e);
				for (; cc.has(uc);) uc++;
				var n = uc++;
				return lc.set(e, n), cc.set(n, e), n
			},
			pc = function(e) {
				return cc.get(e)
			},
			fc = function(e, n) {
				n >= uc && (uc = n + 1), lc.set(e, n), cc.set(n, e)
			},
			hc = "style[" + rc + '][data-styled-version="5.3.11"]',
			mc = new RegExp("^" + rc + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
			gc = function(e, n, t) {
				for (var r, i = t.split(","), a = 0, o = i.length; a < o; a++)(r = i[a]) && e.registerName(n, r)
			},
			vc = function(e, n) {
				for (var t = (n.textContent || "")
					.split("/*!sc*/\n"), r = [], i = 0, a = t.length; i < a; i++) {
					var o = t[i].trim();
					if (o) {
						var s = o.match(mc);
						if (s) {
							var l = 0 | parseInt(s[1], 10),
								c = s[2];
							0 !== l && (fc(c, l), gc(e, c, s[3]), e.getTag()
								.insertRules(l, r)), r.length = 0
						} else r.push(o)
					}
				}
			},
			bc = function() {
				return t.nc
			},
			xc = function(e) {
				var n = document.head,
					t = e || n,
					r = document.createElement("style"),
					i = function(e) {
						for (var n = e.childNodes, t = n.length; t >= 0; t--) {
							var r = n[t];
							if (r && 1 === r.nodeType && r.hasAttribute(rc)) return r
						}
					}(t),
					a = void 0 !== i ? i.nextSibling : null;
				r.setAttribute(rc, "active"), r.setAttribute("data-styled-version", "5.3.11");
				var o = bc();
				return o && r.setAttribute("nonce", o), t.insertBefore(r, a), r
			},
			yc = function() {
				function e(e) {
					var n = this.element = xc(e);
					n.appendChild(document.createTextNode("")), this.sheet = function(e) {
						if (e.sheet) return e.sheet;
						for (var n = document.styleSheets, t = 0, r = n.length; t < r; t++) {
							var i = n[t];
							if (i.ownerNode === e) return i
						}
						oc(17)
					}(n), this.length = 0
				}
				var n = e.prototype;
				return n.insertRule = function(e, n) {
					try {
						return this.sheet.insertRule(n, e), this.length++, !0
					} catch (e) {
						return !1
					}
				}, n.deleteRule = function(e) {
					this.sheet.deleteRule(e), this.length--
				}, n.getRule = function(e) {
					var n = this.sheet.cssRules[e];
					return void 0 !== n && "string" == typeof n.cssText ? n.cssText : ""
				}, e
			}(),
			wc = function() {
				function e(e) {
					var n = this.element = xc(e);
					this.nodes = n.childNodes, this.length = 0
				}
				var n = e.prototype;
				return n.insertRule = function(e, n) {
					if (e <= this.length && e >= 0) {
						var t = document.createTextNode(n),
							r = this.nodes[e];
						return this.element.insertBefore(t, r || null), this.length++, !0
					}
					return !1
				}, n.deleteRule = function(e) {
					this.element.removeChild(this.nodes[e]), this.length--
				}, n.getRule = function(e) {
					return e < this.length ? this.nodes[e].textContent : ""
				}, e
			}(),
			jc = function() {
				function e(e) {
					this.rules = [], this.length = 0
				}
				var n = e.prototype;
				return n.insertRule = function(e, n) {
					return e <= this.length && (this.rules.splice(e, 0, n), this.length++, !0)
				}, n.deleteRule = function(e) {
					this.rules.splice(e, 1), this.length--
				}, n.getRule = function(e) {
					return e < this.length ? this.rules[e] : ""
				}, e
			}(),
			kc = ic,
			Nc = {
				isServer: !ic,
				useCSSOMInjection: !ac
			},
			Ec = function() {
				function e(e, n, t) {
					void 0 === e && (e = Jl), void 0 === n && (n = {}), this.options = $l({}, Nc, {}, e), this.gs = n, this.names = new Map(t), this.server = !!e.isServer, !this.server && ic && kc && (kc = !1, function(e) {
						for (var n = document.querySelectorAll(hc), t = 0, r = n.length; t < r; t++) {
							var i = n[t];
							i && "active" !== i.getAttribute(rc) && (vc(e, i), i.parentNode && i.parentNode.removeChild(i))
						}
					}(this))
				}
				e.registerId = function(e) {
					return dc(e)
				};
				var n = e.prototype;
				return n.reconstructWithOptions = function(n, t) {
					return void 0 === t && (t = !0), new e($l({}, this.options, {}, n), this.gs, t && this.names || void 0)
				}, n.allocateGSInstance = function(e) {
					return this.gs[e] = (this.gs[e] || 0) + 1
				}, n.getTag = function() {
					return this.tag || (this.tag = (t = (n = this.options)
						.isServer, r = n.useCSSOMInjection, i = n.target, e = t ? new jc(i) : r ? new yc(i) : new wc(i), new sc(e)));
					var e, n, t, r, i
				}, n.hasNameForId = function(e, n) {
					return this.names.has(e) && this.names.get(e)
						.has(n)
				}, n.registerName = function(e, n) {
					if (dc(e), this.names.has(e)) this.names.get(e)
						.add(n);
					else {
						var t = new Set;
						t.add(n), this.names.set(e, t)
					}
				}, n.insertRules = function(e, n, t) {
					this.registerName(e, n), this.getTag()
						.insertRules(dc(e), t)
				}, n.clearNames = function(e) {
					this.names.has(e) && this.names.get(e)
						.clear()
				}, n.clearRules = function(e) {
					this.getTag()
						.clearGroup(dc(e)), this.clearNames(e)
				}, n.clearTag = function() {
					this.tag = void 0
				}, n.toString = function() {
					return function(e) {
						for (var n = e.getTag(), t = n.length, r = "", i = 0; i < t; i++) {
							var a = pc(i);
							if (void 0 !== a) {
								var o = e.names.get(a),
									s = n.getGroup(i);
								if (o && s && o.size) {
									var l = rc + ".g" + i + '[id="' + a + '"]',
										c = "";
									void 0 !== o && o.forEach((function(e) {
										e.length > 0 && (c += e + ",")
									})), r += "" + s + l + '{content:"' + c + '"}/*!sc*/\n'
								}
							}
						}
						return r
					}(this)
				}, e
			}(),
			Sc = /(a)(d)/gi,
			Cc = function(e) {
				return String.fromCharCode(e + (e > 25 ? 39 : 97))
			};

		function Tc(e) {
			var n, t = "";
			for (n = Math.abs(e); n > 52; n = n / 52 | 0) t = Cc(n % 52) + t;
			return (Cc(n % 52) + t)
				.replace(Sc, "$1-$2")
		}
		var Oc = function(e, n) {
				for (var t = n.length; t;) e = 33 * e ^ n.charCodeAt(--t);
				return e
			},
			Ac = function(e) {
				return Oc(5381, e)
			};

		function _c(e) {
			for (var n = 0; n < e.length; n += 1) {
				var t = e[n];
				if (ec(t) && !tc(t)) return !1
			}
			return !0
		}
		var Rc = Ac("5.3.11"),
			Ic = function() {
				function e(e, n, t) {
					this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === t || t.isStatic) && _c(e), this.componentId = n, this.baseHash = Oc(Rc, n), this.baseStyle = t, Ec.registerId(n)
				}
				return e.prototype.generateAndInjectStyles = function(e, n, t) {
					var r = this.componentId,
						i = [];
					if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(e, n, t)), this.isStatic && !t.hash)
						if (this.staticRulesId && n.hasNameForId(r, this.staticRulesId)) i.push(this.staticRulesId);
						else {
							var a = Kc(this.rules, e, n, t)
								.join(""),
								o = Tc(Oc(this.baseHash, a) >>> 0);
							if (!n.hasNameForId(r, o)) {
								var s = t(a, "." + o, void 0, r);
								n.insertRules(r, o, s)
							}
							i.push(o), this.staticRulesId = o
						}
					else {
						for (var l = this.rules.length, c = Oc(this.baseHash, t.hash), u = "", d = 0; d < l; d++) {
							var p = this.rules[d];
							if ("string" == typeof p) u += p;
							else if (p) {
								var f = Kc(p, e, n, t),
									h = Array.isArray(f) ? f.join("") : f;
								c = Oc(c, h + d), u += h
							}
						}
						if (u) {
							var m = Tc(c >>> 0);
							if (!n.hasNameForId(r, m)) {
								var g = t(u, "." + m, void 0, r);
								n.insertRules(r, m, g)
							}
							i.push(m)
						}
					}
					return i.join(" ")
				}, e
			}(),
			Pc = /^\s*\/\/.*$/gm,
			Lc = [":", "[", ".", "#"];

		function Mc(e) {
			var n, t, r, i, a = void 0 === e ? Jl : e,
				o = a.options,
				s = void 0 === o ? Jl : o,
				l = a.plugins,
				c = void 0 === l ? Zl : l,
				u = new Yl(s),
				d = [],
				p = function(e) {
					function n(n) {
						if (n) try {
							e(n + "}")
						} catch (e) {}
					}
					return function(t, r, i, a, o, s, l, c, u, d) {
						switch (t) {
							case 1:
								if (0 === u && 64 === r.charCodeAt(0)) return e(r + ";"), "";
								break;
							case 2:
								if (0 === c) return r + "/*|*/";
								break;
							case 3:
								switch (c) {
									case 102:
									case 112:
										return e(i[0] + r), "";
									default:
										return r + (0 === d ? "/*|*/" : "")
								}
							case -2:
								r.split("/*|*/}")
									.forEach(n)
						}
					}
				}((function(e) {
					d.push(e)
				})),
				f = function(e, r, a) {
					return 0 === r && -1 !== Lc.indexOf(a[t.length]) || a.match(i) ? e : "." + n
				};

			function h(e, a, o, s) {
				void 0 === s && (s = "&");
				var l = e.replace(Pc, ""),
					c = a && o ? o + " " + a + " { " + l + " }" : l;
				return n = s, t = a, r = new RegExp("\\" + t + "\\b", "g"), i = new RegExp("(\\" + t + "\\b){2,}"), u(o || !a ? "" : a, c)
			}
			return u.use([].concat(c, [function(e, n, i) {
					2 === e && i.length && i[0].lastIndexOf(t) > 0 && (i[0] = i[0].replace(r, f))
				}, p, function(e) {
					if (-2 === e) {
						var n = d;
						return d = [], n
					}
				}])), h.hash = c.length ? c.reduce((function(e, n) {
					return n.name || oc(15), Oc(e, n.name)
				}), 5381)
				.toString() : "", h
		}
		var Dc = r.createContext(),
			Uc = (Dc.Consumer, r.createContext()),
			Fc = (Uc.Consumer, new Ec),
			zc = Mc();

		function Hc() {
			return (0, r.useContext)(Dc) || Fc
		}

		function Bc(e) {
			var n = (0, r.useState)(e.stylisPlugins),
				t = n[0],
				i = n[1],
				a = Hc(),
				o = (0, r.useMemo)((function() {
					var n = a;
					return e.sheet ? n = e.sheet : e.target && (n = n.reconstructWithOptions({
						target: e.target
					}, !1)), e.disableCSSOMInjection && (n = n.reconstructWithOptions({
						useCSSOMInjection: !1
					})), n
				}), [e.disableCSSOMInjection, e.sheet, e.target]),
				s = (0, r.useMemo)((function() {
					return Mc({
						options: {
							prefix: !e.disableVendorPrefixes
						},
						plugins: t
					})
				}), [e.disableVendorPrefixes, t]);
			return (0, r.useEffect)((function() {
				Gl()(t, e.stylisPlugins) || i(e.stylisPlugins)
			}), [e.stylisPlugins]), r.createElement(Dc.Provider, {
				value: o
			}, r.createElement(Uc.Provider, {
				value: s
			}, e.children))
		}
		var Wc = function() {
				function e(e, n) {
					var t = this;
					this.inject = function(e, n) {
						void 0 === n && (n = zc);
						var r = t.name + n.hash;
						e.hasNameForId(t.id, r) || e.insertRules(t.id, r, n(t.rules, r, "@keyframes"))
					}, this.toString = function() {
						return oc(12, String(t.name))
					}, this.name = e, this.id = "sc-keyframes-" + e, this.rules = n
				}
				return e.prototype.getName = function(e) {
					return void 0 === e && (e = zc), this.name + e.hash
				}, e
			}(),
			Gc = /([A-Z])/,
			Yc = /([A-Z])/g,
			Xc = /^ms-/,
			Vc = function(e) {
				return "-" + e.toLowerCase()
			};

		function qc(e) {
			return Gc.test(e) ? e.replace(Yc, Vc)
				.replace(Xc, "-ms-") : e
		}
		var $c = function(e) {
			return null == e || !1 === e || "" === e
		};

		function Kc(e, n, t, r) {
			if (Array.isArray(e)) {
				for (var i, a = [], o = 0, s = e.length; o < s; o += 1) "" !== (i = Kc(e[o], n, t, r)) && (Array.isArray(i) ? a.push.apply(a, i) : a.push(i));
				return a
			}
			return $c(e) ? "" : tc(e) ? "." + e.styledComponentId : ec(e) ? "function" != typeof(l = e) || l.prototype && l.prototype.isReactComponent || !n ? e : Kc(e(n), n, t, r) : e instanceof Wc ? t ? (e.inject(t, r), e.getName(r)) : e : Ql(e) ? function e(n, t) {
				var r, i, a = [];
				for (var o in n) n.hasOwnProperty(o) && !$c(n[o]) && (Array.isArray(n[o]) && n[o].isCss || ec(n[o]) ? a.push(qc(o) + ":", n[o], ";") : Ql(n[o]) ? a.push.apply(a, e(n[o], o)) : a.push(qc(o) + ": " + (r = o, (null == (i = n[o]) || "boolean" == typeof i || "" === i ? "" : "number" != typeof i || 0 === i || r in Xl || r.startsWith("--") ? String(i)
					.trim() : i + "px") + ";")));
				return t ? [t + " {"].concat(a, ["}"]) : a
			}(e) : e.toString();
			var l
		}
		var Qc = function(e) {
			return Array.isArray(e) && (e.isCss = !0), e
		};

		function Zc(e) {
			for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
			return ec(e) || Ql(e) ? Qc(Kc(Kl(Zl, [e].concat(t)))) : 0 === t.length && 1 === e.length && "string" == typeof e[0] ? e : Qc(Kc(Kl(e, t)))
		}
		new Set;
		var Jc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
			eu = /(^-|-$)/g;

		function nu(e) {
			return e.replace(Jc, "-")
				.replace(eu, "")
		}
		var tu = function(e) {
			return Tc(Ac(e) >>> 0)
		};

		function ru(e) {
			return "string" == typeof e && !0
		}
		var iu = function(e) {
				return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e)
			},
			au = function(e) {
				return "__proto__" !== e && "constructor" !== e && "prototype" !== e
			};

		function ou(e, n, t) {
			var r = e[t];
			iu(n) && iu(r) ? su(r, n) : e[t] = n
		}

		function su(e) {
			for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
			for (var i = 0, a = t; i < a.length; i++) {
				var o = a[i];
				if (iu(o))
					for (var s in o) au(s) && ou(e, o[s], s)
			}
			return e
		}
		var lu = r.createContext();
		lu.Consumer;
		var cu = {};

		function uu(e, n, t) {
			var i = tc(e),
				a = !ru(e),
				o = n.attrs,
				s = void 0 === o ? Zl : o,
				l = n.componentId,
				c = void 0 === l ? function(e, n) {
					var t = "string" != typeof e ? "sc" : nu(e);
					cu[t] = (cu[t] || 0) + 1;
					var r = t + "-" + tu("5.3.11" + t + cu[t]);
					return n ? n + "-" + r : r
				}(n.displayName, n.parentComponentId) : l,
				u = n.displayName,
				d = void 0 === u ? function(e) {
					return ru(e) ? "styled." + e : "Styled(" + nc(e) + ")"
				}(e) : u,
				f = n.displayName && n.componentId ? nu(n.displayName) + "-" + n.componentId : n.componentId || c,
				h = i && e.attrs ? Array.prototype.concat(e.attrs, s)
				.filter(Boolean) : s,
				m = n.shouldForwardProp;
			i && e.shouldForwardProp && (m = n.shouldForwardProp ? function(t, r, i) {
				return e.shouldForwardProp(t, r, i) && n.shouldForwardProp(t, r, i)
			} : e.shouldForwardProp);
			var g, v = new Ic(t, f, i ? e.componentStyle : void 0),
				b = v.isStatic && 0 === s.length,
				x = function(e, n) {
					return function(e, n, t, i) {
						var a = e.attrs,
							o = e.componentStyle,
							s = e.defaultProps,
							l = e.foldedComponentIds,
							c = e.shouldForwardProp,
							u = e.styledComponentId,
							d = e.target,
							p = function(e, n, t) {
								void 0 === e && (e = Jl);
								var r = $l({}, n, {
										theme: e
									}),
									i = {};
								return t.forEach((function(e) {
									var n, t, a, o = e;
									for (n in ec(o) && (o = o(r)), o) r[n] = i[n] = "className" === n ? (t = i[n], a = o[n], t && a ? t + " " + a : t || a) : o[n]
								})), [r, i]
							}(function(e, n, t) {
								return void 0 === t && (t = Jl), e.theme !== t.theme && e.theme || n || t.theme
							}(n, (0, r.useContext)(lu), s) || Jl, n, a),
							f = p[0],
							h = p[1],
							m = function(e, n, t, i) {
								var a = Hc(),
									o = (0, r.useContext)(Uc) || zc;
								return n ? e.generateAndInjectStyles(Jl, a, o) : e.generateAndInjectStyles(t, a, o)
							}(o, i, f),
							g = t,
							v = h.$as || n.$as || h.as || n.as || d,
							b = ru(v),
							x = h !== n ? $l({}, n, {}, h) : n,
							y = {};
						for (var w in x) "$" !== w[0] && "as" !== w && ("forwardedAs" === w ? y.as = x[w] : (c ? c(w, ql, v) : !b || ql(w)) && (y[w] = x[w]));
						return n.style && h.style !== n.style && (y.style = $l({}, n.style, {}, h.style)), y.className = Array.prototype.concat(l, u, m !== u ? m : null, n.className, h.className)
							.filter(Boolean)
							.join(" "), y.ref = g, (0, r.createElement)(v, y)
					}(g, e, n, b)
				};
			return x.displayName = d, (g = r.forwardRef(x))
				.attrs = h, g.componentStyle = v, g.displayName = d, g.shouldForwardProp = m, g.foldedComponentIds = i ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Zl, g.styledComponentId = f, g.target = i ? e.target : e, g.withComponent = function(e) {
					var r = n.componentId,
						i = function(e, n) {
							if (null == e) return {};
							var t, r, i = {},
								a = Object.keys(e);
							for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (i[t] = e[t]);
							return i
						}(n, ["componentId"]),
						a = r && r + "-" + (ru(e) ? e : nu(nc(e)));
					return uu(e, $l({}, i, {
						attrs: h,
						componentId: a
					}), t)
				}, Object.defineProperty(g, "defaultProps", {
					get: function() {
						return this._foldedDefaultProps
					},
					set: function(n) {
						this._foldedDefaultProps = i ? su({}, e.defaultProps, n) : n
					}
				}), Object.defineProperty(g, "toString", {
					value: function() {
						return "." + g.styledComponentId
					}
				}), a && p()(g, e, {
					attrs: !0,
					componentStyle: !0,
					displayName: !0,
					foldedComponentIds: !0,
					shouldForwardProp: !0,
					styledComponentId: !0,
					target: !0,
					withComponent: !0
				}), g
		}
		var du, pu = function(e) {
			return function e(n, t, r) {
				if (void 0 === r && (r = Jl), !(0, f.isValidElementType)(t)) return oc(1, String(t));
				var i = function() {
					return n(t, r, Zc.apply(void 0, arguments))
				};
				return i.withConfig = function(i) {
					return e(n, t, $l({}, r, {}, i))
				}, i.attrs = function(i) {
					return e(n, t, $l({}, r, {
						attrs: Array.prototype.concat(r.attrs, i)
							.filter(Boolean)
					}))
				}, i
			}(uu, e)
		};

		function fu(e) {
			for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
			var i = Zc.apply(void 0, [e].concat(t))
				.join(""),
				a = tu(i);
			return new Wc(a, i)
		} ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach((function(e) {
				pu[e] = pu(e)
			})), du = function(e, n) {
				this.rules = e, this.componentId = n, this.isStatic = _c(e), Ec.registerId(this.componentId + 1)
			}.prototype, du.createStyles = function(e, n, t, r) {
				var i = r(Kc(this.rules, n, t, r)
						.join(""), ""),
					a = this.componentId + e;
				t.insertRules(a, a, i)
			}, du.removeStyles = function(e, n) {
				n.clearRules(this.componentId + e)
			}, du.renderStyles = function(e, n, t, r) {
				e > 2 && Ec.registerId(this.componentId + e), this.removeStyles(e, t), this.createStyles(e, n, t, r)
			},
			function() {
				var e = function() {
					var e = this;
					this._emitSheetCSS = function() {
						var n = e.instance.toString();
						if (!n) return "";
						var t = bc();
						return "<style " + [t && 'nonce="' + t + '"', rc + '="true"', 'data-styled-version="5.3.11"'].filter(Boolean)
							.join(" ") + ">" + n + "</style>"
					}, this.getStyleTags = function() {
						return e.sealed ? oc(2) : e._emitSheetCSS()
					}, this.getStyleElement = function() {
						var n;
						if (e.sealed) return oc(2);
						var t = ((n = {})[rc] = "", n["data-styled-version"] = "5.3.11", n.dangerouslySetInnerHTML = {
								__html: e.instance.toString()
							}, n),
							i = bc();
						return i && (t.nonce = i), [r.createElement("style", $l({}, t, {
							key: "sc-0-0"
						}))]
					}, this.seal = function() {
						e.sealed = !0
					}, this.instance = new Ec({
						isServer: !0
					}), this.sealed = !1
				}.prototype;
				e.collectStyles = function(e) {
					return this.sealed ? oc(2) : r.createElement(Bc, {
						sheet: this.instance
					}, e)
				}, e.interleaveWithNodeStream = function(e) {
					return oc(3)
				}
			}();
		const hu = pu;
		var mu, gu, vu = function(e, n) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", {
					value: n
				}) : e.raw = n, e
			},
			bu = 242.776657104492,
			xu = fu(mu || (mu = vu(["\n  12.5% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  43.75% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  100% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n"], ["\n  12.5% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  43.75% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  100% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n"])), .14 * bu, bu, .11 * bu, .35 * bu, bu, .35 * bu, .01 * bu, bu, .99 * bu);
		hu.path(gu || (gu = vu(["\n  stroke-dasharray: ", "px, ", ";\n  stroke-dashoffset: 0;\n  animation: ", " ", "s linear infinite;\n"], ["\n  stroke-dasharray: ", "px, ", ";\n  stroke-dashoffset: 0;\n  animation: ", " ", "s linear infinite;\n"])), .01 * bu, bu, xu, 1.6);
		var yu, wu, ju, ku, Nu, Eu = function(e, n) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", {
					value: n
				}) : e.raw = n, e
			},
			Su = fu(yu || (yu = Eu(["\n to {\n    transform: rotate(360deg);\n  }\n"], ["\n to {\n    transform: rotate(360deg);\n  }\n"])));
		hu.svg(wu || (wu = Eu(["\n  animation: ", " 0.75s steps(12, end) infinite;\n  animation-duration: ", "s;\n"], ["\n  animation: ", " 0.75s steps(12, end) infinite;\n  animation-duration: ", "s;\n"])), Su, (ku = "speed", Nu = "0.75", function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			if (void 0 !== e[ku]) return e[ku];
			if (ku && ku.indexOf(".") > 0) {
				for (var n = ku.split("."), t = n.length, r = e[n[0]], i = 1; null != r && i < t;) r = r[n[i]], i += 1;
				if (void 0 !== r) return r
			}
			return Nu
		})), hu.polyline(ju || (ju = Eu(["\n  stroke-width: ", "px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"], ["\n  stroke-width: ", "px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])), (function(e) {
			return e.width
		}));
		var Cu, Tu, Ou, Au = function(e, n) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", {
					value: n
				}) : e.raw = n, e
			},
			_u = fu(Cu || (Cu = Au(["\n to {\n    stroke-dashoffset: 136;\n  }\n"], ["\n to {\n    stroke-dashoffset: 136;\n  }\n"])));
		hu.polygon(Tu || (Tu = Au(["\n  stroke-dasharray: 17;\n  animation: ", " 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"], ["\n  stroke-dasharray: 17;\n  animation: ", " 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])), _u), hu.svg(Ou || (Ou = Au(["\n  transform-origin: 50% 65%;\n"], ["\n  transform-origin: 50% 65%;\n"])));
		var Ru = function() {
				return Ru = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, Ru.apply(this, arguments)
			},
			Iu = ["As a general rule of thumb, a person can survive without water for about 3 days. So, keep your water supply stable otherwise your colony will die", "You have to setup basic food and water supply before you can meet first colonists", "The International Space Station completes one full orbit around the Earth every 90 minutes. As a result, its crew observes the sunrise every 90 minutes. Each day, the people on board the ISS witness 16 sunrises and 16 sunsets.", "The magnetic poles of the Earth are in motion. For example, over the past hundred years, the magnetic pole in the Southern Hemisphere has shifted by nearly 900 kilometers and is currently located in the Southern Ocean.", "The length of blood vessels in our body is approximately 100,000 kilometers.", "Neutron stars are known for their incredibly high density. The density of a neutron star is typically around 10^17 to 10^18 kilograms per cubic meter. To put this into perspective, it is estimated that a teaspoonful of neutron star material would weigh about as much as a mountain on Earth.", "The first confirmed discovery of an exoplanet (a planet outside our solar system) was announced in 1992. The exoplanet, named PSR B1257+12 b, was found orbiting a pulsar, a rapidly rotating neutron star. Since then, thousands of exoplanets have been discovered using various methods, including radial velocity measurements, transit observations, and direct imaging.", "One fascinating fact about the universe is that it is constantly expanding. The observations made by astronomers and physicists over the past century have shown that galaxies are moving away from each other in all directions. This discovery led to the development of the Big Bang theory, which suggests that the universe originated from a hot and dense state around 13.8 billion years ago.", "Black holes are incredibly dense regions of spacetime with gravity so strong that nothing, not even light, can escape their gravitational pull. They form when massive stars collapse under their own gravity at the end of their life cycles.", "Universe is composed mostly of dark matter and dark energy, which together make up about 95% of the total energy content of the cosmos.", "Dark matter is a hypothetical form of matter that does not interact with light or other forms of electromagnetic radiation, making it invisible to our telescopes. Its presence is inferred from its gravitational effects on visible matter and the large-scale structure of the universe.", "The Milky Way is estimated to be home to over 100 billion stars. This vast number of stars makes the Milky Way a typical spiral galaxy, with a relatively average size compared to other galaxies in the universe.", "The closest star to the Sun is Proxima Centauri. It is a small, low-mass star located in the constellation of Centaurus, approximately 4.24 light-years away from us.", 'Distances between stars used to be incredibly huge. For example, the distance to Proxima Centauri from Earth is approximately 39.7 trillion kilometers or 4.24 light-years. That\'s why human very unlikely visit other star systems in near future. But its not the case once you are playing "The Ignited Space"', "Earth is the densest planet in our solar system. With an average density of approximately 5.5 grams per cubic centimeter, Earth is denser than any other planet in our neighborhood.", "Earth is the only planet known to have plate tectonics. Plate tectonics refers to the movement and interaction of large rigid plates that make up the Earth's surface.", "Earth's rotation is gradually slowing down due to the tidal forces exerted by the Moon.", "Earth is the only planet known to have a functioning ozone layer that protects us from ionizing UV-radiation", "Venus has the longest rotation period of any planet in our solar system, taking longer to rotate on its axis than it does to orbit the Sun.", "Venus has a thick and dense atmosphere composed mainly of carbon dioxide, with traces of other gases such as nitrogen and sulfur dioxide.", 'Venus has the longest known volcanic mountain range in our solar system, located on the surface of Venus is a massive volcanic mountain range called the "Maxwell Montes." It stretches for about 1,300 kilometers (800 miles) across Venus\'s highland region known as Ishtar Terra.', "The Moon is tidally locked with Earth, which means that it always shows the same face towards us.", "With a diameter of approximately 3,474 kilometers (2,159 miles), the Moon is the fifth-largest natural satellite orbiting a planet in our solar system. It is surpassed in size by Ganymede (a moon of Jupiter), Titan (a moon of Saturn), Callisto (another moon of Jupiter), and Io (yet another moon of Jupiter).", "Mars has the largest volcano in the solar system, called Olympus Mons. It measures approximately 22 kilometers (13.6 miles) in height and has a diameter of about 550 kilometers (342 miles).", "Mars experiences powerful and massive dust storms that can engulf the entire planet. These storms can last for weeks or even months and cover vast regions, obscuring the Martian surface from view.", "Mars has the largest canyon in the solar system, known as Valles Marineris, that stretches approximately 4,000 kilometers (2,500 miles) in length, making it the largest known canyon in the solar system. To put it into perspective, Valles Marineris is more than 10 times longer and five times deeper than the Grand Canyon in the United States.", "The Sun is so large that it accounts for more than 99% of the mass in our entire solar system.", "The Sun is not a solid object, but rather a giant, churning ball of hot plasma.", "Light travels at a speed of approximately 299,792 kilometers per second (186,282 miles per second) in a vacuum. Despite this incredible speed, it still takes over 8 minutes for light from the Sun to reach us on Earth due to the vast distance between the two.", "The Sun's magnetic field is a complex and dynamic system that undergoes a complete reversal of its polarity approximately every 11 years. This phenomenon is known as the solar magnetic field reversal or solar magnetic cycle.", '51 Pegasi b, also called "Dimidium," was discovered in 1995 and is located approximately 50 light-years away from Earth in the constellation Pegasus. It was the first exoplanet discovered orbiting a main-sequence star similar to our Sun.', 'The most common type of exoplanets discovered so far are known as "super-Earths - exoplanets that have a mass and size larger than Earth but smaller than that of gas giants like Neptune or Jupiter. They typically range in size from about 1 to 10 times the mass of Earth.', "The first exoplanet discovered in the habitable zone of its star is called Gliese 581d. It was discovered in 2007 and is located approximately 20.3 light-years away from Earth in the constellation Libra. It orbits the red dwarf star Gliese 581, which is smaller and cooler than our Sun.", 'The first exoplanet discovered around a Sun-like star in the "habitable zone" with Earth-like conditions is called Kepler-452b.', "When we think of radiation, we often associate it with electromagnetic waves like X-rays, gamma rays, or visible light. However, radiation can also refer to particles emitted during certain radioactive processes.", "During the Big Bang, high-energy radiation was generated as the universe rapidly expanded and cooled. This radiation, known as the cosmic microwave background (CMB), can still be detected today and is considered one of the strongest pieces of evidence supporting the Big Bang theory.", 'The Earth\'s climate has undergone natural fluctuations throughout its history, including periods of extreme cold called "Snowball Earth" episodes, when whole planet was covered by ice.', "The human body is composed of trillions of cells, but only about 10% of those cells are actually human. Other 90% belongs to viruses, fungi, and other microscopic organisms, collectively known as the human microbiota.", "The human brain is one of the most energy-demanding organs in the body, consuming about 20% of the body's total energy."],
			Pu = function() {
				var n = (0, r.useState)(-1),
					t = n[0],
					i = n[1];
				return t < 0 && i(Math.floor(Math.random() * Iu.length)), (0, e.jsxs)("div", Ru({
					className: "preloader"
				}, {
					children: [(0, e.jsx)("div", Ru({
						className: "logo-container"
					}, {
						children: (0, e.jsx)("img", {
							src: Ul()
						})
					})), (0, e.jsx)("div", Ru({
						className: "loading-container"
					}, {
						children: (0, e.jsxs)("div", Ru({
							className: "loading-inner loading-text"
						}, {
							children: [(0, e.jsx)(Bl, {
								height: "50",
								width: "50",
								color: "#fff",
								wrapperStyle: {},
								wrapperClass: "",
								visible: !0,
								outerCircleColor: "",
								innerCircleColor: "",
								barColor: "",
								ariaLabel: "circles-with-bar-loading"
							}), (0, e.jsx)("span", {
								children: "Loading..."
							})]
						}))
					})), (0, e.jsx)("div", Ru({
						className: "loading-container"
					}, {
						children: (0, e.jsxs)("div", Ru({
							className: "did-you-knew"
						}, {
							children: [(0, e.jsx)("span", Ru({
								className: "title"
							}, {
								children: "Did you know?"
							})), (0, e.jsx)("span", {
								children: Iu[t]
							})]
						}))
					}))]
				}))
			},
			Lu = function(e) {
				return e.game.queueItems
			},
			Mu = function() {
				return Mu = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, Mu.apply(this, arguments)
			},
			Du = function(n) {
				var t = n.queue,
					i = (0, r.useState)(""),
					a = i[0],
					o = i[1],
					s = (0, r.useState)(""),
					l = s[0],
					c = s[1],
					u = function(e, n) {
						Ao.moveQueue.send({
							index: e,
							by: n
						})
					};
				return (0, e.jsxs)("div", Mu({
					className: "queueWrap"
				}, {
					children: [(0, e.jsxs)("p", {
						children: ["Items: ", t.slots, " of ", t.maxSlots]
					}), (0, e.jsx)("div", Mu({
						className: "add-to-queue"
					}, {
						children: t.selection.isAvailable ? (0, e.jsxs)("div", Mu({
							className: "selection-area"
						}, {
							children: [(0, e.jsx)("div", Mu({
								className: "select-scope"
							}, {
								children: (0, e.jsxs)("select", Mu({
									onChange: function(e) {
										return o(e.target.value)
									}
								}, {
									children: [(0, e.jsx)("option", Mu({
											value: ""
										}, {
											children: "None"
										})), Object.values(et)
										.map((function(n) {
											return (0, e.jsx)("option", Mu({
												value: n,
												selected: a === n
											}, {
												children: n
											}))
										}))
									]
								}))
							})), (0, e.jsx)("div", Mu({
								className: "select-item"
							}, {
								children: a ? (0, e.jsxs)("select", Mu({
									onChange: function(e) {
										return c(e.target.value)
									}
								}, {
									children: [(0, e.jsx)("option", Mu({
											value: ""
										}, {
											children: "None"
										})), Object.values(t.selection.choices[a])
										.map((function(n) {
											return (0, e.jsx)("option", Mu({
												value: n.id,
												selected: l === n.id
											}, {
												children: n.name
											}))
										}))
									]
								})) : (0, e.jsx)("p", {
									children: "Select scope first"
								})
							})), (0, e.jsx)("div", Mu({
								className: "add-block"
							}, {
								children: a && l ? (0, e.jsx)("button", Mu({
									className: "add-to-queue",
									onClick: function() {
										l && a && Ao.addToQueue.send({
											scope: a,
											id: l
										})
									}
								}, {
									children: "Add to queue"
								})) : null
							}))]
						})) : (0, e.jsx)("p", {
							children: "Queue is full"
						})
					})), (0, e.jsxs)("div", Mu({
						className: "queue-list"
					}, {
						children: [(0, e.jsx)("div", Mu({
							className: "queue-utils"
						}, {
							children: (0, e.jsx)("span", Mu({
								onClick: function() {
									Ao.sortByEta.send()
								},
								className: "clickable-highlight"
							}, {
								children: "Sort by ETA"
							}))
						})), t.queue.map((function(n, t) {
							return (0, e.jsxs)("div", Mu({
								className: "queue-item"
							}, {
								children: [(0, e.jsxs)("p", {
									children: [n.scope, " : ", n.meta.name]
								}), (0, e.jsx)("span", {
									children: to(n.meta.etaNum)
								}), (0, e.jsxs)("div", Mu({
									className: "move-controls"
								}, {
									children: [n.isUpAvailable ? (0, e.jsx)("span", Mu({
										className: "move up",
										onClick: function() {
											return u(t, -1)
										}
									}, {
										children: (0, e.jsx)(e.Fragment, {
											children: "↑"
										})
									})) : null, n.isDownAvailable ? (0, e.jsx)("span", Mu({
										className: "move down",
										onClick: function() {
											return u(t, 1)
										}
									}, {
										children: "↓"
									})) : null]
								})), (0, e.jsx)("span", Mu({
									className: "close",
									onClick: function() {
										return function(e) {
											e >= 0 && Ao.deleteFromQueue.send({
												index: e
											})
										}(t)
									}
								}, {
									children: "X"
								}))]
							}))
						}))]
					}))]
				}))
			},
			Uu = function() {
				var n = k(Lu);
				return (0, e.jsx)(Du, {
					queue: n
				})
			},
			Fu = function(e) {
				return e.game.eventLogs
			},
			zu = {
				clear: Nn("[event-logs] clear", (function(e) {
					return e
				})),
				setFilter: Nn("[event-logs] set filter", (function(e) {
					return e
				}))
			},
			Hu = function() {
				return Hu = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, Hu.apply(this, arguments)
			},
			Bu = function(n) {
				var t = n.events;
				return (0, e.jsxs)("div", Hu({
					className: "events-wrapper"
				}, {
					children: [(0, e.jsx)(La, Hu({
						id: "events-filters",
						label: "Events Filters",
						className: "filters",
						isCollapsable: !0,
						isCollapsed: !0
					}, {
						children: Object.entries(t.filters)
							.map((function(n, t) {
								var r = n[0],
									i = n[1];
								return (0, e.jsx)("div", Hu({
									className: "filter-entry"
								}, {
									children: (0, e.jsxs)("label", Hu({
										htmlFor: "filter-".concat(t)
									}, {
										children: [(0, e.jsx)("input", {
											id: "filter-".concat(t),
											type: "checkbox",
											checked: i,
											onChange: function() {
												return function(e, n) {
													zu.setFilter.send({
														scope: e,
														flag: n
													})
												}(r, !i)
											}
										}), r]
									}))
								}))
							}))
					})), t.events.map((function(n) {
						return (0, e.jsxs)("div", Hu({
							className: "event-item ".concat(n.scope)
						}, {
							children: [(0, e.jsx)("span", Hu({
								className: "time"
							}, {
								children: n.date
							})), (0, e.jsxs)("span", Hu({
								className: "line"
							}, {
								children: [n.time, " ", n.message]
							}))]
						}))
					}))]
				}))
			},
			Wu = function() {
				var n = k(Fu);
				return (0, e.jsx)(Bu, {
					events: n
				})
			},
			Gu = function() {
				return Gu = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, Gu.apply(this, arguments)
			},
			Yu = function(n) {
				switch (n.tab) {
					case "Queue":
						return (0, e.jsx)(Uu, {});
					case "Events":
						return (0, e.jsx)(Wu, {});
					default:
						return (0, e.jsx)("p", {
							children: "Not implemented"
						})
				}
			},
			Xu = function() {
				var n = gs("right-panel", !0),
					t = n[0],
					r = n[1],
					i = gs("right-panel-tab", "Queue"),
					a = i[0],
					o = i[1];
				return (0, e.jsxs)("div", Gu({
					className: "right-panel ".concat(t ? "expanded" : "collapsed")
				}, {
					children: [(0, e.jsx)("span", Gu({
						className: "expand-collapse-panel",
						onClick: function() {
							return r(!t)
						}
					}, {
						children: t ? ">" : "<"
					})), (0, e.jsxs)("div", Gu({
						className: "submenu"
					}, {
						children: [(0, e.jsx)("div", Gu({
							className: "submenu-item ".concat("Queue" === a ? "selected" : ""),
							onClick: function() {
								return o("Queue")
							}
						}, {
							children: "Queue"
						})), (0, e.jsx)("div", Gu({
							className: "submenu-item ".concat("Events" === a ? "selected" : ""),
							onClick: function() {
								return o("Events")
							}
						}, {
							children: "Events"
						}))]
					})), (0, e.jsx)("div", Gu({
						className: "inner-scrollable planet"
					}, {
						children: (0, e.jsx)($o(), {
							children: (0, e.jsx)("div", Gu({
								className: "inner"
							}, {
								children: (0, e.jsx)(Yu, {
									tab: a
								})
							}))
						})
					}))]
				}))
			},
			Vu = function() {
				return Vu = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, Vu.apply(this, arguments)
			},
			qu = function() {
				var n = (0, r.useState)(!1),
					t = n[0],
					i = n[1],
					a = k(Aa),
					o = k(Go),
					s = k(Yo);
				return (0, r.useEffect)((function() {
					return document.body.classList.add("".concat(s, "-theme")),
						function() {
							document.body.classList.remove("".concat(s, "-theme"))
						}
				}), [s]), (0, e.jsxs)("div", Vu({
					className: "page ".concat(s, "-theme ")
						.concat(o ? "animated" : "")
				}, {
					children: [a ? (0, e.jsx)(Pu, {}) : null, (0, e.jsx)(go, {}), (0, e.jsxs)("div", Vu({
						className: "game"
					}, {
						children: [(0, e.jsx)("div", Vu({
							className: "show-hide-resources"
						}, {
							children: (0, e.jsx)("span", Vu({
								className: "show-hide popup-link",
								onClick: function() {
									return i(!t)
								}
							}, {
								children: t ? "Show Resources" : "Hide resources"
							}))
						})), (0, e.jsx)("div", Vu({
							className: "sidebar"
						}, {
							children: (0, e.jsx)(os, {
								isHidden: t
							})
						})), (0, e.jsx)("div", Vu({
							className: "content"
						}, {
							children: (0, e.jsx)(Pl, {})
						})), (0, e.jsx)(Xu, {})]
					}))]
				}))
			},
			$u = function() {
				return $u = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}, $u.apply(this, arguments)
			};
		Ft(), (0, n.s)(document.getElementById("root"))
			.render((0, e.jsx)((function() {
				return (0, e.jsx)(u, $u({
					store: Pt
				}, {
					children: (0, e.jsx)(qu, {})
				}))
			}), {}))
	})()
})();