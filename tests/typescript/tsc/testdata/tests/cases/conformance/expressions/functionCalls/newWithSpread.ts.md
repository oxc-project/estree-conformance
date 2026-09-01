__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSNumberKeyword",
              "start": 14,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "start": 11,
          "end": 20
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 25,
              "end": 31
            },
            "start": 23,
            "end": 31
          },
          "start": 22,
          "end": 31
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              },
              "start": 39,
              "end": 47
            },
            "start": 37,
            "end": 47
          },
          "value": null,
          "start": 33,
          "end": 47
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 49,
        "end": 52
      },
      "expression": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 65
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 70
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 72,
                "end": 78
              },
              "start": 72,
              "end": 80
            },
            "start": 70,
            "end": 80
          },
          "value": null,
          "start": 66,
          "end": 80
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 82,
        "end": 85
      },
      "expression": false,
      "start": 54,
      "end": 85
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 98
      },
      "typeParameters": null,
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 106
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "type": "TSNumberKeyword",
                            "start": 126,
                            "end": 132
                          },
                          "start": 124,
                          "end": 132
                        },
                        "start": 123,
                        "end": 132
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 137,
                            "end": 143
                          },
                          "start": 135,
                          "end": 143
                        },
                        "start": 134,
                        "end": 143
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 148,
                          "end": 149
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 151,
                              "end": 157
                            },
                            "start": 151,
                            "end": 159
                          },
                          "start": 149,
                          "end": 159
                        },
                        "value": null,
                        "start": 145,
                        "end": 159
                      }
                    ],
                    "returnType": null,
                    "start": 118,
                    "end": 161
                  }
                ],
                "start": 108,
                "end": 167
              },
              "start": 106,
              "end": 167
            },
            "accessibility": null,
            "static": false,
            "start": 105,
            "end": 167
          }
        ],
        "start": 99,
        "end": 169
      },
      "declare": false,
      "start": 87,
      "end": 169
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 177,
        "end": 178
      },
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
              "start": 185,
              "end": 196
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "type": "TSNumberKeyword",
                      "start": 200,
                      "end": 206
                    },
                    "start": 198,
                    "end": 206
                  },
                  "start": 197,
                  "end": 206
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 211,
                      "end": 217
                    },
                    "start": 209,
                    "end": 217
                  },
                  "start": 208,
                  "end": 217
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 222,
                    "end": 223
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 225,
                        "end": 231
                      },
                      "start": 225,
                      "end": 233
                    },
                    "start": 223,
                    "end": 233
                  },
                  "value": null,
                  "start": 219,
                  "end": 233
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 235,
                "end": 237
              },
              "expression": false,
              "start": 196,
              "end": 237
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 185,
            "end": 237
          }
        ],
        "start": 179,
        "end": 239
      },
      "abstract": false,
      "declare": false,
      "start": 171,
      "end": 239
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 252
      },
      "typeParameters": null,
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
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 259,
              "end": 264
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 274
                },
                "typeArguments": null,
                "start": 266,
                "end": 274
              },
              "start": 264,
              "end": 274
            },
            "accessibility": null,
            "static": false,
            "start": 259,
            "end": 275
          }
        ],
        "start": 253,
        "end": 277
      },
      "declare": false,
      "start": 241,
      "end": 277
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 289,
        "end": 290
      },
      "typeParameters": null,
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
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 297,
              "end": 298
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 307,
                  "end": 308
                },
                "typeArguments": null,
                "start": 300,
                "end": 308
              },
              "start": 298,
              "end": 308
            },
            "accessibility": null,
            "static": false,
            "start": 297,
            "end": 309
          }
        ],
        "start": 291,
        "end": 311
      },
      "declare": false,
      "start": 279,
      "end": 311
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 320,
                  "end": 326
                },
                "start": 320,
                "end": 328
              },
              "start": 318,
              "end": 328
            },
            "start": 317,
            "end": 328
          },
          "init": null,
          "definite": false,
          "start": 317,
          "end": 328
        }
      ],
      "declare": false,
      "start": 313,
      "end": 329
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 338
                },
                "typeArguments": null,
                "start": 337,
                "end": 338
              },
              "start": 335,
              "end": 338
            },
            "start": 334,
            "end": 338
          },
          "init": null,
          "definite": false,
          "start": 334,
          "end": 338
        }
      ],
      "declare": false,
      "start": 330,
      "end": 339
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 347,
                  "end": 348
                },
                "typeArguments": null,
                "start": 347,
                "end": 348
              },
              "start": 345,
              "end": 348
            },
            "start": 344,
            "end": 348
          },
          "init": null,
          "definite": false,
          "start": 344,
          "end": 348
        }
      ],
      "declare": false,
      "start": 340,
      "end": 349
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 357,
                    "end": 358
                  },
                  "typeArguments": null,
                  "start": 357,
                  "end": 358
                },
                "start": 357,
                "end": 360
              },
              "start": 355,
              "end": 360
            },
            "start": 354,
            "end": 360
          },
          "init": null,
          "definite": false,
          "start": 354,
          "end": 360
        }
      ],
      "declare": false,
      "start": 350,
      "end": 361
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 377,
                            "end": 383
                          },
                          "start": 375,
                          "end": 383
                        },
                        "start": 372,
                        "end": 383
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 386,
                          "end": 387
                        },
                        "typeArguments": null,
                        "start": 386,
                        "end": 387
                      },
                      "start": 384,
                      "end": 387
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 371,
                    "end": 387
                  }
                ],
                "start": 369,
                "end": 389
              },
              "start": 367,
              "end": 389
            },
            "start": 366,
            "end": 389
          },
          "init": null,
          "definite": false,
          "start": 366,
          "end": 389
        }
      ],
      "declare": false,
      "start": 362,
      "end": 390
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 398,
                    "end": 399
                  },
                  "typeArguments": null,
                  "start": 398,
                  "end": 399
                },
                "start": 398,
                "end": 401
              },
              "start": 396,
              "end": 401
            },
            "start": 395,
            "end": 401
          },
          "init": null,
          "definite": false,
          "start": 395,
          "end": 401
        }
      ],
      "declare": false,
      "start": 391,
      "end": 402
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 418,
                            "end": 424
                          },
                          "start": 416,
                          "end": 424
                        },
                        "start": 413,
                        "end": 424
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 427,
                          "end": 428
                        },
                        "typeArguments": null,
                        "start": 427,
                        "end": 428
                      },
                      "start": 425,
                      "end": 428
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 412,
                    "end": 428
                  }
                ],
                "start": 410,
                "end": 430
              },
              "start": 408,
              "end": 430
            },
            "start": 407,
            "end": 430
          },
          "init": null,
          "definite": false,
          "start": 407,
          "end": 430
        }
      ],
      "declare": false,
      "start": 403,
      "end": 431
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 439,
                      "end": 440
                    },
                    "typeArguments": null,
                    "start": 439,
                    "end": 440
                  },
                  "start": 439,
                  "end": 442
                },
                "start": 439,
                "end": 444
              },
              "start": 437,
              "end": 444
            },
            "start": 436,
            "end": 444
          },
          "init": null,
          "definite": false,
          "start": 436,
          "end": 444
        }
      ],
      "declare": false,
      "start": 432,
      "end": 445
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 471,
          "end": 472
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 473,
            "end": 474
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 476,
            "end": 477
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 479,
            "end": 487
          }
        ],
        "start": 467,
        "end": 488
      },
      "directive": null,
      "start": 467,
      "end": 489
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 494,
          "end": 495
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 496,
            "end": 497
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 499,
            "end": 500
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 506
            },
            "start": 502,
            "end": 506
          }
        ],
        "start": 490,
        "end": 507
      },
      "directive": null,
      "start": 490,
      "end": 508
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 513,
          "end": 514
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 515,
            "end": 516
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 518,
            "end": 519
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 524,
              "end": 525
            },
            "start": 521,
            "end": 525
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 527,
            "end": 535
          }
        ],
        "start": 509,
        "end": 536
      },
      "directive": null,
      "start": 509,
      "end": 537
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 573,
          "end": 575
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 579,
              "end": 580
            },
            "start": 576,
            "end": 580
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 585,
              "end": 586
            },
            "start": 582,
            "end": 586
          }
        ],
        "start": 569,
        "end": 587
      },
      "directive": null,
      "start": 569,
      "end": 588
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 593,
          "end": 594
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 595,
            "end": 596
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 598,
            "end": 599
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 605
            },
            "start": 601,
            "end": 605
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 610,
              "end": 611
            },
            "start": 607,
            "end": 611
          }
        ],
        "start": 589,
        "end": 612
      },
      "directive": null,
      "start": 589,
      "end": 613
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 638,
            "end": 639
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 640,
              "end": 641
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 643,
              "end": 644
            },
            {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 646,
              "end": 654
            }
          ],
          "start": 634,
          "end": 655
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 634,
        "end": 657
      },
      "directive": null,
      "start": 634,
      "end": 658
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 663,
            "end": 664
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 665,
              "end": 666
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 668,
              "end": 669
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 674,
                "end": 675
              },
              "start": 671,
              "end": 675
            }
          ],
          "start": 659,
          "end": 676
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 659,
        "end": 678
      },
      "directive": null,
      "start": 659,
      "end": 679
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 684,
            "end": 685
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 686,
              "end": 687
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 689,
              "end": 690
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 695,
                "end": 696
              },
              "start": 692,
              "end": 696
            },
            {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 698,
              "end": 706
            }
          ],
          "start": 680,
          "end": 707
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 680,
        "end": 709
      },
      "directive": null,
      "start": 680,
      "end": 710
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 746,
            "end": 747
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 748,
            "end": 749
          },
          "optional": false,
          "computed": false,
          "start": 746,
          "end": 749
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 750,
            "end": 751
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 753,
            "end": 754
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 756,
            "end": 764
          }
        ],
        "start": 742,
        "end": 765
      },
      "directive": null,
      "start": 742,
      "end": 766
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 771,
            "end": 772
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 773,
            "end": 774
          },
          "optional": false,
          "computed": false,
          "start": 771,
          "end": 774
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 775,
            "end": 776
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 778,
            "end": 779
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 784,
              "end": 785
            },
            "start": 781,
            "end": 785
          }
        ],
        "start": 767,
        "end": 786
      },
      "directive": null,
      "start": 767,
      "end": 787
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 792,
            "end": 793
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 794,
            "end": 795
          },
          "optional": false,
          "computed": false,
          "start": 792,
          "end": 795
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 796,
            "end": 797
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 799,
            "end": 800
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 805,
              "end": 806
            },
            "start": 802,
            "end": 806
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 808,
            "end": 816
          }
        ],
        "start": 788,
        "end": 817
      },
      "directive": null,
      "start": 788,
      "end": 818
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 854,
            "end": 855
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 856,
            "end": 857
          },
          "optional": false,
          "computed": false,
          "start": 854,
          "end": 857
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 859,
            "end": 860
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 862,
            "end": 863
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 865,
            "end": 873
          }
        ],
        "start": 849,
        "end": 874
      },
      "directive": null,
      "start": 849,
      "end": 875
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 881,
            "end": 882
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 883,
            "end": 884
          },
          "optional": false,
          "computed": false,
          "start": 881,
          "end": 884
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 886,
            "end": 887
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 889,
            "end": 890
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 896
            },
            "start": 892,
            "end": 896
          }
        ],
        "start": 876,
        "end": 897
      },
      "directive": null,
      "start": 876,
      "end": 898
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 904,
            "end": 905
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 906,
            "end": 907
          },
          "optional": false,
          "computed": false,
          "start": 904,
          "end": 907
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 909,
            "end": 910
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 912,
            "end": 913
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 918,
              "end": 919
            },
            "start": 915,
            "end": 919
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 921,
            "end": 929
          }
        ],
        "start": 899,
        "end": 930
      },
      "directive": null,
      "start": 899,
      "end": 931
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 967,
              "end": 968
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 969,
              "end": 970
            },
            "optional": false,
            "computed": true,
            "start": 967,
            "end": 971
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 972,
            "end": 973
          },
          "optional": false,
          "computed": false,
          "start": 967,
          "end": 973
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 974,
            "end": 975
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 977,
            "end": 978
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 980,
            "end": 988
          }
        ],
        "start": 963,
        "end": 989
      },
      "directive": null,
      "start": 963,
      "end": 990
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 995,
              "end": 996
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 997,
              "end": 998
            },
            "optional": false,
            "computed": true,
            "start": 995,
            "end": 999
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1000,
            "end": 1001
          },
          "optional": false,
          "computed": false,
          "start": 995,
          "end": 1001
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1002,
            "end": 1003
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1005,
            "end": 1006
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1011,
              "end": 1012
            },
            "start": 1008,
            "end": 1012
          }
        ],
        "start": 991,
        "end": 1013
      },
      "directive": null,
      "start": 991,
      "end": 1014
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 1019,
              "end": 1020
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1021,
              "end": 1022
            },
            "optional": false,
            "computed": true,
            "start": 1019,
            "end": 1023
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1024,
            "end": 1025
          },
          "optional": false,
          "computed": false,
          "start": 1019,
          "end": 1025
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1026,
            "end": 1027
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1029,
            "end": 1030
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1035,
              "end": 1036
            },
            "start": 1032,
            "end": 1036
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1038,
            "end": 1046
          }
        ],
        "start": 1015,
        "end": 1047
      },
      "directive": null,
      "start": 1015,
      "end": 1048
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1105,
              "end": 1106
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1107,
              "end": 1112
            },
            "optional": false,
            "computed": true,
            "start": 1105,
            "end": 1113
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1114,
            "end": 1115
          },
          "optional": false,
          "computed": false,
          "start": 1105,
          "end": 1115
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1116,
            "end": 1117
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1119,
            "end": 1120
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1122,
            "end": 1130
          }
        ],
        "start": 1101,
        "end": 1131
      },
      "directive": null,
      "start": 1101,
      "end": 1132
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1137,
              "end": 1138
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1139,
              "end": 1144
            },
            "optional": false,
            "computed": true,
            "start": 1137,
            "end": 1145
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1146,
            "end": 1147
          },
          "optional": false,
          "computed": false,
          "start": 1137,
          "end": 1147
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1148,
            "end": 1149
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1151,
            "end": 1152
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1157,
              "end": 1158
            },
            "start": 1154,
            "end": 1158
          }
        ],
        "start": 1133,
        "end": 1159
      },
      "directive": null,
      "start": 1133,
      "end": 1160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1165,
              "end": 1166
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1167,
              "end": 1172
            },
            "optional": false,
            "computed": true,
            "start": 1165,
            "end": 1173
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1174,
            "end": 1175
          },
          "optional": false,
          "computed": false,
          "start": 1165,
          "end": 1175
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1176,
            "end": 1177
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1179,
            "end": 1180
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1185,
              "end": 1186
            },
            "start": 1182,
            "end": 1186
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1188,
            "end": 1196
          }
        ],
        "start": 1161,
        "end": 1197
      },
      "directive": null,
      "start": 1161,
      "end": 1198
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 1224,
          "end": 1225
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1226,
            "end": 1227
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1229,
            "end": 1230
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1232,
            "end": 1240
          }
        ],
        "start": 1220,
        "end": 1241
      },
      "directive": null,
      "start": 1220,
      "end": 1242
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 1247,
          "end": 1248
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1249,
            "end": 1250
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1252,
            "end": 1253
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1258,
              "end": 1259
            },
            "start": 1255,
            "end": 1259
          }
        ],
        "start": 1243,
        "end": 1260
      },
      "directive": null,
      "start": 1243,
      "end": 1261
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 1266,
          "end": 1267
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1268,
            "end": 1269
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1271,
            "end": 1272
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1277,
              "end": 1278
            },
            "start": 1274,
            "end": 1278
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1280,
            "end": 1288
          }
        ],
        "start": 1262,
        "end": 1289
      },
      "directive": null,
      "start": 1262,
      "end": 1290
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1326,
            "end": 1327
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1328,
            "end": 1333
          },
          "optional": false,
          "computed": true,
          "start": 1326,
          "end": 1334
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1335,
            "end": 1336
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1338,
            "end": 1339
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1341,
            "end": 1349
          }
        ],
        "start": 1322,
        "end": 1350
      },
      "directive": null,
      "start": 1322,
      "end": 1351
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1356,
            "end": 1357
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1358,
            "end": 1363
          },
          "optional": false,
          "computed": true,
          "start": 1356,
          "end": 1364
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1365,
            "end": 1366
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1368,
            "end": 1369
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1374,
              "end": 1375
            },
            "start": 1371,
            "end": 1375
          }
        ],
        "start": 1352,
        "end": 1376
      },
      "directive": null,
      "start": 1352,
      "end": 1377
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1382,
            "end": 1383
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1384,
            "end": 1389
          },
          "optional": false,
          "computed": true,
          "start": 1382,
          "end": 1390
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1391,
            "end": 1392
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1394,
            "end": 1395
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1400,
              "end": 1401
            },
            "start": 1397,
            "end": 1401
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1403,
            "end": 1411
          }
        ],
        "start": 1378,
        "end": 1412
      },
      "directive": null,
      "start": 1378,
      "end": 1413
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1448,
            "end": 1449
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1450,
            "end": 1455
          },
          "optional": false,
          "computed": true,
          "start": 1448,
          "end": 1456
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1458,
            "end": 1459
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1461,
            "end": 1462
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1464,
            "end": 1472
          }
        ],
        "start": 1443,
        "end": 1473
      },
      "directive": null,
      "start": 1443,
      "end": 1474
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1480,
            "end": 1481
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1482,
            "end": 1487
          },
          "optional": false,
          "computed": true,
          "start": 1480,
          "end": 1488
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1490,
            "end": 1491
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1493,
            "end": 1494
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1499,
              "end": 1500
            },
            "start": 1496,
            "end": 1500
          }
        ],
        "start": 1475,
        "end": 1501
      },
      "directive": null,
      "start": 1475,
      "end": 1502
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1508,
            "end": 1509
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1510,
            "end": 1515
          },
          "optional": false,
          "computed": true,
          "start": 1508,
          "end": 1516
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1518,
            "end": 1519
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1521,
            "end": 1522
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1527,
              "end": 1528
            },
            "start": 1524,
            "end": 1528
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1530,
            "end": 1538
          }
        ],
        "start": 1503,
        "end": 1539
      },
      "directive": null,
      "start": 1503,
      "end": 1540
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1575,
              "end": 1576
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1577,
              "end": 1578
            },
            "optional": false,
            "computed": true,
            "start": 1575,
            "end": 1579
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1580,
            "end": 1585
          },
          "optional": false,
          "computed": true,
          "start": 1575,
          "end": 1586
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1587,
            "end": 1588
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1590,
            "end": 1591
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1593,
            "end": 1601
          }
        ],
        "start": 1571,
        "end": 1602
      },
      "directive": null,
      "start": 1571,
      "end": 1603
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1608,
              "end": 1609
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1610,
              "end": 1611
            },
            "optional": false,
            "computed": true,
            "start": 1608,
            "end": 1612
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1613,
            "end": 1618
          },
          "optional": false,
          "computed": true,
          "start": 1608,
          "end": 1619
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1620,
            "end": 1621
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1623,
            "end": 1624
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1629,
              "end": 1630
            },
            "start": 1626,
            "end": 1630
          }
        ],
        "start": 1604,
        "end": 1631
      },
      "directive": null,
      "start": 1604,
      "end": 1632
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1637,
              "end": 1638
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1639,
              "end": 1640
            },
            "optional": false,
            "computed": true,
            "start": 1637,
            "end": 1641
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1642,
            "end": 1647
          },
          "optional": false,
          "computed": true,
          "start": 1637,
          "end": 1648
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1649,
            "end": 1650
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1652,
            "end": 1653
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1658,
              "end": 1659
            },
            "start": 1655,
            "end": 1659
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1661,
            "end": 1669
          }
        ],
        "start": 1633,
        "end": 1670
      },
      "directive": null,
      "start": 1633,
      "end": 1671
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 1728,
              "end": 1729
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1730,
              "end": 1735
            },
            "optional": false,
            "computed": true,
            "start": 1728,
            "end": 1736
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1737,
            "end": 1742
          },
          "optional": false,
          "computed": true,
          "start": 1728,
          "end": 1743
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1744,
            "end": 1745
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1747,
            "end": 1748
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1750,
            "end": 1758
          }
        ],
        "start": 1724,
        "end": 1759
      },
      "directive": null,
      "start": 1724,
      "end": 1760
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 1765,
              "end": 1766
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1767,
              "end": 1772
            },
            "optional": false,
            "computed": true,
            "start": 1765,
            "end": 1773
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1774,
            "end": 1779
          },
          "optional": false,
          "computed": true,
          "start": 1765,
          "end": 1780
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1781,
            "end": 1782
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1784,
            "end": 1785
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1790,
              "end": 1791
            },
            "start": 1787,
            "end": 1791
          }
        ],
        "start": 1761,
        "end": 1792
      },
      "directive": null,
      "start": 1761,
      "end": 1793
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 1798,
              "end": 1799
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1800,
              "end": 1805
            },
            "optional": false,
            "computed": true,
            "start": 1798,
            "end": 1806
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1807,
            "end": 1812
          },
          "optional": false,
          "computed": true,
          "start": 1798,
          "end": 1813
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1814,
            "end": 1815
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1817,
            "end": 1818
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1823,
              "end": 1824
            },
            "start": 1820,
            "end": 1824
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1826,
            "end": 1834
          }
        ],
        "start": 1794,
        "end": 1835
      },
      "directive": null,
      "start": 1794,
      "end": 1836
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1885,
              "end": 1886
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1887,
              "end": 1892
            },
            "optional": false,
            "computed": true,
            "start": 1885,
            "end": 1893
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1894,
            "end": 1895
          },
          "optional": false,
          "computed": true,
          "start": 1885,
          "end": 1896
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1897,
            "end": 1898
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1900,
            "end": 1901
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1903,
            "end": 1911
          }
        ],
        "start": 1881,
        "end": 1912
      },
      "directive": null,
      "start": 1881,
      "end": 1913
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1918,
              "end": 1919
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1920,
              "end": 1925
            },
            "optional": false,
            "computed": true,
            "start": 1918,
            "end": 1926
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1927,
            "end": 1928
          },
          "optional": false,
          "computed": true,
          "start": 1918,
          "end": 1929
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1930,
            "end": 1931
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1933,
            "end": 1934
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1939,
              "end": 1940
            },
            "start": 1936,
            "end": 1940
          }
        ],
        "start": 1914,
        "end": 1941
      },
      "directive": null,
      "start": 1914,
      "end": 1942
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1947,
              "end": 1948
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1949,
              "end": 1954
            },
            "optional": false,
            "computed": true,
            "start": 1947,
            "end": 1955
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1956,
            "end": 1957
          },
          "optional": false,
          "computed": true,
          "start": 1947,
          "end": 1958
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1959,
            "end": 1960
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1962,
            "end": 1963
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1968,
              "end": 1969
            },
            "start": 1965,
            "end": 1969
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1971,
            "end": 1979
          }
        ],
        "start": 1943,
        "end": 1980
      },
      "directive": null,
      "start": 1943,
      "end": 1981
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1981
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 33,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 54,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 63,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 66,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 87,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 118,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 126,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 137,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 145,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 151,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 171,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 185,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 211,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 219,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "value": "string",
    "start": 225,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 241,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 253,
    "end": 254
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 259,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 266,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 279,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 300,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 313,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 320,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 330,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 340,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Identifier",
    "value": "C",
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
    "value": "var",
    "start": 350,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 362,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 372,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 377,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 386,
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
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 391,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 399,
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
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 403,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 413,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 418,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "value": "var",
    "start": 432,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 440,
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
    "value": "[",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 467,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 472,
    "end": 473
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 474,
    "end": 475
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 477,
    "end": 478
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 479,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
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
    "value": "new",
    "start": 490,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 497,
    "end": 498
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 502,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 509,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 516,
    "end": 517
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 521,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 525,
    "end": 526
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 527,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 569,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 573,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 576,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 582,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 587,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 589,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 594,
    "end": 595
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 597,
    "end": 598
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 601,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 607,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 634,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 641,
    "end": 642
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 644,
    "end": 645
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 646,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 659,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 666,
    "end": 667
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 671,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 680,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 685,
    "end": 686
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 687,
    "end": 688
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 692,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 696,
    "end": 697
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 698,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 742,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 749,
    "end": 750
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 751,
    "end": 752
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 754,
    "end": 755
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 756,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 765,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 767,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 774,
    "end": 775
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 776,
    "end": 777
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 781,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 786,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 788,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 797,
    "end": 798
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 802,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 806,
    "end": 807
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 808,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 849,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 858,
    "end": 859
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 860,
    "end": 861
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 863,
    "end": 864
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 865,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 874,
    "end": 875
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 876,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 885,
    "end": 886
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 887,
    "end": 888
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 892,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 897,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 899,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 908,
    "end": 909
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 910,
    "end": 911
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 915,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 919,
    "end": 920
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 921,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 930,
    "end": 931
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 963,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 968,
    "end": 969
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 973,
    "end": 974
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 975,
    "end": 976
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 978,
    "end": 979
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 980,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 989,
    "end": 990
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 991,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 996,
    "end": 997
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1008,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1015,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1032,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1038,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1101,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1107,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1122,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1133,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1139,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1154,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1161,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1167,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1182,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1188,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1220,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1232,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1243,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1255,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1262,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1274,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1280,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1322,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1328,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1341,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1352,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1358,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1371,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1378,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1384,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1397,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1403,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1443,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1450,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1464,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1475,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1482,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1496,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1503,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1510,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1524,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1530,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1571,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1580,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1593,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1604,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1613,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1626,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1633,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1642,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1655,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1661,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1724,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1730,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1737,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1750,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1761,
    "end": 1764
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1767,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1774,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1787,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1794,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1800,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1807,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1820,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1826,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1881,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1887,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1903,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1914,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1920,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1936,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1943,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1949,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1965,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1971,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1980,
    "end": 1981
  }
]
```
