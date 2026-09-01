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
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "IM1",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 19
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSVoidKeyword",
                  "start": 22,
                  "end": 26
                },
                "start": 22,
                "end": 28
              },
              "start": 21,
              "end": 28
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 16,
            "end": 29
          }
        ],
        "start": 13,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 41
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 55
          },
          "typeArguments": null,
          "start": 53,
          "end": 55
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "IM1",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 63
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSVoidKeyword",
                    "start": 66,
                    "end": 70
                  },
                  "start": 66,
                  "end": 72
                },
                "start": 65,
                "end": 72
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 81,
                      "end": 85
                    },
                    "start": 74,
                    "end": 86
                  }
                ],
                "start": 73,
                "end": 87
              },
              "expression": false,
              "start": 63,
              "end": 87
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 60,
            "end": 87
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1M1",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 93
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 96,
                      "end": 98
                    },
                    "typeArguments": null,
                    "start": 96,
                    "end": 98
                  },
                  "start": 96,
                  "end": 100
                },
                "start": 95,
                "end": 100
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 109,
                      "end": 113
                    },
                    "start": 102,
                    "end": 114
                  }
                ],
                "start": 101,
                "end": 115
              },
              "expression": false,
              "start": 93,
              "end": 115
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 89,
            "end": 115
          }
        ],
        "start": 56,
        "end": 118
      },
      "abstract": false,
      "declare": false,
      "start": 33,
      "end": 118
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 127
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 138
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2M1",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 149
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 152,
                      "end": 154
                    },
                    "typeArguments": null,
                    "start": 152,
                    "end": 154
                  },
                  "start": 152,
                  "end": 156
                },
                "start": 151,
                "end": 156
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 166,
                      "end": 170
                    },
                    "start": 159,
                    "end": 171
                  }
                ],
                "start": 157,
                "end": 172
              },
              "expression": false,
              "start": 149,
              "end": 172
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 145,
            "end": 172
          }
        ],
        "start": 139,
        "end": 174
      },
      "abstract": false,
      "declare": false,
      "start": 119,
      "end": 174
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 182,
        "end": 184
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "CM3M1",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 196
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 208,
                      "end": 209
                    },
                    "start": 201,
                    "end": 210
                  }
                ],
                "start": 199,
                "end": 211
              },
              "expression": false,
              "start": 196,
              "end": 211
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 191,
            "end": 211
          }
        ],
        "start": 185,
        "end": 213
      },
      "abstract": false,
      "declare": false,
      "start": 176,
      "end": 213
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 507,
                "end": 510
              },
              "start": 505,
              "end": 510
            },
            "start": 502,
            "end": 510
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 513,
            "end": 517
          },
          "definite": false,
          "start": 502,
          "end": 517
        }
      ],
      "declare": false,
      "start": 498,
      "end": 518
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 528,
                  "end": 530
                },
                "typeArguments": null,
                "start": 528,
                "end": 530
              },
              "start": 526,
              "end": 530
            },
            "start": 523,
            "end": 530
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 539
            },
            "typeArguments": null,
            "arguments": [],
            "start": 533,
            "end": 541
          },
          "definite": false,
          "start": 523,
          "end": 541
        }
      ],
      "declare": false,
      "start": 519,
      "end": 542
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
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 552,
                  "end": 554
                },
                "typeArguments": null,
                "start": 552,
                "end": 554
              },
              "start": 550,
              "end": 554
            },
            "start": 547,
            "end": 554
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 557,
            "end": 559
          },
          "definite": false,
          "start": 547,
          "end": 559
        }
      ],
      "declare": false,
      "start": 543,
      "end": 560
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 570,
                  "end": 572
                },
                "typeArguments": null,
                "start": 570,
                "end": 572
              },
              "start": 568,
              "end": 572
            },
            "start": 565,
            "end": 572
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 579,
              "end": 581
            },
            "typeArguments": null,
            "arguments": [],
            "start": 575,
            "end": 583
          },
          "definite": false,
          "start": 565,
          "end": 583
        }
      ],
      "declare": false,
      "start": 561,
      "end": 584
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 594,
                  "end": 596
                },
                "typeArguments": null,
                "start": 594,
                "end": 596
              },
              "start": 592,
              "end": 596
            },
            "start": 589,
            "end": 596
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null,
              "start": 603,
              "end": 605
            },
            "typeArguments": null,
            "arguments": [],
            "start": 599,
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 613,
            "end": 615
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
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 622
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 625,
                  "end": 626
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 619,
                "end": 626
              }
            ],
            "start": 618,
            "end": 627
          },
          "definite": false,
          "start": 613,
          "end": 627
        }
      ],
      "declare": false,
      "start": 609,
      "end": 628
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 633,
            "end": 635
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 663,
                      "end": 665
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 659,
                    "end": 667
                  },
                  "start": 652,
                  "end": 668
                }
              ],
              "start": 650,
              "end": 669
            },
            "expression": false,
            "start": 638,
            "end": 669
          },
          "definite": false,
          "start": 633,
          "end": 669
        }
      ],
      "declare": false,
      "start": 629,
      "end": 669
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
            "name": "arr_any",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 684,
                  "end": 687
                },
                "start": 684,
                "end": 689
              },
              "start": 682,
              "end": 689
            },
            "start": 675,
            "end": 689
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 692,
            "end": 694
          },
          "definite": false,
          "start": 675,
          "end": 694
        }
      ],
      "declare": false,
      "start": 671,
      "end": 695
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
            "name": "arr_i1",
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
                    "name": "I1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 708,
                    "end": 710
                  },
                  "typeArguments": null,
                  "start": 708,
                  "end": 710
                },
                "start": 708,
                "end": 712
              },
              "start": 706,
              "end": 712
            },
            "start": 700,
            "end": 712
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 715,
            "end": 717
          },
          "definite": false,
          "start": 700,
          "end": 717
        }
      ],
      "declare": false,
      "start": 696,
      "end": 718
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
            "name": "arr_c1",
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
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 731,
                    "end": 733
                  },
                  "typeArguments": null,
                  "start": 731,
                  "end": 733
                },
                "start": 731,
                "end": 735
              },
              "start": 729,
              "end": 735
            },
            "start": 723,
            "end": 735
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 738,
            "end": 740
          },
          "definite": false,
          "start": 723,
          "end": 740
        }
      ],
      "declare": false,
      "start": 719,
      "end": 741
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
            "name": "arr_c2",
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
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 754,
                    "end": 756
                  },
                  "typeArguments": null,
                  "start": 754,
                  "end": 756
                },
                "start": 754,
                "end": 758
              },
              "start": 752,
              "end": 758
            },
            "start": 746,
            "end": 758
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 761,
            "end": 763
          },
          "definite": false,
          "start": 746,
          "end": 763
        }
      ],
      "declare": false,
      "start": 742,
      "end": 764
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
            "name": "arr_i1_2",
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
                    "name": "I1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 779,
                    "end": 781
                  },
                  "typeArguments": null,
                  "start": 779,
                  "end": 781
                },
                "start": 779,
                "end": 783
              },
              "start": 777,
              "end": 783
            },
            "start": 769,
            "end": 783
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 786,
            "end": 788
          },
          "definite": false,
          "start": 769,
          "end": 788
        }
      ],
      "declare": false,
      "start": 765,
      "end": 789
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
            "name": "arr_c1_2",
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
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 804,
                    "end": 806
                  },
                  "typeArguments": null,
                  "start": 804,
                  "end": 806
                },
                "start": 804,
                "end": 808
              },
              "start": 802,
              "end": 808
            },
            "start": 794,
            "end": 808
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 811,
            "end": 813
          },
          "definite": false,
          "start": 794,
          "end": 813
        }
      ],
      "declare": false,
      "start": 790,
      "end": 814
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
            "name": "arr_c2_2",
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
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 829,
                    "end": 831
                  },
                  "typeArguments": null,
                  "start": 829,
                  "end": 831
                },
                "start": 829,
                "end": 833
              },
              "start": 827,
              "end": 833
            },
            "start": 819,
            "end": 833
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 836,
            "end": 838
          },
          "definite": false,
          "start": 819,
          "end": 838
        }
      ],
      "declare": false,
      "start": 815,
      "end": 839
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
            "name": "arr_c3",
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
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 852,
                    "end": 854
                  },
                  "typeArguments": null,
                  "start": 852,
                  "end": 854
                },
                "start": 852,
                "end": 856
              },
              "start": 850,
              "end": 856
            },
            "start": 844,
            "end": 856
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 859,
            "end": 861
          },
          "definite": false,
          "start": 844,
          "end": 861
        }
      ],
      "declare": false,
      "start": 840,
      "end": 862
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
            "name": "i1_error",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 878,
                  "end": 880
                },
                "typeArguments": null,
                "start": 878,
                "end": 880
              },
              "start": 876,
              "end": 880
            },
            "start": 868,
            "end": 880
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 883,
            "end": 885
          },
          "definite": false,
          "start": 868,
          "end": 885
        }
      ],
      "declare": false,
      "start": 864,
      "end": 886
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
            "name": "c1_error",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 928,
                  "end": 930
                },
                "typeArguments": null,
                "start": 928,
                "end": 930
              },
              "start": 926,
              "end": 930
            },
            "start": 918,
            "end": 930
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 933,
            "end": 935
          },
          "definite": false,
          "start": 918,
          "end": 935
        }
      ],
      "declare": false,
      "start": 914,
      "end": 936
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
            "name": "c2_error",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 978,
                  "end": 980
                },
                "typeArguments": null,
                "start": 978,
                "end": 980
              },
              "start": 976,
              "end": 980
            },
            "start": 968,
            "end": 980
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 983,
            "end": 985
          },
          "definite": false,
          "start": 968,
          "end": 985
        }
      ],
      "declare": false,
      "start": 964,
      "end": 986
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
            "name": "c3_error",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1028,
                  "end": 1030
                },
                "typeArguments": null,
                "start": 1028,
                "end": 1030
              },
              "start": 1026,
              "end": 1030
            },
            "start": 1018,
            "end": 1030
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 1033,
            "end": 1035
          },
          "definite": false,
          "start": 1018,
          "end": 1035
        }
      ],
      "declare": false,
      "start": 1014,
      "end": 1036
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 1066,
          "end": 1073
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1076,
          "end": 1082
        },
        "start": 1066,
        "end": 1082
      },
      "directive": null,
      "start": 1066,
      "end": 1083
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 1105,
          "end": 1112
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1115,
          "end": 1121
        },
        "start": 1105,
        "end": 1121
      },
      "directive": null,
      "start": 1105,
      "end": 1122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 1144,
          "end": 1151
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1154,
          "end": 1160
        },
        "start": 1144,
        "end": 1160
      },
      "directive": null,
      "start": 1144,
      "end": 1161
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 1183,
          "end": 1190
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1193,
          "end": 1199
        },
        "start": 1183,
        "end": 1199
      },
      "directive": null,
      "start": 1183,
      "end": 1200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1223,
          "end": 1229
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1232,
          "end": 1238
        },
        "start": 1223,
        "end": 1238
      },
      "directive": null,
      "start": 1223,
      "end": 1239
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1284,
          "end": 1290
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1293,
          "end": 1299
        },
        "start": 1284,
        "end": 1299
      },
      "directive": null,
      "start": 1284,
      "end": 1300
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1345,
          "end": 1351
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1354,
          "end": 1360
        },
        "start": 1345,
        "end": 1360
      },
      "directive": null,
      "start": 1345,
      "end": 1361
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1406,
          "end": 1412
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1415,
          "end": 1421
        },
        "start": 1406,
        "end": 1421
      },
      "directive": null,
      "start": 1406,
      "end": 1422
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1451,
          "end": 1457
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1460,
          "end": 1466
        },
        "start": 1451,
        "end": 1466
      },
      "directive": null,
      "start": 1451,
      "end": 1467
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1512,
          "end": 1518
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1521,
          "end": 1527
        },
        "start": 1512,
        "end": 1527
      },
      "directive": null,
      "start": 1512,
      "end": 1528
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1573,
          "end": 1579
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1582,
          "end": 1588
        },
        "start": 1573,
        "end": 1588
      },
      "directive": null,
      "start": 1573,
      "end": 1589
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1617,
          "end": 1623
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1626,
          "end": 1632
        },
        "start": 1617,
        "end": 1632
      },
      "directive": null,
      "start": 1617,
      "end": 1633
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1662,
          "end": 1668
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1671,
          "end": 1677
        },
        "start": 1662,
        "end": 1677
      },
      "directive": null,
      "start": 1662,
      "end": 1678
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1723,
          "end": 1729
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1732,
          "end": 1738
        },
        "start": 1723,
        "end": 1738
      },
      "directive": null,
      "start": 1723,
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
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1790,
          "end": 1796
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1799,
          "end": 1805
        },
        "start": 1790,
        "end": 1805
      },
      "directive": null,
      "start": 1790,
      "end": 1806
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1857,
          "end": 1863
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1866,
          "end": 1872
        },
        "start": 1857,
        "end": 1872
      },
      "directive": null,
      "start": 1857,
      "end": 1873
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2083,
          "end": 2089
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c2_2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2092,
          "end": 2100
        },
        "start": 2083,
        "end": 2100
      },
      "directive": null,
      "start": 2083,
      "end": 2101
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2129,
          "end": 2135
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c1_2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2138,
          "end": 2146
        },
        "start": 2129,
        "end": 2146
      },
      "directive": null,
      "start": 2129,
      "end": 2147
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2175,
          "end": 2181
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_i1_2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2184,
          "end": 2192
        },
        "start": 2175,
        "end": 2192
      },
      "directive": null,
      "start": 2175,
      "end": 2193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 2222,
          "end": 2229
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2232,
          "end": 2234
        },
        "start": 2222,
        "end": 2234
      },
      "directive": null,
      "start": 2222,
      "end": 2235
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 2263,
          "end": 2270
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2273,
          "end": 2275
        },
        "start": 2263,
        "end": 2275
      },
      "directive": null,
      "start": 2263,
      "end": 2276
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 2304,
          "end": 2311
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2314,
          "end": 2316
        },
        "start": 2304,
        "end": 2316
      },
      "directive": null,
      "start": 2304,
      "end": 2317
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 2339,
          "end": 2346
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2349,
          "end": 2351
        },
        "start": 2339,
        "end": 2351
      },
      "directive": null,
      "start": 2339,
      "end": 2352
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 2380,
          "end": 2387
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2390,
          "end": 2392
        },
        "start": 2380,
        "end": 2392
      },
      "directive": null,
      "start": 2380,
      "end": 2393
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 2421,
          "end": 2428
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2431,
          "end": 2433
        },
        "start": 2421,
        "end": 2433
      },
      "directive": null,
      "start": 2421,
      "end": 2434
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 2462,
          "end": 2469
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2472,
          "end": 2474
        },
        "start": 2462,
        "end": 2474
      },
      "directive": null,
      "start": 2462,
      "end": 2475
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2502
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
    "value": "I1",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "IM1",
    "start": 16,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 22,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 33,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 39,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 42,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 53,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "IM1",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 66,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 74,
    "end": 80
  },
  {
    "type": "Null",
    "value": "null",
    "start": 81,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "C1M1",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 96,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 102,
    "end": 108
  },
  {
    "type": "Null",
    "value": "null",
    "start": 109,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 119,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 125,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 128,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 136,
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
    "value": "C2M1",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 152,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 159,
    "end": 165
  },
  {
    "type": "Null",
    "value": "null",
    "start": 166,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 176,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 182,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "CM3M1",
    "start": 191,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 201,
    "end": 207
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 498,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 502,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 507,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 511,
    "end": 512
  },
  {
    "type": "Null",
    "value": "null",
    "start": 513,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 519,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 523,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 528,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 533,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 537,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 543,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 547,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 552,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 557,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 561,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 565,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 570,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 573,
    "end": 574
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 575,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "C2",
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
    "value": ";",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 585,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 589,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 594,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 599,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 603,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 609,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 613,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "one",
    "start": 619,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 623,
    "end": 624
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 627,
    "end": 628
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 629,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 633,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 636,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 638,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 650,
    "end": 651
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 652,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 659,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 663,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 668,
    "end": 669
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 671,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "arr_any",
    "start": 675,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 684,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "[",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 696,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "arr_i1",
    "start": 700,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 708,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 717,
    "end": 718
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 719,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "arr_c1",
    "start": 723,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 731,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 740,
    "end": 741
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 742,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "arr_c2",
    "start": 746,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 754,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "[",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 763,
    "end": 764
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 765,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "arr_i1_2",
    "start": 769,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 779,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "var",
    "start": 790,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "arr_c1_2",
    "start": 794,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 804,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 813,
    "end": 814
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 815,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "arr_c2_2",
    "start": 819,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 829,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": "=",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 840,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "arr_c3",
    "start": 844,
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
    "value": "C3",
    "start": 852,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 861,
    "end": 862
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 864,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "i1_error",
    "start": 868,
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
    "value": "I1",
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
    "type": "Punctuator",
    "value": "[",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "var",
    "start": 914,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "c1_error",
    "start": 918,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 928,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 935,
    "end": 936
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 964,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "c2_error",
    "start": 968,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "C2",
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
    "type": "Punctuator",
    "value": "[",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 985,
    "end": 986
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1014,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "c3_error",
    "start": 1018,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 1028,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "arr_any",
    "start": 1066,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "arr_i1",
    "start": 1076,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "arr_any",
    "start": 1105,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "arr_c1",
    "start": 1115,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "arr_any",
    "start": 1144,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "arr_c2",
    "start": 1154,
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
    "value": "arr_any",
    "start": 1183,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "arr_c3",
    "start": 1193,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "arr_i1",
    "start": 1223,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "arr_i1",
    "start": 1232,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "arr_i1",
    "start": 1284,
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
    "value": "arr_c1",
    "start": 1293,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "arr_i1",
    "start": 1345,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "arr_c2",
    "start": 1354,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "arr_i1",
    "start": 1406,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "arr_c3",
    "start": 1415,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "arr_c1",
    "start": 1451,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "arr_c1",
    "start": 1460,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "arr_c1",
    "start": 1512,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "arr_c2",
    "start": 1521,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "arr_c1",
    "start": 1573,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "arr_i1",
    "start": 1582,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "arr_c1",
    "start": 1617,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "arr_c3",
    "start": 1626,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "arr_c2",
    "start": 1662,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "arr_c2",
    "start": 1671,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "arr_c2",
    "start": 1723,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "arr_c1",
    "start": 1732,
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
    "value": "arr_c2",
    "start": 1790,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "arr_i1",
    "start": 1799,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "arr_c2",
    "start": 1857,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "arr_c3",
    "start": 1866,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "arr_c3",
    "start": 2083,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "arr_c2_2",
    "start": 2092,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "arr_c3",
    "start": 2129,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Identifier",
    "value": "arr_c1_2",
    "start": 2138,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "arr_c3",
    "start": 2175,
    "end": 2181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Identifier",
    "value": "arr_i1_2",
    "start": 2184,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Identifier",
    "value": "arr_any",
    "start": 2222,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2232,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Identifier",
    "value": "arr_any",
    "start": 2263,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 2273,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Identifier",
    "value": "arr_any",
    "start": 2304,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 2314,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "arr_any",
    "start": 2339,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2349,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Identifier",
    "value": "arr_any",
    "start": 2380,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2390,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "arr_any",
    "start": 2421,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 2431,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "arr_any",
    "start": 2462,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 2472,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2474,
    "end": 2475
  }
]
```
