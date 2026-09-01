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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 64
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 65,
        "end": 67
      },
      "abstract": false,
      "declare": false,
      "start": 57,
      "end": 67
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 79
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
              "start": 84,
              "end": 95
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 107,
                        "end": 113
                      },
                      "start": 105,
                      "end": 113
                    },
                    "start": 104,
                    "end": 113
                  },
                  "readonly": false,
                  "static": false,
                  "start": 96,
                  "end": 113
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "value": "ngInject1",
                      "raw": "\"ngInject1\"",
                      "start": 121,
                      "end": 132
                    },
                    "directive": "ngInject1",
                    "start": 121,
                    "end": 133
                  }
                ],
                "start": 115,
                "end": 137
              },
              "expression": false,
              "start": 95,
              "end": 137
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 84,
            "end": 137
          }
        ],
        "start": 80,
        "end": 139
      },
      "abstract": false,
      "declare": false,
      "start": 69,
      "end": 139
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 151
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
              "start": 156,
              "end": 167
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 179,
                        "end": 185
                      },
                      "start": 177,
                      "end": 185
                    },
                    "start": 176,
                    "end": 185
                  },
                  "readonly": false,
                  "static": false,
                  "start": 168,
                  "end": 185
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 198,
                        "end": 204
                      },
                      "start": 196,
                      "end": 204
                    },
                    "start": 195,
                    "end": 204
                  },
                  "readonly": false,
                  "static": false,
                  "start": 187,
                  "end": 204
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "value": "ngInject1",
                      "raw": "\"ngInject1\"",
                      "start": 212,
                      "end": 223
                    },
                    "directive": "ngInject1",
                    "start": 212,
                    "end": 224
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "value": "ngInject2",
                      "raw": "\"ngInject2\"",
                      "start": 229,
                      "end": 240
                    },
                    "directive": "ngInject2",
                    "start": 229,
                    "end": 241
                  }
                ],
                "start": 206,
                "end": 245
              },
              "expression": false,
              "start": 167,
              "end": 245
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 156,
            "end": 245
          }
        ],
        "start": 152,
        "end": 247
      },
      "abstract": false,
      "declare": false,
      "start": 141,
      "end": 247
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 259
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
              "start": 264,
              "end": 275
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 287,
                        "end": 293
                      },
                      "start": 285,
                      "end": 293
                    },
                    "start": 284,
                    "end": 293
                  },
                  "readonly": false,
                  "static": false,
                  "start": 276,
                  "end": 293
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 306,
                        "end": 312
                      },
                      "start": 304,
                      "end": 312
                    },
                    "start": 303,
                    "end": 312
                  },
                  "readonly": false,
                  "static": false,
                  "start": 295,
                  "end": 312
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 325,
                        "end": 331
                      },
                      "start": 323,
                      "end": 331
                    },
                    "start": 322,
                    "end": 331
                  },
                  "readonly": false,
                  "static": false,
                  "start": 314,
                  "end": 331
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "value": "ngInject1",
                      "raw": "\"ngInject1\"",
                      "start": 339,
                      "end": 350
                    },
                    "directive": "ngInject1",
                    "start": 339,
                    "end": 351
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "value": "ngInject2",
                      "raw": "\"ngInject2\"",
                      "start": 356,
                      "end": 367
                    },
                    "directive": "ngInject2",
                    "start": 356,
                    "end": 368
                  }
                ],
                "start": 333,
                "end": 372
              },
              "expression": false,
              "start": 275,
              "end": 372
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 264,
            "end": 372
          }
        ],
        "start": 260,
        "end": 374
      },
      "abstract": false,
      "declare": false,
      "start": 249,
      "end": 374
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 382,
        "end": 386
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
              "start": 391,
              "end": 402
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 414,
                        "end": 420
                      },
                      "start": 412,
                      "end": 420
                    },
                    "start": 411,
                    "end": 420
                  },
                  "readonly": false,
                  "static": false,
                  "start": 403,
                  "end": 420
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "value": "ngInject1",
                      "raw": "\"ngInject1\"",
                      "start": 428,
                      "end": 439
                    },
                    "directive": "ngInject1",
                    "start": 428,
                    "end": 440
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 445,
                          "end": 452
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 453,
                          "end": 456
                        },
                        "optional": false,
                        "computed": false,
                        "start": 445,
                        "end": 456
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "hi",
                          "raw": "\"hi\"",
                          "start": 457,
                          "end": 461
                        }
                      ],
                      "optional": false,
                      "start": 445,
                      "end": 462
                    },
                    "directive": null,
                    "start": 445,
                    "end": 463
                  }
                ],
                "start": 422,
                "end": 467
              },
              "expression": false,
              "start": 402,
              "end": 467
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 391,
            "end": 467
          }
        ],
        "start": 387,
        "end": 469
      },
      "abstract": false,
      "declare": false,
      "start": 376,
      "end": 469
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 477,
        "end": 481
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
              "start": 486,
              "end": 497
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 509,
                        "end": 515
                      },
                      "start": 507,
                      "end": 515
                    },
                    "start": 506,
                    "end": 515
                  },
                  "readonly": false,
                  "static": false,
                  "start": 498,
                  "end": 515
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 528,
                        "end": 534
                      },
                      "start": 526,
                      "end": 534
                    },
                    "start": 525,
                    "end": 534
                  },
                  "readonly": false,
                  "static": false,
                  "start": 517,
                  "end": 534
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "value": "ngInject1",
                      "raw": "\"ngInject1\"",
                      "start": 542,
                      "end": 553
                    },
                    "directive": "ngInject1",
                    "start": 542,
                    "end": 554
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "value": "ngInject2",
                      "raw": "\"ngInject2\"",
                      "start": 559,
                      "end": 570
                    },
                    "directive": "ngInject2",
                    "start": 559,
                    "end": 571
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 576,
                          "end": 583
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 584,
                          "end": 587
                        },
                        "optional": false,
                        "computed": false,
                        "start": 576,
                        "end": 587
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "hi",
                          "raw": "\"hi\"",
                          "start": 588,
                          "end": 592
                        }
                      ],
                      "optional": false,
                      "start": 576,
                      "end": 593
                    },
                    "directive": null,
                    "start": 576,
                    "end": 594
                  }
                ],
                "start": 536,
                "end": 598
              },
              "expression": false,
              "start": 497,
              "end": 598
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 486,
            "end": 598
          }
        ],
        "start": 482,
        "end": 600
      },
      "abstract": false,
      "declare": false,
      "start": 471,
      "end": 600
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 608,
        "end": 612
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
              "start": 617,
              "end": 628
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 640,
                        "end": 646
                      },
                      "start": 638,
                      "end": 646
                    },
                    "start": 637,
                    "end": 646
                  },
                  "readonly": false,
                  "static": false,
                  "start": 629,
                  "end": 646
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 659,
                        "end": 665
                      },
                      "start": 657,
                      "end": 665
                    },
                    "start": 656,
                    "end": 665
                  },
                  "readonly": false,
                  "static": false,
                  "start": 648,
                  "end": 665
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 678,
                        "end": 684
                      },
                      "start": 676,
                      "end": 684
                    },
                    "start": 675,
                    "end": 684
                  },
                  "readonly": false,
                  "static": false,
                  "start": 667,
                  "end": 684
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "value": "ngInject1",
                      "raw": "\"ngInject1\"",
                      "start": 692,
                      "end": 703
                    },
                    "directive": "ngInject1",
                    "start": 692,
                    "end": 704
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "value": "ngInject2",
                      "raw": "\"ngInject2\"",
                      "start": 709,
                      "end": 720
                    },
                    "directive": "ngInject2",
                    "start": 709,
                    "end": 721
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 726,
                          "end": 733
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 734,
                          "end": 737
                        },
                        "optional": false,
                        "computed": false,
                        "start": 726,
                        "end": 737
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "hi",
                          "raw": "\"hi\"",
                          "start": 738,
                          "end": 742
                        }
                      ],
                      "optional": false,
                      "start": 726,
                      "end": 743
                    },
                    "directive": null,
                    "start": 726,
                    "end": 744
                  }
                ],
                "start": 686,
                "end": 748
              },
              "expression": false,
              "start": 628,
              "end": 748
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 617,
            "end": 748
          }
        ],
        "start": 613,
        "end": 750
      },
      "abstract": false,
      "declare": false,
      "start": 602,
      "end": 750
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 758,
        "end": 762
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 771,
        "end": 772
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
              "start": 777,
              "end": 788
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "member",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 810,
                        "end": 817
                      },
                      "start": 808,
                      "end": 817
                    },
                    "start": 802,
                    "end": 817
                  },
                  "readonly": false,
                  "static": false,
                  "start": 794,
                  "end": 817
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "value": "ngInject1",
                      "raw": "\"ngInject1\"",
                      "start": 829,
                      "end": 840
                    },
                    "directive": "ngInject1",
                    "start": 829,
                    "end": 841
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 846,
                        "end": 851
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 846,
                      "end": 853
                    },
                    "directive": null,
                    "start": 846,
                    "end": 854
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 859,
                          "end": 866
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 867,
                          "end": 870
                        },
                        "optional": false,
                        "computed": false,
                        "start": 859,
                        "end": 870
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "hi",
                          "raw": "\"hi\"",
                          "start": 871,
                          "end": 875
                        }
                      ],
                      "optional": false,
                      "start": 859,
                      "end": 876
                    },
                    "directive": null,
                    "start": 859,
                    "end": 877
                  }
                ],
                "start": 823,
                "end": 881
              },
              "expression": false,
              "start": 788,
              "end": 881
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 777,
            "end": 881
          }
        ],
        "start": 773,
        "end": 883
      },
      "abstract": false,
      "declare": false,
      "start": 752,
      "end": 883
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 891,
        "end": 895
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 904,
        "end": 905
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
              "start": 910,
              "end": 921
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "member",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 943,
                        "end": 950
                      },
                      "start": 941,
                      "end": 950
                    },
                    "start": 935,
                    "end": 950
                  },
                  "readonly": false,
                  "static": false,
                  "start": 927,
                  "end": 950
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "value": "ngInject1",
                      "raw": "\"ngInject1\"",
                      "start": 962,
                      "end": 973
                    },
                    "directive": "ngInject1",
                    "start": 962,
                    "end": 974
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 979,
                        "end": 984
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 979,
                      "end": 986
                    },
                    "directive": null,
                    "start": 979,
                    "end": 987
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 992,
                          "end": 996
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 997,
                          "end": 998
                        },
                        "optional": false,
                        "computed": false,
                        "start": 992,
                        "end": 998
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 992,
                      "end": 1000
                    },
                    "directive": null,
                    "start": 992,
                    "end": 1001
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1006,
                          "end": 1013
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1014,
                          "end": 1017
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1006,
                        "end": 1017
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "hi",
                          "raw": "\"hi\"",
                          "start": 1018,
                          "end": 1022
                        }
                      ],
                      "optional": false,
                      "start": 1006,
                      "end": 1023
                    },
                    "directive": null,
                    "start": 1006,
                    "end": 1024
                  }
                ],
                "start": 956,
                "end": 1028
              },
              "expression": false,
              "start": 921,
              "end": 1028
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 910,
            "end": 1028
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 1032,
              "end": 1033
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
                "body": [],
                "start": 1036,
                "end": 1038
              },
              "expression": false,
              "start": 1033,
              "end": 1038
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1032,
            "end": 1038
          }
        ],
        "start": 906,
        "end": 1040
      },
      "abstract": false,
      "declare": false,
      "start": 885,
      "end": 1040
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1048,
        "end": 1052
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1061,
        "end": 1062
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
              "start": 1067,
              "end": 1078
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
                      "type": "Literal",
                      "value": "ngInject1",
                      "raw": "\"ngInject1\"",
                      "start": 1087,
                      "end": 1098
                    },
                    "directive": "ngInject1",
                    "start": 1087,
                    "end": 1099
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "value": "ngInject2",
                      "raw": "\"ngInject2\"",
                      "start": 1104,
                      "end": 1115
                    },
                    "directive": "ngInject2",
                    "start": 1104,
                    "end": 1116
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 1121,
                        "end": 1126
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1121,
                      "end": 1128
                    },
                    "directive": null,
                    "start": 1121,
                    "end": 1129
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1134,
                          "end": 1138
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1139,
                          "end": 1140
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1134,
                        "end": 1140
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1134,
                      "end": 1142
                    },
                    "directive": null,
                    "start": 1134,
                    "end": 1143
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1148,
                          "end": 1155
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1156,
                          "end": 1159
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1148,
                        "end": 1159
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "hi",
                          "raw": "\"hi\"",
                          "start": 1160,
                          "end": 1164
                        }
                      ],
                      "optional": false,
                      "start": 1148,
                      "end": 1165
                    },
                    "directive": null,
                    "start": 1148,
                    "end": 1166
                  }
                ],
                "start": 1081,
                "end": 1170
              },
              "expression": false,
              "start": 1078,
              "end": 1170
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1067,
            "end": 1170
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 1174,
              "end": 1175
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
                "body": [],
                "start": 1178,
                "end": 1180
              },
              "expression": false,
              "start": 1175,
              "end": 1180
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1174,
            "end": 1180
          }
        ],
        "start": 1063,
        "end": 1182
      },
      "abstract": false,
      "declare": false,
      "start": 1042,
      "end": 1182
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 1182
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 69,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 75,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 84,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 96,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "String",
    "value": "\"ngInject1\"",
    "start": 121,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 141,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 147,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 156,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 168,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 187,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 198,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "String",
    "value": "\"ngInject1\"",
    "start": 212,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "String",
    "value": "\"ngInject2\"",
    "start": 229,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 249,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "Foo3",
    "start": 255,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 264,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 276,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 287,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 295,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 314,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334
  },
  {
    "type": "String",
    "value": "\"ngInject1\"",
    "start": 339,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "String",
    "value": "\"ngInject2\"",
    "start": 356,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 376,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "Foo4",
    "start": 382,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 391,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 403,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 414,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423
  },
  {
    "type": "String",
    "value": "\"ngInject1\"",
    "start": 428,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 445,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 453,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 456,
    "end": 457
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 457,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 471,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "Foo5",
    "start": 477,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 486,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 498,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 509,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 517,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 528,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 536,
    "end": 537
  },
  {
    "type": "String",
    "value": "\"ngInject1\"",
    "start": 542,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "String",
    "value": "\"ngInject2\"",
    "start": 559,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 576,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 584,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 588,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 602,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "Foo6",
    "start": 608,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 617,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 629,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 640,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 646,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 648,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 659,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 667,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 678,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 686,
    "end": 687
  },
  {
    "type": "String",
    "value": "\"ngInject1\"",
    "start": 692,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704
  },
  {
    "type": "String",
    "value": "\"ngInject2\"",
    "start": 709,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 726,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 734,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 737,
    "end": 738
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 738,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 749,
    "end": 750
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 752,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "Foo7",
    "start": 758,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 763,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 771,
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
    "value": "constructor",
    "start": 777,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 788,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 794,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 802,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 810,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 823,
    "end": 824
  },
  {
    "type": "String",
    "value": "\"ngInject1\"",
    "start": 829,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 840,
    "end": 841
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 846,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 859,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 867,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 870,
    "end": 871
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 871,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 882,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 885,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "Foo8",
    "start": 891,
    "end": 895
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 896,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 910,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 921,
    "end": 922
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 927,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 935,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 943,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 956,
    "end": 957
  },
  {
    "type": "String",
    "value": "\"ngInject1\"",
    "start": 962,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 973,
    "end": 974
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 979,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 992,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1006,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1014,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 1018,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1042,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "Foo9",
    "start": 1048,
    "end": 1052
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1053,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1067,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "String",
    "value": "\"ngInject1\"",
    "start": 1087,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "String",
    "value": "\"ngInject2\"",
    "start": 1104,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1121,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1134,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1148,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1156,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 1160,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1181,
    "end": 1182
  }
]
```
