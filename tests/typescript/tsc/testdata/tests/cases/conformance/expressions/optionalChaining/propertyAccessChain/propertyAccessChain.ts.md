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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 18,
                    "end": 27
                  },
                  {
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 32,
                          "end": 33
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 35,
                            "end": 41
                          },
                          "start": 33,
                          "end": 41
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 32,
                        "end": 41
                      }
                    ],
                    "start": 30,
                    "end": 43
                  }
                ],
                "start": 18,
                "end": 43
              },
              "start": 16,
              "end": 43
            },
            "start": 14,
            "end": 43
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 43
        }
      ],
      "declare": true,
      "start": 0,
      "end": 44
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 47
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 50
          },
          "optional": true,
          "computed": false,
          "start": 45,
          "end": 50
        },
        "start": 45,
        "end": 50
      },
      "directive": null,
      "start": 45,
      "end": 51
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 71,
                    "end": 80
                  },
                  {
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 85,
                          "end": 86
                        },
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
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 90,
                                  "end": 91
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 93,
                                    "end": 99
                                  },
                                  "start": 91,
                                  "end": 99
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 90,
                                "end": 99
                              }
                            ],
                            "start": 88,
                            "end": 101
                          },
                          "start": 86,
                          "end": 101
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 85,
                        "end": 101
                      }
                    ],
                    "start": 83,
                    "end": 103
                  }
                ],
                "start": 71,
                "end": 103
              },
              "start": 69,
              "end": 103
            },
            "start": 67,
            "end": 103
          },
          "init": null,
          "definite": false,
          "start": 67,
          "end": 103
        }
      ],
      "declare": true,
      "start": 53,
      "end": 104
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 107
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 110
            },
            "optional": true,
            "computed": false,
            "start": 105,
            "end": 110
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 112
          },
          "optional": false,
          "computed": false,
          "start": 105,
          "end": 112
        },
        "start": 105,
        "end": 112
      },
      "directive": null,
      "start": 105,
      "end": 113
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
            "name": "o3",
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 135,
                      "end": 136
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 138,
                            "end": 147
                          },
                          {
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
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 152,
                                  "end": 153
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 155,
                                    "end": 161
                                  },
                                  "start": 153,
                                  "end": 161
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 152,
                                "end": 161
                              }
                            ],
                            "start": 150,
                            "end": 163
                          }
                        ],
                        "start": 138,
                        "end": 163
                      },
                      "start": 136,
                      "end": 163
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 135,
                    "end": 163
                  }
                ],
                "start": 133,
                "end": 165
              },
              "start": 131,
              "end": 165
            },
            "start": 129,
            "end": 165
          },
          "init": null,
          "definite": false,
          "start": 129,
          "end": 165
        }
      ],
      "declare": true,
      "start": 115,
      "end": 166
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 169
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 171
            },
            "optional": false,
            "computed": false,
            "start": 167,
            "end": 171
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 174
          },
          "optional": true,
          "computed": false,
          "start": 167,
          "end": 174
        },
        "start": 167,
        "end": 174
      },
      "directive": null,
      "start": 167,
      "end": 175
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
            "name": "o4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 198
                    },
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
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 203,
                              "end": 204
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": true,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 208,
                                      "end": 209
                                    },
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
                                              "name": "e",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 214,
                                              "end": 215
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "start": 217,
                                                "end": 223
                                              },
                                              "start": 215,
                                              "end": 223
                                            },
                                            "accessibility": null,
                                            "static": false,
                                            "start": 214,
                                            "end": 223
                                          }
                                        ],
                                        "start": 212,
                                        "end": 225
                                      },
                                      "start": 210,
                                      "end": 225
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 208,
                                    "end": 225
                                  }
                                ],
                                "start": 206,
                                "end": 227
                              },
                              "start": 204,
                              "end": 227
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 203,
                            "end": 227
                          }
                        ],
                        "start": 201,
                        "end": 229
                      },
                      "start": 199,
                      "end": 229
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 197,
                    "end": 229
                  }
                ],
                "start": 195,
                "end": 231
              },
              "start": 193,
              "end": 231
            },
            "start": 191,
            "end": 231
          },
          "init": null,
          "definite": false,
          "start": 191,
          "end": 231
        }
      ],
      "declare": true,
      "start": 177,
      "end": 232
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 233,
                  "end": 235
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 236,
                  "end": 237
                },
                "optional": false,
                "computed": false,
                "start": 233,
                "end": 237
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 240
              },
              "optional": true,
              "computed": false,
              "start": 233,
              "end": 240
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 242
            },
            "optional": false,
            "computed": false,
            "start": 233,
            "end": 242
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 244,
            "end": 245
          },
          "optional": true,
          "computed": false,
          "start": 233,
          "end": 245
        },
        "start": 233,
        "end": 245
      },
      "directive": null,
      "start": 233,
      "end": 246
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
            "name": "o5",
            "optional": false,
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 269
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
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
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 276,
                              "end": 277
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": true,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "d",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 281,
                                      "end": 282
                                    },
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
                                              "name": "e",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 287,
                                              "end": 288
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "start": 290,
                                                "end": 296
                                              },
                                              "start": 288,
                                              "end": 296
                                            },
                                            "accessibility": null,
                                            "static": false,
                                            "start": 287,
                                            "end": 296
                                          }
                                        ],
                                        "start": 285,
                                        "end": 298
                                      },
                                      "start": 283,
                                      "end": 298
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 281,
                                    "end": 298
                                  }
                                ],
                                "start": 279,
                                "end": 300
                              },
                              "start": 277,
                              "end": 300
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 276,
                            "end": 300
                          }
                        ],
                        "start": 274,
                        "end": 302
                      },
                      "start": 272,
                      "end": 302
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 268,
                    "end": 302
                  }
                ],
                "start": 266,
                "end": 304
              },
              "start": 264,
              "end": 304
            },
            "start": 262,
            "end": 304
          },
          "init": null,
          "definite": false,
          "start": 262,
          "end": 304
        }
      ],
      "declare": true,
      "start": 248,
      "end": 305
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 306,
                    "end": 308
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 309,
                    "end": 310
                  },
                  "optional": false,
                  "computed": false,
                  "start": 306,
                  "end": 310
                },
                "typeArguments": null,
                "arguments": [],
                "optional": true,
                "start": 306,
                "end": 314
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 316
              },
              "optional": false,
              "computed": false,
              "start": 306,
              "end": 316
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 318
            },
            "optional": false,
            "computed": false,
            "start": 306,
            "end": 318
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 320,
            "end": 321
          },
          "optional": true,
          "computed": false,
          "start": 306,
          "end": 321
        },
        "start": 306,
        "end": 321
      },
      "directive": null,
      "start": 306,
      "end": 322
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
            "name": "o6",
            "optional": false,
            "typeAnnotation": {
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 355,
                        "end": 356
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 355,
                      "end": 356
                    }
                  ],
                  "start": 354,
                  "end": 357
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 363,
                        "end": 372
                      },
                      {
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 378,
                              "end": 379
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 381,
                                "end": 387
                              },
                              "start": 379,
                              "end": 387
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 378,
                            "end": 387
                          }
                        ],
                        "start": 376,
                        "end": 389
                      }
                    ],
                    "start": 363,
                    "end": 390
                  },
                  "start": 360,
                  "end": 390
                },
                "start": 354,
                "end": 390
              },
              "start": 352,
              "end": 390
            },
            "start": 350,
            "end": 390
          },
          "init": null,
          "definite": false,
          "start": 350,
          "end": 390
        }
      ],
      "declare": true,
      "start": 336,
      "end": 391
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "o6",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 394
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 395,
                  "end": 401
                }
              ],
              "start": 394,
              "end": 402
            },
            "arguments": [],
            "optional": false,
            "start": 392,
            "end": 404
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 407
          },
          "optional": true,
          "computed": false,
          "start": 392,
          "end": 407
        },
        "start": 392,
        "end": 407
      },
      "directive": null,
      "start": 392,
      "end": 408
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "ChainExpression",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o1",
              "optional": false,
              "typeAnnotation": null,
              "start": 422,
              "end": 424
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 426,
              "end": 427
            },
            "optional": true,
            "computed": false,
            "start": 422,
            "end": 427
          },
          "start": 422,
          "end": 427
        },
        "consequent": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 430,
          "end": 431
        },
        "alternate": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 434,
          "end": 435
        },
        "start": 422,
        "end": 435
      },
      "directive": null,
      "start": 422,
      "end": 436
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o2",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 452
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 454,
                "end": 455
              },
              "optional": true,
              "computed": false,
              "start": 450,
              "end": 455
            },
            "start": 450,
            "end": 456
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 457,
            "end": 458
          },
          "optional": false,
          "computed": false,
          "start": 450,
          "end": 458
        },
        "start": 450,
        "end": 458
      },
      "directive": null,
      "start": 450,
      "end": 459
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "TSNonNullExpression",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 460,
                  "end": 462
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 464,
                  "end": 465
                },
                "optional": true,
                "computed": false,
                "start": 460,
                "end": 465
              },
              "start": 460,
              "end": 466
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 468
            },
            "optional": false,
            "computed": false,
            "start": 460,
            "end": 468
          },
          "start": 460,
          "end": 469
        },
        "start": 460,
        "end": 469
      },
      "directive": null,
      "start": 460,
      "end": 470
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 470
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
    "value": "o1",
    "start": 14,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 18,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "o1",
    "start": 45,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 47,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 53,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 61,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 71,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 105,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 107,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 115,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 123,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 129,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 138,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 152,
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
    "value": "string",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 167,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 171,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 177,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 185,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 191,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "c",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 217,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 233,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 237,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 242,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 248,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 256,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 262,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 290,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 306,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 310,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 318,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 336,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 344,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 360,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 363,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 381,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 392,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 395,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 404,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 422,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 424,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 428,
    "end": 429
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 450,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 452,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 460,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 462,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470
  }
]
```
