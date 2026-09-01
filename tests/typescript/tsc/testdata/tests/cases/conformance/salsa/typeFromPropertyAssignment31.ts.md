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
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 21
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 25,
              "end": 31
            },
            "start": 23,
            "end": 31
          },
          "start": 22,
          "end": 31
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
              "start": 46,
              "end": 47
            },
            "start": 39,
            "end": 48
          }
        ],
        "start": 33,
        "end": 50
      },
      "expression": false,
      "start": 0,
      "end": 50
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
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 63
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 66
          },
          "optional": false,
          "computed": false,
          "start": 51,
          "end": 66
        },
        "right": {
          "type": "Literal",
          "value": 111,
          "raw": "111",
          "start": 69,
          "end": 72
        },
        "start": 51,
        "end": 72
      },
      "directive": null,
      "start": 51,
      "end": 72
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
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 85
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 87
          },
          "optional": false,
          "computed": false,
          "start": 73,
          "end": 87
        },
        "right": {
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
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 102,
                  "end": 108
                },
                "start": 100,
                "end": 108
              },
              "start": 99,
              "end": 108
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 123,
                    "end": 124
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 127,
                    "end": 128
                  },
                  "start": 123,
                  "end": 128
                },
                "start": 116,
                "end": 129
              }
            ],
            "start": 110,
            "end": 131
          },
          "expression": false,
          "start": 90,
          "end": 131
        },
        "start": 73,
        "end": 131
      },
      "directive": null,
      "start": 73,
      "end": 131
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 154
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
                    "name": "p2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 172,
                    "end": 174
                  },
                  "init": {
                    "type": "Literal",
                    "value": 222,
                    "raw": "222",
                    "start": 177,
                    "end": 180
                  },
                  "definite": false,
                  "start": 172,
                  "end": 180
                }
              ],
              "declare": false,
              "start": 168,
              "end": 181
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 161,
            "end": 181
          }
        ],
        "start": 155,
        "end": 183
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 132,
      "end": 183
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
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 196
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p4",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 199
          },
          "optional": false,
          "computed": false,
          "start": 184,
          "end": 199
        },
        "right": {
          "type": "Literal",
          "value": 44444,
          "raw": "44444",
          "start": 202,
          "end": 207
        },
        "start": 184,
        "end": 207
      },
      "directive": null,
      "start": 184,
      "end": 208
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
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 227
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p6",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 230
          },
          "optional": false,
          "computed": false,
          "start": 215,
          "end": 230
        },
        "right": {
          "type": "Literal",
          "value": 66666,
          "raw": "66666",
          "start": 233,
          "end": 238
        },
        "start": 215,
        "end": 238
      },
      "directive": null,
      "start": 215,
      "end": 239
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
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 246,
            "end": 258
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p8",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 261
          },
          "optional": false,
          "computed": false,
          "start": 246,
          "end": 261
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 264,
          "end": 269
        },
        "start": 246,
        "end": 269
      },
      "directive": null,
      "start": 246,
      "end": 270
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null,
        "start": 295,
        "end": 307
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
                    "name": "p3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 327
                  },
                  "init": {
                    "type": "Literal",
                    "value": 333,
                    "raw": "333",
                    "start": 330,
                    "end": 333
                  },
                  "definite": false,
                  "start": 325,
                  "end": 333
                }
              ],
              "declare": false,
              "start": 321,
              "end": 334
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 314,
            "end": 334
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
                    "name": "p4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 350,
                    "end": 352
                  },
                  "init": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 355,
                    "end": 356
                  },
                  "definite": false,
                  "start": 350,
                  "end": 356
                }
              ],
              "declare": false,
              "start": 346,
              "end": 357
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 339,
            "end": 357
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
                    "name": "p5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 373,
                    "end": 375
                  },
                  "init": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 378,
                    "end": 379
                  },
                  "definite": false,
                  "start": 373,
                  "end": 379
                }
              ],
              "declare": false,
              "start": 369,
              "end": 380
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 362,
            "end": 380
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
                    "name": "p6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 396,
                    "end": 398
                  },
                  "init": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 401,
                    "end": 402
                  },
                  "definite": false,
                  "start": 396,
                  "end": 402
                }
              ],
              "declare": false,
              "start": 392,
              "end": 403
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 385,
            "end": 403
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
                    "name": "p7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 419,
                    "end": 421
                  },
                  "init": {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 424,
                    "end": 425
                  },
                  "definite": false,
                  "start": 419,
                  "end": 425
                }
              ],
              "declare": false,
              "start": 415,
              "end": 426
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 408,
            "end": 426
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
                    "name": "p8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 442,
                    "end": 444
                  },
                  "init": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 447,
                    "end": 448
                  },
                  "definite": false,
                  "start": 442,
                  "end": 448
                }
              ],
              "declare": false,
              "start": 438,
              "end": 449
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 431,
            "end": 449
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
                    "name": "p9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 465,
                    "end": 467
                  },
                  "init": {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 470,
                    "end": 471
                  },
                  "definite": false,
                  "start": 465,
                  "end": 471
                }
              ],
              "declare": false,
              "start": 461,
              "end": 472
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 454,
            "end": 472
          }
        ],
        "start": 308,
        "end": 474
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 285,
      "end": 474
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
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 475,
            "end": 487
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p5",
            "optional": false,
            "typeAnnotation": null,
            "start": 488,
            "end": 490
          },
          "optional": false,
          "computed": false,
          "start": 475,
          "end": 490
        },
        "right": {
          "type": "Literal",
          "value": 555555,
          "raw": "555555",
          "start": 493,
          "end": 499
        },
        "start": 475,
        "end": 499
      },
      "directive": null,
      "start": 475,
      "end": 500
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
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 519
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p7",
            "optional": false,
            "typeAnnotation": null,
            "start": 520,
            "end": 522
          },
          "optional": false,
          "computed": false,
          "start": 507,
          "end": 522
        },
        "right": {
          "type": "Literal",
          "value": 777777,
          "raw": "777777",
          "start": 525,
          "end": 531
        },
        "start": 507,
        "end": 531
      },
      "directive": null,
      "start": 507,
      "end": 532
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
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 539,
            "end": 551
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p9",
            "optional": false,
            "typeAnnotation": null,
            "start": 552,
            "end": 554
          },
          "optional": false,
          "computed": false,
          "start": 539,
          "end": 554
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 557,
          "end": 562
        },
        "start": 539,
        "end": 562
      },
      "directive": null,
      "start": 539,
      "end": 563
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 582,
            "end": 583
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ExpandoMerge",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 586,
                                  "end": 598
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "p1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 599,
                                  "end": 601
                                },
                                "optional": false,
                                "computed": false,
                                "start": 586,
                                "end": 601
                              },
                              "operator": "+",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ExpandoMerge",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 604,
                                  "end": 616
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "p2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 617,
                                  "end": 619
                                },
                                "optional": false,
                                "computed": false,
                                "start": 604,
                                "end": 619
                              },
                              "start": 586,
                              "end": 619
                            },
                            "operator": "+",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ExpandoMerge",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 622,
                                "end": 634
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "p3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 635,
                                "end": 637
                              },
                              "optional": false,
                              "computed": false,
                              "start": 622,
                              "end": 637
                            },
                            "start": 586,
                            "end": 637
                          },
                          "operator": "+",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ExpandoMerge",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 640,
                              "end": 652
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p4",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 653,
                              "end": 655
                            },
                            "optional": false,
                            "computed": false,
                            "start": 640,
                            "end": 655
                          },
                          "start": 586,
                          "end": 655
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ExpandoMerge",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 658,
                            "end": 670
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 671,
                            "end": 673
                          },
                          "optional": false,
                          "computed": false,
                          "start": 658,
                          "end": 673
                        },
                        "start": 586,
                        "end": 673
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ExpandoMerge",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 676,
                          "end": 688
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 689,
                          "end": 691
                        },
                        "optional": false,
                        "computed": false,
                        "start": 676,
                        "end": 691
                      },
                      "start": 586,
                      "end": 691
                    },
                    "operator": "+",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ExpandoMerge",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 694,
                        "end": 706
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p7",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 707,
                        "end": 709
                      },
                      "optional": false,
                      "computed": false,
                      "start": 694,
                      "end": 709
                    },
                    "start": 586,
                    "end": 709
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ExpandoMerge",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 712,
                      "end": 724
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 725,
                      "end": 727
                    },
                    "optional": false,
                    "computed": false,
                    "start": 712,
                    "end": 727
                  },
                  "start": 586,
                  "end": 727
                },
                "operator": "+",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoMerge",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 730,
                    "end": 742
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 743,
                    "end": 745
                  },
                  "optional": false,
                  "computed": false,
                  "start": 730,
                  "end": 745
                },
                "start": 586,
                "end": 745
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoMerge",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 748,
                    "end": 760
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 761,
                    "end": 762
                  },
                  "optional": false,
                  "computed": false,
                  "start": 748,
                  "end": 762
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 763,
                    "end": 765
                  }
                ],
                "optional": false,
                "start": 748,
                "end": 766
              },
              "start": 586,
              "end": 766
            },
            "operator": "+",
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExpandoMerge",
                "optional": false,
                "typeAnnotation": null,
                "start": 769,
                "end": 781
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1001,
                  "raw": "1001",
                  "start": 782,
                  "end": 786
                }
              ],
              "optional": false,
              "start": 769,
              "end": 787
            },
            "start": 586,
            "end": 787
          },
          "definite": false,
          "start": 582,
          "end": 787
        }
      ],
      "declare": false,
      "start": 578,
      "end": 788
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 788
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 9,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 39,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 51,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 64,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Numeric",
    "value": "111",
    "start": 69,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 73,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 90,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 116,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 125,
    "end": 126
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 132,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 142,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 161,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 172,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 175,
    "end": 176
  },
  {
    "type": "Numeric",
    "value": "222",
    "start": 177,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 184,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 197,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 200,
    "end": 201
  },
  {
    "type": "Numeric",
    "value": "44444",
    "start": 202,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 215,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "p6",
    "start": 228,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 231,
    "end": 232
  },
  {
    "type": "Numeric",
    "value": "66666",
    "start": 233,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 246,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "p8",
    "start": 259,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 262,
    "end": 263
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 264,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 285,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 295,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 314,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 321,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 325,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329
  },
  {
    "type": "Numeric",
    "value": "333",
    "start": 330,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 339,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 346,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 350,
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
    "value": "4",
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
    "value": "export",
    "start": 362,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 369,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "p5",
    "start": 373,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 376,
    "end": 377
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 385,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 392,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "p6",
    "start": 396,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 399,
    "end": 400
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 408,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 415,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "p7",
    "start": 419,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 422,
    "end": 423
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 431,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 438,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "p8",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 445,
    "end": 446
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 454,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 461,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "p9",
    "start": 465,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 468,
    "end": 469
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 475,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "p5",
    "start": 488,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Numeric",
    "value": "555555",
    "start": 493,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 507,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "p7",
    "start": 520,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 523,
    "end": 524
  },
  {
    "type": "Numeric",
    "value": "777777",
    "start": 525,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 539,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "p9",
    "start": 552,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 555,
    "end": 556
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 557,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 578,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 586,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 599,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 604,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 617,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 622,
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
    "value": "p3",
    "start": 635,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 640,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 653,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 658,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "p5",
    "start": 671,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 676,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "p6",
    "start": 689,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 694,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "p7",
    "start": 707,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 712,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "p8",
    "start": 725,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 730,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "p9",
    "start": 743,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 748,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "m",
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
    "type": "Numeric",
    "value": "12",
    "start": 763,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 769,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 781,
    "end": 782
  },
  {
    "type": "Numeric",
    "value": "1001",
    "start": 782,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788
  }
]
```
