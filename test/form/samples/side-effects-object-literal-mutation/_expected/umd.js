(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.bundle = {}));
}(this, function (exports) { 'use strict';

	const retained1 = { x: {} };
	retained1.y = 1;
	retained1.x.y = 2;

	const retained2 = { x: {} };
	retained2.y.z = 1;

	const retained3 = { x: {} };
	delete retained3.x;
	retained3.x.y = 2;

	const retained4 = { x: undefined };
	retained4.x.y = 2;

	const retained5 = { x: null };
	retained5.x.y = 2;

	const retained6 = { x: { y: {} } };
	retained6.x = {};
	retained6.x.y.z = 3;

	const retained7 = { x: { y: globalVar } };
	const retained8 = { x: retained7.x };
	retained8.x.y.z = 3;

	exports.retained1 = retained1;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
