__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Callback",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 43
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Args",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 48
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 57,
                "end": 60
              },
              "start": 57,
              "end": 62
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 44,
            "end": 62
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Out",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 67
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 64,
            "end": 67
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 70
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 69,
            "end": 70
          }
        ],
        "start": 43,
        "end": 71
      },
      "typeAnnotation": {
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
              "start": 78,
              "end": 82
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 84,
                  "end": 88
                },
                "typeArguments": null,
                "start": 84,
                "end": 88
              },
              "start": 82,
              "end": 88
            },
            "value": null,
            "start": 75,
            "end": 88
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Out",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 100,
                      "end": 103
                    },
                    "typeArguments": null,
                    "start": 100,
                    "end": 103
                  },
                  "start": 98,
                  "end": 103
                },
                "start": 94,
                "end": 103
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 109
                },
                "typeArguments": null,
                "start": 108,
                "end": 109
              },
              "start": 105,
              "end": 109
            },
            "start": 93,
            "end": 109
          },
          "start": 90,
          "end": 109
        },
        "start": 74,
        "end": 109
      },
      "declare": true,
      "start": 22,
      "end": 110
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "factory",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 135
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Out",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 139
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 136,
            "end": 139
          }
        ],
        "start": 135,
        "end": 140
      },
      "params": [],
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
                  "name": "Args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 149
                },
                "constraint": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 158,
                    "end": 161
                  },
                  "start": 158,
                  "end": 163
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 145,
                "end": 163
              },
              {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 166
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 165,
                "end": 166
              }
            ],
            "start": 144,
            "end": 167
          },
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "callback",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Callback",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 178,
                    "end": 186
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 187,
                          "end": 191
                        },
                        "typeArguments": null,
                        "start": 187,
                        "end": 191
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Out",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 193,
                          "end": 196
                        },
                        "typeArguments": null,
                        "start": 193,
                        "end": 196
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 198,
                          "end": 199
                        },
                        "typeArguments": null,
                        "start": 198,
                        "end": 199
                      }
                    ],
                    "start": 186,
                    "end": 200
                  },
                  "start": 178,
                  "end": 200
                },
                "start": 176,
                "end": 200
              },
              "start": 168,
              "end": 200
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                    "start": 209,
                    "end": 213
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 215,
                        "end": 219
                      },
                      "typeArguments": null,
                      "start": 215,
                      "end": 219
                    },
                    "start": 213,
                    "end": 219
                  },
                  "value": null,
                  "start": 206,
                  "end": 219
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 224,
                    "end": 225
                  },
                  "typeArguments": null,
                  "start": 224,
                  "end": 225
                },
                "start": 221,
                "end": 225
              },
              "start": 205,
              "end": 225
            },
            "start": 202,
            "end": 225
          },
          "start": 144,
          "end": 225
        },
        "start": 142,
        "end": 225
      },
      "body": null,
      "expression": false,
      "start": 111,
      "end": 226
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
            "name": "make",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 238
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "factory",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 248
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSArrayType",
                  "elementType": {
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
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 250,
                          "end": 252
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 254,
                            "end": 260
                          },
                          "start": 252,
                          "end": 260
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 250,
                        "end": 261
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "age",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 262,
                          "end": 265
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 267,
                            "end": 273
                          },
                          "start": 265,
                          "end": 273
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 262,
                        "end": 273
                      }
                    ],
                    "start": 249,
                    "end": 274
                  },
                  "start": 249,
                  "end": 276
                }
              ],
              "start": 248,
              "end": 277
            },
            "arguments": [],
            "optional": false,
            "start": 241,
            "end": 279
          },
          "definite": false,
          "start": 234,
          "end": 279
        }
      ],
      "declare": false,
      "start": 228,
      "end": 280
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
            "name": "usersOverAge",
            "optional": false,
            "typeAnnotation": null,
            "start": 288,
            "end": 300
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "make",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 307
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "age",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 314,
                        "end": 320
                      },
                      "start": 312,
                      "end": 320
                    },
                    "start": 309,
                    "end": 320
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 329
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 346,
                              "end": 350
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "filter",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 351,
                              "end": 357
                            },
                            "optional": false,
                            "computed": false,
                            "start": 346,
                            "end": 357
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "user",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 358,
                                  "end": 362
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "user",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 366,
                                    "end": 370
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "age",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 371,
                                    "end": 374
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 366,
                                  "end": 374
                                },
                                "operator": ">=",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "age",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 378,
                                  "end": 381
                                },
                                "start": 366,
                                "end": 381
                              },
                              "id": null,
                              "generator": false,
                              "start": 358,
                              "end": 381
                            }
                          ],
                          "optional": false,
                          "start": 346,
                          "end": 382
                        },
                        "start": 339,
                        "end": 383
                      }
                    ],
                    "start": 333,
                    "end": 385
                  },
                  "id": null,
                  "generator": false,
                  "start": 325,
                  "end": 385
                },
                "id": null,
                "generator": false,
                "start": 308,
                "end": 385
              }
            ],
            "optional": false,
            "start": 303,
            "end": 386
          },
          "definite": false,
          "start": 288,
          "end": 386
        }
      ],
      "declare": false,
      "start": 282,
      "end": 387
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 387
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 22,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 30,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "Callback",
    "start": 35,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 44,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 49,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "Out",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 75,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 78,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 84,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 90,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 94,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "Out",
    "start": 100,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 105,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 111,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 119,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "factory",
    "start": 128,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "Out",
    "start": 136,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 145,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 150,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 168,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "Callback",
    "start": 178,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "Out",
    "start": 193,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 206,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 209,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 215,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 221,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 228,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "make",
    "start": 234,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "factory",
    "start": 241,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 250,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 254,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "age",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 267,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 282,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "usersOverAge",
    "start": 288,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "make",
    "start": 303,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "age",
    "start": 309,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 314,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 322,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 325,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 330,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 339,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 346,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 351,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "user",
    "start": 358,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 363,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "user",
    "start": 366,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "age",
    "start": 371,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 375,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "age",
    "start": 378,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  }
]
```
