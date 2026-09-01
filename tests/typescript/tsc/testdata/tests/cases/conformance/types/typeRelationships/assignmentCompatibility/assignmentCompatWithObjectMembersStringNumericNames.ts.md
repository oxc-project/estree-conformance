__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JustStrings",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 225
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 239
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
                    "type": "Literal",
                    "value": "1",
                    "raw": "'1'",
                    "start": 242,
                    "end": 245
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 247,
                      "end": 253
                    },
                    "start": 245,
                    "end": 253
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
                  "start": 242,
                  "end": 254
                }
              ],
              "start": 240,
              "end": 256
            },
            "abstract": false,
            "declare": false,
            "start": 232,
            "end": 256
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 268
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
                    "type": "Literal",
                    "value": "1.",
                    "raw": "'1.'",
                    "start": 271,
                    "end": 275
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 277,
                      "end": 283
                    },
                    "start": 275,
                    "end": 283
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
                  "start": 271,
                  "end": 284
                }
              ],
              "start": 269,
              "end": 286
            },
            "abstract": false,
            "declare": false,
            "start": 261,
            "end": 286
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 306,
                        "end": 307
                      },
                      "typeArguments": null,
                      "start": 306,
                      "end": 307
                    },
                    "start": 304,
                    "end": 307
                  },
                  "start": 303,
                  "end": 307
                },
                "init": null,
                "definite": false,
                "start": 303,
                "end": 307
              }
            ],
            "declare": true,
            "start": 291,
            "end": 308
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
                  "name": "t",
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
                        "start": 328,
                        "end": 329
                      },
                      "typeArguments": null,
                      "start": 328,
                      "end": 329
                    },
                    "start": 326,
                    "end": 329
                  },
                  "start": 325,
                  "end": 329
                },
                "init": null,
                "definite": false,
                "start": 325,
                "end": 329
              }
            ],
            "declare": true,
            "start": 313,
            "end": 330
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S2",
              "optional": false,
              "typeAnnotation": null,
              "start": 346,
              "end": 348
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
                    "value": "1",
                    "raw": "'1'",
                    "start": 351,
                    "end": 354
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 356,
                      "end": 362
                    },
                    "start": 354,
                    "end": 362
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 351,
                  "end": 363
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 364,
                    "end": 367
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 370,
                      "end": 376
                    },
                    "start": 368,
                    "end": 376
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 364,
                  "end": 376
                }
              ],
              "start": 349,
              "end": 378
            },
            "declare": false,
            "start": 336,
            "end": 378
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 395
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
                    "value": "1.0",
                    "raw": "'1.0'",
                    "start": 398,
                    "end": 403
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 405,
                      "end": 411
                    },
                    "start": 403,
                    "end": 411
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 398,
                  "end": 412
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 413,
                    "end": 416
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 419,
                      "end": 425
                    },
                    "start": 417,
                    "end": 425
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 413,
                  "end": 425
                }
              ],
              "start": 396,
              "end": 427
            },
            "declare": false,
            "start": 383,
            "end": 427
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
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 448,
                        "end": 450
                      },
                      "typeArguments": null,
                      "start": 448,
                      "end": 450
                    },
                    "start": 446,
                    "end": 450
                  },
                  "start": 444,
                  "end": 450
                },
                "init": null,
                "definite": false,
                "start": 444,
                "end": 450
              }
            ],
            "declare": true,
            "start": 432,
            "end": 451
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
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 472,
                        "end": 474
                      },
                      "typeArguments": null,
                      "start": 472,
                      "end": 474
                    },
                    "start": 470,
                    "end": 474
                  },
                  "start": 468,
                  "end": 474
                },
                "init": null,
                "definite": false,
                "start": 468,
                "end": 474
              }
            ],
            "declare": true,
            "start": 456,
            "end": 475
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
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Literal",
                            "value": "1.",
                            "raw": "'1.'",
                            "start": 498,
                            "end": 502
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 504,
                              "end": 510
                            },
                            "start": 502,
                            "end": 510
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 498,
                          "end": 511
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 512,
                            "end": 515
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 518,
                              "end": 524
                            },
                            "start": 516,
                            "end": 524
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 512,
                          "end": 524
                        }
                      ],
                      "start": 496,
                      "end": 526
                    },
                    "start": 494,
                    "end": 526
                  },
                  "start": 493,
                  "end": 526
                },
                "init": null,
                "definite": false,
                "start": 493,
                "end": 526
              }
            ],
            "declare": true,
            "start": 481,
            "end": 527
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
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Literal",
                            "value": "1.0",
                            "raw": "'1.0'",
                            "start": 549,
                            "end": 554
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 556,
                              "end": 562
                            },
                            "start": 554,
                            "end": 562
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 549,
                          "end": 563
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "baz",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 564,
                            "end": 567
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 570,
                              "end": 576
                            },
                            "start": 568,
                            "end": 576
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 564,
                          "end": 576
                        }
                      ],
                      "start": 547,
                      "end": 578
                    },
                    "start": 545,
                    "end": 578
                  },
                  "start": 544,
                  "end": 578
                },
                "init": null,
                "definite": false,
                "start": 544,
                "end": 578
              }
            ],
            "declare": true,
            "start": 532,
            "end": 579
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
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 589,
                  "end": 591
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "1.0",
                        "raw": "'1.0'",
                        "start": 596,
                        "end": 601
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 603,
                        "end": 605
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 596,
                      "end": 605
                    }
                  ],
                  "start": 594,
                  "end": 607
                },
                "definite": false,
                "start": 589,
                "end": 607
              }
            ],
            "declare": false,
            "start": 585,
            "end": 608
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
                  "name": "b2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 617,
                  "end": 619
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "1",
                        "raw": "'1'",
                        "start": 624,
                        "end": 627
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 629,
                        "end": 631
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 624,
                      "end": 631
                    }
                  ],
                  "start": 622,
                  "end": 633
                },
                "definite": false,
                "start": 617,
                "end": 633
              }
            ],
            "declare": false,
            "start": 613,
            "end": 634
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 640,
                "end": 641
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 644,
                "end": 645
              },
              "start": 640,
              "end": 645
            },
            "directive": null,
            "start": 640,
            "end": 646
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 651,
                "end": 652
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 655,
                "end": 656
              },
              "start": 651,
              "end": 656
            },
            "directive": null,
            "start": 651,
            "end": 657
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 662,
                "end": 663
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 666,
                "end": 668
              },
              "start": 662,
              "end": 668
            },
            "directive": null,
            "start": 662,
            "end": 669
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 680,
                "end": 681
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 684,
                "end": 686
              },
              "start": 680,
              "end": 686
            },
            "directive": null,
            "start": 680,
            "end": 687
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 693,
                "end": 695
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 698,
                "end": 700
              },
              "start": 693,
              "end": 700
            },
            "directive": null,
            "start": 693,
            "end": 701
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 706,
                "end": 708
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 711,
                "end": 713
              },
              "start": 706,
              "end": 713
            },
            "directive": null,
            "start": 706,
            "end": 714
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 719,
                "end": 721
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 724,
                "end": 725
              },
              "start": 719,
              "end": 725
            },
            "directive": null,
            "start": 719,
            "end": 726
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 731,
                "end": 733
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 736,
                "end": 737
              },
              "start": 731,
              "end": 737
            },
            "directive": null,
            "start": 731,
            "end": 738
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 743,
                "end": 745
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 748,
                "end": 750
              },
              "start": 743,
              "end": 750
            },
            "directive": null,
            "start": 743,
            "end": 751
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 757,
                "end": 758
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 761,
                "end": 762
              },
              "start": 757,
              "end": 762
            },
            "directive": null,
            "start": 757,
            "end": 763
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 768,
                "end": 769
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 772,
                "end": 773
              },
              "start": 768,
              "end": 773
            },
            "directive": null,
            "start": 768,
            "end": 774
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 779,
                "end": 780
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 783,
                "end": 784
              },
              "start": 779,
              "end": 784
            },
            "directive": null,
            "start": 779,
            "end": 785
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 790,
                "end": 791
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 794,
                "end": 796
              },
              "start": 790,
              "end": 796
            },
            "directive": null,
            "start": 790,
            "end": 797
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 802,
                "end": 803
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 806,
                "end": 808
              },
              "start": 802,
              "end": 808
            },
            "directive": null,
            "start": 802,
            "end": 809
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 815,
                "end": 817
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 820,
                "end": 822
              },
              "start": 815,
              "end": 822
            },
            "directive": null,
            "start": 815,
            "end": 823
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 828,
                "end": 830
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 833,
                "end": 835
              },
              "start": 828,
              "end": 835
            },
            "directive": null,
            "start": 828,
            "end": 836
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 841,
                "end": 843
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 846,
                "end": 847
              },
              "start": 841,
              "end": 847
            },
            "directive": null,
            "start": 841,
            "end": 848
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 859,
                "end": 861
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 864,
                "end": 866
              },
              "start": 859,
              "end": 866
            },
            "directive": null,
            "start": 859,
            "end": 867
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 878,
                "end": 880
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 883,
                "end": 884
              },
              "start": 878,
              "end": 884
            },
            "directive": null,
            "start": 878,
            "end": 885
          }
        ],
        "start": 226,
        "end": 887
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 204,
      "end": 887
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumbersAndStrings",
        "optional": false,
        "typeAnnotation": null,
        "start": 899,
        "end": 916
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 929,
              "end": 930
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
                    "type": "Literal",
                    "value": "1",
                    "raw": "'1'",
                    "start": 933,
                    "end": 936
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 938,
                      "end": 944
                    },
                    "start": 936,
                    "end": 944
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
                  "start": 933,
                  "end": 945
                }
              ],
              "start": 931,
              "end": 947
            },
            "abstract": false,
            "declare": false,
            "start": 923,
            "end": 947
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 958,
              "end": 959
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
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 962,
                    "end": 963
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 965,
                      "end": 971
                    },
                    "start": 963,
                    "end": 971
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
                  "start": 962,
                  "end": 972
                }
              ],
              "start": 960,
              "end": 974
            },
            "abstract": false,
            "declare": false,
            "start": 952,
            "end": 974
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 994,
                        "end": 995
                      },
                      "typeArguments": null,
                      "start": 994,
                      "end": 995
                    },
                    "start": 992,
                    "end": 995
                  },
                  "start": 991,
                  "end": 995
                },
                "init": null,
                "definite": false,
                "start": 991,
                "end": 995
              }
            ],
            "declare": true,
            "start": 979,
            "end": 996
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
                  "name": "t",
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
                        "start": 1016,
                        "end": 1017
                      },
                      "typeArguments": null,
                      "start": 1016,
                      "end": 1017
                    },
                    "start": 1014,
                    "end": 1017
                  },
                  "start": 1013,
                  "end": 1017
                },
                "init": null,
                "definite": false,
                "start": 1013,
                "end": 1017
              }
            ],
            "declare": true,
            "start": 1001,
            "end": 1018
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1034,
              "end": 1036
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
                    "value": "1",
                    "raw": "'1'",
                    "start": 1039,
                    "end": 1042
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1044,
                      "end": 1050
                    },
                    "start": 1042,
                    "end": 1050
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1039,
                  "end": 1051
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1052,
                    "end": 1055
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1058,
                      "end": 1064
                    },
                    "start": 1056,
                    "end": 1064
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1052,
                  "end": 1064
                }
              ],
              "start": 1037,
              "end": 1066
            },
            "declare": false,
            "start": 1024,
            "end": 1066
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1081,
              "end": 1083
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
                    "raw": "1.0",
                    "start": 1086,
                    "end": 1089
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1091,
                      "end": 1097
                    },
                    "start": 1089,
                    "end": 1097
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1086,
                  "end": 1098
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1099,
                    "end": 1102
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1105,
                      "end": 1111
                    },
                    "start": 1103,
                    "end": 1111
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1099,
                  "end": 1111
                }
              ],
              "start": 1084,
              "end": 1113
            },
            "declare": false,
            "start": 1071,
            "end": 1113
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
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1134,
                        "end": 1136
                      },
                      "typeArguments": null,
                      "start": 1134,
                      "end": 1136
                    },
                    "start": 1132,
                    "end": 1136
                  },
                  "start": 1130,
                  "end": 1136
                },
                "init": null,
                "definite": false,
                "start": 1130,
                "end": 1136
              }
            ],
            "declare": true,
            "start": 1118,
            "end": 1137
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
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1158,
                        "end": 1160
                      },
                      "typeArguments": null,
                      "start": 1158,
                      "end": 1160
                    },
                    "start": 1156,
                    "end": 1160
                  },
                  "start": 1154,
                  "end": 1160
                },
                "init": null,
                "definite": false,
                "start": 1154,
                "end": 1160
              }
            ],
            "declare": true,
            "start": 1142,
            "end": 1161
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
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Literal",
                            "value": "1.",
                            "raw": "'1.'",
                            "start": 1184,
                            "end": 1188
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1190,
                              "end": 1196
                            },
                            "start": 1188,
                            "end": 1196
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1184,
                          "end": 1197
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1198,
                            "end": 1201
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1204,
                              "end": 1210
                            },
                            "start": 1202,
                            "end": 1210
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1198,
                          "end": 1210
                        }
                      ],
                      "start": 1182,
                      "end": 1212
                    },
                    "start": 1180,
                    "end": 1212
                  },
                  "start": 1179,
                  "end": 1212
                },
                "init": null,
                "definite": false,
                "start": 1179,
                "end": 1212
              }
            ],
            "declare": true,
            "start": 1167,
            "end": 1213
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
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1.0",
                            "start": 1235,
                            "end": 1238
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1240,
                              "end": 1246
                            },
                            "start": 1238,
                            "end": 1246
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1235,
                          "end": 1247
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "baz",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1248,
                            "end": 1251
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1254,
                              "end": 1260
                            },
                            "start": 1252,
                            "end": 1260
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1248,
                          "end": 1260
                        }
                      ],
                      "start": 1233,
                      "end": 1262
                    },
                    "start": 1231,
                    "end": 1262
                  },
                  "start": 1230,
                  "end": 1262
                },
                "init": null,
                "definite": false,
                "start": 1230,
                "end": 1262
              }
            ],
            "declare": true,
            "start": 1218,
            "end": 1263
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
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1273,
                  "end": 1275
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "1.0",
                        "raw": "'1.0'",
                        "start": 1280,
                        "end": 1285
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 1287,
                        "end": 1289
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1280,
                      "end": 1289
                    }
                  ],
                  "start": 1278,
                  "end": 1291
                },
                "definite": false,
                "start": 1273,
                "end": 1291
              }
            ],
            "declare": false,
            "start": 1269,
            "end": 1292
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
                  "name": "b2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1301,
                  "end": 1303
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1.",
                        "start": 1308,
                        "end": 1310
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 1312,
                        "end": 1314
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1308,
                      "end": 1314
                    }
                  ],
                  "start": 1306,
                  "end": 1316
                },
                "definite": false,
                "start": 1301,
                "end": 1316
              }
            ],
            "declare": false,
            "start": 1297,
            "end": 1317
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1323,
                "end": 1324
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1327,
                "end": 1328
              },
              "start": 1323,
              "end": 1328
            },
            "directive": null,
            "start": 1323,
            "end": 1329
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1340,
                "end": 1341
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1344,
                "end": 1345
              },
              "start": 1340,
              "end": 1345
            },
            "directive": null,
            "start": 1340,
            "end": 1346
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1357,
                "end": 1358
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1361,
                "end": 1363
              },
              "start": 1357,
              "end": 1363
            },
            "directive": null,
            "start": 1357,
            "end": 1364
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1375,
                "end": 1376
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1379,
                "end": 1381
              },
              "start": 1375,
              "end": 1381
            },
            "directive": null,
            "start": 1375,
            "end": 1382
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1397,
                "end": 1399
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1402,
                "end": 1404
              },
              "start": 1397,
              "end": 1404
            },
            "directive": null,
            "start": 1397,
            "end": 1405
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1416,
                "end": 1418
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1421,
                "end": 1423
              },
              "start": 1416,
              "end": 1423
            },
            "directive": null,
            "start": 1416,
            "end": 1424
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1435,
                "end": 1437
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1440,
                "end": 1441
              },
              "start": 1435,
              "end": 1441
            },
            "directive": null,
            "start": 1435,
            "end": 1442
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1454,
                "end": 1456
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1459,
                "end": 1460
              },
              "start": 1454,
              "end": 1460
            },
            "directive": null,
            "start": 1454,
            "end": 1461
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1472,
                "end": 1474
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1477,
                "end": 1479
              },
              "start": 1472,
              "end": 1479
            },
            "directive": null,
            "start": 1472,
            "end": 1480
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1495,
                "end": 1496
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1499,
                "end": 1500
              },
              "start": 1495,
              "end": 1500
            },
            "directive": null,
            "start": 1495,
            "end": 1501
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1515,
                "end": 1516
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1519,
                "end": 1520
              },
              "start": 1515,
              "end": 1520
            },
            "directive": null,
            "start": 1515,
            "end": 1521
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1535,
                "end": 1536
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1539,
                "end": 1540
              },
              "start": 1535,
              "end": 1540
            },
            "directive": null,
            "start": 1535,
            "end": 1541
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1555,
                "end": 1556
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1559,
                "end": 1561
              },
              "start": 1555,
              "end": 1561
            },
            "directive": null,
            "start": 1555,
            "end": 1562
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1576,
                "end": 1577
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1580,
                "end": 1582
              },
              "start": 1576,
              "end": 1582
            },
            "directive": null,
            "start": 1576,
            "end": 1583
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1597,
                "end": 1598
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1601,
                "end": 1603
              },
              "start": 1597,
              "end": 1603
            },
            "directive": null,
            "start": 1597,
            "end": 1604
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1619,
                "end": 1621
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1624,
                "end": 1626
              },
              "start": 1619,
              "end": 1626
            },
            "directive": null,
            "start": 1619,
            "end": 1627
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1641,
                "end": 1643
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1646,
                "end": 1648
              },
              "start": 1641,
              "end": 1648
            },
            "directive": null,
            "start": 1641,
            "end": 1649
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1663,
                "end": 1665
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1668,
                "end": 1669
              },
              "start": 1663,
              "end": 1669
            },
            "directive": null,
            "start": 1663,
            "end": 1670
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1684,
                "end": 1686
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1689,
                "end": 1691
              },
              "start": 1684,
              "end": 1691
            },
            "directive": null,
            "start": 1684,
            "end": 1692
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1706,
                "end": 1708
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1711,
                "end": 1712
              },
              "start": 1706,
              "end": 1712
            },
            "directive": null,
            "start": 1706,
            "end": 1713
          }
        ],
        "start": 917,
        "end": 1724
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 889,
      "end": 1724
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 204,
  "end": 1724
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 204,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "JustStrings",
    "start": 214,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 232,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 240,
    "end": 241
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 242,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 261,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "String",
    "value": "'1.'",
    "start": 271,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 277,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 291,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 299,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "S",
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
    "start": 313,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 321,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 325,
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
    "value": "T",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 336,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 346,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 349,
    "end": 350
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 351,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 356,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 364,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 370,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 383,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 393,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397
  },
  {
    "type": "String",
    "value": "'1.0'",
    "start": 398,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 413,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 419,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 432,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 440,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 444,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 448,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 456,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 464,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 468,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 472,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 481,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 489,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "String",
    "value": "'1.'",
    "start": 498,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 504,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 512,
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
    "type": "Identifier",
    "value": "string",
    "start": 518,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 532,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 540,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 547,
    "end": 548
  },
  {
    "type": "String",
    "value": "'1.0'",
    "start": 549,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 556,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 564,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "string",
    "start": 570,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 578,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 585,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 589,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 594,
    "end": 595
  },
  {
    "type": "String",
    "value": "'1.0'",
    "start": 596,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 601,
    "end": 602
  },
  {
    "type": "String",
    "value": "''",
    "start": 603,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 613,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 617,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 622,
    "end": 623
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 624,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 627,
    "end": 628
  },
  {
    "type": "String",
    "value": "''",
    "start": 629,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 666,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 684,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "s2",
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
    "type": "Identifier",
    "value": "t2",
    "start": 698,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 706,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 711,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 719,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "type": "Identifier",
    "value": "s2",
    "start": 731,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 743,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 748,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 794,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 806,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 815,
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
    "value": "b2",
    "start": 820,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 828,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 833,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 841,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 859,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 864,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 878,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 889,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "NumbersAndStrings",
    "start": 899,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 917,
    "end": 918
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 923,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 931,
    "end": 932
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 933,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 938,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 946,
    "end": 947
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 952,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 960,
    "end": 961
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 965,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 979,
    "end": 986
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 987,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1001,
    "end": 1008
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1009,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "interface",
    "start": 1024,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 1034,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 1039,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1044,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1052,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1058,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1071,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1081,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Numeric",
    "value": "1.0",
    "start": 1086,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1091,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1099,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1105,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1118,
    "end": 1125
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1126,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1130,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 1134,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1142,
    "end": 1149
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1150,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1154,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1158,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1167,
    "end": 1174
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1175,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "String",
    "value": "'1.'",
    "start": 1184,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1190,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1198,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1204,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1218,
    "end": 1225
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1226,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Numeric",
    "value": "1.0",
    "start": 1235,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1240,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1248,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1254,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1269,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1273,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "String",
    "value": "'1.0'",
    "start": 1280,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "String",
    "value": "''",
    "start": 1287,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1297,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1301,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Numeric",
    "value": "1.",
    "start": 1308,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "String",
    "value": "''",
    "start": 1312,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1361,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1379,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1397,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1402,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1416,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1421,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1435,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1454,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1472,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1477,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1559,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1580,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1601,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1619,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1624,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1641,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1646,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1663,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1684,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1689,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1706,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1723,
    "end": 1724
  }
]
```
