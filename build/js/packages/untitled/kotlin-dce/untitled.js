(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-core-js-legacy', 'kotlin-react', 'react-dom/client', 'kotlin-react-dom', 'kotlin-csstype', 'kotlin-react-core', 'kotlinx-coroutines-core', 'kotlinx-serialization-kotlinx-serialization-json-js-legacy', 'react'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-core-js-legacy'), require('kotlin-react'), require('react-dom/client'), require('kotlin-react-dom'), require('kotlin-csstype'), require('kotlin-react-core'), require('kotlinx-coroutines-core'), require('kotlinx-serialization-kotlinx-serialization-json-js-legacy'), require('react'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'untitled'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' is loaded prior to 'untitled'.");
    }
    if (typeof this['kotlin-react'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlin-react' was not found. Please, check whether 'kotlin-react' is loaded prior to 'untitled'.");
    }
    if (typeof this['react-dom/client'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'react-dom/client' was not found. Please, check whether 'react-dom/client' is loaded prior to 'untitled'.");
    }
    if (typeof this['kotlin-react-dom'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlin-react-dom' was not found. Please, check whether 'kotlin-react-dom' is loaded prior to 'untitled'.");
    }
    if (typeof this['kotlin-csstype'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlin-csstype' was not found. Please, check whether 'kotlin-csstype' is loaded prior to 'untitled'.");
    }
    if (typeof this['kotlin-react-core'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlin-react-core' was not found. Please, check whether 'kotlin-react-core' is loaded prior to 'untitled'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'untitled'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-legacy' is loaded prior to 'untitled'.");
    }
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'untitled'.");
    }
    root.untitled = factory(typeof untitled === 'undefined' ? {} : untitled, kotlin, this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'], this['kotlin-react'], this['react-dom/client'], this['kotlin-react-dom'], this['kotlin-csstype'], this['kotlin-react-core'], this['kotlinx-coroutines-core'], this['kotlinx-serialization-kotlinx-serialization-json-js-legacy'], react);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy, $module$kotlin_react, $module$react_dom_client, $module$kotlin_react_dom, $module$kotlin_csstype, $module$kotlin_react_core, $module$kotlinx_coroutines_core, $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy, $module$react) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var NullableSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.NullableSerializer;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var PluginGeneratedSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.PluginGeneratedSerialDescriptor;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException_init = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.MissingFieldException_init_61zpoe$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var getKClass = Kotlin.getKClass;
  var ReferenceArraySerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.ReferenceArraySerializer;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var equals = Kotlin.equals;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var create = $module$kotlin_react.react.create_gax9jq$;
  var createRoot = $module$react_dom_client.createRoot;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var html = $module$kotlin_react_dom.react.dom.html;
  var FC = $module$kotlin_react.react.FC_4y0n3r$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var MainScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.MainScope;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy.kotlinx.serialization.json.Json;
  var createKType = Kotlin.createKType;
  var useState = $module$react.useState;
  var serializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.serializer_ca95z9$;
  var KSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.KSerializer;
  var throwCCE = Kotlin.throwCCE;
  AlbumEnumClass.prototype = Object.create(Enum.prototype);
  AlbumEnumClass.prototype.constructor = AlbumEnumClass;
  NavigationLinks.prototype = Object.create(Enum.prototype);
  NavigationLinks.prototype.constructor = NavigationLinks;
  function AlbumCover(uri) {
    AlbumCover$Companion_getInstance();
    this.uri = uri;
  }
  function AlbumCover$Companion() {
    AlbumCover$Companion_instance = this;
  }
  AlbumCover$Companion.prototype.serializer = function () {
    return AlbumCover$$serializer_getInstance();
  };
  AlbumCover$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var AlbumCover$Companion_instance = null;
  function AlbumCover$Companion_getInstance() {
    if (AlbumCover$Companion_instance === null) {
      new AlbumCover$Companion();
    }
    return AlbumCover$Companion_instance;
  }
  function AlbumCover$$serializer() {
    this.descriptor_rvbaab$_0 = new PluginGeneratedSerialDescriptor('AlbumCover', this, 1);
    this.descriptor.addElement_ivxn3r$('uri', false);
    AlbumCover$$serializer_instance = this;
  }
  Object.defineProperty(AlbumCover$$serializer.prototype, 'descriptor', {configurable: true, get: function () {
    return this.descriptor_rvbaab$_0;
  }});
  AlbumCover$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.uri);
    output.endStructure_24f42q$(this.descriptor);
  };
  AlbumCover$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case -1:
          break loopLabel;
        default:
          throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return AlbumCover_init(bitMask0, local0, null);
  };
  AlbumCover$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer];
  };
  AlbumCover$$serializer.$metadata$ = {kind: Kind_OBJECT, simpleName: '$serializer', interfaces: [GeneratedSerializer]};
  var AlbumCover$$serializer_instance = null;
  function AlbumCover$$serializer_getInstance() {
    if (AlbumCover$$serializer_instance === null) {
      new AlbumCover$$serializer();
    }
    return AlbumCover$$serializer_instance;
  }
  function AlbumCover_init(seen1, uri, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(AlbumCover.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('uri');
    else
      $this.uri = uri;
    return $this;
  }
  AlbumCover.$metadata$ = {kind: Kind_CLASS, simpleName: 'AlbumCover', interfaces: []};
  AlbumCover.prototype.component1 = function () {
    return this.uri;
  };
  AlbumCover.prototype.copy_61zpoe$ = function (uri) {
    return new AlbumCover(uri === void 0 ? this.uri : uri);
  };
  AlbumCover.prototype.toString = function () {
    return 'AlbumCover(uri=' + Kotlin.toString(this.uri) + ')';
  };
  AlbumCover.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.uri) | 0;
    return result;
  };
  AlbumCover.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.uri, other.uri))));
  };
  function Image(uri) {
    Image$Companion_getInstance();
    this.uri = uri;
  }
  function Image$Companion() {
    Image$Companion_instance = this;
  }
  Image$Companion.prototype.serializer = function () {
    return Image$$serializer_getInstance();
  };
  Image$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Image$Companion_instance = null;
  function Image$Companion_getInstance() {
    if (Image$Companion_instance === null) {
      new Image$Companion();
    }
    return Image$Companion_instance;
  }
  function Image$$serializer() {
    this.descriptor_kttvls$_0 = new PluginGeneratedSerialDescriptor('Image', this, 1);
    this.descriptor.addElement_ivxn3r$('uri', false);
    Image$$serializer_instance = this;
  }
  Object.defineProperty(Image$$serializer.prototype, 'descriptor', {configurable: true, get: function () {
    return this.descriptor_kttvls$_0;
  }});
  Image$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.uri);
    output.endStructure_24f42q$(this.descriptor);
  };
  Image$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case -1:
          break loopLabel;
        default:
          throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Image_init(bitMask0, local0, null);
  };
  Image$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer];
  };
  Image$$serializer.$metadata$ = {kind: Kind_OBJECT, simpleName: '$serializer', interfaces: [GeneratedSerializer]};
  var Image$$serializer_instance = null;
  function Image$$serializer_getInstance() {
    if (Image$$serializer_instance === null) {
      new Image$$serializer();
    }
    return Image$$serializer_instance;
  }
  function Image_init(seen1, uri, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Image.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('uri');
    else
      $this.uri = uri;
    return $this;
  }
  Image.$metadata$ = {kind: Kind_CLASS, simpleName: 'Image', interfaces: []};
  Image.prototype.component1 = function () {
    return this.uri;
  };
  Image.prototype.copy_61zpoe$ = function (uri) {
    return new Image(uri === void 0 ? this.uri : uri);
  };
  Image.prototype.toString = function () {
    return 'Image(uri=' + Kotlin.toString(this.uri) + ')';
  };
  Image.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.uri) | 0;
    return result;
  };
  Image.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.uri, other.uri))));
  };
  function DiscArtists(name, uri, image) {
    DiscArtists$Companion_getInstance();
    this.name = name;
    this.uri = uri;
    this.image = image;
  }
  function DiscArtists$Companion() {
    DiscArtists$Companion_instance = this;
  }
  DiscArtists$Companion.prototype.serializer = function () {
    return DiscArtists$$serializer_getInstance();
  };
  DiscArtists$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var DiscArtists$Companion_instance = null;
  function DiscArtists$Companion_getInstance() {
    if (DiscArtists$Companion_instance === null) {
      new DiscArtists$Companion();
    }
    return DiscArtists$Companion_instance;
  }
  function DiscArtists$$serializer() {
    this.descriptor_up3e3g$_0 = new PluginGeneratedSerialDescriptor('DiscArtists', this, 3);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('uri', false);
    this.descriptor.addElement_ivxn3r$('image', false);
    DiscArtists$$serializer_instance = this;
  }
  Object.defineProperty(DiscArtists$$serializer.prototype, 'descriptor', {configurable: true, get: function () {
    return this.descriptor_up3e3g$_0;
  }});
  DiscArtists$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.name);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.uri);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, Image$$serializer_getInstance(), value.image);
    output.endStructure_24f42q$(this.descriptor);
  };
  DiscArtists$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0, local1, local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeSerializableElement_cvqn3c$(this.descriptor, 2, Image$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:
          throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return DiscArtists_init(bitMask0, local0, local1, local2, null);
  };
  DiscArtists$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, Image$$serializer_getInstance()];
  };
  DiscArtists$$serializer.$metadata$ = {kind: Kind_OBJECT, simpleName: '$serializer', interfaces: [GeneratedSerializer]};
  var DiscArtists$$serializer_instance = null;
  function DiscArtists$$serializer_getInstance() {
    if (DiscArtists$$serializer_instance === null) {
      new DiscArtists$$serializer();
    }
    return DiscArtists$$serializer_instance;
  }
  function DiscArtists_init(seen1, name, uri, image, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(DiscArtists.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('name');
    else
      $this.name = name;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('uri');
    else
      $this.uri = uri;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('image');
    else
      $this.image = image;
    return $this;
  }
  DiscArtists.$metadata$ = {kind: Kind_CLASS, simpleName: 'DiscArtists', interfaces: []};
  DiscArtists.prototype.component1 = function () {
    return this.name;
  };
  DiscArtists.prototype.component2 = function () {
    return this.uri;
  };
  DiscArtists.prototype.component3 = function () {
    return this.image;
  };
  DiscArtists.prototype.copy_tri7rz$ = function (name, uri, image) {
    return new DiscArtists(name === void 0 ? this.name : name, uri === void 0 ? this.uri : uri, image === void 0 ? this.image : image);
  };
  DiscArtists.prototype.toString = function () {
    return 'DiscArtists(name=' + Kotlin.toString(this.name) + (', uri=' + Kotlin.toString(this.uri)) + (', image=' + Kotlin.toString(this.image)) + ')';
  };
  DiscArtists.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.uri) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    return result;
  };
  DiscArtists.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.uri, other.uri) && Kotlin.equals(this.image, other.image)))));
  };
  function Artists(name, uri) {
    Artists$Companion_getInstance();
    this.name = name;
    this.uri = uri;
  }
  function Artists$Companion() {
    Artists$Companion_instance = this;
  }
  Artists$Companion.prototype.serializer = function () {
    return Artists$$serializer_getInstance();
  };
  Artists$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Artists$Companion_instance = null;
  function Artists$Companion_getInstance() {
    if (Artists$Companion_instance === null) {
      new Artists$Companion();
    }
    return Artists$Companion_instance;
  }
  function Artists$$serializer() {
    this.descriptor_ayy93j$_0 = new PluginGeneratedSerialDescriptor('Artists', this, 2);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('uri', false);
    Artists$$serializer_instance = this;
  }
  Object.defineProperty(Artists$$serializer.prototype, 'descriptor', {configurable: true, get: function () {
    return this.descriptor_ayy93j$_0;
  }});
  Artists$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.name);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.uri);
    output.endStructure_24f42q$(this.descriptor);
  };
  Artists$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0, local1;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:
          throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Artists_init(bitMask0, local0, local1, null);
  };
  Artists$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer];
  };
  Artists$$serializer.$metadata$ = {kind: Kind_OBJECT, simpleName: '$serializer', interfaces: [GeneratedSerializer]};
  var Artists$$serializer_instance = null;
  function Artists$$serializer_getInstance() {
    if (Artists$$serializer_instance === null) {
      new Artists$$serializer();
    }
    return Artists$$serializer_instance;
  }
  function Artists_init(seen1, name, uri, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Artists.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('name');
    else
      $this.name = name;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('uri');
    else
      $this.uri = uri;
    return $this;
  }
  Artists.$metadata$ = {kind: Kind_CLASS, simpleName: 'Artists', interfaces: []};
  Artists.prototype.component1 = function () {
    return this.name;
  };
  Artists.prototype.component2 = function () {
    return this.uri;
  };
  Artists.prototype.copy_puj7f4$ = function (name, uri) {
    return new Artists(name === void 0 ? this.name : name, uri === void 0 ? this.uri : uri);
  };
  Artists.prototype.toString = function () {
    return 'Artists(name=' + Kotlin.toString(this.name) + (', uri=' + Kotlin.toString(this.uri)) + ')';
  };
  Artists.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.uri) | 0;
    return result;
  };
  Artists.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.uri, other.uri)))));
  };
  function Tracks(uri, playcount, name, popularity, number, duration, explicit, playable, artists) {
    Tracks$Companion_getInstance();
    this.uri = uri;
    this.playcount = playcount;
    this.name = name;
    this.popularity = popularity;
    this.number = number;
    this.duration = duration;
    this.explicit = explicit;
    this.playable = playable;
    this.artists = artists;
  }
  function Tracks$Companion() {
    Tracks$Companion_instance = this;
  }
  Tracks$Companion.prototype.serializer = function () {
    return Tracks$$serializer_getInstance();
  };
  Tracks$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Tracks$Companion_instance = null;
  function Tracks$Companion_getInstance() {
    if (Tracks$Companion_instance === null) {
      new Tracks$Companion();
    }
    return Tracks$Companion_instance;
  }
  function Tracks$$serializer() {
    this.descriptor_2pbe8j$_0 = new PluginGeneratedSerialDescriptor('Tracks', this, 9);
    this.descriptor.addElement_ivxn3r$('uri', false);
    this.descriptor.addElement_ivxn3r$('playcount', false);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('popularity', false);
    this.descriptor.addElement_ivxn3r$('number', false);
    this.descriptor.addElement_ivxn3r$('duration', false);
    this.descriptor.addElement_ivxn3r$('explicit', false);
    this.descriptor.addElement_ivxn3r$('playable', false);
    this.descriptor.addElement_ivxn3r$('artists', false);
    Tracks$$serializer_instance = this;
  }
  Object.defineProperty(Tracks$$serializer.prototype, 'descriptor', {configurable: true, get: function () {
    return this.descriptor_2pbe8j$_0;
  }});
  Tracks$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.uri);
    output.encodeIntElement_ptg7oe$(this.descriptor, 1, value.playcount);
    output.encodeStringElement_iij8qq$(this.descriptor, 2, value.name);
    output.encodeIntElement_ptg7oe$(this.descriptor, 3, value.popularity);
    output.encodeIntElement_ptg7oe$(this.descriptor, 4, value.number);
    output.encodeIntElement_ptg7oe$(this.descriptor, 5, value.duration);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 6, value.explicit);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 7, value.playable);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 8, new ReferenceArraySerializer(getKClass(DiscArtists), DiscArtists$$serializer_getInstance()), value.artists);
    output.endStructure_24f42q$(this.descriptor);
  };
  Tracks$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0, local1, local2, local3, local4, local5, local6, local7, local8;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeIntElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeIntElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeIntElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeIntElement_szpzho$(this.descriptor, 5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeBooleanElement_szpzho$(this.descriptor, 6);
          bitMask0 |= 64;
          break;
        case 7:
          local7 = input.decodeBooleanElement_szpzho$(this.descriptor, 7);
          bitMask0 |= 128;
          break;
        case 8:
          local8 = input.decodeSerializableElement_cvqn3c$(this.descriptor, 8, new ReferenceArraySerializer(getKClass(DiscArtists), DiscArtists$$serializer_getInstance()), local8);
          bitMask0 |= 256;
          break;
        case -1:
          break loopLabel;
        default:
          throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Tracks_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, local7, local8, null);
  };
  Tracks$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.IntSerializer, internal.StringSerializer, internal.IntSerializer, internal.IntSerializer, internal.IntSerializer, internal.BooleanSerializer, internal.BooleanSerializer, new ReferenceArraySerializer(getKClass(DiscArtists), DiscArtists$$serializer_getInstance())];
  };
  Tracks$$serializer.$metadata$ = {kind: Kind_OBJECT, simpleName: '$serializer', interfaces: [GeneratedSerializer]};
  var Tracks$$serializer_instance = null;
  function Tracks$$serializer_getInstance() {
    if (Tracks$$serializer_instance === null) {
      new Tracks$$serializer();
    }
    return Tracks$$serializer_instance;
  }
  function Tracks_init(seen1, uri, playcount, name, popularity, number, duration, explicit, playable, artists, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Tracks.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('uri');
    else
      $this.uri = uri;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('playcount');
    else
      $this.playcount = playcount;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('name');
    else
      $this.name = name;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('popularity');
    else
      $this.popularity = popularity;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('number');
    else
      $this.number = number;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('duration');
    else
      $this.duration = duration;
    if ((seen1 & 64) === 0)
      throw MissingFieldException_init('explicit');
    else
      $this.explicit = explicit;
    if ((seen1 & 128) === 0)
      throw MissingFieldException_init('playable');
    else
      $this.playable = playable;
    if ((seen1 & 256) === 0)
      throw MissingFieldException_init('artists');
    else
      $this.artists = artists;
    return $this;
  }
  Tracks.$metadata$ = {kind: Kind_CLASS, simpleName: 'Tracks', interfaces: []};
  Tracks.prototype.component1 = function () {
    return this.uri;
  };
  Tracks.prototype.component2 = function () {
    return this.playcount;
  };
  Tracks.prototype.component3 = function () {
    return this.name;
  };
  Tracks.prototype.component4 = function () {
    return this.popularity;
  };
  Tracks.prototype.component5 = function () {
    return this.number;
  };
  Tracks.prototype.component6 = function () {
    return this.duration;
  };
  Tracks.prototype.component7 = function () {
    return this.explicit;
  };
  Tracks.prototype.component8 = function () {
    return this.playable;
  };
  Tracks.prototype.component9 = function () {
    return this.artists;
  };
  Tracks.prototype.copy_9a9q09$ = function (uri, playcount, name, popularity, number, duration, explicit, playable, artists) {
    return new Tracks(uri === void 0 ? this.uri : uri, playcount === void 0 ? this.playcount : playcount, name === void 0 ? this.name : name, popularity === void 0 ? this.popularity : popularity, number === void 0 ? this.number : number, duration === void 0 ? this.duration : duration, explicit === void 0 ? this.explicit : explicit, playable === void 0 ? this.playable : playable, artists === void 0 ? this.artists : artists);
  };
  Tracks.prototype.toString = function () {
    return 'Tracks(uri=' + Kotlin.toString(this.uri) + (', playcount=' + Kotlin.toString(this.playcount)) + (', name=' + Kotlin.toString(this.name)) + (', popularity=' + Kotlin.toString(this.popularity)) + (', number=' + Kotlin.toString(this.number)) + (', duration=' + Kotlin.toString(this.duration)) + (', explicit=' + Kotlin.toString(this.explicit)) + (', playable=' + Kotlin.toString(this.playable)) + (', artists=' + Kotlin.toString(this.artists)) + ')';
  };
  Tracks.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.uri) | 0;
    result = result * 31 + Kotlin.hashCode(this.playcount) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.popularity) | 0;
    result = result * 31 + Kotlin.hashCode(this.number) | 0;
    result = result * 31 + Kotlin.hashCode(this.duration) | 0;
    result = result * 31 + Kotlin.hashCode(this.explicit) | 0;
    result = result * 31 + Kotlin.hashCode(this.playable) | 0;
    result = result * 31 + Kotlin.hashCode(this.artists) | 0;
    return result;
  };
  Tracks.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.uri, other.uri) && Kotlin.equals(this.playcount, other.playcount) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.popularity, other.popularity) && Kotlin.equals(this.number, other.number) && Kotlin.equals(this.duration, other.duration) && Kotlin.equals(this.explicit, other.explicit) && Kotlin.equals(this.playable, other.playable) && Kotlin.equals(this.artists, other.artists)))));
  };
  function Discs(number, name, tracks) {
    Discs$Companion_getInstance();
    this.number = number;
    this.name = name;
    this.tracks = tracks;
  }
  function Discs$Companion() {
    Discs$Companion_instance = this;
  }
  Discs$Companion.prototype.serializer = function () {
    return Discs$$serializer_getInstance();
  };
  Discs$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Discs$Companion_instance = null;
  function Discs$Companion_getInstance() {
    if (Discs$Companion_instance === null) {
      new Discs$Companion();
    }
    return Discs$Companion_instance;
  }
  function Discs$$serializer() {
    this.descriptor_q3gd0j$_0 = new PluginGeneratedSerialDescriptor('Discs', this, 3);
    this.descriptor.addElement_ivxn3r$('number', false);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('tracks', false);
    Discs$$serializer_instance = this;
  }
  Object.defineProperty(Discs$$serializer.prototype, 'descriptor', {configurable: true, get: function () {
    return this.descriptor_q3gd0j$_0;
  }});
  Discs$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.number);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.name);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, new ReferenceArraySerializer(getKClass(Tracks), Tracks$$serializer_getInstance()), value.tracks);
    output.endStructure_24f42q$(this.descriptor);
  };
  Discs$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0, local1, local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeSerializableElement_cvqn3c$(this.descriptor, 2, new ReferenceArraySerializer(getKClass(Tracks), Tracks$$serializer_getInstance()), local2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:
          throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Discs_init(bitMask0, local0, local1, local2, null);
  };
  Discs$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer, new ReferenceArraySerializer(getKClass(Tracks), Tracks$$serializer_getInstance())];
  };
  Discs$$serializer.$metadata$ = {kind: Kind_OBJECT, simpleName: '$serializer', interfaces: [GeneratedSerializer]};
  var Discs$$serializer_instance = null;
  function Discs$$serializer_getInstance() {
    if (Discs$$serializer_instance === null) {
      new Discs$$serializer();
    }
    return Discs$$serializer_instance;
  }
  function Discs_init(seen1, number, name, tracks, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Discs.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('number');
    else
      $this.number = number;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('name');
    else
      $this.name = name;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('tracks');
    else
      $this.tracks = tracks;
    return $this;
  }
  Discs.$metadata$ = {kind: Kind_CLASS, simpleName: 'Discs', interfaces: []};
  Discs.prototype.component1 = function () {
    return this.number;
  };
  Discs.prototype.component2 = function () {
    return this.name;
  };
  Discs.prototype.component3 = function () {
    return this.tracks;
  };
  Discs.prototype.copy_6b1boi$ = function (number, name, tracks) {
    return new Discs(number === void 0 ? this.number : number, name === void 0 ? this.name : name, tracks === void 0 ? this.tracks : tracks);
  };
  Discs.prototype.toString = function () {
    return 'Discs(number=' + Kotlin.toString(this.number) + (', name=' + Kotlin.toString(this.name)) + (', tracks=' + Kotlin.toString(this.tracks)) + ')';
  };
  Discs.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.number) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.tracks) | 0;
    return result;
  };
  Discs.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.number, other.number) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.tracks, other.tracks)))));
  };
  function Releases(uri, name, cover, year, track_count, month, day) {
    Releases$Companion_getInstance();
    this.uri = uri;
    this.name = name;
    this.cover = cover;
    this.year = year;
    this.track_count = track_count;
    this.month = month;
    this.day = day;
  }
  function Releases$Companion() {
    Releases$Companion_instance = this;
  }
  Releases$Companion.prototype.serializer = function () {
    return Releases$$serializer_getInstance();
  };
  Releases$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Releases$Companion_instance = null;
  function Releases$Companion_getInstance() {
    if (Releases$Companion_instance === null) {
      new Releases$Companion();
    }
    return Releases$Companion_instance;
  }
  function Releases$$serializer() {
    this.descriptor_o1kyy9$_0 = new PluginGeneratedSerialDescriptor('Releases', this, 7);
    this.descriptor.addElement_ivxn3r$('uri', false);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('cover', false);
    this.descriptor.addElement_ivxn3r$('year', false);
    this.descriptor.addElement_ivxn3r$('track_count', false);
    this.descriptor.addElement_ivxn3r$('month', false);
    this.descriptor.addElement_ivxn3r$('day', false);
    Releases$$serializer_instance = this;
  }
  Object.defineProperty(Releases$$serializer.prototype, 'descriptor', {configurable: true, get: function () {
    return this.descriptor_o1kyy9$_0;
  }});
  Releases$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.uri);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.name);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, AlbumCover$$serializer_getInstance(), value.cover);
    output.encodeIntElement_ptg7oe$(this.descriptor, 3, value.year);
    output.encodeIntElement_ptg7oe$(this.descriptor, 4, value.track_count);
    output.encodeIntElement_ptg7oe$(this.descriptor, 5, value.month);
    output.encodeIntElement_ptg7oe$(this.descriptor, 6, value.day);
    output.endStructure_24f42q$(this.descriptor);
  };
  Releases$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0, local1, local2, local3, local4, local5, local6;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeSerializableElement_cvqn3c$(this.descriptor, 2, AlbumCover$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeIntElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeIntElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeIntElement_szpzho$(this.descriptor, 5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeIntElement_szpzho$(this.descriptor, 6);
          bitMask0 |= 64;
          break;
        case -1:
          break loopLabel;
        default:
          throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Releases_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, null);
  };
  Releases$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, AlbumCover$$serializer_getInstance(), internal.IntSerializer, internal.IntSerializer, internal.IntSerializer, internal.IntSerializer];
  };
  Releases$$serializer.$metadata$ = {kind: Kind_OBJECT, simpleName: '$serializer', interfaces: [GeneratedSerializer]};
  var Releases$$serializer_instance = null;
  function Releases$$serializer_getInstance() {
    if (Releases$$serializer_instance === null) {
      new Releases$$serializer();
    }
    return Releases$$serializer_instance;
  }
  function Releases_init(seen1, uri, name, cover, year, track_count, month, day, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Releases.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('uri');
    else
      $this.uri = uri;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('name');
    else
      $this.name = name;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('cover');
    else
      $this.cover = cover;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('year');
    else
      $this.year = year;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('track_count');
    else
      $this.track_count = track_count;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('month');
    else
      $this.month = month;
    if ((seen1 & 64) === 0)
      throw MissingFieldException_init('day');
    else
      $this.day = day;
    return $this;
  }
  Releases.$metadata$ = {kind: Kind_CLASS, simpleName: 'Releases', interfaces: []};
  Releases.prototype.component1 = function () {
    return this.uri;
  };
  Releases.prototype.component2 = function () {
    return this.name;
  };
  Releases.prototype.component3 = function () {
    return this.cover;
  };
  Releases.prototype.component4 = function () {
    return this.year;
  };
  Releases.prototype.component5 = function () {
    return this.track_count;
  };
  Releases.prototype.component6 = function () {
    return this.month;
  };
  Releases.prototype.component7 = function () {
    return this.day;
  };
  Releases.prototype.copy_llgetg$ = function (uri, name, cover, year, track_count, month, day) {
    return new Releases(uri === void 0 ? this.uri : uri, name === void 0 ? this.name : name, cover === void 0 ? this.cover : cover, year === void 0 ? this.year : year, track_count === void 0 ? this.track_count : track_count, month === void 0 ? this.month : month, day === void 0 ? this.day : day);
  };
  Releases.prototype.toString = function () {
    return 'Releases(uri=' + Kotlin.toString(this.uri) + (', name=' + Kotlin.toString(this.name)) + (', cover=' + Kotlin.toString(this.cover)) + (', year=' + Kotlin.toString(this.year)) + (', track_count=' + Kotlin.toString(this.track_count)) + (', month=' + Kotlin.toString(this.month)) + (', day=' + Kotlin.toString(this.day)) + ')';
  };
  Releases.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.uri) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.cover) | 0;
    result = result * 31 + Kotlin.hashCode(this.year) | 0;
    result = result * 31 + Kotlin.hashCode(this.track_count) | 0;
    result = result * 31 + Kotlin.hashCode(this.month) | 0;
    result = result * 31 + Kotlin.hashCode(this.day) | 0;
    return result;
  };
  Releases.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.uri, other.uri) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.cover, other.cover) && Kotlin.equals(this.year, other.year) && Kotlin.equals(this.track_count, other.track_count) && Kotlin.equals(this.month, other.month) && Kotlin.equals(this.day, other.day)))));
  };
  function Related(releases) {
    Related$Companion_getInstance();
    this.releases = releases;
  }
  function Related$Companion() {
    Related$Companion_instance = this;
  }
  Related$Companion.prototype.serializer = function () {
    return Related$$serializer_getInstance();
  };
  Related$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Related$Companion_instance = null;
  function Related$Companion_getInstance() {
    if (Related$Companion_instance === null) {
      new Related$Companion();
    }
    return Related$Companion_instance;
  }
  function Related$$serializer() {
    this.descriptor_hijre8$_0 = new PluginGeneratedSerialDescriptor('Related', this, 1);
    this.descriptor.addElement_ivxn3r$('releases', false);
    Related$$serializer_instance = this;
  }
  Object.defineProperty(Related$$serializer.prototype, 'descriptor', {configurable: true, get: function () {
    return this.descriptor_hijre8$_0;
  }});
  Related$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 0, new ReferenceArraySerializer(getKClass(Releases), Releases$$serializer_getInstance()), value.releases);
    output.endStructure_24f42q$(this.descriptor);
  };
  Related$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeSerializableElement_cvqn3c$(this.descriptor, 0, new ReferenceArraySerializer(getKClass(Releases), Releases$$serializer_getInstance()), local0);
          bitMask0 |= 1;
          break;
        case -1:
          break loopLabel;
        default:
          throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Related_init(bitMask0, local0, null);
  };
  Related$$serializer.prototype.childSerializers = function () {
    return [new ReferenceArraySerializer(getKClass(Releases), Releases$$serializer_getInstance())];
  };
  Related$$serializer.$metadata$ = {kind: Kind_OBJECT, simpleName: '$serializer', interfaces: [GeneratedSerializer]};
  var Related$$serializer_instance = null;
  function Related$$serializer_getInstance() {
    if (Related$$serializer_instance === null) {
      new Related$$serializer();
    }
    return Related$$serializer_instance;
  }
  function Related_init(seen1, releases, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Related.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('releases');
    else
      $this.releases = releases;
    return $this;
  }
  Related.$metadata$ = {kind: Kind_CLASS, simpleName: 'Related', interfaces: []};
  Related.prototype.component1 = function () {
    return this.releases;
  };
  Related.prototype.copy_98oqji$ = function (releases) {
    return new Related(releases === void 0 ? this.releases : releases);
  };
  Related.prototype.toString = function () {
    return 'Related(releases=' + Kotlin.toString(this.releases) + ')';
  };
  Related.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.releases) | 0;
    return result;
  };
  Related.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.releases, other.releases))));
  };
  function AlbumData(uri, name, cover, year, track_count, discs, copyrights, artists, related, month, day, type, label) {
    AlbumData$Companion_getInstance();
    this.uri = uri;
    this.name = name;
    this.cover = cover;
    this.year = year;
    this.track_count = track_count;
    this.discs = discs;
    this.copyrights = copyrights;
    this.artists = artists;
    this.related = related;
    this.month = month;
    this.day = day;
    this.type = type;
    this.label = label;
  }
  function AlbumData$Companion() {
    AlbumData$Companion_instance = this;
  }
  AlbumData$Companion.prototype.serializer = function () {
    return AlbumData$$serializer_getInstance();
  };
  AlbumData$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var AlbumData$Companion_instance = null;
  function AlbumData$Companion_getInstance() {
    if (AlbumData$Companion_instance === null) {
      new AlbumData$Companion();
    }
    return AlbumData$Companion_instance;
  }
  function AlbumData$$serializer() {
    this.descriptor_lltdk2$_0 = new PluginGeneratedSerialDescriptor('AlbumData', this, 13);
    this.descriptor.addElement_ivxn3r$('uri', false);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('cover', false);
    this.descriptor.addElement_ivxn3r$('year', false);
    this.descriptor.addElement_ivxn3r$('track_count', false);
    this.descriptor.addElement_ivxn3r$('discs', false);
    this.descriptor.addElement_ivxn3r$('copyrights', false);
    this.descriptor.addElement_ivxn3r$('artists', false);
    this.descriptor.addElement_ivxn3r$('related', false);
    this.descriptor.addElement_ivxn3r$('month', false);
    this.descriptor.addElement_ivxn3r$('day', false);
    this.descriptor.addElement_ivxn3r$('type', false);
    this.descriptor.addElement_ivxn3r$('label', false);
    AlbumData$$serializer_instance = this;
  }
  Object.defineProperty(AlbumData$$serializer.prototype, 'descriptor', {configurable: true, get: function () {
    return this.descriptor_lltdk2$_0;
  }});
  AlbumData$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.uri);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.name);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, AlbumCover$$serializer_getInstance(), value.cover);
    output.encodeIntElement_ptg7oe$(this.descriptor, 3, value.year);
    output.encodeIntElement_ptg7oe$(this.descriptor, 4, value.track_count);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 5, new ReferenceArraySerializer(getKClass(Discs), Discs$$serializer_getInstance()), value.discs);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 6, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), value.copyrights);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 7, new ReferenceArraySerializer(getKClass(Artists), Artists$$serializer_getInstance()), value.artists);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 8, Related$$serializer_getInstance(), value.related);
    output.encodeIntElement_ptg7oe$(this.descriptor, 9, value.month);
    output.encodeIntElement_ptg7oe$(this.descriptor, 10, value.day);
    output.encodeStringElement_iij8qq$(this.descriptor, 11, value.type);
    output.encodeStringElement_iij8qq$(this.descriptor, 12, value.label);
    output.endStructure_24f42q$(this.descriptor);
  };
  AlbumData$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0, local1, local2, local3, local4, local5, local6, local7, local8, local9, local10, local11, local12;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeSerializableElement_cvqn3c$(this.descriptor, 2, AlbumCover$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeIntElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeIntElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeSerializableElement_cvqn3c$(this.descriptor, 5, new ReferenceArraySerializer(getKClass(Discs), Discs$$serializer_getInstance()), local5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeSerializableElement_cvqn3c$(this.descriptor, 6, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local6);
          bitMask0 |= 64;
          break;
        case 7:
          local7 = input.decodeSerializableElement_cvqn3c$(this.descriptor, 7, new ReferenceArraySerializer(getKClass(Artists), Artists$$serializer_getInstance()), local7);
          bitMask0 |= 128;
          break;
        case 8:
          local8 = input.decodeSerializableElement_cvqn3c$(this.descriptor, 8, Related$$serializer_getInstance(), local8);
          bitMask0 |= 256;
          break;
        case 9:
          local9 = input.decodeIntElement_szpzho$(this.descriptor, 9);
          bitMask0 |= 512;
          break;
        case 10:
          local10 = input.decodeIntElement_szpzho$(this.descriptor, 10);
          bitMask0 |= 1024;
          break;
        case 11:
          local11 = input.decodeStringElement_szpzho$(this.descriptor, 11);
          bitMask0 |= 2048;
          break;
        case 12:
          local12 = input.decodeStringElement_szpzho$(this.descriptor, 12);
          bitMask0 |= 4096;
          break;
        case -1:
          break loopLabel;
        default:
          throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return AlbumData_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, local7, local8, local9, local10, local11, local12, null);
  };
  AlbumData$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, AlbumCover$$serializer_getInstance(), internal.IntSerializer, internal.IntSerializer, new ReferenceArraySerializer(getKClass(Discs), Discs$$serializer_getInstance()), new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), new ReferenceArraySerializer(getKClass(Artists), Artists$$serializer_getInstance()), Related$$serializer_getInstance(), internal.IntSerializer, internal.IntSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  AlbumData$$serializer.$metadata$ = {kind: Kind_OBJECT, simpleName: '$serializer', interfaces: [GeneratedSerializer]};
  var AlbumData$$serializer_instance = null;
  function AlbumData$$serializer_getInstance() {
    if (AlbumData$$serializer_instance === null) {
      new AlbumData$$serializer();
    }
    return AlbumData$$serializer_instance;
  }
  function AlbumData_init(seen1, uri, name, cover, year, track_count, discs, copyrights, artists, related, month, day, type, label, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(AlbumData.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('uri');
    else
      $this.uri = uri;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('name');
    else
      $this.name = name;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('cover');
    else
      $this.cover = cover;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('year');
    else
      $this.year = year;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('track_count');
    else
      $this.track_count = track_count;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('discs');
    else
      $this.discs = discs;
    if ((seen1 & 64) === 0)
      throw MissingFieldException_init('copyrights');
    else
      $this.copyrights = copyrights;
    if ((seen1 & 128) === 0)
      throw MissingFieldException_init('artists');
    else
      $this.artists = artists;
    if ((seen1 & 256) === 0)
      throw MissingFieldException_init('related');
    else
      $this.related = related;
    if ((seen1 & 512) === 0)
      throw MissingFieldException_init('month');
    else
      $this.month = month;
    if ((seen1 & 1024) === 0)
      throw MissingFieldException_init('day');
    else
      $this.day = day;
    if ((seen1 & 2048) === 0)
      throw MissingFieldException_init('type');
    else
      $this.type = type;
    if ((seen1 & 4096) === 0)
      throw MissingFieldException_init('label');
    else
      $this.label = label;
    return $this;
  }
  AlbumData.$metadata$ = {kind: Kind_CLASS, simpleName: 'AlbumData', interfaces: []};
  AlbumData.prototype.component1 = function () {
    return this.uri;
  };
  AlbumData.prototype.component2 = function () {
    return this.name;
  };
  AlbumData.prototype.component3 = function () {
    return this.cover;
  };
  AlbumData.prototype.component4 = function () {
    return this.year;
  };
  AlbumData.prototype.component5 = function () {
    return this.track_count;
  };
  AlbumData.prototype.component6 = function () {
    return this.discs;
  };
  AlbumData.prototype.component7 = function () {
    return this.copyrights;
  };
  AlbumData.prototype.component8 = function () {
    return this.artists;
  };
  AlbumData.prototype.component9 = function () {
    return this.related;
  };
  AlbumData.prototype.component10 = function () {
    return this.month;
  };
  AlbumData.prototype.component11 = function () {
    return this.day;
  };
  AlbumData.prototype.component12 = function () {
    return this.type;
  };
  AlbumData.prototype.component13 = function () {
    return this.label;
  };
  AlbumData.prototype.copy_1h0c57$ = function (uri, name, cover, year, track_count, discs, copyrights, artists, related, month, day, type, label) {
    return new AlbumData(uri === void 0 ? this.uri : uri, name === void 0 ? this.name : name, cover === void 0 ? this.cover : cover, year === void 0 ? this.year : year, track_count === void 0 ? this.track_count : track_count, discs === void 0 ? this.discs : discs, copyrights === void 0 ? this.copyrights : copyrights, artists === void 0 ? this.artists : artists, related === void 0 ? this.related : related, month === void 0 ? this.month : month, day === void 0 ? this.day : day, type === void 0 ? this.type : type, label === void 0 ? this.label : label);
  };
  AlbumData.prototype.toString = function () {
    return 'AlbumData(uri=' + Kotlin.toString(this.uri) + (', name=' + Kotlin.toString(this.name)) + (', cover=' + Kotlin.toString(this.cover)) + (', year=' + Kotlin.toString(this.year)) + (', track_count=' + Kotlin.toString(this.track_count)) + (', discs=' + Kotlin.toString(this.discs)) + (', copyrights=' + Kotlin.toString(this.copyrights)) + (', artists=' + Kotlin.toString(this.artists)) + (', related=' + Kotlin.toString(this.related)) + (', month=' + Kotlin.toString(this.month)) + (', day=' + Kotlin.toString(this.day)) + (', type=' + Kotlin.toString(this.type)) + (', label=' + Kotlin.toString(this.label)) + ')';
  };
  AlbumData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.uri) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.cover) | 0;
    result = result * 31 + Kotlin.hashCode(this.year) | 0;
    result = result * 31 + Kotlin.hashCode(this.track_count) | 0;
    result = result * 31 + Kotlin.hashCode(this.discs) | 0;
    result = result * 31 + Kotlin.hashCode(this.copyrights) | 0;
    result = result * 31 + Kotlin.hashCode(this.artists) | 0;
    result = result * 31 + Kotlin.hashCode(this.related) | 0;
    result = result * 31 + Kotlin.hashCode(this.month) | 0;
    result = result * 31 + Kotlin.hashCode(this.day) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.label) | 0;
    return result;
  };
  AlbumData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.uri, other.uri) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.cover, other.cover) && Kotlin.equals(this.year, other.year) && Kotlin.equals(this.track_count, other.track_count) && Kotlin.equals(this.discs, other.discs) && Kotlin.equals(this.copyrights, other.copyrights) && Kotlin.equals(this.artists, other.artists) && Kotlin.equals(this.related, other.related) && Kotlin.equals(this.month, other.month) && Kotlin.equals(this.day, other.day) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.label, other.label)))));
  };
  function ReturnedData(success, data) {
    ReturnedData$Companion_getInstance();
    if (success === void 0)
      success = null;
    if (data === void 0)
      data = null;
    this.success = success;
    this.data = data;
  }
  function ReturnedData$Companion() {
    ReturnedData$Companion_instance = this;
  }
  ReturnedData$Companion.prototype.serializer = function () {
    return ReturnedData$$serializer_getInstance();
  };
  ReturnedData$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var ReturnedData$Companion_instance = null;
  function ReturnedData$Companion_getInstance() {
    if (ReturnedData$Companion_instance === null) {
      new ReturnedData$Companion();
    }
    return ReturnedData$Companion_instance;
  }
  function ReturnedData$$serializer() {
    this.descriptor_vi8m9q$_0 = new PluginGeneratedSerialDescriptor('ReturnedData', this, 2);
    this.descriptor.addElement_ivxn3r$('success', true);
    this.descriptor.addElement_ivxn3r$('data', true);
    ReturnedData$$serializer_instance = this;
  }
  Object.defineProperty(ReturnedData$$serializer.prototype, 'descriptor', {configurable: true, get: function () {
    return this.descriptor_vi8m9q$_0;
  }});
  ReturnedData$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    if (!equals(value.success, null) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 0))
      output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 0, internal.BooleanSerializer, value.success);
    if (!equals(value.data, null) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 1))
      output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 1, AlbumData$$serializer_getInstance(), value.data);
    output.endStructure_24f42q$(this.descriptor);
  };
  ReturnedData$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0, local1;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeNullableSerializableElement_hziakr$(this.descriptor, 0, internal.BooleanSerializer, local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeNullableSerializableElement_hziakr$(this.descriptor, 1, AlbumData$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:
          throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return ReturnedData_init(bitMask0, local0, local1, null);
  };
  ReturnedData$$serializer.prototype.childSerializers = function () {
    return [new NullableSerializer(internal.BooleanSerializer), new NullableSerializer(AlbumData$$serializer_getInstance())];
  };
  ReturnedData$$serializer.$metadata$ = {kind: Kind_OBJECT, simpleName: '$serializer', interfaces: [GeneratedSerializer]};
  var ReturnedData$$serializer_instance = null;
  function ReturnedData$$serializer_getInstance() {
    if (ReturnedData$$serializer_instance === null) {
      new ReturnedData$$serializer();
    }
    return ReturnedData$$serializer_instance;
  }
  function ReturnedData_init(seen1, success, data, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(ReturnedData.prototype);
    if ((seen1 & 1) === 0)
      $this.success = null;
    else
      $this.success = success;
    if ((seen1 & 2) === 0)
      $this.data = null;
    else
      $this.data = data;
    return $this;
  }
  ReturnedData.$metadata$ = {kind: Kind_CLASS, simpleName: 'ReturnedData', interfaces: []};
  ReturnedData.prototype.component1 = function () {
    return this.success;
  };
  ReturnedData.prototype.component2 = function () {
    return this.data;
  };
  ReturnedData.prototype.copy_voyyni$ = function (success, data) {
    return new ReturnedData(success === void 0 ? this.success : success, data === void 0 ? this.data : data);
  };
  ReturnedData.prototype.toString = function () {
    return 'ReturnedData(success=' + Kotlin.toString(this.success) + (', data=' + Kotlin.toString(this.data)) + ')';
  };
  ReturnedData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.success) | 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    return result;
  };
  ReturnedData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.success, other.success) && Kotlin.equals(this.data, other.data)))));
  };
  function main$lambda($receiver) {
    return Unit;
  }
  function main() {
    var container = document.createElement('div');
    ensureNotNull(document.body).appendChild(container);
    var welcome = create(Welcome, main$lambda);
    createRoot(container).render(welcome);
  }
  function AlbumEnumClass(name, ordinal, album, albumId, albumImagePath) {
    Enum.call(this);
    this.album = album;
    this.albumId = albumId;
    this.albumImagePath = albumImagePath;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AlbumEnumClass_initFields() {
    AlbumEnumClass_initFields = function () {
    };
    AlbumEnumClass$SONGS_IN_A_MINOR_instance = new AlbumEnumClass('SONGS_IN_A_MINOR', 0, 'Songs in a Minor', '5qUlPoDmNxCSzqVx81RDLJ', 'images/siam.png');
    AlbumEnumClass$DIARY_OF_ALICIA_KEYS_instance = new AlbumEnumClass('DIARY_OF_ALICIA_KEYS', 1, 'The Diary of Alicia Keys', '6TqRKHLjDu5QZuC8u5Woij', 'images/diary.png');
    AlbumEnumClass$AS_I_AM_instance = new AlbumEnumClass('AS_I_AM', 2, 'As I Am', '6KlxyxhXEDo1LdheFulN7h', 'images/aia.png');
    AlbumEnumClass$THE_ELEMENT_OF_FREEDOM_instance = new AlbumEnumClass('THE_ELEMENT_OF_FREEDOM', 3, 'The Element of Freedom', '0Rxab8t0y7GlaTJTHX2wEN', 'images/teof.png');
    AlbumEnumClass$GIRL_ON_FIRE_instance = new AlbumEnumClass('GIRL_ON_FIRE', 4, 'Girl on Fire', '3qqhNVbjLFNdLviBFrFwCa', 'images/gof.png');
    AlbumEnumClass$HERE_instance = new AlbumEnumClass('HERE', 5, 'Here', '66RQAPD5x5nQgQzOa0X3sz', 'images/here.png');
    AlbumEnumClass$ALICIA_instance = new AlbumEnumClass('ALICIA', 6, 'ALICIA', '1168pCxg0HeTRqyutFf4o1', 'images/alicia.png');
    AlbumEnumClass$KEYS_instance = new AlbumEnumClass('KEYS', 7, 'KEYS', '76vpmS3ZCGm4hN8QtbnedX', 'images/keys.png');
  }
  var AlbumEnumClass$SONGS_IN_A_MINOR_instance;
  function AlbumEnumClass$SONGS_IN_A_MINOR_getInstance() {
    AlbumEnumClass_initFields();
    return AlbumEnumClass$SONGS_IN_A_MINOR_instance;
  }
  var AlbumEnumClass$DIARY_OF_ALICIA_KEYS_instance;
  function AlbumEnumClass$DIARY_OF_ALICIA_KEYS_getInstance() {
    AlbumEnumClass_initFields();
    return AlbumEnumClass$DIARY_OF_ALICIA_KEYS_instance;
  }
  var AlbumEnumClass$AS_I_AM_instance;
  function AlbumEnumClass$AS_I_AM_getInstance() {
    AlbumEnumClass_initFields();
    return AlbumEnumClass$AS_I_AM_instance;
  }
  var AlbumEnumClass$THE_ELEMENT_OF_FREEDOM_instance;
  function AlbumEnumClass$THE_ELEMENT_OF_FREEDOM_getInstance() {
    AlbumEnumClass_initFields();
    return AlbumEnumClass$THE_ELEMENT_OF_FREEDOM_instance;
  }
  var AlbumEnumClass$GIRL_ON_FIRE_instance;
  function AlbumEnumClass$GIRL_ON_FIRE_getInstance() {
    AlbumEnumClass_initFields();
    return AlbumEnumClass$GIRL_ON_FIRE_instance;
  }
  var AlbumEnumClass$HERE_instance;
  function AlbumEnumClass$HERE_getInstance() {
    AlbumEnumClass_initFields();
    return AlbumEnumClass$HERE_instance;
  }
  var AlbumEnumClass$ALICIA_instance;
  function AlbumEnumClass$ALICIA_getInstance() {
    AlbumEnumClass_initFields();
    return AlbumEnumClass$ALICIA_instance;
  }
  var AlbumEnumClass$KEYS_instance;
  function AlbumEnumClass$KEYS_getInstance() {
    AlbumEnumClass_initFields();
    return AlbumEnumClass$KEYS_instance;
  }
  AlbumEnumClass.$metadata$ = {kind: Kind_CLASS, simpleName: 'AlbumEnumClass', interfaces: [Enum]};
  function AlbumEnumClass$values() {
    return [AlbumEnumClass$SONGS_IN_A_MINOR_getInstance(), AlbumEnumClass$DIARY_OF_ALICIA_KEYS_getInstance(), AlbumEnumClass$AS_I_AM_getInstance(), AlbumEnumClass$THE_ELEMENT_OF_FREEDOM_getInstance(), AlbumEnumClass$GIRL_ON_FIRE_getInstance(), AlbumEnumClass$HERE_getInstance(), AlbumEnumClass$ALICIA_getInstance(), AlbumEnumClass$KEYS_getInstance()];
  }
  AlbumEnumClass.values = AlbumEnumClass$values;
  function AlbumEnumClass$valueOf(name) {
    switch (name) {
      case 'SONGS_IN_A_MINOR':
        return AlbumEnumClass$SONGS_IN_A_MINOR_getInstance();
      case 'DIARY_OF_ALICIA_KEYS':
        return AlbumEnumClass$DIARY_OF_ALICIA_KEYS_getInstance();
      case 'AS_I_AM':
        return AlbumEnumClass$AS_I_AM_getInstance();
      case 'THE_ELEMENT_OF_FREEDOM':
        return AlbumEnumClass$THE_ELEMENT_OF_FREEDOM_getInstance();
      case 'GIRL_ON_FIRE':
        return AlbumEnumClass$GIRL_ON_FIRE_getInstance();
      case 'HERE':
        return AlbumEnumClass$HERE_getInstance();
      case 'ALICIA':
        return AlbumEnumClass$ALICIA_getInstance();
      case 'KEYS':
        return AlbumEnumClass$KEYS_getInstance();
      default:
        throwISE('No enum constant AlbumEnumClass.' + name);
    }
  }
  AlbumEnumClass.valueOf_61zpoe$ = AlbumEnumClass$valueOf;
  function NavigationLinks(name, ordinal, linkName, linkTo) {
    Enum.call(this);
    this.linkName = linkName;
    this.linkTo = linkTo;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function NavigationLinks_initFields() {
    NavigationLinks_initFields = function () {
    };
    NavigationLinks$HOME_instance = new NavigationLinks('HOME', 0, 'Home', '');
    NavigationLinks$SPOTIFY_STATISTICS_instance = new NavigationLinks('SPOTIFY_STATISTICS', 1, 'Spotify Statistics', '');
    NavigationLinks$CLUB_KEYS_instance = new NavigationLinks('CLUB_KEYS', 2, 'Club Keys', '');
    NavigationLinks$JOIN_US_instance = new NavigationLinks('JOIN_US', 3, 'Join Us', '');
  }
  var NavigationLinks$HOME_instance;
  function NavigationLinks$HOME_getInstance() {
    NavigationLinks_initFields();
    return NavigationLinks$HOME_instance;
  }
  var NavigationLinks$SPOTIFY_STATISTICS_instance;
  function NavigationLinks$SPOTIFY_STATISTICS_getInstance() {
    NavigationLinks_initFields();
    return NavigationLinks$SPOTIFY_STATISTICS_instance;
  }
  var NavigationLinks$CLUB_KEYS_instance;
  function NavigationLinks$CLUB_KEYS_getInstance() {
    NavigationLinks_initFields();
    return NavigationLinks$CLUB_KEYS_instance;
  }
  var NavigationLinks$JOIN_US_instance;
  function NavigationLinks$JOIN_US_getInstance() {
    NavigationLinks_initFields();
    return NavigationLinks$JOIN_US_instance;
  }
  NavigationLinks.$metadata$ = {kind: Kind_CLASS, simpleName: 'NavigationLinks', interfaces: [Enum]};
  function NavigationLinks$values() {
    return [NavigationLinks$HOME_getInstance(), NavigationLinks$SPOTIFY_STATISTICS_getInstance(), NavigationLinks$CLUB_KEYS_getInstance(), NavigationLinks$JOIN_US_getInstance()];
  }
  NavigationLinks.values = NavigationLinks$values;
  function NavigationLinks$valueOf(name) {
    switch (name) {
      case 'HOME':
        return NavigationLinks$HOME_getInstance();
      case 'SPOTIFY_STATISTICS':
        return NavigationLinks$SPOTIFY_STATISTICS_getInstance();
      case 'CLUB_KEYS':
        return NavigationLinks$CLUB_KEYS_getInstance();
      case 'JOIN_US':
        return NavigationLinks$JOIN_US_getInstance();
      default:
        throwISE('No enum constant NavigationLinks.' + name);
    }
  }
  NavigationLinks.valueOf_61zpoe$ = NavigationLinks$valueOf;
  function Navigation$lambda$lambda$lambda$lambda(closure$link) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$link.linkName);
      return Unit;
    };
  }
  function Navigation$lambda$lambda$lambda($receiver) {
    var tmp$, tmp$_0;
    tmp$ = NavigationLinks$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var link = tmp$[tmp$_0];
      $receiver.invoke_gax9jq$(html.ReactHTML.li, Navigation$lambda$lambda$lambda$lambda(link));
    }
    return Unit;
  }
  function Navigation$lambda$lambda($receiver) {
    $receiver.className = 'navigation-links';
    $receiver.invoke_gax9jq$(html.ReactHTML.ul, Navigation$lambda$lambda$lambda);
    return Unit;
  }
  function Navigation$lambda($receiver, it) {
    $receiver.invoke_gax9jq$(html.ReactHTML.div, Navigation$lambda$lambda);
    return Unit;
  }
  var Navigation;
  function Coroutine$SpotifyStats$lambda$lambda$lambda$lambda$lambda(closure$props_0, closure$a_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$props = closure$props_0;
    this.local$closure$a = closure$a_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$SpotifyStats$lambda$lambda$lambda$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$SpotifyStats$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SpotifyStats$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$SpotifyStats$lambda$lambda$lambda$lambda$lambda;
  Coroutine$SpotifyStats$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$closure$props.setAlbumStateChild;
            this.state_0 = 2;
            this.result_0 = fetchAlbum(this.local$closure$a.albumId, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$(this.result_0);
            return console.log(this.local$closure$props.albumStateChild), Unit;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function SpotifyStats$lambda$lambda$lambda$lambda$lambda(closure$props_0, closure$a_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SpotifyStats$lambda$lambda$lambda$lambda$lambda(closure$props_0, closure$a_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function SpotifyStats$lambda$lambda$lambda$lambda(closure$props, closure$a) {
    return function (it) {
      launch(mainScope, void 0, void 0, SpotifyStats$lambda$lambda$lambda$lambda$lambda(closure$props, closure$a));
      return Unit;
    };
  }
  function SpotifyStats$lambda$lambda$lambda(closure$props, closure$a) {
    return function ($receiver) {
      $receiver.onClick = SpotifyStats$lambda$lambda$lambda$lambda(closure$props, closure$a);
      $receiver.className = 'albumButton';
      $receiver.src = closure$a.albumImagePath;
      return Unit;
    };
  }
  function SpotifyStats$lambda$lambda(closure$props) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      $receiver.className = 'albumButton-wrapper';
      tmp$ = AlbumEnumClass$values();
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var a = tmp$[tmp$_0];
        $receiver.invoke_gax9jq$(html.ReactHTML.img, SpotifyStats$lambda$lambda$lambda(closure$props, a));
      }
      return Unit;
    };
  }
  function SpotifyStats$lambda($receiver, props) {
    $receiver.invoke_gax9jq$(html.ReactHTML.div, SpotifyStats$lambda$lambda(props));
    return Unit;
  }
  var SpotifyStats;
  var mainScope;
  function Coroutine$fetchAlbum(albumId_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$albumId = albumId_0;
  }
  Coroutine$fetchAlbum.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$fetchAlbum.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fetchAlbum.prototype.constructor = Coroutine$fetchAlbum;
  Coroutine$fetchAlbum.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(window.fetch('http://localhost:8081/albumPlayCount?albumid=' + this.local$albumId), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = await_0(this.result_0.text(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var response = this.result_0;
            var $receiver = Json.Default;
            var tmp$;
            return $receiver.decodeFromString_c46gy8$(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, createKType(getKClass(ReturnedData), [], false)), KSerializer) ? tmp$ : throwCCE(), response);
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function fetchAlbum(albumId_0, continuation_0, suspended) {
    var instance = new Coroutine$fetchAlbum(albumId_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Welcome$lambda$fillSite() {
    console.log('Function called');
  }
  function Welcome$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function Welcome$lambda$lambda$lambda_0(closure$albumState, closure$setAlbumState) {
    return function ($receiver) {
      $receiver.albumStateChild = closure$albumState;
      $receiver.setAlbumStateChild = closure$setAlbumState;
      return Unit;
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$it.name);
      return Unit;
    };
  }
  function Welcome$lambda$lambda$lambda$lambda(closure$albumState) {
    return function ($receiver) {
      var tmp$;
      $receiver.className = 'album-statistics-title';
      if ((tmp$ = closure$albumState.data) != null) {
        $receiver.invoke_gax9jq$(html.ReactHTML.h1, Welcome$lambda$lambda$lambda$lambda$lambda$lambda(tmp$));
      }
      return Unit;
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$track) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$track.name);
      return Unit;
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$track) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Playcount: ' + closure$track.playcount + '  ' + '\n' + '                         Popularity: ' + closure$track.popularity);
      return Unit;
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$track) {
    return function ($receiver) {
      $receiver.className = 'album-statistics-row';
      $receiver.invoke_gax9jq$(html.ReactHTML.h2, Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$track));
      $receiver.invoke_gax9jq$(html.ReactHTML.li, Welcome$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$track));
      return Unit;
    };
  }
  function Welcome$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$albumTotalStreams) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Total Streams: ' + closure$albumTotalStreams.v);
      return Unit;
    };
  }
  function Welcome$lambda$lambda$lambda$lambda_0(closure$albumState) {
    return function ($receiver) {
      var tmp$;
      $receiver.className = 'album-statistics-info';
      if ((tmp$ = closure$albumState.data) != null) {
        var tmp$_0, tmp$_1;
        var albumTotalStreams = {v: 0};
        tmp$_0 = tmp$.discs[0].tracks;
        for (tmp$_1 = 0; tmp$_1 !== tmp$_0.length; ++tmp$_1) {
          var track = tmp$_0[tmp$_1];
          albumTotalStreams.v = albumTotalStreams.v + track.playcount | 0;
          $receiver.invoke_gax9jq$(html.ReactHTML.div, Welcome$lambda$lambda$lambda$lambda$lambda$lambda_0(track));
        }
        $receiver.invoke_gax9jq$(html.ReactHTML.h2, Welcome$lambda$lambda$lambda$lambda$lambda$lambda_1(albumTotalStreams));
      }
      return Unit;
    };
  }
  function Welcome$lambda$lambda$lambda_1(closure$albumState) {
    return function ($receiver) {
      $receiver.className = 'album-statistics-wrapper';
      $receiver.invoke_gax9jq$(html.ReactHTML.div, Welcome$lambda$lambda$lambda$lambda(closure$albumState));
      $receiver.invoke_gax9jq$(html.ReactHTML.div, Welcome$lambda$lambda$lambda$lambda_0(closure$albumState));
      return Unit;
    };
  }
  function Welcome$lambda$lambda(closure$fillSite) {
    return function ($receiver) {
      $receiver.className = 'webpage-wrapper';
      var tmp$ = useState(new ReturnedData());
      var albumState = tmp$[0];
      var setAlbumState = tmp$[1];
      closure$fillSite();
      $receiver.invoke_gax9jq$(Navigation, Welcome$lambda$lambda$lambda);
      $receiver.invoke_gax9jq$(SpotifyStats, Welcome$lambda$lambda$lambda_0(albumState, setAlbumState));
      $receiver.invoke_gax9jq$(html.ReactHTML.div, Welcome$lambda$lambda$lambda_1(albumState));
      return Unit;
    };
  }
  function Welcome$lambda($receiver, it) {
    var fillSite = Welcome$lambda$fillSite;
    $receiver.invoke_gax9jq$(html.ReactHTML.div, Welcome$lambda$lambda(fillSite));
    return Unit;
  }
  var Welcome;
  Object.defineProperty(AlbumCover, 'Companion', {get: AlbumCover$Companion_getInstance});
  Object.defineProperty(AlbumCover, '$serializer', {get: AlbumCover$$serializer_getInstance});
  _.AlbumCover_init_q11ckg$ = AlbumCover_init;
  _.AlbumCover = AlbumCover;
  Object.defineProperty(Image, 'Companion', {get: Image$Companion_getInstance});
  Object.defineProperty(Image, '$serializer', {get: Image$$serializer_getInstance});
  _.Image_init_q11ckg$ = Image_init;
  _.Image = Image;
  Object.defineProperty(DiscArtists, 'Companion', {get: DiscArtists$Companion_getInstance});
  Object.defineProperty(DiscArtists, '$serializer', {get: DiscArtists$$serializer_getInstance});
  _.DiscArtists_init_pxubnh$ = DiscArtists_init;
  _.DiscArtists = DiscArtists;
  Object.defineProperty(Artists, 'Companion', {get: Artists$Companion_getInstance});
  Object.defineProperty(Artists, '$serializer', {get: Artists$$serializer_getInstance});
  _.Artists_init_1jgqbb$ = Artists_init;
  _.Artists = Artists;
  Object.defineProperty(Tracks, 'Companion', {get: Tracks$Companion_getInstance});
  Object.defineProperty(Tracks, '$serializer', {get: Tracks$$serializer_getInstance});
  _.Tracks_init_pyctob$ = Tracks_init;
  _.Tracks = Tracks;
  Object.defineProperty(Discs, 'Companion', {get: Discs$Companion_getInstance});
  Object.defineProperty(Discs, '$serializer', {get: Discs$$serializer_getInstance});
  _.Discs_init_rqsq3n$ = Discs_init;
  _.Discs = Discs;
  Object.defineProperty(Releases, 'Companion', {get: Releases$Companion_getInstance});
  Object.defineProperty(Releases, '$serializer', {get: Releases$$serializer_getInstance});
  _.Releases_init_465z7i$ = Releases_init;
  _.Releases = Releases;
  Object.defineProperty(Related, 'Companion', {get: Related$Companion_getInstance});
  Object.defineProperty(Related, '$serializer', {get: Related$$serializer_getInstance});
  _.Related_init_s1uxco$ = Related_init;
  _.Related = Related;
  Object.defineProperty(AlbumData, 'Companion', {get: AlbumData$Companion_getInstance});
  Object.defineProperty(AlbumData, '$serializer', {get: AlbumData$$serializer_getInstance});
  _.AlbumData_init_q6nx2x$ = AlbumData_init;
  _.AlbumData = AlbumData;
  Object.defineProperty(ReturnedData, 'Companion', {get: ReturnedData$Companion_getInstance});
  Object.defineProperty(ReturnedData, '$serializer', {get: ReturnedData$$serializer_getInstance});
  _.ReturnedData_init_k1tpsj$ = ReturnedData_init;
  _.ReturnedData = ReturnedData;
  _.main = main;
  Object.defineProperty(AlbumEnumClass, 'SONGS_IN_A_MINOR', {get: AlbumEnumClass$SONGS_IN_A_MINOR_getInstance});
  Object.defineProperty(AlbumEnumClass, 'DIARY_OF_ALICIA_KEYS', {get: AlbumEnumClass$DIARY_OF_ALICIA_KEYS_getInstance});
  Object.defineProperty(AlbumEnumClass, 'AS_I_AM', {get: AlbumEnumClass$AS_I_AM_getInstance});
  Object.defineProperty(AlbumEnumClass, 'THE_ELEMENT_OF_FREEDOM', {get: AlbumEnumClass$THE_ELEMENT_OF_FREEDOM_getInstance});
  Object.defineProperty(AlbumEnumClass, 'GIRL_ON_FIRE', {get: AlbumEnumClass$GIRL_ON_FIRE_getInstance});
  Object.defineProperty(AlbumEnumClass, 'HERE', {get: AlbumEnumClass$HERE_getInstance});
  Object.defineProperty(AlbumEnumClass, 'ALICIA', {get: AlbumEnumClass$ALICIA_getInstance});
  Object.defineProperty(AlbumEnumClass, 'KEYS', {get: AlbumEnumClass$KEYS_getInstance});
  _.AlbumEnumClass = AlbumEnumClass;
  Object.defineProperty(NavigationLinks, 'HOME', {get: NavigationLinks$HOME_getInstance});
  Object.defineProperty(NavigationLinks, 'SPOTIFY_STATISTICS', {get: NavigationLinks$SPOTIFY_STATISTICS_getInstance});
  Object.defineProperty(NavigationLinks, 'CLUB_KEYS', {get: NavigationLinks$CLUB_KEYS_getInstance});
  Object.defineProperty(NavigationLinks, 'JOIN_US', {get: NavigationLinks$JOIN_US_getInstance});
  _.NavigationLinks = NavigationLinks;
  $$importsForInline$$['kotlin-react-core'] = $module$kotlin_react_core;
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy;
  _.fetchAlbum_61zpoe$ = fetchAlbum;
  AlbumCover$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Image$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  DiscArtists$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Artists$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Tracks$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Discs$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Releases$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Related$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  AlbumData$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  ReturnedData$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Navigation = FC(Navigation$lambda);
  SpotifyStats = FC(SpotifyStats$lambda);
  mainScope = MainScope();
  Welcome = FC(Welcome$lambda);
  main();
  return _;
}));

//# sourceMappingURL=untitled.js.map
