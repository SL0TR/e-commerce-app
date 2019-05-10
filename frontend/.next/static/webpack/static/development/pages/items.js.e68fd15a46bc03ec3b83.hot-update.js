webpackHotUpdate("static\\development\\pages\\items.js",{

/***/ "./components/Items.js":
/*!*****************************!*\
  !*** ./components/Items.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Items; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tools */ "./node_modules/graphql-tools/dist/index.js");
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "J:\\CodeBase\\JavaScript\\ecommerce-app\\frontend\\components\\Items.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query ALL_ITEMS_QUERY {\n    items {\n      id\n      title\n      price\n      description\n      image\n      largeImage\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ALL_ITEMS_QUERY = graphql_tools__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var Items =
/*#__PURE__*/
function (_Component) {
  _inherits(Items, _Component);

  function Items() {
    _classCallCheck(this, Items);

    return _possibleConstructorReturn(this, _getPrototypeOf(Items).apply(this, arguments));
  }

  _createClass(Items, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Items"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_ITEMS_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, function (payload) {
        console.log(payload);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, "Hey I'm a child of a query");
      }));
    }
  }]);

  return Items;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./node_modules/deprecated-decorator/bld/index.js":
/*!********************************************************!*\
  !*** ./node_modules/deprecated-decorator/bld/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
    Deprecated Decorator v0.1
    https://github.com/vilic/deprecated-decorator
*/

/** @internal */
exports.options = {
    getWarner: undefined
};
function createWarner(type, name, alternative, version, url) {
    var warnedPositions = {};
    return function () {
        var stack = (new Error()).stack || '';
        var at = (stack.match(/(?:\s+at\s.+){2}\s+at\s(.+)/) || [undefined, ''])[1];
        if (/\)$/.test(at)) {
            at = at.match(/[^(]+(?=\)$)/)[0];
        }
        else {
            at = at.trim();
        }
        if (at in warnedPositions) {
            return;
        }
        warnedPositions[at] = true;
        var message;
        switch (type) {
            case 'class':
                message = 'Class';
                break;
            case 'property':
                message = 'Property';
                break;
            case 'method':
                message = 'Method';
                break;
            case 'function':
                message = 'Function';
                break;
        }
        message += " `" + name + "` has been deprecated";
        if (version) {
            message += " since version " + version;
        }
        if (alternative) {
            message += ", use `" + alternative + "` instead";
        }
        message += '.';
        if (at) {
            message += "\n    at " + at;
        }
        if (url) {
            message += "\nCheck out " + url + " for more information.";
        }
        console.warn(message);
    };
}
function decorateProperty(type, name, descriptor, alternative, version, url) {
    var warner = (exports.options.getWarner || createWarner)(type, name, alternative, version, url);
    descriptor = descriptor || {
        writable: true,
        enumerable: false,
        configurable: true
    };
    var deprecatedDescriptor = {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable
    };
    if (descriptor.get || descriptor.set) {
        if (descriptor.get) {
            deprecatedDescriptor.get = function () {
                warner();
                return descriptor.get.call(this);
            };
        }
        if (descriptor.set) {
            deprecatedDescriptor.set = function (value) {
                warner();
                return descriptor.set.call(this, value);
            };
        }
    }
    else {
        var propertyValue_1 = descriptor.value;
        deprecatedDescriptor.get = function () {
            warner();
            return propertyValue_1;
        };
        if (descriptor.writable) {
            deprecatedDescriptor.set = function (value) {
                warner();
                propertyValue_1 = value;
            };
        }
    }
    return deprecatedDescriptor;
}
function decorateFunction(type, target, alternative, version, url) {
    var name = target.name;
    var warner = (exports.options.getWarner || createWarner)(type, name, alternative, version, url);
    var fn = function () {
        warner();
        return target.apply(this, arguments);
    };
    for (var _i = 0, _a = Object.getOwnPropertyNames(target); _i < _a.length; _i++) {
        var propertyName = _a[_i];
        var descriptor = Object.getOwnPropertyDescriptor(target, propertyName);
        if (descriptor.writable) {
            fn[propertyName] = target[propertyName];
        }
        else if (descriptor.configurable) {
            Object.defineProperty(fn, propertyName, descriptor);
        }
    }
    return fn;
}
function deprecated() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    var fn = args[args.length - 1];
    if (typeof fn === 'function') {
        fn = args.pop();
    }
    else {
        fn = undefined;
    }
    var options = args[0];
    var alternative;
    var version;
    var url;
    if (typeof options === 'string') {
        alternative = options;
        version = args[1];
        url = args[2];
    }
    else if (options) {
        (alternative = options.alternative, version = options.version, url = options.url, options);
    }
    if (fn) {
        return decorateFunction('function', fn, alternative, version, url);
    }
    return function (target, name, descriptor) {
        if (typeof name === 'string') {
            var type = descriptor && typeof descriptor.value === 'function' ?
                'method' : 'property';
            return decorateProperty(type, name, descriptor, alternative, version, url);
        }
        else if (typeof target === 'function') {
            var constructor = decorateFunction('class', target, alternative, version, url);
            var className = target.name;
            for (var _i = 0, _a = Object.getOwnPropertyNames(constructor); _i < _a.length; _i++) {
                var propertyName = _a[_i];
                var descriptor_1 = Object.getOwnPropertyDescriptor(constructor, propertyName);
                descriptor_1 = decorateProperty('class', className, descriptor_1, alternative, version, url);
                if (descriptor_1.writable) {
                    constructor[propertyName] = target[propertyName];
                }
                else if (descriptor_1.configurable) {
                    Object.defineProperty(constructor, propertyName, descriptor_1);
                }
            }
            return constructor;
        }
    };
}
exports.deprecated = deprecated;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = deprecated;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/generate/SchemaError.js":
/*!*****************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/generate/SchemaError.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// @schemaDefinition: A GraphQL type schema in shorthand
// @resolvers: Definitions for resolvers to be merged with schema
var SchemaError = /** @class */ (function (_super) {
    __extends(SchemaError, _super);
    function SchemaError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        Error.captureStackTrace(_this, _this.constructor);
        return _this;
    }
    return SchemaError;
}(Error));
exports.default = SchemaError;
//# sourceMappingURL=SchemaError.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/generate/addResolveFunctionsToSchema.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/generate/addResolveFunctionsToSchema.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(/*! . */ "./node_modules/graphql-tools/dist/generate/index.js");
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var transforms_1 = __webpack_require__(/*! ../transforms/transforms */ "./node_modules/graphql-tools/dist/transforms/transforms.js");
var _2 = __webpack_require__(/*! . */ "./node_modules/graphql-tools/dist/generate/index.js");
var ConvertEnumValues_1 = __webpack_require__(/*! ../transforms/ConvertEnumValues */ "./node_modules/graphql-tools/dist/transforms/ConvertEnumValues.js");
function addResolveFunctionsToSchema(options, legacyInputResolvers, legacyInputValidationOptions) {
    if (options instanceof graphql_1.GraphQLSchema) {
        console.warn('The addResolveFunctionsToSchema function takes named options now; see IAddResolveFunctionsToSchemaOptions');
        options = {
            schema: options,
            resolvers: legacyInputResolvers,
            resolverValidationOptions: legacyInputValidationOptions,
        };
    }
    var schema = options.schema, inputResolvers = options.resolvers, _a = options.resolverValidationOptions, resolverValidationOptions = _a === void 0 ? {} : _a, _b = options.inheritResolversFromInterfaces, inheritResolversFromInterfaces = _b === void 0 ? false : _b;
    var _c = resolverValidationOptions.allowResolversNotInSchema, allowResolversNotInSchema = _c === void 0 ? false : _c, requireResolversForResolveType = resolverValidationOptions.requireResolversForResolveType;
    var resolvers = inheritResolversFromInterfaces
        ? _2.extendResolversFromInterfaces(schema, inputResolvers)
        : inputResolvers;
    // Used to map the external value of an enum to its internal value, when
    // that internal value is provided by a resolver.
    var enumValueMap = Object.create(null);
    Object.keys(resolvers).forEach(function (typeName) {
        var resolverValue = resolvers[typeName];
        var resolverType = typeof resolverValue;
        if (resolverType !== 'object' && resolverType !== 'function') {
            throw new _1.SchemaError("\"" + typeName + "\" defined in resolvers, but has invalid value \"" + resolverValue + "\". A resolver's value " +
                "must be of type object or function.");
        }
        var type = schema.getType(typeName);
        if (!type && typeName !== '__schema') {
            if (allowResolversNotInSchema) {
                return;
            }
            throw new _1.SchemaError("\"" + typeName + "\" defined in resolvers, but not in schema");
        }
        Object.keys(resolverValue).forEach(function (fieldName) {
            var _a;
            if (fieldName.startsWith('__')) {
                // this is for isTypeOf and resolveType and all the other stuff.
                type[fieldName.substring(2)] = resolverValue[fieldName];
                return;
            }
            if (type instanceof graphql_1.GraphQLScalarType) {
                type[fieldName] = resolverValue[fieldName];
                return;
            }
            if (type instanceof graphql_1.GraphQLEnumType) {
                if (!type.getValue(fieldName)) {
                    if (allowResolversNotInSchema) {
                        return;
                    }
                    throw new _1.SchemaError(typeName + "." + fieldName + " was defined in resolvers, but enum is not in schema");
                }
                // We've encountered an enum resolver that is being used to provide an
                // internal enum value.
                // Reference: https://www.apollographql.com/docs/graphql-tools/scalars.html#internal-values
                //
                // We're storing a map of the current enums external facing value to
                // its resolver provided internal value. This map is used to transform
                // the current schema to a new schema that includes enums with the new
                // internal value.
                enumValueMap[type.name] = (_a = {},
                    _a[fieldName] = resolverValue[fieldName],
                    _a);
                return;
            }
            // object type
            var fields = getFieldsForType(type);
            if (!fields) {
                if (allowResolversNotInSchema) {
                    return;
                }
                throw new _1.SchemaError(typeName + " was defined in resolvers, but it's not an object");
            }
            if (!fields[fieldName]) {
                if (allowResolversNotInSchema) {
                    return;
                }
                throw new _1.SchemaError(typeName + "." + fieldName + " defined in resolvers, but not in schema");
            }
            var field = fields[fieldName];
            var fieldResolve = resolverValue[fieldName];
            if (typeof fieldResolve === 'function') {
                // for convenience. Allows shorter syntax in resolver definition file
                setFieldProperties(field, { resolve: fieldResolve });
            }
            else {
                if (typeof fieldResolve !== 'object') {
                    throw new _1.SchemaError("Resolver " + typeName + "." + fieldName + " must be object or function");
                }
                setFieldProperties(field, fieldResolve);
            }
        });
    });
    _2.checkForResolveTypeResolver(schema, requireResolversForResolveType);
    // If there are any enum resolver functions (that are used to return
    // internal enum values), create a new schema that includes enums with the
    // new internal facing values.
    var updatedSchema = transforms_1.applySchemaTransforms(schema, [new ConvertEnumValues_1.default(enumValueMap)]);
    return updatedSchema;
}
function getFieldsForType(type) {
    if (type instanceof graphql_1.GraphQLObjectType ||
        type instanceof graphql_1.GraphQLInterfaceType) {
        return type.getFields();
    }
    else {
        return undefined;
    }
}
function setFieldProperties(field, propertiesObj) {
    Object.keys(propertiesObj).forEach(function (propertyName) {
        field[propertyName] = propertiesObj[propertyName];
    });
}
exports.default = addResolveFunctionsToSchema;
//# sourceMappingURL=addResolveFunctionsToSchema.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/generate/addSchemaLevelResolveFunction.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/generate/addSchemaLevelResolveFunction.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
// wraps all resolve functions of query, mutation or subscription fields
// with the provided function to simulate a root schema level resolve funciton
function addSchemaLevelResolveFunction(schema, fn) {
    // TODO test that schema is a schema, fn is a function
    var rootTypes = [
        schema.getQueryType(),
        schema.getMutationType(),
        schema.getSubscriptionType(),
    ].filter(function (x) { return !!x; });
    rootTypes.forEach(function (type) {
        // XXX this should run at most once per request to simulate a true root resolver
        // for graphql-js this is an approximation that works with queries but not mutations
        var rootResolveFn = runAtMostOncePerRequest(fn);
        var fields = type.getFields();
        Object.keys(fields).forEach(function (fieldName) {
            // XXX if the type is a subscription, a same query AST will be ran multiple times so we
            // deactivate here the runOnce if it's a subscription. This may not be optimal though...
            if (type === schema.getSubscriptionType()) {
                fields[fieldName].resolve = wrapResolver(fields[fieldName].resolve, fn);
            }
            else {
                fields[fieldName].resolve = wrapResolver(fields[fieldName].resolve, rootResolveFn);
            }
        });
    });
}
// XXX badly named function. this doesn't really wrap, it just chains resolvers...
function wrapResolver(innerResolver, outerResolver) {
    return function (obj, args, ctx, info) {
        return Promise.resolve(outerResolver(obj, args, ctx, info)).then(function (root) {
            if (innerResolver) {
                return innerResolver(root, args, ctx, info);
            }
            return graphql_1.defaultFieldResolver(root, args, ctx, info);
        });
    };
}
// XXX this function only works for resolvers
// XXX very hacky way to remember if the function
// already ran for this request. This will only work
// if people don't actually cache the operation.
// if they do cache the operation, they will have to
// manually remove the __runAtMostOnce before every request.
function runAtMostOncePerRequest(fn) {
    var value;
    var randomNumber = Math.random();
    return function (root, args, ctx, info) {
        if (!info.operation['__runAtMostOnce']) {
            info.operation['__runAtMostOnce'] = {};
        }
        if (!info.operation['__runAtMostOnce'][randomNumber]) {
            info.operation['__runAtMostOnce'][randomNumber] = true;
            value = fn(root, args, ctx, info);
        }
        return value;
    };
}
exports.default = addSchemaLevelResolveFunction;
//# sourceMappingURL=addSchemaLevelResolveFunction.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/generate/assertResolveFunctionsPresent.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/generate/assertResolveFunctionsPresent.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var _1 = __webpack_require__(/*! . */ "./node_modules/graphql-tools/dist/generate/index.js");
function assertResolveFunctionsPresent(schema, resolverValidationOptions) {
    if (resolverValidationOptions === void 0) { resolverValidationOptions = {}; }
    var _a = resolverValidationOptions.requireResolversForArgs, requireResolversForArgs = _a === void 0 ? false : _a, _b = resolverValidationOptions.requireResolversForNonScalar, requireResolversForNonScalar = _b === void 0 ? false : _b, _c = resolverValidationOptions.requireResolversForAllFields, requireResolversForAllFields = _c === void 0 ? false : _c;
    if (requireResolversForAllFields &&
        (requireResolversForArgs || requireResolversForNonScalar)) {
        throw new TypeError('requireResolversForAllFields takes precedence over the more specific assertions. ' +
            'Please configure either requireResolversForAllFields or requireResolversForArgs / ' +
            'requireResolversForNonScalar, but not a combination of them.');
    }
    _1.forEachField(schema, function (field, typeName, fieldName) {
        // requires a resolve function for *every* field.
        if (requireResolversForAllFields) {
            expectResolveFunction(field, typeName, fieldName);
        }
        // requires a resolve function on every field that has arguments
        if (requireResolversForArgs && field.args.length > 0) {
            expectResolveFunction(field, typeName, fieldName);
        }
        // requires a resolve function on every field that returns a non-scalar type
        if (requireResolversForNonScalar &&
            !(graphql_1.getNamedType(field.type) instanceof graphql_1.GraphQLScalarType)) {
            expectResolveFunction(field, typeName, fieldName);
        }
    });
}
function expectResolveFunction(field, typeName, fieldName) {
    if (!field.resolve) {
        console.warn(
        // tslint:disable-next-line: max-line-length
        "Resolve function missing for \"" + typeName + "." + fieldName + "\". To disable this warning check https://github.com/apollostack/graphql-tools/issues/131");
        return;
    }
    if (typeof field.resolve !== 'function') {
        throw new _1.SchemaError("Resolver \"" + typeName + "." + fieldName + "\" must be a function");
    }
}
exports.default = assertResolveFunctionsPresent;
//# sourceMappingURL=assertResolveFunctionsPresent.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/generate/attachConnectorsToContext.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/generate/attachConnectorsToContext.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var deprecated_decorator_1 = __webpack_require__(/*! deprecated-decorator */ "./node_modules/deprecated-decorator/bld/index.js");
var _1 = __webpack_require__(/*! . */ "./node_modules/graphql-tools/dist/generate/index.js");
// takes a GraphQL-JS schema and an object of connectors, then attaches
// the connectors to the context by wrapping each query or mutation resolve
// function with a function that attaches connectors if they don't exist.
// attaches connectors only once to make sure they are singletons
var attachConnectorsToContext = deprecated_decorator_1.deprecated({
    version: '0.7.0',
    url: 'https://github.com/apollostack/graphql-tools/issues/140',
}, function (schema, connectors) {
    if (!schema || !(schema instanceof graphql_1.GraphQLSchema)) {
        throw new Error('schema must be an instance of GraphQLSchema. ' +
            'This error could be caused by installing more than one version of GraphQL-JS');
    }
    if (typeof connectors !== 'object') {
        var connectorType = typeof connectors;
        throw new Error("Expected connectors to be of type object, got " + connectorType);
    }
    if (Object.keys(connectors).length === 0) {
        throw new Error('Expected connectors to not be an empty object');
    }
    if (Array.isArray(connectors)) {
        throw new Error('Expected connectors to be of type object, got Array');
    }
    if (schema['_apolloConnectorsAttached']) {
        throw new Error('Connectors already attached to context, cannot attach more than once');
    }
    schema['_apolloConnectorsAttached'] = true;
    var attachconnectorFn = function (root, args, ctx) {
        if (typeof ctx !== 'object') {
            // if in any way possible, we should throw an error when the attachconnectors
            // function is called, not when a query is executed.
            var contextType = typeof ctx;
            throw new Error("Cannot attach connector because context is not an object: " + contextType);
        }
        if (typeof ctx.connectors === 'undefined') {
            ctx.connectors = {};
        }
        Object.keys(connectors).forEach(function (connectorName) {
            var connector = connectors[connectorName];
            if (!!connector.prototype) {
                ctx.connectors[connectorName] = new connector(ctx);
            }
            else {
                throw new Error("Connector must be a function or an class");
            }
        });
        return root;
    };
    _1.addSchemaLevelResolveFunction(schema, attachconnectorFn);
});
exports.default = attachConnectorsToContext;
//# sourceMappingURL=attachConnectorsToContext.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/generate/attachDirectiveResolvers.js":
/*!******************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/generate/attachDirectiveResolvers.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var schemaVisitor_1 = __webpack_require__(/*! ../schemaVisitor */ "./node_modules/graphql-tools/dist/schemaVisitor.js");
function attachDirectiveResolvers(schema, directiveResolvers) {
    if (typeof directiveResolvers !== 'object') {
        throw new Error("Expected directiveResolvers to be of type object, got " + typeof directiveResolvers);
    }
    if (Array.isArray(directiveResolvers)) {
        throw new Error('Expected directiveResolvers to be of type object, got Array');
    }
    var schemaDirectives = Object.create(null);
    Object.keys(directiveResolvers).forEach(function (directiveName) {
        schemaDirectives[directiveName] = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.visitFieldDefinition = function (field) {
                var _this = this;
                var resolver = directiveResolvers[directiveName];
                var originalResolver = field.resolve || graphql_1.defaultFieldResolver;
                var directiveArgs = this.args;
                field.resolve = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var source = args[0] /* original args */, context = args[2], info = args[3];
                    return resolver(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, originalResolver.apply(field, args)];
                    }); }); }, source, directiveArgs, context, info);
                };
            };
            return class_1;
        }(schemaVisitor_1.SchemaDirectiveVisitor));
    });
    schemaVisitor_1.SchemaDirectiveVisitor.visitSchemaDirectives(schema, schemaDirectives);
}
exports.default = attachDirectiveResolvers;
//# sourceMappingURL=attachDirectiveResolvers.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/generate/buildSchemaFromTypeDefinitions.js":
/*!************************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/generate/buildSchemaFromTypeDefinitions.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var _1 = __webpack_require__(/*! . */ "./node_modules/graphql-tools/dist/generate/index.js");
function buildSchemaFromTypeDefinitions(typeDefinitions, parseOptions) {
    // TODO: accept only array here, otherwise interfaces get confusing.
    var myDefinitions = typeDefinitions;
    var astDocument;
    if (isDocumentNode(typeDefinitions)) {
        astDocument = typeDefinitions;
    }
    else if (typeof myDefinitions !== 'string') {
        if (!Array.isArray(myDefinitions)) {
            var type = typeof myDefinitions;
            throw new _1.SchemaError("typeDefs must be a string, array or schema AST, got " + type);
        }
        myDefinitions = _1.concatenateTypeDefs(myDefinitions);
    }
    if (typeof myDefinitions === 'string') {
        astDocument = graphql_1.parse(myDefinitions, parseOptions);
    }
    var backcompatOptions = { commentDescriptions: true };
    // TODO fix types https://github.com/apollographql/graphql-tools/issues/542
    var schema = graphql_1.buildASTSchema(astDocument, backcompatOptions);
    var extensionsAst = _1.extractExtensionDefinitions(astDocument);
    if (extensionsAst.definitions.length > 0) {
        // TODO fix types https://github.com/apollographql/graphql-tools/issues/542
        schema = graphql_1.extendSchema(schema, extensionsAst, backcompatOptions);
    }
    return schema;
}
function isDocumentNode(typeDefinitions) {
    return typeDefinitions.kind !== undefined;
}
exports.default = buildSchemaFromTypeDefinitions;
//# sourceMappingURL=buildSchemaFromTypeDefinitions.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/generate/chainResolvers.js":
/*!********************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/generate/chainResolvers.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
function chainResolvers(resolvers) {
    return function (root, args, ctx, info) {
        return resolvers.reduce(function (prev, curResolver) {
            if (curResolver) {
                return curResolver(prev, args, ctx, info);
            }
            return graphql_1.defaultFieldResolver(prev, args, ctx, info);
        }, root);
    };
}
exports.chainResolvers = chainResolvers;
//# sourceMappingURL=chainResolvers.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/generate/checkForResolveTypeResolver.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/generate/checkForResolveTypeResolver.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var _1 = __webpack_require__(/*! . */ "./node_modules/graphql-tools/dist/generate/index.js");
// If we have any union or interface types throw if no there is no resolveType or isTypeOf resolvers
function checkForResolveTypeResolver(schema, requireResolversForResolveType) {
    Object.keys(schema.getTypeMap())
        .map(function (typeName) { return schema.getType(typeName); })
        .forEach(function (type) {
        if (!(type instanceof graphql_1.GraphQLUnionType ||
            type instanceof graphql_1.GraphQLInterfaceType)) {
            return;
        }
        if (!type.resolveType) {
            if (requireResolversForResolveType === false) {
                return;
            }
            if (requireResolversForResolveType === true) {
                throw new _1.SchemaError("Type \"" + type.name + "\" is missing a \"resolveType\" resolver");
            }
            // tslint:disable-next-line:max-line-length
            console.warn("Type \"" + type.name + "\" is missing a \"__resolveType\" resolver. Pass false into " +
                "\"resolverValidationOptions.requireResolversForResolveType\" to disable this warning.");
        }
    });
}
exports.default = checkForResolveTypeResolver;
//# sourceMappingURL=checkForResolveTypeResolver.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/generate/concatenateTypeDefs.js":
/*!*************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/generate/concatenateTypeDefs.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var _1 = __webpack_require__(/*! . */ "./node_modules/graphql-tools/dist/generate/index.js");
function concatenateTypeDefs(typeDefinitionsAry, calledFunctionRefs) {
    if (calledFunctionRefs === void 0) { calledFunctionRefs = []; }
    var resolvedTypeDefinitions = [];
    typeDefinitionsAry.forEach(function (typeDef) {
        if (typeDef.kind !== undefined) {
            typeDef = graphql_1.print(typeDef);
        }
        if (typeof typeDef === 'function') {
            if (calledFunctionRefs.indexOf(typeDef) === -1) {
                calledFunctionRefs.push(typeDef);
                resolvedTypeDefinitions = resolvedTypeDefinitions.concat(concatenateTypeDefs(typeDef(), calledFunctionRefs));
            }
        }
        else if (typeof typeDef === 'string') {
            resolvedTypeDefinitions.push(typeDef.trim());
        }
        else {
            var type = typeof typeDef;
            throw new _1.SchemaError("typeDef array must contain only strings and functions, got " + type);
        }
    });
    return uniq(resolvedTypeDefinitions.map(function (x) { return x.trim(); })).join('\n');
}
function uniq(array) {
    return array.reduce(function (accumulator, currentValue) {
        return accumulator.indexOf(currentValue) === -1
            ? accumulator.concat([currentValue]) : accumulator;
    }, []);
}
exports.default = concatenateTypeDefs;
//# sourceMappingURL=concatenateTypeDefs.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/generate/decorateWithLogger.js":
/*!************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/generate/decorateWithLogger.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
/*
 * fn: The function to decorate with the logger
 * logger: an object instance of type Logger
 * hint: an optional hint to add to the error's message
 */
