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
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "ChainExpression",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o1",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 54
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 57
            },
            "optional": true,
            "computed": false,
            "start": 52,
            "end": 57
          },
          "start": 52,
          "end": 57
        },
        "prefix": true,
        "start": 45,
        "end": 57
      },
      "directive": null,
      "start": 45,
      "end": 58
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "ChainExpression",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o1",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 69
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 72
            },
            "optional": true,
            "computed": false,
            "start": 67,
            "end": 72
          },
          "start": 67,
          "end": 72
        },
        "prefix": true,
        "start": 59,
        "end": 73
      },
      "directive": null,
      "start": 59,
      "end": 74
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
                    "start": 94,
                    "end": 103
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
                          "start": 108,
                          "end": 109
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
                                  "start": 113,
                                  "end": 114
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 116,
                                    "end": 122
                                  },
                                  "start": 114,
                                  "end": 122
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 113,
                                "end": 122
                              }
                            ],
                            "start": 111,
                            "end": 124
                          },
                          "start": 109,
                          "end": 124
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 108,
                        "end": 124
                      }
                    ],
                    "start": 106,
                    "end": 126
                  }
                ],
                "start": 94,
                "end": 126
              },
              "start": 92,
              "end": 126
            },
            "start": 90,
            "end": 126
          },
          "init": null,
          "definite": false,
          "start": 90,
          "end": 126
        }
      ],
      "declare": true,
      "start": 76,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
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
                "start": 135,
                "end": 137
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 140
              },
              "optional": true,
              "computed": false,
              "start": 135,
              "end": 140
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 142
            },
            "optional": false,
            "computed": false,
            "start": 135,
            "end": 142
          },
          "start": 135,
          "end": 142
        },
        "prefix": true,
        "start": 128,
        "end": 142
      },
      "directive": null,
      "start": 128,
      "end": 143
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
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
                "start": 152,
                "end": 154
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 157
              },
              "optional": true,
              "computed": false,
              "start": 152,
              "end": 157
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 159
            },
            "optional": false,
            "computed": false,
            "start": 152,
            "end": 159
          },
          "start": 152,
          "end": 159
        },
        "prefix": true,
        "start": 144,
        "end": 160
      },
      "directive": null,
      "start": 144,
      "end": 161
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
                      "start": 183,
                      "end": 184
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 186,
                            "end": 195
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
                                  "start": 200,
                                  "end": 201
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 203,
                                    "end": 209
                                  },
                                  "start": 201,
                                  "end": 209
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 200,
                                "end": 209
                              }
                            ],
                            "start": 198,
                            "end": 211
                          }
                        ],
                        "start": 186,
                        "end": 211
                      },
                      "start": 184,
                      "end": 211
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 183,
                    "end": 211
                  }
                ],
                "start": 181,
                "end": 213
              },
              "start": 179,
              "end": 213
            },
            "start": 177,
            "end": 213
          },
          "init": null,
          "definite": false,
          "start": 177,
          "end": 213
        }
      ],
      "declare": true,
      "start": 163,
      "end": 214
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
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
                "start": 222,
                "end": 224
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 226
              },
              "optional": false,
              "computed": false,
              "start": 222,
              "end": 226
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 229
            },
            "optional": true,
            "computed": false,
            "start": 222,
            "end": 229
          },
          "start": 222,
          "end": 229
        },
        "prefix": true,
        "start": 215,
        "end": 229
      },
      "directive": null,
      "start": 215,
      "end": 230
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
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
                "start": 239,
                "end": 241
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 242,
                "end": 243
              },
              "optional": false,
              "computed": false,
              "start": 239,
              "end": 243
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 246
            },
            "optional": true,
            "computed": false,
            "start": 239,
            "end": 246
          },
          "start": 239,
          "end": 246
        },
        "prefix": true,
        "start": 231,
        "end": 247
      },
      "directive": null,
      "start": 231,
      "end": 248
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
                      "start": 270,
                      "end": 271
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
                    "static": false,
                    "start": 270,
                    "end": 302
                  }
                ],
                "start": 268,
                "end": 304
              },
              "start": 266,
              "end": 304
            },
            "start": 264,
            "end": 304
          },
          "init": null,
          "definite": false,
          "start": 264,
          "end": 304
        }
      ],
      "declare": true,
      "start": 250,
      "end": 305
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
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
                    "start": 313,
                    "end": 315
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 316,
                    "end": 317
                  },
                  "optional": false,
                  "computed": false,
                  "start": 313,
                  "end": 317
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 320
                },
                "optional": true,
                "computed": false,
                "start": 313,
                "end": 320
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 322
              },
              "optional": false,
              "computed": false,
              "start": 313,
              "end": 322
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 325
            },
            "optional": true,
            "computed": false,
            "start": 313,
            "end": 325
          },
          "start": 313,
          "end": 325
        },
        "prefix": true,
        "start": 306,
        "end": 325
      },
      "directive": null,
      "start": 306,
      "end": 326
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "ChainExpression",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "ChainExpression",
              "expression": {
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
                      "start": 335,
                      "end": 337
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 338,
                      "end": 339
                    },
                    "optional": false,
                    "computed": false,
                    "start": 335,
                    "end": 339
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 341,
                    "end": 342
                  },
                  "optional": true,
                  "computed": false,
                  "start": 335,
                  "end": 342
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 343,
                  "end": 344
                },
                "optional": false,
                "computed": false,
                "start": 335,
                "end": 344
              },
              "start": 335,
              "end": 344
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 348
            },
            "optional": true,
            "computed": false,
            "start": 334,
            "end": 348
          },
          "start": 334,
          "end": 348
        },
        "prefix": true,
        "start": 327,
        "end": 348
      },
      "directive": null,
      "start": 327,
      "end": 349
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
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
                    "start": 358,
                    "end": 360
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 361,
                    "end": 362
                  },
                  "optional": false,
                  "computed": false,
                  "start": 358,
                  "end": 362
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 365
                },
                "optional": true,
                "computed": false,
                "start": 358,
                "end": 365
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 367
              },
              "optional": false,
              "computed": false,
              "start": 358,
              "end": 367
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 370
            },
            "optional": true,
            "computed": false,
            "start": 358,
            "end": 370
          },
          "start": 358,
          "end": 370
        },
        "prefix": true,
        "start": 350,
        "end": 371
      },
      "directive": null,
      "start": 350,
      "end": 372
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
                      "start": 394,
                      "end": 395
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
                              "start": 402,
                              "end": 403
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
                                      "start": 407,
                                      "end": 408
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
                                              "start": 413,
                                              "end": 414
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "start": 416,
                                                "end": 422
                                              },
                                              "start": 414,
                                              "end": 422
                                            },
                                            "accessibility": null,
                                            "static": false,
                                            "start": 413,
                                            "end": 422
                                          }
                                        ],
                                        "start": 411,
                                        "end": 424
                                      },
                                      "start": 409,
                                      "end": 424
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 407,
                                    "end": 424
                                  }
                                ],
                                "start": 405,
                                "end": 426
                              },
                              "start": 403,
                              "end": 426
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 402,
                            "end": 426
                          }
                        ],
                        "start": 400,
                        "end": 428
                      },
                      "start": 398,
                      "end": 428
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 394,
                    "end": 428
                  }
                ],
                "start": 392,
                "end": 430
              },
              "start": 390,
              "end": 430
            },
            "start": 388,
            "end": 430
          },
          "init": null,
          "definite": false,
          "start": 388,
          "end": 430
        }
      ],
      "declare": true,
      "start": 374,
      "end": 431
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
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
                      "start": 439,
                      "end": 441
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 442,
                      "end": 443
                    },
                    "optional": false,
                    "computed": false,
                    "start": 439,
                    "end": 443
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": true,
                  "start": 439,
                  "end": 447
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 448,
                  "end": 449
                },
                "optional": false,
                "computed": false,
                "start": 439,
                "end": 449
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 451
              },
              "optional": false,
              "computed": false,
              "start": 439,
              "end": 451
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 454
            },
            "optional": true,
            "computed": false,
            "start": 439,
            "end": 454
          },
          "start": 439,
          "end": 454
        },
        "prefix": true,
        "start": 432,
        "end": 454
      },
      "directive": null,
      "start": 432,
      "end": 455
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
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
                      "start": 464,
                      "end": 466
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 467,
                      "end": 468
                    },
                    "optional": false,
                    "computed": false,
                    "start": 464,
                    "end": 468
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": true,
                  "start": 464,
                  "end": 472
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 473,
                  "end": 474
                },
                "optional": false,
                "computed": false,
                "start": 464,
                "end": 474
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 475,
                "end": 476
              },
              "optional": false,
              "computed": false,
              "start": 464,
              "end": 476
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 478,
              "end": 479
            },
            "optional": true,
            "computed": false,
            "start": 464,
            "end": 479
          },
          "start": 464,
          "end": 479
        },
        "prefix": true,
        "start": 456,
        "end": 480
      },
      "directive": null,
      "start": 456,
      "end": 481
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
                      "start": 503,
                      "end": 504
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
                              "start": 509,
                              "end": 510
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
                                      "start": 514,
                                      "end": 515
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
                                              "start": 520,
                                              "end": 521
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "start": 523,
                                                "end": 529
                                              },
                                              "start": 521,
                                              "end": 529
                                            },
                                            "accessibility": null,
                                            "static": false,
                                            "start": 520,
                                            "end": 529
                                          }
                                        ],
                                        "start": 518,
                                        "end": 531
                                      },
                                      "start": 516,
                                      "end": 531
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 514,
                                    "end": 531
                                  }
                                ],
                                "start": 512,
                                "end": 533
                              },
                              "start": 510,
                              "end": 533
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 509,
                            "end": 533
                          }
                        ],
                        "start": 507,
                        "end": 535
                      },
                      "start": 505,
                      "end": 535
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 503,
                    "end": 535
                  }
                ],
                "start": 501,
                "end": 537
              },
              "start": 499,
              "end": 537
            },
            "start": 497,
            "end": 537
          },
          "init": null,
          "definite": false,
          "start": 497,
          "end": 537
        }
      ],
      "declare": true,
      "start": 483,
      "end": 538
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
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
                    "name": "o6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 546,
                    "end": 548
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 549,
                    "end": 550
                  },
                  "optional": false,
                  "computed": false,
                  "start": 546,
                  "end": 550
                },
                "property": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "'c'",
                  "start": 553,
                  "end": 556
                },
                "optional": true,
                "computed": true,
                "start": 546,
                "end": 557
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 558,
                "end": 559
              },
              "optional": false,
              "computed": false,
              "start": 546,
              "end": 559
            },
            "property": {
              "type": "Literal",
              "value": "e",
              "raw": "'e'",
              "start": 562,
              "end": 565
            },
            "optional": true,
            "computed": true,
            "start": 546,
            "end": 566
          },
          "start": 546,
          "end": 566
        },
        "prefix": true,
        "start": 539,
        "end": 566
      },
      "directive": null,
      "start": 539,
      "end": 567
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
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
                    "name": "o6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 576,
                    "end": 578
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 579,
                    "end": 580
                  },
                  "optional": false,
                  "computed": false,
                  "start": 576,
                  "end": 580
                },
                "property": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "'c'",
                  "start": 583,
                  "end": 586
                },
                "optional": true,
                "computed": true,
                "start": 576,
                "end": 587
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 588,
                "end": 589
              },
              "optional": false,
              "computed": false,
              "start": 576,
              "end": 589
            },
            "property": {
              "type": "Literal",
              "value": "e",
              "raw": "'e'",
              "start": 592,
              "end": 595
            },
            "optional": true,
            "computed": true,
            "start": 576,
            "end": 596
          },
          "start": 576,
          "end": 596
        },
        "prefix": true,
        "start": 568,
        "end": 597
      },
      "directive": null,
      "start": 568,
      "end": 598
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 598
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
    "type": "Keyword",
    "value": "delete",
    "start": 45,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 52,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 54,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 69,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 76,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 84,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 90,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 94,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 128,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 135,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 137,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 139,
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
    "value": "c",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 144,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 152,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 154,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 163,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 171,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 177,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 186,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 203,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 215,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 222,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 226,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 231,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 239,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 243,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 250,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 258,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 264,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Keyword",
    "value": "delete",
    "start": 306,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 313,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 317,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 322,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 327,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 335,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 339,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 345,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 350,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 358,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 362,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 367,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 374,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 382,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 388,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 416,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 432,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 439,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 443,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 451,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 456,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 464,
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
    "value": "b",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 468,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 476,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 483,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 491,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 497,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 523,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 539,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 546,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 550,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 552,
    "end": 553
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 553,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 559,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 561,
    "end": 562
  },
  {
    "type": "String",
    "value": "'e'",
    "start": 562,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 568,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 576,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 580,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 582,
    "end": 583
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 583,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 589,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 591,
    "end": 592
  },
  {
    "type": "String",
    "value": "'e'",
    "start": 592,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598
  }
]
```
