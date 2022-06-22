require("./index.css");
var $8WaNP$reactjsxruntime = require("react/jsx-runtime");
var $8WaNP$react = require("react");
var $8WaNP$reactdomclient = require("react-dom/client");
var $8WaNP$reactredux = require("react-redux");
var $8WaNP$reduxjstoolkit = require("@reduxjs/toolkit");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}













function $d1ebe3afcaacb175$export$2e2bcd8739ae039() {
    var totalQuestions = (0, $8WaNP$reactredux.useSelector)(function(state) {
        return state.steps.totalQuestions;
    });
    var questionIndex = (0, $8WaNP$reactredux.useSelector)(function(state) {
        return state.steps.questionIndex;
    });
    return /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("div", {
        className: "progressContainer",
        children: /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("div", {
            className: "progressBar",
            style: {
                width: questionIndex * 100 / totalQuestions + "%"
            }
        })
    });
}






var $ceeda983b215f221$export$7a3bdf7180628a3c = (0, $8WaNP$reduxjstoolkit.createSlice)({
    name: "app",
    initialState: {
        isPopinDisplayed: false
    },
    reducers: {
        setPopinDisplayed: function(state, param) {
            var payload = param.payload;
            state.isPopinDisplayed = payload;
        }
    }
});
var $ceeda983b215f221$export$50c21cec8230b12 = $ceeda983b215f221$export$7a3bdf7180628a3c.actions.setPopinDisplayed;
var $ceeda983b215f221$export$2e2bcd8739ae039 = $ceeda983b215f221$export$7a3bdf7180628a3c.reducer;





function $e8546d89c500583c$export$2e2bcd8739ae039(param) {
    var color = param.color, size = param.size;
    return /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 21 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
            d: "M5.62609 4L4.78204 4.82346L9.93799 9.85366L4.78204 14.8839L5.62609 15.7073L10.782 10.6771L15.938 15.7073L16.782 14.8839L11.6261 9.85366L16.782 4.82346L15.938 4L10.782 9.0302L5.62609 4Z",
            fill: "#7A1047",
            stroke: "#7A1047",
            "stroke-width": "0.5"
        })
    });
}




function $67e317f39f8c8c40$export$2e2bcd8739ae039(param) {
    var color = param.color, size = param.size;
    return /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
            d: "M11.8371 2.89771L12.7083 3.76892L6.47729 9.99998L12.7083 16.2311L11.8371 17.1022L5.17045 10.4356L4.75379 9.99998L5.17045 9.56439L11.8371 2.89771Z",
            fill: "#7A1047",
            stroke: "#7A1047",
            "stroke-width": "0.5"
        })
    });
}




