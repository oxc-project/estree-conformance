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
            "name": "fetchUsingRequestUrl",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fetch",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 35,
                  "end": 40
                },
                "typeArguments": null,
                "start": 28,
                "end": 40
              },
              "start": 26,
              "end": 40
            },
            "start": 6,
            "end": 40
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "input",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 54
              }
            ],
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
                        "name": "url",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 70,
                        "end": 73
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "input",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 83,
                              "end": 88
                            },
                            "prefix": true,
                            "start": 76,
                            "end": 88
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 93,
                            "end": 101
                          },
                          "start": 76,
                          "end": 101
                        },
                        "consequent": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "input",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 104,
                          "end": 109
                        },
                        "alternate": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "input",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 112,
                              "end": 117
                            },
                            "operator": "instanceof",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "URL",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 129,
                              "end": 132
                            },
                            "start": 112,
                            "end": 132
                          },
                          "consequent": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "input",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 135,
                              "end": 140
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "href",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 141,
                              "end": 145
                            },
                            "optional": false,
                            "computed": false,
                            "start": 135,
                            "end": 145
                          },
                          "alternate": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "input",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 148,
                              "end": 153
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "url",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 154,
                              "end": 157
                            },
                            "optional": false,
                            "computed": false,
                            "start": 148,
                            "end": 157
                          },
                          "start": 112,
                          "end": 157
                        },
                        "start": 76,
                        "end": 157
                      },
                      "definite": false,
                      "start": 70,
                      "end": 157
                    }
                  ],
                  "declare": false,
                  "start": 64,
                  "end": 158
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Response",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 182
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "url",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 183,
                        "end": 186
                      }
                    ],
                    "start": 170,
                    "end": 187
                  },
                  "start": 163,
                  "end": 188
                }
              ],
              "start": 58,
              "end": 190
            },
            "id": null,
            "generator": false,
            "start": 43,
            "end": 190
          },
          "definite": false,
          "start": 6,
          "end": 190
        }
      ],
      "declare": false,
      "start": 0,
      "end": 191
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 191
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "fetchUsingRequestUrl",
    "start": 6,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 28,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "fetch",
    "start": 35,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 43,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 55,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 64,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "url",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 76,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 83,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 89,
    "end": 92
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 93,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 104,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 112,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 118,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "URL",
    "start": 129,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 135,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "href",
    "start": 141,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 148,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "url",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 163,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 170,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "Response",
    "start": 174,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "url",
    "start": 183,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  }
]
```
