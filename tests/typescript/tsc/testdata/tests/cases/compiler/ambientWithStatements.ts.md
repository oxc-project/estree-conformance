__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "BreakStatement",
            "label": null,
            "start": 26,
            "end": 32
          },
          {
            "type": "ContinueStatement",
            "label": null,
            "start": 37,
            "end": 46
          },
          {
            "type": "DebuggerStatement",
            "start": 51,
            "end": 60
          },
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 68,
              "end": 71
            },
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 79,
              "end": 83
            },
            "start": 65,
            "end": 85
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 95
                },
                "init": null,
                "definite": false,
                "start": 94,
                "end": 95
              }
            ],
            "declare": false,
            "start": 90,
            "end": 96
          },
          {
            "type": "ForInStatement",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
            },
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 111,
              "end": 115
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 117,
              "end": 120
            },
            "start": 101,
            "end": 120
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 129,
              "end": 133
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 135,
              "end": 138
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [],
              "start": 144,
              "end": 147
            },
            "start": 125,
            "end": 147
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 152,
              "end": 153
            },
            "directive": null,
            "start": 152,
            "end": 154
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "body": {
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
                    "start": 166,
                    "end": 167
                  },
                  "init": null,
                  "definite": false,
                  "start": 166,
                  "end": 167
                }
              ],
              "declare": false,
              "start": 162,
              "end": 168
            },
            "start": 159,
            "end": 168
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 173,
            "end": 180
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 194
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 211,
                  "end": 212
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 226,
                    "end": 232
                  }
                ],
                "start": 206,
                "end": 232
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 262,
                    "end": 268
                  }
                ],
                "start": 241,
                "end": 268
              }
            ],
            "start": 185,
            "end": 274
          },
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "Literal",
              "value": "nooo",
              "raw": "\"nooo\"",
              "start": 285,
              "end": 291
            },
            "start": 279,
            "end": 292
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 301,
              "end": 308
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 321
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 323,
                "end": 330
              },
              "start": 313,
              "end": 330
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [],
              "start": 343,
              "end": 350
            },
            "start": 297,
            "end": 350
          },
          {
            "type": "WithStatement",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 362
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 364,
              "end": 371
            },
            "start": 355,
            "end": 371
          }
        ],
        "start": 20,
        "end": 373
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 373
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 373
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
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 26,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 37,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "debugger",
    "start": 51,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 65,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 72,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 79,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 90,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 101,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 108,
    "end": 110
  },
  {
    "type": "Null",
    "value": "null",
    "start": 111,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 125,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 129,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 162,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 166,
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
    "value": "return",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 185,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 206,
    "end": 210
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 226,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 241,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 262,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 279,
    "end": 284
  },
  {
    "type": "String",
    "value": "\"nooo\"",
    "start": 285,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 297,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 313,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 335,
    "end": 342
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
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 355,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  }
]
```