function $bb48dbaf8706fd0c$export$2e2bcd8739ae039(param) {
    var color = param.color, size = param.size;
    return /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsxs)("svg", {
        width: "99",
        height: "26",
        viewBox: "0 0 99 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
                d: "M32.904 3.72658V7.47897H31.3265V3.80625C31.3265 2.56342 30.6971 1.8464 29.773 1.8464C28.9922 1.8464 28.2035 2.42798 28.1238 3.43977C28.1398 3.53537 28.1398 3.63894 28.1398 3.72658V7.47897H26.5623V3.80625C26.5623 2.56342 25.933 1.8464 25.0088 1.8464C24.1882 1.8464 23.3597 2.47578 23.3597 3.55927V7.48694H21.7822V0.635437H23.288V1.48789C23.8138 0.842575 24.5945 0.5 25.4071 0.5C26.4986 0.5 27.3192 1.04175 27.7653 1.93403C28.2672 1.00191 29.1914 0.5 30.1793 0.5C31.8762 0.5 32.9199 1.80656 32.9199 3.72658H32.904Z",
                fill: "#FFFBFA"
            }),
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
                d: "M33.5652 4.08509C33.5652 2.12524 35.0152 0.5 37.0706 0.5C39.1261 0.5 40.576 2.02964 40.576 4.02135C40.576 6.01307 39.1261 7.62237 37.0706 7.62237C35.0152 7.62237 33.5652 6.0768 33.5652 4.09305V4.08509ZM38.9428 4.06119C38.9428 2.78649 38.1143 1.80656 37.0706 1.80656C36.0269 1.80656 35.1984 2.77852 35.1984 4.06119C35.1984 5.34385 36.0269 6.31581 37.0706 6.31581C38.1143 6.31581 38.9428 5.34385 38.9428 4.06119Z",
                fill: "#FFFBFA"
            }),
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
                d: "M47.7223 3.67878V7.48694H46.1449V3.75845C46.1449 2.52358 45.5155 1.8464 44.5913 1.8464C43.7707 1.8464 42.9422 2.47578 42.9422 3.63894V7.48694H41.3647V0.635437H42.8705V1.48789C43.3883 0.842575 44.1452 0.5 44.9897 0.5C46.6866 0.5 47.7303 1.7508 47.7303 3.67878H47.7223Z",
                fill: "#FFFBFA"
            }),
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
                d: "M36.7677 24.7194C36.1144 24.9982 35.3098 25.1815 34.5928 25.1815C33.0074 25.1815 31.8283 24.4644 31.3343 23.1977C30.0915 24.6238 28.2591 25.4922 26.116 25.4922C22.9771 25.4922 20.9615 23.9068 20.9615 21.2379C20.8977 14.9998 30.928 17.1987 30.928 14.3784C30.928 12.7054 29.6533 11.7414 27.7572 11.7414C26.0523 11.7414 24.7139 12.4265 23.9411 14.0996L21.1447 12.7611C22.4832 10.0285 24.8413 8.72192 27.8528 8.72192C32.2027 8.72192 34.5928 10.9845 34.5928 15.0556V21.206C34.5928 21.8911 34.9991 22.2019 35.493 22.2019C35.8356 22.2019 36.1145 22.1381 36.2658 22.0505L36.7598 24.7194H36.7677ZM30.928 19.0071V17.5492C28.5061 18.7283 24.6581 18.2981 24.6581 20.9033C24.6581 22.0823 25.5902 22.7675 26.9844 22.7675C29.1275 22.7675 30.928 21.1184 30.928 19.0071Z",
                fill: "#FFFBFA"
            }),
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
                d: "M47.786 9.04053H51.4507L44.4 25.1814H42.1375L34.9673 9.04053H39.126L43.4122 19.8436L47.786 9.04053Z",
                fill: "#FFFBFA"
            }),
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
                d: "M51.9446 4.26031C51.9446 2.86611 53.0281 1.68701 54.4302 1.68701C55.8324 1.68701 56.9159 2.86611 56.9159 4.26031C56.9159 5.65451 55.8324 6.86547 54.4302 6.86547C53.0281 6.86547 51.9446 5.65451 51.9446 4.26031ZM52.4067 25.1892V9.04042H56.167V25.1892H52.4067Z",
                fill: "#FFFBFA"
            }),
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
                d: "M57.7764 22.2338L60.1346 20.1545C61.2818 21.9231 62.7716 22.8552 64.851 22.8552C66.7152 22.8552 67.8306 22.0824 67.7987 20.8954C67.7987 17.2944 58.358 20.1465 58.3261 13.7571C58.3261 10.8731 60.9313 8.72998 64.5323 8.72998C67.3605 8.72998 69.5913 9.75771 71.0173 12.084L68.4998 13.7571C67.3844 12.0203 66.293 11.3989 64.5562 11.3989C62.9389 11.3989 61.7598 12.1159 61.7598 13.295C61.7598 16.5853 71.2563 13.9483 71.2563 20.497C71.2563 23.5085 68.5874 25.4923 64.7713 25.4923C61.5447 25.4923 59.2104 24.3769 57.7525 22.2338H57.7764Z",
                fill: "#FFFBFA"
            }),
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
                d: "M73.7978 19.6922V12.0839H71.3759V9.04053H73.9253V6.27603L77.5263 3.94971V9.04053H83.143V12.0839H77.5263V19.8117C77.5263 21.7397 78.5859 22.5125 79.7889 22.5125C80.9043 22.5125 81.8045 22.2655 82.8641 21.429L83.4218 24.2572C82.1152 25.1894 80.6573 25.5001 79.0719 25.5001C76.0923 25.5001 73.7978 23.6039 73.7978 19.6922Z",
                fill: "#FFFBFA"
            }),
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
                d: "M98.782 16.0591C98.782 16.6486 98.7501 17.0868 98.6864 17.3338L98.4394 17.5808H87.1424C87.3257 20.7516 89.2536 22.4883 91.58 22.4883C93.1016 22.4883 94.464 21.8351 95.4917 20.0346L98.3438 21.5881C96.9178 24.1614 94.4002 25.4998 91.572 25.4998C86.3856 25.4998 83.3422 21.5562 83.3422 17.0231C83.3422 12.8006 86.6325 8.73755 91.4445 8.73755C95.2606 8.73755 98.774 11.7809 98.774 16.0671L98.782 16.0591ZM87.3894 15.1907H95.2128C94.8065 13.0476 93.2849 11.6853 91.4286 11.6853C89.4767 11.6853 87.955 13.0237 87.3894 15.1907Z",
                fill: "#FFFBFA"
            }),
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
                d: "M0 13.6611C0 6.78571 4.58094 1.98169 11.0182 1.98169C15.0972 1.98169 18.4911 4.05307 19.8693 7.22388L16.5392 8.98456C15.5035 6.91318 13.7747 5.21623 10.9465 5.21623C6.98694 5.21623 3.97546 8.66588 3.97546 13.6611C3.97546 19.0308 7.17814 22.2334 10.9783 22.2334C13.456 22.2334 15.5035 21.1659 16.6268 18.6245L19.9888 20.3214C18.3556 23.5241 15.1848 25.4999 10.8827 25.4999C5.46527 25.4999 0 21.7873 0 13.6611Z",
                fill: "#FFFBFA"
            })
        ]
    });
}




