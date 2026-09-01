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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 7,
                    "end": 13
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 14,
                    "end": 20
                  }
                ],
                "start": 7,
                "end": 20
              },
              "start": 5,
              "end": 20
            },
            "start": 4,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 21
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 29
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 40
                  },
                  "prefix": true,
                  "start": 32,
                  "end": 40
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 45,
                  "end": 53
                },
                "start": 32,
                "end": 53
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 65
                  },
                  "prefix": true,
                  "start": 57,
                  "end": 65
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 70,
                  "end": 78
                },
                "start": 57,
                "end": 78
              },
              "start": 32,
              "end": 78
            },
            "consequent": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 82
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "substr",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 89
              },
              "optional": false,
              "computed": false,
              "start": 81,
              "end": 89
            },
            "alternate": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 93
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 101
              },
              "optional": false,
              "computed": false,
              "start": 92,
              "end": 101
            },
            "start": 32,
            "end": 101
          },
          "definite": false,
          "start": 27,
          "end": 101
        }
      ],
      "declare": false,
      "start": 23,
      "end": 102
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
            "start": 108,
            "end": 110
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 123
                    },
                    "prefix": true,
                    "start": 115,
                    "end": 123
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 128,
                    "end": 136
                  },
                  "start": 115,
                  "end": 136
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 147,
                      "end": 148
                    },
                    "prefix": true,
                    "start": 140,
                    "end": 148
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 153,
                    "end": 161
                  },
                  "start": 140,
                  "end": 161
                },
                "start": 115,
                "end": 161
              },
              "prefix": true,
              "start": 113,
              "end": 162
            },
            "consequent": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 166
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 174
              },
              "optional": false,
              "computed": false,
              "start": 165,
              "end": 174
            },
            "alternate": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 178
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "substr",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 185
              },
              "optional": false,
              "computed": false,
              "start": 177,
              "end": 185
            },
            "start": 113,
            "end": 185
          },
          "definite": false,
          "start": 108,
          "end": 185
        }
      ],
      "declare": false,
      "start": 104,
      "end": 186
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
            "start": 192,
            "end": 194
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 204,
                    "end": 205
                  },
                  "prefix": true,
                  "start": 197,
                  "end": 205
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 210,
                  "end": 218
                },
                "start": 197,
                "end": 218
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 229,
                    "end": 230
                  },
                  "prefix": true,
                  "start": 222,
                  "end": 230
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 235,
                  "end": 243
                },
                "start": 222,
                "end": 243
              },
              "start": 197,
              "end": 243
            },
            "consequent": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 247
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "substr",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 254
              },
              "optional": false,
              "computed": false,
              "start": 246,
              "end": 254
            },
            "alternate": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 258
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 266
              },
              "optional": false,
              "computed": false,
              "start": 257,
              "end": 266
            },
            "start": 197,
            "end": 266
          },
          "definite": false,
          "start": 192,
          "end": 266
        }
      ],
      "declare": false,
      "start": 188,
      "end": 267
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 275
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 287,
                      "end": 288
                    },
                    "prefix": true,
                    "start": 280,
                    "end": 288
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 293,
                    "end": 301
                  },
                  "start": 280,
                  "end": 301
                },
                "operator": "||",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 312,
                      "end": 313
                    },
                    "prefix": true,
                    "start": 305,
                    "end": 313
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 318,
                    "end": 326
                  },
                  "start": 305,
                  "end": 326
                },
                "start": 280,
                "end": 326
              },
              "prefix": true,
              "start": 278,
              "end": 327
            },
            "consequent": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 330,
                "end": 331
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 339
              },
              "optional": false,
              "computed": false,
              "start": 330,
              "end": 339
            },
            "alternate": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 342,
                "end": 343
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "substr",
                "optional": false,
                "typeAnnotation": null,
                "start": 344,
                "end": 350
              },
              "optional": false,
              "computed": false,
              "start": 342,
              "end": 350
            },
            "start": 278,
            "end": 350
          },
          "definite": false,
          "start": 273,
          "end": 350
        }
      ],
      "declare": false,
      "start": 269,
      "end": 351
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 351
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
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 14,
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
    "value": "var",
    "start": 23,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 27,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 32,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 41,
    "end": 44
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 45,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 54,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 57,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 66,
    "end": 69
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 70,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "substr",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 94,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 104,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 115,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 124,
    "end": 127
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 128,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 137,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 140,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 149,
    "end": 152
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 153,
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
    "value": "?",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 167,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "substr",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 188,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 197,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 206,
    "end": 209
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 210,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 219,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 222,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 231,
    "end": 234
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 235,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "substr",
    "start": 248,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 257,
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
    "value": "toFixed",
    "start": 259,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 269,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 273,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 280,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 289,
    "end": 292
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 293,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 302,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 305,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 314,
    "end": 317
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 318,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 332,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "substr",
    "start": 344,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  }
]
```
