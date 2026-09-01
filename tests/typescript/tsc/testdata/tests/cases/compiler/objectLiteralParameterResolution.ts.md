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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extend",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 25
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 26,
                    "end": 27
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 26,
                  "end": 27
                }
              ],
              "start": 25,
              "end": 28
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "target",
                "optional": false,
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
                      "start": 37,
                      "end": 38
                    },
                    "typeArguments": null,
                    "start": 37,
                    "end": 38
                  },
                  "start": 35,
                  "end": 38
                },
                "start": 29,
                "end": 38
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "objs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 47
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 49,
                      "end": 52
                    },
                    "start": 49,
                    "end": 54
                  },
                  "start": 47,
                  "end": 54
                },
                "value": null,
                "start": 40,
                "end": 54
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 58
                },
                "typeArguments": null,
                "start": 57,
                "end": 58
              },
              "start": 55,
              "end": 58
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 19,
            "end": 59
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extend",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 70
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 71,
                    "end": 72
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 71,
                  "end": 72
                }
              ],
              "start": 70,
              "end": 73
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deep",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 80,
                    "end": 87
                  },
                  "start": 78,
                  "end": 87
                },
                "start": 74,
                "end": 87
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "target",
                "optional": false,
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
                      "start": 97,
                      "end": 98
                    },
                    "typeArguments": null,
                    "start": 97,
                    "end": 98
                  },
                  "start": 95,
                  "end": 98
                },
                "start": 89,
                "end": 98
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "objs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 107
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 109,
                      "end": 112
                    },
                    "start": 109,
                    "end": 114
                  },
                  "start": 107,
                  "end": 114
                },
                "value": null,
                "start": 100,
                "end": 114
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 118
                },
                "typeArguments": null,
                "start": 117,
                "end": 118
              },
              "start": 115,
              "end": 118
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 64,
            "end": 119
          }
        ],
        "start": 13,
        "end": 121
      },
      "declare": false,
      "start": 0,
      "end": 121
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
            "name": "$",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 140
                },
                "typeArguments": null,
                "start": 137,
                "end": 140
              },
              "start": 135,
              "end": 140
            },
            "start": 134,
            "end": 140
          },
          "init": null,
          "definite": false,
          "start": 134,
          "end": 140
        }
      ],
      "declare": true,
      "start": 122,
      "end": 141
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 147
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "$",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 151
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "extend",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 158
              },
              "optional": false,
              "computed": false,
              "start": 150,
              "end": 158
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 165,
                      "end": 169
                    },
                    "value": {
                      "type": "Literal",
                      "value": "GET",
                      "raw": "\"GET\"",
                      "start": 171,
                      "end": 176
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 165,
                    "end": 176
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 183,
                      "end": 187
                    },
                    "value": {
                      "type": "Literal",
                      "value": "data",
                      "raw": "\"data\"",
                      "start": 189,
                      "end": 195
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 183,
                    "end": 195
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "success",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 202,
                      "end": 209
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "wrapSuccessCallback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 211,
                        "end": 230
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "requestContext",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 231,
                          "end": 245
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "callback",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 247,
                          "end": 255
                        }
                      ],
                      "optional": false,
                      "start": 211,
                      "end": 256
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 202,
                    "end": 256
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 268
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "wrapErrorCallback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 270,
                        "end": 287
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "requestContext",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 288,
                          "end": 302
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "errorCallback",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 304,
                          "end": 317
                        }
                      ],
                      "optional": false,
                      "start": 270,
                      "end": 318
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 263,
                    "end": 318
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dataType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 333
                    },
                    "value": {
                      "type": "Literal",
                      "value": "json",
                      "raw": "\"json\"",
                      "start": 335,
                      "end": 341
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 325,
                    "end": 341
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "converters",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 348,
                      "end": 358
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Literal",
                            "value": "text json",
                            "raw": "\"text json\"",
                            "start": 362,
                            "end": 373
                          },
                          "value": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 375,
                            "end": 377
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 362,
                          "end": 377
                        }
                      ],
                      "start": 360,
                      "end": 379
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 348,
                    "end": 379
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "traditional",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 385,
                      "end": 396
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 398,
                      "end": 402
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 385,
                    "end": 402
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "timeout",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 409,
                      "end": 416
                    },
                    "value": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 418,
                      "end": 420
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 409,
                    "end": 420
                  }
                ],
                "start": 159,
                "end": 427
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 429,
                "end": 431
              }
            ],
            "optional": false,
            "start": 150,
            "end": 432
          },
          "definite": false,
          "start": 146,
          "end": 432
        }
      ],
      "declare": false,
      "start": 142,
      "end": 433
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 433
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
    "value": "Foo",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "extend",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 40,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "objs",
    "start": 43,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 49,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "extend",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "deep",
    "start": 74,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 80,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 100,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "objs",
    "start": 103,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 109,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 122,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 130,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "$",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 142,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "$",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "extend",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 165,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "String",
    "value": "\"GET\"",
    "start": 171,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 183,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "String",
    "value": "\"data\"",
    "start": 189,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 202,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "wrapSuccessCallback",
    "start": 211,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "requestContext",
    "start": 231,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 247,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 263,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "wrapErrorCallback",
    "start": 270,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "requestContext",
    "start": 288,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "errorCallback",
    "start": 304,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "dataType",
    "start": 325,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 335,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "converters",
    "start": 348,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "String",
    "value": "\"text json\"",
    "start": 362,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 375,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "traditional",
    "start": 385,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 398,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "timeout",
    "start": 409,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 418,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 427,
    "end": 428
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 429,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  }
]
```
