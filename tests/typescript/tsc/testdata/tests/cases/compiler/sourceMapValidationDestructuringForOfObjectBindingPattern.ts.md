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
                    "start": 237,
                    "end": 242
                  },
                  "typeArguments": null,
                  "start": 237,
                  "end": 242
                },
                "start": 237,
                "end": 244
              },
              "start": 235,
              "end": 244
            },
            "start": 229,
            "end": 244
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
                      "start": 250,
                      "end": 254
                    },
                    "value": {
                      "type": "Literal",
                      "value": "mower",
                      "raw": "\"mower\"",
                      "start": 256,
                      "end": 263
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 250,
                    "end": 263
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
                      "start": 265,
                      "end": 270
                    },
                    "value": {
                      "type": "Literal",
                      "value": "mowing",
                      "raw": "\"mowing\"",
                      "start": 272,
                      "end": 280
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 265,
                    "end": 280
                  }
                ],
                "start": 248,
                "end": 282
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
                      "start": 286,
                      "end": 290
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 292,
                      "end": 301
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 286,
                    "end": 301
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
                      "start": 303,
                      "end": 308
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 310,
                      "end": 320
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 303,
                    "end": 320
                  }
                ],
                "start": 284,
                "end": 322
              }
            ],
            "start": 247,
            "end": 323
          },
          "definite": false,
          "start": 229,
          "end": 323
        }
      ],
      "declare": false,
      "start": 225,
      "end": 324
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
                    "start": 342,
                    "end": 352
                  },
                  "typeArguments": null,
                  "start": 342,
                  "end": 352
                },
                "start": 342,
                "end": 354
              },
              "start": 340,
              "end": 354
            },
            "start": 329,
            "end": 354
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
                      "start": 360,
                      "end": 364
                    },
                    "value": {
                      "type": "Literal",
                      "value": "mower",
                      "raw": "\"mower\"",
                      "start": 366,
                      "end": 373
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 360,
                    "end": 373
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
                      "start": 375,
                      "end": 381
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
                            "start": 385,
                            "end": 392
                          },
                          "value": {
                            "type": "Literal",
                            "value": "mowing",
                            "raw": "\"mowing\"",
                            "start": 394,
                            "end": 402
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 385,
                          "end": 402
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
                            "start": 404,
                            "end": 413
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 415,
                            "end": 421
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 404,
                          "end": 421
                        }
                      ],
                      "start": 383,
                      "end": 423
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 375,
                    "end": 423
                  }
                ],
                "start": 358,
                "end": 425
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
                      "start": 433,
                      "end": 437
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 439,
                      "end": 448
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 433,
                    "end": 448
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
                      "start": 450,
                      "end": 456
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
                            "start": 460,
                            "end": 467
                          },
                          "value": {
                            "type": "Literal",
                            "value": "trimming",
                            "raw": "\"trimming\"",
                            "start": 469,
                            "end": 479
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 460,
                          "end": 479
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
                            "start": 481,
                            "end": 490
                          },
                          "value": {
                            "type": "Literal",
                            "value": "edging",
                            "raw": "\"edging\"",
                            "start": 492,
                            "end": 500
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 481,
                          "end": 500
                        }
                      ],
                      "start": 458,
                      "end": 502
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 450,
                    "end": 502
                  }
                ],
                "start": 431,
                "end": 504
              }
            ],
            "start": 357,
            "end": 505
          },
          "definite": false,
          "start": 329,
          "end": 505
        }
      ],
      "declare": false,
      "start": 325,
      "end": 506
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 517,
        "end": 526
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
              "start": 542,
              "end": 548
            },
            "start": 535,
            "end": 549
          }
        ],
        "start": 529,
        "end": 551
      },
      "expression": false,
      "start": 508,
      "end": 551
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 562,
        "end": 576
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
              "start": 592,
              "end": 603
            },
            "start": 585,
            "end": 604
          }
        ],
        "start": 579,
        "end": 606
      },
      "expression": false,
      "start": 553,
      "end": 606
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
                    "start": 618,
                    "end": 622
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 624,
                    "end": 629
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 618,
                  "end": 629
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 617,
              "end": 631
            },
            "init": null,
            "definite": false,
            "start": 617,
            "end": 631
          }
        ],
        "declare": false,
        "start": 613,
        "end": 631
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 635,
        "end": 641
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
                  "start": 649,
                  "end": 656
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 657,
                  "end": 660
                },
                "optional": false,
                "computed": false,
                "start": 649,
                "end": 660
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 661,
                  "end": 666
                }
              ],
              "optional": false,
              "start": 649,
              "end": 667
            },
            "directive": null,
            "start": 649,
            "end": 668
          }
        ],
        "start": 643,
        "end": 670
      },
      "start": 608,
      "end": 670
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
                    "start": 681,
                    "end": 685
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 687,
                    "end": 692
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 681,
                  "end": 692
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 680,
              "end": 694
            },
            "init": null,
            "definite": false,
            "start": 680,
            "end": 694
          }
        ],
        "declare": false,
        "start": 676,
        "end": 694
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 698,
          "end": 707
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 698,
        "end": 709
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 734
                }
              ],
              "optional": false,
              "start": 717,
              "end": 735
            },
            "directive": null,
            "start": 717,
            "end": 736
          }
        ],
        "start": 711,
        "end": 738
      },
      "start": 671,
      "end": 738
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
                    "start": 749,
                    "end": 753
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 755,
                    "end": 760
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 749,
                  "end": 760
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 748,
              "end": 762
            },
            "init": null,
            "definite": false,
            "start": 748,
            "end": 762
          }
        ],
        "declare": false,
        "start": 744,
        "end": 762
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
                  "start": 769,
                  "end": 773
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 775,
                  "end": 782
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 769,
                "end": 782
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
                  "start": 784,
                  "end": 789
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 791,
                  "end": 799
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 784,
                "end": 799
              }
            ],
            "start": 767,
            "end": 801
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
                  "start": 805,
                  "end": 809
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 811,
                  "end": 820
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 805,
                "end": 820
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
                  "start": 822,
                  "end": 827
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 829,
                  "end": 839
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 822,
                "end": 839
              }
            ],
            "start": 803,
            "end": 841
          }
        ],
        "start": 766,
        "end": 842
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
                  "start": 850,
                  "end": 857
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 858,
                  "end": 861
                },
                "optional": false,
                "computed": false,
                "start": 850,
                "end": 861
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 862,
                  "end": 867
                }
              ],
              "optional": false,
              "start": 850,
              "end": 868
            },
            "directive": null,
            "start": 850,
            "end": 869
          }
        ],
        "start": 844,
        "end": 871
      },
      "start": 739,
      "end": 871
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
                    "start": 883,
                    "end": 889
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
                          "start": 893,
                          "end": 900
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 902,
                          "end": 910
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 893,
                        "end": 910
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
                          "start": 912,
                          "end": 921
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 923,
                          "end": 933
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 912,
                        "end": 933
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 891,
                    "end": 935
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 883,
                  "end": 935
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 881,
              "end": 937
            },
            "init": null,
            "definite": false,
            "start": 881,
            "end": 937
          }
        ],
        "declare": false,
        "start": 877,
        "end": 937
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 941,
        "end": 952
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
                  "start": 960,
                  "end": 967
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 968,
                  "end": 971
                },
                "optional": false,
                "computed": false,
                "start": 960,
                "end": 971
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 972,
                  "end": 980
                }
              ],
              "optional": false,
              "start": 960,
              "end": 981
            },
            "directive": null,
            "start": 960,
            "end": 982
          }
        ],
        "start": 954,
        "end": 984
      },
      "start": 872,
      "end": 984
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
                    "start": 996,
                    "end": 1002
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
                          "start": 1006,
                          "end": 1013
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1015,
                          "end": 1023
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1006,
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1036,
                          "end": 1046
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1025,
                        "end": 1046
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1004,
                    "end": 1048
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 996,
                  "end": 1048
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 994,
              "end": 1050
            },
            "init": null,
            "definite": false,
            "start": 994,
            "end": 1050
          }
        ],
        "declare": false,
        "start": 990,
        "end": 1050
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1054,
          "end": 1068
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1054,
        "end": 1070
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
                  "start": 1078,
                  "end": 1085
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1086,
                  "end": 1089
                },
                "optional": false,
                "computed": false,
                "start": 1078,
                "end": 1089
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1090,
                  "end": 1098
                }
              ],
              "optional": false,
              "start": 1078,
              "end": 1099
            },
            "directive": null,
            "start": 1078,
            "end": 1100
          }
        ],
        "start": 1072,
        "end": 1102
      },
      "start": 985,
      "end": 1102
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
                    "start": 1114,
                    "end": 1120
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
                          "start": 1124,
                          "end": 1131
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1133,
                          "end": 1141
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1124,
                        "end": 1141
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
                          "start": 1143,
                          "end": 1152
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1154,
                          "end": 1164
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1143,
                        "end": 1164
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1122,
                    "end": 1166
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1114,
                  "end": 1166
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1112,
              "end": 1168
            },
            "init": null,
            "definite": false,
            "start": 1112,
            "end": 1168
          }
        ],
        "declare": false,
        "start": 1108,
        "end": 1168
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
                  "start": 1175,
                  "end": 1179
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 1181,
                  "end": 1188
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1175,
                "end": 1188
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
                  "start": 1190,
                  "end": 1196
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
                        "start": 1200,
                        "end": 1207
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 1209,
                        "end": 1217
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1200,
                      "end": 1217
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
                        "start": 1219,
                        "end": 1228
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1230,
                        "end": 1236
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1219,
                      "end": 1236
                    }
                  ],
                  "start": 1198,
                  "end": 1238
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1190,
                "end": 1238
              }
            ],
            "start": 1173,
            "end": 1240
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
                  "start": 1248,
                  "end": 1252
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1254,
                  "end": 1263
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1248,
                "end": 1263
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
                  "start": 1265,
                  "end": 1271
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
                        "start": 1275,
                        "end": 1282
                      },
                      "value": {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 1284,
                        "end": 1294
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1275,
                      "end": 1294
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
                        "start": 1296,
                        "end": 1305
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 1307,
                        "end": 1315
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1296,
                      "end": 1315
                    }
                  ],
                  "start": 1273,
                  "end": 1317
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1265,
                "end": 1317
              }
            ],
            "start": 1246,
            "end": 1319
          }
        ],
        "start": 1172,
        "end": 1320
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
                  "start": 1328,
                  "end": 1335
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1336,
                  "end": 1339
                },
                "optional": false,
                "computed": false,
                "start": 1328,
                "end": 1339
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1340,
                  "end": 1348
                }
              ],
              "optional": false,
              "start": 1328,
              "end": 1349
            },
            "directive": null,
            "start": 1328,
            "end": 1350
          }
        ],
        "start": 1322,
        "end": 1352
      },
      "start": 1103,
      "end": 1352
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
                    "start": 1364,
                    "end": 1368
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1370,
                    "end": 1375
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1364,
                  "end": 1375
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
                    "start": 1377,
                    "end": 1382
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1384,
                    "end": 1390
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1377,
                  "end": 1390
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1363,
              "end": 1392
            },
            "init": null,
            "definite": false,
            "start": 1363,
            "end": 1392
          }
        ],
        "declare": false,
        "start": 1359,
        "end": 1392
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1396,
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
      "start": 1354,
      "end": 1431
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
            "init": null,
            "definite": false,
            "start": 1441,
            "end": 1470
          }
        ],
        "declare": false,
        "start": 1437,
        "end": 1470
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1474,
          "end": 1483
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1474,
        "end": 1485
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
                  "start": 1493,
                  "end": 1500
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1501,
                  "end": 1504
                },
                "optional": false,
                "computed": false,
                "start": 1493,
                "end": 1504
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1505,
                  "end": 1510
                }
              ],
              "optional": false,
              "start": 1493,
              "end": 1511
            },
            "directive": null,
            "start": 1493,
            "end": 1512
          }
        ],
        "start": 1487,
        "end": 1514
      },
      "start": 1432,
      "end": 1514
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
                    "start": 1525,
                    "end": 1529
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1531,
                    "end": 1536
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1525,
                  "end": 1536
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
                    "start": 1538,
                    "end": 1543
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1545,
                    "end": 1551
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1538,
                  "end": 1551
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1524,
              "end": 1553
            },
            "init": null,
            "definite": false,
            "start": 1524,
            "end": 1553
          }
        ],
        "declare": false,
        "start": 1520,
        "end": 1553
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
                  "start": 1560,
                  "end": 1564
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 1566,
                  "end": 1573
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1560,
                "end": 1573
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
                  "start": 1575,
                  "end": 1580
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 1582,
                  "end": 1590
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1575,
                "end": 1590
              }
            ],
            "start": 1558,
            "end": 1592
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
                  "start": 1596,
                  "end": 1600
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1602,
                  "end": 1611
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1596,
                "end": 1611
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
                  "start": 1613,
                  "end": 1618
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1620,
                  "end": 1630
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1613,
                "end": 1630
              }
            ],
            "start": 1594,
            "end": 1632
          }
        ],
        "start": 1557,
        "end": 1633
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
                  "start": 1641,
                  "end": 1648
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1649,
                  "end": 1652
                },
                "optional": false,
                "computed": false,
                "start": 1641,
                "end": 1652
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1653,
                  "end": 1658
                }
              ],
              "optional": false,
              "start": 1641,
              "end": 1659
            },
            "directive": null,
            "start": 1641,
            "end": 1660
          }
        ],
        "start": 1635,
        "end": 1662
      },
      "start": 1515,
      "end": 1662
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
                    "start": 1673,
                    "end": 1677
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1679,
                    "end": 1684
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1673,
                  "end": 1684
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
                    "start": 1686,
                    "end": 1692
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
                          "start": 1696,
                          "end": 1703
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1705,
                          "end": 1713
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1696,
                        "end": 1713
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
                          "start": 1715,
                          "end": 1724
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1726,
                          "end": 1736
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1715,
                        "end": 1736
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1694,
                    "end": 1738
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1686,
                  "end": 1738
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1672,
              "end": 1740
            },
            "init": null,
            "definite": false,
            "start": 1672,
            "end": 1740
          }
        ],
        "declare": false,
        "start": 1668,
        "end": 1740
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1744,
        "end": 1755
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
                  "start": 1763,
                  "end": 1770
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1771,
                  "end": 1774
                },
                "optional": false,
                "computed": false,
                "start": 1763,
                "end": 1774
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1775,
                  "end": 1780
                }
              ],
              "optional": false,
              "start": 1763,
              "end": 1781
            },
            "directive": null,
            "start": 1763,
            "end": 1782
          }
        ],
        "start": 1757,
        "end": 1784
      },
      "start": 1663,
      "end": 1784
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
                    "start": 1795,
                    "end": 1799
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1801,
                    "end": 1806
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1795,
                  "end": 1806
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
                    "start": 1808,
                    "end": 1814
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
                          "start": 1818,
                          "end": 1825
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1827,
                          "end": 1835
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1818,
                        "end": 1835
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
                          "start": 1837,
                          "end": 1846
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1848,
                          "end": 1858
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1837,
                        "end": 1858
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1816,
                    "end": 1860
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1808,
                  "end": 1860
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1794,
              "end": 1862
            },
            "init": null,
            "definite": false,
            "start": 1794,
            "end": 1862
          }
        ],
        "declare": false,
        "start": 1790,
        "end": 1862
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1866,
          "end": 1880
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1866,
        "end": 1882
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
                  "start": 1890,
                  "end": 1897
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1898,
                  "end": 1901
                },
                "optional": false,
                "computed": false,
                "start": 1890,
                "end": 1901
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1902,
                  "end": 1907
                }
              ],
              "optional": false,
              "start": 1890,
              "end": 1908
            },
            "directive": null,
            "start": 1890,
            "end": 1909
          }
        ],
        "start": 1884,
        "end": 1911
      },
      "start": 1785,
      "end": 1911
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
                    "start": 1922,
                    "end": 1926
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1928,
                    "end": 1933
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1922,
                  "end": 1933
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
                    "start": 1935,
                    "end": 1941
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
                          "start": 1945,
                          "end": 1952
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1954,
                          "end": 1962
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1945,
                        "end": 1962
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
                          "start": 1964,
                          "end": 1973
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1975,
                          "end": 1985
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1964,
                        "end": 1985
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1943,
                    "end": 1987
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1935,
                  "end": 1987
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1921,
              "end": 1989
            },
            "init": null,
            "definite": false,
            "start": 1921,
            "end": 1989
          }
        ],
        "declare": false,
        "start": 1917,
        "end": 1989
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
                  "start": 1996,
                  "end": 2000
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 2002,
                  "end": 2009
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1996,
                "end": 2009
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
                  "start": 2011,
                  "end": 2017
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
                        "start": 2021,
                        "end": 2028
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 2030,
                        "end": 2038
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2021,
                      "end": 2038
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
                        "start": 2040,
                        "end": 2049
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2051,
                        "end": 2057
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2040,
                      "end": 2057
                    }
                  ],
                  "start": 2019,
                  "end": 2059
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2011,
                "end": 2059
              }
            ],
            "start": 1994,
            "end": 2061
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
                  "start": 2069,
                  "end": 2073
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2075,
                  "end": 2084
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2069,
                "end": 2084
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
                  "start": 2086,
                  "end": 2092
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
                        "start": 2096,
                        "end": 2103
                      },
                      "value": {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 2105,
                        "end": 2115
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2096,
                      "end": 2115
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
                        "start": 2117,
                        "end": 2126
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 2128,
                        "end": 2136
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2117,
                      "end": 2136
                    }
                  ],
                  "start": 2094,
                  "end": 2138
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2086,
                "end": 2138
              }
            ],
            "start": 2067,
            "end": 2140
          }
        ],
        "start": 1993,
        "end": 2141
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
                  "start": 2149,
                  "end": 2156
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2157,
                  "end": 2160
                },
                "optional": false,
                "computed": false,
                "start": 2149,
                "end": 2160
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2161,
                  "end": 2166
                }
              ],
              "optional": false,
              "start": 2149,
              "end": 2167
            },
            "directive": null,
            "start": 2149,
            "end": 2168
          }
        ],
        "start": 2143,
        "end": 2170
      },
      "start": 1912,
      "end": 2170
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2170
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
    "value": "robots",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 237,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 250,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 256,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 265,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 272,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 286,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 292,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 303,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 310,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 325,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 329,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 342,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 360,
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
    "value": "\"mower\"",
    "start": 366,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 375,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 385,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 394,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 404,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 415,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
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
    "value": ",",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 433,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 439,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 450,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 460,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 469,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 481,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 492,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
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
    "value": "]",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 508,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 517,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 535,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 542,
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
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 553,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 562,
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
    "value": "{",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 585,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 592,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "for",
    "start": 608,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 613,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 618,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 624,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 632,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 635,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 649,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 657,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 661,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 671,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 676,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 681,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 687,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 695,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 698,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "{",
    "start": 711,
    "end": 712
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
    "value": "nameA",
    "start": 729,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 737,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 739,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 743,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 744,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 749,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 755,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 763,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 769,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 773,
    "end": 774
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 775,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 784,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 789,
    "end": 790
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 791,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 805,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 809,
    "end": 810
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 811,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 822,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 827,
    "end": 828
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 829,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 850,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 858,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 862,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 870,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 872,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 876,
    "end": 877
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 877,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 883,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 893,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 902,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 912,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 923,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 938,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 941,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 960,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 968,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 972,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 983,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 985,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 989,
    "end": 990
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 990,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 996,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "primary",
    "start": 1006,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1015,
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
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1036,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1051,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 1054,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1078,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1086,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1090,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "for",
    "start": 1103,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1108,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1114,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1124,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1133,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1143,
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
    "value": "secondaryA",
    "start": 1154,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1169,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1175,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 1181,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1190,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1200,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 1209,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1219,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1230,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1240,
    "end": 1241
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
    "start": 1248,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1254,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1265,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1275,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1284,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1296,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1307,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1328,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1336,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1340,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1354,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1359,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1364,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1370,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1377,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 1384,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1393,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 1396,
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
    "type": "Identifier",
    "value": "of",
    "start": 1471,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 1474,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1493,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1501,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1505,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1515,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1520,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1525,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1531,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1538,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 1545,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1554,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1560,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 1566,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1575,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 1582,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1596,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1602,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1613,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1620,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1641,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1649,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1653,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1663,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1668,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1673,
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
    "value": "nameA",
    "start": 1679,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1686,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1696,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1705,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1715,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1726,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1741,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 1744,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1763,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1771,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1775,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1785,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1790,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1795,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1801,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1808,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1818,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1827,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1837,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1848,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1863,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 1866,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1890,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1898,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1902,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1912,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1917,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1922,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1928,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1935,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1945,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1954,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1964,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
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
    "value": "}",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1990,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1996,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 2002,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2011,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2021,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 2030,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2040,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2051,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2069,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2075,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2086,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2092,
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
    "value": "primary",
    "start": 2096,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2105,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2117,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 2128,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2149,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2157,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2161,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2169,
    "end": 2170
  }
]
```
