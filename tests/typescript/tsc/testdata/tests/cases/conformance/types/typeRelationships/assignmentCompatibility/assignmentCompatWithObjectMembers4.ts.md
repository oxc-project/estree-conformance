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
        "name": "OnlyDerived",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 142
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
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 159
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 162,
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 162,
                  "end": 174
                }
              ],
              "start": 160,
              "end": 176
            },
            "abstract": false,
            "declare": false,
            "start": 149,
            "end": 176
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 194
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 207
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 210,
                  "end": 222
                }
              ],
              "start": 208,
              "end": 224
            },
            "abstract": false,
            "declare": false,
            "start": 181,
            "end": 224
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived2",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 243
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 256
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
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 259,
                    "end": 262
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 264,
                      "end": 270
                    },
                    "start": 262,
                    "end": 270
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
                  "start": 259,
                  "end": 271
                }
              ],
              "start": 257,
              "end": 273
            },
            "abstract": false,
            "declare": false,
            "start": 229,
            "end": 273
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 286
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 289,
                    "end": 292
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 294,
                        "end": 301
                      },
                      "typeArguments": null,
                      "start": 294,
                      "end": 301
                    },
                    "start": 292,
                    "end": 301
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
                  "start": 289,
                  "end": 302
                }
              ],
              "start": 287,
              "end": 304
            },
            "abstract": false,
            "declare": false,
            "start": 279,
            "end": 304
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
              "start": 315,
              "end": 316
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 319,
                    "end": 322
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 324,
                        "end": 332
                      },
                      "typeArguments": null,
                      "start": 324,
                      "end": 332
                    },
                    "start": 322,
                    "end": 332
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
                  "start": 319,
                  "end": 333
                }
              ],
              "start": 317,
              "end": 335
            },
            "abstract": false,
            "declare": false,
            "start": 309,
            "end": 335
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
                        "start": 355,
                        "end": 356
                      },
                      "typeArguments": null,
                      "start": 355,
                      "end": 356
                    },
                    "start": 353,
                    "end": 356
                  },
                  "start": 352,
                  "end": 356
                },
                "init": null,
                "definite": false,
                "start": 352,
                "end": 356
              }
            ],
            "declare": true,
            "start": 340,
            "end": 357
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
                        "start": 377,
                        "end": 378
                      },
                      "typeArguments": null,
                      "start": 377,
                      "end": 378
                    },
                    "start": 375,
                    "end": 378
                  },
                  "start": 374,
                  "end": 378
                },
                "init": null,
                "definite": false,
                "start": 374,
                "end": 378
              }
            ],
            "declare": true,
            "start": 362,
            "end": 379
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S2",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 397
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 400,
                    "end": 403
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 405,
                        "end": 412
                      },
                      "typeArguments": null,
                      "start": 405,
                      "end": 412
                    },
                    "start": 403,
                    "end": 412
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 400,
                  "end": 413
                }
              ],
              "start": 398,
              "end": 415
            },
            "declare": false,
            "start": 385,
            "end": 415
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 430,
              "end": 432
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 435,
                    "end": 438
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 440,
                        "end": 448
                      },
                      "typeArguments": null,
                      "start": 440,
                      "end": 448
                    },
                    "start": 438,
                    "end": 448
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 435,
                  "end": 449
                }
              ],
              "start": 433,
              "end": 451
            },
            "declare": false,
            "start": 420,
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
                        "start": 496,
                        "end": 498
                      },
                      "typeArguments": null,
                      "start": 496,
                      "end": 498
                    },
                    "start": 494,
                    "end": 498
                  },
                  "start": 492,
                  "end": 498
                },
                "init": null,
                "definite": false,
                "start": 492,
                "end": 498
              }
            ],
            "declare": true,
            "start": 480,
            "end": 499
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 522,
                            "end": 525
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 527,
                                "end": 534
                              },
                              "typeArguments": null,
                              "start": 527,
                              "end": 534
                            },
                            "start": 525,
                            "end": 534
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 522,
                          "end": 535
                        }
                      ],
                      "start": 520,
                      "end": 537
                    },
                    "start": 518,
                    "end": 537
                  },
                  "start": 517,
                  "end": 537
                },
                "init": null,
                "definite": false,
                "start": 517,
                "end": 537
              }
            ],
            "declare": true,
            "start": 505,
            "end": 537
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 559,
                            "end": 562
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 564,
                                "end": 572
                              },
                              "typeArguments": null,
                              "start": 564,
                              "end": 572
                            },
                            "start": 562,
                            "end": 572
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 559,
                          "end": 573
                        }
                      ],
                      "start": 557,
                      "end": 575
                    },
                    "start": 555,
                    "end": 575
                  },
                  "start": 554,
                  "end": 575
                },
                "init": null,
                "definite": false,
                "start": 554,
                "end": 575
              }
            ],
            "declare": true,
            "start": 542,
            "end": 575
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
                  "start": 585,
                  "end": 587
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 592,
                        "end": 595
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 601,
                          "end": 608
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 597,
                        "end": 610
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 592,
                      "end": 610
                    }
                  ],
                  "start": 590,
                  "end": 612
                },
                "definite": false,
                "start": 585,
                "end": 612
              }
            ],
            "declare": false,
            "start": 581,
            "end": 613
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
                  "start": 622,
                  "end": 624
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 629,
                        "end": 632
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 638,
                          "end": 646
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 634,
                        "end": 648
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 629,
                      "end": 648
                    }
                  ],
                  "start": 627,
                  "end": 650
                },
                "definite": false,
                "start": 622,
                "end": 650
              }
            ],
            "declare": false,
            "start": 618,
            "end": 651
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
                "start": 657,
                "end": 658
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 661,
                "end": 662
              },
              "start": 657,
              "end": 662
            },
            "directive": null,
            "start": 657,
            "end": 663
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
                "start": 677,
                "end": 678
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 681,
                "end": 682
              },
              "start": 677,
              "end": 682
            },
            "directive": null,
            "start": 677,
            "end": 683
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
                "start": 697,
                "end": 698
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 701,
                "end": 703
              },
              "start": 697,
              "end": 703
            },
            "directive": null,
            "start": 697,
            "end": 704
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
                "start": 715,
                "end": 716
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 719,
                "end": 721
              },
              "start": 715,
              "end": 721
            },
            "directive": null,
            "start": 715,
            "end": 722
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
                "start": 734,
                "end": 736
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 739,
                "end": 741
              },
              "start": 734,
              "end": 741
            },
            "directive": null,
            "start": 734,
            "end": 742
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
                "start": 756,
                "end": 758
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 761,
                "end": 763
              },
              "start": 756,
              "end": 763
            },
            "directive": null,
            "start": 756,
            "end": 764
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
                "start": 778,
                "end": 780
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 783,
                "end": 784
              },
              "start": 778,
              "end": 784
            },
            "directive": null,
            "start": 778,
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
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 799,
                "end": 801
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 804,
                "end": 805
              },
              "start": 799,
              "end": 805
            },
            "directive": null,
            "start": 799,
            "end": 806
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
                "start": 820,
                "end": 822
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 825,
                "end": 827
              },
              "start": 820,
              "end": 827
            },
            "directive": null,
            "start": 820,
            "end": 828
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
                "start": 840,
                "end": 841
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 844,
                "end": 845
              },
              "start": 840,
              "end": 845
            },
            "directive": null,
            "start": 840,
            "end": 846
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
                "start": 860,
                "end": 861
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 864,
                "end": 865
              },
              "start": 860,
              "end": 865
            },
            "directive": null,
            "start": 860,
            "end": 866
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
                "start": 880,
                "end": 881
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 884,
                "end": 885
              },
              "start": 880,
              "end": 885
            },
            "directive": null,
            "start": 880,
            "end": 886
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
                "start": 897,
                "end": 898
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 901,
                "end": 903
              },
              "start": 897,
              "end": 903
            },
            "directive": null,
            "start": 897,
            "end": 904
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
                "start": 915,
                "end": 916
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 919,
                "end": 921
              },
              "start": 915,
              "end": 921
            },
            "directive": null,
            "start": 915,
            "end": 922
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
                "start": 934,
                "end": 936
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 939,
                "end": 941
              },
              "start": 934,
              "end": 941
            },
            "directive": null,
            "start": 934,
            "end": 942
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
                "start": 956,
                "end": 958
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 961,
                "end": 963
              },
              "start": 956,
              "end": 963
            },
            "directive": null,
            "start": 956,
            "end": 964
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
                "start": 978,
                "end": 980
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 983,
                "end": 984
              },
              "start": 978,
              "end": 984
            },
            "directive": null,
            "start": 978,
            "end": 985
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
                "start": 999,
                "end": 1001
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1004,
                "end": 1006
              },
              "start": 999,
              "end": 1006
            },
            "directive": null,
            "start": 999,
            "end": 1007
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
                "start": 1021,
                "end": 1023
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1026,
                "end": 1027
              },
              "start": 1021,
              "end": 1027
            },
            "directive": null,
            "start": 1021,
            "end": 1028
          }
        ],
        "start": 143,
        "end": 1039
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 121,
      "end": 1039
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 1051,
        "end": 1059
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
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1072,
              "end": 1076
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1079,
                    "end": 1082
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1084,
                      "end": 1090
                    },
                    "start": 1082,
                    "end": 1090
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
                  "start": 1079,
                  "end": 1091
                }
              ],
              "start": 1077,
              "end": 1093
            },
            "abstract": false,
            "declare": false,
            "start": 1066,
            "end": 1093
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 1104,
              "end": 1111
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1120,
              "end": 1124
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1127,
                    "end": 1130
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1132,
                      "end": 1138
                    },
                    "start": 1130,
                    "end": 1138
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
                  "start": 1127,
                  "end": 1139
                }
              ],
              "start": 1125,
              "end": 1141
            },
            "abstract": false,
            "declare": false,
            "start": 1098,
            "end": 1141
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1152,
              "end": 1160
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1169,
              "end": 1173
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
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1176,
                    "end": 1179
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1181,
                      "end": 1187
                    },
                    "start": 1179,
                    "end": 1187
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
                  "start": 1176,
                  "end": 1188
                }
              ],
              "start": 1174,
              "end": 1190
            },
            "abstract": false,
            "declare": false,
            "start": 1146,
            "end": 1190
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1202,
              "end": 1203
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1206,
                    "end": 1209
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1211,
                        "end": 1215
                      },
                      "typeArguments": null,
                      "start": 1211,
                      "end": 1215
                    },
                    "start": 1209,
                    "end": 1215
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
                  "start": 1206,
                  "end": 1216
                }
              ],
              "start": 1204,
              "end": 1218
            },
            "abstract": false,
            "declare": false,
            "start": 1196,
            "end": 1218
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
              "start": 1229,
              "end": 1230
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1233,
                    "end": 1236
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1238,
                        "end": 1246
                      },
                      "typeArguments": null,
                      "start": 1238,
                      "end": 1246
                    },
                    "start": 1236,
                    "end": 1246
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
                  "start": 1233,
                  "end": 1247
                }
              ],
              "start": 1231,
              "end": 1249
            },
            "abstract": false,
            "declare": false,
            "start": 1223,
            "end": 1249
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
                        "start": 1269,
                        "end": 1270
                      },
                      "typeArguments": null,
                      "start": 1269,
                      "end": 1270
                    },
                    "start": 1267,
                    "end": 1270
                  },
                  "start": 1266,
                  "end": 1270
                },
                "init": null,
                "definite": false,
                "start": 1266,
                "end": 1270
              }
            ],
            "declare": true,
            "start": 1254,
            "end": 1271
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
                        "start": 1291,
                        "end": 1292
                      },
                      "typeArguments": null,
                      "start": 1291,
                      "end": 1292
                    },
                    "start": 1289,
                    "end": 1292
                  },
                  "start": 1288,
                  "end": 1292
                },
                "init": null,
                "definite": false,
                "start": 1288,
                "end": 1292
              }
            ],
            "declare": true,
            "start": 1276,
            "end": 1293
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1309,
              "end": 1311
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1314,
                    "end": 1317
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1319,
                        "end": 1323
                      },
                      "typeArguments": null,
                      "start": 1319,
                      "end": 1323
                    },
                    "start": 1317,
                    "end": 1323
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1314,
                  "end": 1324
                }
              ],
              "start": 1312,
              "end": 1326
            },
            "declare": false,
            "start": 1299,
            "end": 1326
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1341,
              "end": 1343
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1346,
                    "end": 1349
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1351,
                        "end": 1359
                      },
                      "typeArguments": null,
                      "start": 1351,
                      "end": 1359
                    },
                    "start": 1349,
                    "end": 1359
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1346,
                  "end": 1360
                }
              ],
              "start": 1344,
              "end": 1362
            },
            "declare": false,
            "start": 1331,
            "end": 1362
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
                        "start": 1383,
                        "end": 1385
                      },
                      "typeArguments": null,
                      "start": 1383,
                      "end": 1385
                    },
                    "start": 1381,
                    "end": 1385
                  },
                  "start": 1379,
                  "end": 1385
                },
                "init": null,
                "definite": false,
                "start": 1379,
                "end": 1385
              }
            ],
            "declare": true,
            "start": 1367,
            "end": 1386
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
                        "start": 1407,
                        "end": 1409
                      },
                      "typeArguments": null,
                      "start": 1407,
                      "end": 1409
                    },
                    "start": 1405,
                    "end": 1409
                  },
                  "start": 1403,
                  "end": 1409
                },
                "init": null,
                "definite": false,
                "start": 1403,
                "end": 1409
              }
            ],
            "declare": true,
            "start": 1391,
            "end": 1410
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1433,
                            "end": 1436
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1438,
                                "end": 1442
                              },
                              "typeArguments": null,
                              "start": 1438,
                              "end": 1442
                            },
                            "start": 1436,
                            "end": 1442
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1433,
                          "end": 1443
                        }
                      ],
                      "start": 1431,
                      "end": 1445
                    },
                    "start": 1429,
                    "end": 1445
                  },
                  "start": 1428,
                  "end": 1445
                },
                "init": null,
                "definite": false,
                "start": 1428,
                "end": 1445
              }
            ],
            "declare": true,
            "start": 1416,
            "end": 1445
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1467,
                            "end": 1470
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1472,
                                "end": 1480
                              },
                              "typeArguments": null,
                              "start": 1472,
                              "end": 1480
                            },
                            "start": 1470,
                            "end": 1480
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1467,
                          "end": 1481
                        }
                      ],
                      "start": 1465,
                      "end": 1483
                    },
                    "start": 1463,
                    "end": 1483
                  },
                  "start": 1462,
                  "end": 1483
                },
                "init": null,
                "definite": false,
                "start": 1462,
                "end": 1483
              }
            ],
            "declare": true,
            "start": 1450,
            "end": 1483
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
                  "start": 1493,
                  "end": 1495
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1500,
                        "end": 1503
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1509,
                          "end": 1513
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 1505,
                        "end": 1515
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1500,
                      "end": 1515
                    }
                  ],
                  "start": 1498,
                  "end": 1517
                },
                "definite": false,
                "start": 1493,
                "end": 1517
              }
            ],
            "declare": false,
            "start": 1489,
            "end": 1518
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
                  "start": 1527,
                  "end": 1529
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1534,
                        "end": 1537
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1543,
                          "end": 1551
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 1539,
                        "end": 1553
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1534,
                      "end": 1553
                    }
                  ],
                  "start": 1532,
                  "end": 1555
                },
                "definite": false,
                "start": 1527,
                "end": 1555
              }
            ],
            "declare": false,
            "start": 1523,
            "end": 1556
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
                "start": 1562,
                "end": 1563
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1566,
                "end": 1567
              },
              "start": 1562,
              "end": 1567
            },
            "directive": null,
            "start": 1562,
            "end": 1568
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
                "start": 1579,
                "end": 1580
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1583,
                "end": 1584
              },
              "start": 1579,
              "end": 1584
            },
            "directive": null,
            "start": 1579,
            "end": 1585
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
                "start": 1599,
                "end": 1600
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1603,
                "end": 1605
              },
              "start": 1599,
              "end": 1605
            },
            "directive": null,
            "start": 1599,
            "end": 1606
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
                "start": 1617,
                "end": 1618
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1621,
                "end": 1623
              },
              "start": 1617,
              "end": 1623
            },
            "directive": null,
            "start": 1617,
            "end": 1624
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
                "start": 1636,
                "end": 1638
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1641,
                "end": 1643
              },
              "start": 1636,
              "end": 1643
            },
            "directive": null,
            "start": 1636,
            "end": 1644
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
                "start": 1655,
                "end": 1657
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1660,
                "end": 1662
              },
              "start": 1655,
              "end": 1662
            },
            "directive": null,
            "start": 1655,
            "end": 1663
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
                "start": 1677,
                "end": 1679
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1682,
                "end": 1683
              },
              "start": 1677,
              "end": 1683
            },
            "directive": null,
            "start": 1677,
            "end": 1684
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
                "start": 1695,
                "end": 1697
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1700,
                "end": 1701
              },
              "start": 1695,
              "end": 1701
            },
            "directive": null,
            "start": 1695,
            "end": 1702
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
                "start": 1713,
                "end": 1715
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1718,
                "end": 1720
              },
              "start": 1713,
              "end": 1720
            },
            "directive": null,
            "start": 1713,
            "end": 1721
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
                "start": 1733,
                "end": 1734
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1737,
                "end": 1738
              },
              "start": 1733,
              "end": 1738
            },
            "directive": null,
            "start": 1733,
            "end": 1739
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
                "start": 1750,
                "end": 1751
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1754,
                "end": 1755
              },
              "start": 1750,
              "end": 1755
            },
            "directive": null,
            "start": 1750,
            "end": 1756
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
                "start": 1770,
                "end": 1771
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1774,
                "end": 1775
              },
              "start": 1770,
              "end": 1775
            },
            "directive": null,
            "start": 1770,
            "end": 1776
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
                "start": 1787,
                "end": 1788
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1791,
                "end": 1793
              },
              "start": 1787,
              "end": 1793
            },
            "directive": null,
            "start": 1787,
            "end": 1794
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
                "start": 1805,
                "end": 1806
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1809,
                "end": 1811
              },
              "start": 1805,
              "end": 1811
            },
            "directive": null,
            "start": 1805,
            "end": 1812
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
                "start": 1824,
                "end": 1826
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1829,
                "end": 1831
              },
              "start": 1824,
              "end": 1831
            },
            "directive": null,
            "start": 1824,
            "end": 1832
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
                "start": 1843,
                "end": 1845
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1848,
                "end": 1850
              },
              "start": 1843,
              "end": 1850
            },
            "directive": null,
            "start": 1843,
            "end": 1851
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
                "start": 1865,
                "end": 1867
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1870,
                "end": 1871
              },
              "start": 1865,
              "end": 1871
            },
            "directive": null,
            "start": 1865,
            "end": 1872
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
                "start": 1883,
                "end": 1885
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1888,
                "end": 1890
              },
              "start": 1883,
              "end": 1890
            },
            "directive": null,
            "start": 1883,
            "end": 1891
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
                "start": 1902,
                "end": 1904
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1907,
                "end": 1908
              },
              "start": 1902,
              "end": 1908
            },
            "directive": null,
            "start": 1902,
            "end": 1909
          }
        ],
        "start": 1060,
        "end": 1917
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1041,
      "end": 1917
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 121,
  "end": 1917
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 121,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "OnlyDerived",
    "start": 131,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 149,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 155,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 162,
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
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 181,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 187,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 195,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 210,
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
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 229,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 235,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 244,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 252,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 264,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 279,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 289,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 294,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 309,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 319,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 324,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 340,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 348,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 362,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 370,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 374,
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
    "value": "T",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 385,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 395,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 400,
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
    "value": "Derived",
    "start": 405,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 420,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 430,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 435,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 440,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "s2",
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
    "value": "S2",
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
    "start": 480,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 488,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 492,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 496,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 505,
    "end": 512
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 513,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 522,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 527,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 542,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 550,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 559,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 564,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 574,
    "end": 575
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 581,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 592,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 595,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 597,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 601,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "var",
    "start": 618,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 622,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 629,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 632,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 634,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 638,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 701,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 719,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 734,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 739,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 756,
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
    "value": "s2",
    "start": 761,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 778,
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
    "value": "t",
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
    "value": "s2",
    "start": 799,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 820,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 825,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 860,
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
    "value": "a",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 901,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 919,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 934,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 939,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 956,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 961,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 978,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 999,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1004,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1021,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1041,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "WithBase",
    "start": 1051,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1066,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1072,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1079,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1084,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "class",
    "start": 1098,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1104,
    "end": 1111
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1112,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1120,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1127,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1132,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1146,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1152,
    "end": 1160
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1161,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1169,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1176,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1181,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1196,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1206,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1211,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1223,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1233,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1238,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1254,
    "end": 1261
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1262,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1276,
    "end": 1283
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1284,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1299,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 1309,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1314,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1319,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1331,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1341,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1346,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1351,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1367,
    "end": 1374
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1375,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1379,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 1383,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1391,
    "end": 1398
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1399,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1403,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1407,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1416,
    "end": 1423
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1424,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1433,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1438,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1450,
    "end": 1457
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1458,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1467,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1472,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1489,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1493,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1500,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1505,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1509,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1523,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1527,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1534,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1539,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1543,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1603,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1621,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1636,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1641,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1655,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1660,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1677,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1695,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1713,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1718,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1791,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1809,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1824,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1829,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1843,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1848,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1865,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1883,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1888,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1902,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1916,
    "end": 1917
  }
]
```