function $1607a9b47855e35d$export$2e2bcd8739ae039(param) {
    var color = param.color, size = param.size;
    return /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsxs)("svg", {
        width: "99",
        height: "25",
        viewBox: "0 0 99 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
                d: "M32.904 3.22658V6.97897H31.3266V3.30625C31.3266 2.06342 30.6972 1.3464 29.773 1.3464C28.9923 1.3464 28.2036 1.92798 28.1239 2.93977C28.1398 3.03537 28.1398 3.13894 28.1398 3.22658V6.97897H26.5624V3.30625C26.5624 2.06342 25.933 1.3464 25.0089 1.3464C24.1883 1.3464 23.3597 1.97578 23.3597 3.05927V6.98694H21.7823V0.135437H23.288V0.98789C23.8138 0.342575 24.5946 0 25.4072 0C26.4987 0 27.3193 0.541746 27.7654 1.43403C28.2673 0.501912 29.1915 0 30.1794 0C31.8763 0 32.92 1.30656 32.92 3.22658H32.904Z",
                fill: "#7A1047"
            }),
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
                d: "M33.5652 3.58509C33.5652 1.62524 35.0152 0 37.0707 0C39.1261 0 40.5761 1.52964 40.5761 3.52135C40.5761 5.51307 39.1261 7.12237 37.0707 7.12237C35.0152 7.12237 33.5652 5.5768 33.5652 3.59305V3.58509ZM38.9429 3.56119C38.9429 2.28649 38.1143 1.30656 37.0707 1.30656C36.027 1.30656 35.1985 2.27852 35.1985 3.56119C35.1985 4.84385 36.027 5.81581 37.0707 5.81581C38.1143 5.81581 38.9429 4.84385 38.9429 3.56119Z",
                fill: "#7A1047"
            }),
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
                d: "M47.7224 3.17878V6.98694H46.1449V3.25845C46.1449 2.02358 45.5155 1.3464 44.5914 1.3464C43.7708 1.3464 42.9422 1.97578 42.9422 3.13894V6.98694H41.3648V0.135437H42.8705V0.98789C43.3884 0.342575 44.1452 0 44.9897 0C46.6867 0 47.7303 1.2508 47.7303 3.17878H47.7224Z",
                fill: "#7A1047"
            }),
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
                d: "M36.7677 24.2194C36.1144 24.4982 35.3098 24.6815 34.5928 24.6815C33.0074 24.6815 31.8283 23.9644 31.3343 22.6977C30.0915 24.1238 28.2591 24.9922 26.116 24.9922C22.9771 24.9922 20.9615 23.4068 20.9615 20.7379C20.8977 14.4998 30.928 16.6987 30.928 13.8784C30.928 12.2054 29.6533 11.2414 27.7572 11.2414C26.0523 11.2414 24.7139 11.9265 23.9411 13.5996L21.1447 12.2611C22.4832 9.52849 24.8413 8.22192 27.8528 8.22192C32.2027 8.22192 34.5928 10.4845 34.5928 14.5556V20.706C34.5928 21.3911 34.9991 21.7019 35.493 21.7019C35.8356 21.7019 36.1145 21.6381 36.2658 21.5505L36.7598 24.2194H36.7677ZM30.928 18.5071V17.0492C28.5061 18.2283 24.6581 17.7981 24.6581 20.4033C24.6581 21.5823 25.5902 22.2675 26.9844 22.2675C29.1275 22.2675 30.928 20.6184 30.928 18.5071Z",
                fill: "#7A1047"
            }),
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
                d: "M47.786 8.54053H51.4508L44.4001 24.6814H42.1375L34.9673 8.54053H39.126L43.4122 19.3436L47.786 8.54053Z",
                fill: "#7A1047"
            }),
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
                d: "M51.9446 3.76031C51.9446 2.36611 53.0281 1.18701 54.4303 1.18701C55.8325 1.18701 56.916 2.36611 56.916 3.76031C56.916 5.15451 55.8325 6.36547 54.4303 6.36547C53.0281 6.36547 51.9446 5.15451 51.9446 3.76031ZM52.4067 24.6892V8.54042H56.1671V24.6892H52.4067Z",
                fill: "#7A1047"
            }),
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
                d: "M57.7764 21.7338L60.1346 19.6545C61.2818 21.4231 62.7716 22.3552 64.851 22.3552C66.7152 22.3552 67.8306 21.5824 67.7987 20.3954C67.7987 16.7944 58.358 19.6465 58.3261 13.2571C58.3261 10.3731 60.9313 8.22998 64.5323 8.22998C67.3605 8.22998 69.5913 9.25771 71.0173 11.584L68.4998 13.2571C67.3844 11.5203 66.293 10.8989 64.5562 10.8989C62.9389 10.8989 61.7598 11.6159 61.7598 12.795C61.7598 16.0853 71.2563 13.4483 71.2563 19.997C71.2563 23.0085 68.5874 24.9923 64.7713 24.9923C61.5447 24.9923 59.2104 23.8769 57.7525 21.7338H57.7764Z",
                fill: "#7A1047"
            }),
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
                d: "M73.7978 19.1922V11.5839H71.3759V8.54053H73.9253V5.77603L77.5263 3.44971V8.54053H83.143V11.5839H77.5263V19.3117C77.5263 21.2397 78.5859 22.0125 79.7889 22.0125C80.9043 22.0125 81.8045 21.7655 82.8641 20.929L83.4218 23.7572C82.1152 24.6894 80.6573 25.0001 79.0719 25.0001C76.0923 25.0001 73.7978 23.1039 73.7978 19.1922Z",
                fill: "#7A1047"
            }),
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
                d: "M98.782 15.5591C98.782 16.1486 98.7501 16.5868 98.6864 16.8338L98.4394 17.0808H87.1424C87.3257 20.2516 89.2536 21.9883 91.58 21.9883C93.1016 21.9883 94.464 21.3351 95.4917 19.5346L98.3438 21.0881C96.9178 23.6614 94.4002 24.9998 91.572 24.9998C86.3856 24.9998 83.3422 21.0562 83.3422 16.5231C83.3422 12.3006 86.6325 8.23755 91.4445 8.23755C95.2606 8.23755 98.774 11.2809 98.774 15.5671L98.782 15.5591ZM87.3894 14.6907H95.2128C94.8065 12.5476 93.2849 11.1853 91.4286 11.1853C89.4767 11.1853 87.955 12.5237 87.3894 14.6907Z",
                fill: "#7A1047"
            }),
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("path", {
                d: "M-6.10352e-05 13.1611C-6.10352e-05 6.28571 4.58088 1.48169 11.0181 1.48169C15.0971 1.48169 18.491 3.55307 19.8693 6.72388L16.5391 8.48456C15.5034 6.41318 13.7746 4.71623 10.9464 4.71623C6.98687 4.71623 3.9754 8.16588 3.9754 13.1611C3.9754 18.5308 7.17808 21.7334 10.9783 21.7334C13.456 21.7334 15.5034 20.6659 16.6268 18.1245L19.9888 19.8214C18.3556 23.0241 15.1848 24.9999 10.8827 24.9999C5.4652 24.9999 -6.10352e-05 21.2873 -6.10352e-05 13.1611Z",
                fill: "#7A1047"
            })
        ]
    });
}




