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
        "name": "Square",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 27
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "square",
                  "raw": "\"square\"",
                  "start": 29,
                  "end": 37
                },
                "start": 29,
                "end": 37
              },
              "start": 27,
              "end": 37
            },
            "accessibility": null,
            "static": false,
            "start": 23,
            "end": 38
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 47
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 49,
                "end": 55
              },
              "start": 47,
              "end": 55
            },
            "accessibility": null,
            "static": false,
            "start": 43,
            "end": 56
          }
        ],
        "start": 17,
        "end": 58
      },
      "declare": false,
      "start": 0,
      "end": 58
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rectangle",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 79
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 90
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "rectangle",
                  "raw": "\"rectangle\"",
                  "start": 92,
                  "end": 103
                },
                "start": 92,
                "end": 103
              },
              "start": 90,
              "end": 103
            },
            "accessibility": null,
            "static": false,
            "start": 86,
            "end": 104
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "width",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 114
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 116,
                "end": 122
              },
              "start": 114,
              "end": 122
            },
            "accessibility": null,
            "static": false,
            "start": 109,
            "end": 123
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "height",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 134
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 136,
                "end": 142
              },
              "start": 134,
              "end": 142
            },
            "accessibility": null,
            "static": false,
            "start": 128,
            "end": 143
          }
        ],
        "start": 80,
        "end": 145
      },
      "declare": false,
      "start": 60,
      "end": 145
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Circle",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 163
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 174
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "\"circle\"",
                  "start": 176,
                  "end": 184
                },
                "start": 176,
                "end": 184
              },
              "start": 174,
              "end": 184
            },
            "accessibility": null,
            "static": false,
            "start": 170,
            "end": 185
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "radius",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 196
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 198,
                "end": 204
              },
              "start": 196,
              "end": 204
            },
            "accessibility": null,
            "static": false,
            "start": 190,
            "end": 205
          }
        ],
        "start": 164,
        "end": 207
      },
      "declare": false,
      "start": 147,
      "end": 207
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 219
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Square",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 228
            },
            "typeArguments": null,
            "start": 222,
            "end": 228
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Rectangle",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 240
            },
            "typeArguments": null,
            "start": 231,
            "end": 240
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Circle",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 249
            },
            "typeArguments": null,
            "start": 243,
            "end": 249
          }
        ],
        "start": 222,
        "end": 249
      },
      "declare": false,
      "start": 209,
      "end": 250
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "area1",
        "optional": false,
        "typeAnnotation": null,
        "start": 261,
        "end": 266
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 275
              },
              "typeArguments": null,
              "start": 270,
              "end": 275
            },
            "start": 268,
            "end": 275
          },
          "start": 267,
          "end": 275
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 288
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 289,
                  "end": 293
                },
                "optional": false,
                "computed": false,
                "start": 287,
                "end": 293
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "square",
                "raw": "\"square\"",
                "start": 298,
                "end": 306
              },
              "start": 287,
              "end": 306
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 325,
                        "end": 326
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "size",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 327,
                        "end": 331
                      },
                      "optional": false,
                      "computed": false,
                      "start": 325,
                      "end": 331
                    },
                    "operator": "*",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 334,
                        "end": 335
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "size",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 336,
                        "end": 340
                      },
                      "optional": false,
                      "computed": false,
                      "start": 334,
                      "end": 340
                    },
                    "start": 325,
                    "end": 340
                  },
                  "start": 318,
                  "end": 341
                }
              ],
              "start": 308,
              "end": 347
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 361,
                    "end": 362
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 363,
                    "end": 367
                  },
                  "optional": false,
                  "computed": false,
                  "start": 361,
                  "end": 367
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "\"circle\"",
                  "start": 372,
                  "end": 380
                },
                "start": 361,
                "end": 380
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 399,
                            "end": 403
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PI",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 404,
                            "end": 406
                          },
                          "optional": false,
                          "computed": false,
                          "start": 399,
                          "end": 406
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 409,
                            "end": 410
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "radius",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 411,
                            "end": 417
                          },
                          "optional": false,
                          "computed": false,
                          "start": 409,
                          "end": 417
                        },
                        "start": 399,
                        "end": 417
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 420,
                          "end": 421
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "radius",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 422,
                          "end": 428
                        },
                        "optional": false,
                        "computed": false,
                        "start": 420,
                        "end": 428
                      },
                      "start": 399,
                      "end": 428
                    },
                    "start": 392,
                    "end": 429
                  }
                ],
                "start": 382,
                "end": 435
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 449,
                      "end": 450
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 451,
                      "end": 455
                    },
                    "optional": false,
                    "computed": false,
                    "start": 449,
                    "end": 455
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "rectangle",
                    "raw": "\"rectangle\"",
                    "start": 460,
                    "end": 471
                  },
                  "start": 449,
                  "end": 471
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 490,
                            "end": 491
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "width",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 492,
                            "end": 497
                          },
                          "optional": false,
                          "computed": false,
                          "start": 490,
                          "end": 497
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 500,
                            "end": 501
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "height",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 502,
                            "end": 508
                          },
                          "optional": false,
                          "computed": false,
                          "start": 500,
                          "end": 508
                        },
                        "start": 490,
                        "end": 508
                      },
                      "start": 483,
                      "end": 509
                    }
                  ],
                  "start": 473,
                  "end": 515
                },
                "alternate": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 542,
                        "end": 543
                      },
                      "start": 535,
                      "end": 544
                    }
                  ],
                  "start": 525,
                  "end": 550
                },
                "start": 445,
                "end": 550
              },
              "start": 357,
              "end": 550
            },
            "start": 283,
            "end": 550
          }
        ],
        "start": 277,
        "end": 552
      },
      "expression": false,
      "start": 252,
      "end": 552
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "area2",
        "optional": false,
        "typeAnnotation": null,
        "start": 563,
        "end": 568
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 577
              },
              "typeArguments": null,
              "start": 572,
              "end": 577
            },
            "start": 570,
            "end": 577
          },
          "start": 569,
          "end": 577
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 593,
                "end": 594
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 595,
                "end": 599
              },
              "optional": false,
              "computed": false,
              "start": 593,
              "end": 599
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "square",
                  "raw": "\"square\"",
                  "start": 616,
                  "end": 624
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 633,
                          "end": 634
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 635,
                          "end": 639
                        },
                        "optional": false,
                        "computed": false,
                        "start": 633,
                        "end": 639
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 642,
                          "end": 643
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 644,
                          "end": 648
                        },
                        "optional": false,
                        "computed": false,
                        "start": 642,
                        "end": 648
                      },
                      "start": 633,
                      "end": 648
                    },
                    "start": 626,
                    "end": 649
                  }
                ],
                "start": 611,
                "end": 649
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "rectangle",
                  "raw": "\"rectangle\"",
                  "start": 663,
                  "end": 674
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 683,
                          "end": 684
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "width",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 685,
                          "end": 690
                        },
                        "optional": false,
                        "computed": false,
                        "start": 683,
                        "end": 690
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 693,
                          "end": 694
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "height",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 695,
                          "end": 701
                        },
                        "optional": false,
                        "computed": false,
                        "start": 693,
                        "end": 701
                      },
                      "start": 683,
                      "end": 701
                    },
                    "start": 676,
                    "end": 702
                  }
                ],
                "start": 658,
                "end": 702
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "\"circle\"",
                  "start": 716,
                  "end": 724
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 733,
                            "end": 737
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PI",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 738,
                            "end": 740
                          },
                          "optional": false,
                          "computed": false,
                          "start": 733,
                          "end": 740
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 743,
                            "end": 744
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "radius",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 745,
                            "end": 751
                          },
                          "optional": false,
                          "computed": false,
                          "start": 743,
                          "end": 751
                        },
                        "start": 733,
                        "end": 751
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 754,
                          "end": 755
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "radius",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 756,
                          "end": 762
                        },
                        "optional": false,
                        "computed": false,
                        "start": 754,
                        "end": 762
                      },
                      "start": 733,
                      "end": 762
                    },
                    "start": 726,
                    "end": 763
                  }
                ],
                "start": 711,
                "end": 763
              }
            ],
            "start": 585,
            "end": 769
          }
        ],
        "start": 579,
        "end": 771
      },
      "expression": false,
      "start": 554,
      "end": 771
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertNever",
        "optional": false,
        "typeAnnotation": null,
        "start": 782,
        "end": 793
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
              "type": "TSNeverKeyword",
              "start": 797,
              "end": 802
            },
            "start": 795,
            "end": 802
          },
          "start": 794,
          "end": 802
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 805,
          "end": 810
        },
        "start": 803,
        "end": 810
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 827,
                "end": 832
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "Unexpected object: ",
                    "raw": "\"Unexpected object: \"",
                    "start": 833,
                    "end": 854
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 857,
                    "end": 858
                  },
                  "start": 833,
                  "end": 858
                }
              ],
              "start": 823,
              "end": 859
            },
            "start": 817,
            "end": 860
          }
        ],
        "start": 811,
        "end": 862
      },
      "expression": false,
      "start": 773,
      "end": 862
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "area3",
        "optional": false,
        "typeAnnotation": null,
        "start": 873,
        "end": 878
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 882,
                "end": 887
              },
              "typeArguments": null,
              "start": 882,
              "end": 887
            },
            "start": 880,
            "end": 887
          },
          "start": 879,
          "end": 887
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 903,
                "end": 904
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 905,
                "end": 909
              },
              "optional": false,
              "computed": false,
              "start": 903,
              "end": 909
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "square",
                  "raw": "\"square\"",
                  "start": 926,
                  "end": 934
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 943,
                          "end": 944
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 945,
                          "end": 949
                        },
                        "optional": false,
                        "computed": false,
                        "start": 943,
                        "end": 949
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 952,
                          "end": 953
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 954,
                          "end": 958
                        },
                        "optional": false,
                        "computed": false,
                        "start": 952,
                        "end": 958
                      },
                      "start": 943,
                      "end": 958
                    },
                    "start": 936,
                    "end": 959
                  }
                ],
                "start": 921,
                "end": 959
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "rectangle",
                  "raw": "\"rectangle\"",
                  "start": 973,
                  "end": 984
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 993,
                          "end": 994
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "width",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 995,
                          "end": 1000
                        },
                        "optional": false,
                        "computed": false,
                        "start": 993,
                        "end": 1000
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1003,
                          "end": 1004
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "height",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1005,
                          "end": 1011
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1003,
                        "end": 1011
                      },
                      "start": 993,
                      "end": 1011
                    },
                    "start": 986,
                    "end": 1012
                  }
                ],
                "start": 968,
                "end": 1012
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "\"circle\"",
                  "start": 1026,
                  "end": 1034
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1043,
                            "end": 1047
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PI",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1048,
                            "end": 1050
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1043,
                          "end": 1050
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1053,
                            "end": 1054
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "radius",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1055,
                            "end": 1061
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1053,
                          "end": 1061
                        },
                        "start": 1043,
                        "end": 1061
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1064,
                          "end": 1065
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "radius",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1066,
                          "end": 1072
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1064,
                        "end": 1072
                      },
                      "start": 1043,
                      "end": 1072
                    },
                    "start": 1036,
                    "end": 1073
                  }
                ],
                "start": 1021,
                "end": 1073
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1098,
                        "end": 1109
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1110,
                          "end": 1111
                        }
                      ],
                      "optional": false,
                      "start": 1098,
                      "end": 1112
                    },
                    "start": 1091,
                    "end": 1113
                  }
                ],
                "start": 1082,
                "end": 1113
              }
            ],
            "start": 895,
            "end": 1119
          }
        ],
        "start": 889,
        "end": 1121
      },
      "expression": false,
      "start": 864,
      "end": 1121
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "area4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1132,
        "end": 1137
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 1141,
                "end": 1146
              },
              "typeArguments": null,
              "start": 1141,
              "end": 1146
            },
            "start": 1139,
            "end": 1146
          },
          "start": 1138,
          "end": 1146
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1162,
                "end": 1163
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1164,
                "end": 1168
              },
              "optional": false,
              "computed": false,
              "start": 1162,
              "end": 1168
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "square",
                  "raw": "\"square\"",
                  "start": 1185,
                  "end": 1193
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1202,
                          "end": 1203
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1204,
                          "end": 1208
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1202,
                        "end": 1208
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1211,
                          "end": 1212
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1213,
                          "end": 1217
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1211,
                        "end": 1217
                      },
                      "start": 1202,
                      "end": 1217
                    },
                    "start": 1195,
                    "end": 1218
                  }
                ],
                "start": 1180,
                "end": 1218
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "rectangle",
                  "raw": "\"rectangle\"",
                  "start": 1232,
                  "end": 1243
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1252,
                          "end": 1253
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "width",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1254,
                          "end": 1259
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1252,
                        "end": 1259
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1262,
                          "end": 1263
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "height",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1264,
                          "end": 1270
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1262,
                        "end": 1270
                      },
                      "start": 1252,
                      "end": 1270
                    },
                    "start": 1245,
                    "end": 1271
                  }
                ],
                "start": 1227,
                "end": 1271
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "\"circle\"",
                  "start": 1285,
                  "end": 1293
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1302,
                            "end": 1306
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PI",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1307,
                            "end": 1309
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1302,
                          "end": 1309
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1312,
                            "end": 1313
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "radius",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1314,
                            "end": 1320
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1312,
                          "end": 1320
                        },
                        "start": 1302,
                        "end": 1320
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1323,
                          "end": 1324
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "radius",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1325,
                          "end": 1331
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1323,
                        "end": 1331
                      },
                      "start": 1302,
                      "end": 1331
                    },
                    "start": 1295,
                    "end": 1332
                  }
                ],
                "start": 1280,
                "end": 1332
              }
            ],
            "start": 1154,
            "end": 1338
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null,
                "start": 1350,
                "end": 1361
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1362,
                  "end": 1363
                }
              ],
              "optional": false,
              "start": 1350,
              "end": 1364
            },
            "start": 1343,
            "end": 1365
          }
        ],
        "start": 1148,
        "end": 1367
      },
      "expression": false,
      "start": 1123,
      "end": 1367
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Message",
        "optional": false,
        "typeAnnotation": null,
        "start": 1374,
        "end": 1381
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1390,
                  "end": 1394
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 1396,
                      "end": 1399
                    },
                    "start": 1396,
                    "end": 1399
                  },
                  "start": 1394,
                  "end": 1399
                },
                "accessibility": null,
                "static": false,
                "start": 1390,
                "end": 1400
              },
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
                  "start": 1401,
                  "end": 1402
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1404,
                    "end": 1410
                  },
                  "start": 1402,
                  "end": 1410
                },
                "accessibility": null,
                "static": false,
                "start": 1401,
                "end": 1410
              }
            ],
            "start": 1388,
            "end": 1412
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1421,
                  "end": 1425
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "B",
                          "raw": "\"B\"",
                          "start": 1427,
                          "end": 1430
                        },
                        "start": 1427,
                        "end": 1430
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "C",
                          "raw": "\"C\"",
                          "start": 1433,
                          "end": 1436
                        },
                        "start": 1433,
                        "end": 1436
                      }
                    ],
                    "start": 1427,
                    "end": 1436
                  },
                  "start": 1425,
                  "end": 1436
                },
                "accessibility": null,
                "static": false,
                "start": 1421,
                "end": 1437
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1438,
                  "end": 1439
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1441,
                    "end": 1447
                  },
                  "start": 1439,
                  "end": 1447
                },
                "accessibility": null,
                "static": false,
                "start": 1438,
                "end": 1447
              }
            ],
            "start": 1419,
            "end": 1449
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1458,
                  "end": 1462
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "D",
                      "raw": "\"D\"",
                      "start": 1464,
                      "end": 1467
                    },
                    "start": 1464,
                    "end": 1467
                  },
                  "start": 1462,
                  "end": 1467
                },
                "accessibility": null,
                "static": false,
                "start": 1458,
                "end": 1467
              }
            ],
            "start": 1456,
            "end": 1469
          }
        ],
        "start": 1388,
        "end": 1469
      },
      "declare": false,
      "start": 1369,
      "end": 1470
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1481,
        "end": 1483
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 1487,
                "end": 1494
              },
              "typeArguments": null,
              "start": 1487,
              "end": 1494
            },
            "start": 1485,
            "end": 1494
          },
          "start": 1484,
          "end": 1494
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1506,
                  "end": 1507
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1508,
                  "end": 1512
                },
                "optional": false,
                "computed": false,
                "start": 1506,
                "end": 1512
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 1517,
                "end": 1520
              },
              "start": 1506,
              "end": 1520
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1532,
                    "end": 1533
                  },
                  "directive": null,
                  "start": 1532,
                  "end": 1534
                }
              ],
              "start": 1522,
              "end": 1569
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1583,
                    "end": 1584
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1585,
                    "end": 1589
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1583,
                  "end": 1589
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "D",
                  "raw": "\"D\"",
                  "start": 1594,
                  "end": 1597
                },
                "start": 1583,
                "end": 1597
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1609,
                      "end": 1610
                    },
                    "directive": null,
                    "start": 1609,
                    "end": 1611
                  }
                ],
                "start": 1599,
                "end": 1635
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1655,
                      "end": 1656
                    },
                    "directive": null,
                    "start": 1655,
                    "end": 1657
                  }
                ],
                "start": 1645,
                "end": 1698
              },
              "start": 1579,
              "end": 1698
            },
            "start": 1502,
            "end": 1698
          }
        ],
        "start": 1496,
        "end": 1700
      },
      "expression": false,
      "start": 1472,
      "end": 1700
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1711,
        "end": 1713
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 1717,
                "end": 1724
              },
              "typeArguments": null,
              "start": 1717,
              "end": 1724
            },
            "start": 1715,
            "end": 1724
          },
          "start": 1714,
          "end": 1724
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1736,
                  "end": 1737
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1738,
                  "end": 1742
                },
                "optional": false,
                "computed": false,
                "start": 1736,
                "end": 1742
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 1747,
                "end": 1750
              },
              "start": 1736,
              "end": 1750
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 1762,
                  "end": 1769
                }
              ],
              "start": 1752,
              "end": 1775
            },
            "alternate": null,
            "start": 1732,
            "end": 1775
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 1780,
              "end": 1781
            },
            "directive": null,
            "start": 1780,
            "end": 1782
          }
        ],
        "start": 1726,
        "end": 1835
      },
      "expression": false,
      "start": 1702,
      "end": 1835
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1846,
        "end": 1848
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 1852,
                "end": 1859
              },
              "typeArguments": null,
              "start": 1852,
              "end": 1859
            },
            "start": 1850,
            "end": 1859
          },
          "start": 1849,
          "end": 1859
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1871,
                  "end": 1872
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1873,
                  "end": 1877
                },
                "optional": false,
                "computed": false,
                "start": 1871,
                "end": 1877
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "X",
                "raw": "\"X\"",
                "start": 1882,
                "end": 1885
              },
              "start": 1871,
              "end": 1885
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1897,
                    "end": 1898
                  },
                  "directive": null,
                  "start": 1897,
                  "end": 1899
                }
              ],
              "start": 1887,
              "end": 1915
            },
            "alternate": null,
            "start": 1867,
            "end": 1915
          }
        ],
        "start": 1861,
        "end": 1917
      },
      "expression": false,
      "start": 1837,
      "end": 1917
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1928,
        "end": 1930
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 1934,
                "end": 1941
              },
              "typeArguments": null,
              "start": 1934,
              "end": 1941
            },
            "start": 1932,
            "end": 1941
          },
          "start": 1931,
          "end": 1941
        },
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
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "A",
                    "raw": "\"A\"",
                    "start": 1946,
                    "end": 1949
                  },
                  "start": 1946,
                  "end": 1949
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "D",
                    "raw": "\"D\"",
                    "start": 1952,
                    "end": 1955
                  },
                  "start": 1952,
                  "end": 1955
                }
              ],
              "start": 1946,
              "end": 1955
            },
            "start": 1944,
            "end": 1955
          },
          "start": 1943,
          "end": 1955
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1967,
                  "end": 1968
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1969,
                  "end": 1973
                },
                "optional": false,
                "computed": false,
                "start": 1967,
                "end": 1973
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1977,
                "end": 1978
              },
              "start": 1967,
              "end": 1978
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1990,
                    "end": 1991
                  },
                  "directive": null,
                  "start": 1990,
                  "end": 1992
                }
              ],
              "start": 1980,
              "end": 2043
            },
            "alternate": null,
            "start": 1963,
            "end": 2043
          }
        ],
        "start": 1957,
        "end": 2045
      },
      "expression": false,
      "start": 1919,
      "end": 2045
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2056,
        "end": 2058
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 2062,
                "end": 2069
              },
              "typeArguments": null,
              "start": 2062,
              "end": 2069
            },
            "start": 2060,
            "end": 2069
          },
          "start": 2059,
          "end": 2069
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 2085,
                "end": 2086
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2087,
                "end": 2091
              },
              "optional": false,
              "computed": false,
              "start": 2085,
              "end": 2091
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 2108,
                  "end": 2111
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2125,
                      "end": 2126
                    },
                    "directive": null,
                    "start": 2125,
                    "end": 2127
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2169,
                    "end": 2175
                  }
                ],
                "start": 2103,
                "end": 2175
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "D",
                  "raw": "\"D\"",
                  "start": 2189,
                  "end": 2192
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2206,
                      "end": 2207
                    },
                    "directive": null,
                    "start": 2206,
                    "end": 2208
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2239,
                    "end": 2245
                  }
                ],
                "start": 2184,
                "end": 2245
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2275,
                      "end": 2276
                    },
                    "directive": null,
                    "start": 2275,
                    "end": 2277
                  }
                ],
                "start": 2254,
                "end": 2277
              }
            ],
            "start": 2077,
            "end": 2318
          }
        ],
        "start": 2071,
        "end": 2320
      },
      "expression": false,
      "start": 2047,
      "end": 2320
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2331,
        "end": 2333
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 2337,
                "end": 2344
              },
              "typeArguments": null,
              "start": 2337,
              "end": 2344
            },
            "start": 2335,
            "end": 2344
          },
          "start": 2334,
          "end": 2344
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 2360,
                "end": 2361
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2362,
                "end": 2366
              },
              "optional": false,
              "computed": false,
              "start": 2360,
              "end": 2366
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 2383,
                  "end": 2386
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2400,
                      "end": 2401
                    },
                    "directive": null,
                    "start": 2400,
                    "end": 2402
                  }
                ],
                "start": 2378,
                "end": 2402
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "D",
                  "raw": "\"D\"",
                  "start": 2445,
                  "end": 2448
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2462,
                      "end": 2463
                    },
                    "directive": null,
                    "start": 2462,
                    "end": 2464
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2522,
                    "end": 2528
                  }
                ],
                "start": 2440,
                "end": 2528
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2558,
                      "end": 2559
                    },
                    "directive": null,
                    "start": 2558,
                    "end": 2560
                  }
                ],
                "start": 2537,
                "end": 2560
              }
            ],
            "start": 2352,
            "end": 2601
          }
        ],
        "start": 2346,
        "end": 2603
      },
      "expression": false,
      "start": 2322,
      "end": 2603
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2614,
        "end": 2616
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 2620,
                "end": 2627
              },
              "typeArguments": null,
              "start": 2620,
              "end": 2627
            },
            "start": 2618,
            "end": 2627
          },
          "start": 2617,
          "end": 2627
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 2643,
                "end": 2644
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2645,
                "end": 2649
              },
              "optional": false,
              "computed": false,
              "start": 2643,
              "end": 2649
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 2666,
                  "end": 2669
                },
                "consequent": [],
                "start": 2661,
                "end": 2670
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 2684,
                  "end": 2687
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2701,
                    "end": 2708
                  }
                ],
                "start": 2679,
                "end": 2708
              }
            ],
            "start": 2635,
            "end": 2714
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 2719,
              "end": 2720
            },
            "directive": null,
            "start": 2719,
            "end": 2721
          }
        ],
        "start": 2629,
        "end": 2774
      },
      "expression": false,
      "start": 2605,
      "end": 2774
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2785,
        "end": 2787
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 2791,
                "end": 2798
              },
              "typeArguments": null,
              "start": 2791,
              "end": 2798
            },
            "start": 2789,
            "end": 2798
          },
          "start": 2788,
          "end": 2798
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 2814,
                "end": 2815
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2816,
                "end": 2820
              },
              "optional": false,
              "computed": false,
              "start": 2814,
              "end": 2820
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 2837,
                  "end": 2840
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2854,
                    "end": 2861
                  }
                ],
                "start": 2832,
                "end": 2861
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "D",
                  "raw": "\"D\"",
                  "start": 2875,
                  "end": 2878
                },
                "consequent": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2902,
                        "end": 2907
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2898,
                      "end": 2909
                    },
                    "start": 2892,
                    "end": 2910
                  }
                ],
                "start": 2870,
                "end": 2910
              }
            ],
            "start": 2806,
            "end": 2916
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 2921,
              "end": 2922
            },
            "directive": null,
            "start": 2921,
            "end": 2923
          }
        ],
        "start": 2800,
        "end": 2960
      },
      "expression": false,
      "start": 2776,
      "end": 2960
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2960
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Square",
    "start": 10,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 23,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "String",
    "value": "\"square\"",
    "start": 29,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 43,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 60,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "Rectangle",
    "start": 70,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "String",
    "value": "\"rectangle\"",
    "start": 92,
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
    "value": "width",
    "start": 109,
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
    "value": "number",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "height",
    "start": 128,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 136,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 147,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "Circle",
    "start": 157,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 170,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 176,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 190,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 198,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 209,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 214,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "Square",
    "start": 222,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "Rectangle",
    "start": 231,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "Circle",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 252,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "area1",
    "start": 261,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 270,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 283,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 289,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 294,
    "end": 297
  },
  {
    "type": "String",
    "value": "\"square\"",
    "start": 298,
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
    "value": "{",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 318,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 327,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 336,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 352,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 357,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 363,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 368,
    "end": 371
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 372,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 392,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 399,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "PI",
    "start": 404,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 411,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 422,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 440,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 445,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 451,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 456,
    "end": 459
  },
  {
    "type": "String",
    "value": "\"rectangle\"",
    "start": 460,
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
    "value": "{",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 483,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 492,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "height",
    "start": 502,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 520,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 535,
    "end": 541
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 554,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "area2",
    "start": 563,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 572,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 585,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 595,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 611,
    "end": 615
  },
  {
    "type": "String",
    "value": "\"square\"",
    "start": 616,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 626,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 635,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 644,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 658,
    "end": 662
  },
  {
    "type": "String",
    "value": "\"rectangle\"",
    "start": 663,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 676,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 685,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "height",
    "start": 695,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 701,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 711,
    "end": 715
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 716,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 724,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 726,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 733,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "PI",
    "start": 738,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 745,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 756,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 773,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 782,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 797,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 805,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 811,
    "end": 812
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 817,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 823,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 827,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 832,
    "end": 833
  },
  {
    "type": "String",
    "value": "\"Unexpected object: \"",
    "start": 833,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 861,
    "end": 862
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 864,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "area3",
    "start": 873,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 882,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 889,
    "end": 890
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 895,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 905,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 911,
    "end": 912
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 921,
    "end": 925
  },
  {
    "type": "String",
    "value": "\"square\"",
    "start": 926,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 934,
    "end": 935
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 936,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 945,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 954,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 958,
    "end": 959
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 968,
    "end": 972
  },
  {
    "type": "String",
    "value": "\"rectangle\"",
    "start": 973,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 984,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 986,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 995,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "height",
    "start": 1005,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1021,
    "end": 1025
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 1026,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1036,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1043,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "PI",
    "start": 1048,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 1055,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 1066,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 1082,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1091,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 1098,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1123,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "area4",
    "start": 1132,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 1141,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1154,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1164,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1180,
    "end": 1184
  },
  {
    "type": "String",
    "value": "\"square\"",
    "start": 1185,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1195,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 1204,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 1213,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1227,
    "end": 1231
  },
  {
    "type": "String",
    "value": "\"rectangle\"",
    "start": 1232,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1245,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 1254,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "height",
    "start": 1264,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1280,
    "end": 1284
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 1285,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1295,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1302,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "PI",
    "start": 1307,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 1314,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 1325,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1343,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 1350,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1369,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 1374,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1390,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 1396,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1404,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1421,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 1427,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "String",
    "value": "\"C\"",
    "start": 1433,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1441,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1458,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "String",
    "value": "\"D\"",
    "start": 1464,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1472,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1481,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 1487,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1502,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1508,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1513,
    "end": 1516
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 1517,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1574,
    "end": 1578
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1579,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1585,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1590,
    "end": 1593
  },
  {
    "type": "String",
    "value": "\"D\"",
    "start": 1594,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1640,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1702,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1711,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 1717,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1732,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1738,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1743,
    "end": 1746
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 1747,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1762,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1837,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1846,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 1852,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1867,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1873,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1878,
    "end": 1881
  },
  {
    "type": "String",
    "value": "\"X\"",
    "start": 1882,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1919,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1928,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 1934,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 1946,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "String",
    "value": "\"D\"",
    "start": 1952,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1963,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1969,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1974,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2047,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 2056,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 2062,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2077,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2087,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2103,
    "end": 2107
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 2108,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2169,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2184,
    "end": 2188
  },
  {
    "type": "String",
    "value": "\"D\"",
    "start": 2189,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2239,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 2254,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2322,
    "end": 2330
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 2331,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 2337,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2352,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2362,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2378,
    "end": 2382
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 2383,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2440,
    "end": 2444
  },
  {
    "type": "String",
    "value": "\"D\"",
    "start": 2445,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2522,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 2537,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2605,
    "end": 2613
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 2614,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 2620,
    "end": 2627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2629,
    "end": 2630
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2635,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2645,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2661,
    "end": 2665
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 2666,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2669,
    "end": 2670
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2679,
    "end": 2683
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 2684,
    "end": 2687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2701,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2776,
    "end": 2784
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 2785,
    "end": 2787
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2787,
    "end": 2788
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 2791,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2806,
    "end": 2812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2813,
    "end": 2814
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2816,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2832,
    "end": 2836
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 2837,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2854,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2870,
    "end": 2874
  },
  {
    "type": "String",
    "value": "\"D\"",
    "start": 2875,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 2892,
    "end": 2897
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2898,
    "end": 2901
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 2902,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2908,
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
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2959,
    "end": 2960
  }
]
```
