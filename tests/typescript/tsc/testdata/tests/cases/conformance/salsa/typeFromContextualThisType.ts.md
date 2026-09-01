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
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 61
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 71
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 84,
                              "end": 88
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 89,
                              "end": 90
                            },
                            "optional": false,
                            "computed": false,
                            "start": 84,
                            "end": 90
                          },
                          "right": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 93,
                                "end": 94
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 98,
                              "end": 99
                            },
                            "id": null,
                            "generator": false,
                            "start": 93,
                            "end": 99
                          },
                          "start": 84,
                          "end": 99
                        },
                        "directive": null,
                        "start": 84,
                        "end": 100
                      }
                    ],
                    "start": 74,
                    "end": 106
                  },
                  "expression": false,
                  "start": 71,
                  "end": 106
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 70,
                "end": 106
              }
            ],
            "start": 64,
            "end": 108
          },
          "definite": false,
          "start": 59,
          "end": 108
        }
      ],
      "declare": false,
      "start": 53,
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 206
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 216
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 229,
                              "end": 233
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 234,
                              "end": 235
                            },
                            "optional": false,
                            "computed": false,
                            "start": 229,
                            "end": 235
                          },
                          "right": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 238,
                                "end": 242
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 243,
                                "end": 244
                              },
                              "optional": false,
                              "computed": false,
                              "start": 238,
                              "end": 244
                            },
                            "right": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "m",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 247,
                                  "end": 248
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 252,
                                    "end": 256
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "g",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 257,
                                    "end": 258
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 252,
                                  "end": 258
                                },
                                "operator": "||",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "m",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 262,
                                  "end": 263
                                },
                                "start": 252,
                                "end": 263
                              },
                              "id": null,
                              "generator": false,
                              "start": 247,
                              "end": 263
                            },
                            "start": 238,
                            "end": 263
                          },
                          "start": 229,
                          "end": 263
                        },
                        "directive": null,
                        "start": 229,
                        "end": 264
                      }
                    ],
                    "start": 219,
                    "end": 270
                  },
                  "expression": false,
                  "start": 216,
                  "end": 270
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 215,
                "end": 270
              }
            ],
            "start": 209,
            "end": 272
          },
          "definite": false,
          "start": 204,
          "end": 272
        }
      ],
      "declare": false,
      "start": 198,
      "end": 273
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 53,
  "end": 274
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 53,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 59,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "this",
    "start": 84,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 95,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 198,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 204,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 229,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 249,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 252,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 259,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  }
]
```