function $35435fb22d85be50$export$2e2bcd8739ae039(param) {
    var name = param.name, _color = param.color, color = _color === void 0 ? "white" : _color, _size = param.size, size = _size === void 0 ? 20 : _size;
    var getIcon = function() {
        if (name === "arrow-left") return 0, $67e317f39f8c8c40$export$2e2bcd8739ae039;
        if (name === "cross") return 0, $e8546d89c500583c$export$2e2bcd8739ae039;
        if (name === "logo-light") return 0, $bb48dbaf8706fd0c$export$2e2bcd8739ae039;
        if (name === "logo-purple") return 0, $1607a9b47855e35d$export$2e2bcd8739ae039;
        return function() {
            return null;
        };
    };
    return getIcon()({
        color: color,
        size: size
    });
}




function $135d34f0d1722a73$export$2e2bcd8739ae039(param) {
    var isLight = param.isLight;
    var dispatch = (0, $8WaNP$reactredux.useDispatch)();
    return /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)((0, $8WaNP$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsxs)("div", {
            className: "headerContainer",
            style: {
                backgroundColor: isLight ? "" : "#fffbfa"
            },
            children: [
                /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsxs)("div", {
                    className: "headerContent",
                    children: [
                        isLight ? null : /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("div", {
                            className: "circle",
                            children: /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)((0, $35435fb22d85be50$export$2e2bcd8739ae039), {
                                name: "arrow-left"
                            })
                        }),
                        /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)((0, $35435fb22d85be50$export$2e2bcd8739ae039), {
                            name: isLight ? "logo-light" : "logo-purple"
                        }),
                        /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("div", {
                            className: "circle",
                            onClick: function() {
                                return dispatch((0, $ceeda983b215f221$export$50c21cec8230b12)(false));
                            },
                            children: /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)((0, $35435fb22d85be50$export$2e2bcd8739ae039), {
                                name: "cross"
                            })
                        })
                    ]
                }),
                isLight ? null : /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)((0, $d1ebe3afcaacb175$export$2e2bcd8739ae039), {})
            ]
        })
    });
}





