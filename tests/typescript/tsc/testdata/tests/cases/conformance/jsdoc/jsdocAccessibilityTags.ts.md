__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "priv",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 72
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 75,
              "end": 76
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 68,
            "end": 77
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prot",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 142
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 145,
              "end": 146
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 138,
            "end": 147
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pub",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 208
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 211,
              "end": 212
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 205,
            "end": 213
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ack",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 244
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 256,
                        "end": 260
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "priv",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 261,
                        "end": 265
                      },
                      "optional": false,
                      "computed": false,
                      "start": 256,
                      "end": 265
                    },
                    "start": 249,
                    "end": 265
                  }
                ],
                "start": 247,
                "end": 267
              },
              "expression": false,
              "start": 244,
              "end": 267
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 237,
            "end": 267
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ack",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 299
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                  "typeAnnotation": null,
                  "start": 300,
                  "end": 305
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 307,
                "end": 310
              },
              "expression": false,
              "start": 299,
              "end": 310
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 292,
            "end": 310
          }
        ],
        "start": 8,
        "end": 312
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 312
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 319,
        "end": 320
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 338
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 425,
                          "end": 429
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "priv2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 430,
                          "end": 435
                        },
                        "optional": false,
                        "computed": false,
                        "start": 425,
                        "end": 435
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 438,
                        "end": 439
                      },
                      "start": 425,
                      "end": 439
                    },
                    "directive": null,
                    "start": 425,
                    "end": 440
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 525,
                          "end": 529
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prot2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 530,
                          "end": 535
                        },
                        "optional": false,
                        "computed": false,
                        "start": 525,
                        "end": 535
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 538,
                        "end": 539
                      },
                      "start": 525,
                      "end": 539
                    },
                    "directive": null,
                    "start": 525,
                    "end": 540
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 622,
                          "end": 626
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pub2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 627,
                          "end": 631
                        },
                        "optional": false,
                        "computed": false,
                        "start": 622,
                        "end": 631
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 634,
                        "end": 635
                      },
                      "start": 622,
                      "end": 635
                    },
                    "directive": null,
                    "start": 622,
                    "end": 636
                  }
                ],
                "start": 341,
                "end": 642
              },
              "expression": false,
              "start": 338,
              "end": 642
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 327,
            "end": 642
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 647,
              "end": 648
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 660,
                        "end": 664
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "priv2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 665,
                        "end": 670
                      },
                      "optional": false,
                      "computed": false,
                      "start": 660,
                      "end": 670
                    },
                    "start": 653,
                    "end": 670
                  }
                ],
                "start": 651,
                "end": 672
              },
              "expression": false,
              "start": 648,
              "end": 672
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 647,
            "end": 672
          }
        ],
        "start": 321,
        "end": 674
      },
      "abstract": false,
      "declare": false,
      "start": 313,
      "end": 674
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 681,
        "end": 682
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 691,
        "end": 692
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 700
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 713,
                            "end": 717
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "priv",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 718,
                            "end": 722
                          },
                          "optional": false,
                          "computed": false,
                          "start": 713,
                          "end": 722
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 725,
                            "end": 729
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prot",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 730,
                            "end": 734
                          },
                          "optional": false,
                          "computed": false,
                          "start": 725,
                          "end": 734
                        },
                        "start": 713,
                        "end": 734
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 737,
                          "end": 741
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pub",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 742,
                          "end": 745
                        },
                        "optional": false,
                        "computed": false,
                        "start": 737,
                        "end": 745
                      },
                      "start": 713,
                      "end": 745
                    },
                    "directive": null,
                    "start": 713,
                    "end": 745
                  }
                ],
                "start": 703,
                "end": 751
              },
              "expression": false,
              "start": 700,
              "end": 751
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 699,
            "end": 751
          }
        ],
        "start": 693,
        "end": 753
      },
      "abstract": false,
      "declare": false,
      "start": 675,
      "end": 753
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
        "start": 760,
        "end": 761
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 770,
        "end": 771
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 778,
              "end": 779
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 792,
                            "end": 796
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "priv2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 797,
                            "end": 802
                          },
                          "optional": false,
                          "computed": false,
                          "start": 792,
                          "end": 802
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 805,
                            "end": 809
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prot2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 810,
                            "end": 815
                          },
                          "optional": false,
                          "computed": false,
                          "start": 805,
                          "end": 815
                        },
                        "start": 792,
                        "end": 815
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 818,
                          "end": 822
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pub2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 823,
                          "end": 827
                        },
                        "optional": false,
                        "computed": false,
                        "start": 818,
                        "end": 827
                      },
                      "start": 792,
                      "end": 827
                    },
                    "directive": null,
                    "start": 792,
                    "end": 827
                  }
                ],
                "start": 782,
                "end": 833
              },
              "expression": false,
              "start": 779,
              "end": 833
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 778,
            "end": 833
          }
        ],
        "start": 772,
        "end": 835
      },
      "abstract": false,
      "declare": false,
      "start": 754,
      "end": 835
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 840,
                "end": 841
              },
              "typeArguments": null,
              "arguments": [],
              "start": 836,
              "end": 843
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "priv",
              "optional": false,
              "typeAnnotation": null,
              "start": 844,
              "end": 848
            },
            "optional": false,
            "computed": false,
            "start": 836,
            "end": 848
          },
          "operator": "+",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 855,
                "end": 856
              },
              "typeArguments": null,
              "arguments": [],
              "start": 851,
              "end": 858
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prot",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 863
            },
            "optional": false,
            "computed": false,
            "start": 851,
            "end": 863
          },
          "start": 836,
          "end": 863
        },
        "operator": "+",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 870,
              "end": 871
            },
            "typeArguments": null,
            "arguments": [],
            "start": 866,
            "end": 873
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "pub",
            "optional": false,
            "typeAnnotation": null,
            "start": 874,
            "end": 877
          },
          "optional": false,
          "computed": false,
          "start": 866,
          "end": 877
        },
        "start": 836,
        "end": 877
      },
      "directive": null,
      "start": 836,
      "end": 877
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 882,
                "end": 883
              },
              "typeArguments": null,
              "arguments": [],
              "start": 878,
              "end": 885
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "priv",
              "optional": false,
              "typeAnnotation": null,
              "start": 886,
              "end": 890
            },
            "optional": false,
            "computed": false,
            "start": 878,
            "end": 890
          },
          "operator": "+",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 897,
                "end": 898
              },
              "typeArguments": null,
              "arguments": [],
              "start": 893,
              "end": 900
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prot",
              "optional": false,
              "typeAnnotation": null,
              "start": 901,
              "end": 905
            },
            "optional": false,
            "computed": false,
            "start": 893,
            "end": 905
          },
          "start": 878,
          "end": 905
        },
        "operator": "+",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 912,
              "end": 913
            },
            "typeArguments": null,
            "arguments": [],
            "start": 908,
            "end": 915
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "pub",
            "optional": false,
            "typeAnnotation": null,
            "start": 916,
            "end": 919
          },
          "optional": false,
          "computed": false,
          "start": 908,
          "end": 919
        },
        "start": 878,
        "end": 919
      },
      "directive": null,
      "start": 878,
      "end": 919
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 924,
                "end": 925
              },
              "typeArguments": null,
              "arguments": [],
              "start": 920,
              "end": 927
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "priv2",
              "optional": false,
              "typeAnnotation": null,
              "start": 928,
              "end": 933
            },
            "optional": false,
            "computed": false,
            "start": 920,
            "end": 933
          },
          "operator": "+",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 940,
                "end": 941
              },
              "typeArguments": null,
              "arguments": [],
              "start": 936,
              "end": 943
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prot2",
              "optional": false,
              "typeAnnotation": null,
              "start": 944,
              "end": 949
            },
            "optional": false,
            "computed": false,
            "start": 936,
            "end": 949
          },
          "start": 920,
          "end": 949
        },
        "operator": "+",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 956,
              "end": 957
            },
            "typeArguments": null,
            "arguments": [],
            "start": 952,
            "end": 959
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "pub2",
            "optional": false,
            "typeAnnotation": null,
            "start": 960,
            "end": 964
          },
          "optional": false,
          "computed": false,
          "start": 952,
          "end": 964
        },
        "start": 920,
        "end": 964
      },
      "directive": null,
      "start": 920,
      "end": 964
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 969,
                "end": 970
              },
              "typeArguments": null,
              "arguments": [],
              "start": 965,
              "end": 972
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "priv2",
              "optional": false,
              "typeAnnotation": null,
              "start": 973,
              "end": 978
            },
            "optional": false,
            "computed": false,
            "start": 965,
            "end": 978
          },
          "operator": "+",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 985,
                "end": 986
              },
              "typeArguments": null,
              "arguments": [],
              "start": 981,
              "end": 988
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prot2",
              "optional": false,
              "typeAnnotation": null,
              "start": 989,
              "end": 994
            },
            "optional": false,
            "computed": false,
            "start": 981,
            "end": 994
          },
          "start": 965,
          "end": 994
        },
        "operator": "+",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 1001,
              "end": 1002
            },
            "typeArguments": null,
            "arguments": [],
            "start": 997,
            "end": 1004
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "pub2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1005,
            "end": 1009
          },
          "optional": false,
          "computed": false,
          "start": 997,
          "end": 1009
        },
        "start": 965,
        "end": 1009
      },
      "directive": null,
      "start": 965,
      "end": 1009
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1009
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "priv",
    "start": 68,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "prot",
    "start": 138,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 143,
    "end": 144
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "pub",
    "start": 205,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 237,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "ack",
    "start": 241,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 249,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 256,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "priv",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 292,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "ack",
    "start": 296,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 300,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 313,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 327,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 425,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "priv2",
    "start": 430,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 436,
    "end": 437
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 525,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "prot2",
    "start": 530,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 536,
    "end": 537
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "value": "this",
    "start": 622,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "pub2",
    "start": 627,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 632,
    "end": 633
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 653,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 660,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "priv2",
    "start": 665,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 673,
    "end": 674
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 675,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 683,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 703,
    "end": 704
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 713,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "priv",
    "start": 718,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 723,
    "end": 724
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 725,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "prot",
    "start": 730,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 735,
    "end": 736
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 737,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "pub",
    "start": 742,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 752,
    "end": 753
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 754,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 760,
    "end": 761
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 762,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 779,
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
    "value": "{",
    "start": 782,
    "end": 783
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 792,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "priv2",
    "start": 797,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 803,
    "end": 804
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 805,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "prot2",
    "start": 810,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 816,
    "end": 817
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 818,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "pub2",
    "start": 823,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 834,
    "end": 835
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 836,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "priv",
    "start": 844,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 851,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "prot",
    "start": 859,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 864,
    "end": 865
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 866,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "pub",
    "start": 874,
    "end": 877
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 878,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "priv",
    "start": 886,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 891,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 893,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "prot",
    "start": 901,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 906,
    "end": 907
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 908,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "pub",
    "start": 916,
    "end": 919
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 920,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "value": ")",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "priv2",
    "start": 928,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 934,
    "end": 935
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 936,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "prot2",
    "start": 944,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 950,
    "end": 951
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 952,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "pub2",
    "start": 960,
    "end": 964
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 965,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "priv2",
    "start": 973,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 979,
    "end": 980
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 981,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "prot2",
    "start": 989,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 995,
    "end": 996
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 997,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "pub2",
    "start": 1005,
    "end": 1009
  }
]
```
