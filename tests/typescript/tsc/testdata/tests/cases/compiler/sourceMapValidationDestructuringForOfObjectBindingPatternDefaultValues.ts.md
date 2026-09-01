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
                    "optional": true,
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
                        "start": 181,
                        "end": 187
                      },
                      "start": 179,
                      "end": 187
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 171,
                    "end": 188
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 206
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 209,
                        "end": 215
                      },
                      "start": 207,
                      "end": 215
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 197,
                    "end": 216
                  }
                ],
                "start": 161,
                "end": 222
              },
              "start": 159,
              "end": 222
            },
            "accessibility": null,
            "static": false,
            "start": 153,
            "end": 223
          }
        ],
        "start": 129,
        "end": 225
      },
      "declare": false,
      "start": 108,
      "end": 225
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
            "name": "robots",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Robot",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 239,
                    "end": 244
                  },
                  "typeArguments": null,
                  "start": 239,
                  "end": 244
                },
                "start": 239,
                "end": 246
              },
              "start": 237,
              "end": 246
            },
            "start": 231,
            "end": 246
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
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
                      "start": 252,
                      "end": 256
                    },
                    "value": {
                      "type": "Literal",
                      "value": "mower",
                      "raw": "\"mower\"",
                      "start": 258,
                      "end": 265
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 252,
                    "end": 265
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
                      "start": 267,
                      "end": 272
                    },
                    "value": {
                      "type": "Literal",
                      "value": "mowing",
                      "raw": "\"mowing\"",
                      "start": 274,
                      "end": 282
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 267,
                    "end": 282
                  }
                ],
                "start": 250,
                "end": 284
              },
              {
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
                      "start": 288,
                      "end": 292
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 294,
                      "end": 303
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 288,
                    "end": 303
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
                      "start": 305,
                      "end": 310
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 312,
                      "end": 322
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 305,
                    "end": 322
                  }
                ],
                "start": 286,
                "end": 324
              }
            ],
            "start": 249,
            "end": 325
          },
          "definite": false,
          "start": 231,
          "end": 325
        }
      ],
      "declare": false,
      "start": 227,
      "end": 326
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
            "name": "multiRobots",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MultiRobot",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 344,
                    "end": 354
                  },
                  "typeArguments": null,
                  "start": 344,
                  "end": 354
                },
                "start": 344,
                "end": 356
              },
              "start": 342,
              "end": 356
            },
            "start": 331,
            "end": 356
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
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
                      "start": 362,
                      "end": 366
                    },
                    "value": {
                      "type": "Literal",
                      "value": "mower",
                      "raw": "\"mower\"",
                      "start": 368,
                      "end": 375
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 362,
                    "end": 375
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
                      "start": 377,
                      "end": 383
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
                            "start": 387,
                            "end": 394
                          },
                          "value": {
                            "type": "Literal",
                            "value": "mowing",
                            "raw": "\"mowing\"",
                            "start": 396,
                            "end": 404
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 387,
                          "end": 404
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
                            "start": 406,
                            "end": 415
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 417,
                            "end": 423
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 406,
                          "end": 423
                        }
                      ],
                      "start": 385,
                      "end": 425
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 377,
                    "end": 425
                  }
                ],
                "start": 360,
                "end": 427
              },
              {
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
                      "start": 435,
                      "end": 439
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 441,
                      "end": 450
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 435,
                    "end": 450
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
                      "start": 452,
                      "end": 458
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
                            "start": 462,
                            "end": 469
                          },
                          "value": {
                            "type": "Literal",
                            "value": "trimming",
                            "raw": "\"trimming\"",
                            "start": 471,
                            "end": 481
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 462,
                          "end": 481
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
                            "start": 483,
                            "end": 492
                          },
                          "value": {
                            "type": "Literal",
                            "value": "edging",
                            "raw": "\"edging\"",
                            "start": 494,
                            "end": 502
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 483,
                          "end": 502
                        }
                      ],
                      "start": 460,
                      "end": 504
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 452,
                    "end": 504
                  }
                ],
                "start": 433,
                "end": 506
              }
            ],
            "start": 359,
            "end": 507
          },
          "definite": false,
          "start": 331,
          "end": 507
        }
      ],
      "declare": false,
      "start": 327,
      "end": 508
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 519,
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "robots",
              "optional": false,
              "typeAnnotation": null,
              "start": 544,
              "end": 550
            },
            "start": 537,
            "end": 551
          }
        ],
        "start": 531,
        "end": 553
      },
      "expression": false,
      "start": 510,
      "end": 553
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 564,
        "end": 578
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
              "name": "multiRobots",
              "optional": false,
              "typeAnnotation": null,
              "start": 594,
              "end": 605
            },
            "start": 587,
            "end": 606
          }
        ],
        "start": 581,
        "end": 608
      },
      "expression": false,
      "start": 555,
      "end": 608
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 620,
                    "end": 624
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 626,
                      "end": 631
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 634,
                      "end": 642
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 626,
                    "end": 642
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 620,
                  "end": 642
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 619,
              "end": 644
            },
            "init": null,
            "definite": false,
            "start": 619,
            "end": 644
          }
        ],
        "declare": false,
        "start": 615,
        "end": 644
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 648,
        "end": 654
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
                  "start": 662,
                  "end": 669
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 670,
                  "end": 673
                },
                "optional": false,
                "computed": false,
                "start": 662,
                "end": 673
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 674,
                  "end": 679
                }
              ],
              "optional": false,
              "start": 662,
              "end": 680
            },
            "directive": null,
            "start": 662,
            "end": 681
          }
        ],
        "start": 656,
        "end": 683
      },
      "start": 610,
      "end": 683
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 694,
                    "end": 698
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 700,
                      "end": 705
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 708,
                      "end": 716
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 700,
                    "end": 716
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 694,
                  "end": 716
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 693,
              "end": 718
            },
            "init": null,
            "definite": false,
            "start": 693,
            "end": 718
          }
        ],
        "declare": false,
        "start": 689,
        "end": 718
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 722,
          "end": 731
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 722,
        "end": 733
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
                  "start": 741,
                  "end": 748
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 749,
                  "end": 752
                },
                "optional": false,
                "computed": false,
                "start": 741,
                "end": 752
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 753,
                  "end": 758
                }
              ],
              "optional": false,
              "start": 741,
              "end": 759
            },
            "directive": null,
            "start": 741,
            "end": 760
          }
        ],
        "start": 735,
        "end": 762
      },
      "start": 684,
      "end": 762
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 773,
                    "end": 777
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 779,
                      "end": 784
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 787,
                      "end": 795
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 779,
                    "end": 795
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 773,
                  "end": 795
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 797
            },
            "init": null,
            "definite": false,
            "start": 772,
            "end": 797
          }
        ],
        "declare": false,
        "start": 768,
        "end": 797
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
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
                  "start": 804,
                  "end": 808
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 810,
                  "end": 817
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 804,
                "end": 817
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
                  "start": 819,
                  "end": 824
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 826,
                  "end": 834
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 819,
                "end": 834
              }
            ],
            "start": 802,
            "end": 836
          },
          {
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
                  "start": 840,
                  "end": 844
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 846,
                  "end": 855
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 840,
                "end": 855
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
                  "start": 857,
                  "end": 862
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 864,
                  "end": 874
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 857,
                "end": 874
              }
            ],
            "start": 838,
            "end": 876
          }
        ],
        "start": 801,
        "end": 877
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
                  "start": 885,
                  "end": 892
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 893,
                  "end": 896
                },
                "optional": false,
                "computed": false,
                "start": 885,
                "end": 896
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 897,
                  "end": 902
                }
              ],
              "optional": false,
              "start": 885,
              "end": 903
            },
            "directive": null,
            "start": 885,
            "end": 904
          }
        ],
        "start": 879,
        "end": 906
      },
      "start": 763,
      "end": 906
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 918,
                    "end": 924
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
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
                            "start": 928,
                            "end": 935
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 937,
                              "end": 945
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 948,
                              "end": 957
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 937,
                            "end": 957
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 928,
                          "end": 957
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
                            "start": 959,
                            "end": 968
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 970,
                              "end": 980
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 983,
                              "end": 994
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 970,
                            "end": 994
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 959,
                          "end": 994
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 926,
                      "end": 996
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
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1005,
                            "end": 1012
                          },
                          "value": {
                            "type": "Literal",
                            "value": "nosKill",
                            "raw": "\"nosKill\"",
                            "start": 1014,
                            "end": 1023
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1005,
                          "end": 1023
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
                            "start": 1025,
                            "end": 1034
                          },
                          "value": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 1036,
                            "end": 1045
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1025,
                          "end": 1045
                        }
                      ],
                      "start": 1003,
                      "end": 1047
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 926,
                    "end": 1047
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 918,
                  "end": 1047
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 916,
              "end": 1049
            },
            "init": null,
            "definite": false,
            "start": 916,
            "end": 1049
          }
        ],
        "declare": false,
        "start": 912,
        "end": 1049
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1053,
        "end": 1064
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
                  "start": 1072,
                  "end": 1079
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1080,
                  "end": 1083
                },
                "optional": false,
                "computed": false,
                "start": 1072,
                "end": 1083
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1084,
                  "end": 1092
                }
              ],
              "optional": false,
              "start": 1072,
              "end": 1093
            },
            "directive": null,
            "start": 1072,
            "end": 1094
          }
        ],
        "start": 1066,
        "end": 1096
      },
      "start": 907,
      "end": 1096
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 1108,
                    "end": 1114
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
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
                            "start": 1118,
                            "end": 1125
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1127,
                              "end": 1135
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 1138,
                              "end": 1147
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1127,
                            "end": 1147
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1118,
                          "end": 1147
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
                            "start": 1149,
                            "end": 1158
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1160,
                              "end": 1170
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 1173,
                              "end": 1184
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1160,
                            "end": 1184
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1149,
                          "end": 1184
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1116,
                      "end": 1186
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
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1195,
                            "end": 1202
                          },
                          "value": {
                            "type": "Literal",
                            "value": "nosKill",
                            "raw": "\"nosKill\"",
                            "start": 1204,
                            "end": 1213
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1195,
                          "end": 1213
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
                            "start": 1215,
                            "end": 1224
                          },
                          "value": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 1226,
                            "end": 1235
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1215,
                          "end": 1235
                        }
                      ],
                      "start": 1193,
                      "end": 1237
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1116,
                    "end": 1237
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1108,
                  "end": 1237
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1106,
              "end": 1239
            },
            "init": null,
            "definite": false,
            "start": 1106,
            "end": 1239
          }
        ],
        "declare": false,
        "start": 1102,
        "end": 1239
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1243,
          "end": 1257
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1243,
        "end": 1259
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
                  "start": 1267,
                  "end": 1274
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1275,
                  "end": 1278
                },
                "optional": false,
                "computed": false,
                "start": 1267,
                "end": 1278
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1279,
                  "end": 1287
                }
              ],
              "optional": false,
              "start": 1267,
              "end": 1288
            },
            "directive": null,
            "start": 1267,
            "end": 1289
          }
        ],
        "start": 1261,
        "end": 1291
      },
      "start": 1097,
      "end": 1291
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 1303,
                    "end": 1309
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
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
                            "start": 1313,
                            "end": 1320
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1322,
                              "end": 1330
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 1333,
                              "end": 1342
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1322,
                            "end": 1342
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1313,
                          "end": 1342
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
                            "start": 1344,
                            "end": 1353
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1355,
                              "end": 1365
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 1368,
                              "end": 1379
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1355,
                            "end": 1379
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1344,
                          "end": 1379
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1311,
                      "end": 1381
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
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1390,
                            "end": 1397
                          },
                          "value": {
                            "type": "Literal",
                            "value": "nosKill",
                            "raw": "\"nosKill\"",
                            "start": 1399,
                            "end": 1408
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1390,
                          "end": 1408
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
                            "start": 1410,
                            "end": 1419
                          },
                          "value": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 1421,
                            "end": 1430
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1410,
                          "end": 1430
                        }
                      ],
                      "start": 1388,
                      "end": 1432
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1311,
                    "end": 1432
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1303,
                  "end": 1432
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1301,
              "end": 1434
            },
            "init": null,
            "definite": false,
            "start": 1301,
            "end": 1434
          }
        ],
        "declare": false,
        "start": 1297,
        "end": 1434
      },
      "right": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MultiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 1443,
              "end": 1453
            },
            "typeArguments": null,
            "start": 1443,
            "end": 1453
          },
          "start": 1443,
          "end": 1455
        },
        "expression": {
          "type": "ArrayExpression",
          "elements": [
            {
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
                    "start": 1459,
                    "end": 1463
                  },
                  "value": {
                    "type": "Literal",
                    "value": "mower",
                    "raw": "\"mower\"",
                    "start": 1465,
                    "end": 1472
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1459,
                  "end": 1472
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
                    "start": 1474,
                    "end": 1480
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
                          "start": 1484,
                          "end": 1491
                        },
                        "value": {
                          "type": "Literal",
                          "value": "mowing",
                          "raw": "\"mowing\"",
                          "start": 1493,
                          "end": 1501
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1484,
                        "end": 1501
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
                          "start": 1503,
                          "end": 1512
                        },
                        "value": {
                          "type": "Literal",
                          "value": "none",
                          "raw": "\"none\"",
                          "start": 1514,
                          "end": 1520
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1503,
                        "end": 1520
                      }
                    ],
                    "start": 1482,
                    "end": 1522
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1474,
                  "end": 1522
                }
              ],
              "start": 1457,
              "end": 1524
            },
            {
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
                    "start": 1532,
                    "end": 1536
                  },
                  "value": {
                    "type": "Literal",
                    "value": "trimmer",
                    "raw": "\"trimmer\"",
                    "start": 1538,
                    "end": 1547
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1532,
                  "end": 1547
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
                    "start": 1549,
                    "end": 1555
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
                          "start": 1559,
                          "end": 1566
                        },
                        "value": {
                          "type": "Literal",
                          "value": "trimming",
                          "raw": "\"trimming\"",
                          "start": 1568,
                          "end": 1578
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1559,
                        "end": 1578
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
                          "start": 1580,
                          "end": 1589
                        },
                        "value": {
                          "type": "Literal",
                          "value": "edging",
                          "raw": "\"edging\"",
                          "start": 1591,
                          "end": 1599
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1580,
                        "end": 1599
                      }
                    ],
                    "start": 1557,
                    "end": 1601
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1549,
                  "end": 1601
                }
              ],
              "start": 1530,
              "end": 1603
            }
          ],
          "start": 1456,
          "end": 1604
        },
        "start": 1442,
        "end": 1604
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
                  "start": 1612,
                  "end": 1619
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1620,
                  "end": 1623
                },
                "optional": false,
                "computed": false,
                "start": 1612,
                "end": 1623
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1624,
                  "end": 1632
                }
              ],
              "optional": false,
              "start": 1612,
              "end": 1633
            },
            "directive": null,
            "start": 1612,
            "end": 1634
          }
        ],
        "start": 1606,
        "end": 1636
      },
      "start": 1292,
      "end": 1636
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 1648,
                    "end": 1652
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1654,
                      "end": 1659
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 1662,
                      "end": 1670
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1654,
                    "end": 1670
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1648,
                  "end": 1670
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
                    "start": 1672,
                    "end": 1677
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1679,
                      "end": 1685
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1688,
                      "end": 1697
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1679,
                    "end": 1697
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1672,
                  "end": 1697
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1647,
              "end": 1699
            },
            "init": null,
            "definite": false,
            "start": 1647,
            "end": 1699
          }
        ],
        "declare": false,
        "start": 1643,
        "end": 1699
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1703,
        "end": 1709
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
                  "start": 1717,
                  "end": 1724
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1725,
                  "end": 1728
                },
                "optional": false,
                "computed": false,
                "start": 1717,
                "end": 1728
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1729,
                  "end": 1734
                }
              ],
              "optional": false,
              "start": 1717,
              "end": 1735
            },
            "directive": null,
            "start": 1717,
            "end": 1736
          }
        ],
        "start": 1711,
        "end": 1738
      },
      "start": 1638,
      "end": 1738
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 1749,
                    "end": 1753
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1755,
                      "end": 1760
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 1763,
                      "end": 1771
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1755,
                    "end": 1771
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1749,
                  "end": 1771
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
                    "start": 1773,
                    "end": 1778
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1780,
                      "end": 1786
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1789,
                      "end": 1798
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1780,
                    "end": 1798
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1773,
                  "end": 1798
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1748,
              "end": 1801
            },
            "init": null,
            "definite": false,
            "start": 1748,
            "end": 1801
          }
        ],
        "declare": false,
        "start": 1744,
        "end": 1801
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1805,
          "end": 1814
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1805,
        "end": 1816
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
                  "start": 1824,
                  "end": 1831
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1832,
                  "end": 1835
                },
                "optional": false,
                "computed": false,
                "start": 1824,
                "end": 1835
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1836,
                  "end": 1841
                }
              ],
              "optional": false,
              "start": 1824,
              "end": 1842
            },
            "directive": null,
            "start": 1824,
            "end": 1843
          }
        ],
        "start": 1818,
        "end": 1845
      },
      "start": 1739,
      "end": 1845
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 1856,
                    "end": 1860
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1862,
                      "end": 1867
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 1870,
                      "end": 1878
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1862,
                    "end": 1878
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1856,
                  "end": 1878
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
                    "start": 1880,
                    "end": 1885
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1887,
                      "end": 1893
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1896,
                      "end": 1905
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1887,
                    "end": 1905
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1880,
                  "end": 1905
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1855,
              "end": 1908
            },
            "init": null,
            "definite": false,
            "start": 1855,
            "end": 1908
          }
        ],
        "declare": false,
        "start": 1851,
        "end": 1908
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
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
                  "start": 1915,
                  "end": 1919
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 1921,
                  "end": 1928
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1915,
                "end": 1928
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
                  "start": 1930,
                  "end": 1935
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 1937,
                  "end": 1945
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1930,
                "end": 1945
              }
            ],
            "start": 1913,
            "end": 1947
          },
          {
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
                  "start": 1951,
                  "end": 1955
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1957,
                  "end": 1966
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1951,
                "end": 1966
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
                  "start": 1968,
                  "end": 1973
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1975,
                  "end": 1985
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1968,
                "end": 1985
              }
            ],
            "start": 1949,
            "end": 1987
          }
        ],
        "start": 1912,
        "end": 1988
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
                  "start": 1996,
                  "end": 2003
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2004,
                  "end": 2007
                },
                "optional": false,
                "computed": false,
                "start": 1996,
                "end": 2007
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2008,
                  "end": 2013
                }
              ],
              "optional": false,
              "start": 1996,
              "end": 2014
            },
            "directive": null,
            "start": 1996,
            "end": 2015
          }
        ],
        "start": 1990,
        "end": 2017
      },
      "start": 1846,
      "end": 2017
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 2033,
                    "end": 2037
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2039,
                      "end": 2044
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 2047,
                      "end": 2055
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2039,
                    "end": 2055
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2033,
                  "end": 2055
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
                    "start": 2061,
                    "end": 2067
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
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
                            "start": 2079,
                            "end": 2086
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2088,
                              "end": 2096
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 2099,
                              "end": 2108
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2088,
                            "end": 2108
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2079,
                          "end": 2108
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
                            "start": 2118,
                            "end": 2127
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2129,
                              "end": 2139
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 2142,
                              "end": 2153
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2129,
                            "end": 2153
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2118,
                          "end": 2153
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2069,
                      "end": 2159
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
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2164,
                            "end": 2171
                          },
                          "value": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 2173,
                            "end": 2182
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2164,
                          "end": 2182
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
                            "start": 2184,
                            "end": 2193
                          },
                          "value": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 2195,
                            "end": 2204
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2184,
                          "end": 2204
                        }
                      ],
                      "start": 2162,
                      "end": 2206
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2069,
                    "end": 2206
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2061,
                  "end": 2206
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2027,
              "end": 2208
            },
            "init": null,
            "definite": false,
            "start": 2027,
            "end": 2208
          }
        ],
        "declare": false,
        "start": 2023,
        "end": 2208
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2212,
        "end": 2223
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
                  "start": 2231,
                  "end": 2238
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2239,
                  "end": 2242
                },
                "optional": false,
                "computed": false,
                "start": 2231,
                "end": 2242
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2243,
                  "end": 2248
                }
              ],
              "optional": false,
              "start": 2231,
              "end": 2249
            },
            "directive": null,
            "start": 2231,
            "end": 2250
          }
        ],
        "start": 2225,
        "end": 2252
      },
      "start": 2018,
      "end": 2252
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 2268,
                    "end": 2272
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2274,
                      "end": 2279
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 2282,
                      "end": 2290
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2274,
                    "end": 2290
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2268,
                  "end": 2290
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
                    "start": 2296,
                    "end": 2302
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
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
                            "start": 2314,
                            "end": 2321
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2323,
                              "end": 2331
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 2334,
                              "end": 2343
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2323,
                            "end": 2343
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2314,
                          "end": 2343
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
                            "start": 2353,
                            "end": 2362
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2364,
                              "end": 2374
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 2377,
                              "end": 2388
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2364,
                            "end": 2388
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2353,
                          "end": 2388
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2304,
                      "end": 2394
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
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2399,
                            "end": 2406
                          },
                          "value": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 2408,
                            "end": 2417
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2399,
                          "end": 2417
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
                            "start": 2419,
                            "end": 2428
                          },
                          "value": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 2430,
                            "end": 2439
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2419,
                          "end": 2439
                        }
                      ],
                      "start": 2397,
                      "end": 2441
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2304,
                    "end": 2441
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2296,
                  "end": 2441
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2262,
              "end": 2443
            },
            "init": null,
            "definite": false,
            "start": 2262,
            "end": 2443
          }
        ],
        "declare": false,
        "start": 2258,
        "end": 2443
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2447,
          "end": 2461
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2447,
        "end": 2463
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
                  "start": 2471,
                  "end": 2478
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2479,
                  "end": 2482
                },
                "optional": false,
                "computed": false,
                "start": 2471,
                "end": 2482
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2483,
                  "end": 2488
                }
              ],
              "optional": false,
              "start": 2471,
              "end": 2489
            },
            "directive": null,
            "start": 2471,
            "end": 2490
          }
        ],
        "start": 2465,
        "end": 2492
      },
      "start": 2253,
      "end": 2492
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 2508,
                    "end": 2512
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2514,
                      "end": 2519
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 2522,
                      "end": 2530
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2514,
                    "end": 2530
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2508,
                  "end": 2530
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
                    "start": 2536,
                    "end": 2542
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
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
                            "start": 2554,
                            "end": 2561
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2563,
                              "end": 2571
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 2574,
                              "end": 2583
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2563,
                            "end": 2583
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2554,
                          "end": 2583
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
                            "start": 2593,
                            "end": 2602
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2604,
                              "end": 2614
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 2617,
                              "end": 2628
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2604,
                            "end": 2628
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2593,
                          "end": 2628
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2544,
                      "end": 2634
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
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2639,
                            "end": 2646
                          },
                          "value": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 2648,
                            "end": 2657
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2639,
                          "end": 2657
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
                            "start": 2659,
                            "end": 2668
                          },
                          "value": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 2670,
                            "end": 2679
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2659,
                          "end": 2679
                        }
                      ],
                      "start": 2637,
                      "end": 2681
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2544,
                    "end": 2681
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2536,
                  "end": 2681
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2502,
              "end": 2683
            },
            "init": null,
            "definite": false,
            "start": 2502,
            "end": 2683
          }
        ],
        "declare": false,
        "start": 2498,
        "end": 2683
      },
      "right": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MultiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 2688,
              "end": 2698
            },
            "typeArguments": null,
            "start": 2688,
            "end": 2698
          },
          "start": 2688,
          "end": 2700
        },
        "expression": {
          "type": "ArrayExpression",
          "elements": [
            {
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
                    "start": 2704,
                    "end": 2708
                  },
                  "value": {
                    "type": "Literal",
                    "value": "mower",
                    "raw": "\"mower\"",
                    "start": 2710,
                    "end": 2717
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2704,
                  "end": 2717
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
                    "start": 2719,
                    "end": 2725
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
                          "start": 2729,
                          "end": 2736
                        },
                        "value": {
                          "type": "Literal",
                          "value": "mowing",
                          "raw": "\"mowing\"",
                          "start": 2738,
                          "end": 2746
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2729,
                        "end": 2746
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
                          "start": 2748,
                          "end": 2757
                        },
                        "value": {
                          "type": "Literal",
                          "value": "none",
                          "raw": "\"none\"",
                          "start": 2759,
                          "end": 2765
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2748,
                        "end": 2765
                      }
                    ],
                    "start": 2727,
                    "end": 2767
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2719,
                  "end": 2767
                }
              ],
              "start": 2702,
              "end": 2769
            },
            {
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
                    "start": 2777,
                    "end": 2781
                  },
                  "value": {
                    "type": "Literal",
                    "value": "trimmer",
                    "raw": "\"trimmer\"",
                    "start": 2783,
                    "end": 2792
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2777,
                  "end": 2792
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
                    "start": 2794,
                    "end": 2800
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
                          "start": 2804,
                          "end": 2811
                        },
                        "value": {
                          "type": "Literal",
                          "value": "trimming",
                          "raw": "\"trimming\"",
                          "start": 2813,
                          "end": 2823
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2804,
                        "end": 2823
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
                          "start": 2825,
                          "end": 2834
                        },
                        "value": {
                          "type": "Literal",
                          "value": "edging",
                          "raw": "\"edging\"",
                          "start": 2836,
                          "end": 2844
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2825,
                        "end": 2844
                      }
                    ],
                    "start": 2802,
                    "end": 2846
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2794,
                  "end": 2846
                }
              ],
              "start": 2775,
              "end": 2848
            }
          ],
          "start": 2701,
          "end": 2849
        },
        "start": 2687,
        "end": 2849
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
                  "start": 2857,
                  "end": 2864
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2865,
                  "end": 2868
                },
                "optional": false,
                "computed": false,
                "start": 2857,
                "end": 2868
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2869,
                  "end": 2874
                }
              ],
              "optional": false,
              "start": 2857,
              "end": 2875
            },
            "directive": null,
            "start": 2857,
            "end": 2876
          }
        ],
        "start": 2851,
        "end": 2878
      },
      "start": 2493,
      "end": 2878
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2878
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
    "value": "?",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 197,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 209,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 227,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 231,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 239,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 252,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 258,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 267,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 274,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 288,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 294,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 305,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 312,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "let",
    "start": 327,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 331,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 344,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 362,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 368,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 377,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 387,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 396,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 406,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 417,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 435,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 441,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 452,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 462,
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
    "value": "\"trimming\"",
    "start": 471,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 483,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 494,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 506,
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
    "start": 510,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 519,
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
    "type": "Keyword",
    "value": "return",
    "start": 537,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 544,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 555,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 564,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 581,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 587,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 594,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 610,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 615,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 620,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 626,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 632,
    "end": 633
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 634,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 645,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 648,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 654,
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
    "value": "console",
    "start": 662,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 670,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 674,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 684,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 688,
    "end": 689
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 689,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 694,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 700,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 706,
    "end": 707
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 708,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 719,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 722,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 741,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 749,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 753,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 761,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 763,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 768,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 773,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 779,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 785,
    "end": 786
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 787,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 798,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 804,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 808,
    "end": 809
  },
  {
    "type": "String",
    "value": "\"mower\"",
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
    "type": "Identifier",
    "value": "skill",
    "start": 819,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 824,
    "end": 825
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 826,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 840,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 846,
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
    "value": "skill",
    "start": 857,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 862,
    "end": 863
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 864,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 885,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 893,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 897,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 905,
    "end": 906
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 907,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 911,
    "end": 912
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 912,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 918,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 928,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 937,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 946,
    "end": 947
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 948,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 959,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 970,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 981,
    "end": 982
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 983,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1005,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "String",
    "value": "\"nosKill\"",
    "start": 1014,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1025,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1036,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1050,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 1053,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1072,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1080,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1084,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1097,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1102,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1108,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1118,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1127,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1138,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1149,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1160,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1173,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1195,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "String",
    "value": "\"nosKill\"",
    "start": 1204,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1215,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1226,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1240,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 1243,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1267,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1275,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1279,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1292,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1297,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1303,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1313,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1322,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1333,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1344,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1355,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1368,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1390,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "String",
    "value": "\"nosKill\"",
    "start": 1399,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1410,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1421,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1435,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 1443,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1459,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 1465,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1474,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1484,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 1493,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1503,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1514,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1532,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1538,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1549,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1559,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1568,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1580,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1591,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "{",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1612,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1620,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1624,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1638,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1643,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1648,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1654,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1662,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1672,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 1679,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1688,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1700,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 1703,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1717,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1725,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1729,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1739,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1744,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1749,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1755,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1763,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1773,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 1780,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1789,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1802,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 1805,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "{",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1824,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1832,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1836,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1846,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1851,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1856,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1862,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1870,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1880,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 1887,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1896,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1909,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1915,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 1921,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1930,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 1937,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1951,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1957,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1968,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1975,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1996,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2004,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2008,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2018,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2023,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2033,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2039,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2047,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2061,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2079,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2088,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2099,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2118,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 2129,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2142,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2164,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2173,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2184,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2195,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2209,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 2212,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2231,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2239,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2243,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2253,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2258,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2268,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2274,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2282,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2296,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2314,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2323,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2334,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2353,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 2364,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2377,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2399,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2408,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2419,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2430,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2444,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 2447,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2471,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2479,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2483,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2493,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2498,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2508,
    "end": 2512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2514,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2522,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2536,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "primary",
    "start": 2554,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2563,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2574,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2593,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 2604,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2617,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2639,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2648,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2659,
    "end": 2668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2670,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2684,
    "end": 2686
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 2688,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2704,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 2710,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2719,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2729,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 2738,
    "end": 2746
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2748,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2759,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2777,
    "end": 2781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2783,
    "end": 2792
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2792,
    "end": 2793
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2794,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2804,
    "end": 2811
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2811,
    "end": 2812
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2813,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2825,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 2836,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "{",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2857,
    "end": 2864
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2865,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2869,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2877,
    "end": 2878
  }
]
```
