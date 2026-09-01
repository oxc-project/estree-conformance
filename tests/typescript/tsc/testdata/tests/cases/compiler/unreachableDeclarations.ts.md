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
        "name": "func1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "aFunc",
                "optional": false,
                "typeAnnotation": null,
                "start": 23,
                "end": 28
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 23,
              "end": 30
            },
            "directive": null,
            "start": 23,
            "end": 31
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
                  "start": 37,
                  "end": 44
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 48
                },
                "optional": false,
                "computed": false,
                "start": 37,
                "end": 48
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EnumA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 49,
                    "end": 54
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 55,
                    "end": 60
                  },
                  "optional": false,
                  "computed": false,
                  "start": 49,
                  "end": 60
                }
              ],
              "optional": false,
              "start": 37,
              "end": 61
            },
            "directive": null,
            "start": 37,
            "end": 62
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
                  "start": 67,
                  "end": 74
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 78
                },
                "optional": false,
                "computed": false,
                "start": 67,
                "end": 78
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EnumB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 84
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 85,
                    "end": 90
                  },
                  "optional": false,
                  "computed": false,
                  "start": 79,
                  "end": 90
                }
              ],
              "optional": false,
              "start": 67,
              "end": 91
            },
            "directive": null,
            "start": 67,
            "end": 92
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 98,
            "end": 105
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 125
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 138,
                        "end": 145
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 146,
                        "end": 149
                      },
                      "optional": false,
                      "computed": false,
                      "start": 138,
                      "end": 149
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "EnumA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 150,
                          "end": 155
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 156,
                          "end": 161
                        },
                        "optional": false,
                        "computed": false,
                        "start": 150,
                        "end": 161
                      }
                    ],
                    "optional": false,
                    "start": 138,
                    "end": 162
                  },
                  "directive": null,
                  "start": 138,
                  "end": 163
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
                        "start": 172,
                        "end": 179
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 180,
                        "end": 183
                      },
                      "optional": false,
                      "computed": false,
                      "start": 172,
                      "end": 183
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "EnumB",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 184,
                          "end": 189
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 190,
                          "end": 195
                        },
                        "optional": false,
                        "computed": false,
                        "start": 184,
                        "end": 195
                      }
                    ],
                    "optional": false,
                    "start": 172,
                    "end": 196
                  },
                  "directive": null,
                  "start": 172,
                  "end": 197
                }
              ],
              "start": 128,
              "end": 203
            },
            "expression": false,
            "start": 111,
            "end": 203
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EnumA",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 219
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 222,
                    "end": 227
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 222,
                  "end": 227
                }
              ],
              "start": 220,
              "end": 229
            },
            "const": false,
            "declare": false,
            "start": 209,
            "end": 229
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EnumB",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 250
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 253,
                    "end": 258
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 253,
                  "end": 258
                }
              ],
              "start": 251,
              "end": 260
            },
            "const": true,
            "declare": false,
            "start": 234,
            "end": 260
          }
        ],
        "start": 17,
        "end": 262
      },
      "expression": false,
      "start": 0,
      "end": 262
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null,
        "start": 273,
        "end": 278
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "aFunc",
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 292
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 287,
              "end": 294
            },
            "directive": null,
            "start": 287,
            "end": 295
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
                  "start": 301,
                  "end": 308
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 312
                },
                "optional": false,
                "computed": false,
                "start": 301,
                "end": 312
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EnumA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 313,
                    "end": 318
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 319,
                    "end": 324
                  },
                  "optional": false,
                  "computed": false,
                  "start": 313,
                  "end": 324
                }
              ],
              "optional": false,
              "start": 301,
              "end": 325
            },
            "directive": null,
            "start": 301,
            "end": 326
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 332,
            "end": 339
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 359
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 372,
                        "end": 379
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 380,
                        "end": 383
                      },
                      "optional": false,
                      "computed": false,
                      "start": 372,
                      "end": 383
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "EnumA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 384,
                          "end": 389
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 390,
                          "end": 395
                        },
                        "optional": false,
                        "computed": false,
                        "start": 384,
                        "end": 395
                      }
                    ],
                    "optional": false,
                    "start": 372,
                    "end": 396
                  },
                  "directive": null,
                  "start": 372,
                  "end": 397
                }
              ],
              "start": 362,
              "end": 403
            },
            "expression": false,
            "start": 345,
            "end": 403
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EnumA",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 419
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 422,
                    "end": 427
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 422,
                  "end": 427
                }
              ],
              "start": 420,
              "end": 429
            },
            "const": false,
            "declare": false,
            "start": 409,
            "end": 429
          }
        ],
        "start": 281,
        "end": 431
      },
      "expression": false,
      "start": 264,
      "end": 431
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func3",
        "optional": false,
        "typeAnnotation": null,
        "start": 442,
        "end": 447
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "aFunc",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 461
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 456,
              "end": 463
            },
            "directive": null,
            "start": 456,
            "end": 464
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
                  "start": 470,
                  "end": 477
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 478,
                  "end": 481
                },
                "optional": false,
                "computed": false,
                "start": 470,
                "end": 481
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EnumB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 482,
                    "end": 487
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 488,
                    "end": 493
                  },
                  "optional": false,
                  "computed": false,
                  "start": 482,
                  "end": 493
                }
              ],
              "optional": false,
              "start": 470,
              "end": 494
            },
            "directive": null,
            "start": 470,
            "end": 495
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 501,
            "end": 508
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 528
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 541,
                        "end": 548
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 549,
                        "end": 552
                      },
                      "optional": false,
                      "computed": false,
                      "start": 541,
                      "end": 552
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "EnumB",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 553,
                          "end": 558
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 559,
                          "end": 564
                        },
                        "optional": false,
                        "computed": false,
                        "start": 553,
                        "end": 564
                      }
                    ],
                    "optional": false,
                    "start": 541,
                    "end": 565
                  },
                  "directive": null,
                  "start": 541,
                  "end": 566
                }
              ],
              "start": 531,
              "end": 572
            },
            "expression": false,
            "start": 514,
            "end": 572
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EnumB",
              "optional": false,
              "typeAnnotation": null,
              "start": 589,
              "end": 594
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 597,
                    "end": 602
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 597,
                  "end": 602
                }
              ],
              "start": 595,
              "end": 604
            },
            "const": true,
            "declare": false,
            "start": 578,
            "end": 604
          }
        ],
        "start": 450,
        "end": 606
      },
      "expression": false,
      "start": 433,
      "end": 606
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func4",
        "optional": false,
        "typeAnnotation": null,
        "start": 617,
        "end": 622
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "aFunc",
                "optional": false,
                "typeAnnotation": null,
                "start": 631,
                "end": 636
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 631,
              "end": 638
            },
            "directive": null,
            "start": 631,
            "end": 639
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
                  "start": 645,
                  "end": 652
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 653,
                  "end": 656
                },
                "optional": false,
                "computed": false,
                "start": 645,
                "end": 656
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ClassA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 657,
                    "end": 663
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 664,
                    "end": 669
                  },
                  "optional": false,
                  "computed": false,
                  "start": 657,
                  "end": 669
                }
              ],
              "optional": false,
              "start": 645,
              "end": 670
            },
            "directive": null,
            "start": 645,
            "end": 671
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 677,
            "end": 684
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 704
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 717,
                        "end": 724
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 725,
                        "end": 728
                      },
                      "optional": false,
                      "computed": false,
                      "start": 717,
                      "end": 728
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ClassA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 729,
                          "end": 735
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 736,
                          "end": 741
                        },
                        "optional": false,
                        "computed": false,
                        "start": 729,
                        "end": 741
                      }
                    ],
                    "optional": false,
                    "start": 717,
                    "end": 742
                  },
                  "directive": null,
                  "start": 717,
                  "end": 743
                }
              ],
              "start": 707,
              "end": 749
            },
            "expression": false,
            "start": 690,
            "end": 749
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassA",
              "optional": false,
              "typeAnnotation": null,
              "start": 761,
              "end": 767
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
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 777,
                    "end": 782
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "value": 1234,
                    "raw": "1234",
                    "start": 785,
                    "end": 789
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 770,
                  "end": 790
                }
              ],
              "start": 768,
              "end": 792
            },
            "abstract": false,
            "declare": false,
            "start": 755,
            "end": 792
          }
        ],
        "start": 625,
        "end": 794
      },
      "expression": false,
      "start": 608,
      "end": 794
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func5",
        "optional": false,
        "typeAnnotation": null,
        "start": 805,
        "end": 810
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "aFunc",
                "optional": false,
                "typeAnnotation": null,
                "start": 816,
                "end": 821
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 816,
              "end": 823
            },
            "directive": null,
            "start": 816,
            "end": 824
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
                  "start": 827,
                  "end": 834
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 835,
                  "end": 838
                },
                "optional": false,
                "computed": false,
                "start": 827,
                "end": 838
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 839,
                    "end": 842
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 843,
                    "end": 844
                  },
                  "optional": false,
                  "computed": false,
                  "start": 839,
                  "end": 844
                }
              ],
              "optional": false,
              "start": 827,
              "end": 845
            },
            "directive": null,
            "start": 827,
            "end": 846
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
                  "start": 848,
                  "end": 855
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 856,
                  "end": 859
                },
                "optional": false,
                "computed": false,
                "start": 848,
                "end": 859
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "blah",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 860,
                    "end": 864
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 865,
                    "end": 869
                  },
                  "optional": false,
                  "computed": false,
                  "start": 860,
                  "end": 869
                }
              ],
              "optional": false,
              "start": 848,
              "end": 870
            },
            "directive": null,
            "start": 848,
            "end": 871
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
                  "start": 873,
                  "end": 880
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 881,
                  "end": 884
                },
                "optional": false,
                "computed": false,
                "start": 873,
                "end": 884
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 889,
                    "end": 892
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 885,
                  "end": 894
                }
              ],
              "optional": false,
              "start": 873,
              "end": 895
            },
            "directive": null,
            "start": 873,
            "end": 895
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
                  "start": 897,
                  "end": 904
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 905,
                  "end": 908
                },
                "optional": false,
                "computed": false,
                "start": 897,
                "end": 908
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 909,
                    "end": 912
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 913,
                    "end": 918
                  },
                  "optional": false,
                  "computed": false,
                  "start": 909,
                  "end": 918
                }
              ],
              "optional": false,
              "start": 897,
              "end": 919
            },
            "directive": null,
            "start": 897,
            "end": 920
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 924,
            "end": 931
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 943,
              "end": 948
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 955,
                        "end": 962
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 963,
                        "end": 966
                      },
                      "optional": false,
                      "computed": false,
                      "start": 955,
                      "end": 966
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 967,
                          "end": 970
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 971,
                          "end": 972
                        },
                        "optional": false,
                        "computed": false,
                        "start": 967,
                        "end": 972
                      }
                    ],
                    "optional": false,
                    "start": 955,
                    "end": 973
                  },
                  "directive": null,
                  "start": 955,
                  "end": 974
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
                        "start": 977,
                        "end": 984
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 985,
                        "end": 988
                      },
                      "optional": false,
                      "computed": false,
                      "start": 977,
                      "end": 988
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "blah",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 989,
                          "end": 993
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 994,
                          "end": 998
                        },
                        "optional": false,
                        "computed": false,
                        "start": 989,
                        "end": 998
                      }
                    ],
                    "optional": false,
                    "start": 977,
                    "end": 999
                  },
                  "directive": null,
                  "start": 977,
                  "end": 1000
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
                        "start": 1003,
                        "end": 1010
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1011,
                        "end": 1014
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1003,
                      "end": 1014
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1019,
                          "end": 1022
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 1015,
                        "end": 1024
                      }
                    ],
                    "optional": false,
                    "start": 1003,
                    "end": 1025
                  },
                  "directive": null,
                  "start": 1003,
                  "end": 1025
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
                        "start": 1028,
                        "end": 1035
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1036,
                        "end": 1039
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1028,
                      "end": 1039
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Baz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1040,
                          "end": 1043
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1044,
                          "end": 1049
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1040,
                        "end": 1049
                      }
                    ],
                    "optional": false,
                    "start": 1028,
                    "end": 1050
                  },
                  "directive": null,
                  "start": 1028,
                  "end": 1051
                }
              ],
              "start": 951,
              "end": 1054
            },
            "expression": false,
            "start": 934,
            "end": 1054
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
                  "name": "blah",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1063,
                  "end": 1067
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
                        "start": 1072,
                        "end": 1076
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1234,
                        "raw": "1234",
                        "start": 1078,
                        "end": 1082
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1072,
                      "end": 1082
                    }
                  ],
                  "start": 1070,
                  "end": 1084
                },
                "definite": false,
                "start": 1063,
                "end": 1084
              }
            ],
            "declare": false,
            "start": 1057,
            "end": 1085
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1093,
              "end": 1096
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
                    "start": 1099,
                    "end": 1100
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 1099,
                  "end": 1100
                }
              ],
              "start": 1097,
              "end": 1102
            },
            "const": false,
            "declare": false,
            "start": 1088,
            "end": 1102
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1111,
              "end": 1114
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1117,
                    "end": 1118
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "value": 1234,
                    "raw": "1234",
                    "start": 1121,
                    "end": 1125
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 1117,
                  "end": 1125
                }
              ],
              "start": 1115,
              "end": 1127
            },
            "abstract": false,
            "declare": false,
            "start": 1105,
            "end": 1127
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 1140,
              "end": 1143
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1159,
                          "end": 1164
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1234,
                          "raw": "1234",
                          "start": 1167,
                          "end": 1171
                        },
                        "definite": false,
                        "start": 1159,
                        "end": 1171
                      }
                    ],
                    "declare": false,
                    "start": 1153,
                    "end": 1171
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1146,
                  "end": 1171
                }
              ],
              "start": 1144,
              "end": 1173
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 1130,
            "end": 1173
          }
        ],
        "start": 813,
        "end": 1175
      },
      "expression": false,
      "start": 796,
      "end": 1175
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1175
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
    "value": "func1",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "aFunc",
    "start": 23,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 37,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "EnumA",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 55,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "EnumB",
    "start": 79,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 85,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 98,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 111,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "aFunc",
    "start": 120,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 138,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 146,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "EnumA",
    "start": 150,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 156,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 172,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 180,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "EnumB",
    "start": 184,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 190,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 209,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "EnumA",
    "start": 214,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 222,
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
    "value": "const",
    "start": 234,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 240,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "EnumB",
    "start": 245,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 253,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 264,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "func2",
    "start": 273,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "aFunc",
    "start": 287,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 301,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 309,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "EnumA",
    "start": 313,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 319,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 332,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 345,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "aFunc",
    "start": 354,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 372,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 380,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "EnumA",
    "start": 384,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 390,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 409,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "EnumA",
    "start": 414,
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
    "value": "Value",
    "start": 422,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 433,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "func3",
    "start": 442,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "aFunc",
    "start": 456,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 470,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 478,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "EnumB",
    "start": 482,
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
    "value": "Value",
    "start": 488,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 501,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 514,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "aFunc",
    "start": 523,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 529,
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
    "value": "console",
    "start": 541,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 549,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "EnumB",
    "start": 553,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 559,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 578,
    "end": 583
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 584,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "EnumB",
    "start": 589,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 597,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 605,
    "end": 606
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 608,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "func4",
    "start": 617,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "aFunc",
    "start": 631,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 645,
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
    "value": "log",
    "start": 653,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 657,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 664,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 677,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 683,
    "end": 684
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 690,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "aFunc",
    "start": 699,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 717,
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
    "value": "log",
    "start": 725,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 729,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 736,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 748,
    "end": 749
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 755,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 761,
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
    "value": "static",
    "start": 770,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 777,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 783,
    "end": 784
  },
  {
    "type": "Numeric",
    "value": "1234",
    "start": 785,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 793,
    "end": 794
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 796,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "func5",
    "start": 805,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "aFunc",
    "start": 816,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 827,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 835,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 839,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 848,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 856,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "blah",
    "start": 860,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 865,
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
    "type": "Identifier",
    "value": "console",
    "start": 873,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 881,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 884,
    "end": 885
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 885,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 889,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 897,
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
    "value": "log",
    "start": 905,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 909,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 913,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 918,
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
    "value": "return",
    "start": 924,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 930,
    "end": 931
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 934,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "aFunc",
    "start": 943,
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
    "type": "Identifier",
    "value": "console",
    "start": 955,
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
    "value": "log",
    "start": 963,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 967,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 977,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 985,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "blah",
    "start": 989,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 994,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1003,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1011,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1015,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1019,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1022,
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
    "value": ")",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1028,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1036,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 1040,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1044,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1057,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "blah",
    "start": 1063,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1072,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Numeric",
    "value": "1234",
    "start": 1078,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1088,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 1093,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1105,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1111,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Numeric",
    "value": "1234",
    "start": 1121,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1130,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 1140,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1146,
    "end": 1152
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1153,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1159,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Numeric",
    "value": "1234",
    "start": 1167,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1174,
    "end": 1175
  }
]
```
