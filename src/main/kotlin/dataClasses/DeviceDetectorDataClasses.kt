package dataClasses

import kotlinx.serialization.Serializable


@Serializable
data class Product(
    val architecture: Int?,
    val family: String?,
    val version: String?
)
@Serializable
data class Client (
    val type: String,
    val name: String,
    val version: String,
    val engine: String,
    val engineVersion: String
)

@Serializable
data class OS(
    val name: String,
    val version: String,
    val platform: String
)
@Serializable
data class Device(
    val type: String,
    val brand: String,
    val model: String
)

@Serializable
data class ParsedDeviceObject(
    val client: Client,
    val os: OS,
    val device: Device,
    val bot: String?
)