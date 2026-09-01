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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 27,
                      "end": 30
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 36,
                            "end": 39
                          },
                          "start": 34,
                          "end": 39
                        },
                        "start": 31,
                        "end": 39
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 42,
                        "end": 46
                      },
                      "start": 40,
                      "end": 46
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 27,
                    "end": 47
                  }
                ],
                "start": 21,
                "end": 49
              },
              "start": 19,
              "end": 49
            },
            "start": 12,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 49
        }
      ],
      "declare": true,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 65
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 76
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              },
              "start": 76,
              "end": 84
            },
            "accessibility": null,
            "static": false,
            "start": 72,
            "end": 85
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 95
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              },
              "start": 95,
              "end": 103
            },
            "accessibility": null,
            "static": false,
            "start": 90,
            "end": 104
          }
        ],
        "start": 66,
        "end": 106
      },
      "declare": false,
      "start": 50,
      "end": 106
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultiRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 128
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 139
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 141,
                "end": 147
              },
              "start": 139,
              "end": 147
            },
            "accessibility": null,
            "static": false,
            "start": 135,
            "end": 148
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 159
            },
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
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 171,
                      "end": 178
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 180,
                        "end": 186
                      },
                      "start": 178,
                      "end": 186
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 171,
                    "end": 187
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 196,
                      "end": 205
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 207,
                        "end": 213
                      },
                      "start": 205,
                      "end": 213
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 196,
                    "end": 214
                  }
                ],
                "start": 161,
                "end": 220
              },
              "start": 159,
              "end": 220
            },
            "accessibility": null,
            "static": false,
            "start": 153,
            "end": 221
          }
        ],
        "start": 129,
        "end": 223
      },
      "declare": false,
      "start": 108,
      "end": 223
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
            "name": "robot",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 236,
                  "end": 241
                },
                "typeArguments": null,
                "start": 236,
                "end": 241
              },
              "start": 234,
              "end": 241
            },
            "start": 229,
            "end": 241
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 250
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 252,
                  "end": 259
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 246,
                "end": 259
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 266
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 268,
                  "end": 276
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 261,
                "end": 276
              }
            ],
            "start": 244,
            "end": 278
          },
          "definite": false,
          "start": 229,
          "end": 278
        }
      ],
      "declare": false,
      "start": 225,
      "end": 279
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
            "name": "multiRobot",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 296,
                  "end": 306
                },
                "typeArguments": null,
                "start": 296,
                "end": 306
              },
              "start": 294,
              "end": 306
            },
            "start": 284,
            "end": 306
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 315
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 317,
                  "end": 324
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 311,
                "end": 324
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 332
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 336,
                        "end": 343
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 345,
                        "end": 353
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 336,
                      "end": 353
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 355,
                        "end": 364
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 366,
                        "end": 372
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 355,
                      "end": 372
                    }
                  ],
                  "start": 334,
                  "end": 374
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 326,
                "end": 374
              }
            ],
            "start": 309,
            "end": 376
          },
          "definite": false,
          "start": 284,
          "end": 376
        }
      ],
      "declare": false,
      "start": 280,
      "end": 377
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 387,
        "end": 395
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
              "type": "Identifier",
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null,
              "start": 411,
              "end": 416
            },
            "start": 404,
            "end": 417
          }
        ],
        "start": 398,
        "end": 419
      },
      "expression": false,
      "start": 378,
      "end": 419
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 429,
        "end": 442
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
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 458,
              "end": 468
            },
            "start": 451,
            "end": 469
          }
        ],
        "start": 445,
        "end": 471
      },
      "expression": false,
      "start": 420,
      "end": 471
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 483,
                    "end": 487
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 489,
                    "end": 494
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 483,
                  "end": 494
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 482,
              "end": 496
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null,
              "start": 499,
              "end": 504
            },
            "definite": false,
            "start": 482,
            "end": 504
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 506,
              "end": 507
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 510,
              "end": 511
            },
            "definite": false,
            "start": 506,
            "end": 511
          }
        ],
        "declare": false,
        "start": 478,
        "end": 511
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 513,
          "end": 514
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 517,
          "end": 518
        },
        "start": 513,
        "end": 518
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
          "start": 520,
          "end": 521
        },
        "start": 520,
        "end": 523
      },
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
                  "start": 531,
                  "end": 538
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 539,
                  "end": 542
                },
                "optional": false,
                "computed": false,
                "start": 531,
                "end": 542
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 543,
                  "end": 548
                }
              ],
              "optional": false,
              "start": 531,
              "end": 549
            },
            "directive": null,
            "start": 531,
            "end": 550
          }
        ],
        "start": 525,
        "end": 552
      },
      "start": 473,
      "end": 552
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 563,
                    "end": 567
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 569,
                    "end": 574
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 563,
                  "end": 574
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 562,
              "end": 576
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 579,
                "end": 587
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 579,
              "end": 589
            },
            "definite": false,
            "start": 562,
            "end": 589
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 591,
              "end": 592
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 595,
              "end": 596
            },
            "definite": false,
            "start": 591,
            "end": 596
          }
        ],
        "declare": false,
        "start": 558,
        "end": 596
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 598,
          "end": 599
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 602,
          "end": 603
        },
        "start": 598,
        "end": 603
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
          "start": 605,
          "end": 606
        },
        "start": 605,
        "end": 608
      },
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
                  "start": 616,
                  "end": 623
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 624,
                  "end": 627
                },
                "optional": false,
                "computed": false,
                "start": 616,
                "end": 627
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 628,
                  "end": 633
                }
              ],
              "optional": false,
              "start": 616,
              "end": 634
            },
            "directive": null,
            "start": 616,
            "end": 635
          }
        ],
        "start": 610,
        "end": 637
      },
      "start": 553,
      "end": 637
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 648,
                    "end": 652
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 654,
                    "end": 659
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 648,
                  "end": 659
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 647,
              "end": 661
            },
            "init": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 665,
                  "end": 670
                },
                "typeArguments": null,
                "start": 665,
                "end": 670
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 673,
                      "end": 677
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 679,
                      "end": 688
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 673,
                    "end": 688
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 690,
                      "end": 695
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 697,
                      "end": 707
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 690,
                    "end": 707
                  }
                ],
                "start": 671,
                "end": 709
              },
              "start": 664,
              "end": 709
            },
            "definite": false,
            "start": 647,
            "end": 709
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 711,
              "end": 712
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 715,
              "end": 716
            },
            "definite": false,
            "start": 711,
            "end": 716
          }
        ],
        "declare": false,
        "start": 643,
        "end": 716
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 718,
          "end": 719
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 722,
          "end": 723
        },
        "start": 718,
        "end": 723
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
          "start": 725,
          "end": 726
        },
        "start": 725,
        "end": 728
      },
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
                  "start": 736,
                  "end": 743
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 744,
                  "end": 747
                },
                "optional": false,
                "computed": false,
                "start": 736,
                "end": 747
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 748,
                  "end": 753
                }
              ],
              "optional": false,
              "start": 736,
              "end": 754
            },
            "directive": null,
            "start": 736,
            "end": 755
          }
        ],
        "start": 730,
        "end": 757
      },
      "start": 638,
      "end": 757
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 769,
                    "end": 775
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 779,
                          "end": 786
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 788,
                          "end": 796
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 779,
                        "end": 796
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 798,
                          "end": 807
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 809,
                          "end": 819
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 798,
                        "end": 819
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 777,
                    "end": 821
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 769,
                  "end": 821
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 767,
              "end": 823
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 826,
              "end": 836
            },
            "definite": false,
            "start": 767,
            "end": 836
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 838,
              "end": 839
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 842,
              "end": 843
            },
            "definite": false,
            "start": 838,
            "end": 843
          }
        ],
        "declare": false,
        "start": 763,
        "end": 843
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 845,
          "end": 846
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 849,
          "end": 850
        },
        "start": 845,
        "end": 850
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
          "start": 852,
          "end": 853
        },
        "start": 852,
        "end": 855
      },
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
                  "start": 863,
                  "end": 870
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 871,
                  "end": 874
                },
                "optional": false,
                "computed": false,
                "start": 863,
                "end": 874
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 875,
                  "end": 883
                }
              ],
              "optional": false,
              "start": 863,
              "end": 884
            },
            "directive": null,
            "start": 863,
            "end": 885
          }
        ],
        "start": 857,
        "end": 887
      },
      "start": 758,
      "end": 887
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 899,
                    "end": 905
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 909,
                          "end": 916
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 918,
                          "end": 926
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 909,
                        "end": 926
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 928,
                          "end": 937
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 939,
                          "end": 949
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 928,
                        "end": 949
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 907,
                    "end": 951
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 899,
                  "end": 951
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 897,
              "end": 953
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 956,
                "end": 969
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 956,
              "end": 971
            },
            "definite": false,
            "start": 897,
            "end": 971
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 973,
              "end": 974
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 977,
              "end": 978
            },
            "definite": false,
            "start": 973,
            "end": 978
          }
        ],
        "declare": false,
        "start": 893,
        "end": 978
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 980,
          "end": 981
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 984,
          "end": 985
        },
        "start": 980,
        "end": 985
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
          "start": 987,
          "end": 988
        },
        "start": 987,
        "end": 990
      },
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
                  "start": 998,
                  "end": 1005
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1006,
                  "end": 1009
                },
                "optional": false,
                "computed": false,
                "start": 998,
                "end": 1009
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1010,
                  "end": 1018
                }
              ],
              "optional": false,
              "start": 998,
              "end": 1019
            },
            "directive": null,
            "start": 998,
            "end": 1020
          }
        ],
        "start": 992,
        "end": 1022
      },
      "start": 888,
      "end": 1022
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1034,
                    "end": 1040
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1044,
                          "end": 1051
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1053,
                          "end": 1061
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1044,
                        "end": 1061
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1063,
                          "end": 1072
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1074,
                          "end": 1084
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1063,
                        "end": 1084
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1042,
                    "end": 1086
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1034,
                  "end": 1086
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1032,
              "end": 1088
            },
            "init": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1096,
                  "end": 1106
                },
                "typeArguments": null,
                "start": 1096,
                "end": 1106
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1109,
                      "end": 1113
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 1115,
                      "end": 1124
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1109,
                    "end": 1124
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1126,
                      "end": 1132
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1136,
                            "end": 1143
                          },
                          "value": {
                            "type": "Literal",
                            "value": "trimming",
                            "raw": "\"trimming\"",
                            "start": 1145,
                            "end": 1155
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1136,
                          "end": 1155
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1157,
                            "end": 1166
                          },
                          "value": {
                            "type": "Literal",
                            "value": "edging",
                            "raw": "\"edging\"",
                            "start": 1168,
                            "end": 1176
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1157,
                          "end": 1176
                        }
                      ],
                      "start": 1134,
                      "end": 1178
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1126,
                    "end": 1178
                  }
                ],
                "start": 1107,
                "end": 1180
              },
              "start": 1095,
              "end": 1180
            },
            "definite": false,
            "start": 1032,
            "end": 1180
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1186,
              "end": 1187
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1190,
              "end": 1191
            },
            "definite": false,
            "start": 1186,
            "end": 1191
          }
        ],
        "declare": false,
        "start": 1028,
        "end": 1191
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1193,
          "end": 1194
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1197,
          "end": 1198
        },
        "start": 1193,
        "end": 1198
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
          "start": 1200,
          "end": 1201
        },
        "start": 1200,
        "end": 1203
      },
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
                  "start": 1211,
                  "end": 1218
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1219,
                  "end": 1222
                },
                "optional": false,
                "computed": false,
                "start": 1211,
                "end": 1222
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1223,
                  "end": 1231
                }
              ],
              "optional": false,
              "start": 1211,
              "end": 1232
            },
            "directive": null,
            "start": 1211,
            "end": 1233
          }
        ],
        "start": 1205,
        "end": 1235
      },
      "start": 1023,
      "end": 1235
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1247,
                    "end": 1251
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1253,
                    "end": 1258
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1247,
                  "end": 1258
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1260,
                    "end": 1265
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1267,
                    "end": 1273
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1260,
                  "end": 1273
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1246,
              "end": 1275
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null,
              "start": 1278,
              "end": 1283
            },
            "definite": false,
            "start": 1246,
            "end": 1283
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1285,
              "end": 1286
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1289,
              "end": 1290
            },
            "definite": false,
            "start": 1285,
            "end": 1290
          }
        ],
        "declare": false,
        "start": 1242,
        "end": 1290
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1292,
          "end": 1293
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1296,
          "end": 1297
        },
        "start": 1292,
        "end": 1297
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
          "start": 1299,
          "end": 1300
        },
        "start": 1299,
        "end": 1302
      },
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
                  "start": 1310,
                  "end": 1317
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1318,
                  "end": 1321
                },
                "optional": false,
                "computed": false,
                "start": 1310,
                "end": 1321
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1322,
                  "end": 1327
                }
              ],
              "optional": false,
              "start": 1310,
              "end": 1328
            },
            "directive": null,
            "start": 1310,
            "end": 1329
          }
        ],
        "start": 1304,
        "end": 1331
      },
      "start": 1237,
      "end": 1331
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1342,
                    "end": 1346
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1348,
                    "end": 1353
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1342,
                  "end": 1353
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1355,
                    "end": 1360
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1362,
                    "end": 1368
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1355,
                  "end": 1368
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1341,
              "end": 1370
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1373,
                "end": 1381
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1373,
              "end": 1383
            },
            "definite": false,
            "start": 1341,
            "end": 1383
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1385,
              "end": 1386
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1389,
              "end": 1390
            },
            "definite": false,
            "start": 1385,
            "end": 1390
          }
        ],
        "declare": false,
        "start": 1337,
        "end": 1390
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1392,
          "end": 1393
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1396,
          "end": 1397
        },
        "start": 1392,
        "end": 1397
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
          "start": 1399,
          "end": 1400
        },
        "start": 1399,
        "end": 1402
      },
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
                  "start": 1410,
                  "end": 1417
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1418,
                  "end": 1421
                },
                "optional": false,
                "computed": false,
                "start": 1410,
                "end": 1421
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1422,
                  "end": 1427
                }
              ],
              "optional": false,
              "start": 1410,
              "end": 1428
            },
            "directive": null,
            "start": 1410,
            "end": 1429
          }
        ],
        "start": 1404,
        "end": 1431
      },
      "start": 1332,
      "end": 1431
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1442,
                    "end": 1446
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1448,
                    "end": 1453
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1442,
                  "end": 1453
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1455,
                    "end": 1460
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1462,
                    "end": 1468
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1455,
                  "end": 1468
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1441,
              "end": 1470
            },
            "init": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1474,
                  "end": 1479
                },
                "typeArguments": null,
                "start": 1474,
                "end": 1479
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1482,
                      "end": 1486
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 1488,
                      "end": 1497
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1482,
                    "end": 1497
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1499,
                      "end": 1504
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 1506,
                      "end": 1516
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1499,
                    "end": 1516
                  }
                ],
                "start": 1480,
                "end": 1518
              },
              "start": 1473,
              "end": 1518
            },
            "definite": false,
            "start": 1441,
            "end": 1518
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1520,
              "end": 1521
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1524,
              "end": 1525
            },
            "definite": false,
            "start": 1520,
            "end": 1525
          }
        ],
        "declare": false,
        "start": 1437,
        "end": 1525
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1527,
          "end": 1528
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1531,
          "end": 1532
        },
        "start": 1527,
        "end": 1532
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
          "start": 1534,
          "end": 1535
        },
        "start": 1534,
        "end": 1537
      },
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
                  "start": 1545,
                  "end": 1552
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1553,
                  "end": 1556
                },
                "optional": false,
                "computed": false,
                "start": 1545,
                "end": 1556
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1557,
                  "end": 1562
                }
              ],
              "optional": false,
              "start": 1545,
              "end": 1563
            },
            "directive": null,
            "start": 1545,
            "end": 1564
          }
        ],
        "start": 1539,
        "end": 1566
      },
      "start": 1432,
      "end": 1566
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1577,
                    "end": 1581
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1583,
                    "end": 1588
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1577,
                  "end": 1588
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1590,
                    "end": 1596
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1600,
                          "end": 1607
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1609,
                          "end": 1617
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1600,
                        "end": 1617
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1619,
                          "end": 1628
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1630,
                          "end": 1640
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1619,
                        "end": 1640
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1598,
                    "end": 1642
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1590,
                  "end": 1642
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1576,
              "end": 1644
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 1647,
              "end": 1657
            },
            "definite": false,
            "start": 1576,
            "end": 1657
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1659,
              "end": 1660
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1663,
              "end": 1664
            },
            "definite": false,
            "start": 1659,
            "end": 1664
          }
        ],
        "declare": false,
        "start": 1572,
        "end": 1664
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1666,
          "end": 1667
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1670,
          "end": 1671
        },
        "start": 1666,
        "end": 1671
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
          "start": 1673,
          "end": 1674
        },
        "start": 1673,
        "end": 1676
      },
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
                  "start": 1684,
                  "end": 1691
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1692,
                  "end": 1695
                },
                "optional": false,
                "computed": false,
                "start": 1684,
                "end": 1695
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1696,
                  "end": 1704
                }
              ],
              "optional": false,
              "start": 1684,
              "end": 1705
            },
            "directive": null,
            "start": 1684,
            "end": 1706
          }
        ],
        "start": 1678,
        "end": 1708
      },
      "start": 1567,
      "end": 1708
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1719,
                    "end": 1723
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1725,
                    "end": 1730
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1719,
                  "end": 1730
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1732,
                    "end": 1738
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1742,
                          "end": 1749
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1751,
                          "end": 1759
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1742,
                        "end": 1759
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1761,
                          "end": 1770
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1772,
                          "end": 1782
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1761,
                        "end": 1782
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1740,
                    "end": 1784
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1732,
                  "end": 1784
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1718,
              "end": 1786
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1789,
                "end": 1802
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1789,
              "end": 1804
            },
            "definite": false,
            "start": 1718,
            "end": 1804
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1806,
              "end": 1807
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1810,
              "end": 1811
            },
            "definite": false,
            "start": 1806,
            "end": 1811
          }
        ],
        "declare": false,
        "start": 1714,
        "end": 1811
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1813,
          "end": 1814
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1817,
          "end": 1818
        },
        "start": 1813,
        "end": 1818
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
          "start": 1820,
          "end": 1821
        },
        "start": 1820,
        "end": 1823
      },
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
                  "start": 1831,
                  "end": 1838
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1839,
                  "end": 1842
                },
                "optional": false,
                "computed": false,
                "start": 1831,
                "end": 1842
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1843,
                  "end": 1851
                }
              ],
              "optional": false,
              "start": 1831,
              "end": 1852
            },
            "directive": null,
            "start": 1831,
            "end": 1853
          }
        ],
        "start": 1825,
        "end": 1855
      },
      "start": 1709,
      "end": 1855
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1866,
                    "end": 1870
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1872,
                    "end": 1877
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1866,
                  "end": 1877
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1879,
                    "end": 1885
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1889,
                          "end": 1896
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1898,
                          "end": 1906
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1889,
                        "end": 1906
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1908,
                          "end": 1917
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1919,
                          "end": 1929
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1908,
                        "end": 1929
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1887,
                    "end": 1931
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1879,
                  "end": 1931
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1865,
              "end": 1933
            },
            "init": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1941,
                  "end": 1951
                },
                "typeArguments": null,
                "start": 1941,
                "end": 1951
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1954,
                      "end": 1958
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 1960,
                      "end": 1969
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1954,
                    "end": 1969
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1971,
                      "end": 1977
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1981,
                            "end": 1988
                          },
                          "value": {
                            "type": "Literal",
                            "value": "trimming",
                            "raw": "\"trimming\"",
                            "start": 1990,
                            "end": 2000
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1981,
                          "end": 2000
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2002,
                            "end": 2011
                          },
                          "value": {
                            "type": "Literal",
                            "value": "edging",
                            "raw": "\"edging\"",
                            "start": 2013,
                            "end": 2021
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2002,
                          "end": 2021
                        }
                      ],
                      "start": 1979,
                      "end": 2023
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1971,
                    "end": 2023
                  }
                ],
                "start": 1952,
                "end": 2025
              },
              "start": 1940,
              "end": 2025
            },
            "definite": false,
            "start": 1865,
            "end": 2025
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2031,
              "end": 2032
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2035,
              "end": 2036
            },
            "definite": false,
            "start": 2031,
            "end": 2036
          }
        ],
        "declare": false,
        "start": 1861,
        "end": 2036
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2038,
          "end": 2039
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2042,
          "end": 2043
        },
        "start": 2038,
        "end": 2043
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
          "start": 2045,
          "end": 2046
        },
        "start": 2045,
        "end": 2048
      },
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
                  "start": 2056,
                  "end": 2063
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2064,
                  "end": 2067
                },
                "optional": false,
                "computed": false,
                "start": 2056,
                "end": 2067
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2068,
                  "end": 2076
                }
              ],
              "optional": false,
              "start": 2056,
              "end": 2077
            },
            "directive": null,
            "start": 2056,
            "end": 2078
          }
        ],
        "start": 2050,
        "end": 2080
      },
      "start": 1856,
      "end": 2080
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2080
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
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 12,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 36,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 50,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 60,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 78,
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
    "value": "skill",
    "start": 90,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 97,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 108,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 118,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 135,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 171,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 180,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 196,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 225,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "robot",
    "start": 229,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 236,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 246,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 252,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 261,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 268,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 280,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "multiRobot",
    "start": 284,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 296,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 311,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 317,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 326,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 336,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 345,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 355,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 366,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 378,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 387,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 404,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "robot",
    "start": 411,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 420,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 429,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 451,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "multiRobot",
    "start": 458,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 473,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 478,
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
    "value": "name",
    "start": 483,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 489,
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
    "value": "=",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "robot",
    "start": 499,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 508,
    "end": 509
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 515,
    "end": 516
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 521,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 531,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 539,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 543,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 553,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 557,
    "end": 558
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 558,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 563,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 569,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 579,
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
    "value": ",",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 593,
    "end": 594
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "i",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 600,
    "end": 601
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "++",
    "start": 606,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 616,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 624,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 628,
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
    "value": ";",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 636,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 638,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 643,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 648,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 654,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 665,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 673,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 679,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 690,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 695,
    "end": 696
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 697,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 713,
    "end": 714
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 720,
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
    "value": ";",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 726,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 736,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 744,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 748,
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
    "value": ";",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 756,
    "end": 757
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 758,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 763,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 769,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 779,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 788,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 798,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 809,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "multiRobot",
    "start": 826,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 840,
    "end": 841
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 847,
    "end": 848
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 853,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 863,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 871,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 875,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 886,
    "end": 887
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 888,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 892,
    "end": 893
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 893,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 899,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 909,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 918,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 928,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 939,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 956,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 975,
    "end": 976
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 982,
    "end": 983
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 988,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 998,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1006,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1010,
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
    "value": ";",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1023,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1028,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1034,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1044,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1053,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1063,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1074,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 1096,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1109,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1115,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1126,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1136,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1145,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1157,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1168,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1201,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1211,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1219,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1223,
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
    "value": ";",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1237,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1242,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1247,
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
    "value": "nameA",
    "start": 1253,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1260,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 1267,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "robot",
    "start": 1278,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1296,
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
    "value": "i",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1300,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1310,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1318,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1322,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1332,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1337,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1342,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1348,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1355,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 1362,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 1373,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1400,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1410,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1418,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1422,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1432,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1437,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1442,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1448,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1455,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 1462,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 1474,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1482,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1488,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1499,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1506,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1535,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1545,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1553,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1557,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1567,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1572,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1577,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1583,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1590,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1600,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1609,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1619,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1630,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "multiRobot",
    "start": 1647,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1674,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1684,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1692,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1696,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1709,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1714,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1719,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1725,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1732,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1742,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1751,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1761,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1772,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 1789,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1821,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1831,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1839,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1843,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1856,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1861,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1866,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1872,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1879,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1889,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1898,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1908,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1919,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 1941,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1954,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1960,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1971,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1981,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1990,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2002,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 2013,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2046,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2056,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2064,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2068,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2079,
    "end": 2080
  }
]
```
