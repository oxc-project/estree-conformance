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
        "name": "BaseErrClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 18
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
              "start": 25,
              "end": 36
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 40,
                      "end": 43
                    },
                    "start": 38,
                    "end": 43
                  },
                  "start": 37,
                  "end": 43
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 45,
                "end": 48
              },
              "expression": false,
              "start": 36,
              "end": 48
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 25,
            "end": 48
          }
        ],
        "start": 19,
        "end": 50
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassWithNoInitializer",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 80
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseErrClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 101
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
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 109
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 108,
            "end": 110
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 162
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
                        "start": 175,
                        "end": 180
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 181,
                          "end": 185
                        }
                      ],
                      "optional": false,
                      "start": 175,
                      "end": 186
                    },
                    "directive": null,
                    "start": 175,
                    "end": 187
                  }
                ],
                "start": 165,
                "end": 252
              },
              "expression": false,
              "start": 162,
              "end": 252
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 151,
            "end": 252
          }
        ],
        "start": 102,
        "end": 254
      },
      "abstract": false,
      "declare": false,
      "start": 52,
      "end": 254
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassWithInitializer",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 282
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseErrClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 291,
        "end": 303
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
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 311
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 314,
              "end": 315
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 310,
            "end": 316
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 357,
              "end": 368
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
                        "start": 381,
                        "end": 386
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 387,
                          "end": 391
                        }
                      ],
                      "optional": false,
                      "start": 381,
                      "end": 392
                    },
                    "directive": null,
                    "start": 381,
                    "end": 393
                  }
                ],
                "start": 371,
                "end": 408
              },
              "expression": false,
              "start": 368,
              "end": 408
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 357,
            "end": 408
          }
        ],
        "start": 304,
        "end": 410
      },
      "abstract": false,
      "declare": false,
      "start": 256,
      "end": 410
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 422,
        "end": 423
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 466,
                  "end": 467
                },
                "init": {
                  "type": "ThisExpression",
                  "start": 470,
                  "end": 474
                },
                "definite": false,
                "start": 466,
                "end": 474
              }
            ],
            "declare": false,
            "start": 462,
            "end": 475
          }
        ],
        "start": 424,
        "end": 486
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 412,
      "end": 486
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genericFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 611,
        "end": 622
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 623,
              "end": 624
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 623,
            "end": 624
          }
        ],
        "start": 622,
        "end": 625
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 629,
                "end": 630
              },
              "typeArguments": null,
              "start": 629,
              "end": 630
            },
            "start": 627,
            "end": 630
          },
          "start": 626,
          "end": 630
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 632,
        "end": 635
      },
      "expression": false,
      "start": 602,
      "end": 635
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "genericFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 636,
          "end": 647
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSThisType",
              "start": 648,
              "end": 652
            }
          ],
          "start": 647,
          "end": 653
        },
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 654,
            "end": 663
          }
        ],
        "optional": false,
        "start": 636,
        "end": 664
      },
      "directive": null,
      "start": 636,
      "end": 665
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ErrClass3",
        "optional": false,
        "typeAnnotation": null,
        "start": 696,
        "end": 705
      },
      "typeParameters": null,
      "superClass": {
        "type": "ThisExpression",
        "start": 714,
        "end": 718
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 719,
        "end": 723
      },
      "abstract": false,
      "declare": false,
      "start": 690,
      "end": 723
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 764,
        "end": 772
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 779,
              "end": 780
            },
            "initializer": {
              "type": "ThisExpression",
              "start": 783,
              "end": 787
            },
            "computed": false,
            "start": 779,
            "end": 787
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 818,
              "end": 819
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 822,
                "end": 826
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "spaaaace",
                "optional": false,
                "typeAnnotation": null,
                "start": 827,
                "end": 835
              },
              "optional": false,
              "computed": false,
              "start": 822,
              "end": 835
            },
            "computed": false,
            "start": 818,
            "end": 835
          }
        ],
        "start": 773,
        "end": 867
      },
      "const": false,
      "declare": false,
      "start": 759,
      "end": 867
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "ThisExpression",
        "start": 878,
        "end": 882
      },
      "start": 869,
      "end": 883
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 905
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
    "value": "BaseErrClass",
    "start": 6,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 25,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 52,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "ClassWithNoInitializer",
    "start": 58,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 81,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "BaseErrClass",
    "start": 89,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 151,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 175,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 181,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 256,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "ClassWithInitializer",
    "start": 262,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 283,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "BaseErrClass",
    "start": 291,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 312,
    "end": 313
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 357,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 371,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 381,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 387,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 412,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 462,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 470,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 485,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 602,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "genericFunc",
    "start": 611,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "genericFunc",
    "start": 636,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 647,
    "end": 648
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 648,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 654,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 664,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 690,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "ErrClass3",
    "start": 696,
    "end": 705
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 706,
    "end": 713
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 714,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 722,
    "end": 723
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 759,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "SomeEnum",
    "start": 764,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "type": "Keyword",
    "value": "this",
    "start": 783,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 820,
    "end": 821
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 822,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "spaaaace",
    "start": 827,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 866,
    "end": 867
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 869,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 876,
    "end": 877
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 878,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 882,
    "end": 883
  }
]
```
