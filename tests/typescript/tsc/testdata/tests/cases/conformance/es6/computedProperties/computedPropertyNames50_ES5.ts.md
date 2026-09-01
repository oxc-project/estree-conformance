__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
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
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14,
                  "end": 16
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 18,
                  "end": 20
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 14,
                "end": 20
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 33
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
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 50,
                            "end": 51
                          },
                          "operator": "==",
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 55,
                            "end": 56
                          },
                          "start": 50,
                          "end": 56
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 79,
                                "end": 81
                              },
                              "start": 72,
                              "end": 82
                            }
                          ],
                          "start": 58,
                          "end": 92
                        },
                        "alternate": null,
                        "start": 46,
                        "end": 92
                      }
                    ],
                    "start": 36,
                    "end": 98
                  },
                  "expression": false,
                  "start": 33,
                  "end": 98
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 26,
                "end": 98
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 109,
                    "end": 110
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 113,
                    "end": 114
                  },
                  "start": 109,
                  "end": 114
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
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 134,
                          "end": 136
                        },
                        "start": 128,
                        "end": 137
                      }
                    ],
                    "start": 118,
                    "end": 143
                  },
                  "expression": false,
                  "start": 115,
                  "end": 143
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 104,
                "end": 143
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 154,
                    "end": 155
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 158,
                    "end": 159
                  },
                  "start": 154,
                  "end": 159
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
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 201,
                          "end": 203
                        },
                        "start": 195,
                        "end": 204
                      }
                    ],
                    "start": 163,
                    "end": 210
                  },
                  "expression": false,
                  "start": 160,
                  "end": 210
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 149,
                "end": 210
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 221,
                    "end": 222
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 225,
                    "end": 226
                  },
                  "start": 221,
                  "end": 226
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
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 247,
                          "end": 249
                        },
                        "start": 240,
                        "end": 250
                      }
                    ],
                    "start": 230,
                    "end": 256
                  },
                  "expression": false,
                  "start": 227,
                  "end": 256
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 216,
                "end": 256
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 269
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
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 286,
                            "end": 287
                          },
                          "operator": "==",
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 291,
                            "end": 292
                          },
                          "start": 286,
                          "end": 292
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": 20,
                                "raw": "20",
                                "start": 315,
                                "end": 317
                              },
                              "start": 308,
                              "end": 318
                            }
                          ],
                          "start": 294,
                          "end": 328
                        },
                        "alternate": null,
                        "start": 282,
                        "end": 328
                      }
                    ],
                    "start": 272,
                    "end": 334
                  },
                  "expression": false,
                  "start": 269,
                  "end": 334
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 262,
                "end": 334
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 342
                },
                "value": {
                  "type": "Literal",
                  "value": 20,
                  "raw": "20",
                  "start": 344,
                  "end": 346
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 340,
                "end": 346
              }
            ],
            "start": 8,
            "end": 348
          },
          "definite": false,
          "start": 4,
          "end": 348
        }
      ],
      "declare": false,
      "start": 0,
      "end": 348
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 348
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 14,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 26,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 46,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 52,
    "end": 54
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 72,
    "end": 78
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 79,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "get",
    "start": 104,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 108,
    "end": 109
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 111,
    "end": 112
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 128,
    "end": 133
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 134,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 149,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 153,
    "end": 154
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 156,
    "end": 157
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 195,
    "end": 200
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 201,
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
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 216,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 220,
    "end": 221
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 223,
    "end": 224
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 240,
    "end": 246
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 247,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 262,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 266,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 282,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 288,
    "end": 290
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 308,
    "end": 314
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 315,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 340,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 344,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 347,
    "end": 348
  }
]
```
