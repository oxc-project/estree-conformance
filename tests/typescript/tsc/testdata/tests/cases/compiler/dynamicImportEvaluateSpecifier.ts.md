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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 61
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 64,
            "end": 65
          },
          "definite": false,
          "start": 60,
          "end": 65
        }
      ],
      "declare": false,
      "start": 56,
      "end": 66
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "String",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 81
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 83
              },
              "start": 82,
              "end": 85
            }
          ],
          "optional": false,
          "start": 75,
          "end": 86
        },
        "options": null,
        "phase": null,
        "start": 68,
        "end": 87
      },
      "directive": null,
      "start": 68,
      "end": 88
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "String",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 102
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 104
              },
              "start": 103,
              "end": 106
            }
          ],
          "optional": false,
          "start": 96,
          "end": 107
        },
        "options": null,
        "phase": null,
        "start": 89,
        "end": 108
      },
      "directive": null,
      "start": 89,
      "end": 109
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
            "name": "getPath",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 124
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "/root/my/cool/path",
                    "raw": "\"/root/my/cool/path\"",
                    "start": 223,
                    "end": 243
                  },
                  "start": 216,
                  "end": 244
                }
              ],
              "start": 139,
              "end": 246
            },
            "id": null,
            "generator": false,
            "start": 127,
            "end": 246
          },
          "definite": false,
          "start": 117,
          "end": 246
        }
      ],
      "declare": false,
      "start": 111,
      "end": 247
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
            "name": "someFunction",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 267
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 291,
                        "end": 297
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "ImportExpression",
                          "source": {
                            "type": "AwaitExpression",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "getPath",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 319,
                                "end": 326
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 319,
                              "end": 328
                            },
                            "start": 313,
                            "end": 328
                          },
                          "options": null,
                          "phase": null,
                          "start": 306,
                          "end": 329
                        },
                        "start": 300,
                        "end": 329
                      },
                      "definite": false,
                      "start": 291,
                      "end": 329
                    }
                  ],
                  "declare": false,
                  "start": 285,
                  "end": 330
                }
              ],
              "start": 282,
              "end": 332
            },
            "id": null,
            "generator": false,
            "start": 270,
            "end": 332
          },
          "definite": false,
          "start": 255,
          "end": 332
        }
      ],
      "declare": false,
      "start": 249,
      "end": 333
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 333
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 56,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 83,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 104,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 111,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "getPath",
    "start": 117,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 127,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 136,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 216,
    "end": 222
  },
  {
    "type": "String",
    "value": "\"/root/my/cool/path\"",
    "start": 223,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 249,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "someFunction",
    "start": 255,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 270,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 279,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 285,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 291,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 300,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 313,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "getPath",
    "start": 319,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  }
]
```
