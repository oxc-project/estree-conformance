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
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "outer",
                        "raw": "\"outer\"",
                        "start": 21,
                        "end": 28
                      },
                      "start": 21,
                      "end": 28
                    },
                    "start": 19,
                    "end": 28
                  },
                  "start": 18,
                  "end": 28
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
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 45,
                          "end": 46
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "inner",
                                    "raw": "\"inner\"",
                                    "start": 53,
                                    "end": 60
                                  },
                                  "start": 53,
                                  "end": 60
                                },
                                "start": 51,
                                "end": 60
                              },
                              "start": 50,
                              "end": 60
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "TSAsExpression",
                              "expression": {
                                "type": "TSNonNullExpression",
                                "expression": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 71,
                                  "end": 75
                                },
                                "start": 71,
                                "end": 76
                              },
                              "typeAnnotation": {
                                "type": "TSTypeQuery",
                                "exprName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 87,
                                  "end": 88
                                },
                                "typeArguments": null,
                                "start": 80,
                                "end": 88
                              },
                              "start": 71,
                              "end": 88
                            },
                            "id": null,
                            "generator": false,
                            "start": 65,
                            "end": 88
                          },
                          "id": null,
                          "generator": false,
                          "start": 49,
                          "end": 88
                        },
                        "definite": false,
                        "start": 45,
                        "end": 88
                      }
                    ],
                    "declare": false,
                    "start": 39,
                    "end": 89
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
                          "name": "r",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 100,
                          "end": 101
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 104,
                            "end": 105
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TSNonNullExpression",
                              "expression": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 106,
                                "end": 110
                              },
                              "start": 106,
                              "end": 111
                            }
                          ],
                          "optional": false,
                          "start": 104,
                          "end": 112
                        },
                        "definite": false,
                        "start": 100,
                        "end": 112
                      }
                    ],
                    "declare": false,
                    "start": 94,
                    "end": 112
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 124,
                      "end": 125
                    },
                    "start": 117,
                    "end": 126
                  }
                ],
                "start": 33,
                "end": 128
              },
              "id": null,
              "generator": false,
              "start": 17,
              "end": 128
            },
            "definite": false,
            "start": 13,
            "end": 128
          }
        ],
        "declare": false,
        "start": 7,
        "end": 128
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 128
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 128
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
    "value": "g",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "String",
    "value": "\"outer\"",
    "start": 21,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 30,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 39,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 53,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 62,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 68,
    "end": 70
  },
  {
    "type": "Null",
    "value": "null",
    "start": 71,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 77,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 80,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 94,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Null",
    "value": "null",
    "start": 106,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 117,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  }
]
```
