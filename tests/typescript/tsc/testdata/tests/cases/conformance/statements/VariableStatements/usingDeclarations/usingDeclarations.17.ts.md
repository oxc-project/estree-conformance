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
              "kind": "using",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d20",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 51,
                    "end": 54
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
                            "start": 60,
                            "end": 66
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dispose",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 67,
                            "end": 74
                          },
                          "optional": false,
                          "computed": false,
                          "start": 60,
                          "end": 74
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
                            "start": 78,
                            "end": 80
                          },
                          "expression": false,
                          "start": 75,
                          "end": 80
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 59,
                        "end": 80
                      }
                    ],
                    "start": 57,
                    "end": 82
                  },
                  "definite": false,
                  "start": 51,
                  "end": 82
                }
              ],
              "declare": false,
              "start": 45,
              "end": 83
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 92,
              "end": 98
            }
          ],
          "start": 29,
          "end": 98
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 109,
            "end": 110
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "using",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d21",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 126,
                    "end": 129
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
                            "start": 135,
                            "end": 141
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dispose",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 142,
                            "end": 149
                          },
                          "optional": false,
                          "computed": false,
                          "start": 135,
                          "end": 149
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
                            "start": 153,
                            "end": 155
                          },
                          "expression": false,
                          "start": 150,
                          "end": 155
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 134,
                        "end": 155
                      }
                    ],
                    "start": 132,
                    "end": 157
                  },
                  "definite": false,
                  "start": 126,
                  "end": 157
                }
              ],
              "declare": false,
              "start": 120,
              "end": 158
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 167,
              "end": 173
            }
          ],
          "start": 104,
          "end": 173
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "using",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d22",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 205
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
                            "start": 211,
                            "end": 217
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dispose",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 218,
                            "end": 225
                          },
                          "optional": false,
                          "computed": false,
                          "start": 211,
                          "end": 225
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
                            "start": 229,
                            "end": 231
                          },
                          "expression": false,
                          "start": 226,
                          "end": 231
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 210,
                        "end": 231
                      }
                    ],
                    "start": 208,
                    "end": 233
                  },
                  "definite": false,
                  "start": 202,
                  "end": 233
                }
              ],
              "declare": false,
              "start": 196,
              "end": 234
            }
          ],
          "start": 179,
          "end": 234
        }
      ],
      "start": 0,
      "end": 236
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 242,
        "end": 246
      },
      "consequent": {
        "type": "SwitchStatement",
        "discriminant": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 260,
          "end": 261
        },
        "cases": [
          {
            "type": "SwitchCase",
            "test": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 278,
              "end": 279
            },
            "consequent": [
              {
                "type": "VariableDeclaration",
                "kind": "using",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d23",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 302
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
                              "start": 308,
                              "end": 314
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dispose",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 315,
                              "end": 322
                            },
                            "optional": false,
                            "computed": false,
                            "start": 308,
                            "end": 322
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
                              "start": 326,
                              "end": 328
                            },
                            "expression": false,
                            "start": 323,
                            "end": 328
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 307,
                          "end": 328
                        }
                      ],
                      "start": 305,
                      "end": 330
                    },
                    "definite": false,
                    "start": 299,
                    "end": 330
                  }
                ],
                "declare": false,
                "start": 293,
                "end": 331
              },
              {
                "type": "BreakStatement",
                "label": null,
                "start": 344,
                "end": 350
              }
            ],
            "start": 273,
            "end": 350
          },
          {
            "type": "SwitchCase",
            "test": null,
            "consequent": [
              {
                "type": "VariableDeclaration",
                "kind": "using",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d24",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 387,
                      "end": 390
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
                              "start": 396,
                              "end": 402
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dispose",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 403,
                              "end": 410
                            },
                            "optional": false,
                            "computed": false,
                            "start": 396,
                            "end": 410
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
                              "start": 414,
                              "end": 416
                            },
                            "expression": false,
                            "start": 411,
                            "end": 416
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 395,
                          "end": 416
                        }
                      ],
                      "start": 393,
                      "end": 418
                    },
                    "definite": false,
                    "start": 387,
                    "end": 418
                  }
                ],
                "declare": false,
                "start": 381,
                "end": 419
              }
            ],
            "start": 360,
            "end": 419
          }
        ],
        "start": 252,
        "end": 425
      },
      "alternate": null,
      "start": 238,
      "end": 425
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 427,
      "end": 437
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 437
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
    "value": "using",
    "start": 45,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "d20",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 104,
    "end": 108
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 120,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "d21",
    "start": 126,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 142,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 167,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 179,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 196,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "d22",
    "start": 202,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 211,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 218,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 238,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 273,
    "end": 277
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "using",
    "start": 293,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "d23",
    "start": 299,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 308,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 315,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 344,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 360,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 381,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "d24",
    "start": 387,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 396,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 403,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 427,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  }
]
```