function decorateWithLogger(fn, logger, hint) {
    if (typeof fn === 'undefined') {
        fn = graphql_1.defaultFieldResolver;
    }
    var logError = function (e) {
        // TODO: clone the error properly
        var newE = new Error();
        newE.stack = e.stack;
        /* istanbul ignore else: always get the hint from addErrorLoggingToSchema */
        if (hint) {
            newE['originalMessage'] = e.message;
            newE['message'] = "Error in resolver " + hint + "\n" + e.message;
        }
        logger.log(newE);
    };
    return function (root, args, ctx, info) {
        try {
            var result = fn(root, args, ctx, info);
            // If the resolve function returns a Promise log any Promise rejects.
            if (result &&
                typeof result.then === 'function' &&
                typeof result.catch === 'function') {
                result.catch(function (reason) {
                    // make sure that it's an error we're logging.
                    var error = reason instanceof Error ? reason : new Error(reason);
                    logError(error);
                    // We don't want to leave an unhandled exception so pass on error.
                    return reason;
                });
            }
            return result;
        }
        catch (e) {
            logError(e);
            // we want to pass on the error, just in case.
            throw e;
        }
    };
}
exports.default = decorateWithLogger;
//# sourceMappingURL=decorateWithLogger.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/generate/extendResolversFromInterfaces.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/generate/extendResolversFromInterfaces.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
function extendResolversFromInterfaces(schema, resolvers) {
    var typeNames = Object.keys(__assign({}, schema.getTypeMap(), resolvers));
    var extendedResolvers = {};
    typeNames.forEach(function (typeName) {
        var typeResolvers = resolvers[typeName];
        var type = schema.getType(typeName);
        if (type instanceof graphql_1.GraphQLObjectType) {
            var interfaceResolvers = type
                .getInterfaces()
                .map(function (iFace) { return resolvers[iFace.name]; });
            extendedResolvers[typeName] = Object.assign.apply(Object, [{}].concat(interfaceResolvers, [typeResolvers]));
        }
        else {
            if (typeResolvers) {
                extendedResolvers[typeName] = typeResolvers;
            }
        }
    });
    return extendedResolvers;
}
exports.default = extendResolversFromInterfaces;
//# sourceMappingURL=extendResolversFromInterfaces.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/generate/extractExtensionDefinitions.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/generate/extractExtensionDefinitions.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var newExtensionDefinitionKind = 'ObjectTypeExtension';
var interfaceExtensionDefinitionKind = 'InterfaceTypeExtension';
var inputObjectExtensionDefinitionKind = 'InputObjectTypeExtension';
function extractExtensionDefinitions(ast) {
    var extensionDefs = ast.definitions.filter(function (def) {
        return def.kind === newExtensionDefinitionKind ||
            def.kind === interfaceExtensionDefinitionKind ||
            def.kind === inputObjectExtensionDefinitionKind;
    });
    return Object.assign({}, ast, {
        definitions: extensionDefs,
    });
}
exports.default = extractExtensionDefinitions;
//# sourceMappingURL=extractExtensionDefinitions.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/generate/forEachField.js":
/*!******************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/generate/forEachField.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
function forEachField(schema, fn) {
    var typeMap = schema.getTypeMap();
    Object.keys(typeMap).forEach(function (typeName) {
        var type = typeMap[typeName];
        // TODO: maybe have an option to include these?
        if (!graphql_1.getNamedType(type).name.startsWith('__') &&
            type instanceof graphql_1.GraphQLObjectType) {
            var fields_1 = type.getFields();
            Object.keys(fields_1).forEach(function (fieldName) {
                var field = fields_1[fieldName];
                fn(field, typeName, fieldName);
            });
        }
    });
}
exports.default = forEachField;
//# sourceMappingURL=forEachField.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/generate/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/graphql-tools/dist/generate/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var addResolveFunctionsToSchema_1 = __webpack_require__(/*! ./addResolveFunctionsToSchema */ "./node_modules/graphql-tools/dist/generate/addResolveFunctionsToSchema.js");
exports.addResolveFunctionsToSchema = addResolveFunctionsToSchema_1.default;
var addSchemaLevelResolveFunction_1 = __webpack_require__(/*! ./addSchemaLevelResolveFunction */ "./node_modules/graphql-tools/dist/generate/addSchemaLevelResolveFunction.js");
exports.addSchemaLevelResolveFunction = addSchemaLevelResolveFunction_1.default;
var assertResolveFunctionsPresent_1 = __webpack_require__(/*! ./assertResolveFunctionsPresent */ "./node_modules/graphql-tools/dist/generate/assertResolveFunctionsPresent.js");
exports.assertResolveFunctionsPresent = assertResolveFunctionsPresent_1.default;
var attachDirectiveResolvers_1 = __webpack_require__(/*! ./attachDirectiveResolvers */ "./node_modules/graphql-tools/dist/generate/attachDirectiveResolvers.js");
exports.attachDirectiveResolvers = attachDirectiveResolvers_1.default;
var attachConnectorsToContext_1 = __webpack_require__(/*! ./attachConnectorsToContext */ "./node_modules/graphql-tools/dist/generate/attachConnectorsToContext.js");
exports.attachConnectorsToContext = attachConnectorsToContext_1.default;
var buildSchemaFromTypeDefinitions_1 = __webpack_require__(/*! ./buildSchemaFromTypeDefinitions */ "./node_modules/graphql-tools/dist/generate/buildSchemaFromTypeDefinitions.js");
exports.buildSchemaFromTypeDefinitions = buildSchemaFromTypeDefinitions_1.default;
var chainResolvers_1 = __webpack_require__(/*! ./chainResolvers */ "./node_modules/graphql-tools/dist/generate/chainResolvers.js");
exports.chainResolvers = chainResolvers_1.chainResolvers;
var checkForResolveTypeResolver_1 = __webpack_require__(/*! ./checkForResolveTypeResolver */ "./node_modules/graphql-tools/dist/generate/checkForResolveTypeResolver.js");
exports.checkForResolveTypeResolver = checkForResolveTypeResolver_1.default;
var concatenateTypeDefs_1 = __webpack_require__(/*! ./concatenateTypeDefs */ "./node_modules/graphql-tools/dist/generate/concatenateTypeDefs.js");
exports.concatenateTypeDefs = concatenateTypeDefs_1.default;
var decorateWithLogger_1 = __webpack_require__(/*! ./decorateWithLogger */ "./node_modules/graphql-tools/dist/generate/decorateWithLogger.js");
exports.decorateWithLogger = decorateWithLogger_1.default;
var extendResolversFromInterfaces_1 = __webpack_require__(/*! ./extendResolversFromInterfaces */ "./node_modules/graphql-tools/dist/generate/extendResolversFromInterfaces.js");
exports.extendResolversFromInterfaces = extendResolversFromInterfaces_1.default;
var extractExtensionDefinitions_1 = __webpack_require__(/*! ./extractExtensionDefinitions */ "./node_modules/graphql-tools/dist/generate/extractExtensionDefinitions.js");
exports.extractExtensionDefinitions = extractExtensionDefinitions_1.default;
var forEachField_1 = __webpack_require__(/*! ./forEachField */ "./node_modules/graphql-tools/dist/generate/forEachField.js");
exports.forEachField = forEachField_1.default;
var SchemaError_1 = __webpack_require__(/*! ./SchemaError */ "./node_modules/graphql-tools/dist/generate/SchemaError.js");
exports.SchemaError = SchemaError_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/implementsAbstractType.js":
/*!*******************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/implementsAbstractType.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
function implementsAbstractType(schema, typeA, typeB) {
    if (typeA === typeB) {
        return true;
    }
    else if (graphql_1.isCompositeType(typeA) && graphql_1.isCompositeType(typeB)) {
        return graphql_1.doTypesOverlap(schema, typeA, typeB);
    }
    else {
        return false;
    }
}
exports.default = implementsAbstractType;
//# sourceMappingURL=implementsAbstractType.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/graphql-tools/dist/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./makeExecutableSchema */ "./node_modules/graphql-tools/dist/makeExecutableSchema.js"));
__export(__webpack_require__(/*! ./mock */ "./node_modules/graphql-tools/dist/mock.js"));
__export(__webpack_require__(/*! ./stitching */ "./node_modules/graphql-tools/dist/stitching/index.js"));
__export(__webpack_require__(/*! ./transforms */ "./node_modules/graphql-tools/dist/transforms/index.js"));
var schemaVisitor_1 = __webpack_require__(/*! ./schemaVisitor */ "./node_modules/graphql-tools/dist/schemaVisitor.js");
exports.SchemaDirectiveVisitor = schemaVisitor_1.SchemaDirectiveVisitor;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/isEmptyObject.js":
/*!**********************************************************!*\
  !*** ./node_modules/graphql-tools/dist/isEmptyObject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function isEmptyObject(obj) {
    if (!obj) {
        return true;
    }
    for (var key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
exports.default = isEmptyObject;
//# sourceMappingURL=isEmptyObject.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/isSpecifiedScalarType.js":
/*!******************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/isSpecifiedScalarType.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
// FIXME: Replace with https://github.com/graphql/graphql-js/blob/master/src/type/scalars.js#L139
exports.specifiedScalarTypes = [
    graphql_1.GraphQLString,
    graphql_1.GraphQLInt,
    graphql_1.GraphQLFloat,
    graphql_1.GraphQLBoolean,
    graphql_1.GraphQLID,
];
function isSpecifiedScalarType(type) {
    return (graphql_1.isNamedType(type) &&
        // Would prefer to use specifiedScalarTypes.some(), however %checks needs
        // a simple expression.
        (type.name === graphql_1.GraphQLString.name ||
            type.name === graphql_1.GraphQLInt.name ||
            type.name === graphql_1.GraphQLFloat.name ||
            type.name === graphql_1.GraphQLBoolean.name ||
            type.name === graphql_1.GraphQLID.name));
}
exports.default = isSpecifiedScalarType;
//# sourceMappingURL=isSpecifiedScalarType.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/makeExecutableSchema.js":
/*!*****************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/makeExecutableSchema.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var schemaVisitor_1 = __webpack_require__(/*! ./schemaVisitor */ "./node_modules/graphql-tools/dist/schemaVisitor.js");
var mergeDeep_1 = __webpack_require__(/*! ./mergeDeep */ "./node_modules/graphql-tools/dist/mergeDeep.js");
var generate_1 = __webpack_require__(/*! ./generate */ "./node_modules/graphql-tools/dist/generate/index.js");
function makeExecutableSchema(_a) {
    var typeDefs = _a.typeDefs, _b = _a.resolvers, resolvers = _b === void 0 ? {} : _b, connectors = _a.connectors, logger = _a.logger, _c = _a.allowUndefinedInResolve, allowUndefinedInResolve = _c === void 0 ? true : _c, _d = _a.resolverValidationOptions, resolverValidationOptions = _d === void 0 ? {} : _d, _e = _a.directiveResolvers, directiveResolvers = _e === void 0 ? null : _e, _f = _a.schemaDirectives, schemaDirectives = _f === void 0 ? null : _f, _g = _a.parseOptions, parseOptions = _g === void 0 ? {} : _g, _h = _a.inheritResolversFromInterfaces, inheritResolversFromInterfaces = _h === void 0 ? false : _h;
    // Validate and clean up arguments
    if (typeof resolverValidationOptions !== 'object') {
        throw new generate_1.SchemaError('Expected `resolverValidationOptions` to be an object');
    }
    if (!typeDefs) {
        throw new generate_1.SchemaError('Must provide typeDefs');
    }
    if (!resolvers) {
        throw new generate_1.SchemaError('Must provide resolvers');
    }
    // We allow passing in an array of resolver maps, in which case we merge them
    var resolverMap = Array.isArray(resolvers)
        ? resolvers.filter(function (resolverObj) { return typeof resolverObj === 'object'; }).reduce(mergeDeep_1.default, {})
        : resolvers;
    // Arguments are now validated and cleaned up
    var schema = generate_1.buildSchemaFromTypeDefinitions(typeDefs, parseOptions);
    schema = generate_1.addResolveFunctionsToSchema({
        schema: schema,
        resolvers: resolverMap,
        resolverValidationOptions: resolverValidationOptions,
        inheritResolversFromInterfaces: inheritResolversFromInterfaces
    });
    generate_1.assertResolveFunctionsPresent(schema, resolverValidationOptions);
    if (!allowUndefinedInResolve) {
        addCatchUndefinedToSchema(schema);
    }
    if (logger) {
        addErrorLoggingToSchema(schema, logger);
    }
    if (typeof resolvers['__schema'] === 'function') {
        // TODO a bit of a hack now, better rewrite generateSchema to attach it there.
        // not doing that now, because I'd have to rewrite a lot of tests.
        generate_1.addSchemaLevelResolveFunction(schema, resolvers['__schema']);
    }
    if (connectors) {
        // connectors are optional, at least for now. That means you can just import them in the resolve
        // function if you want.
        generate_1.attachConnectorsToContext(schema, connectors);
    }
    if (directiveResolvers) {
        generate_1.attachDirectiveResolvers(schema, directiveResolvers);
    }
    if (schemaDirectives) {
        schemaVisitor_1.SchemaDirectiveVisitor.visitSchemaDirectives(schema, schemaDirectives);
    }
    return schema;
}
exports.makeExecutableSchema = makeExecutableSchema;
function decorateToCatchUndefined(fn, hint) {
    if (typeof fn === 'undefined') {
        fn = graphql_1.defaultFieldResolver;
    }
    return function (root, args, ctx, info) {
        var result = fn(root, args, ctx, info);
        if (typeof result === 'undefined') {
            throw new Error("Resolve function for \"" + hint + "\" returned undefined");
        }
        return result;
    };
}
function addCatchUndefinedToSchema(schema) {
    generate_1.forEachField(schema, function (field, typeName, fieldName) {
        var errorHint = typeName + "." + fieldName;
        field.resolve = decorateToCatchUndefined(field.resolve, errorHint);
    });
}
exports.addCatchUndefinedToSchema = addCatchUndefinedToSchema;
function addErrorLoggingToSchema(schema, logger) {
    if (!logger) {
        throw new Error('Must provide a logger');
    }
    if (typeof logger.log !== 'function') {
        throw new Error('Logger.log must be a function');
    }
    generate_1.forEachField(schema, function (field, typeName, fieldName) {
        var errorHint = typeName + "." + fieldName;
        field.resolve = generate_1.decorateWithLogger(field.resolve, logger, errorHint);
    });
}
exports.addErrorLoggingToSchema = addErrorLoggingToSchema;
__export(__webpack_require__(/*! ./generate */ "./node_modules/graphql-tools/dist/generate/index.js"));
//# sourceMappingURL=makeExecutableSchema.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/mergeDeep.js":
/*!******************************************************!*\
  !*** ./node_modules/graphql-tools/dist/mergeDeep.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function mergeDeep(target, source) {
    var output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(function (key) {
            var _a, _b;
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, (_a = {}, _a[key] = source[key], _a));
                }
                else {
                    output[key] = mergeDeep(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, (_b = {}, _b[key] = source[key], _b));
            }
        });
    }
    return output;
}
exports.default = mergeDeep;
function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
//# sourceMappingURL=mergeDeep.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/mock.js":
/*!*************************************************!*\
  !*** ./node_modules/graphql-tools/dist/mock.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var uuid = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
var makeExecutableSchema_1 = __webpack_require__(/*! ./makeExecutableSchema */ "./node_modules/graphql-tools/dist/makeExecutableSchema.js");
// This function wraps addMockFunctionsToSchema for more convenience
function mockServer(schema, mocks, preserveResolvers) {
    if (preserveResolvers === void 0) { preserveResolvers = false; }
    var mySchema;
    if (!(schema instanceof graphql_1.GraphQLSchema)) {
        // TODO: provide useful error messages here if this fails
        mySchema = makeExecutableSchema_1.buildSchemaFromTypeDefinitions(schema);
    }
    else {
        mySchema = schema;
    }
    addMockFunctionsToSchema({ schema: mySchema, mocks: mocks, preserveResolvers: preserveResolvers });
    return { query: function (query, vars) { return graphql_1.graphql(mySchema, query, {}, {}, vars); } };
}
exports.mockServer = mockServer;
var defaultMockMap = new Map();
defaultMockMap.set('Int', function () { return Math.round(Math.random() * 200) - 100; });
defaultMockMap.set('Float', function () { return Math.random() * 200 - 100; });
defaultMockMap.set('String', function () { return 'Hello World'; });
defaultMockMap.set('Boolean', function () { return Math.random() > 0.5; });
defaultMockMap.set('ID', function () { return uuid.v4(); });
// TODO allow providing a seed such that lengths of list could be deterministic
// this could be done by using casual to get a random list length if the casual
// object is global.
function addMockFunctionsToSchema(_a) {
    var schema = _a.schema, _b = _a.mocks, mocks = _b === void 0 ? {} : _b, _c = _a.preserveResolvers, preserveResolvers = _c === void 0 ? false : _c;
    if (!schema) {
        throw new Error('Must provide schema to mock');
    }
    if (!(schema instanceof graphql_1.GraphQLSchema)) {
        throw new Error('Value at "schema" must be of type GraphQLSchema');
    }
    if (!isObject(mocks)) {
        throw new Error('mocks must be of type Object');
    }
    // use Map internally, because that API is nicer.
    var mockFunctionMap = new Map();
    Object.keys(mocks).forEach(function (typeName) {
        mockFunctionMap.set(typeName, mocks[typeName]);
    });
    mockFunctionMap.forEach(function (mockFunction, mockTypeName) {
        if (typeof mockFunction !== 'function') {
            throw new Error("mockFunctionMap[" + mockTypeName + "] must be a function");
        }
    });
    var mockType = function (type, typeName, fieldName) {
        // order of precendence for mocking:
        // 1. if the object passed in already has fieldName, just use that
        // --> if it's a function, that becomes your resolver
        // --> if it's a value, the mock resolver will return that
        // 2. if the nullableType is a list, recurse
        // 2. if there's a mock defined for this typeName, that will be used
        // 3. if there's no mock defined, use the default mocks for this type
        return function (root, args, context, info) {
            // nullability doesn't matter for the purpose of mocking.
            var fieldType = graphql_1.getNullableType(type);
            var namedFieldType = graphql_1.getNamedType(fieldType);
            if (root && typeof root[fieldName] !== 'undefined') {
                var result = void 0;
                // if we're here, the field is already defined
                if (typeof root[fieldName] === 'function') {
                    result = root[fieldName](root, args, context, info);
                    if (result instanceof MockList) {
                        result = result.mock(root, args, context, info, fieldType, mockType);
                    }
                }
                else {
                    result = root[fieldName];
                }
                // Now we merge the result with the default mock for this type.
                // This allows overriding defaults while writing very little code.
                if (mockFunctionMap.has(namedFieldType.name)) {
                    result = mergeMocks(mockFunctionMap
                        .get(namedFieldType.name)
                        .bind(null, root, args, context, info), result);
                }
                return result;
            }
            if (fieldType instanceof graphql_1.GraphQLList ||
                fieldType instanceof graphql_1.GraphQLNonNull) {
                return [
                    mockType(fieldType.ofType)(root, args, context, info),
                    mockType(fieldType.ofType)(root, args, context, info),
                ];
            }
            if (mockFunctionMap.has(fieldType.name) &&
                !(fieldType instanceof graphql_1.GraphQLUnionType ||
                    fieldType instanceof graphql_1.GraphQLInterfaceType)) {
                // the object passed doesn't have this field, so we apply the default mock
                return mockFunctionMap.get(fieldType.name)(root, args, context, info);
            }
            if (fieldType instanceof graphql_1.GraphQLObjectType) {
                // objects don't return actual data, we only need to mock scalars!
                return {};
            }
            // if a mock function is provided for unionType or interfaceType, execute it to resolve the concrete type
            // otherwise randomly pick a type from all implementation types
            if (fieldType instanceof graphql_1.GraphQLUnionType ||
                fieldType instanceof graphql_1.GraphQLInterfaceType) {
                var implementationType = void 0;
                if (mockFunctionMap.has(fieldType.name)) {
                    var interfaceMockObj = mockFunctionMap.get(fieldType.name)(root, args, context, info);
                    if (!interfaceMockObj || !interfaceMockObj.__typename) {
                        return Error("Please return a __typename in \"" + fieldType.name + "\"");
                    }
                    implementationType = schema.getType(interfaceMockObj.__typename);
                }
                else {
                    var possibleTypes = schema.getPossibleTypes(fieldType);
                    implementationType = getRandomElement(possibleTypes);
                }
                return Object.assign({ __typename: implementationType }, mockType(implementationType)(root, args, context, info));
            }
            if (fieldType instanceof graphql_1.GraphQLEnumType) {
                return getRandomElement(fieldType.getValues()).value;
            }
            if (defaultMockMap.has(fieldType.name)) {
                return defaultMockMap.get(fieldType.name)(root, args, context, info);
            }
            // if we get to here, we don't have a value, and we don't have a mock for this type,
            // we could return undefined, but that would be hard to debug, so we throw instead.
            // however, we returning it instead of throwing it, so preserveResolvers can handle the failures.
            return Error("No mock defined for type \"" + fieldType.name + "\"");
        };
    };
    makeExecutableSchema_1.forEachField(schema, function (field, typeName, fieldName) {
        assignResolveType(field.type, preserveResolvers);
        var mockResolver;
        // we have to handle the root mutation and root query types differently,
        // because no resolver is called at the root.
        /* istanbul ignore next: Must provide schema DefinitionNode with query type or a type named Query. */
        var isOnQueryType = schema.getQueryType() && schema.getQueryType().name === typeName;
        var isOnMutationType = schema.getMutationType() && schema.getMutationType().name === typeName;
        if (isOnQueryType || isOnMutationType) {
            if (mockFunctionMap.has(typeName)) {
                var rootMock_1 = mockFunctionMap.get(typeName);
                // XXX: BUG in here, need to provide proper signature for rootMock.
                if (typeof rootMock_1(undefined, {}, {}, {})[fieldName] === 'function') {
                    mockResolver = function (root, args, context, info) {
                        var updatedRoot = root || {}; // TODO: should we clone instead?
                        updatedRoot[fieldName] = rootMock_1(root, args, context, info)[fieldName];
                        // XXX this is a bit of a hack to still use mockType, which
                        // lets you mock lists etc. as well
                        // otherwise we could just set field.resolve to rootMock()[fieldName]
                        // it's like pretending there was a resolve function that ran before
                        // the root resolve function.
                        return mockType(field.type, typeName, fieldName)(updatedRoot, args, context, info);
                    };
                }
            }
        }
        if (!mockResolver) {
            mockResolver = mockType(field.type, typeName, fieldName);
        }
        if (!preserveResolvers || !field.resolve) {
            field.resolve = mockResolver;
        }
        else {
            var oldResolver_1 = field.resolve;
            field.resolve = function (rootObject, args, context, info) {
                return Promise.all([
                    mockResolver(rootObject, args, context, info),
                    oldResolver_1(rootObject, args, context, info),
                ]).then(function (values) {
                    var mockedValue = values[0], resolvedValue = values[1];
                    // In case we couldn't mock
                    if (mockedValue instanceof Error) {
                        // only if value was not resolved, populate the error.
                        if (undefined === resolvedValue) {
                            throw mockedValue;
                        }
                        return resolvedValue;
                    }
                    if (resolvedValue instanceof Date && mockedValue instanceof Date) {
                        return undefined !== resolvedValue ? resolvedValue : mockedValue;
                    }
                    if (isObject(mockedValue) && isObject(resolvedValue)) {
                        // Object.assign() won't do here, as we need to all properties, including
                        // the non-enumerable ones and defined using Object.defineProperty
                        var emptyObject = Object.create(Object.getPrototypeOf(resolvedValue));
                        return copyOwnProps(emptyObject, resolvedValue, mockedValue);
                    }
                    return undefined !== resolvedValue ? resolvedValue : mockedValue;
                });
            };
        }
    });
}
exports.addMockFunctionsToSchema = addMockFunctionsToSchema;
function isObject(thing) {
    return thing === Object(thing) && !Array.isArray(thing);
}
// returns a random element from that ary
function getRandomElement(ary) {
    var sample = Math.floor(Math.random() * ary.length);
    return ary[sample];
}
function mergeObjects(a, b) {
    return Object.assign(a, b);
}
function copyOwnPropsIfNotPresent(target, source) {
    Object.getOwnPropertyNames(source).forEach(function (prop) {
        if (!Object.getOwnPropertyDescriptor(target, prop)) {
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
        }
    });
}
function copyOwnProps(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    sources.forEach(function (source) {
        var chain = source;
        while (chain) {
            copyOwnPropsIfNotPresent(target, chain);
            chain = Object.getPrototypeOf(chain);
        }
    });
    return target;
}
// takes either an object or a (possibly nested) array
// and completes the customMock object with any fields
// defined on genericMock
// only merges objects or arrays. Scalars are returned as is
function mergeMocks(genericMockFunction, customMock) {
    if (Array.isArray(customMock)) {
        return customMock.map(function (el) { return mergeMocks(genericMockFunction, el); });
    }
    if (isObject(customMock)) {
        return mergeObjects(genericMockFunction(), customMock);
    }
    return customMock;
}
function getResolveType(namedFieldType) {
    if (namedFieldType instanceof graphql_1.GraphQLInterfaceType ||
        namedFieldType instanceof graphql_1.GraphQLUnionType) {
        return namedFieldType.resolveType;
    }
    else {
        return undefined;
    }
}
function assignResolveType(type, preserveResolvers) {
    var fieldType = graphql_1.getNullableType(type);
    var namedFieldType = graphql_1.getNamedType(fieldType);
    var oldResolveType = getResolveType(namedFieldType);
    if (preserveResolvers && oldResolveType && oldResolveType.length) {
        return;
    }
    if (namedFieldType instanceof graphql_1.GraphQLUnionType ||
        namedFieldType instanceof graphql_1.GraphQLInterfaceType) {
        // the default `resolveType` always returns null. We add a fallback
        // resolution that works with how unions and interface are mocked
        namedFieldType.resolveType = function (data, context, info) {
            return info.schema.getType(data.__typename);
        };
    }
}
var MockList = /** @class */ (function () {
    // wrappedFunction can return another MockList or a value
    function MockList(len, wrappedFunction) {
        this.len = len;
        if (typeof wrappedFunction !== 'undefined') {
            if (typeof wrappedFunction !== 'function') {
                throw new Error('Second argument to MockList must be a function or undefined');
            }
            this.wrappedFunction = wrappedFunction;
        }
    }
    MockList.prototype.mock = function (root, args, context, info, fieldType, mockTypeFunc) {
        var arr;
        if (Array.isArray(this.len)) {
            arr = new Array(this.randint(this.len[0], this.len[1]));
        }
        else {
            arr = new Array(this.len);
        }
        for (var i = 0; i < arr.length; i++) {
            if (typeof this.wrappedFunction === 'function') {
                var res = this.wrappedFunction(root, args, context, info);
                if (res instanceof MockList) {
                    var nullableType = graphql_1.getNullableType(fieldType.ofType);
                    arr[i] = res.mock(root, args, context, info, nullableType, mockTypeFunc);
                }
                else {
                    arr[i] = res;
                }
            }
            else {
                arr[i] = mockTypeFunc(fieldType.ofType)(root, args, context, info);
            }
        }
        return arr;
    };
    MockList.prototype.randint = function (low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    };
    return MockList;
}());
exports.MockList = MockList;
//# sourceMappingURL=mock.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/schemaVisitor.js":
/*!**********************************************************!*\
  !*** ./node_modules/graphql-tools/dist/schemaVisitor.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var values_1 = __webpack_require__(/*! graphql/execution/values */ "./node_modules/graphql/execution/values.mjs");
