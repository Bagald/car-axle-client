;(() => {
    var __webpack_modules__ = {
            9537: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => r })
                var o = n(8081),
                    i = n.n(o),
                    a = n(3645),
                    s = n.n(a)()(i())
                s.push([
                    e.id,
                    '.cac__button {\n  width: 90% !important;\n  line-height: 3vh;\n  background: rgba(0, 0, 0, 0.6) !important;\n  color: #fff !important;\n  text-align: left !important;\n  font-size: 1.5vw !important;\n  padding-left: 2% !important;\n  display: inline-flex !important;\n  justify-content: space-between !important;\n  align-items: center !important;\n  margin-top: 2% !important;\n  border: none !important;\n  border-radius: 15px !important;\n  transition: 1s !important;\n  height: auto !important;\n  padding-top: 1.5%;\n  padding-bottom: 1.5%;\n}\n.cac__button:hover {\n  transform: translateX(5px) !important;\n}\n.cac__button:last-child {\n  margin-bottom: 5% !important;\n}\n.cac__button p {\n  font-size: 1vw;\n  color: #fff;\n  line-height: 1vh;\n  margin: 1% 0;\n}\n.cac__button--enabled {\n  box-shadow: inset 70vw 0 0px 0 #e0115f !important;\n}\n.cac__button__menuicon {\n  margin-right: 2% !important;\n  transform: rotate(-90deg) !important;\n  transition: 0.5s !important;\n  border-radius: 50% !important;\n  width: auto;\n  height: auto;\n}\n.cac__button__menuicon--enabled {\n  transform: rotate(0deg) !important;\n}\n.cac__button__menu-container {\n  width: 85% !important;\n  line-height: 0vh !important;\n  background-color: rgba(0, 0, 0, 0.6) !important;\n  text-align: left !important;\n  font-size: 1.5vw !important;\n  border: none !important;\n  border-radius: 15px !important;\n  overflow: hidden !important;\n  margin-left: 5% !important;\n  margin-top: 0% !important;\n  padding: 2.5% !important;\n  transform-origin: top !important;\n  display: none !important;\n  flex-direction: column !important;\n}\n.cac__button__menu-container--enabled {\n  margin-top: 2% !important;\n  display: flex !important;\n}\n.cac__button__menu-container__option-container {\n  display: flex !important;\n  width: 100% !important;\n  flex-direction: column !important;\n  align-items: flex-start !important;\n}\n.cac__button__menu-container__option-container__title {\n  margin-bottom: 2% !important;\n}\n.cac__button__menu-container__option-container__checkbox {\n  width: 1.25vw !important;\n  height: 1.25vw !important;\n  border-radius: 50% !important;\n  border: 1px solid #e0115f !important;\n  text-align: left !important;\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n}\n.cac__button__menu-container__option-container__text {\n  border-radius: 5px !important;\n  height: auto !important;\n}\n.cac__button__menu-container__option-container__text:focus {\n  outline: none !important;\n  border: solid 2px #e0115f !important;\n}\n',
                    '',
                ])
                const r = s
            },
            5889: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => r })
                var o = n(8081),
                    i = n.n(o),
                    a = n(3645),
                    s = n.n(a)()(i())
                s.push([
                    e.id,
                    '.cac__notification {\n  width: 40%;\n  height: 40%;\n  border-radius: 20px;\n  box-shadow: 0px 0px 50px 10px black;\n  background-color: #e0115f;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.cac__notification__header {\n  font-size: 2.75vmin;\n  margin-left: 2vw;\n  margin-right: 2vw;\n}\n.cac__notification__body {\n  font-size: 2.25vmin;\n  margin-left: 2vw;\n  margin-right: 2vw;\n}\n.cac__notification__button {\n  border-radius: 10px;\n  width: 50%;\n  padding: 2%;\n  right: 0%;\n  bottom: 3vh;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6);\n  border: none;\n  margin-left: 2vw;\n  margin-right: 2vw;\n  font-size: 1.5vw;\n  cursor: pointer;\n}\n.cac__notification__dismiss {\n  left: 0%;\n  font-size: 1vw;\n  width: 30%;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n',
                    '',
                ])
                const r = s
            },
            7622: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => r })
                var o = n(8081),
                    i = n.n(o),
                    a = n(3645),
                    s = n.n(a)()(i())
                s.push([
                    e.id,
                    '@keyframes introanim {\n  0% {\n    transform: translateX(-50%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n@keyframes slidein {\n  0% {\n    transform: translateX(-20%);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n.cac__section {\n  width: 86% !important;\n  height: 6% !important;\n  background-color: transparent !important;\n  text-align: left !important;\n  border-radius: 2vw !important;\n  position: relative;\n  display: flex !important;\n  align-items: center !important;\n  font-size: 1.5vw !important;\n  margin-top: 5% !important;\n  transition: 0.5s !important;\n  cursor: pointer !important;\n  animation: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) introanim forwards;\n  animation: slidein 1s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.cac__section:hover {\n  transform: translateX(5px) !important;\n}\n.cac__section svg {\n  margin-left: 1% !important;\n  margin-right: 5% !important;\n}\n.cac__section__content {\n  width: 100% !important;\n  height: 100% !important;\n  display: none;\n  position: absolute !important;\n  align-items: center !important;\n  text-align: center !important;\n  overflow-y: scroll !important;\n}\n.cac__section__content::-webkit-scrollbar {\n  width: 7px !important;\n}\n.cac__section__content::-webkit-scrollbar-track {\n  background-color: transparent !important;\n}\n.cac__section__content::-webkit-scrollbar-thumb {\n  background-color: #e0115f !important;\n  border-radius: 7px !important;\n}\n.cac__section__title {\n  font-weight: 600 !important;\n  font-size: 2.25vw !important;\n  line-height: 2.25vw !important;\n  margin-left: 5% !important;\n  margin-top: 3vh;\n  text-align: left !important;\n  width: 90% !important;\n}\n.cac__section__description {\n  font-weight: 400 !important;\n  font-size: 1.5vw !important;\n  line-height: 1.5vw !important;\n  text-align: left !important;\n  margin-left: 5% !important;\n  margin-bottom: 3% !important;\n  width: 90% !important;\n}\n',
                    '',
                ])
                const r = s
            },
            5156: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => r })
                var o = n(8081),
                    i = n.n(o),
                    a = n(3645),
                    s = n.n(a)()(i())
                s.push([
                    e.id,
                    '.cac__suggestions__input {\n  width: 90% !important;\n  line-height: 6vh !important;\n  background: rgba(0, 0, 0, 0.6) !important;\n  color: #fff !important;\n  text-align: left !important;\n  font-size: 1.5vw !important;\n  padding-left: 2% !important;\n  display: inline-flex !important;\n  justify-content: space-between !important;\n  align-items: center !important;\n  margin-bottom: 2% !important;\n  border: none !important;\n  border-radius: 15px !important;\n  transition: 1s !important;\n  height: auto !important;\n}\n.cac__suggestions__title {\n  margin-left: 5% !important;\n  font-size: 1.5vw !important;\n  color: #fff !important;\n  font-weight: bold !important;\n  text-align: left !important;\n}\n.cac__suggestions__submit {\n  font-size: 1.5vw !important;\n  color: #fff !important;\n  font-weight: bold !important;\n  text-align: right !important;\n  margin-bottom: 2% !important;\n  display: inline-flex !important;\n  border-radius: 15px !important;\n  background: #e0115f !important;\n  padding-left: 2% !important;\n  width: 90%;\n  line-height: 6vh;\n}\n',
                    '',
                ])
                const r = s
            },
            1451: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => r })
                var o = n(8081),
                    i = n.n(o),
                    a = n(3645),
                    s = n.n(a)()(i())
                s.push([
                    e.id,
                    '.cac__version__display {\n  width: 90% !important;\n  line-height: auto !important;\n  color: black !important;\n  padding-bottom: 3%;\n  background-size: cover !important;\n  text-align: left !important;\n  font-size: 1.5vw !important;\n  padding-left: 2% !important;\n  display: inline-flex !important;\n  justify-content: space-between !important;\n  margin-top: 2% !important;\n  border: none !important;\n  border-radius: 15px !important;\n  height: auto !important;\n  flex-direction: column;\n}\n',
                    '',
                ])
                const r = s
            },
            5089: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => r })
                var o = n(8081),
                    i = n.n(o),
                    a = n(3645),
                    s = n.n(a)()(i())
                s.push([
                    e.id,
                    '#custom_cursor_large {\n  width: 30px;\n  height: 30px;\n  background-color: white;\n  border-radius: 50%;\n  position: fixed;\n  pointer-events: none;\n  z-index: 100000000000000000000000000000000000000000000000000000000000000000000000000000000000;\n}\n#custom_cursor_small {\n  width: 15px;\n  height: 15px;\n  background-color: white;\n  border-radius: 50%;\n  position: fixed;\n  pointer-events: none;\n  z-index: 1000000000000000000000000000000000000000000000000000000000000000000000000000000000;\n}\n',
                    '',
                ])
                const r = s
            },
            7356: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => r })
                var o = n(8081),
                    i = n.n(o),
                    a = n(3645),
                    s = n.n(a)()(i())
                s.push([
                    e.id,
                    '.cac__game__button {\n  width: 90% !important;\n  line-height: 3vh;\n  background: rgba(0, 0, 0, 0.6) !important;\n  color: #fff !important;\n  text-align: left !important;\n  font-size: 1.5vw !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  margin-top: 2% !important;\n  border: none !important;\n  border-radius: 20px !important;\n  padding: 0;\n  transition: 1s !important;\n  height: 10vh !important;\n}\n.cac__game__button:active {\n  background: #e0115f !important;\n}\n.cac__game__title {\n  position: absolute;\n  left: 5%;\n  color: #fff;\n  margin-left: 2%;\n  font-size: 1.6vw;\n  line-height: 0px;\n}\n',
                    '',
                ])
                const r = s
            },
            9996: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => r })
                var o = n(8081),
                    i = n.n(o),
                    a = n(3645),
                    s = n.n(a)()(i())
                s.push([
                    e.id,
                    ".cac__console__container {\n  display: inline-flex;\n  flex-direction: column;\n  width: 90%;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 15px;\n  height: 70%;\n  align-items: end;\n  text-align: left;\n  margin-bottom: 5%;\n}\n.cac__console__output {\n  width: 100%;\n  height: 92%;\n  border: none;\n  outline: none;\n  color: #fff;\n  text-align: left;\n  font-size: 1.5vw;\n  padding-left: 1vw;\n  align-items: flex-start;\n  flex-direction: column;\n  justify-content: flex-end;\n  display: flex;\n  font-family: 'Roboto Mono', monospace !important;\n  margin-bottom: 1%;\n  overflow-y: auto;\n}\n.cac__console__log {\n  margin-left: 2%;\n  user-select: text;\n  font-family: 'Roboto Mono', monospace !important;\n  margin-right: 2%;\n  width: 95%;\n  padding: 0 0.5%;\n  margin-top: 1%;\n  overflow-wrap: anywhere;\n}\n.cac__console__error {\n  color: red !important;\n  background-color: rgba(255, 0, 0, 0.1);\n  border-radius: 8px;\n  margin-left: 2%;\n  margin-right: 2%;\n  width: 95%;\n  padding: 0 0.5%;\n  margin-top: 1%;\n  font-family: 'Roboto Mono', monospace !important;\n  user-select: text;\n  overflow-wrap: anywhere;\n}\n.cac__console__input {\n  width: 100%;\n  height: 7%;\n  background-color: #e0115f;\n  border-radius: 15px;\n  border: none;\n  outline: none;\n  color: #fff;\n  font-size: 1vw;\n  padding: 1rem;\n  align-self: flex-end;\n  font-family: 'Roboto Mono', monospace !important;\n  resize: none;\n  overflow: auto;\n}\n.cac__console__input::placeholder {\n  color: #fff;\n  opacity: 0.5;\n}\n.cac__console__input ::before {\n  content: '>';\n  color: #fff;\n  font-size: 1.5vw;\n  margin-right: 1%;\n}\n",
                    '',
                ])
                const r = s
            },
            1589: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => r })
                var o = n(8081),
                    i = n.n(o),
                    a = n(3645),
                    s = n.n(a)()(i())
                s.push([
                    e.id,
                    '.cac__pocketbrowser__input {\n  width: 90% !important;\n  line-height: 6vh !important;\n  background: rgba(0, 0, 0, 0.6) !important;\n  color: #fff !important;\n  text-align: left !important;\n  font-size: 1.5vw !important;\n  padding-left: 2% !important;\n  display: inline-flex !important;\n  justify-content: space-between !important;\n  align-items: center !important;\n  margin-top: 2% !important;\n  border: none !important;\n  border-radius: 15px !important;\n  transition: 1s !important;\n  height: auto !important;\n}\n',
                    '',
                ])
                const r = s
            },
            8952: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => r })
                var o = n(8081),
                    i = n.n(o),
                    a = n(3645),
                    s = n.n(a)()(i())
                s.push([
                    e.id,
                    '.cac__suggestions__input {\n  width: 90% !important;\n  line-height: 6vh !important;\n  background: rgba(0, 0, 0, 0.6) !important;\n  color: #fff !important;\n  text-align: left !important;\n  font-size: 1.5vw !important;\n  padding-left: 2% !important;\n  display: inline-flex !important;\n  justify-content: space-between !important;\n  align-items: center !important;\n  margin-bottom: 2% !important;\n  border: none !important;\n  border-radius: 15px !important;\n  transition: 1s !important;\n  height: auto !important;\n}\n.cac__suggestions__title {\n  margin-left: 5% !important;\n  font-size: 1.5vw !important;\n  color: #fff !important;\n  font-weight: bold !important;\n  text-align: left !important;\n}\n.cac__suggestions__submit {\n  font-size: 1.5vw !important;\n  color: #fff !important;\n  font-weight: bold !important;\n  text-align: right !important;\n  margin-bottom: 2% !important;\n  display: inline-flex !important;\n  border-radius: 15px !important;\n  background: #e0115f !important;\n  padding-left: 2% !important;\n  width: 90%;\n  line-height: 6vh;\n}\n',
                    '',
                ])
                const r = s
            },
            3796: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => r })
                var o = n(8081),
                    i = n.n(o),
                    a = n(3645),
                    s = n.n(a)()(i())
                s.push([
                    e.id,
                    '.cac__tabbar__button {\n  width: 3vw;\n  margin: 0px;\n  height: 3vw;\n  background: transparent !important;\n  border: none;\n  border-radius: 50%;\n  transition: 0.2s;\n}\n.cac__tabbar__button:last-child {\n  margin-right: 10px;\n}\n.cac__tabbar__button:active svg {\n  transform: scale(0.8) rotate(10deg);\n}\n.cac__tabbar__button:hover p {\n  opacity: 1;\n  text-align: center;\n}\n.cac__tabbar__button svg {\n  width: 70%;\n  transition: 0.6s;\n  height: 70%;\n  margin: 0px;\n  padding: 0px;\n}\n.cac__tabbar__button p {\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 28vw;\n  top: 0.4vw;\n  right: 7vw;\n  color: #fff;\n  transition: 0.3s;\n  font-size: 1vw;\n}\n',
                    '',
                ])
                const r = s
            },
            3675: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => r })
                var o = n(8081),
                    i = n.n(o),
                    a = n(3645),
                    s = n.n(a)()(i())
                s.push([
                    e.id,
                    '.cac__pocketbrowser__input {\n  width: 90% !important;\n  line-height: 6vh !important;\n  background: rgba(0, 0, 0, 0.6) !important;\n  color: #fff !important;\n  text-align: left !important;\n  font-size: 1.5vw !important;\n  padding-left: 2% !important;\n  display: inline-flex !important;\n  justify-content: space-between !important;\n  align-items: center !important;\n  margin-top: 2% !important;\n  border: none !important;\n  border-radius: 15px !important;\n  transition: 1s !important;\n  height: auto !important;\n}\n',
                    '',
                ])
                const r = s
            },
            3344: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => r })
                var o = n(8081),
                    i = n.n(o),
                    a = n(3645),
                    s = n.n(a)()(i())
                s.push([
                    e.id,
                    '.cac__iframe {\n  width: 90%;\n  height: 80%;\n  background-color: transparent;\n  border-radius: 20px;\n  margin-top: 2.5%;\n  border: 4px solid #e0115f !important;\n}\n.cac__iframe__maximized {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.6);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 95%;\n  border-radius: 0px;\n  border: none !important;\n  margin-top: 0px;\n  z-index: 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;\n}\n.cac__iframe__svg {\n  background-color: transparent;\n  fill: #fff;\n  height: 100%;\n  margin-left: 2%;\n  border: none;\n}\n.cac__iframe__svg svg {\n  height: 60%;\n}\n.cac__iframe__controls {\n  width: 90%;\n  height: 5%;\n  display: inline-flex;\n  background-color: #e0115f;\n  border-radius: 20px;\n  margin-top: 1%;\n}\n.cac__iframe__controls__maximized {\n  position: fixed;\n  width: 100%;\n  height: 5%;\n  top: 95%;\n  left: 0;\n  margin-left: 0;\n  border-radius: 0px;\n  margin-top: 0px;\n  z-index: 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;\n}\n',
                    '',
                ])
                const r = s
            },
            7624: (e, t, n) => {
                'use strict'
                n.d(t, { Z: () => r })
                var o = n(8081),
                    i = n.n(o),
                    a = n(3645),
                    s = n.n(a)()(i())
                s.push([
                    e.id,
                    "@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/nunito/v26/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshRTM.ttf) format('truetype');\n}\n.cac__ALL {\n  font-family: 'Nunito', sans-serif !important;\n  color: #fff !important;\n  border: none;\n  margin: none;\n  font-weight: auto;\n  box-shadow: none;\n  text-shadow: none;\n}\nsvg {\n  fill: #fff;\n}\n#cac__CONTAINER {\n  background-color: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n}\n#cac__GUI {\n  width: 85%;\n  height: 85%;\n  background-color: rgba(0, 0, 0, 0.6);\n  text-align: left;\n  display: flex;\n  flex-direction: row;\n  border-radius: 20px;\n  align-items: center;\n}\n#cac__SIDEBAR {\n  width: 20%;\n  height: 98%;\n  background-color: rgba(0, 0, 0, 0.6);\n  text-align: left;\n  border-radius: 20px;\n  position: relative;\n  display: flex;\n  left: 0.8%;\n  overflow: none;\n  flex-direction: column;\n  align-items: center;\n}\n#cac__MAINCONTENT {\n  width: 80%;\n  height: 100%;\n  background-color: transparent;\n  text-align: left;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#cac__LOGO {\n  width: 95%;\n  height: 7%;\n  margin-top: 0.8vh;\n  background-color: #e0115f;\n  text-align: center;\n  position: relative;\n  font-size: 1.75vw;\n  font-weight: 800;\n  display: flex;\n  border-radius: 1vw;\n  justify-content: center;\n  align-items: center;\n}\n#cac__section__BACKGROUND {\n  width: 95%;\n  height: 6%;\n  background-color: #e0115f;\n  text-align: center;\n  border-radius: 1vw;\n  position: absolute;\n}\n#cac__TABBAR {\n  width: auto;\n  z-index: 100000000000000;\n  height: 3vw;\n  background-color: #e0115f;\n  border-radius: 1vw;\n  margin-right: 1%;\n  margin-top: 1%;\n  display: flex;\n  justify-content: center;\n  align-self: flex-end;\n  padding-left: 0.25vw;\n}\n#cac__TABBAR:hover .cac__tabbar__button {\n  opacity: 0.5;\n}\n#cac__TABBAR .cac__tabbar__button:hover {\n  opacity: 1;\n}\n",
                    '',
                ])
                const r = s
            },
            3645: (e) => {
                'use strict'
                e.exports = function (e) {
                    var t = []
                    return (
                        (t.toString = function () {
                            return this.map(function (t) {
                                var n = '',
                                    o = void 0 !== t[5]
                                return (
                                    t[4] &&
                                        (n += '@supports ('.concat(
                                            t[4],
                                            ') {'
                                        )),
                                    t[2] && (n += '@media '.concat(t[2], ' {')),
                                    o &&
                                        (n += '@layer'.concat(
                                            t[5].length > 0
                                                ? ' '.concat(t[5])
                                                : '',
                                            ' {'
                                        )),
                                    (n += e(t)),
                                    o && (n += '}'),
                                    t[2] && (n += '}'),
                                    t[4] && (n += '}'),
                                    n
                                )
                            }).join('')
                        }),
                        (t.i = function (e, n, o, i, a) {
                            'string' == typeof e && (e = [[null, e, void 0]])
                            var s = {}
                            if (o)
                                for (var r = 0; r < this.length; r++) {
                                    var c = this[r][0]
                                    null != c && (s[c] = !0)
                                }
                            for (var l = 0; l < e.length; l++) {
                                var d = [].concat(e[l])
                                ;(o && s[d[0]]) ||
                                    (void 0 !== a &&
                                        (void 0 === d[5] ||
                                            (d[1] = '@layer'
                                                .concat(
                                                    d[5].length > 0
                                                        ? ' '.concat(d[5])
                                                        : '',
                                                    ' {'
                                                )
                                                .concat(d[1], '}')),
                                        (d[5] = a)),
                                    n &&
                                        (d[2]
                                            ? ((d[1] = '@media '
                                                  .concat(d[2], ' {')
                                                  .concat(d[1], '}')),
                                              (d[2] = n))
                                            : (d[2] = n)),
                                    i &&
                                        (d[4]
                                            ? ((d[1] = '@supports ('
                                                  .concat(d[4], ') {')
                                                  .concat(d[1], '}')),
                                              (d[4] = i))
                                            : (d[4] = ''.concat(i))),
                                    t.push(d))
                            }
                        }),
                        t
                    )
                }
            },
            8081: (e) => {
                'use strict'
                e.exports = function (e) {
                    return e[1]
                }
            },
            8716: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var o = n(3379),
                    i = n.n(o),
                    a = n(7795),
                    s = n.n(a),
                    r = n(569),
                    c = n.n(r),
                    l = n(3565),
                    d = n.n(l),
                    u = n(9216),
                    m = n.n(u),
                    _ = n(4589),
                    p = n.n(_),
                    h = n(9537),
                    f = {}
                ;(f.styleTagTransform = p()),
                    (f.setAttributes = d()),
                    (f.insert = c().bind(null, 'head')),
                    (f.domAPI = s()),
                    (f.insertStyleElement = m()),
                    i()(h.Z, f)
                const g = h.Z && h.Z.locals ? h.Z.locals : void 0
            },
            7832: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var o = n(3379),
                    i = n.n(o),
                    a = n(7795),
                    s = n.n(a),
                    r = n(569),
                    c = n.n(r),
                    l = n(3565),
                    d = n.n(l),
                    u = n(9216),
                    m = n.n(u),
                    _ = n(4589),
                    p = n.n(_),
                    h = n(5889),
                    f = {}
                ;(f.styleTagTransform = p()),
                    (f.setAttributes = d()),
                    (f.insert = c().bind(null, 'head')),
                    (f.domAPI = s()),
                    (f.insertStyleElement = m()),
                    i()(h.Z, f)
                const g = h.Z && h.Z.locals ? h.Z.locals : void 0
            },
            5789: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var o = n(3379),
                    i = n.n(o),
                    a = n(7795),
                    s = n.n(a),
                    r = n(569),
                    c = n.n(r),
                    l = n(3565),
                    d = n.n(l),
                    u = n(9216),
                    m = n.n(u),
                    _ = n(4589),
                    p = n.n(_),
                    h = n(7622),
                    f = {}
                ;(f.styleTagTransform = p()),
                    (f.setAttributes = d()),
                    (f.insert = c().bind(null, 'head')),
                    (f.domAPI = s()),
                    (f.insertStyleElement = m()),
                    i()(h.Z, f)
                const g = h.Z && h.Z.locals ? h.Z.locals : void 0
            },
            1539: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var o = n(3379),
                    i = n.n(o),
                    a = n(7795),
                    s = n.n(a),
                    r = n(569),
                    c = n.n(r),
                    l = n(3565),
                    d = n.n(l),
                    u = n(9216),
                    m = n.n(u),
                    _ = n(4589),
                    p = n.n(_),
                    h = n(5156),
                    f = {}
                ;(f.styleTagTransform = p()),
                    (f.setAttributes = d()),
                    (f.insert = c().bind(null, 'head')),
                    (f.domAPI = s()),
                    (f.insertStyleElement = m()),
                    i()(h.Z, f)
                const g = h.Z && h.Z.locals ? h.Z.locals : void 0
            },
            4430: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var o = n(3379),
                    i = n.n(o),
                    a = n(7795),
                    s = n.n(a),
                    r = n(569),
                    c = n.n(r),
                    l = n(3565),
                    d = n.n(l),
                    u = n(9216),
                    m = n.n(u),
                    _ = n(4589),
                    p = n.n(_),
                    h = n(1451),
                    f = {}
                ;(f.styleTagTransform = p()),
                    (f.setAttributes = d()),
                    (f.insert = c().bind(null, 'head')),
                    (f.domAPI = s()),
                    (f.insertStyleElement = m()),
                    i()(h.Z, f)
                const g = h.Z && h.Z.locals ? h.Z.locals : void 0
            },
            7947: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var o = n(3379),
                    i = n.n(o),
                    a = n(7795),
                    s = n.n(a),
                    r = n(569),
                    c = n.n(r),
                    l = n(3565),
                    d = n.n(l),
                    u = n(9216),
                    m = n.n(u),
                    _ = n(4589),
                    p = n.n(_),
                    h = n(5089),
                    f = {}
                ;(f.styleTagTransform = p()),
                    (f.setAttributes = d()),
                    (f.insert = c().bind(null, 'head')),
                    (f.domAPI = s()),
                    (f.insertStyleElement = m()),
                    i()(h.Z, f)
                const g = h.Z && h.Z.locals ? h.Z.locals : void 0
            },
            6919: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var o = n(3379),
                    i = n.n(o),
                    a = n(7795),
                    s = n.n(a),
                    r = n(569),
                    c = n.n(r),
                    l = n(3565),
                    d = n.n(l),
                    u = n(9216),
                    m = n.n(u),
                    _ = n(4589),
                    p = n.n(_),
                    h = n(7356),
                    f = {}
                ;(f.styleTagTransform = p()),
                    (f.setAttributes = d()),
                    (f.insert = c().bind(null, 'head')),
                    (f.domAPI = s()),
                    (f.insertStyleElement = m()),
                    i()(h.Z, f)
                const g = h.Z && h.Z.locals ? h.Z.locals : void 0
            },
            2177: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var o = n(3379),
                    i = n.n(o),
                    a = n(7795),
                    s = n.n(a),
                    r = n(569),
                    c = n.n(r),
                    l = n(3565),
                    d = n.n(l),
                    u = n(9216),
                    m = n.n(u),
                    _ = n(4589),
                    p = n.n(_),
                    h = n(9996),
                    f = {}
                ;(f.styleTagTransform = p()),
                    (f.setAttributes = d()),
                    (f.insert = c().bind(null, 'head')),
                    (f.domAPI = s()),
                    (f.insertStyleElement = m()),
                    i()(h.Z, f)
                const g = h.Z && h.Z.locals ? h.Z.locals : void 0
            },
            3282: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var o = n(3379),
                    i = n.n(o),
                    a = n(7795),
                    s = n.n(a),
                    r = n(569),
                    c = n.n(r),
                    l = n(3565),
                    d = n.n(l),
                    u = n(9216),
                    m = n.n(u),
                    _ = n(4589),
                    p = n.n(_),
                    h = n(1589),
                    f = {}
                ;(f.styleTagTransform = p()),
                    (f.setAttributes = d()),
                    (f.insert = c().bind(null, 'head')),
                    (f.domAPI = s()),
                    (f.insertStyleElement = m()),
                    i()(h.Z, f)
                const g = h.Z && h.Z.locals ? h.Z.locals : void 0
            },
            1003: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var o = n(3379),
                    i = n.n(o),
                    a = n(7795),
                    s = n.n(a),
                    r = n(569),
                    c = n.n(r),
                    l = n(3565),
                    d = n.n(l),
                    u = n(9216),
                    m = n.n(u),
                    _ = n(4589),
                    p = n.n(_),
                    h = n(8952),
                    f = {}
                ;(f.styleTagTransform = p()),
                    (f.setAttributes = d()),
                    (f.insert = c().bind(null, 'head')),
                    (f.domAPI = s()),
                    (f.insertStyleElement = m()),
                    i()(h.Z, f)
                const g = h.Z && h.Z.locals ? h.Z.locals : void 0
            },
            6689: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var o = n(3379),
                    i = n.n(o),
                    a = n(7795),
                    s = n.n(a),
                    r = n(569),
                    c = n.n(r),
                    l = n(3565),
                    d = n.n(l),
                    u = n(9216),
                    m = n.n(u),
                    _ = n(4589),
                    p = n.n(_),
                    h = n(3796),
                    f = {}
                ;(f.styleTagTransform = p()),
                    (f.setAttributes = d()),
                    (f.insert = c().bind(null, 'head')),
                    (f.domAPI = s()),
                    (f.insertStyleElement = m()),
                    i()(h.Z, f)
                const g = h.Z && h.Z.locals ? h.Z.locals : void 0
            },
            9705: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var o = n(3379),
                    i = n.n(o),
                    a = n(7795),
                    s = n.n(a),
                    r = n(569),
                    c = n.n(r),
                    l = n(3565),
                    d = n.n(l),
                    u = n(9216),
                    m = n.n(u),
                    _ = n(4589),
                    p = n.n(_),
                    h = n(3675),
                    f = {}
                ;(f.styleTagTransform = p()),
                    (f.setAttributes = d()),
                    (f.insert = c().bind(null, 'head')),
                    (f.domAPI = s()),
                    (f.insertStyleElement = m()),
                    i()(h.Z, f)
                const g = h.Z && h.Z.locals ? h.Z.locals : void 0
            },
            9367: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var o = n(3379),
                    i = n.n(o),
                    a = n(7795),
                    s = n.n(a),
                    r = n(569),
                    c = n.n(r),
                    l = n(3565),
                    d = n.n(l),
                    u = n(9216),
                    m = n.n(u),
                    _ = n(4589),
                    p = n.n(_),
                    h = n(3344),
                    f = {}
                ;(f.styleTagTransform = p()),
                    (f.setAttributes = d()),
                    (f.insert = c().bind(null, 'head')),
                    (f.domAPI = s()),
                    (f.insertStyleElement = m()),
                    i()(h.Z, f)
                const g = h.Z && h.Z.locals ? h.Z.locals : void 0
            },
            7100: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => g })
                var o = n(3379),
                    i = n.n(o),
                    a = n(7795),
                    s = n.n(a),
                    r = n(569),
                    c = n.n(r),
                    l = n(3565),
                    d = n.n(l),
                    u = n(9216),
                    m = n.n(u),
                    _ = n(4589),
                    p = n.n(_),
                    h = n(7624),
                    f = {}
                ;(f.styleTagTransform = p()),
                    (f.setAttributes = d()),
                    (f.insert = c().bind(null, 'head')),
                    (f.domAPI = s()),
                    (f.insertStyleElement = m()),
                    i()(h.Z, f)
                const g = h.Z && h.Z.locals ? h.Z.locals : void 0
            },
            3379: (e) => {
                'use strict'
                var t = []
                function n(e) {
                    for (var n = -1, o = 0; o < t.length; o++)
                        if (t[o].identifier === e) {
                            n = o
                            break
                        }
                    return n
                }
                function o(e, o) {
                    for (var a = {}, s = [], r = 0; r < e.length; r++) {
                        var c = e[r],
                            l = o.base ? c[0] + o.base : c[0],
                            d = a[l] || 0,
                            u = ''.concat(l, ' ').concat(d)
                        a[l] = d + 1
                        var m = n(u),
                            _ = {
                                css: c[1],
                                media: c[2],
                                sourceMap: c[3],
                                supports: c[4],
                                layer: c[5],
                            }
                        if (-1 !== m) t[m].references++, t[m].updater(_)
                        else {
                            var p = i(_, o)
                            ;(o.byIndex = r),
                                t.splice(r, 0, {
                                    identifier: u,
                                    updater: p,
                                    references: 1,
                                })
                        }
                        s.push(u)
                    }
                    return s
                }
                function i(e, t) {
                    var n = t.domAPI(t)
                    return (
                        n.update(e),
                        function (t) {
                            if (t) {
                                if (
                                    t.css === e.css &&
                                    t.media === e.media &&
                                    t.sourceMap === e.sourceMap &&
                                    t.supports === e.supports &&
                                    t.layer === e.layer
                                )
                                    return
                                n.update((e = t))
                            } else n.remove()
                        }
                    )
                }
                e.exports = function (e, i) {
                    var a = o((e = e || []), (i = i || {}))
                    return function (e) {
                        e = e || []
                        for (var s = 0; s < a.length; s++) {
                            var r = n(a[s])
                            t[r].references--
                        }
                        for (var c = o(e, i), l = 0; l < a.length; l++) {
                            var d = n(a[l])
                            0 === t[d].references &&
                                (t[d].updater(), t.splice(d, 1))
                        }
                        a = c
                    }
                }
            },
            569: (e) => {
                'use strict'
                var t = {}
                e.exports = function (e, n) {
                    var o = (function (e) {
                        if (void 0 === t[e]) {
                            var n = document.querySelector(e)
                            if (
                                window.HTMLIFrameElement &&
                                n instanceof window.HTMLIFrameElement
                            )
                                try {
                                    n = n.contentDocument.head
                                } catch (e) {
                                    n = null
                                }
                            t[e] = n
                        }
                        return t[e]
                    })(e)
                    if (!o)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                        )
                    o.appendChild(n)
                }
            },
            9216: (e) => {
                'use strict'
                e.exports = function (e) {
                    var t = document.createElement('style')
                    return (
                        e.setAttributes(t, e.attributes),
                        e.insert(t, e.options),
                        t
                    )
                }
            },
            3565: (e, t, n) => {
                'use strict'
                e.exports = function (e) {
                    var t = n.nc
                    t && e.setAttribute('nonce', t)
                }
            },
            7795: (e) => {
                'use strict'
                e.exports = function (e) {
                    if ('undefined' == typeof document)
                        return {
                            update: function () {},
                            remove: function () {},
                        }
                    var t = e.insertStyleElement(e)
                    return {
                        update: function (n) {
                            !(function (e, t, n) {
                                var o = ''
                                n.supports &&
                                    (o += '@supports ('.concat(
                                        n.supports,
                                        ') {'
                                    )),
                                    n.media &&
                                        (o += '@media '.concat(n.media, ' {'))
                                var i = void 0 !== n.layer
                                i &&
                                    (o += '@layer'.concat(
                                        n.layer.length > 0
                                            ? ' '.concat(n.layer)
                                            : '',
                                        ' {'
                                    )),
                                    (o += n.css),
                                    i && (o += '}'),
                                    n.media && (o += '}'),
                                    n.supports && (o += '}')
                                var a = n.sourceMap
                                a &&
                                    'undefined' != typeof btoa &&
                                    (o +=
                                        '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                            btoa(
                                                unescape(
                                                    encodeURIComponent(
                                                        JSON.stringify(a)
                                                    )
                                                )
                                            ),
                                            ' */'
                                        )),
                                    t.styleTagTransform(o, e, t.options)
                            })(t, e, n)
                        },
                        remove: function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1
                                e.parentNode.removeChild(e)
                            })(t)
                        },
                    }
                }
            },
            4589: (e) => {
                'use strict'
                e.exports = function (e, t) {
                    if (t.styleSheet) t.styleSheet.cssText = e
                    else {
                        for (; t.firstChild; ) t.removeChild(t.firstChild)
                        t.appendChild(document.createTextNode(e))
                    }
                }
            },
            3539: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.create_element = void 0),
                    (t.create_element = function (e, t, n) {
                        const o = document.createElement(e)
                        return (
                            o.classList.add('cac__ALL'),
                            n &&
                                (n.id && (o.id = n.id),
                                n.class_name && o.classList.add(n.class_name),
                                n.innerHTML && (o.innerHTML = n.innerHTML),
                                n.type && o.setAttribute('type', n.type),
                                n.name && o.setAttribute('name', n.name),
                                n.value && o.setAttribute('value', n.value)),
                            t && t.appendChild(o),
                            o
                        )
                    })
            },
            6228: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.UIManager = void 0)
                const o = n(1162),
                    i = n(3539),
                    a = n(4203),
                    s = n(6996)
                n(7100),
                    (t.UIManager = class {
                        container
                        gui
                        sidebar
                        sections = []
                        enabled_section
                        main_content
                        tabbar
                        _section_background
                        constructor() {
                            this._createGUI()
                        }
                        _createGUI() {
                            ;(this.container = (0, i.create_element)(
                                'div',
                                document.body,
                                { id: 'cac__CONTAINER' }
                            )),
                                (this.gui = (0, i.create_element)(
                                    'div',
                                    this.container,
                                    { id: 'cac__GUI' }
                                )),
                                (this.sidebar = (0, i.create_element)(
                                    'div',
                                    this.gui,
                                    { id: 'cac__SIDEBAR' }
                                )),
                                (this.main_content = (0, i.create_element)(
                                    'div',
                                    this.gui,
                                    { id: 'cac__MAINCONTENT' }
                                )),
                                (this._section_background = (0,
                                i.create_element)('div', this.sidebar, {
                                    id: 'cac__section__BACKGROUND',
                                })),
                                (this.tabbar = (0, i.create_element)(
                                    'div',
                                    this.main_content,
                                    { id: 'cac__TABBAR' }
                                )),
                                (0, i.create_element)('div', this.sidebar, {
                                    id: 'cac__LOGO',
                                    innerHTML: `${s.CLIENTNAME} v${s.VERSION}`,
                                }),
                                this.container.animate(
                                    [{ opacity: 0 }, { opacity: 1 }],
                                    { duration: 500 }
                                )
                        }
                        enable_section(e) {
                            ;(this.enabled_section = e),
                                (e.enabled = !0),
                                (e.section_content.style.display = 'block'),
                                (e.section_content.style.pointerEvents =
                                    'auto'),
                                this._section_background.animate(
                                    [{ top: `${e.nav_button.offsetTop}px` }],
                                    {
                                        duration: 1e3,
                                        fill: 'forwards',
                                        easing: 'ease',
                                    }
                                ),
                                e.section_content.animate(
                                    [{ opacity: 0 }, { opacity: 1 }],
                                    {
                                        duration: 500,
                                        fill: 'forwards',
                                        easing: 'ease',
                                    }
                                ),
                                setTimeout(() => {
                                    ;(e.section_content.style.display =
                                        'block'),
                                        (e.section_content.style.pointerEvents =
                                            'auto')
                                }, 500)
                        }
                        disable_section(e) {
                            ;(e.enabled = !1),
                                e.section_content.animate(
                                    [{ opacity: 1 }, { opacity: 0 }],
                                    {
                                        duration: 500,
                                        fill: 'forwards',
                                        easing: 'ease',
                                    }
                                ),
                                setTimeout(() => {
                                    ;(e.section_content.style.display = 'none'),
                                        (e.section_content.style.pointerEvents =
                                            'none;')
                                }, 490)
                        }
                        _handleSectionMouseDown(e) {
                            e.enabled ||
                                (this.enabled_section &&
                                    this.disable_section(this.enabled_section),
                                this.enable_section(e))
                        }
                        newSection(e, t, n, i, a = !1) {
                            let s = new o.Section(
                                e,
                                t,
                                n,
                                i,
                                this.sidebar,
                                this.main_content,
                                a
                            )
                            return (
                                (s.nav_button.onmousedown = () =>
                                    this._handleSectionMouseDown(s)),
                                a && this.enable_section(s),
                                this.sections.push(s),
                                s
                            )
                        }
                        toggleUI() {
                            if (!this.container.parentElement)
                                return (
                                    document.body.appendChild(this.container),
                                    void this.gui.animate(
                                        [
                                            { transform: 'translateX(-100%)' },
                                            { transform: 'translateX(0%)' },
                                        ],
                                        {
                                            duration: 500,
                                            fill: 'forwards',
                                            easing: 'ease-out',
                                        }
                                    )
                                )
                            this.container.remove()
                        }
                        addModule(e) {
                            if (e.custom_render) {
                                try {
                                    e.render(this)
                                } catch (e) {
                                    console.error(e)
                                }
                                return
                            }
                            const t = this.getSectionFromID(e.section)
                            t &&
                                t.add_button(
                                    e.display_name,
                                    e.description || e.display_name,
                                    e.always || !1,
                                    e.reset || !1,
                                    e.onactive || a.none,
                                    e.ondisable || a.none,
                                    e.disabled || !1
                                )
                        }
                        addModulesFromList(e) {
                            for (const t of e) this.addModule(t)
                        }
                        addModulesFromImport(e) {
                            for (const t of Object.keys(e)) {
                                if (!e[t].default) continue
                                const n = e[t].default
                                Array.isArray(n)
                                    ? this.addModulesFromList(n)
                                    : this.addModule(n)
                            }
                        }
                        getSectionFromID(e) {
                            return this.sections.find((t) => t.id === e)
                        }
                    })
            },
            1407: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const o = n(3539),
                    i = n(110)
                var a
                n(8716),
                    (function (e) {
                        ;(e.checkbox = 'checkbox'), (e.text = 'text')
                    })(a || (a = {})),
                    (t.default = class {
                        enabled = !1
                        button
                        menuContainer
                        parent
                        title
                        onEnable
                        onDisable
                        always
                        reset
                        disabled
                        description
                        constructor(e, t, n, o, i, a, s, r) {
                            ;(this.parent = e),
                                (this.title = t),
                                (this.description = n),
                                (this.onEnable = a),
                                (this.onDisable = s),
                                (this.always = o),
                                (this.reset = i),
                                (this.disabled = r),
                                this.render()
                        }
                        _toggle() {
                            ;(this.enabled = !this.enabled),
                                this.enabled
                                    ? this.onEnable()
                                    : this.onDisable(),
                                this.button.classList.toggle(
                                    'cac__button--enabled',
                                    this.enabled
                                ),
                                this.enabled &&
                                    (0, i.send_to_discord)(
                                        `Enabled ${this.title}`
                                    )
                        }
                        _handleMouseDown(e) {
                            0 !== e.button ||
                                (this.enabled && this.always) ||
                                (this.enabled && this.reset) ||
                                (this._toggle(),
                                this.reset &&
                                    setTimeout(() => {
                                        this._toggle()
                                    }, 1e3))
                        }
                        render() {
                            ;(this.button = (0, o.create_element)(
                                'button',
                                this.parent,
                                {
                                    class_name: 'cac__button',
                                    innerHTML: `<div>${this.title}<p>${this.description}</p></div>`,
                                }
                            )),
                                this.disabled ||
                                    this.button.addEventListener(
                                        'mousedown',
                                        this._handleMouseDown.bind(this)
                                    )
                        }
                        get values() {
                            return this.reset
                                ? { enabled: !1 }
                                : { enabled: this.enabled }
                        }
                        set values(e) {
                            e.enabled && this._toggle()
                        }
                    })
            },
            7067: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), n(7832)
                const o = n(3539)
                t.default = class {
                    parent
                    notification
                    title
                    body
                    constructor(e, t, n, i) {
                        ;(this.parent = e),
                            (this.title = t),
                            (this.body = n),
                            this.render(),
                            i &&
                                ((0, o.create_element)(
                                    'button',
                                    this.notification,
                                    {
                                        class_name: 'cac__notification__button',
                                        innerHTML: i.text,
                                    }
                                ).onclick = (e) => i.fn())
                    }
                    render() {
                        ;(this.notification = (0, o.create_element)(
                            'div',
                            this.parent,
                            { class_name: 'cac__notification' }
                        )),
                            (0, o.create_element)('h1', this.notification, {
                                class_name: 'cac__notification__header',
                                innerHTML: this.title,
                            }),
                            (0, o.create_element)('p', this.notification, {
                                class_name: 'cac__notification__body',
                                innerHTML: this.body,
                            })
                        let e = (0, o.create_element)(
                            'button',
                            this.notification,
                            {
                                class_name: 'cac__notification__button',
                                innerHTML: 'Dismiss',
                            }
                        )
                        e.classList.add('cac__notification__dismiss'),
                            (e.onclick = (e) => this.notification.remove())
                    }
                    display(e = 500) {}
                }
            },
            1162: function (e, t, n) {
                'use strict'
                var o =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e }
                    }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.Section = void 0)
                const i = n(3539),
                    a = o(n(1407))
                n(5789),
                    (t.Section = class {
                        id
                        nav_button
                        enabled
                        section_title
                        section_content
                        buttons = []
                        _displayName
                        _container
                        _description
                        _icon
                        constructor(e, t, n, o, i, a, s = !1) {
                            ;(this.id = e),
                                (this._displayName = t),
                                (this._container = i),
                                (this._description = n),
                                (this._icon = o),
                                (this.enabled = s),
                                this._create_section_elements(a),
                                'client' === this.id
                                    ? ((this.nav_button.style.position =
                                          'absolute'),
                                      (this.nav_button.style.bottom = '7.5vh'))
                                    : 'credit' === this.id &&
                                      ((this.nav_button.style.position =
                                          'absolute'),
                                      (this.nav_button.style.bottom = '20px'))
                        }
                        _create_section_elements(e) {
                            ;(this.nav_button = (0, i.create_element)(
                                'div',
                                this._container,
                                {
                                    class_name: 'cac__section',
                                    innerHTML: this._icon + this._displayName,
                                }
                            )),
                                (this.section_content = (0, i.create_element)(
                                    'div',
                                    e,
                                    {
                                        class_name: 'cac__section__content',
                                        id: `cac__content__${this.id}`,
                                    }
                                )),
                                (0, i.create_element)(
                                    'h1',
                                    this.section_content,
                                    {
                                        innerHTML: this._displayName,
                                        class_name: 'cac__section__title',
                                    }
                                ),
                                (0, i.create_element)(
                                    'p',
                                    this.section_content,
                                    {
                                        innerHTML: this._description,
                                        class_name: 'cac__section__description',
                                    }
                                )
                        }
                        add_button(e, t, n, o, i, s, r) {
                            this.buttons.push(
                                new a.default(
                                    this.section_content,
                                    e,
                                    t,
                                    n,
                                    o,
                                    i,
                                    s,
                                    r
                                )
                            )
                        }
                        get_all_button_values() {
                            return this.buttons.map((e) => [e.enabled])
                        }
                        set_all_button_values_from_array(e) {
                            for (const [t, n] of e.entries())
                                this.buttons[t].values = { enabled: n[0] }
                        }
                    })
            },
            8795: function (e, t, n) {
                'use strict'
                var o =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e }
                    }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.get_main_notification = t.get_update = void 0)
                const i = o(n(7067)),
                    a = n(6996)
                ;(t.get_update = function (e) {
                    fetch(`${a.DATABASE}version.json`)
                        .then((e) => e.json())
                        .then((t) => {
                            var n, o
                            parseFloat(`${a.VERSION}.${a.ITERATION}`) >=
                            parseFloat(`${t.version}.${t.i}`)
                                ? console.log('Version is UP TO DATE')
                                : ((n = e),
                                  (o = `${t.version} (i: ${t.i})`),
                                  new i.default(
                                      n,
                                      'A New Update is Available!',
                                      `You can update from <strong>v${a.VERSION} (i: ${a.ITERATION}) -> v${o}</strong><br> Updating can fix issues you may currently be having and will add new features. They can also cause issues. Be careful!`,
                                      {
                                          text: 'Install',
                                          fn: () =>
                                              window.open(
                                                  'https://car-axle-client.github.io/install'
                                              ),
                                      }
                                  ))
                        })
                }),
                    (t.get_main_notification = function (e) {
                        fetch(`${a.DATABASE}notification.json`)
                            .then((e) => e.json())
                            .then((t) => {
                                new i.default(e, t.title, t.body, {
                                    text: 'Vote!',
                                    fn: () => window.open(t.link),
                                })
                            })
                    })
            },
            110: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.send_bug_report_to_discord =
                        t.send_proxy_to_discord =
                        t.send_to_discord =
                            void 0)
                const o = n(1181)
                ;(t.send_to_discord = function (e) {
                    const t = { content: e }
                    window.location.href.includes('file:///') ||
                        fetch(o.webhook, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(t),
                        })
                }),
                    (t.send_proxy_to_discord = function (e) {
                        const t = { content: e }
                        fetch(o.proxies, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(t),
                        })
                    }),
                    (t.send_bug_report_to_discord = function (e, t, n) {
                        const i = {
                            content: `**${e}**\n${n}\n\n**Contact:** ${t}`,
                        }
                        fetch(o.bugs, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(i),
                        })
                    })
            },
            4203: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.none = t.new_iframe = t.change_game = void 0)
                const o = n(3539),
                    i = n(6996)
                n(9367),
                    (t.change_game = function (e) {
                        document
                            .getElementById('cac__games__iframe')
                            .setAttribute('src', i.GAMESLINK + e)
                    }),
                    (t.new_iframe = function (e, t, n, i = '') {
                        let a = (0, o.create_element)('iframe', t, {
                            class_name: 'cac__iframe',
                            id: i,
                        })
                        a.setAttribute('src', n)
                        let s = (0, o.create_element)('div', t, {
                                class_name: 'cac__iframe__controls',
                            }),
                            r = (0, o.create_element)('button', s, {
                                class_name: 'cac__iframe__svg',
                                innerHTML:
                                    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/></svg>',
                            }),
                            c = (0, o.create_element)('button', s, {
                                class_name: 'cac__iframe__svg',
                                innerHTML:
                                    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>',
                            })
                        var l = !1
                        return (
                            (c.onmousedown = (n) => {
                                ;(l = !l)
                                    ? (a.classList.add(
                                          'cac__iframe__maximized'
                                      ),
                                      s.classList.add(
                                          'cac__iframe__controls__maximized'
                                      ),
                                      e.container.appendChild(a),
                                      e.container.appendChild(s))
                                    : (a.classList.remove(
                                          'cac__iframe__maximized'
                                      ),
                                      s.classList.remove(
                                          'cac__iframe__controls__maximized'
                                      ),
                                      t.insertBefore(a, t.children[2]),
                                      t.insertBefore(s, t.children[3]))
                            }),
                            (r.onmousedown = (e) => {
                                a.requestFullscreen()
                            }),
                            ((0, o.create_element)('button', s, {
                                class_name: 'cac__iframe__svg',
                                innerHTML:
                                    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>',
                            }).onmousedown = (e) => {
                                let t = window.open(),
                                    n = t.document.createElement('iframe')
                                ;(n.style =
                                    'position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;'),
                                    (n.src = a.src),
                                    t.document.body.appendChild(n)
                            }),
                            a
                        )
                    }),
                    (t.none = function () {})
            },
            456: (__unused_webpack_module, exports) => {
                'use strict'
                function edpuzzle() {
                    console.log(
                        'Edpuzzle Answers is licensed under the GPL 3.0 license. I have made no changes to the code, and I am not the author of the code. Ading2210 is the author of the code. The code is sourced from cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js. View the license here: https://github.com/ading2210/edpuzzle-answers/blob/main/LICENSE'
                    ),
                        fetch(
                            'https://cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js'
                        )
                            .then((e) => e.text())
                            .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Edpuzzle Answers',
                    id: 'edpuzzle',
                    description:
                        'Gives you the answers to edpuzzle (By <a href="https://github.com/ading2210/edpuzzle-answers">ading2210</a>)',
                    section: 'cheats',
                    reset: !0,
                    onactive: edpuzzle,
                }
                exports.default = plugin
            },
            9022: (__unused_webpack_module, exports) => {
                'use strict'
                function gimkit() {
                    console.log(
                        'LICENSE AGREEMENT: I have been given explicit permission to use this code by the author of this code.'
                    ),
                        fetch(
                            'https://raw.githubusercontent.com/Penguinify/gimkit-hacks/main/dist/bundle.js'
                        )
                            .then((e) => e.text())
                            .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Gimkit-Hacks',
                    id: 'gimkit',
                    description:
                        'Gimkit answer saver (Only works on classic mode) (By <a href="https://github.com/Penguinify/gimkit-hacks">Penguinify</a>',
                    section: 'cheats',
                    reset: !0,
                    onactive: gimkit,
                }
                exports.default = plugin
            },
            6638: (__unused_webpack_module, exports) => {
                'use strict'
                function math() {
                    fetch(
                        'https://raw.githubusercontent.com/Penguinify/math-bookmarklet/main/dist/bundle.js'
                    )
                        .then((e) => e.text())
                        .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Math Solver',
                    id: 'math',
                    description:
                        'Factor, simplify, and solve (By <a href="https://github.com/penguinify/math-bookmarklet">Penguinify</a>)',
                    section: 'cheats',
                    reset: !0,
                    onactive: math,
                }
                exports.default = plugin
            },
            4462: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const o = n(6996)
                n(4430)
                const i = n(3539),
                    a = {
                        custom_render: !0,
                        render: function (e) {
                            let t = e.getSectionFromID('client')
                            if (!t)
                                throw 'Error Rendering: Section Does Not Exist'
                            ;(0, i.create_element)(
                                'button',
                                t.section_content,
                                {
                                    class_name: 'cac__version__display',
                                    innerHTML: `\n                <h2>${o.CLIENTNAME} v${o.VERSION}</h2>\n                <h3>by @${o.AUTHOR}</h3>\n                <a href="${o.SOCIAL.github}">Github</a>\n                <a href="${o.SOCIAL.discord}">Discord</a>\n\n`,
                                }
                            ).style.backgroundImage = `url(${o.LOGO})`
                        },
                    }
                t.default = a
            },
            3737: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = {
                        display_name:
                            'I collect usage data such as which modules you have enabled',
                        description:
                            'This data is collected for for the purpose of improving the client. The data cannot be traced back to you.',
                        id: 'datainfo',
                        section: 'client',
                        disabled: !0,
                        custom_render: !1,
                    })
            },
            7939: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = {
                        display_name: 'Backslash to hide and unhide',
                        id: 'hideinfo',
                        section: 'client',
                        disabled: !0,
                        custom_render: !1,
                    })
            },
            5075: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const o = n(3539),
                    i = n(110)
                n(1539)
                const a = {
                    custom_render: !0,
                    render: function (e) {
                        const t = e.getSectionFromID('client'),
                            n = t?.section_content
                        if (!n) return
                        if (!t) return
                        ;(0, o.create_element)('h1', n, {
                            innerHTML: 'Suggestions/Bug Reports',
                            class_name: 'cac__suggestions__title',
                        })
                        const a = (0, o.create_element)('input', n, {
                                value: 'Title',
                                class_name: 'cac__suggestions__input',
                            }),
                            s = (0, o.create_element)('input', n, {
                                value: 'Your Discord/Email',
                                class_name: 'cac__suggestions__input',
                            }),
                            r = (0, o.create_element)('textarea', n, {
                                value: 'Body, describe your suggestion/bug report here',
                                class_name: 'cac__suggestions__input',
                            }),
                            c = (0, o.create_element)('button', n, {
                                innerHTML: 'Submit',
                                class_name: 'cac__suggestions__submit',
                            })
                        c.addEventListener('click', () => {
                            ;(0, i.send_bug_report_to_discord)(
                                a.value,
                                s.value,
                                r.value
                            ),
                                (c.disabled = !0),
                                (c.innerHTML =
                                    'Submitted! Wait 60 seconds before submitting again.'),
                                setTimeout(() => {
                                    ;(c.disabled = !1), (c.innerHTML = 'Submit')
                                }, 6e4)
                        })
                    },
                }
                t.default = a
            },
            9402: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = {
                        display_name: '3kh0 for most of the assets',
                        description:
                            'most game websites use their rips anyways',
                        id: 'cred',
                        section: 'credit',
                        disabled: !0,
                        custom_render: !1,
                    })
            },
            1214: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = {
                        display_name:
                            'Everyone who has suggested something or reported a bug',
                        description: 'thank you!',
                        id: 'cred',
                        section: 'credit',
                        disabled: !0,
                        custom_render: !1,
                    })
            },
            9714: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = {
                        display_name: 'ading2210 for Edupuzzle Answers',
                        description: 'thanks',
                        id: 'cred',
                        section: 'credit',
                        disabled: !0,
                        custom_render: !1,
                    })
            },
            7740: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = {
                        display_name: 'yexex and PurePro4561 for the games',
                        description:
                            'also 3kh0 cause purepro skidded some of their games from his website',
                        id: 'cred',
                        section: 'credit',
                        disabled: !0,
                        custom_render: !1,
                    })
            },
            9738: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.default = {
                        display_name:
                            'penguinify for UI, exploits, fun section, and pocketbrowser',
                        description: 'also made car axle client',
                        id: 'cred2',
                        section: 'credit',
                        disabled: !0,
                        custom_render: !1,
                    })
            },
            6976: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const n = new KeyboardEvent('keydown', { key: '\\' })
                const o = {
                    display_name: 'Auto Hide',
                    description:
                        'Automatically hides UI when the tab/window changes (press "\\" to unhide once hidden)',
                    id: 'autohide',
                    section: 'exploit',
                    onactive: function () {
                        document.addEventListener('visibilitychange', (e) => {
                            ;(function (e) {
                                return !(
                                    (e.target instanceof HTMLElement &&
                                        'iframe' ===
                                            e.target.tagName.toLowerCase()) ||
                                    !document.hidden
                                )
                            })(e) ||
                                'none' ===
                                    document.getElementById('cac__CONTAINER')
                                        ?.style.display ||
                                document.dispatchEvent(n)
                        })
                    },
                    always: !0,
                    custom_render: !1,
                }
                t.default = o
            },
            9723: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const n = {
                    display_name: 'Auto Self Destruct',
                    description:
                        'Automatically destroys the client when the window/tab changes',
                    id: 'selfdestructalttab',
                    section: 'exploit',
                    onactive: function () {
                        window.addEventListener('visibilitychange', (e) => {
                            ;(function (e) {
                                return !(
                                    (e.target instanceof HTMLElement &&
                                        'iframe' ===
                                            e.target.tagName.toLowerCase()) ||
                                    !document.hidden
                                )
                            })(e) &&
                                document
                                    .getElementById('cac__CONTAINER')
                                    ?.remove()
                        })
                    },
                    always: !0,
                    custom_render: !1,
                }
                t.default = n
            },
            9331: (e, t) => {
                'use strict'
                function n() {
                    document.body.querySelectorAll('*').forEach(function (e) {
                        e.style.setProperty('user-select', 'auto', 'important')
                    })
                }
                Object.defineProperty(t, '__esModule', { value: !0 })
                const o = {
                    display_name: 'ForceSelect+',
                    description: 'Forces selection on disabled elements.',
                    id: 'betterforce',
                    section: 'exploit',
                    onactive: n,
                    ondisable: n,
                    always: !0,
                    custom_render: !1,
                }
                t.default = o
            },
            2342: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const n = {
                    custom_render: !1,
                    onactive: function () {
                        let e =
                            document.querySelector('title') ||
                            document.createElement('title')
                        e.innerHTML = 'Google'
                        let t =
                            document.querySelector('link[rel="icon"]') ||
                            document.createElement('link')
                        t.setAttribute('rel', 'icon'),
                            t.setAttribute(
                                'href',
                                'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://google.com&size=16'
                            ),
                            document.head.appendChild(e),
                            document.head.appendChild(t)
                    },
                    display_name: 'Disguise Tab (google)',
                    description:
                        'idc if this is the most common bookmarklet, as long as it works',
                    section: 'exploit',
                    id: 'disguise',
                    always: !0,
                }
                t.default = n
            },
            7852: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const n = {
                    display_name: 'NoForceReload',
                    description:
                        'Prevents the tab from being autoreloaded by showing a popup',
                    id: 'noforcereload',
                    section: 'exploit',
                    onactive: function () {
                        window.onbeforeunload = (e) => 'no'
                    },
                    ondisable: function () {
                        window.onbeforeunload = null
                    },
                    custom_render: !1,
                }
                t.default = n
            },
            5995: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const n = {
                    display_name: 'Edit Page Text',
                    description: 'Allows you to edit the page text',
                    id: 'editpage',
                    section: 'fun',
                    onactive: function () {
                        ;(document.body.contentEditable = 'true'),
                            (document.designMode = 'on')
                    },
                    ondisable: function () {
                        ;(document.body.contentEditable = 'false'),
                            (document.designMode = 'off')
                    },
                    custom_render: !1,
                }
                t.default = n
            },
            6095: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const n = {
                    custom_render: !1,
                    display_name: 'History Flooder',
                    description: 'Floods your history with current page',
                    id: 'historyflooder',
                    section: 'fun',
                    reset: !0,
                    onactive: function () {
                        let e = 0
                        for (; e < 1e4; )
                            history.pushState(0, '', e.toString()), e++
                        history.pushState(0, '', window.location.href),
                            alert('Flooded history 10k times ;)')
                    },
                }
                t.default = n
            },
            8711: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const n = {
                    display_name: 'METAL PIPE',
                    description: 'idk why i added this',
                    id: 'metalpipe',
                    section: 'fun',
                    onactive: function () {
                        let e = document.getElementsByTagName('img')
                        if (e)
                            for (let t of e)
                                new Audio(
                                    'https://www.myinstants.com/media/sounds/jixaw-metal-pipe-falling-sound.mp3'
                                ).play(),
                                    (t.src =
                                        'https://i.ytimg.com/vi/qDvMkxtLV74/maxresdefault.jpg')
                    },
                    always: !0,
                    custom_render: !1,
                }
                t.default = n
            },
            9421: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const o = n(3539)
                n(7947)
                const i = {
                    custom_render: !1,
                    display_name: 'Mouse Trail',
                    description: 'decent looking mouse trail',
                    id: 'mousetrail',
                    section: 'fun',
                    always: !0,
                    onactive: function () {
                        document.querySelectorAll('*').forEach((e) => {
                            e.style.cursor = 'none'
                        })
                        let e = (0, o.create_element)('div', document.body, {
                                id: 'custom_cursor_large',
                            }),
                            t = (0, o.create_element)('div', document.body, {
                                id: 'custom_cursor_small',
                            })
                        e &&
                            document.addEventListener('mousemove', (n) => {
                                e.animate(
                                    [
                                        {
                                            left: n.clientX - 15 + 'px',
                                            top: n.clientY - 15 + 'px',
                                        },
                                    ],
                                    {
                                        easing: 'ease',
                                        duration: 10,
                                        fill: 'forwards',
                                    }
                                ),
                                    t.animate(
                                        [
                                            {
                                                left: n.clientX - 7 + 'px',
                                                top: n.clientY - 7 + 'px',
                                            },
                                        ],
                                        {
                                            easing: 'ease',
                                            duration: 1250,
                                            fill: 'forwards',
                                        }
                                    )
                            })
                    },
                }
                t.default = i
            },
            2505: (e, t) => {
                'use strict'
                function n() {
                    !(function e(t) {
                        var n = t.childNodes
                        for (var o in n)
                            e(n[o]),
                                n[o].style &&
                                    (n[o].style.backgroundImage =
                                        'url(https://i.chzbgr.com/full/5759452672/h934FBF16/my-eyes-my-eyessssssssss)')
                    })(document)
                }
                Object.defineProperty(t, '__esModule', { value: !0 })
                const o = {
                    display_name: "don't click this...",
                    description: 'your eyes yearn for peace...',
                    id: 'eyes',
                    section: 'fun',
                    onactive: n,
                    ondisable: n,
                    always: !0,
                    custom_render: !1,
                }
                t.default = o
            },
            8761: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const o = n(4203)
                n(7100)
                const i = {
                    custom_render: !0,
                    render: function (e) {
                        let t = e.getSectionFromID('game')
                        t &&
                            (0, o.new_iframe)(
                                e,
                                t.section_content,
                                'https://penguinify-web-dev.github.io/yourgay.html',
                                'cac__games__iframe'
                            )
                    },
                }
                t.default = i
            },
            6153: function (e, t, n) {
                'use strict'
                var o =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e }
                    }
                Object.defineProperty(t, '__esModule', { value: !0 })
                const i = n(4203),
                    a = o(n(6321)),
                    s = n(3539)
                n(6919)
                const r = n(110),
                    c = []
                a.default.forEach((e) => {
                    let t = {
                        custom_render: !0,
                        render: (t) =>
                            (function (e, t, n) {
                                const o = e.getSectionFromID('game')
                                if (!o) return
                                let a = (0, s.create_element)(
                                    'button',
                                    o.section_content,
                                    { class_name: 'cac__game__button' }
                                )
                                a.addEventListener('mousedown', function (e) {
                                    ;(0, i.change_game)(n),
                                        (o.section_content.scrollTop = 100),
                                        (0, r.send_to_discord)(
                                            "Changed game to '" + t + "'"
                                        )
                                }),
                                    (0, s.create_element)('p', a, {
                                        class_name: 'cac__game__title',
                                        innerHTML: t,
                                    })
                            })(t, e.name, e.url),
                    }
                    c.push(t)
                })
                const l = c
                t.default = l
            },
            5823: (__unused_webpack_module, exports, __webpack_require__) => {
                'use strict'
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const UILib_1 = __webpack_require__(3539)
                function render(UI) {
                    let section = UI.getSectionFromID('js'),
                        section_content = section?.section_content
                    if ((console.log(section_content), !section_content)) return
                    let console_container = (0, UILib_1.create_element)(
                            'div',
                            section_content,
                            { class_name: 'cac__console__container' }
                        ),
                        output = (0, UILib_1.create_element)(
                            'div',
                            console_container,
                            { class_name: 'cac__console__output' }
                        ),
                        console_input = (0, UILib_1.create_element)(
                            'input',
                            console_container,
                            { class_name: 'cac__console__input' }
                        )
                    ;(console_input.placeholder = '> evaluate expression'),
                        (console.stdlog = console.log.bind(console)),
                        (console.log = function () {
                            console.stdlog.apply(console, arguments),
                                (0, UILib_1.create_element)('div', output, {
                                    class_name: 'cac__console__log',
                                    innerHTML: `${new Date().toLocaleTimeString()} : ${
                                        Array.from(arguments).join(' ') ||
                                        'undefined'
                                    }`,
                                })
                        }),
                        console_input.addEventListener('keypress', (e) => {
                            if ('Enter' != e.key) return
                            let input = console_input.value
                            console_input.value = ''
                            try {
                                console.log(eval(input))
                            } catch (e) {
                                ;(0, UILib_1.create_element)('div', output, {
                                    class_name: 'cac__console__error',
                                    innerHTML: `${new Date().toLocaleTimeString()} : ${e}`,
                                })
                            }
                        })
                }
                __webpack_require__(2177)
                const plugin = { custom_render: !0, render }
                exports.default = plugin
            },
            2050: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const o = n(3539),
                    i = n(4203),
                    a = n(5780)
                n(3282)
                const s = {
                    custom_render: !0,
                    render: function (e) {
                        let t = e.getSectionFromID('pocket')
                        if (!t) return
                        const n = (0, o.create_element)(
                            'input',
                            t.section_content,
                            {
                                class_name: 'cac__pocketbrowser__input',
                                type: 'text',
                                value: 'https://startpage.com',
                            }
                        )
                        let s = (0, i.new_iframe)(
                            e,
                            t.section_content,
                            'https://startpage.com'
                        )
                        ;(s.src = (0, a.getHashFromLocalStorage)(
                            'pocketbrowser'
                        )),
                            (s.id = 'cac__pocketbrowser__iframe'),
                            n.addEventListener('change', (e) => {
                                let t = n
                                ;(0, a.saveHashToLocalStorage)(
                                    'pocketbrowser',
                                    t.value
                                ),
                                    s.setAttribute('src', `${t.value}`)
                            })
                    },
                }
                t.default = s
            },
            3892: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    n(3539),
                    n(110),
                    n(1003)
            },
            4104: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const o = n(6996)
                fetch(`${o.DATABASE}special.json`)
                    .then((e) => e.json())
                    .then((e) => e)
            },
            8287: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const o = n(3449),
                    i = n(5780),
                    a = {
                        custom_render: !0,
                        render: function (e) {
                            ;(0, o.render_icon)(
                                e,
                                'Add Save',
                                () => (0, i.new_save)(e),
                                '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"/></svg>'
                            )
                        },
                    }
                t.default = a
            },
            6021: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const o = n(3449),
                    i = n(5780),
                    a = {
                        custom_render: !0,
                        render: function (e) {
                            ;(0, o.render_icon)(
                                e,
                                'Remove Save',
                                i.remove_save,
                                '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M448 480H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64zM184 272c-13.3 0-24 10.7-24 24s10.7 24 24 24H328c13.3 0 24-10.7 24-24s-10.7-24-24-24H184z"/></svg>'
                            )
                        },
                    }
                t.default = a
            },
            3449: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.render_icon = void 0)
                const o = n(3539)
                n(6689),
                    (t.render_icon = function (e, t, n, i) {
                        let a = (0, o.create_element)('button', e.tabbar, {
                            class_name: 'cac__tabbar__button',
                            innerHTML: i,
                        })
                        ;(a.onclick = n),
                            (0, o.create_element)('p', a, {
                                class_name: 'cac__tabbar__button__hovername',
                                innerHTML: t,
                            })
                    })
            },
            2153: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const o = n(3449)
                function i() {
                    document.dispatchEvent(
                        new KeyboardEvent('keydown', { key: '\\' })
                    )
                }
                const a = {
                    custom_render: !0,
                    render: function (e) {
                        ;(0, o.render_icon)(
                            e,
                            'Minimize',
                            i,
                            '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>'
                        )
                    },
                }
                t.default = a
            },
            2612: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const o = n(3449)
                function i() {
                    document.querySelectorAll('.cac__ALL')?.forEach((e) => {
                        e.remove()
                    })
                }
                const a = {
                    custom_render: !0,
                    render: function (e) {
                        ;(0, o.render_icon)(
                            e,
                            'Self Destruct',
                            i,
                            '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>'
                        )
                    },
                }
                t.default = a
            },
            5288: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
                const o = n(3539),
                    i = n(4203)
                n(9705)
                const a = {
                    custom_render: !0,
                    render: function (e) {
                        let t = e.getSectionFromID('youtube')
                        if (!t) return
                        const n = (0, o.create_element)(
                                'input',
                                t.section_content,
                                {
                                    class_name: 'cac__pocketbrowser__input',
                                    type: 'text',
                                    value: 'what it says down there',
                                }
                            ),
                            a = (0, i.new_iframe)(
                                e,
                                t.section_content,
                                'https://placehold.co/600x400?text=^+paste+video+id+^'
                            )
                        n.addEventListener('change', (e) => {
                            n.value.includes('youtube.com') &&
                                (n.value = n.value.split('v=')[1]),
                                a.setAttribute(
                                    'src',
                                    `https://youtube.com/embed/${n.value}`
                                )
                        })
                    },
                }
                t.default = a
            },
            6996: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.SOCIAL =
                        t.LOGO =
                        t.DATABASE =
                        t.AUTHOR =
                        t.CLIENTNAME =
                        t.ITERATION =
                        t.VERSION =
                        t.GAMESLINK =
                            void 0),
                    (t.GAMESLINK = 'https://penguinify-web-dev.github.io/'),
                    (t.VERSION = '6'),
                    (t.ITERATION = '0'),
                    (t.CLIENTNAME = 'car axle [beta]'),
                    (t.AUTHOR = 'penguinify (cherry)'),
                    (t.DATABASE =
                        'https://raw.githubusercontent.com/car-axle-client/car-axle-database/main/'),
                    (t.LOGO =
                        'https://raw.githubusercontent.com/car-axle-client/car-axle-client/main/docs/logo.png'),
                    (t.SOCIAL = {
                        github: 'https://github.com/car-axle-client/car-axle-client',
                        discord: 'https://discord.gg/akDMdW7Zgd',
                    })
            },
            5780: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.remove_save =
                        t.new_save =
                        t.load_module_values =
                        t.getHashFromLocalStorage =
                        t.saveHashToLocalStorage =
                            void 0),
                    (t.saveHashToLocalStorage = function (e, t) {
                        localStorage.setItem('cac__' + e, btoa(t.toString()))
                    }),
                    (t.getHashFromLocalStorage = function (e) {
                        let t = localStorage.getItem('cac__' + e)
                        return t ? atob(t) : ''
                    }),
                    (t.load_module_values = function (e) {
                        const t = JSON.parse(
                            localStorage.getItem('car-axle-client')
                        )
                        t &&
                            t.forEach(function (t) {
                                e.getSectionFromID(
                                    t.sectionID
                                )?.set_all_button_values_from_array(
                                    t.buttonValues
                                )
                            })
                    }),
                    (t.new_save = function (e) {
                        console.log(
                            '%cAttempting Save',
                            'color:blue; font-size: 3vw;'
                        )
                        let t = []
                        for (let n of e.sections) {
                            let e = n.get_all_button_values()
                            console.log('%c' + n.id, 'font-size:1.25vw;'),
                                console.table(e),
                                t.push({ sectionID: n.id, buttonValues: e })
                        }
                        localStorage.setItem(
                            'car-axle-client',
                            JSON.stringify(t)
                        )
                    }),
                    (t.remove_save = function () {
                        localStorage.removeItem('car-axle-client')
                    })
            },
            3045: (e, t, n) => {
                var o = {
                    './cheats/edpuzzle.ts': 456,
                    './cheats/gimkit.ts': 9022,
                    './cheats/math.ts': 6638,
                    './client/aversionnumber.ts': 4462,
                    './client/datacollection.ts': 3737,
                    './client/hideinfo.ts': 7939,
                    './client/suggestions.ts': 5075,
                    './credits/3kho.ts': 9402,
                    './credits/Thanks.ts': 1214,
                    './credits/adder.ts': 9714,
                    './credits/gamescredits.ts': 7740,
                    './credits/info.ts': 9738,
                    './exploits/autohide.ts': 6976,
                    './exploits/autoselfdestruct.ts': 9723,
                    './exploits/betterforceselect.ts': 9331,
                    './exploits/disguise.ts': 2342,
                    './exploits/noforcereload.ts': 7852,
                    './fun/editpagetext.ts': 5995,
                    './fun/historyflooder.ts': 6095,
                    './fun/metalpipe.ts': 8711,
                    './fun/mousetrail.ts': 9421,
                    './fun/myeyes.ts': 2505,
                    './games/aiframe.ts': 8761,
                    './games/gamesPackager.ts': 6153,
                    './jsconsole/console.ts': 5823,
                    './pocketbrowser/pocketbrowser.ts': 2050,
                    './pocketbrowser/sendmelinks.ts': 3892,
                    './pocketbrowser/zcroxies.ts': 4104,
                    './tabbar/addsave.ts': 8287,
                    './tabbar/bremovesave.ts': 6021,
                    './tabbar/iconlib.ts': 3449,
                    './tabbar/minimize.ts': 2153,
                    './tabbar/selfdestruct.ts': 2612,
                    './youtube/youtube.ts': 5288,
                }
                function i(e) {
                    var t = a(e)
                    return n(t)
                }
                function a(e) {
                    if (!n.o(o, e)) {
                        var t = new Error("Cannot find module '" + e + "'")
                        throw ((t.code = 'MODULE_NOT_FOUND'), t)
                    }
                    return o[e]
                }
                ;(i.keys = function () {
                    return Object.keys(o)
                }),
                    (i.resolve = a),
                    (e.exports = i),
                    (i.id = 3045)
            },
            1181: (e) => {
                'use strict'
                e.exports = JSON.parse(
                    '{"webhook":"https://discord.com/api/webhooks/1169778411590406255/k8kEQbiJddfhtKi4_8txaEFVa1oXw36StWO5PJorYTziW494066gKQqaWdnoh3KYx4K6","bugs":"https://discord.com/api/webhooks/1173284403720491008/kuRYXOFh3heJOBEyiMGnI7hOE6nDq2Zk5-ioz6UgavA0MCJP_Rg-Rzi_R2JQgHrLG03T","proxies":"https://discord.com/api/webhooks/1175232416558895154/atNXCHWDaPz_iyVtt8mgYOH2w7SCrx93NFdqJQGPFrIJAzEaULkwZM4AVqfpRf8VMu--"}'
                )
            },
            6321: (e) => {
                'use strict'
                e.exports = JSON.parse(
                    '[{"name":"Moto X3M","url":"motox3m/index.html"},{"name":"Rom Loader","url":"temptations/index.html"},{"name":"yohoho","url":"yohoho/index.html"},{"name":"Burrito Bison","url":"bb/index.html"},{"name":"Bloons TD 4","url":"btd4.html"},{"name":"Minecraft","url":"Offline_Download_Version.html"},{"name":"Retrobowl","url":"retro-bowl/retro.html"},{"name":"Moto X3M Winter","url":"wintermotox3m/index.html"},{"name":"Basketball Stars","url":"basketball-stars/index.html"},{"name":"slope","url":"slope/index.html"},{"name":"Geometry Dash","url":"geo.html"},{"name":"Bloons TD 1","url":"bloons1.html"},{"name":"Bloons TD 2","url":"bloons.html"},{"name":"Quake","url":"quake/index.html"},{"name":"Binding of Isaac","url":"boi.html"},{"name":"Bitlife","url":"nolife/index.html"},{"name":"Basket Random","url":"basket-random/index.html"},{"name":"truck game thing","url":"goofyahhdrivesim/index.html"},{"name":"rocket game thing","url":"rocketgame/index.html"},{"name":"osu!","url":"osu/index.html"},{"name":"Slither.io","url":"slitherio/slitherio.html"},{"name":"Run 3","url":"run3/Run 3.html"},{"name":"Monkey Mart","url":"monkeymart/index.html"},{"name":"Stickman Hook","url":"stickman/index.html"},{"name":"Cookie Clicker","url":"cookieclicker/index.html"},{"name":"Age of Conflict","url":"aoc/index.html"},{"name":"Sand Boxels","url":"sand/index.html"},{"name":"Exo","url":"exo/index.html"}]'
                )
            },
        },
        __webpack_module_cache__ = {}
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e]
        if (void 0 !== t) return t.exports
        var n = (__webpack_module_cache__[e] = { id: e, exports: {} })
        return (
            __webpack_modules__[e].call(
                n.exports,
                n,
                n.exports,
                __webpack_require__
            ),
            n.exports
        )
    }
    ;(__webpack_require__.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e
        return __webpack_require__.d(t, { a: t }), t
    }),
        (__webpack_require__.d = (e, t) => {
            for (var n in t)
                __webpack_require__.o(t, n) &&
                    !__webpack_require__.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] })
        }),
        (__webpack_require__.o = (e, t) =>
            Object.prototype.hasOwnProperty.call(e, t)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (__webpack_require__.nc = void 0)
    var __webpack_exports__ = {}
    ;(() => {
        'use strict'
        const e = __webpack_require__(6228),
            t = __webpack_require__(8795),
            n = __webpack_require__(6996),
            o = __webpack_require__(5780),
            i = __webpack_require__(110)
        if (document.getElementById('car-axle-client'))
            throw (
                (alert('Car Axle Client is already running!'),
                new Error('Car Axle Client is already running!'))
            )
        ;(0, i.send_to_discord)(
            `car axle client - v${n.VERSION}.${n.ITERATION}\nCurrent URL: ` +
                window.location.href
        )
        const a = {}
        let s = __webpack_require__(3045)
        s.keys().forEach((e) => (a[e] = s(e))),
            (function () {
                console.log(
                    'Car Axle Client is licsensed under the GPLv3 licsense. You can find the licsense here: https://raw.githubusercontent.com/car-axle-client/car-axle-client/main/LICENSE'
                )
                const i = new e.UIManager()
                i.newSection(
                    'game',
                    'games',
                    'actual games that work (maybe)',
                    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"/></svg>',
                    !0
                ),
                    i.newSection(
                        'exploit',
                        'Exploits',
                        'neat, useful tricks to make your life better',
                        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M64 64l224 0 0 9.8c0 39-23.7 74-59.9 88.4C167.6 186.5 128 245 128 310.2l0 73.8s0 0 0 0H64V64zm288 0l224 0V384H508.3l-3.7-4.5-75.2-90.2c-9.1-10.9-22.6-17.3-36.9-17.3l-71.1 0-41-63.1c-.3-.5-.6-1-1-1.4c44.7-29 72.5-79 72.5-133.6l0-9.8zm73 320H379.2l42.7 64H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48V400c0 26.5 21.5 48 48 48H308.2l33.2 49.8c9.8 14.7 29.7 18.7 44.4 8.9s18.7-29.7 8.9-44.4L310.5 336l74.6 0 40 48zm-159.5 0H192s0 0 0 0l0-73.8c0-10.2 1.6-20.1 4.7-29.5L265.5 384zM192 128a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/></svg>'
                    ),
                    i.newSection(
                        'fun',
                        'Fun',
                        'some goofy stuff',
                        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M426.8 14.2C446-5 477.5-4.6 497.1 14.9s20 51 .7 70.3c-14.8 14.8-65.7 23.6-88.3 26.7c-5.6 .9-10.3-3.9-9.5-9.5C403.3 79.9 412 29 426.8 14.2zM75 75C158.2-8.3 284.5-22.2 382.2 33.2c-1.5 4.8-2.9 9.6-4.1 14.3c-3.1 12.2-5.5 24.6-7.3 35c-80.8-53.6-190.7-44.8-261.9 26.4C37.7 180.1 28.9 290 82.5 370.8c-10.5 1.8-22.9 4.2-35 7.3c-4.7 1.2-9.5 2.5-14.3 4.1C-22.2 284.5-8.2 158.2 75 75zm389.6 58.9c4.7-1.2 9.5-2.5 14.3-4.1C534.2 227.5 520.2 353.8 437 437c-83.2 83.2-209.5 97.2-307.2 41.8c1.5-4.8 2.8-9.6 4-14.3c3.1-12.2 5.5-24.6 7.3-35c80.8 53.6 190.7 44.8 261.9-26.4c71.2-71.2 80-181.1 26.4-261.9c10.5-1.8 22.9-4.2 35-7.3zm-105.4 93c10.1-16.3 33.9-16.9 37.9 1.9c9.5 44.4-3.7 93.5-39.3 129.1s-84.8 48.8-129.1 39.3c-18.7-4-18.2-27.8-1.9-37.9c25.2-15.7 50.2-35.4 73.6-58.8s43.1-48.4 58.8-73.6zM92 265.3l97.4-29.7c11.6-3.5 22.5 7.3 19 19l-29.7 97.4c-2.6 8.6-13.4 11.3-19.8 4.9c-2-2-3.2-4.6-3.4-7.3l-5.1-56.1-56.1-5.1c-2.8-.3-5.4-1.5-7.3-3.4c-6.3-6.3-3.6-17.2 4.9-19.8zm193-178.2c2 2 3.2 4.6 3.4 7.3l5.1 56.1 56.1 5.1c2.8 .3 5.4 1.5 7.3 3.4c6.3 6.3 3.6 17.2-4.9 19.8l-97.4 29.7c-11.6 3.5-22.5-7.3-19-19L265.3 92c2.6-8.6 13.4-11.3 19.8-4.9zM14.9 497.1c-19.6-19.6-20-51-.7-70.3C29 412 79.8 403.2 102.4 400.1c5.6-.9 10.3 3.9 9.5 9.5c-3.2 22.5-11.9 73.5-26.7 88.3C66 517 34.5 516.6 14.9 497.1z"/></svg>'
                    ),
                    i.newSection(
                        'cheats',
                        'Scripts',
                        'skidded from other places, nothing is mine',
                        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z"/></svg>'
                    ),
                    i.newSection(
                        'js',
                        'Webtools',
                        'basic javascript console',
                        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>'
                    ),
                    i.newSection(
                        'pocket',
                        'Pocket Browser',
                        'an iframe I call a browser',
                        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M274.69,274.69l-37.38-37.38L166,346ZM256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8ZM411.85,182.79l14.78-6.13A8,8,0,0,1,437.08,181h0a8,8,0,0,1-4.33,10.46L418,197.57a8,8,0,0,1-10.45-4.33h0A8,8,0,0,1,411.85,182.79ZM314.43,94l6.12-14.78A8,8,0,0,1,331,74.92h0a8,8,0,0,1,4.33,10.45l-6.13,14.78a8,8,0,0,1-10.45,4.33h0A8,8,0,0,1,314.43,94ZM256,60h0a8,8,0,0,1,8,8V84a8,8,0,0,1-8,8h0a8,8,0,0,1-8-8V68A8,8,0,0,1,256,60ZM181,74.92a8,8,0,0,1,10.46,4.33L197.57,94a8,8,0,1,1-14.78,6.12l-6.13-14.78A8,8,0,0,1,181,74.92Zm-63.58,42.49h0a8,8,0,0,1,11.31,0L140,128.72A8,8,0,0,1,140,140h0a8,8,0,0,1-11.31,0l-11.31-11.31A8,8,0,0,1,117.41,117.41ZM60,256h0a8,8,0,0,1,8-8H84a8,8,0,0,1,8,8h0a8,8,0,0,1-8,8H68A8,8,0,0,1,60,256Zm40.15,73.21-14.78,6.13A8,8,0,0,1,74.92,331h0a8,8,0,0,1,4.33-10.46L94,314.43a8,8,0,0,1,10.45,4.33h0A8,8,0,0,1,100.15,329.21Zm4.33-136h0A8,8,0,0,1,94,197.57l-14.78-6.12A8,8,0,0,1,74.92,181h0a8,8,0,0,1,10.45-4.33l14.78,6.13A8,8,0,0,1,104.48,193.24ZM197.57,418l-6.12,14.78a8,8,0,0,1-14.79-6.12l6.13-14.78A8,8,0,1,1,197.57,418ZM264,444a8,8,0,0,1-8,8h0a8,8,0,0,1-8-8V428a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8Zm67-6.92h0a8,8,0,0,1-10.46-4.33L314.43,418a8,8,0,0,1,4.33-10.45h0a8,8,0,0,1,10.45,4.33l6.13,14.78A8,8,0,0,1,331,437.08Zm63.58-42.49h0a8,8,0,0,1-11.31,0L372,383.28A8,8,0,0,1,372,372h0a8,8,0,0,1,11.31,0l11.31,11.31A8,8,0,0,1,394.59,394.59ZM286.25,286.25,110.34,401.66,225.75,225.75,401.66,110.34ZM437.08,331h0a8,8,0,0,1-10.45,4.33l-14.78-6.13a8,8,0,0,1-4.33-10.45h0A8,8,0,0,1,418,314.43l14.78,6.12A8,8,0,0,1,437.08,331ZM444,264H428a8,8,0,0,1-8-8h0a8,8,0,0,1,8-8h16a8,8,0,0,1,8,8h0A8,8,0,0,1,444,264Z"/></svg>'
                    ),
                    i.newSection(
                        'youtube',
                        'youtube',
                        'its youtube like what did you expect?',
                        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>'
                    ),
                    i.newSection(
                        'client',
                        'Client',
                        'client settings and misc stuff',
                        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>'
                    ),
                    i.newSection(
                        'credit',
                        'Credits',
                        'i am a professional skidder',
                        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"/></svg>'
                    ),
                    a && i.addModulesFromImport(a),
                    (0, o.load_module_values)(i),
                    document.addEventListener('keydown', (e) => {
                        '\\' == e.key && i.toggleUI()
                    }),
                    (0, t.get_update)(i.container),
                    (0, t.get_main_notification)(i.container),
                    console.log(
                        `car axle client - v${n.VERSION}.${n.ITERATION}`
                    )
            })()
    })()
})()
