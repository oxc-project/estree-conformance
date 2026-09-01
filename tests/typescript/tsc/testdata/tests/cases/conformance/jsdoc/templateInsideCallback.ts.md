__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "identity",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 207
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 211
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 216
            },
            "id": null,
            "generator": false,
            "start": 210,
            "end": 216
          },
          "definite": false,
          "start": 199,
          "end": 216
        }
      ],
      "declare": false,
      "start": 193,
      "end": 217
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flatMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 667,
        "end": 674
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": null,
          "start": 675,
          "end": 680
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "iterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 682,
            "end": 690
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "identity",
            "optional": false,
            "typeAnnotation": null,
            "start": 693,
            "end": 701
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 682,
          "end": 701
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
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 740,
                  "end": 746
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 749,
                  "end": 751
                },
                "definite": false,
                "start": 740,
                "end": 751
              }
            ],
            "declare": false,
            "start": 734,
            "end": 752
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 764,
                    "end": 765
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 768,
                    "end": 769
                  },
                  "definite": false,
                  "start": 764,
                  "end": 769
                }
              ],
              "declare": false,
              "start": 760,
              "end": 769
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 771,
                "end": 772
              },
              "operator": "<",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 780
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 781,
                  "end": 787
                },
                "optional": false,
                "computed": false,
                "start": 775,
                "end": 787
              },
              "start": 771,
              "end": 787
            },
            "update": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 789,
                "end": 790
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 794,
                "end": 795
              },
              "start": 789,
              "end": 795
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 803,
                        "end": 809
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 810,
                        "end": 814
                      },
                      "optional": false,
                      "computed": false,
                      "start": 803,
                      "end": 814
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "iterable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 843,
                            "end": 851
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "array",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 852,
                                "end": 857
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 858,
                                "end": 859
                              },
                              "optional": false,
                              "computed": true,
                              "start": 852,
                              "end": 860
                            }
                          ],
                          "optional": false,
                          "start": 843,
                          "end": 861
                        },
                        "start": 815,
                        "end": 862
                      }
                    ],
                    "optional": false,
                    "start": 803,
                    "end": 863
                  },
                  "directive": null,
                  "start": 803,
                  "end": 864
                }
              ],
              "start": 797,
              "end": 868
            },
            "start": 755,
            "end": 868
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 878,
              "end": 884
            },
            "start": 871,
            "end": 885
          }
        ],
        "start": 703,
        "end": 887
      },
      "expression": false,
      "start": 658,
      "end": 887
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 193,
  "end": 887
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 193,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 199,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 212,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 658,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "flatMap",
    "start": 667,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 675,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 682,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 693,
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
    "value": "const",
    "start": 734,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 740,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 755,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 760,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 766,
    "end": 767
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 775,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 781,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 791,
    "end": 793
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 803,
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
    "value": "push",
    "start": 810,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 815,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 843,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 852,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": ")",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 867,
    "end": 868
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 871,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 878,
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
  }
]
```