function $64ce69d71d5df4fa$export$2e2bcd8739ae039(param) {
    var isVisible = param.isVisible;
    if (isVisible) return /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("section", {
        className: "popinContainer",
        children: /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)((0, $135d34f0d1722a73$export$2e2bcd8739ae039), {
            isLight: false
        })
    });
    return null;
}









function $a4dbafc3f2cc0bbc$export$2e2bcd8739ae039(param) {
    var _isLight = param.isLight, isLight = _isLight === void 0 ? false : _isLight, text = param.text, onClick = param.onClick;
    return /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("button", {
        className: isLight ? "light " : "",
        onClick: onClick,
        children: text
    });
}





function $c35d4a4981cb4f33$export$2e2bcd8739ae039() {
    var dispatch = (0, $8WaNP$reactredux.useDispatch)();
    return /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsxs)("section", {
        className: "bannerContainer",
        children: [
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsxs)("div", {
                className: "text",
                children: [
                    /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("p", {
                        className: "title",
                        children: "Besoin d'aide ?"
                    }),
                    /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("p", {
                        children: "Julie vous guide dans votre choix de vin."
                    }),
                    /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)((0, $a4dbafc3f2cc0bbc$export$2e2bcd8739ae039), {
                        text: "demander conseil",
                        isLight: true,
                        onClick: function() {
                            return dispatch((0, $ceeda983b215f221$export$50c21cec8230b12)(true));
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)("img", {
                src: "/assets/img/artisan.jpg",
                alt: ""
            })
        ]
    });
}





function $91b786905c14e19d$var$App() {
    var isPopinDisplayed = (0, $8WaNP$reactredux.useSelector)(function(state) {
        return state.app.isPopinDisplayed;
    });
    return /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsxs)((0, $8WaNP$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)((0, $c35d4a4981cb4f33$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)((0, $64ce69d71d5df4fa$export$2e2bcd8739ae039), {
                isVisible: isPopinDisplayed
            })
        ]
    });
}
var $91b786905c14e19d$export$2e2bcd8739ae039 = $91b786905c14e19d$var$App;





