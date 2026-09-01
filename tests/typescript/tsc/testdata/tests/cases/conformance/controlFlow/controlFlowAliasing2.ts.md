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
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 66
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
              "name": "TestA",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 74
            },
            "typeArguments": null,
            "start": 69,
            "end": 74
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestB",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 82
            },
            "typeArguments": null,
            "start": 77,
            "end": 82
          }
        ],
        "start": 69,
        "end": 82
      },
      "declare": false,
      "start": 57,
      "end": 83
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestA",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 100
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 109
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 111,
                  "end": 114
                },
                "start": 111,
                "end": 114
              },
              "start": 109,
              "end": 114
            },
            "accessibility": null,
            "static": false,
            "start": 105,
            "end": 115
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
              "start": 118,
              "end": 122
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 124,
                "end": 130
              },
              "start": 122,
              "end": 130
            },
            "accessibility": null,
            "static": false,
            "start": 118,
            "end": 131
          }
        ],
        "start": 101,
        "end": 133
      },
      "declare": false,
      "start": 85,
      "end": 133
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestB",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 150
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 159
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 161,
                  "end": 164
                },
                "start": 161,
                "end": 164
              },
              "start": 159,
              "end": 164
            },
            "accessibility": null,
            "static": false,
            "start": 155,
            "end": 165
          },
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
              "start": 168,
              "end": 173
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 175,
                "end": 181
              },
              "start": 173,
              "end": 181
            },
            "accessibility": null,
            "static": false,
            "start": 168,
            "end": 182
          }
        ],
        "start": 151,
        "end": 184
      },
      "declare": false,
      "start": 135,
      "end": 184
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_tcb1",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 200
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
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
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 213
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 215,
                        "end": 219
                      },
                      "typeArguments": null,
                      "start": 215,
                      "end": 219
                    },
                    "start": 213,
                    "end": 219
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 209,
                  "end": 219
                }
              ],
              "start": 207,
              "end": 221
            },
            "start": 205,
            "end": 221
          },
          "start": 201,
          "end": 221
        }
      ],
      "returnType": null,
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
                  "name": "_t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 284
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 292,
                      "end": 296
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 298,
                      "end": 302
                    },
                    "optional": false,
                    "computed": false,
                    "start": 291,
                    "end": 302
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 305,
                    "end": 309
                  },
                  "optional": false,
                  "computed": false,
                  "start": 289,
                  "end": 309
                },
                "definite": false,
                "start": 281,
                "end": 311
              }
            ],
            "declare": false,
            "start": 275,
            "end": 312
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "_t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 322
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 327,
                "end": 330
              },
              "start": 319,
              "end": 330
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 343,
                        "end": 347
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 349,
                        "end": 353
                      },
                      "optional": false,
                      "computed": false,
                      "start": 342,
                      "end": 353
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 356,
                      "end": 360
                    },
                    "optional": false,
                    "computed": false,
                    "start": 340,
                    "end": 360
                  },
                  "directive": null,
                  "start": 338,
                  "end": 363
                }
              ],
              "start": 332,
              "end": 367
            },
            "alternate": null,
            "start": 315,
            "end": 367
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
                  "name": "_t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 421,
                  "end": 424
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 427,
                      "end": 431
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 432,
                      "end": 436
                    },
                    "optional": false,
                    "computed": false,
                    "start": 427,
                    "end": 436
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 437,
                    "end": 441
                  },
                  "optional": false,
                  "computed": false,
                  "start": 427,
                  "end": 441
                },
                "definite": false,
                "start": 421,
                "end": 441
              }
            ],
            "declare": false,
            "start": 415,
            "end": 442
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "_t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 452
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 457,
                "end": 460
              },
              "start": 449,
              "end": 460
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 473,
                        "end": 477
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 479,
                        "end": 483
                      },
                      "optional": false,
                      "computed": false,
                      "start": 472,
                      "end": 483
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 486,
                      "end": 490
                    },
                    "optional": false,
                    "computed": false,
                    "start": 470,
                    "end": 490
                  },
                  "directive": null,
                  "start": 468,
                  "end": 493
                }
              ],
              "start": 462,
              "end": 497
            },
            "alternate": null,
            "start": 445,
            "end": 497
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
                  "name": "testType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 561,
                  "end": 569
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 572,
                      "end": 576
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 577,
                      "end": 581
                    },
                    "optional": false,
                    "computed": false,
                    "start": 572,
                    "end": 581
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 582,
                    "end": 586
                  },
                  "optional": false,
                  "computed": false,
                  "start": 572,
                  "end": 586
                },
                "definite": false,
                "start": 561,
                "end": 586
              }
            ],
            "declare": false,
            "start": 555,
            "end": 587
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "testType",
                "optional": false,
                "typeAnnotation": null,
                "start": 594,
                "end": 602
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 607,
                "end": 610
              },
              "start": 594,
              "end": 610
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 618,
                        "end": 622
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 623,
                        "end": 627
                      },
                      "optional": false,
                      "computed": false,
                      "start": 618,
                      "end": 627
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 628,
                      "end": 632
                    },
                    "optional": false,
                    "computed": false,
                    "start": 618,
                    "end": 632
                  },
                  "directive": null,
                  "start": 618,
                  "end": 633
                }
              ],
              "start": 612,
              "end": 637
            },
            "alternate": null,
            "start": 590,
            "end": 637
          }
        ],
        "start": 223,
        "end": 639
      },
      "expression": false,
      "start": 186,
      "end": 639
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_tcb2",
        "optional": false,
        "typeAnnotation": null,
        "start": 650,
        "end": 655
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
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
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 664,
                    "end": 668
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 670,
                        "end": 674
                      },
                      "typeArguments": null,
                      "start": 670,
                      "end": 674
                    },
                    "start": 668,
                    "end": 674
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 664,
                  "end": 674
                }
              ],
              "start": 662,
              "end": 676
            },
            "start": 660,
            "end": 676
          },
          "start": 656,
          "end": 676
        }
      ],
      "returnType": null,
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
                  "name": "_t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 736,
                  "end": 739
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 747,
                      "end": 751
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 753,
                      "end": 757
                    },
                    "optional": false,
                    "computed": false,
                    "start": 746,
                    "end": 757
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 760,
                    "end": 764
                  },
                  "optional": false,
                  "computed": false,
                  "start": 744,
                  "end": 764
                },
                "definite": false,
                "start": 736,
                "end": 766
              }
            ],
            "declare": false,
            "start": 730,
            "end": 767
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 774,
                "end": 777
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "_t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 782,
                "end": 785
              },
              "start": 774,
              "end": 785
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 798,
                        "end": 802
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 804,
                        "end": 808
                      },
                      "optional": false,
                      "computed": false,
                      "start": 797,
                      "end": 808
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 811,
                      "end": 815
                    },
                    "optional": false,
                    "computed": false,
                    "start": 795,
                    "end": 815
                  },
                  "directive": null,
                  "start": 793,
                  "end": 818
                }
              ],
              "start": 787,
              "end": 822
            },
            "alternate": null,
            "start": 770,
            "end": 822
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
                  "name": "_t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 876,
                  "end": 879
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 882,
                      "end": 886
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 887,
                      "end": 891
                    },
                    "optional": false,
                    "computed": false,
                    "start": 882,
                    "end": 891
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 892,
                    "end": 896
                  },
                  "optional": false,
                  "computed": false,
                  "start": 882,
                  "end": 896
                },
                "definite": false,
                "start": 876,
                "end": 896
              }
            ],
            "declare": false,
            "start": 870,
            "end": 897
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 904,
                "end": 907
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "_t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 912,
                "end": 915
              },
              "start": 904,
              "end": 915
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 928,
                        "end": 932
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 934,
                        "end": 938
                      },
                      "optional": false,
                      "computed": false,
                      "start": 927,
                      "end": 938
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 941,
                      "end": 945
                    },
                    "optional": false,
                    "computed": false,
                    "start": 925,
                    "end": 945
                  },
                  "directive": null,
                  "start": 923,
                  "end": 948
                }
              ],
              "start": 917,
              "end": 952
            },
            "alternate": null,
            "start": 900,
            "end": 952
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
                  "name": "testType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1016,
                  "end": 1024
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 1027,
                      "end": 1031
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1032,
                      "end": 1036
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1027,
                    "end": 1036
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1037,
                    "end": 1041
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1027,
                  "end": 1041
                },
                "definite": false,
                "start": 1016,
                "end": 1041
              }
            ],
            "declare": false,
            "start": 1010,
            "end": 1042
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1049,
                "end": 1052
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "testType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1057,
                "end": 1065
              },
              "start": 1049,
              "end": 1065
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1073,
                        "end": 1077
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1078,
                        "end": 1082
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1073,
                      "end": 1082
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1083,
                      "end": 1087
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1073,
                    "end": 1087
                  },
                  "directive": null,
                  "start": 1073,
                  "end": 1088
                }
              ],
              "start": 1067,
              "end": 1092
            },
            "alternate": null,
            "start": 1045,
            "end": 1092
          }
        ],
        "start": 678,
        "end": 1094
      },
      "expression": false,
      "start": 641,
      "end": 1094
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_tcb3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1105,
        "end": 1110
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
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
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1119,
                    "end": 1123
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1125,
                        "end": 1129
                      },
                      "typeArguments": null,
                      "start": 1125,
                      "end": 1129
                    },
                    "start": 1123,
                    "end": 1129
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1119,
                  "end": 1129
                }
              ],
              "start": 1117,
              "end": 1131
            },
            "start": 1115,
            "end": 1131
          },
          "start": 1111,
          "end": 1131
        }
      ],
      "returnType": null,
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1145,
                        "end": 1149
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_t1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1151,
                        "end": 1154
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1145,
                      "end": 1154
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1143,
                  "end": 1156
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1164,
                    "end": 1168
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1170,
                    "end": 1174
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1163,
                  "end": 1174
                },
                "definite": false,
                "start": 1143,
                "end": 1178
              }
            ],
            "declare": false,
            "start": 1137,
            "end": 1179
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "_t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1186,
                "end": 1189
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1194,
                "end": 1197
              },
              "start": 1186,
              "end": 1197
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1210,
                        "end": 1214
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1216,
                        "end": 1220
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1209,
                      "end": 1220
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1223,
                      "end": 1227
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1207,
                    "end": 1227
                  },
                  "directive": null,
                  "start": 1205,
                  "end": 1230
                }
              ],
              "start": 1199,
              "end": 1234
            },
            "alternate": null,
            "start": 1182,
            "end": 1234
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1290,
                        "end": 1294
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_t2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1296,
                        "end": 1299
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1290,
                      "end": 1299
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1288,
                  "end": 1301
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1304,
                    "end": 1308
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1309,
                    "end": 1313
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1304,
                  "end": 1313
                },
                "definite": false,
                "start": 1288,
                "end": 1313
              }
            ],
            "declare": false,
            "start": 1282,
            "end": 1314
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "_t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1321,
                "end": 1324
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1329,
                "end": 1332
              },
              "start": 1321,
              "end": 1332
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1345,
                        "end": 1349
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1351,
                        "end": 1355
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1344,
                      "end": 1355
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1358,
                      "end": 1362
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1342,
                    "end": 1362
                  },
                  "directive": null,
                  "start": 1340,
                  "end": 1365
                }
              ],
              "start": 1334,
              "end": 1369
            },
            "alternate": null,
            "start": 1317,
            "end": 1369
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1435,
                        "end": 1439
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "testType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1441,
                        "end": 1449
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1435,
                      "end": 1449
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1433,
                  "end": 1451
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1454,
                    "end": 1458
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1459,
                    "end": 1463
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1454,
                  "end": 1463
                },
                "definite": false,
                "start": 1433,
                "end": 1463
              }
            ],
            "declare": false,
            "start": 1427,
            "end": 1464
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "testType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1471,
                "end": 1479
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1484,
                "end": 1487
              },
              "start": 1471,
              "end": 1487
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1495,
                        "end": 1499
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1500,
                        "end": 1504
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1495,
                      "end": 1504
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1505,
                      "end": 1509
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1495,
                    "end": 1509
                  },
                  "directive": null,
                  "start": 1495,
                  "end": 1510
                }
              ],
              "start": 1489,
              "end": 1514
            },
            "alternate": null,
            "start": 1467,
            "end": 1514
          }
        ],
        "start": 1133,
        "end": 1516
      },
      "expression": false,
      "start": 1096,
      "end": 1516
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_tcb4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1527,
        "end": 1532
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
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
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1541,
                    "end": 1545
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1547,
                        "end": 1551
                      },
                      "typeArguments": null,
                      "start": 1547,
                      "end": 1551
                    },
                    "start": 1545,
                    "end": 1551
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1541,
                  "end": 1551
                }
              ],
              "start": 1539,
              "end": 1553
            },
            "start": 1537,
            "end": 1553
          },
          "start": 1533,
          "end": 1553
        }
      ],
      "returnType": null,
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1567,
                        "end": 1571
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_t1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1573,
                        "end": 1576
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1567,
                      "end": 1576
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1565,
                  "end": 1578
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1586,
                    "end": 1590
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1592,
                    "end": 1596
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1585,
                  "end": 1596
                },
                "definite": false,
                "start": 1565,
                "end": 1600
              }
            ],
            "declare": false,
            "start": 1559,
            "end": 1601
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1608,
                "end": 1611
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "_t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1616,
                "end": 1619
              },
              "start": 1608,
              "end": 1619
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1632,
                        "end": 1636
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1638,
                        "end": 1642
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1631,
                      "end": 1642
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1645,
                      "end": 1649
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1629,
                    "end": 1649
                  },
                  "directive": null,
                  "start": 1627,
                  "end": 1652
                }
              ],
              "start": 1621,
              "end": 1656
            },
            "alternate": null,
            "start": 1604,
            "end": 1656
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1712,
                        "end": 1716
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_t2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1718,
                        "end": 1721
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1712,
                      "end": 1721
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1710,
                  "end": 1723
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1726,
                    "end": 1730
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1731,
                    "end": 1735
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1726,
                  "end": 1735
                },
                "definite": false,
                "start": 1710,
                "end": 1735
              }
            ],
            "declare": false,
            "start": 1704,
            "end": 1736
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1743,
                "end": 1746
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "_t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1751,
                "end": 1754
              },
              "start": 1743,
              "end": 1754
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1767,
                        "end": 1771
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1773,
                        "end": 1777
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1766,
                      "end": 1777
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1780,
                      "end": 1784
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1764,
                    "end": 1784
                  },
                  "directive": null,
                  "start": 1762,
                  "end": 1787
                }
              ],
              "start": 1756,
              "end": 1791
            },
            "alternate": null,
            "start": 1739,
            "end": 1791
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1857,
                        "end": 1861
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "testType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1863,
                        "end": 1871
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1857,
                      "end": 1871
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1855,
                  "end": 1873
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1876,
                    "end": 1880
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1881,
                    "end": 1885
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1876,
                  "end": 1885
                },
                "definite": false,
                "start": 1855,
                "end": 1885
              }
            ],
            "declare": false,
            "start": 1849,
            "end": 1886
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1893,
                "end": 1896
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "testType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1901,
                "end": 1909
              },
              "start": 1893,
              "end": 1909
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1917,
                        "end": 1921
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1922,
                        "end": 1926
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1917,
                      "end": 1926
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1927,
                      "end": 1931
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1917,
                    "end": 1931
                  },
                  "directive": null,
                  "start": 1917,
                  "end": 1932
                }
              ],
              "start": 1911,
              "end": 1936
            },
            "alternate": null,
            "start": 1889,
            "end": 1936
          }
        ],
        "start": 1555,
        "end": 1938
      },
      "expression": false,
      "start": 1518,
      "end": 1938
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1940,
      "end": 1950
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 1950
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 57,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "TestA",
    "start": 69,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "TestB",
    "start": 77,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 85,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "TestA",
    "start": 95,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 105,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 118,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 135,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "TestB",
    "start": 145,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 155,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 161,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 168,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 186,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "_tcb1",
    "start": 195,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 201,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 209,
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
    "value": "Test",
    "start": 215,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 275,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "_t1",
    "start": 281,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 292,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 298,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 305,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 315,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "_t1",
    "start": 319,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 323,
    "end": 326
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 327,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 343,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 349,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 356,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 415,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "_t2",
    "start": 421,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 427,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 432,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 437,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
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
    "value": "_t2",
    "start": 449,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 453,
    "end": 456
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 457,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 473,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 479,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 486,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 555,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "testType",
    "start": 561,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 572,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 577,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 582,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 590,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "testType",
    "start": 594,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 603,
    "end": 606
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 607,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 618,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 623,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 628,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 641,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "_tcb2",
    "start": 650,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 656,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 664,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 670,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 678,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 730,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "_t1",
    "start": 736,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 746,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 747,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 753,
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
    "value": ")",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 760,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 766,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 770,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 773,
    "end": 774
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 774,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 778,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "_t1",
    "start": 782,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 797,
    "end": 798
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 798,
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
    "value": ".",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 804,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 811,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 821,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 870,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "_t2",
    "start": 876,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 880,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 882,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 887,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 892,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 896,
    "end": 897
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 900,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 903,
    "end": 904
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 904,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 908,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "_t2",
    "start": 912,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 927,
    "end": 928
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 928,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 934,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 941,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 951,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1010,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "testType",
    "start": 1016,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1027,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1032,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1037,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1045,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1049,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1053,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "testType",
    "start": 1057,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1073,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1078,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1083,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1096,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "_tcb3",
    "start": 1105,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1111,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1119,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 1125,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1137,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1145,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "_t1",
    "start": 1151,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Keyword",
    "value": "this",
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
    "value": ".",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1170,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1182,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "_t1",
    "start": 1186,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1190,
    "end": 1193
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1194,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1210,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1216,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1223,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1282,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1290,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "_t2",
    "start": 1296,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "this",
    "start": 1304,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1309,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1317,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "_t2",
    "start": 1321,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1325,
    "end": 1328
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1329,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1345,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1351,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1358,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1427,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1435,
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
    "value": "testType",
    "start": 1441,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "this",
    "start": 1454,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1459,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1467,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "testType",
    "start": 1471,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1480,
    "end": 1483
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1484,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1495,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1500,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1505,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1518,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "_tcb4",
    "start": 1527,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1533,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1541,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 1547,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1559,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1567,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "_t1",
    "start": 1573,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1586,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1592,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1596,
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
    "value": ")",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "if",
    "start": 1604,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1608,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1612,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "_t1",
    "start": 1616,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1632,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1638,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1645,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1704,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1712,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "_t2",
    "start": 1718,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1726,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1731,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1739,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1743,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1747,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "_t2",
    "start": 1751,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1767,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1773,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1780,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1849,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1857,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "testType",
    "start": 1863,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1876,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1881,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1889,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1893,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1897,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "testType",
    "start": 1901,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1917,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1922,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1927,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1940,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1949,
    "end": 1950
  }
]
```
