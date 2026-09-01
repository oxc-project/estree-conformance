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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 15,
                    "end": 19
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 27,
                            "end": 33
                          },
                          "start": 25,
                          "end": 33
                        },
                        "start": 24,
                        "end": 33
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 38,
                        "end": 42
                      },
                      "start": 35,
                      "end": 42
                    },
                    "start": 23,
                    "end": 42
                  }
                ],
                "start": 15,
                "end": 43
              },
              "start": 13,
              "end": 43
            },
            "start": 12,
            "end": 43
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 43
        }
      ],
      "declare": true,
      "start": 0,
      "end": 44
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 51
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 55
            },
            "operator": "||",
            "right": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 63
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UnaryExpression",
                      "operator": "void",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "abc",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 74,
                            "end": 77
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toLowerCase",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 78,
                            "end": 89
                          },
                          "optional": false,
                          "computed": false,
                          "start": 74,
                          "end": 89
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 74,
                        "end": 91
                      },
                      "prefix": true,
                      "start": 69,
                      "end": 91
                    },
                    "directive": null,
                    "start": 69,
                    "end": 91
                  }
                ],
                "start": 67,
                "end": 93
              },
              "id": null,
              "generator": false,
              "start": 60,
              "end": 93
            },
            "start": 54,
            "end": 94
          },
          "definite": false,
          "start": 50,
          "end": 94
        }
      ],
      "declare": false,
      "start": 46,
      "end": 94
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "gg",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 101
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 105
            },
            "operator": "??",
            "right": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 110,
                  "end": 113
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UnaryExpression",
                      "operator": "void",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "abc",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 124,
                            "end": 127
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toLowerCase",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 128,
                            "end": 139
                          },
                          "optional": false,
                          "computed": false,
                          "start": 124,
                          "end": 139
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 124,
                        "end": 141
                      },
                      "prefix": true,
                      "start": 119,
                      "end": 141
                    },
                    "directive": null,
                    "start": 119,
                    "end": 141
                  }
                ],
                "start": 117,
                "end": 143
              },
              "id": null,
              "generator": false,
              "start": 110,
              "end": 143
            },
            "start": 104,
            "end": 144
          },
          "definite": false,
          "start": 99,
          "end": 144
        }
      ],
      "declare": false,
      "start": 95,
      "end": 144
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 144
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
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Null",
    "value": "null",
    "start": 15,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 27,
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
    "type": "Keyword",
    "value": "void",
    "start": 38,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 46,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 56,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 64,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 69,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 74,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "toLowerCase",
    "start": 78,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 95,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "gg",
    "start": 99,
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
    "value": "??",
    "start": 106,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 110,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 114,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 119,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "toLowerCase",
    "start": 128,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
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
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144
  }
]
```
