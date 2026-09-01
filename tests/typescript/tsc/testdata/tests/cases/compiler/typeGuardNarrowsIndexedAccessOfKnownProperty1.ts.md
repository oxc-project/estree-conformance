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
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "dash-ok",
              "raw": "\"dash-ok\"",
              "start": 24,
              "end": 33
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "square",
                  "raw": "\"square\"",
                  "start": 36,
                  "end": 44
                },
                "start": 36,
                "end": 44
              },
              "start": 34,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 23,
            "end": 45
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "square-size",
              "raw": "\"square-size\"",
              "start": 51,
              "end": 64
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 67,
                "end": 73
              },
              "start": 65,
              "end": 73
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 74
          }
        ],
        "start": 17,
        "end": 76
      },
      "declare": false,
      "start": 0,
      "end": 76
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rectangle",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 97
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "dash-ok",
              "raw": "\"dash-ok\"",
              "start": 105,
              "end": 114
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "rectangle",
                  "raw": "\"rectangle\"",
                  "start": 117,
                  "end": 128
                },
                "start": 117,
                "end": 128
              },
              "start": 115,
              "end": 128
            },
            "accessibility": null,
            "static": false,
            "start": 104,
            "end": 129
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
              "start": 134,
              "end": 139
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 141,
                "end": 147
              },
              "start": 139,
              "end": 147
            },
            "accessibility": null,
            "static": false,
            "start": 134,
            "end": 148
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
              "start": 153,
              "end": 159
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 161,
                "end": 167
              },
              "start": 159,
              "end": 167
            },
            "accessibility": null,
            "static": false,
            "start": 153,
            "end": 168
          }
        ],
        "start": 98,
        "end": 170
      },
      "declare": false,
      "start": 78,
      "end": 170
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Circle",
        "optional": false,
        "typeAnnotation": null,
        "start": 182,
        "end": 188
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "dash-ok",
              "raw": "\"dash-ok\"",
              "start": 196,
              "end": 205
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "\"circle\"",
                  "start": 208,
                  "end": 216
                },
                "start": 208,
                "end": 216
              },
              "start": 206,
              "end": 216
            },
            "accessibility": null,
            "static": false,
            "start": 195,
            "end": 217
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
              "start": 222,
              "end": 228
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 230,
                "end": 236
              },
              "start": 228,
              "end": 236
            },
            "accessibility": null,
            "static": false,
            "start": 222,
            "end": 237
          }
        ],
        "start": 189,
        "end": 239
      },
      "declare": false,
      "start": 172,
      "end": 239
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 246,
        "end": 251
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
              "start": 254,
              "end": 260
            },
            "typeArguments": null,
            "start": 254,
            "end": 260
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Rectangle",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 272
            },
            "typeArguments": null,
            "start": 263,
            "end": 272
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Circle",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 281
            },
            "typeArguments": null,
            "start": 275,
            "end": 281
          }
        ],
        "start": 254,
        "end": 281
      },
      "declare": false,
      "start": 241,
      "end": 282
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Subshape",
        "optional": false,
        "typeAnnotation": null,
        "start": 293,
        "end": 301
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
              "value": "0",
              "raw": "\"0\"",
              "start": 308,
              "end": 311
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
                      "name": "sub",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 323,
                      "end": 326
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
                              "name": "under",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 342,
                              "end": 347
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
                                      "name": "shape",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 367,
                                      "end": 372
                                    },
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
                                          "start": 374,
                                          "end": 379
                                        },
                                        "typeArguments": null,
                                        "start": 374,
                                        "end": 379
                                      },
                                      "start": 372,
                                      "end": 379
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 367,
                                    "end": 380
                                  }
                                ],
                                "start": 349,
                                "end": 394
                              },
                              "start": 347,
                              "end": 394
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 342,
                            "end": 394
                          }
                        ],
                        "start": 328,
                        "end": 404
                      },
                      "start": 326,
                      "end": 404
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 323,
                    "end": 404
                  }
                ],
                "start": 313,
                "end": 410
              },
              "start": 311,
              "end": 410
            },
            "accessibility": null,
            "static": false,
            "start": 308,
            "end": 410
          }
        ],
        "start": 302,
        "end": 412
      },
      "declare": false,
      "start": 283,
      "end": 412
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "area",
        "optional": false,
        "typeAnnotation": null,
        "start": 422,
        "end": 426
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
                "start": 430,
                "end": 435
              },
              "typeArguments": null,
              "start": 430,
              "end": 435
            },
            "start": 428,
            "end": 435
          },
          "start": 427,
          "end": 435
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 438,
          "end": 444
        },
        "start": 436,
        "end": 444
      },
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
                "start": 458,
                "end": 459
              },
              "property": {
                "type": "Literal",
                "value": "dash-ok",
                "raw": "'dash-ok'",
                "start": 460,
                "end": 469
              },
              "optional": false,
              "computed": true,
              "start": 458,
              "end": 470
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "square",
                  "raw": "\"square\"",
                  "start": 487,
                  "end": 495
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
                          "start": 504,
                          "end": 505
                        },
                        "property": {
                          "type": "Literal",
                          "value": "square-size",
                          "raw": "'square-size'",
                          "start": 506,
                          "end": 519
                        },
                        "optional": false,
                        "computed": true,
                        "start": 504,
                        "end": 520
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
                          "start": 523,
                          "end": 524
                        },
                        "property": {
                          "type": "Literal",
                          "value": "square-size",
                          "raw": "'square-size'",
                          "start": 525,
                          "end": 538
                        },
                        "optional": false,
                        "computed": true,
                        "start": 523,
                        "end": 539
                      },
                      "start": 504,
                      "end": 539
                    },
                    "start": 497,
                    "end": 540
                  }
                ],
                "start": 482,
                "end": 540
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "rectangle",
                  "raw": "\"rectangle\"",
                  "start": 554,
                  "end": 565
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
                          "start": 574,
                          "end": 575
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "width",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 576,
                          "end": 581
                        },
                        "optional": false,
                        "computed": false,
                        "start": 574,
                        "end": 581
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
                          "start": 584,
                          "end": 585
                        },
                        "property": {
                          "type": "Literal",
                          "value": "height",
                          "raw": "'height'",
                          "start": 586,
                          "end": 594
                        },
                        "optional": false,
                        "computed": true,
                        "start": 584,
                        "end": 595
                      },
                      "start": 574,
                      "end": 595
                    },
                    "start": 567,
                    "end": 596
                  }
                ],
                "start": 549,
                "end": 596
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "\"circle\"",
                  "start": 610,
                  "end": 618
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
                            "start": 627,
                            "end": 631
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PI",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 632,
                            "end": 634
                          },
                          "optional": false,
                          "computed": false,
                          "start": 627,
                          "end": 634
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
                            "start": 637,
                            "end": 638
                          },
                          "property": {
                            "type": "Literal",
                            "value": "radius",
                            "raw": "'radius'",
                            "start": 639,
                            "end": 647
                          },
                          "optional": false,
                          "computed": true,
                          "start": 637,
                          "end": 648
                        },
                        "start": 627,
                        "end": 648
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
                          "start": 651,
                          "end": 652
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "radius",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 653,
                          "end": 659
                        },
                        "optional": false,
                        "computed": false,
                        "start": 651,
                        "end": 659
                      },
                      "start": 627,
                      "end": 659
                    },
                    "start": 620,
                    "end": 660
                  }
                ],
                "start": 605,
                "end": 660
              }
            ],
            "start": 451,
            "end": 666
          }
        ],
        "start": 445,
        "end": 668
      },
      "expression": false,
      "start": 413,
      "end": 668
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "subarea",
        "optional": false,
        "typeAnnotation": null,
        "start": 678,
        "end": 685
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
                "name": "Subshape",
                "optional": false,
                "typeAnnotation": null,
                "start": 689,
                "end": 697
              },
              "typeArguments": null,
              "start": 689,
              "end": 697
            },
            "start": 687,
            "end": 697
          },
          "start": 686,
          "end": 697
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 700,
          "end": 706
        },
        "start": 698,
        "end": 706
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 720,
                        "end": 721
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 722,
                        "end": 723
                      },
                      "optional": false,
                      "computed": true,
                      "start": 720,
                      "end": 724
                    },
                    "property": {
                      "type": "Literal",
                      "value": "sub",
                      "raw": "\"sub\"",
                      "start": 725,
                      "end": 730
                    },
                    "optional": false,
                    "computed": true,
                    "start": 720,
                    "end": 731
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "under",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 732,
                    "end": 737
                  },
                  "optional": false,
                  "computed": false,
                  "start": 720,
                  "end": 737
                },
                "property": {
                  "type": "Literal",
                  "value": "shape",
                  "raw": "\"shape\"",
                  "start": 738,
                  "end": 745
                },
                "optional": false,
                "computed": true,
                "start": 720,
                "end": 746
              },
              "property": {
                "type": "Literal",
                "value": "dash-ok",
                "raw": "\"dash-ok\"",
                "start": 747,
                "end": 756
              },
              "optional": false,
              "computed": true,
              "start": 720,
              "end": 757
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "square",
                  "raw": "\"square\"",
                  "start": 774,
                  "end": 782
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
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
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 791,
                                  "end": 792
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 793,
                                  "end": 794
                                },
                                "optional": false,
                                "computed": true,
                                "start": 791,
                                "end": 795
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sub",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 796,
                                "end": 799
                              },
                              "optional": false,
                              "computed": false,
                              "start": 791,
                              "end": 799
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "under",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 800,
                              "end": 805
                            },
                            "optional": false,
                            "computed": false,
                            "start": 791,
                            "end": 805
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "shape",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 806,
                            "end": 811
                          },
                          "optional": false,
                          "computed": false,
                          "start": 791,
                          "end": 811
                        },
                        "property": {
                          "type": "Literal",
                          "value": "square-size",
                          "raw": "\"square-size\"",
                          "start": 812,
                          "end": 825
                        },
                        "optional": false,
                        "computed": true,
                        "start": 791,
                        "end": 826
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
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
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 829,
                                  "end": 830
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 831,
                                  "end": 832
                                },
                                "optional": false,
                                "computed": true,
                                "start": 829,
                                "end": 833
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sub",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 834,
                                "end": 837
                              },
                              "optional": false,
                              "computed": false,
                              "start": 829,
                              "end": 837
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "under",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 838,
                              "end": 843
                            },
                            "optional": false,
                            "computed": false,
                            "start": 829,
                            "end": 843
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "shape",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 844,
                            "end": 849
                          },
                          "optional": false,
                          "computed": false,
                          "start": 829,
                          "end": 849
                        },
                        "property": {
                          "type": "Literal",
                          "value": "square-size",
                          "raw": "\"square-size\"",
                          "start": 850,
                          "end": 863
                        },
                        "optional": false,
                        "computed": true,
                        "start": 829,
                        "end": 864
                      },
                      "start": 791,
                      "end": 864
                    },
                    "start": 784,
                    "end": 865
                  }
                ],
                "start": 769,
                "end": 865
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "rectangle",
                  "raw": "\"rectangle\"",
                  "start": 879,
                  "end": 890
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
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
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 899,
                                  "end": 900
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 901,
                                  "end": 902
                                },
                                "optional": false,
                                "computed": true,
                                "start": 899,
                                "end": 903
                              },
                              "property": {
                                "type": "Literal",
                                "value": "sub",
                                "raw": "\"sub\"",
                                "start": 904,
                                "end": 909
                              },
                              "optional": false,
                              "computed": true,
                              "start": 899,
                              "end": 910
                            },
                            "property": {
                              "type": "Literal",
                              "value": "under",
                              "raw": "\"under\"",
                              "start": 911,
                              "end": 918
                            },
                            "optional": false,
                            "computed": true,
                            "start": 899,
                            "end": 919
                          },
                          "property": {
                            "type": "Literal",
                            "value": "shape",
                            "raw": "\"shape\"",
                            "start": 920,
                            "end": 927
                          },
                          "optional": false,
                          "computed": true,
                          "start": 899,
                          "end": 928
                        },
                        "property": {
                          "type": "Literal",
                          "value": "width",
                          "raw": "\"width\"",
                          "start": 929,
                          "end": 936
                        },
                        "optional": false,
                        "computed": true,
                        "start": 899,
                        "end": 937
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
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
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 940,
                                  "end": 941
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 942,
                                  "end": 943
                                },
                                "optional": false,
                                "computed": true,
                                "start": 940,
                                "end": 944
                              },
                              "property": {
                                "type": "Literal",
                                "value": "sub",
                                "raw": "\"sub\"",
                                "start": 945,
                                "end": 950
                              },
                              "optional": false,
                              "computed": true,
                              "start": 940,
                              "end": 951
                            },
                            "property": {
                              "type": "Literal",
                              "value": "under",
                              "raw": "\"under\"",
                              "start": 952,
                              "end": 959
                            },
                            "optional": false,
                            "computed": true,
                            "start": 940,
                            "end": 960
                          },
                          "property": {
                            "type": "Literal",
                            "value": "shape",
                            "raw": "\"shape\"",
                            "start": 961,
                            "end": 968
                          },
                          "optional": false,
                          "computed": true,
                          "start": 940,
                          "end": 969
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "height",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 970,
                          "end": 976
                        },
                        "optional": false,
                        "computed": false,
                        "start": 940,
                        "end": 976
                      },
                      "start": 899,
                      "end": 976
                    },
                    "start": 892,
                    "end": 977
                  }
                ],
                "start": 874,
                "end": 977
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "\"circle\"",
                  "start": 991,
                  "end": 999
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
                            "start": 1008,
                            "end": 1012
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PI",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1013,
                            "end": 1015
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1008,
                          "end": 1015
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
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
                                    "name": "s",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1018,
                                    "end": 1019
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 1020,
                                    "end": 1021
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 1018,
                                  "end": 1022
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "sub",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1023,
                                  "end": 1026
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1018,
                                "end": 1026
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "under",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1027,
                                "end": 1032
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1018,
                              "end": 1032
                            },
                            "property": {
                              "type": "Literal",
                              "value": "shape",
                              "raw": "\"shape\"",
                              "start": 1033,
                              "end": 1040
                            },
                            "optional": false,
                            "computed": true,
                            "start": 1018,
                            "end": 1041
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "radius",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1042,
                            "end": 1048
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1018,
                          "end": 1048
                        },
                        "start": 1008,
                        "end": 1048
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
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
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1051,
                                  "end": 1052
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 1053,
                                  "end": 1054
                                },
                                "optional": false,
                                "computed": true,
                                "start": 1051,
                                "end": 1055
                              },
                              "property": {
                                "type": "Literal",
                                "value": "sub",
                                "raw": "\"sub\"",
                                "start": 1056,
                                "end": 1061
                              },
                              "optional": false,
                              "computed": true,
                              "start": 1051,
                              "end": 1062
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "under",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1063,
                              "end": 1068
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1051,
                            "end": 1068
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "shape",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1069,
                            "end": 1074
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1051,
                          "end": 1074
                        },
                        "property": {
                          "type": "Literal",
                          "value": "radius",
                          "raw": "\"radius\"",
                          "start": 1075,
                          "end": 1083
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1051,
                        "end": 1084
                      },
                      "start": 1008,
                      "end": 1084
                    },
                    "start": 1001,
                    "end": 1085
                  }
                ],
                "start": 986,
                "end": 1085
              }
            ],
            "start": 713,
            "end": 1091
          }
        ],
        "start": 707,
        "end": 1093
      },
      "expression": false,
      "start": 669,
      "end": 1093
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 1105,
        "end": 1106
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
              "value": 0,
              "raw": "0",
              "start": 1113,
              "end": 1114
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "xx",
                  "raw": "\"xx\"",
                  "start": 1116,
                  "end": 1120
                },
                "start": 1116,
                "end": 1120
              },
              "start": 1114,
              "end": 1120
            },
            "accessibility": null,
            "static": false,
            "start": 1113,
            "end": 1121
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1126,
              "end": 1127
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1129,
                "end": 1135
              },
              "start": 1127,
              "end": 1135
            },
            "accessibility": null,
            "static": false,
            "start": 1126,
            "end": 1135
          }
        ],
        "start": 1107,
        "end": 1137
      },
      "declare": false,
      "start": 1095,
      "end": 1137
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 1149,
        "end": 1150
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
              "value": 0,
              "raw": "0",
              "start": 1157,
              "end": 1158
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "yy",
                  "raw": "\"yy\"",
                  "start": 1160,
                  "end": 1164
                },
                "start": 1160,
                "end": 1164
              },
              "start": 1158,
              "end": 1164
            },
            "accessibility": null,
            "static": false,
            "start": 1157,
            "end": 1165
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1170,
              "end": 1171
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1173,
                "end": 1179
              },
              "start": 1171,
              "end": 1179
            },
            "accessibility": null,
            "static": false,
            "start": 1170,
            "end": 1179
          }
        ],
        "start": 1151,
        "end": 1181
      },
      "declare": false,
      "start": 1139,
      "end": 1181
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1188,
        "end": 1189
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "aa",
              "raw": "\"aa\"",
              "start": 1193,
              "end": 1197
            },
            "start": 1193,
            "end": 1197
          },
          {
            "type": "TSNumberKeyword",
            "start": 1199,
            "end": 1205
          }
        ],
        "start": 1192,
        "end": 1206
      },
      "declare": false,
      "start": 1183,
      "end": 1207
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 1213,
        "end": 1214
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "bb",
              "raw": "\"bb\"",
              "start": 1218,
              "end": 1222
            },
            "start": 1218,
            "end": 1222
          },
          {
            "type": "TSStringKeyword",
            "start": 1224,
            "end": 1230
          }
        ],
        "start": 1217,
        "end": 1231
      },
      "declare": false,
      "start": 1208,
      "end": 1232
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1239,
        "end": 1240
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
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 1243,
              "end": 1244
            },
            "typeArguments": null,
            "start": 1243,
            "end": 1244
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1247,
              "end": 1248
            },
            "typeArguments": null,
            "start": 1247,
            "end": 1248
          }
        ],
        "start": 1243,
        "end": 1248
      },
      "declare": false,
      "start": 1234,
      "end": 1249
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1256,
        "end": 1257
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1260,
              "end": 1261
            },
            "typeArguments": null,
            "start": 1260,
            "end": 1261
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1264,
              "end": 1265
            },
            "typeArguments": null,
            "start": 1264,
            "end": 1265
          }
        ],
        "start": 1260,
        "end": 1265
      },
      "declare": false,
      "start": 1251,
      "end": 1266
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "check",
        "optional": false,
        "typeAnnotation": null,
        "start": 1277,
        "end": 1282
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 1286,
                "end": 1287
              },
              "typeArguments": null,
              "start": 1286,
              "end": 1287
            },
            "start": 1284,
            "end": 1287
          },
          "start": 1283,
          "end": 1287
        },
        {
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
                "start": 1292,
                "end": 1293
              },
              "typeArguments": null,
              "start": 1292,
              "end": 1293
            },
            "start": 1290,
            "end": 1293
          },
          "start": 1289,
          "end": 1293
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 1301,
                "end": 1302
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1303,
                "end": 1304
              },
              "optional": false,
              "computed": true,
              "start": 1301,
              "end": 1305
            },
            "directive": null,
            "start": 1301,
            "end": 1305
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 1355,
                "end": 1356
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1357,
                "end": 1358
              },
              "optional": false,
              "computed": true,
              "start": 1355,
              "end": 1359
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "xx",
                  "raw": "\"xx\"",
                  "start": 1376,
                  "end": 1380
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "xx",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1402,
                              "end": 1408
                            },
                            "start": 1400,
                            "end": 1408
                          },
                          "start": 1398,
                          "end": 1408
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1411,
                            "end": 1412
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1413,
                            "end": 1414
                          },
                          "optional": false,
                          "computed": true,
                          "start": 1411,
                          "end": 1415
                        },
                        "definite": false,
                        "start": 1398,
                        "end": 1415
                      }
                    ],
                    "declare": false,
                    "start": 1394,
                    "end": 1415
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1448,
                    "end": 1454
                  }
                ],
                "start": 1371,
                "end": 1454
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "yy",
                  "raw": "\"yy\"",
                  "start": 1468,
                  "end": 1472
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "yy",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1494,
                              "end": 1500
                            },
                            "start": 1492,
                            "end": 1500
                          },
                          "start": 1490,
                          "end": 1500
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1503,
                            "end": 1504
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1505,
                            "end": 1506
                          },
                          "optional": false,
                          "computed": true,
                          "start": 1503,
                          "end": 1507
                        },
                        "definite": false,
                        "start": 1490,
                        "end": 1507
                      }
                    ],
                    "declare": false,
                    "start": 1486,
                    "end": 1507
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1540,
                    "end": 1546
                  }
                ],
                "start": 1463,
                "end": 1546
              }
            ],
            "start": 1347,
            "end": 1552
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1557,
                "end": 1558
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1559,
                "end": 1560
              },
              "optional": false,
              "computed": true,
              "start": 1557,
              "end": 1561
            },
            "directive": null,
            "start": 1557,
            "end": 1561
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1611,
                "end": 1612
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1613,
                "end": 1614
              },
              "optional": false,
              "computed": true,
              "start": 1611,
              "end": 1615
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "aa",
                  "raw": "\"aa\"",
                  "start": 1632,
                  "end": 1636
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "aa",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1658,
                              "end": 1664
                            },
                            "start": 1656,
                            "end": 1664
                          },
                          "start": 1654,
                          "end": 1664
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1667,
                            "end": 1668
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1669,
                            "end": 1670
                          },
                          "optional": false,
                          "computed": true,
                          "start": 1667,
                          "end": 1671
                        },
                        "definite": false,
                        "start": 1654,
                        "end": 1671
                      }
                    ],
                    "declare": false,
                    "start": 1650,
                    "end": 1671
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1704,
                    "end": 1710
                  }
                ],
                "start": 1627,
                "end": 1710
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "bb",
                  "raw": "\"bb\"",
                  "start": 1724,
                  "end": 1728
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bb",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1750,
                              "end": 1756
                            },
                            "start": 1748,
                            "end": 1756
                          },
                          "start": 1746,
                          "end": 1756
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1759,
                            "end": 1760
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1761,
                            "end": 1762
                          },
                          "optional": false,
                          "computed": true,
                          "start": 1759,
                          "end": 1763
                        },
                        "definite": false,
                        "start": 1746,
                        "end": 1763
                      }
                    ],
                    "declare": false,
                    "start": 1742,
                    "end": 1763
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1796,
                    "end": 1802
                  }
                ],
                "start": 1719,
                "end": 1802
              }
            ],
            "start": 1603,
            "end": 1808
          }
        ],
        "start": 1295,
        "end": 1810
      },
      "expression": false,
      "start": 1268,
      "end": 1810
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 1828,
          "end": 1829
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "pair",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1837,
                    "end": 1843
                  },
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1845,
                      "end": 1851
                    },
                    "start": 1845,
                    "end": 1852
                  }
                ],
                "start": 1836,
                "end": 1853
              },
              "start": 1834,
              "end": 1853
            },
            "start": 1830,
            "end": 1853
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 1856,
            "end": 1862
          },
          "start": 1854,
          "end": 1862
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pair",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1876,
                    "end": 1880
                  },
                  "property": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1881,
                    "end": 1882
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1876,
                  "end": 1883
                },
                "consequent": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pair",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1886,
                    "end": 1890
                  },
                  "property": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1891,
                    "end": 1892
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1886,
                  "end": 1893
                },
                "alternate": {
                  "type": "Literal",
                  "value": "nope",
                  "raw": "'nope'",
                  "start": 1896,
                  "end": 1902
                },
                "start": 1876,
                "end": 1902
              },
              "start": 1869,
              "end": 1903
            }
          ],
          "start": 1863,
          "end": 1905
        },
        "expression": false,
        "start": 1819,
        "end": 1905
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1812,
      "end": 1905
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1905
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
    "type": "Punctuator",
    "value": "[",
    "start": 23,
    "end": 24
  },
  {
    "type": "String",
    "value": "\"dash-ok\"",
    "start": 24,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "String",
    "value": "\"square\"",
    "start": 36,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 50,
    "end": 51
  },
  {
    "type": "String",
    "value": "\"square-size\"",
    "start": 51,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 78,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "Rectangle",
    "start": 88,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 104,
    "end": 105
  },
  {
    "type": "String",
    "value": "\"dash-ok\"",
    "start": 105,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "String",
    "value": "\"rectangle\"",
    "start": 117,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "height",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 172,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "Circle",
    "start": 182,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 195,
    "end": 196
  },
  {
    "type": "String",
    "value": "\"dash-ok\"",
    "start": 196,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 208,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 222,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 230,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Identifier",
    "value": "type",
    "start": 241,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 246,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "Square",
    "start": 254,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "Rectangle",
    "start": 263,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "Circle",
    "start": 275,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 283,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "Subshape",
    "start": 293,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 308,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "sub",
    "start": 323,
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
    "value": "under",
    "start": 342,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 367,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 374,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 413,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "area",
    "start": 422,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 430,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 438,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 451,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 459,
    "end": 460
  },
  {
    "type": "String",
    "value": "'dash-ok'",
    "start": 460,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 482,
    "end": 486
  },
  {
    "type": "String",
    "value": "\"square\"",
    "start": 487,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 497,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 505,
    "end": 506
  },
  {
    "type": "String",
    "value": "'square-size'",
    "start": 506,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 524,
    "end": 525
  },
  {
    "type": "String",
    "value": "'square-size'",
    "start": 525,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 549,
    "end": 553
  },
  {
    "type": "String",
    "value": "\"rectangle\"",
    "start": 554,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 565,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 567,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "value": "width",
    "start": 576,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 585,
    "end": 586
  },
  {
    "type": "String",
    "value": "'height'",
    "start": 586,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 605,
    "end": 609
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 610,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 620,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 627,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "PI",
    "start": 632,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 638,
    "end": 639
  },
  {
    "type": "String",
    "value": "'radius'",
    "start": 639,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 653,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 667,
    "end": 668
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 669,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "subarea",
    "start": 678,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "Subshape",
    "start": 689,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 700,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 713,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 721,
    "end": 722
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 724,
    "end": 725
  },
  {
    "type": "String",
    "value": "\"sub\"",
    "start": 725,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "under",
    "start": 732,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 737,
    "end": 738
  },
  {
    "type": "String",
    "value": "\"shape\"",
    "start": 738,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 746,
    "end": 747
  },
  {
    "type": "String",
    "value": "\"dash-ok\"",
    "start": 747,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 769,
    "end": 773
  },
  {
    "type": "String",
    "value": "\"square\"",
    "start": 774,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 782,
    "end": 783
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 784,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 792,
    "end": 793
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "sub",
    "start": 796,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "under",
    "start": 800,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 806,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 811,
    "end": 812
  },
  {
    "type": "String",
    "value": "\"square-size\"",
    "start": 812,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 830,
    "end": 831
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "sub",
    "start": 834,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "under",
    "start": 838,
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
    "value": "shape",
    "start": 844,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 849,
    "end": 850
  },
  {
    "type": "String",
    "value": "\"square-size\"",
    "start": 850,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 864,
    "end": 865
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 874,
    "end": 878
  },
  {
    "type": "String",
    "value": "\"rectangle\"",
    "start": 879,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 890,
    "end": 891
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 892,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 900,
    "end": 901
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 903,
    "end": 904
  },
  {
    "type": "String",
    "value": "\"sub\"",
    "start": 904,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 910,
    "end": 911
  },
  {
    "type": "String",
    "value": "\"under\"",
    "start": 911,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 919,
    "end": 920
  },
  {
    "type": "String",
    "value": "\"shape\"",
    "start": 920,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 928,
    "end": 929
  },
  {
    "type": "String",
    "value": "\"width\"",
    "start": 929,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 941,
    "end": 942
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 944,
    "end": 945
  },
  {
    "type": "String",
    "value": "\"sub\"",
    "start": 945,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 951,
    "end": 952
  },
  {
    "type": "String",
    "value": "\"under\"",
    "start": 952,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 960,
    "end": 961
  },
  {
    "type": "String",
    "value": "\"shape\"",
    "start": 961,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "height",
    "start": 970,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 976,
    "end": 977
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 986,
    "end": 990
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 991,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1001,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1008,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "PI",
    "start": 1013,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "sub",
    "start": 1023,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "under",
    "start": 1027,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "String",
    "value": "\"shape\"",
    "start": 1033,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 1042,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "String",
    "value": "\"sub\"",
    "start": 1056,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "under",
    "start": 1063,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 1069,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "String",
    "value": "\"radius\"",
    "start": 1075,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1095,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "String",
    "value": "\"xx\"",
    "start": 1116,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1129,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1139,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "String",
    "value": "\"yy\"",
    "start": 1160,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1173,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1183,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "String",
    "value": "\"aa\"",
    "start": 1193,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1199,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1208,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "String",
    "value": "\"bb\"",
    "start": 1218,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1224,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1234,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1251,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1268,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "check",
    "start": 1277,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1347,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1371,
    "end": 1375
  },
  {
    "type": "String",
    "value": "\"xx\"",
    "start": 1376,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1394,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 1398,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1402,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1448,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1463,
    "end": 1467
  },
  {
    "type": "String",
    "value": "\"yy\"",
    "start": 1468,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1486,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 1490,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1494,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1540,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1603,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Numeric",
    "value": "0",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1627,
    "end": 1631
  },
  {
    "type": "String",
    "value": "\"aa\"",
    "start": 1632,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1650,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "aa",
    "start": 1654,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1658,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1704,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1719,
    "end": 1723
  },
  {
    "type": "String",
    "value": "\"bb\"",
    "start": 1724,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1742,
    "end": 1745
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 1746,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1750,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1796,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1812,
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
    "value": "g",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Identifier",
    "value": "pair",
    "start": 1830,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1837,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1845,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1856,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1869,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "pair",
    "start": 1876,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "pair",
    "start": 1886,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1891,
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
    "value": ":",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "String",
    "value": "'nope'",
    "start": 1896,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1904,
    "end": 1905
  }
]
```
