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
            "type": "Literal",
            "value": "b",
            "raw": "\"b\"",
            "start": 50,
            "end": 53
          },
          "optional": true,
          "computed": true,
          "start": 45,
          "end": 54
        },
        "start": 45,
        "end": 54
      },
      "directive": null,
      "start": 45,
      "end": 55
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
                    "start": 75,
                    "end": 84
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
                          "start": 89,
                          "end": 90
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
                                  "start": 94,
                                  "end": 95
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 97,
                                    "end": 103
                                  },
                                  "start": 95,
                                  "end": 103
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 94,
                                "end": 103
                              }
                            ],
                            "start": 92,
                            "end": 105
                          },
                          "start": 90,
                          "end": 105
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 89,
                        "end": 105
                      }
                    ],
                    "start": 87,
                    "end": 107
                  }
                ],
                "start": 75,
                "end": 107
              },
              "start": 73,
              "end": 107
            },
            "start": 71,
            "end": 107
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 107
        }
      ],
      "declare": true,
      "start": 57,
      "end": 108
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
              "start": 109,
              "end": 111
            },
            "property": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 114,
              "end": 117
            },
            "optional": true,
            "computed": true,
            "start": 109,
            "end": 118
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 120
          },
          "optional": false,
          "computed": false,
          "start": 109,
          "end": 120
        },
        "start": 109,
        "end": 120
      },
      "directive": null,
      "start": 109,
      "end": 121
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
              "start": 122,
              "end": 124
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 127
            },
            "optional": true,
            "computed": false,
            "start": 122,
            "end": 127
          },
          "property": {
            "type": "Literal",
            "value": "c",
            "raw": "\"c\"",
            "start": 128,
            "end": 131
          },
          "optional": false,
          "computed": true,
          "start": 122,
          "end": 132
        },
        "start": 122,
        "end": 132
      },
      "directive": null,
      "start": 122,
      "end": 133
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
                      "start": 155,
                      "end": 156
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 158,
                            "end": 167
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
                                  "start": 172,
                                  "end": 173
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 175,
                                    "end": 181
                                  },
                                  "start": 173,
                                  "end": 181
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 172,
                                "end": 181
                              }
                            ],
                            "start": 170,
                            "end": 183
                          }
                        ],
                        "start": 158,
                        "end": 183
                      },
                      "start": 156,
                      "end": 183
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 155,
                    "end": 183
                  }
                ],
                "start": 153,
                "end": 185
              },
              "start": 151,
              "end": 185
            },
            "start": 149,
            "end": 185
          },
          "init": null,
          "definite": false,
          "start": 149,
          "end": 185
        }
      ],
      "declare": true,
      "start": 135,
      "end": 186
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
              "start": 187,
              "end": 189
            },
            "property": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 190,
              "end": 193
            },
            "optional": false,
            "computed": true,
            "start": 187,
            "end": 194
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 197
          },
          "optional": true,
          "computed": false,
          "start": 187,
          "end": 197
        },
        "start": 187,
        "end": 197
      },
      "directive": null,
      "start": 187,
      "end": 198
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
              "start": 199,
              "end": 201
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 203
            },
            "optional": false,
            "computed": false,
            "start": 199,
            "end": 203
          },
          "property": {
            "type": "Literal",
            "value": "c",
            "raw": "\"c\"",
            "start": 206,
            "end": 209
          },
          "optional": true,
          "computed": true,
          "start": 199,
          "end": 210
        },
        "start": 199,
        "end": 210
      },
      "directive": null,
      "start": 199,
      "end": 211
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
                      "start": 233,
                      "end": 234
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
                              "start": 239,
                              "end": 240
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
                                      "start": 244,
                                      "end": 245
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
                                              "start": 250,
                                              "end": 251
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "start": 253,
                                                "end": 259
                                              },
                                              "start": 251,
                                              "end": 259
                                            },
                                            "accessibility": null,
                                            "static": false,
                                            "start": 250,
                                            "end": 259
                                          }
                                        ],
                                        "start": 248,
                                        "end": 261
                                      },
                                      "start": 246,
                                      "end": 261
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 244,
                                    "end": 261
                                  }
                                ],
                                "start": 242,
                                "end": 263
                              },
                              "start": 240,
                              "end": 263
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 239,
                            "end": 263
                          }
                        ],
                        "start": 237,
                        "end": 265
                      },
                      "start": 235,
                      "end": 265
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 233,
                    "end": 265
                  }
                ],
                "start": 231,
                "end": 267
              },
              "start": 229,
              "end": 267
            },
            "start": 227,
            "end": 267
          },
          "init": null,
          "definite": false,
          "start": 227,
          "end": 267
        }
      ],
      "declare": true,
      "start": 213,
      "end": 268
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
                  "start": 269,
                  "end": 271
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 272,
                  "end": 273
                },
                "optional": false,
                "computed": false,
                "start": 269,
                "end": 273
              },
              "property": {
                "type": "Literal",
                "value": "c",
                "raw": "\"c\"",
                "start": 276,
                "end": 279
              },
              "optional": true,
              "computed": true,
              "start": 269,
              "end": 280
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 282
            },
            "optional": false,
            "computed": false,
            "start": 269,
            "end": 282
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 285
          },
          "optional": true,
          "computed": false,
          "start": 269,
          "end": 285
        },
        "start": 269,
        "end": 285
      },
      "directive": null,
      "start": 269,
      "end": 286
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
                  "start": 287,
                  "end": 289
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 290,
                  "end": 291
                },
                "optional": false,
                "computed": false,
                "start": 287,
                "end": 291
              },
              "property": {
                "type": "Literal",
                "value": "c",
                "raw": "\"c\"",
                "start": 294,
                "end": 297
              },
              "optional": true,
              "computed": true,
              "start": 287,
              "end": 298
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 300
            },
            "optional": false,
            "computed": false,
            "start": 287,
            "end": 300
          },
          "property": {
            "type": "Literal",
            "value": "e",
            "raw": "\"e\"",
            "start": 303,
            "end": 306
          },
          "optional": true,
          "computed": true,
          "start": 287,
          "end": 307
        },
        "start": 287,
        "end": 307
      },
      "directive": null,
      "start": 287,
      "end": 308
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
                      "start": 330,
                      "end": 331
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
                              "start": 338,
                              "end": 339
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
                                      "start": 343,
                                      "end": 344
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
                                              "start": 349,
                                              "end": 350
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "start": 352,
                                                "end": 358
                                              },
                                              "start": 350,
                                              "end": 358
                                            },
                                            "accessibility": null,
                                            "static": false,
                                            "start": 349,
                                            "end": 358
                                          }
                                        ],
                                        "start": 347,
                                        "end": 360
                                      },
                                      "start": 345,
                                      "end": 360
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 343,
                                    "end": 360
                                  }
                                ],
                                "start": 341,
                                "end": 362
                              },
                              "start": 339,
                              "end": 362
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 338,
                            "end": 362
                          }
                        ],
                        "start": 336,
                        "end": 364
                      },
                      "start": 334,
                      "end": 364
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 330,
                    "end": 364
                  }
                ],
                "start": 328,
                "end": 366
              },
              "start": 326,
              "end": 366
            },
            "start": 324,
            "end": 366
          },
          "init": null,
          "definite": false,
          "start": 324,
          "end": 366
        }
      ],
      "declare": true,
      "start": 310,
      "end": 367
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
                    "start": 368,
                    "end": 370
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 371,
                    "end": 372
                  },
                  "optional": false,
                  "computed": false,
                  "start": 368,
                  "end": 372
                },
                "typeArguments": null,
                "arguments": [],
                "optional": true,
                "start": 368,
                "end": 376
              },
              "property": {
                "type": "Literal",
                "value": "c",
                "raw": "\"c\"",
                "start": 377,
                "end": 380
              },
              "optional": false,
              "computed": true,
              "start": 368,
              "end": 381
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 383
            },
            "optional": false,
            "computed": false,
            "start": 368,
            "end": 383
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 385,
            "end": 386
          },
          "optional": true,
          "computed": false,
          "start": 368,
          "end": 386
        },
        "start": 368,
        "end": 386
      },
      "directive": null,
      "start": 368,
      "end": 387
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
                    "start": 388,
                    "end": 390
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 391,
                    "end": 392
                  },
                  "optional": false,
                  "computed": false,
                  "start": 388,
                  "end": 392
                },
                "typeArguments": null,
                "arguments": [],
                "optional": true,
                "start": 388,
                "end": 396
              },
              "property": {
                "type": "Literal",
                "value": "c",
                "raw": "\"c\"",
                "start": 397,
                "end": 400
              },
              "optional": false,
              "computed": true,
              "start": 388,
              "end": 401
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 403
            },
            "optional": false,
            "computed": false,
            "start": 388,
            "end": 403
          },
          "property": {
            "type": "Literal",
            "value": "e",
            "raw": "\"e\"",
            "start": 406,
            "end": 409
          },
          "optional": true,
          "computed": true,
          "start": 388,
          "end": 410
        },
        "start": 388,
        "end": 410
      },
      "directive": null,
      "start": 388,
      "end": 411
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
                    "start": 412,
                    "end": 414
                  },
                  "property": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 415,
                    "end": 418
                  },
                  "optional": false,
                  "computed": true,
                  "start": 412,
                  "end": 419
                },
                "typeArguments": null,
                "arguments": [],
                "optional": true,
                "start": 412,
                "end": 423
              },
              "property": {
                "type": "Literal",
                "value": "c",
                "raw": "\"c\"",
                "start": 424,
                "end": 427
              },
              "optional": false,
              "computed": true,
              "start": 412,
              "end": 428
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 430
            },
            "optional": false,
            "computed": false,
            "start": 412,
            "end": 430
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 433
          },
          "optional": true,
          "computed": false,
          "start": 412,
          "end": 433
        },
        "start": 412,
        "end": 433
      },
      "directive": null,
      "start": 412,
      "end": 434
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
                    "start": 435,
                    "end": 437
                  },
                  "property": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 438,
                    "end": 441
                  },
                  "optional": false,
                  "computed": true,
                  "start": 435,
                  "end": 442
                },
                "typeArguments": null,
                "arguments": [],
                "optional": true,
                "start": 435,
                "end": 446
              },
              "property": {
                "type": "Literal",
                "value": "c",
                "raw": "\"c\"",
                "start": 447,
                "end": 450
              },
              "optional": false,
              "computed": true,
              "start": 435,
              "end": 451
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 453
            },
            "optional": false,
            "computed": false,
            "start": 435,
            "end": 453
          },
          "property": {
            "type": "Literal",
            "value": "e",
            "raw": "\"e\"",
            "start": 456,
            "end": 459
          },
          "optional": true,
          "computed": true,
          "start": 435,
          "end": 460
        },
        "start": 435,
        "end": 460
      },
      "directive": null,
      "start": 435,
      "end": 461
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
                        "start": 494,
                        "end": 495
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 494,
                      "end": 495
                    }
                  ],
                  "start": 493,
                  "end": 496
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 502,
                        "end": 511
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
                              "start": 517,
                              "end": 518
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 520,
                                "end": 526
                              },
                              "start": 518,
                              "end": 526
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 517,
                            "end": 526
                          }
                        ],
                        "start": 515,
                        "end": 528
                      }
                    ],
                    "start": 502,
                    "end": 529
                  },
                  "start": 499,
                  "end": 529
                },
                "start": 493,
                "end": 529
              },
              "start": 491,
              "end": 529
            },
            "start": 489,
            "end": 529
          },
          "init": null,
          "definite": false,
          "start": 489,
          "end": 529
        }
      ],
      "declare": true,
      "start": 475,
      "end": 530
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
              "start": 531,
              "end": 533
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 534,
                  "end": 540
                }
              ],
              "start": 533,
              "end": 541
            },
            "arguments": [],
            "optional": false,
            "start": 531,
            "end": 543
          },
          "property": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 546,
            "end": 549
          },
          "optional": true,
          "computed": true,
          "start": 531,
          "end": 550
        },
        "start": 531,
        "end": 550
      },
      "directive": null,
      "start": 531,
      "end": 551
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
                "start": 565,
                "end": 567
              },
              "property": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 570,
                "end": 573
              },
              "optional": true,
              "computed": true,
              "start": 565,
              "end": 574
            },
            "start": 565,
            "end": 575
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 577
          },
          "optional": false,
          "computed": false,
          "start": 565,
          "end": 577
        },
        "start": 565,
        "end": 577
      },
      "directive": null,
      "start": 565,
      "end": 578
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
                "start": 579,
                "end": 581
              },
              "property": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 584,
                "end": 587
              },
              "optional": true,
              "computed": true,
              "start": 579,
              "end": 588
            },
            "start": 579,
            "end": 589
          },
          "property": {
            "type": "Literal",
            "value": "c",
            "raw": "\"c\"",
            "start": 590,
            "end": 593
          },
          "optional": false,
          "computed": true,
          "start": 579,
          "end": 594
        },
        "start": 579,
        "end": 594
      },
      "directive": null,
      "start": 579,
      "end": 595
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
                  "start": 596,
                  "end": 598
                },
                "property": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 601,
                  "end": 604
                },
                "optional": true,
                "computed": true,
                "start": 596,
                "end": 605
              },
              "start": 596,
              "end": 606
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 607,
              "end": 608
            },
            "optional": false,
            "computed": false,
            "start": 596,
            "end": 608
          },
          "start": 596,
          "end": 609
        },
        "start": 596,
        "end": 609
      },
      "directive": null,
      "start": 596,
      "end": 610
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
                  "start": 611,
                  "end": 613
                },
                "property": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 616,
                  "end": 619
                },
                "optional": true,
                "computed": true,
                "start": 611,
                "end": 620
              },
              "start": 611,
              "end": 621
            },
            "property": {
              "type": "Literal",
              "value": "c",
              "raw": "\"c\"",
              "start": 622,
              "end": 625
            },
            "optional": false,
            "computed": true,
            "start": 611,
            "end": 626
          },
          "start": 611,
          "end": 627
        },
        "start": 611,
        "end": 627
      },
      "directive": null,
      "start": 611,
      "end": 628
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 628
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
    "type": "Punctuator",
    "value": "[",
    "start": 49,
    "end": 50
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 50,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 57,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 71,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 75,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 97,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 109,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 111,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 113,
    "end": 114
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 114,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 122,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 124,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 127,
    "end": 128
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 128,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 135,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 143,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 149,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 158,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 175,
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
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 187,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 189,
    "end": 190
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 190,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 194,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 199,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 205,
    "end": 206
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 213,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 221,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 227,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "c",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 253,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 273,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 275,
    "end": 276
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 276,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 282,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 287,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 291,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 293,
    "end": 294
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 294,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 300,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 302,
    "end": 303
  },
  {
    "type": "String",
    "value": "\"e\"",
    "start": 303,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 310,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 318,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 324,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 352,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 368,
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
    "value": "b",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 372,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 376,
    "end": 377
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 377,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 383,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
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
    "value": ".",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 392,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 396,
    "end": 397
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 397,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 403,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 405,
    "end": 406
  },
  {
    "type": "String",
    "value": "\"e\"",
    "start": 406,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 412,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 414,
    "end": 415
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 415,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 419,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 423,
    "end": 424
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 424,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 430,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 435,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 437,
    "end": 438
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 438,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 446,
    "end": 447
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 447,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 453,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 455,
    "end": 456
  },
  {
    "type": "String",
    "value": "\"e\"",
    "start": 456,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 475,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 483,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 489,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 499,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 502,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 520,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 531,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 534,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 543,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 545,
    "end": 546
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 546,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "o2",
    "start": 565,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 567,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 569,
    "end": 570
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 570,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 579,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 581,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 583,
    "end": 584
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 584,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 589,
    "end": 590
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 590,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 596,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 598,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 600,
    "end": 601
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 601,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 611,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 613,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 615,
    "end": 616
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 616,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 621,
    "end": 622
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 622,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 627,
    "end": 628
  }
]
```
