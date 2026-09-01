__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Math",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 12
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "random",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 19
          },
          "optional": false,
          "computed": false,
          "start": 8,
          "end": 19
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 8,
        "end": 21
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 34,
            "end": 35
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "await using",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d20",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 60
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Symbol",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 72,
                            "end": 78
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "asyncDispose",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 79,
                            "end": 91
                          },
                          "optional": false,
                          "computed": false,
                          "start": 72,
                          "end": 91
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": true,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 95,
                            "end": 97
                          },
                          "expression": false,
                          "start": 92,
                          "end": 97
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 65,
                        "end": 97
                      }
                    ],
                    "start": 63,
                    "end": 99
                  },
                  "definite": false,
                  "start": 57,
                  "end": 99
                }
              ],
              "declare": false,
              "start": 45,
              "end": 100
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 109,
              "end": 115
            }
          ],
          "start": 29,
          "end": 115
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 126,
            "end": 127
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "await using",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d21",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 152
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Symbol",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 164,
                            "end": 170
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "asyncDispose",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 171,
                            "end": 183
                          },
                          "optional": false,
                          "computed": false,
                          "start": 164,
                          "end": 183
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": true,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 187,
                            "end": 189
                          },
                          "expression": false,
                          "start": 184,
                          "end": 189
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 157,
                        "end": 189
                      }
                    ],
                    "start": 155,
                    "end": 191
                  },
                  "definite": false,
                  "start": 149,
                  "end": 191
                }
              ],
              "declare": false,
              "start": 137,
              "end": 192
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 201,
              "end": 207
            }
          ],
          "start": 121,
          "end": 207
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "await using",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d22",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 242,
                    "end": 245
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Symbol",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 257,
                            "end": 263
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "asyncDispose",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 264,
                            "end": 276
                          },
                          "optional": false,
                          "computed": false,
                          "start": 257,
                          "end": 276
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": true,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 280,
                            "end": 282
                          },
                          "expression": false,
                          "start": 277,
                          "end": 282
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 250,
                        "end": 282
                      }
                    ],
                    "start": 248,
                    "end": 284
                  },
                  "definite": false,
                  "start": 242,
                  "end": 284
                }
              ],
              "declare": false,
              "start": 230,
              "end": 285
            }
          ],
          "start": 213,
          "end": 285
        }
      ],
      "start": 0,
      "end": 287
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 293,
        "end": 297
      },
      "consequent": {
        "type": "SwitchStatement",
        "discriminant": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 311,
          "end": 312
        },
        "cases": [
          {
            "type": "SwitchCase",
            "test": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 329,
              "end": 330
            },
            "consequent": [
              {
                "type": "VariableDeclaration",
                "kind": "await using",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d23",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 356,
                      "end": 359
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 371,
                              "end": 377
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "asyncDispose",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 378,
                              "end": 390
                            },
                            "optional": false,
                            "computed": false,
                            "start": 371,
                            "end": 390
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": true,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 394,
                              "end": 396
                            },
                            "expression": false,
                            "start": 391,
                            "end": 396
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 364,
                          "end": 396
                        }
                      ],
                      "start": 362,
                      "end": 398
                    },
                    "definite": false,
                    "start": 356,
                    "end": 398
                  }
                ],
                "declare": false,
                "start": 344,
                "end": 399
              },
              {
                "type": "BreakStatement",
                "label": null,
                "start": 412,
                "end": 418
              }
            ],
            "start": 324,
            "end": 418
          },
          {
            "type": "SwitchCase",
            "test": null,
            "consequent": [
              {
                "type": "VariableDeclaration",
                "kind": "await using",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d24",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 461,
                      "end": 464
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 476,
                              "end": 482
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "asyncDispose",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 483,
                              "end": 495
                            },
                            "optional": false,
                            "computed": false,
                            "start": 476,
                            "end": 495
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": true,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 499,
                              "end": 501
                            },
                            "expression": false,
                            "start": 496,
                            "end": 501
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 469,
                          "end": 501
                        }
                      ],
                      "start": 467,
                      "end": 503
                    },
                    "definite": false,
                    "start": 461,
                    "end": 503
                  }
                ],
                "declare": false,
                "start": 449,
                "end": 504
              }
            ],
            "start": 428,
            "end": 504
          }
        ],
        "start": 303,
        "end": 510
      },
      "alternate": null,
      "start": 289,
      "end": 510
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 512,
      "end": 522
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 522
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "switch",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 8,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 13,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 29,
    "end": 33
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 34,
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
    "value": "await",
    "start": 45,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "d20",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 65,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "asyncDispose",
    "start": 79,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 109,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 121,
    "end": 125
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 137,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 143,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "d21",
    "start": 149,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "asyncDispose",
    "start": 171,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 201,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 213,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 230,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 236,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "d22",
    "start": 242,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 250,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 257,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "asyncDispose",
    "start": 264,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 289,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 293,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 303,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "{",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 324,
    "end": 328
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 344,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 350,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "d23",
    "start": 356,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 364,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 371,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "asyncDispose",
    "start": 378,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 412,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 428,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 449,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 455,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "d24",
    "start": 461,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 469,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 476,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "asyncDispose",
    "start": 483,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 512,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  }
]
```
