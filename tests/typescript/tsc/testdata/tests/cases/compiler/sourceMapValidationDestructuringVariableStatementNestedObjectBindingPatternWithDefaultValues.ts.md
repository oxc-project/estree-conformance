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
                            "type": "TSStringKeyword",
                            "start": 36,
                            "end": 42
                          },
                          "start": 34,
                          "end": 42
                        },
                        "start": 31,
                        "end": 42
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 45,
                        "end": 49
                      },
                      "start": 43,
                      "end": 49
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 27,
                    "end": 50
                  }
                ],
                "start": 21,
                "end": 52
              },
              "start": 19,
              "end": 52
            },
            "start": 12,
            "end": 52
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 52
        }
      ],
      "declare": true,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 68
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
              "start": 75,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              },
              "start": 79,
              "end": 87
            },
            "accessibility": null,
            "static": false,
            "start": 75,
            "end": 88
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
              "start": 93,
              "end": 99
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
                      "start": 111,
                      "end": 118
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 121,
                        "end": 127
                      },
                      "start": 119,
                      "end": 127
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 111,
                    "end": 128
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
                      "start": 137,
                      "end": 146
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 149,
                        "end": 155
                      },
                      "start": 147,
                      "end": 155
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 137,
                    "end": 156
                  }
                ],
                "start": 101,
                "end": 162
              },
              "start": 99,
              "end": 162
            },
            "accessibility": null,
            "static": false,
            "start": 93,
            "end": 163
          }
        ],
        "start": 69,
        "end": 165
      },
      "declare": false,
      "start": 53,
      "end": 165
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
            "name": "robotA",
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
                  "start": 178,
                  "end": 183
                },
                "typeArguments": null,
                "start": 178,
                "end": 183
              },
              "start": 176,
              "end": 183
            },
            "start": 170,
            "end": 183
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
                  "start": 188,
                  "end": 192
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 194,
                  "end": 201
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 188,
                "end": 201
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
                  "start": 203,
                  "end": 209
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
                        "start": 213,
                        "end": 220
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 222,
                        "end": 230
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 213,
                      "end": 230
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
                        "start": 232,
                        "end": 241
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 243,
                        "end": 249
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 232,
                      "end": 249
                    }
                  ],
                  "start": 211,
                  "end": 251
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 203,
                "end": 251
              }
            ],
            "start": 186,
            "end": 253
          },
          "definite": false,
          "start": 170,
          "end": 253
        }
      ],
      "declare": false,
      "start": 166,
      "end": 254
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
            "name": "robotB",
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
                  "start": 267,
                  "end": 272
                },
                "typeArguments": null,
                "start": 267,
                "end": 272
              },
              "start": 265,
              "end": 272
            },
            "start": 259,
            "end": 272
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
                  "start": 277,
                  "end": 281
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 283,
                  "end": 292
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 277,
                "end": 292
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
                  "start": 294,
                  "end": 300
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
                        "start": 304,
                        "end": 311
                      },
                      "value": {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 313,
                        "end": 323
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 304,
                      "end": 323
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
                        "start": 325,
                        "end": 334
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 336,
                        "end": 344
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 325,
                      "end": 344
                    }
                  ],
                  "start": 302,
                  "end": 346
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 294,
                "end": 346
              }
            ],
            "start": 275,
            "end": 348
          },
          "definite": false,
          "start": 259,
          "end": 348
        }
      ],
      "declare": false,
      "start": 255,
      "end": 349
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                  "start": 361,
                  "end": 367
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
                          "start": 379,
                          "end": 386
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
                            "start": 388,
                            "end": 396
                          },
                          "right": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 399,
                            "end": 408
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 388,
                          "end": 408
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 379,
                        "end": 408
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
                          "start": 418,
                          "end": 427
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
                            "start": 429,
                            "end": 439
                          },
                          "right": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 442,
                            "end": 451
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 429,
                          "end": 451
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 418,
                        "end": 451
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 369,
                    "end": 457
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
                          "start": 462,
                          "end": 469
                        },
                        "value": {
                          "type": "Literal",
                          "value": "noSkill",
                          "raw": "\"noSkill\"",
                          "start": 471,
                          "end": 480
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 462,
                        "end": 480
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
                          "start": 482,
                          "end": 491
                        },
                        "value": {
                          "type": "Literal",
                          "value": "noSkill",
                          "raw": "\"noSkill\"",
                          "start": 493,
                          "end": 502
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 482,
                        "end": 502
                      }
                    ],
                    "start": 460,
                    "end": 504
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 369,
                  "end": 504
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 361,
                "end": 504
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 506
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 509,
            "end": 515
          },
          "definite": false,
          "start": 355,
          "end": 515
        }
      ],
      "declare": false,
      "start": 351,
      "end": 516
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                  "start": 527,
                  "end": 531
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 533,
                    "end": 538
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noNameSpecified",
                    "raw": "\"noNameSpecified\"",
                    "start": 541,
                    "end": 558
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 533,
                  "end": 558
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 527,
                "end": 558
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
                  "start": 564,
                  "end": 570
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
                          "start": 582,
                          "end": 589
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primaryB",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 591,
                            "end": 599
                          },
                          "right": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 602,
                            "end": 611
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 591,
                          "end": 611
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 582,
                        "end": 611
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
                          "start": 621,
                          "end": 630
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondaryB",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 632,
                            "end": 642
                          },
                          "right": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 645,
                            "end": 654
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 632,
                          "end": 654
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 621,
                        "end": 654
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 572,
                    "end": 660
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
                          "start": 665,
                          "end": 672
                        },
                        "value": {
                          "type": "Literal",
                          "value": "noSkill",
                          "raw": "\"noSkill\"",
                          "start": 674,
                          "end": 683
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 665,
                        "end": 683
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
                          "start": 685,
                          "end": 694
                        },
                        "value": {
                          "type": "Literal",
                          "value": "noSkill",
                          "raw": "\"noSkill\"",
                          "start": 696,
                          "end": 705
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 685,
                        "end": 705
                      }
                    ],
                    "start": 663,
                    "end": 707
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 572,
                  "end": 707
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 564,
                "end": 707
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 521,
            "end": 709
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 712,
            "end": 718
          },
          "definite": false,
          "start": 521,
          "end": 718
        }
      ],
      "declare": false,
      "start": 517,
      "end": 719
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                  "start": 730,
                  "end": 734
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 736,
                    "end": 741
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noNameSpecified",
                    "raw": "\"noNameSpecified\"",
                    "start": 744,
                    "end": 761
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 736,
                  "end": 761
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 730,
                "end": 761
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
                  "start": 767,
                  "end": 773
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
                          "start": 785,
                          "end": 792
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primaryB",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 794,
                            "end": 802
                          },
                          "right": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 805,
                            "end": 814
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 794,
                          "end": 814
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 785,
                        "end": 814
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
                          "start": 824,
                          "end": 833
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondaryB",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 835,
                            "end": 845
                          },
                          "right": {
                            "type": "Literal",
                            "value": "noSkill",
                            "raw": "\"noSkill\"",
                            "start": 848,
                            "end": 857
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 835,
                          "end": 857
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 824,
                        "end": 857
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 775,
                    "end": 863
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
                          "start": 868,
                          "end": 875
                        },
                        "value": {
                          "type": "Literal",
                          "value": "noSkill",
                          "raw": "\"noSkill\"",
                          "start": 877,
                          "end": 886
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 868,
                        "end": 886
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
                          "start": 888,
                          "end": 897
                        },
                        "value": {
                          "type": "Literal",
                          "value": "noSkill",
                          "raw": "\"noSkill\"",
                          "start": 899,
                          "end": 908
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 888,
                        "end": 908
                      }
                    ],
                    "start": 866,
                    "end": 910
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 910
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 767,
                "end": 910
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 724,
            "end": 912
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
                "start": 916,
                "end": 921
              },
              "typeArguments": null,
              "start": 916,
              "end": 921
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
                    "start": 924,
                    "end": 928
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Edger",
                    "raw": "\"Edger\"",
                    "start": 930,
                    "end": 937
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 924,
                  "end": 937
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
                    "start": 939,
                    "end": 945
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
                          "start": 949,
                          "end": 956
                        },
                        "value": {
                          "type": "Literal",
                          "value": "edging",
                          "raw": "\"edging\"",
                          "start": 958,
                          "end": 966
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 949,
                        "end": 966
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
                          "start": 968,
                          "end": 977
                        },
                        "value": {
                          "type": "Literal",
                          "value": "branch trimming",
                          "raw": "\"branch trimming\"",
                          "start": 979,
                          "end": 996
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 968,
                        "end": 996
                      }
                    ],
                    "start": 947,
                    "end": 998
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 939,
                  "end": 998
                }
              ],
              "start": 922,
              "end": 1000
            },
            "start": 915,
            "end": 1000
          },
          "definite": false,
          "start": 724,
          "end": 1000
        }
      ],
      "declare": false,
      "start": 720,
      "end": 1001
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1007,
          "end": 1012
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1016,
          "end": 1021
        },
        "start": 1007,
        "end": 1021
      },
      "consequent": {
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
                  "start": 1029,
                  "end": 1036
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1037,
                  "end": 1040
                },
                "optional": false,
                "computed": false,
                "start": 1029,
                "end": 1040
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1041,
                  "end": 1046
                }
              ],
              "optional": false,
              "start": 1029,
              "end": 1047
            },
            "directive": null,
            "start": 1029,
            "end": 1048
          }
        ],
        "start": 1023,
        "end": 1050
      },
      "alternate": {
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
                  "start": 1062,
                  "end": 1069
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1070,
                  "end": 1073
                },
                "optional": false,
                "computed": false,
                "start": 1062,
                "end": 1073
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1074,
                  "end": 1079
                }
              ],
              "optional": false,
              "start": 1062,
              "end": 1080
            },
            "directive": null,
            "start": 1062,
            "end": 1081
          }
        ],
        "start": 1056,
        "end": 1083
      },
      "start": 1003,
      "end": 1083
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1083
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
    "value": "string",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 53,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 63,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 75,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 111,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 121,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 137,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 166,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 178,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 188,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 194,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 203,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "primary",
    "start": 213,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 222,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 232,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 255,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 259,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 267,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 277,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 283,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 294,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 304,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 313,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 325,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 336,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 351,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 361,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 379,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 388,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 397,
    "end": 398
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 399,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 418,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 429,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 440,
    "end": 441
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 442,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "\"noSkill\"",
    "start": 471,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 482,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 493,
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
    "value": "=",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 509,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 517,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 527,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 533,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 539,
    "end": 540
  },
  {
    "type": "String",
    "value": "\"noNameSpecified\"",
    "start": 541,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 564,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 582,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "primaryB",
    "start": 591,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 602,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 621,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "secondaryB",
    "start": 632,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 643,
    "end": 644
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 645,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 659,
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
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 665,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 674,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 685,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 696,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 706,
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
    "value": "=",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 712,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 720,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 730,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "nameC",
    "start": 736,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 742,
    "end": 743
  },
  {
    "type": "String",
    "value": "\"noNameSpecified\"",
    "start": 744,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 767,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 785,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "primaryB",
    "start": 794,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 803,
    "end": 804
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 805,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 824,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "secondaryB",
    "start": 835,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 846,
    "end": 847
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 848,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 868,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 875,
    "end": 876
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 877,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 888,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 897,
    "end": 898
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 899,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 916,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 924,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 928,
    "end": 929
  },
  {
    "type": "String",
    "value": "\"Edger\"",
    "start": 930,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 939,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 949,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 956,
    "end": 957
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 958,
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
    "value": "secondary",
    "start": 968,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 977,
    "end": 978
  },
  {
    "type": "String",
    "value": "\"branch trimming\"",
    "start": 979,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1003,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1007,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1013,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1016,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1029,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1037,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "nameC",
    "start": 1041,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "else",
    "start": 1051,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1062,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1070,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "nameC",
    "start": 1074,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1082,
    "end": 1083
  }
]
```
