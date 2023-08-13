@file:JsModule("device-detector-js")
@file:JsNonModule

package npm

import dataClasses.ParsedDeviceObject


//@JsName("DeviceDetector")
//external class DeviceDetector(
//    val parse
//)

@JsName("parse")
external fun parse(userAgent:String):ParsedDeviceObject

