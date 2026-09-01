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
            "name": "decorate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 24,
                "end": 27
              },
              "start": 22,
              "end": 27
            },
            "start": 14,
            "end": 27
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 27
        }
      ],
      "declare": true,
      "start": 0,
      "end": 28
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 40
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
              "start": 47,
              "end": 58
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
                  "name": "a",
                  "optional": true,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 61
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 63,
                "end": 66
              },
              "expression": false,
              "start": 58,
              "end": 66
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 47,
            "end": 66
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "receivesAnything",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 88
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
                  "name": "param",
                  "optional": true,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 95
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 97,
                "end": 100
              },
              "expression": false,
              "start": 88,
              "end": 100
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 72,
            "end": 100
          }
        ],
        "start": 41,
        "end": 102
      },
      "abstract": false,
      "declare": false,
      "start": 30,
      "end": 102
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 118
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 131
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 142
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 145,
              "end": 149
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
            "end": 150
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
              "start": 155,
              "end": 166
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 179,
                          "end": 184
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "receivesAnything",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 185,
                          "end": 201
                        },
                        "optional": false,
                        "computed": false,
                        "start": 179,
                        "end": 201
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 179,
                      "end": 203
                    },
                    "directive": null,
                    "start": 179,
                    "end": 204
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 213,
                        "end": 218
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 213,
                      "end": 220
                    },
                    "directive": null,
                    "start": 213,
                    "end": 221
                  }
                ],
                "start": 169,
                "end": 227
              },
              "expression": false,
              "start": 166,
              "end": 227
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 155,
            "end": 227
          }
        ],
        "start": 132,
        "end": 229
      },
      "abstract": false,
      "declare": false,
      "start": 104,
      "end": 229
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 237,
        "end": 245
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 258
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 269
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 272,
              "end": 276
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 265,
            "end": 277
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
              "start": 282,
              "end": 293
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 306,
                          "end": 311
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "receivesAnything",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 312,
                          "end": 328
                        },
                        "optional": false,
                        "computed": false,
                        "start": 306,
                        "end": 328
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 329,
                          "end": 333
                        }
                      ],
                      "optional": false,
                      "start": 306,
                      "end": 334
                    },
                    "directive": null,
                    "start": 306,
                    "end": 335
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 344,
                        "end": 349
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 344,
                      "end": 351
                    },
                    "directive": null,
                    "start": 344,
                    "end": 352
                  }
                ],
                "start": 296,
                "end": 358
              },
              "expression": false,
              "start": 293,
              "end": 358
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 282,
            "end": 358
          }
        ],
        "start": 259,
        "end": 360
      },
      "abstract": false,
      "declare": false,
      "start": 231,
      "end": 360
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null,
        "start": 368,
        "end": 376
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 385,
        "end": 389
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 400
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 403,
              "end": 407
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 396,
            "end": 408
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
              "start": 413,
              "end": 424
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 437,
                          "end": 442
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "receivesAnything",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 443,
                          "end": 459
                        },
                        "optional": false,
                        "computed": false,
                        "start": 437,
                        "end": 459
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 437,
                      "end": 461
                    },
                    "directive": null,
                    "start": 437,
                    "end": 462
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 471,
                        "end": 476
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 477,
                          "end": 481
                        }
                      ],
                      "optional": false,
                      "start": 471,
                      "end": 482
                    },
                    "directive": null,
                    "start": 471,
                    "end": 483
                  }
                ],
                "start": 427,
                "end": 489
              },
              "expression": false,
              "start": 424,
              "end": 489
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 413,
            "end": 489
          }
        ],
        "start": 390,
        "end": 491
      },
      "abstract": false,
      "declare": false,
      "start": 362,
      "end": 491
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived4",
        "optional": false,
        "typeAnnotation": null,
        "start": 499,
        "end": 507
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 520
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 527,
              "end": 531
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 534,
              "end": 538
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 527,
            "end": 539
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
              "start": 544,
              "end": 555
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 568,
                          "end": 573
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "receivesAnything",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 574,
                          "end": 590
                        },
                        "optional": false,
                        "computed": false,
                        "start": 568,
                        "end": 590
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 591,
                          "end": 595
                        }
                      ],
                      "optional": false,
                      "start": 568,
                      "end": 596
                    },
                    "directive": null,
                    "start": 568,
                    "end": 597
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 606,
                        "end": 611
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 612,
                          "end": 616
                        }
                      ],
                      "optional": false,
                      "start": 606,
                      "end": 617
                    },
                    "directive": null,
                    "start": 606,
                    "end": 618
                  }
                ],
                "start": 558,
                "end": 624
              },
              "expression": false,
              "start": 555,
              "end": 624
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 544,
            "end": 624
          }
        ],
        "start": 521,
        "end": 626
      },
      "abstract": false,
      "declare": false,
      "start": 493,
      "end": 626
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived5",
        "optional": false,
        "typeAnnotation": null,
        "start": 634,
        "end": 642
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 651,
        "end": 655
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 666
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 669,
              "end": 673
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 662,
            "end": 674
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
              "start": 679,
              "end": 690
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
                        "start": 703,
                        "end": 708
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 703,
                      "end": 710
                    },
                    "directive": null,
                    "start": 703,
                    "end": 711
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 720,
                          "end": 725
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "receivesAnything",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 726,
                          "end": 742
                        },
                        "optional": false,
                        "computed": false,
                        "start": 720,
                        "end": 742
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 720,
                      "end": 744
                    },
                    "directive": null,
                    "start": 720,
                    "end": 745
                  }
                ],
                "start": 693,
                "end": 751
              },
              "expression": false,
              "start": 690,
              "end": 751
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 679,
            "end": 751
          }
        ],
        "start": 656,
        "end": 753
      },
      "abstract": false,
      "declare": false,
      "start": 628,
      "end": 753
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived6",
        "optional": false,
        "typeAnnotation": null,
        "start": 761,
        "end": 769
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 778,
        "end": 782
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
              "end": 793
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 796,
              "end": 800
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 789,
            "end": 801
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
              "start": 806,
              "end": 817
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
                        "start": 830,
                        "end": 835
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 836,
                          "end": 840
                        }
                      ],
                      "optional": false,
                      "start": 830,
                      "end": 841
                    },
                    "directive": null,
                    "start": 830,
                    "end": 842
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 851,
                          "end": 856
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "receivesAnything",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 857,
                          "end": 873
                        },
                        "optional": false,
                        "computed": false,
                        "start": 851,
                        "end": 873
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 851,
                      "end": 875
                    },
                    "directive": null,
                    "start": 851,
                    "end": 876
                  }
                ],
                "start": 820,
                "end": 882
              },
              "expression": false,
              "start": 817,
              "end": 882
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 806,
            "end": 882
          }
        ],
        "start": 783,
        "end": 884
      },
      "abstract": false,
      "declare": false,
      "start": 755,
      "end": 884
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived7",
        "optional": false,
        "typeAnnotation": null,
        "start": 892,
        "end": 900
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 909,
        "end": 913
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 920,
              "end": 924
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 927,
              "end": 931
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 920,
            "end": 932
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
              "start": 937,
              "end": 948
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
                        "start": 961,
                        "end": 966
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 961,
                      "end": 968
                    },
                    "directive": null,
                    "start": 961,
                    "end": 969
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 978,
                          "end": 983
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "receivesAnything",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 984,
                          "end": 1000
                        },
                        "optional": false,
                        "computed": false,
                        "start": 978,
                        "end": 1000
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 1001,
                          "end": 1005
                        }
                      ],
                      "optional": false,
                      "start": 978,
                      "end": 1006
                    },
                    "directive": null,
                    "start": 978,
                    "end": 1007
                  }
                ],
                "start": 951,
                "end": 1013
              },
              "expression": false,
              "start": 948,
              "end": 1013
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 937,
            "end": 1013
          }
        ],
        "start": 914,
        "end": 1015
      },
      "abstract": false,
      "declare": false,
      "start": 886,
      "end": 1015
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1023,
        "end": 1031
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1040,
        "end": 1044
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 1051,
              "end": 1055
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1058,
              "end": 1062
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1051,
            "end": 1063
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
              "start": 1068,
              "end": 1079
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
                        "start": 1092,
                        "end": 1097
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 1098,
                          "end": 1102
                        }
                      ],
                      "optional": false,
                      "start": 1092,
                      "end": 1103
                    },
                    "directive": null,
                    "start": 1092,
                    "end": 1104
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 1113,
                          "end": 1118
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "receivesAnything",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1119,
                          "end": 1135
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1113,
                        "end": 1135
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 1136,
                          "end": 1140
                        }
                      ],
                      "optional": false,
                      "start": 1113,
                      "end": 1141
                    },
                    "directive": null,
                    "start": 1113,
                    "end": 1142
                  }
                ],
                "start": 1082,
                "end": 1148
              },
              "expression": false,
              "start": 1079,
              "end": 1148
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1068,
            "end": 1148
          }
        ],
        "start": 1045,
        "end": 1150
      },
      "abstract": false,
      "declare": false,
      "start": 1017,
      "end": 1150
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithArrowFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 1158,
        "end": 1182
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1191,
        "end": 1195
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 1202,
              "end": 1206
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1209,
              "end": 1213
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1202,
            "end": 1214
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
              "start": 1219,
              "end": 1230
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
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "ThisExpression",
                          "start": 1250,
                          "end": 1254
                        },
                        "id": null,
                        "generator": false,
                        "start": 1244,
                        "end": 1254
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1243,
                      "end": 1257
                    },
                    "directive": null,
                    "start": 1243,
                    "end": 1258
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 1267,
                        "end": 1272
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1267,
                      "end": 1274
                    },
                    "directive": null,
                    "start": 1267,
                    "end": 1275
                  }
                ],
                "start": 1233,
                "end": 1281
              },
              "expression": false,
              "start": 1230,
              "end": 1281
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1219,
            "end": 1281
          }
        ],
        "start": 1196,
        "end": 1283
      },
      "abstract": false,
      "declare": false,
      "start": 1152,
      "end": 1283
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithArrowFunctionParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 1291,
        "end": 1324
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1333,
        "end": 1337
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 1344,
              "end": 1348
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1351,
              "end": 1355
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1344,
            "end": 1356
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
              "start": 1361,
              "end": 1372
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1391,
                          "end": 1397
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "AssignmentPattern",
                              "decorators": [],
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1401,
                                "end": 1406
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 1409,
                                "end": 1413
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1401,
                              "end": 1413
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 1418,
                            "end": 1420
                          },
                          "id": null,
                          "generator": false,
                          "start": 1400,
                          "end": 1420
                        },
                        "definite": false,
                        "start": 1391,
                        "end": 1420
                      }
                    ],
                    "declare": false,
                    "start": 1385,
                    "end": 1421
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 1430,
                        "end": 1435
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1430,
                      "end": 1437
                    },
                    "directive": null,
                    "start": 1430,
                    "end": 1438
                  }
                ],
                "start": 1375,
                "end": 1444
              },
              "expression": false,
              "start": 1372,
              "end": 1444
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1361,
            "end": 1444
          }
        ],
        "start": 1338,
        "end": 1446
      },
      "abstract": false,
      "declare": false,
      "start": 1285,
      "end": 1446
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithDecoratorOnClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1454,
        "end": 1481
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1490,
        "end": 1494
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 1501,
              "end": 1505
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1508,
              "end": 1512
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1501,
            "end": 1513
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
              "start": 1518,
              "end": 1529
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
                    "type": "ClassDeclaration",
                    "decorators": [
                      {
                        "type": "Decorator",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "decorate",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1543,
                            "end": 1551
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 1552,
                              "end": 1556
                            }
                          ],
                          "optional": false,
                          "start": 1543,
                          "end": 1557
                        },
                        "start": 1542,
                        "end": 1557
                      }
                    ],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InnerClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1572,
                      "end": 1582
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 1583,
                      "end": 1586
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1542,
                    "end": 1586
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 1596,
                        "end": 1601
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1596,
                      "end": 1603
                    },
                    "directive": null,
                    "start": 1596,
                    "end": 1604
                  }
                ],
                "start": 1532,
                "end": 1610
              },
              "expression": false,
              "start": 1529,
              "end": 1610
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1518,
            "end": 1610
          }
        ],
        "start": 1495,
        "end": 1612
      },
      "abstract": false,
      "declare": false,
      "start": 1448,
      "end": 1612
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithDecoratorOnClassMethod",
        "optional": false,
        "typeAnnotation": null,
        "start": 1620,
        "end": 1653
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1662,
        "end": 1666
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 1673,
              "end": 1677
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1680,
              "end": 1684
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1673,
            "end": 1685
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
              "start": 1690,
              "end": 1701
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InnerClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1720,
                      "end": 1730
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
                          "decorators": [
                            {
                              "type": "Decorator",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "decorate",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1746,
                                  "end": 1754
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ThisExpression",
                                    "start": 1755,
                                    "end": 1759
                                  }
                                ],
                                "optional": false,
                                "start": 1746,
                                "end": 1760
                              },
                              "start": 1745,
                              "end": 1760
                            }
                          ],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "innerMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1773,
                            "end": 1784
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
                              "start": 1787,
                              "end": 1790
                            },
                            "expression": false,
                            "start": 1784,
                            "end": 1790
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 1745,
                          "end": 1790
                        }
                      ],
                      "start": 1731,
                      "end": 1800
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1714,
                    "end": 1800
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 1810,
                        "end": 1815
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1810,
                      "end": 1817
                    },
                    "directive": null,
                    "start": 1810,
                    "end": 1818
                  }
                ],
                "start": 1704,
                "end": 1824
              },
              "expression": false,
              "start": 1701,
              "end": 1824
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1690,
            "end": 1824
          }
        ],
        "start": 1667,
        "end": 1826
      },
      "abstract": false,
      "declare": false,
      "start": 1614,
      "end": 1826
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithDecoratorOnClassProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 1834,
        "end": 1869
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1878,
        "end": 1882
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 1889,
              "end": 1893
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1896,
              "end": 1900
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1889,
            "end": 1901
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
              "start": 1906,
              "end": 1917
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InnerClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1936,
                      "end": 1946
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
                          "decorators": [
                            {
                              "type": "Decorator",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "decorate",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1962,
                                  "end": 1970
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ThisExpression",
                                    "start": 1971,
                                    "end": 1975
                                  }
                                ],
                                "optional": false,
                                "start": 1962,
                                "end": 1976
                              },
                              "start": 1961,
                              "end": 1976
                            }
                          ],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "innerProp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1989,
                            "end": 1998
                          },
                          "typeAnnotation": null,
                          "value": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 2001,
                            "end": 2005
                          },
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 1961,
                          "end": 2006
                        }
                      ],
                      "start": 1947,
                      "end": 2016
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1930,
                    "end": 2016
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 2026,
                        "end": 2031
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2026,
                      "end": 2033
                    },
                    "directive": null,
                    "start": 2026,
                    "end": 2034
                  }
                ],
                "start": 1920,
                "end": 2040
              },
              "expression": false,
              "start": 1917,
              "end": 2040
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1906,
            "end": 2040
          }
        ],
        "start": 1883,
        "end": 2042
      },
      "abstract": false,
      "declare": false,
      "start": 1828,
      "end": 2042
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithFunctionDeclaration",
        "optional": false,
        "typeAnnotation": null,
        "start": 2050,
        "end": 2080
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 2089,
        "end": 2093
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 2100,
              "end": 2104
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2107,
              "end": 2111
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2100,
            "end": 2112
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
              "start": 2117,
              "end": 2128
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "declaration",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2150,
                      "end": 2161
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ThisExpression",
                            "start": 2185,
                            "end": 2189
                          },
                          "start": 2178,
                          "end": 2190
                        }
                      ],
                      "start": 2164,
                      "end": 2200
                    },
                    "expression": false,
                    "start": 2141,
                    "end": 2200
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 2209,
                        "end": 2214
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2209,
                      "end": 2216
                    },
                    "directive": null,
                    "start": 2209,
                    "end": 2217
                  }
                ],
                "start": 2131,
                "end": 2223
              },
              "expression": false,
              "start": 2128,
              "end": 2223
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2117,
            "end": 2223
          }
        ],
        "start": 2094,
        "end": 2225
      },
      "abstract": false,
      "declare": false,
      "start": 2044,
      "end": 2225
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithFunctionDeclarationAndThisParam",
        "optional": false,
        "typeAnnotation": null,
        "start": 2233,
        "end": 2275
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 2284,
        "end": 2288
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 2295,
              "end": 2299
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2302,
              "end": 2306
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2295,
            "end": 2307
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
              "start": 2312,
              "end": 2323
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "declaration",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2345,
                      "end": 2356
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2357,
                          "end": 2362
                        },
                        "right": {
                          "type": "ThisExpression",
                          "start": 2365,
                          "end": 2369
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2357,
                        "end": 2369
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2392,
                            "end": 2397
                          },
                          "start": 2385,
                          "end": 2398
                        }
                      ],
                      "start": 2371,
                      "end": 2408
                    },
                    "expression": false,
                    "start": 2336,
                    "end": 2408
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 2417,
                        "end": 2422
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2417,
                      "end": 2424
                    },
                    "directive": null,
                    "start": 2417,
                    "end": 2425
                  }
                ],
                "start": 2326,
                "end": 2431
              },
              "expression": false,
              "start": 2323,
              "end": 2431
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2312,
            "end": 2431
          }
        ],
        "start": 2289,
        "end": 2433
      },
      "abstract": false,
      "declare": false,
      "start": 2227,
      "end": 2433
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithFunctionExpression",
        "optional": false,
        "typeAnnotation": null,
        "start": 2441,
        "end": 2470
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 2479,
        "end": 2483
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 2490,
              "end": 2494
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2497,
              "end": 2501
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2490,
            "end": 2502
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
              "start": 2507,
              "end": 2518
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
                                "type": "ThisExpression",
                                "start": 2565,
                                "end": 2569
                              },
                              "start": 2558,
                              "end": 2570
                            }
                          ],
                          "start": 2544,
                          "end": 2580
                        },
                        "expression": false,
                        "start": 2532,
                        "end": 2580
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2531,
                      "end": 2583
                    },
                    "directive": null,
                    "start": 2531,
                    "end": 2584
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 2593,
                        "end": 2598
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2593,
                      "end": 2600
                    },
                    "directive": null,
                    "start": 2593,
                    "end": 2601
                  }
                ],
                "start": 2521,
                "end": 2607
              },
              "expression": false,
              "start": 2518,
              "end": 2607
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2507,
            "end": 2607
          }
        ],
        "start": 2484,
        "end": 2609
      },
      "abstract": false,
      "declare": false,
      "start": 2435,
      "end": 2609
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithParenthesis",
        "optional": false,
        "typeAnnotation": null,
        "start": 2617,
        "end": 2639
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 2648,
        "end": 2652
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 2659,
              "end": 2663
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2666,
              "end": 2670
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2659,
            "end": 2671
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
              "start": 2676,
              "end": 2687
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
                        "start": 2701,
                        "end": 2706
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2701,
                      "end": 2708
                    },
                    "directive": null,
                    "start": 2700,
                    "end": 2710
                  }
                ],
                "start": 2690,
                "end": 2716
              },
              "expression": false,
              "start": 2687,
              "end": 2716
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2676,
            "end": 2716
          }
        ],
        "start": 2653,
        "end": 2718
      },
      "abstract": false,
      "declare": false,
      "start": 2611,
      "end": 2718
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithParenthesisAfterStatement",
        "optional": false,
        "typeAnnotation": null,
        "start": 2726,
        "end": 2762
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 2771,
        "end": 2775
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 2782,
              "end": 2786
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2789,
              "end": 2793
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2782,
            "end": 2794
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
              "start": 2799,
              "end": 2810
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 2823,
                        "end": 2827
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2828,
                        "end": 2832
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2823,
                      "end": 2832
                    },
                    "directive": null,
                    "start": 2823,
                    "end": 2833
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 2843,
                        "end": 2848
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2843,
                      "end": 2850
                    },
                    "directive": null,
                    "start": 2842,
                    "end": 2852
                  }
                ],
                "start": 2813,
                "end": 2858
              },
              "expression": false,
              "start": 2810,
              "end": 2858
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2799,
            "end": 2858
          }
        ],
        "start": 2776,
        "end": 2860
      },
      "abstract": false,
      "declare": false,
      "start": 2720,
      "end": 2860
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithParenthesisBeforeStatement",
        "optional": false,
        "typeAnnotation": null,
        "start": 2868,
        "end": 2905
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 2914,
        "end": 2918
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 2925,
              "end": 2929
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2932,
              "end": 2936
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2925,
            "end": 2937
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
              "start": 2942,
              "end": 2953
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
                        "start": 2967,
                        "end": 2972
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2967,
                      "end": 2974
                    },
                    "directive": null,
                    "start": 2966,
                    "end": 2976
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 2985,
                        "end": 2989
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2990,
                        "end": 2994
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2985,
                      "end": 2994
                    },
                    "directive": null,
                    "start": 2985,
                    "end": 2995
                  }
                ],
                "start": 2956,
                "end": 3001
              },
              "expression": false,
              "start": 2953,
              "end": 3001
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2942,
            "end": 3001
          }
        ],
        "start": 2919,
        "end": 3003
      },
      "abstract": false,
      "declare": false,
      "start": 2862,
      "end": 3003
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithClassDeclaration",
        "optional": false,
        "typeAnnotation": null,
        "start": 3011,
        "end": 3038
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 3047,
        "end": 3051
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 3058,
              "end": 3062
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 3065,
              "end": 3069
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3058,
            "end": 3070
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
              "start": 3075,
              "end": 3086
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InnerClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3105,
                      "end": 3115
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
                            "name": "method",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3138,
                            "end": 3144
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
                                    "type": "ThisExpression",
                                    "start": 3172,
                                    "end": 3176
                                  },
                                  "start": 3165,
                                  "end": 3177
                                }
                              ],
                              "start": 3147,
                              "end": 3191
                            },
                            "expression": false,
                            "start": 3144,
                            "end": 3191
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 3130,
                          "end": 3191
                        },
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "property",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3212,
                            "end": 3220
                          },
                          "typeAnnotation": null,
                          "value": {
                            "type": "Literal",
                            "value": 7,
                            "raw": "7",
                            "start": 3223,
                            "end": 3224
                          },
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": "private",
                          "start": 3204,
                          "end": 3225
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
                            "start": 3238,
                            "end": 3249
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
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 3270,
                                      "end": 3274
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "property",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3275,
                                      "end": 3283
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3270,
                                    "end": 3283
                                  },
                                  "directive": null,
                                  "start": 3270,
                                  "end": 3284
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 3301,
                                        "end": 3305
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "method",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3306,
                                        "end": 3312
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 3301,
                                      "end": 3312
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 3301,
                                    "end": 3314
                                  },
                                  "directive": null,
                                  "start": 3301,
                                  "end": 3315
                                }
                              ],
                              "start": 3252,
                              "end": 3329
                            },
                            "expression": false,
                            "start": 3249,
                            "end": 3329
                          },
                          "kind": "constructor",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 3238,
                          "end": 3329
                        }
                      ],
                      "start": 3116,
                      "end": 3339
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 3099,
                    "end": 3339
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 3348,
                        "end": 3353
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3348,
                      "end": 3355
                    },
                    "directive": null,
                    "start": 3348,
                    "end": 3356
                  }
                ],
                "start": 3089,
                "end": 3362
              },
              "expression": false,
              "start": 3086,
              "end": 3362
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3075,
            "end": 3362
          }
        ],
        "start": 3052,
        "end": 3364
      },
      "abstract": false,
      "declare": false,
      "start": 3005,
      "end": 3364
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithClassDeclarationExtendingMember",
        "optional": false,
        "typeAnnotation": null,
        "start": 3372,
        "end": 3414
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 3423,
        "end": 3427
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
              "name": "memberClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 3434,
              "end": 3445
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 3454,
                "end": 3457
              },
              "abstract": false,
              "declare": false,
              "start": 3448,
              "end": 3457
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3434,
            "end": 3458
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
              "start": 3463,
              "end": 3474
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InnerClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3493,
                      "end": 3503
                    },
                    "typeParameters": null,
                    "superClass": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 3512,
                        "end": 3516
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "memberClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3517,
                        "end": 3528
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3512,
                      "end": 3528
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
                            "name": "method",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3551,
                            "end": 3557
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
                                    "type": "ThisExpression",
                                    "start": 3585,
                                    "end": 3589
                                  },
                                  "start": 3578,
                                  "end": 3590
                                }
                              ],
                              "start": 3560,
                              "end": 3604
                            },
                            "expression": false,
                            "start": 3557,
                            "end": 3604
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 3543,
                          "end": 3604
                        },
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "property",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3625,
                            "end": 3633
                          },
                          "typeAnnotation": null,
                          "value": {
                            "type": "Literal",
                            "value": 7,
                            "raw": "7",
                            "start": 3636,
                            "end": 3637
                          },
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": "private",
                          "start": 3617,
                          "end": 3638
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
                            "start": 3651,
                            "end": 3662
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
                                      "start": 3683,
                                      "end": 3688
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 3683,
                                    "end": 3690
                                  },
                                  "directive": null,
                                  "start": 3683,
                                  "end": 3691
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 3708,
                                      "end": 3712
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "property",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3713,
                                      "end": 3721
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3708,
                                    "end": 3721
                                  },
                                  "directive": null,
                                  "start": 3708,
                                  "end": 3722
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 3739,
                                        "end": 3743
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "method",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3744,
                                        "end": 3750
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 3739,
                                      "end": 3750
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 3739,
                                    "end": 3752
                                  },
                                  "directive": null,
                                  "start": 3739,
                                  "end": 3753
                                }
                              ],
                              "start": 3665,
                              "end": 3767
                            },
                            "expression": false,
                            "start": 3662,
                            "end": 3767
                          },
                          "kind": "constructor",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 3651,
                          "end": 3767
                        }
                      ],
                      "start": 3529,
                      "end": 3777
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 3487,
                    "end": 3777
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 3786,
                        "end": 3791
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3786,
                      "end": 3793
                    },
                    "directive": null,
                    "start": 3786,
                    "end": 3794
                  }
                ],
                "start": 3477,
                "end": 3800
              },
              "expression": false,
              "start": 3474,
              "end": 3800
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3463,
            "end": 3800
          }
        ],
        "start": 3428,
        "end": 3802
      },
      "abstract": false,
      "declare": false,
      "start": 3366,
      "end": 3802
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithClassExpression",
        "optional": false,
        "typeAnnotation": null,
        "start": 3810,
        "end": 3836
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 3845,
        "end": 3849
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 3856,
              "end": 3860
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 3863,
              "end": 3867
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3856,
            "end": 3868
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
              "start": 3873,
              "end": 3884
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3897,
                          "end": 3904
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3905,
                          "end": 3908
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3897,
                        "end": 3908
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ClassExpression",
                          "decorators": [],
                          "id": null,
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
                                  "name": "method",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3937,
                                  "end": 3943
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
                                          "type": "ThisExpression",
                                          "start": 3971,
                                          "end": 3975
                                        },
                                        "start": 3964,
                                        "end": 3976
                                      }
                                    ],
                                    "start": 3946,
                                    "end": 3990
                                  },
                                  "expression": false,
                                  "start": 3943,
                                  "end": 3990
                                },
                                "kind": "method",
                                "computed": false,
                                "static": false,
                                "override": false,
                                "optional": false,
                                "accessibility": "private",
                                "start": 3929,
                                "end": 3990
                              },
                              {
                                "type": "PropertyDefinition",
                                "decorators": [],
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "property",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4011,
                                  "end": 4019
                                },
                                "typeAnnotation": null,
                                "value": {
                                  "type": "Literal",
                                  "value": 7,
                                  "raw": "7",
                                  "start": 4022,
                                  "end": 4023
                                },
                                "computed": false,
                                "static": false,
                                "declare": false,
                                "override": false,
                                "optional": false,
                                "definite": false,
                                "readonly": false,
                                "accessibility": "private",
                                "start": 4003,
                                "end": 4024
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
                                  "start": 4037,
                                  "end": 4048
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
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 4069,
                                            "end": 4073
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "property",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4074,
                                            "end": 4082
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 4069,
                                          "end": 4082
                                        },
                                        "directive": null,
                                        "start": 4069,
                                        "end": 4083
                                      },
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "ThisExpression",
                                              "start": 4100,
                                              "end": 4104
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "method",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 4105,
                                              "end": 4111
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 4100,
                                            "end": 4111
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "optional": false,
                                          "start": 4100,
                                          "end": 4113
                                        },
                                        "directive": null,
                                        "start": 4100,
                                        "end": 4114
                                      }
                                    ],
                                    "start": 4051,
                                    "end": 4128
                                  },
                                  "expression": false,
                                  "start": 4048,
                                  "end": 4128
                                },
                                "kind": "constructor",
                                "computed": false,
                                "static": false,
                                "override": false,
                                "optional": false,
                                "accessibility": null,
                                "start": 4037,
                                "end": 4128
                              }
                            ],
                            "start": 3915,
                            "end": 4138
                          },
                          "abstract": false,
                          "declare": false,
                          "start": 3909,
                          "end": 4138
                        }
                      ],
                      "optional": false,
                      "start": 3897,
                      "end": 4139
                    },
                    "directive": null,
                    "start": 3897,
                    "end": 4140
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 4149,
                        "end": 4154
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 4149,
                      "end": 4156
                    },
                    "directive": null,
                    "start": 4149,
                    "end": 4157
                  }
                ],
                "start": 3887,
                "end": 4163
              },
              "expression": false,
              "start": 3884,
              "end": 4163
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3873,
            "end": 4163
          }
        ],
        "start": 3850,
        "end": 4165
      },
      "abstract": false,
      "declare": false,
      "start": 3804,
      "end": 4165
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithClassExpressionExtendingMember",
        "optional": false,
        "typeAnnotation": null,
        "start": 4173,
        "end": 4214
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 4223,
        "end": 4227
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
              "name": "memberClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 4234,
              "end": 4245
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 4254,
                "end": 4257
              },
              "abstract": false,
              "declare": false,
              "start": 4248,
              "end": 4257
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4234,
            "end": 4258
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
              "start": 4263,
              "end": 4274
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4287,
                          "end": 4294
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4295,
                          "end": 4298
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4287,
                        "end": 4298
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ClassExpression",
                          "decorators": [],
                          "id": null,
                          "typeParameters": null,
                          "superClass": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 4313,
                              "end": 4317
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "memberClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4318,
                              "end": 4329
                            },
                            "optional": false,
                            "computed": false,
                            "start": 4313,
                            "end": 4329
                          },
                          "superTypeArguments": null,
                          "implements": [],
                          "body": {
                            "type": "ClassBody",
                            "body": [],
                            "start": 4330,
                            "end": 4333
                          },
                          "abstract": false,
                          "declare": false,
                          "start": 4299,
                          "end": 4333
                        }
                      ],
                      "optional": false,
                      "start": 4287,
                      "end": 4334
                    },
                    "directive": null,
                    "start": 4287,
                    "end": 4335
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 4344,
                        "end": 4349
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 4344,
                      "end": 4351
                    },
                    "directive": null,
                    "start": 4344,
                    "end": 4352
                  }
                ],
                "start": 4277,
                "end": 4358
              },
              "expression": false,
              "start": 4274,
              "end": 4358
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4263,
            "end": 4358
          }
        ],
        "start": 4228,
        "end": 4360
      },
      "abstract": false,
      "declare": false,
      "start": 4167,
      "end": 4360
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithDerivedClassExpression",
        "optional": false,
        "typeAnnotation": null,
        "start": 4368,
        "end": 4401
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 4410,
        "end": 4414
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 4421,
              "end": 4425
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 4428,
              "end": 4432
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4421,
            "end": 4433
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
              "start": 4438,
              "end": 4449
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4462,
                          "end": 4469
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4470,
                          "end": 4473
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4462,
                        "end": 4473
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ClassExpression",
                          "decorators": [],
                          "id": null,
                          "typeParameters": null,
                          "superClass": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4488,
                            "end": 4492
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
                                  "start": 4507,
                                  "end": 4518
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
                                            "start": 4539,
                                            "end": 4544
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "optional": false,
                                          "start": 4539,
                                          "end": 4546
                                        },
                                        "directive": null,
                                        "start": 4539,
                                        "end": 4547
                                      }
                                    ],
                                    "start": 4521,
                                    "end": 4561
                                  },
                                  "expression": false,
                                  "start": 4518,
                                  "end": 4561
                                },
                                "kind": "constructor",
                                "computed": false,
                                "static": false,
                                "override": false,
                                "optional": false,
                                "accessibility": null,
                                "start": 4507,
                                "end": 4561
                              },
                              {
                                "type": "MethodDefinition",
                                "decorators": [],
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4581,
                                  "end": 4584
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
                                          "type": "ThisExpression",
                                          "start": 4612,
                                          "end": 4616
                                        },
                                        "start": 4605,
                                        "end": 4617
                                      }
                                    ],
                                    "start": 4587,
                                    "end": 4631
                                  },
                                  "expression": false,
                                  "start": 4584,
                                  "end": 4631
                                },
                                "kind": "method",
                                "computed": false,
                                "static": false,
                                "override": false,
                                "optional": false,
                                "accessibility": "public",
                                "start": 4574,
                                "end": 4631
                              },
                              {
                                "type": "PropertyDefinition",
                                "decorators": [],
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4651,
                                  "end": 4654
                                },
                                "typeAnnotation": null,
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 4663,
                                    "end": 4667
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 4657,
                                  "end": 4667
                                },
                                "computed": false,
                                "static": false,
                                "declare": false,
                                "override": false,
                                "optional": false,
                                "definite": false,
                                "readonly": false,
                                "accessibility": "public",
                                "start": 4644,
                                "end": 4668
                              }
                            ],
                            "start": 4493,
                            "end": 4678
                          },
                          "abstract": false,
                          "declare": false,
                          "start": 4474,
                          "end": 4678
                        }
                      ],
                      "optional": false,
                      "start": 4462,
                      "end": 4679
                    },
                    "directive": null,
                    "start": 4462,
                    "end": 4680
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 4689,
                        "end": 4694
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 4689,
                      "end": 4696
                    },
                    "directive": null,
                    "start": 4689,
                    "end": 4697
                  }
                ],
                "start": 4452,
                "end": 4703
              },
              "expression": false,
              "start": 4449,
              "end": 4703
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4438,
            "end": 4703
          }
        ],
        "start": 4415,
        "end": 4705
      },
      "abstract": false,
      "declare": false,
      "start": 4362,
      "end": 4705
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithNewDerivedClassExpression",
        "optional": false,
        "typeAnnotation": null,
        "start": 4713,
        "end": 4749
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 4758,
        "end": 4762
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 4769,
              "end": 4773
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 4776,
              "end": 4780
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4769,
            "end": 4781
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
              "start": 4786,
              "end": 4797
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4810,
                          "end": 4817
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4818,
                          "end": 4821
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4810,
                        "end": 4821
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "NewExpression",
                          "callee": {
                            "type": "ClassExpression",
                            "decorators": [],
                            "id": null,
                            "typeParameters": null,
                            "superClass": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4840,
                              "end": 4844
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
                                    "start": 4859,
                                    "end": 4870
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
                                              "start": 4891,
                                              "end": 4896
                                            },
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false,
                                            "start": 4891,
                                            "end": 4898
                                          },
                                          "directive": null,
                                          "start": 4891,
                                          "end": 4899
                                        }
                                      ],
                                      "start": 4873,
                                      "end": 4913
                                    },
                                    "expression": false,
                                    "start": 4870,
                                    "end": 4913
                                  },
                                  "kind": "constructor",
                                  "computed": false,
                                  "static": false,
                                  "override": false,
                                  "optional": false,
                                  "accessibility": null,
                                  "start": 4859,
                                  "end": 4913
                                }
                              ],
                              "start": 4845,
                              "end": 4923
                            },
                            "abstract": false,
                            "declare": false,
                            "start": 4826,
                            "end": 4923
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 4822,
                          "end": 4925
                        }
                      ],
                      "optional": false,
                      "start": 4810,
                      "end": 4926
                    },
                    "directive": null,
                    "start": 4810,
                    "end": 4927
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 4936,
                        "end": 4941
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 4936,
                      "end": 4943
                    },
                    "directive": null,
                    "start": 4936,
                    "end": 4944
                  }
                ],
                "start": 4800,
                "end": 4950
              },
              "expression": false,
              "start": 4797,
              "end": 4950
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4786,
            "end": 4950
          }
        ],
        "start": 4763,
        "end": 4952
      },
      "abstract": false,
      "declare": false,
      "start": 4707,
      "end": 4952
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithObjectAccessors",
        "optional": false,
        "typeAnnotation": null,
        "start": 4960,
        "end": 4986
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 4995,
        "end": 4999
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 5006,
              "end": 5010
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 5013,
              "end": 5017
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5006,
            "end": 5018
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
              "start": 5023,
              "end": 5034
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5053,
                          "end": 5056
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "get",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5077,
                                "end": 5081
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
                                        "value": true,
                                        "raw": "true",
                                        "start": 5109,
                                        "end": 5113
                                      },
                                      "start": 5102,
                                      "end": 5114
                                    }
                                  ],
                                  "start": 5084,
                                  "end": 5128
                                },
                                "expression": false,
                                "start": 5081,
                                "end": 5128
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 5073,
                              "end": 5128
                            },
                            {
                              "type": "Property",
                              "kind": "set",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5146,
                                "end": 5150
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
                                    "name": "param",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5151,
                                    "end": 5156
                                  }
                                ],
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
                                            "start": 5176,
                                            "end": 5180
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "_prop",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 5181,
                                            "end": 5186
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 5176,
                                          "end": 5186
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "param",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 5189,
                                          "end": 5194
                                        },
                                        "start": 5176,
                                        "end": 5194
                                      },
                                      "directive": null,
                                      "start": 5176,
                                      "end": 5195
                                    }
                                  ],
                                  "start": 5158,
                                  "end": 5209
                                },
                                "expression": false,
                                "start": 5150,
                                "end": 5209
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 5142,
                              "end": 5209
                            }
                          ],
                          "start": 5059,
                          "end": 5219
                        },
                        "definite": false,
                        "start": 5053,
                        "end": 5219
                      }
                    ],
                    "declare": false,
                    "start": 5047,
                    "end": 5220
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 5229,
                        "end": 5234
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 5229,
                      "end": 5236
                    },
                    "directive": null,
                    "start": 5229,
                    "end": 5237
                  }
                ],
                "start": 5037,
                "end": 5243
              },
              "expression": false,
              "start": 5034,
              "end": 5243
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5023,
            "end": 5243
          }
        ],
        "start": 5000,
        "end": 5245
      },
      "abstract": false,
      "declare": false,
      "start": 4954,
      "end": 5245
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithObjectAccessorsUsingThisInKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 5253,
        "end": 5294
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 5303,
        "end": 5307
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
              "name": "propName",
              "optional": false,
              "typeAnnotation": null,
              "start": 5314,
              "end": 5322
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "prop",
              "raw": "\"prop\"",
              "start": 5325,
              "end": 5331
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5314,
            "end": 5332
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
              "start": 5337,
              "end": 5348
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5367,
                          "end": 5370
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
                                "name": "_prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5387,
                                "end": 5392
                              },
                              "value": {
                                "type": "Literal",
                                "value": "prop",
                                "raw": "\"prop\"",
                                "start": 5394,
                                "end": 5400
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 5387,
                              "end": 5400
                            },
                            {
                              "type": "Property",
                              "kind": "get",
                              "key": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 5419,
                                  "end": 5423
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "propName",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5424,
                                  "end": 5432
                                },
                                "optional": false,
                                "computed": false,
                                "start": 5419,
                                "end": 5432
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
                                        "value": true,
                                        "raw": "true",
                                        "start": 5461,
                                        "end": 5465
                                      },
                                      "start": 5454,
                                      "end": 5466
                                    }
                                  ],
                                  "start": 5436,
                                  "end": 5480
                                },
                                "expression": false,
                                "start": 5433,
                                "end": 5480
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false,
                              "start": 5414,
                              "end": 5480
                            },
                            {
                              "type": "Property",
                              "kind": "set",
                              "key": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 5499,
                                  "end": 5503
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "propName",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5504,
                                  "end": 5512
                                },
                                "optional": false,
                                "computed": false,
                                "start": 5499,
                                "end": 5512
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
                                    "name": "param",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5514,
                                    "end": 5519
                                  }
                                ],
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
                                            "start": 5539,
                                            "end": 5543
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "_prop",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 5544,
                                            "end": 5549
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 5539,
                                          "end": 5549
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "param",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 5552,
                                          "end": 5557
                                        },
                                        "start": 5539,
                                        "end": 5557
                                      },
                                      "directive": null,
                                      "start": 5539,
                                      "end": 5558
                                    }
                                  ],
                                  "start": 5521,
                                  "end": 5572
                                },
                                "expression": false,
                                "start": 5513,
                                "end": 5572
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false,
                              "start": 5494,
                              "end": 5572
                            }
                          ],
                          "start": 5373,
                          "end": 5582
                        },
                        "definite": false,
                        "start": 5367,
                        "end": 5582
                      }
                    ],
                    "declare": false,
                    "start": 5361,
                    "end": 5583
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 5592,
                        "end": 5597
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 5592,
                      "end": 5599
                    },
                    "directive": null,
                    "start": 5592,
                    "end": 5600
                  }
                ],
                "start": 5351,
                "end": 5606
              },
              "expression": false,
              "start": 5348,
              "end": 5606
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5337,
            "end": 5606
          }
        ],
        "start": 5308,
        "end": 5608
      },
      "abstract": false,
      "declare": false,
      "start": 5247,
      "end": 5608
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithObjectAccessorsUsingThisInBodies",
        "optional": false,
        "typeAnnotation": null,
        "start": 5616,
        "end": 5659
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 5668,
        "end": 5672
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
              "name": "propName",
              "optional": false,
              "typeAnnotation": null,
              "start": 5679,
              "end": 5687
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "prop",
              "raw": "\"prop\"",
              "start": 5690,
              "end": 5696
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5679,
            "end": 5697
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
              "start": 5702,
              "end": 5713
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5732,
                          "end": 5735
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
                                "name": "_prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5752,
                                "end": 5757
                              },
                              "value": {
                                "type": "Literal",
                                "value": "prop",
                                "raw": "\"prop\"",
                                "start": 5759,
                                "end": 5765
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 5752,
                              "end": 5765
                            },
                            {
                              "type": "Property",
                              "kind": "get",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5783,
                                "end": 5787
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
                                          "start": 5815,
                                          "end": 5819
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "_prop",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 5820,
                                          "end": 5825
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 5815,
                                        "end": 5825
                                      },
                                      "start": 5808,
                                      "end": 5826
                                    }
                                  ],
                                  "start": 5790,
                                  "end": 5840
                                },
                                "expression": false,
                                "start": 5787,
                                "end": 5840
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 5779,
                              "end": 5840
                            },
                            {
                              "type": "Property",
                              "kind": "set",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5858,
                                "end": 5862
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
                                    "name": "param",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5863,
                                    "end": 5868
                                  }
                                ],
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
                                            "start": 5888,
                                            "end": 5892
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "_prop",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 5893,
                                            "end": 5898
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 5888,
                                          "end": 5898
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "param",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 5901,
                                          "end": 5906
                                        },
                                        "start": 5888,
                                        "end": 5906
                                      },
                                      "directive": null,
                                      "start": 5888,
                                      "end": 5907
                                    }
                                  ],
                                  "start": 5870,
                                  "end": 5921
                                },
                                "expression": false,
                                "start": 5862,
                                "end": 5921
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 5854,
                              "end": 5921
                            }
                          ],
                          "start": 5738,
                          "end": 5931
                        },
                        "definite": false,
                        "start": 5732,
                        "end": 5931
                      }
                    ],
                    "declare": false,
                    "start": 5726,
                    "end": 5932
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 5941,
                        "end": 5946
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 5941,
                      "end": 5948
                    },
                    "directive": null,
                    "start": 5941,
                    "end": 5949
                  }
                ],
                "start": 5716,
                "end": 5955
              },
              "expression": false,
              "start": 5713,
              "end": 5955
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5702,
            "end": 5955
          }
        ],
        "start": 5673,
        "end": 5957
      },
      "abstract": false,
      "declare": false,
      "start": 5610,
      "end": 5957
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithObjectComputedPropertyBody",
        "optional": false,
        "typeAnnotation": null,
        "start": 5965,
        "end": 6002
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6011,
        "end": 6015
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
              "name": "propName",
              "optional": false,
              "typeAnnotation": null,
              "start": 6022,
              "end": 6030
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "prop",
              "raw": "\"prop\"",
              "start": 6033,
              "end": 6039
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 6022,
            "end": 6040
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
              "start": 6045,
              "end": 6056
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6075,
                          "end": 6078
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
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6095,
                                "end": 6099
                              },
                              "value": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 6101,
                                  "end": 6105
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "propName",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6106,
                                  "end": 6114
                                },
                                "optional": false,
                                "computed": false,
                                "start": 6101,
                                "end": 6114
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 6095,
                              "end": 6114
                            }
                          ],
                          "start": 6081,
                          "end": 6125
                        },
                        "definite": false,
                        "start": 6075,
                        "end": 6125
                      }
                    ],
                    "declare": false,
                    "start": 6069,
                    "end": 6126
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 6135,
                        "end": 6140
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 6135,
                      "end": 6142
                    },
                    "directive": null,
                    "start": 6135,
                    "end": 6143
                  }
                ],
                "start": 6059,
                "end": 6149
              },
              "expression": false,
              "start": 6056,
              "end": 6149
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 6045,
            "end": 6149
          }
        ],
        "start": 6016,
        "end": 6151
      },
      "abstract": false,
      "declare": false,
      "start": 5959,
      "end": 6151
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithObjectComputedPropertyName",
        "optional": false,
        "typeAnnotation": null,
        "start": 6159,
        "end": 6196
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6205,
        "end": 6209
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
              "name": "propName",
              "optional": false,
              "typeAnnotation": null,
              "start": 6216,
              "end": 6224
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "prop",
              "raw": "\"prop\"",
              "start": 6227,
              "end": 6233
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 6216,
            "end": 6234
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
              "start": 6239,
              "end": 6250
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6269,
                          "end": 6272
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 6290,
                                  "end": 6294
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "propName",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6295,
                                  "end": 6303
                                },
                                "optional": false,
                                "computed": false,
                                "start": 6290,
                                "end": 6303
                              },
                              "value": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 6306,
                                "end": 6310
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false,
                              "start": 6289,
                              "end": 6310
                            }
                          ],
                          "start": 6275,
                          "end": 6321
                        },
                        "definite": false,
                        "start": 6269,
                        "end": 6321
                      }
                    ],
                    "declare": false,
                    "start": 6263,
                    "end": 6322
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 6331,
                        "end": 6336
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 6331,
                      "end": 6338
                    },
                    "directive": null,
                    "start": 6331,
                    "end": 6339
                  }
                ],
                "start": 6253,
                "end": 6345
              },
              "expression": false,
              "start": 6250,
              "end": 6345
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 6239,
            "end": 6345
          }
        ],
        "start": 6210,
        "end": 6347
      },
      "abstract": false,
      "declare": false,
      "start": 6153,
      "end": 6347
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithObjectMethod",
        "optional": false,
        "typeAnnotation": null,
        "start": 6355,
        "end": 6378
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6387,
        "end": 6391
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 6398,
              "end": 6402
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 6405,
              "end": 6409
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 6398,
            "end": 6410
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
              "start": 6415,
              "end": 6426
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6445,
                          "end": 6448
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
                                "name": "getProp",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6465,
                                "end": 6472
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
                                        "type": "ThisExpression",
                                        "start": 6500,
                                        "end": 6504
                                      },
                                      "start": 6493,
                                      "end": 6505
                                    }
                                  ],
                                  "start": 6475,
                                  "end": 6519
                                },
                                "expression": false,
                                "start": 6472,
                                "end": 6519
                              },
                              "method": true,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 6465,
                              "end": 6519
                            }
                          ],
                          "start": 6451,
                          "end": 6530
                        },
                        "definite": false,
                        "start": 6445,
                        "end": 6530
                      }
                    ],
                    "declare": false,
                    "start": 6439,
                    "end": 6531
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 6540,
                        "end": 6545
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 6540,
                      "end": 6547
                    },
                    "directive": null,
                    "start": 6540,
                    "end": 6548
                  }
                ],
                "start": 6429,
                "end": 6554
              },
              "expression": false,
              "start": 6426,
              "end": 6554
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 6415,
            "end": 6554
          }
        ],
        "start": 6392,
        "end": 6556
      },
      "abstract": false,
      "declare": false,
      "start": 6349,
      "end": 6556
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6562,
            "end": 6563
          },
          "init": null,
          "definite": false,
          "start": 6562,
          "end": 6563
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 6565,
            "end": 6566
          },
          "init": null,
          "definite": false,
          "start": 6565,
          "end": 6566
        }
      ],
      "declare": false,
      "start": 6558,
      "end": 6567
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
            "name": "DerivedWithLoops",
            "optional": false,
            "typeAnnotation": null,
            "start": 6575,
            "end": 6591
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6614,
                  "end": 6618
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
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6629,
                        "end": 6633
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 6636,
                        "end": 6640
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 6629,
                      "end": 6641
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
                        "start": 6650,
                        "end": 6661
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
                              "type": "ForStatement",
                              "init": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Super",
                                  "start": 6682,
                                  "end": 6687
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 6682,
                                "end": 6689
                              },
                              "test": null,
                              "update": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 6693,
                                "end": 6695
                              },
                              "start": 6678,
                              "end": 6695
                            }
                          ],
                          "start": 6664,
                          "end": 6705
                        },
                        "expression": false,
                        "start": 6661,
                        "end": 6705
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6650,
                      "end": 6705
                    }
                  ],
                  "start": 6619,
                  "end": 6711
                },
                "abstract": false,
                "declare": false,
                "start": 6600,
                "end": 6711
              },
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6731,
                  "end": 6735
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
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6746,
                        "end": 6750
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 6753,
                        "end": 6757
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 6746,
                      "end": 6758
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
                        "start": 6767,
                        "end": 6778
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
                              "type": "ForStatement",
                              "init": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6799,
                                "end": 6800
                              },
                              "test": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Super",
                                  "start": 6802,
                                  "end": 6807
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 6802,
                                "end": 6809
                              },
                              "update": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 6812,
                                "end": 6814
                              },
                              "start": 6795,
                              "end": 6814
                            }
                          ],
                          "start": 6781,
                          "end": 6824
                        },
                        "expression": false,
                        "start": 6778,
                        "end": 6824
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6767,
                      "end": 6824
                    }
                  ],
                  "start": 6736,
                  "end": 6830
                },
                "abstract": false,
                "declare": false,
                "start": 6717,
                "end": 6830
              },
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6850,
                  "end": 6854
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
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6865,
                        "end": 6869
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 6872,
                        "end": 6876
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 6865,
                      "end": 6877
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
                        "start": 6886,
                        "end": 6897
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
                              "type": "ForStatement",
                              "init": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6918,
                                "end": 6919
                              },
                              "test": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6921,
                                "end": 6922
                              },
                              "update": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Super",
                                  "start": 6924,
                                  "end": 6929
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 6924,
                                "end": 6931
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 6933,
                                "end": 6935
                              },
                              "start": 6914,
                              "end": 6935
                            }
                          ],
                          "start": 6900,
                          "end": 6945
                        },
                        "expression": false,
                        "start": 6897,
                        "end": 6945
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6886,
                      "end": 6945
                    }
                  ],
                  "start": 6855,
                  "end": 6951
                },
                "abstract": false,
                "declare": false,
                "start": 6836,
                "end": 6951
              },
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6971,
                  "end": 6975
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
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6986,
                        "end": 6990
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 6993,
                        "end": 6997
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 6986,
                      "end": 6998
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
                        "start": 7007,
                        "end": 7018
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
                              "type": "ForStatement",
                              "init": null,
                              "test": null,
                              "update": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Super",
                                  "start": 7043,
                                  "end": 7048
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 7043,
                                "end": 7050
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "BreakStatement",
                                    "label": null,
                                    "start": 7054,
                                    "end": 7060
                                  }
                                ],
                                "start": 7052,
                                "end": 7062
                              },
                              "start": 7035,
                              "end": 7062
                            }
                          ],
                          "start": 7021,
                          "end": 7072
                        },
                        "expression": false,
                        "start": 7018,
                        "end": 7072
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 7007,
                      "end": 7072
                    }
                  ],
                  "start": 6976,
                  "end": 7078
                },
                "abstract": false,
                "declare": false,
                "start": 6957,
                "end": 7078
              },
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7098,
                  "end": 7102
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
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7113,
                        "end": 7117
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 7120,
                        "end": 7124
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 7113,
                      "end": 7125
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
                        "start": 7134,
                        "end": 7145
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
                              "type": "ForOfStatement",
                              "await": false,
                              "left": {
                                "type": "VariableDeclaration",
                                "kind": "const",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7173,
                                      "end": 7174
                                    },
                                    "init": null,
                                    "definite": false,
                                    "start": 7173,
                                    "end": 7174
                                  }
                                ],
                                "declare": false,
                                "start": 7167,
                                "end": 7174
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Super",
                                  "start": 7178,
                                  "end": 7183
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 7178,
                                "end": 7185
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 7187,
                                "end": 7189
                              },
                              "start": 7162,
                              "end": 7189
                            }
                          ],
                          "start": 7148,
                          "end": 7199
                        },
                        "expression": false,
                        "start": 7145,
                        "end": 7199
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 7134,
                      "end": 7199
                    }
                  ],
                  "start": 7103,
                  "end": 7205
                },
                "abstract": false,
                "declare": false,
                "start": 7084,
                "end": 7205
              },
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7225,
                  "end": 7229
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
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7240,
                        "end": 7244
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 7247,
                        "end": 7251
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 7240,
                      "end": 7252
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
                        "start": 7261,
                        "end": 7272
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
                              "type": "WhileStatement",
                              "test": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Super",
                                  "start": 7296,
                                  "end": 7301
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 7296,
                                "end": 7303
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 7305,
                                "end": 7307
                              },
                              "start": 7289,
                              "end": 7307
                            }
                          ],
                          "start": 7275,
                          "end": 7317
                        },
                        "expression": false,
                        "start": 7272,
                        "end": 7317
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 7261,
                      "end": 7317
                    }
                  ],
                  "start": 7230,
                  "end": 7323
                },
                "abstract": false,
                "declare": false,
                "start": 7211,
                "end": 7323
              },
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7343,
                  "end": 7347
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
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7358,
                        "end": 7362
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 7365,
                        "end": 7369
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 7358,
                      "end": 7370
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
                        "start": 7379,
                        "end": 7390
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
                              "type": "DoWhileStatement",
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 7410,
                                "end": 7412
                              },
                              "test": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Super",
                                  "start": 7420,
                                  "end": 7425
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 7420,
                                "end": 7427
                              },
                              "start": 7407,
                              "end": 7429
                            }
                          ],
                          "start": 7393,
                          "end": 7439
                        },
                        "expression": false,
                        "start": 7390,
                        "end": 7439
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 7379,
                      "end": 7439
                    }
                  ],
                  "start": 7348,
                  "end": 7445
                },
                "abstract": false,
                "declare": false,
                "start": 7329,
                "end": 7445
              },
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7465,
                  "end": 7469
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
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7480,
                        "end": 7484
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 7487,
                        "end": 7491
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 7480,
                      "end": 7492
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
                        "start": 7501,
                        "end": 7512
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
                              "type": "IfStatement",
                              "test": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Super",
                                  "start": 7533,
                                  "end": 7538
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 7533,
                                "end": 7540
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 7542,
                                "end": 7544
                              },
                              "alternate": null,
                              "start": 7529,
                              "end": 7544
                            }
                          ],
                          "start": 7515,
                          "end": 7554
                        },
                        "expression": false,
                        "start": 7512,
                        "end": 7554
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 7501,
                      "end": 7554
                    }
                  ],
                  "start": 7470,
                  "end": 7560
                },
                "abstract": false,
                "declare": false,
                "start": 7451,
                "end": 7560
              },
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7580,
                  "end": 7584
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
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7595,
                        "end": 7599
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 7602,
                        "end": 7606
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 7595,
                      "end": 7607
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
                        "start": 7616,
                        "end": 7627
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
                              "type": "SwitchStatement",
                              "discriminant": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Super",
                                  "start": 7652,
                                  "end": 7657
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 7652,
                                "end": 7659
                              },
                              "cases": [],
                              "start": 7644,
                              "end": 7663
                            }
                          ],
                          "start": 7630,
                          "end": 7673
                        },
                        "expression": false,
                        "start": 7627,
                        "end": 7673
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 7616,
                      "end": 7673
                    }
                  ],
                  "start": 7585,
                  "end": 7679
                },
                "abstract": false,
                "declare": false,
                "start": 7566,
                "end": 7679
              }
            ],
            "start": 6594,
            "end": 7682
          },
          "definite": false,
          "start": 6575,
          "end": 7682
        }
      ],
      "declare": false,
      "start": 6569,
      "end": 7682
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 7682
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "decorate",
    "start": 14,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 30,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 36,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 47,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "receivesAnything",
    "start": 72,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 104,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 110,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 119,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 127,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "prop",
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
    "type": "Boolean",
    "value": "true",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 155,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "receivesAnything",
    "start": 185,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 213,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 231,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 237,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 246,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 254,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 265,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 272,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 282,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 306,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "receivesAnything",
    "start": 312,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 329,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 344,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 362,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 368,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 377,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 385,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 396,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 401,
    "end": 402
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 403,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 413,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 437,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "receivesAnything",
    "start": 443,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 459,
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
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 471,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 477,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 493,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 499,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 508,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 516,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 527,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 532,
    "end": 533
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 534,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 544,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 558,
    "end": 559
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 568,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "receivesAnything",
    "start": 574,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 590,
    "end": 591
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 591,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "super",
    "start": 606,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 612,
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
    "type": "Punctuator",
    "value": "}",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 625,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 628,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "Derived5",
    "start": 634,
    "end": 642
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 643,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 651,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 662,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 667,
    "end": 668
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 669,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 679,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "super",
    "start": 703,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 720,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "receivesAnything",
    "start": 726,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
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
    "start": 755,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "Derived6",
    "start": 761,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 770,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 778,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 789,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 794,
    "end": 795
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 796,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 806,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 820,
    "end": 821
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 830,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 835,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 836,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 841,
    "end": 842
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 851,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "receivesAnything",
    "start": 857,
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
    "value": ")",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 886,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "Derived7",
    "start": 892,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 901,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 909,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 920,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 925,
    "end": 926
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 927,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 937,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 951,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 961,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 968,
    "end": 969
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 978,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "receivesAnything",
    "start": 984,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1001,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1017,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "Derived8",
    "start": 1023,
    "end": 1031
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1032,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1040,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1051,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1058,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1068,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1092,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1098,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1113,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "receivesAnything",
    "start": 1119,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1136,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1152,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "DerivedWithArrowFunction",
    "start": 1158,
    "end": 1182
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1183,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1191,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1202,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1209,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1219,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1247,
    "end": 1249
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1250,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1267,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1285,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "DerivedWithArrowFunctionParameter",
    "start": 1291,
    "end": 1324
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1325,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1333,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1344,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1351,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1361,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1385,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "lambda",
    "start": 1391,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1401,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1409,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1415,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1430,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1448,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "DerivedWithDecoratorOnClass",
    "start": 1454,
    "end": 1481
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1482,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1490,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1501,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1508,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1518,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "decorate",
    "start": 1543,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1552,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1566,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "InnerClass",
    "start": 1572,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1596,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1614,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "DerivedWithDecoratorOnClassMethod",
    "start": 1620,
    "end": 1653
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1654,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1662,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1673,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1680,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1690,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1714,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "InnerClass",
    "start": 1720,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "decorate",
    "start": 1746,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1755,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Identifier",
    "value": "innerMethod",
    "start": 1773,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1810,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1828,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "DerivedWithDecoratorOnClassProperty",
    "start": 1834,
    "end": 1869
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1870,
    "end": 1877
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1878,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1889,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1896,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1906,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1930,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "InnerClass",
    "start": 1936,
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
    "value": "@",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "decorate",
    "start": 1962,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1971,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "innerProp",
    "start": 1989,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2001,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2026,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2044,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "DerivedWithFunctionDeclaration",
    "start": 2050,
    "end": 2080
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2081,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2089,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2100,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2107,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2117,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2141,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "declaration",
    "start": 2150,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2178,
    "end": 2184
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2185,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2209,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2227,
    "end": 2232
  },
  {
    "type": "Identifier",
    "value": "DerivedWithFunctionDeclarationAndThisParam",
    "start": 2233,
    "end": 2275
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2276,
    "end": 2283
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2284,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2295,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2302,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2312,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2336,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "declaration",
    "start": 2345,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 2357,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2365,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2385,
    "end": 2391
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 2392,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2417,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2435,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "DerivedWithFunctionExpression",
    "start": 2441,
    "end": 2470
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2471,
    "end": 2478
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2479,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2490,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2497,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2507,
    "end": 2518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2532,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2558,
    "end": 2564
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2565,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2579,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2593,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2611,
    "end": 2616
  },
  {
    "type": "Identifier",
    "value": "DerivedWithParenthesis",
    "start": 2617,
    "end": 2639
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2640,
    "end": 2647
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2648,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2659,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2666,
    "end": 2670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2676,
    "end": 2687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2701,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2720,
    "end": 2725
  },
  {
    "type": "Identifier",
    "value": "DerivedWithParenthesisAfterStatement",
    "start": 2726,
    "end": 2762
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2763,
    "end": 2770
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2771,
    "end": 2775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2782,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2787,
    "end": 2788
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2789,
    "end": 2793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2799,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2811,
    "end": 2812
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2813,
    "end": 2814
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2823,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2828,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2843,
    "end": 2848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2862,
    "end": 2867
  },
  {
    "type": "Identifier",
    "value": "DerivedWithParenthesisBeforeStatement",
    "start": 2868,
    "end": 2905
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2906,
    "end": 2913
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2914,
    "end": 2918
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2925,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2932,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2942,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2966,
    "end": 2967
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2967,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2973,
    "end": 2974
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2974,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2985,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2990,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3005,
    "end": 3010
  },
  {
    "type": "Identifier",
    "value": "DerivedWithClassDeclaration",
    "start": 3011,
    "end": 3038
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3039,
    "end": 3046
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3047,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3052,
    "end": 3053
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 3058,
    "end": 3062
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3063,
    "end": 3064
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3065,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3069,
    "end": 3070
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3075,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3089,
    "end": 3090
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3099,
    "end": 3104
  },
  {
    "type": "Identifier",
    "value": "InnerClass",
    "start": 3105,
    "end": 3115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3130,
    "end": 3137
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 3138,
    "end": 3144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3144,
    "end": 3145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3145,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3165,
    "end": 3171
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3172,
    "end": 3176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3176,
    "end": 3177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3190,
    "end": 3191
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3204,
    "end": 3211
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 3212,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3238,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3252,
    "end": 3253
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3270,
    "end": 3274
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 3275,
    "end": 3283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3283,
    "end": 3284
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3301,
    "end": 3305
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3305,
    "end": 3306
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 3306,
    "end": 3312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3312,
    "end": 3313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3338,
    "end": 3339
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3348,
    "end": 3353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3355,
    "end": 3356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3361,
    "end": 3362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3363,
    "end": 3364
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3366,
    "end": 3371
  },
  {
    "type": "Identifier",
    "value": "DerivedWithClassDeclarationExtendingMember",
    "start": 3372,
    "end": 3414
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3415,
    "end": 3422
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3423,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3428,
    "end": 3429
  },
  {
    "type": "Identifier",
    "value": "memberClass",
    "start": 3434,
    "end": 3445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3448,
    "end": 3453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3454,
    "end": 3455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3456,
    "end": 3457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3463,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3474,
    "end": 3475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3475,
    "end": 3476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3487,
    "end": 3492
  },
  {
    "type": "Identifier",
    "value": "InnerClass",
    "start": 3493,
    "end": 3503
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3504,
    "end": 3511
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3512,
    "end": 3516
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3516,
    "end": 3517
  },
  {
    "type": "Identifier",
    "value": "memberClass",
    "start": 3517,
    "end": 3528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3529,
    "end": 3530
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3543,
    "end": 3550
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 3551,
    "end": 3557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3558,
    "end": 3559
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3560,
    "end": 3561
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3578,
    "end": 3584
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3585,
    "end": 3589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3589,
    "end": 3590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3617,
    "end": 3624
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 3625,
    "end": 3633
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3634,
    "end": 3635
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 3636,
    "end": 3637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3637,
    "end": 3638
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3651,
    "end": 3662
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3683,
    "end": 3688
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3688,
    "end": 3689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3689,
    "end": 3690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3690,
    "end": 3691
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3708,
    "end": 3712
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3712,
    "end": 3713
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 3713,
    "end": 3721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3721,
    "end": 3722
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3739,
    "end": 3743
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3743,
    "end": 3744
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 3744,
    "end": 3750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3750,
    "end": 3751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3751,
    "end": 3752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3752,
    "end": 3753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3766,
    "end": 3767
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3776,
    "end": 3777
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3786,
    "end": 3791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3791,
    "end": 3792
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3792,
    "end": 3793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3793,
    "end": 3794
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3799,
    "end": 3800
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3801,
    "end": 3802
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3804,
    "end": 3809
  },
  {
    "type": "Identifier",
    "value": "DerivedWithClassExpression",
    "start": 3810,
    "end": 3836
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3837,
    "end": 3844
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3845,
    "end": 3849
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3850,
    "end": 3851
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 3856,
    "end": 3860
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3861,
    "end": 3862
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3863,
    "end": 3867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3867,
    "end": 3868
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3873,
    "end": 3884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3884,
    "end": 3885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3885,
    "end": 3886
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3887,
    "end": 3888
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3897,
    "end": 3904
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3904,
    "end": 3905
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3905,
    "end": 3908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3908,
    "end": 3909
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3909,
    "end": 3914
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3929,
    "end": 3936
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 3937,
    "end": 3943
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3944,
    "end": 3945
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3946,
    "end": 3947
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3964,
    "end": 3970
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3971,
    "end": 3975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3975,
    "end": 3976
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3989,
    "end": 3990
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4003,
    "end": 4010
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 4011,
    "end": 4019
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4020,
    "end": 4021
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 4022,
    "end": 4023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4023,
    "end": 4024
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 4037,
    "end": 4048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4048,
    "end": 4049
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4049,
    "end": 4050
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4051,
    "end": 4052
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4069,
    "end": 4073
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4073,
    "end": 4074
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 4074,
    "end": 4082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4082,
    "end": 4083
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4100,
    "end": 4104
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4104,
    "end": 4105
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 4105,
    "end": 4111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4111,
    "end": 4112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4112,
    "end": 4113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4113,
    "end": 4114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4127,
    "end": 4128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4137,
    "end": 4138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4138,
    "end": 4139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4139,
    "end": 4140
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 4149,
    "end": 4154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4154,
    "end": 4155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4155,
    "end": 4156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4156,
    "end": 4157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4162,
    "end": 4163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4164,
    "end": 4165
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4167,
    "end": 4172
  },
  {
    "type": "Identifier",
    "value": "DerivedWithClassExpressionExtendingMember",
    "start": 4173,
    "end": 4214
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4215,
    "end": 4222
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4223,
    "end": 4227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4228,
    "end": 4229
  },
  {
    "type": "Identifier",
    "value": "memberClass",
    "start": 4234,
    "end": 4245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4246,
    "end": 4247
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4248,
    "end": 4253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4254,
    "end": 4255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4256,
    "end": 4257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4257,
    "end": 4258
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 4263,
    "end": 4274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4274,
    "end": 4275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4275,
    "end": 4276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4277,
    "end": 4278
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4287,
    "end": 4294
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4294,
    "end": 4295
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4295,
    "end": 4298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4298,
    "end": 4299
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4299,
    "end": 4304
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4305,
    "end": 4312
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4313,
    "end": 4317
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4317,
    "end": 4318
  },
  {
    "type": "Identifier",
    "value": "memberClass",
    "start": 4318,
    "end": 4329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4330,
    "end": 4331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4332,
    "end": 4333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4333,
    "end": 4334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4334,
    "end": 4335
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 4344,
    "end": 4349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4349,
    "end": 4350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4350,
    "end": 4351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4351,
    "end": 4352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4357,
    "end": 4358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4359,
    "end": 4360
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4362,
    "end": 4367
  },
  {
    "type": "Identifier",
    "value": "DerivedWithDerivedClassExpression",
    "start": 4368,
    "end": 4401
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4402,
    "end": 4409
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4410,
    "end": 4414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4415,
    "end": 4416
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 4421,
    "end": 4425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4426,
    "end": 4427
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4428,
    "end": 4432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4432,
    "end": 4433
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 4438,
    "end": 4449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4449,
    "end": 4450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4450,
    "end": 4451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4452,
    "end": 4453
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4462,
    "end": 4469
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4469,
    "end": 4470
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4470,
    "end": 4473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4473,
    "end": 4474
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4474,
    "end": 4479
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4480,
    "end": 4487
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4488,
    "end": 4492
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4493,
    "end": 4494
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 4507,
    "end": 4518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4518,
    "end": 4519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4519,
    "end": 4520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4521,
    "end": 4522
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 4539,
    "end": 4544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4544,
    "end": 4545
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4545,
    "end": 4546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4546,
    "end": 4547
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4560,
    "end": 4561
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4574,
    "end": 4580
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4581,
    "end": 4584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4584,
    "end": 4585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4585,
    "end": 4586
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4587,
    "end": 4588
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4605,
    "end": 4611
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4612,
    "end": 4616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4616,
    "end": 4617
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4630,
    "end": 4631
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4644,
    "end": 4650
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4651,
    "end": 4654
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4655,
    "end": 4656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4657,
    "end": 4658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4658,
    "end": 4659
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4660,
    "end": 4662
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4663,
    "end": 4667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4667,
    "end": 4668
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4677,
    "end": 4678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4678,
    "end": 4679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4679,
    "end": 4680
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 4689,
    "end": 4694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4694,
    "end": 4695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4695,
    "end": 4696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4696,
    "end": 4697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4702,
    "end": 4703
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4704,
    "end": 4705
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4707,
    "end": 4712
  },
  {
    "type": "Identifier",
    "value": "DerivedWithNewDerivedClassExpression",
    "start": 4713,
    "end": 4749
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4750,
    "end": 4757
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4758,
    "end": 4762
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4763,
    "end": 4764
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 4769,
    "end": 4773
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4774,
    "end": 4775
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4776,
    "end": 4780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4780,
    "end": 4781
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 4786,
    "end": 4797
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4797,
    "end": 4798
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4798,
    "end": 4799
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4800,
    "end": 4801
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4810,
    "end": 4817
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4817,
    "end": 4818
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4818,
    "end": 4821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4821,
    "end": 4822
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4822,
    "end": 4825
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4826,
    "end": 4831
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4832,
    "end": 4839
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4840,
    "end": 4844
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4845,
    "end": 4846
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 4859,
    "end": 4870
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4870,
    "end": 4871
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4871,
    "end": 4872
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4873,
    "end": 4874
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 4891,
    "end": 4896
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4896,
    "end": 4897
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4897,
    "end": 4898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4898,
    "end": 4899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4912,
    "end": 4913
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4922,
    "end": 4923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4923,
    "end": 4924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4924,
    "end": 4925
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4925,
    "end": 4926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4926,
    "end": 4927
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 4936,
    "end": 4941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4941,
    "end": 4942
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4942,
    "end": 4943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4943,
    "end": 4944
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4949,
    "end": 4950
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4951,
    "end": 4952
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4954,
    "end": 4959
  },
  {
    "type": "Identifier",
    "value": "DerivedWithObjectAccessors",
    "start": 4960,
    "end": 4986
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4987,
    "end": 4994
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4995,
    "end": 4999
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5000,
    "end": 5001
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 5006,
    "end": 5010
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5011,
    "end": 5012
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 5013,
    "end": 5017
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5017,
    "end": 5018
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 5023,
    "end": 5034
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5034,
    "end": 5035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5035,
    "end": 5036
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5037,
    "end": 5038
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5047,
    "end": 5052
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5053,
    "end": 5056
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5057,
    "end": 5058
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5059,
    "end": 5060
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 5073,
    "end": 5076
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 5077,
    "end": 5081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5081,
    "end": 5082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5082,
    "end": 5083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5084,
    "end": 5085
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5102,
    "end": 5108
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 5109,
    "end": 5113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5113,
    "end": 5114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5127,
    "end": 5128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5128,
    "end": 5129
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 5142,
    "end": 5145
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 5146,
    "end": 5150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5150,
    "end": 5151
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 5151,
    "end": 5156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5156,
    "end": 5157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5158,
    "end": 5159
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5176,
    "end": 5180
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5180,
    "end": 5181
  },
  {
    "type": "Identifier",
    "value": "_prop",
    "start": 5181,
    "end": 5186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5187,
    "end": 5188
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 5189,
    "end": 5194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5194,
    "end": 5195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5208,
    "end": 5209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5218,
    "end": 5219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5219,
    "end": 5220
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 5229,
    "end": 5234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5234,
    "end": 5235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5235,
    "end": 5236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5236,
    "end": 5237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5242,
    "end": 5243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5244,
    "end": 5245
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5247,
    "end": 5252
  },
  {
    "type": "Identifier",
    "value": "DerivedWithObjectAccessorsUsingThisInKeys",
    "start": 5253,
    "end": 5294
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5295,
    "end": 5302
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 5303,
    "end": 5307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5308,
    "end": 5309
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 5314,
    "end": 5322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5323,
    "end": 5324
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 5325,
    "end": 5331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5331,
    "end": 5332
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 5337,
    "end": 5348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5348,
    "end": 5349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5349,
    "end": 5350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5351,
    "end": 5352
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5361,
    "end": 5366
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5367,
    "end": 5370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5371,
    "end": 5372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5373,
    "end": 5374
  },
  {
    "type": "Identifier",
    "value": "_prop",
    "start": 5387,
    "end": 5392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5392,
    "end": 5393
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 5394,
    "end": 5400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5400,
    "end": 5401
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 5414,
    "end": 5417
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5418,
    "end": 5419
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5419,
    "end": 5423
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5423,
    "end": 5424
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 5424,
    "end": 5432
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5432,
    "end": 5433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5433,
    "end": 5434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5434,
    "end": 5435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5436,
    "end": 5437
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5454,
    "end": 5460
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 5461,
    "end": 5465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5465,
    "end": 5466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5479,
    "end": 5480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5480,
    "end": 5481
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 5494,
    "end": 5497
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5498,
    "end": 5499
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5499,
    "end": 5503
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5503,
    "end": 5504
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 5504,
    "end": 5512
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5512,
    "end": 5513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5513,
    "end": 5514
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 5514,
    "end": 5519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5519,
    "end": 5520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5521,
    "end": 5522
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5539,
    "end": 5543
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5543,
    "end": 5544
  },
  {
    "type": "Identifier",
    "value": "_prop",
    "start": 5544,
    "end": 5549
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5550,
    "end": 5551
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 5552,
    "end": 5557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5557,
    "end": 5558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5571,
    "end": 5572
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5581,
    "end": 5582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5582,
    "end": 5583
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 5592,
    "end": 5597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5597,
    "end": 5598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5598,
    "end": 5599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5599,
    "end": 5600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5605,
    "end": 5606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5607,
    "end": 5608
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5610,
    "end": 5615
  },
  {
    "type": "Identifier",
    "value": "DerivedWithObjectAccessorsUsingThisInBodies",
    "start": 5616,
    "end": 5659
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5660,
    "end": 5667
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 5668,
    "end": 5672
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5673,
    "end": 5674
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 5679,
    "end": 5687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5688,
    "end": 5689
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 5690,
    "end": 5696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5696,
    "end": 5697
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 5702,
    "end": 5713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5713,
    "end": 5714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5714,
    "end": 5715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5716,
    "end": 5717
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5726,
    "end": 5731
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5732,
    "end": 5735
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5736,
    "end": 5737
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5738,
    "end": 5739
  },
  {
    "type": "Identifier",
    "value": "_prop",
    "start": 5752,
    "end": 5757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5757,
    "end": 5758
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 5759,
    "end": 5765
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5765,
    "end": 5766
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 5779,
    "end": 5782
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 5783,
    "end": 5787
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5787,
    "end": 5788
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5788,
    "end": 5789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5790,
    "end": 5791
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5808,
    "end": 5814
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5815,
    "end": 5819
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5819,
    "end": 5820
  },
  {
    "type": "Identifier",
    "value": "_prop",
    "start": 5820,
    "end": 5825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5825,
    "end": 5826
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5839,
    "end": 5840
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5840,
    "end": 5841
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 5854,
    "end": 5857
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 5858,
    "end": 5862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5862,
    "end": 5863
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 5863,
    "end": 5868
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5868,
    "end": 5869
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5870,
    "end": 5871
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5888,
    "end": 5892
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5892,
    "end": 5893
  },
  {
    "type": "Identifier",
    "value": "_prop",
    "start": 5893,
    "end": 5898
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5899,
    "end": 5900
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 5901,
    "end": 5906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5906,
    "end": 5907
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5920,
    "end": 5921
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5930,
    "end": 5931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5931,
    "end": 5932
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 5941,
    "end": 5946
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5946,
    "end": 5947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5947,
    "end": 5948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5948,
    "end": 5949
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5954,
    "end": 5955
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5956,
    "end": 5957
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5959,
    "end": 5964
  },
  {
    "type": "Identifier",
    "value": "DerivedWithObjectComputedPropertyBody",
    "start": 5965,
    "end": 6002
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6003,
    "end": 6010
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 6011,
    "end": 6015
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6016,
    "end": 6017
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 6022,
    "end": 6030
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6031,
    "end": 6032
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 6033,
    "end": 6039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6039,
    "end": 6040
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 6045,
    "end": 6056
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6056,
    "end": 6057
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6057,
    "end": 6058
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6059,
    "end": 6060
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6069,
    "end": 6074
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6075,
    "end": 6078
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6079,
    "end": 6080
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6081,
    "end": 6082
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 6095,
    "end": 6099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6099,
    "end": 6100
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 6101,
    "end": 6105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6105,
    "end": 6106
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 6106,
    "end": 6114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6114,
    "end": 6115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6124,
    "end": 6125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6125,
    "end": 6126
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 6135,
    "end": 6140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6140,
    "end": 6141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6141,
    "end": 6142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6142,
    "end": 6143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6148,
    "end": 6149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6150,
    "end": 6151
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6153,
    "end": 6158
  },
  {
    "type": "Identifier",
    "value": "DerivedWithObjectComputedPropertyName",
    "start": 6159,
    "end": 6196
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6197,
    "end": 6204
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 6205,
    "end": 6209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6210,
    "end": 6211
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 6216,
    "end": 6224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6225,
    "end": 6226
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 6227,
    "end": 6233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6233,
    "end": 6234
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 6239,
    "end": 6250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6250,
    "end": 6251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6251,
    "end": 6252
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6253,
    "end": 6254
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6263,
    "end": 6268
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6269,
    "end": 6272
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6273,
    "end": 6274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6275,
    "end": 6276
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6289,
    "end": 6290
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 6290,
    "end": 6294
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6294,
    "end": 6295
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 6295,
    "end": 6303
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6303,
    "end": 6304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6304,
    "end": 6305
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 6306,
    "end": 6310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6310,
    "end": 6311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6320,
    "end": 6321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6321,
    "end": 6322
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 6331,
    "end": 6336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6336,
    "end": 6337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6337,
    "end": 6338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6338,
    "end": 6339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6344,
    "end": 6345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6346,
    "end": 6347
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6349,
    "end": 6354
  },
  {
    "type": "Identifier",
    "value": "DerivedWithObjectMethod",
    "start": 6355,
    "end": 6378
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6379,
    "end": 6386
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 6387,
    "end": 6391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6392,
    "end": 6393
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 6398,
    "end": 6402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6403,
    "end": 6404
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 6405,
    "end": 6409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6409,
    "end": 6410
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 6415,
    "end": 6426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6426,
    "end": 6427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6427,
    "end": 6428
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6429,
    "end": 6430
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6439,
    "end": 6444
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6445,
    "end": 6448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6449,
    "end": 6450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6451,
    "end": 6452
  },
  {
    "type": "Identifier",
    "value": "getProp",
    "start": 6465,
    "end": 6472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6472,
    "end": 6473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6473,
    "end": 6474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6475,
    "end": 6476
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6493,
    "end": 6499
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 6500,
    "end": 6504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6504,
    "end": 6505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6518,
    "end": 6519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6519,
    "end": 6520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6529,
    "end": 6530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6530,
    "end": 6531
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 6540,
    "end": 6545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6545,
    "end": 6546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6546,
    "end": 6547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6547,
    "end": 6548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6553,
    "end": 6554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6555,
    "end": 6556
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 6558,
    "end": 6561
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6562,
    "end": 6563
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6563,
    "end": 6564
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 6565,
    "end": 6566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6566,
    "end": 6567
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6569,
    "end": 6574
  },
  {
    "type": "Identifier",
    "value": "DerivedWithLoops",
    "start": 6575,
    "end": 6591
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6592,
    "end": 6593
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6594,
    "end": 6595
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6600,
    "end": 6605
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6606,
    "end": 6613
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 6614,
    "end": 6618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6619,
    "end": 6620
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 6629,
    "end": 6633
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6634,
    "end": 6635
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 6636,
    "end": 6640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6640,
    "end": 6641
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 6650,
    "end": 6661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6661,
    "end": 6662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6662,
    "end": 6663
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6664,
    "end": 6665
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 6678,
    "end": 6681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6681,
    "end": 6682
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 6682,
    "end": 6687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6687,
    "end": 6688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6688,
    "end": 6689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6689,
    "end": 6690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6690,
    "end": 6691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6691,
    "end": 6692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6693,
    "end": 6694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6694,
    "end": 6695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6704,
    "end": 6705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6710,
    "end": 6711
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6711,
    "end": 6712
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6717,
    "end": 6722
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6723,
    "end": 6730
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 6731,
    "end": 6735
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6736,
    "end": 6737
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 6746,
    "end": 6750
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6751,
    "end": 6752
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 6753,
    "end": 6757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6757,
    "end": 6758
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 6767,
    "end": 6778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6778,
    "end": 6779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6779,
    "end": 6780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6781,
    "end": 6782
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 6795,
    "end": 6798
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6798,
    "end": 6799
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6799,
    "end": 6800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6800,
    "end": 6801
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 6802,
    "end": 6807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6807,
    "end": 6808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6808,
    "end": 6809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6809,
    "end": 6810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6810,
    "end": 6811
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6812,
    "end": 6813
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6813,
    "end": 6814
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6823,
    "end": 6824
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6829,
    "end": 6830
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6830,
    "end": 6831
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6836,
    "end": 6841
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6842,
    "end": 6849
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 6850,
    "end": 6854
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6855,
    "end": 6856
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 6865,
    "end": 6869
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6870,
    "end": 6871
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 6872,
    "end": 6876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6876,
    "end": 6877
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 6886,
    "end": 6897
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6897,
    "end": 6898
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6898,
    "end": 6899
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6900,
    "end": 6901
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 6914,
    "end": 6917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6917,
    "end": 6918
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6918,
    "end": 6919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6919,
    "end": 6920
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 6921,
    "end": 6922
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6922,
    "end": 6923
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 6924,
    "end": 6929
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6929,
    "end": 6930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6930,
    "end": 6931
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6931,
    "end": 6932
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6933,
    "end": 6934
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6934,
    "end": 6935
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6944,
    "end": 6945
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6950,
    "end": 6951
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6951,
    "end": 6952
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6957,
    "end": 6962
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6963,
    "end": 6970
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 6971,
    "end": 6975
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6976,
    "end": 6977
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 6986,
    "end": 6990
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6991,
    "end": 6992
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 6993,
    "end": 6997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6997,
    "end": 6998
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 7007,
    "end": 7018
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7018,
    "end": 7019
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7019,
    "end": 7020
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7021,
    "end": 7022
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 7035,
    "end": 7038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7038,
    "end": 7039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7039,
    "end": 7040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7041,
    "end": 7042
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 7043,
    "end": 7048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7048,
    "end": 7049
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7049,
    "end": 7050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7050,
    "end": 7051
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7052,
    "end": 7053
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 7054,
    "end": 7059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7059,
    "end": 7060
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7061,
    "end": 7062
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7071,
    "end": 7072
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7077,
    "end": 7078
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7078,
    "end": 7079
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7084,
    "end": 7089
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7090,
    "end": 7097
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 7098,
    "end": 7102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7103,
    "end": 7104
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 7113,
    "end": 7117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7118,
    "end": 7119
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7120,
    "end": 7124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7124,
    "end": 7125
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 7134,
    "end": 7145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7145,
    "end": 7146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7146,
    "end": 7147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7148,
    "end": 7149
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 7162,
    "end": 7165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7166,
    "end": 7167
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7167,
    "end": 7172
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7173,
    "end": 7174
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 7175,
    "end": 7177
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 7178,
    "end": 7183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7183,
    "end": 7184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7184,
    "end": 7185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7185,
    "end": 7186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7187,
    "end": 7188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7188,
    "end": 7189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7198,
    "end": 7199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7204,
    "end": 7205
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7205,
    "end": 7206
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7211,
    "end": 7216
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7217,
    "end": 7224
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 7225,
    "end": 7229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7230,
    "end": 7231
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 7240,
    "end": 7244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7245,
    "end": 7246
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7247,
    "end": 7251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7251,
    "end": 7252
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 7261,
    "end": 7272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7272,
    "end": 7273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7273,
    "end": 7274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7275,
    "end": 7276
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 7289,
    "end": 7294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7295,
    "end": 7296
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 7296,
    "end": 7301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7301,
    "end": 7302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7302,
    "end": 7303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7303,
    "end": 7304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7305,
    "end": 7306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7306,
    "end": 7307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7316,
    "end": 7317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7322,
    "end": 7323
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7323,
    "end": 7324
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7329,
    "end": 7334
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7335,
    "end": 7342
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 7343,
    "end": 7347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7348,
    "end": 7349
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 7358,
    "end": 7362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7363,
    "end": 7364
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7365,
    "end": 7369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7369,
    "end": 7370
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 7379,
    "end": 7390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7390,
    "end": 7391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7391,
    "end": 7392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7393,
    "end": 7394
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 7407,
    "end": 7409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7410,
    "end": 7411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7411,
    "end": 7412
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 7413,
    "end": 7418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7419,
    "end": 7420
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 7420,
    "end": 7425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7425,
    "end": 7426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7426,
    "end": 7427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7427,
    "end": 7428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7428,
    "end": 7429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7438,
    "end": 7439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7444,
    "end": 7445
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7445,
    "end": 7446
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7451,
    "end": 7456
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7457,
    "end": 7464
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 7465,
    "end": 7469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7470,
    "end": 7471
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 7480,
    "end": 7484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7485,
    "end": 7486
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7487,
    "end": 7491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7491,
    "end": 7492
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 7501,
    "end": 7512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7512,
    "end": 7513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7513,
    "end": 7514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7515,
    "end": 7516
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 7529,
    "end": 7531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7532,
    "end": 7533
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 7533,
    "end": 7538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7538,
    "end": 7539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7539,
    "end": 7540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7540,
    "end": 7541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7542,
    "end": 7543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7543,
    "end": 7544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7553,
    "end": 7554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7559,
    "end": 7560
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7560,
    "end": 7561
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7566,
    "end": 7571
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7572,
    "end": 7579
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 7580,
    "end": 7584
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7585,
    "end": 7586
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 7595,
    "end": 7599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7600,
    "end": 7601
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7602,
    "end": 7606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7606,
    "end": 7607
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 7616,
    "end": 7627
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7627,
    "end": 7628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7628,
    "end": 7629
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7630,
    "end": 7631
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 7644,
    "end": 7650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7651,
    "end": 7652
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 7652,
    "end": 7657
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7657,
    "end": 7658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7658,
    "end": 7659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7659,
    "end": 7660
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7661,
    "end": 7662
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7662,
    "end": 7663
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7672,
    "end": 7673
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7678,
    "end": 7679
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7679,
    "end": 7680
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7681,
    "end": 7682
  }
]
```
