__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 15,
        "end": 16
      },
      "exportKind": "value",
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 18
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 7,
    "end": 14
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "value": 1,
        "raw": "1",
        "start": 15,
        "end": 16
      },
      "exportKind": "value",
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 18
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 7,
    "end": 14
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "value": "fallback",
        "raw": "'fallback'",
        "start": 15,
        "end": 25
      },
      "exportKind": "value",
      "start": 0,
      "end": 26
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 27
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 7,
    "end": 14
  },
  {
    "type": "String",
    "value": "'fallback'",
    "start": 15,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mod",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 16
            },
            "init": {
              "type": "AwaitExpression",
              "argument": {
                "type": "CallExpression",
                "callee": {
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 51,
                                  "end": 57
                                },
                                "start": 49,
                                "end": 57
                              },
                              "start": 48,
                              "end": 57
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 60,
                              "end": 61
                            },
                            "definite": false,
                            "start": 48,
                            "end": 61
                          }
                        ],
                        "declare": false,
                        "start": 42,
                        "end": 62
                      },
                      {
                        "type": "SwitchStatement",
                        "discriminant": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 73,
                          "end": 74
                        },
                        "cases": [
                          {
                            "type": "SwitchCase",
                            "test": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 87,
                              "end": 88
                            },
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "ImportExpression",
                                    "source": {
                                      "type": "Literal",
                                      "value": "./case0.js",
                                      "raw": "\"./case0.js\"",
                                      "start": 116,
                                      "end": 128
                                    },
                                    "options": null,
                                    "phase": null,
                                    "start": 109,
                                    "end": 129
                                  },
                                  "start": 103,
                                  "end": 129
                                },
                                "start": 96,
                                "end": 130
                              }
                            ],
                            "start": 82,
                            "end": 130
                          },
                          {
                            "type": "SwitchCase",
                            "test": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 140,
                              "end": 141
                            },
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "ImportExpression",
                                    "source": {
                                      "type": "Literal",
                                      "value": "./case1.js",
                                      "raw": "\"./case1.js\"",
                                      "start": 169,
                                      "end": 181
                                    },
                                    "options": null,
                                    "phase": null,
                                    "start": 162,
                                    "end": 182
                                  },
                                  "start": 156,
                                  "end": 182
                                },
                                "start": 149,
                                "end": 183
                              }
                            ],
                            "start": 135,
                            "end": 183
                          },
                          {
                            "type": "SwitchCase",
                            "test": null,
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "ImportExpression",
                                    "source": {
                                      "type": "Literal",
                                      "value": "./caseFallback.js",
                                      "raw": "\"./caseFallback.js\"",
                                      "start": 223,
                                      "end": 242
                                    },
                                    "options": null,
                                    "phase": null,
                                    "start": 216,
                                    "end": 243
                                  },
                                  "start": 210,
                                  "end": 243
                                },
                                "start": 203,
                                "end": 244
                              }
                            ],
                            "start": 188,
                            "end": 244
                          }
                        ],
                        "start": 65,
                        "end": 248
                      }
                    ],
                    "start": 38,
                    "end": 250
                  },
                  "id": null,
                  "generator": false,
                  "start": 26,
                  "end": 250
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 25,
                "end": 253
              },
              "start": 19,
              "end": 253
            },
            "definite": false,
            "start": 13,
            "end": 253
          }
        ],
        "declare": false,
        "start": 7,
        "end": 254
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 254
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 254
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 19,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 26,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 35,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 42,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 58,
    "end": 59
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 73,
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
    "value": "case",
    "start": 82,
    "end": 86
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 96,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 103,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "String",
    "value": "\"./case0.js\"",
    "start": 116,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
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
    "value": "case",
    "start": 135,
    "end": 139
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 149,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 156,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 162,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 168,
    "end": 169
  },
  {
    "type": "String",
    "value": "\"./case1.js\"",
    "start": 169,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 188,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 203,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 210,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 216,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223
  },
  {
    "type": "String",
    "value": "\"./caseFallback.js\"",
    "start": 223,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 242,
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
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  }
]
```