var hasOwn = Object.prototype.hasOwnProperty;
// Abstract base class of any visitor implementation, defining the available
// visitor methods along with their parameter types, and providing a static
// helper function for determining whether a subclass implements a given
// visitor method, as opposed to inheriting one of the stubs defined here.
var SchemaVisitor = /** @class */ (function () {
    function SchemaVisitor() {
    }
    // Determine if this SchemaVisitor (sub)class implements a particular
    // visitor method.
    SchemaVisitor.implementsVisitorMethod = function (methodName) {
        if (!methodName.startsWith('visit')) {
            return false;
        }
        var method = this.prototype[methodName];
        if (typeof method !== 'function') {
            return false;
        }
        if (this === SchemaVisitor) {
            // The SchemaVisitor class implements every visitor method.
            return true;
        }
        var stub = SchemaVisitor.prototype[methodName];
        if (method === stub) {
            // If this.prototype[methodName] was just inherited from SchemaVisitor,
            // then this class does not really implement the method.
            return false;
        }
        return true;
    };
    // Concrete subclasses of SchemaVisitor should override one or more of these
    // visitor methods, in order to express their interest in handling certain
    // schema types/locations. Each method may return null to remove the given
    // type from the schema, a non-null value of the same type to update the
    // type in the schema, or nothing to leave the type as it was.
    /* tslint:disable:no-empty */
    SchemaVisitor.prototype.visitSchema = function (schema) { };
    SchemaVisitor.prototype.visitScalar = function (scalar) { };
    SchemaVisitor.prototype.visitObject = function (object) { };
    SchemaVisitor.prototype.visitFieldDefinition = function (field, details) { };
    SchemaVisitor.prototype.visitArgumentDefinition = function (argument, details) { };
    SchemaVisitor.prototype.visitInterface = function (iface) { };
    SchemaVisitor.prototype.visitUnion = function (union) { };
    SchemaVisitor.prototype.visitEnum = function (type) { };
    SchemaVisitor.prototype.visitEnumValue = function (value, details) { };
    SchemaVisitor.prototype.visitInputObject = function (object) { };
    SchemaVisitor.prototype.visitInputFieldDefinition = function (field, details) { };
    return SchemaVisitor;
}());
exports.SchemaVisitor = SchemaVisitor;
// Generic function for visiting GraphQLSchema objects.
function visitSchema(schema, 
// To accommodate as many different visitor patterns as possible, the
// visitSchema function does not simply accept a single instance of the
// SchemaVisitor class, but instead accepts a function that takes the
// current VisitableSchemaType object and the name of a visitor method and
// returns an array of SchemaVisitor instances that implement the visitor
// method and have an interest in handling the given VisitableSchemaType
// object. In the simplest case, this function can always return an array
// containing a single visitor object, without even looking at the type or
// methodName parameters. In other cases, this function might sometimes
// return an empty array to indicate there are no visitors that should be
// applied to the given VisitableSchemaType object. For an example of a
// visitor pattern that benefits from this abstraction, see the
// SchemaDirectiveVisitor class below.
visitorSelector) {
    // Helper function that calls visitorSelector and applies the resulting
    // visitors to the given type, with arguments [type, ...args].
    function callMethod(methodName, type) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        visitorSelector(type, methodName).every(function (visitor) {
            var newType = visitor[methodName].apply(visitor, [type].concat(args));
            if (typeof newType === 'undefined') {
                // Keep going without modifying type.
                return true;
            }
            if (methodName === 'visitSchema' ||
                type instanceof graphql_1.GraphQLSchema) {
                throw new Error("Method " + methodName + " cannot replace schema with " + newType);
            }
            if (newType === null) {
                // Stop the loop and return null form callMethod, which will cause
                // the type to be removed from the schema.
                type = null;
                return false;
            }
            // Update type to the new type returned by the visitor method, so that
            // later directives will see the new type, and callMethod will return
            // the final type.
            type = newType;
            return true;
        });
        // If there were no directives for this type object, or if all visitor
        // methods returned nothing, type will be returned unmodified.
        return type;
    }
    // Recursive helper function that calls any appropriate visitor methods for
    // each object in the schema, then traverses the object's children (if any).
    function visit(type) {
        if (type instanceof graphql_1.GraphQLSchema) {
            // Unlike the other types, the root GraphQLSchema object cannot be
            // replaced by visitor methods, because that would make life very hard
            // for SchemaVisitor subclasses that rely on the original schema object.
            callMethod('visitSchema', type);
            updateEachKey(type.getTypeMap(), function (namedType, typeName) {
                if (!typeName.startsWith('__')) {
                    // Call visit recursively to let it determine which concrete
                    // subclass of GraphQLNamedType we found in the type map. Because
                    // we're using updateEachKey, the result of visit(namedType) may
                    // cause the type to be removed or replaced.
                    return visit(namedType);
                }
            });
            return type;
        }
        if (type instanceof graphql_1.GraphQLObjectType) {
            // Note that callMethod('visitObject', type) may not actually call any
            // methods, if there are no @directive annotations associated with this
            // type, or if this SchemaDirectiveVisitor subclass does not override
            // the visitObject method.
            var newObject = callMethod('visitObject', type);
            if (newObject) {
                visitFields(newObject);
            }
            return newObject;
        }
        if (type instanceof graphql_1.GraphQLInterfaceType) {
            var newInterface = callMethod('visitInterface', type);
            if (newInterface) {
                visitFields(newInterface);
            }
            return newInterface;
        }
        if (type instanceof graphql_1.GraphQLInputObjectType) {
            var newInputObject_1 = callMethod('visitInputObject', type);
            if (newInputObject_1) {
                updateEachKey(newInputObject_1.getFields(), function (field) {
                    // Since we call a different method for input object fields, we
                    // can't reuse the visitFields function here.
                    return callMethod('visitInputFieldDefinition', field, {
                        objectType: newInputObject_1,
                    });
                });
            }
            return newInputObject_1;
        }
        if (type instanceof graphql_1.GraphQLScalarType) {
            return callMethod('visitScalar', type);
        }
        if (type instanceof graphql_1.GraphQLUnionType) {
            return callMethod('visitUnion', type);
        }
        if (type instanceof graphql_1.GraphQLEnumType) {
            var newEnum_1 = callMethod('visitEnum', type);
            if (newEnum_1) {
                updateEachKey(newEnum_1.getValues(), function (value) {
                    return callMethod('visitEnumValue', value, {
                        enumType: newEnum_1,
                    });
                });
            }
            return newEnum_1;
        }
        throw new Error("Unexpected schema type: " + type);
    }
    function visitFields(type) {
        updateEachKey(type.getFields(), function (field) {
            // It would be nice if we could call visit(field) recursively here, but
            // GraphQLField is merely a type, not a value that can be detected using
            // an instanceof check, so we have to visit the fields in this lexical
            // context, so that TypeScript can validate the call to
            // visitFieldDefinition.
            var newField = callMethod('visitFieldDefinition', field, {
                // While any field visitor needs a reference to the field object, some
                // field visitors may also need to know the enclosing (parent) type,
                // perhaps to determine if the parent is a GraphQLObjectType or a
                // GraphQLInterfaceType. To obtain a reference to the parent, a
                // visitor method can have a second parameter, which will be an object
                // with an .objectType property referring to the parent.
                objectType: type,
            });
            if (newField && newField.args) {
                updateEachKey(newField.args, function (arg) {
                    return callMethod('visitArgumentDefinition', arg, {
                        // Like visitFieldDefinition, visitArgumentDefinition takes a
                        // second parameter that provides additional context, namely the
                        // parent .field and grandparent .objectType. Remember that the
                        // current GraphQLSchema is always available via this.schema.
                        field: newField,
                        objectType: type,
                    });
                });
            }
            return newField;
        });
    }
    visit(schema);
    // Return the original schema for convenience, even though it cannot have
    // been replaced or removed by the code above.
    return schema;
}
exports.visitSchema = visitSchema;
// Update any references to named schema types that disagree with the named
// types found in schema.getTypeMap().
function healSchema(schema) {
    heal(schema);
    return schema;
    function heal(type) {
        if (type instanceof graphql_1.GraphQLSchema) {
            var originalTypeMap_1 = type.getTypeMap();
            var actualNamedTypeMap_1 = Object.create(null);
            // If any of the .name properties of the GraphQLNamedType objects in
            // schema.getTypeMap() have changed, the keys of the type map need to
            // be updated accordingly.
            each(originalTypeMap_1, function (namedType, typeName) {
                if (typeName.startsWith('__')) {
                    return;
                }
                var actualName = namedType.name;
                if (actualName.startsWith('__')) {
                    return;
                }
                if (hasOwn.call(actualNamedTypeMap_1, actualName)) {
                    throw new Error("Duplicate schema type name " + actualName);
                }
                actualNamedTypeMap_1[actualName] = namedType;
                // Note: we are deliberately leaving namedType in the schema by its
                // original name (which might be different from actualName), so that
                // references by that name can be healed.
            });
            // Now add back every named type by its actual name.
            each(actualNamedTypeMap_1, function (namedType, typeName) {
                originalTypeMap_1[typeName] = namedType;
            });
            // Directive declaration argument types can refer to named types.
            each(type.getDirectives(), function (decl) {
                if (decl.args) {
                    each(decl.args, function (arg) {
                        arg.type = healType(arg.type);
                    });
                }
            });
            each(originalTypeMap_1, function (namedType, typeName) {
                if (!typeName.startsWith('__')) {
                    heal(namedType);
                }
            });
            updateEachKey(originalTypeMap_1, function (namedType, typeName) {
                // Dangling references to renamed types should remain in the schema
                // during healing, but must be removed now, so that the following
                // invariant holds for all names: schema.getType(name).name === name
                if (!typeName.startsWith('__') &&
                    !hasOwn.call(actualNamedTypeMap_1, typeName)) {
                    return null;
                }
            });
        }
        else if (type instanceof graphql_1.GraphQLObjectType) {
            healFields(type);
            each(type.getInterfaces(), function (iface) { return heal(iface); });
        }
        else if (type instanceof graphql_1.GraphQLInterfaceType) {
            healFields(type);
        }
        else if (type instanceof graphql_1.GraphQLInputObjectType) {
            each(type.getFields(), function (field) {
                field.type = healType(field.type);
            });
        }
        else if (type instanceof graphql_1.GraphQLScalarType) {
            // Nothing to do.
        }
        else if (type instanceof graphql_1.GraphQLUnionType) {
            updateEachKey(type.getTypes(), function (t) { return healType(t); });
        }
        else if (type instanceof graphql_1.GraphQLEnumType) {
            // Nothing to do.
        }
        else {
            throw new Error("Unexpected schema type: " + type);
        }
    }
    function healFields(type) {
        each(type.getFields(), function (field) {
            field.type = healType(field.type);
            if (field.args) {
                each(field.args, function (arg) {
                    arg.type = healType(arg.type);
                });
            }
        });
    }
    function healType(type) {
        // Unwrap the two known wrapper types
        if (type instanceof graphql_1.GraphQLList) {
            type = new graphql_1.GraphQLList(healType(type.ofType));
        }
        else if (type instanceof graphql_1.GraphQLNonNull) {
            type = new graphql_1.GraphQLNonNull(healType(type.ofType));
        }
        else if (graphql_1.isNamedType(type)) {
            // If a type annotation on a field or an argument or a union member is
            // any `GraphQLNamedType` with a `name`, then it must end up identical
            // to `schema.getType(name)`, since `schema.getTypeMap()` is the source
            // of truth for all named schema types.
            var namedType = type;
            var officialType = schema.getType(namedType.name);
            if (officialType && namedType !== officialType) {
                return officialType;
            }
        }
        return type;
    }
}
exports.healSchema = healSchema;
// This class represents a reusable implementation of a @directive that may
// appear in a GraphQL schema written in Schema Definition Language.
//
// By overriding one or more visit{Object,Union,...} methods, a subclass
// registers interest in certain schema types, such as GraphQLObjectType,
// GraphQLUnionType, etc. When SchemaDirectiveVisitor.visitSchemaDirectives is
// called with a GraphQLSchema object and a map of visitor subclasses, the
// overidden methods of those subclasses allow the visitors to obtain
// references to any type objects that have @directives attached to them,
// enabling visitors to inspect or modify the schema as appropriate.
//
// For example, if a directive called @rest(url: "...") appears after a field
// definition, a SchemaDirectiveVisitor subclass could provide meaning to that
// directive by overriding the visitFieldDefinition method (which receives a
// GraphQLField parameter), and then the body of that visitor method could
// manipulate the field's resolver function to fetch data from a REST endpoint
// described by the url argument passed to the @rest directive:
//
//   const typeDefs = `
//   type Query {
//     people: [Person] @rest(url: "/api/v1/people")
//   }`;
//
//   const schema = makeExecutableSchema({ typeDefs });
//
//   SchemaDirectiveVisitor.visitSchemaDirectives(schema, {
//     rest: class extends SchemaDirectiveVisitor {
//       public visitFieldDefinition(field: GraphQLField<any, any>) {
//         const { url } = this.args;
//         field.resolve = () => fetch(url);
//       }
//     }
//   });
//
// The subclass in this example is defined as an anonymous class expression,
// for brevity. A truly reusable SchemaDirectiveVisitor would most likely be
// defined in a library using a named class declaration, and then exported for
// consumption by other modules and packages.
//
// See below for a complete list of overridable visitor methods, their
// parameter types, and more details about the properties exposed by instances
// of the SchemaDirectiveVisitor class.
var SchemaDirectiveVisitor = /** @class */ (function (_super) {
    __extends(SchemaDirectiveVisitor, _super);
    // Mark the constructor protected to enforce passing SchemaDirectiveVisitor
    // subclasses (not instances) to visitSchemaDirectives.
    function SchemaDirectiveVisitor(config) {
        var _this = _super.call(this) || this;
        _this.name = config.name;
        _this.args = config.args;
        _this.visitedType = config.visitedType;
        _this.schema = config.schema;
        _this.context = config.context;
        return _this;
    }
    // Override this method to return a custom GraphQLDirective (or modify one
    // already present in the schema) to enforce argument types, provide default
    // argument values, or specify schema locations where this @directive may
    // appear. By default, any declaration found in the schema will be returned.
    SchemaDirectiveVisitor.getDirectiveDeclaration = function (directiveName, schema) {
        return schema.getDirective(directiveName);
    };
    // Call SchemaDirectiveVisitor.visitSchemaDirectives to visit every
    // @directive in the schema and create an appropriate SchemaDirectiveVisitor
    // instance to visit the object decorated by the @directive.
    SchemaDirectiveVisitor.visitSchemaDirectives = function (schema, directiveVisitors, 
    // Optional context object that will be available to all visitor instances
    // via this.context. Defaults to an empty null-prototype object.
    context) {
        if (context === void 0) { 
        // Optional context object that will be available to all visitor instances
        // via this.context. Defaults to an empty null-prototype object.
        context = Object.create(null); }
        // If the schema declares any directives for public consumption, record
        // them here so that we can properly coerce arguments when/if we encounter
        // an occurrence of the directive while walking the schema below.
        var declaredDirectives = this.getDeclaredDirectives(schema, directiveVisitors);
        // Map from directive names to lists of SchemaDirectiveVisitor instances
        // created while visiting the schema.
        var createdVisitors = Object.create(null);
        Object.keys(directiveVisitors).forEach(function (directiveName) {
            createdVisitors[directiveName] = [];
        });
        function visitorSelector(type, methodName) {
            var visitors = [];
            var directiveNodes = type.astNode && type.astNode.directives;
            if (!directiveNodes) {
                return visitors;
            }
            directiveNodes.forEach(function (directiveNode) {
                var directiveName = directiveNode.name.value;
                if (!hasOwn.call(directiveVisitors, directiveName)) {
                    return;
                }
                var visitorClass = directiveVisitors[directiveName];
                // Avoid creating visitor objects if visitorClass does not override
                // the visitor method named by methodName.
                if (!visitorClass.implementsVisitorMethod(methodName)) {
                    return;
                }
                var decl = declaredDirectives[directiveName];
                var args;
                if (decl) {
                    // If this directive was explicitly declared, use the declared
                    // argument types (and any default values) to check, coerce, and/or
                    // supply default values for the given arguments.
                    args = values_1.getArgumentValues(decl, directiveNode);
                }
                else {
                    // If this directive was not explicitly declared, just convert the
                    // argument nodes to their corresponding JavaScript values.
                    args = Object.create(null);
                    directiveNode.arguments.forEach(function (arg) {
                        args[arg.name.value] = valueFromASTUntyped(arg.value);
                    });
                }
                // As foretold in comments near the top of the visitSchemaDirectives
                // method, this is where instances of the SchemaDirectiveVisitor class
                // get created and assigned names. While subclasses could override the
                // constructor method, the constructor is marked as protected, so
                // these are the only arguments that will ever be passed.
                visitors.push(new visitorClass({
                    name: directiveName,
                    args: args,
                    visitedType: type,
                    schema: schema,
                    context: context,
                }));
            });
            if (visitors.length > 0) {
                visitors.forEach(function (visitor) {
                    createdVisitors[visitor.name].push(visitor);
                });
            }
            return visitors;
        }
        visitSchema(schema, visitorSelector);
        // Automatically update any references to named schema types replaced
        // during the traversal, so implementors don't have to worry about that.
        healSchema(schema);
        return createdVisitors;
    };
    SchemaDirectiveVisitor.getDeclaredDirectives = function (schema, directiveVisitors) {
        var declaredDirectives = Object.create(null);
        each(schema.getDirectives(), function (decl) {
            declaredDirectives[decl.name] = decl;
        });
        // If the visitor subclass overrides getDirectiveDeclaration, and it
        // returns a non-null GraphQLDirective, use that instead of any directive
        // declared in the schema itself. Reasoning: if a SchemaDirectiveVisitor
        // goes to the trouble of implementing getDirectiveDeclaration, it should
        // be able to rely on that implementation.
        each(directiveVisitors, function (visitorClass, directiveName) {
            var decl = visitorClass.getDirectiveDeclaration(directiveName, schema);
            if (decl) {
                declaredDirectives[directiveName] = decl;
            }
        });
        each(declaredDirectives, function (decl, name) {
            if (!hasOwn.call(directiveVisitors, name)) {
                // SchemaDirectiveVisitors.visitSchemaDirectives might be called
                // multiple times with partial directiveVisitors maps, so it's not
                // necessarily an error for directiveVisitors to be missing an
                // implementation of a directive that was declared in the schema.
                return;
            }
            var visitorClass = directiveVisitors[name];
            each(decl.locations, function (loc) {
                var visitorMethodName = directiveLocationToVisitorMethodName(loc);
                if (SchemaVisitor.implementsVisitorMethod(visitorMethodName) &&
                    !visitorClass.implementsVisitorMethod(visitorMethodName)) {
                    // While visitor subclasses may implement extra visitor methods,
                    // it's definitely a mistake if the GraphQLDirective declares itself
                    // applicable to certain schema locations, and the visitor subclass
                    // does not implement all the corresponding methods.
                    throw new Error("SchemaDirectiveVisitor for @" + name + " must implement " + visitorMethodName + " method");
                }
            });
        });
        return declaredDirectives;
    };
    return SchemaDirectiveVisitor;
}(SchemaVisitor));
exports.SchemaDirectiveVisitor = SchemaDirectiveVisitor;
// Convert a string like "FIELD_DEFINITION" to "visitFieldDefinition".
function directiveLocationToVisitorMethodName(loc) {
    return 'visit' + loc.replace(/([^_]*)_?/g, function (wholeMatch, part) {
        return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    });
}
function each(arrayOrObject, callback) {
    Object.keys(arrayOrObject).forEach(function (key) {
        callback(arrayOrObject[key], key);
    });
}
// A more powerful version of each that has the ability to replace or remove
// array or object keys.
function updateEachKey(arrayOrObject, 
// The callback can return nothing to leave the key untouched, null to remove
// the key from the array or object, or a non-null V to replace the value.
callback) {
    var deletedCount = 0;
    Object.keys(arrayOrObject).forEach(function (key) {
        var result = callback(arrayOrObject[key], key);
        if (typeof result === 'undefined') {
            return;
        }
        if (result === null) {
            delete arrayOrObject[key];
            deletedCount++;
            return;
        }
        arrayOrObject[key] = result;
    });
    if (deletedCount > 0 && Array.isArray(arrayOrObject)) {
        // Remove any holes from the array due to deleted elements.
        arrayOrObject.splice(0).forEach(function (elem) {
            arrayOrObject.push(elem);
        });
    }
}
// Similar to the graphql-js function of the same name, slightly simplified:
// https://github.com/graphql/graphql-js/blob/master/src/utilities/valueFromASTUntyped.js
function valueFromASTUntyped(valueNode) {
    switch (valueNode.kind) {
        case graphql_1.Kind.NULL:
            return null;
        case graphql_1.Kind.INT:
            return parseInt(valueNode.value, 10);
        case graphql_1.Kind.FLOAT:
            return parseFloat(valueNode.value);
        case graphql_1.Kind.STRING:
        case graphql_1.Kind.ENUM:
        case graphql_1.Kind.BOOLEAN:
            return valueNode.value;
        case graphql_1.Kind.LIST:
            return valueNode.values.map(valueFromASTUntyped);
        case graphql_1.Kind.OBJECT:
            var obj_1 = Object.create(null);
            valueNode.fields.forEach(function (field) {
                obj_1[field.name.value] = valueFromASTUntyped(field.value);
            });
            return obj_1;
        /* istanbul ignore next */
        default:
            throw new Error('Unexpected value kind: ' + valueNode.kind);
    }
}
//# sourceMappingURL=schemaVisitor.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/stitching/defaultMergedResolver.js":
/*!****************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/stitching/defaultMergedResolver.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var error_1 = __webpack_require__(/*! graphql/error */ "./node_modules/graphql/error/index.mjs");
var errors_1 = __webpack_require__(/*! ./errors */ "./node_modules/graphql-tools/dist/stitching/errors.js");
var getResponseKeyFromInfo_1 = __webpack_require__(/*! ./getResponseKeyFromInfo */ "./node_modules/graphql-tools/dist/stitching/getResponseKeyFromInfo.js");
// Resolver that knows how to:
// a) handle aliases for proxied schemas
// b) handle errors from proxied schemas
var defaultMergedResolver = function (parent, args, context, info) {
    if (!parent) {
        return null;
    }
    var responseKey = getResponseKeyFromInfo_1.getResponseKeyFromInfo(info);
    var errorResult = errors_1.getErrorsFromParent(parent, responseKey);
    if (errorResult.kind === 'OWN') {
        throw error_1.locatedError(new Error(errorResult.error.message), info.fieldNodes, graphql_1.responsePathAsArray(info.path));
    }
    var result = parent[responseKey];
    // subscription result mapping
    if (!result && parent.data && parent.data[responseKey]) {
        result = parent.data[responseKey];
    }
    if (errorResult.errors) {
        result = errors_1.annotateWithChildrenErrors(result, errorResult.errors);
    }
    return result;
};
exports.default = defaultMergedResolver;
//# sourceMappingURL=defaultMergedResolver.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/stitching/delegateToSchema.js":
/*!***********************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/stitching/delegateToSchema.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var transforms_1 = __webpack_require__(/*! ../transforms/transforms */ "./node_modules/graphql-tools/dist/transforms/transforms.js");
var AddArgumentsAsVariables_1 = __webpack_require__(/*! ../transforms/AddArgumentsAsVariables */ "./node_modules/graphql-tools/dist/transforms/AddArgumentsAsVariables.js");
var FilterToSchema_1 = __webpack_require__(/*! ../transforms/FilterToSchema */ "./node_modules/graphql-tools/dist/transforms/FilterToSchema.js");
var AddTypenameToAbstract_1 = __webpack_require__(/*! ../transforms/AddTypenameToAbstract */ "./node_modules/graphql-tools/dist/transforms/AddTypenameToAbstract.js");
var CheckResultAndHandleErrors_1 = __webpack_require__(/*! ../transforms/CheckResultAndHandleErrors */ "./node_modules/graphql-tools/dist/transforms/CheckResultAndHandleErrors.js");
var mapAsyncIterator_1 = __webpack_require__(/*! ./mapAsyncIterator */ "./node_modules/graphql-tools/dist/stitching/mapAsyncIterator.js");
var ExpandAbstractTypes_1 = __webpack_require__(/*! ../transforms/ExpandAbstractTypes */ "./node_modules/graphql-tools/dist/transforms/ExpandAbstractTypes.js");
var ReplaceFieldWithFragment_1 = __webpack_require__(/*! ../transforms/ReplaceFieldWithFragment */ "./node_modules/graphql-tools/dist/transforms/ReplaceFieldWithFragment.js");
function delegateToSchema(options) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (options instanceof graphql_1.GraphQLSchema) {
        throw new Error('Passing positional arguments to delegateToSchema is a deprecated. ' +
            'Please pass named parameters instead.');
    }
    return delegateToSchemaImplementation(options);
}
exports.default = delegateToSchema;
function delegateToSchemaImplementation(options) {
    return __awaiter(this, void 0, void 0, function () {
        var info, _a, args, operation, rawDocument, rawRequest, transforms, processedRequest, errors, _b, executionResult;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    info = options.info, _a = options.args, args = _a === void 0 ? {} : _a;
                    operation = options.operation || info.operation.operation;
                    rawDocument = createDocument(options.fieldName, operation, info.fieldNodes, Object.keys(info.fragments).map(function (fragmentName) { return info.fragments[fragmentName]; }), info.operation.variableDefinitions, info.operation.name);
                    rawRequest = {
                        document: rawDocument,
                        variables: info.variableValues,
                    };
                    transforms = (options.transforms || []).concat([
                        new ExpandAbstractTypes_1.default(info.schema, options.schema)
                    ]);
                    if (info.mergeInfo && info.mergeInfo.fragments) {
                        transforms.push(new ReplaceFieldWithFragment_1.default(options.schema, info.mergeInfo.fragments));
                    }
                    transforms = transforms.concat([
                        new AddArgumentsAsVariables_1.default(options.schema, args),
                        new FilterToSchema_1.default(options.schema),
                        new AddTypenameToAbstract_1.default(options.schema),
                        new CheckResultAndHandleErrors_1.default(info, options.fieldName)
                    ]);
                    processedRequest = transforms_1.applyRequestTransforms(rawRequest, transforms);
                    if (!options.skipValidation) {
                        errors = graphql_1.validate(options.schema, processedRequest.document);
                        if (errors.length > 0) {
                            throw errors;
                        }
                    }
                    if (!(operation === 'query' || operation === 'mutation')) return [3 /*break*/, 2];
                    _b = transforms_1.applyResultTransforms;
                    return [4 /*yield*/, graphql_1.execute(options.schema, processedRequest.document, info.rootValue, options.context, processedRequest.variables)];
                case 1: return [2 /*return*/, _b.apply(void 0, [_c.sent(),
                        transforms])];
                case 2:
                    if (!(operation === 'subscription')) return [3 /*break*/, 4];
                    return [4 /*yield*/, graphql_1.subscribe(options.schema, processedRequest.document, info.rootValue, options.context, processedRequest.variables)];
                case 3:
                    executionResult = _c.sent();
                    // "subscribe" to the subscription result and map the result through the transforms
                    return [2 /*return*/, mapAsyncIterator_1.default(executionResult, function (result) {
                            var _a;
                            var transformedResult = transforms_1.applyResultTransforms(result, transforms);
                            var subscriptionKey = Object.keys(result.data)[0];
                            // for some reason the returned transformedResult needs to be nested inside the root subscription field
                            // does not work otherwise...
                            return _a = {},
                                _a[subscriptionKey] = transformedResult,
                                _a;
                        })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function createDocument(targetField, targetOperation, originalSelections, fragments, variables, operationName) {
    var selections = [];
    var args = [];
    originalSelections.forEach(function (field) {
        var fieldSelections = field.selectionSet
            ? field.selectionSet.selections
            : [];
        selections = selections.concat(fieldSelections);
        args = args.concat(field.arguments || []);
    });
    var selectionSet = null;
    if (selections.length > 0) {
        selectionSet = {
            kind: graphql_1.Kind.SELECTION_SET,
            selections: selections,
        };
    }
    var rootField = {
        kind: graphql_1.Kind.FIELD,
        alias: null,
        arguments: args,
        selectionSet: selectionSet,
        name: {
            kind: graphql_1.Kind.NAME,
            value: targetField,
        },
    };
    var rootSelectionSet = {
        kind: graphql_1.Kind.SELECTION_SET,
        selections: [rootField],
    };
    var operationDefinition = {
        kind: graphql_1.Kind.OPERATION_DEFINITION,
        operation: targetOperation,
        variableDefinitions: variables,
        selectionSet: rootSelectionSet,
        name: operationName,
    };
    return {
        kind: graphql_1.Kind.DOCUMENT,
        definitions: [operationDefinition].concat(fragments),
    };
}
//# sourceMappingURL=delegateToSchema.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/stitching/errors.js":
/*!*************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/stitching/errors.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var error_1 = __webpack_require__(/*! graphql/error */ "./node_modules/graphql/error/index.mjs");
var getResponseKeyFromInfo_1 = __webpack_require__(/*! ./getResponseKeyFromInfo */ "./node_modules/graphql-tools/dist/stitching/getResponseKeyFromInfo.js");
if ((typeof global !== 'undefined' && 'Symbol' in global) ||
    (typeof window !== 'undefined' && 'Symbol' in window)) {
    exports.ERROR_SYMBOL = Symbol('subSchemaErrors');
}
else {
    exports.ERROR_SYMBOL = '@@__subSchemaErrors';
}
function annotateWithChildrenErrors(object, childrenErrors) {
    var _a;
    if (!childrenErrors || childrenErrors.length === 0) {
        // Nothing to see here, move along
        return object;
    }
    if (Array.isArray(object)) {
        var byIndex_1 = {};
        childrenErrors.forEach(function (error) {
            if (!error.path) {
                return;
            }
            var index = error.path[1];
            var current = byIndex_1[index] || [];
            current.push(__assign({}, error, { path: error.path.slice(1) }));
            byIndex_1[index] = current;
        });
        return object.map(function (item, index) { return annotateWithChildrenErrors(item, byIndex_1[index]); });
    }
    return __assign({}, object, (_a = {}, _a[exports.ERROR_SYMBOL] = childrenErrors.map(function (error) { return (__assign({}, error, (error.path ? { path: error.path.slice(1) } : {}))); }), _a));
}
exports.annotateWithChildrenErrors = annotateWithChildrenErrors;
function getErrorsFromParent(object, fieldName) {
    var errors = (object && object[exports.ERROR_SYMBOL]) || [];
    var childrenErrors = [];
    for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
        var error = errors_1[_i];
        if (!error.path || (error.path.length === 1 && error.path[0] === fieldName)) {
            return {
                kind: 'OWN',
                error: error
            };
        }
        else if (error.path[0] === fieldName) {
            childrenErrors.push(error);
        }
    }
    return {
        kind: 'CHILDREN',
        errors: childrenErrors
    };
}
exports.getErrorsFromParent = getErrorsFromParent;
var CombinedError = /** @class */ (function (_super) {
    __extends(CombinedError, _super);
    function CombinedError(message, errors) {
        var _this = _super.call(this, message) || this;
        _this.errors = errors;
        return _this;
    }
    return CombinedError;
}(Error));
function checkResultAndHandleErrors(result, info, responseKey) {
    if (!responseKey) {
        responseKey = getResponseKeyFromInfo_1.getResponseKeyFromInfo(info);
    }
    if (result.errors && (!result.data || result.data[responseKey] == null)) {
        // apollo-link-http & http-link-dataloader need the
        // result property to be passed through for better error handling.
        // If there is only one error, which contains a result property, pass the error through
        var newError = result.errors.length === 1 && hasResult(result.errors[0])
            ? result.errors[0]
            : new CombinedError(concatErrors(result.errors), result.errors);
        throw error_1.locatedError(newError, info.fieldNodes, graphql_1.responsePathAsArray(info.path));
    }
    var resultObject = result.data[responseKey];
    if (result.errors) {
        resultObject = annotateWithChildrenErrors(resultObject, result.errors);
    }
    return resultObject;
}
exports.checkResultAndHandleErrors = checkResultAndHandleErrors;
function concatErrors(errors) {
    return errors.map(function (error) { return error.message; }).join('\n');
}
function hasResult(error) {
    return error.result || error.extensions || (error.originalError && error.originalError.result);
}
//# sourceMappingURL=errors.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/graphql-tools/dist/stitching/getResponseKeyFromInfo.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/stitching/getResponseKeyFromInfo.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get the key under which the result of this resolver will be placed in the response JSON. Basically, just
 * resolves aliases.
 * @param info The info argument to the resolver.
 */
function getResponseKeyFromInfo(info) {
    return info.fieldNodes[0].alias ? info.fieldNodes[0].alias.value : info.fieldName;
}
exports.getResponseKeyFromInfo = getResponseKeyFromInfo;
//# sourceMappingURL=getResponseKeyFromInfo.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/stitching/index.js":
/*!************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/stitching/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var makeRemoteExecutableSchema_1 = __webpack_require__(/*! ./makeRemoteExecutableSchema */ "./node_modules/graphql-tools/dist/stitching/makeRemoteExecutableSchema.js");
exports.makeRemoteExecutableSchema = makeRemoteExecutableSchema_1.default;
exports.defaultCreateRemoteResolver = makeRemoteExecutableSchema_1.createResolver;
var introspectSchema_1 = __webpack_require__(/*! ./introspectSchema */ "./node_modules/graphql-tools/dist/stitching/introspectSchema.js");
exports.introspectSchema = introspectSchema_1.default;
var mergeSchemas_1 = __webpack_require__(/*! ./mergeSchemas */ "./node_modules/graphql-tools/dist/stitching/mergeSchemas.js");
exports.mergeSchemas = mergeSchemas_1.default;
var delegateToSchema_1 = __webpack_require__(/*! ./delegateToSchema */ "./node_modules/graphql-tools/dist/stitching/delegateToSchema.js");
exports.delegateToSchema = delegateToSchema_1.default;
var defaultMergedResolver_1 = __webpack_require__(/*! ./defaultMergedResolver */ "./node_modules/graphql-tools/dist/stitching/defaultMergedResolver.js");
exports.defaultMergedResolver = defaultMergedResolver_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/stitching/introspectSchema.js":
/*!***********************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/stitching/introspectSchema.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var linkToFetcher_1 = __webpack_require__(/*! ./linkToFetcher */ "./node_modules/graphql-tools/dist/stitching/linkToFetcher.js");
var parsedIntrospectionQuery = graphql_1.parse(graphql_1.introspectionQuery);
function introspectSchema(fetcher, linkContext) {
    return __awaiter(this, void 0, void 0, function () {
        var introspectionResult, schema;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Convert link to fetcher
                    if (fetcher.request) {
                        fetcher = linkToFetcher_1.default(fetcher);
                    }
                    return [4 /*yield*/, fetcher({
                            query: parsedIntrospectionQuery,
                            context: linkContext,
                        })];
                case 1:
                    introspectionResult = _a.sent();
                    if ((introspectionResult.errors && introspectionResult.errors.length) ||
                        !introspectionResult.data.__schema) {
                        throw introspectionResult.errors;
                    }
                    else {
                        schema = graphql_1.buildClientSchema(introspectionResult.data);
                        return [2 /*return*/, schema];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = introspectSchema;
//# sourceMappingURL=introspectSchema.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/stitching/linkToFetcher.js":
/*!********************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/stitching/linkToFetcher.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var apollo_link_1 = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/index.js");
var apollo_link_2 = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/index.js");
exports.execute = apollo_link_2.execute;
function linkToFetcher(link) {
    return function (fetcherOperation) {
        return apollo_link_1.makePromise(apollo_link_1.execute(link, fetcherOperation));
    };
}
exports.default = linkToFetcher;
//# sourceMappingURL=linkToFetcher.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/stitching/makeRemoteExecutableSchema.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/stitching/makeRemoteExecutableSchema.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var linkToFetcher_1 = __webpack_require__(/*! ./linkToFetcher */ "./node_modules/graphql-tools/dist/stitching/linkToFetcher.js");
var isEmptyObject_1 = __webpack_require__(/*! ../isEmptyObject */ "./node_modules/graphql-tools/dist/isEmptyObject.js");
var makeExecutableSchema_1 = __webpack_require__(/*! ../makeExecutableSchema */ "./node_modules/graphql-tools/dist/makeExecutableSchema.js");
var schemaRecreation_1 = __webpack_require__(/*! ./schemaRecreation */ "./node_modules/graphql-tools/dist/stitching/schemaRecreation.js");
var resolveFromParentTypename_1 = __webpack_require__(/*! ./resolveFromParentTypename */ "./node_modules/graphql-tools/dist/stitching/resolveFromParentTypename.js");
var defaultMergedResolver_1 = __webpack_require__(/*! ./defaultMergedResolver */ "./node_modules/graphql-tools/dist/stitching/defaultMergedResolver.js");
var errors_1 = __webpack_require__(/*! ./errors */ "./node_modules/graphql-tools/dist/stitching/errors.js");
var observableToAsyncIterable_1 = __webpack_require__(/*! ./observableToAsyncIterable */ "./node_modules/graphql-tools/dist/stitching/observableToAsyncIterable.js");
function makeRemoteExecutableSchema(_a) {
    var schema = _a.schema, link = _a.link, fetcher = _a.fetcher, _b = _a.createResolver, customCreateResolver = _b === void 0 ? createResolver : _b;
    var _c;
    if (!fetcher && link) {
        fetcher = linkToFetcher_1.default(link);
    }
    var typeDefs;
    var printOptions = { commentDescriptions: true };
    if (typeof schema === 'string') {
        typeDefs = schema;
        schema = graphql_1.buildSchema(typeDefs);
    }
    else {
        // TODO fix types https://github.com/apollographql/graphql-tools/issues/542
        typeDefs = graphql_1.printSchema(schema, printOptions);
    }
    // prepare query resolvers
    var queryResolvers = {};
    var queryType = schema.getQueryType();
    var queries = queryType.getFields();
    Object.keys(queries).forEach(function (key) {
        queryResolvers[key] = customCreateResolver(fetcher);
    });
    // prepare mutation resolvers
    var mutationResolvers = {};
    var mutationType = schema.getMutationType();
    if (mutationType) {
        var mutations = mutationType.getFields();
        Object.keys(mutations).forEach(function (key) {
            mutationResolvers[key] = customCreateResolver(fetcher);
        });
    }
    // prepare subscription resolvers
    var subscriptionResolvers = {};
    var subscriptionType = schema.getSubscriptionType();
    if (subscriptionType) {
        var subscriptions = subscriptionType.getFields();
        Object.keys(subscriptions).forEach(function (key) {
            subscriptionResolvers[key] = {
                subscribe: createSubscriptionResolver(key, link),
            };
        });
    }
    // merge resolvers into resolver map
    var resolvers = (_c = {}, _c[queryType.name] = queryResolvers, _c);
    if (!isEmptyObject_1.default(mutationResolvers)) {
        resolvers[mutationType.name] = mutationResolvers;
    }
    if (!isEmptyObject_1.default(subscriptionResolvers)) {
        resolvers[subscriptionType.name] = subscriptionResolvers;
    }
    // add missing abstract resolvers (scalar, unions, interfaces)
    var typeMap = schema.getTypeMap();
    var types = Object.keys(typeMap).map(function (name) { return typeMap[name]; });
    var _loop_1 = function (type) {
        if (type instanceof graphql_1.GraphQLInterfaceType ||
            type instanceof graphql_1.GraphQLUnionType) {
            resolvers[type.name] = {
                __resolveType: function (parent, context, info) {
                    return resolveFromParentTypename_1.default(parent, info.schema);
                },
            };
        }
        else if (type instanceof graphql_1.GraphQLScalarType) {
            if (!(type === graphql_1.GraphQLID ||
                type === graphql_1.GraphQLString ||
                type === graphql_1.GraphQLFloat ||
                type === graphql_1.GraphQLBoolean ||
                type === graphql_1.GraphQLInt)) {
                resolvers[type.name] = schemaRecreation_1.recreateType(type, function (name) { return null; }, false);
            }
        }
        else if (type instanceof graphql_1.GraphQLObjectType &&
            type.name.slice(0, 2) !== '__' &&
            type !== queryType &&
            type !== mutationType &&
            type !== subscriptionType) {
            var resolver_1 = {};
            Object.keys(type.getFields()).forEach(function (field) {
                resolver_1[field] = defaultMergedResolver_1.default;
            });
            resolvers[type.name] = resolver_1;
        }
    };
    for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
        var type = types_1[_i];
        _loop_1(type);
    }
    return makeExecutableSchema_1.makeExecutableSchema({
        typeDefs: typeDefs,
        resolvers: resolvers,
    });
}
exports.default = makeRemoteExecutableSchema;
function createResolver(fetcher) {
    var _this = this;
    return function (root, args, context, info) { return __awaiter(_this, void 0, void 0, function () {
        var fragments, document, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fragments = Object.keys(info.fragments).map(function (fragment) { return info.fragments[fragment]; });
                    document = {
                        kind: graphql_1.Kind.DOCUMENT,
                        definitions: [info.operation].concat(fragments),
                    };
                    return [4 /*yield*/, fetcher({
                            query: document,
                            variables: info.variableValues,
                            context: { graphqlContext: context },
                        })];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, errors_1.checkResultAndHandleErrors(result, info)];
            }
        });
    }); };
}
exports.createResolver = createResolver;
function createSubscriptionResolver(name, link) {
    return function (root, args, context, info) {
        var fragments = Object.keys(info.fragments).map(function (fragment) { return info.fragments[fragment]; });
        var document = {
            kind: graphql_1.Kind.DOCUMENT,
            definitions: [info.operation].concat(fragments),
        };
        var operation = {
            query: document,
            variables: info.variableValues,
            context: { graphqlContext: context },
        };
        var observable = linkToFetcher_1.execute(link, operation);
        return observableToAsyncIterable_1.observableToAsyncIterable(observable);
    };
}
//# sourceMappingURL=makeRemoteExecutableSchema.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/stitching/mapAsyncIterator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/stitching/mapAsyncIterator.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var iterall_1 = __webpack_require__(/*! iterall */ "./node_modules/iterall/index.mjs");
/**
 * Given an AsyncIterable and a callback function, return an AsyncIterator
 * which produces values mapped via calling the callback function.
 */
