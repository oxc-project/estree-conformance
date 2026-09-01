__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
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
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 12,
                "end": 16
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
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 22,
                      "end": 27
                    },
                    "value": {
                      "type": "Literal",
                      "value": "value",
                      "raw": "'value'",
                      "start": 29,
                      "end": 36
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 22,
                    "end": 36
                  }
                ],
                "start": 20,
                "end": 38
              },
              "definite": false,
              "start": 12,
              "end": 38
            }
          ],
          "declare": false,
          "start": 6,
          "end": 39
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 61,
                      "end": 66
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 61,
                        "end": 66
                      },
                      "right": {
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
                                "type": "ThrowStatement",
                                "argument": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Error",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 88,
                                    "end": 93
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": "param is not defined",
                                      "raw": "'param is not defined'",
                                      "start": 94,
                                      "end": 116
                                    }
                                  ],
                                  "start": 84,
                                  "end": 117
                                },
                                "start": 78,
                                "end": 117
                              }
                            ],
                            "start": 76,
                            "end": 119
                          },
                          "id": null,
                          "generator": false,
                          "start": 70,
                          "end": 119
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 69,
                        "end": 122
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 61,
                      "end": 122
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 61,
                    "end": 122
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 129
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 136
              },
              "definite": false,
              "start": 51,
              "end": 136
            }
          ],
          "declare": false,
          "start": 45,
          "end": 137
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
                "start": 147,
                "end": 154
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "log",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 158
              },
              "optional": false,
              "computed": false,
              "start": 147,
              "end": 158
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 164
              }
            ],
            "optional": false,
            "start": 147,
            "end": 165
          },
          "directive": null,
          "start": 147,
          "end": 166
        }
      ],
      "start": 0,
      "end": 223
    },
    {
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
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 238,
                "end": 242
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
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 253
                    },
                    "value": {
                      "type": "Literal",
                      "value": "value",
                      "raw": "'value'",
                      "start": 255,
                      "end": 262
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 248,
                    "end": 262
                  }
                ],
                "start": 246,
                "end": 264
              },
              "definite": false,
              "start": 238,
              "end": 264
            }
          ],
          "declare": false,
          "start": 232,
          "end": 265
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 280,
                        "end": 286
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 289,
                        "end": 298
                      }
                    ],
                    "start": 280,
                    "end": 298
                  },
                  "start": 278,
                  "end": 298
                },
                "start": 275,
                "end": 298
              },
              "init": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 301,
                "end": 303
              },
              "definite": false,
              "start": 275,
              "end": 303
            }
          ],
          "declare": false,
          "start": 271,
          "end": 304
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 330
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 325,
                        "end": 330
                      },
                      "right": {
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
                                "type": "ThrowStatement",
                                "argument": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Error",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 352,
                                    "end": 357
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": "param is not defined",
                                      "raw": "'param is not defined'",
                                      "start": 358,
                                      "end": 380
                                    }
                                  ],
                                  "start": 348,
                                  "end": 381
                                },
                                "start": 342,
                                "end": 381
                              }
                            ],
                            "start": 340,
                            "end": 383
                          },
                          "id": null,
                          "generator": false,
                          "start": 334,
                          "end": 383
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 333,
                        "end": 386
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 386
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 325,
                    "end": 386
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 393
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 400
              },
              "definite": false,
              "start": 315,
              "end": 400
            }
          ],
          "declare": false,
          "start": 309,
          "end": 401
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 411,
            "end": 414
          },
          "directive": null,
          "start": 411,
          "end": 415
        }
      ],
      "start": 226,
      "end": 440
    },
    {
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
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 454,
                "end": 458
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
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 464,
                      "end": 469
                    },
                    "value": {
                      "type": "Literal",
                      "value": "value",
                      "raw": "'value'",
                      "start": 471,
                      "end": 478
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 464,
                    "end": 478
                  }
                ],
                "start": 462,
                "end": 480
              },
              "definite": false,
              "start": 454,
              "end": 480
            }
          ],
          "declare": false,
          "start": 448,
          "end": 481
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 496,
                        "end": 502
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 505,
                        "end": 514
                      }
                    ],
                    "start": 496,
                    "end": 514
                  },
                  "start": 494,
                  "end": 514
                },
                "start": 491,
                "end": 514
              },
              "init": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 517,
                "end": 519
              },
              "definite": false,
              "start": 491,
              "end": 519
            }
          ],
          "declare": false,
          "start": 487,
          "end": 520
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 541,
                      "end": 546
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 541,
                        "end": 546
                      },
                      "right": {
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
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "foo",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 558,
                                    "end": 561
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "undefined",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 564,
                                    "end": 573
                                  },
                                  "start": 558,
                                  "end": 573
                                },
                                "directive": null,
                                "start": 558,
                                "end": 573
                              }
                            ],
                            "start": 556,
                            "end": 575
                          },
                          "id": null,
                          "generator": false,
                          "start": 550,
                          "end": 575
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 549,
                        "end": 578
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 541,
                      "end": 578
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 541,
                    "end": 578
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 531,
                "end": 585
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 588,
                "end": 592
              },
              "definite": false,
              "start": 531,
              "end": 592
            }
          ],
          "declare": false,
          "start": 525,
          "end": 593
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 603,
            "end": 606
          },
          "directive": null,
          "start": 603,
          "end": 607
        }
      ],
      "start": 442,
      "end": 642
    },
    {
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
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 656,
                "end": 660
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
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 666,
                      "end": 671
                    },
                    "value": {
                      "type": "Literal",
                      "value": "value",
                      "raw": "'value'",
                      "start": 673,
                      "end": 680
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 666,
                    "end": 680
                  }
                ],
                "start": 664,
                "end": 682
              },
              "definite": false,
              "start": 656,
              "end": 682
            }
          ],
          "declare": false,
          "start": 650,
          "end": 683
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 698,
                        "end": 704
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 707,
                        "end": 716
                      }
                    ],
                    "start": 698,
                    "end": 716
                  },
                  "start": 696,
                  "end": 716
                },
                "start": 693,
                "end": 716
              },
              "init": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 719,
                "end": 721
              },
              "definite": false,
              "start": 693,
              "end": 721
            }
          ],
          "declare": false,
          "start": 689,
          "end": 722
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 743,
                      "end": 748
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 743,
                        "end": 748
                      },
                      "right": {
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
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Literal",
                                    "value": "",
                                    "raw": "\"\"",
                                    "start": 767,
                                    "end": 769
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 772,
                                    "end": 773
                                  },
                                  "start": 767,
                                  "end": 773
                                },
                                "start": 760,
                                "end": 773
                              }
                            ],
                            "start": 758,
                            "end": 775
                          },
                          "id": null,
                          "generator": false,
                          "start": 752,
                          "end": 775
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 751,
                        "end": 778
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 743,
                      "end": 778
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 743,
                    "end": 778
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 733,
                "end": 785
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 788,
                "end": 792
              },
              "definite": false,
              "start": 733,
              "end": 792
            }
          ],
          "declare": false,
          "start": 727,
          "end": 793
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 803,
            "end": 806
          },
          "directive": null,
          "start": 803,
          "end": 807
        }
      ],
      "start": 644,
      "end": 830
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "TSInterfaceDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Window",
            "optional": false,
            "typeAnnotation": null,
            "start": 848,
            "end": 854
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
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "window",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 865,
                  "end": 871
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Window",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 873,
                      "end": 879
                    },
                    "typeArguments": null,
                    "start": 873,
                    "end": 879
                  },
                  "start": 871,
                  "end": 879
                },
                "accessibility": null,
                "static": false,
                "start": 865,
                "end": 880
              }
            ],
            "start": 855,
            "end": 886
          },
          "declare": false,
          "start": 838,
          "end": 886
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 901,
                        "end": 907
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 910,
                        "end": 919
                      }
                    ],
                    "start": 901,
                    "end": 919
                  },
                  "start": 899,
                  "end": 919
                },
                "start": 896,
                "end": 919
              },
              "init": null,
              "definite": false,
              "start": 896,
              "end": 919
            }
          ],
          "declare": false,
          "start": 892,
          "end": 920
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
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 929,
                "end": 935
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 938,
                  "end": 940
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Window",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 944,
                    "end": 950
                  },
                  "typeArguments": null,
                  "start": 944,
                  "end": 950
                },
                "start": 938,
                "end": 950
              },
              "definite": false,
              "start": 929,
              "end": 950
            }
          ],
          "declare": false,
          "start": 925,
          "end": 951
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
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 956,
                "end": 962
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 963,
                "end": 969
              },
              "optional": false,
              "computed": false,
              "start": 956,
              "end": 969
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "window",
              "optional": false,
              "typeAnnotation": null,
              "start": 972,
              "end": 978
            },
            "start": 956,
            "end": 978
          },
          "directive": null,
          "start": 956,
          "end": 979
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1003,
                                  "end": 1006
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "",
                                  "raw": "\"\"",
                                  "start": 1009,
                                  "end": 1011
                                },
                                "start": 1003,
                                "end": 1011
                              },
                              "directive": null,
                              "start": 1003,
                              "end": 1012
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "Literal",
                                  "value": "window",
                                  "raw": "'window'",
                                  "start": 1020,
                                  "end": 1028
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "const",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1032,
                                    "end": 1037
                                  },
                                  "typeArguments": null,
                                  "start": 1032,
                                  "end": 1037
                                },
                                "start": 1020,
                                "end": 1037
                              },
                              "start": 1013,
                              "end": 1037
                            }
                          ],
                          "start": 1001,
                          "end": 1039
                        },
                        "id": null,
                        "generator": false,
                        "start": 995,
                        "end": 1039
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 994,
                      "end": 1042
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
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
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "TSAsExpression",
                                      "expression": {
                                        "type": "Literal",
                                        "value": "window",
                                        "raw": "'window'",
                                        "start": 1072,
                                        "end": 1080
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "const",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1084,
                                          "end": 1089
                                        },
                                        "typeArguments": null,
                                        "start": 1084,
                                        "end": 1089
                                      },
                                      "start": 1072,
                                      "end": 1089
                                    },
                                    "start": 1065,
                                    "end": 1089
                                  }
                                ],
                                "start": 1063,
                                "end": 1091
                              },
                              "id": null,
                              "generator": false,
                              "start": 1057,
                              "end": 1091
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1056,
                            "end": 1094
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1097,
                            "end": 1100
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 1055,
                          "end": 1100
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1053,
                      "end": 1102
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 993,
                    "end": 1102
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 991,
                "end": 1104
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1107,
                "end": 1113
              },
              "definite": false,
              "start": 991,
              "end": 1113
            }
          ],
          "declare": false,
          "start": 985,
          "end": 1114
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1120,
            "end": 1123
          },
          "directive": null,
          "start": 1120,
          "end": 1124
        }
      ],
      "start": 832,
      "end": 1147
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "TSInterfaceDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Window",
            "optional": false,
            "typeAnnotation": null,
            "start": 1165,
            "end": 1171
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
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "window",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1182,
                  "end": 1188
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Window",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1190,
                      "end": 1196
                    },
                    "typeArguments": null,
                    "start": 1190,
                    "end": 1196
                  },
                  "start": 1188,
                  "end": 1196
                },
                "accessibility": null,
                "static": false,
                "start": 1182,
                "end": 1197
              }
            ],
            "start": 1172,
            "end": 1203
          },
          "declare": false,
          "start": 1155,
          "end": 1203
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1218,
                        "end": 1224
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1227,
                        "end": 1236
                      }
                    ],
                    "start": 1218,
                    "end": 1236
                  },
                  "start": 1216,
                  "end": 1236
                },
                "start": 1213,
                "end": 1236
              },
              "init": null,
              "definite": false,
              "start": 1213,
              "end": 1236
            }
          ],
          "declare": false,
          "start": 1209,
          "end": 1237
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
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1246,
                "end": 1252
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 1255,
                  "end": 1257
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Window",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1261,
                    "end": 1267
                  },
                  "typeArguments": null,
                  "start": 1261,
                  "end": 1267
                },
                "start": 1255,
                "end": 1267
              },
              "definite": false,
              "start": 1246,
              "end": 1267
            }
          ],
          "declare": false,
          "start": 1242,
          "end": 1268
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
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1273,
                "end": 1279
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1280,
                "end": 1286
              },
              "optional": false,
              "computed": false,
              "start": 1273,
              "end": 1286
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "window",
              "optional": false,
              "typeAnnotation": null,
              "start": 1289,
              "end": 1295
            },
            "start": 1273,
            "end": 1295
          },
          "directive": null,
          "start": 1273,
          "end": 1296
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "Literal",
                                  "value": "window",
                                  "raw": "'window'",
                                  "start": 1328,
                                  "end": 1336
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "const",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1340,
                                    "end": 1345
                                  },
                                  "typeArguments": null,
                                  "start": 1340,
                                  "end": 1345
                                },
                                "start": 1328,
                                "end": 1345
                              },
                              "start": 1321,
                              "end": 1345
                            }
                          ],
                          "start": 1318,
                          "end": 1347
                        },
                        "id": null,
                        "generator": false,
                        "start": 1312,
                        "end": 1347
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1311,
                      "end": 1350
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
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
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "foo",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1373,
                                        "end": 1376
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "\"\"",
                                        "start": 1379,
                                        "end": 1381
                                      },
                                      "start": 1373,
                                      "end": 1381
                                    },
                                    "directive": null,
                                    "start": 1373,
                                    "end": 1382
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "TSAsExpression",
                                      "expression": {
                                        "type": "Literal",
                                        "value": "window",
                                        "raw": "'window'",
                                        "start": 1390,
                                        "end": 1398
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "const",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1402,
                                          "end": 1407
                                        },
                                        "typeArguments": null,
                                        "start": 1402,
                                        "end": 1407
                                      },
                                      "start": 1390,
                                      "end": 1407
                                    },
                                    "start": 1383,
                                    "end": 1407
                                  }
                                ],
                                "start": 1371,
                                "end": 1409
                              },
                              "id": null,
                              "generator": false,
                              "start": 1365,
                              "end": 1409
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1364,
                            "end": 1412
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1415,
                            "end": 1418
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 1363,
                          "end": 1418
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1361,
                      "end": 1420
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 1310,
                    "end": 1420
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1308,
                "end": 1422
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1425,
                "end": 1431
              },
              "definite": false,
              "start": 1308,
              "end": 1431
            }
          ],
          "declare": false,
          "start": 1302,
          "end": 1432
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1438,
            "end": 1441
          },
          "directive": null,
          "start": 1438,
          "end": 1442
        }
      ],
      "start": 1149,
      "end": 1465
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "TSInterfaceDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Window",
            "optional": false,
            "typeAnnotation": null,
            "start": 1483,
            "end": 1489
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
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "window",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1500,
                  "end": 1506
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Window",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1508,
                      "end": 1514
                    },
                    "typeArguments": null,
                    "start": 1508,
                    "end": 1514
                  },
                  "start": 1506,
                  "end": 1514
                },
                "accessibility": null,
                "static": false,
                "start": 1500,
                "end": 1515
              }
            ],
            "start": 1490,
            "end": 1521
          },
          "declare": false,
          "start": 1473,
          "end": 1521
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1536,
                        "end": 1542
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1545,
                        "end": 1554
                      }
                    ],
                    "start": 1536,
                    "end": 1554
                  },
                  "start": 1534,
                  "end": 1554
                },
                "start": 1531,
                "end": 1554
              },
              "init": null,
              "definite": false,
              "start": 1531,
              "end": 1554
            }
          ],
          "declare": false,
          "start": 1527,
          "end": 1555
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
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1564,
                "end": 1570
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 1573,
                  "end": 1575
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Window",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1579,
                    "end": 1585
                  },
                  "typeArguments": null,
                  "start": 1579,
                  "end": 1585
                },
                "start": 1573,
                "end": 1585
              },
              "definite": false,
              "start": 1564,
              "end": 1585
            }
          ],
          "declare": false,
          "start": 1560,
          "end": 1586
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
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1591,
                "end": 1597
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1598,
                "end": 1604
              },
              "optional": false,
              "computed": false,
              "start": 1591,
              "end": 1604
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "window",
              "optional": false,
              "typeAnnotation": null,
              "start": 1607,
              "end": 1613
            },
            "start": 1591,
            "end": 1613
          },
          "directive": null,
          "start": 1591,
          "end": 1614
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "Literal",
                                  "value": "window",
                                  "raw": "'window'",
                                  "start": 1645,
                                  "end": 1653
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "const",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1657,
                                    "end": 1662
                                  },
                                  "typeArguments": null,
                                  "start": 1657,
                                  "end": 1662
                                },
                                "start": 1645,
                                "end": 1662
                              },
                              "start": 1638,
                              "end": 1662
                            }
                          ],
                          "start": 1636,
                          "end": 1664
                        },
                        "id": null,
                        "generator": false,
                        "start": 1630,
                        "end": 1664
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1629,
                      "end": 1667
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
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
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "TSAsExpression",
                                      "expression": {
                                        "type": "Literal",
                                        "value": "window",
                                        "raw": "'window'",
                                        "start": 1697,
                                        "end": 1705
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "const",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1709,
                                          "end": 1714
                                        },
                                        "typeArguments": null,
                                        "start": 1709,
                                        "end": 1714
                                      },
                                      "start": 1697,
                                      "end": 1714
                                    },
                                    "start": 1690,
                                    "end": 1714
                                  }
                                ],
                                "start": 1688,
                                "end": 1716
                              },
                              "id": null,
                              "generator": false,
                              "start": 1682,
                              "end": 1716
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1681,
                            "end": 1719
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1722,
                              "end": 1725
                            },
                            "right": {
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
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1737,
                                          "end": 1740
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": "",
                                          "raw": "\"\"",
                                          "start": 1743,
                                          "end": 1745
                                        },
                                        "start": 1737,
                                        "end": 1745
                                      },
                                      "directive": null,
                                      "start": 1737,
                                      "end": 1746
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "window",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1754,
                                        "end": 1760
                                      },
                                      "start": 1747,
                                      "end": 1761
                                    }
                                  ],
                                  "start": 1735,
                                  "end": 1763
                                },
                                "id": null,
                                "generator": false,
                                "start": 1729,
                                "end": 1763
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1728,
                              "end": 1766
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1722,
                            "end": 1766
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 1680,
                          "end": 1766
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1678,
                      "end": 1768
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 1628,
                    "end": 1768
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1626,
                "end": 1770
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1773,
                "end": 1779
              },
              "definite": false,
              "start": 1626,
              "end": 1779
            }
          ],
          "declare": false,
          "start": 1620,
          "end": 1780
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1786,
            "end": 1789
          },
          "directive": null,
          "start": 1786,
          "end": 1790
        }
      ],
      "start": 1467,
      "end": 1825
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1825
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "{",
    "start": 0,
    "end": 1
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 12,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 22,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "String",
    "value": "'value'",
    "start": 29,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 45,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 73,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 78,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 88,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "String",
    "value": "'param is not defined'",
    "start": 94,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 132,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 147,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 155,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 159,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 232,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 248,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254
  },
  {
    "type": "String",
    "value": "'value'",
    "start": 255,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 271,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 275,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 289,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 301,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 309,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 325,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 342,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 348,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 352,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 357,
    "end": 358
  },
  {
    "type": "String",
    "value": "'param is not defined'",
    "start": 358,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 396,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 411,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 448,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 454,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 464,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "String",
    "value": "'value'",
    "start": 471,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 487,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 491,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 496,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 505,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 515,
    "end": 516
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 517,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 519,
    "end": 520
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 525,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 541,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 553,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 558,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 564,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 588,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 603,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 644,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 650,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 656,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 666,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672
  },
  {
    "type": "String",
    "value": "'value'",
    "start": 673,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 689,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 693,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 698,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 707,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 717,
    "end": 718
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 719,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 727,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 743,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 755,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 758,
    "end": 759
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 760,
    "end": 766
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 767,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 770,
    "end": 771
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": ")",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 788,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 803,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 832,
    "end": 833
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 838,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 848,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 865,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 873,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 885,
    "end": 886
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 892,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 896,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 901,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 910,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 919,
    "end": 920
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 925,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 929,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 941,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 944,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 956,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 963,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 972,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 978,
    "end": 979
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 985,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 998,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1003,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1009,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1013,
    "end": 1019
  },
  {
    "type": "String",
    "value": "'window'",
    "start": 1020,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1029,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1032,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1060,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1065,
    "end": 1071
  },
  {
    "type": "String",
    "value": "'window'",
    "start": 1072,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1081,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1084,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1097,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1107,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1120,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1155,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 1165,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1182,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 1190,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1209,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1213,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1218,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1227,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1242,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1246,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1258,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 1261,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1273,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1280,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1289,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1302,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1315,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1321,
    "end": 1327
  },
  {
    "type": "String",
    "value": "'window'",
    "start": 1328,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1337,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1340,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1368,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1373,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1379,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1383,
    "end": 1389
  },
  {
    "type": "String",
    "value": "'window'",
    "start": 1390,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1399,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1402,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1415,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1425,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1438,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1473,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 1483,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1500,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 1508,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1527,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1531,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1536,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1545,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1560,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1564,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1576,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 1579,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1591,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1598,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1607,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1620,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1633,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1638,
    "end": 1644
  },
  {
    "type": "String",
    "value": "'window'",
    "start": 1645,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1654,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1657,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1685,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1690,
    "end": 1696
  },
  {
    "type": "String",
    "value": "'window'",
    "start": 1697,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1706,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1709,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1722,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1732,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1737,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1743,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1747,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1754,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1773,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1786,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1824,
    "end": 1825
  }
]
```
