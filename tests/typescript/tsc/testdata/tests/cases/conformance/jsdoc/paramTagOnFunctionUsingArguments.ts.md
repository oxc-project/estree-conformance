__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "factory",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 24
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 31,
              "end": 37
            },
            "start": 29,
            "end": 37
          },
          "start": 25,
          "end": 37
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 40,
          "end": 42
        },
        "start": 38,
        "end": 42
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 43
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 43
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "factory",
    "start": 17,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 25,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  }
]
```
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
        "name": "concat",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 48
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 84
                },
                "init": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 87,
                  "end": 89
                },
                "definite": false,
                "start": 83,
                "end": 89
              }
            ],
            "declare": false,
            "start": 79,
            "end": 89
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 102
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 105,
                    "end": 106
                  },
                  "definite": false,
                  "start": 101,
                  "end": 106
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 109
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 112,
                      "end": 121
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 128
                    },
                    "optional": false,
                    "computed": false,
                    "start": 112,
                    "end": 128
                  },
                  "definite": false,
                  "start": 108,
                  "end": 128
                }
              ],
              "declare": false,
              "start": 97,
              "end": 128
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 131
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 135
              },
              "start": 130,
              "end": 135
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 138
              },
              "start": 137,
              "end": 140
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 148,
                      "end": 149
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 153,
                        "end": 162
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 163,
                        "end": 164
                      },
                      "optional": false,
                      "computed": true,
                      "start": 153,
                      "end": 165
                    },
                    "start": 148,
                    "end": 165
                  },
                  "directive": null,
                  "start": 148,
                  "end": 165
                }
              ],
              "start": 142,
              "end": 169
            },
            "start": 92,
            "end": 169
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 180
            },
            "start": 172,
            "end": 180
          }
        ],
        "start": 75,
        "end": 182
      },
      "expression": false,
      "start": 33,
      "end": 182
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "correct",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 238
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 256
            },
            "directive": null,
            "start": 247,
            "end": 256
          }
        ],
        "start": 241,
        "end": 258
      },
      "expression": false,
      "start": 222,
      "end": 258
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "correct",
          "optional": false,
          "typeAnnotation": null,
          "start": 260,
          "end": 267
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 268,
            "end": 269
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 270,
            "end": 271
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 272,
            "end": 273
          }
        ],
        "optional": false,
        "start": 260,
        "end": 274
      },
      "directive": null,
      "start": 260,
      "end": 274
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 283
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 33,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
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
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 79,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "String",
    "value": "''",
    "start": 87,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 92,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 97,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 112,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 122,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 138,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 150,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 153,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 172,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 222,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "correct",
    "start": 231,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 247,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "correct",
    "start": 260,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 269,
    "end": 270
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 271,
    "end": 272
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 273,
    "end": 274
  }
]
```
