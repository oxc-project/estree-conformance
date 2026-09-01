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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "hello",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 36
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "brave",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 43
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "newish",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 51
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "world",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 58
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 59
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "Hello",
                "raw": "\"Hello\"",
                "start": 63,
                "end": 70
              },
              {
                "type": "Literal",
                "value": "Brave",
                "raw": "\"Brave\"",
                "start": 72,
                "end": 79
              },
              {
                "type": "Literal",
                "value": "New",
                "raw": "\"New\"",
                "start": 81,
                "end": 86
              },
              {
                "type": "Literal",
                "value": "World",
                "raw": "\"World\"",
                "start": 88,
                "end": 95
              }
            ],
            "start": 62,
            "end": 96
          },
          "definite": false,
          "start": 30,
          "end": 96
        }
      ],
      "declare": false,
      "start": 26,
      "end": 97
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RexOrRaptor",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 115
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "t-rex",
              "raw": "\"t-rex\"",
              "start": 118,
              "end": 125
            },
            "start": 118,
            "end": 125
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "raptor",
              "raw": "\"raptor\"",
              "start": 128,
              "end": 136
            },
            "start": 128,
            "end": 136
          }
        ],
        "start": 118,
        "end": 136
      },
      "declare": false,
      "start": 99,
      "end": 136
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "im",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 144
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 147
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "dinosaur",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 157
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "I'm",
                      "raw": "\"I'm\"",
                      "start": 161,
                      "end": 166
                    },
                    "start": 161,
                    "end": 166
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 168,
                      "end": 171
                    },
                    "start": 168,
                    "end": 171
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RexOrRaptor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 184
                    },
                    "typeArguments": null,
                    "start": 173,
                    "end": 184
                  }
                ],
                "start": 160,
                "end": 185
              },
              "start": 158,
              "end": 185
            },
            "start": 141,
            "end": 185
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "I'm",
                "raw": "'I\\'m'",
                "start": 189,
                "end": 195
              },
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 197,
                "end": 200
              },
              {
                "type": "Literal",
                "value": "t-rex",
                "raw": "'t-rex'",
                "start": 202,
                "end": 209
              }
            ],
            "start": 188,
            "end": 210
          },
          "definite": false,
          "start": 141,
          "end": 210
        }
      ],
      "declare": false,
      "start": 137,
      "end": 211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "rawr",
          "optional": false,
          "typeAnnotation": null,
          "start": 213,
          "end": 217
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "dinosaur",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 226
          }
        ],
        "optional": false,
        "start": 213,
        "end": 227
      },
      "directive": null,
      "start": 213,
      "end": 228
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rawr",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 243
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "dino",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RexOrRaptor",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 261
              },
              "typeArguments": null,
              "start": 250,
              "end": 261
            },
            "start": 248,
            "end": 261
          },
          "start": 244,
          "end": 261
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "dino",
                "optional": false,
                "typeAnnotation": null,
                "start": 273,
                "end": 277
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "t-rex",
                "raw": "\"t-rex\"",
                "start": 282,
                "end": 289
              },
              "start": 273,
              "end": 289
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "ROAAAAR!",
                    "raw": "\"ROAAAAR!\"",
                    "start": 308,
                    "end": 318
                  },
                  "start": 301,
                  "end": 319
                }
              ],
              "start": 291,
              "end": 325
            },
            "alternate": null,
            "start": 269,
            "end": 325
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "dino",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 338
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "raptor",
                "raw": "\"raptor\"",
                "start": 343,
                "end": 351
              },
              "start": 334,
              "end": 351
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "yip yip!",
                    "raw": "\"yip yip!\"",
                    "start": 370,
                    "end": 380
                  },
                  "start": 363,
                  "end": 381
                }
              ],
              "start": 353,
              "end": 387
            },
            "alternate": null,
            "start": 330,
            "end": 387
          },
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "Unexpected ",
                "raw": "\"Unexpected \"",
                "start": 399,
                "end": 412
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "dino",
                "optional": false,
                "typeAnnotation": null,
                "start": 415,
                "end": 419
              },
              "start": 399,
              "end": 419
            },
            "start": 393,
            "end": 420
          }
        ],
        "start": 263,
        "end": 422
      },
      "expression": false,
      "start": 230,
      "end": 422
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 26,
  "end": 422
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 26,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "hello",
    "start": 31,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "brave",
    "start": 38,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "newish",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "world",
    "start": 53,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 62,
    "end": 63
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 63,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71
  },
  {
    "type": "String",
    "value": "\"Brave\"",
    "start": 72,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 79,
    "end": 80
  },
  {
    "type": "String",
    "value": "\"New\"",
    "start": 81,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 86,
    "end": 87
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 99,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "RexOrRaptor",
    "start": 104,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 116,
    "end": 117
  },
  {
    "type": "String",
    "value": "\"t-rex\"",
    "start": 118,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 126,
    "end": 127
  },
  {
    "type": "String",
    "value": "\"raptor\"",
    "start": 128,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "im",
    "start": 142,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "dinosaur",
    "start": 149,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 160,
    "end": 161
  },
  {
    "type": "String",
    "value": "\"I'm\"",
    "start": 161,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 166,
    "end": 167
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 168,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "RexOrRaptor",
    "start": 173,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 188,
    "end": 189
  },
  {
    "type": "String",
    "value": "'I\\'m'",
    "start": 189,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 195,
    "end": 196
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 197,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 200,
    "end": 201
  },
  {
    "type": "String",
    "value": "'t-rex'",
    "start": 202,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "rawr",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "dinosaur",
    "start": 218,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 230,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "rawr",
    "start": 239,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "dino",
    "start": 244,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "RexOrRaptor",
    "start": 250,
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
    "value": "if",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "dino",
    "start": 273,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 278,
    "end": 281
  },
  {
    "type": "String",
    "value": "\"t-rex\"",
    "start": 282,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 301,
    "end": 307
  },
  {
    "type": "String",
    "value": "\"ROAAAAR!\"",
    "start": 308,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 330,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "dino",
    "start": 334,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 339,
    "end": 342
  },
  {
    "type": "String",
    "value": "\"raptor\"",
    "start": 343,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 363,
    "end": 369
  },
  {
    "type": "String",
    "value": "\"yip yip!\"",
    "start": 370,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 393,
    "end": 398
  },
  {
    "type": "String",
    "value": "\"Unexpected \"",
    "start": 399,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "dino",
    "start": 415,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 421,
    "end": 422
  }
]
```