function mapAsyncIterator(iterator, callback, rejectCallback) {
    var _a;
    var $return;
    var abruptClose;
    if (typeof iterator.return === 'function') {
        $return = iterator.return;
        abruptClose = function (error) {
            var rethrow = function () { return Promise.reject(error); };
            return $return.call(iterator).then(rethrow, rethrow);
        };
    }
    function mapResult(result) {
        return result.done
            ? result
            : asyncMapValue(result.value, callback).then(iteratorResult, abruptClose);
    }
    var mapReject;
    if (rejectCallback) {
        // Capture rejectCallback to ensure it cannot be null.
        var reject_1 = rejectCallback;
        mapReject = function (error) {
            return asyncMapValue(error, reject_1).then(iteratorResult, abruptClose);
        };
    }
    return _a = {
            next: function () {
                return iterator.next().then(mapResult, mapReject);
            },
            return: function () {
                return $return
                    ? $return.call(iterator).then(mapResult, mapReject)
                    : Promise.resolve({ value: undefined, done: true });
            },
            throw: function (error) {
                if (typeof iterator.throw === 'function') {
                    return iterator.throw(error).then(mapResult, mapReject);
                }
                return Promise.reject(error).catch(abruptClose);
            }
        },
        _a[iterall_1.$$asyncIterator] = function () {
            return this;
        },
        _a;
}
exports.default = mapAsyncIterator;
function asyncMapValue(value, callback) {
    return new Promise(function (resolve) { return resolve(callback(value)); });
}
function iteratorResult(value) {
    return { value: value, done: false };
}
//# sourceMappingURL=mapAsyncIterator.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/stitching/mergeSchemas.js":
/*!*******************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/stitching/mergeSchemas.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var makeExecutableSchema_1 = __webpack_require__(/*! ../makeExecutableSchema */ "./node_modules/graphql-tools/dist/makeExecutableSchema.js");
var schemaRecreation_1 = __webpack_require__(/*! ./schemaRecreation */ "./node_modules/graphql-tools/dist/stitching/schemaRecreation.js");
var delegateToSchema_1 = __webpack_require__(/*! ./delegateToSchema */ "./node_modules/graphql-tools/dist/stitching/delegateToSchema.js");
var typeFromAST_1 = __webpack_require__(/*! ./typeFromAST */ "./node_modules/graphql-tools/dist/stitching/typeFromAST.js");
var transforms_1 = __webpack_require__(/*! ../transforms */ "./node_modules/graphql-tools/dist/transforms/index.js");
var mergeDeep_1 = __webpack_require__(/*! ../mergeDeep */ "./node_modules/graphql-tools/dist/mergeDeep.js");
var schemaVisitor_1 = __webpack_require__(/*! ../schemaVisitor */ "./node_modules/graphql-tools/dist/schemaVisitor.js");
function mergeSchemas(_a) {
    var schemas = _a.schemas, onTypeConflict = _a.onTypeConflict, resolvers = _a.resolvers, schemaDirectives = _a.schemaDirectives, inheritResolversFromInterfaces = _a.inheritResolversFromInterfaces;
    return mergeSchemasImplementation({ schemas: schemas, resolvers: resolvers, schemaDirectives: schemaDirectives, inheritResolversFromInterfaces: inheritResolversFromInterfaces });
}
exports.default = mergeSchemas;
function mergeSchemasImplementation(_a) {
    var schemas = _a.schemas, resolvers = _a.resolvers, schemaDirectives = _a.schemaDirectives, inheritResolversFromInterfaces = _a.inheritResolversFromInterfaces;
    var allSchemas = [];
    var typeCandidates = {};
    var types = {};
    var extensions = [];
    var fragments = [];
    var resolveType = schemaRecreation_1.createResolveType(function (name) {
        if (types[name] === undefined) {
            throw new Error("Can't find type " + name + ".");
        }
        return types[name];
    });
    schemas.forEach(function (schema) {
        if (schema instanceof graphql_1.GraphQLSchema) {
            allSchemas.push(schema);
            var queryType_1 = schema.getQueryType();
            var mutationType_1 = schema.getMutationType();
            var subscriptionType_1 = schema.getSubscriptionType();
            if (queryType_1) {
                addTypeCandidate(typeCandidates, 'Query', {
                    schema: schema,
                    type: queryType_1,
                });
            }
            if (mutationType_1) {
                addTypeCandidate(typeCandidates, 'Mutation', {
                    schema: schema,
                    type: mutationType_1,
                });
            }
            if (subscriptionType_1) {
                addTypeCandidate(typeCandidates, 'Subscription', {
                    schema: schema,
                    type: subscriptionType_1,
                });
            }
            var typeMap_1 = schema.getTypeMap();
            Object.keys(typeMap_1).forEach(function (typeName) {
                var type = typeMap_1[typeName];
                if (graphql_1.isNamedType(type) &&
                    graphql_1.getNamedType(type).name.slice(0, 2) !== '__' &&
                    type !== queryType_1 &&
                    type !== mutationType_1 &&
                    type !== subscriptionType_1) {
                    addTypeCandidate(typeCandidates, type.name, {
                        schema: schema,
                        type: type,
                    });
                }
            });
        }
        else if (typeof schema === 'string') {
            var parsedSchemaDocument = graphql_1.parse(schema);
            parsedSchemaDocument.definitions.forEach(function (def) {
                var type = typeFromAST_1.default(def);
                if (type) {
                    addTypeCandidate(typeCandidates, type.name, {
                        type: type,
                    });
                }
            });
            var extensionsDocument = makeExecutableSchema_1.extractExtensionDefinitions(parsedSchemaDocument);
            if (extensionsDocument.definitions.length > 0) {
                extensions.push(extensionsDocument);
            }
        }
        else if (Array.isArray(schema)) {
            schema.forEach(function (type) {
                addTypeCandidate(typeCandidates, type.name, {
                    type: type,
                });
            });
        }
        else {
            throw new Error("Invalid schema passed");
        }
    });
    var mergeInfo = createMergeInfo(allSchemas, fragments);
    if (!resolvers) {
        resolvers = {};
    }
    else if (typeof resolvers === 'function') {
        console.warn('Passing functions as resolver parameter is deprecated. Use `info.mergeInfo` instead.');
        resolvers = resolvers(mergeInfo);
    }
    else if (Array.isArray(resolvers)) {
        resolvers = resolvers.reduce(function (left, right) {
            if (typeof right === 'function') {
                console.warn('Passing functions as resolver parameter is deprecated. Use `info.mergeInfo` instead.');
                right = right(mergeInfo);
            }
            return mergeDeep_1.default(left, right);
        }, {});
    }
    var generatedResolvers = {};
    Object.keys(typeCandidates).forEach(function (typeName) {
        var resultType = defaultVisitType(typeName, typeCandidates[typeName]);
        if (resultType === null) {
            types[typeName] = null;
        }
        else {
            var type = void 0;
            var typeResolvers = void 0;
            if (graphql_1.isNamedType(resultType)) {
                type = resultType;
            }
            else if (resultType.type) {
                type = resultType.type;
                typeResolvers = resultType.resolvers;
            }
            else {
                throw new Error("Invalid visitType result for type " + typeName);
            }
            types[typeName] = schemaRecreation_1.recreateType(type, resolveType, false);
            if (typeResolvers) {
                generatedResolvers[typeName] = typeResolvers;
            }
        }
    });
    var mergedSchema = new graphql_1.GraphQLSchema({
        query: types.Query,
        mutation: types.Mutation,
        subscription: types.Subscription,
        types: Object.keys(types).map(function (key) { return types[key]; }),
    });
    extensions.forEach(function (extension) {
        mergedSchema = graphql_1.extendSchema(mergedSchema, extension, {
            commentDescriptions: true,
        });
    });
    if (!resolvers) {
        resolvers = {};
    }
    else if (Array.isArray(resolvers)) {
        resolvers = resolvers.reduce(mergeDeep_1.default, {});
    }
    Object.keys(resolvers).forEach(function (typeName) {
        var type = resolvers[typeName];
        if (type instanceof graphql_1.GraphQLScalarType) {
            return;
        }
        Object.keys(type).forEach(function (fieldName) {
            var field = type[fieldName];
            if (field.fragment) {
                fragments.push({
                    field: fieldName,
                    fragment: field.fragment,
                });
            }
        });
    });
    mergedSchema = makeExecutableSchema_1.addResolveFunctionsToSchema({
        schema: mergedSchema,
        resolvers: mergeDeep_1.default(generatedResolvers, resolvers),
        inheritResolversFromInterfaces: inheritResolversFromInterfaces
    });
    forEachField(mergedSchema, function (field) {
        if (field.resolve) {
            var fieldResolver_1 = field.resolve;
            field.resolve = function (parent, args, context, info) {
                var newInfo = __assign({}, info, { mergeInfo: mergeInfo });
                return fieldResolver_1(parent, args, context, newInfo);
            };
        }
        if (field.subscribe) {
            var fieldResolver_2 = field.subscribe;
            field.subscribe = function (parent, args, context, info) {
                var newInfo = __assign({}, info, { mergeInfo: mergeInfo });
                return fieldResolver_2(parent, args, context, newInfo);
            };
        }
    });
    if (schemaDirectives) {
        schemaVisitor_1.SchemaDirectiveVisitor.visitSchemaDirectives(mergedSchema, schemaDirectives);
    }
    return mergedSchema;
}
function createMergeInfo(allSchemas, fragments) {
    return {
        delegate: function (operation, fieldName, args, context, info, transforms) {
            console.warn('`mergeInfo.delegate` is deprecated. ' +
                'Use `mergeInfo.delegateToSchema and pass explicit schema instances.');
            var schema = guessSchemaByRootField(allSchemas, operation, fieldName);
            var expandTransforms = new transforms_1.ExpandAbstractTypes(info.schema, schema);
            var fragmentTransform = new transforms_1.ReplaceFieldWithFragment(schema, fragments);
            return delegateToSchema_1.default({
                schema: schema,
                operation: operation,
                fieldName: fieldName,
                args: args,
                context: context,
                info: info,
                transforms: (transforms || []).concat([
                    expandTransforms,
                    fragmentTransform,
                ]),
            });
        },
        delegateToSchema: function (options) {
            return delegateToSchema_1.default(__assign({}, options, { transforms: options.transforms }));
        },
        fragments: fragments
    };
}
function guessSchemaByRootField(schemas, operation, fieldName) {
    for (var _i = 0, schemas_1 = schemas; _i < schemas_1.length; _i++) {
        var schema = schemas_1[_i];
        var rootObject = void 0;
        if (operation === 'subscription') {
            rootObject = schema.getSubscriptionType();
        }
        else if (operation === 'mutation') {
            rootObject = schema.getMutationType();
        }
        else {
            rootObject = schema.getQueryType();
        }
        if (rootObject) {
            var fields = rootObject.getFields();
            if (fields[fieldName]) {
                return schema;
            }
        }
    }
    throw new Error("Could not find subschema with field `" + operation + "." + fieldName + "`");
}
function createDelegatingResolver(schema, operation, fieldName) {
    return function (root, args, context, info) {
        return info.mergeInfo.delegateToSchema({
            schema: schema,
            operation: operation,
            fieldName: fieldName,
            args: args,
            context: context,
            info: info,
        });
    };
}
function forEachField(schema, fn) {
    var typeMap = schema.getTypeMap();
    Object.keys(typeMap).forEach(function (typeName) {
        var type = typeMap[typeName];
        if (!graphql_1.getNamedType(type).name.startsWith('__') &&
            type instanceof graphql_1.GraphQLObjectType) {
            var fields_1 = type.getFields();
            Object.keys(fields_1).forEach(function (fieldName) {
                var field = fields_1[fieldName];
                fn(field, typeName, fieldName);
            });
        }
    });
}
function addTypeCandidate(typeCandidates, name, typeCandidate) {
    if (!typeCandidates[name]) {
        typeCandidates[name] = [];
    }
    typeCandidates[name].push(typeCandidate);
}
function defaultVisitType(name, candidates, candidateSelector) {
    if (!candidateSelector) {
        candidateSelector = function (cands) { return cands[cands.length - 1]; };
    }
    var resolveType = schemaRecreation_1.createResolveType(function (_, type) { return type; });
    if (name === 'Query' || name === 'Mutation' || name === 'Subscription') {
        var fields_2 = {};
        var operationName_1;
        switch (name) {
            case 'Query':
                operationName_1 = 'query';
                break;
            case 'Mutation':
                operationName_1 = 'mutation';
                break;
            case 'Subscription':
                operationName_1 = 'subscription';
                break;
            default:
                break;
        }
        var resolvers_1 = {};
        var resolverKey_1 = operationName_1 === 'subscription' ? 'subscribe' : 'resolve';
        candidates.forEach(function (_a) {
            var candidateType = _a.type, schema = _a.schema;
            var candidateFields = candidateType.getFields();
            fields_2 = __assign({}, fields_2, candidateFields);
            Object.keys(candidateFields).forEach(function (fieldName) {
                var _a;
                resolvers_1[fieldName] = (_a = {},
                    _a[resolverKey_1] = createDelegatingResolver(schema, operationName_1, fieldName),
                    _a);
            });
        });
        var type = new graphql_1.GraphQLObjectType({
            name: name,
            fields: schemaRecreation_1.fieldMapToFieldConfigMap(fields_2, resolveType, false),
        });
        return {
            type: type,
            resolvers: resolvers_1,
        };
    }
    else {
        var candidate = candidateSelector(candidates);
        return candidate.type;
    }
}
//# sourceMappingURL=mergeSchemas.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/stitching/observableToAsyncIterable.js":
/*!********************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/stitching/observableToAsyncIterable.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var iterall_1 = __webpack_require__(/*! iterall */ "./node_modules/iterall/index.mjs");
function observableToAsyncIterable(observable) {
    var _a;
    var pullQueue = [];
    var pushQueue = [];
    var listening = true;
    var pushValue = function (_a) {
        var data = _a.data;
        if (pullQueue.length !== 0) {
            pullQueue.shift()({ value: data, done: false });
        }
        else {
            pushQueue.push({ value: data });
        }
    };
    var pushError = function (error) {
        if (pullQueue.length !== 0) {
            pullQueue.shift()({ value: { errors: [error] }, done: false });
        }
        else {
            pushQueue.push({ value: { errors: [error] } });
        }
    };
    var pullValue = function () {
        return new Promise(function (resolve) {
            if (pushQueue.length !== 0) {
                var element = pushQueue.shift();
                // either {value: {errors: [...]}} or {value: ...}
                resolve(__assign({}, element, { done: false }));
            }
            else {
                pullQueue.push(resolve);
            }
        });
    };
    var subscription = observable.subscribe({
        next: function (value) {
            pushValue(value);
        },
        error: function (err) {
            pushError(err);
        },
    });
    var emptyQueue = function () {
        if (listening) {
            listening = false;
            subscription.unsubscribe();
            pullQueue.forEach(function (resolve) { return resolve({ value: undefined, done: true }); });
            pullQueue.length = 0;
            pushQueue.length = 0;
        }
    };
    return _a = {
            next: function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, listening ? pullValue() : this.return()];
                    });
                });
            },
            return: function () {
                emptyQueue();
                return Promise.resolve({ value: undefined, done: true });
            },
            throw: function (error) {
                emptyQueue();
                return Promise.reject(error);
            }
        },
        _a[iterall_1.$$asyncIterator] = function () {
            return this;
        },
        _a;
}
exports.observableToAsyncIterable = observableToAsyncIterable;
//# sourceMappingURL=observableToAsyncIterable.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/stitching/resolveFromParentTypename.js":
/*!********************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/stitching/resolveFromParentTypename.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
function resolveFromParentTypename(parent, schema) {
    var parentTypename = parent['__typename'];
    if (!parentTypename) {
        throw new Error('Did not fetch typename for object, unable to resolve interface.');
    }
    var resolvedType = schema.getType(parentTypename);
    if (!(resolvedType instanceof graphql_1.GraphQLObjectType)) {
        throw new Error('__typename did not match an object type: ' + parentTypename);
    }
    return resolvedType;
}
exports.default = resolveFromParentTypename;
//# sourceMappingURL=resolveFromParentTypename.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/stitching/resolvers.js":
/*!****************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/stitching/resolvers.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var delegateToSchema_1 = __webpack_require__(/*! ./delegateToSchema */ "./node_modules/graphql-tools/dist/stitching/delegateToSchema.js");
function generateProxyingResolvers(targetSchema, transforms, mapping) {
    var result = {};
    Object.keys(mapping).forEach(function (name) {
        result[name] = {};
        var innerMapping = mapping[name];
        Object.keys(innerMapping).forEach(function (from) {
            var _a;
            var to = innerMapping[from];
            var resolverType = to.operation === 'subscription' ? 'subscribe' : 'resolve';
            result[name][from] = (_a = {},
                _a[resolverType] = createProxyingResolver(targetSchema, to.operation, to.name, transforms),
                _a);
        });
    });
    return result;
}
exports.generateProxyingResolvers = generateProxyingResolvers;
function generateSimpleMapping(targetSchema) {
    var query = targetSchema.getQueryType();
    var mutation = targetSchema.getMutationType();
    var subscription = targetSchema.getSubscriptionType();
    var result = {};
    if (query) {
        result[query.name] = generateMappingFromObjectType(query, 'query');
    }
    if (mutation) {
        result[mutation.name] = generateMappingFromObjectType(mutation, 'mutation');
    }
    if (subscription) {
        result[subscription.name] = generateMappingFromObjectType(subscription, 'subscription');
    }
    return result;
}
exports.generateSimpleMapping = generateSimpleMapping;
function generateMappingFromObjectType(type, operation) {
    var result = {};
    var fields = type.getFields();
    Object.keys(fields).forEach(function (fieldName) {
        result[fieldName] = {
            name: fieldName,
            operation: operation,
        };
    });
    return result;
}
exports.generateMappingFromObjectType = generateMappingFromObjectType;
function createProxyingResolver(schema, operation, fieldName, transforms) {
    return function (parent, args, context, info) { return delegateToSchema_1.default({
        schema: schema,
        operation: operation,
        fieldName: fieldName,
        args: {},
        context: context,
        info: info,
        transforms: transforms,
    }); };
}
//# sourceMappingURL=resolvers.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/stitching/schemaRecreation.js":
/*!***********************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/stitching/schemaRecreation.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var isSpecifiedScalarType_1 = __webpack_require__(/*! ../isSpecifiedScalarType */ "./node_modules/graphql-tools/dist/isSpecifiedScalarType.js");
var resolveFromParentTypename_1 = __webpack_require__(/*! ./resolveFromParentTypename */ "./node_modules/graphql-tools/dist/stitching/resolveFromParentTypename.js");
var defaultMergedResolver_1 = __webpack_require__(/*! ./defaultMergedResolver */ "./node_modules/graphql-tools/dist/stitching/defaultMergedResolver.js");
function recreateType(type, resolveType, keepResolvers) {
    if (type instanceof graphql_1.GraphQLObjectType) {
        var fields_1 = type.getFields();
        var interfaces_1 = type.getInterfaces();
        return new graphql_1.GraphQLObjectType({
            name: type.name,
            description: type.description,
            astNode: type.astNode,
            isTypeOf: keepResolvers ? type.isTypeOf : undefined,
            fields: function () {
                return fieldMapToFieldConfigMap(fields_1, resolveType, keepResolvers);
            },
            interfaces: function () { return interfaces_1.map(function (iface) { return resolveType(iface); }); },
        });
    }
    else if (type instanceof graphql_1.GraphQLInterfaceType) {
        var fields_2 = type.getFields();
        return new graphql_1.GraphQLInterfaceType({
            name: type.name,
            description: type.description,
            astNode: type.astNode,
            fields: function () {
                return fieldMapToFieldConfigMap(fields_2, resolveType, keepResolvers);
            },
            resolveType: keepResolvers
                ? type.resolveType
                : function (parent, context, info) {
                    return resolveFromParentTypename_1.default(parent, info.schema);
                },
        });
    }
    else if (type instanceof graphql_1.GraphQLUnionType) {
        return new graphql_1.GraphQLUnionType({
            name: type.name,
            description: type.description,
            astNode: type.astNode,
            types: function () { return type.getTypes().map(function (unionMember) { return resolveType(unionMember); }); },
            resolveType: keepResolvers
                ? type.resolveType
                : function (parent, context, info) {
                    return resolveFromParentTypename_1.default(parent, info.schema);
                },
        });
    }
    else if (type instanceof graphql_1.GraphQLInputObjectType) {
        return new graphql_1.GraphQLInputObjectType({
            name: type.name,
            description: type.description,
            astNode: type.astNode,
            fields: function () {
                return inputFieldMapToFieldConfigMap(type.getFields(), resolveType);
            },
        });
    }
    else if (type instanceof graphql_1.GraphQLEnumType) {
        var values = type.getValues();
        var newValues_1 = {};
        values.forEach(function (value) {
            newValues_1[value.name] = {
                value: value.value,
                deprecationReason: value.deprecationReason,
                description: value.description,
                astNode: value.astNode,
            };
        });
        return new graphql_1.GraphQLEnumType({
            name: type.name,
            description: type.description,
            astNode: type.astNode,
            values: newValues_1,
        });
    }
    else if (type instanceof graphql_1.GraphQLScalarType) {
        if (isSpecifiedScalarType_1.default(type)) {
            return type;
        }
        else {
            return new graphql_1.GraphQLScalarType({
                name: type.name,
                description: type.description,
                astNode: type.astNode,
                serialize: function (value) {
                    return value;
                },
                parseValue: function (value) {
                    return value;
                },
                parseLiteral: function (ast) {
                    return parseLiteral(ast);
                },
            });
        }
    }
    else {
        throw new Error("Invalid type " + type);
    }
}
exports.recreateType = recreateType;
function parseLiteral(ast) {
    switch (ast.kind) {
        case graphql_1.Kind.STRING:
        case graphql_1.Kind.BOOLEAN: {
            return ast.value;
        }
        case graphql_1.Kind.INT:
        case graphql_1.Kind.FLOAT: {
            return parseFloat(ast.value);
        }
        case graphql_1.Kind.OBJECT: {
            var value_1 = Object.create(null);
            ast.fields.forEach(function (field) {
                value_1[field.name.value] = parseLiteral(field.value);
            });
            return value_1;
        }
        case graphql_1.Kind.LIST: {
            return ast.values.map(parseLiteral);
        }
        default:
            return null;
    }
}
function fieldMapToFieldConfigMap(fields, resolveType, keepResolvers) {
    var result = {};
    Object.keys(fields).forEach(function (name) {
        var field = fields[name];
        var type = resolveType(field.type);
        if (type !== null) {
            result[name] = fieldToFieldConfig(fields[name], resolveType, keepResolvers);
        }
    });
    return result;
}
exports.fieldMapToFieldConfigMap = fieldMapToFieldConfigMap;
function createResolveType(getType) {
    var resolveType = function (type) {
        if (type instanceof graphql_1.GraphQLList) {
            var innerType = resolveType(type.ofType);
            if (innerType === null) {
                return null;
            }
            else {
                return new graphql_1.GraphQLList(innerType);
            }
        }
        else if (type instanceof graphql_1.GraphQLNonNull) {
            var innerType = resolveType(type.ofType);
            if (innerType === null) {
                return null;
            }
            else {
                return new graphql_1.GraphQLNonNull(innerType);
            }
        }
        else if (graphql_1.isNamedType(type)) {
            return getType(graphql_1.getNamedType(type).name, type);
        }
        else {
            return type;
        }
    };
    return resolveType;
}
exports.createResolveType = createResolveType;
function fieldToFieldConfig(field, resolveType, keepResolvers) {
    return {
        type: resolveType(field.type),
        args: argsToFieldConfigArgumentMap(field.args, resolveType),
        resolve: keepResolvers ? field.resolve : defaultMergedResolver_1.default,
        subscribe: keepResolvers ? field.subscribe : null,
        description: field.description,
        deprecationReason: field.deprecationReason,
        astNode: field.astNode,
    };
}
exports.fieldToFieldConfig = fieldToFieldConfig;
function argsToFieldConfigArgumentMap(args, resolveType) {
    var result = {};
    args.forEach(function (arg) {
        var newArg = argumentToArgumentConfig(arg, resolveType);
        if (newArg) {
            result[newArg[0]] = newArg[1];
        }
    });
    return result;
}
exports.argsToFieldConfigArgumentMap = argsToFieldConfigArgumentMap;
function argumentToArgumentConfig(argument, resolveType) {
    var type = resolveType(argument.type);
    if (type === null) {
        return null;
    }
    else {
        return [
            argument.name,
            {
                type: type,
                defaultValue: argument.defaultValue,
                description: argument.description,
            },
        ];
    }
}
exports.argumentToArgumentConfig = argumentToArgumentConfig;
function inputFieldMapToFieldConfigMap(fields, resolveType) {
    var result = {};
    Object.keys(fields).forEach(function (name) {
        var field = fields[name];
        var type = resolveType(field.type);
        if (type !== null) {
            result[name] = inputFieldToFieldConfig(fields[name], resolveType);
        }
    });
    return result;
}
exports.inputFieldMapToFieldConfigMap = inputFieldMapToFieldConfigMap;
function inputFieldToFieldConfig(field, resolveType) {
    return {
        type: resolveType(field.type),
        defaultValue: field.defaultValue,
        description: field.description,
        astNode: field.astNode,
    };
}
exports.inputFieldToFieldConfig = inputFieldToFieldConfig;
//# sourceMappingURL=schemaRecreation.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/stitching/typeFromAST.js":
/*!******************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/stitching/typeFromAST.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var resolveFromParentTypename_1 = __webpack_require__(/*! ./resolveFromParentTypename */ "./node_modules/graphql-tools/dist/stitching/resolveFromParentTypename.js");
var backcompatOptions = { commentDescriptions: true };
function typeFromAST(node) {
    switch (node.kind) {
        case graphql_1.Kind.OBJECT_TYPE_DEFINITION:
            return makeObjectType(node);
        case graphql_1.Kind.INTERFACE_TYPE_DEFINITION:
            return makeInterfaceType(node);
        case graphql_1.Kind.ENUM_TYPE_DEFINITION:
            return makeEnumType(node);
        case graphql_1.Kind.UNION_TYPE_DEFINITION:
            return makeUnionType(node);
        case graphql_1.Kind.SCALAR_TYPE_DEFINITION:
            return makeScalarType(node);
        case graphql_1.Kind.INPUT_OBJECT_TYPE_DEFINITION:
            return makeInputObjectType(node);
        default:
            return null;
    }
}
exports.default = typeFromAST;
function makeObjectType(node) {
    return new graphql_1.GraphQLObjectType({
        name: node.name.value,
        fields: function () { return makeFields(node.fields); },
        interfaces: function () {
            return node.interfaces.map(function (iface) { return createNamedStub(iface.name.value, 'interface'); });
        },
        description: graphql_1.getDescription(node, backcompatOptions),
    });
}
function makeInterfaceType(node) {
    return new graphql_1.GraphQLInterfaceType({
        name: node.name.value,
        fields: function () { return makeFields(node.fields); },
        description: graphql_1.getDescription(node, backcompatOptions),
        resolveType: function (parent, context, info) {
            return resolveFromParentTypename_1.default(parent, info.schema);
        },
    });
}
function makeEnumType(node) {
    var values = {};
    node.values.forEach(function (value) {
        values[value.name.value] = {
            description: graphql_1.getDescription(value, backcompatOptions),
        };
    });
    return new graphql_1.GraphQLEnumType({
        name: node.name.value,
        values: values,
        description: graphql_1.getDescription(node, backcompatOptions),
    });
}
function makeUnionType(node) {
    return new graphql_1.GraphQLUnionType({
        name: node.name.value,
        types: function () {
            return node.types.map(function (type) { return resolveType(type, 'object'); });
        },
        description: graphql_1.getDescription(node, backcompatOptions),
        resolveType: function (parent, context, info) {
            return resolveFromParentTypename_1.default(parent, info.schema);
        },
    });
}
function makeScalarType(node) {
    return new graphql_1.GraphQLScalarType({
        name: node.name.value,
        description: graphql_1.getDescription(node, backcompatOptions),
        serialize: function () { return null; },
        // Note: validation calls the parse functions to determine if a
        // literal value is correct. Returning null would cause use of custom
        // scalars to always fail validation. Returning false causes them to
        // always pass validation.
        parseValue: function () { return false; },
        parseLiteral: function () { return false; },
    });
}
function makeInputObjectType(node) {
    return new graphql_1.GraphQLInputObjectType({
        name: node.name.value,
        fields: function () { return makeValues(node.fields); },
        description: graphql_1.getDescription(node, backcompatOptions),
    });
}
function makeFields(nodes) {
    var result = {};
    nodes.forEach(function (node) {
        result[node.name.value] = {
            type: resolveType(node.type, 'object'),
            args: makeValues(node.arguments),
            description: graphql_1.getDescription(node, backcompatOptions),
        };
    });
    return result;
}
function makeValues(nodes) {
    var result = {};
    nodes.forEach(function (node) {
        var type = resolveType(node.type, 'input');
        result[node.name.value] = {
            type: type,
            defaultValue: graphql_1.valueFromAST(node.defaultValue, type),
            description: graphql_1.getDescription(node, backcompatOptions),
        };
    });
    return result;
}
function resolveType(node, type) {
    switch (node.kind) {
        case graphql_1.Kind.LIST_TYPE:
            return new graphql_1.GraphQLList(resolveType(node.type, type));
        case graphql_1.Kind.NON_NULL_TYPE:
            return new graphql_1.GraphQLNonNull(resolveType(node.type, type));
        default:
            return createNamedStub(node.name.value, type);
    }
}
function createNamedStub(name, type) {
    var constructor;
    if (type === 'object') {
        constructor = graphql_1.GraphQLObjectType;
    }
    else if (type === 'interface') {
        constructor = graphql_1.GraphQLInterfaceType;
    }
    else {
        constructor = graphql_1.GraphQLInputObjectType;
    }
    return new constructor({
        name: name,
        fields: {
            __fake: {
                type: graphql_1.GraphQLString,
            },
        },
    });
}
//# sourceMappingURL=typeFromAST.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/transforms/AddArgumentsAsVariables.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/transforms/AddArgumentsAsVariables.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var AddArgumentsAsVariablesTransform = /** @class */ (function () {
    function AddArgumentsAsVariablesTransform(schema, args) {
        this.schema = schema;
        this.args = args;
    }
    AddArgumentsAsVariablesTransform.prototype.transformRequest = function (originalRequest) {
        var _a = addVariablesToRootField(this.schema, originalRequest.document, this.args), document = _a.document, newVariables = _a.newVariables;
        var variables = __assign({}, originalRequest.variables, newVariables);
        return {
            document: document,
            variables: variables,
        };
    };
    return AddArgumentsAsVariablesTransform;
}());
exports.default = AddArgumentsAsVariablesTransform;
function addVariablesToRootField(targetSchema, document, args) {
    var operations = document.definitions.filter(function (def) { return def.kind === graphql_1.Kind.OPERATION_DEFINITION; });
    var fragments = document.definitions.filter(function (def) { return def.kind === graphql_1.Kind.FRAGMENT_DEFINITION; });
    var variableNames = {};
    var newOperations = operations.map(function (operation) {
        var existingVariables = operation.variableDefinitions.map(function (variableDefinition) {
            return variableDefinition.variable.name.value;
        });
        var variableCounter = 0;
        var variables = {};
        var generateVariableName = function (argName) {
            var varName;
            do {
                varName = "_v" + variableCounter + "_" + argName;
                variableCounter++;
            } while (existingVariables.indexOf(varName) !== -1);
            return varName;
        };
        var type;
        if (operation.operation === 'subscription') {
            type = targetSchema.getSubscriptionType();
        }
        else if (operation.operation === 'mutation') {
            type = targetSchema.getMutationType();
        }
        else {
            type = targetSchema.getQueryType();
        }
        var newSelectionSet = [];
        operation.selectionSet.selections.forEach(function (selection) {
            if (selection.kind === graphql_1.Kind.FIELD) {
                var newArgs_1 = {};
                selection.arguments.forEach(function (argument) {
                    newArgs_1[argument.name.value] = argument;
                });
                var name_1 = selection.name.value;
                var field = type.getFields()[name_1];
                field.args.forEach(function (argument) {
                    if (argument.name in args) {
                        var variableName = generateVariableName(argument.name);
                        variableNames[argument.name] = variableName;
                        newArgs_1[argument.name] = {
                            kind: graphql_1.Kind.ARGUMENT,
                            name: {
                                kind: graphql_1.Kind.NAME,
                                value: argument.name,
                            },
                            value: {
                                kind: graphql_1.Kind.VARIABLE,
                                name: {
                                    kind: graphql_1.Kind.NAME,
                                    value: variableName,
                                },
                            },
                        };
                        existingVariables.push(variableName);
                        variables[variableName] = {
                            kind: graphql_1.Kind.VARIABLE_DEFINITION,
                            variable: {
                                kind: graphql_1.Kind.VARIABLE,
                                name: {
                                    kind: graphql_1.Kind.NAME,
                                    value: variableName,
                                },
                            },
                            type: typeToAst(argument.type),
                        };
                    }
                });
                newSelectionSet.push(__assign({}, selection, { arguments: Object.keys(newArgs_1).map(function (argName) { return newArgs_1[argName]; }) }));
            }
            else {
                newSelectionSet.push(selection);
            }
        });
        return __assign({}, operation, { variableDefinitions: operation.variableDefinitions.concat(Object.keys(variables).map(function (varName) { return variables[varName]; })), selectionSet: {
                kind: graphql_1.Kind.SELECTION_SET,
                selections: newSelectionSet,
            } });
    });
    var newVariables = {};
    Object.keys(variableNames).forEach(function (name) {
        newVariables[variableNames[name]] = args[name];
    });
    return {
        document: __assign({}, document, { definitions: newOperations.concat(fragments) }),
        newVariables: newVariables,
    };
}
function typeToAst(type) {
    if (type instanceof graphql_1.GraphQLNonNull) {
        var innerType = typeToAst(type.ofType);
        if (innerType.kind === graphql_1.Kind.LIST_TYPE ||
            innerType.kind === graphql_1.Kind.NAMED_TYPE) {
            return {
                kind: graphql_1.Kind.NON_NULL_TYPE,
                type: innerType,
            };
        }
        else {
            throw new Error('Incorrent inner non-null type');
        }
    }
    else if (type instanceof graphql_1.GraphQLList) {
        return {
            kind: graphql_1.Kind.LIST_TYPE,
            type: typeToAst(type.ofType),
        };
    }
    else {
        return {
            kind: graphql_1.Kind.NAMED_TYPE,
            name: {
                kind: graphql_1.Kind.NAME,
                value: type.toString(),
            },
        };
    }
}
//# sourceMappingURL=AddArgumentsAsVariables.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/transforms/AddTypenameToAbstract.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/transforms/AddTypenameToAbstract.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var AddTypenameToAbstract = /** @class */ (function () {
    function AddTypenameToAbstract(targetSchema) {
        this.targetSchema = targetSchema;
    }
    AddTypenameToAbstract.prototype.transformRequest = function (originalRequest) {
        var document = addTypenameToAbstract(this.targetSchema, originalRequest.document);
        return __assign({}, originalRequest, { document: document });
    };
    return AddTypenameToAbstract;
}());
exports.default = AddTypenameToAbstract;
function addTypenameToAbstract(targetSchema, document) {
    var _a;
    var typeInfo = new graphql_1.TypeInfo(targetSchema);
    return graphql_1.visit(document, graphql_1.visitWithTypeInfo(typeInfo, (_a = {},
        _a[graphql_1.Kind.SELECTION_SET] = function (node) {
            var parentType = typeInfo.getParentType();
            var selections = node.selections;
            if (parentType &&
                (parentType instanceof graphql_1.GraphQLInterfaceType ||
                    parentType instanceof graphql_1.GraphQLUnionType) &&
                !selections.find(function (_) {
                    return _.kind === graphql_1.Kind.FIELD &&
                        _.name.value === '__typename';
                })) {
                selections = selections.concat({
                    kind: graphql_1.Kind.FIELD,
                    name: {
                        kind: graphql_1.Kind.NAME,
                        value: '__typename',
                    },
                });
            }
            if (selections !== node.selections) {
                return __assign({}, node, { selections: selections });
            }
        },
        _a)));
}
//# sourceMappingURL=AddTypenameToAbstract.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/transforms/CheckResultAndHandleErrors.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/transforms/CheckResultAndHandleErrors.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = __webpack_require__(/*! ../stitching/errors */ "./node_modules/graphql-tools/dist/stitching/errors.js");
var CheckResultAndHandleErrors = /** @class */ (function () {
    function CheckResultAndHandleErrors(info, fieldName) {
        this.info = info;
        this.fieldName = fieldName;
    }
    CheckResultAndHandleErrors.prototype.transformResult = function (result) {
        return errors_1.checkResultAndHandleErrors(result, this.info, this.fieldName);
    };
    return CheckResultAndHandleErrors;
}());
exports.default = CheckResultAndHandleErrors;
//# sourceMappingURL=CheckResultAndHandleErrors.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/transforms/ConvertEnumValues.js":
/*!*************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/transforms/ConvertEnumValues.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var visitSchema_1 = __webpack_require__(/*! ../transforms/visitSchema */ "./node_modules/graphql-tools/dist/transforms/visitSchema.js");
// Transformation used to modifiy `GraphQLEnumType` values in a schema.
var ConvertEnumValues = /** @class */ (function () {
    function ConvertEnumValues(enumValueMap) {
        this.enumValueMap = enumValueMap;
    }
    // Walk a schema looking for `GraphQLEnumType` types. If found, and
    // matching types have been identified in `this.enumValueMap`, create new
    // `GraphQLEnumType` types using the `this.enumValueMap` specified new
    // values, and return them in the new schema.
    ConvertEnumValues.prototype.transformSchema = function (schema) {
        var _a;
        var enumValueMap = this.enumValueMap;
        if (!enumValueMap || Object.keys(enumValueMap).length === 0) {
            return schema;
        }
        var transformedSchema = visitSchema_1.visitSchema(schema, (_a = {},
            _a[visitSchema_1.VisitSchemaKind.ENUM_TYPE] = function (enumType) {
                var externalToInternalValueMap = enumValueMap[enumType.name];
                if (externalToInternalValueMap) {
                    var values = enumType.getValues();
                    var newValues_1 = {};
                    values.forEach(function (value) {
                        var newValue = Object.keys(externalToInternalValueMap).includes(value.name)
                            ? externalToInternalValueMap[value.name]
                            : value.name;
                        newValues_1[value.name] = {
                            value: newValue,
                            deprecationReason: value.deprecationReason,
                            description: value.description,
                            astNode: value.astNode,
                        };
                    });
                    return new graphql_1.GraphQLEnumType({
                        name: enumType.name,
                        description: enumType.description,
                        astNode: enumType.astNode,
                        values: newValues_1,
                    });
                }
                return enumType;
            },
            _a));
        // `GraphQLEnumType`'s in `graphql-js` 14.x currently use an internal
        // `_valueLookup` map to associate enum values with the enums
        // themselves, when doing an enum lookup. To support `graphql-tools`
        // internal enum values functionality however, we have to change the
        // enum value used as the key in the `_valueLookup` map, to be the new
        // internal only enum value. The code above accomplishes this by
        // creating a new `GraphQLEnumType` with the internal enum value as the
        // enum value. Unfortunately, doing this breaks the way scheam delegation
        // works in `graphql-tools`, since delegation can no longer look an enum
        // up by its original external facing value. To accommodate this,
        // here we're switching the enums value back to its original external
        // facing value. So `_valueLookup` stays as we want it - with the new
        // enum value as the key in the lookup map, but the defined enum values
        // array is now back to the way it was, with only external facing values.
        var schemaTypeMap = transformedSchema.getTypeMap();
        Object.keys(enumValueMap).forEach(function (enumTypeName) {
            var enumType = schemaTypeMap[enumTypeName];
            if (enumType) {
                enumType.getValues().forEach(function (value) {
                    value.value = value.name;
                });
            }
        });
        return transformedSchema;
    };
    return ConvertEnumValues;
}());
exports.default = ConvertEnumValues;
//# sourceMappingURL=ConvertEnumValues.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/transforms/ExpandAbstractTypes.js":
/*!***************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/transforms/ExpandAbstractTypes.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var implementsAbstractType_1 = __webpack_require__(/*! ../implementsAbstractType */ "./node_modules/graphql-tools/dist/implementsAbstractType.js");
var ExpandAbstractTypes = /** @class */ (function () {
    function ExpandAbstractTypes(transformedSchema, targetSchema) {
        this.targetSchema = targetSchema;
        this.mapping = extractPossibleTypes(transformedSchema, targetSchema);
        this.reverseMapping = flipMapping(this.mapping);
    }
    ExpandAbstractTypes.prototype.transformRequest = function (originalRequest) {
        var document = expandAbstractTypes(this.targetSchema, this.mapping, this.reverseMapping, originalRequest.document);
        return __assign({}, originalRequest, { document: document });
    };
    return ExpandAbstractTypes;
}());
exports.default = ExpandAbstractTypes;
function extractPossibleTypes(transformedSchema, targetSchema) {
    var typeMap = transformedSchema.getTypeMap();
    var mapping = {};
    Object.keys(typeMap).forEach(function (typeName) {
        var type = typeMap[typeName];
        if (graphql_1.isAbstractType(type)) {
            var targetType = targetSchema.getType(typeName);
            if (!graphql_1.isAbstractType(targetType)) {
                var implementations = transformedSchema.getPossibleTypes(type) || [];
                mapping[typeName] = implementations
                    .filter(function (impl) { return targetSchema.getType(impl.name); })
                    .map(function (impl) { return impl.name; });
            }
        }
    });
    return mapping;
}
function flipMapping(mapping) {
    var result = {};
    Object.keys(mapping).forEach(function (typeName) {
        var toTypeNames = mapping[typeName];
        toTypeNames.forEach(function (toTypeName) {
            if (!result[toTypeName]) {
                result[toTypeName] = [];
            }
            result[toTypeName].push(typeName);
        });
    });
    return result;
}
function expandAbstractTypes(targetSchema, mapping, reverseMapping, document) {
    var _a;
    var operations = document.definitions.filter(function (def) { return def.kind === graphql_1.Kind.OPERATION_DEFINITION; });
    var fragments = document.definitions.filter(function (def) { return def.kind === graphql_1.Kind.FRAGMENT_DEFINITION; });
    var existingFragmentNames = fragments.map(function (fragment) { return fragment.name.value; });
    var fragmentCounter = 0;
    var generateFragmentName = function (typeName) {
        var fragmentName;
        do {
            fragmentName = "_" + typeName + "_Fragment" + fragmentCounter;
            fragmentCounter++;
        } while (existingFragmentNames.indexOf(fragmentName) !== -1);
        return fragmentName;
    };
    var newFragments = [];
    var fragmentReplacements = {};
    fragments.forEach(function (fragment) {
        newFragments.push(fragment);
        var possibleTypes = mapping[fragment.typeCondition.name.value];
        if (possibleTypes) {
            fragmentReplacements[fragment.name.value] = [];
            possibleTypes.forEach(function (possibleTypeName) {
                var name = generateFragmentName(possibleTypeName);
                existingFragmentNames.push(name);
                var newFragment = {
                    kind: graphql_1.Kind.FRAGMENT_DEFINITION,
                    name: {
                        kind: graphql_1.Kind.NAME,
                        value: name,
                    },
                    typeCondition: {
                        kind: graphql_1.Kind.NAMED_TYPE,
                        name: {
                            kind: graphql_1.Kind.NAME,
                            value: possibleTypeName,
                        },
                    },
                    selectionSet: fragment.selectionSet,
                };
                newFragments.push(newFragment);
                fragmentReplacements[fragment.name.value].push({
                    fragmentName: name,
                    typeName: possibleTypeName,
                });
            });
        }
    });
    var newDocument = __assign({}, document, { definitions: operations.concat(newFragments) });
    var typeInfo = new graphql_1.TypeInfo(targetSchema);
    return graphql_1.visit(newDocument, graphql_1.visitWithTypeInfo(typeInfo, (_a = {},
        _a[graphql_1.Kind.SELECTION_SET] = function (node) {
            var newSelections = node.selections.slice();
            var parentType = graphql_1.getNamedType(typeInfo.getParentType());
            node.selections.forEach(function (selection) {
                if (selection.kind === graphql_1.Kind.INLINE_FRAGMENT) {
                    var possibleTypes = mapping[selection.typeCondition.name.value];
                    if (possibleTypes) {
                        possibleTypes.forEach(function (possibleType) {
                            if (implementsAbstractType_1.default(targetSchema, parentType, targetSchema.getType(possibleType))) {
                                newSelections.push({
                                    kind: graphql_1.Kind.INLINE_FRAGMENT,
                                    typeCondition: {
                                        kind: graphql_1.Kind.NAMED_TYPE,
                                        name: {
                                            kind: graphql_1.Kind.NAME,
                                            value: possibleType,
                                        },
                                    },
                                    selectionSet: selection.selectionSet,
                                });
                            }
                        });
                    }
                }
                else if (selection.kind === graphql_1.Kind.FRAGMENT_SPREAD) {
                    var fragmentName = selection.name.value;
                    var replacements = fragmentReplacements[fragmentName];
                    if (replacements) {
                        replacements.forEach(function (replacement) {
                            var typeName = replacement.typeName;
                            if (implementsAbstractType_1.default(targetSchema, parentType, targetSchema.getType(typeName))) {
                                newSelections.push({
                                    kind: graphql_1.Kind.FRAGMENT_SPREAD,
                                    name: {
                                        kind: graphql_1.Kind.NAME,
                                        value: replacement.fragmentName,
                                    },
                                });
                            }
                        });
                    }
                }
            });
            if (parentType && reverseMapping[parentType.name]) {
                newSelections.push({
                    kind: graphql_1.Kind.FIELD,
                    name: {
                        kind: graphql_1.Kind.NAME,
                        value: '__typename',
                    },
                });
            }
            if (newSelections.length !== node.selections.length) {
                return __assign({}, node, { selections: newSelections });
            }
        },
        _a)));
}
//# sourceMappingURL=ExpandAbstractTypes.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/transforms/ExtractField.js":
/*!********************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/transforms/ExtractField.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var ExtractField = /** @class */ (function () {
    function ExtractField(_a) {
        var from = _a.from, to = _a.to;
        this.from = from;
        this.to = to;
    }
    ExtractField.prototype.transformRequest = function (originalRequest) {
        var _a, _b;
        var fromSelection;
        var ourPathFrom = JSON.stringify(this.from);
        var ourPathTo = JSON.stringify(this.to);
        var fieldPath = [];
        graphql_1.visit(originalRequest.document, (_a = {},
            _a[graphql_1.Kind.FIELD] = {
                enter: function (node) {
                    fieldPath.push(node.name.value);
                    if (ourPathFrom === JSON.stringify(fieldPath)) {
                        fromSelection = node.selectionSet;
                        return graphql_1.BREAK;
                    }
                },
                leave: function (node) {
                    fieldPath.pop();
                },
            },
            _a));
        fieldPath = [];
        var newDocument = graphql_1.visit(originalRequest.document, (_b = {},
            _b[graphql_1.Kind.FIELD] = {
                enter: function (node) {
                    fieldPath.push(node.name.value);
                    if (ourPathTo === JSON.stringify(fieldPath) && fromSelection) {
                        return __assign({}, node, { selectionSet: fromSelection });
                    }
                },
                leave: function (node) {
                    fieldPath.pop();
                },
            },
            _b));
        return __assign({}, originalRequest, { document: newDocument });
    };
    return ExtractField;
}());
exports.default = ExtractField;
//# sourceMappingURL=ExtractField.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/transforms/FilterRootFields.js":
/*!************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/transforms/FilterRootFields.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var TransformRootFields_1 = __webpack_require__(/*! ./TransformRootFields */ "./node_modules/graphql-tools/dist/transforms/TransformRootFields.js");
var FilterRootFields = /** @class */ (function () {
    function FilterRootFields(filter) {
        this.transformer = new TransformRootFields_1.default(function (operation, fieldName, field) {
            if (filter(operation, fieldName, field)) {
                return undefined;
            }
            else {
                return null;
            }
        });
    }
    FilterRootFields.prototype.transformSchema = function (originalSchema) {
        return this.transformer.transformSchema(originalSchema);
    };
    return FilterRootFields;
}());
exports.default = FilterRootFields;
//# sourceMappingURL=FilterRootFields.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/transforms/FilterToSchema.js":
/*!**********************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/transforms/FilterToSchema.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var implementsAbstractType_1 = __webpack_require__(/*! ../implementsAbstractType */ "./node_modules/graphql-tools/dist/implementsAbstractType.js");
var FilterToSchema = /** @class */ (function () {
    function FilterToSchema(targetSchema) {
        this.targetSchema = targetSchema;
    }
    FilterToSchema.prototype.transformRequest = function (originalRequest) {
        var document = filterDocumentToSchema(this.targetSchema, originalRequest.document);
        return __assign({}, originalRequest, { document: document });
    };
    return FilterToSchema;
}());
exports.default = FilterToSchema;
function filterDocumentToSchema(targetSchema, document) {
    var operations = document.definitions.filter(function (def) { return def.kind === graphql_1.Kind.OPERATION_DEFINITION; });
    var fragments = document.definitions.filter(function (def) { return def.kind === graphql_1.Kind.FRAGMENT_DEFINITION; });
    var usedFragments = [];
    var newOperations = [];
    var newFragments = [];
    var validFragments = fragments.filter(function (fragment) {
        var typeName = fragment.typeCondition.name.value;
        return Boolean(targetSchema.getType(typeName));
    });
    var validFragmentsWithType = {};
    validFragments.forEach(function (fragment) {
        var typeName = fragment.typeCondition.name.value;
        var type = targetSchema.getType(typeName);
        validFragmentsWithType[fragment.name.value] = type;
    });
    var fragmentSet = Object.create(null);
    operations.forEach(function (operation) {
        var type;
        if (operation.operation === 'subscription') {
            type = targetSchema.getSubscriptionType();
        }
        else if (operation.operation === 'mutation') {
            type = targetSchema.getMutationType();
        }
        else {
            type = targetSchema.getQueryType();
        }
        var _a = filterSelectionSet(targetSchema, type, validFragmentsWithType, operation.selectionSet), selectionSet = _a.selectionSet, operationUsedFragments = _a.usedFragments, operationUsedVariables = _a.usedVariables;
        usedFragments = union(usedFragments, operationUsedFragments);
        var _b = collectFragmentVariables(targetSchema, fragmentSet, validFragments, validFragmentsWithType, usedFragments), collectedUsedVariables = _b.usedVariables, collectedNewFragments = _b.newFragments, collectedFragmentSet = _b.fragmentSet;
        var fullUsedVariables = union(operationUsedVariables, collectedUsedVariables);
        newFragments = collectedNewFragments;
        fragmentSet = collectedFragmentSet;
        var variableDefinitions = operation.variableDefinitions.filter(function (variable) {
            return fullUsedVariables.indexOf(variable.variable.name.value) !== -1;
        });
        newOperations.push({
            kind: graphql_1.Kind.OPERATION_DEFINITION,
            operation: operation.operation,
            name: operation.name,
            directives: operation.directives,
            variableDefinitions: variableDefinitions,
            selectionSet: selectionSet,
        });
    });
    return {
        kind: graphql_1.Kind.DOCUMENT,
        definitions: newOperations.concat(newFragments),
    };
}
function collectFragmentVariables(targetSchema, fragmentSet, validFragments, validFragmentsWithType, usedFragments) {
    var usedVariables = [];
    var newFragments = [];
    var _loop_1 = function () {
        var nextFragmentName = usedFragments.pop();
        var fragment = validFragments.find(function (fr) { return fr.name.value === nextFragmentName; });
        if (fragment) {
            var name_1 = nextFragmentName;
            var typeName = fragment.typeCondition.name.value;
            var type = targetSchema.getType(typeName);
            var _a = filterSelectionSet(targetSchema, type, validFragmentsWithType, fragment.selectionSet), selectionSet = _a.selectionSet, fragmentUsedFragments = _a.usedFragments, fragmentUsedVariables = _a.usedVariables;
            usedFragments = union(usedFragments, fragmentUsedFragments);
            usedVariables = union(usedVariables, fragmentUsedVariables);
            if (!fragmentSet[name_1]) {
                fragmentSet[name_1] = true;
                newFragments.push({
                    kind: graphql_1.Kind.FRAGMENT_DEFINITION,
                    name: {
                        kind: graphql_1.Kind.NAME,
                        value: name_1,
                    },
                    typeCondition: fragment.typeCondition,
                    selectionSet: selectionSet,
                });
            }
        }
    };
    while (usedFragments.length !== 0) {
        _loop_1();
    }
    return {
        usedVariables: usedVariables,
        newFragments: newFragments,
        fragmentSet: fragmentSet,
    };
}
function filterSelectionSet(schema, type, validFragments, selectionSet) {
    var _a;
    var usedFragments = [];
    var usedVariables = [];
    var typeStack = [type];
    // Should be rewritten using visitWithSchema
    var filteredSelectionSet = graphql_1.visit(selectionSet, (_a = {},
        _a[graphql_1.Kind.FIELD] = {
            enter: function (node) {
                var parentType = resolveType(typeStack[typeStack.length - 1]);
                if (parentType instanceof graphql_1.GraphQLObjectType ||
                    parentType instanceof graphql_1.GraphQLInterfaceType) {
                    var fields = parentType.getFields();
                    var field = node.name.value === '__typename'
                        ? graphql_1.TypeNameMetaFieldDef
                        : fields[node.name.value];
                    if (!field) {
                        return null;
                    }
                    else {
                        typeStack.push(field.type);
                    }
                    var argNames_1 = (field.args || []).map(function (arg) { return arg.name; });
                    if (node.arguments) {
                        var args = node.arguments.filter(function (arg) {
                            return argNames_1.indexOf(arg.name.value) !== -1;
                        });
                        if (args.length !== node.arguments.length) {
                            return __assign({}, node, { arguments: args });
                        }
                    }
                }
                else if (parentType instanceof graphql_1.GraphQLUnionType &&
                    node.name.value === '__typename') {
                    typeStack.push(graphql_1.TypeNameMetaFieldDef.type);
                }
            },
            leave: function (node) {
                var _a;
                var currentType = typeStack.pop();
                var resolvedType = resolveType(currentType);
                if (resolvedType instanceof graphql_1.GraphQLObjectType ||
                    resolvedType instanceof graphql_1.GraphQLInterfaceType) {
                    var selections = node.selectionSet && node.selectionSet.selections || null;
                    if (!selections || selections.length === 0) {
                        // need to remove any added variables. Is there a better way to do this?
                        graphql_1.visit(node, (_a = {},
                            _a[graphql_1.Kind.VARIABLE] = function (variableNode) {
                                var index = usedVariables.indexOf(variableNode.name.value);
                                if (index !== -1) {
                                    usedVariables.splice(index, 1);
                                }
                            },
                            _a));
                        return null;
                    }
                }
            },
        },
        _a[graphql_1.Kind.FRAGMENT_SPREAD] = function (node) {
            if (node.name.value in validFragments) {
                var parentType = resolveType(typeStack[typeStack.length - 1]);
                var innerType = validFragments[node.name.value];
                if (!implementsAbstractType_1.default(schema, parentType, innerType)) {
                    return null;
                }
                else {
                    usedFragments.push(node.name.value);
                    return;
                }
            }
            else {
                return null;
            }
        },
        _a[graphql_1.Kind.INLINE_FRAGMENT] = {
            enter: function (node) {
                if (node.typeCondition) {
                    var innerType = schema.getType(node.typeCondition.name.value);
                    var parentType = resolveType(typeStack[typeStack.length - 1]);
                    if (implementsAbstractType_1.default(schema, parentType, innerType)) {
                        typeStack.push(innerType);
                    }
                    else {
                        return null;
                    }
                }
            },
            leave: function (node) {
                typeStack.pop();
            },
        },
        _a[graphql_1.Kind.VARIABLE] = function (node) {
            usedVariables.push(node.name.value);
        },
        _a));
    return {
        selectionSet: filteredSelectionSet,
        usedFragments: usedFragments,
        usedVariables: usedVariables,
    };
}
function resolveType(type) {
    var lastType = type;
    while (lastType instanceof graphql_1.GraphQLNonNull ||
        lastType instanceof graphql_1.GraphQLList) {
        lastType = lastType.ofType;
    }
    return lastType;
}
function union() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var cache = {};
    var result = [];
    arrays.forEach(function (array) {
        array.forEach(function (item) {
            if (!cache[item]) {
                cache[item] = true;
                result.push(item);
            }
        });
    });
    return result;
}
//# sourceMappingURL=FilterToSchema.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/transforms/FilterTypes.js":
/*!*******************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/transforms/FilterTypes.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* tslint:disable:no-unused-expression */
Object.defineProperty(exports, "__esModule", { value: true });
var visitSchema_1 = __webpack_require__(/*! ../transforms/visitSchema */ "./node_modules/graphql-tools/dist/transforms/visitSchema.js");
var FilterTypes = /** @class */ (function () {
    function FilterTypes(filter) {
        this.filter = filter;
    }
    FilterTypes.prototype.transformSchema = function (schema) {
        var _this = this;
        var _a;
        return visitSchema_1.visitSchema(schema, (_a = {},
            _a[visitSchema_1.VisitSchemaKind.TYPE] = function (type) {
                if (_this.filter(type)) {
                    return undefined;
                }
                else {
                    return null;
                }
            },
            _a));
    };
    return FilterTypes;
}());
exports.default = FilterTypes;
//# sourceMappingURL=FilterTypes.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/transforms/RenameRootFields.js":
/*!************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/transforms/RenameRootFields.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var schemaRecreation_1 = __webpack_require__(/*! ../stitching/schemaRecreation */ "./node_modules/graphql-tools/dist/stitching/schemaRecreation.js");
var TransformRootFields_1 = __webpack_require__(/*! ./TransformRootFields */ "./node_modules/graphql-tools/dist/transforms/TransformRootFields.js");
var RenameRootFields = /** @class */ (function () {
    function RenameRootFields(renamer) {
        var resolveType = schemaRecreation_1.createResolveType(function (name, type) { return type; });
        this.transformer = new TransformRootFields_1.default(function (operation, fieldName, field) {
            return {
                name: renamer(operation, fieldName, field),
                field: schemaRecreation_1.fieldToFieldConfig(field, resolveType, true),
            };
        });
    }
    RenameRootFields.prototype.transformSchema = function (originalSchema) {
        return this.transformer.transformSchema(originalSchema);
    };
    return RenameRootFields;
}());
exports.default = RenameRootFields;
//# sourceMappingURL=RenameRootFields.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/transforms/RenameTypes.js":
/*!*******************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/transforms/RenameTypes.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var isSpecifiedScalarType_1 = __webpack_require__(/*! ../isSpecifiedScalarType */ "./node_modules/graphql-tools/dist/isSpecifiedScalarType.js");
var visitSchema_1 = __webpack_require__(/*! ../transforms/visitSchema */ "./node_modules/graphql-tools/dist/transforms/visitSchema.js");
var RenameTypes = /** @class */ (function () {
    function RenameTypes(renamer, options) {
        this.renamer = renamer;
        this.reverseMap = {};
        var _a = options || {}, _b = _a.renameBuiltins, renameBuiltins = _b === void 0 ? false : _b, _c = _a.renameScalars, renameScalars = _c === void 0 ? true : _c;
        this.renameBuiltins = renameBuiltins;
        this.renameScalars = renameScalars;
    }
    RenameTypes.prototype.transformSchema = function (originalSchema) {
        var _this = this;
        var _a;
        return visitSchema_1.visitSchema(originalSchema, (_a = {},
            _a[visitSchema_1.VisitSchemaKind.TYPE] = function (type) {
                if (isSpecifiedScalarType_1.default(type) && !_this.renameBuiltins) {
                    return undefined;
                }
                if (type instanceof graphql_1.GraphQLScalarType && !_this.renameScalars) {
                    return undefined;
                }
                var newName = _this.renamer(type.name);
                if (newName && newName !== type.name) {
                    _this.reverseMap[newName] = type.name;
                    var newType = Object.assign(Object.create(type), type);
                    newType.name = newName;
                    return newType;
                }
            },
            _a[visitSchema_1.VisitSchemaKind.ROOT_OBJECT] = function (type) {
                return undefined;
            },
            _a));
    };
    RenameTypes.prototype.transformRequest = function (originalRequest) {
        var _this = this;
        var _a;
        var newDocument = graphql_1.visit(originalRequest.document, (_a = {},
            _a[graphql_1.Kind.NAMED_TYPE] = function (node) {
                var name = node.name.value;
                if (name in _this.reverseMap) {
                    return __assign({}, node, { name: {
                            kind: graphql_1.Kind.NAME,
                            value: _this.reverseMap[name],
                        } });
                }
            },
            _a));
        return {
            document: newDocument,
            variables: originalRequest.variables,
        };
    };
    RenameTypes.prototype.transformResult = function (result) {
        if (result.data) {
            var data = this.renameTypes(result.data, 'data');
            if (data !== result.data) {
                return __assign({}, result, { data: data });
            }
        }
        return result;
    };
    RenameTypes.prototype.renameTypes = function (value, name) {
        var _this = this;
        if (name === '__typename') {
            return this.renamer(value);
        }
        if (value && typeof value === 'object') {
            var newValue_1 = Array.isArray(value) ? []
                // Create a new object with the same prototype.
                : Object.create(Object.getPrototypeOf(value));
            var returnNewValue_1 = false;
            Object.keys(value).forEach(function (key) {
                var oldChild = value[key];
                var newChild = _this.renameTypes(oldChild, key);
                newValue_1[key] = newChild;
                if (newChild !== oldChild) {
                    returnNewValue_1 = true;
                }
            });
            if (returnNewValue_1) {
                return newValue_1;
            }
        }
        return value;
    };
    return RenameTypes;
}());
exports.default = RenameTypes;
//# sourceMappingURL=RenameTypes.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/transforms/ReplaceFieldWithFragment.js":
/*!********************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/transforms/ReplaceFieldWithFragment.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var ReplaceFieldWithFragment = /** @class */ (function () {
    function ReplaceFieldWithFragment(targetSchema, fragments) {
        this.targetSchema = targetSchema;
        this.mapping = {};
        for (var _i = 0, fragments_1 = fragments; _i < fragments_1.length; _i++) {
            var _a = fragments_1[_i], field = _a.field, fragment = _a.fragment;
            var parsedFragment = parseFragmentToInlineFragment(fragment);
            var actualTypeName = parsedFragment.typeCondition.name.value;
            this.mapping[actualTypeName] = this.mapping[actualTypeName] || {};
            if (this.mapping[actualTypeName][field]) {
                this.mapping[actualTypeName][field].push(parsedFragment);
            }
            else {
                this.mapping[actualTypeName][field] = [parsedFragment];
            }
        }
    }
    ReplaceFieldWithFragment.prototype.transformRequest = function (originalRequest) {
        var document = replaceFieldsWithFragments(this.targetSchema, originalRequest.document, this.mapping);
        return __assign({}, originalRequest, { document: document });
    };
    return ReplaceFieldWithFragment;
}());
exports.default = ReplaceFieldWithFragment;
function replaceFieldsWithFragments(targetSchema, document, mapping) {
    var _a;
    var typeInfo = new graphql_1.TypeInfo(targetSchema);
    return graphql_1.visit(document, graphql_1.visitWithTypeInfo(typeInfo, (_a = {},
        _a[graphql_1.Kind.SELECTION_SET] = function (node) {
            var parentType = typeInfo.getParentType();
            if (parentType) {
                var parentTypeName_1 = parentType.name;
                var selections_1 = node.selections;
                if (mapping[parentTypeName_1]) {
                    node.selections.forEach(function (selection) {
                        if (selection.kind === graphql_1.Kind.FIELD) {
                            var name_1 = selection.name.value;
                            var fragments = mapping[parentTypeName_1][name_1];
                            if (fragments && fragments.length > 0) {
                                var fragment = concatInlineFragments(parentTypeName_1, fragments);
                                selections_1 = selections_1.concat(fragment);
                            }
                        }
                    });
                }
                if (selections_1 !== node.selections) {
                    return __assign({}, node, { selections: selections_1 });
                }
            }
        },
        _a)));
}
function parseFragmentToInlineFragment(definitions) {
    if (definitions.trim().startsWith('fragment')) {
        var document_1 = graphql_1.parse(definitions);
        for (var _i = 0, _a = document_1.definitions; _i < _a.length; _i++) {
            var definition = _a[_i];
            if (definition.kind === graphql_1.Kind.FRAGMENT_DEFINITION) {
                return {
                    kind: graphql_1.Kind.INLINE_FRAGMENT,
                    typeCondition: definition.typeCondition,
                    selectionSet: definition.selectionSet,
                };
            }
        }
    }
    var query = graphql_1.parse("{" + definitions + "}")
        .definitions[0];
    for (var _b = 0, _c = query.selectionSet.selections; _b < _c.length; _b++) {
        var selection = _c[_b];
        if (selection.kind === graphql_1.Kind.INLINE_FRAGMENT) {
            return selection;
        }
    }
    throw new Error('Could not parse fragment');
}
function concatInlineFragments(type, fragments) {
    var fragmentSelections = fragments.reduce(function (selections, fragment) {
        return selections.concat(fragment.selectionSet.selections);
    }, []);
    var deduplicatedFragmentSelection = deduplicateSelection(fragmentSelections);
    return {
        kind: graphql_1.Kind.INLINE_FRAGMENT,
        typeCondition: {
            kind: graphql_1.Kind.NAMED_TYPE,
            name: {
                kind: graphql_1.Kind.NAME,
                value: type,
            },
        },
        selectionSet: {
            kind: graphql_1.Kind.SELECTION_SET,
            selections: deduplicatedFragmentSelection,
        },
    };
}
function deduplicateSelection(nodes) {
    var selectionMap = nodes.reduce(function (map, node) {
        var _a, _b, _c;
        switch (node.kind) {
            case 'Field': {
                if (node.alias) {
                    if (map.hasOwnProperty(node.alias.value)) {
                        return map;
                    }
                    else {
                        return __assign({}, map, (_a = {}, _a[node.alias.value] = node, _a));
                    }
                }
                else {
                    if (map.hasOwnProperty(node.name.value)) {
                        return map;
                    }
                    else {
                        return __assign({}, map, (_b = {}, _b[node.name.value] = node, _b));
                    }
                }
            }
            case 'FragmentSpread': {
                if (map.hasOwnProperty(node.name.value)) {
                    return map;
                }
                else {
                    return __assign({}, map, (_c = {}, _c[node.name.value] = node, _c));
                }
            }
            case 'InlineFragment': {
                if (map.__fragment) {
                    var fragment = map.__fragment;
                    return __assign({}, map, { __fragment: concatInlineFragments(fragment.typeCondition.name.value, [fragment, node]) });
                }
                else {
                    return __assign({}, map, { __fragment: node });
                }
            }
            default: {
                return map;
            }
        }
    }, {});
    var selection = Object.keys(selectionMap).reduce(function (selectionList, node) { return selectionList.concat(selectionMap[node]); }, []);
    return selection;
}
//# sourceMappingURL=ReplaceFieldWithFragment.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/transforms/TransformRootFields.js":
/*!***************************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/transforms/TransformRootFields.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var isEmptyObject_1 = __webpack_require__(/*! ../isEmptyObject */ "./node_modules/graphql-tools/dist/isEmptyObject.js");
var visitSchema_1 = __webpack_require__(/*! ./visitSchema */ "./node_modules/graphql-tools/dist/transforms/visitSchema.js");
var schemaRecreation_1 = __webpack_require__(/*! ../stitching/schemaRecreation */ "./node_modules/graphql-tools/dist/stitching/schemaRecreation.js");
var TransformRootFields = /** @class */ (function () {
    function TransformRootFields(transform) {
        this.transform = transform;
    }
    TransformRootFields.prototype.transformSchema = function (originalSchema) {
        var _this = this;
        var _a;
        return visitSchema_1.visitSchema(originalSchema, (_a = {},
            _a[visitSchema_1.VisitSchemaKind.QUERY] = function (type) {
                return transformFields(type, function (fieldName, field) {
                    return _this.transform('Query', fieldName, field);
                });
            },
            _a[visitSchema_1.VisitSchemaKind.MUTATION] = function (type) {
                return transformFields(type, function (fieldName, field) {
                    return _this.transform('Mutation', fieldName, field);
                });
            },
            _a[visitSchema_1.VisitSchemaKind.SUBSCRIPTION] = function (type) {
                return transformFields(type, function (fieldName, field) {
                    return _this.transform('Subscription', fieldName, field);
                });
            },
            _a));
    };
    return TransformRootFields;
}());
exports.default = TransformRootFields;
function transformFields(type, transformer) {
    var resolveType = schemaRecreation_1.createResolveType(function (name, originalType) {
        return originalType;
    });
    var fields = type.getFields();
    var newFields = {};
    Object.keys(fields).forEach(function (fieldName) {
        var field = fields[fieldName];
        var newField = transformer(fieldName, field);
        if (typeof newField === 'undefined') {
            newFields[fieldName] = schemaRecreation_1.fieldToFieldConfig(field, resolveType, true);
        }
        else if (newField !== null) {
            if (newField.name) {
                newFields[newField.name] = newField.field;
            }
            else {
                newFields[fieldName] = newField;
            }
        }
    });
    if (isEmptyObject_1.default(newFields)) {
        return null;
    }
    else {
        return new graphql_1.GraphQLObjectType({
            name: type.name,
            description: type.description,
            astNode: type.astNode,
            fields: newFields,
        });
    }
}
//# sourceMappingURL=TransformRootFields.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/transforms/WrapQuery.js":
/*!*****************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/transforms/WrapQuery.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var WrapQuery = /** @class */ (function () {
    function WrapQuery(path, wrapper, extractor) {
        this.path = path;
        this.wrapper = wrapper;
        this.extractor = extractor;
    }
    WrapQuery.prototype.transformRequest = function (originalRequest) {
        var _this = this;
        var _a;
        var document = originalRequest.document;
        var fieldPath = [];
        var ourPath = JSON.stringify(this.path);
        var newDocument = graphql_1.visit(document, (_a = {},
            _a[graphql_1.Kind.FIELD] = {
                enter: function (node) {
                    fieldPath.push(node.name.value);
                    if (ourPath === JSON.stringify(fieldPath)) {
                        var wrapResult = _this.wrapper(node.selectionSet);
                        // Selection can be either a single selection or a selection set. If it's just one selection,
                        // let's wrap it in a selection set. Otherwise, keep it as is.
                        var selectionSet = wrapResult.kind === graphql_1.Kind.SELECTION_SET
                            ? wrapResult
                            : {
                                kind: graphql_1.Kind.SELECTION_SET,
                                selections: [wrapResult]
                            };
                        return __assign({}, node, { selectionSet: selectionSet });
                    }
                },
                leave: function (node) {
                    fieldPath.pop();
                }
            },
            _a));
        return __assign({}, originalRequest, { document: newDocument });
    };
    WrapQuery.prototype.transformResult = function (originalResult) {
        var data = originalResult.data;
        if (data) {
            var path = this.path.slice();
            while (path.length > 1) {
                var next = path.unshift();
                if (data[next]) {
                    data = data[next];
                }
            }
            data[path[0]] = this.extractor(data[path[0]]);
        }
        return {
            data: data,
            errors: originalResult.errors
        };
    };
    return WrapQuery;
}());
exports.default = WrapQuery;
//# sourceMappingURL=WrapQuery.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/transforms/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/transforms/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var transformSchema_1 = __webpack_require__(/*! ./transformSchema */ "./node_modules/graphql-tools/dist/transforms/transformSchema.js");
exports.transformSchema = transformSchema_1.default;
var AddArgumentsAsVariables_1 = __webpack_require__(/*! ./AddArgumentsAsVariables */ "./node_modules/graphql-tools/dist/transforms/AddArgumentsAsVariables.js");
exports.AddArgumentsAsVariables = AddArgumentsAsVariables_1.default;
var CheckResultAndHandleErrors_1 = __webpack_require__(/*! ./CheckResultAndHandleErrors */ "./node_modules/graphql-tools/dist/transforms/CheckResultAndHandleErrors.js");
exports.CheckResultAndHandleErrors = CheckResultAndHandleErrors_1.default;
var ReplaceFieldWithFragment_1 = __webpack_require__(/*! ./ReplaceFieldWithFragment */ "./node_modules/graphql-tools/dist/transforms/ReplaceFieldWithFragment.js");
exports.ReplaceFieldWithFragment = ReplaceFieldWithFragment_1.default;
var AddTypenameToAbstract_1 = __webpack_require__(/*! ./AddTypenameToAbstract */ "./node_modules/graphql-tools/dist/transforms/AddTypenameToAbstract.js");
exports.AddTypenameToAbstract = AddTypenameToAbstract_1.default;
var FilterToSchema_1 = __webpack_require__(/*! ./FilterToSchema */ "./node_modules/graphql-tools/dist/transforms/FilterToSchema.js");
exports.FilterToSchema = FilterToSchema_1.default;
var RenameTypes_1 = __webpack_require__(/*! ./RenameTypes */ "./node_modules/graphql-tools/dist/transforms/RenameTypes.js");
exports.RenameTypes = RenameTypes_1.default;
var FilterTypes_1 = __webpack_require__(/*! ./FilterTypes */ "./node_modules/graphql-tools/dist/transforms/FilterTypes.js");
exports.FilterTypes = FilterTypes_1.default;
var TransformRootFields_1 = __webpack_require__(/*! ./TransformRootFields */ "./node_modules/graphql-tools/dist/transforms/TransformRootFields.js");
exports.TransformRootFields = TransformRootFields_1.default;
var RenameRootFields_1 = __webpack_require__(/*! ./RenameRootFields */ "./node_modules/graphql-tools/dist/transforms/RenameRootFields.js");
exports.RenameRootFields = RenameRootFields_1.default;
var FilterRootFields_1 = __webpack_require__(/*! ./FilterRootFields */ "./node_modules/graphql-tools/dist/transforms/FilterRootFields.js");
exports.FilterRootFields = FilterRootFields_1.default;
var ExpandAbstractTypes_1 = __webpack_require__(/*! ./ExpandAbstractTypes */ "./node_modules/graphql-tools/dist/transforms/ExpandAbstractTypes.js");
exports.ExpandAbstractTypes = ExpandAbstractTypes_1.default;
var ExtractField_1 = __webpack_require__(/*! ./ExtractField */ "./node_modules/graphql-tools/dist/transforms/ExtractField.js");
exports.ExtractField = ExtractField_1.default;
var WrapQuery_1 = __webpack_require__(/*! ./WrapQuery */ "./node_modules/graphql-tools/dist/transforms/WrapQuery.js");
exports.WrapQuery = WrapQuery_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/transforms/transformSchema.js":
/*!***********************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/transforms/transformSchema.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var makeExecutableSchema_1 = __webpack_require__(/*! ../makeExecutableSchema */ "./node_modules/graphql-tools/dist/makeExecutableSchema.js");
var visitSchema_1 = __webpack_require__(/*! ../transforms/visitSchema */ "./node_modules/graphql-tools/dist/transforms/visitSchema.js");
var transforms_1 = __webpack_require__(/*! ../transforms/transforms */ "./node_modules/graphql-tools/dist/transforms/transforms.js");
var resolvers_1 = __webpack_require__(/*! ../stitching/resolvers */ "./node_modules/graphql-tools/dist/stitching/resolvers.js");
function transformSchema(targetSchema, transforms) {
    var schema = visitSchema_1.visitSchema(targetSchema, {}, true);
    var mapping = resolvers_1.generateSimpleMapping(targetSchema);
    var resolvers = resolvers_1.generateProxyingResolvers(targetSchema, transforms, mapping);
    schema = makeExecutableSchema_1.addResolveFunctionsToSchema({
        schema: schema,
        resolvers: resolvers,
        resolverValidationOptions: {
            allowResolversNotInSchema: true,
        },
    });
    schema = transforms_1.applySchemaTransforms(schema, transforms);
    schema.transforms = transforms;
    return schema;
}
exports.default = transformSchema;
//# sourceMappingURL=transformSchema.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/transforms/transforms.js":
/*!******************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/transforms/transforms.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function applySchemaTransforms(originalSchema, transforms) {
    return transforms.reduce(function (schema, transform) {
        return transform.transformSchema ? transform.transformSchema(schema) : schema;
    }, originalSchema);
}
exports.applySchemaTransforms = applySchemaTransforms;
function applyRequestTransforms(originalRequest, transforms) {
    return transforms.reduce(function (request, transform) {
        return transform.transformRequest
            ? transform.transformRequest(request)
            : request;
    }, originalRequest);
}
exports.applyRequestTransforms = applyRequestTransforms;
function applyResultTransforms(originalResult, transforms) {
    return transforms.reduce(function (result, transform) {
        return transform.transformResult ? transform.transformResult(result) : result;
    }, originalResult);
}
exports.applyResultTransforms = applyResultTransforms;
function composeTransforms() {
    var transforms = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        transforms[_i] = arguments[_i];
    }
    var reverseTransforms = transforms.slice().reverse();
    return {
        transformSchema: function (originalSchema) {
            return applySchemaTransforms(originalSchema, transforms);
        },
        transformRequest: function (originalRequest) {
            return applyRequestTransforms(originalRequest, reverseTransforms);
        },
        transformResult: function (result) {
            return applyResultTransforms(result, reverseTransforms);
        },
    };
}
exports.composeTransforms = composeTransforms;
//# sourceMappingURL=transforms.js.map

/***/ }),