var $fa88701bea84cd55$export$7a3bdf7180628a3c = (0, $8WaNP$reduxjstoolkit.createSlice)({
    name: "steps",
    initialState: {
        totalQuestions: 10,
        questionIndex: 4
    },
    reducers: {
        setTotalQuestions: function(state, param) {
            var payload = param.payload;
            state.totalQuestions = payload;
        },
        setQuestionIndex: function(state, param) {
            var payload = param.payload;
            state.questionIndex = payload;
        }
    }
});
var $fa88701bea84cd55$var$_actions = $fa88701bea84cd55$export$7a3bdf7180628a3c.actions;
var $fa88701bea84cd55$export$b0809bc975031d86 = $fa88701bea84cd55$var$_actions.setTotalQuestions, $fa88701bea84cd55$export$9382587aac3c0dfd = $fa88701bea84cd55$var$_actions.setQuestionIndex;
var $fa88701bea84cd55$export$2e2bcd8739ae039 = $fa88701bea84cd55$export$7a3bdf7180628a3c.reducer;


var $21cefb9226a363d2$export$6f57813fe9f31bf9 = (0, $8WaNP$reduxjstoolkit.configureStore)({
    reducer: {
        app: (0, $ceeda983b215f221$export$2e2bcd8739ae039),
        steps: (0, $fa88701bea84cd55$export$2e2bcd8739ae039)
    }
});



var $89705e6c43d6e535$var$root = (0, ($parcel$interopDefault($8WaNP$reactdomclient))).createRoot(document.getElementById("bannerEcv"));
$89705e6c43d6e535$var$root.render(/*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)((0, ($parcel$interopDefault($8WaNP$react))).StrictMode, {
    children: /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)((0, $8WaNP$reactredux.Provider), {
        store: (0, $21cefb9226a363d2$export$6f57813fe9f31bf9),
        children: /*#__PURE__*/ (0, $8WaNP$reactjsxruntime.jsx)((0, $91b786905c14e19d$export$2e2bcd8739ae039), {})
    })
}));


