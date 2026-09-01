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
        "name": "Result",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 72
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
              "start": 73,
              "end": 74
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 73,
            "end": 74
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 76,
            "end": 77
          }
        ],
        "start": 72,
        "end": 78
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 92
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 101
              },
              "optional": false,
              "computed": false,
              "start": 86,
              "end": 101
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 115
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 116,
                        "end": 117
                      },
                      "typeArguments": null,
                      "start": 116,
                      "end": 117
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 119,
                        "end": 120
                      },
                      "typeArguments": null,
                      "start": 119,
                      "end": 120
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "start": 122,
                      "end": 129
                    }
                  ],
                  "start": 115,
                  "end": 130
                },
                "start": 106,
                "end": 130
              },
              "start": 104,
              "end": 130
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 85,
            "end": 130
          }
        ],
        "start": 79,
        "end": 132
      },
      "declare": false,
      "start": 56,
      "end": 132
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Book",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 143
      },
      "typeParameters": null,
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 150
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 152,
                "end": 158
              },
              "start": 150,
              "end": 158
            },
            "accessibility": null,
            "static": false,
            "start": 148,
            "end": 159
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "title",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 165
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 167,
                "end": 173
              },
              "start": 165,
              "end": 173
            },
            "accessibility": null,
            "static": false,
            "start": 160,
            "end": 174
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "authorId",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 183
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 185,
                "end": 191
              },
              "start": 183,
              "end": 191
            },
            "accessibility": null,
            "static": false,
            "start": 175,
            "end": 191
          }
        ],
        "start": 146,
        "end": 193
      },
      "declare": false,
      "start": 134,
      "end": 194
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Author",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 206
      },
      "typeParameters": null,
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 213
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 215,
                "end": 221
              },
              "start": 213,
              "end": 221
            },
            "accessibility": null,
            "static": false,
            "start": 211,
            "end": 222
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 227
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 229,
                "end": 235
              },
              "start": 227,
              "end": 235
            },
            "accessibility": null,
            "static": false,
            "start": 223,
            "end": 235
          }
        ],
        "start": 209,
        "end": 237
      },
      "declare": false,
      "start": 195,
      "end": 238
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BookWithAuthor",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 258
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Book",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 265
            },
            "typeArguments": null,
            "start": 261,
            "end": 265
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
                  "name": "author",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 276
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Author",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 278,
                      "end": 284
                    },
                    "typeArguments": null,
                    "start": 278,
                    "end": 284
                  },
                  "start": 276,
                  "end": 284
                },
                "accessibility": null,
                "static": false,
                "start": 270,
                "end": 284
              }
            ],
            "start": 268,
            "end": 286
          }
        ],
        "start": 261,
        "end": 286
      },
      "declare": false,
      "start": 239,
      "end": 287
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
            "name": "authorPromise",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 318,
                  "end": 325
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 326,
                        "end": 332
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Author",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 333,
                              "end": 339
                            },
                            "typeArguments": null,
                            "start": 333,
                            "end": 339
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "NOT_FOUND_AUTHOR",
                              "raw": "\"NOT_FOUND_AUTHOR\"",
                              "start": 341,
                              "end": 359
                            },
                            "start": 341,
                            "end": 359
                          }
                        ],
                        "start": 332,
                        "end": 360
                      },
                      "start": 326,
                      "end": 360
                    }
                  ],
                  "start": 325,
                  "end": 361
                },
                "start": 318,
                "end": 361
              },
              "start": 316,
              "end": 361
            },
            "start": 303,
            "end": 361
          },
          "init": null,
          "definite": false,
          "start": 303,
          "end": 361
        }
      ],
      "declare": true,
      "start": 289,
      "end": 362
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
            "name": "mapper",
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
                        "start": 386,
                        "end": 387
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 386,
                      "end": 387
                    }
                  ],
                  "start": 385,
                  "end": 388
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 397,
                          "end": 403
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
                                "start": 404,
                                "end": 405
                              },
                              "typeArguments": null,
                              "start": 404,
                              "end": 405
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "NOT_FOUND_AUTHOR",
                                "raw": "\"NOT_FOUND_AUTHOR\"",
                                "start": 407,
                                "end": 425
                              },
                              "start": 407,
                              "end": 425
                            }
                          ],
                          "start": 403,
                          "end": 426
                        },
                        "start": 397,
                        "end": 426
                      },
                      "start": 395,
                      "end": 426
                    },
                    "start": 389,
                    "end": 426
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 431,
                      "end": 437
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
                            "start": 438,
                            "end": 439
                          },
                          "typeArguments": null,
                          "start": 438,
                          "end": 439
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "NOT_FOUND_AUTHOR",
                            "raw": "\"NOT_FOUND_AUTHOR\"",
                            "start": 441,
                            "end": 459
                          },
                          "start": 441,
                          "end": 459
                        }
                      ],
                      "start": 437,
                      "end": 460
                    },
                    "start": 431,
                    "end": 460
                  },
                  "start": 428,
                  "end": 460
                },
                "start": 385,
                "end": 460
              },
              "start": 383,
              "end": 460
            },
            "start": 377,
            "end": 460
          },
          "init": null,
          "definite": false,
          "start": 377,
          "end": 460
        }
      ],
      "declare": true,
      "start": 363,
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
            "name": "g",
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
                        "start": 480,
                        "end": 481
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 480,
                      "end": 481
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 483,
                        "end": 484
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 483,
                      "end": 484
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 486,
                        "end": 487
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 486,
                      "end": 487
                    }
                  ],
                  "start": 479,
                  "end": 488
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncGenerator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 494,
                      "end": 508
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
                            "start": 509,
                            "end": 510
                          },
                          "typeArguments": null,
                          "start": 509,
                          "end": 510
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 512,
                            "end": 513
                          },
                          "typeArguments": null,
                          "start": 512,
                          "end": 513
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 515,
                            "end": 516
                          },
                          "typeArguments": null,
                          "start": 515,
                          "end": 516
                        }
                      ],
                      "start": 508,
                      "end": 517
                    },
                    "start": 494,
                    "end": 517
                  },
                  "start": 491,
                  "end": 517
                },
                "start": 479,
                "end": 517
              },
              "start": 477,
              "end": 517
            },
            "start": 476,
            "end": 517
          },
          "init": null,
          "definite": false,
          "start": 476,
          "end": 517
        }
      ],
      "declare": true,
      "start": 462,
      "end": 518
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 536,
        "end": 537
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncGenerator",
            "optional": false,
            "typeAnnotation": null,
            "start": 541,
            "end": 555
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "NOT_FOUND_AUTHOR",
                      "raw": "\"NOT_FOUND_AUTHOR\"",
                      "start": 556,
                      "end": 574
                    },
                    "start": 556,
                    "end": 574
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "NOT_FOUND_BOOK",
                      "raw": "\"NOT_FOUND_BOOK\"",
                      "start": 577,
                      "end": 593
                    },
                    "start": 577,
                    "end": 593
                  }
                ],
                "start": 556,
                "end": 593
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BookWithAuthor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 595,
                  "end": 609
                },
                "typeArguments": null,
                "start": 595,
                "end": 609
              },
              {
                "type": "TSUnknownKeyword",
                "start": 611,
                "end": 618
              }
            ],
            "start": 555,
            "end": 619
          },
          "start": 541,
          "end": 619
        },
        "start": 539,
        "end": 619
      },
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
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 719,
                  "end": 724
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "authorPromise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 733,
                        "end": 746
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "then",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 747,
                        "end": 751
                      },
                      "optional": false,
                      "computed": false,
                      "start": 733,
                      "end": 751
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 752,
                        "end": 758
                      }
                    ],
                    "optional": false,
                    "start": 733,
                    "end": 759
                  },
                  "start": 727,
                  "end": 759
                },
                "definite": false,
                "start": 719,
                "end": 759
              }
            ],
            "declare": false,
            "start": 713,
            "end": 759
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
                  "name": "test2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 908,
                  "end": 913
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": true,
                  "argument": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "authorPromise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 929,
                          "end": 942
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 943,
                          "end": 947
                        },
                        "optional": false,
                        "computed": false,
                        "start": 929,
                        "end": 947
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "mapper",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 948,
                          "end": 954
                        }
                      ],
                      "optional": false,
                      "start": 929,
                      "end": 955
                    },
                    "start": 923,
                    "end": 955
                  },
                  "start": 916,
                  "end": 955
                },
                "definite": false,
                "start": 908,
                "end": 955
              }
            ],
            "declare": false,
            "start": 902,
            "end": 955
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 967,
                  "end": 969
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": true,
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 979,
                      "end": 980
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 979,
                    "end": 982
                  },
                  "start": 972,
                  "end": 982
                },
                "definite": false,
                "start": 967,
                "end": 982
              }
            ],
            "declare": false,
            "start": 961,
            "end": 983
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 998,
                      "end": 1004
                    },
                    "start": 996,
                    "end": 1004
                  },
                  "start": 994,
                  "end": 1004
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": true,
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1014,
                      "end": 1015
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1014,
                    "end": 1017
                  },
                  "start": 1007,
                  "end": 1017
                },
                "definite": false,
                "start": 994,
                "end": 1017
              }
            ],
            "declare": false,
            "start": 988,
            "end": 1018
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1031,
                  "end": 1035
                },
                "start": 1031,
                "end": 1036
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BookWithAuthor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1040,
                  "end": 1054
                },
                "typeArguments": null,
                "start": 1040,
                "end": 1054
              },
              "start": 1031,
              "end": 1054
            },
            "start": 1024,
            "end": 1055
          }
        ],
        "start": 620,
        "end": 1057
      },
      "expression": false,
      "start": 520,
      "end": 1057
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 1057
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
    "value": "Result",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 93,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
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
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 106,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 122,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 134,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "Book",
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 148,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 160,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 167,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "authorId",
    "start": 175,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 185,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 195,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "Author",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 211,
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
    "value": "string",
    "start": 215,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 223,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 239,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "BookWithAuthor",
    "start": 244,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "Book",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "&",
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
    "value": "author",
    "start": 270,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "Author",
    "start": 278,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 289,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 297,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "authorPromise",
    "start": 303,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 318,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 326,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "Author",
    "start": 333,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 339,
    "end": 340
  },
  {
    "type": "String",
    "value": "\"NOT_FOUND_AUTHOR\"",
    "start": 341,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 363,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 371,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "mapper",
    "start": 377,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 389,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 397,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 405,
    "end": 406
  },
  {
    "type": "String",
    "value": "\"NOT_FOUND_AUTHOR\"",
    "start": 407,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 428,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 431,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 439,
    "end": 440
  },
  {
    "type": "String",
    "value": "\"NOT_FOUND_AUTHOR\"",
    "start": 441,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "start": 462,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 470,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 491,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 494,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 520,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 526,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 541,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 555,
    "end": 556
  },
  {
    "type": "String",
    "value": "\"NOT_FOUND_AUTHOR\"",
    "start": 556,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 575,
    "end": 576
  },
  {
    "type": "String",
    "value": "\"NOT_FOUND_BOOK\"",
    "start": 577,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "BookWithAuthor",
    "start": 595,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 611,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 713,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 719,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 727,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "authorPromise",
    "start": 733,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 747,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "mapper",
    "start": 752,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 758,
    "end": 759
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 902,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 908,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 914,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 916,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 923,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "authorPromise",
    "start": 929,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 943,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "mapper",
    "start": 948,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 954,
    "end": 955
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 961,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 967,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 970,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 972,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 982,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 988,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 994,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 998,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1007,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1024,
    "end": 1030
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1031,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1037,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "BookWithAuthor",
    "start": 1040,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1056,
    "end": 1057
  }
]
```
