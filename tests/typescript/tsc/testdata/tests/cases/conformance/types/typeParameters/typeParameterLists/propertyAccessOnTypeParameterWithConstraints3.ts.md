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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 91
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 101
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 105,
                  "end": 111
                },
                "start": 103,
                "end": 111
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 121,
                      "end": 123
                    },
                    "start": 114,
                    "end": 124
                  }
                ],
                "start": 112,
                "end": 126
              },
              "expression": false,
              "start": 101,
              "end": 126
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 98,
            "end": 126
          }
        ],
        "start": 92,
        "end": 128
      },
      "abstract": false,
      "declare": false,
      "start": 84,
      "end": 128
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 137
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 147
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 157
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 161,
                  "end": 167
                },
                "start": 159,
                "end": 167
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 185,
                      "end": 187
                    },
                    "start": 178,
                    "end": 188
                  }
                ],
                "start": 168,
                "end": 194
              },
              "expression": false,
              "start": 157,
              "end": 194
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 154,
            "end": 194
          }
        ],
        "start": 148,
        "end": 196
      },
      "abstract": false,
      "declare": false,
      "start": 130,
      "end": 196
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 204,
        "end": 205
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 207
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 217
              },
              "typeArguments": null,
              "start": 216,
              "end": 217
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 206,
            "end": 217
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 220
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 230
              },
              "typeArguments": null,
              "start": 229,
              "end": 230
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 219,
            "end": 230
          }
        ],
        "start": 205,
        "end": 231
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 239
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 259,
                                "end": 260
                              },
                              "typeArguments": null,
                              "start": 259,
                              "end": 260
                            },
                            "start": 257,
                            "end": 260
                          },
                          "start": 256,
                          "end": 260
                        },
                        "init": null,
                        "definite": false,
                        "start": 256,
                        "end": 260
                      }
                    ],
                    "declare": false,
                    "start": 252,
                    "end": 261
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 296,
                          "end": 297
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 300,
                              "end": 301
                            },
                            "property": {
                              "type": "Literal",
                              "value": "foo",
                              "raw": "'foo'",
                              "start": 302,
                              "end": 307
                            },
                            "optional": false,
                            "computed": true,
                            "start": 300,
                            "end": 308
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 300,
                          "end": 310
                        },
                        "definite": false,
                        "start": 296,
                        "end": 310
                      }
                    ],
                    "declare": false,
                    "start": 292,
                    "end": 311
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 347,
                        "end": 348
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 351,
                            "end": 352
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 353,
                            "end": 356
                          },
                          "optional": false,
                          "computed": false,
                          "start": 351,
                          "end": 356
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 351,
                        "end": 358
                      },
                      "start": 347,
                      "end": 358
                    },
                    "start": 340,
                    "end": 359
                  }
                ],
                "start": 242,
                "end": 365
              },
              "expression": false,
              "start": 239,
              "end": 365
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 238,
            "end": 365
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 371,
              "end": 372
            },
            "value": {
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 376,
                        "end": 377
                      },
                      "typeArguments": null,
                      "start": 376,
                      "end": 377
                    },
                    "start": 374,
                    "end": 377
                  },
                  "start": 373,
                  "end": 377
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 415,
                          "end": 416
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 419,
                              "end": 420
                            },
                            "property": {
                              "type": "Literal",
                              "value": "foo",
                              "raw": "'foo'",
                              "start": 421,
                              "end": 426
                            },
                            "optional": false,
                            "computed": true,
                            "start": 419,
                            "end": 427
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 419,
                          "end": 429
                        },
                        "definite": false,
                        "start": 415,
                        "end": 429
                      }
                    ],
                    "declare": false,
                    "start": 411,
                    "end": 430
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 466,
                        "end": 467
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 470,
                            "end": 471
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 472,
                            "end": 475
                          },
                          "optional": false,
                          "computed": false,
                          "start": 470,
                          "end": 475
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 470,
                        "end": 477
                      },
                      "start": 466,
                      "end": 477
                    },
                    "start": 459,
                    "end": 478
                  }
                ],
                "start": 379,
                "end": 484
              },
              "expression": false,
              "start": 372,
              "end": 484
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 371,
            "end": 484
          }
        ],
        "start": 232,
        "end": 486
      },
      "abstract": false,
      "declare": false,
      "start": 198,
      "end": 486
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
            "name": "r1a",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 495
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 503,
                  "end": 504
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 505,
                        "end": 506
                      },
                      "typeArguments": null,
                      "start": 505,
                      "end": 506
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 508,
                        "end": 509
                      },
                      "typeArguments": null,
                      "start": 508,
                      "end": 509
                    }
                  ],
                  "start": 504,
                  "end": 510
                },
                "arguments": [],
                "start": 499,
                "end": 512
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 515
              },
              "optional": false,
              "computed": false,
              "start": 498,
              "end": 515
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 498,
            "end": 517
          },
          "definite": false,
          "start": 492,
          "end": 517
        }
      ],
      "declare": false,
      "start": 488,
      "end": 518
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
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null,
            "start": 523,
            "end": 526
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 534,
                  "end": 535
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 536,
                        "end": 537
                      },
                      "typeArguments": null,
                      "start": 536,
                      "end": 537
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 539,
                        "end": 540
                      },
                      "typeArguments": null,
                      "start": 539,
                      "end": 540
                    }
                  ],
                  "start": 535,
                  "end": 541
                },
                "arguments": [],
                "start": 530,
                "end": 543
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 545,
                "end": 546
              },
              "optional": false,
              "computed": false,
              "start": 529,
              "end": 546
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 551,
                  "end": 552
                },
                "typeArguments": null,
                "arguments": [],
                "start": 547,
                "end": 554
              }
            ],
            "optional": false,
            "start": 529,
            "end": 555
          },
          "definite": false,
          "start": 523,
          "end": 555
        }
      ],
      "declare": false,
      "start": 519,
      "end": 556
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 568,
        "end": 569
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 571
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 580,
                "end": 581
              },
              "typeArguments": null,
              "start": 580,
              "end": 581
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 570,
            "end": 581
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 584
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 593,
                "end": 594
              },
              "typeArguments": null,
              "start": 593,
              "end": 594
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 583,
            "end": 594
          }
        ],
        "start": 569,
        "end": 595
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 602,
              "end": 605
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 607,
                  "end": 608
                },
                "typeArguments": null,
                "start": 607,
                "end": 608
              },
              "start": 605,
              "end": 608
            },
            "accessibility": null,
            "static": false,
            "start": 602,
            "end": 609
          }
        ],
        "start": 596,
        "end": 611
      },
      "declare": false,
      "start": 558,
      "end": 611
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 620
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 621,
                        "end": 622
                      },
                      "typeArguments": null,
                      "start": 621,
                      "end": 622
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 624,
                        "end": 625
                      },
                      "typeArguments": null,
                      "start": 624,
                      "end": 625
                    }
                  ],
                  "start": 620,
                  "end": 626
                },
                "start": 619,
                "end": 626
              },
              "start": 617,
              "end": 626
            },
            "start": 616,
            "end": 626
          },
          "init": null,
          "definite": false,
          "start": 616,
          "end": 626
        }
      ],
      "declare": false,
      "start": 612,
      "end": 627
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 632,
            "end": 634
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 637,
                  "end": 638
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 639,
                  "end": 642
                },
                "optional": false,
                "computed": false,
                "start": 637,
                "end": 642
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 643,
                "end": 646
              },
              "optional": false,
              "computed": false,
              "start": 637,
              "end": 646
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 637,
            "end": 648
          },
          "definite": false,
          "start": 632,
          "end": 648
        }
      ],
      "declare": false,
      "start": 628,
      "end": 649
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
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null,
            "start": 654,
            "end": 657
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 660,
                  "end": 661
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 662,
                  "end": 665
                },
                "optional": false,
                "computed": false,
                "start": 660,
                "end": 665
              },
              "property": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 666,
                "end": 671
              },
              "optional": false,
              "computed": true,
              "start": 660,
              "end": 672
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 660,
            "end": 674
          },
          "definite": false,
          "start": 654,
          "end": 674
        }
      ],
      "declare": false,
      "start": 650,
      "end": 675
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 691,
                            "end": 692
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 701,
                              "end": 702
                            },
                            "typeArguments": null,
                            "start": 701,
                            "end": 702
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 691,
                          "end": 702
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 704,
                            "end": 705
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 714,
                              "end": 715
                            },
                            "typeArguments": null,
                            "start": 714,
                            "end": 715
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 704,
                          "end": 715
                        }
                      ],
                      "start": 690,
                      "end": 716
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 720,
                          "end": 721
                        },
                        "typeArguments": null,
                        "start": 720,
                        "end": 721
                      },
                      "start": 718,
                      "end": 721
                    },
                    "start": 690,
                    "end": 722
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 728,
                            "end": 729
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 738,
                              "end": 739
                            },
                            "typeArguments": null,
                            "start": 738,
                            "end": 739
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 728,
                          "end": 739
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 741,
                            "end": 742
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 751,
                              "end": 752
                            },
                            "typeArguments": null,
                            "start": 751,
                            "end": 752
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 741,
                          "end": 752
                        }
                      ],
                      "start": 727,
                      "end": 753
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 757,
                              "end": 758
                            },
                            "typeArguments": null,
                            "start": 757,
                            "end": 758
                          },
                          "start": 755,
                          "end": 758
                        },
                        "start": 754,
                        "end": 758
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 761,
                          "end": 762
                        },
                        "typeArguments": null,
                        "start": 761,
                        "end": 762
                      },
                      "start": 759,
                      "end": 762
                    },
                    "start": 727,
                    "end": 763
                  }
                ],
                "start": 684,
                "end": 765
              },
              "start": 682,
              "end": 765
            },
            "start": 681,
            "end": 765
          },
          "init": null,
          "definite": false,
          "start": 681,
          "end": 765
        }
      ],
      "declare": false,
      "start": 677,
      "end": 765
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 770,
            "end": 772
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 776
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 775,
                "end": 778
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 779,
                "end": 782
              },
              "optional": false,
              "computed": false,
              "start": 775,
              "end": 782
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 775,
            "end": 784
          },
          "definite": false,
          "start": 770,
          "end": 784
        }
      ],
      "declare": false,
      "start": 766,
      "end": 785
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
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null,
            "start": 853,
            "end": 856
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 859,
                  "end": 860
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 859,
                "end": 862
              },
              "property": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 863,
                "end": 868
              },
              "optional": false,
              "computed": true,
              "start": 859,
              "end": 869
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 859,
            "end": 871
          },
          "definite": false,
          "start": 853,
          "end": 871
        }
      ],
      "declare": false,
      "start": 849,
      "end": 872
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
            "name": "r3c",
            "optional": false,
            "typeAnnotation": null,
            "start": 933,
            "end": 936
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 939,
                  "end": 940
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 945,
                      "end": 946
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 941,
                    "end": 948
                  }
                ],
                "optional": false,
                "start": 939,
                "end": 949
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 950,
                "end": 953
              },
              "optional": false,
              "computed": false,
              "start": 939,
              "end": 953
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 939,
            "end": 955
          },
          "definite": false,
          "start": 933,
          "end": 955
        }
      ],
      "declare": false,
      "start": 929,
      "end": 956
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
            "name": "r3d",
            "optional": false,
            "typeAnnotation": null,
            "start": 1035,
            "end": 1038
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1041,
                  "end": 1042
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1047,
                      "end": 1048
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1043,
                    "end": 1050
                  }
                ],
                "optional": false,
                "start": 1041,
                "end": 1051
              },
              "property": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 1052,
                "end": 1057
              },
              "optional": false,
              "computed": true,
              "start": 1041,
              "end": 1058
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1041,
            "end": 1060
          },
          "definite": false,
          "start": 1035,
          "end": 1060
        }
      ],
      "declare": false,
      "start": 1031,
      "end": 1061
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1141,
            "end": 1142
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1151,
                  "end": 1154
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1157,
                          "end": 1158
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1167,
                            "end": 1168
                          },
                          "typeArguments": null,
                          "start": 1167,
                          "end": 1168
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1157,
                        "end": 1168
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1170,
                          "end": 1171
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1180,
                            "end": 1181
                          },
                          "typeArguments": null,
                          "start": 1180,
                          "end": 1181
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1170,
                        "end": 1181
                      }
                    ],
                    "start": 1156,
                    "end": 1182
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1186,
                            "end": 1187
                          },
                          "typeArguments": null,
                          "start": 1186,
                          "end": 1187
                        },
                        "start": 1184,
                        "end": 1187
                      },
                      "start": 1183,
                      "end": 1187
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1228,
                              "end": 1229
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1232,
                                  "end": 1233
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": "foo",
                                  "raw": "'foo'",
                                  "start": 1234,
                                  "end": 1239
                                },
                                "optional": false,
                                "computed": true,
                                "start": 1232,
                                "end": 1240
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1232,
                              "end": 1242
                            },
                            "definite": false,
                            "start": 1228,
                            "end": 1242
                          }
                        ],
                        "declare": false,
                        "start": 1224,
                        "end": 1243
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1279,
                            "end": 1280
                          },
                          "operator": "+",
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1283,
                                "end": 1284
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1285,
                                "end": 1288
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1283,
                              "end": 1288
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1283,
                            "end": 1290
                          },
                          "start": 1279,
                          "end": 1290
                        },
                        "start": 1272,
                        "end": 1291
                      }
                    ],
                    "start": 1192,
                    "end": 1297
                  },
                  "id": null,
                  "generator": false,
                  "start": 1156,
                  "end": 1297
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1151,
                "end": 1297
              }
            ],
            "start": 1145,
            "end": 1299
          },
          "definite": false,
          "start": 1141,
          "end": 1299
        }
      ],
      "declare": false,
      "start": 1137,
      "end": 1299
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1305,
            "end": 1307
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1310,
                "end": 1311
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1312,
                "end": 1315
              },
              "optional": false,
              "computed": false,
              "start": 1310,
              "end": 1315
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1320,
                  "end": 1321
                },
                "typeArguments": null,
                "arguments": [],
                "start": 1316,
                "end": 1323
              }
            ],
            "optional": false,
            "start": 1310,
            "end": 1324
          },
          "definite": false,
          "start": 1305,
          "end": 1324
        }
      ],
      "declare": false,
      "start": 1301,
      "end": 1325
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 84,
  "end": 1362
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 84,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "string",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 114,
    "end": 120
  },
  {
    "type": "String",
    "value": "''",
    "start": 121,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 130,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 138,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 178,
    "end": 184
  },
  {
    "type": "String",
    "value": "''",
    "start": 185,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 198,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 208,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 221,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 252,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 292,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 301,
    "end": 302
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 302,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 340,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 353,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 411,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 420,
    "end": 421
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 421,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 459,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 472,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 485,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 488,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "r1a",
    "start": 492,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 499,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 519,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "r1b",
    "start": 523,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 530,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 547,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 558,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 572,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 585,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 602,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 610,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 612,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 616,
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
    "value": "I",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 628,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 632,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 639,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 643,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 650,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "r2b",
    "start": 654,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 662,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 665,
    "end": 666
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 666,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 677,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 693,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 704,
    "end": 705
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 706,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Punctuator",
    "value": "<",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 728,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 730,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 741,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 743,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 757,
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
    "value": ":",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 764,
    "end": 765
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 766,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 770,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 779,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 784,
    "end": 785
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 849,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "r3b",
    "start": 853,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 862,
    "end": 863
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 863,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 871,
    "end": 872
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 929,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "r3c",
    "start": 933,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 940,
    "end": 941
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 941,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 950,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1031,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "r3d",
    "start": 1035,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1043,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1048,
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
    "value": ")",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1052,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1137,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1151,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1159,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1172,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1189,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1224,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1234,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1239,
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
    "value": ";",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1272,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1285,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1301,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 1305,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1312,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1316,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1324,
    "end": 1325
  }
]
```
