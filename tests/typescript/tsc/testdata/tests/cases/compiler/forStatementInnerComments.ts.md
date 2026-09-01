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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 13
        }
      ],
      "declare": true,
      "start": 0,
      "end": 14
    },
    {
      "type": "ForInStatement",
      "left": {
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
              "start": 49,
              "end": 50
            },
            "init": null,
            "definite": false,
            "start": 49,
            "end": 50
          }
        ],
        "declare": false,
        "start": 39,
        "end": 50
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 67
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 81,
        "end": 83
      },
      "start": 21,
      "end": 83
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 119
            },
            "init": null,
            "definite": false,
            "start": 118,
            "end": 119
          }
        ],
        "declare": false,
        "start": 108,
        "end": 119
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 136
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 150,
        "end": 152
      },
      "start": 90,
      "end": 152
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 177,
        "end": 178
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 195
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 209,
        "end": 211
      },
      "start": 159,
      "end": 211
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "Identifier",
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 237
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 253,
        "end": 254
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 268,
        "end": 270
      },
      "start": 218,
      "end": 270
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 295,
        "end": 296
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 312
      },
      "update": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 328,
        "end": 329
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 343,
        "end": 345
      },
      "start": 277,
      "end": 345
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 345
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
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 21,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 39,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 57,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 90,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 108,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 126,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 185,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 218,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 244,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 277,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  }
]
```
