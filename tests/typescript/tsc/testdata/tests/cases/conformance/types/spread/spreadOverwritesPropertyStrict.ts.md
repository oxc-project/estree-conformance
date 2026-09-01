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
            "name": "ab",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 18,
                      "end": 19
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 21,
                        "end": 27
                      },
                      "start": 19,
                      "end": 27
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 18,
                    "end": 28
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 29,
                      "end": 30
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 32,
                        "end": 38
                      },
                      "start": 30,
                      "end": 38
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 29,
                    "end": 38
                  }
                ],
                "start": 16,
                "end": 40
              },
              "start": 14,
              "end": 40
            },
            "start": 12,
            "end": 40
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 40
        }
      ],
      "declare": true,
      "start": 0,
      "end": 41
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
            "name": "abq",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 61,
                      "end": 62
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 64,
                        "end": 70
                      },
                      "start": 62,
                      "end": 70
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 61,
                    "end": 71
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 72,
                      "end": 73
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 76,
                        "end": 82
                      },
                      "start": 74,
                      "end": 82
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 72,
                    "end": 82
                  }
                ],
                "start": 59,
                "end": 84
              },
              "start": 57,
              "end": 84
            },
            "start": 54,
            "end": 84
          },
          "init": null,
          "definite": false,
          "start": 54,
          "end": 84
        }
      ],
      "declare": true,
      "start": 42,
      "end": 85
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
            "name": "unused1",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 97
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 103
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 105,
                  "end": 106
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 102,
                "end": 106
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ab",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 111,
                  "end": 113
                },
                "start": 108,
                "end": 113
              }
            ],
            "start": 100,
            "end": 115
          },
          "definite": false,
          "start": 90,
          "end": 115
        }
      ],
      "declare": false,
      "start": 86,
      "end": 115
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
            "name": "unused2",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 136
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ab",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 144,
                  "end": 146
                },
                "start": 141,
                "end": 146
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ab",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 153
                },
                "start": 148,
                "end": 153
              }
            ],
            "start": 139,
            "end": 155
          },
          "definite": false,
          "start": 129,
          "end": 155
        }
      ],
      "declare": false,
      "start": 125,
      "end": 155
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
            "name": "unused3",
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 217
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 223
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 225,
                  "end": 226
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 222,
                "end": 226
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "abq",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 234
                },
                "start": 228,
                "end": 234
              }
            ],
            "start": 220,
            "end": 236
          },
          "definite": false,
          "start": 210,
          "end": 236
        }
      ],
      "declare": false,
      "start": 206,
      "end": 236
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
            "name": "unused4",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 283
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ab",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 293
                },
                "start": 288,
                "end": 293
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 295,
                  "end": 296
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 298,
                  "end": 299
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 295,
                "end": 299
              }
            ],
            "start": 286,
            "end": 301
          },
          "definite": false,
          "start": 276,
          "end": 301
        }
      ],
      "declare": false,
      "start": 272,
      "end": 301
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
            "name": "unused5",
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 362
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "abq",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 373
                },
                "start": 367,
                "end": 373
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 375,
                  "end": 376
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 378,
                  "end": 379
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 375,
                "end": 379
              }
            ],
            "start": 365,
            "end": 381
          },
          "definite": false,
          "start": 355,
          "end": 381
        }
      ],
      "declare": false,
      "start": 351,
      "end": 381
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 397,
        "end": 398
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 406,
                    "end": 407
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 409,
                          "end": 415
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 418,
                          "end": 427
                        }
                      ],
                      "start": 409,
                      "end": 427
                    },
                    "start": 407,
                    "end": 427
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 406,
                  "end": 427
                }
              ],
              "start": 404,
              "end": 429
            },
            "start": 402,
            "end": 429
          },
          "start": 399,
          "end": 429
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 446,
                    "end": 447
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 449,
                    "end": 450
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 446,
                  "end": 450
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 455,
                    "end": 458
                  },
                  "start": 452,
                  "end": 458
                }
              ],
              "start": 444,
              "end": 460
            },
            "start": 437,
            "end": 461
          }
        ],
        "start": 431,
        "end": 498
      },
      "expression": false,
      "start": 388,
      "end": 498
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 508,
        "end": 509
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 517,
                        "end": 518
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 520,
                          "end": 526
                        },
                        "start": 518,
                        "end": 526
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 517,
                      "end": 526
                    }
                  ],
                  "start": 515,
                  "end": 528
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 531,
                  "end": 540
                }
              ],
              "start": 515,
              "end": 540
            },
            "start": 513,
            "end": 540
          },
          "start": 510,
          "end": 540
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 557,
                    "end": 558
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 560,
                    "end": 561
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 557,
                  "end": 561
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 566,
                    "end": 569
                  },
                  "start": 563,
                  "end": 569
                }
              ],
              "start": 555,
              "end": 571
            },
            "start": 548,
            "end": 572
          }
        ],
        "start": 542,
        "end": 604
      },
      "expression": false,
      "start": 499,
      "end": 604
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 614,
        "end": 615
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 623,
                        "end": 624
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 626,
                          "end": 632
                        },
                        "start": 624,
                        "end": 632
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 623,
                      "end": 632
                    }
                  ],
                  "start": 621,
                  "end": 634
                },
                {
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 639,
                        "end": 640
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 642,
                          "end": 648
                        },
                        "start": 640,
                        "end": 648
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 639,
                      "end": 648
                    }
                  ],
                  "start": 637,
                  "end": 650
                }
              ],
              "start": 621,
              "end": 650
            },
            "start": 619,
            "end": 650
          },
          "start": 616,
          "end": 650
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 667,
                    "end": 668
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 670,
                    "end": 671
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 667,
                  "end": 671
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 676,
                    "end": 679
                  },
                  "start": 673,
                  "end": 679
                }
              ],
              "start": 665,
              "end": 681
            },
            "start": 658,
            "end": 681
          }
        ],
        "start": 652,
        "end": 692
      },
      "expression": false,
      "start": 605,
      "end": 692
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 702,
        "end": 703
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 707,
              "end": 714
            },
            "start": 705,
            "end": 714
          },
          "start": 704,
          "end": 714
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
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
                    "name": "command",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 721,
                    "end": 728
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 730,
                      "end": 736
                    },
                    "start": 728,
                    "end": 736
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 721,
                  "end": 737
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ok",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 738,
                    "end": 740
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 742,
                      "end": 748
                    },
                    "start": 740,
                    "end": 748
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 738,
                  "end": 748
                }
              ],
              "start": 719,
              "end": 750
            },
            "start": 717,
            "end": 750
          },
          "start": 716,
          "end": 750
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "command",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 767,
                    "end": 774
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 776,
                    "end": 780
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 767,
                  "end": 780
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 786,
                      "end": 787
                    },
                    "consequent": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 790,
                      "end": 791
                    },
                    "alternate": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 794,
                      "end": 796
                    },
                    "start": 786,
                    "end": 796
                  },
                  "start": 782,
                  "end": 797
                }
              ],
              "start": 765,
              "end": 799
            },
            "start": 758,
            "end": 799
          }
        ],
        "start": 752,
        "end": 807
      },
      "expression": false,
      "start": 693,
      "end": 807
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "j",
        "optional": false,
        "typeAnnotation": null,
        "start": 817,
        "end": 818
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
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "command",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 841,
                          "end": 848
                        },
                        "value": {
                          "type": "Literal",
                          "value": "hi",
                          "raw": "\"hi\"",
                          "start": 850,
                          "end": 854
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 841,
                        "end": 854
                      }
                    ],
                    "start": 839,
                    "end": 856
                  },
                  "start": 836,
                  "end": 856
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "command",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 864,
                          "end": 871
                        },
                        "value": {
                          "type": "Literal",
                          "value": "bye",
                          "raw": "\"bye\"",
                          "start": 873,
                          "end": 878
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 864,
                        "end": 878
                      }
                    ],
                    "start": 862,
                    "end": 880
                  },
                  "start": 859,
                  "end": 880
                }
              ],
              "start": 834,
              "end": 882
            },
            "start": 827,
            "end": 882
          }
        ],
        "start": 821,
        "end": 890
      },
      "expression": false,
      "start": 808,
      "end": 890
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "k",
        "optional": false,
        "typeAnnotation": null,
        "start": 900,
        "end": 901
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
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
                    "name": "command",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 907,
                    "end": 914
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 916,
                      "end": 922
                    },
                    "start": 914,
                    "end": 922
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 907,
                  "end": 923
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ok",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 924,
                    "end": 926
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 928,
                      "end": 934
                    },
                    "start": 926,
                    "end": 934
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 924,
                  "end": 934
                }
              ],
              "start": 905,
              "end": 936
            },
            "start": 903,
            "end": 936
          },
          "start": 902,
          "end": 936
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "command",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 953,
                    "end": 960
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 962,
                    "end": 966
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 953,
                  "end": 966
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "spoiler",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 973,
                          "end": 980
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 982,
                          "end": 986
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 973,
                        "end": 986
                      }
                    ],
                    "start": 971,
                    "end": 988
                  },
                  "start": 968,
                  "end": 988
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "spoiler2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 990,
                    "end": 998
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1000,
                    "end": 1004
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 990,
                  "end": 1004
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1009,
                    "end": 1010
                  },
                  "start": 1006,
                  "end": 1010
                }
              ],
              "start": 951,
              "end": 1012
            },
            "start": 944,
            "end": 1012
          }
        ],
        "start": 938,
        "end": 1023
      },
      "expression": false,
      "start": 891,
      "end": 1023
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "l",
        "optional": false,
        "typeAnnotation": null,
        "start": 1034,
        "end": 1035
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "anyrequired",
          "optional": false,
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1051,
                    "end": 1052
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1054,
                      "end": 1057
                    },
                    "start": 1052,
                    "end": 1057
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1051,
                  "end": 1057
                }
              ],
              "start": 1049,
              "end": 1059
            },
            "start": 1047,
            "end": 1059
          },
          "start": 1036,
          "end": 1059
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1076,
                    "end": 1077
                  },
                  "value": {
                    "type": "Literal",
                    "value": "zzz",
                    "raw": "'zzz'",
                    "start": 1079,
                    "end": 1084
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1076,
                  "end": 1084
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anyrequired",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1089,
                    "end": 1100
                  },
                  "start": 1086,
                  "end": 1100
                }
              ],
              "start": 1074,
              "end": 1102
            },
            "start": 1067,
            "end": 1102
          }
        ],
        "start": 1061,
        "end": 1113
      },
      "expression": false,
      "start": 1025,
      "end": 1113
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 1123,
        "end": 1124
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "anyoptional",
          "optional": false,
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1140,
                    "end": 1141
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1144,
                      "end": 1147
                    },
                    "start": 1142,
                    "end": 1147
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1140,
                  "end": 1147
                }
              ],
              "start": 1138,
              "end": 1149
            },
            "start": 1136,
            "end": 1149
          },
          "start": 1125,
          "end": 1149
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1166,
                    "end": 1167
                  },
                  "value": {
                    "type": "Literal",
                    "value": "zzz",
                    "raw": "'zzz'",
                    "start": 1169,
                    "end": 1174
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1166,
                  "end": 1174
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anyoptional",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1179,
                    "end": 1190
                  },
                  "start": 1176,
                  "end": 1190
                }
              ],
              "start": 1164,
              "end": 1192
            },
            "start": 1157,
            "end": 1192
          }
        ],
        "start": 1151,
        "end": 1200
      },
      "expression": false,
      "start": 1114,
      "end": 1200
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1201
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
    "value": "ab",
    "start": 12,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 42,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 50,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "abq",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 86,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "unused1",
    "start": 90,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 108,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 111,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 125,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "unused2",
    "start": 129,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 141,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 144,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 148,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 151,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 206,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "unused3",
    "start": 210,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
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
    "value": "b",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 228,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "abq",
    "start": 231,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 272,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "unused4",
    "start": 276,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "...",
    "start": 288,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 291,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 351,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "unused5",
    "start": 355,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 367,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "abq",
    "start": 370,
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
    "value": "b",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 388,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 399,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 409,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 418,
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
    "value": ")",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 437,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 452,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 455,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 499,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 510,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 520,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 531,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 542,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 548,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 563,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 566,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 603,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 605,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 616,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 623,
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
    "value": "number",
    "start": 626,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 642,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 652,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 658,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 668,
    "end": 669
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 673,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 676,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 693,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 707,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "command",
    "start": 721,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 730,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "ok",
    "start": 738,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 742,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 752,
    "end": 753
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 758,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "command",
    "start": 767,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 774,
    "end": 775
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 776,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 782,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 806,
    "end": 807
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 808,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 821,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 827,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 836,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "command",
    "start": 841,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 848,
    "end": 849
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 850,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 859,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "command",
    "start": 864,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 871,
    "end": 872
  },
  {
    "type": "String",
    "value": "\"bye\"",
    "start": 873,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 889,
    "end": 890
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 891,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "command",
    "start": 907,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 916,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "ok",
    "start": 924,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 928,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 944,
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
    "value": "command",
    "start": 953,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 960,
    "end": 961
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 962,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 968,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "spoiler",
    "start": 973,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 980,
    "end": 981
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 982,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 987,
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
    "value": "spoiler2",
    "start": 990,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 998,
    "end": 999
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1000,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1006,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1025,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "anyrequired",
    "start": 1036,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1054,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1067,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "String",
    "value": "'zzz'",
    "start": 1079,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1086,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "anyrequired",
    "start": 1089,
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
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1114,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "anyoptional",
    "start": 1125,
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
    "value": "a",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1144,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1157,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "String",
    "value": "'zzz'",
    "start": 1169,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1176,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "anyoptional",
    "start": 1179,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1199,
    "end": 1200
  }
]
```
