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
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 619,
                "end": 625
              },
              "start": 617,
              "end": 625
            },
            "start": 612,
            "end": 625
          },
          "init": null,
          "definite": false,
          "start": 612,
          "end": 625
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "primaryA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 637,
                "end": 643
              },
              "start": 635,
              "end": 643
            },
            "start": 627,
            "end": 643
          },
          "init": null,
          "definite": false,
          "start": 627,
          "end": 643
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "secondaryA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 657,
                "end": 663
              },
              "start": 655,
              "end": 663
            },
            "start": 645,
            "end": 663
          },
          "init": null,
          "definite": false,
          "start": 645,
          "end": 663
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 668,
                "end": 674
              },
              "start": 666,
              "end": 674
            },
            "start": 665,
            "end": 674
          },
          "init": null,
          "definite": false,
          "start": 665,
          "end": 674
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "skillA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 684,
                "end": 690
              },
              "start": 682,
              "end": 690
            },
            "start": 676,
            "end": 690
          },
          "init": null,
          "definite": false,
          "start": 676,
          "end": 690
        }
      ],
      "declare": false,
      "start": 608,
      "end": 691
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
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 702,
                "end": 708
              },
              "start": 700,
              "end": 708
            },
            "start": 696,
            "end": 708
          },
          "init": null,
          "definite": false,
          "start": 696,
          "end": 708
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "primary",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 719,
                "end": 725
              },
              "start": 717,
              "end": 725
            },
            "start": 710,
            "end": 725
          },
          "init": null,
          "definite": false,
          "start": 710,
          "end": 725
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "secondary",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 738,
                "end": 744
              },
              "start": 736,
              "end": 744
            },
            "start": 727,
            "end": 744
          },
          "init": null,
          "definite": false,
          "start": 727,
          "end": 744
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "skill",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 753,
                "end": 759
              },
              "start": 751,
              "end": 759
            },
            "start": 746,
            "end": 759
          },
          "init": null,
          "definite": false,
          "start": 746,
          "end": 759
        }
      ],
      "declare": false,
      "start": 692,
      "end": 760
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 768,
              "end": 772
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 774,
              "end": 779
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 768,
            "end": 779
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 767,
        "end": 781
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 785,
        "end": 791
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
                  "start": 799,
                  "end": 806
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 807,
                  "end": 810
                },
                "optional": false,
                "computed": false,
                "start": 799,
                "end": 810
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 811,
                  "end": 816
                }
              ],
              "optional": false,
              "start": 799,
              "end": 817
            },
            "directive": null,
            "start": 799,
            "end": 818
          }
        ],
        "start": 793,
        "end": 820
      },
      "start": 762,
      "end": 820
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 827,
              "end": 831
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 833,
              "end": 838
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 827,
            "end": 838
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 826,
        "end": 840
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 844,
          "end": 853
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 844,
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
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 875,
                  "end": 880
                }
              ],
              "optional": false,
              "start": 863,
              "end": 881
            },
            "directive": null,
            "start": 863,
            "end": 882
          }
        ],
        "start": 857,
        "end": 884
      },
      "start": 821,
      "end": 884
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 891,
              "end": 895
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 897,
              "end": 902
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 891,
            "end": 902
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 890,
        "end": 904
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
                  "start": 911,
                  "end": 915
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 917,
                  "end": 924
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 911,
                "end": 924
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
                  "start": 926,
                  "end": 931
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 933,
                  "end": 941
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 926,
                "end": 941
              }
            ],
            "start": 909,
            "end": 943
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
                  "start": 947,
                  "end": 951
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 953,
                  "end": 962
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 947,
                "end": 962
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
                  "start": 964,
                  "end": 969
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 971,
                  "end": 981
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 964,
                "end": 981
              }
            ],
            "start": 945,
            "end": 983
          }
        ],
        "start": 908,
        "end": 984
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
                  "start": 992,
                  "end": 999
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1000,
                  "end": 1003
                },
                "optional": false,
                "computed": false,
                "start": 992,
                "end": 1003
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1004,
                  "end": 1009
                }
              ],
              "optional": false,
              "start": 992,
              "end": 1010
            },
            "directive": null,
            "start": 992,
            "end": 1011
          }
        ],
        "start": 986,
        "end": 1013
      },
      "start": 885,
      "end": 1013
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "skills",
              "optional": false,
              "typeAnnotation": null,
              "start": 1021,
              "end": 1027
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
                    "start": 1031,
                    "end": 1038
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1040,
                    "end": 1048
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1031,
                  "end": 1048
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
                    "start": 1050,
                    "end": 1059
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1061,
                    "end": 1071
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1050,
                  "end": 1071
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1029,
              "end": 1073
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1021,
            "end": 1073
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1019,
        "end": 1075
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1079,
        "end": 1090
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
                  "start": 1098,
                  "end": 1105
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1106,
                  "end": 1109
                },
                "optional": false,
                "computed": false,
                "start": 1098,
                "end": 1109
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1110,
                  "end": 1118
                }
              ],
              "optional": false,
              "start": 1098,
              "end": 1119
            },
            "directive": null,
            "start": 1098,
            "end": 1120
          }
        ],
        "start": 1092,
        "end": 1122
      },
      "start": 1014,
      "end": 1122
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "skills",
              "optional": false,
              "typeAnnotation": null,
              "start": 1130,
              "end": 1136
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
                    "start": 1140,
                    "end": 1147
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1149,
                    "end": 1157
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1140,
                  "end": 1157
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
                    "start": 1159,
                    "end": 1168
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1170,
                    "end": 1180
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1159,
                  "end": 1180
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1138,
              "end": 1182
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1130,
            "end": 1182
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1128,
        "end": 1184
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1188,
          "end": 1202
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1188,
        "end": 1204
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
                  "start": 1212,
                  "end": 1219
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1220,
                  "end": 1223
                },
                "optional": false,
                "computed": false,
                "start": 1212,
                "end": 1223
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1224,
                  "end": 1232
                }
              ],
              "optional": false,
              "start": 1212,
              "end": 1233
            },
            "directive": null,
            "start": 1212,
            "end": 1234
          }
        ],
        "start": 1206,
        "end": 1236
      },
      "start": 1123,
      "end": 1236
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "skills",
              "optional": false,
              "typeAnnotation": null,
              "start": 1244,
              "end": 1250
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
                    "start": 1254,
                    "end": 1261
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1263,
                    "end": 1271
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1254,
                  "end": 1271
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
                    "start": 1273,
                    "end": 1282
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1284,
                    "end": 1294
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1273,
                  "end": 1294
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1252,
              "end": 1296
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1244,
            "end": 1296
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1242,
        "end": 1298
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
                  "start": 1305,
                  "end": 1309
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 1311,
                  "end": 1318
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1305,
                "end": 1318
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
                  "start": 1320,
                  "end": 1326
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
                        "start": 1330,
                        "end": 1337
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 1339,
                        "end": 1347
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1330,
                      "end": 1347
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
                        "start": 1349,
                        "end": 1358
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1360,
                        "end": 1366
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1349,
                      "end": 1366
                    }
                  ],
                  "start": 1328,
                  "end": 1368
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1320,
                "end": 1368
              }
            ],
            "start": 1303,
            "end": 1370
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
                  "start": 1378,
                  "end": 1382
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1384,
                  "end": 1393
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1378,
                "end": 1393
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
                  "start": 1395,
                  "end": 1401
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
                        "start": 1405,
                        "end": 1412
                      },
                      "value": {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 1414,
                        "end": 1424
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1405,
                      "end": 1424
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
                        "start": 1426,
                        "end": 1435
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 1437,
                        "end": 1445
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1426,
                      "end": 1445
                    }
                  ],
                  "start": 1403,
                  "end": 1447
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1395,
                "end": 1447
              }
            ],
            "start": 1376,
            "end": 1449
          }
        ],
        "start": 1302,
        "end": 1450
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
                  "start": 1458,
                  "end": 1465
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1466,
                  "end": 1469
                },
                "optional": false,
                "computed": false,
                "start": 1458,
                "end": 1469
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1470,
                  "end": 1478
                }
              ],
              "optional": false,
              "start": 1458,
              "end": 1479
            },
            "directive": null,
            "start": 1458,
            "end": 1480
          }
        ],
        "start": 1452,
        "end": 1482
      },
      "start": 1237,
      "end": 1482
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1489,
              "end": 1493
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1489,
              "end": 1493
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 1489,
            "end": 1493
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1488,
        "end": 1495
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1499,
        "end": 1505
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
                  "start": 1513,
                  "end": 1520
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1521,
                  "end": 1524
                },
                "optional": false,
                "computed": false,
                "start": 1513,
                "end": 1524
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1525,
                  "end": 1530
                }
              ],
              "optional": false,
              "start": 1513,
              "end": 1531
            },
            "directive": null,
            "start": 1513,
            "end": 1532
          }
        ],
        "start": 1507,
        "end": 1534
      },
      "start": 1483,
      "end": 1534
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1541,
              "end": 1545
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1541,
              "end": 1545
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 1541,
            "end": 1545
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1540,
        "end": 1547
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1551,
          "end": 1560
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1551,
        "end": 1562
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
                  "start": 1570,
                  "end": 1577
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1578,
                  "end": 1581
                },
                "optional": false,
                "computed": false,
                "start": 1570,
                "end": 1581
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1582,
                  "end": 1587
                }
              ],
              "optional": false,
              "start": 1570,
              "end": 1588
            },
            "directive": null,
            "start": 1570,
            "end": 1589
          }
        ],
        "start": 1564,
        "end": 1591
      },
      "start": 1535,
      "end": 1591
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1598,
              "end": 1602
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1598,
              "end": 1602
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 1598,
            "end": 1602
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1597,
        "end": 1604
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
                  "start": 1611,
                  "end": 1615
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 1617,
                  "end": 1624
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1611,
                "end": 1624
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
                  "start": 1626,
                  "end": 1631
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 1633,
                  "end": 1641
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1626,
                "end": 1641
              }
            ],
            "start": 1609,
            "end": 1643
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
                  "start": 1647,
                  "end": 1651
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1653,
                  "end": 1662
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1647,
                "end": 1662
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
                  "start": 1664,
                  "end": 1669
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1671,
                  "end": 1681
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1664,
                "end": 1681
              }
            ],
            "start": 1645,
            "end": 1683
          }
        ],
        "start": 1608,
        "end": 1684
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
                  "start": 1692,
                  "end": 1699
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1700,
                  "end": 1703
                },
                "optional": false,
                "computed": false,
                "start": 1692,
                "end": 1703
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1704,
                  "end": 1709
                }
              ],
              "optional": false,
              "start": 1692,
              "end": 1710
            },
            "directive": null,
            "start": 1692,
            "end": 1711
          }
        ],
        "start": 1686,
        "end": 1713
      },
      "start": 1592,
      "end": 1713
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "skills",
              "optional": false,
              "typeAnnotation": null,
              "start": 1721,
              "end": 1727
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
                    "start": 1731,
                    "end": 1738
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1731,
                    "end": 1738
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1731,
                  "end": 1738
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
                    "start": 1740,
                    "end": 1749
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1740,
                    "end": 1749
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1740,
                  "end": 1749
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1729,
              "end": 1751
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1721,
            "end": 1751
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1719,
        "end": 1753
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1757,
        "end": 1768
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
                  "start": 1776,
                  "end": 1783
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1784,
                  "end": 1787
                },
                "optional": false,
                "computed": false,
                "start": 1776,
                "end": 1787
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1788,
                  "end": 1796
                }
              ],
              "optional": false,
              "start": 1776,
              "end": 1797
            },
            "directive": null,
            "start": 1776,
            "end": 1798
          }
        ],
        "start": 1770,
        "end": 1800
      },
      "start": 1714,
      "end": 1800
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                    "name": "primary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1818,
                    "end": 1825
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1818,
                  "end": 1825
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
                    "start": 1827,
                    "end": 1836
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1827,
                    "end": 1836
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1827,
                  "end": 1836
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1816,
              "end": 1838
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1808,
            "end": 1838
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1806,
        "end": 1840
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1844,
          "end": 1858
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1844,
        "end": 1860
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
                  "start": 1868,
                  "end": 1875
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1876,
                  "end": 1879
                },
                "optional": false,
                "computed": false,
                "start": 1868,
                "end": 1879
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1880,
                  "end": 1888
                }
              ],
              "optional": false,
              "start": 1868,
              "end": 1889
            },
            "directive": null,
            "start": 1868,
            "end": 1890
          }
        ],
        "start": 1862,
        "end": 1892
      },
      "start": 1801,
      "end": 1892
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "skills",
              "optional": false,
              "typeAnnotation": null,
              "start": 1900,
              "end": 1906
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
                    "start": 1910,
                    "end": 1917
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1910,
                    "end": 1917
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1910,
                  "end": 1917
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
                    "start": 1919,
                    "end": 1928
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1919,
                    "end": 1928
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1919,
                  "end": 1928
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1908,
              "end": 1930
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1900,
            "end": 1930
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1898,
        "end": 1932
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
                  "start": 1939,
                  "end": 1943
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 1945,
                  "end": 1952
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1939,
                "end": 1952
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
                  "start": 1954,
                  "end": 1960
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
                        "start": 1964,
                        "end": 1971
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 1973,
                        "end": 1981
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1964,
                      "end": 1981
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
                        "start": 1983,
                        "end": 1992
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1994,
                        "end": 2000
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1983,
                      "end": 2000
                    }
                  ],
                  "start": 1962,
                  "end": 2002
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1954,
                "end": 2002
              }
            ],
            "start": 1937,
            "end": 2004
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
                  "start": 2012,
                  "end": 2016
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2018,
                  "end": 2027
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2012,
                "end": 2027
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
                  "start": 2029,
                  "end": 2035
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
                        "start": 2039,
                        "end": 2046
                      },
                      "value": {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 2048,
                        "end": 2058
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2039,
                      "end": 2058
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
                        "start": 2060,
                        "end": 2069
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 2071,
                        "end": 2079
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2060,
                      "end": 2079
                    }
                  ],
                  "start": 2037,
                  "end": 2081
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2029,
                "end": 2081
              }
            ],
            "start": 2010,
            "end": 2083
          }
        ],
        "start": 1936,
        "end": 2084
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
                  "start": 2092,
                  "end": 2099
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2100,
                  "end": 2103
                },
                "optional": false,
                "computed": false,
                "start": 2092,
                "end": 2103
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2104,
                  "end": 2112
                }
              ],
              "optional": false,
              "start": 2092,
              "end": 2113
            },
            "directive": null,
            "start": 2092,
            "end": 2114
          }
        ],
        "start": 2086,
        "end": 2116
      },
      "start": 1893,
      "end": 2116
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2125,
              "end": 2129
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2131,
              "end": 2136
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2125,
            "end": 2136
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
              "start": 2138,
              "end": 2143
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "skillA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2145,
              "end": 2151
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2138,
            "end": 2151
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2124,
        "end": 2153
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2157,
        "end": 2163
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
                  "start": 2171,
                  "end": 2178
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2179,
                  "end": 2182
                },
                "optional": false,
                "computed": false,
                "start": 2171,
                "end": 2182
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2183,
                  "end": 2188
                }
              ],
              "optional": false,
              "start": 2171,
              "end": 2189
            },
            "directive": null,
            "start": 2171,
            "end": 2190
          }
        ],
        "start": 2165,
        "end": 2192
      },
      "start": 2119,
      "end": 2192
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2199,
              "end": 2203
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2205,
              "end": 2210
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2199,
            "end": 2210
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
              "start": 2212,
              "end": 2217
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "skillA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2219,
              "end": 2225
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2212,
            "end": 2225
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2198,
        "end": 2227
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2231,
          "end": 2240
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2231,
        "end": 2242
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
                  "start": 2250,
                  "end": 2257
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2258,
                  "end": 2261
                },
                "optional": false,
                "computed": false,
                "start": 2250,
                "end": 2261
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2262,
                  "end": 2267
                }
              ],
              "optional": false,
              "start": 2250,
              "end": 2268
            },
            "directive": null,
            "start": 2250,
            "end": 2269
          }
        ],
        "start": 2244,
        "end": 2271
      },
      "start": 2193,
      "end": 2271
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2278,
              "end": 2282
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2284,
              "end": 2289
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2278,
            "end": 2289
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
              "start": 2291,
              "end": 2296
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "skillA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2298,
              "end": 2304
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2291,
            "end": 2304
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2277,
        "end": 2306
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
                  "start": 2313,
                  "end": 2317
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 2319,
                  "end": 2326
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2313,
                "end": 2326
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
                  "start": 2328,
                  "end": 2333
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 2335,
                  "end": 2343
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2328,
                "end": 2343
              }
            ],
            "start": 2311,
            "end": 2345
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
                  "start": 2349,
                  "end": 2353
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2355,
                  "end": 2364
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2349,
                "end": 2364
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
                  "start": 2366,
                  "end": 2371
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 2373,
                  "end": 2383
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2366,
                "end": 2383
              }
            ],
            "start": 2347,
            "end": 2385
          }
        ],
        "start": 2310,
        "end": 2386
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
                  "start": 2394,
                  "end": 2401
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2402,
                  "end": 2405
                },
                "optional": false,
                "computed": false,
                "start": 2394,
                "end": 2405
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2406,
                  "end": 2411
                }
              ],
              "optional": false,
              "start": 2394,
              "end": 2412
            },
            "directive": null,
            "start": 2394,
            "end": 2413
          }
        ],
        "start": 2388,
        "end": 2415
      },
      "start": 2272,
      "end": 2415
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2422,
              "end": 2426
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2428,
              "end": 2433
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2422,
            "end": 2433
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
              "start": 2435,
              "end": 2441
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
                    "start": 2445,
                    "end": 2452
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2454,
                    "end": 2462
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2445,
                  "end": 2462
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
                    "start": 2464,
                    "end": 2473
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2475,
                    "end": 2485
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2464,
                  "end": 2485
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2443,
              "end": 2487
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2435,
            "end": 2487
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2421,
        "end": 2489
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2493,
        "end": 2504
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
                  "start": 2512,
                  "end": 2519
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2520,
                  "end": 2523
                },
                "optional": false,
                "computed": false,
                "start": 2512,
                "end": 2523
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2524,
                  "end": 2529
                }
              ],
              "optional": false,
              "start": 2512,
              "end": 2530
            },
            "directive": null,
            "start": 2512,
            "end": 2531
          }
        ],
        "start": 2506,
        "end": 2533
      },
      "start": 2416,
      "end": 2533
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2540,
              "end": 2544
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2546,
              "end": 2551
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2540,
            "end": 2551
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
              "start": 2553,
              "end": 2559
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
                    "start": 2563,
                    "end": 2570
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2572,
                    "end": 2580
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2563,
                  "end": 2580
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
                    "start": 2582,
                    "end": 2591
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2593,
                    "end": 2603
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2582,
                  "end": 2603
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2561,
              "end": 2605
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2553,
            "end": 2605
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2539,
        "end": 2607
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2611,
          "end": 2625
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2611,
        "end": 2627
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
                  "start": 2635,
                  "end": 2642
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2643,
                  "end": 2646
                },
                "optional": false,
                "computed": false,
                "start": 2635,
                "end": 2646
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2647,
                  "end": 2652
                }
              ],
              "optional": false,
              "start": 2635,
              "end": 2653
            },
            "directive": null,
            "start": 2635,
            "end": 2654
          }
        ],
        "start": 2629,
        "end": 2656
      },
      "start": 2534,
      "end": 2656
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2663,
              "end": 2667
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2669,
              "end": 2674
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2663,
            "end": 2674
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
              "start": 2676,
              "end": 2682
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
                    "start": 2686,
                    "end": 2693
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2695,
                    "end": 2703
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2686,
                  "end": 2703
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
                    "start": 2705,
                    "end": 2714
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondaryA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2716,
                    "end": 2726
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2705,
                  "end": 2726
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2684,
              "end": 2728
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2676,
            "end": 2728
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2662,
        "end": 2730
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
                  "start": 2737,
                  "end": 2741
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 2743,
                  "end": 2750
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2737,
                "end": 2750
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
                  "start": 2752,
                  "end": 2758
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
                        "start": 2762,
                        "end": 2769
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 2771,
                        "end": 2779
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2762,
                      "end": 2779
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
                        "start": 2781,
                        "end": 2790
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2792,
                        "end": 2798
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2781,
                      "end": 2798
                    }
                  ],
                  "start": 2760,
                  "end": 2800
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2752,
                "end": 2800
              }
            ],
            "start": 2735,
            "end": 2802
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
                  "start": 2810,
                  "end": 2814
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2816,
                  "end": 2825
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2810,
                "end": 2825
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
                  "start": 2827,
                  "end": 2833
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
                        "start": 2837,
                        "end": 2844
                      },
                      "value": {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 2846,
                        "end": 2856
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2837,
                      "end": 2856
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
                        "start": 2858,
                        "end": 2867
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 2869,
                        "end": 2877
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2858,
                      "end": 2877
                    }
                  ],
                  "start": 2835,
                  "end": 2879
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2827,
                "end": 2879
              }
            ],
            "start": 2808,
            "end": 2881
          }
        ],
        "start": 2734,
        "end": 2882
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
                  "start": 2890,
                  "end": 2897
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2898,
                  "end": 2901
                },
                "optional": false,
                "computed": false,
                "start": 2890,
                "end": 2901
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2902,
                  "end": 2907
                }
              ],
              "optional": false,
              "start": 2890,
              "end": 2908
            },
            "directive": null,
            "start": 2890,
            "end": 2909
          }
        ],
        "start": 2884,
        "end": 2911
      },
      "start": 2657,
      "end": 2911
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2918,
              "end": 2922
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2918,
              "end": 2922
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 2918,
            "end": 2922
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
              "start": 2924,
              "end": 2929
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null,
              "start": 2924,
              "end": 2929
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 2924,
            "end": 2929
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2917,
        "end": 2931
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2935,
        "end": 2941
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
                  "start": 2949,
                  "end": 2956
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2957,
                  "end": 2960
                },
                "optional": false,
                "computed": false,
                "start": 2949,
                "end": 2960
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2961,
                  "end": 2966
                }
              ],
              "optional": false,
              "start": 2949,
              "end": 2967
            },
            "directive": null,
            "start": 2949,
            "end": 2968
          }
        ],
        "start": 2943,
        "end": 2970
      },
      "start": 2912,
      "end": 2970
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2977,
              "end": 2981
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2977,
              "end": 2981
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 2977,
            "end": 2981
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
              "start": 2983,
              "end": 2988
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null,
              "start": 2983,
              "end": 2988
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 2983,
            "end": 2988
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2976,
        "end": 2990
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2994,
          "end": 3003
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2994,
        "end": 3005
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
                  "start": 3013,
                  "end": 3020
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3021,
                  "end": 3024
                },
                "optional": false,
                "computed": false,
                "start": 3013,
                "end": 3024
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3025,
                  "end": 3030
                }
              ],
              "optional": false,
              "start": 3013,
              "end": 3031
            },
            "directive": null,
            "start": 3013,
            "end": 3032
          }
        ],
        "start": 3007,
        "end": 3034
      },
      "start": 2971,
      "end": 3034
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3041,
              "end": 3045
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3041,
              "end": 3045
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 3041,
            "end": 3045
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
              "start": 3047,
              "end": 3052
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null,
              "start": 3047,
              "end": 3052
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 3047,
            "end": 3052
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 3040,
        "end": 3054
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
                  "start": 3061,
                  "end": 3065
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 3067,
                  "end": 3074
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3061,
                "end": 3074
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
                  "start": 3076,
                  "end": 3081
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 3083,
                  "end": 3091
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3076,
                "end": 3091
              }
            ],
            "start": 3059,
            "end": 3093
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
                  "start": 3097,
                  "end": 3101
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 3103,
                  "end": 3112
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3097,
                "end": 3112
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
                  "start": 3114,
                  "end": 3119
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 3121,
                  "end": 3131
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3114,
                "end": 3131
              }
            ],
            "start": 3095,
            "end": 3133
          }
        ],
        "start": 3058,
        "end": 3134
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
                  "start": 3142,
                  "end": 3149
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3150,
                  "end": 3153
                },
                "optional": false,
                "computed": false,
                "start": 3142,
                "end": 3153
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3154,
                  "end": 3159
                }
              ],
              "optional": false,
              "start": 3142,
              "end": 3160
            },
            "directive": null,
            "start": 3142,
            "end": 3161
          }
        ],
        "start": 3136,
        "end": 3163
      },
      "start": 3035,
      "end": 3163
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3170,
              "end": 3174
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3170,
              "end": 3174
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 3170,
            "end": 3174
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
              "start": 3176,
              "end": 3182
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
                    "start": 3186,
                    "end": 3193
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3186,
                    "end": 3193
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3186,
                  "end": 3193
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
                    "start": 3195,
                    "end": 3204
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3195,
                    "end": 3204
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3195,
                  "end": 3204
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3184,
              "end": 3206
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 3176,
            "end": 3206
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 3169,
        "end": 3208
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 3212,
        "end": 3223
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
                  "start": 3231,
                  "end": 3238
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3239,
                  "end": 3242
                },
                "optional": false,
                "computed": false,
                "start": 3231,
                "end": 3242
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3243,
                  "end": 3248
                }
              ],
              "optional": false,
              "start": 3231,
              "end": 3249
            },
            "directive": null,
            "start": 3231,
            "end": 3250
          }
        ],
        "start": 3225,
        "end": 3252
      },
      "start": 3164,
      "end": 3252
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3259,
              "end": 3263
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3259,
              "end": 3263
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 3259,
            "end": 3263
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
              "start": 3265,
              "end": 3271
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
                    "start": 3275,
                    "end": 3282
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3275,
                    "end": 3282
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3275,
                  "end": 3282
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
                    "start": 3284,
                    "end": 3293
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3284,
                    "end": 3293
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3284,
                  "end": 3293
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3273,
              "end": 3295
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 3265,
            "end": 3295
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 3258,
        "end": 3297
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 3301,
          "end": 3315
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 3301,
        "end": 3317
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
                  "start": 3325,
                  "end": 3332
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3333,
                  "end": 3336
                },
                "optional": false,
                "computed": false,
                "start": 3325,
                "end": 3336
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3337,
                  "end": 3342
                }
              ],
              "optional": false,
              "start": 3325,
              "end": 3343
            },
            "directive": null,
            "start": 3325,
            "end": 3344
          }
        ],
        "start": 3319,
        "end": 3346
      },
      "start": 3253,
      "end": 3346
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3353,
              "end": 3357
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3353,
              "end": 3357
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 3353,
            "end": 3357
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
              "start": 3359,
              "end": 3365
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
                    "start": 3369,
                    "end": 3376
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3369,
                    "end": 3376
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3369,
                  "end": 3376
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
                    "start": 3378,
                    "end": 3387
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3378,
                    "end": 3387
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3378,
                  "end": 3387
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3367,
              "end": 3389
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 3359,
            "end": 3389
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 3352,
        "end": 3391
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
                  "start": 3398,
                  "end": 3402
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 3404,
                  "end": 3411
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3398,
                "end": 3411
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
                  "start": 3413,
                  "end": 3419
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
                        "start": 3423,
                        "end": 3430
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 3432,
                        "end": 3440
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3423,
                      "end": 3440
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
                        "start": 3442,
                        "end": 3451
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 3453,
                        "end": 3459
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3442,
                      "end": 3459
                    }
                  ],
                  "start": 3421,
                  "end": 3461
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3413,
                "end": 3461
              }
            ],
            "start": 3396,
            "end": 3463
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
                  "start": 3471,
                  "end": 3475
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 3477,
                  "end": 3486
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3471,
                "end": 3486
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
                  "start": 3488,
                  "end": 3494
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
                        "start": 3498,
                        "end": 3505
                      },
                      "value": {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 3507,
                        "end": 3517
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3498,
                      "end": 3517
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
                        "start": 3519,
                        "end": 3528
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 3530,
                        "end": 3538
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3519,
                      "end": 3538
                    }
                  ],
                  "start": 3496,
                  "end": 3540
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3488,
                "end": 3540
              }
            ],
            "start": 3469,
            "end": 3542
          }
        ],
        "start": 3395,
        "end": 3543
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
                  "start": 3551,
                  "end": 3558
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3559,
                  "end": 3562
                },
                "optional": false,
                "computed": false,
                "start": 3551,
                "end": 3562
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3563,
                  "end": 3568
                }
              ],
              "optional": false,
              "start": 3551,
              "end": 3569
            },
            "directive": null,
            "start": 3551,
            "end": 3570
          }
        ],
        "start": 3545,
        "end": 3572
      },
      "start": 3347,
      "end": 3572
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3572
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
    "value": "let",
    "start": 608,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 612,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 619,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 627,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 637,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 645,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 657,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 668,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 676,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 684,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 692,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 696,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 702,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 710,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 719,
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
    "value": "secondary",
    "start": 727,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 738,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 746,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 753,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 762,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "start": 768,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 774,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 782,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 785,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 799,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 807,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 811,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 819,
    "end": 820
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 821,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 827,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 833,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 841,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 844,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 854,
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
    "value": "nameA",
    "start": 875,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 885,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 891,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 897,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 905,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 911,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 915,
    "end": 916
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 917,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 926,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 931,
    "end": 932
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 933,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 947,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 951,
    "end": 952
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 953,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 964,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 969,
    "end": 970
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 971,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 984,
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
    "value": "console",
    "start": 992,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1000,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1004,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1014,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1021,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1031,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1040,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1050,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1061,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "of",
    "start": 1076,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 1079,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1098,
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
    "value": "log",
    "start": 1106,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1110,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1123,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1130,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1140,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1149,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1159,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1170,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1185,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 1188,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1202,
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
    "value": ")",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1212,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1220,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1224,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1235,
    "end": 1236
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
    "type": "Punctuator",
    "value": "{",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1244,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1254,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1263,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1273,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1284,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1299,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1305,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 1311,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1320,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1330,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 1339,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1349,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1360,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1367,
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
    "value": ",",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1378,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1384,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1395,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1405,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1414,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1426,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1437,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1458,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1466,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1470,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1483,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1489,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1496,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 1499,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1513,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1521,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1525,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1535,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1541,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1548,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 1551,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1561,
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
    "value": "{",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1570,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1578,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1582,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1592,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1598,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1605,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1611,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 1617,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1626,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 1633,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1647,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1653,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1664,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1671,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1692,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1700,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1704,
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
    "value": ";",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1714,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1721,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1731,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1740,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1754,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 1757,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1776,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1784,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1788,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1801,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": ",",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1827,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1841,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 1844,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1868,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1876,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1880,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1893,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1900,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1910,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1919,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1933,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1939,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 1945,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1954,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1964,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 1973,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1983,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1994,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2012,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2018,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2029,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2039,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2048,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2060,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 2071,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2092,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2100,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2104,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2119,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2125,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2131,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2138,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 2145,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2154,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 2157,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2171,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2179,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2183,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2193,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2199,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2205,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2212,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 2219,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2228,
    "end": 2230
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 2231,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2250,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2258,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2262,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2272,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2278,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2284,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2291,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 2298,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2307,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2313,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 2319,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2328,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 2335,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2349,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2355,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2366,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2373,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2394,
    "end": 2401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2402,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2406,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2416,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2422,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2428,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2435,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2445,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2454,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2464,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 2475,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2490,
    "end": 2492
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 2493,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2512,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2520,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2524,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2534,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2540,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2546,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2553,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2563,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2572,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2582,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 2593,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2608,
    "end": 2610
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 2611,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2629,
    "end": 2630
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2635,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2643,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2647,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2657,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2663,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2667,
    "end": 2668
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2669,
    "end": 2674
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2676,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2686,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2695,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2705,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 2716,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2731,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2737,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 2743,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2752,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2762,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 2771,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2781,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2792,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2810,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2816,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2827,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2837,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2846,
    "end": 2856
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2858,
    "end": 2867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 2869,
    "end": 2877
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2890,
    "end": 2897
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2898,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2902,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2912,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2918,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2924,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2932,
    "end": 2934
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 2935,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2949,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2957,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2961,
    "end": 2966
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2966,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2971,
    "end": 2974
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2977,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2983,
    "end": 2988
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2991,
    "end": 2993
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 2994,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3013,
    "end": 3020
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3021,
    "end": 3024
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3025,
    "end": 3030
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3035,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3040,
    "end": 3041
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3041,
    "end": 3045
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 3047,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 3055,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3061,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 3067,
    "end": 3074
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3074,
    "end": 3075
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 3076,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 3083,
    "end": 3091
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3097,
    "end": 3101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3101,
    "end": 3102
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 3103,
    "end": 3112
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 3114,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 3121,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3142,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3150,
    "end": 3153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3153,
    "end": 3154
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3154,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3164,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3170,
    "end": 3174
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3176,
    "end": 3182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3182,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3184,
    "end": 3185
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3186,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3193,
    "end": 3194
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3195,
    "end": 3204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3205,
    "end": 3206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 3209,
    "end": 3211
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 3212,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3231,
    "end": 3238
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3238,
    "end": 3239
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3239,
    "end": 3242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3242,
    "end": 3243
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3243,
    "end": 3248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3248,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3253,
    "end": 3256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3259,
    "end": 3263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3265,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3273,
    "end": 3274
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3275,
    "end": 3282
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3284,
    "end": 3293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3294,
    "end": 3295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3296,
    "end": 3297
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 3298,
    "end": 3300
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 3301,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3316,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3319,
    "end": 3320
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3325,
    "end": 3332
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3333,
    "end": 3336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3337,
    "end": 3342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3342,
    "end": 3343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3343,
    "end": 3344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3347,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3353,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3359,
    "end": 3365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3365,
    "end": 3366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3369,
    "end": 3376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3376,
    "end": 3377
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3378,
    "end": 3387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3388,
    "end": 3389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3390,
    "end": 3391
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 3392,
    "end": 3394
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3395,
    "end": 3396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3396,
    "end": 3397
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3398,
    "end": 3402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 3404,
    "end": 3411
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3411,
    "end": 3412
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3413,
    "end": 3419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3421,
    "end": 3422
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3423,
    "end": 3430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3430,
    "end": 3431
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 3432,
    "end": 3440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3442,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 3453,
    "end": 3459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3460,
    "end": 3461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3462,
    "end": 3463
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3471,
    "end": 3475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3475,
    "end": 3476
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 3477,
    "end": 3486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3486,
    "end": 3487
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3488,
    "end": 3494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3498,
    "end": 3505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3505,
    "end": 3506
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 3507,
    "end": 3517
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3517,
    "end": 3518
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3519,
    "end": 3528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3528,
    "end": 3529
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 3530,
    "end": 3538
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3541,
    "end": 3542
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3542,
    "end": 3543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3543,
    "end": 3544
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3545,
    "end": 3546
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3551,
    "end": 3558
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3558,
    "end": 3559
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3559,
    "end": 3562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3562,
    "end": 3563
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3563,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3568,
    "end": 3569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3571,
    "end": 3572
  }
]
```
