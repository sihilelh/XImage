# XImage
A simple image Color Processor using Pure JavaScript and HTML Canvas

## Examples 
### To Initialize Image

    const image = new XImage(ImagePath);
### To Get Image Base/Average Color
This function takes few seconds to return the image average Color ( Depending on your image size). Call this function inside an async function.

    const image = new XImage(ImagePath);
    const AvgColors = await image.GetAverageColor();
    
    /* AvgColors =
    { 	rgb:{
		    r: 0,
		    g: 0,
		    b: 0
			},
		hex: '#000000'
	}
	*/
   ### To Convert Hex to RGB
   

    const image = new XImage(null);
    var RGB = image.HexToRGB('#000000');
    
    /* RGB =  {
		    r: 0,
		    g: 0,
		    b: 0
			}
	*/
    
  ### To Convert RGB to Hex
    const image = new XImage(null);
    var Hex = image.RGBToHex( 255,0,0);
    
    /* 
    Hex = '#ff0000';
	*/
### To mount Image to Html Canvas

    const image = new XImage(ImagePath);
    image.MountToCanvas('#canvas_id');
