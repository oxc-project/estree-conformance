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
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 57,
                    "end": 63
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 66,
                      "end": 73
                    },
                    "start": 66,
                    "end": 73
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "world",
                      "raw": "\"world\"",
                      "start": 76,
                      "end": 83
                    },
                    "start": 76,
                    "end": 83
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 86,
                      "end": 90
                    },
                    "start": 86,
                    "end": 90
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 93,
                      "end": 98
                    },
                    "start": 93,
                    "end": 98
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 101,
                      "end": 107
                    },
                    "start": 101,
                    "end": 109
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 112,
                      "end": 118
                    },
                    "start": 112,
                    "end": 120
                  }
                ],
                "start": 57,
                "end": 120
              },
              "start": 55,
              "end": 120
            },
            "start": 51,
            "end": 120
          },
          "init": null,
          "definite": false,
          "start": 51,
          "end": 120
        }
      ],
      "declare": false,
      "start": 47,
      "end": 121
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
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 131
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 143
          },
          "optional": false,
          "computed": false,
          "start": 127,
          "end": 143
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Number",
          "optional": false,
          "typeAnnotation": null,
          "start": 148,
          "end": 154
        },
        "start": 127,
        "end": 154
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 166
            },
            "directive": null,
            "start": 162,
            "end": 167
          }
        ],
        "start": 156,
        "end": 179
      },
      "alternate": null,
      "start": 123,
      "end": 179
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
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 189
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 201
          },
          "optional": false,
          "computed": false,
          "start": 185,
          "end": 201
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "String",
          "optional": false,
          "typeAnnotation": null,
          "start": 206,
          "end": 212
        },
        "start": 185,
        "end": 212
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 224
            },
            "directive": null,
            "start": 220,
            "end": 225
          }
        ],
        "start": 214,
        "end": 248
      },
      "alternate": null,
      "start": 181,
      "end": 248
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
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 254,
            "end": 258
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 270
          },
          "optional": false,
          "computed": false,
          "start": 254,
          "end": 270
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boolean",
          "optional": false,
          "typeAnnotation": null,
          "start": 275,
          "end": 282
        },
        "start": 254,
        "end": 282
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 290,
              "end": 294
            },
            "directive": null,
            "start": 290,
            "end": 295
          }
        ],
        "start": 284,
        "end": 308
      },
      "alternate": null,
      "start": 250,
      "end": 308
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
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 318
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 319,
            "end": 330
          },
          "optional": false,
          "computed": false,
          "start": 314,
          "end": 330
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null,
          "start": 335,
          "end": 340
        },
        "start": 314,
        "end": 340
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 352
            },
            "directive": null,
            "start": 348,
            "end": 353
          }
        ],
        "start": 342,
        "end": 378
      },
      "alternate": null,
      "start": 310,
      "end": 378
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 47,
  "end": 378
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 47,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 51,
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
    "value": "number",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 64,
    "end": 65
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 74,
    "end": 75
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 76,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 84,
    "end": 85
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 91,
    "end": 92
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 93,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 112,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 123,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 127,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 132,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 144,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 162,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 181,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 185,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 190,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 202,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 206,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 220,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 250,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 254,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 259,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 271,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "Boolean",
    "start": 275,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 290,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 310,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 314,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 319,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 331,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 335,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 348,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378
  }
]
```
