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
        "name": "DerivedBasic",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 18
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Object",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 33
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
              "start": 40,
              "end": 44
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 47,
              "end": 48
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 40,
            "end": 49
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
              "start": 54,
              "end": 65
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
                        "start": 78,
                        "end": 83
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 78,
                      "end": 85
                    },
                    "directive": null,
                    "start": 78,
                    "end": 86
                  }
                ],
                "start": 68,
                "end": 92
              },
              "expression": false,
              "start": 65,
              "end": 92
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 54,
            "end": 92
          }
        ],
        "start": 34,
        "end": 94
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 94
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedAfterParameterDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 130
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Object",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 145
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
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 154
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 156,
                "end": 163
              },
              "start": 154,
              "end": 163
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 152,
            "end": 164
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 171
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 173,
                "end": 180
              },
              "start": 171,
              "end": 180
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 169,
            "end": 181
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
              "start": 186,
              "end": 197
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 199
                  },
                  "right": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 202,
                    "end": 207
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 198,
                  "end": 207
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
                          "start": 219,
                          "end": 223
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 224,
                          "end": 226
                        },
                        "optional": false,
                        "computed": false,
                        "start": 219,
                        "end": 226
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 229,
                        "end": 230
                      },
                      "start": 219,
                      "end": 230
                    },
                    "directive": null,
                    "start": 219,
                    "end": 231
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 240,
                        "end": 245
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 246,
                          "end": 247
                        }
                      ],
                      "optional": false,
                      "start": 240,
                      "end": 248
                    },
                    "directive": null,
                    "start": 240,
                    "end": 249
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
                          "start": 258,
                          "end": 262
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 263,
                          "end": 265
                        },
                        "optional": false,
                        "computed": false,
                        "start": 258,
                        "end": 265
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 268,
                        "end": 269
                      },
                      "start": 258,
                      "end": 269
                    },
                    "directive": null,
                    "start": 258,
                    "end": 270
                  }
                ],
                "start": 209,
                "end": 276
              },
              "expression": false,
              "start": 197,
              "end": 276
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 186,
            "end": 276
          }
        ],
        "start": 146,
        "end": 278
      },
      "abstract": false,
      "declare": false,
      "start": 96,
      "end": 278
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedAfterRestParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 286,
        "end": 311
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Object",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 326
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
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 335
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 337,
                  "end": 344
                },
                "start": 337,
                "end": 346
              },
              "start": 335,
              "end": 346
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 333,
            "end": 347
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 354
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 356,
                  "end": 363
                },
                "start": 356,
                "end": 365
              },
              "start": 354,
              "end": 365
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 352,
            "end": 366
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
              "start": 371,
              "end": 382
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 386,
                    "end": 387
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 389,
                        "end": 396
                      },
                      "start": 389,
                      "end": 398
                    },
                    "start": 387,
                    "end": 398
                  },
                  "value": null,
                  "start": 383,
                  "end": 398
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
                          "start": 410,
                          "end": 414
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 415,
                          "end": 417
                        },
                        "optional": false,
                        "computed": false,
                        "start": 410,
                        "end": 417
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 420,
                        "end": 421
                      },
                      "start": 410,
                      "end": 421
                    },
                    "directive": null,
                    "start": 410,
                    "end": 422
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 431,
                        "end": 436
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 437,
                          "end": 438
                        }
                      ],
                      "optional": false,
                      "start": 431,
                      "end": 439
                    },
                    "directive": null,
                    "start": 431,
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
                          "start": 449,
                          "end": 453
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 454,
                          "end": 456
                        },
                        "optional": false,
                        "computed": false,
                        "start": 449,
                        "end": 456
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 459,
                        "end": 460
                      },
                      "start": 449,
                      "end": 460
                    },
                    "directive": null,
                    "start": 449,
                    "end": 461
                  }
                ],
                "start": 400,
                "end": 467
              },
              "expression": false,
              "start": 382,
              "end": 467
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 371,
            "end": 467
          }
        ],
        "start": 327,
        "end": 469
      },
      "abstract": false,
      "declare": false,
      "start": 280,
      "end": 469
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedComments",
        "optional": false,
        "typeAnnotation": null,
        "start": 477,
        "end": 492
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Object",
        "optional": false,
        "typeAnnotation": null,
        "start": 501,
        "end": 507
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 514,
              "end": 515
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 517,
                "end": 520
              },
              "start": 515,
              "end": 520
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 514,
            "end": 521
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
              "start": 526,
              "end": 537
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
                          "start": 564,
                          "end": 571
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 572,
                          "end": 575
                        },
                        "optional": false,
                        "computed": false,
                        "start": 564,
                        "end": 575
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 564,
                      "end": 577
                    },
                    "directive": null,
                    "start": 564,
                    "end": 578
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 607,
                        "end": 612
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 607,
                      "end": 614
                    },
                    "directive": null,
                    "start": 607,
                    "end": 615
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
                          "start": 644,
                          "end": 648
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 649,
                          "end": 650
                        },
                        "optional": false,
                        "computed": false,
                        "start": 644,
                        "end": 650
                      },
                      "right": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 653,
                        "end": 657
                      },
                      "start": 644,
                      "end": 657
                    },
                    "directive": null,
                    "start": 644,
                    "end": 658
                  }
                ],
                "start": 540,
                "end": 684
              },
              "expression": false,
              "start": 537,
              "end": 684
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 526,
            "end": 684
          }
        ],
        "start": 508,
        "end": 686
      },
      "abstract": false,
      "declare": false,
      "start": 471,
      "end": 686
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedCommentsInvalidThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 694,
        "end": 720
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Object",
        "optional": false,
        "typeAnnotation": null,
        "start": 729,
        "end": 735
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 742,
              "end": 743
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 745,
                "end": 748
              },
              "start": 743,
              "end": 748
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 742,
            "end": 749
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
              "start": 754,
              "end": 765
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
                      "type": "ThisExpression",
                      "start": 792,
                      "end": 796
                    },
                    "directive": null,
                    "start": 792,
                    "end": 797
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
                          "start": 820,
                          "end": 827
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 828,
                          "end": 831
                        },
                        "optional": false,
                        "computed": false,
                        "start": 820,
                        "end": 831
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 820,
                      "end": 833
                    },
                    "directive": null,
                    "start": 820,
                    "end": 834
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 863,
                        "end": 868
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 863,
                      "end": 870
                    },
                    "directive": null,
                    "start": 863,
                    "end": 871
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
                          "start": 900,
                          "end": 904
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 905,
                          "end": 906
                        },
                        "optional": false,
                        "computed": false,
                        "start": 900,
                        "end": 906
                      },
                      "right": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 909,
                        "end": 913
                      },
                      "start": 900,
                      "end": 913
                    },
                    "directive": null,
                    "start": 900,
                    "end": 914
                  }
                ],
                "start": 768,
                "end": 940
              },
              "expression": false,
              "start": 765,
              "end": 940
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 754,
            "end": 940
          }
        ],
        "start": 736,
        "end": 942
      },
      "abstract": false,
      "declare": false,
      "start": 688,
      "end": 942
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedInConditional",
        "optional": false,
        "typeAnnotation": null,
        "start": 950,
        "end": 970
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Object",
        "optional": false,
        "typeAnnotation": null,
        "start": 979,
        "end": 985
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
              "start": 992,
              "end": 996
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 999,
              "end": 1000
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 992,
            "end": 1001
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
              "start": 1006,
              "end": 1017
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
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1030,
                            "end": 1034
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1035,
                            "end": 1041
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1030,
                          "end": 1041
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1030,
                        "end": 1043
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Super",
                          "start": 1058,
                          "end": 1063
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1064,
                            "end": 1065
                          }
                        ],
                        "optional": false,
                        "start": 1058,
                        "end": 1066
                      },
                      "alternate": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Super",
                          "start": 1081,
                          "end": 1086
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1087,
                            "end": 1088
                          }
                        ],
                        "optional": false,
                        "start": 1081,
                        "end": 1089
                      },
                      "start": 1030,
                      "end": 1089
                    },
                    "directive": null,
                    "start": 1030,
                    "end": 1090
                  }
                ],
                "start": 1020,
                "end": 1096
              },
              "expression": false,
              "start": 1017,
              "end": 1096
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1006,
            "end": 1096
          }
        ],
        "start": 986,
        "end": 1098
      },
      "abstract": false,
      "declare": false,
      "start": 944,
      "end": 1098
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedInIf",
        "optional": false,
        "typeAnnotation": null,
        "start": 1106,
        "end": 1117
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Object",
        "optional": false,
        "typeAnnotation": null,
        "start": 1126,
        "end": 1132
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
              "start": 1139,
              "end": 1143
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1146,
              "end": 1147
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1139,
            "end": 1148
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
              "start": 1153,
              "end": 1164
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1181,
                          "end": 1185
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1186,
                          "end": 1192
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1181,
                        "end": 1192
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1181,
                      "end": 1194
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Super",
                              "start": 1210,
                              "end": 1215
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 1216,
                                "end": 1217
                              }
                            ],
                            "optional": false,
                            "start": 1210,
                            "end": 1218
                          },
                          "directive": null,
                          "start": 1210,
                          "end": 1219
                        }
                      ],
                      "start": 1196,
                      "end": 1229
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Super",
                              "start": 1257,
                              "end": 1262
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 1263,
                                "end": 1264
                              }
                            ],
                            "optional": false,
                            "start": 1257,
                            "end": 1265
                          },
                          "directive": null,
                          "start": 1257,
                          "end": 1266
                        }
                      ],
                      "start": 1243,
                      "end": 1276
                    },
                    "start": 1177,
                    "end": 1276
                  }
                ],
                "start": 1167,
                "end": 1282
              },
              "expression": false,
              "start": 1164,
              "end": 1282
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1153,
            "end": 1282
          }
        ],
        "start": 1133,
        "end": 1284
      },
      "abstract": false,
      "declare": false,
      "start": 1100,
      "end": 1284
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedInBlockWithProperties",
        "optional": false,
        "typeAnnotation": null,
        "start": 1292,
        "end": 1320
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Object",
        "optional": false,
        "typeAnnotation": null,
        "start": 1329,
        "end": 1335
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
              "start": 1342,
              "end": 1346
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1349,
              "end": 1350
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1342,
            "end": 1351
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
              "start": 1356,
              "end": 1367
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
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "paramProp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1376,
                      "end": 1385
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1388,
                      "end": 1389
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1376,
                    "end": 1389
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1368,
                  "end": 1389
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Super",
                            "start": 1415,
                            "end": 1420
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1415,
                          "end": 1422
                        },
                        "directive": null,
                        "start": 1415,
                        "end": 1423
                      }
                    ],
                    "start": 1401,
                    "end": 1433
                  }
                ],
                "start": 1391,
                "end": 1439
              },
              "expression": false,
              "start": 1367,
              "end": 1439
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1356,
            "end": 1439
          }
        ],
        "start": 1336,
        "end": 1441
      },
      "abstract": false,
      "declare": false,
      "start": 1286,
      "end": 1441
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedInConditionalWithProperties",
        "optional": false,
        "typeAnnotation": null,
        "start": 1449,
        "end": 1483
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Object",
        "optional": false,
        "typeAnnotation": null,
        "start": 1492,
        "end": 1498
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
              "start": 1505,
              "end": 1509
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1512,
              "end": 1513
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1505,
            "end": 1514
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
              "start": 1519,
              "end": 1530
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
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "paramProp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1539,
                      "end": 1548
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1551,
                      "end": 1552
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1539,
                    "end": 1552
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1531,
                  "end": 1552
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1568,
                          "end": 1572
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1573,
                          "end": 1579
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1568,
                        "end": 1579
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1568,
                      "end": 1581
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Super",
                              "start": 1597,
                              "end": 1602
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 1603,
                                "end": 1604
                              }
                            ],
                            "optional": false,
                            "start": 1597,
                            "end": 1605
                          },
                          "directive": null,
                          "start": 1597,
                          "end": 1606
                        }
                      ],
                      "start": 1583,
                      "end": 1616
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Super",
                              "start": 1636,
                              "end": 1641
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 1642,
                                "end": 1643
                              }
                            ],
                            "optional": false,
                            "start": 1636,
                            "end": 1644
                          },
                          "directive": null,
                          "start": 1636,
                          "end": 1645
                        }
                      ],
                      "start": 1622,
                      "end": 1655
                    },
                    "start": 1564,
                    "end": 1655
                  }
                ],
                "start": 1554,
                "end": 1661
              },
              "expression": false,
              "start": 1530,
              "end": 1661
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1519,
            "end": 1661
          }
        ],
        "start": 1499,
        "end": 1663
      },
      "abstract": false,
      "declare": false,
      "start": 1443,
      "end": 1663
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1663
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
    "value": "DerivedBasic",
    "start": 6,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 19,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 40,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 54,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 78,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
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
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 96,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "DerivedAfterParameterDefault",
    "start": 102,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 131,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 152,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 156,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 169,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 173,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 186,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 200,
    "end": 201
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 202,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 219,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 240,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 258,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 263,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 280,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "DerivedAfterRestParameter",
    "start": 286,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 312,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 320,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 333,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 337,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 352,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 356,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 371,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 383,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 389,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 410,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 415,
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
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 431,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ";",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 449,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 454,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
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
    "value": "DerivedComments",
    "start": 477,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 493,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 501,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 517,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 526,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 564,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 572,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 607,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 644,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 651,
    "end": 652
  },
  {
    "type": "Null",
    "value": "null",
    "start": 653,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 685,
    "end": 686
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 688,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "DerivedCommentsInvalidThis",
    "start": 694,
    "end": 720
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 721,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 729,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 745,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 754,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 792,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 820,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 828,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 863,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 900,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 907,
    "end": 908
  },
  {
    "type": "Null",
    "value": "null",
    "start": 909,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 941,
    "end": 942
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 944,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "DerivedInConditional",
    "start": 950,
    "end": 970
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 971,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 979,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 992,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 997,
    "end": 998
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "constructor",
    "start": 1006,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1030,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 1035,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1058,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1081,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1100,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "DerivedInIf",
    "start": 1106,
    "end": 1117
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1118,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1126,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1139,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1153,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1177,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1181,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 1186,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1193,
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
    "value": "{",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1210,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1238,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1257,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1286,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "DerivedInBlockWithProperties",
    "start": 1292,
    "end": 1320
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1321,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1329,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1342,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1356,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1368,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "paramProp",
    "start": 1376,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1415,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1443,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "DerivedInConditionalWithProperties",
    "start": 1449,
    "end": 1483
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1484,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1492,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1505,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1519,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1531,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "paramProp",
    "start": 1539,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1564,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1568,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 1573,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1597,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1617,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1636,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1662,
    "end": 1663
  }
]
```
