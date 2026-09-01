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
        "name": "TargetIsPublic",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 141
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
              "start": 169,
              "end": 173
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
                    "start": 191,
                    "end": 194
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 196,
                      "end": 202
                    },
                    "start": 194,
                    "end": 202
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 184,
                  "end": 203
                }
              ],
              "start": 174,
              "end": 209
            },
            "abstract": false,
            "declare": false,
            "start": 163,
            "end": 209
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 226
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
                    "start": 237,
                    "end": 240
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 242,
                      "end": 248
                    },
                    "start": 240,
                    "end": 248
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 237,
                  "end": 249
                }
              ],
              "start": 227,
              "end": 255
            },
            "declare": false,
            "start": 215,
            "end": 255
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
                            "start": 278,
                            "end": 281
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 283,
                              "end": 289
                            },
                            "start": 281,
                            "end": 289
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 278,
                          "end": 290
                        }
                      ],
                      "start": 276,
                      "end": 292
                    },
                    "start": 274,
                    "end": 292
                  },
                  "start": 273,
                  "end": 292
                },
                "init": null,
                "definite": false,
                "start": 273,
                "end": 292
              }
            ],
            "declare": true,
            "start": 261,
            "end": 293
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
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 313,
                        "end": 317
                      },
                      "typeArguments": null,
                      "start": 313,
                      "end": 317
                    },
                    "start": 311,
                    "end": 317
                  },
                  "start": 310,
                  "end": 317
                },
                "init": null,
                "definite": false,
                "start": 310,
                "end": 317
              }
            ],
            "declare": true,
            "start": 298,
            "end": 318
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 338,
                        "end": 339
                      },
                      "typeArguments": null,
                      "start": 338,
                      "end": 339
                    },
                    "start": 336,
                    "end": 339
                  },
                  "start": 335,
                  "end": 339
                },
                "init": null,
                "definite": false,
                "start": 335,
                "end": 339
              }
            ],
            "declare": true,
            "start": 323,
            "end": 340
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 368
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
                    "start": 386,
                    "end": 389
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 391,
                      "end": 397
                    },
                    "start": 389,
                    "end": 397
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 379,
                  "end": 398
                }
              ],
              "start": 369,
              "end": 404
            },
            "abstract": false,
            "declare": false,
            "start": 361,
            "end": 404
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 416,
              "end": 417
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
                    "start": 436,
                    "end": 439
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 441,
                      "end": 447
                    },
                    "start": 439,
                    "end": 447
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 428,
                  "end": 448
                }
              ],
              "start": 418,
              "end": 454
            },
            "abstract": false,
            "declare": false,
            "start": 410,
            "end": 454
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 474,
                        "end": 475
                      },
                      "typeArguments": null,
                      "start": 474,
                      "end": 475
                    },
                    "start": 472,
                    "end": 475
                  },
                  "start": 471,
                  "end": 475
                },
                "init": null,
                "definite": false,
                "start": 471,
                "end": 475
              }
            ],
            "declare": true,
            "start": 459,
            "end": 476
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 496,
                        "end": 497
                      },
                      "typeArguments": null,
                      "start": 496,
                      "end": 497
                    },
                    "start": 494,
                    "end": 497
                  },
                  "start": 493,
                  "end": 497
                },
                "init": null,
                "definite": false,
                "start": 493,
                "end": 497
              }
            ],
            "declare": true,
            "start": 481,
            "end": 498
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
                "start": 504,
                "end": 505
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 508,
                "end": 509
              },
              "start": 504,
              "end": 509
            },
            "directive": null,
            "start": 504,
            "end": 510
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
                "start": 515,
                "end": 516
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 519,
                "end": 520
              },
              "start": 515,
              "end": 520
            },
            "directive": null,
            "start": 515,
            "end": 521
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
                "start": 526,
                "end": 527
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 530,
                "end": 531
              },
              "start": 526,
              "end": 531
            },
            "directive": null,
            "start": 526,
            "end": 532
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
                "start": 537,
                "end": 538
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 542
              },
              "start": 537,
              "end": 542
            },
            "directive": null,
            "start": 537,
            "end": 543
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
                "start": 558,
                "end": 559
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 562,
                "end": 563
              },
              "start": 558,
              "end": 563
            },
            "directive": null,
            "start": 558,
            "end": 564
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
                "start": 569,
                "end": 570
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 573,
                "end": 574
              },
              "start": 569,
              "end": 574
            },
            "directive": null,
            "start": 569,
            "end": 575
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
                "start": 580,
                "end": 581
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 584,
                "end": 585
              },
              "start": 580,
              "end": 585
            },
            "directive": null,
            "start": 580,
            "end": 586
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
                "start": 591,
                "end": 592
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 595,
                "end": 596
              },
              "start": 591,
              "end": 596
            },
            "directive": null,
            "start": 591,
            "end": 597
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 612,
                "end": 613
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 616,
                "end": 617
              },
              "start": 612,
              "end": 617
            },
            "directive": null,
            "start": 612,
            "end": 618
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 623,
                "end": 624
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 627,
                "end": 628
              },
              "start": 623,
              "end": 628
            },
            "directive": null,
            "start": 623,
            "end": 629
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 634,
                "end": 635
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 638,
                "end": 639
              },
              "start": 634,
              "end": 639
            },
            "directive": null,
            "start": 634,
            "end": 640
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 645,
                "end": 646
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 649,
                "end": 650
              },
              "start": 645,
              "end": 650
            },
            "directive": null,
            "start": 645,
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
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 666,
                "end": 667
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 670,
                "end": 671
              },
              "start": 666,
              "end": 671
            },
            "directive": null,
            "start": 666,
            "end": 672
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 677,
                "end": 678
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 688,
                "end": 689
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 692,
                "end": 693
              },
              "start": 688,
              "end": 693
            },
            "directive": null,
            "start": 688,
            "end": 694
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 699,
                "end": 700
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 703,
                "end": 704
              },
              "start": 699,
              "end": 704
            },
            "directive": null,
            "start": 699,
            "end": 705
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 720,
                "end": 721
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 724,
                "end": 725
              },
              "start": 720,
              "end": 725
            },
            "directive": null,
            "start": 720,
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
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 741,
                "end": 742
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 745,
                "end": 746
              },
              "start": 741,
              "end": 746
            },
            "directive": null,
            "start": 741,
            "end": 747
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 762,
                "end": 763
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 766,
                "end": 767
              },
              "start": 762,
              "end": 767
            },
            "directive": null,
            "start": 762,
            "end": 768
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 783,
                "end": 784
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 787,
                "end": 788
              },
              "start": 783,
              "end": 788
            },
            "directive": null,
            "start": 783,
            "end": 789
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 804,
                "end": 805
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 808,
                "end": 809
              },
              "start": 804,
              "end": 809
            },
            "directive": null,
            "start": 804,
            "end": 810
          }
        ],
        "start": 142,
        "end": 814
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 117,
      "end": 814
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TargetIsPublic",
        "optional": false,
        "typeAnnotation": null,
        "start": 826,
        "end": 840
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
              "start": 868,
              "end": 872
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
                    "start": 891,
                    "end": 894
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 896,
                      "end": 902
                    },
                    "start": 894,
                    "end": 902
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 883,
                  "end": 903
                }
              ],
              "start": 873,
              "end": 909
            },
            "abstract": false,
            "declare": false,
            "start": 862,
            "end": 909
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 925,
              "end": 926
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 935,
                  "end": 939
                },
                "typeArguments": null,
                "start": 935,
                "end": 939
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 940,
              "end": 947
            },
            "declare": false,
            "start": 915,
            "end": 947
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
                            "start": 970,
                            "end": 973
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 975,
                              "end": 981
                            },
                            "start": 973,
                            "end": 981
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 970,
                          "end": 982
                        }
                      ],
                      "start": 968,
                      "end": 984
                    },
                    "start": 966,
                    "end": 984
                  },
                  "start": 965,
                  "end": 984
                },
                "init": null,
                "definite": false,
                "start": 965,
                "end": 984
              }
            ],
            "declare": true,
            "start": 953,
            "end": 985
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
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1005,
                        "end": 1009
                      },
                      "typeArguments": null,
                      "start": 1005,
                      "end": 1009
                    },
                    "start": 1003,
                    "end": 1009
                  },
                  "start": 1002,
                  "end": 1009
                },
                "init": null,
                "definite": false,
                "start": 1002,
                "end": 1009
              }
            ],
            "declare": true,
            "start": 990,
            "end": 1010
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1030,
                        "end": 1031
                      },
                      "typeArguments": null,
                      "start": 1030,
                      "end": 1031
                    },
                    "start": 1028,
                    "end": 1031
                  },
                  "start": 1027,
                  "end": 1031
                },
                "init": null,
                "definite": false,
                "start": 1027,
                "end": 1031
              }
            ],
            "declare": true,
            "start": 1015,
            "end": 1032
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 1059,
              "end": 1060
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
                    "start": 1078,
                    "end": 1081
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1083,
                      "end": 1089
                    },
                    "start": 1081,
                    "end": 1089
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 1071,
                  "end": 1090
                }
              ],
              "start": 1061,
              "end": 1096
            },
            "abstract": false,
            "declare": false,
            "start": 1053,
            "end": 1096
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1108,
              "end": 1109
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
                    "start": 1128,
                    "end": 1131
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1133,
                      "end": 1139
                    },
                    "start": 1131,
                    "end": 1139
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 1120,
                  "end": 1140
                }
              ],
              "start": 1110,
              "end": 1146
            },
            "abstract": false,
            "declare": false,
            "start": 1102,
            "end": 1146
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1167,
                        "end": 1168
                      },
                      "typeArguments": null,
                      "start": 1167,
                      "end": 1168
                    },
                    "start": 1165,
                    "end": 1168
                  },
                  "start": 1164,
                  "end": 1168
                },
                "init": null,
                "definite": false,
                "start": 1164,
                "end": 1168
              }
            ],
            "declare": true,
            "start": 1152,
            "end": 1169
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1189,
                        "end": 1190
                      },
                      "typeArguments": null,
                      "start": 1189,
                      "end": 1190
                    },
                    "start": 1187,
                    "end": 1190
                  },
                  "start": 1186,
                  "end": 1190
                },
                "init": null,
                "definite": false,
                "start": 1186,
                "end": 1190
              }
            ],
            "declare": true,
            "start": 1174,
            "end": 1191
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
                "start": 1197,
                "end": 1198
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1201,
                "end": 1202
              },
              "start": 1197,
              "end": 1202
            },
            "directive": null,
            "start": 1197,
            "end": 1203
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
                "start": 1217,
                "end": 1218
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1221,
                "end": 1222
              },
              "start": 1217,
              "end": 1222
            },
            "directive": null,
            "start": 1217,
            "end": 1223
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
                "start": 1237,
                "end": 1238
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1241,
                "end": 1242
              },
              "start": 1237,
              "end": 1242
            },
            "directive": null,
            "start": 1237,
            "end": 1243
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
                "start": 1248,
                "end": 1249
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1252,
                "end": 1253
              },
              "start": 1248,
              "end": 1253
            },
            "directive": null,
            "start": 1248,
            "end": 1254
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
                "start": 1269,
                "end": 1270
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1273,
                "end": 1274
              },
              "start": 1269,
              "end": 1274
            },
            "directive": null,
            "start": 1269,
            "end": 1275
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
                "start": 1289,
                "end": 1290
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1293,
                "end": 1294
              },
              "start": 1289,
              "end": 1294
            },
            "directive": null,
            "start": 1289,
            "end": 1295
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
                "start": 1300,
                "end": 1301
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1304,
                "end": 1305
              },
              "start": 1300,
              "end": 1305
            },
            "directive": null,
            "start": 1300,
            "end": 1306
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
                "start": 1320,
                "end": 1321
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1324,
                "end": 1325
              },
              "start": 1320,
              "end": 1325
            },
            "directive": null,
            "start": 1320,
            "end": 1326
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
                "start": 1340,
                "end": 1341
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1356,
                "end": 1357
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1360,
                "end": 1361
              },
              "start": 1356,
              "end": 1361
            },
            "directive": null,
            "start": 1356,
            "end": 1362
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1376,
                "end": 1377
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1380,
                "end": 1381
              },
              "start": 1376,
              "end": 1381
            },
            "directive": null,
            "start": 1376,
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
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1387,
                "end": 1388
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1391,
                "end": 1392
              },
              "start": 1387,
              "end": 1392
            },
            "directive": null,
            "start": 1387,
            "end": 1393
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1407,
                "end": 1408
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1411,
                "end": 1412
              },
              "start": 1407,
              "end": 1412
            },
            "directive": null,
            "start": 1407,
            "end": 1413
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1427,
                "end": 1428
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1431,
                "end": 1432
              },
              "start": 1427,
              "end": 1432
            },
            "directive": null,
            "start": 1427,
            "end": 1433
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1439,
                "end": 1440
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1443,
                "end": 1444
              },
              "start": 1439,
              "end": 1444
            },
            "directive": null,
            "start": 1439,
            "end": 1445
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1450,
                "end": 1451
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1454,
                "end": 1455
              },
              "start": 1450,
              "end": 1455
            },
            "directive": null,
            "start": 1450,
            "end": 1456
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1470,
                "end": 1471
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1474,
                "end": 1475
              },
              "start": 1470,
              "end": 1475
            },
            "directive": null,
            "start": 1470,
            "end": 1476
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1490,
                "end": 1491
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1494,
                "end": 1495
              },
              "start": 1490,
              "end": 1495
            },
            "directive": null,
            "start": 1490,
            "end": 1496
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1511,
                "end": 1512
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1515,
                "end": 1516
              },
              "start": 1511,
              "end": 1516
            },
            "directive": null,
            "start": 1511,
            "end": 1517
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1532,
                "end": 1533
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1536,
                "end": 1537
              },
              "start": 1532,
              "end": 1537
            },
            "directive": null,
            "start": 1532,
            "end": 1538
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1553,
                "end": 1554
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1557,
                "end": 1558
              },
              "start": 1553,
              "end": 1558
            },
            "directive": null,
            "start": 1553,
            "end": 1559
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1574,
                "end": 1575
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1578,
                "end": 1579
              },
              "start": 1574,
              "end": 1579
            },
            "directive": null,
            "start": 1574,
            "end": 1580
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1595,
                "end": 1596
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1599,
                "end": 1600
              },
              "start": 1595,
              "end": 1600
            },
            "directive": null,
            "start": 1595,
            "end": 1601
          }
        ],
        "start": 841,
        "end": 1604
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 816,
      "end": 1604
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 117,
  "end": 1604
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 117,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "TargetIsPublic",
    "start": 127,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 163,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 184,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 191,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 196,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 215,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 237,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 242,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 261,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 269,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 278,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 283,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "declare",
    "start": 298,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 306,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 313,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 323,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 331,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 361,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "D",
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
    "type": "Keyword",
    "value": "public",
    "start": 379,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 386,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 391,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 410,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 428,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 436,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 441,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 459,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 467,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "d",
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
    "value": "D",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
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
    "value": "e",
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
    "type": "Identifier",
    "value": "E",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "d",
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
    "type": "Identifier",
    "value": "b",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "e",
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
    "value": "d",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "d",
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
    "value": "b",
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
    "value": "d",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 720,
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
    "value": "a",
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
    "value": "e",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 816,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "TargetIsPublic",
    "start": 826,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 841,
    "end": 842
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 862,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 868,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 873,
    "end": 874
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 883,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 891,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 896,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 908,
    "end": 909
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 915,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 925,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 927,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 935,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 953,
    "end": 960
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 961,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 970,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 975,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "declare",
    "start": 990,
    "end": 997
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 998,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1005,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1015,
    "end": 1022
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1023,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1053,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1071,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1078,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1083,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1102,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1120,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1128,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1133,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1152,
    "end": 1159
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1160,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1174,
    "end": 1181
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1182,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "b",
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
    "value": "i",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1380,
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
    "value": "i",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1407,
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
    "value": "e",
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
    "type": "Identifier",
    "value": "i",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1603,
    "end": 1604
  }
]
```
