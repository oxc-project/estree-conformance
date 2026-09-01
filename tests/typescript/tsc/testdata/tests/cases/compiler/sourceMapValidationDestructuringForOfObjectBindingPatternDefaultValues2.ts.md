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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameA",
                "optional": false,
                "typeAnnotation": null,
                "start": 774,
                "end": 779
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 782,
                "end": 790
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 774,
              "end": 790
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 768,
            "end": 790
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 767,
        "end": 792
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 796,
        "end": 802
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
                  "start": 810,
                  "end": 817
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 818,
                  "end": 821
                },
                "optional": false,
                "computed": false,
                "start": 810,
                "end": 821
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 822,
                  "end": 827
                }
              ],
              "optional": false,
              "start": 810,
              "end": 828
            },
            "directive": null,
            "start": 810,
            "end": 829
          }
        ],
        "start": 804,
        "end": 831
      },
      "start": 762,
      "end": 831
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
              "start": 838,
              "end": 842
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
                "start": 844,
                "end": 849
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 852,
                "end": 860
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 844,
              "end": 860
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 838,
            "end": 860
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 837,
        "end": 862
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 866,
          "end": 875
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 866,
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
      "start": 832,
      "end": 906
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
              "start": 913,
              "end": 917
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
                "start": 919,
                "end": 924
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 927,
                "end": 935
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 919,
              "end": 935
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 913,
            "end": 935
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 912,
        "end": 937
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
                  "start": 944,
                  "end": 948
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 950,
                  "end": 957
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 944,
                "end": 957
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
                  "start": 959,
                  "end": 964
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 966,
                  "end": 974
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 959,
                "end": 974
              }
            ],
            "start": 942,
            "end": 976
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
                  "start": 980,
                  "end": 984
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 986,
                  "end": 995
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 980,
                "end": 995
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
                  "start": 997,
                  "end": 1002
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1004,
                  "end": 1014
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 997,
                "end": 1014
              }
            ],
            "start": 978,
            "end": 1016
          }
        ],
        "start": 941,
        "end": 1017
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
                  "start": 1025,
                  "end": 1032
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1033,
                  "end": 1036
                },
                "optional": false,
                "computed": false,
                "start": 1025,
                "end": 1036
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1037,
                  "end": 1042
                }
              ],
              "optional": false,
              "start": 1025,
              "end": 1043
            },
            "directive": null,
            "start": 1025,
            "end": 1044
          }
        ],
        "start": 1019,
        "end": 1046
      },
      "start": 907,
      "end": 1046
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
              "start": 1054,
              "end": 1060
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
                      "start": 1064,
                      "end": 1071
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
                        "start": 1073,
                        "end": 1081
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 1084,
                        "end": 1093
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1073,
                      "end": 1093
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1064,
                    "end": 1093
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
                      "start": 1095,
                      "end": 1104
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
                        "start": 1106,
                        "end": 1116
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 1119,
                        "end": 1130
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1106,
                      "end": 1130
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1095,
                    "end": 1130
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1062,
                "end": 1132
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
                      "start": 1141,
                      "end": 1148
                    },
                    "value": {
                      "type": "Literal",
                      "value": "nosKill",
                      "raw": "\"nosKill\"",
                      "start": 1150,
                      "end": 1159
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1141,
                    "end": 1159
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
                      "start": 1161,
                      "end": 1170
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1172,
                      "end": 1181
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1161,
                    "end": 1181
                  }
                ],
                "start": 1139,
                "end": 1183
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1062,
              "end": 1183
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1054,
            "end": 1183
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1052,
        "end": 1185
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1189,
        "end": 1200
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
                  "start": 1208,
                  "end": 1215
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1216,
                  "end": 1219
                },
                "optional": false,
                "computed": false,
                "start": 1208,
                "end": 1219
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1220,
                  "end": 1228
                }
              ],
              "optional": false,
              "start": 1208,
              "end": 1229
            },
            "directive": null,
            "start": 1208,
            "end": 1230
          }
        ],
        "start": 1202,
        "end": 1232
      },
      "start": 1047,
      "end": 1232
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
              "start": 1240,
              "end": 1246
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
                      "start": 1250,
                      "end": 1257
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
                        "start": 1259,
                        "end": 1267
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 1270,
                        "end": 1279
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1259,
                      "end": 1279
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1250,
                    "end": 1279
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
                      "start": 1281,
                      "end": 1290
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
                        "start": 1292,
                        "end": 1302
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 1305,
                        "end": 1316
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1292,
                      "end": 1316
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1281,
                    "end": 1316
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1248,
                "end": 1318
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
                      "start": 1327,
                      "end": 1334
                    },
                    "value": {
                      "type": "Literal",
                      "value": "nosKill",
                      "raw": "\"nosKill\"",
                      "start": 1336,
                      "end": 1345
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1327,
                    "end": 1345
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
                      "start": 1347,
                      "end": 1356
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1358,
                      "end": 1367
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1347,
                    "end": 1367
                  }
                ],
                "start": 1325,
                "end": 1369
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1248,
              "end": 1369
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1240,
            "end": 1369
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1238,
        "end": 1371
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1375,
          "end": 1389
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1375,
        "end": 1391
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
                  "start": 1399,
                  "end": 1406
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1407,
                  "end": 1410
                },
                "optional": false,
                "computed": false,
                "start": 1399,
                "end": 1410
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1411,
                  "end": 1419
                }
              ],
              "optional": false,
              "start": 1399,
              "end": 1420
            },
            "directive": null,
            "start": 1399,
            "end": 1421
          }
        ],
        "start": 1393,
        "end": 1423
      },
      "start": 1233,
      "end": 1423
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
              "start": 1431,
              "end": 1437
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
                      "start": 1441,
                      "end": 1448
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
                        "start": 1450,
                        "end": 1458
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 1461,
                        "end": 1470
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1450,
                      "end": 1470
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1441,
                    "end": 1470
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
                      "start": 1472,
                      "end": 1481
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
                        "start": 1483,
                        "end": 1493
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 1496,
                        "end": 1507
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1483,
                      "end": 1507
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1472,
                    "end": 1507
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1439,
                "end": 1509
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
                      "start": 1518,
                      "end": 1525
                    },
                    "value": {
                      "type": "Literal",
                      "value": "nosKill",
                      "raw": "\"nosKill\"",
                      "start": 1527,
                      "end": 1536
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1518,
                    "end": 1536
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
                      "start": 1538,
                      "end": 1547
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1549,
                      "end": 1558
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1538,
                    "end": 1558
                  }
                ],
                "start": 1516,
                "end": 1560
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1439,
              "end": 1560
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1431,
            "end": 1560
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1429,
        "end": 1562
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
              "start": 1571,
              "end": 1581
            },
            "typeArguments": null,
            "start": 1571,
            "end": 1581
          },
          "start": 1571,
          "end": 1583
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
                    "start": 1587,
                    "end": 1591
                  },
                  "value": {
                    "type": "Literal",
                    "value": "mower",
                    "raw": "\"mower\"",
                    "start": 1593,
                    "end": 1600
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1587,
                  "end": 1600
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
                    "start": 1602,
                    "end": 1608
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
                          "start": 1612,
                          "end": 1619
                        },
                        "value": {
                          "type": "Literal",
                          "value": "mowing",
                          "raw": "\"mowing\"",
                          "start": 1621,
                          "end": 1629
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1612,
                        "end": 1629
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
                          "start": 1631,
                          "end": 1640
                        },
                        "value": {
                          "type": "Literal",
                          "value": "none",
                          "raw": "\"none\"",
                          "start": 1642,
                          "end": 1648
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1631,
                        "end": 1648
                      }
                    ],
                    "start": 1610,
                    "end": 1650
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1602,
                  "end": 1650
                }
              ],
              "start": 1585,
              "end": 1652
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
                    "start": 1664,
                    "end": 1668
                  },
                  "value": {
                    "type": "Literal",
                    "value": "trimmer",
                    "raw": "\"trimmer\"",
                    "start": 1670,
                    "end": 1679
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1664,
                  "end": 1679
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
                    "start": 1681,
                    "end": 1687
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
                          "start": 1691,
                          "end": 1698
                        },
                        "value": {
                          "type": "Literal",
                          "value": "trimming",
                          "raw": "\"trimming\"",
                          "start": 1700,
                          "end": 1710
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1691,
                        "end": 1710
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
                          "start": 1712,
                          "end": 1721
                        },
                        "value": {
                          "type": "Literal",
                          "value": "edging",
                          "raw": "\"edging\"",
                          "start": 1723,
                          "end": 1731
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1712,
                        "end": 1731
                      }
                    ],
                    "start": 1689,
                    "end": 1733
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1681,
                  "end": 1733
                }
              ],
              "start": 1662,
              "end": 1735
            }
          ],
          "start": 1584,
          "end": 1736
        },
        "start": 1570,
        "end": 1736
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
                  "start": 1744,
                  "end": 1751
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1752,
                  "end": 1755
                },
                "optional": false,
                "computed": false,
                "start": 1744,
                "end": 1755
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1756,
                  "end": 1764
                }
              ],
              "optional": false,
              "start": 1744,
              "end": 1765
            },
            "directive": null,
            "start": 1744,
            "end": 1766
          }
        ],
        "start": 1738,
        "end": 1768
      },
      "start": 1424,
      "end": 1768
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
              "start": 1777,
              "end": 1781
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 1777,
                "end": 1781
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 1784,
                "end": 1792
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1777,
              "end": 1792
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 1777,
            "end": 1792
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1775,
        "end": 1794
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1798,
        "end": 1804
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
                  "start": 1812,
                  "end": 1819
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1820,
                  "end": 1823
                },
                "optional": false,
                "computed": false,
                "start": 1812,
                "end": 1823
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1824,
                  "end": 1829
                }
              ],
              "optional": false,
              "start": 1812,
              "end": 1830
            },
            "directive": null,
            "start": 1812,
            "end": 1831
          }
        ],
        "start": 1806,
        "end": 1833
      },
      "start": 1770,
      "end": 1833
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
              "start": 1841,
              "end": 1845
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 1841,
                "end": 1845
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 1848,
                "end": 1856
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1841,
              "end": 1856
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 1841,
            "end": 1856
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1839,
        "end": 1858
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1862,
          "end": 1871
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1862,
        "end": 1873
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
                  "start": 1881,
                  "end": 1888
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1889,
                  "end": 1892
                },
                "optional": false,
                "computed": false,
                "start": 1881,
                "end": 1892
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1893,
                  "end": 1898
                }
              ],
              "optional": false,
              "start": 1881,
              "end": 1899
            },
            "directive": null,
            "start": 1881,
            "end": 1900
          }
        ],
        "start": 1875,
        "end": 1902
      },
      "start": 1834,
      "end": 1902
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
              "start": 1910,
              "end": 1914
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 1910,
                "end": 1914
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 1917,
                "end": 1925
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1910,
              "end": 1925
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 1910,
            "end": 1925
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1908,
        "end": 1927
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
                  "start": 1934,
                  "end": 1938
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 1940,
                  "end": 1947
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1934,
                "end": 1947
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
                  "start": 1949,
                  "end": 1954
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 1956,
                  "end": 1964
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1949,
                "end": 1964
              }
            ],
            "start": 1932,
            "end": 1966
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
                  "start": 1970,
                  "end": 1974
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1976,
                  "end": 1985
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1970,
                "end": 1985
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
                  "start": 1987,
                  "end": 1992
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1994,
                  "end": 2004
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1987,
                "end": 2004
              }
            ],
            "start": 1968,
            "end": 2006
          }
        ],
        "start": 1931,
        "end": 2007
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
                  "start": 2015,
                  "end": 2022
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2023,
                  "end": 2026
                },
                "optional": false,
                "computed": false,
                "start": 2015,
                "end": 2026
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2027,
                  "end": 2032
                }
              ],
              "optional": false,
              "start": 2015,
              "end": 2033
            },
            "directive": null,
            "start": 2015,
            "end": 2034
          }
        ],
        "start": 2009,
        "end": 2036
      },
      "start": 1903,
      "end": 2036
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
              "start": 2048,
              "end": 2054
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
                      "start": 2066,
                      "end": 2073
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2066,
                        "end": 2073
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 2076,
                        "end": 2085
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2066,
                      "end": 2085
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2066,
                    "end": 2085
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
                      "start": 2095,
                      "end": 2104
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2095,
                        "end": 2104
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 2107,
                        "end": 2118
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2095,
                      "end": 2118
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2095,
                    "end": 2118
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 2056,
                "end": 2124
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
                      "start": 2129,
                      "end": 2136
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 2138,
                      "end": 2147
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2129,
                    "end": 2147
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
                      "start": 2149,
                      "end": 2158
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 2160,
                      "end": 2169
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2149,
                    "end": 2169
                  }
                ],
                "start": 2127,
                "end": 2171
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 2056,
              "end": 2171
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2048,
            "end": 2171
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2042,
        "end": 2173
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2177,
        "end": 2188
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
                  "start": 2196,
                  "end": 2203
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2204,
                  "end": 2207
                },
                "optional": false,
                "computed": false,
                "start": 2196,
                "end": 2207
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2208,
                  "end": 2216
                }
              ],
              "optional": false,
              "start": 2196,
              "end": 2217
            },
            "directive": null,
            "start": 2196,
            "end": 2218
          }
        ],
        "start": 2190,
        "end": 2220
      },
      "start": 2037,
      "end": 2220
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
              "start": 2232,
              "end": 2238
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
                      "start": 2250,
                      "end": 2257
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2250,
                        "end": 2257
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 2260,
                        "end": 2269
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2250,
                      "end": 2269
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2250,
                    "end": 2269
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
                      "start": 2279,
                      "end": 2288
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2279,
                        "end": 2288
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 2291,
                        "end": 2302
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2279,
                      "end": 2302
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2279,
                    "end": 2302
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 2240,
                "end": 2308
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
                      "start": 2313,
                      "end": 2320
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 2322,
                      "end": 2331
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2313,
                    "end": 2331
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
                      "start": 2333,
                      "end": 2342
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 2344,
                      "end": 2353
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2333,
                    "end": 2353
                  }
                ],
                "start": 2311,
                "end": 2355
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 2240,
              "end": 2355
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2232,
            "end": 2355
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2226,
        "end": 2357
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2361,
          "end": 2375
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2361,
        "end": 2377
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
                  "start": 2385,
                  "end": 2392
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2393,
                  "end": 2396
                },
                "optional": false,
                "computed": false,
                "start": 2385,
                "end": 2396
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2397,
                  "end": 2405
                }
              ],
              "optional": false,
              "start": 2385,
              "end": 2406
            },
            "directive": null,
            "start": 2385,
            "end": 2407
          }
        ],
        "start": 2379,
        "end": 2409
      },
      "start": 2221,
      "end": 2409
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
              "start": 2421,
              "end": 2427
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
                      "start": 2439,
                      "end": 2446
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2439,
                        "end": 2446
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 2449,
                        "end": 2458
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2439,
                      "end": 2458
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2439,
                    "end": 2458
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
                      "start": 2468,
                      "end": 2477
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2468,
                        "end": 2477
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 2480,
                        "end": 2491
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2468,
                      "end": 2491
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2468,
                    "end": 2491
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 2429,
                "end": 2497
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
                      "start": 2502,
                      "end": 2509
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 2511,
                      "end": 2520
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2502,
                    "end": 2520
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
                      "start": 2522,
                      "end": 2531
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 2533,
                      "end": 2542
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2522,
                    "end": 2542
                  }
                ],
                "start": 2500,
                "end": 2544
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 2429,
              "end": 2544
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2421,
            "end": 2544
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2415,
        "end": 2546
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
                  "start": 2553,
                  "end": 2557
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 2559,
                  "end": 2566
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2553,
                "end": 2566
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
                  "start": 2568,
                  "end": 2574
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
                        "start": 2578,
                        "end": 2585
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 2587,
                        "end": 2595
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2578,
                      "end": 2595
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
                        "start": 2597,
                        "end": 2606
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2608,
                        "end": 2614
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2597,
                      "end": 2614
                    }
                  ],
                  "start": 2576,
                  "end": 2616
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2568,
                "end": 2616
              }
            ],
            "start": 2551,
            "end": 2618
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
                  "start": 2626,
                  "end": 2630
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2632,
                  "end": 2641
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2626,
                "end": 2641
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
                  "start": 2643,
                  "end": 2649
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
                        "start": 2653,
                        "end": 2660
                      },
                      "value": {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 2662,
                        "end": 2672
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2653,
                      "end": 2672
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
                        "start": 2674,
                        "end": 2683
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 2685,
                        "end": 2693
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2674,
                      "end": 2693
                    }
                  ],
                  "start": 2651,
                  "end": 2695
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2643,
                "end": 2695
              }
            ],
            "start": 2624,
            "end": 2697
          }
        ],
        "start": 2550,
        "end": 2698
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
                  "start": 2706,
                  "end": 2713
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2714,
                  "end": 2717
                },
                "optional": false,
                "computed": false,
                "start": 2706,
                "end": 2717
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2718,
                  "end": 2726
                }
              ],
              "optional": false,
              "start": 2706,
              "end": 2727
            },
            "directive": null,
            "start": 2706,
            "end": 2728
          }
        ],
        "start": 2700,
        "end": 2730
      },
      "start": 2410,
      "end": 2730
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
              "start": 2739,
              "end": 2743
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
                "start": 2745,
                "end": 2750
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 2753,
                "end": 2761
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 2745,
              "end": 2761
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2739,
            "end": 2761
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
              "start": 2763,
              "end": 2768
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
                "start": 2770,
                "end": 2776
              },
              "right": {
                "type": "Literal",
                "value": "noSkill",
                "raw": "\"noSkill\"",
                "start": 2779,
                "end": 2788
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 2770,
              "end": 2788
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2763,
            "end": 2788
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2738,
        "end": 2790
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2794,
        "end": 2800
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
                  "start": 2808,
                  "end": 2815
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2816,
                  "end": 2819
                },
                "optional": false,
                "computed": false,
                "start": 2808,
                "end": 2819
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2820,
                  "end": 2825
                }
              ],
              "optional": false,
              "start": 2808,
              "end": 2826
            },
            "directive": null,
            "start": 2808,
            "end": 2827
          }
        ],
        "start": 2802,
        "end": 2829
      },
      "start": 2733,
      "end": 2829
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
              "start": 2836,
              "end": 2840
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
                "start": 2842,
                "end": 2847
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 2850,
                "end": 2858
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 2842,
              "end": 2858
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2836,
            "end": 2858
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
              "start": 2860,
              "end": 2865
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
                "start": 2867,
                "end": 2873
              },
              "right": {
                "type": "Literal",
                "value": "noSkill",
                "raw": "\"noSkill\"",
                "start": 2876,
                "end": 2885
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 2867,
              "end": 2885
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2860,
            "end": 2885
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2835,
        "end": 2888
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2892,
          "end": 2901
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2892,
        "end": 2903
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
                  "start": 2911,
                  "end": 2918
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2919,
                  "end": 2922
                },
                "optional": false,
                "computed": false,
                "start": 2911,
                "end": 2922
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2923,
                  "end": 2928
                }
              ],
              "optional": false,
              "start": 2911,
              "end": 2929
            },
            "directive": null,
            "start": 2911,
            "end": 2930
          }
        ],
        "start": 2905,
        "end": 2932
      },
      "start": 2830,
      "end": 2932
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
              "start": 2939,
              "end": 2943
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
                "start": 2945,
                "end": 2950
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 2953,
                "end": 2961
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 2945,
              "end": 2961
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2939,
            "end": 2961
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
              "start": 2963,
              "end": 2968
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
                "start": 2970,
                "end": 2976
              },
              "right": {
                "type": "Literal",
                "value": "noSkill",
                "raw": "\"noSkill\"",
                "start": 2979,
                "end": 2988
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 2970,
              "end": 2988
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 2963,
            "end": 2988
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2938,
        "end": 2991
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
                  "start": 2998,
                  "end": 3002
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 3004,
                  "end": 3011
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2998,
                "end": 3011
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
                  "start": 3013,
                  "end": 3018
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 3020,
                  "end": 3028
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3013,
                "end": 3028
              }
            ],
            "start": 2996,
            "end": 3030
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
                  "start": 3034,
                  "end": 3038
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 3040,
                  "end": 3049
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3034,
                "end": 3049
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
                  "start": 3051,
                  "end": 3056
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 3058,
                  "end": 3068
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3051,
                "end": 3068
              }
            ],
            "start": 3032,
            "end": 3070
          }
        ],
        "start": 2995,
        "end": 3071
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
                  "start": 3079,
                  "end": 3086
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3087,
                  "end": 3090
                },
                "optional": false,
                "computed": false,
                "start": 3079,
                "end": 3090
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3091,
                  "end": 3096
                }
              ],
              "optional": false,
              "start": 3079,
              "end": 3097
            },
            "directive": null,
            "start": 3079,
            "end": 3098
          }
        ],
        "start": 3073,
        "end": 3100
      },
      "start": 2933,
      "end": 3100
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
              "start": 3112,
              "end": 3116
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
                "start": 3118,
                "end": 3123
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 3126,
                "end": 3134
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 3118,
              "end": 3134
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 3112,
            "end": 3134
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
              "start": 3140,
              "end": 3146
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
                      "start": 3158,
                      "end": 3165
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
                        "start": 3167,
                        "end": 3175
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 3178,
                        "end": 3187
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3167,
                      "end": 3187
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3158,
                    "end": 3187
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
                      "start": 3197,
                      "end": 3206
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
                        "start": 3208,
                        "end": 3218
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 3221,
                        "end": 3232
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3208,
                      "end": 3232
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3197,
                    "end": 3232
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 3148,
                "end": 3238
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
                      "start": 3243,
                      "end": 3250
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 3252,
                      "end": 3261
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3243,
                    "end": 3261
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
                      "start": 3263,
                      "end": 3272
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 3274,
                      "end": 3283
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3263,
                    "end": 3283
                  }
                ],
                "start": 3241,
                "end": 3285
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 3148,
              "end": 3285
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 3140,
            "end": 3285
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 3106,
        "end": 3287
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 3291,
        "end": 3302
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
                  "start": 3310,
                  "end": 3317
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3318,
                  "end": 3321
                },
                "optional": false,
                "computed": false,
                "start": 3310,
                "end": 3321
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3322,
                  "end": 3327
                }
              ],
              "optional": false,
              "start": 3310,
              "end": 3328
            },
            "directive": null,
            "start": 3310,
            "end": 3329
          }
        ],
        "start": 3304,
        "end": 3331
      },
      "start": 3101,
      "end": 3331
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
              "start": 3343,
              "end": 3347
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
                "start": 3349,
                "end": 3354
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 3357,
                "end": 3365
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 3349,
              "end": 3365
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 3343,
            "end": 3365
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
              "start": 3371,
              "end": 3377
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
                      "start": 3389,
                      "end": 3396
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
                        "start": 3398,
                        "end": 3406
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 3409,
                        "end": 3418
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3398,
                      "end": 3418
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3389,
                    "end": 3418
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
                      "start": 3428,
                      "end": 3437
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
                        "start": 3439,
                        "end": 3449
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 3452,
                        "end": 3463
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3439,
                      "end": 3463
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3428,
                    "end": 3463
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 3379,
                "end": 3469
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
                      "start": 3474,
                      "end": 3481
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 3483,
                      "end": 3492
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3474,
                    "end": 3492
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
                      "start": 3494,
                      "end": 3503
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 3505,
                      "end": 3514
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3494,
                    "end": 3514
                  }
                ],
                "start": 3472,
                "end": 3516
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 3379,
              "end": 3516
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 3371,
            "end": 3516
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 3337,
        "end": 3518
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 3522,
          "end": 3536
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 3522,
        "end": 3538
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
                  "start": 3546,
                  "end": 3553
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3554,
                  "end": 3557
                },
                "optional": false,
                "computed": false,
                "start": 3546,
                "end": 3557
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3558,
                  "end": 3563
                }
              ],
              "optional": false,
              "start": 3546,
              "end": 3564
            },
            "directive": null,
            "start": 3546,
            "end": 3565
          }
        ],
        "start": 3540,
        "end": 3567
      },
      "start": 3332,
      "end": 3567
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
              "start": 3579,
              "end": 3583
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
                "start": 3585,
                "end": 3590
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 3593,
                "end": 3601
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 3585,
              "end": 3601
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 3579,
            "end": 3601
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
              "start": 3607,
              "end": 3613
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
                      "start": 3625,
                      "end": 3632
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
                        "start": 3634,
                        "end": 3642
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 3645,
                        "end": 3654
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3634,
                      "end": 3654
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3625,
                    "end": 3654
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
                      "start": 3664,
                      "end": 3673
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
                        "start": 3675,
                        "end": 3685
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 3688,
                        "end": 3699
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3675,
                      "end": 3699
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3664,
                    "end": 3699
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 3615,
                "end": 3705
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
                      "start": 3710,
                      "end": 3717
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 3719,
                      "end": 3728
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3710,
                    "end": 3728
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
                      "start": 3730,
                      "end": 3739
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 3741,
                      "end": 3750
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3730,
                    "end": 3750
                  }
                ],
                "start": 3708,
                "end": 3752
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 3615,
              "end": 3752
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 3607,
            "end": 3752
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 3573,
        "end": 3754
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
              "start": 3759,
              "end": 3769
            },
            "typeArguments": null,
            "start": 3759,
            "end": 3769
          },
          "start": 3759,
          "end": 3771
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
                    "start": 3775,
                    "end": 3779
                  },
                  "value": {
                    "type": "Literal",
                    "value": "mower",
                    "raw": "\"mower\"",
                    "start": 3781,
                    "end": 3788
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3775,
                  "end": 3788
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
                    "start": 3790,
                    "end": 3796
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
                          "start": 3800,
                          "end": 3807
                        },
                        "value": {
                          "type": "Literal",
                          "value": "mowing",
                          "raw": "\"mowing\"",
                          "start": 3809,
                          "end": 3817
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 3800,
                        "end": 3817
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
                          "start": 3819,
                          "end": 3828
                        },
                        "value": {
                          "type": "Literal",
                          "value": "none",
                          "raw": "\"none\"",
                          "start": 3830,
                          "end": 3836
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 3819,
                        "end": 3836
                      }
                    ],
                    "start": 3798,
                    "end": 3838
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3790,
                  "end": 3838
                }
              ],
              "start": 3773,
              "end": 3840
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
                    "start": 3848,
                    "end": 3852
                  },
                  "value": {
                    "type": "Literal",
                    "value": "trimmer",
                    "raw": "\"trimmer\"",
                    "start": 3854,
                    "end": 3863
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3848,
                  "end": 3863
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
                    "start": 3865,
                    "end": 3871
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
                          "start": 3875,
                          "end": 3882
                        },
                        "value": {
                          "type": "Literal",
                          "value": "trimming",
                          "raw": "\"trimming\"",
                          "start": 3884,
                          "end": 3894
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 3875,
                        "end": 3894
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
                          "start": 3896,
                          "end": 3905
                        },
                        "value": {
                          "type": "Literal",
                          "value": "edging",
                          "raw": "\"edging\"",
                          "start": 3907,
                          "end": 3915
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 3896,
                        "end": 3915
                      }
                    ],
                    "start": 3873,
                    "end": 3917
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3865,
                  "end": 3917
                }
              ],
              "start": 3846,
              "end": 3919
            }
          ],
          "start": 3772,
          "end": 3920
        },
        "start": 3758,
        "end": 3920
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
                  "start": 3928,
                  "end": 3935
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3936,
                  "end": 3939
                },
                "optional": false,
                "computed": false,
                "start": 3928,
                "end": 3939
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3940,
                  "end": 3945
                }
              ],
              "optional": false,
              "start": 3928,
              "end": 3946
            },
            "directive": null,
            "start": 3928,
            "end": 3947
          }
        ],
        "start": 3922,
        "end": 3949
      },
      "start": 3568,
      "end": 3949
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
              "start": 3958,
              "end": 3962
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 3958,
                "end": 3962
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 3965,
                "end": 3973
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 3958,
              "end": 3973
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 3958,
            "end": 3973
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
              "start": 3975,
              "end": 3980
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "skill",
                "optional": false,
                "typeAnnotation": null,
                "start": 3975,
                "end": 3980
              },
              "right": {
                "type": "Literal",
                "value": "noSkill",
                "raw": "\"noSkill\"",
                "start": 3984,
                "end": 3993
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 3975,
              "end": 3993
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 3975,
            "end": 3993
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 3956,
        "end": 3995
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 3999,
        "end": 4005
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
                  "start": 4013,
                  "end": 4020
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4021,
                  "end": 4024
                },
                "optional": false,
                "computed": false,
                "start": 4013,
                "end": 4024
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4025,
                  "end": 4030
                }
              ],
              "optional": false,
              "start": 4013,
              "end": 4031
            },
            "directive": null,
            "start": 4013,
            "end": 4032
          }
        ],
        "start": 4007,
        "end": 4034
      },
      "start": 3951,
      "end": 4034
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
              "start": 4042,
              "end": 4046
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 4042,
                "end": 4046
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 4049,
                "end": 4057
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 4042,
              "end": 4057
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 4042,
            "end": 4057
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
              "start": 4059,
              "end": 4064
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "skill",
                "optional": false,
                "typeAnnotation": null,
                "start": 4059,
                "end": 4064
              },
              "right": {
                "type": "Literal",
                "value": "noSkill",
                "raw": "\"noSkill\"",
                "start": 4067,
                "end": 4076
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 4059,
              "end": 4076
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 4059,
            "end": 4076
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 4040,
        "end": 4079
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 4083,
          "end": 4092
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 4083,
        "end": 4094
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
                  "start": 4102,
                  "end": 4109
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4110,
                  "end": 4113
                },
                "optional": false,
                "computed": false,
                "start": 4102,
                "end": 4113
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4114,
                  "end": 4119
                }
              ],
              "optional": false,
              "start": 4102,
              "end": 4120
            },
            "directive": null,
            "start": 4102,
            "end": 4121
          }
        ],
        "start": 4096,
        "end": 4123
      },
      "start": 4035,
      "end": 4123
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
              "start": 4131,
              "end": 4135
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 4131,
                "end": 4135
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 4138,
                "end": 4146
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 4131,
              "end": 4146
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 4131,
            "end": 4146
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
              "start": 4148,
              "end": 4153
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "skill",
                "optional": false,
                "typeAnnotation": null,
                "start": 4148,
                "end": 4153
              },
              "right": {
                "type": "Literal",
                "value": "noSkill",
                "raw": "\"noSkill\"",
                "start": 4157,
                "end": 4166
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 4148,
              "end": 4166
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 4148,
            "end": 4166
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 4129,
        "end": 4168
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
                  "start": 4175,
                  "end": 4179
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 4181,
                  "end": 4188
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4175,
                "end": 4188
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
                  "start": 4190,
                  "end": 4195
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 4197,
                  "end": 4205
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4190,
                "end": 4205
              }
            ],
            "start": 4173,
            "end": 4207
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
                  "start": 4211,
                  "end": 4215
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 4217,
                  "end": 4226
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4211,
                "end": 4226
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
                  "start": 4228,
                  "end": 4233
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 4235,
                  "end": 4245
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4228,
                "end": 4245
              }
            ],
            "start": 4209,
            "end": 4247
          }
        ],
        "start": 4172,
        "end": 4248
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
                  "start": 4256,
                  "end": 4263
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4264,
                  "end": 4267
                },
                "optional": false,
                "computed": false,
                "start": 4256,
                "end": 4267
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4268,
                  "end": 4273
                }
              ],
              "optional": false,
              "start": 4256,
              "end": 4274
            },
            "directive": null,
            "start": 4256,
            "end": 4275
          }
        ],
        "start": 4250,
        "end": 4277
      },
      "start": 4124,
      "end": 4277
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
              "start": 4289,
              "end": 4293
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 4289,
                "end": 4293
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 4296,
                "end": 4304
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 4289,
              "end": 4304
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 4289,
            "end": 4304
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
              "start": 4310,
              "end": 4316
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
                      "start": 4328,
                      "end": 4335
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4328,
                        "end": 4335
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 4338,
                        "end": 4347
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4328,
                      "end": 4347
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 4328,
                    "end": 4347
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
                      "start": 4357,
                      "end": 4366
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4357,
                        "end": 4366
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 4369,
                        "end": 4380
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4357,
                      "end": 4380
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 4357,
                    "end": 4380
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 4318,
                "end": 4386
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
                      "start": 4391,
                      "end": 4398
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 4400,
                      "end": 4409
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4391,
                    "end": 4409
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
                      "start": 4411,
                      "end": 4420
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 4422,
                      "end": 4431
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4411,
                    "end": 4431
                  }
                ],
                "start": 4389,
                "end": 4433
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 4318,
              "end": 4433
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 4310,
            "end": 4433
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 4283,
        "end": 4435
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 4439,
        "end": 4450
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
                  "start": 4458,
                  "end": 4465
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4466,
                  "end": 4469
                },
                "optional": false,
                "computed": false,
                "start": 4458,
                "end": 4469
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4470,
                  "end": 4475
                }
              ],
              "optional": false,
              "start": 4458,
              "end": 4476
            },
            "directive": null,
            "start": 4458,
            "end": 4477
          }
        ],
        "start": 4452,
        "end": 4479
      },
      "start": 4278,
      "end": 4479
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
              "start": 4491,
              "end": 4495
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 4491,
                "end": 4495
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 4498,
                "end": 4506
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 4491,
              "end": 4506
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 4491,
            "end": 4506
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
              "start": 4512,
              "end": 4518
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
                      "start": 4530,
                      "end": 4537
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4530,
                        "end": 4537
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 4540,
                        "end": 4549
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4530,
                      "end": 4549
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 4530,
                    "end": 4549
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
                      "start": 4559,
                      "end": 4568
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4559,
                        "end": 4568
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 4571,
                        "end": 4582
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4559,
                      "end": 4582
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 4559,
                    "end": 4582
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 4520,
                "end": 4588
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
                      "start": 4593,
                      "end": 4600
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 4602,
                      "end": 4611
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4593,
                    "end": 4611
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
                      "start": 4613,
                      "end": 4622
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 4624,
                      "end": 4633
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4613,
                    "end": 4633
                  }
                ],
                "start": 4591,
                "end": 4635
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 4520,
              "end": 4635
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 4512,
            "end": 4635
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 4485,
        "end": 4637
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 4641,
          "end": 4655
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 4641,
        "end": 4657
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
                  "start": 4665,
                  "end": 4672
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4673,
                  "end": 4676
                },
                "optional": false,
                "computed": false,
                "start": 4665,
                "end": 4676
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4677,
                  "end": 4682
                }
              ],
              "optional": false,
              "start": 4665,
              "end": 4683
            },
            "directive": null,
            "start": 4665,
            "end": 4684
          }
        ],
        "start": 4659,
        "end": 4686
      },
      "start": 4480,
      "end": 4686
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
              "start": 4698,
              "end": 4702
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 4698,
                "end": 4702
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 4705,
                "end": 4713
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 4698,
              "end": 4713
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 4698,
            "end": 4713
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
              "start": 4719,
              "end": 4725
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
                      "start": 4737,
                      "end": 4744
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4737,
                        "end": 4744
                      },
                      "right": {
                        "type": "Literal",
                        "value": "primary",
                        "raw": "\"primary\"",
                        "start": 4747,
                        "end": 4756
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4737,
                      "end": 4756
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 4737,
                    "end": 4756
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
                      "start": 4766,
                      "end": 4775
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4766,
                        "end": 4775
                      },
                      "right": {
                        "type": "Literal",
                        "value": "secondary",
                        "raw": "\"secondary\"",
                        "start": 4778,
                        "end": 4789
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4766,
                      "end": 4789
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 4766,
                    "end": 4789
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 4727,
                "end": 4795
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
                      "start": 4800,
                      "end": 4807
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 4809,
                      "end": 4818
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4800,
                    "end": 4818
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
                      "start": 4820,
                      "end": 4829
                    },
                    "value": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 4831,
                      "end": 4840
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4820,
                    "end": 4840
                  }
                ],
                "start": 4798,
                "end": 4842
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 4727,
              "end": 4842
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 4719,
            "end": 4842
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 4692,
        "end": 4844
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
                  "start": 4851,
                  "end": 4855
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 4857,
                  "end": 4864
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4851,
                "end": 4864
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
                  "start": 4866,
                  "end": 4872
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
                        "start": 4876,
                        "end": 4883
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 4885,
                        "end": 4893
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4876,
                      "end": 4893
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
                        "start": 4895,
                        "end": 4904
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 4906,
                        "end": 4912
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4895,
                      "end": 4912
                    }
                  ],
                  "start": 4874,
                  "end": 4914
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4866,
                "end": 4914
              }
            ],
            "start": 4849,
            "end": 4916
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
                  "start": 4924,
                  "end": 4928
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 4930,
                  "end": 4939
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4924,
                "end": 4939
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
                  "start": 4941,
                  "end": 4947
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
                        "start": 4951,
                        "end": 4958
                      },
                      "value": {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 4960,
                        "end": 4970
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4951,
                      "end": 4970
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
                        "start": 4972,
                        "end": 4981
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 4983,
                        "end": 4991
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4972,
                      "end": 4991
                    }
                  ],
                  "start": 4949,
                  "end": 4993
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4941,
                "end": 4993
              }
            ],
            "start": 4922,
            "end": 4995
          }
        ],
        "start": 4848,
        "end": 4996
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
                  "start": 5004,
                  "end": 5011
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5012,
                  "end": 5015
                },
                "optional": false,
                "computed": false,
                "start": 5004,
                "end": 5015
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5016,
                  "end": 5021
                }
              ],
              "optional": false,
              "start": 5004,
              "end": 5022
            },
            "directive": null,
            "start": 5004,
            "end": 5023
          }
        ],
        "start": 4998,
        "end": 5025
      },
      "start": 4687,
      "end": 5025
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 5025
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
    "value": "=",
    "start": 780,
    "end": 781
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 782,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 793,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 796,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 810,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 818,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 822,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 830,
    "end": 831
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 832,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 838,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 844,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 850,
    "end": 851
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 852,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 863,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 866,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "{",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 913,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 919,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 925,
    "end": 926
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 927,
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
    "type": "Punctuator",
    "value": "[",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 944,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 948,
    "end": 949
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 950,
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
    "value": "skill",
    "start": 959,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 966,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 980,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 984,
    "end": 985
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 986,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 997,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1004,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1025,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1033,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1037,
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
    "value": ";",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1047,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1054,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1064,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1073,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1084,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1095,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1106,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1119,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1141,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "String",
    "value": "\"nosKill\"",
    "start": 1150,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1161,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1172,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1186,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 1189,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1208,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1216,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1220,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1233,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1240,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1250,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1259,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1270,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1281,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1292,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1305,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "{",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1327,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "String",
    "value": "\"nosKill\"",
    "start": 1336,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1347,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1358,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1372,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 1375,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1399,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1407,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1411,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1424,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1431,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1441,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1450,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1461,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1472,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1483,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1496,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1518,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "String",
    "value": "\"nosKill\"",
    "start": 1527,
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
    "value": "secondary",
    "start": 1538,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 1549,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1563,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 1571,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1587,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 1593,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1602,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1612,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 1621,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1631,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1642,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1664,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1670,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1681,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1691,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1700,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1712,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1723,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1744,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1752,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1756,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "for",
    "start": 1770,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1777,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1784,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1795,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 1798,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1812,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1820,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1824,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1834,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1841,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1848,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1859,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 1862,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1881,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1889,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1893,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1903,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1910,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1917,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1928,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1934,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 1940,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1949,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 1956,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1970,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1976,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1987,
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
    "value": "\"trimming\"",
    "start": 1994,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2015,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2023,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2027,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2037,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2048,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2066,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2076,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2095,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2107,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2129,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2138,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2149,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2160,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2174,
    "end": 2176
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 2177,
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
    "value": "{",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2196,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2204,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2208,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2221,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2232,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2250,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2260,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2279,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2291,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2313,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2322,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2333,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2344,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2358,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 2361,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2385,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2393,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2397,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2410,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2421,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2439,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2449,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2468,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2480,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2502,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2511,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2522,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2533,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2547,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2553,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 2559,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2568,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2578,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 2587,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2597,
    "end": 2606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2608,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2626,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2632,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2643,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2653,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2662,
    "end": 2672
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2674,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 2685,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2706,
    "end": 2713
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2714,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2718,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "for",
    "start": 2733,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2739,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2745,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2753,
    "end": 2761
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2763,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 2770,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2779,
    "end": 2788
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2791,
    "end": 2793
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 2794,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "console",
    "start": 2808,
    "end": 2815
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2816,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2820,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2830,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2836,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2842,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2850,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2860,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2865,
    "end": 2866
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 2867,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2876,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2889,
    "end": 2891
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 2892,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2911,
    "end": 2918
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2919,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2923,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2933,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2939,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2945,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2953,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2963,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 2970,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 2979,
    "end": 2988
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2992,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2998,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 3004,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 3013,
    "end": 3018
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3018,
    "end": 3019
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 3020,
    "end": 3028
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3029,
    "end": 3030
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3032,
    "end": 3033
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3034,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 3040,
    "end": 3049
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3049,
    "end": 3050
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 3051,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 3058,
    "end": 3068
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3069,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3071,
    "end": 3072
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3079,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3087,
    "end": 3090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3091,
    "end": 3096
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3096,
    "end": 3097
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3097,
    "end": 3098
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3099,
    "end": 3100
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3101,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3112,
    "end": 3116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3118,
    "end": 3123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 3126,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3140,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3148,
    "end": 3149
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3158,
    "end": 3165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3165,
    "end": 3166
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 3167,
    "end": 3175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3176,
    "end": 3177
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 3178,
    "end": 3187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3197,
    "end": 3206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 3208,
    "end": 3218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 3221,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3241,
    "end": 3242
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3243,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 3252,
    "end": 3261
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3261,
    "end": 3262
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3263,
    "end": 3272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 3274,
    "end": 3283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3284,
    "end": 3285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 3288,
    "end": 3290
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 3291,
    "end": 3302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3310,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3318,
    "end": 3321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3321,
    "end": 3322
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3322,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3332,
    "end": 3335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3337,
    "end": 3338
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3343,
    "end": 3347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3349,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3355,
    "end": 3356
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 3357,
    "end": 3365
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3365,
    "end": 3366
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3371,
    "end": 3377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3377,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3379,
    "end": 3380
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3389,
    "end": 3396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3396,
    "end": 3397
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 3398,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 3409,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3428,
    "end": 3437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 3439,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 3452,
    "end": 3463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3468,
    "end": 3469
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3472,
    "end": 3473
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3474,
    "end": 3481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3481,
    "end": 3482
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 3483,
    "end": 3492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3492,
    "end": 3493
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3494,
    "end": 3503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3503,
    "end": 3504
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 3505,
    "end": 3514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3515,
    "end": 3516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3517,
    "end": 3518
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 3519,
    "end": 3521
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 3522,
    "end": 3536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3536,
    "end": 3537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3537,
    "end": 3538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3538,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3540,
    "end": 3541
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3546,
    "end": 3553
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3553,
    "end": 3554
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3554,
    "end": 3557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3558,
    "end": 3563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3563,
    "end": 3564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3564,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3566,
    "end": 3567
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3568,
    "end": 3571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3572,
    "end": 3573
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3573,
    "end": 3574
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3579,
    "end": 3583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3583,
    "end": 3584
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3585,
    "end": 3590
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3591,
    "end": 3592
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 3593,
    "end": 3601
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3601,
    "end": 3602
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3607,
    "end": 3613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3625,
    "end": 3632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3632,
    "end": 3633
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 3634,
    "end": 3642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 3645,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3664,
    "end": 3673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3673,
    "end": 3674
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 3675,
    "end": 3685
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3686,
    "end": 3687
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 3688,
    "end": 3699
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3704,
    "end": 3705
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3706,
    "end": 3707
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3708,
    "end": 3709
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3710,
    "end": 3717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3717,
    "end": 3718
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 3719,
    "end": 3728
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3728,
    "end": 3729
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3730,
    "end": 3739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 3741,
    "end": 3750
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3751,
    "end": 3752
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3753,
    "end": 3754
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 3755,
    "end": 3757
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3758,
    "end": 3759
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 3759,
    "end": 3769
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3769,
    "end": 3770
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3770,
    "end": 3771
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3771,
    "end": 3772
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3772,
    "end": 3773
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3773,
    "end": 3774
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3775,
    "end": 3779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3779,
    "end": 3780
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 3781,
    "end": 3788
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3788,
    "end": 3789
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3790,
    "end": 3796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3796,
    "end": 3797
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3798,
    "end": 3799
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3800,
    "end": 3807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3807,
    "end": 3808
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 3809,
    "end": 3817
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3817,
    "end": 3818
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3819,
    "end": 3828
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3828,
    "end": 3829
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 3830,
    "end": 3836
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3837,
    "end": 3838
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3839,
    "end": 3840
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3840,
    "end": 3841
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3846,
    "end": 3847
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3848,
    "end": 3852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3852,
    "end": 3853
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 3854,
    "end": 3863
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3863,
    "end": 3864
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3865,
    "end": 3871
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3871,
    "end": 3872
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3873,
    "end": 3874
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3875,
    "end": 3882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3882,
    "end": 3883
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 3884,
    "end": 3894
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3894,
    "end": 3895
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3896,
    "end": 3905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3905,
    "end": 3906
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 3907,
    "end": 3915
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3916,
    "end": 3917
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3918,
    "end": 3919
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3919,
    "end": 3920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3920,
    "end": 3921
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3922,
    "end": 3923
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3928,
    "end": 3935
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3935,
    "end": 3936
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3936,
    "end": 3939
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3939,
    "end": 3940
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3940,
    "end": 3945
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3945,
    "end": 3946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3946,
    "end": 3947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3948,
    "end": 3949
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3951,
    "end": 3954
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3955,
    "end": 3956
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3956,
    "end": 3957
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3958,
    "end": 3962
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3963,
    "end": 3964
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 3965,
    "end": 3973
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3973,
    "end": 3974
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 3975,
    "end": 3980
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3982,
    "end": 3983
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 3984,
    "end": 3993
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3994,
    "end": 3995
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 3996,
    "end": 3998
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 3999,
    "end": 4005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4005,
    "end": 4006
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4007,
    "end": 4008
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4013,
    "end": 4020
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4020,
    "end": 4021
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4021,
    "end": 4024
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4024,
    "end": 4025
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 4025,
    "end": 4030
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4030,
    "end": 4031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4031,
    "end": 4032
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4033,
    "end": 4034
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4035,
    "end": 4038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4039,
    "end": 4040
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4040,
    "end": 4041
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4042,
    "end": 4046
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4047,
    "end": 4048
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 4049,
    "end": 4057
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4057,
    "end": 4058
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 4059,
    "end": 4064
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4065,
    "end": 4066
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 4067,
    "end": 4076
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4078,
    "end": 4079
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 4080,
    "end": 4082
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 4083,
    "end": 4092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4092,
    "end": 4093
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4093,
    "end": 4094
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4094,
    "end": 4095
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4096,
    "end": 4097
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4102,
    "end": 4109
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4109,
    "end": 4110
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4110,
    "end": 4113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4113,
    "end": 4114
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 4114,
    "end": 4119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4119,
    "end": 4120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4120,
    "end": 4121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4122,
    "end": 4123
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4124,
    "end": 4127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4128,
    "end": 4129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4129,
    "end": 4130
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4131,
    "end": 4135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4136,
    "end": 4137
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 4138,
    "end": 4146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4146,
    "end": 4147
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 4148,
    "end": 4153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4155,
    "end": 4156
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 4157,
    "end": 4166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4167,
    "end": 4168
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 4169,
    "end": 4171
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4172,
    "end": 4173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4173,
    "end": 4174
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4175,
    "end": 4179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4179,
    "end": 4180
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 4181,
    "end": 4188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4188,
    "end": 4189
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 4190,
    "end": 4195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4195,
    "end": 4196
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 4197,
    "end": 4205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4206,
    "end": 4207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4207,
    "end": 4208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4209,
    "end": 4210
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4211,
    "end": 4215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4215,
    "end": 4216
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 4217,
    "end": 4226
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4226,
    "end": 4227
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 4228,
    "end": 4233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4233,
    "end": 4234
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 4235,
    "end": 4245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4246,
    "end": 4247
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4247,
    "end": 4248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4248,
    "end": 4249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4250,
    "end": 4251
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4256,
    "end": 4263
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4263,
    "end": 4264
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4264,
    "end": 4267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4267,
    "end": 4268
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 4268,
    "end": 4273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4273,
    "end": 4274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4274,
    "end": 4275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4276,
    "end": 4277
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4278,
    "end": 4281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4282,
    "end": 4283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4283,
    "end": 4284
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4289,
    "end": 4293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4294,
    "end": 4295
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 4296,
    "end": 4304
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4304,
    "end": 4305
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 4310,
    "end": 4316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4316,
    "end": 4317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4318,
    "end": 4319
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4328,
    "end": 4335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4336,
    "end": 4337
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 4338,
    "end": 4347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4347,
    "end": 4348
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4357,
    "end": 4366
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4367,
    "end": 4368
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 4369,
    "end": 4380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4385,
    "end": 4386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4387,
    "end": 4388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4389,
    "end": 4390
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4391,
    "end": 4398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4398,
    "end": 4399
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 4400,
    "end": 4409
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4409,
    "end": 4410
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4411,
    "end": 4420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4420,
    "end": 4421
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 4422,
    "end": 4431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4432,
    "end": 4433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4434,
    "end": 4435
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 4436,
    "end": 4438
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 4439,
    "end": 4450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4450,
    "end": 4451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4452,
    "end": 4453
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4458,
    "end": 4465
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4465,
    "end": 4466
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4466,
    "end": 4469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4469,
    "end": 4470
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 4470,
    "end": 4475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4475,
    "end": 4476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4476,
    "end": 4477
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4478,
    "end": 4479
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4480,
    "end": 4483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4484,
    "end": 4485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4485,
    "end": 4486
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4491,
    "end": 4495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4496,
    "end": 4497
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 4498,
    "end": 4506
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4506,
    "end": 4507
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 4512,
    "end": 4518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4518,
    "end": 4519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4520,
    "end": 4521
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4530,
    "end": 4537
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4538,
    "end": 4539
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 4540,
    "end": 4549
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4549,
    "end": 4550
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4559,
    "end": 4568
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4569,
    "end": 4570
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 4571,
    "end": 4582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4587,
    "end": 4588
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4589,
    "end": 4590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4591,
    "end": 4592
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4593,
    "end": 4600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4600,
    "end": 4601
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 4602,
    "end": 4611
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4611,
    "end": 4612
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4613,
    "end": 4622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4622,
    "end": 4623
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 4624,
    "end": 4633
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4634,
    "end": 4635
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4636,
    "end": 4637
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 4638,
    "end": 4640
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 4641,
    "end": 4655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4655,
    "end": 4656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4656,
    "end": 4657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4657,
    "end": 4658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4659,
    "end": 4660
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4665,
    "end": 4672
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4672,
    "end": 4673
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4673,
    "end": 4676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4676,
    "end": 4677
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 4677,
    "end": 4682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4682,
    "end": 4683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4683,
    "end": 4684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4685,
    "end": 4686
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4687,
    "end": 4690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4691,
    "end": 4692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4692,
    "end": 4693
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4698,
    "end": 4702
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4703,
    "end": 4704
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 4705,
    "end": 4713
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4713,
    "end": 4714
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 4719,
    "end": 4725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4725,
    "end": 4726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4727,
    "end": 4728
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4737,
    "end": 4744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4745,
    "end": 4746
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 4747,
    "end": 4756
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4756,
    "end": 4757
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4766,
    "end": 4775
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4776,
    "end": 4777
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 4778,
    "end": 4789
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4794,
    "end": 4795
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4796,
    "end": 4797
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4798,
    "end": 4799
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4800,
    "end": 4807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4807,
    "end": 4808
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 4809,
    "end": 4818
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4818,
    "end": 4819
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4820,
    "end": 4829
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4829,
    "end": 4830
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 4831,
    "end": 4840
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4841,
    "end": 4842
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4843,
    "end": 4844
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 4845,
    "end": 4847
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4848,
    "end": 4849
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4849,
    "end": 4850
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4851,
    "end": 4855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4855,
    "end": 4856
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 4857,
    "end": 4864
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4864,
    "end": 4865
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 4866,
    "end": 4872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4872,
    "end": 4873
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4874,
    "end": 4875
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4876,
    "end": 4883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4883,
    "end": 4884
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 4885,
    "end": 4893
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4893,
    "end": 4894
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4895,
    "end": 4904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4904,
    "end": 4905
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 4906,
    "end": 4912
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4913,
    "end": 4914
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4915,
    "end": 4916
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4916,
    "end": 4917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4922,
    "end": 4923
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4924,
    "end": 4928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4928,
    "end": 4929
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 4930,
    "end": 4939
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4939,
    "end": 4940
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 4941,
    "end": 4947
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4947,
    "end": 4948
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4949,
    "end": 4950
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4951,
    "end": 4958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4958,
    "end": 4959
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 4960,
    "end": 4970
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4970,
    "end": 4971
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4972,
    "end": 4981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4981,
    "end": 4982
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 4983,
    "end": 4991
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4992,
    "end": 4993
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4994,
    "end": 4995
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4995,
    "end": 4996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4996,
    "end": 4997
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4998,
    "end": 4999
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 5004,
    "end": 5011
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5011,
    "end": 5012
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 5012,
    "end": 5015
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5015,
    "end": 5016
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 5016,
    "end": 5021
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5021,
    "end": 5022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5022,
    "end": 5023
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5024,
    "end": 5025
  }
]
```
