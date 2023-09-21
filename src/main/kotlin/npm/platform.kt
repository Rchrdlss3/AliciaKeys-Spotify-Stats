@file:JsModule("platform")
@file:JsNonModule

package npm

import dataClasses.Product

@JsName("name")
external val name:String
@JsName("version")
external val version:String
@JsName("layout")
external val layout:String
@JsName("product")
external val product:Product
@JsName("manufacturer")
external val manufacturer:String?
@JsName("os")
external val os:String
@JsName("description")
external val description:String
@JsName("parse")
external val parse:String
@JsName("ua")
external val ua:String