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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 17
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 51,
                  "end": 53
                },
                "consequent": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 71,
                      "end": 72
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 99,
                            "end": 100
                          },
                          "start": 92,
                          "end": 101
                        }
                      ],
                      "start": 74,
                      "end": 115
                    },
                    "alternate": null,
                    "start": 67,
                    "end": 115
                  }
                ],
                "start": 46,
                "end": 115
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 20,
                  "raw": "20",
                  "start": 129,
                  "end": 131
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 152,
                      "end": 153
                    },
                    "start": 145,
                    "end": 154
                  }
                ],
                "start": 124,
                "end": 154
              }
            ],
            "start": 25,
            "end": 160
          }
        ],
        "start": 19,
        "end": 162
      },
      "expression": false,
      "start": 0,
      "end": 162
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 176
      },
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 193
            },
            "start": 185,
            "end": 194
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar2",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 212
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 215,
              "end": 222
            },
            "expression": false,
            "start": 199,
            "end": 222
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
                  "start": 231,
                  "end": 232
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 235,
                  "end": 237
                },
                "definite": false,
                "start": 231,
                "end": 237
              }
            ],
            "declare": false,
            "start": 227,
            "end": 238
          }
        ],
        "start": 179,
        "end": 249
      },
      "expression": false,
      "start": 164,
      "end": 249
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label1",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 257
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
              "name": "x2",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 266
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 269,
              "end": 271
            },
            "definite": false,
            "start": 264,
            "end": 271
          }
        ],
        "declare": false,
        "start": 260,
        "end": 272
      },
      "start": 251,
      "end": 272
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 272
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
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 46,
    "end": 50
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 51,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 92,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 124,
    "end": 128
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 129,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 145,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 164,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 185,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 199,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 208,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 227,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 235,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "label1",
    "start": 251,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 260,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 264,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  }
]
```
