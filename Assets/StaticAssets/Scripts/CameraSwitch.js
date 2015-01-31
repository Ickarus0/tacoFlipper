//Script for switching between cameras within your scene.

//You can place this script on an empty gameobject in your scene,
//just make sure to drag the appropriate camera into it's appropriate
//slot in the inspector.
// You can add more cameras if you like, make sure to add them down below into the "if" conditions
//and add them up top as a public variable.

public var rearCamera : Camera ;
public var driverCamera : Camera ;

function Update() {
	//this is a hard wired connection to the "F1" Key on the keyboard, switch it any keyboard key if you like
	//this will disable the camera inside of the car, and enable the camera outside of the vehicle
if (Input.GetKey(KeyCode.F1))
    {
        rearCamera.camera.enabled = false;
        driverCamera.camera.enabled = true;
    }
	//this is a hard wired connection to the "F2" Key on the keyboard, switch it any keyboard key if you like
	//this will disable the camera behind the car, and enable the camera inside of the vehicle
if (Input.GetKey(KeyCode.F2))
    {
        driverCamera.camera.enabled = false;
        rearCamera.camera.enabled = true;
    }
}