/* ----------------------------
/*  Name: XImage (Simple Image Color Processer)
   Author: Sihilel Himasara
   Version: 0.1
/* -------------------------- */
class XImage {
  constructor(imageURL) {
    this.ImageSrc = imageURL;
  }
  GetAvarageColor() {
    var imageURL = this.ImageSrc;
    return new Promise((resolve) => {
      var blockSize = 3,
        defaultRGB = { r: 0, g: 0, b: 0 },
        canvas = document.createElement("canvas"),
        context = canvas.getContext && canvas.getContext("2d"),
        data,
        width,
        height,
        i = -4,
        length,
        rgb = { r: 0, g: 0, b: 0 },
        count = 0;
      var base_image = new Image();
      base_image.src = imageURL;
      base_image.setAttribute("crossOrigin", "");
      canvas.setAttribute("crossOrigin", "");
      base_image.onload = function () {
        width = canvas.width = base_image.naturalWidth || base_image.width;
        height = canvas.height = base_image.naturalHeight || base_image.height;
        context.drawImage(base_image, 0, 0);
        try {
          data = context.getImageData(0, 0, width, height);
        } catch (e) {
          console.log(e);
          return defaultRGB;
        }
        length = data.data.length;
        while ((i += blockSize * 4) < length) {
          ++count;
          rgb.r += data.data[i];
          rgb.g += data.data[i + 1];
          rgb.b += data.data[i + 2];
        }
        rgb.r = ~~(rgb.r / count);
        rgb.g = ~~(rgb.g / count);
        rgb.b = ~~(rgb.b / count);

        var hex = () =>
          "#" +
          [rgb.r, rgb.g, rgb.b]
            .map((x) => {
              const hex = x.toString(16);
              return hex.length === 1 ? "0" + hex : hex;
            })
            .join("");
        var rData = {
          rgb: rgb,
          hex: hex(),
        };
        resolve(rData);
      };
    });
  }
  HexToRGB(Hex = "#000000") {
    var rgb = Hex.replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => "#" + r + r + g + g + b + b
    )
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16));
    return { R: rgb[0], G: rgb[1], B: rgb[2] };
  }
  RGBtoHex(R = 0, G = 0, B = 0) {
    var hex =
      "#" +
      [R, G, B]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("");
    return hex;
  }
  MountToCanvas(Dom = "") {
    var imageURL = this.ImageSrc;
    var canvas = document.querySelector(DOM),
      context = canvas.getContext && canvas.getContext("2d");
    var base_image = new Image();
    base_image.src = imageURL;
    base_image.setAttribute("crossOrigin", "");
    canvas.setAttribute("crossOrigin", "");
    base_image.onload = function () {
      canvas.width = base_image.naturalWidth || base_image.width;
      canvas.height = base_image.naturalHeight || base_image.height;
      context.drawImage(base_image, 0, 0);
    };
  }
}