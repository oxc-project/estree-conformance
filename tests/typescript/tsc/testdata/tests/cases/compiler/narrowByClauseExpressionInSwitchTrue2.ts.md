__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 74,
                      "end": 77
                    },
                    "start": 74,
                    "end": 77
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 80,
                      "end": 83
                    },
                    "start": 80,
                    "end": 83
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "'c'",
                      "start": 86,
                      "end": 89
                    },
                    "start": 86,
                    "end": 89
                  }
                ],
                "start": 74,
                "end": 89
              },
              "start": 72,
              "end": 89
            },
            "start": 71,
            "end": 89
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 89
        }
      ],
      "declare": true,
      "start": 57,
      "end": 90
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 99,
        "end": 103
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 122,
              "end": 125
            },
            "start": 116,
            "end": 125
          },
          "consequent": [],
          "start": 111,
          "end": 126
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 137
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "b",
              "raw": "'b'",
              "start": 142,
              "end": 145
            },
            "start": 136,
            "end": 145
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 156
              },
              "directive": null,
              "start": 155,
              "end": 157
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 166,
              "end": 171
            }
          ],
          "start": 131,
          "end": 171
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 194
              },
              "directive": null,
              "start": 193,
              "end": 195
            }
          ],
          "start": 176,
          "end": 195
        }
      ],
      "start": 92,
      "end": 197
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 199,
        "end": 200
      },
      "directive": null,
      "start": 199,
      "end": 201
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 210,
        "end": 214
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 228
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 233,
              "end": 236
            },
            "start": 227,
            "end": 236
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 247
              },
              "directive": null,
              "start": 246,
              "end": 248
            }
          ],
          "start": 222,
          "end": 248
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 259
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "b",
              "raw": "'b'",
              "start": 264,
              "end": 267
            },
            "start": 258,
            "end": 267
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 277,
                "end": 278
              },
              "directive": null,
              "start": 277,
              "end": 279
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 288,
              "end": 293
            }
          ],
          "start": 253,
          "end": 293
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 316
              },
              "directive": null,
              "start": 315,
              "end": 317
            }
          ],
          "start": 298,
          "end": 317
        }
      ],
      "start": 203,
      "end": 319
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 321,
        "end": 322
      },
      "directive": null,
      "start": 321,
      "end": 323
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 323
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 57,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 74,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 78,
    "end": 79
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 84,
    "end": 85
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 86,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 92,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 99,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 111,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 118,
    "end": 121
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 131,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 138,
    "end": 141
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 142,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 166,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 176,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 203,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 210,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 222,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 229,
    "end": 232
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 233,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 253,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 260,
    "end": 263
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 264,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 288,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 298,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  }
]
```
