/**
 * we-cropper v1.2.0
 * (c) 2018 dlhandsome
 * @license MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      (global.WeCropper = factory());
}(this, (function () {
  'use strict';

  var device = void 0;
  var TOUCH_STATE = ['touchstarted', 'touchmoved', 'touchended'];

  function isFunction(obj) {
    return typeof obj === 'function'
  }

  function firstLetterUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  function setTouchState(instance) {
    var arg = [], len = arguments.length - 1;
    while (len-- > 0) arg[len] = arguments[len + 1];

    TOUCH_STATE.forEach(function (key, i) {
      if (arg[i] !== undefined) {
        instance[key] = arg[i];
      }
    });
  }

  function validator(instance, o) {
    Object.defineProperties(instance, o);
  }

  function getDevice() {
    if (!device) {
      device = wx.getSystemInfoSync();
    }
    return device
  }

  var tmp = {};

  var DEFAULT = {
    id: {
      default: 'cropper',
      get: function get() {
        return tmp.id
      },
      set: function set(value) {
        if (typeof (value) !== 'string') {
          console.error(("id：" + value + " is invalid"));
        }
        tmp.id = value;
      }
    },
    width: {
      default: 750,
      get: function get() {
        return tmp.width
      },
      set: function set(value) {
        if (typeof (value) !== 'number') {
          console.error(("width：" + value + " is invalid"));
        }
        tmp.width = value;
      }
    },
    height: {
      default: 750,
      get: function get() {
        return tmp.height
      },
      set: function set(value) {
        if (typeof (value) !== 'number') {
          console.error(("height：" + value + " is invalid"));
        }
        tmp.height = value;
      }
    },
    scale: {
      default: 2.5,
      get: function get() {
        return tmp.scale
      },
      set: function set(value) {
        if (typeof (value) !== 'number') {
          console.error(("scale：" + value + " is invalid"));
        }
        tmp.scale = value;
      }
    },
    zoom: {
      default: 5,
      get: function get() {
        return tmp.zoom
      },
      set: function set(value) {
        if (typeof (value) !== 'number') {
          console.error(("zoom：" + value + " is invalid"));
        } else if (value < 0 || value > 10) {
          console.error("zoom should be ranged in 0 ~ 10");
        }
        tmp.zoom = value;
      }
    },
    src: {
      default: 'cropper',
      get: function get() {
        return tmp.src
      },
      set: function set(value) {
        if (typeof (value) !== 'string') {
          console.error(("id：" + value + " is invalid"));
        }
        tmp.src = value;
      }
    },
    cut: {
      default: {},
      get: function get() {
        return tmp.cut
      },
      set: function set(value) {
        if (typeof (value) !== 'object') {
          console.error(("id：" + value + " is invalid"));
        }
        tmp.cut = value;
      }
    },
    onReady: {
      default: null,
      get: function get() {
        return tmp.ready
      },
      set: function set(value) {
        tmp.ready = value;
      }
    },
    onBeforeImageLoad: {
      default: null,
      get: function get() {
        return tmp.beforeImageLoad
      },
      set: function set(value) {
        tmp.beforeImageLoad = value;
      }
    },
    onImageLoad: {
      default: null,
      get: function get() {
        return tmp.imageLoad
      },
      set: function set(value) {
        tmp.imageLoad = value;
      }
    },
    onBeforeDraw: {
      default: null,
      get: function get() {
        return tmp.beforeDraw
      },
      set: function set(value) {
        tmp.beforeDraw = value;
      }
    }
  };

  function prepare() {
    var self = this;
    var ref = getDevice();
    var windowWidth = ref.windowWidth;

    self.attachPage = function () {
      var pages = getCurrentPages();
      //  获取到当前page上下文
      var pageContext = pages[pages.length - 1];
      //  把this依附在Page上下文的wecropper属性上，便于在page钩子函数中访问
      pageContext.wecropper = self;
    };

    self.createCtx = function () {
      var id = self.id;
      if (id) {
        self.ctx = wx.createCanvasContext(id);
      } else {
        console.error("constructor: create canvas context failed, 'id' must be valuable");
      }
    };

    self.deviceRadio = windowWidth / 750;
  }

  function observer() {
    var self = this;

    var EVENT_TYPE = ['ready', 'beforeImageLoad', 'beforeDraw', 'imageLoad'];

    self.on = function (event, fn) {
      if (EVENT_TYPE.indexOf(event) > -1) {
        if (typeof (fn) === 'function') {
          event === 'ready'
            ? fn(self)
            : self[("on" + (firstLetterUpper(event)))] = fn;
        }
      } else {
        console.error(("event: " + event + " is invalid"));
      }
      return self
    };
  }

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};


  /**
   * 获取图像区域隐含的像素数据
   * @param canvasId canvas标识
   * @param x 将要被提取的图像数据矩形区域的左上角 x 坐标
   * @param y 将要被提取的图像数据矩形区域的左上角 y 坐标
   * @param width 将要被提取的图像数据矩形区域的宽度
   * @param height 将要被提取的图像数据矩形区域的高度
   * @param done 完成回调
   */
  function getImageData(canvasId, x, y, width, height, done) {
    wx.canvasGetImageData({
      canvasId: canvasId,
      x: x,
      y: y,
      width: width,
      height: height,
      success: function success(res) {
        done(res);
      },
      fail: function fail(res) {
        done(null);
        console.error('canvasGetImageData error: ' + res);
      }
    });
  }

  function methods() {
    var self = this;

    var id = self.id;
    var deviceRadio = self.deviceRadio;
    var boundWidth = self.width; // 裁剪框默认宽度，即整个画布宽度
    var boundHeight = self.height; // 裁剪框默认高度，即整个画布高度
    var ref = self.cut;
    var x = ref.x; if (x === void 0) x = 0;
    var y = ref.y; if (y === void 0) y = 0;
    var width = ref.width; if (width === void 0) width = boundWidth;
    var height = ref.height; if (height === void 0) height = boundHeight;

    self.updateCanvas = function (rotateI) {
      self.rotateI = rotateI ? rotateI : self.rotateI
      if (self.croperTarget) {
        //  画布绘制图片
        self.ctx.save()
        self.ctx.translate(self.tranlateX, self.tranlateY)
        self.ctx.rotate(self.rotateI * 90 * Math.PI / 180)
        self.ctx.drawImage(self.croperTarget, self.imgLeft, (self.imgTop+y)/2-15, self.scaleWidth, self.scaleHeight);
      }
      isFunction(self.onBeforeDraw) && self.onBeforeDraw(self.ctx, self);
      self.ctx.restore()
      self.setBoundStyle(); //	设置边界样式
      self.ctx.draw();
      return self
    };

    self.pushOrign = function (src) {
      self.rotateI = 0
      self.src = src;

      isFunction(self.onBeforeImageLoad) && self.onBeforeImageLoad(self.ctx, self);

      wx.getImageInfo({
        src: src,
        success: function success(res) {
          var innerAspectRadio = res.width / res.height;

          self.croperTarget = res.path;

          if (innerAspectRadio < width / height) {
            self.rectX = x;
            self.baseWidth = width;
            self.baseHeight = width / innerAspectRadio;
            self.rectY = y - Math.abs((height - self.baseHeight) / 2);
          } else {
            self.rectY = y;
            self.baseWidth = height * innerAspectRadio;
            self.baseHeight = height;
            self.rectX = x - Math.abs((width - self.baseWidth) / 2);
          }

          self.imgLeft = self.rectX;
          self.imgTop = self.rectY;
          self.scaleWidth = self.baseWidth;
          self.scaleHeight = self.baseHeight;

          self.updateCanvas();

          isFunction(self.onImageLoad) && self.onImageLoad(self.ctx, self);
        }
      });

      self.update();
      return self
    };



    self.getCropperImage = function () {
      var args = [], len = arguments.length;
      while (len--) args[len] = arguments[len];

      var ARG_TYPE = toString.call(args[0]);
      var fn = args[args.length - 1];

      switch (ARG_TYPE) {
        case '[object Object]':
          var ref = args[0];
          var quality = ref.quality; if (quality === void 0) quality = 10;

          if (typeof (quality) !== 'number') {
            console.error(("quality：" + quality + " is invalid"));
          } else if (quality < 0 || quality > 10) {
            console.error("quality should be ranged in 0 ~ 10");
          }
          wx.canvasToTempFilePath({
            canvasId: id,
            x: x,
            y:  -y,
            width: width,
            height: height,
            destWidth: width * quality / (deviceRadio * 10),
            destHeight: height * quality / (deviceRadio * 10),
            success: function success(res) {
              isFunction(fn) && fn.call(self, res.tempFilePath);
            },
            fail: function fail(res) {
              isFunction(fn) && fn.call(self, null);
            }
          }); break
        case '[object Function]':
          wx.canvasToTempFilePath({
            canvasId: id,
            x: x,
            y: -y,
            width: width,
            height: height,
            destWidth: width / deviceRadio,
            destHeight: height / deviceRadio,
            success: function success(res) {
              isFunction(fn) && fn.call(self, res.tempFilePath);
            },
            fail: function fail(res) {
              isFunction(fn) && fn.call(self, null);
            }
          }); break
      }

      return self
    };
  }

  /**
   * 获取最新缩放值
   * @param oldScale 上一次触摸结束后的缩放值
   * @param oldDistance 上一次触摸结束后的双指距离
   * @param zoom 缩放系数
   * @param touch0 第一指touch对象
   * @param touch1 第二指touch对象
   * @returns {*}
   */
  var getNewScale = function (oldScale, oldDistance, zoom, touch0, touch1) {
    var xMove, yMove, newDistance;
    // 计算二指最新距离
    xMove = Math.round(touch1.x - touch0.x);
    yMove = Math.round(touch1.y - touch0.y);
    newDistance = Math.round(Math.sqrt(xMove * xMove + yMove * yMove));

    return oldScale + 0.001 * zoom * (newDistance - oldDistance)
  };

  function update() {
    var self = this;

    if (!self.src) { return }

    self.__oneTouchStart = function (touch) {
      self.touchX0 = Math.round(touch.x);
      self.touchY0 = Math.round(touch.y);
    };

    self.__oneTouchMove = function (touch) {
      var xMove, yMove;
      // 计算单指移动的距离
      if (self.touchended) {
        return self.updateCanvas()
      }
      xMove = Math.round(touch.x - self.touchX0);
      yMove = Math.round(touch.y - self.touchY0);
      if (self.rotateI % 4 == 0) {
        var imgLeft = Math.round(self.rectX + xMove);
        var imgTop = Math.round(self.rectY + yMove);
      } else if (self.rotateI % 4 == 1) {
        var imgLeft = Math.round(self.rectX + yMove);
        var imgTop = Math.round(self.rectY - xMove);
      } else if (self.rotateI % 4 == 2) {
        var imgLeft = Math.round(self.rectX - xMove);
        var imgTop = Math.round(self.rectY - yMove);
      } else if (self.rotateI % 4 == 3) {
        var imgLeft = Math.round(self.rectX - yMove);
        var imgTop = Math.round(self.rectY + xMove);
      }
      self.outsideBound(imgLeft, imgTop);
      self.updateCanvas();
    };

    self.__twoTouchStart = function (touch0, touch1) {
      var xMove, yMove, oldDistance;

      self.touchX1 = Math.round(self.rectX + self.scaleWidth / 2);
      self.touchY1 = Math.round(self.rectY + self.scaleHeight / 2);

      // 计算两指距离
      xMove = Math.round(touch1.x - touch0.x);
      yMove = Math.round(touch1.y - touch0.y);
      oldDistance = Math.round(Math.sqrt(xMove * xMove + yMove * yMove));

      self.oldDistance = oldDistance;
    };

    self.__twoTouchMove = function (touch0, touch1) {
      var oldScale = self.oldScale;
      var oldDistance = self.oldDistance;
      var scale = self.scale;
      var zoom = self.zoom;

      self.newScale = getNewScale(oldScale, oldDistance, zoom, touch0, touch1);

      //  设定缩放范围
      self.newScale <= 0.2 && (self.newScale = oldScale - 0.001 * zoom * (newDistance - oldDistance));
      self.newScale >= scale && (self.newScale = scale);

      self.scaleWidth = Math.round(self.newScale * self.baseWidth);
      self.scaleHeight = Math.round(self.newScale * self.baseHeight);
      var imgLeft = Math.round(self.touchX1 - self.scaleWidth / 2);
      var imgTop = Math.round(self.touchY1 - self.scaleHeight / 2);

      self.outsideBound(imgLeft, imgTop);

      self.updateCanvas();
    };

    self.__xtouchEnd = function () {
      self.oldScale = self.newScale;
      self.rectX = self.imgLeft;
      self.rectY = self.imgTop;
    };
  }

  var handle = {
    //  图片手势初始监测
    touchStart: function touchStart(e) {
      var self = this;
      var ref = e.touches;
      var touch0 = ref[0];
      var touch1 = ref[1];

      setTouchState(self, true, null, null);

      // 计算第一个触摸点的位置，并参照改点进行缩放
      self.__oneTouchStart(touch0);

      // 两指手势触发
      if (e.touches.length >= 2) {
        self.__twoTouchStart(touch0, touch1);
      }
    },

    //  图片手势动态缩放
    touchMove: function touchMove(e) {
      var self = this;
      var ref = e.touches;
      var touch0 = ref[0];
      var touch1 = ref[1];

      setTouchState(self, null, true);

      // 单指手势时触发
      if (e.touches.length === 1) {
        self.__oneTouchMove(touch0);
      }
      // 两指手势触发
      if (e.touches.length >= 2) {
        self.__twoTouchMove(touch0, touch1);
      }
    },

    touchEnd: function touchEnd(e) {
      var self = this;

      setTouchState(self, false, false, true);
      self.__xtouchEnd();
    }
  };

  function cut() {
    var self = this;
    var boundWidth = self.width; // 裁剪框默认宽度，即整个画布宽度
    var boundHeight = self.height;
    // 裁剪框默认高度，即整个画布高度
    var ref = self.cut;
    var x = ref.x; if (x === void 0) x = 0;
    var y = ref.y; if (y === void 0) y = 0;
    var width = ref.width; if (width === void 0) width = boundWidth;
    var height = ref.height; if (height === void 0) height = boundHeight;

    /**
     * 设置边界
     * @param imgLeft 图片左上角横坐标值
     * @param imgTop 图片左上角纵坐标值
     */
    self.outsideBound = function (imgLeft, imgTop) {

      self.imgLeft = imgLeft
      self.imgTop = imgTop



      // self.imgLeft = imgLeft >= x
      //   ? x
      //   : self.scaleWidth + imgLeft - x <= width
      //     ? x + width - self.scaleWidth
      //     :	imgLeft;

      // self.imgTop = imgTop >= y
      //   ? y
      //   : self.scaleHeight + imgTop - y <= height
      //     ? y + height - self.scaleHeight
      //     : imgTop;
      // console.log(imgLeft)
    };

    /**
     * 设置边界样式
     * @param color	边界颜色
     */
    x = -x + x
    y = -y
    self.setBoundStyle = function (ref) {
      if (ref === void 0) ref = {};
      var color = ref.color; if (color === void 0) color = '#04b00f';
      var mask = ref.mask; if (mask === void 0) mask = 'rgba(0, 0, 0, 0.3)';
      var lineWidth = ref.lineWidth; if (lineWidth === void 0) lineWidth = 1;
      // console.log(x,y)
      var boundOption = [
        {
          start: { x: x - lineWidth, y: y + 10 - lineWidth },
          step1: { x: x - lineWidth, y: y - lineWidth },
          step2: { x: x + 10 - lineWidth, y: y - lineWidth }
        },
        {
          start: { x: x - lineWidth, y: y + height - 10 + lineWidth },
          step1: { x: x - lineWidth, y: y + height + lineWidth },
          step2: { x: x + 10 - lineWidth, y: y + height + lineWidth }
        },
        {
          start: { x: x + width - 10 + lineWidth, y: y - lineWidth },
          step1: { x: x + width + lineWidth, y: y - lineWidth },
          step2: { x: x + width + lineWidth, y: y + 10 - lineWidth }
        },
        {
          start: { x: x + width + lineWidth, y: y + height - 10 + lineWidth },
          step1: { x: x + width + lineWidth, y: y + height + lineWidth },
          step2: { x: x + width - 10 + lineWidth, y: y + height + lineWidth }
        }
      ];

      // 绘制半透明层
      self.ctx.beginPath();
      self.ctx.setFillStyle(mask);
      self.ctx.fillRect(0, 0, x, boundHeight);
      self.ctx.fillRect(x, 0, width, y);
      self.ctx.fillRect(x, y + height, width, boundHeight - y - height);
      self.ctx.fillRect(x + width, 0, boundWidth - x - width, boundHeight);
      self.ctx.fill();

      boundOption.forEach(function (op) {
        self.ctx.beginPath();
        self.ctx.setStrokeStyle(color);
        self.ctx.setLineWidth(lineWidth);
        self.ctx.moveTo(op.start.x, op.start.y);
        self.ctx.lineTo(op.step1.x, op.step1.y);
        self.ctx.lineTo(op.step2.x, op.step2.y);
        self.ctx.stroke();
      });
    };
  }

  var version = "1.2.0";

  var WeCropper = function WeCropper(params) {
    var self = this;
    var _default = {};

    validator(self, DEFAULT);

    Object.keys(DEFAULT).forEach(function (key) {
      _default[key] = DEFAULT[key].default;
    });
    Object.assign(self, _default, params);

    self.prepare();
    self.attachPage();
    self.createCtx();
    self.observer();
    self.cutt();
    self.methods();
    self.init();
    self.update();

    return self
  };

  WeCropper.prototype.init = function init() {
    var self = this;
    var src = self.src;

    self.version = version;

    typeof self.onReady === 'function' && self.onReady(self.ctx, self);

    if (src) {
      self.pushOrign(src);
    }
    setTouchState(self, false, false, false);

    self.oldScale = 1;
    self.newScale = 1;

    return self
  };

  Object.assign(WeCropper.prototype, handle);

  WeCropper.prototype.prepare = prepare;
  WeCropper.prototype.observer = observer;
  WeCropper.prototype.methods = methods;
  WeCropper.prototype.cutt = cut;
  WeCropper.prototype.update = update;

  return WeCropper;

})));
