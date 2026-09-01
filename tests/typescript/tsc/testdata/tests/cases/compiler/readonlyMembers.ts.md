__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              },
              "start": 28,
              "end": 36
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 37
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 52
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 55,
                "end": 61
              },
              "start": 53,
              "end": 61
            },
            "accessibility": null,
            "static": false,
            "start": 42,
            "end": 62
          }
        ],
        "start": 12,
        "end": 64
      },
      "declare": false,
      "start": 0,
      "end": 64
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 73
                },
                "typeArguments": null,
                "start": 72,
                "end": 73
              },
              "start": 70,
              "end": 73
            },
            "start": 69,
            "end": 73
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 79
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 81,
                  "end": 82
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 78,
                "end": 82
              }
            ],
            "start": 76,
            "end": 84
          },
          "definite": false,
          "start": 69,
          "end": 84
        }
      ],
      "declare": false,
      "start": 65,
      "end": 85
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 87
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 89
          },
          "optional": false,
          "computed": false,
          "start": 86,
          "end": 89
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 92,
          "end": 93
        },
        "start": 86,
        "end": 93
      },
      "directive": null,
      "start": 86,
      "end": 94
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 106
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 108
          },
          "optional": false,
          "computed": false,
          "start": 105,
          "end": 108
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 111,
          "end": 112
        },
        "start": 105,
        "end": 112
      },
      "directive": null,
      "start": 105,
      "end": 113
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
        "start": 131,
        "end": 132
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
              "start": 148,
              "end": 149
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 151,
                "end": 157
              },
              "start": 149,
              "end": 157
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 139,
            "end": 158
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 173
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 176,
              "end": 177
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 163,
            "end": 178
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 188
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
                      "start": 200,
                      "end": 201
                    },
                    "start": 193,
                    "end": 201
                  }
                ],
                "start": 191,
                "end": 203
              },
              "expression": false,
              "start": 188,
              "end": 203
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 183,
            "end": 203
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
              "start": 208,
              "end": 219
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
                          "start": 232,
                          "end": 236
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 237,
                          "end": 238
                        },
                        "optional": false,
                        "computed": false,
                        "start": 232,
                        "end": 238
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 241,
                        "end": 242
                      },
                      "start": 232,
                      "end": 242
                    },
                    "directive": null,
                    "start": 232,
                    "end": 243
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
                          "start": 259,
                          "end": 263
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 264,
                          "end": 265
                        },
                        "optional": false,
                        "computed": false,
                        "start": 259,
                        "end": 265
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 268,
                        "end": 269
                      },
                      "start": 259,
                      "end": 269
                    },
                    "directive": null,
                    "start": 259,
                    "end": 270
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
                          "start": 286,
                          "end": 290
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 291,
                          "end": 292
                        },
                        "optional": false,
                        "computed": false,
                        "start": 286,
                        "end": 292
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 295,
                        "end": 296
                      },
                      "start": 286,
                      "end": 296
                    },
                    "directive": null,
                    "start": 286,
                    "end": 297
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
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 322,
                          "end": 323
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
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
                                      "start": 346,
                                      "end": 350
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 351,
                                      "end": 352
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 346,
                                    "end": 352
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 355,
                                    "end": 356
                                  },
                                  "start": 346,
                                  "end": 356
                                },
                                "directive": null,
                                "start": 346,
                                "end": 357
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
                                      "start": 380,
                                      "end": 384
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 385,
                                      "end": 386
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 380,
                                    "end": 386
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 389,
                                    "end": 390
                                  },
                                  "start": 380,
                                  "end": 390
                                },
                                "directive": null,
                                "start": 380,
                                "end": 391
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
                                      "start": 414,
                                      "end": 418
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "c",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 419,
                                      "end": 420
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 414,
                                    "end": 420
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 423,
                                    "end": 424
                                  },
                                  "start": 414,
                                  "end": 424
                                },
                                "directive": null,
                                "start": 414,
                                "end": 425
                              }
                            ],
                            "start": 332,
                            "end": 445
                          },
                          "id": null,
                          "generator": false,
                          "start": 326,
                          "end": 445
                        },
                        "definite": false,
                        "start": 322,
                        "end": 445
                      }
                    ],
                    "declare": false,
                    "start": 316,
                    "end": 446
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
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
                                    "start": 476,
                                    "end": 480
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 481,
                                    "end": 482
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 476,
                                  "end": 482
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 485,
                                  "end": 486
                                },
                                "start": 476,
                                "end": 486
                              },
                              "directive": null,
                              "start": 476,
                              "end": 487
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
                                    "start": 507,
                                    "end": 511
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 512,
                                    "end": 513
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 507,
                                  "end": 513
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 516,
                                  "end": 517
                                },
                                "start": 507,
                                "end": 517
                              },
                              "directive": null,
                              "start": 507,
                              "end": 518
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
                                    "start": 538,
                                    "end": 542
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 543,
                                    "end": 544
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 538,
                                  "end": 544
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 547,
                                  "end": 548
                                },
                                "start": 538,
                                "end": 548
                              },
                              "directive": null,
                              "start": 538,
                              "end": 549
                            }
                          ],
                          "start": 462,
                          "end": 569
                        },
                        "id": null,
                        "generator": false,
                        "start": 456,
                        "end": 569
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 455,
                      "end": 572
                    },
                    "directive": null,
                    "start": 455,
                    "end": 573
                  }
                ],
                "start": 222,
                "end": 579
              },
              "expression": false,
              "start": 219,
              "end": 579
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 208,
            "end": 579
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
              "start": 584,
              "end": 587
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
                          "start": 600,
                          "end": 604
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 605,
                          "end": 606
                        },
                        "optional": false,
                        "computed": false,
                        "start": 600,
                        "end": 606
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 609,
                        "end": 610
                      },
                      "start": 600,
                      "end": 610
                    },
                    "directive": null,
                    "start": 600,
                    "end": 611
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
                          "start": 630,
                          "end": 634
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 635,
                          "end": 636
                        },
                        "optional": false,
                        "computed": false,
                        "start": 630,
                        "end": 636
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 639,
                        "end": 640
                      },
                      "start": 630,
                      "end": 640
                    },
                    "directive": null,
                    "start": 630,
                    "end": 641
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
                          "start": 660,
                          "end": 664
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 665,
                          "end": 666
                        },
                        "optional": false,
                        "computed": false,
                        "start": 660,
                        "end": 666
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 669,
                        "end": 670
                      },
                      "start": 660,
                      "end": 670
                    },
                    "directive": null,
                    "start": 660,
                    "end": 671
                  }
                ],
                "start": 590,
                "end": 687
              },
              "expression": false,
              "start": 587,
              "end": 687
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 584,
            "end": 687
          }
        ],
        "start": 133,
        "end": 689
      },
      "abstract": false,
      "declare": false,
      "start": 125,
      "end": 689
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 695,
            "end": 696
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 709,
                  "end": 710
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
                          "start": 722,
                          "end": 723
                        },
                        "start": 715,
                        "end": 723
                      }
                    ],
                    "start": 713,
                    "end": 725
                  },
                  "expression": false,
                  "start": 710,
                  "end": 725
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 705,
                "end": 725
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 735,
                  "end": 736
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
                          "start": 748,
                          "end": 749
                        },
                        "start": 741,
                        "end": 749
                      }
                    ],
                    "start": 739,
                    "end": 751
                  },
                  "expression": false,
                  "start": 736,
                  "end": 751
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 731,
                "end": 751
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 761,
                  "end": 762
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
                      "start": 763,
                      "end": 768
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 770,
                    "end": 773
                  },
                  "expression": false,
                  "start": 762,
                  "end": 773
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 757,
                "end": 773
              }
            ],
            "start": 699,
            "end": 775
          },
          "definite": false,
          "start": 695,
          "end": 775
        }
      ],
      "declare": false,
      "start": 691,
      "end": 776
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 777,
            "end": 778
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 779,
            "end": 780
          },
          "optional": false,
          "computed": false,
          "start": 777,
          "end": 780
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 783,
          "end": 784
        },
        "start": 777,
        "end": 784
      },
      "directive": null,
      "start": 777,
      "end": 785
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 796,
            "end": 797
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 798,
            "end": 799
          },
          "optional": false,
          "computed": false,
          "start": 796,
          "end": 799
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 802,
          "end": 803
        },
        "start": 796,
        "end": 803
      },
      "directive": null,
      "start": 796,
      "end": 804
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 824,
                      "end": 825
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 827,
                        "end": 833
                      },
                      "start": 825,
                      "end": 833
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 815,
                    "end": 834
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 835,
                      "end": 836
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 838,
                        "end": 844
                      },
                      "start": 836,
                      "end": 844
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 835,
                    "end": 844
                  }
                ],
                "start": 813,
                "end": 846
              },
              "start": 811,
              "end": 846
            },
            "start": 810,
            "end": 846
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 851,
                  "end": 852
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 854,
                  "end": 855
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 851,
                "end": 855
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 857,
                  "end": 858
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 860,
                  "end": 861
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 857,
                "end": 861
              }
            ],
            "start": 849,
            "end": 863
          },
          "definite": false,
          "start": 810,
          "end": 863
        }
      ],
      "declare": false,
      "start": 806,
      "end": 864
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 865,
            "end": 866
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 867,
            "end": 868
          },
          "optional": false,
          "computed": false,
          "start": 865,
          "end": 868
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 871,
          "end": 872
        },
        "start": 865,
        "end": 872
      },
      "directive": null,
      "start": 865,
      "end": 873
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 884,
            "end": 885
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 886,
            "end": 887
          },
          "optional": false,
          "computed": false,
          "start": 884,
          "end": 887
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 890,
          "end": 891
        },
        "start": 884,
        "end": 891
      },
      "directive": null,
      "start": 884,
      "end": 892
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
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 902,
                      "end": 903
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 905,
                        "end": 911
                      },
                      "start": 903,
                      "end": 911
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 902,
                    "end": 912
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 913,
                      "end": 914
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 916,
                        "end": 922
                      },
                      "start": 914,
                      "end": 922
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 913,
                    "end": 922
                  }
                ],
                "start": 900,
                "end": 924
              },
              "start": 898,
              "end": 924
            },
            "start": 897,
            "end": 924
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 927,
            "end": 928
          },
          "definite": false,
          "start": 897,
          "end": 928
        }
      ],
      "declare": false,
      "start": 893,
      "end": 929
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 930,
            "end": 931
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 932,
            "end": 933
          },
          "optional": false,
          "computed": false,
          "start": 930,
          "end": 933
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 936,
          "end": 937
        },
        "start": 930,
        "end": 937
      },
      "directive": null,
      "start": 930,
      "end": 938
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 939,
            "end": 940
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 941,
            "end": 942
          },
          "optional": false,
          "computed": false,
          "start": 939,
          "end": 942
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 945,
          "end": 946
        },
        "start": 939,
        "end": 946
      },
      "directive": null,
      "start": 939,
      "end": 947
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 954,
        "end": 955
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
              "start": 962,
              "end": 963
            },
            "initializer": null,
            "computed": false,
            "start": 962,
            "end": 963
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 965,
              "end": 966
            },
            "initializer": null,
            "computed": false,
            "start": 965,
            "end": 966
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 968,
              "end": 969
            },
            "initializer": null,
            "computed": false,
            "start": 968,
            "end": 969
          }
        ],
        "start": 956,
        "end": 971
      },
      "const": false,
      "declare": false,
      "start": 949,
      "end": 971
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 972,
            "end": 973
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 974,
            "end": 975
          },
          "optional": false,
          "computed": false,
          "start": 972,
          "end": 975
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 978,
          "end": 979
        },
        "start": 972,
        "end": 979
      },
      "directive": null,
      "start": 972,
      "end": 980
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 1002,
        "end": 1003
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1023,
                    "end": 1024
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1027,
                    "end": 1028
                  },
                  "definite": false,
                  "start": 1023,
                  "end": 1028
                }
              ],
              "declare": false,
              "start": 1017,
              "end": 1029
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1010,
            "end": 1029
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1045,
                    "end": 1046
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1049,
                    "end": 1050
                  },
                  "definite": false,
                  "start": 1045,
                  "end": 1050
                }
              ],
              "declare": false,
              "start": 1041,
              "end": 1051
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1034,
            "end": 1051
          },
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1067,
                    "end": 1068
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1071,
                    "end": 1072
                  },
                  "definite": false,
                  "start": 1067,
                  "end": 1072
                }
              ],
              "declare": false,
              "start": 1063,
              "end": 1073
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1056,
            "end": 1073
          }
        ],
        "start": 1004,
        "end": 1075
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 992,
      "end": 1075
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1076,
            "end": 1077
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1078,
            "end": 1079
          },
          "optional": false,
          "computed": false,
          "start": 1076,
          "end": 1079
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1082,
          "end": 1083
        },
        "start": 1076,
        "end": 1083
      },
      "directive": null,
      "start": 1076,
      "end": 1084
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1095,
            "end": 1096
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1097,
            "end": 1098
          },
          "optional": false,
          "computed": false,
          "start": 1095,
          "end": 1098
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1101,
          "end": 1102
        },
        "start": 1095,
        "end": 1102
      },
      "directive": null,
      "start": 1095,
      "end": 1103
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1104,
            "end": 1105
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1106,
            "end": 1107
          },
          "optional": false,
          "computed": false,
          "start": 1104,
          "end": 1107
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1110,
          "end": 1111
        },
        "start": 1104,
        "end": 1111
      },
      "directive": null,
      "start": 1104,
      "end": 1112
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
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1145,
                            "end": 1151
                          },
                          "start": 1143,
                          "end": 1151
                        },
                        "start": 1142,
                        "end": 1151
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1154,
                        "end": 1160
                      },
                      "start": 1152,
                      "end": 1160
                    },
                    "readonly": true,
                    "static": false,
                    "accessibility": null,
                    "start": 1132,
                    "end": 1160
                  }
                ],
                "start": 1130,
                "end": 1162
              },
              "start": 1128,
              "end": 1162
            },
            "start": 1126,
            "end": 1162
          },
          "init": null,
          "definite": false,
          "start": 1126,
          "end": 1162
        }
      ],
      "declare": true,
      "start": 1114,
      "end": 1163
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 1168,
            "end": 1169
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null,
              "start": 1172,
              "end": 1174
            },
            "property": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 1175,
              "end": 1180
            },
            "optional": false,
            "computed": true,
            "start": 1172,
            "end": 1181
          },
          "definite": false,
          "start": 1168,
          "end": 1181
        }
      ],
      "declare": false,
      "start": 1164,
      "end": 1182
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": null,
            "start": 1183,
            "end": 1185
          },
          "property": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 1186,
            "end": 1191
          },
          "optional": false,
          "computed": true,
          "start": 1183,
          "end": 1192
        },
        "right": {
          "type": "Literal",
          "value": "abc",
          "raw": "\"abc\"",
          "start": 1195,
          "end": 1200
        },
        "start": 1183,
        "end": 1200
      },
      "directive": null,
      "start": 1183,
      "end": 1201
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
            "name": "yy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1244,
                            "end": 1250
                          },
                          "start": 1242,
                          "end": 1250
                        },
                        "start": 1241,
                        "end": 1250
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1253,
                        "end": 1259
                      },
                      "start": 1251,
                      "end": 1259
                    },
                    "readonly": true,
                    "static": false,
                    "accessibility": null,
                    "start": 1231,
                    "end": 1260
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1265,
                            "end": 1271
                          },
                          "start": 1263,
                          "end": 1271
                        },
                        "start": 1262,
                        "end": 1271
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1274,
                        "end": 1280
                      },
                      "start": 1272,
                      "end": 1280
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1261,
                    "end": 1280
                  }
                ],
                "start": 1229,
                "end": 1282
              },
              "start": 1227,
              "end": 1282
            },
            "start": 1225,
            "end": 1282
          },
          "init": null,
          "definite": false,
          "start": 1225,
          "end": 1282
        }
      ],
      "declare": true,
      "start": 1213,
      "end": 1283
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "yy",
            "optional": false,
            "typeAnnotation": null,
            "start": 1284,
            "end": 1286
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1287,
            "end": 1288
          },
          "optional": false,
          "computed": true,
          "start": 1284,
          "end": 1289
        },
        "right": {
          "type": "Literal",
          "value": "abc",
          "raw": "\"abc\"",
          "start": 1292,
          "end": 1297
        },
        "start": 1284,
        "end": 1297
      },
      "directive": null,
      "start": 1284,
      "end": 1298
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "yy",
            "optional": false,
            "typeAnnotation": null,
            "start": 1309,
            "end": 1311
          },
          "property": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 1312,
            "end": 1317
          },
          "optional": false,
          "computed": true,
          "start": 1309,
          "end": 1318
        },
        "right": {
          "type": "Literal",
          "value": "abc",
          "raw": "\"abc\"",
          "start": 1321,
          "end": 1326
        },
        "start": 1309,
        "end": 1326
      },
      "directive": null,
      "start": 1309,
      "end": 1327
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1327
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 18,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 42,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 65,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 125,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 139,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 151,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 163,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 174,
    "end": 175
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 183,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 193,
    "end": 199
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 208,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 232,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 239,
    "end": 240
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 259,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Keyword",
    "value": "this",
    "start": 286,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 293,
    "end": 294
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 316,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 346,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 353,
    "end": 354
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 380,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 387,
    "end": 388
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 414,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 421,
    "end": 422
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 459,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 476,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 483,
    "end": 484
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 507,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 514,
    "end": 515
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 538,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 545,
    "end": 546
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "foo",
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
    "type": "Punctuator",
    "value": ")",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 590,
    "end": 591
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 600,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 607,
    "end": 608
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 630,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 637,
    "end": 638
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
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
    "value": "c",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 667,
    "end": 668
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 688,
    "end": 689
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 691,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 705,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 713,
    "end": 714
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 715,
    "end": 721
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 731,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 741,
    "end": 747
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 757,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 763,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Numeric",
    "value": "1",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 800,
    "end": 801
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 806,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 815,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 827,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 838,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 852,
    "end": 853
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 858,
    "end": 859
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "p",
    "start": 865,
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
    "value": "a",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 869,
    "end": 870
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "p",
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
    "value": "b",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 888,
    "end": 889
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 893,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 905,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 916,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 934,
    "end": 935
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 943,
    "end": 944
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 946,
    "end": 947
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 949,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "E",
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
    "type": "Identifier",
    "value": "A",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 976,
    "end": 977
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 992,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1010,
    "end": 1016
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1017,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1034,
    "end": 1040
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1041,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1056,
    "end": 1062
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1063,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1114,
    "end": 1121
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1122,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 1126,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1132,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1145,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1154,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1164,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 1172,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1175,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 1183,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1186,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 1195,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1213,
    "end": 1220
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1221,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 1225,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1231,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1244,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1253,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1265,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1274,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 1284,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 1292,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 1309,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1312,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 1321,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1326,
    "end": 1327
  }
]
```