/***/ "./node_modules/graphql-tools/dist/transforms/visitSchema.js":
/*!*******************************************************************!*\
  !*** ./node_modules/graphql-tools/dist/transforms/visitSchema.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
var schemaRecreation_1 = __webpack_require__(/*! ../stitching/schemaRecreation */ "./node_modules/graphql-tools/dist/stitching/schemaRecreation.js");
var VisitSchemaKind;
(function (VisitSchemaKind) {
    VisitSchemaKind["TYPE"] = "VisitSchemaKind.TYPE";
    VisitSchemaKind["SCALAR_TYPE"] = "VisitSchemaKind.SCALAR_TYPE";
    VisitSchemaKind["ENUM_TYPE"] = "VisitSchemaKind.ENUM_TYPE";
    VisitSchemaKind["COMPOSITE_TYPE"] = "VisitSchemaKind.COMPOSITE_TYPE";
    VisitSchemaKind["OBJECT_TYPE"] = "VisitSchemaKind.OBJECT_TYPE";
    VisitSchemaKind["INPUT_OBJECT_TYPE"] = "VisitSchemaKind.INPUT_OBJECT_TYPE";
    VisitSchemaKind["ABSTRACT_TYPE"] = "VisitSchemaKind.ABSTRACT_TYPE";
    VisitSchemaKind["UNION_TYPE"] = "VisitSchemaKind.UNION_TYPE";
    VisitSchemaKind["INTERFACE_TYPE"] = "VisitSchemaKind.INTERFACE_TYPE";
    VisitSchemaKind["ROOT_OBJECT"] = "VisitSchemaKind.ROOT_OBJECT";
    VisitSchemaKind["QUERY"] = "VisitSchemaKind.QUERY";
    VisitSchemaKind["MUTATION"] = "VisitSchemaKind.MUTATION";
    VisitSchemaKind["SUBSCRIPTION"] = "VisitSchemaKind.SUBSCRIPTION";
})(VisitSchemaKind = exports.VisitSchemaKind || (exports.VisitSchemaKind = {}));
function visitSchema(schema, visitor, stripResolvers) {
    var types = {};
    var resolveType = schemaRecreation_1.createResolveType(function (name) {
        if (typeof types[name] === 'undefined') {
            throw new Error("Can't find type " + name + ".");
        }
        return types[name];
    });
    var queryType = schema.getQueryType();
    var mutationType = schema.getMutationType();
    var subscriptionType = schema.getSubscriptionType();
    var typeMap = schema.getTypeMap();
    Object.keys(typeMap).map(function (typeName) {
        var type = typeMap[typeName];
        if (graphql_1.isNamedType(type) && graphql_1.getNamedType(type).name.slice(0, 2) !== '__') {
            var specifiers = getTypeSpecifiers(type, schema);
            var typeVisitor = getVisitor(visitor, specifiers);
            if (typeVisitor) {
                var result = typeVisitor(type, schema);
                if (typeof result === 'undefined') {
                    types[typeName] = schemaRecreation_1.recreateType(type, resolveType, !stripResolvers);
                }
                else if (result === null) {
                    types[typeName] = null;
                }
                else {
                    types[typeName] = schemaRecreation_1.recreateType(result, resolveType, !stripResolvers);
                }
            }
            else {
                types[typeName] = schemaRecreation_1.recreateType(type, resolveType, !stripResolvers);
            }
        }
    });
    return new graphql_1.GraphQLSchema({
        query: queryType ? types[queryType.name] : null,
        mutation: mutationType
            ? types[mutationType.name]
            : null,
        subscription: subscriptionType
            ? types[subscriptionType.name]
            : null,
        types: Object.keys(types).map(function (name) { return types[name]; }),
    });
}
exports.visitSchema = visitSchema;
function getTypeSpecifiers(type, schema) {
    var specifiers = [VisitSchemaKind.TYPE];
    if (type instanceof graphql_1.GraphQLObjectType) {
        specifiers.unshift(VisitSchemaKind.COMPOSITE_TYPE, VisitSchemaKind.OBJECT_TYPE);
        var query = schema.getQueryType();
        var mutation = schema.getMutationType();
        var subscription = schema.getSubscriptionType();
        if (type === query) {
            specifiers.push(VisitSchemaKind.ROOT_OBJECT, VisitSchemaKind.QUERY);
        }
        else if (type === mutation) {
            specifiers.push(VisitSchemaKind.ROOT_OBJECT, VisitSchemaKind.MUTATION);
        }
        else if (type === subscription) {
            specifiers.push(VisitSchemaKind.ROOT_OBJECT, VisitSchemaKind.SUBSCRIPTION);
        }
    }
    else if (type instanceof graphql_1.GraphQLInputObjectType) {
        specifiers.push(VisitSchemaKind.INPUT_OBJECT_TYPE);
    }
    else if (type instanceof graphql_1.GraphQLInterfaceType) {
        specifiers.push(VisitSchemaKind.COMPOSITE_TYPE, VisitSchemaKind.ABSTRACT_TYPE, VisitSchemaKind.INTERFACE_TYPE);
    }
    else if (type instanceof graphql_1.GraphQLUnionType) {
        specifiers.push(VisitSchemaKind.COMPOSITE_TYPE, VisitSchemaKind.ABSTRACT_TYPE, VisitSchemaKind.UNION_TYPE);
    }
    else if (type instanceof graphql_1.GraphQLEnumType) {
        specifiers.push(VisitSchemaKind.ENUM_TYPE);
    }
    else if (type instanceof graphql_1.GraphQLScalarType) {
        specifiers.push(VisitSchemaKind.SCALAR_TYPE);
    }
    return specifiers;
}
function getVisitor(visitor, specifiers) {
    var typeVisitor = null;
    var stack = specifiers.slice();
    while (!typeVisitor && stack.length > 0) {
        var next = stack.pop();
        typeVisitor = visitor[next];
    }
    return typeVisitor;
}
//# sourceMappingURL=visitSchema.js.map

/***/ }),

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ })

})
//# sourceMappingURL=items.js.e68fd15a46bc03ec3b83.hot-update.js.map