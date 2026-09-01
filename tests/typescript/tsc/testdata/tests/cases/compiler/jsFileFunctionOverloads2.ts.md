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
        "name": "getTypeName",
        "optional": false,
        "typeAnnotation": null,
        "start": 308,
        "end": 319
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
          "typeAnnotation": null,
          "start": 320,
          "end": 321
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 342
              },
              "prefix": true,
              "start": 334,
              "end": 342
            },
            "start": 327,
            "end": 343
          }
        ],
        "start": 323,
        "end": 345
      },
      "expression": false,
      "start": 299,
      "end": 345
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
            "name": "identity",
            "optional": false,
            "typeAnnotation": null,
            "start": 409,
            "end": 417
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
                "start": 420,
                "end": 421
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 425,
              "end": 426
            },
            "id": null,
            "generator": false,
            "start": 420,
            "end": 426
          },
          "definite": false,
          "start": 409,
          "end": 426
        }
      ],
      "declare": false,
      "start": 403,
      "end": 427
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flatMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 726,
        "end": 733
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
          "start": 734,
          "end": 739
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
            "start": 741,
            "end": 749
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "identity",
            "optional": false,
            "typeAnnotation": null,
            "start": 752,
            "end": 760
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 741,
          "end": 760
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
                  "start": 799,
                  "end": 805
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 808,
                  "end": 810
                },
                "definite": false,
                "start": 799,
                "end": 810
              }
            ],
            "declare": false,
            "start": 793,
            "end": 811
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
                    "start": 823,
                    "end": 824
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 827,
                    "end": 828
                  },
                  "definite": false,
                  "start": 823,
                  "end": 828
                }
              ],
              "declare": false,
              "start": 819,
              "end": 828
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 830,
                "end": 831
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
                  "start": 834,
                  "end": 839
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 840,
                  "end": 846
                },
                "optional": false,
                "computed": false,
                "start": 834,
                "end": 846
              },
              "start": 830,
              "end": 846
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
                "start": 848,
                "end": 849
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 853,
                "end": 854
              },
              "start": 848,
              "end": 854
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
                        "start": 862,
                        "end": 868
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 869,
                        "end": 873
                      },
                      "optional": false,
                      "computed": false,
                      "start": 862,
                      "end": 873
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
                            "start": 902,
                            "end": 910
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
                                "start": 911,
                                "end": 916
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 917,
                                "end": 918
                              },
                              "optional": false,
                              "computed": true,
                              "start": 911,
                              "end": 919
                            }
                          ],
                          "optional": false,
                          "start": 902,
                          "end": 920
                        },
                        "start": 874,
                        "end": 921
                      }
                    ],
                    "optional": false,
                    "start": 862,
                    "end": 922
                  },
                  "directive": null,
                  "start": 862,
                  "end": 923
                }
              ],
              "start": 856,
              "end": 927
            },
            "start": 814,
            "end": 927
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 937,
              "end": 943
            },
            "start": 930,
            "end": 944
          }
        ],
        "start": 762,
        "end": 946
      },
      "expression": false,
      "start": 717,
      "end": 946
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 299,
  "end": 946
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 299,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "getTypeName",
    "start": 308,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 327,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 334,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 403,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 409,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 422,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 717,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "flatMap",
    "start": 726,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 734,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 741,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 752,
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
    "value": "{",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 793,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 799,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 814,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 818,
    "end": 819
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 819,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 825,
    "end": 826
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 834,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 840,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 850,
    "end": 852
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 862,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 869,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 874,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 902,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 911,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 917,
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
    "value": ")",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 926,
    "end": 927
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 930,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 937,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 945,
    "end": 946
  }
]
```
