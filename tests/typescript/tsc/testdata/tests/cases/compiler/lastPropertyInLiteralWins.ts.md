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
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
              "name": "thunk",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 27
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
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 35,
                        "end": 41
                      },
                      "start": 33,
                      "end": 41
                    },
                    "start": 30,
                    "end": 41
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 46,
                    "end": 50
                  },
                  "start": 43,
                  "end": 50
                },
                "start": 29,
                "end": 50
              },
              "start": 27,
              "end": 50
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 51
          }
        ],
        "start": 16,
        "end": 53
      },
      "declare": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 67
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 80
              },
              "typeArguments": null,
              "start": 75,
              "end": 80
            },
            "start": 73,
            "end": 80
          },
          "start": 68,
          "end": 80
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 93
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thunk",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 99
                },
                "optional": false,
                "computed": false,
                "start": 88,
                "end": 99
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "str",
                  "raw": "\"str\"",
                  "start": 100,
                  "end": 105
                }
              ],
              "optional": false,
              "start": 88,
              "end": 106
            },
            "directive": null,
            "start": 88,
            "end": 107
          }
        ],
        "start": 82,
        "end": 109
      },
      "expression": false,
      "start": 54,
      "end": 109
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 110,
          "end": 114
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
                  "name": "thunk",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 179
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
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 187,
                          "end": 193
                        },
                        "start": 185,
                        "end": 193
                      },
                      "start": 182,
                      "end": 193
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 198,
                    "end": 200
                  },
                  "id": null,
                  "generator": false,
                  "start": 181,
                  "end": 200
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 174,
                "end": 200
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thunk",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 211
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
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 219,
                          "end": 225
                        },
                        "start": 217,
                        "end": 225
                      },
                      "start": 214,
                      "end": 225
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 230,
                    "end": 232
                  },
                  "id": null,
                  "generator": false,
                  "start": 213,
                  "end": 232
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 206,
                "end": 232
              }
            ],
            "start": 115,
            "end": 234
          }
        ],
        "optional": false,
        "start": 110,
        "end": 235
      },
      "directive": null,
      "start": 110,
      "end": 236
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 238,
          "end": 242
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
                  "name": "thunk",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 304
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
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 312,
                          "end": 318
                        },
                        "start": 310,
                        "end": 318
                      },
                      "start": 307,
                      "end": 318
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 323,
                    "end": 325
                  },
                  "id": null,
                  "generator": false,
                  "start": 306,
                  "end": 325
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 299,
                "end": 325
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thunk",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 331,
                  "end": 336
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
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 344,
                          "end": 350
                        },
                        "start": 342,
                        "end": 350
                      },
                      "start": 339,
                      "end": 350
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 355,
                    "end": 357
                  },
                  "id": null,
                  "generator": false,
                  "start": 338,
                  "end": 357
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 331,
                "end": 357
              }
            ],
            "start": 243,
            "end": 359
          }
        ],
        "optional": false,
        "start": 238,
        "end": 360
      },
      "directive": null,
      "start": 238,
      "end": 361
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 361
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
    "value": "Thing",
    "start": 10,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "thunk",
    "start": 22,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 43,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 54,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 63,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 68,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 75,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 88,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "thunk",
    "start": 94,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 100,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 110,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "thunk",
    "start": 174,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 182,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 195,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "thunk",
    "start": 206,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 214,
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
    "value": "number",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 227,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "thunk",
    "start": 299,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 307,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 312,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 320,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "thunk",
    "start": 331,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 339,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 344,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 352,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  }
]
```
