__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 13
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 31
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
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
                  "start": 32,
                  "end": 41
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 31,
              "end": 43
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 20,
            "end": 43
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 59
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
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
                  "start": 60,
                  "end": 69
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 59,
              "end": 71
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 48,
            "end": 71
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 87
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 91,
                      "end": 94
                    },
                    "start": 89,
                    "end": 94
                  },
                  "start": 88,
                  "end": 94
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 96,
                "end": 103
              },
              "expression": false,
              "start": 87,
              "end": 103
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 76,
            "end": 103
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar1",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 112
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 115,
                "end": 150
              },
              "expression": false,
              "start": 112,
              "end": 150
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 108,
            "end": 150
          }
        ],
        "start": 14,
        "end": 152
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 152
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 163
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 179
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 197
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 201,
                      "end": 207
                    },
                    "start": 199,
                    "end": 207
                  },
                  "start": 198,
                  "end": 207
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 197,
              "end": 209
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 186,
            "end": 209
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 225
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 229,
                      "end": 235
                    },
                    "start": 227,
                    "end": 235
                  },
                  "start": 226,
                  "end": 235
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 225,
              "end": 237
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 214,
            "end": 237
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 253
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 256,
                      "end": 259
                    },
                    "start": 255,
                    "end": 259
                  },
                  "start": 254,
                  "end": 259
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 253,
              "end": 261
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 242,
            "end": 261
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 277
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 281,
                      "end": 284
                    },
                    "start": 279,
                    "end": 284
                  },
                  "start": 278,
                  "end": 284
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 290,
                      "end": 293
                    },
                    "start": 288,
                    "end": 293
                  },
                  "start": 286,
                  "end": 293
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
                        "type": "Super",
                        "start": 305,
                        "end": 310
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 311,
                          "end": 312
                        }
                      ],
                      "optional": false,
                      "start": 305,
                      "end": 313
                    },
                    "directive": null,
                    "start": 305,
                    "end": 314
                  }
                ],
                "start": 295,
                "end": 320
              },
              "expression": false,
              "start": 277,
              "end": 320
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 266,
            "end": 320
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar1",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 329
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 332,
                "end": 362
              },
              "expression": false,
              "start": 329,
              "end": 362
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 325,
            "end": 362
          }
        ],
        "start": 180,
        "end": 364
      },
      "abstract": false,
      "declare": false,
      "start": 154,
      "end": 364
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 372
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 382
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hey",
                "raw": "\"hey\"",
                "start": 383,
                "end": 388
              }
            ],
            "start": 375,
            "end": 389
          },
          "definite": false,
          "start": 370,
          "end": 389
        }
      ],
      "declare": false,
      "start": 366,
      "end": 390
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 395,
            "end": 397
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 407
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 408,
                "end": 409
              }
            ],
            "start": 400,
            "end": 410
          },
          "definite": false,
          "start": 395,
          "end": 410
        }
      ],
      "declare": false,
      "start": 391,
      "end": 411
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 416,
            "end": 418
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 425,
              "end": 428
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 429,
                "end": 431
              }
            ],
            "start": 421,
            "end": 432
          },
          "definite": false,
          "start": 416,
          "end": 432
        }
      ],
      "declare": false,
      "start": 412,
      "end": 433
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 438,
            "end": 440
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 447,
              "end": 450
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 452,
                    "end": 454
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 455,
                    "end": 457
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 458,
                    "end": 460
                  }
                ],
                "start": 451,
                "end": 461
              }
            ],
            "start": 443,
            "end": 462
          },
          "definite": false,
          "start": 438,
          "end": 462
        }
      ],
      "declare": false,
      "start": 434,
      "end": 463
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 465,
            "end": 467
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null,
            "start": 468,
            "end": 472
          },
          "optional": false,
          "computed": false,
          "start": 465,
          "end": 472
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 465,
        "end": 474
      },
      "directive": null,
      "start": 465,
      "end": 475
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 475
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "FooBase",
    "start": 6,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 20,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 32,
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
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 48,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 60,
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
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 76,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 91,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 154,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 160,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 164,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "FooBase",
    "start": 172,
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
    "value": "constructor",
    "start": 186,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 214,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 242,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 256,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 266,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 281,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 290,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 305,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 325,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 366,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 370,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 375,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 379,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 382,
    "end": 383
  },
  {
    "type": "String",
    "value": "\"hey\"",
    "start": 383,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 391,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 395,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 400,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 404,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 412,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 416,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 421,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 425,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "f1",
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
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 434,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 438,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 443,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 447,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 452,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 455,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 458,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 465,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 468,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  }
]
```
