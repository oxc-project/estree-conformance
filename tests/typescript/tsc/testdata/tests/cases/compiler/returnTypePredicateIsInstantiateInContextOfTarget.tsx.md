__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 61
          },
          "start": 51,
          "end": 61
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 67,
        "end": 74
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 75
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 95
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 104,
          "end": 109
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 110,
          "end": 119
        },
        "optional": false,
        "computed": false,
        "start": 104,
        "end": 119
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isAny",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 127
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 130,
                            "end": 131
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 130,
                          "end": 131
                        }
                      ],
                      "start": 129,
                      "end": 132
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 138,
                            "end": 141
                          },
                          "start": 136,
                          "end": 141
                        },
                        "start": 133,
                        "end": 141
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 146,
                          "end": 149
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 153,
                              "end": 154
                            },
                            "typeArguments": null,
                            "start": 153,
                            "end": 154
                          },
                          "start": 153,
                          "end": 154
                        },
                        "start": 146,
                        "end": 154
                      },
                      "start": 143,
                      "end": 154
                    },
                    "start": 129,
                    "end": 154
                  },
                  "start": 127,
                  "end": 154
                },
                "accessibility": null,
                "static": false,
                "start": 122,
                "end": 154
              }
            ],
            "start": 120,
            "end": 156
          }
        ],
        "start": 119,
        "end": 157
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 183
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 196,
                    "end": 201
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TestComponent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 203,
                      "end": 216
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isAny",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 217,
                      "end": 222
                    },
                    "optional": false,
                    "computed": false,
                    "start": 203,
                    "end": 222
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 196,
                  "end": 222
                }
              ],
              "start": 186,
              "end": 228
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 164,
            "end": 228
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isAny",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 302
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 303,
                      "end": 304
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 303,
                    "end": 304
                  }
                ],
                "start": 302,
                "end": 305
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 311,
                      "end": 314
                    },
                    "start": 309,
                    "end": 314
                  },
                  "start": 306,
                  "end": 314
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 320
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 324,
                        "end": 325
                      },
                      "typeArguments": null,
                      "start": 324,
                      "end": 325
                    },
                    "start": 324,
                    "end": 325
                  },
                  "start": 317,
                  "end": 325
                },
                "start": 315,
                "end": 325
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 343,
                      "end": 347
                    },
                    "start": 336,
                    "end": 348
                  }
                ],
                "start": 326,
                "end": 354
              },
              "expression": false,
              "start": 302,
              "end": 354
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 290,
            "end": 354
          }
        ],
        "start": 158,
        "end": 356
      },
      "abstract": false,
      "declare": false,
      "start": 76,
      "end": 356
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "TestRender",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 374
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "TestComponent",
                  "start": 384,
                  "end": 397
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true,
                "start": 383,
                "end": 400
              },
              "children": [],
              "closingElement": null,
              "start": 383,
              "end": 400
            },
            "id": null,
            "generator": false,
            "start": 377,
            "end": 400
          },
          "definite": false,
          "start": 364,
          "end": 400
        }
      ],
      "declare": false,
      "start": 358,
      "end": 401
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 401
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 53,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 62,
    "end": 66
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 76,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "TestComponent",
    "start": 82,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 96,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 104,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 110,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "isAny",
    "start": 122,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 143,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 146,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 150,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 164,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 171,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "isAny",
    "start": 196,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "TestComponent",
    "start": 203,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "isAny",
    "start": 217,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 290,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "isAny",
    "start": 297,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 306,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 311,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 321,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 336,
    "end": 342
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 343,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 358,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "TestRender",
    "start": 364,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 380,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 383,
    "end": 384
  },
  {
    "type": "JSXIdentifier",
    "value": "TestComponent",
    "start": 384,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  }
]
```
