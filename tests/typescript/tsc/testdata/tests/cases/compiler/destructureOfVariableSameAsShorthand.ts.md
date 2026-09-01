__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AxiosResponse",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 79
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 81
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 84,
              "end": 89
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 80,
            "end": 89
          }
        ],
        "start": 79,
        "end": 90
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 101
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 104
                },
                "typeArguments": null,
                "start": 103,
                "end": 104
              },
              "start": 101,
              "end": 104
            },
            "accessibility": null,
            "static": false,
            "start": 97,
            "end": 105
          }
        ],
        "start": 91,
        "end": 107
      },
      "declare": false,
      "start": 56,
      "end": 107
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "get",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 129
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 131
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 134,
              "end": 139
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 130,
            "end": 139
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 142
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AxiosResponse",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 158
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 159,
                      "end": 160
                    },
                    "typeArguments": null,
                    "start": 159,
                    "end": 160
                  }
                ],
                "start": 158,
                "end": 161
              },
              "start": 145,
              "end": 161
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 141,
            "end": 161
          }
        ],
        "start": 129,
        "end": 162
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 173
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 175
                },
                "typeArguments": null,
                "start": 174,
                "end": 175
              }
            ],
            "start": 173,
            "end": 176
          },
          "start": 166,
          "end": 176
        },
        "start": 164,
        "end": 176
      },
      "body": null,
      "expression": false,
      "start": 109,
      "end": 177
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "main",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 198
      },
      "generator": false,
      "async": true,
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
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 246,
                    "end": 249
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 246,
                  "end": 251
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 256
                },
                "optional": false,
                "computed": false,
                "start": 246,
                "end": 256
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "response",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 258,
                      "end": 266
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
                              "name": "body",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 312,
                              "end": 316
                            },
                            "init": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "response",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 319,
                                "end": 327
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 328,
                                "end": 332
                              },
                              "optional": false,
                              "computed": false,
                              "start": 319,
                              "end": 332
                            },
                            "definite": false,
                            "start": 312,
                            "end": 332
                          }
                        ],
                        "declare": false,
                        "start": 306,
                        "end": 333
                      }
                    ],
                    "start": 271,
                    "end": 339
                  },
                  "id": null,
                  "generator": false,
                  "start": 257,
                  "end": 339
                }
              ],
              "optional": false,
              "start": 246,
              "end": 340
            },
            "directive": null,
            "start": 246,
            "end": 340
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 348
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 345,
                  "end": 350
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 351,
                  "end": 355
                },
                "optional": false,
                "computed": false,
                "start": 345,
                "end": 355
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 359,
                            "end": 363
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 359,
                            "end": 363
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 359,
                          "end": 363
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 365
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 370,
                    "end": 402
                  },
                  "id": null,
                  "generator": false,
                  "start": 356,
                  "end": 402
                }
              ],
              "optional": false,
              "start": 345,
              "end": 403
            },
            "directive": null,
            "start": 345,
            "end": 403
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
                  "name": "response",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 422
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 431,
                      "end": 434
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 431,
                    "end": 436
                  },
                  "start": 425,
                  "end": 436
                },
                "definite": false,
                "start": 414,
                "end": 436
              }
            ],
            "declare": false,
            "start": 408,
            "end": 436
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
                  "name": "body",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 468,
                  "end": 472
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "response",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 475,
                    "end": 483
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 484,
                    "end": 488
                  },
                  "optional": false,
                  "computed": false,
                  "start": 475,
                  "end": 488
                },
                "definite": false,
                "start": 468,
                "end": 488
              }
            ],
            "declare": false,
            "start": 462,
            "end": 489
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 523,
                        "end": 527
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 523,
                        "end": 527
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 523,
                      "end": 527
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 521,
                  "end": 529
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 538,
                      "end": 541
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNeverKeyword",
                          "start": 542,
                          "end": 547
                        }
                      ],
                      "start": 541,
                      "end": 548
                    },
                    "arguments": [],
                    "optional": false,
                    "start": 538,
                    "end": 550
                  },
                  "start": 532,
                  "end": 550
                },
                "definite": false,
                "start": 521,
                "end": 550
              }
            ],
            "declare": false,
            "start": 515,
            "end": 551
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 662,
                        "end": 666
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "shouldBeNever",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 668,
                        "end": 681
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 662,
                      "end": 681
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 660,
                  "end": 683
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 692,
                      "end": 695
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 692,
                    "end": 697
                  },
                  "start": 686,
                  "end": 697
                },
                "definite": false,
                "start": 660,
                "end": 697
              }
            ],
            "declare": false,
            "start": 654,
            "end": 698
          }
        ],
        "start": 201,
        "end": 700
      },
      "expression": false,
      "start": 179,
      "end": 700
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 700
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 56,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "AxiosResponse",
    "start": 66,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 84,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 97,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 109,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 117,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 126,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 130,
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
    "value": "never",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "AxiosResponse",
    "start": 145,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 166,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 179,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 185,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "main",
    "start": 194,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 246,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ".",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 252,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "response",
    "start": 258,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 268,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 306,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 312,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "response",
    "start": 319,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 328,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 345,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
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
    "value": "then",
    "start": 351,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 359,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 367,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 408,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "response",
    "start": 414,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 425,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 431,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 462,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 468,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "response",
    "start": 475,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 484,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 515,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 523,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 532,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 538,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 542,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 654,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 662,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "shouldBeNever",
    "start": 668,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 686,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 692,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 699,
    "end": 700
  }
]
```
