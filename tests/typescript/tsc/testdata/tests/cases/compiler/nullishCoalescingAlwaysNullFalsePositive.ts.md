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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 148,
                "end": 155
              },
              "start": 146,
              "end": 155
            },
            "start": 145,
            "end": 155
          },
          "init": null,
          "definite": false,
          "start": 145,
          "end": 155
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 160,
                "end": 167
              },
              "start": 158,
              "end": 167
            },
            "start": 157,
            "end": 167
          },
          "init": null,
          "definite": false,
          "start": 157,
          "end": 167
        }
      ],
      "declare": true,
      "start": 133,
      "end": 168
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 176
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 181
              },
              "consequent": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 184,
                  "end": 185
                },
                "operator": "??",
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 189,
                  "end": 193
                },
                "start": 184,
                "end": 193
              },
              "alternate": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 196,
                "end": 200
              },
              "start": 180,
              "end": 200
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 205,
              "end": 206
            },
            "start": 179,
            "end": 206
          },
          "definite": false,
          "start": 175,
          "end": 206
        }
      ],
      "declare": false,
      "start": 169,
      "end": 207
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 224,
                    "end": 230
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 233,
                    "end": 237
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 240,
                    "end": 249
                  }
                ],
                "start": 224,
                "end": 249
              },
              "start": 222,
              "end": 249
            },
            "start": 221,
            "end": 249
          },
          "init": null,
          "definite": false,
          "start": 221,
          "end": 249
        }
      ],
      "declare": true,
      "start": 209,
      "end": 250
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
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 258
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 262,
                "end": 263
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 268,
                "end": 272
              },
              "start": 262,
              "end": 272
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 277,
              "end": 278
            },
            "start": 261,
            "end": 278
          },
          "definite": false,
          "start": 257,
          "end": 278
        }
      ],
      "declare": false,
      "start": 251,
      "end": 279
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 133,
  "end": 279
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 133,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 141,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 148,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Identifier",
    "value": "unknown",
    "start": 160,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 169,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 186,
    "end": 188
  },
  {
    "type": "Null",
    "value": "null",
    "start": 189,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Null",
    "value": "null",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 202,
    "end": 204
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 209,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 217,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 224,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 231,
    "end": 232
  },
  {
    "type": "Null",
    "value": "null",
    "start": 233,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 240,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 251,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 264,
    "end": 267
  },
  {
    "type": "Null",
    "value": "null",
    "start": 268,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 274,
    "end": 276
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  }
]
```
