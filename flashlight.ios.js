var flashlight = require( "./flashlight-common" );
var device = AVCaptureDevice.defaultDeviceWithMediaType( AVMediaTypeVideo );

flashlight.on = function() {
	device.lockForConfiguration( null );
	device.torchMode = AVCaptureTorchMode.AVCaptureTorchModeOn;
	device.flashMode = AVCaptureFlashMode.AVCaptureFlashModeOn;
	device.unlockForConfiguration();
};
flashlight.off = function() {
	device.lockForConfiguration( null );
	device.torchMode = AVCaptureTorchMode.AVCaptureTorchModeOff;
	device.flashMode = AVCaptureFlashMode.AVCaptureFlashModeOff;
	device.unlockForConfiguration();
};

module.exports = flashlight;
