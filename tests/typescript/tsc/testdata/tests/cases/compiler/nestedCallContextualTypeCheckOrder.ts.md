__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "outer",
        "optional": false,
        "typeAnnotation": null,
        "start": 204,
        "end": 209
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
              "start": 210,
              "end": 211
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 210,
            "end": 211
          }
        ],
        "start": 209,
        "end": 212
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 221,
                        "end": 222
                      },
                      "typeArguments": null,
                      "start": 221,
                      "end": 222
                    },
                    "start": 219,
                    "end": 222
                  },
                  "start": 218,
                  "end": 222
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 227,
                  "end": 231
                },
                "start": 224,
                "end": 231
              },
              "start": 217,
              "end": 231
            },
            "start": 215,
            "end": 231
          },
          "start": 213,
          "end": 231
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
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
                "start": 236,
                "end": 237
              },
              "typeArguments": null,
              "start": 236,
              "end": 237
            },
            "start": 234,
            "end": 237
          },
          "start": 233,
          "end": 237
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 240,
          "end": 244
        },
        "start": 238,
        "end": 244
      },
      "body": null,
      "expression": false,
      "start": 187,
      "end": 245
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "outerObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 271
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
              "start": 272,
              "end": 273
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 272,
            "end": 273
          }
        ],
        "start": 271,
        "end": 274
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 280,
                    "end": 282
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 288,
                                "end": 289
                              },
                              "typeArguments": null,
                              "start": 288,
                              "end": 289
                            },
                            "start": 286,
                            "end": 289
                          },
                          "start": 285,
                          "end": 289
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 294,
                          "end": 298
                        },
                        "start": 291,
                        "end": 298
                      },
                      "start": 284,
                      "end": 298
                    },
                    "start": 282,
                    "end": 298
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 280,
                  "end": 299
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 300,
                    "end": 301
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
                        "start": 303,
                        "end": 304
                      },
                      "typeArguments": null,
                      "start": 303,
                      "end": 304
                    },
                    "start": 301,
                    "end": 304
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 300,
                  "end": 304
                }
              ],
              "start": 278,
              "end": 306
            },
            "start": 276,
            "end": 306
          },
          "start": 275,
          "end": 306
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 309,
          "end": 313
        },
        "start": 307,
        "end": 313
      },
      "body": null,
      "expression": false,
      "start": 246,
      "end": 314
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "outerGen",
        "optional": false,
        "typeAnnotation": null,
        "start": 332,
        "end": 340
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
              "start": 341,
              "end": 342
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 341,
            "end": 342
          }
        ],
        "start": 340,
        "end": 343
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                    "start": 353,
                    "end": 362
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSFunctionType",
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
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 367,
                                  "end": 368
                                },
                                "typeArguments": null,
                                "start": 367,
                                "end": 368
                              },
                              "start": 365,
                              "end": 368
                            },
                            "start": 364,
                            "end": 368
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 373,
                            "end": 377
                          },
                          "start": 370,
                          "end": 377
                        },
                        "start": 363,
                        "end": 377
                      }
                    ],
                    "start": 362,
                    "end": 378
                  },
                  "start": 353,
                  "end": 378
                },
                "start": 350,
                "end": 378
              },
              "start": 347,
              "end": 378
            },
            "start": 345,
            "end": 378
          },
          "start": 344,
          "end": 378
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
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
                "start": 383,
                "end": 384
              },
              "typeArguments": null,
              "start": 383,
              "end": 384
            },
            "start": 381,
            "end": 384
          },
          "start": 380,
          "end": 384
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 387,
          "end": 391
        },
        "start": 385,
        "end": 391
      },
      "body": null,
      "expression": false,
      "start": 315,
      "end": 392
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 410,
        "end": 414
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 415,
              "end": 416
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 415,
            "end": 416
          }
        ],
        "start": 414,
        "end": 417
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 421,
                "end": 422
              },
              "typeArguments": null,
              "start": 421,
              "end": 422
            },
            "start": 419,
            "end": 422
          },
          "start": 418,
          "end": 422
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 425,
            "end": 426
          },
          "typeArguments": null,
          "start": 425,
          "end": 426
        },
        "start": 423,
        "end": 426
      },
      "body": null,
      "expression": false,
      "start": 393,
      "end": 427
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tag",
        "optional": false,
        "typeAnnotation": null,
        "start": 445,
        "end": 448
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
              "start": 449,
              "end": 450
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 449,
            "end": 450
          }
        ],
        "start": 448,
        "end": 451
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 475
              },
              "typeArguments": null,
              "start": 455,
              "end": 475
            },
            "start": 453,
            "end": 475
          },
          "start": 452,
          "end": 475
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 485,
                        "end": 486
                      },
                      "typeArguments": null,
                      "start": 485,
                      "end": 486
                    },
                    "start": 483,
                    "end": 486
                  },
                  "start": 482,
                  "end": 486
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 491,
                  "end": 495
                },
                "start": 488,
                "end": 495
              },
              "start": 481,
              "end": 495
            },
            "start": 479,
            "end": 495
          },
          "start": 477,
          "end": 495
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
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
                "start": 500,
                "end": 501
              },
              "typeArguments": null,
              "start": 500,
              "end": 501
            },
            "start": 498,
            "end": 501
          },
          "start": 497,
          "end": 501
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 504,
          "end": 508
        },
        "start": 502,
        "end": 508
      },
      "body": null,
      "expression": false,
      "start": 428,
      "end": 509
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tagWrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 527,
        "end": 534
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 535,
              "end": 536
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 535,
            "end": 536
          }
        ],
        "start": 534,
        "end": 537
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 561
              },
              "typeArguments": null,
              "start": 541,
              "end": 561
            },
            "start": 539,
            "end": 561
          },
          "start": 538,
          "end": 561
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 566,
                "end": 567
              },
              "typeArguments": null,
              "start": 566,
              "end": 567
            },
            "start": 564,
            "end": 567
          },
          "start": 563,
          "end": 567
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 570,
            "end": 571
          },
          "typeArguments": null,
          "start": 570,
          "end": 571
        },
        "start": 568,
        "end": 571
      },
      "body": null,
      "expression": false,
      "start": 510,
      "end": 572
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "outer",
          "optional": false,
          "typeAnnotation": null,
          "start": 574,
          "end": 579
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 580,
                "end": 584
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 586,
                      "end": 587
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 592,
                        "end": 593
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 594,
                        "end": 601
                      },
                      "optional": false,
                      "computed": false,
                      "start": 592,
                      "end": 601
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 592,
                    "end": 603
                  },
                  "id": null,
                  "generator": false,
                  "start": 585,
                  "end": 603
                }
              ],
              "optional": false,
              "start": 580,
              "end": 604
            },
            "start": 580,
            "end": 605
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 607,
            "end": 608
          }
        ],
        "optional": false,
        "start": 574,
        "end": 609
      },
      "directive": null,
      "start": 574,
      "end": 610
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "outerObj",
          "optional": false,
          "typeAnnotation": null,
          "start": 611,
          "end": 619
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cb",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 627,
                        "end": 629
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "wrap",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 631,
                          "end": 635
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 637,
                                "end": 638
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 643,
                                  "end": 644
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toFixed",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 645,
                                  "end": 652
                                },
                                "optional": false,
                                "computed": false,
                                "start": 643,
                                "end": 652
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 643,
                              "end": 654
                            },
                            "id": null,
                            "generator": false,
                            "start": 636,
                            "end": 654
                          }
                        ],
                        "optional": false,
                        "start": 631,
                        "end": 655
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 627,
                      "end": 655
                    }
                  ],
                  "start": 625,
                  "end": 657
                },
                "start": 622,
                "end": 657
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 659,
                  "end": 660
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 662,
                  "end": 663
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 659,
                "end": 663
              }
            ],
            "start": 620,
            "end": 665
          }
        ],
        "optional": false,
        "start": 611,
        "end": 666
      },
      "directive": null,
      "start": 611,
      "end": 667
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "outer",
          "optional": false,
          "typeAnnotation": null,
          "start": 668,
          "end": 673
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wrap",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 676,
                      "end": 680
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 682,
                            "end": 683
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 688,
                              "end": 689
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toFixed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 690,
                              "end": 697
                            },
                            "optional": false,
                            "computed": false,
                            "start": 688,
                            "end": 697
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 688,
                          "end": 699
                        },
                        "id": null,
                        "generator": false,
                        "start": 681,
                        "end": 699
                      }
                    ],
                    "optional": false,
                    "start": 676,
                    "end": 700
                  }
                ],
                "start": 675,
                "end": 701
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 705,
                  "end": 710
                },
                "typeArguments": null,
                "start": 705,
                "end": 710
              },
              "start": 675,
              "end": 710
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 712,
              "end": 713
            },
            "optional": false,
            "computed": true,
            "start": 674,
            "end": 714
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 716,
            "end": 717
          }
        ],
        "optional": false,
        "start": 668,
        "end": 718
      },
      "directive": null,
      "start": 668,
      "end": 719
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "tag",
          "optional": false,
          "typeAnnotation": null,
          "start": 720,
          "end": 723
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 723,
              "end": 726
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 750,
              "end": 753
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 754,
              "end": 756
            }
          ],
          "expressions": [
            {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 726,
                "end": 730
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 732,
                      "end": 733
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 738,
                        "end": 739
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 740,
                        "end": 747
                      },
                      "optional": false,
                      "computed": false,
                      "start": 738,
                      "end": 747
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 738,
                    "end": 749
                  },
                  "id": null,
                  "generator": false,
                  "start": 731,
                  "end": 749
                }
              ],
              "optional": false,
              "start": 726,
              "end": 750
            },
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 753,
              "end": 754
            }
          ],
          "start": 723,
          "end": 756
        },
        "start": 720,
        "end": 756
      },
      "directive": null,
      "start": 720,
      "end": 757
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "outer",
          "optional": false,
          "typeAnnotation": null,
          "start": 758,
          "end": 763
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "tagWrap",
              "optional": false,
              "typeAnnotation": null,
              "start": 764,
              "end": 771
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 771,
                  "end": 774
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 792,
                  "end": 794
                }
              ],
              "expressions": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 775,
                      "end": 776
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 781,
                        "end": 782
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 783,
                        "end": 790
                      },
                      "optional": false,
                      "computed": false,
                      "start": 781,
                      "end": 790
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 781,
                    "end": 792
                  },
                  "id": null,
                  "generator": false,
                  "start": 774,
                  "end": 792
                }
              ],
              "start": 771,
              "end": 794
            },
            "start": 764,
            "end": 794
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 796,
            "end": 797
          }
        ],
        "optional": false,
        "start": 758,
        "end": 798
      },
      "directive": null,
      "start": 758,
      "end": 799
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "outerGen",
          "optional": false,
          "typeAnnotation": null,
          "start": 800,
          "end": 808
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": false,
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
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "wrap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 830,
                        "end": 834
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 836,
                              "end": 837
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 842,
                                "end": 843
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toFixed",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 844,
                                "end": 851
                              },
                              "optional": false,
                              "computed": false,
                              "start": 842,
                              "end": 851
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 842,
                            "end": 853
                          },
                          "id": null,
                          "generator": false,
                          "start": 835,
                          "end": 853
                        }
                      ],
                      "optional": false,
                      "start": 830,
                      "end": 854
                    },
                    "start": 824,
                    "end": 854
                  },
                  "directive": null,
                  "start": 824,
                  "end": 855
                }
              ],
              "start": 822,
              "end": 857
            },
            "expression": false,
            "start": 809,
            "end": 857
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 859,
            "end": 860
          }
        ],
        "optional": false,
        "start": 800,
        "end": 861
      },
      "directive": null,
      "start": 800,
      "end": 862
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 862
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 187,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 195,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 204,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 224,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 227,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 240,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 246,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 254,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "outerObj",
    "start": 263,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 291,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 294,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 309,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 315,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 323,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "outerGen",
    "start": 332,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "g",
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
    "value": "(",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 350,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 353,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 370,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 373,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 385,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 387,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 393,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 401,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 410,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": ":",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 428,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 436,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 445,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 455,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 477,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 488,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 491,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 504,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 510,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 518,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "tagWrap",
    "start": 527,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "s",
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
    "value": "TemplateStringsArray",
    "start": 541,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 574,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 580,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 589,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 594,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "!",
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
    "type": "Numeric",
    "value": "1",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "outerObj",
    "start": 611,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 622,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 627,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 631,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 640,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 645,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 653,
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
    "value": "}",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 668,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 676,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 685,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 690,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 702,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 705,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 711,
    "end": 712
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 714,
    "end": 715
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 720,
    "end": 723
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 723,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 726,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 735,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 740,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 749,
    "end": 750
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 750,
    "end": 753
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 753,
    "end": 754
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 754,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 758,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "tagWrap",
    "start": 764,
    "end": 771
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 771,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 778,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 783,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 791,
    "end": 792
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 792,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 794,
    "end": 795
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "outerGen",
    "start": 800,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 808,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 809,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 822,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 824,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 830,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 839,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 844,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 857,
    "end": 858
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 861,
    "end": 862
  }
]
```
