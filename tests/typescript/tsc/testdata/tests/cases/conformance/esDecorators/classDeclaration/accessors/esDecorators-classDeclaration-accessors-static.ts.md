__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
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
            "name": "method3",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 36
          },
          "init": {
            "type": "Literal",
            "value": "method3",
            "raw": "\"method3\"",
            "start": 39,
            "end": 48
          },
          "definite": false,
          "start": 29,
          "end": 48
        }
      ],
      "declare": false,
      "start": 23,
      "end": 49
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 58
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 66,
                    "end": 69
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 11,
                      "raw": "11",
                      "start": 70,
                      "end": 72
                    }
                  ],
                  "optional": false,
                  "start": 66,
                  "end": 73
                },
                "start": 65,
                "end": 73
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 92
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
                      "value": 0,
                      "raw": "0",
                      "start": 104,
                      "end": 105
                    },
                    "start": 97,
                    "end": 106
                  }
                ],
                "start": 95,
                "end": 108
              },
              "expression": false,
              "start": 92,
              "end": 108
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 65,
            "end": 108
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 117
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 118,
                      "end": 120
                    }
                  ],
                  "optional": false,
                  "start": 114,
                  "end": 121
                },
                "start": 113,
                "end": 121
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 140
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 146
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 148,
                "end": 150
              },
              "expression": false,
              "start": 140,
              "end": 150
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 113,
            "end": 150
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 159
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 21,
                      "raw": "21",
                      "start": 160,
                      "end": 162
                    }
                  ],
                  "optional": false,
                  "start": 156,
                  "end": 163
                },
                "start": 155,
                "end": 163
              }
            ],
            "key": {
              "type": "Literal",
              "value": "method2",
              "raw": "\"method2\"",
              "start": 176,
              "end": 185
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
                      "value": 0,
                      "raw": "0",
                      "start": 198,
                      "end": 199
                    },
                    "start": 191,
                    "end": 200
                  }
                ],
                "start": 189,
                "end": 202
              },
              "expression": false,
              "start": 186,
              "end": 202
            },
            "kind": "get",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 155,
            "end": 202
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 208,
                    "end": 211
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 22,
                      "raw": "22",
                      "start": 212,
                      "end": 214
                    }
                  ],
                  "optional": false,
                  "start": 208,
                  "end": 215
                },
                "start": 207,
                "end": 215
              }
            ],
            "key": {
              "type": "Literal",
              "value": "method2",
              "raw": "\"method2\"",
              "start": 228,
              "end": 237
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 239,
                  "end": 244
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 246,
                "end": 248
              },
              "expression": false,
              "start": 238,
              "end": 248
            },
            "kind": "set",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 207,
            "end": 248
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 254,
                    "end": 257
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 31,
                      "raw": "31",
                      "start": 258,
                      "end": 260
                    }
                  ],
                  "optional": false,
                  "start": 254,
                  "end": 261
                },
                "start": 253,
                "end": 261
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 281
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
                      "value": 0,
                      "raw": "0",
                      "start": 294,
                      "end": 295
                    },
                    "start": 287,
                    "end": 296
                  }
                ],
                "start": 285,
                "end": 298
              },
              "expression": false,
              "start": 282,
              "end": 298
            },
            "kind": "get",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 253,
            "end": 298
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 307
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 32,
                      "raw": "32",
                      "start": 308,
                      "end": 310
                    }
                  ],
                  "optional": false,
                  "start": 304,
                  "end": 311
                },
                "start": 303,
                "end": 311
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 331
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 333,
                  "end": 338
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 340,
                "end": 342
              },
              "expression": false,
              "start": 332,
              "end": 342
            },
            "kind": "set",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 303,
            "end": 342
          }
        ],
        "start": 59,
        "end": 344
      },
      "abstract": false,
      "declare": false,
      "start": 51,
      "end": 344
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 344
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 23,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "method3",
    "start": 29,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "String",
    "value": "\"method3\"",
    "start": 39,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 66,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 70,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 74,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 81,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 85,
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
    "type": "Keyword",
    "value": "return",
    "start": 97,
    "end": 103
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 114,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 118,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 122,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 129,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 133,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 141,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 156,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 159,
    "end": 160
  },
  {
    "type": "Numeric",
    "value": "21",
    "start": 160,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 164,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 171,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 175,
    "end": 176
  },
  {
    "type": "String",
    "value": "\"method2\"",
    "start": 176,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 191,
    "end": 197
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 208,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Numeric",
    "value": "22",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 216,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 223,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 227,
    "end": 228
  },
  {
    "type": "String",
    "value": "\"method2\"",
    "start": 228,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 239,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 254,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Numeric",
    "value": "31",
    "start": 258,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 262,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 269,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "method3",
    "start": 274,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 287,
    "end": 293
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 304,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 307,
    "end": 308
  },
  {
    "type": "Numeric",
    "value": "32",
    "start": 308,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 312,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 319,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "method3",
    "start": 324,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 333,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 343,
    "end": 344
  }
]
```
