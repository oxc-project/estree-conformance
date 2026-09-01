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
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNull",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 25,
                  "end": 31
                },
                {
                  "type": "TSNullKeyword",
                  "start": 34,
                  "end": 38
                }
              ],
              "start": 25,
              "end": 38
            },
            "start": 23,
            "end": 38
          },
          "start": 14,
          "end": 38
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrUndefined",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 56,
                  "end": 62
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 65,
                  "end": 74
                }
              ],
              "start": 56,
              "end": 74
            },
            "start": 54,
            "end": 74
          },
          "start": 40,
          "end": 74
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
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 91,
                      "end": 97
                    },
                    "start": 89,
                    "end": 97
                  },
                  "start": 86,
                  "end": 97
                },
                "init": {
                  "type": "Literal",
                  "value": "original",
                  "raw": "\"original\"",
                  "start": 100,
                  "end": 110
                },
                "definite": false,
                "start": 86,
                "end": 110
              }
            ],
            "declare": false,
            "start": 82,
            "end": 111
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
                  "name": "nil",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 125,
                      "end": 129
                    },
                    "start": 123,
                    "end": 129
                  },
                  "start": 120,
                  "end": 129
                },
                "init": null,
                "definite": false,
                "start": 120,
                "end": 129
              }
            ],
            "declare": false,
            "start": 116,
            "end": 130
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 139,
                "end": 143
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 157
              },
              "start": 139,
              "end": 157
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nil",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 172
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "strOrNull",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 175,
                      "end": 184
                    },
                    "start": 169,
                    "end": 184
                  },
                  "directive": null,
                  "start": 169,
                  "end": 185
                }
              ],
              "start": 159,
              "end": 191
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 211,
                      "end": 214
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "strOrNull",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 217,
                      "end": 226
                    },
                    "start": 211,
                    "end": 226
                  },
                  "directive": null,
                  "start": 211,
                  "end": 227
                }
              ],
              "start": 201,
              "end": 233
            },
            "start": 135,
            "end": 233
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 242,
                "end": 251
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrUndefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 270
              },
              "start": 242,
              "end": 270
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 282,
                      "end": 285
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "strOrUndefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 288,
                      "end": 302
                    },
                    "start": 282,
                    "end": 302
                  },
                  "directive": null,
                  "start": 282,
                  "end": 303
                }
              ],
              "start": 272,
              "end": 309
            },
            "alternate": null,
            "start": 238,
            "end": 309
          }
        ],
        "start": 76,
        "end": 311
      },
      "expression": false,
      "start": 0,
      "end": 311
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 311
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
    "value": "test",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "strOrNull",
    "start": 14,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 32,
    "end": 33
  },
  {
    "type": "Null",
    "value": "null",
    "start": 34,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "strOrUndefined",
    "start": 40,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 65,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 82,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 86,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "String",
    "value": "\"original\"",
    "start": 100,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 116,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "nil",
    "start": 120,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Null",
    "value": "null",
    "start": 125,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 135,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "Null",
    "value": "null",
    "start": 139,
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
    "value": "strOrNull",
    "start": 148,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "nil",
    "start": 169,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "strOrNull",
    "start": 175,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 211,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "strOrNull",
    "start": 217,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 238,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 242,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 252,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "strOrUndefined",
    "start": 256,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 282,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "strOrUndefined",
    "start": 288,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311
  }
]
```
