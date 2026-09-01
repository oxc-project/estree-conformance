__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 21,
                  "end": 25
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "circle",
                      "raw": "\"circle\"",
                      "start": 27,
                      "end": 35
                    },
                    "start": 27,
                    "end": 35
                  },
                  "start": 25,
                  "end": 35
                },
                "accessibility": null,
                "static": false,
                "start": 21,
                "end": 36
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "radius",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 43
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 45,
                    "end": 51
                  },
                  "start": 43,
                  "end": 51
                },
                "accessibility": null,
                "static": false,
                "start": 37,
                "end": 51
              }
            ],
            "start": 19,
            "end": 53
          },
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 66
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "square",
                      "raw": "\"square\"",
                      "start": 68,
                      "end": 76
                    },
                    "start": 68,
                    "end": 76
                  },
                  "start": 66,
                  "end": 76
                },
                "accessibility": null,
                "static": false,
                "start": 62,
                "end": 77
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sideLength",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 88
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 90,
                    "end": 96
                  },
                  "start": 88,
                  "end": 96
                },
                "accessibility": null,
                "static": false,
                "start": 78,
                "end": 96
              }
            ],
            "start": 60,
            "end": 98
          }
        ],
        "start": 17,
        "end": 98
      },
      "declare": false,
      "start": 0,
      "end": 98
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wat",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 112
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 125
              },
              "typeArguments": null,
              "start": 120,
              "end": 125
            },
            "start": 118,
            "end": 125
          },
          "start": 113,
          "end": 125
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 141,
              "end": 145
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 162,
                      "end": 167
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 168,
                      "end": 172
                    },
                    "optional": false,
                    "computed": false,
                    "start": 162,
                    "end": 172
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "circle",
                    "raw": "\"circle\"",
                    "start": 177,
                    "end": 185
                  },
                  "start": 162,
                  "end": 185
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 206,
                          "end": 210
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PI",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 211,
                          "end": 213
                        },
                        "optional": false,
                        "computed": false,
                        "start": 206,
                        "end": 213
                      },
                      "operator": "*",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "shape",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 216,
                            "end": 221
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "radius",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 222,
                            "end": 228
                          },
                          "optional": false,
                          "computed": false,
                          "start": 216,
                          "end": 228
                        },
                        "operator": "**",
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 232,
                          "end": 233
                        },
                        "start": 216,
                        "end": 233
                      },
                      "start": 206,
                      "end": 233
                    },
                    "start": 199,
                    "end": 234
                  }
                ],
                "start": 157,
                "end": 234
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 253
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 254,
                      "end": 258
                    },
                    "optional": false,
                    "computed": false,
                    "start": 248,
                    "end": 258
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "circle",
                    "raw": "\"circle\"",
                    "start": 263,
                    "end": 271
                  },
                  "start": 248,
                  "end": 271
                },
                "consequent": [],
                "start": 243,
                "end": 272
              }
            ],
            "start": 133,
            "end": 294
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 309
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 314
                },
                "optional": false,
                "computed": false,
                "start": 304,
                "end": 314
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "circle",
                "raw": "\"circle\"",
                "start": 319,
                "end": 327
              },
              "start": 304,
              "end": 327
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 346,
                        "end": 350
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PI",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 351,
                        "end": 353
                      },
                      "optional": false,
                      "computed": false,
                      "start": 346,
                      "end": 353
                    },
                    "operator": "*",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "shape",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 356,
                          "end": 361
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "radius",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 362,
                          "end": 368
                        },
                        "optional": false,
                        "computed": false,
                        "start": 356,
                        "end": 368
                      },
                      "operator": "**",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 372,
                        "end": 373
                      },
                      "start": 356,
                      "end": 373
                    },
                    "start": 346,
                    "end": 373
                  },
                  "start": 339,
                  "end": 374
                }
              ],
              "start": 329,
              "end": 380
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "shape",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 394,
                    "end": 399
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 400,
                    "end": 404
                  },
                  "optional": false,
                  "computed": false,
                  "start": 394,
                  "end": 404
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "\"circle\"",
                  "start": 409,
                  "end": 417
                },
                "start": 394,
                "end": 417
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [],
                "start": 419,
                "end": 509
              },
              "alternate": null,
              "start": 390,
              "end": 509
            },
            "start": 300,
            "end": 509
          }
        ],
        "start": 127,
        "end": 511
      },
      "expression": false,
      "start": 100,
      "end": 511
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 511
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 5,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 21,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 27,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "String",
    "value": "\"square\"",
    "start": 68,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "sideLength",
    "start": 78,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 100,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "wat",
    "start": 109,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 113,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 120,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 141,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 157,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 162,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 168,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 173,
    "end": 176
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 177,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 199,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 206,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "PI",
    "start": 211,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 216,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 222,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 229,
    "end": 231
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 243,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 248,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 254,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 259,
    "end": 262
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 263,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 300,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 304,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 315,
    "end": 318
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 319,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 339,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 346,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "PI",
    "start": 351,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 356,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 362,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 369,
    "end": 371
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 385,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 390,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 394,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 400,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 405,
    "end": 408
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 409,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 510,
    "end": 511
  }
]
```
