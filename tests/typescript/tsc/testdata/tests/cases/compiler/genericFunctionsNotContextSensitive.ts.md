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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 29
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 33,
                    "end": 34
                  },
                  "constraint": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 47,
                          "end": 51
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 53,
                              "end": 56
                            },
                            "start": 53,
                            "end": 58
                          },
                          "start": 51,
                          "end": 58
                        },
                        "value": null,
                        "start": 44,
                        "end": 58
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "G",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 64,
                                "end": 65
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 64,
                              "end": 65
                            }
                          ],
                          "start": 63,
                          "end": 66
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "G",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 70,
                                  "end": 71
                                },
                                "typeArguments": null,
                                "start": 70,
                                "end": 71
                              },
                              "start": 68,
                              "end": 71
                            },
                            "start": 67,
                            "end": 71
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 76,
                            "end": 80
                          },
                          "start": 73,
                          "end": 80
                        },
                        "start": 63,
                        "end": 80
                      },
                      "start": 60,
                      "end": 80
                    },
                    "start": 43,
                    "end": 80
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 33,
                  "end": 80
                }
              ],
              "start": 32,
              "end": 81
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 85,
                      "end": 86
                    },
                    "typeArguments": null,
                    "start": 85,
                    "end": 86
                  },
                  "start": 83,
                  "end": 86
                },
                "start": 82,
                "end": 86
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 90
                },
                "typeArguments": null,
                "start": 89,
                "end": 90
              },
              "start": 87,
              "end": 90
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "id": null,
            "generator": false,
            "start": 32,
            "end": 95
          },
          "definite": false,
          "start": 28,
          "end": 95
        }
      ],
      "declare": false,
      "start": 22,
      "end": 96
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 105
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 109
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 111,
                        "end": 112
                      },
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 121,
                        "end": 127
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 111,
                      "end": 127
                    }
                  ],
                  "start": 110,
                  "end": 128
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 132,
                          "end": 133
                        },
                        "typeArguments": null,
                        "start": 132,
                        "end": 133
                      },
                      "start": 130,
                      "end": 133
                    },
                    "start": 129,
                    "end": 133
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 138,
                      "end": 139
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 144,
                    "end": 146
                  },
                  "id": null,
                  "generator": false,
                  "start": 138,
                  "end": 147
                },
                "id": null,
                "generator": false,
                "start": 110,
                "end": 147
              }
            ],
            "optional": false,
            "start": 108,
            "end": 148
          },
          "definite": false,
          "start": 104,
          "end": 148
        }
      ],
      "declare": false,
      "start": 98,
      "end": 149
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 197
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 22,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 44,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 47,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 53,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 57,
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
    "value": "=>",
    "start": 60,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 73,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 76,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 80,
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
    "value": "_",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "F",
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
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 91,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 98,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 113,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 121,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 135,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 140,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  }
]
```
