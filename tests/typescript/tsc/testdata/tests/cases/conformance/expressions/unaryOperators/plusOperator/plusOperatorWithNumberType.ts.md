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
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 49,
                "end": 55
              },
              "start": 47,
              "end": 55
            },
            "start": 41,
            "end": 55
          },
          "init": null,
          "definite": false,
          "start": 41,
          "end": 55
        }
      ],
      "declare": true,
      "start": 29,
      "end": 56
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
            "name": "NUMBER1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 70,
                  "end": 76
                },
                "start": 70,
                "end": 78
              },
              "start": 68,
              "end": 78
            },
            "start": 61,
            "end": 78
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 82,
                "end": 83
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 85,
                "end": 86
              }
            ],
            "start": 81,
            "end": 87
          },
          "definite": false,
          "start": 61,
          "end": 87
        }
      ],
      "declare": false,
      "start": 57,
      "end": 88
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 102
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 106,
          "end": 112
        },
        "start": 104,
        "end": 112
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 122,
              "end": 123
            },
            "start": 115,
            "end": 124
          }
        ],
        "start": 113,
        "end": 126
      },
      "expression": false,
      "start": 90,
      "end": 126
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 135
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 150
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 153,
                "end": 159
              },
              "start": 151,
              "end": 159
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": "public",
            "start": 142,
            "end": 160
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
              "start": 172,
              "end": 175
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
                      "value": 1,
                      "raw": "1",
                      "start": 187,
                      "end": 188
                    },
                    "start": 180,
                    "end": 189
                  }
                ],
                "start": 178,
                "end": 191
              },
              "expression": false,
              "start": 175,
              "end": 191
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 165,
            "end": 191
          }
        ],
        "start": 136,
        "end": 193
      },
      "abstract": false,
      "declare": false,
      "start": 128,
      "end": 193
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 204,
        "end": 205
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 226,
                        "end": 232
                      },
                      "start": 224,
                      "end": 232
                    },
                    "start": 223,
                    "end": 232
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 235,
                    "end": 236
                  },
                  "definite": false,
                  "start": 223,
                  "end": 236
                }
              ],
              "declare": false,
              "start": 219,
              "end": 237
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 212,
            "end": 237
          }
        ],
        "start": 206,
        "end": 239
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 194,
      "end": 239
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
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 249
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 257
            },
            "typeArguments": null,
            "arguments": [],
            "start": 252,
            "end": 259
          },
          "definite": false,
          "start": 245,
          "end": 259
        }
      ],
      "declare": false,
      "start": 241,
      "end": 260
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
            "name": "ResultIsNumber1",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 300
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 310
            },
            "prefix": true,
            "start": 303,
            "end": 310
          },
          "definite": false,
          "start": 285,
          "end": 310
        }
      ],
      "declare": false,
      "start": 281,
      "end": 311
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
            "name": "ResultIsNumber2",
            "optional": false,
            "typeAnnotation": null,
            "start": 316,
            "end": 331
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER1",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 342
            },
            "prefix": true,
            "start": 334,
            "end": 342
          },
          "definite": false,
          "start": 316,
          "end": 342
        }
      ],
      "declare": false,
      "start": 312,
      "end": 343
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
            "name": "ResultIsNumber3",
            "optional": false,
            "typeAnnotation": null,
            "start": 372,
            "end": 387
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 391,
              "end": 392
            },
            "prefix": true,
            "start": 390,
            "end": 392
          },
          "definite": false,
          "start": 372,
          "end": 392
        }
      ],
      "declare": false,
      "start": 368,
      "end": 393
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
            "name": "ResultIsNumber4",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 413
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
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
                    "start": 419,
                    "end": 420
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 422,
                    "end": 423
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 419,
                  "end": 423
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 425,
                    "end": 426
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 428,
                    "end": 429
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 425,
                  "end": 429
                }
              ],
              "start": 417,
              "end": 430
            },
            "prefix": true,
            "start": 416,
            "end": 430
          },
          "definite": false,
          "start": 398,
          "end": 430
        }
      ],
      "declare": false,
      "start": 394,
      "end": 431
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
            "name": "ResultIsNumber5",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 451
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
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
                    "start": 457,
                    "end": 458
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 460,
                    "end": 461
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 457,
                  "end": 461
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 463,
                    "end": 464
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 470,
                            "end": 476
                          },
                          "start": 468,
                          "end": 476
                        },
                        "start": 467,
                        "end": 476
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
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 490,
                            "end": 491
                          },
                          "start": 483,
                          "end": 492
                        }
                      ],
                      "start": 481,
                      "end": 494
                    },
                    "id": null,
                    "generator": false,
                    "start": 466,
                    "end": 494
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 463,
                  "end": 494
                }
              ],
              "start": 455,
              "end": 496
            },
            "prefix": true,
            "start": 454,
            "end": 496
          },
          "definite": false,
          "start": 436,
          "end": 496
        }
      ],
      "declare": false,
      "start": 432,
      "end": 497
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
            "name": "ResultIsNumber6",
            "optional": false,
            "typeAnnotation": null,
            "start": 530,
            "end": 545
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 549,
                "end": 553
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 555
              },
              "optional": false,
              "computed": false,
              "start": 549,
              "end": 555
            },
            "prefix": true,
            "start": 548,
            "end": 555
          },
          "definite": false,
          "start": 530,
          "end": 555
        }
      ],
      "declare": false,
      "start": 526,
      "end": 556
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
            "name": "ResultIsNumber7",
            "optional": false,
            "typeAnnotation": null,
            "start": 561,
            "end": 576
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 580,
                "end": 581
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 582,
                "end": 583
              },
              "optional": false,
              "computed": false,
              "start": 580,
              "end": 583
            },
            "prefix": true,
            "start": 579,
            "end": 583
          },
          "definite": false,
          "start": 561,
          "end": 583
        }
      ],
      "declare": false,
      "start": 557,
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
            "name": "ResultIsNumber8",
            "optional": false,
            "typeAnnotation": null,
            "start": 589,
            "end": 604
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER1",
                "optional": false,
                "typeAnnotation": null,
                "start": 608,
                "end": 615
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 616,
                "end": 617
              },
              "optional": false,
              "computed": true,
              "start": 608,
              "end": 618
            },
            "prefix": true,
            "start": 607,
            "end": 618
          },
          "definite": false,
          "start": 589,
          "end": 618
        }
      ],
      "declare": false,
      "start": 585,
      "end": 619
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
            "name": "ResultIsNumber9",
            "optional": false,
            "typeAnnotation": null,
            "start": 624,
            "end": 639
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 643,
                "end": 646
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 643,
              "end": 648
            },
            "prefix": true,
            "start": 642,
            "end": 648
          },
          "definite": false,
          "start": 624,
          "end": 648
        }
      ],
      "declare": false,
      "start": 620,
      "end": 649
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
            "name": "ResultIsNumber10",
            "optional": false,
            "typeAnnotation": null,
            "start": 654,
            "end": 670
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 674,
                  "end": 675
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 676,
                  "end": 679
                },
                "optional": false,
                "computed": false,
                "start": 674,
                "end": 679
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 674,
              "end": 681
            },
            "prefix": true,
            "start": 673,
            "end": 681
          },
          "definite": false,
          "start": 654,
          "end": 681
        }
      ],
      "declare": false,
      "start": 650,
      "end": 682
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
            "name": "ResultIsNumber11",
            "optional": false,
            "typeAnnotation": null,
            "start": 687,
            "end": 703
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 708,
                "end": 714
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 717,
                "end": 723
              },
              "start": 708,
              "end": 723
            },
            "prefix": true,
            "start": 706,
            "end": 724
          },
          "definite": false,
          "start": 687,
          "end": 724
        }
      ],
      "declare": false,
      "start": 683,
      "end": 725
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 757,
          "end": 758
        },
        "prefix": true,
        "start": 756,
        "end": 758
      },
      "directive": null,
      "start": 756,
      "end": 759
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER",
          "optional": false,
          "typeAnnotation": null,
          "start": 761,
          "end": 767
        },
        "prefix": true,
        "start": 760,
        "end": 767
      },
      "directive": null,
      "start": 760,
      "end": 768
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER1",
          "optional": false,
          "typeAnnotation": null,
          "start": 770,
          "end": 777
        },
        "prefix": true,
        "start": 769,
        "end": 777
      },
      "directive": null,
      "start": 769,
      "end": 778
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 780,
            "end": 783
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 780,
          "end": 785
        },
        "prefix": true,
        "start": 779,
        "end": 785
      },
      "directive": null,
      "start": 779,
      "end": 786
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 788,
            "end": 792
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 793,
            "end": 794
          },
          "optional": false,
          "computed": false,
          "start": 788,
          "end": 794
        },
        "prefix": true,
        "start": 787,
        "end": 794
      },
      "directive": null,
      "start": 787,
      "end": 795
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 797,
            "end": 798
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 799,
            "end": 800
          },
          "optional": false,
          "computed": false,
          "start": 797,
          "end": 800
        },
        "prefix": true,
        "start": 796,
        "end": 800
      },
      "directive": null,
      "start": 796,
      "end": 801
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 803,
                "end": 807
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 808,
                "end": 809
              },
              "optional": false,
              "computed": false,
              "start": 803,
              "end": 809
            },
            "prefix": true,
            "start": 802,
            "end": 809
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 811,
              "end": 812
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 813,
              "end": 814
            },
            "optional": false,
            "computed": false,
            "start": 811,
            "end": 814
          }
        ],
        "start": 802,
        "end": 814
      },
      "directive": null,
      "start": 802,
      "end": 815
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 815
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 29,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 37,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 57,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "NUMBER1",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 70,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 81,
    "end": 82
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 83,
    "end": 84
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 90,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 99,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 115,
    "end": 121
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 128,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 142,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "!",
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
    "value": "number",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 165,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 172,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 180,
    "end": 186
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 194,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "M",
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
    "type": "Keyword",
    "value": "export",
    "start": 212,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 219,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 241,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 245,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 252,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 281,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber1",
    "start": 285,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 304,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 312,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber2",
    "start": 316,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "NUMBER1",
    "start": 335,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 368,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber3",
    "start": 372,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 390,
    "end": 391
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Keyword",
    "value": "var",
    "start": 394,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber4",
    "start": 398,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 426,
    "end": 427
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 432,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber5",
    "start": 436,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 470,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 478,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 483,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 526,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber6",
    "start": 530,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 549,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 557,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber7",
    "start": 561,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 580,
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
    "value": "n",
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
    "value": "ResultIsNumber8",
    "start": 589,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "NUMBER1",
    "start": 608,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 615,
    "end": 616
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 620,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber9",
    "start": 624,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 643,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 650,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber10",
    "start": 654,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 676,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 683,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber11",
    "start": 687,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 708,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 717,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 756,
    "end": 757
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 761,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "NUMBER1",
    "start": 770,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 780,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 788,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 803,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  }
]
```
