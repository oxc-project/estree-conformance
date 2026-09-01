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
        "name": "ApiPost",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 35
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "path",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 58
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "/login",
                      "raw": "\"/login\"",
                      "start": 60,
                      "end": 68
                    },
                    "start": 60,
                    "end": 68
                  },
                  "start": 58,
                  "end": 68
                },
                "accessibility": null,
                "static": false,
                "start": 54,
                "end": 69
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "body",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 82
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 84,
                    "end": 86
                  },
                  "start": 82,
                  "end": 86
                },
                "accessibility": null,
                "static": false,
                "start": 78,
                "end": 87
              }
            ],
            "start": 44,
            "end": 93
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
                  "name": "path",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 110,
                  "end": 114
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "/user",
                      "raw": "\"/user\"",
                      "start": 116,
                      "end": 123
                    },
                    "start": 116,
                    "end": 123
                  },
                  "start": 114,
                  "end": 123
                },
                "accessibility": null,
                "static": false,
                "start": 110,
                "end": 124
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "body",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 133,
                  "end": 137
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
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 141,
                          "end": 145
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 147,
                            "end": 153
                          },
                          "start": 145,
                          "end": 153
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 141,
                        "end": 154
                      }
                    ],
                    "start": 139,
                    "end": 156
                  },
                  "start": 137,
                  "end": 156
                },
                "accessibility": null,
                "static": false,
                "start": 133,
                "end": 157
              }
            ],
            "start": 100,
            "end": 163
          }
        ],
        "start": 42,
        "end": 163
      },
      "declare": false,
      "start": 23,
      "end": 163
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PostPath",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 178
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ApiPost",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 188
          },
          "typeArguments": null,
          "start": 181,
          "end": 188
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "path",
            "raw": "\"path\"",
            "start": 189,
            "end": 195
          },
          "start": 189,
          "end": 195
        },
        "start": 181,
        "end": 196
      },
      "declare": false,
      "start": 165,
      "end": 197
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PostBody",
        "optional": false,
        "typeAnnotation": null,
        "start": 204,
        "end": 212
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "PATH",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 217
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PostPath",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 234
              },
              "typeArguments": null,
              "start": 226,
              "end": 234
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 213,
            "end": 234
          }
        ],
        "start": 212,
        "end": 235
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Extract",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 245
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ApiPost",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 253
                },
                "typeArguments": null,
                "start": 246,
                "end": 253
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
                      "name": "path",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 257,
                      "end": 261
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PATH",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 263,
                          "end": 267
                        },
                        "typeArguments": null,
                        "start": 263,
                        "end": 267
                      },
                      "start": 261,
                      "end": 267
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 257,
                    "end": 267
                  }
                ],
                "start": 255,
                "end": 269
              }
            ],
            "start": 245,
            "end": 270
          },
          "start": 238,
          "end": 270
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "body",
            "raw": "\"body\"",
            "start": 271,
            "end": 277
          },
          "start": 271,
          "end": 277
        },
        "start": 238,
        "end": 278
      },
      "declare": false,
      "start": 199,
      "end": 279
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
            "name": "post",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 291
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PATH",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 295,
                    "end": 299
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PostPath",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 308,
                      "end": 316
                    },
                    "typeArguments": null,
                    "start": 308,
                    "end": 316
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 295,
                  "end": 316
                }
              ],
              "start": 294,
              "end": 317
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PATH",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 329,
                      "end": 333
                    },
                    "typeArguments": null,
                    "start": 329,
                    "end": 333
                  },
                  "start": 327,
                  "end": 333
                },
                "start": 323,
                "end": 333
              },
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
                      "name": "body",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 340,
                      "end": 344
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "body",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 340,
                      "end": 344
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 340,
                    "end": 344
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 349,
                      "end": 356
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 346,
                    "end": 356
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Omit",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 359,
                          "end": 363
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "RequestInit",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 364,
                                "end": 375
                              },
                              "typeArguments": null,
                              "start": 364,
                              "end": 375
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "body",
                                "raw": "'body'",
                                "start": 377,
                                "end": 383
                              },
                              "start": 377,
                              "end": 383
                            }
                          ],
                          "start": 363,
                          "end": 384
                        },
                        "start": 359,
                        "end": 384
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
                              "name": "body",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 388,
                              "end": 392
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "PostBody",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 394,
                                  "end": 402
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "PATH",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 403,
                                        "end": 407
                                      },
                                      "typeArguments": null,
                                      "start": 403,
                                      "end": 407
                                    }
                                  ],
                                  "start": 402,
                                  "end": 408
                                },
                                "start": 394,
                                "end": 408
                              },
                              "start": 392,
                              "end": 408
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 388,
                            "end": 408
                          }
                        ],
                        "start": 387,
                        "end": 409
                      }
                    ],
                    "start": 359,
                    "end": 409
                  },
                  "start": 357,
                  "end": 409
                },
                "start": 339,
                "end": 409
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 415,
              "end": 418
            },
            "id": null,
            "generator": false,
            "start": 294,
            "end": 418
          },
          "definite": false,
          "start": 287,
          "end": 418
        }
      ],
      "declare": false,
      "start": 281,
      "end": 418
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
            "name": "tmp",
            "optional": false,
            "typeAnnotation": null,
            "start": 426,
            "end": 429
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PATH",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 433,
                    "end": 437
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PostPath",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 446,
                      "end": 454
                    },
                    "typeArguments": null,
                    "start": 446,
                    "end": 454
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 433,
                  "end": 454
                }
              ],
              "start": 432,
              "end": 455
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PATH",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 465,
                      "end": 469
                    },
                    "typeArguments": null,
                    "start": 465,
                    "end": 469
                  },
                  "start": 463,
                  "end": 469
                },
                "start": 459,
                "end": 469
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "body",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PostBody",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 479,
                      "end": 487
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PATH",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 488,
                            "end": 492
                          },
                          "typeArguments": null,
                          "start": 488,
                          "end": 492
                        }
                      ],
                      "start": 487,
                      "end": 493
                    },
                    "start": 479,
                    "end": 493
                  },
                  "start": 477,
                  "end": 493
                },
                "start": 473,
                "end": 493
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "post",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 503,
                      "end": 507
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PATH",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 508,
                            "end": 512
                          },
                          "typeArguments": null,
                          "start": 508,
                          "end": 512
                        }
                      ],
                      "start": 507,
                      "end": 513
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "path",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 514,
                        "end": 518
                      },
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "body",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 522,
                              "end": 526
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "body",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 522,
                              "end": 526
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 522,
                            "end": 526
                          }
                        ],
                        "start": 520,
                        "end": 528
                      }
                    ],
                    "optional": false,
                    "start": 503,
                    "end": 529
                  },
                  "directive": null,
                  "start": 503,
                  "end": 529
                }
              ],
              "start": 499,
              "end": 531
            },
            "id": null,
            "generator": false,
            "start": 432,
            "end": 531
          },
          "definite": false,
          "start": 426,
          "end": 531
        }
      ],
      "declare": false,
      "start": 420,
      "end": 531
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx1",
        "optional": false,
        "typeAnnotation": null,
        "start": 542,
        "end": 545
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 546,
              "end": 547
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PostPath",
                "optional": false,
                "typeAnnotation": null,
                "start": 556,
                "end": 564
              },
              "typeArguments": null,
              "start": 556,
              "end": 564
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 546,
            "end": 564
          }
        ],
        "start": 545,
        "end": 565
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
                    "name": "body",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 571,
                    "end": 575
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PostBody",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 577,
                        "end": 585
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 586,
                              "end": 587
                            },
                            "typeArguments": null,
                            "start": 586,
                            "end": 587
                          }
                        ],
                        "start": 585,
                        "end": 588
                      },
                      "start": 577,
                      "end": 588
                    },
                    "start": 575,
                    "end": 588
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 571,
                  "end": 588
                }
              ],
              "start": 569,
              "end": 590
            },
            "start": 567,
            "end": 590
          },
          "start": 566,
          "end": 590
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                    "name": "body",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 597,
                    "end": 601
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PostBody",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 603,
                        "end": 611
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 612,
                              "end": 613
                            },
                            "typeArguments": null,
                            "start": 612,
                            "end": 613
                          }
                        ],
                        "start": 611,
                        "end": 614
                      },
                      "start": 603,
                      "end": 614
                    },
                    "start": 601,
                    "end": 614
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 597,
                  "end": 614
                }
              ],
              "start": 595,
              "end": 616
            },
            "start": 593,
            "end": 616
          },
          "start": 592,
          "end": 616
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 624,
                "end": 625
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 628,
                "end": 629
              },
              "start": 624,
              "end": 629
            },
            "directive": null,
            "start": 624,
            "end": 630
          }
        ],
        "start": 618,
        "end": 632
      },
      "expression": false,
      "start": 533,
      "end": 632
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 632
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 23,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "ApiPost",
    "start": 28,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 54,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "String",
    "value": "\"/login\"",
    "start": 60,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "body",
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
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 110,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "String",
    "value": "\"/user\"",
    "start": 116,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 141,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 165,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "PostPath",
    "start": 170,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "ApiPost",
    "start": 181,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 188,
    "end": 189
  },
  {
    "type": "String",
    "value": "\"path\"",
    "start": 189,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 199,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "PostBody",
    "start": 204,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "PATH",
    "start": 213,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 218,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "PostPath",
    "start": 226,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 238,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "ApiPost",
    "start": 246,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 257,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "PATH",
    "start": 263,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 270,
    "end": 271
  },
  {
    "type": "String",
    "value": "\"body\"",
    "start": 271,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 281,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "post",
    "start": 287,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "PATH",
    "start": 295,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 300,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "PostPath",
    "start": 308,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 323,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "PATH",
    "start": 329,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 340,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 346,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 349,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 359,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "RequestInit",
    "start": 364,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 375,
    "end": 376
  },
  {
    "type": "String",
    "value": "'body'",
    "start": 377,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 388,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "PostBody",
    "start": 394,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "PATH",
    "start": 403,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 412,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 420,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "tmp",
    "start": 426,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "PATH",
    "start": 433,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 438,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "PostPath",
    "start": 446,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 459,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "PATH",
    "start": 465,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 473,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "PostBody",
    "start": 479,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "PATH",
    "start": 488,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 496,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "post",
    "start": 503,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "PATH",
    "start": 508,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 514,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 522,
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
    "value": "}",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 533,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "fx1",
    "start": 542,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 546,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 548,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "PostPath",
    "start": 556,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 571,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "PostBody",
    "start": 577,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 597,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "PostBody",
    "start": 603,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 631,
    "end": 632
  }
]
```
