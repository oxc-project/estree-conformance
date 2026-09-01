__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 15,
                    "end": 21
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 24,
                    "end": 30
                  }
                ],
                "start": 15,
                "end": 30
              },
              "start": 13,
              "end": 30
            },
            "start": 12,
            "end": 30
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 30
        }
      ],
      "declare": true,
      "start": 0,
      "end": 31
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 45
          },
          "prefix": true,
          "start": 37,
          "end": 45
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 50,
          "end": 58
        },
        "start": 37,
        "end": 58
      },
      "consequent": {
        "type": "BlockStatement",
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 71
                },
                "init": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 90,
                          "end": 101
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
                                "type": "VariableDeclaration",
                                "kind": "let",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 125,
                                          "end": 131
                                        },
                                        "start": 123,
                                        "end": 131
                                      },
                                      "start": 122,
                                      "end": 131
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 134,
                                      "end": 135
                                    },
                                    "definite": false,
                                    "start": 122,
                                    "end": 135
                                  }
                                ],
                                "declare": false,
                                "start": 118,
                                "end": 136
                              }
                            ],
                            "start": 104,
                            "end": 146
                          },
                          "expression": false,
                          "start": 101,
                          "end": 146
                        },
                        "kind": "constructor",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 90,
                        "end": 146
                      }
                    ],
                    "start": 80,
                    "end": 152
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 74,
                  "end": 152
                },
                "definite": false,
                "start": 70,
                "end": 152
              }
            ],
            "declare": false,
            "start": 66,
            "end": 152
          }
        ],
        "start": 60,
        "end": 154
      },
      "alternate": {
        "type": "BlockStatement",
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
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 170,
                  "end": 171
                },
                "init": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 190,
                          "end": 201
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
                                "type": "VariableDeclaration",
                                "kind": "let",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSNumberKeyword",
                                          "start": 225,
                                          "end": 231
                                        },
                                        "start": 223,
                                        "end": 231
                                      },
                                      "start": 222,
                                      "end": 231
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 234,
                                      "end": 235
                                    },
                                    "definite": false,
                                    "start": 222,
                                    "end": 235
                                  }
                                ],
                                "declare": false,
                                "start": 218,
                                "end": 236
                              }
                            ],
                            "start": 204,
                            "end": 246
                          },
                          "expression": false,
                          "start": 201,
                          "end": 246
                        },
                        "kind": "constructor",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 190,
                        "end": 246
                      }
                    ],
                    "start": 180,
                    "end": 252
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 174,
                  "end": 252
                },
                "definite": false,
                "start": 170,
                "end": 252
              }
            ],
            "declare": false,
            "start": 166,
            "end": 252
          }
        ],
        "start": 160,
        "end": 254
      },
      "start": 33,
      "end": 254
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 254
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
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "string",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 33,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 37,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 46,
    "end": 49
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 50,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 66,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 74,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 90,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 118,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 155,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 166,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 174,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 190,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 218,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 225,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254
  }
]
```
