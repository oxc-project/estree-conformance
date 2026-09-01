__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IBookStyle",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "initialLeftPageTransforms",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 52
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "width",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 63,
                        "end": 69
                      },
                      "start": 61,
                      "end": 69
                    },
                    "start": 56,
                    "end": 69
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NamedTransform",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 74,
                        "end": 88
                      },
                      "typeArguments": null,
                      "start": 74,
                      "end": 88
                    },
                    "start": 74,
                    "end": 90
                  },
                  "start": 71,
                  "end": 90
                },
                "start": 55,
                "end": 90
              },
              "start": 53,
              "end": 90
            },
            "accessibility": null,
            "static": false,
            "start": 27,
            "end": 91
          }
        ],
        "start": 21,
        "end": 93
      },
      "declare": false,
      "start": 0,
      "end": 93
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NamedTransform",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 119
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 133,
                    "end": 139
                  },
                  "start": 131,
                  "end": 139
                },
                "start": 127,
                "end": 139
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Transform3D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 153
                },
                "typeArguments": null,
                "start": 142,
                "end": 153
              },
              "start": 140,
              "end": 153
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 126,
            "end": 154
          }
        ],
        "start": 120,
        "end": 156
      },
      "declare": false,
      "start": 95,
      "end": 156
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Transform3D",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 179
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "cachedCss",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 195
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 197,
                "end": 203
              },
              "start": 195,
              "end": 203
            },
            "accessibility": null,
            "static": false,
            "start": 186,
            "end": 204
          }
        ],
        "start": 180,
        "end": 206
      },
      "declare": false,
      "start": 158,
      "end": 206
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "style",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IBookStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 219,
                  "end": 229
                },
                "typeArguments": null,
                "start": 219,
                "end": 229
              },
              "start": 217,
              "end": 229
            },
            "start": 212,
            "end": 229
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "initialLeftPageTransforms",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 263
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "width",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 273,
                          "end": 279
                        },
                        "start": 271,
                        "end": 279
                      },
                      "start": 266,
                      "end": 279
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Literal",
                                    "value": "ry",
                                    "raw": "'ry'",
                                    "start": 316,
                                    "end": 320
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 322,
                                    "end": 326
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 316,
                                  "end": 326
                                }
                              ],
                              "start": 315,
                              "end": 328
                            }
                          ],
                          "start": 301,
                          "end": 338
                        },
                        "start": 294,
                        "end": 339
                      }
                    ],
                    "start": 284,
                    "end": 345
                  },
                  "id": null,
                  "generator": false,
                  "start": 265,
                  "end": 345
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 238,
                "end": 345
              }
            ],
            "start": 232,
            "end": 347
          },
          "definite": false,
          "start": 212,
          "end": 347
        }
      ],
      "declare": false,
      "start": 208,
      "end": 347
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 347
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "IBookStyle",
    "start": 10,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "initialLeftPageTransforms",
    "start": 27,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 56,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 71,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "NamedTransform",
    "start": 74,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 95,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "NamedTransform",
    "start": 105,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 127,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "Transform3D",
    "start": 142,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "interface",
    "start": 158,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "Transform3D",
    "start": 168,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "cachedCss",
    "start": 186,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 197,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 208,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 212,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "IBookStyle",
    "start": 219,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "initialLeftPageTransforms",
    "start": 238,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 266,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 273,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 281,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 294,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316
  },
  {
    "type": "String",
    "value": "'ry'",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Null",
    "value": "null",
    "start": 322,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  }
]
```
