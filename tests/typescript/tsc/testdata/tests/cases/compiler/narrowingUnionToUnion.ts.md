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
        "name": "Falsy",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 13,
              "end": 18
            },
            "start": 13,
            "end": 18
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 21,
              "end": 22
            },
            "start": 21,
            "end": 22
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": null,
              "raw": "0n",
              "bigint": "0",
              "start": 25,
              "end": 27
            },
            "start": 25,
            "end": 27
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 30,
              "end": 32
            },
            "start": 30,
            "end": 32
          },
          {
            "type": "TSNullKeyword",
            "start": 35,
            "end": 39
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 42,
            "end": 51
          }
        ],
        "start": 13,
        "end": 51
      },
      "declare": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isFalsy",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 78
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 86,
              "end": 93
            },
            "start": 84,
            "end": 93
          },
          "start": 79,
          "end": 93
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 101
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Falsy",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 110
              },
              "typeArguments": null,
              "start": 105,
              "end": 110
            },
            "start": 105,
            "end": 110
          },
          "start": 96,
          "end": 110
        },
        "start": 94,
        "end": 110
      },
      "body": null,
      "expression": false,
      "start": 54,
      "end": 111
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx1",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 125
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 129,
                  "end": 135
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 138,
                  "end": 144
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 147,
                  "end": 156
                }
              ],
              "start": 129,
              "end": 156
            },
            "start": 127,
            "end": 156
          },
          "start": 126,
          "end": 156
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFalsy",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 175
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 177
                }
              ],
              "optional": false,
              "start": 168,
              "end": 178
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 190,
                    "end": 191
                  },
                  "directive": null,
                  "start": 190,
                  "end": 192
                }
              ],
              "start": 180,
              "end": 221
            },
            "alternate": null,
            "start": 164,
            "end": 221
          }
        ],
        "start": 158,
        "end": 223
      },
      "expression": false,
      "start": 113,
      "end": 223
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx2",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 237
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 239
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 238,
            "end": 239
          }
        ],
        "start": 237,
        "end": 240
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
                    "start": 244,
                    "end": 245
                  },
                  "typeArguments": null,
                  "start": 244,
                  "end": 245
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 248,
                  "end": 257
                }
              ],
              "start": 244,
              "end": 257
            },
            "start": 242,
            "end": 257
          },
          "start": 241,
          "end": 257
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFalsy",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 276
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 278
                }
              ],
              "optional": false,
              "start": 269,
              "end": 279
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 292
                  },
                  "directive": null,
                  "start": 291,
                  "end": 293
                }
              ],
              "start": 281,
              "end": 325
            },
            "alternate": null,
            "start": 265,
            "end": 325
          }
        ],
        "start": 259,
        "end": 327
      },
      "expression": false,
      "start": 225,
      "end": 327
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx3",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 341
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 343
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 352,
                  "end": 358
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 361,
                  "end": 367
                }
              ],
              "start": 352,
              "end": 367
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 342,
            "end": 367
          }
        ],
        "start": 341,
        "end": 368
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 372,
                "end": 373
              },
              "typeArguments": null,
              "start": 372,
              "end": 373
            },
            "start": 370,
            "end": 373
          },
          "start": 369,
          "end": 373
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFalsy",
                "optional": false,
                "typeAnnotation": null,
                "start": 385,
                "end": 392
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 394
                }
              ],
              "optional": false,
              "start": 385,
              "end": 395
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 407,
                    "end": 408
                  },
                  "directive": null,
                  "start": 407,
                  "end": 409
                }
              ],
              "start": 397,
              "end": 434
            },
            "alternate": null,
            "start": 381,
            "end": 434
          }
        ],
        "start": 375,
        "end": 436
      },
      "expression": false,
      "start": 329,
      "end": 436
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isA",
        "optional": false,
        "typeAnnotation": null,
        "start": 455,
        "end": 458
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 464,
              "end": 471
            },
            "start": 462,
            "end": 471
          },
          "start": 459,
          "end": 471
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 474,
            "end": 477
          },
          "asserts": false,
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 483,
                        "end": 484
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 486,
                            "end": 491
                          },
                          "start": 486,
                          "end": 491
                        },
                        "start": 484,
                        "end": 491
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 483,
                      "end": 491
                    }
                  ],
                  "start": 481,
                  "end": 493
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
                        "start": 498,
                        "end": 499
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 501,
                            "end": 502
                          },
                          "start": 501,
                          "end": 502
                        },
                        "start": 499,
                        "end": 502
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 498,
                      "end": 502
                    }
                  ],
                  "start": 496,
                  "end": 504
                }
              ],
              "start": 481,
              "end": 504
            },
            "start": 481,
            "end": 504
          },
          "start": 474,
          "end": 504
        },
        "start": 472,
        "end": 504
      },
      "body": null,
      "expression": false,
      "start": 438,
      "end": 505
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx4",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 519
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                    "start": 527,
                    "end": 528
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 530,
                      "end": 536
                    },
                    "start": 528,
                    "end": 536
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 527,
                  "end": 536
                }
              ],
              "start": 525,
              "end": 538
            },
            "start": 523,
            "end": 538
          },
          "start": 520,
          "end": 538
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isA",
                "optional": false,
                "typeAnnotation": null,
                "start": 550,
                "end": 553
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 557
                }
              ],
              "optional": false,
              "start": 550,
              "end": 558
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 570,
                    "end": 573
                  },
                  "directive": null,
                  "start": 570,
                  "end": 574
                }
              ],
              "start": 560,
              "end": 593
            },
            "alternate": null,
            "start": 546,
            "end": 593
          }
        ],
        "start": 540,
        "end": 595
      },
      "expression": false,
      "start": 507,
      "end": 595
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 611,
        "end": 612
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 615,
              "end": 616
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 618,
                "end": 624
              },
              "start": 616,
              "end": 624
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 615,
            "end": 624
          }
        ],
        "start": 613,
        "end": 626
      },
      "abstract": false,
      "declare": true,
      "start": 597,
      "end": 626
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "XS",
        "optional": false,
        "typeAnnotation": null,
        "start": 641,
        "end": 643
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 652,
        "end": 653
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "xs",
              "optional": false,
              "typeAnnotation": null,
              "start": 656,
              "end": 658
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 660,
                "end": 666
              },
              "start": 658,
              "end": 666
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 656,
            "end": 666
          }
        ],
        "start": 654,
        "end": 668
      },
      "abstract": false,
      "declare": true,
      "start": 627,
      "end": 668
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 684,
        "end": 685
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 688,
              "end": 689
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 691,
                "end": 697
              },
              "start": 689,
              "end": 697
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 688,
            "end": 697
          }
        ],
        "start": 686,
        "end": 699
      },
      "abstract": false,
      "declare": true,
      "start": 670,
      "end": 699
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "YS",
        "optional": false,
        "typeAnnotation": null,
        "start": 714,
        "end": 716
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 725,
        "end": 726
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ys",
              "optional": false,
              "typeAnnotation": null,
              "start": 729,
              "end": 731
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 733,
                "end": 739
              },
              "start": 731,
              "end": 739
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 729,
            "end": 739
          }
        ],
        "start": 727,
        "end": 741
      },
      "abstract": false,
      "declare": true,
      "start": 700,
      "end": 741
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isXSorY",
        "optional": false,
        "typeAnnotation": null,
        "start": 760,
        "end": 767
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 773,
              "end": 780
            },
            "start": 771,
            "end": 780
          },
          "start": 768,
          "end": 780
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 783,
            "end": 786
          },
          "asserts": false,
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
                    "name": "XS",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 790,
                    "end": 792
                  },
                  "typeArguments": null,
                  "start": 790,
                  "end": 792
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 795,
                    "end": 796
                  },
                  "typeArguments": null,
                  "start": 795,
                  "end": 796
                }
              ],
              "start": 790,
              "end": 796
            },
            "start": 790,
            "end": 796
          },
          "start": 783,
          "end": 796
        },
        "start": 781,
        "end": 796
      },
      "body": null,
      "expression": false,
      "start": 743,
      "end": 797
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx5",
        "optional": false,
        "typeAnnotation": null,
        "start": 808,
        "end": 811
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 812,
              "end": 813
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 822,
                "end": 823
              },
              "typeArguments": null,
              "start": 822,
              "end": 823
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 812,
            "end": 823
          }
        ],
        "start": 811,
        "end": 824
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 830,
                    "end": 831
                  },
                  "typeArguments": null,
                  "start": 830,
                  "end": 831
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "YS",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 834,
                    "end": 836
                  },
                  "typeArguments": null,
                  "start": 834,
                  "end": 836
                }
              ],
              "start": 830,
              "end": 836
            },
            "start": 828,
            "end": 836
          },
          "start": 825,
          "end": 836
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "XS",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 848,
                    "end": 850
                  },
                  "typeArguments": null,
                  "start": 841,
                  "end": 850
                },
                {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 860,
                    "end": 861
                  },
                  "typeArguments": null,
                  "start": 853,
                  "end": 861
                }
              ],
              "start": 841,
              "end": 861
            },
            "start": 839,
            "end": 861
          },
          "start": 838,
          "end": 861
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 873,
                "end": 876
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 888,
                "end": 889
              },
              "start": 873,
              "end": 889
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 901,
                    "end": 904
                  },
                  "directive": null,
                  "start": 901,
                  "end": 905
                }
              ],
              "start": 891,
              "end": 923
            },
            "alternate": null,
            "start": 869,
            "end": 923
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isXSorY",
                "optional": false,
                "typeAnnotation": null,
                "start": 932,
                "end": 939
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 940,
                  "end": 943
                }
              ],
              "optional": false,
              "start": 932,
              "end": 944
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 956,
                    "end": 959
                  },
                  "directive": null,
                  "start": 956,
                  "end": 960
                }
              ],
              "start": 946,
              "end": 978
            },
            "alternate": null,
            "start": 928,
            "end": 978
          }
        ],
        "start": 863,
        "end": 980
      },
      "expression": false,
      "start": 799,
      "end": 980
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isEmptyStrOrUndefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 1021,
        "end": 1042
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "mixed",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1050,
              "end": 1053
            },
            "start": 1048,
            "end": 1053
          },
          "start": 1043,
          "end": 1053
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "mixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 1056,
            "end": 1061
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 1065,
                    "end": 1067
                  },
                  "start": 1065,
                  "end": 1067
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1070,
                  "end": 1079
                }
              ],
              "start": 1065,
              "end": 1079
            },
            "start": 1065,
            "end": 1079
          },
          "start": 1056,
          "end": 1079
        },
        "start": 1054,
        "end": 1079
      },
      "body": null,
      "expression": false,
      "start": 1004,
      "end": 1080
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1091,
        "end": 1095
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1099,
                  "end": 1105
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1108,
                  "end": 1117
                }
              ],
              "start": 1099,
              "end": 1117
            },
            "start": 1097,
            "end": 1117
          },
          "start": 1096,
          "end": 1117
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isEmptyStrOrUndefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1129,
                "end": 1150
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1151,
                  "end": 1152
                }
              ],
              "optional": false,
              "start": 1129,
              "end": 1153
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1165,
                    "end": 1166
                  },
                  "directive": null,
                  "start": 1165,
                  "end": 1167
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1199,
                      "end": 1200
                    },
                    "operator": "==",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1204,
                      "end": 1213
                    },
                    "start": 1199,
                    "end": 1213
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1229,
                          "end": 1230
                        },
                        "directive": null,
                        "start": 1229,
                        "end": 1231
                      }
                    ],
                    "start": 1215,
                    "end": 1255
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1283,
                          "end": 1284
                        },
                        "directive": null,
                        "start": 1283,
                        "end": 1285
                      }
                    ],
                    "start": 1269,
                    "end": 1302
                  },
                  "start": 1195,
                  "end": 1302
                }
              ],
              "start": 1155,
              "end": 1308
            },
            "alternate": null,
            "start": 1125,
            "end": 1308
          }
        ],
        "start": 1119,
        "end": 1310
      },
      "expression": false,
      "start": 1082,
      "end": 1310
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1343,
        "end": 1345
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
              "type": "TSAnyKeyword",
              "start": 1349,
              "end": 1352
            },
            "start": 1347,
            "end": 1352
          },
          "start": 1346,
          "end": 1352
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1363,
            "end": 1364
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1368,
                  "end": 1374
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1377,
                  "end": 1386
                }
              ],
              "start": 1368,
              "end": 1386
            },
            "start": 1368,
            "end": 1386
          },
          "start": 1355,
          "end": 1386
        },
        "start": 1353,
        "end": 1386
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1387,
        "end": 1390
      },
      "expression": false,
      "start": 1334,
      "end": 1390
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
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
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1399,
                    "end": 1405
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1408,
                    "end": 1414
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1417,
                    "end": 1426
                  }
                ],
                "start": 1399,
                "end": 1426
              },
              "start": 1397,
              "end": 1426
            },
            "start": 1395,
            "end": 1426
          },
          "init": null,
          "definite": false,
          "start": 1395,
          "end": 1426
        }
      ],
      "declare": false,
      "start": 1391,
      "end": 1427
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1428,
          "end": 1430
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1431,
            "end": 1433
          }
        ],
        "optional": false,
        "start": 1428,
        "end": 1434
      },
      "directive": null,
      "start": 1428,
      "end": 1435
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "v1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1436,
        "end": 1438
      },
      "directive": null,
      "start": 1436,
      "end": 1439
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1473,
        "end": 1475
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
              "type": "TSAnyKeyword",
              "start": 1479,
              "end": 1482
            },
            "start": 1477,
            "end": 1482
          },
          "start": 1476,
          "end": 1482
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1493,
            "end": 1494
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 1498,
                    "end": 1499
                  },
                  "start": 1498,
                  "end": 1499
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1502,
                  "end": 1511
                }
              ],
              "start": 1498,
              "end": 1511
            },
            "start": 1498,
            "end": 1511
          },
          "start": 1485,
          "end": 1511
        },
        "start": 1483,
        "end": 1511
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1512,
        "end": 1515
      },
      "expression": false,
      "start": 1464,
      "end": 1515
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
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
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1524,
                    "end": 1530
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1533,
                    "end": 1539
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1542,
                    "end": 1551
                  }
                ],
                "start": 1524,
                "end": 1551
              },
              "start": 1522,
              "end": 1551
            },
            "start": 1520,
            "end": 1551
          },
          "init": null,
          "definite": false,
          "start": 1520,
          "end": 1551
        }
      ],
      "declare": false,
      "start": 1516,
      "end": 1552
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1553,
          "end": 1555
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1556,
            "end": 1558
          }
        ],
        "optional": false,
        "start": 1553,
        "end": 1559
      },
      "directive": null,
      "start": 1553,
      "end": 1560
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "v2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1561,
        "end": 1563
      },
      "directive": null,
      "start": 1561,
      "end": 1564
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isEmptyString",
        "optional": false,
        "typeAnnotation": null,
        "start": 1612,
        "end": 1625
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1633,
              "end": 1639
            },
            "start": 1631,
            "end": 1639
          },
          "start": 1626,
          "end": 1639
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 1642,
            "end": 1647
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1651,
                "end": 1653
              },
              "start": 1651,
              "end": 1653
            },
            "start": 1651,
            "end": 1653
          },
          "start": 1642,
          "end": 1653
        },
        "start": 1640,
        "end": 1653
      },
      "body": null,
      "expression": false,
      "start": 1595,
      "end": 1654
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isMaybeEmptyString",
        "optional": false,
        "typeAnnotation": null,
        "start": 1672,
        "end": 1690
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1698,
                  "end": 1704
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1707,
                  "end": 1711
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1714,
                  "end": 1723
                }
              ],
              "start": 1698,
              "end": 1723
            },
            "start": 1696,
            "end": 1723
          },
          "start": 1691,
          "end": 1723
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 1726,
            "end": 1731
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 1735,
                    "end": 1737
                  },
                  "start": 1735,
                  "end": 1737
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1740,
                  "end": 1744
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1747,
                  "end": 1756
                }
              ],
              "start": 1735,
              "end": 1756
            },
            "start": 1735,
            "end": 1756
          },
          "start": 1726,
          "end": 1756
        },
        "start": 1724,
        "end": 1756
      },
      "body": null,
      "expression": false,
      "start": 1655,
      "end": 1757
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isZero",
        "optional": false,
        "typeAnnotation": null,
        "start": 1776,
        "end": 1782
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1790,
              "end": 1796
            },
            "start": 1788,
            "end": 1796
          },
          "start": 1783,
          "end": 1796
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 1799,
            "end": 1804
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1808,
                "end": 1809
              },
              "start": 1808,
              "end": 1809
            },
            "start": 1808,
            "end": 1809
          },
          "start": 1799,
          "end": 1809
        },
        "start": 1797,
        "end": 1809
      },
      "body": null,
      "expression": false,
      "start": 1759,
      "end": 1810
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isMaybeZero",
        "optional": false,
        "typeAnnotation": null,
        "start": 1828,
        "end": 1839
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1847,
                  "end": 1853
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1856,
                  "end": 1860
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1863,
                  "end": 1872
                }
              ],
              "start": 1847,
              "end": 1872
            },
            "start": 1845,
            "end": 1872
          },
          "start": 1840,
          "end": 1872
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 1875,
            "end": 1880
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1884,
                    "end": 1885
                  },
                  "start": 1884,
                  "end": 1885
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1888,
                  "end": 1892
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1895,
                  "end": 1904
                }
              ],
              "start": 1884,
              "end": 1904
            },
            "start": 1884,
            "end": 1904
          },
          "start": 1875,
          "end": 1904
        },
        "start": 1873,
        "end": 1904
      },
      "body": null,
      "expression": false,
      "start": 1811,
      "end": 1905
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isEmptyArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 1924,
        "end": 1936
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
              "start": 1937,
              "end": 1938
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1937,
            "end": 1938
          }
        ],
        "start": 1936,
        "end": 1939
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1947,
                  "end": 1948
                },
                "typeArguments": null,
                "start": 1947,
                "end": 1948
              },
              "start": 1947,
              "end": 1950
            },
            "start": 1945,
            "end": 1950
          },
          "start": 1940,
          "end": 1950
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 1953,
            "end": 1958
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [],
              "start": 1962,
              "end": 1964
            },
            "start": 1962,
            "end": 1964
          },
          "start": 1953,
          "end": 1964
        },
        "start": 1951,
        "end": 1964
      },
      "body": null,
      "expression": false,
      "start": 1907,
      "end": 1965
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isMaybeEmptyArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 1983,
        "end": 2000
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
              "start": 2001,
              "end": 2002
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2001,
            "end": 2002
          }
        ],
        "start": 2000,
        "end": 2003
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2011,
                      "end": 2012
                    },
                    "typeArguments": null,
                    "start": 2011,
                    "end": 2012
                  },
                  "start": 2011,
                  "end": 2014
                },
                {
                  "type": "TSNullKeyword",
                  "start": 2017,
                  "end": 2021
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 2024,
                  "end": 2033
                }
              ],
              "start": 2011,
              "end": 2033
            },
            "start": 2009,
            "end": 2033
          },
          "start": 2004,
          "end": 2033
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 2036,
            "end": 2041
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [],
                  "start": 2045,
                  "end": 2047
                },
                {
                  "type": "TSNullKeyword",
                  "start": 2050,
                  "end": 2054
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 2057,
                  "end": 2066
                }
              ],
              "start": 2045,
              "end": 2066
            },
            "start": 2045,
            "end": 2066
          },
          "start": 2036,
          "end": 2066
        },
        "start": 2034,
        "end": 2066
      },
      "body": null,
      "expression": false,
      "start": 1966,
      "end": 2067
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
            "name": "TEST_CASES",
            "optional": false,
            "typeAnnotation": null,
            "start": 2075,
            "end": 2085
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2102,
                        "end": 2108
                      },
                      "start": 2100,
                      "end": 2108
                    },
                    "start": 2095,
                    "end": 2108
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isEmptyString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2127,
                          "end": 2140
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2141,
                            "end": 2146
                          }
                        ],
                        "optional": false,
                        "start": 2127,
                        "end": 2147
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2163,
                              "end": 2168
                            },
                            "directive": null,
                            "start": 2163,
                            "end": 2169
                          }
                        ],
                        "start": 2149,
                        "end": 2186
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2214,
                              "end": 2219
                            },
                            "directive": null,
                            "start": 2214,
                            "end": 2220
                          }
                        ],
                        "start": 2200,
                        "end": 2241
                      },
                      "start": 2123,
                      "end": 2241
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMaybeEmptyString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2254,
                          "end": 2272
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2273,
                            "end": 2278
                          }
                        ],
                        "optional": false,
                        "start": 2254,
                        "end": 2279
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2295,
                              "end": 2300
                            },
                            "directive": null,
                            "start": 2295,
                            "end": 2301
                          }
                        ],
                        "start": 2281,
                        "end": 2318
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2346,
                              "end": 2351
                            },
                            "directive": null,
                            "start": 2346,
                            "end": 2352
                          }
                        ],
                        "start": 2332,
                        "end": 2373
                      },
                      "start": 2250,
                      "end": 2373
                    }
                  ],
                  "start": 2113,
                  "end": 2379
                },
                "id": null,
                "generator": false,
                "start": 2094,
                "end": 2379
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2394,
                        "end": 2400
                      },
                      "start": 2392,
                      "end": 2400
                    },
                    "start": 2386,
                    "end": 2400
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMaybeEmptyString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2419,
                          "end": 2437
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2438,
                            "end": 2443
                          }
                        ],
                        "optional": false,
                        "start": 2419,
                        "end": 2444
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2460,
                              "end": 2465
                            },
                            "directive": null,
                            "start": 2460,
                            "end": 2466
                          }
                        ],
                        "start": 2446,
                        "end": 2495
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2523,
                              "end": 2528
                            },
                            "directive": null,
                            "start": 2523,
                            "end": 2529
                          }
                        ],
                        "start": 2509,
                        "end": 2550
                      },
                      "start": 2415,
                      "end": 2550
                    }
                  ],
                  "start": 2405,
                  "end": 2556
                },
                "id": null,
                "generator": false,
                "start": 2385,
                "end": 2556
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2570,
                        "end": 2576
                      },
                      "start": 2568,
                      "end": 2576
                    },
                    "start": 2563,
                    "end": 2576
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isZero",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2595,
                          "end": 2601
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2602,
                            "end": 2607
                          }
                        ],
                        "optional": false,
                        "start": 2595,
                        "end": 2608
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2624,
                              "end": 2629
                            },
                            "directive": null,
                            "start": 2624,
                            "end": 2630
                          }
                        ],
                        "start": 2610,
                        "end": 2646
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2674,
                              "end": 2679
                            },
                            "directive": null,
                            "start": 2674,
                            "end": 2680
                          }
                        ],
                        "start": 2660,
                        "end": 2701
                      },
                      "start": 2591,
                      "end": 2701
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMaybeZero",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2714,
                          "end": 2725
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2726,
                            "end": 2731
                          }
                        ],
                        "optional": false,
                        "start": 2714,
                        "end": 2732
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2748,
                              "end": 2753
                            },
                            "directive": null,
                            "start": 2748,
                            "end": 2754
                          }
                        ],
                        "start": 2734,
                        "end": 2769
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2797,
                              "end": 2802
                            },
                            "directive": null,
                            "start": 2797,
                            "end": 2803
                          }
                        ],
                        "start": 2783,
                        "end": 2824
                      },
                      "start": 2710,
                      "end": 2824
                    }
                  ],
                  "start": 2581,
                  "end": 2830
                },
                "id": null,
                "generator": false,
                "start": 2562,
                "end": 2830
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2845,
                        "end": 2851
                      },
                      "start": 2843,
                      "end": 2851
                    },
                    "start": 2837,
                    "end": 2851
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMaybeZero",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2870,
                          "end": 2881
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2882,
                            "end": 2887
                          }
                        ],
                        "optional": false,
                        "start": 2870,
                        "end": 2888
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2904,
                              "end": 2909
                            },
                            "directive": null,
                            "start": 2904,
                            "end": 2910
                          }
                        ],
                        "start": 2890,
                        "end": 2938
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2966,
                              "end": 2971
                            },
                            "directive": null,
                            "start": 2966,
                            "end": 2972
                          }
                        ],
                        "start": 2952,
                        "end": 2993
                      },
                      "start": 2866,
                      "end": 2993
                    }
                  ],
                  "start": 2856,
                  "end": 2999
                },
                "id": null,
                "generator": false,
                "start": 2836,
                "end": 2999
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 3013,
                          "end": 3019
                        },
                        "start": 3013,
                        "end": 3021
                      },
                      "start": 3011,
                      "end": 3021
                    },
                    "start": 3006,
                    "end": 3021
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isEmptyArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3040,
                          "end": 3052
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3053,
                            "end": 3058
                          }
                        ],
                        "optional": false,
                        "start": 3040,
                        "end": 3059
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3075,
                              "end": 3080
                            },
                            "directive": null,
                            "start": 3075,
                            "end": 3081
                          }
                        ],
                        "start": 3061,
                        "end": 3098
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3126,
                              "end": 3131
                            },
                            "directive": null,
                            "start": 3126,
                            "end": 3132
                          }
                        ],
                        "start": 3112,
                        "end": 3155
                      },
                      "start": 3036,
                      "end": 3155
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMaybeEmptyArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3168,
                          "end": 3185
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3186,
                            "end": 3191
                          }
                        ],
                        "optional": false,
                        "start": 3168,
                        "end": 3192
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3208,
                              "end": 3213
                            },
                            "directive": null,
                            "start": 3208,
                            "end": 3214
                          }
                        ],
                        "start": 3194,
                        "end": 3231
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3259,
                              "end": 3264
                            },
                            "directive": null,
                            "start": 3259,
                            "end": 3265
                          }
                        ],
                        "start": 3245,
                        "end": 3288
                      },
                      "start": 3164,
                      "end": 3288
                    }
                  ],
                  "start": 3026,
                  "end": 3294
                },
                "id": null,
                "generator": false,
                "start": 3005,
                "end": 3294
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 3309,
                          "end": 3315
                        },
                        "start": 3309,
                        "end": 3317
                      },
                      "start": 3307,
                      "end": 3317
                    },
                    "start": 3301,
                    "end": 3317
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMaybeEmptyArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3336,
                          "end": 3353
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3354,
                            "end": 3359
                          }
                        ],
                        "optional": false,
                        "start": 3336,
                        "end": 3360
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3376,
                              "end": 3381
                            },
                            "directive": null,
                            "start": 3376,
                            "end": 3382
                          }
                        ],
                        "start": 3362,
                        "end": 3411
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3439,
                              "end": 3444
                            },
                            "directive": null,
                            "start": 3439,
                            "end": 3445
                          }
                        ],
                        "start": 3425,
                        "end": 3468
                      },
                      "start": 3332,
                      "end": 3468
                    }
                  ],
                  "start": 3322,
                  "end": 3474
                },
                "id": null,
                "generator": false,
                "start": 3300,
                "end": 3474
              }
            ],
            "start": 2088,
            "end": 3477
          },
          "definite": false,
          "start": 2075,
          "end": 3477
        }
      ],
      "declare": false,
      "start": 2069,
      "end": 3478
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmptyString",
        "optional": false,
        "typeAnnotation": null,
        "start": 3507,
        "end": 3518
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 3521,
              "end": 3523
            },
            "start": 3521,
            "end": 3523
          },
          {
            "type": "TSNullKeyword",
            "start": 3526,
            "end": 3530
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 3533,
            "end": 3542
          }
        ],
        "start": 3521,
        "end": 3542
      },
      "declare": false,
      "start": 3502,
      "end": 3543
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isEmpty",
        "optional": false,
        "typeAnnotation": null,
        "start": 3554,
        "end": 3561
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 3569,
                  "end": 3575
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EmptyString",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3578,
                    "end": 3589
                  },
                  "typeArguments": null,
                  "start": 3578,
                  "end": 3589
                }
              ],
              "start": 3569,
              "end": 3589
            },
            "start": 3567,
            "end": 3589
          },
          "start": 3562,
          "end": 3589
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 3592,
            "end": 3597
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "EmptyString",
                "optional": false,
                "typeAnnotation": null,
                "start": 3601,
                "end": 3612
              },
              "typeArguments": null,
              "start": 3601,
              "end": 3612
            },
            "start": 3601,
            "end": 3612
          },
          "start": 3592,
          "end": 3612
        },
        "start": 3590,
        "end": 3612
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3626,
                    "end": 3631
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 3636,
                    "end": 3638
                  },
                  "start": 3626,
                  "end": 3638
                },
                "operator": "||",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3642,
                    "end": 3647
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 3652,
                    "end": 3656
                  },
                  "start": 3642,
                  "end": 3656
                },
                "start": 3626,
                "end": 3656
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3660,
                  "end": 3665
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3670,
                  "end": 3679
                },
                "start": 3660,
                "end": 3679
              },
              "start": 3626,
              "end": 3679
            },
            "start": 3619,
            "end": 3680
          }
        ],
        "start": 3613,
        "end": 3682
      },
      "expression": false,
      "start": 3545,
      "end": 3682
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 3694,
                    "end": 3700
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 3703,
                    "end": 3707
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 3710,
                    "end": 3719
                  }
                ],
                "start": 3694,
                "end": 3719
              },
              "start": 3692,
              "end": 3719
            },
            "start": 3688,
            "end": 3719
          },
          "init": null,
          "definite": false,
          "start": 3688,
          "end": 3719
        }
      ],
      "declare": false,
      "start": 3684,
      "end": 3720
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isEmpty",
          "optional": false,
          "typeAnnotation": null,
          "start": 3726,
          "end": 3733
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 3734,
            "end": 3738
          }
        ],
        "optional": false,
        "start": 3726,
        "end": 3739
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 3747,
              "end": 3751
            },
            "directive": null,
            "start": 3747,
            "end": 3752
          }
        ],
        "start": 3741,
        "end": 3770
      },
      "alternate": null,
      "start": 3722,
      "end": 3770
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assert",
        "optional": false,
        "typeAnnotation": null,
        "start": 3811,
        "end": 3817
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
              "start": 3818,
              "end": 3819
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3818,
            "end": 3819
          }
        ],
        "start": 3817,
        "end": 3820
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3828,
              "end": 3831
            },
            "start": 3826,
            "end": 3831
          },
          "start": 3821,
          "end": 3831
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 3842,
            "end": 3847
          },
          "asserts": true,
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
                "start": 3851,
                "end": 3852
              },
              "typeArguments": null,
              "start": 3851,
              "end": 3852
            },
            "start": 3851,
            "end": 3852
          },
          "start": 3834,
          "end": 3852
        },
        "start": 3832,
        "end": 3852
      },
      "body": null,
      "expression": false,
      "start": 3794,
      "end": 3852
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3863,
        "end": 3868
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 3874,
                  "end": 3880
                },
                {
                  "type": "TSStringKeyword",
                  "start": 3883,
                  "end": 3889
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 3892,
                  "end": 3899
                }
              ],
              "start": 3874,
              "end": 3899
            },
            "start": 3872,
            "end": 3899
          },
          "start": 3869,
          "end": 3899
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
                "name": "assert",
                "optional": false,
                "typeAnnotation": null,
                "start": 3907,
                "end": 3913
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
                          "value": 1,
                          "raw": "1",
                          "start": 3914,
                          "end": 3915
                        },
                        "start": 3914,
                        "end": 3915
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 3918,
                        "end": 3924
                      }
                    ],
                    "start": 3914,
                    "end": 3924
                  }
                ],
                "start": 3913,
                "end": 3925
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3926,
                  "end": 3929
                }
              ],
              "optional": false,
              "start": 3907,
              "end": 3930
            },
            "directive": null,
            "start": 3907,
            "end": 3931
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3936,
              "end": 3939
            },
            "directive": null,
            "start": 3936,
            "end": 3940
          }
        ],
        "start": 3901,
        "end": 3957
      },
      "expression": false,
      "start": 3854,
      "end": 3957
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "check1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3990,
        "end": 3996
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
              "type": "TSUnknownKeyword",
              "start": 4000,
              "end": 4007
            },
            "start": 3998,
            "end": 4007
          },
          "start": 3997,
          "end": 4007
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4010,
            "end": 4011
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4016,
                  "end": 4022
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 4025,
                    "end": 4026
                  },
                  "start": 4025,
                  "end": 4026
                }
              ],
              "start": 4016,
              "end": 4026
            },
            "start": 4016,
            "end": 4026
          },
          "start": 4010,
          "end": 4027
        },
        "start": 4008,
        "end": 4027
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4045,
                    "end": 4046
                  },
                  "prefix": true,
                  "start": 4038,
                  "end": 4046
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 4051,
                  "end": 4059
                },
                "start": 4038,
                "end": 4059
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4063,
                  "end": 4064
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 4069,
                  "end": 4070
                },
                "start": 4063,
                "end": 4070
              },
              "start": 4038,
              "end": 4070
            },
            "start": 4031,
            "end": 4071
          }
        ],
        "start": 4028,
        "end": 4073
      },
      "expression": false,
      "start": 3981,
      "end": 4073
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "check2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4084,
        "end": 4090
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
              "type": "TSUnknownKeyword",
              "start": 4094,
              "end": 4101
            },
            "start": 4092,
            "end": 4101
          },
          "start": 4091,
          "end": 4101
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4104,
            "end": 4105
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 4110,
                    "end": 4117
                  },
                  "start": 4110,
                  "end": 4117
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 4120,
                    "end": 4121
                  },
                  "start": 4120,
                  "end": 4121
                }
              ],
              "start": 4110,
              "end": 4121
            },
            "start": 4110,
            "end": 4121
          },
          "start": 4104,
          "end": 4122
        },
        "start": 4102,
        "end": 4122
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4133,
                  "end": 4134
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 4139,
                  "end": 4146
                },
                "start": 4133,
                "end": 4146
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4150,
                  "end": 4151
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 4156,
                  "end": 4157
                },
                "start": 4150,
                "end": 4157
              },
              "start": 4133,
              "end": 4157
            },
            "start": 4126,
            "end": 4158
          }
        ],
        "start": 4123,
        "end": 4160
      },
      "expression": false,
      "start": 4075,
      "end": 4160
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 4171,
        "end": 4176
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
              "type": "TSUnknownKeyword",
              "start": 4180,
              "end": 4187
            },
            "start": 4178,
            "end": 4187
          },
          "start": 4177,
          "end": 4187
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4203,
                    "end": 4204
                  },
                  "prefix": true,
                  "start": 4196,
                  "end": 4204
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 4209,
                  "end": 4217
                },
                "start": 4196,
                "end": 4217
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4221,
                  "end": 4222
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 4227,
                  "end": 4228
                },
                "start": 4221,
                "end": 4228
              },
              "start": 4196,
              "end": 4228
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4234,
                    "end": 4235
                  },
                  "directive": null,
                  "start": 4234,
                  "end": 4236
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4258,
                        "end": 4259
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 4264,
                        "end": 4271
                      },
                      "start": 4258,
                      "end": 4271
                    },
                    "operator": "||",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4275,
                        "end": 4276
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 4281,
                        "end": 4282
                      },
                      "start": 4275,
                      "end": 4282
                    },
                    "start": 4258,
                    "end": 4282
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4289,
                          "end": 4290
                        },
                        "directive": null,
                        "start": 4289,
                        "end": 4291
                      }
                    ],
                    "start": 4284,
                    "end": 4311
                  },
                  "alternate": null,
                  "start": 4254,
                  "end": 4311
                }
              ],
              "start": 4230,
              "end": 4314
            },
            "alternate": null,
            "start": 4192,
            "end": 4314
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "check1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4320,
                "end": 4326
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4327,
                  "end": 4328
                }
              ],
              "optional": false,
              "start": 4320,
              "end": 4329
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4335,
                    "end": 4336
                  },
                  "directive": null,
                  "start": 4335,
                  "end": 4337
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "check2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4359,
                      "end": 4365
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4366,
                        "end": 4367
                      }
                    ],
                    "optional": false,
                    "start": 4359,
                    "end": 4368
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4375,
                          "end": 4376
                        },
                        "directive": null,
                        "start": 4375,
                        "end": 4377
                      }
                    ],
                    "start": 4370,
                    "end": 4397
                  },
                  "alternate": null,
                  "start": 4355,
                  "end": 4397
                }
              ],
              "start": 4331,
              "end": 4400
            },
            "alternate": null,
            "start": 4316,
            "end": 4400
          }
        ],
        "start": 4189,
        "end": 4402
      },
      "expression": false,
      "start": 4162,
      "end": 4402
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertRelationIsNullOrStringArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 4435,
        "end": 4468
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 4473,
                        "end": 4479
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 4482,
                        "end": 4488
                      }
                    ],
                    "start": 4473,
                    "end": 4488
                  },
                  "start": 4472,
                  "end": 4491
                },
                {
                  "type": "TSNullKeyword",
                  "start": 4494,
                  "end": 4498
                }
              ],
              "start": 4472,
              "end": 4498
            },
            "start": 4470,
            "end": 4498
          },
          "start": 4469,
          "end": 4498
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 4509,
            "end": 4510
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 4514,
                    "end": 4520
                  },
                  "start": 4514,
                  "end": 4522
                },
                {
                  "type": "TSNullKeyword",
                  "start": 4525,
                  "end": 4529
                }
              ],
              "start": 4514,
              "end": 4529
            },
            "start": 4514,
            "end": 4529
          },
          "start": 4501,
          "end": 4529
        },
        "start": 4499,
        "end": 4529
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 4530,
        "end": 4532
      },
      "expression": false,
      "start": 4426,
      "end": 4532
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1x",
        "optional": false,
        "typeAnnotation": null,
        "start": 4543,
        "end": 4546
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 4553,
                        "end": 4559
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 4562,
                        "end": 4568
                      }
                    ],
                    "start": 4553,
                    "end": 4568
                  },
                  "start": 4552,
                  "end": 4571
                },
                {
                  "type": "TSNullKeyword",
                  "start": 4574,
                  "end": 4578
                }
              ],
              "start": 4552,
              "end": 4578
            },
            "start": 4550,
            "end": 4578
          },
          "start": 4547,
          "end": 4578
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
                "name": "assertRelationIsNullOrStringArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 4586,
                "end": 4619
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4620,
                  "end": 4623
                }
              ],
              "optional": false,
              "start": 4586,
              "end": 4624
            },
            "directive": null,
            "start": 4586,
            "end": 4625
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 4630,
              "end": 4633
            },
            "directive": null,
            "start": 4630,
            "end": 4634
          }
        ],
        "start": 4580,
        "end": 4656
      },
      "expression": false,
      "start": 4534,
      "end": 4656
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyDiscriminatedUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 4685,
        "end": 4705
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4710,
                  "end": 4714
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "'A'",
                      "start": 4716,
                      "end": 4719
                    },
                    "start": 4716,
                    "end": 4719
                  },
                  "start": 4714,
                  "end": 4719
                },
                "accessibility": null,
                "static": false,
                "start": 4710,
                "end": 4720
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4721,
                  "end": 4726
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 4728,
                    "end": 4734
                  },
                  "start": 4726,
                  "end": 4734
                },
                "accessibility": null,
                "static": false,
                "start": 4721,
                "end": 4734
              }
            ],
            "start": 4708,
            "end": 4736
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4741,
                  "end": 4745
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "'B'",
                      "start": 4747,
                      "end": 4750
                    },
                    "start": 4747,
                    "end": 4750
                  },
                  "start": 4745,
                  "end": 4750
                },
                "accessibility": null,
                "static": false,
                "start": 4741,
                "end": 4751
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4752,
                  "end": 4757
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 4759,
                    "end": 4765
                  },
                  "start": 4757,
                  "end": 4765
                },
                "accessibility": null,
                "static": false,
                "start": 4752,
                "end": 4765
              }
            ],
            "start": 4739,
            "end": 4767
          }
        ],
        "start": 4708,
        "end": 4767
      },
      "declare": false,
      "start": 4680,
      "end": 4768
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isMyDiscriminatedUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 4787,
        "end": 4809
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 4816,
              "end": 4823
            },
            "start": 4814,
            "end": 4823
          },
          "start": 4810,
          "end": 4823
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": null,
            "start": 4826,
            "end": 4830
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyDiscriminatedUnion",
                "optional": false,
                "typeAnnotation": null,
                "start": 4834,
                "end": 4854
              },
              "typeArguments": null,
              "start": 4834,
              "end": 4854
            },
            "start": 4834,
            "end": 4854
          },
          "start": 4826,
          "end": 4854
        },
        "start": 4824,
        "end": 4854
      },
      "body": null,
      "expression": false,
      "start": 4770,
      "end": 4855
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
            "name": "working",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 4880,
                "end": 4887
              },
              "start": 4878,
              "end": 4887
            },
            "start": 4871,
            "end": 4887
          },
          "init": null,
          "definite": false,
          "start": 4871,
          "end": 4887
        }
      ],
      "declare": true,
      "start": 4857,
      "end": 4888
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
            "name": "broken",
            "optional": false,
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
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4911,
                      "end": 4917
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4918,
                          "end": 4924
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 4926,
                          "end": 4929
                        }
                      ],
                      "start": 4917,
                      "end": 4930
                    },
                    "start": 4911,
                    "end": 4930
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 4933,
                    "end": 4942
                  }
                ],
                "start": 4911,
                "end": 4942
              },
              "start": 4909,
              "end": 4942
            },
            "start": 4903,
            "end": 4942
          },
          "init": null,
          "definite": false,
          "start": 4903,
          "end": 4942
        }
      ],
      "declare": true,
      "start": 4889,
      "end": 4943
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
            "name": "workingAgain",
            "optional": false,
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
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4972,
                      "end": 4978
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4979,
                          "end": 4985
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 4987,
                          "end": 4990
                        }
                      ],
                      "start": 4978,
                      "end": 4991
                    },
                    "start": 4972,
                    "end": 4991
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 4994,
                    "end": 5003
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 5006,
                    "end": 5013
                  }
                ],
                "start": 4972,
                "end": 5013
              },
              "start": 4970,
              "end": 5013
            },
            "start": 4958,
            "end": 5013
          },
          "init": null,
          "definite": false,
          "start": 4958,
          "end": 5013
        }
      ],
      "declare": true,
      "start": 4944,
      "end": 5014
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isMyDiscriminatedUnion",
              "optional": false,
              "typeAnnotation": null,
              "start": 5016,
              "end": 5038
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "working",
                "optional": false,
                "typeAnnotation": null,
                "start": 5039,
                "end": 5046
              }
            ],
            "optional": false,
            "start": 5016,
            "end": 5047
          },
          "operator": "&&",
          "right": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "working",
                "optional": false,
                "typeAnnotation": null,
                "start": 5051,
                "end": 5058
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 5059,
                "end": 5063
              },
              "optional": false,
              "computed": false,
              "start": 5051,
              "end": 5063
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "A",
              "raw": "'A'",
              "start": 5068,
              "end": 5071
            },
            "start": 5051,
            "end": 5071
          },
          "start": 5016,
          "end": 5071
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "working",
            "optional": false,
            "typeAnnotation": null,
            "start": 5075,
            "end": 5082
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "aProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 5083,
            "end": 5088
          },
          "optional": false,
          "computed": false,
          "start": 5075,
          "end": 5088
        },
        "start": 5016,
        "end": 5088
      },
      "directive": null,
      "start": 5016,
      "end": 5089
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isMyDiscriminatedUnion",
              "optional": false,
              "typeAnnotation": null,
              "start": 5090,
              "end": 5112
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "broken",
                "optional": false,
                "typeAnnotation": null,
                "start": 5113,
                "end": 5119
              }
            ],
            "optional": false,
            "start": 5090,
            "end": 5120
          },
          "operator": "&&",
          "right": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "broken",
                "optional": false,
                "typeAnnotation": null,
                "start": 5124,
                "end": 5130
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 5131,
                "end": 5135
              },
              "optional": false,
              "computed": false,
              "start": 5124,
              "end": 5135
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "A",
              "raw": "'A'",
              "start": 5140,
              "end": 5143
            },
            "start": 5124,
            "end": 5143
          },
          "start": 5090,
          "end": 5143
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "broken",
            "optional": false,
            "typeAnnotation": null,
            "start": 5147,
            "end": 5153
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "aProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 5154,
            "end": 5159
          },
          "optional": false,
          "computed": false,
          "start": 5147,
          "end": 5159
        },
        "start": 5090,
        "end": 5159
      },
      "directive": null,
      "start": 5090,
      "end": 5160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isMyDiscriminatedUnion",
              "optional": false,
              "typeAnnotation": null,
              "start": 5161,
              "end": 5183
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "workingAgain",
                "optional": false,
                "typeAnnotation": null,
                "start": 5184,
                "end": 5196
              }
            ],
            "optional": false,
            "start": 5161,
            "end": 5197
          },
          "operator": "&&",
          "right": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "workingAgain",
                "optional": false,
                "typeAnnotation": null,
                "start": 5201,
                "end": 5213
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 5214,
                "end": 5218
              },
              "optional": false,
              "computed": false,
              "start": 5201,
              "end": 5218
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "A",
              "raw": "'A'",
              "start": 5223,
              "end": 5226
            },
            "start": 5201,
            "end": 5226
          },
          "start": 5161,
          "end": 5226
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "workingAgain",
            "optional": false,
            "typeAnnotation": null,
            "start": 5230,
            "end": 5242
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "aProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 5243,
            "end": 5248
          },
          "optional": false,
          "computed": false,
          "start": 5230,
          "end": 5248
        },
        "start": 5161,
        "end": 5248
      },
      "directive": null,
      "start": 5161,
      "end": 5249
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Union",
        "optional": false,
        "typeAnnotation": null,
        "start": 5278,
        "end": 5283
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5294,
                  "end": 5298
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 5300,
                      "end": 5303
                    },
                    "start": 5300,
                    "end": 5303
                  },
                  "start": 5298,
                  "end": 5303
                },
                "accessibility": null,
                "static": false,
                "start": 5294,
                "end": 5304
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "variant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5305,
                  "end": 5312
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 5314,
                      "end": 5315
                    },
                    "start": 5314,
                    "end": 5315
                  },
                  "start": 5312,
                  "end": 5315
                },
                "accessibility": null,
                "static": false,
                "start": 5305,
                "end": 5315
              }
            ],
            "start": 5292,
            "end": 5317
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5326,
                  "end": 5330
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 5332,
                      "end": 5335
                    },
                    "start": 5332,
                    "end": 5335
                  },
                  "start": 5330,
                  "end": 5335
                },
                "accessibility": null,
                "static": false,
                "start": 5326,
                "end": 5336
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "variant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5337,
                  "end": 5344
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 5346,
                      "end": 5347
                    },
                    "start": 5346,
                    "end": 5347
                  },
                  "start": 5344,
                  "end": 5347
                },
                "accessibility": null,
                "static": false,
                "start": 5337,
                "end": 5347
              }
            ],
            "start": 5324,
            "end": 5349
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5358,
                  "end": 5362
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 5364,
                      "end": 5367
                    },
                    "start": 5364,
                    "end": 5367
                  },
                  "start": 5362,
                  "end": 5367
                },
                "accessibility": null,
                "static": false,
                "start": 5358,
                "end": 5367
              }
            ],
            "start": 5356,
            "end": 5369
          }
        ],
        "start": 5290,
        "end": 5369
      },
      "declare": false,
      "start": 5273,
      "end": 5370
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "example1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5381,
        "end": 5389
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Union",
                "optional": false,
                "typeAnnotation": null,
                "start": 5397,
                "end": 5402
              },
              "typeArguments": null,
              "start": 5397,
              "end": 5402
            },
            "start": 5395,
            "end": 5402
          },
          "start": 5390,
          "end": 5402
        }
      ],
      "returnType": {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5407,
                    "end": 5411
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 5413,
                        "end": 5416
                      },
                      "start": 5413,
                      "end": 5416
                    },
                    "start": 5411,
                    "end": 5416
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5407,
                  "end": 5417
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "variant",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5418,
                    "end": 5425
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 5427,
                        "end": 5428
                      },
                      "start": 5427,
                      "end": 5428
                    },
                    "start": 5425,
                    "end": 5428
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5418,
                  "end": 5428
                }
              ],
              "start": 5405,
              "end": 5430
            },
            {
              "type": "TSNullKeyword",
              "start": 5433,
              "end": 5437
            }
          ],
          "start": 5405,
          "end": 5437
        },
        "start": 5403,
        "end": 5437
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5448,
                  "end": 5453
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5454,
                  "end": 5458
                },
                "optional": false,
                "computed": false,
                "start": 5448,
                "end": 5458
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 5463,
                "end": 5466
              },
              "start": 5448,
              "end": 5466
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 5485,
                    "end": 5489
                  },
                  "start": 5478,
                  "end": 5490
                }
              ],
              "start": 5468,
              "end": 5496
            },
            "alternate": null,
            "start": 5444,
            "end": 5496
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5505,
                  "end": 5510
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "variant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5511,
                  "end": 5518
                },
                "optional": false,
                "computed": false,
                "start": 5505,
                "end": 5518
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 5523,
                "end": 5524
              },
              "start": 5505,
              "end": 5524
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 5543,
                    "end": 5547
                  },
                  "start": 5536,
                  "end": 5548
                }
              ],
              "start": 5526,
              "end": 5554
            },
            "alternate": null,
            "start": 5501,
            "end": 5554
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 5566,
              "end": 5571
            },
            "start": 5559,
            "end": 5572
          }
        ],
        "start": 5438,
        "end": 5574
      },
      "expression": false,
      "start": 5372,
      "end": 5574
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "example2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5585,
        "end": 5593
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Union",
                "optional": false,
                "typeAnnotation": null,
                "start": 5601,
                "end": 5606
              },
              "typeArguments": null,
              "start": 5601,
              "end": 5606
            },
            "start": 5599,
            "end": 5606
          },
          "start": 5594,
          "end": 5606
        }
      ],
      "returnType": {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5611,
                    "end": 5615
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 5617,
                        "end": 5620
                      },
                      "start": 5617,
                      "end": 5620
                    },
                    "start": 5615,
                    "end": 5620
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5611,
                  "end": 5621
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "variant",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5622,
                    "end": 5629
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 5631,
                        "end": 5632
                      },
                      "start": 5631,
                      "end": 5632
                    },
                    "start": 5629,
                    "end": 5632
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5622,
                  "end": 5632
                }
              ],
              "start": 5609,
              "end": 5634
            },
            {
              "type": "TSNullKeyword",
              "start": 5637,
              "end": 5641
            }
          ],
          "start": 5609,
          "end": 5641
        },
        "start": 5607,
        "end": 5641
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5652,
                  "end": 5657
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5658,
                  "end": 5662
                },
                "optional": false,
                "computed": false,
                "start": 5652,
                "end": 5662
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 5667,
                "end": 5670
              },
              "start": 5652,
              "end": 5670
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 5689,
                    "end": 5693
                  },
                  "start": 5682,
                  "end": 5694
                }
              ],
              "start": 5672,
              "end": 5700
            },
            "alternate": null,
            "start": 5648,
            "end": 5700
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5709,
                    "end": 5714
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5715,
                    "end": 5719
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5709,
                  "end": 5719
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 5724,
                  "end": 5727
                },
                "start": 5709,
                "end": 5727
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5731,
                    "end": 5736
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "variant",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5737,
                    "end": 5744
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5731,
                  "end": 5744
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 5749,
                  "end": 5750
                },
                "start": 5731,
                "end": 5750
              },
              "start": 5709,
              "end": 5750
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 5769,
                    "end": 5773
                  },
                  "start": 5762,
                  "end": 5774
                }
              ],
              "start": 5752,
              "end": 5780
            },
            "alternate": null,
            "start": 5705,
            "end": 5780
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 5792,
              "end": 5797
            },
            "start": 5785,
            "end": 5798
          }
        ],
        "start": 5642,
        "end": 5800
      },
      "expression": false,
      "start": 5576,
      "end": 5800
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "example3",
        "optional": false,
        "typeAnnotation": null,
        "start": 5811,
        "end": 5819
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Union",
                "optional": false,
                "typeAnnotation": null,
                "start": 5827,
                "end": 5832
              },
              "typeArguments": null,
              "start": 5827,
              "end": 5832
            },
            "start": 5825,
            "end": 5832
          },
          "start": 5820,
          "end": 5832
        }
      ],
      "returnType": {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5837,
                    "end": 5841
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 5843,
                        "end": 5846
                      },
                      "start": 5843,
                      "end": 5846
                    },
                    "start": 5841,
                    "end": 5846
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5837,
                  "end": 5847
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "variant",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5848,
                    "end": 5855
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 5857,
                        "end": 5858
                      },
                      "start": 5857,
                      "end": 5858
                    },
                    "start": 5855,
                    "end": 5858
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5848,
                  "end": 5858
                }
              ],
              "start": 5835,
              "end": 5860
            },
            {
              "type": "TSNullKeyword",
              "start": 5863,
              "end": 5867
            }
          ],
          "start": 5835,
          "end": 5867
        },
        "start": 5833,
        "end": 5867
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5878,
                  "end": 5883
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5884,
                  "end": 5888
                },
                "optional": false,
                "computed": false,
                "start": 5878,
                "end": 5888
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 5893,
                "end": 5896
              },
              "start": 5878,
              "end": 5896
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 5915,
                    "end": 5919
                  },
                  "start": 5908,
                  "end": 5920
                }
              ],
              "start": 5898,
              "end": 5926
            },
            "alternate": null,
            "start": 5874,
            "end": 5926
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5935,
                  "end": 5940
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5941,
                  "end": 5945
                },
                "optional": false,
                "computed": false,
                "start": 5935,
                "end": 5945
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5949,
                    "end": 5954
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "variant",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5955,
                    "end": 5962
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5949,
                  "end": 5962
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 5967,
                  "end": 5968
                },
                "start": 5949,
                "end": 5968
              },
              "start": 5935,
              "end": 5968
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 5987,
                    "end": 5991
                  },
                  "start": 5980,
                  "end": 5992
                }
              ],
              "start": 5970,
              "end": 5998
            },
            "alternate": null,
            "start": 5931,
            "end": 5998
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 6010,
              "end": 6015
            },
            "start": 6003,
            "end": 6016
          }
        ],
        "start": 5868,
        "end": 6018
      },
      "expression": false,
      "start": 5802,
      "end": 6018
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 6018
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Falsy",
    "start": 5,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 13,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 19,
    "end": 20
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 23,
    "end": 24
  },
  {
    "type": "Numeric",
    "value": "0n",
    "start": 25,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 28,
    "end": 29
  },
  {
    "type": "String",
    "value": "''",
    "start": 30,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 33,
    "end": 34
  },
  {
    "type": "Null",
    "value": "null",
    "start": 35,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 42,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 54,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 62,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "isFalsy",
    "start": 71,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 79,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 86,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
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
    "value": "value",
    "start": 96,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 102,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "Falsy",
    "start": 105,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 113,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "fx1",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 129,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 138,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 147,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 164,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "isFalsy",
    "start": 168,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 225,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "fx2",
    "start": 234,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 248,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 265,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "isFalsy",
    "start": 269,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ")",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 329,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "fx3",
    "start": 338,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 344,
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
    "value": "|",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 361,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 381,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "isFalsy",
    "start": 385,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "{",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 438,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 446,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 455,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 459,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 464,
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
    "value": ":",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 474,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 478,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 486,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 499,
    "end": 500
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 507,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "fx4",
    "start": 516,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 520,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 530,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "{",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 546,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 550,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 554,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 570,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 597,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 605,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 618,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 627,
    "end": 634
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 635,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "XS",
    "start": 641,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 644,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "xs",
    "start": 656,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 660,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 670,
    "end": 677
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 678,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 691,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 700,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 708,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "YS",
    "start": 714,
    "end": 716
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 717,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "ys",
    "start": 729,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 733,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 743,
    "end": 750
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 751,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "isXSorY",
    "start": 760,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 768,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 773,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 783,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 787,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "XS",
    "start": 790,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 796,
    "end": 797
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 799,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "fx5",
    "start": 808,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 812,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 814,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 825,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "YS",
    "start": 834,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 839,
    "end": 840
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 841,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "XS",
    "start": 848,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 851,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 853,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 863,
    "end": 864
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 869,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 873,
    "end": 876
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 877,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 901,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 922,
    "end": 923
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 928,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "isXSorY",
    "start": 932,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 940,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 956,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1004,
    "end": 1011
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1012,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "isEmptyStrOrUndefined",
    "start": 1021,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 1043,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1050,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 1056,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1062,
    "end": 1064
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1065,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1070,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1082,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "fx10",
    "start": 1091,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1099,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1108,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1125,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "isEmptyStrOrUndefined",
    "start": 1129,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1195,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1201,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1204,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1264,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1334,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1343,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1349,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 1355,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1365,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1368,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1377,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1391,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 1395,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1399,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1408,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1417,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1428,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 1431,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 1436,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1464,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1473,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1479,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 1485,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1495,
    "end": 1497
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1502,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1516,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 1520,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1524,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1533,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1542,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1553,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 1556,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 1561,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1595,
    "end": 1602
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1603,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "isEmptyString",
    "start": 1612,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1626,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1633,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1642,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1648,
    "end": 1650
  },
  {
    "type": "String",
    "value": "''",
    "start": 1651,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1655,
    "end": 1662
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1663,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "isMaybeEmptyString",
    "start": 1672,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1691,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1698,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1707,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1714,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1726,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1732,
    "end": 1734
  },
  {
    "type": "String",
    "value": "''",
    "start": 1735,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1740,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1747,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1759,
    "end": 1766
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1767,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "isZero",
    "start": 1776,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1783,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1790,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1799,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1805,
    "end": 1807
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1811,
    "end": 1818
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1819,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "isMaybeZero",
    "start": 1828,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1840,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1847,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1856,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1863,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1875,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1881,
    "end": 1883
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1888,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1895,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1907,
    "end": 1914
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1915,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "isEmptyArray",
    "start": 1924,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1940,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Punctuator",
    "value": "]",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1953,
    "end": 1958
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1959,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1966,
    "end": 1973
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1974,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "isMaybeEmptyArray",
    "start": 1983,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2004,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2017,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2024,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2036,
    "end": 2041
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2042,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2050,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2057,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2069,
    "end": 2074
  },
  {
    "type": "Identifier",
    "value": "TEST_CASES",
    "start": 2075,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2095,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2102,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2110,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2123,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "isEmptyString",
    "start": 2127,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2141,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2163,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2195,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2214,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2250,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Identifier",
    "value": "isMaybeEmptyString",
    "start": 2254,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2273,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2295,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2327,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2346,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2386,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2394,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2402,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2415,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "isMaybeEmptyString",
    "start": 2419,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2438,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2460,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2504,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2523,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2563,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2570,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2578,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2591,
    "end": 2593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Identifier",
    "value": "isZero",
    "start": 2595,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2602,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2624,
    "end": 2629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2629,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2655,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2674,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2710,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Identifier",
    "value": "isMaybeZero",
    "start": 2714,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2726,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2748,
    "end": 2753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2778,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2797,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2837,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2845,
    "end": 2851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2853,
    "end": 2855
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2866,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Identifier",
    "value": "isMaybeZero",
    "start": 2870,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2882,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2888,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2904,
    "end": 2909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2947,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2966,
    "end": 2971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3006,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3013,
    "end": 3019
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3023,
    "end": 3025
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3036,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Identifier",
    "value": "isEmptyArray",
    "start": 3040,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3052,
    "end": 3053
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3053,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3075,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3097,
    "end": 3098
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3107,
    "end": 3111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3126,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3164,
    "end": 3166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Identifier",
    "value": "isMaybeEmptyArray",
    "start": 3168,
    "end": 3185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3185,
    "end": 3186
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3186,
    "end": 3191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3208,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3240,
    "end": 3244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3245,
    "end": 3246
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3259,
    "end": 3264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3287,
    "end": 3288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3293,
    "end": 3294
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3294,
    "end": 3295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3301,
    "end": 3306
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3306,
    "end": 3307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3309,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3316,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3319,
    "end": 3321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3322,
    "end": 3323
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3332,
    "end": 3334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Identifier",
    "value": "isMaybeEmptyArray",
    "start": 3336,
    "end": 3353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3354,
    "end": 3359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3359,
    "end": 3360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3360,
    "end": 3361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3362,
    "end": 3363
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3376,
    "end": 3381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3381,
    "end": 3382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3410,
    "end": 3411
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3420,
    "end": 3424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3425,
    "end": 3426
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3439,
    "end": 3444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3444,
    "end": 3445
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3473,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3474,
    "end": 3475
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3502,
    "end": 3506
  },
  {
    "type": "Identifier",
    "value": "EmptyString",
    "start": 3507,
    "end": 3518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3519,
    "end": 3520
  },
  {
    "type": "String",
    "value": "''",
    "start": 3521,
    "end": 3523
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3524,
    "end": 3525
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3526,
    "end": 3530
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3531,
    "end": 3532
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3533,
    "end": 3542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3542,
    "end": 3543
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3545,
    "end": 3553
  },
  {
    "type": "Identifier",
    "value": "isEmpty",
    "start": 3554,
    "end": 3561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3561,
    "end": 3562
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3562,
    "end": 3567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3569,
    "end": 3575
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3576,
    "end": 3577
  },
  {
    "type": "Identifier",
    "value": "EmptyString",
    "start": 3578,
    "end": 3589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3589,
    "end": 3590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3590,
    "end": 3591
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3592,
    "end": 3597
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3598,
    "end": 3600
  },
  {
    "type": "Identifier",
    "value": "EmptyString",
    "start": 3601,
    "end": 3612
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3619,
    "end": 3625
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3626,
    "end": 3631
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3632,
    "end": 3635
  },
  {
    "type": "String",
    "value": "''",
    "start": 3636,
    "end": 3638
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 3639,
    "end": 3641
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3642,
    "end": 3647
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3648,
    "end": 3651
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3652,
    "end": 3656
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 3657,
    "end": 3659
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3660,
    "end": 3665
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3666,
    "end": 3669
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3670,
    "end": 3679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3679,
    "end": 3680
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3681,
    "end": 3682
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3684,
    "end": 3687
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3688,
    "end": 3692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3692,
    "end": 3693
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3694,
    "end": 3700
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3701,
    "end": 3702
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3703,
    "end": 3707
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3708,
    "end": 3709
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3710,
    "end": 3719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3719,
    "end": 3720
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3722,
    "end": 3724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3725,
    "end": 3726
  },
  {
    "type": "Identifier",
    "value": "isEmpty",
    "start": 3726,
    "end": 3733
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3733,
    "end": 3734
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3734,
    "end": 3738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3738,
    "end": 3739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3741,
    "end": 3742
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3747,
    "end": 3751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3751,
    "end": 3752
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3769,
    "end": 3770
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3794,
    "end": 3801
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3802,
    "end": 3810
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 3811,
    "end": 3817
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3817,
    "end": 3818
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3818,
    "end": 3819
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3819,
    "end": 3820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3820,
    "end": 3821
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3821,
    "end": 3826
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3826,
    "end": 3827
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3828,
    "end": 3831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3831,
    "end": 3832
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3832,
    "end": 3833
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 3834,
    "end": 3841
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3842,
    "end": 3847
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3848,
    "end": 3850
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3851,
    "end": 3852
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3854,
    "end": 3862
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 3863,
    "end": 3868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3868,
    "end": 3869
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3869,
    "end": 3872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3872,
    "end": 3873
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3874,
    "end": 3880
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3881,
    "end": 3882
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3883,
    "end": 3889
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3890,
    "end": 3891
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3892,
    "end": 3899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3899,
    "end": 3900
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3901,
    "end": 3902
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 3907,
    "end": 3913
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3913,
    "end": 3914
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3914,
    "end": 3915
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3916,
    "end": 3917
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3918,
    "end": 3924
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3924,
    "end": 3925
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3925,
    "end": 3926
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3926,
    "end": 3929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3929,
    "end": 3930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3930,
    "end": 3931
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3936,
    "end": 3939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3939,
    "end": 3940
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3956,
    "end": 3957
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3981,
    "end": 3989
  },
  {
    "type": "Identifier",
    "value": "check1",
    "start": 3990,
    "end": 3996
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3996,
    "end": 3997
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3997,
    "end": 3998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3998,
    "end": 3999
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4000,
    "end": 4007
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4007,
    "end": 4008
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4008,
    "end": 4009
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4010,
    "end": 4011
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 4012,
    "end": 4014
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4015,
    "end": 4016
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4016,
    "end": 4022
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4023,
    "end": 4024
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4025,
    "end": 4026
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4026,
    "end": 4027
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4028,
    "end": 4029
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4031,
    "end": 4037
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4038,
    "end": 4044
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4045,
    "end": 4046
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4047,
    "end": 4050
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 4051,
    "end": 4059
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 4060,
    "end": 4062
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4063,
    "end": 4064
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4065,
    "end": 4068
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4070,
    "end": 4071
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4072,
    "end": 4073
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4075,
    "end": 4083
  },
  {
    "type": "Identifier",
    "value": "check2",
    "start": 4084,
    "end": 4090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4090,
    "end": 4091
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4091,
    "end": 4092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4092,
    "end": 4093
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4094,
    "end": 4101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4101,
    "end": 4102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4102,
    "end": 4103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4104,
    "end": 4105
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 4106,
    "end": 4108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4109,
    "end": 4110
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4110,
    "end": 4117
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4118,
    "end": 4119
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4120,
    "end": 4121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4121,
    "end": 4122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4123,
    "end": 4124
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4126,
    "end": 4132
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4133,
    "end": 4134
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4135,
    "end": 4138
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4139,
    "end": 4146
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 4147,
    "end": 4149
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4150,
    "end": 4151
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4152,
    "end": 4155
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4156,
    "end": 4157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4157,
    "end": 4158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4159,
    "end": 4160
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4162,
    "end": 4170
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 4171,
    "end": 4176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4176,
    "end": 4177
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4177,
    "end": 4178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4178,
    "end": 4179
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4180,
    "end": 4187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4187,
    "end": 4188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4189,
    "end": 4190
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4192,
    "end": 4194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4195,
    "end": 4196
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4196,
    "end": 4202
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4203,
    "end": 4204
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4205,
    "end": 4208
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 4209,
    "end": 4217
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 4218,
    "end": 4220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4221,
    "end": 4222
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4223,
    "end": 4226
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4227,
    "end": 4228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4228,
    "end": 4229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4230,
    "end": 4231
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4234,
    "end": 4235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4235,
    "end": 4236
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4254,
    "end": 4256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4257,
    "end": 4258
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4258,
    "end": 4259
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4260,
    "end": 4263
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4264,
    "end": 4271
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 4272,
    "end": 4274
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4275,
    "end": 4276
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4277,
    "end": 4280
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4281,
    "end": 4282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4282,
    "end": 4283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4284,
    "end": 4285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4289,
    "end": 4290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4290,
    "end": 4291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4310,
    "end": 4311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4313,
    "end": 4314
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4316,
    "end": 4318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4319,
    "end": 4320
  },
  {
    "type": "Identifier",
    "value": "check1",
    "start": 4320,
    "end": 4326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4326,
    "end": 4327
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4327,
    "end": 4328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4328,
    "end": 4329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4329,
    "end": 4330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4331,
    "end": 4332
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4335,
    "end": 4336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4336,
    "end": 4337
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4355,
    "end": 4357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4358,
    "end": 4359
  },
  {
    "type": "Identifier",
    "value": "check2",
    "start": 4359,
    "end": 4365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4365,
    "end": 4366
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4366,
    "end": 4367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4367,
    "end": 4368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4368,
    "end": 4369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4370,
    "end": 4371
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4375,
    "end": 4376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4376,
    "end": 4377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4396,
    "end": 4397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4399,
    "end": 4400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4401,
    "end": 4402
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4426,
    "end": 4434
  },
  {
    "type": "Identifier",
    "value": "assertRelationIsNullOrStringArray",
    "start": 4435,
    "end": 4468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4468,
    "end": 4469
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4469,
    "end": 4470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4470,
    "end": 4471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4472,
    "end": 4473
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4473,
    "end": 4479
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4480,
    "end": 4481
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4482,
    "end": 4488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4488,
    "end": 4489
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4489,
    "end": 4490
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4490,
    "end": 4491
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4492,
    "end": 4493
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4494,
    "end": 4498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4498,
    "end": 4499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4499,
    "end": 4500
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 4501,
    "end": 4508
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4509,
    "end": 4510
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 4511,
    "end": 4513
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4514,
    "end": 4520
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4520,
    "end": 4521
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4521,
    "end": 4522
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4523,
    "end": 4524
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4525,
    "end": 4529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4530,
    "end": 4531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4531,
    "end": 4532
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4534,
    "end": 4542
  },
  {
    "type": "Identifier",
    "value": "f1x",
    "start": 4543,
    "end": 4546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4546,
    "end": 4547
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4547,
    "end": 4550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4550,
    "end": 4551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4552,
    "end": 4553
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4553,
    "end": 4559
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4560,
    "end": 4561
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4562,
    "end": 4568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4568,
    "end": 4569
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4569,
    "end": 4570
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4570,
    "end": 4571
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4572,
    "end": 4573
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4574,
    "end": 4578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4578,
    "end": 4579
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4580,
    "end": 4581
  },
  {
    "type": "Identifier",
    "value": "assertRelationIsNullOrStringArray",
    "start": 4586,
    "end": 4619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4619,
    "end": 4620
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4620,
    "end": 4623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4623,
    "end": 4624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4624,
    "end": 4625
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4630,
    "end": 4633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4633,
    "end": 4634
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4655,
    "end": 4656
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4680,
    "end": 4684
  },
  {
    "type": "Identifier",
    "value": "MyDiscriminatedUnion",
    "start": 4685,
    "end": 4705
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4706,
    "end": 4707
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4708,
    "end": 4709
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4710,
    "end": 4714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4714,
    "end": 4715
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 4716,
    "end": 4719
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4719,
    "end": 4720
  },
  {
    "type": "Identifier",
    "value": "aProp",
    "start": 4721,
    "end": 4726
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4726,
    "end": 4727
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4728,
    "end": 4734
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4735,
    "end": 4736
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4737,
    "end": 4738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4739,
    "end": 4740
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4741,
    "end": 4745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4745,
    "end": 4746
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 4747,
    "end": 4750
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4750,
    "end": 4751
  },
  {
    "type": "Identifier",
    "value": "bProp",
    "start": 4752,
    "end": 4757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4757,
    "end": 4758
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4759,
    "end": 4765
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4766,
    "end": 4767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4767,
    "end": 4768
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4770,
    "end": 4777
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4778,
    "end": 4786
  },
  {
    "type": "Identifier",
    "value": "isMyDiscriminatedUnion",
    "start": 4787,
    "end": 4809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4809,
    "end": 4810
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 4810,
    "end": 4814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4814,
    "end": 4815
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4816,
    "end": 4823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4823,
    "end": 4824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4824,
    "end": 4825
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 4826,
    "end": 4830
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 4831,
    "end": 4833
  },
  {
    "type": "Identifier",
    "value": "MyDiscriminatedUnion",
    "start": 4834,
    "end": 4854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4854,
    "end": 4855
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4857,
    "end": 4864
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4865,
    "end": 4870
  },
  {
    "type": "Identifier",
    "value": "working",
    "start": 4871,
    "end": 4878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4878,
    "end": 4879
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4880,
    "end": 4887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4887,
    "end": 4888
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4889,
    "end": 4896
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4897,
    "end": 4902
  },
  {
    "type": "Identifier",
    "value": "broken",
    "start": 4903,
    "end": 4909
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4909,
    "end": 4910
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 4911,
    "end": 4917
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4917,
    "end": 4918
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4918,
    "end": 4924
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4924,
    "end": 4925
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4926,
    "end": 4929
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4929,
    "end": 4930
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4931,
    "end": 4932
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4933,
    "end": 4942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4942,
    "end": 4943
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4944,
    "end": 4951
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4952,
    "end": 4957
  },
  {
    "type": "Identifier",
    "value": "workingAgain",
    "start": 4958,
    "end": 4970
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4970,
    "end": 4971
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 4972,
    "end": 4978
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4978,
    "end": 4979
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4979,
    "end": 4985
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4985,
    "end": 4986
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4987,
    "end": 4990
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4990,
    "end": 4991
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4992,
    "end": 4993
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4994,
    "end": 5003
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5004,
    "end": 5005
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5006,
    "end": 5013
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5013,
    "end": 5014
  },
  {
    "type": "Identifier",
    "value": "isMyDiscriminatedUnion",
    "start": 5016,
    "end": 5038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5038,
    "end": 5039
  },
  {
    "type": "Identifier",
    "value": "working",
    "start": 5039,
    "end": 5046
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5046,
    "end": 5047
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5048,
    "end": 5050
  },
  {
    "type": "Identifier",
    "value": "working",
    "start": 5051,
    "end": 5058
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5058,
    "end": 5059
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5059,
    "end": 5063
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5064,
    "end": 5067
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 5068,
    "end": 5071
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5072,
    "end": 5074
  },
  {
    "type": "Identifier",
    "value": "working",
    "start": 5075,
    "end": 5082
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5082,
    "end": 5083
  },
  {
    "type": "Identifier",
    "value": "aProp",
    "start": 5083,
    "end": 5088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5088,
    "end": 5089
  },
  {
    "type": "Identifier",
    "value": "isMyDiscriminatedUnion",
    "start": 5090,
    "end": 5112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5112,
    "end": 5113
  },
  {
    "type": "Identifier",
    "value": "broken",
    "start": 5113,
    "end": 5119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5119,
    "end": 5120
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5121,
    "end": 5123
  },
  {
    "type": "Identifier",
    "value": "broken",
    "start": 5124,
    "end": 5130
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5130,
    "end": 5131
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5131,
    "end": 5135
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5136,
    "end": 5139
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 5140,
    "end": 5143
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5144,
    "end": 5146
  },
  {
    "type": "Identifier",
    "value": "broken",
    "start": 5147,
    "end": 5153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5153,
    "end": 5154
  },
  {
    "type": "Identifier",
    "value": "aProp",
    "start": 5154,
    "end": 5159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5159,
    "end": 5160
  },
  {
    "type": "Identifier",
    "value": "isMyDiscriminatedUnion",
    "start": 5161,
    "end": 5183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5183,
    "end": 5184
  },
  {
    "type": "Identifier",
    "value": "workingAgain",
    "start": 5184,
    "end": 5196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5196,
    "end": 5197
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5198,
    "end": 5200
  },
  {
    "type": "Identifier",
    "value": "workingAgain",
    "start": 5201,
    "end": 5213
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5213,
    "end": 5214
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5214,
    "end": 5218
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5219,
    "end": 5222
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 5223,
    "end": 5226
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5227,
    "end": 5229
  },
  {
    "type": "Identifier",
    "value": "workingAgain",
    "start": 5230,
    "end": 5242
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5242,
    "end": 5243
  },
  {
    "type": "Identifier",
    "value": "aProp",
    "start": 5243,
    "end": 5248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5248,
    "end": 5249
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5273,
    "end": 5277
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 5278,
    "end": 5283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5284,
    "end": 5285
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5290,
    "end": 5291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5292,
    "end": 5293
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5294,
    "end": 5298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5298,
    "end": 5299
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5300,
    "end": 5303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5303,
    "end": 5304
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 5305,
    "end": 5312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5312,
    "end": 5313
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5314,
    "end": 5315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5316,
    "end": 5317
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5322,
    "end": 5323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5324,
    "end": 5325
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5326,
    "end": 5330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5330,
    "end": 5331
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5332,
    "end": 5335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5335,
    "end": 5336
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 5337,
    "end": 5344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5344,
    "end": 5345
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5346,
    "end": 5347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5348,
    "end": 5349
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5354,
    "end": 5355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5356,
    "end": 5357
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5358,
    "end": 5362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5362,
    "end": 5363
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 5364,
    "end": 5367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5368,
    "end": 5369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5369,
    "end": 5370
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5372,
    "end": 5380
  },
  {
    "type": "Identifier",
    "value": "example1",
    "start": 5381,
    "end": 5389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5389,
    "end": 5390
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5390,
    "end": 5395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5395,
    "end": 5396
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 5397,
    "end": 5402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5402,
    "end": 5403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5403,
    "end": 5404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5405,
    "end": 5406
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5407,
    "end": 5411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5411,
    "end": 5412
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5413,
    "end": 5416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5416,
    "end": 5417
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 5418,
    "end": 5425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5425,
    "end": 5426
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5427,
    "end": 5428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5429,
    "end": 5430
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5431,
    "end": 5432
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5433,
    "end": 5437
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5438,
    "end": 5439
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5444,
    "end": 5446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5447,
    "end": 5448
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5448,
    "end": 5453
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5453,
    "end": 5454
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5454,
    "end": 5458
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 5459,
    "end": 5462
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5463,
    "end": 5466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5466,
    "end": 5467
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5468,
    "end": 5469
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5478,
    "end": 5484
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5485,
    "end": 5489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5489,
    "end": 5490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5495,
    "end": 5496
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5501,
    "end": 5503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5504,
    "end": 5505
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5505,
    "end": 5510
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5510,
    "end": 5511
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 5511,
    "end": 5518
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5519,
    "end": 5522
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5523,
    "end": 5524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5524,
    "end": 5525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5526,
    "end": 5527
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5536,
    "end": 5542
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5543,
    "end": 5547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5547,
    "end": 5548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5553,
    "end": 5554
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5559,
    "end": 5565
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5566,
    "end": 5571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5571,
    "end": 5572
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5573,
    "end": 5574
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5576,
    "end": 5584
  },
  {
    "type": "Identifier",
    "value": "example2",
    "start": 5585,
    "end": 5593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5593,
    "end": 5594
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5594,
    "end": 5599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5599,
    "end": 5600
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 5601,
    "end": 5606
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5606,
    "end": 5607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5607,
    "end": 5608
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5609,
    "end": 5610
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5611,
    "end": 5615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5615,
    "end": 5616
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5617,
    "end": 5620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5620,
    "end": 5621
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 5622,
    "end": 5629
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5629,
    "end": 5630
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5631,
    "end": 5632
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5633,
    "end": 5634
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5635,
    "end": 5636
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5637,
    "end": 5641
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5642,
    "end": 5643
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5648,
    "end": 5650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5651,
    "end": 5652
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5652,
    "end": 5657
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5657,
    "end": 5658
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5658,
    "end": 5662
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 5663,
    "end": 5666
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5667,
    "end": 5670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5670,
    "end": 5671
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5672,
    "end": 5673
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5682,
    "end": 5688
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5689,
    "end": 5693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5693,
    "end": 5694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5699,
    "end": 5700
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5705,
    "end": 5707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5708,
    "end": 5709
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5709,
    "end": 5714
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5714,
    "end": 5715
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5715,
    "end": 5719
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5720,
    "end": 5723
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5724,
    "end": 5727
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5728,
    "end": 5730
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5731,
    "end": 5736
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5736,
    "end": 5737
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 5737,
    "end": 5744
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5745,
    "end": 5748
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5749,
    "end": 5750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5750,
    "end": 5751
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5752,
    "end": 5753
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5762,
    "end": 5768
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5769,
    "end": 5773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5773,
    "end": 5774
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5779,
    "end": 5780
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5785,
    "end": 5791
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5792,
    "end": 5797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5797,
    "end": 5798
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5799,
    "end": 5800
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5802,
    "end": 5810
  },
  {
    "type": "Identifier",
    "value": "example3",
    "start": 5811,
    "end": 5819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5819,
    "end": 5820
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5820,
    "end": 5825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5825,
    "end": 5826
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 5827,
    "end": 5832
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5832,
    "end": 5833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5833,
    "end": 5834
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5835,
    "end": 5836
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5837,
    "end": 5841
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5841,
    "end": 5842
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5843,
    "end": 5846
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5846,
    "end": 5847
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 5848,
    "end": 5855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5855,
    "end": 5856
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5857,
    "end": 5858
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5859,
    "end": 5860
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5861,
    "end": 5862
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5863,
    "end": 5867
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5868,
    "end": 5869
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5874,
    "end": 5876
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5877,
    "end": 5878
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5878,
    "end": 5883
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5883,
    "end": 5884
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5884,
    "end": 5888
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 5889,
    "end": 5892
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5893,
    "end": 5896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5896,
    "end": 5897
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5898,
    "end": 5899
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5908,
    "end": 5914
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5915,
    "end": 5919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5919,
    "end": 5920
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5925,
    "end": 5926
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5931,
    "end": 5933
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5934,
    "end": 5935
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5935,
    "end": 5940
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5940,
    "end": 5941
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5941,
    "end": 5945
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5946,
    "end": 5948
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5949,
    "end": 5954
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5954,
    "end": 5955
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 5955,
    "end": 5962
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5963,
    "end": 5966
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5967,
    "end": 5968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5968,
    "end": 5969
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5970,
    "end": 5971
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5980,
    "end": 5986
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5987,
    "end": 5991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5991,
    "end": 5992
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5997,
    "end": 5998
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6003,
    "end": 6009
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 6010,
    "end": 6015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6015,
    "end": 6016
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6017,
    "end": 6018
  }
]
```
