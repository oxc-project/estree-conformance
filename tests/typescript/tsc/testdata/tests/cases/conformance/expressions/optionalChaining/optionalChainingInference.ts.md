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
        "name": "unbox",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 78
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
              "start": 79,
              "end": 80
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 79,
            "end": 80
          }
        ],
        "start": 78,
        "end": 81
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "box",
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 89,
                    "end": 94
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 96,
                            "end": 97
                          },
                          "typeArguments": null,
                          "start": 96,
                          "end": 97
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 100,
                          "end": 109
                        }
                      ],
                      "start": 96,
                      "end": 109
                    },
                    "start": 94,
                    "end": 109
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 89,
                  "end": 109
                }
              ],
              "start": 87,
              "end": 111
            },
            "start": 85,
            "end": 111
          },
          "start": 82,
          "end": 111
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 115
          },
          "typeArguments": null,
          "start": 114,
          "end": 115
        },
        "start": 112,
        "end": 115
      },
      "body": null,
      "expression": false,
      "start": 56,
      "end": 116
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
            "name": "su",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 135,
                    "end": 141
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 144,
                    "end": 153
                  }
                ],
                "start": 135,
                "end": 153
              },
              "start": 133,
              "end": 153
            },
            "start": 131,
            "end": 153
          },
          "init": null,
          "definite": false,
          "start": 131,
          "end": 153
        }
      ],
      "declare": true,
      "start": 117,
      "end": 154
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
            "name": "fnu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 181,
                        "end": 187
                      },
                      "start": 178,
                      "end": 187
                    },
                    "start": 175,
                    "end": 187
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 191,
                    "end": 200
                  }
                ],
                "start": 174,
                "end": 200
              },
              "start": 172,
              "end": 200
            },
            "start": 169,
            "end": 200
          },
          "init": null,
          "definite": false,
          "start": 169,
          "end": 200
        }
      ],
      "declare": true,
      "start": 155,
      "end": 201
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
            "name": "osu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                          "name": "prop",
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
                    "start": 221,
                    "end": 237
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 240,
                    "end": 249
                  }
                ],
                "start": 221,
                "end": 249
              },
              "start": 219,
              "end": 249
            },
            "start": 216,
            "end": 249
          },
          "init": null,
          "definite": false,
          "start": 216,
          "end": 249
        }
      ],
      "declare": true,
      "start": 202,
      "end": 250
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
            "name": "ofnu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 273,
                          "end": 277
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 285,
                                "end": 291
                              },
                              "start": 282,
                              "end": 291
                            },
                            "start": 279,
                            "end": 291
                          },
                          "start": 277,
                          "end": 291
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 273,
                        "end": 291
                      }
                    ],
                    "start": 271,
                    "end": 293
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 296,
                    "end": 305
                  }
                ],
                "start": 271,
                "end": 305
              },
              "start": 269,
              "end": 305
            },
            "start": 265,
            "end": 305
          },
          "init": null,
          "definite": false,
          "start": 265,
          "end": 305
        }
      ],
      "declare": true,
      "start": 251,
      "end": 306
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 316
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 321,
                  "end": 326
                },
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "su",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 328,
                      "end": 330
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 332,
                      "end": 338
                    },
                    "optional": true,
                    "computed": false,
                    "start": 328,
                    "end": 338
                  },
                  "start": 328,
                  "end": 338
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 321,
                "end": 338
              }
            ],
            "start": 319,
            "end": 340
          },
          "definite": false,
          "start": 314,
          "end": 340
        }
      ],
      "declare": false,
      "start": 308,
      "end": 341
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 352,
                "end": 358
              },
              "start": 350,
              "end": 358
            },
            "start": 348,
            "end": 358
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 366
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 369
              }
            ],
            "optional": false,
            "start": 361,
            "end": 370
          },
          "definite": false,
          "start": 348,
          "end": 370
        }
      ],
      "declare": false,
      "start": 342,
      "end": 371
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 379,
            "end": 381
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 386,
                  "end": 391
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ChainExpression",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "su",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 393,
                        "end": 395
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 397,
                        "end": 403
                      },
                      "optional": true,
                      "computed": false,
                      "start": 393,
                      "end": 403
                    },
                    "start": 393,
                    "end": 403
                  },
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 407,
                        "end": 413
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 416,
                        "end": 425
                      }
                    ],
                    "start": 407,
                    "end": 425
                  },
                  "start": 393,
                  "end": 425
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 386,
                "end": 425
              }
            ],
            "start": 384,
            "end": 427
          },
          "definite": false,
          "start": 379,
          "end": 427
        }
      ],
      "declare": false,
      "start": 373,
      "end": 428
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 439,
                "end": 445
              },
              "start": 437,
              "end": 445
            },
            "start": 435,
            "end": 445
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 453
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 454,
                "end": 456
              }
            ],
            "optional": false,
            "start": 448,
            "end": 457
          },
          "definite": false,
          "start": 435,
          "end": 457
        }
      ],
      "declare": false,
      "start": 429,
      "end": 458
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
            "name": "b3",
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 472,
                      "end": 477
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 479,
                            "end": 485
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 488,
                            "end": 497
                          }
                        ],
                        "start": 479,
                        "end": 497
                      },
                      "start": 477,
                      "end": 497
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 472,
                    "end": 497
                  }
                ],
                "start": 470,
                "end": 499
              },
              "start": 468,
              "end": 499
            },
            "start": 466,
            "end": 499
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 504,
                  "end": 509
                },
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "su",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 511,
                      "end": 513
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 515,
                      "end": 521
                    },
                    "optional": true,
                    "computed": false,
                    "start": 511,
                    "end": 521
                  },
                  "start": 511,
                  "end": 521
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 504,
                "end": 521
              }
            ],
            "start": 502,
            "end": 523
          },
          "definite": false,
          "start": 466,
          "end": 523
        }
      ],
      "declare": false,
      "start": 460,
      "end": 524
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
            "name": "v3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 535,
                "end": 541
              },
              "start": 533,
              "end": 541
            },
            "start": 531,
            "end": 541
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "typeAnnotation": null,
              "start": 544,
              "end": 549
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b3",
                "optional": false,
                "typeAnnotation": null,
                "start": 550,
                "end": 552
              }
            ],
            "optional": false,
            "start": 544,
            "end": 553
          },
          "definite": false,
          "start": 531,
          "end": 553
        }
      ],
      "declare": false,
      "start": 525,
      "end": 554
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
            "name": "b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 562,
            "end": 564
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 569,
                  "end": 574
                },
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fnu",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 576,
                      "end": 579
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": true,
                    "start": 576,
                    "end": 583
                  },
                  "start": 576,
                  "end": 583
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 569,
                "end": 583
              }
            ],
            "start": 567,
            "end": 585
          },
          "definite": false,
          "start": 562,
          "end": 585
        }
      ],
      "declare": false,
      "start": 556,
      "end": 586
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
            "name": "v4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 597,
                "end": 603
              },
              "start": 595,
              "end": 603
            },
            "start": 593,
            "end": 603
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "typeAnnotation": null,
              "start": 606,
              "end": 611
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b4",
                "optional": false,
                "typeAnnotation": null,
                "start": 612,
                "end": 614
              }
            ],
            "optional": false,
            "start": 606,
            "end": 615
          },
          "definite": false,
          "start": 593,
          "end": 615
        }
      ],
      "declare": false,
      "start": 587,
      "end": 616
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
            "name": "b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 624,
            "end": 626
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 631,
                  "end": 636
                },
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "su",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 638,
                      "end": 640
                    },
                    "property": {
                      "type": "Literal",
                      "value": "length",
                      "raw": "\"length\"",
                      "start": 643,
                      "end": 651
                    },
                    "optional": true,
                    "computed": true,
                    "start": 638,
                    "end": 652
                  },
                  "start": 638,
                  "end": 652
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 631,
                "end": 652
              }
            ],
            "start": 629,
            "end": 654
          },
          "definite": false,
          "start": 624,
          "end": 654
        }
      ],
      "declare": false,
      "start": 618,
      "end": 655
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
            "name": "v5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 666,
                "end": 672
              },
              "start": 664,
              "end": 672
            },
            "start": 662,
            "end": 672
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 680
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b5",
                "optional": false,
                "typeAnnotation": null,
                "start": 681,
                "end": 683
              }
            ],
            "optional": false,
            "start": 675,
            "end": 684
          },
          "definite": false,
          "start": 662,
          "end": 684
        }
      ],
      "declare": false,
      "start": 656,
      "end": 685
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
            "name": "b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 693,
            "end": 695
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 700,
                  "end": 705
                },
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "osu",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 707,
                        "end": 710
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 712,
                        "end": 716
                      },
                      "optional": true,
                      "computed": false,
                      "start": 707,
                      "end": 716
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 717,
                      "end": 723
                    },
                    "optional": false,
                    "computed": false,
                    "start": 707,
                    "end": 723
                  },
                  "start": 707,
                  "end": 723
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 700,
                "end": 723
              }
            ],
            "start": 698,
            "end": 725
          },
          "definite": false,
          "start": 693,
          "end": 725
        }
      ],
      "declare": false,
      "start": 687,
      "end": 726
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
            "name": "v6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 737,
                "end": 743
              },
              "start": 735,
              "end": 743
            },
            "start": 733,
            "end": 743
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "typeAnnotation": null,
              "start": 746,
              "end": 751
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b6",
                "optional": false,
                "typeAnnotation": null,
                "start": 752,
                "end": 754
              }
            ],
            "optional": false,
            "start": 746,
            "end": 755
          },
          "definite": false,
          "start": 733,
          "end": 755
        }
      ],
      "declare": false,
      "start": 727,
      "end": 756
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
            "name": "b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 764,
            "end": 766
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 771,
                  "end": 776
                },
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "osu",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 778,
                        "end": 781
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 783,
                        "end": 787
                      },
                      "optional": true,
                      "computed": false,
                      "start": 778,
                      "end": 787
                    },
                    "property": {
                      "type": "Literal",
                      "value": "length",
                      "raw": "\"length\"",
                      "start": 788,
                      "end": 796
                    },
                    "optional": false,
                    "computed": true,
                    "start": 778,
                    "end": 797
                  },
                  "start": 778,
                  "end": 797
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 771,
                "end": 797
              }
            ],
            "start": 769,
            "end": 799
          },
          "definite": false,
          "start": 764,
          "end": 799
        }
      ],
      "declare": false,
      "start": 758,
      "end": 800
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
            "name": "v7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 811,
                "end": 817
              },
              "start": 809,
              "end": 817
            },
            "start": 807,
            "end": 817
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "typeAnnotation": null,
              "start": 820,
              "end": 825
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b7",
                "optional": false,
                "typeAnnotation": null,
                "start": 826,
                "end": 828
              }
            ],
            "optional": false,
            "start": 820,
            "end": 829
          },
          "definite": false,
          "start": 807,
          "end": 829
        }
      ],
      "declare": false,
      "start": 801,
      "end": 830
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
            "name": "b8",
            "optional": false,
            "typeAnnotation": null,
            "start": 838,
            "end": 840
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 845,
                  "end": 850
                },
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ofnu",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 852,
                        "end": 856
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 858,
                        "end": 862
                      },
                      "optional": true,
                      "computed": false,
                      "start": 852,
                      "end": 862
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 852,
                    "end": 864
                  },
                  "start": 852,
                  "end": 864
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 845,
                "end": 864
              }
            ],
            "start": 843,
            "end": 866
          },
          "definite": false,
          "start": 838,
          "end": 866
        }
      ],
      "declare": false,
      "start": 832,
      "end": 867
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
            "name": "v8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 878,
                "end": 884
              },
              "start": 876,
              "end": 884
            },
            "start": 874,
            "end": 884
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "typeAnnotation": null,
              "start": 887,
              "end": 892
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b8",
                "optional": false,
                "typeAnnotation": null,
                "start": 893,
                "end": 895
              }
            ],
            "optional": false,
            "start": 887,
            "end": 896
          },
          "definite": false,
          "start": 874,
          "end": 896
        }
      ],
      "declare": false,
      "start": 868,
      "end": 897
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 898
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 56,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 64,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "unbox",
    "start": 73,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 79,
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
    "value": "box",
    "start": 82,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "value",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 100,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 117,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 125,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "su",
    "start": 131,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 144,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 155,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 163,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "fnu",
    "start": 169,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 178,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 191,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 202,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 210,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "osu",
    "start": 216,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "prop",
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
    "value": "|",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 240,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 251,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 259,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "ofnu",
    "start": 265,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 273,
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
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 282,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 285,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 296,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 308,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 314,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 321,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "su",
    "start": 328,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 330,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 332,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 342,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 348,
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
    "value": "number",
    "start": 352,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "unbox",
    "start": 361,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 367,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 373,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 379,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 386,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "su",
    "start": 393,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 395,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 397,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 404,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 407,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 416,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 429,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 435,
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
    "value": "number",
    "start": 439,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "unbox",
    "start": 448,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 454,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 460,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 466,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 472,
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
    "value": "number",
    "start": 479,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 488,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 504,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "su",
    "start": 511,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 513,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 515,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 525,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 531,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 535,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "unbox",
    "start": 544,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 550,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 556,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 562,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 569,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "fnu",
    "start": 576,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 579,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 587,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 593,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 597,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "unbox",
    "start": 606,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 612,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 618,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 624,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 631,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "su",
    "start": 638,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 640,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 642,
    "end": 643
  },
  {
    "type": "String",
    "value": "\"length\"",
    "start": 643,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 656,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "v5",
    "start": 662,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 666,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "unbox",
    "start": 675,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 681,
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
    "value": ";",
    "start": 684,
    "end": 685
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 687,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 693,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 700,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "osu",
    "start": 707,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 710,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 712,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 717,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 727,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "v6",
    "start": 733,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 737,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "unbox",
    "start": 746,
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
    "value": "b6",
    "start": 752,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 755,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 758,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 764,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 771,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "osu",
    "start": 778,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 781,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 783,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 787,
    "end": 788
  },
  {
    "type": "String",
    "value": "\"length\"",
    "start": 788,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 799,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 801,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "v7",
    "start": 807,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 811,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "unbox",
    "start": 820,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 826,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 829,
    "end": 830
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 832,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 838,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 845,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "ofnu",
    "start": 852,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 856,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 858,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 866,
    "end": 867
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 868,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "v8",
    "start": 874,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 878,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "unbox",
    "start": 887,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 893,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 896,
    "end": 897
  }
]
```
