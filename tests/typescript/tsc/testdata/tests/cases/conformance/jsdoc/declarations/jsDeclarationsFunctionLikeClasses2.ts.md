__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Vec",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 50
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "len",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 54
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
                    "start": 102,
                    "end": 106
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "storage",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 107,
                    "end": 114
                  },
                  "optional": false,
                  "computed": false,
                  "start": 102,
                  "end": 114
                },
                "right": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 126
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 127,
                      "end": 130
                    }
                  ],
                  "start": 117,
                  "end": 131
                },
                "start": 102,
                "end": 131
              },
              "directive": null,
              "start": 102,
              "end": 132
            }
          ],
          "start": 56,
          "end": 134
        },
        "expression": false,
        "start": 38,
        "end": 134
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 31,
      "end": 134
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
            "name": "Vec",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 139
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 149
          },
          "optional": false,
          "computed": false,
          "start": 136,
          "end": 149
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "dot",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 203
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
                    "name": "other",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 204,
                    "end": 209
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "other",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 225,
                              "end": 230
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 231,
                              "end": 238
                            },
                            "optional": false,
                            "computed": false,
                            "start": 225,
                            "end": 238
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 239,
                            "end": 245
                          },
                          "optional": false,
                          "computed": false,
                          "start": 225,
                          "end": 245
                        },
                        "operator": "!==",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 250,
                              "end": 254
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 255,
                              "end": 262
                            },
                            "optional": false,
                            "computed": false,
                            "start": 250,
                            "end": 262
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 263,
                            "end": 269
                          },
                          "optional": false,
                          "computed": false,
                          "start": 250,
                          "end": 269
                        },
                        "start": 225,
                        "end": 269
                      },
                      "consequent": {
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
                                "start": 295,
                                "end": 300
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "TemplateLiteral",
                                  "quasis": [
                                    {
                                      "type": "TemplateElement",
                                      "value": {
                                        "raw": "Dot product only applicable for vectors of equal length",
                                        "cooked": "Dot product only applicable for vectors of equal length"
                                      },
                                      "tail": true,
                                      "start": 301,
                                      "end": 358
                                    }
                                  ],
                                  "expressions": [],
                                  "start": 301,
                                  "end": 358
                                }
                              ],
                              "start": 291,
                              "end": 359
                            },
                            "start": 285,
                            "end": 360
                          }
                        ],
                        "start": 271,
                        "end": 370
                      },
                      "alternate": null,
                      "start": 221,
                      "end": 370
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
                            "name": "sum",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 383,
                            "end": 386
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 389,
                            "end": 390
                          },
                          "definite": false,
                          "start": 383,
                          "end": 390
                        }
                      ],
                      "declare": false,
                      "start": 379,
                      "end": 391
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
                              "start": 409,
                              "end": 410
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 413,
                              "end": 414
                            },
                            "definite": false,
                            "start": 409,
                            "end": 414
                          }
                        ],
                        "declare": false,
                        "start": 405,
                        "end": 414
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 416,
                          "end": 417
                        },
                        "operator": "<",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 420,
                              "end": 424
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 425,
                              "end": 432
                            },
                            "optional": false,
                            "computed": false,
                            "start": 420,
                            "end": 432
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 433,
                            "end": 439
                          },
                          "optional": false,
                          "computed": false,
                          "start": 420,
                          "end": 439
                        },
                        "start": 416,
                        "end": 439
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 441,
                          "end": 442
                        },
                        "start": 441,
                        "end": 444
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "+=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sum",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 460,
                                "end": 463
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 468,
                                      "end": 472
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "storage",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 473,
                                      "end": 480
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 468,
                                    "end": 480
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 481,
                                    "end": 482
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 468,
                                  "end": 483
                                },
                                "operator": "*",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "other",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 486,
                                      "end": 491
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "storage",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 492,
                                      "end": 499
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 486,
                                    "end": 499
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 500,
                                    "end": 501
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 486,
                                  "end": 502
                                },
                                "start": 468,
                                "end": 502
                              },
                              "start": 460,
                              "end": 503
                            },
                            "directive": null,
                            "start": 460,
                            "end": 504
                          }
                        ],
                        "start": 446,
                        "end": 514
                      },
                      "start": 400,
                      "end": 514
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 530,
                        "end": 533
                      },
                      "start": 523,
                      "end": 534
                    }
                  ],
                  "start": 211,
                  "end": 540
                },
                "expression": false,
                "start": 203,
                "end": 540
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 200,
              "end": 540
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "magnitude",
                "optional": false,
                "typeAnnotation": null,
                "start": 546,
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
                      "type": "VariableDeclaration",
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sum",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 572,
                            "end": 575
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 578,
                            "end": 579
                          },
                          "definite": false,
                          "start": 572,
                          "end": 579
                        }
                      ],
                      "declare": false,
                      "start": 568,
                      "end": 580
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
                              "start": 598,
                              "end": 599
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 602,
                              "end": 603
                            },
                            "definite": false,
                            "start": 598,
                            "end": 603
                          }
                        ],
                        "declare": false,
                        "start": 594,
                        "end": 603
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 605,
                          "end": 606
                        },
                        "operator": "<",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 609,
                              "end": 613
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 614,
                              "end": 621
                            },
                            "optional": false,
                            "computed": false,
                            "start": 609,
                            "end": 621
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 622,
                            "end": 628
                          },
                          "optional": false,
                          "computed": false,
                          "start": 609,
                          "end": 628
                        },
                        "start": 605,
                        "end": 628
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 630,
                          "end": 631
                        },
                        "start": 630,
                        "end": 633
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "+=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sum",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 649,
                                "end": 652
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 657,
                                      "end": 661
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "storage",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 662,
                                      "end": 669
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 657,
                                    "end": 669
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 670,
                                    "end": 671
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 657,
                                  "end": 672
                                },
                                "operator": "**",
                                "right": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 676,
                                  "end": 677
                                },
                                "start": 657,
                                "end": 677
                              },
                              "start": 649,
                              "end": 678
                            },
                            "directive": null,
                            "start": 649,
                            "end": 679
                          }
                        ],
                        "start": 635,
                        "end": 689
                      },
                      "start": 589,
                      "end": 689
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 705,
                            "end": 709
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sqrt",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 710,
                            "end": 714
                          },
                          "optional": false,
                          "computed": false,
                          "start": 705,
                          "end": 714
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sum",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 715,
                            "end": 718
                          }
                        ],
                        "optional": false,
                        "start": 705,
                        "end": 719
                      },
                      "start": 698,
                      "end": 720
                    }
                  ],
                  "start": 558,
                  "end": 726
                },
                "expression": false,
                "start": 555,
                "end": 726
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 546,
              "end": 726
            }
          ],
          "start": 152,
          "end": 728
        },
        "start": 136,
        "end": 728
      },
      "directive": null,
      "start": 136,
      "end": 728
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Point2D",
          "optional": false,
          "typeAnnotation": null,
          "start": 796,
          "end": 803
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
            "start": 804,
            "end": 805
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 807,
            "end": 808
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "ThisExpression",
                    "start": 822,
                    "end": 826
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point2D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 838,
                    "end": 845
                  },
                  "start": 822,
                  "end": 845
                },
                "prefix": true,
                "start": 820,
                "end": 846
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point2D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 869,
                        "end": 876
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 877,
                          "end": 878
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 880,
                          "end": 881
                        }
                      ],
                      "start": 865,
                      "end": 882
                    },
                    "start": 858,
                    "end": 883
                  }
                ],
                "start": 848,
                "end": 889
              },
              "alternate": null,
              "start": 816,
              "end": 889
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
                    "name": "Vec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 894,
                    "end": 897
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "call",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 898,
                    "end": 902
                  },
                  "optional": false,
                  "computed": false,
                  "start": 894,
                  "end": 902
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ThisExpression",
                    "start": 903,
                    "end": 907
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 909,
                    "end": 910
                  }
                ],
                "optional": false,
                "start": 894,
                "end": 911
              },
              "directive": null,
              "start": 894,
              "end": 912
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
                    "start": 917,
                    "end": 921
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 922,
                    "end": 923
                  },
                  "optional": false,
                  "computed": false,
                  "start": 917,
                  "end": 923
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 926,
                  "end": 927
                },
                "start": 917,
                "end": 927
              },
              "directive": null,
              "start": 917,
              "end": 928
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
                    "start": 933,
                    "end": 937
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 938,
                    "end": 939
                  },
                  "optional": false,
                  "computed": false,
                  "start": 933,
                  "end": 939
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 942,
                  "end": 943
                },
                "start": 933,
                "end": 943
              },
              "directive": null,
              "start": 933,
              "end": 944
            }
          ],
          "start": 810,
          "end": 946
        },
        "expression": false,
        "start": 787,
        "end": 946
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 780,
      "end": 946
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
            "name": "Point2D",
            "optional": false,
            "typeAnnotation": null,
            "start": 948,
            "end": 955
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 956,
            "end": 965
          },
          "optional": false,
          "computed": false,
          "start": 948,
          "end": 965
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "__proto__",
                "optional": false,
                "typeAnnotation": null,
                "start": 974,
                "end": 983
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "Vec",
                "optional": false,
                "typeAnnotation": null,
                "start": 985,
                "end": 988
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 974,
              "end": 988
            },
            {
              "type": "Property",
              "kind": "get",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 998,
                "end": 999
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1019,
                            "end": 1023
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "storage",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1024,
                            "end": 1031
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1019,
                          "end": 1031
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1032,
                          "end": 1033
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1019,
                        "end": 1034
                      },
                      "start": 1012,
                      "end": 1035
                    }
                  ],
                  "start": 1002,
                  "end": 1041
                },
                "expression": false,
                "start": 999,
                "end": 1041
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 994,
              "end": 1041
            },
            {
              "type": "Property",
              "kind": "set",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1092,
                "end": 1093
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1094,
                    "end": 1095
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
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1107,
                              "end": 1111
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1112,
                              "end": 1119
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1107,
                            "end": 1119
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1120,
                            "end": 1121
                          },
                          "optional": false,
                          "computed": true,
                          "start": 1107,
                          "end": 1122
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1125,
                          "end": 1126
                        },
                        "start": 1107,
                        "end": 1126
                      },
                      "directive": null,
                      "start": 1107,
                      "end": 1127
                    }
                  ],
                  "start": 1097,
                  "end": 1133
                },
                "expression": false,
                "start": 1093,
                "end": 1133
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1088,
              "end": 1133
            },
            {
              "type": "Property",
              "kind": "get",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1143,
                "end": 1144
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1164,
                            "end": 1168
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "storage",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1169,
                            "end": 1176
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1164,
                          "end": 1176
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1177,
                          "end": 1178
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1164,
                        "end": 1179
                      },
                      "start": 1157,
                      "end": 1180
                    }
                  ],
                  "start": 1147,
                  "end": 1186
                },
                "expression": false,
                "start": 1144,
                "end": 1186
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1139,
              "end": 1186
            },
            {
              "type": "Property",
              "kind": "set",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1237,
                "end": 1238
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1239,
                    "end": 1240
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
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1252,
                              "end": 1256
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1257,
                              "end": 1264
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1252,
                            "end": 1264
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1265,
                            "end": 1266
                          },
                          "optional": false,
                          "computed": true,
                          "start": 1252,
                          "end": 1267
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1270,
                          "end": 1271
                        },
                        "start": 1252,
                        "end": 1271
                      },
                      "directive": null,
                      "start": 1252,
                      "end": 1272
                    }
                  ],
                  "start": 1242,
                  "end": 1278
                },
                "expression": false,
                "start": 1238,
                "end": 1278
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1233,
              "end": 1278
            }
          ],
          "start": 968,
          "end": 1280
        },
        "start": 948,
        "end": 1280
      },
      "directive": null,
      "start": 948,
      "end": 1281
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 31,
  "end": 1282
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 31,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 38,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "Vec",
    "start": 47,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 102,
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
    "value": "storage",
    "start": 107,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 121,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "Vec",
    "start": 136,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 140,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 150,
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
    "value": "dot",
    "start": 200,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 204,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 221,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "storage",
    "start": 231,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 239,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 246,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 250,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "storage",
    "start": 255,
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
    "value": "length",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 285,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 291,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 295,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "Template",
    "value": "`Dot product only applicable for vectors of equal length`",
    "start": 301,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 379,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "sum",
    "start": 383,
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
    "value": "0",
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
    "value": "for",
    "start": 400,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 405,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 411,
    "end": 412
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 420,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "storage",
    "start": 425,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 433,
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
    "value": "i",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "sum",
    "start": 460,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 464,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 468,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "storage",
    "start": 473,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 486,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "storage",
    "start": 492,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 523,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "sum",
    "start": 530,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "magnitude",
    "start": 546,
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
    "value": "let",
    "start": 568,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "sum",
    "start": 572,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 576,
    "end": 577
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 589,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 594,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 609,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "storage",
    "start": 614,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 622,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 631,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "sum",
    "start": 649,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 653,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 657,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "storage",
    "start": 662,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 673,
    "end": 675
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 688,
    "end": 689
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 698,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 705,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "sqrt",
    "start": 710,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "sum",
    "start": 715,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 727,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 780,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 787,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "Point2D",
    "start": 796,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 816,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 821,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 822,
    "end": 826
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 827,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "Point2D",
    "start": 838,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 848,
    "end": 849
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 858,
    "end": 864
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 865,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "Point2D",
    "start": 869,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "Vec",
    "start": 894,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 898,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 902,
    "end": 903
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 903,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 907,
    "end": 908
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 911,
    "end": 912
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 917,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 927,
    "end": 928
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 933,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 942,
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
  },
  {
    "type": "Identifier",
    "value": "Point2D",
    "start": 948,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 956,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "__proto__",
    "start": 974,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "Vec",
    "start": 985,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 994,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1012,
    "end": 1018
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1019,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "storage",
    "start": 1024,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1088,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1107,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "storage",
    "start": 1112,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1139,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1157,
    "end": 1163
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1164,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "storage",
    "start": 1169,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1233,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1252,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "storage",
    "start": 1257,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1280,
    "end": 1281
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Point2D",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Point2D",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "importKind": "value",
          "start": 8,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./source",
        "raw": "\"./source\"",
        "start": 22,
        "end": 32
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 33
    },
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
              "name": "origin",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 54
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point2D",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 68
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 69,
                  "end": 70
                },
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 72,
                  "end": 73
                }
              ],
              "start": 57,
              "end": 74
            },
            "definite": false,
            "start": 48,
            "end": 74
          }
        ],
        "declare": false,
        "start": 42,
        "end": 75
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 35,
      "end": 75
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 169
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Point2D",
    "start": 8,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 17,
    "end": 21
  },
  {
    "type": "String",
    "value": "\"./source\"",
    "start": 22,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 35,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 42,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "origin",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 57,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Point2D",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  }
]
```
