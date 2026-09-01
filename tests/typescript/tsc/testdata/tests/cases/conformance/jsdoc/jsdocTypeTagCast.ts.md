__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "W",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              },
              "start": 5,
              "end": 13
            },
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 15
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "W",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 18
          },
          "init": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 61,
            "end": 62
          },
          "definite": false,
          "start": 17,
          "end": 64
        }
      ],
      "declare": false,
      "start": 13,
      "end": 65
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
            "name": "W",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 72
          },
          "init": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 97,
            "end": 98
          },
          "definite": false,
          "start": 71,
          "end": 99
        }
      ],
      "declare": false,
      "start": 67,
      "end": 100
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
            "start": 132,
            "end": 133
          },
          "init": null,
          "definite": false,
          "start": 132,
          "end": 133
        }
      ],
      "declare": false,
      "start": 128,
      "end": 134
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
            "typeAnnotation": null,
            "start": 162,
            "end": 163
          },
          "init": null,
          "definite": false,
          "start": 162,
          "end": 163
        }
      ],
      "declare": false,
      "start": 158,
      "end": 164
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
            "start": 170,
            "end": 171
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 191,
              "end": 193
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 196,
              "end": 197
            },
            "start": 191,
            "end": 197
          },
          "definite": false,
          "start": 170,
          "end": 198
        }
      ],
      "declare": false,
      "start": 166,
      "end": 199
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
            "typeAnnotation": null,
            "start": 204,
            "end": 205
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 208,
              "end": 210
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 230,
              "end": 231
            },
            "start": 208,
            "end": 232
          },
          "definite": false,
          "start": 204,
          "end": 232
        }
      ],
      "declare": false,
      "start": 200,
      "end": 233
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 249
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
              "start": 256,
              "end": 267
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
                          "start": 280,
                          "end": 284
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 285,
                          "end": 286
                        },
                        "optional": false,
                        "computed": false,
                        "start": 280,
                        "end": 286
                      },
                      "right": {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 289,
                        "end": 291
                      },
                      "start": 280,
                      "end": 291
                    },
                    "directive": null,
                    "start": 280,
                    "end": 292
                  }
                ],
                "start": 270,
                "end": 298
              },
              "expression": false,
              "start": 267,
              "end": 298
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 256,
            "end": 298
          }
        ],
        "start": 250,
        "end": 300
      },
      "abstract": false,
      "declare": false,
      "start": 235,
      "end": 300
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeDerived",
        "optional": false,
        "typeAnnotation": null,
        "start": 307,
        "end": 318
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 327,
        "end": 335
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 353
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 366,
                        "end": 371
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 366,
                      "end": 373
                    },
                    "directive": null,
                    "start": 366,
                    "end": 374
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
                          "start": 383,
                          "end": 387
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 388,
                          "end": 389
                        },
                        "optional": false,
                        "computed": false,
                        "start": 383,
                        "end": 389
                      },
                      "right": {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 392,
                        "end": 394
                      },
                      "start": 383,
                      "end": 394
                    },
                    "directive": null,
                    "start": 383,
                    "end": 395
                  }
                ],
                "start": 356,
                "end": 401
              },
              "expression": false,
              "start": 353,
              "end": 401
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 342,
            "end": 401
          }
        ],
        "start": 336,
        "end": 403
      },
      "abstract": false,
      "declare": false,
      "start": 301,
      "end": 403
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeOther",
        "optional": false,
        "typeAnnotation": null,
        "start": 410,
        "end": 419
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
              "start": 426,
              "end": 437
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
                          "start": 450,
                          "end": 454
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "q",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 455,
                          "end": 456
                        },
                        "optional": false,
                        "computed": false,
                        "start": 450,
                        "end": 456
                      },
                      "right": {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 459,
                        "end": 461
                      },
                      "start": 450,
                      "end": 461
                    },
                    "directive": null,
                    "start": 450,
                    "end": 462
                  }
                ],
                "start": 440,
                "end": 468
              },
              "expression": false,
              "start": 437,
              "end": 468
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 426,
            "end": 468
          }
        ],
        "start": 420,
        "end": 470
      },
      "abstract": false,
      "declare": false,
      "start": 404,
      "end": 470
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeFakeClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 481,
        "end": 494
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 536,
                  "end": 540
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 541,
                  "end": 542
                },
                "optional": false,
                "computed": false,
                "start": 536,
                "end": 542
              },
              "right": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 545,
                "end": 550
              },
              "start": 536,
              "end": 550
            },
            "directive": null,
            "start": 536,
            "end": 551
          }
        ],
        "start": 497,
        "end": 553
      },
      "expression": false,
      "start": 472,
      "end": 553
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
            "name": "someBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 628,
            "end": 636
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SomeBase",
              "optional": false,
              "typeAnnotation": null,
              "start": 643,
              "end": 651
            },
            "typeArguments": null,
            "arguments": [],
            "start": 639,
            "end": 653
          },
          "definite": false,
          "start": 628,
          "end": 653
        }
      ],
      "declare": false,
      "start": 624,
      "end": 654
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
            "name": "someDerived",
            "optional": false,
            "typeAnnotation": null,
            "start": 659,
            "end": 670
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SomeDerived",
              "optional": false,
              "typeAnnotation": null,
              "start": 677,
              "end": 688
            },
            "typeArguments": null,
            "arguments": [],
            "start": 673,
            "end": 690
          },
          "definite": false,
          "start": 659,
          "end": 690
        }
      ],
      "declare": false,
      "start": 655,
      "end": 691
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
            "name": "someOther",
            "optional": false,
            "typeAnnotation": null,
            "start": 696,
            "end": 705
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SomeOther",
              "optional": false,
              "typeAnnotation": null,
              "start": 712,
              "end": 721
            },
            "typeArguments": null,
            "arguments": [],
            "start": 708,
            "end": 723
          },
          "definite": false,
          "start": 696,
          "end": 723
        }
      ],
      "declare": false,
      "start": 692,
      "end": 724
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
            "name": "someFakeClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 729,
            "end": 742
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SomeFakeClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 749,
              "end": 762
            },
            "typeArguments": null,
            "arguments": [],
            "start": 745,
            "end": 764
          },
          "definite": false,
          "start": 729,
          "end": 764
        }
      ],
      "declare": false,
      "start": 725,
      "end": 765
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 767,
          "end": 775
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null,
          "start": 802,
          "end": 813
        },
        "start": 767,
        "end": 814
      },
      "directive": null,
      "start": 767,
      "end": 815
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 816,
          "end": 824
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 851,
          "end": 859
        },
        "start": 816,
        "end": 860
      },
      "directive": null,
      "start": 816,
      "end": 861
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 862,
          "end": 870
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someOther",
          "optional": false,
          "typeAnnotation": null,
          "start": 897,
          "end": 906
        },
        "start": 862,
        "end": 907
      },
      "directive": null,
      "start": 862,
      "end": 908
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null,
          "start": 919,
          "end": 930
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null,
          "start": 960,
          "end": 971
        },
        "start": 919,
        "end": 972
      },
      "directive": null,
      "start": 919,
      "end": 973
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null,
          "start": 974,
          "end": 985
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 1015,
          "end": 1023
        },
        "start": 974,
        "end": 1024
      },
      "directive": null,
      "start": 974,
      "end": 1025
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null,
          "start": 1026,
          "end": 1037
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someOther",
          "optional": false,
          "typeAnnotation": null,
          "start": 1067,
          "end": 1076
        },
        "start": 1026,
        "end": 1077
      },
      "directive": null,
      "start": 1026,
      "end": 1078
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someOther",
          "optional": false,
          "typeAnnotation": null,
          "start": 1089,
          "end": 1098
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null,
          "start": 1126,
          "end": 1137
        },
        "start": 1089,
        "end": 1138
      },
      "directive": null,
      "start": 1089,
      "end": 1139
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someOther",
          "optional": false,
          "typeAnnotation": null,
          "start": 1149,
          "end": 1158
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 1186,
          "end": 1194
        },
        "start": 1149,
        "end": 1195
      },
      "directive": null,
      "start": 1149,
      "end": 1196
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someOther",
          "optional": false,
          "typeAnnotation": null,
          "start": 1206,
          "end": 1215
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someOther",
          "optional": false,
          "typeAnnotation": null,
          "start": 1243,
          "end": 1252
        },
        "start": 1206,
        "end": 1253
      },
      "directive": null,
      "start": 1206,
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
          "name": "someFakeClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1256,
          "end": 1269
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 1272,
          "end": 1280
        },
        "start": 1256,
        "end": 1280
      },
      "directive": null,
      "start": 1256,
      "end": 1281
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someFakeClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1282,
          "end": 1295
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null,
          "start": 1298,
          "end": 1309
        },
        "start": 1282,
        "end": 1309
      },
      "directive": null,
      "start": 1282,
      "end": 1310
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 1312,
          "end": 1320
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someFakeClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1323,
          "end": 1336
        },
        "start": 1312,
        "end": 1336
      },
      "directive": null,
      "start": 1312,
      "end": 1337
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 1347,
          "end": 1355
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someFakeClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1382,
          "end": 1395
        },
        "start": 1347,
        "end": 1396
      },
      "directive": null,
      "start": 1347,
      "end": 1397
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
            "name": "numOrStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 1484,
            "end": 1492
          },
          "init": null,
          "definite": false,
          "start": 1484,
          "end": 1492
        }
      ],
      "declare": false,
      "start": 1480,
      "end": 1493
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
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 1520,
            "end": 1523
          },
          "init": null,
          "definite": false,
          "start": 1520,
          "end": 1523
        }
      ],
      "declare": false,
      "start": 1516,
      "end": 1524
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numOrStr",
          "optional": false,
          "typeAnnotation": null,
          "start": 1562,
          "end": 1570
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 1575,
          "end": 1584
        },
        "start": 1562,
        "end": 1584
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 1599,
                "end": 1602
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrStr",
                "optional": false,
                "typeAnnotation": null,
                "start": 1605,
                "end": 1613
              },
              "start": 1599,
              "end": 1613
            },
            "directive": null,
            "start": 1599,
            "end": 1614
          }
        ],
        "start": 1587,
        "end": 1648
      },
      "alternate": null,
      "start": 1525,
      "end": 1648
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
            "name": "asConst1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1655,
            "end": 1663
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1687,
            "end": 1688
          },
          "definite": false,
          "start": 1655,
          "end": 1689
        }
      ],
      "declare": false,
      "start": 1651,
      "end": 1690
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
            "name": "asConst2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1695,
            "end": 1703
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1733,
                  "end": 1734
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1736,
                  "end": 1737
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1733,
                "end": 1737
              }
            ],
            "start": 1727,
            "end": 1739
          },
          "definite": false,
          "start": 1695,
          "end": 1740
        }
      ],
      "declare": false,
      "start": 1691,
      "end": 1741
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 13,
  "end": 1741
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 13,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 67,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 128,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 158,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 166,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 191,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 194,
    "end": 195
  },
  {
    "type": "Numeric",
    "value": "4",
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
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 200,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 208,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 235,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "SomeBase",
    "start": 241,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 256,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 280,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 287,
    "end": 288
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 289,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 301,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "SomeDerived",
    "start": 307,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 319,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "SomeBase",
    "start": 327,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 342,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 366,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 383,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 390,
    "end": 391
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 392,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 404,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "SomeOther",
    "start": 410,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 426,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 450,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 457,
    "end": 458
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 459,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 472,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "SomeFakeClass",
    "start": 481,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 536,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 543,
    "end": 544
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 545,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 624,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "someBase",
    "start": 628,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 637,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 639,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "SomeBase",
    "start": 643,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 653,
    "end": 654
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 655,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 659,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 671,
    "end": 672
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 673,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "SomeDerived",
    "start": 677,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 692,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "someOther",
    "start": 696,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 706,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 708,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "SomeOther",
    "start": 712,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 723,
    "end": 724
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 725,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "someFakeClass",
    "start": 729,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 743,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 745,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "SomeFakeClass",
    "start": 749,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "someBase",
    "start": 767,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 802,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "someBase",
    "start": 816,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "someBase",
    "start": 851,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "someBase",
    "start": 862,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "someOther",
    "start": 897,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 919,
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
    "value": "(",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 960,
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
    "value": ";",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 974,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "someBase",
    "start": 1015,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1026,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "someOther",
    "start": 1067,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "someOther",
    "start": 1089,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1126,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "someOther",
    "start": 1149,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "someBase",
    "start": 1186,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "someOther",
    "start": 1206,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "someOther",
    "start": 1243,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "someFakeClass",
    "start": 1256,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "someBase",
    "start": 1272,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "someFakeClass",
    "start": 1282,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "someDerived",
    "start": 1298,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "someBase",
    "start": 1312,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "someFakeClass",
    "start": 1323,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "someBase",
    "start": 1347,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "someFakeClass",
    "start": 1382,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1480,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "numOrStr",
    "start": 1484,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1516,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1520,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1525,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "numOrStr",
    "start": 1562,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1571,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1575,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1599,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "numOrStr",
    "start": 1605,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1651,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "asConst1",
    "start": 1655,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1691,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "asConst2",
    "start": 1695,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1740,
    "end": 1741
  }
]
```
