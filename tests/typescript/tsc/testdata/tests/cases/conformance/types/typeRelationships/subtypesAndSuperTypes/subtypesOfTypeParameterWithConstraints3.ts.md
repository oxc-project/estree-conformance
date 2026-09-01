__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 92
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 93,
              "end": 94
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 104
              },
              "typeArguments": null,
              "start": 103,
              "end": 104
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 93,
            "end": 104
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 106,
            "end": 107
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 110
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 109,
            "end": 110
          }
        ],
        "start": 92,
        "end": 111
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 115,
                "end": 116
              },
              "typeArguments": null,
              "start": 115,
              "end": 116
            },
            "start": 113,
            "end": 116
          },
          "start": 112,
          "end": 116
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 122
              },
              "typeArguments": null,
              "start": 121,
              "end": 122
            },
            "start": 119,
            "end": 122
          },
          "start": 118,
          "end": 122
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 128
              },
              "typeArguments": null,
              "start": 127,
              "end": 128
            },
            "start": 125,
            "end": 128
          },
          "start": 124,
          "end": 128
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 151
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 154,
                    "end": 158
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 162
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 166
                  },
                  "start": 154,
                  "end": 166
                },
                "definite": false,
                "start": 150,
                "end": 166
              }
            ],
            "declare": false,
            "start": 146,
            "end": 167
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 177
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 180,
                    "end": 184
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 187,
                    "end": 188
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 192
                  },
                  "start": 180,
                  "end": 192
                },
                "definite": false,
                "start": 176,
                "end": 192
              }
            ],
            "declare": false,
            "start": 172,
            "end": 193
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 215
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 218,
                    "end": 222
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 225,
                    "end": 226
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 229,
                    "end": 230
                  },
                  "start": 218,
                  "end": 230
                },
                "definite": false,
                "start": 213,
                "end": 230
              }
            ],
            "declare": false,
            "start": 209,
            "end": 231
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 242
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 245,
                    "end": 249
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 252,
                    "end": 253
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 256,
                    "end": 257
                  },
                  "start": 245,
                  "end": 257
                },
                "definite": false,
                "start": 240,
                "end": 257
              }
            ],
            "declare": false,
            "start": 236,
            "end": 258
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 280
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 283,
                    "end": 287
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 290,
                    "end": 291
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 294,
                    "end": 295
                  },
                  "start": 283,
                  "end": 295
                },
                "definite": false,
                "start": 278,
                "end": 295
              }
            ],
            "declare": false,
            "start": 274,
            "end": 296
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 307
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 310,
                    "end": 314
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 318
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 321,
                    "end": 322
                  },
                  "start": 310,
                  "end": 322
                },
                "definite": false,
                "start": 305,
                "end": 322
              }
            ],
            "declare": false,
            "start": 301,
            "end": 323
          }
        ],
        "start": 130,
        "end": 325
      },
      "expression": false,
      "start": 82,
      "end": 325
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 82,
  "end": 325
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 82,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 95,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 146,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 154,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 172,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 180,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 209,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 216,
    "end": 217
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 218,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 236,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 240,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 245,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 274,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 278,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 281,
    "end": 282
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 283,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "u",
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
    "type": "Keyword",
    "value": "var",
    "start": 301,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 305,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325
  }
]
```
