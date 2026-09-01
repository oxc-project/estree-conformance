__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testcase",
        "optional": false,
        "typeAnnotation": null,
        "start": 522,
        "end": 530
      },
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 541,
                  "end": 544
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
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 548,
                        "end": 556
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
                                "value": 0,
                                "raw": "0",
                                "start": 576,
                                "end": 577
                              },
                              "start": 569,
                              "end": 577
                            }
                          ],
                          "start": 568,
                          "end": 578
                        },
                        "expression": false,
                        "start": 557,
                        "end": 578
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 548,
                      "end": 578
                    }
                  ],
                  "start": 547,
                  "end": 579
                },
                "definite": false,
                "start": 541,
                "end": 579
              }
            ],
            "declare": false,
            "start": 537,
            "end": 580
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
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 587,
                  "end": 590
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 593,
                  "end": 594
                },
                "definite": false,
                "start": 587,
                "end": 594
              }
            ],
            "declare": false,
            "start": 583,
            "end": 595
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
                  "name": "_float",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 602,
                  "end": 608
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 613,
                      "end": 614
                    },
                    "operator": "/",
                    "right": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 615,
                      "end": 616
                    },
                    "start": 613,
                    "end": 616
                  },
                  "prefix": true,
                  "start": 611,
                  "end": 617
                },
                "definite": false,
                "start": 602,
                "end": 617
              }
            ],
            "declare": false,
            "start": 598,
            "end": 618
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
                  "typeAnnotation": null,
                  "start": 625,
                  "end": 626
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 633,
                    "end": 638
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 639,
                      "end": 644
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 645,
                      "end": 654
                    },
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 655,
                      "end": 659
                    },
                    {
                      "type": "Literal",
                      "value": "0",
                      "raw": "\"0\"",
                      "start": 660,
                      "end": 663
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 664,
                      "end": 667
                    },
                    {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 1.3333333333333,
                        "raw": "1.3333333333333",
                        "start": 669,
                        "end": 684
                      },
                      "prefix": true,
                      "start": 668,
                      "end": 684
                    },
                    {
                      "type": "Literal",
                      "value": "str",
                      "raw": "\"str\"",
                      "start": 686,
                      "end": 691
                    },
                    {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 693,
                        "end": 694
                      },
                      "prefix": true,
                      "start": 692,
                      "end": 694
                    },
                    {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 695,
                      "end": 699
                    },
                    {
                      "type": "UnaryExpression",
                      "operator": "+",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 701,
                        "end": 702
                      },
                      "prefix": true,
                      "start": 700,
                      "end": 702
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "one",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 704,
                      "end": 707
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 709,
                      "end": 710
                    },
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 711,
                      "end": 712
                    },
                    {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 714,
                      "end": 719
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_float",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 721,
                      "end": 727
                    },
                    {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 731,
                          "end": 732
                        },
                        "operator": "/",
                        "right": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 733,
                          "end": 734
                        },
                        "start": 731,
                        "end": 734
                      },
                      "prefix": true,
                      "start": 729,
                      "end": 735
                    }
                  ],
                  "start": 629,
                  "end": 736
                },
                "definite": false,
                "start": 625,
                "end": 736
              }
            ],
            "declare": false,
            "start": 621,
            "end": 737
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 744,
                          "end": 745
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "indexOf",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 746,
                          "end": 753
                        },
                        "optional": false,
                        "computed": false,
                        "start": 744,
                        "end": 753
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Literal",
                              "value": 4,
                              "raw": "4",
                              "start": 756,
                              "end": 757
                            },
                            "operator": "/",
                            "right": {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 758,
                              "end": 759
                            },
                            "start": 756,
                            "end": 759
                          },
                          "prefix": true,
                          "start": 754,
                          "end": 760
                        }
                      ],
                      "optional": false,
                      "start": 744,
                      "end": 761
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": 14,
                      "raw": "14",
                      "start": 766,
                      "end": 768
                    },
                    "start": 744,
                    "end": 768
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 808,
                          "end": 809
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "indexOf",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 810,
                          "end": 817
                        },
                        "optional": false,
                        "computed": false,
                        "start": 808,
                        "end": 817
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 818,
                          "end": 819
                        }
                      ],
                      "optional": false,
                      "start": 808,
                      "end": 820
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": 7,
                      "raw": "7",
                      "start": 825,
                      "end": 826
                    },
                    "start": 808,
                    "end": 826
                  },
                  "start": 744,
                  "end": 826
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 868,
                        "end": 869
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "indexOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 870,
                        "end": 877
                      },
                      "optional": false,
                      "computed": false,
                      "start": 868,
                      "end": 877
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 879,
                          "end": 880
                        },
                        "prefix": true,
                        "start": 878,
                        "end": 880
                      }
                    ],
                    "optional": false,
                    "start": 868,
                    "end": 881
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 886,
                    "end": 887
                  },
                  "start": 868,
                  "end": 887
                },
                "start": 744,
                "end": 887
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 928,
                      "end": 929
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "indexOf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 930,
                      "end": 937
                    },
                    "optional": false,
                    "computed": false,
                    "start": 928,
                    "end": 937
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 938,
                      "end": 939
                    }
                  ],
                  "optional": false,
                  "start": 928,
                  "end": 940
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 945,
                  "end": 947
                },
                "start": 928,
                "end": 947
              },
              "start": 744,
              "end": 947
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 995,
                    "end": 999
                  },
                  "start": 988,
                  "end": 1000
                }
              ],
              "start": 982,
              "end": 1004
            },
            "alternate": null,
            "start": 740,
            "end": 1004
          }
        ],
        "start": 533,
        "end": 1007
      },
      "expression": false,
      "start": 513,
      "end": 1007
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "runTestCase",
          "optional": false,
          "typeAnnotation": null,
          "start": 1008,
          "end": 1019
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "testcase",
            "optional": false,
            "typeAnnotation": null,
            "start": 1020,
            "end": 1028
          }
        ],
        "optional": false,
        "start": 1008,
        "end": 1029
      },
      "directive": null,
      "start": 1008,
      "end": 1030
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 513,
  "end": 1030
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 513,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "testcase",
    "start": 522,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 533,
    "end": 534
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 537,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 541,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "toString",
    "start": 548,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 556,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 557,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 568,
    "end": 569
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 569,
    "end": 575
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 583,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 587,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 591,
    "end": 592
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 598,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "_float",
    "start": 602,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 612,
    "end": 613
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 614,
    "end": 615
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "var",
    "start": 621,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 627,
    "end": 628
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 629,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 633,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 639,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 645,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 654,
    "end": 655
  },
  {
    "type": "Null",
    "value": "null",
    "start": 655,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 659,
    "end": 660
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 660,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 664,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 668,
    "end": 669
  },
  {
    "type": "Numeric",
    "value": "1.3333333333333",
    "start": 669,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 684,
    "end": 685
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 686,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 692,
    "end": 693
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 694,
    "end": 695
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 695,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 700,
    "end": 701
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 704,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 707,
    "end": 708
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 710,
    "end": 711
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 712,
    "end": 713
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 714,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "_float",
    "start": 721,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 732,
    "end": 733
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 740,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "indexOf",
    "start": 746,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 755,
    "end": 756
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 757,
    "end": 758
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 762,
    "end": 765
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 766,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 769,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 808,
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
    "value": "indexOf",
    "start": 810,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 817,
    "end": 818
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 821,
    "end": 824
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 832,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "indexOf",
    "start": 870,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 878,
    "end": 879
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 882,
    "end": 885
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 893,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "indexOf",
    "start": 930,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 937,
    "end": 938
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "===",
    "start": 941,
    "end": 944
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 945,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 982,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 988,
    "end": 994
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 995,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "runTestCase",
    "start": 1008,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "testcase",
    "start": 1020,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  }
]
```
