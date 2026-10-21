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
            "name": "database",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 31,
                  "end": 37
                },
                "start": 24,
                "end": 37
              },
              "start": 22,
              "end": 37
            },
            "start": 14,
            "end": 37
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 37
        }
      ],
      "declare": true,
      "start": 0,
      "end": 38
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
            "name": "models",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "user",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 71
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSMethodSignature",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "create",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 75,
                              "end": 81
                            },
                            "computed": false,
                            "optional": false,
                            "kind": "method",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entity",
                                "optional": true,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSObjectKeyword",
                                    "start": 91,
                                    "end": 97
                                  },
                                  "start": 89,
                                  "end": 97
                                },
                                "start": 82,
                                "end": 97
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 100,
                                "end": 104
                              },
                              "start": 98,
                              "end": 104
                            },
                            "accessibility": null,
                            "readonly": false,
                            "static": false,
                            "start": 75,
                            "end": 104
                          }
                        ],
                        "start": 73,
                        "end": 106
                      },
                      "start": 71,
                      "end": 106
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 67,
                    "end": 107
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "database",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 121
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSMethodSignature",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "create",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 126,
                              "end": 132
                            },
                            "computed": false,
                            "optional": false,
                            "kind": "method",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 139,
                                    "end": 145
                                  },
                                  "start": 137,
                                  "end": 145
                                },
                                "start": 133,
                                "end": 145
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entity",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSObjectKeyword",
                                    "start": 155,
                                    "end": 161
                                  },
                                  "start": 153,
                                  "end": 161
                                },
                                "start": 147,
                                "end": 161
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "id",
                                "optional": true,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 168,
                                    "end": 174
                                  },
                                  "start": 166,
                                  "end": 174
                                },
                                "start": 163,
                                "end": 174
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 177,
                                "end": 181
                              },
                              "start": 175,
                              "end": 181
                            },
                            "accessibility": null,
                            "readonly": false,
                            "static": false,
                            "start": 126,
                            "end": 181
                          }
                        ],
                        "start": 124,
                        "end": 183
                      },
                      "start": 122,
                      "end": 183
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 112,
                    "end": 184
                  }
                ],
                "start": 61,
                "end": 186
              },
              "start": 59,
              "end": 186
            },
            "start": 53,
            "end": 186
          },
          "init": null,
          "definite": false,
          "start": 53,
          "end": 186
        }
      ],
      "declare": true,
      "start": 39,
      "end": 187
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "model",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 208
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 209
            },
            "init": null,
            "definite": false,
            "start": 200,
            "end": 209
          }
        ],
        "declare": false,
        "start": 194,
        "end": 209
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 219
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "entries",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 227
          },
          "optional": false,
          "computed": false,
          "start": 213,
          "end": 227
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "models",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 234
          }
        ],
        "optional": false,
        "start": 213,
        "end": 235
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "model",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 248
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "create",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 255
                },
                "optional": false,
                "computed": false,
                "start": 243,
                "end": 255
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 256,
                  "end": 258
                }
              ],
              "optional": false,
              "start": 243,
              "end": 259
            },
            "directive": null,
            "start": 243,
            "end": 260
          }
        ],
        "start": 237,
        "end": 262
      },
      "start": 189,
      "end": 262
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 262
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "database",
    "start": 14,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 24,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 39,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 47,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "models",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "user",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "create",
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
    "value": "entity",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 88,
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
    "value": "object",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 100,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "database",
    "start": 113,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 126,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "entity",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 163,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 177,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 194,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "model",
    "start": 203,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 210,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 220,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "models",
    "start": 228,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "model",
    "start": 243,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 249,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262
  }
]
```
