__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "type": "PrivateIdentifier",
              "name": "test",
              "start": 14,
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
            "value": {
              "type": "Literal",
              "value": 24,
              "raw": "24",
              "start": 30,
              "end": 32
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 33
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 49
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 62,
                          "end": 66
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 67,
                          "end": 72
                        },
                        "optional": false,
                        "computed": false,
                        "start": 62,
                        "end": 72
                      },
                      "start": 62,
                      "end": 74
                    },
                    "directive": null,
                    "start": 62,
                    "end": 75
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 84,
                          "end": 88
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 89,
                          "end": 94
                        },
                        "optional": false,
                        "computed": false,
                        "start": 84,
                        "end": 94
                      },
                      "start": 84,
                      "end": 96
                    },
                    "directive": null,
                    "start": 84,
                    "end": 97
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 108,
                          "end": 112
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 113,
                          "end": 118
                        },
                        "optional": false,
                        "computed": false,
                        "start": 108,
                        "end": 118
                      },
                      "start": 106,
                      "end": 118
                    },
                    "directive": null,
                    "start": 106,
                    "end": 119
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 130,
                          "end": 134
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 135,
                          "end": 140
                        },
                        "optional": false,
                        "computed": false,
                        "start": 130,
                        "end": 140
                      },
                      "start": 128,
                      "end": 140
                    },
                    "directive": null,
                    "start": 128,
                    "end": 141
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 156,
                          "end": 157
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 160,
                              "end": 164
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 165,
                              "end": 170
                            },
                            "optional": false,
                            "computed": false,
                            "start": 160,
                            "end": 170
                          },
                          "start": 160,
                          "end": 172
                        },
                        "definite": false,
                        "start": 156,
                        "end": 172
                      }
                    ],
                    "declare": false,
                    "start": 150,
                    "end": 173
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 188,
                          "end": 189
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 192,
                              "end": 196
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 197,
                              "end": 202
                            },
                            "optional": false,
                            "computed": false,
                            "start": 192,
                            "end": 202
                          },
                          "start": 192,
                          "end": 204
                        },
                        "definite": false,
                        "start": 188,
                        "end": 204
                      }
                    ],
                    "declare": false,
                    "start": 182,
                    "end": 205
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 220,
                          "end": 221
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 226,
                              "end": 230
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 231,
                              "end": 236
                            },
                            "optional": false,
                            "computed": false,
                            "start": 226,
                            "end": 236
                          },
                          "start": 224,
                          "end": 236
                        },
                        "definite": false,
                        "start": 220,
                        "end": 236
                      }
                    ],
                    "declare": false,
                    "start": 214,
                    "end": 237
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
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 252,
                          "end": 253
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 258,
                              "end": 262
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 263,
                              "end": 268
                            },
                            "optional": false,
                            "computed": false,
                            "start": 258,
                            "end": 268
                          },
                          "start": 256,
                          "end": 268
                        },
                        "definite": false,
                        "start": 252,
                        "end": 268
                      }
                    ],
                    "declare": false,
                    "start": 246,
                    "end": 269
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 283,
                          "end": 287
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 288,
                          "end": 293
                        },
                        "optional": false,
                        "computed": false,
                        "start": 283,
                        "end": 293
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 296,
                        "end": 297
                      },
                      "start": 283,
                      "end": 297
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 299,
                          "end": 303
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 304,
                          "end": 309
                        },
                        "optional": false,
                        "computed": false,
                        "start": 299,
                        "end": 309
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 312,
                        "end": 314
                      },
                      "start": 299,
                      "end": 314
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 318,
                          "end": 322
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 323,
                          "end": 328
                        },
                        "optional": false,
                        "computed": false,
                        "start": 318,
                        "end": 328
                      },
                      "start": 316,
                      "end": 328
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 330,
                      "end": 332
                    },
                    "start": 278,
                    "end": 332
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 346,
                          "end": 350
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 351,
                          "end": 356
                        },
                        "optional": false,
                        "computed": false,
                        "start": 346,
                        "end": 356
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 359,
                        "end": 360
                      },
                      "start": 346,
                      "end": 360
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 362,
                          "end": 366
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 367,
                          "end": 372
                        },
                        "optional": false,
                        "computed": false,
                        "start": 362,
                        "end": 372
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 375,
                        "end": 377
                      },
                      "start": 362,
                      "end": 377
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 379,
                          "end": 383
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 384,
                          "end": 389
                        },
                        "optional": false,
                        "computed": false,
                        "start": 379,
                        "end": 389
                      },
                      "start": 379,
                      "end": 391
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 393,
                      "end": 395
                    },
                    "start": 341,
                    "end": 395
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 406,
                          "end": 410
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 411,
                          "end": 416
                        },
                        "optional": false,
                        "computed": false,
                        "start": 406,
                        "end": 416
                      },
                      "start": 405,
                      "end": 419
                    },
                    "directive": null,
                    "start": 405,
                    "end": 420
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 430,
                          "end": 434
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 435,
                          "end": 440
                        },
                        "optional": false,
                        "computed": false,
                        "start": 430,
                        "end": 440
                      },
                      "start": 429,
                      "end": 443
                    },
                    "directive": null,
                    "start": 429,
                    "end": 444
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 456,
                          "end": 460
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 461,
                          "end": 466
                        },
                        "optional": false,
                        "computed": false,
                        "start": 456,
                        "end": 466
                      },
                      "start": 453,
                      "end": 467
                    },
                    "directive": null,
                    "start": 453,
                    "end": 468
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 480,
                          "end": 484
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 485,
                          "end": 490
                        },
                        "optional": false,
                        "computed": false,
                        "start": 480,
                        "end": 490
                      },
                      "start": 477,
                      "end": 491
                    },
                    "directive": null,
                    "start": 477,
                    "end": 492
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
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 507,
                          "end": 508
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 512,
                              "end": 516
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 517,
                              "end": 522
                            },
                            "optional": false,
                            "computed": false,
                            "start": 512,
                            "end": 522
                          },
                          "start": 511,
                          "end": 525
                        },
                        "definite": false,
                        "start": 507,
                        "end": 525
                      }
                    ],
                    "declare": false,
                    "start": 501,
                    "end": 526
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
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 541,
                          "end": 542
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 546,
                              "end": 550
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 551,
                              "end": 556
                            },
                            "optional": false,
                            "computed": false,
                            "start": 546,
                            "end": 556
                          },
                          "start": 545,
                          "end": 559
                        },
                        "definite": false,
                        "start": 541,
                        "end": 559
                      }
                    ],
                    "declare": false,
                    "start": 535,
                    "end": 560
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
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 575,
                          "end": 576
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 582,
                              "end": 586
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 587,
                              "end": 592
                            },
                            "optional": false,
                            "computed": false,
                            "start": 582,
                            "end": 592
                          },
                          "start": 579,
                          "end": 593
                        },
                        "definite": false,
                        "start": 575,
                        "end": 593
                      }
                    ],
                    "declare": false,
                    "start": 569,
                    "end": 594
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
                          "name": "h",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 609,
                          "end": 610
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 616,
                              "end": 620
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 621,
                              "end": 626
                            },
                            "optional": false,
                            "computed": false,
                            "start": 616,
                            "end": 626
                          },
                          "start": 613,
                          "end": 627
                        },
                        "definite": false,
                        "start": 609,
                        "end": 627
                      }
                    ],
                    "declare": false,
                    "start": 603,
                    "end": 628
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 642,
                          "end": 646
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 647,
                          "end": 652
                        },
                        "optional": false,
                        "computed": false,
                        "start": 642,
                        "end": 652
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 655,
                        "end": 656
                      },
                      "start": 642,
                      "end": 656
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 658,
                          "end": 662
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 663,
                          "end": 668
                        },
                        "optional": false,
                        "computed": false,
                        "start": 658,
                        "end": 668
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 671,
                        "end": 673
                      },
                      "start": 658,
                      "end": 673
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 678,
                          "end": 682
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 683,
                          "end": 688
                        },
                        "optional": false,
                        "computed": false,
                        "start": 678,
                        "end": 688
                      },
                      "start": 675,
                      "end": 689
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 691,
                      "end": 693
                    },
                    "start": 637,
                    "end": 693
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 707,
                          "end": 711
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 712,
                          "end": 717
                        },
                        "optional": false,
                        "computed": false,
                        "start": 707,
                        "end": 717
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 720,
                        "end": 721
                      },
                      "start": 707,
                      "end": 721
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 723,
                          "end": 727
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 728,
                          "end": 733
                        },
                        "optional": false,
                        "computed": false,
                        "start": 723,
                        "end": 733
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 736,
                        "end": 738
                      },
                      "start": 723,
                      "end": 738
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 741,
                          "end": 745
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 746,
                          "end": 751
                        },
                        "optional": false,
                        "computed": false,
                        "start": 741,
                        "end": 751
                      },
                      "start": 740,
                      "end": 754
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 756,
                      "end": 758
                    },
                    "start": 702,
                    "end": 758
                  }
                ],
                "start": 52,
                "end": 764
              },
              "expression": false,
              "start": 49,
              "end": 764
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 38,
            "end": 764
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 769,
              "end": 773
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 786,
                              "end": 790
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 791,
                              "end": 802
                            },
                            "optional": false,
                            "computed": false,
                            "start": 786,
                            "end": 802
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 786,
                          "end": 804
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 805,
                          "end": 810
                        },
                        "optional": false,
                        "computed": false,
                        "start": 786,
                        "end": 810
                      },
                      "start": 786,
                      "end": 812
                    },
                    "directive": null,
                    "start": 786,
                    "end": 813
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 822,
                              "end": 826
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 827,
                              "end": 838
                            },
                            "optional": false,
                            "computed": false,
                            "start": 822,
                            "end": 838
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 822,
                          "end": 840
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 841,
                          "end": 846
                        },
                        "optional": false,
                        "computed": false,
                        "start": 822,
                        "end": 846
                      },
                      "start": 822,
                      "end": 848
                    },
                    "directive": null,
                    "start": 822,
                    "end": 849
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 860,
                              "end": 864
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 865,
                              "end": 876
                            },
                            "optional": false,
                            "computed": false,
                            "start": 860,
                            "end": 876
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 860,
                          "end": 878
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 879,
                          "end": 884
                        },
                        "optional": false,
                        "computed": false,
                        "start": 860,
                        "end": 884
                      },
                      "start": 858,
                      "end": 884
                    },
                    "directive": null,
                    "start": 858,
                    "end": 885
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 896,
                              "end": 900
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 901,
                              "end": 912
                            },
                            "optional": false,
                            "computed": false,
                            "start": 896,
                            "end": 912
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 896,
                          "end": 914
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 915,
                          "end": 920
                        },
                        "optional": false,
                        "computed": false,
                        "start": 896,
                        "end": 920
                      },
                      "start": 894,
                      "end": 920
                    },
                    "directive": null,
                    "start": 894,
                    "end": 921
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 936,
                          "end": 937
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 940,
                                  "end": 944
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 945,
                                  "end": 956
                                },
                                "optional": false,
                                "computed": false,
                                "start": 940,
                                "end": 956
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 940,
                              "end": 958
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 959,
                              "end": 964
                            },
                            "optional": false,
                            "computed": false,
                            "start": 940,
                            "end": 964
                          },
                          "start": 940,
                          "end": 966
                        },
                        "definite": false,
                        "start": 936,
                        "end": 966
                      }
                    ],
                    "declare": false,
                    "start": 930,
                    "end": 967
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 982,
                          "end": 983
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 986,
                                  "end": 990
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 991,
                                  "end": 1002
                                },
                                "optional": false,
                                "computed": false,
                                "start": 986,
                                "end": 1002
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 986,
                              "end": 1004
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 1005,
                              "end": 1010
                            },
                            "optional": false,
                            "computed": false,
                            "start": 986,
                            "end": 1010
                          },
                          "start": 986,
                          "end": 1012
                        },
                        "definite": false,
                        "start": 982,
                        "end": 1012
                      }
                    ],
                    "declare": false,
                    "start": 976,
                    "end": 1013
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1028,
                          "end": 1029
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1034,
                                  "end": 1038
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1039,
                                  "end": 1050
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1034,
                                "end": 1050
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1034,
                              "end": 1052
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 1053,
                              "end": 1058
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1034,
                            "end": 1058
                          },
                          "start": 1032,
                          "end": 1058
                        },
                        "definite": false,
                        "start": 1028,
                        "end": 1058
                      }
                    ],
                    "declare": false,
                    "start": 1022,
                    "end": 1059
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
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1074,
                          "end": 1075
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1080,
                                  "end": 1084
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1085,
                                  "end": 1096
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1080,
                                "end": 1096
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1080,
                              "end": 1098
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 1099,
                              "end": 1104
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1080,
                            "end": 1104
                          },
                          "start": 1078,
                          "end": 1104
                        },
                        "definite": false,
                        "start": 1074,
                        "end": 1104
                      }
                    ],
                    "declare": false,
                    "start": 1068,
                    "end": 1105
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1119,
                              "end": 1123
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1124,
                              "end": 1135
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1119,
                            "end": 1135
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1119,
                          "end": 1137
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1138,
                          "end": 1143
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1119,
                        "end": 1143
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1146,
                        "end": 1147
                      },
                      "start": 1119,
                      "end": 1147
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1149,
                              "end": 1153
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1154,
                              "end": 1165
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1149,
                            "end": 1165
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1149,
                          "end": 1167
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1168,
                          "end": 1173
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1149,
                        "end": 1173
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 1176,
                        "end": 1178
                      },
                      "start": 1149,
                      "end": 1178
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1182,
                              "end": 1186
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1187,
                              "end": 1198
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1182,
                            "end": 1198
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1182,
                          "end": 1200
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1201,
                          "end": 1206
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1182,
                        "end": 1206
                      },
                      "start": 1180,
                      "end": 1206
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1208,
                      "end": 1210
                    },
                    "start": 1114,
                    "end": 1210
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1224,
                              "end": 1228
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1229,
                              "end": 1240
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1224,
                            "end": 1240
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1224,
                          "end": 1242
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1243,
                          "end": 1248
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1224,
                        "end": 1248
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1251,
                        "end": 1252
                      },
                      "start": 1224,
                      "end": 1252
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1254,
                              "end": 1258
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1259,
                              "end": 1270
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1254,
                            "end": 1270
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1254,
                          "end": 1272
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1273,
                          "end": 1278
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1254,
                        "end": 1278
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 1281,
                        "end": 1283
                      },
                      "start": 1254,
                      "end": 1283
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1285,
                              "end": 1289
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1290,
                              "end": 1301
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1285,
                            "end": 1301
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1285,
                          "end": 1303
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1304,
                          "end": 1309
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1285,
                        "end": 1309
                      },
                      "start": 1285,
                      "end": 1311
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1313,
                      "end": 1315
                    },
                    "start": 1219,
                    "end": 1315
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1326,
                              "end": 1330
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1331,
                              "end": 1342
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1326,
                            "end": 1342
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1326,
                          "end": 1344
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1345,
                          "end": 1350
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1326,
                        "end": 1350
                      },
                      "start": 1325,
                      "end": 1353
                    },
                    "directive": null,
                    "start": 1325,
                    "end": 1354
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1364,
                              "end": 1368
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1369,
                              "end": 1380
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1364,
                            "end": 1380
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1364,
                          "end": 1382
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1383,
                          "end": 1388
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1364,
                        "end": 1388
                      },
                      "start": 1363,
                      "end": 1391
                    },
                    "directive": null,
                    "start": 1363,
                    "end": 1392
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1404,
                              "end": 1408
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1409,
                              "end": 1420
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1404,
                            "end": 1420
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1404,
                          "end": 1422
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1423,
                          "end": 1428
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1404,
                        "end": 1428
                      },
                      "start": 1401,
                      "end": 1429
                    },
                    "directive": null,
                    "start": 1401,
                    "end": 1430
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1442,
                              "end": 1446
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1447,
                              "end": 1458
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1442,
                            "end": 1458
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1442,
                          "end": 1460
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1461,
                          "end": 1466
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1442,
                        "end": 1466
                      },
                      "start": 1439,
                      "end": 1467
                    },
                    "directive": null,
                    "start": 1439,
                    "end": 1468
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
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1483,
                          "end": 1484
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1488,
                                  "end": 1492
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1493,
                                  "end": 1504
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1488,
                                "end": 1504
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1488,
                              "end": 1506
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 1507,
                              "end": 1512
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1488,
                            "end": 1512
                          },
                          "start": 1487,
                          "end": 1515
                        },
                        "definite": false,
                        "start": 1483,
                        "end": 1515
                      }
                    ],
                    "declare": false,
                    "start": 1477,
                    "end": 1516
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
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1531,
                          "end": 1532
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1536,
                                  "end": 1540
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1541,
                                  "end": 1552
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1536,
                                "end": 1552
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1536,
                              "end": 1554
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 1555,
                              "end": 1560
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1536,
                            "end": 1560
                          },
                          "start": 1535,
                          "end": 1563
                        },
                        "definite": false,
                        "start": 1531,
                        "end": 1563
                      }
                    ],
                    "declare": false,
                    "start": 1525,
                    "end": 1564
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
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1579,
                          "end": 1580
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1586,
                                  "end": 1590
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1591,
                                  "end": 1602
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1586,
                                "end": 1602
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1586,
                              "end": 1604
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 1605,
                              "end": 1610
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1586,
                            "end": 1610
                          },
                          "start": 1583,
                          "end": 1611
                        },
                        "definite": false,
                        "start": 1579,
                        "end": 1611
                      }
                    ],
                    "declare": false,
                    "start": 1573,
                    "end": 1612
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
                          "name": "h",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1627,
                          "end": 1628
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1634,
                                  "end": 1638
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1639,
                                  "end": 1650
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1634,
                                "end": 1650
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1634,
                              "end": 1652
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 1653,
                              "end": 1658
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1634,
                            "end": 1658
                          },
                          "start": 1631,
                          "end": 1659
                        },
                        "definite": false,
                        "start": 1627,
                        "end": 1659
                      }
                    ],
                    "declare": false,
                    "start": 1621,
                    "end": 1660
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1674,
                              "end": 1678
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1679,
                              "end": 1690
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1674,
                            "end": 1690
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1674,
                          "end": 1692
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1693,
                          "end": 1698
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1674,
                        "end": 1698
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1701,
                        "end": 1702
                      },
                      "start": 1674,
                      "end": 1702
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1704,
                              "end": 1708
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1709,
                              "end": 1720
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1704,
                            "end": 1720
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1704,
                          "end": 1722
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1723,
                          "end": 1728
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1704,
                        "end": 1728
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 1731,
                        "end": 1733
                      },
                      "start": 1704,
                      "end": 1733
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1738,
                              "end": 1742
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1743,
                              "end": 1754
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1738,
                            "end": 1754
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1738,
                          "end": 1756
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1757,
                          "end": 1762
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1738,
                        "end": 1762
                      },
                      "start": 1735,
                      "end": 1763
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1765,
                      "end": 1767
                    },
                    "start": 1669,
                    "end": 1767
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1781,
                              "end": 1785
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1786,
                              "end": 1797
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1781,
                            "end": 1797
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1781,
                          "end": 1799
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1800,
                          "end": 1805
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1781,
                        "end": 1805
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1808,
                        "end": 1809
                      },
                      "start": 1781,
                      "end": 1809
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1811,
                              "end": 1815
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1816,
                              "end": 1827
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1811,
                            "end": 1827
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1811,
                          "end": 1829
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1830,
                          "end": 1835
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1811,
                        "end": 1835
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 1838,
                        "end": 1840
                      },
                      "start": 1811,
                      "end": 1840
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1843,
                              "end": 1847
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1848,
                              "end": 1859
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1843,
                            "end": 1859
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1843,
                          "end": 1861
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 1862,
                          "end": 1867
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1843,
                        "end": 1867
                      },
                      "start": 1842,
                      "end": 1870
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1872,
                      "end": 1874
                    },
                    "start": 1776,
                    "end": 1874
                  }
                ],
                "start": 776,
                "end": 1880
              },
              "expression": false,
              "start": 773,
              "end": 1880
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 769,
            "end": 1880
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 1885,
              "end": 1896
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1912,
                        "end": 1913
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1908,
                      "end": 1915
                    },
                    "start": 1901,
                    "end": 1916
                  }
                ],
                "start": 1899,
                "end": 1918
              },
              "expression": false,
              "start": 1896,
              "end": 1918
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1885,
            "end": 1918
          }
        ],
        "start": 8,
        "end": 1920
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 1920
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1920
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 14,
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
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Numeric",
    "value": "24",
    "start": 30,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 38,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 66,
    "end": 67
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 67,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 72,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 84,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 88,
    "end": 89
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 106,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 112,
    "end": 113
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 113,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 128,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 130,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 134,
    "end": 135
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 135,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 150,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 164,
    "end": 165
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 165,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 170,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 182,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 196,
    "end": 197
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 197,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 214,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 224,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 226,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 230,
    "end": 231
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 231,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 246,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 256,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 258,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 262,
    "end": 263
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 263,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 278,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 283,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 287,
    "end": 288
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 288,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 299,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 303,
    "end": 304
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 304,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 310,
    "end": 311
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 312,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 316,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 318,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 322,
    "end": 323
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 323,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 341,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 346,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 350,
    "end": 351
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 351,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 357,
    "end": 358
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 362,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 366,
    "end": 367
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 367,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 373,
    "end": 374
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 375,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 379,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 383,
    "end": 384
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 384,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 389,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 406,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 410,
    "end": 411
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 411,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 417,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 430,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 434,
    "end": 435
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 435,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 441,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 453,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 456,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 460,
    "end": 461
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 461,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 477,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 480,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 484,
    "end": 485
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 485,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 501,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 511,
    "end": 512
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 512,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 516,
    "end": 517
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 517,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 523,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 535,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 546,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 550,
    "end": 551
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 551,
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
    "value": "--",
    "start": 557,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 569,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "g",
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
    "type": "Punctuator",
    "value": "++",
    "start": 579,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 581,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 582,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 586,
    "end": 587
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 587,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 603,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 613,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 616,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 620,
    "end": 621
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 621,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 627,
    "end": 628
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 637,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 641,
    "end": 642
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 642,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 646,
    "end": 647
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 647,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 653,
    "end": 654
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 658,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 662,
    "end": 663
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 663,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 669,
    "end": 670
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 671,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 675,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 677,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 678,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 682,
    "end": 683
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 683,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 692,
    "end": 693
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 702,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 706,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 707,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 711,
    "end": 712
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 712,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 718,
    "end": 719
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 723,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 727,
    "end": 728
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 728,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 734,
    "end": 735
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 736,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 740,
    "end": 741
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 741,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 745,
    "end": 746
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 746,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 752,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 769,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 776,
    "end": 777
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 786,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 791,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 804,
    "end": 805
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 805,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 810,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 822,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 827,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 840,
    "end": 841
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 841,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 846,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 858,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "this",
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
    "value": "getInstance",
    "start": 865,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ".",
    "start": 878,
    "end": 879
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 879,
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
    "value": "--",
    "start": 894,
    "end": 896
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 896,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 901,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 914,
    "end": 915
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 915,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 920,
    "end": 921
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 930,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 938,
    "end": 939
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 940,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 945,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 958,
    "end": 959
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 959,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 964,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 966,
    "end": 967
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 976,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 984,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 986,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 991,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1005,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 1010,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1022,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1032,
    "end": 1034
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1034,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1039,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1053,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1068,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 1078,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1080,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1085,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1099,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1114,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1119,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1124,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1138,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1149,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1154,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1168,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1176,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1180,
    "end": 1182
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1182,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1187,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1201,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1219,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1224,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1229,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1243,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1254,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1259,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1273,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1281,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1285,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1290,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1301,
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
    "value": ".",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1304,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1309,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1326,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1331,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1345,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1351,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1364,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1369,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1383,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 1389,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1401,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1404,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1409,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1423,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 1439,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1442,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1447,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1461,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1477,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1488,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1493,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1504,
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
    "value": ".",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1507,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1513,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1525,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1536,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1541,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1555,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 1561,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1573,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1583,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1586,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1591,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1605,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1621,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 1631,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1634,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1639,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
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
    "type": "Keyword",
    "value": "for",
    "start": 1669,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1674,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1679,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1693,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1704,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1709,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1723,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1731,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1735,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1738,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1743,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1754,
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
    "value": ".",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1757,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1776,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1781,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1786,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1800,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1811,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1816,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1830,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1838,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1843,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1848,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ".",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 1862,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1868,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 1885,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1901,
    "end": 1907
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1908,
    "end": 1911
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1919,
    "end": 1920
  }
]
```
