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
        "name": "getSecurity",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "level",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 26
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "level",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 46
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 62,
                  "end": 63
                },
                "consequent": [],
                "start": 57,
                "end": 64
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 86,
                  "end": 87
                },
                "consequent": [],
                "start": 81,
                "end": 88
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 109,
                  "end": 110
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "Hi",
                      "raw": "\"Hi\"",
                      "start": 138,
                      "end": 142
                    },
                    "start": 131,
                    "end": 143
                  }
                ],
                "start": 104,
                "end": 143
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 157,
                  "end": 158
                },
                "consequent": [],
                "start": 152,
                "end": 159
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 182,
                  "end": 183
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 215,
                      "end": 222
                    },
                    "start": 208,
                    "end": 223
                  }
                ],
                "start": 177,
                "end": 223
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 237,
                  "end": 238
                },
                "consequent": [],
                "start": 232,
                "end": 239
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "world",
                      "raw": "\"world\"",
                      "start": 296,
                      "end": 303
                    },
                    "start": 289,
                    "end": 304
                  }
                ],
                "start": 256,
                "end": 304
              }
            ],
            "start": 34,
            "end": 310
          }
        ],
        "start": 28,
        "end": 312
      },
      "expression": false,
      "start": 0,
      "end": 312
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 312
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "getSecurity",
    "start": 9,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "level",
    "start": 21,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "level",
    "start": 41,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 57,
    "end": 61
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 81,
    "end": 85
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 104,
    "end": 108
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "type": "Keyword",
    "value": "return",
    "start": 131,
    "end": 137
  },
  {
    "type": "String",
    "value": "\"Hi\"",
    "start": 138,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 152,
    "end": 156
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "type": "Keyword",
    "value": "case",
    "start": 177,
    "end": 181
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 208,
    "end": 214
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 215,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 232,
    "end": 236
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 256,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 289,
    "end": 295
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 296,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  }
]
```
