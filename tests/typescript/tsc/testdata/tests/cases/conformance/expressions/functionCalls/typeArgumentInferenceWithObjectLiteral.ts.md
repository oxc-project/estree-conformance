__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Computed",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 18,
        "end": 21
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "read",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 32
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
                  "start": 36,
                  "end": 37
                },
                "typeArguments": null,
                "start": 36,
                "end": 37
              },
              "start": 34,
              "end": 37
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 28,
            "end": 38
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "write",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 48
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
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
                      "start": 56,
                      "end": 57
                    },
                    "typeArguments": null,
                    "start": 56,
                    "end": 57
                  },
                  "start": 54,
                  "end": 57
                },
                "start": 49,
                "end": 57
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 43,
            "end": 59
          }
        ],
        "start": 22,
        "end": 61
      },
      "declare": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 75
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 76,
            "end": 77
          }
        ],
        "start": 75,
        "end": 78
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
                "name": "Computed",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 90
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 91,
                      "end": 92
                    },
                    "typeArguments": null,
                    "start": 91,
                    "end": 92
                  }
                ],
                "start": 90,
                "end": 93
              },
              "start": 82,
              "end": 93
            },
            "start": 80,
            "end": 93
          },
          "start": 79,
          "end": 93
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 95,
        "end": 98
      },
      "expression": false,
      "start": 63,
      "end": 98
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 107,
                "end": 113
              },
              "start": 105,
              "end": 113
            },
            "start": 104,
            "end": 113
          },
          "init": null,
          "definite": false,
          "start": 104,
          "end": 113
        }
      ],
      "declare": false,
      "start": 100,
      "end": 114
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 206,
          "end": 209
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "read",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 220
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 229
                  },
                  "id": null,
                  "generator": false,
                  "start": 222,
                  "end": 229
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 216,
                "end": 229
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "write",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 240
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 242,
                      "end": 247
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 251,
                      "end": 252
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 255,
                      "end": 260
                    },
                    "start": 251,
                    "end": 260
                  },
                  "id": null,
                  "generator": false,
                  "start": 242,
                  "end": 260
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 235,
                "end": 260
              }
            ],
            "start": 210,
            "end": 262
          }
        ],
        "optional": false,
        "start": 206,
        "end": 263
      },
      "directive": null,
      "start": 206,
      "end": 264
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 265,
          "end": 268
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "write",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 280
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 282,
                      "end": 287
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 291,
                      "end": 292
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 295,
                      "end": 300
                    },
                    "start": 291,
                    "end": 300
                  },
                  "id": null,
                  "generator": false,
                  "start": 282,
                  "end": 300
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 275,
                "end": 300
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "read",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 306,
                  "end": 310
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 318,
                    "end": 319
                  },
                  "id": null,
                  "generator": false,
                  "start": 312,
                  "end": 319
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 306,
                "end": 319
              }
            ],
            "start": 269,
            "end": 321
          }
        ],
        "optional": false,
        "start": 265,
        "end": 322
      },
      "directive": null,
      "start": 265,
      "end": 323
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 330,
        "end": 332
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 336
            },
            "initializer": null,
            "computed": false,
            "start": 335,
            "end": 336
          }
        ],
        "start": 333,
        "end": 338
      },
      "const": false,
      "declare": false,
      "start": 325,
      "end": 338
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 344,
        "end": 346
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 350
            },
            "initializer": null,
            "computed": false,
            "start": 349,
            "end": 350
          }
        ],
        "start": 347,
        "end": 352
      },
      "const": false,
      "declare": false,
      "start": 339,
      "end": 352
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 438,
        "end": 440
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 441,
              "end": 442
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 441,
            "end": 442
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 445
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 444,
            "end": 445
          }
        ],
        "start": 440,
        "end": 446
      },
      "params": [
        {
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
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "w",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 452,
                    "end": 453
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 459,
                                "end": 460
                              },
                              "typeArguments": null,
                              "start": 459,
                              "end": 460
                            },
                            "start": 457,
                            "end": 460
                          },
                          "start": 456,
                          "end": 460
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
                            "start": 465,
                            "end": 466
                          },
                          "typeArguments": null,
                          "start": 465,
                          "end": 466
                        },
                        "start": 462,
                        "end": 466
                      },
                      "start": 455,
                      "end": 466
                    },
                    "start": 453,
                    "end": 466
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 452,
                  "end": 467
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 468,
                    "end": 469
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
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
                            "start": 477,
                            "end": 478
                          },
                          "typeArguments": null,
                          "start": 477,
                          "end": 478
                        },
                        "start": 474,
                        "end": 478
                      },
                      "start": 471,
                      "end": 478
                    },
                    "start": 469,
                    "end": 478
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 468,
                  "end": 479
                }
              ],
              "start": 450,
              "end": 481
            },
            "start": 448,
            "end": 481
          },
          "start": 447,
          "end": 481
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
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
                "start": 486,
                "end": 487
              },
              "typeArguments": null,
              "start": 486,
              "end": 487
            },
            "start": 484,
            "end": 487
          },
          "start": 483,
          "end": 487
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
            "start": 490,
            "end": 491
          },
          "typeArguments": null,
          "start": 490,
          "end": 491
        },
        "start": 488,
        "end": 491
      },
      "body": null,
      "expression": false,
      "start": 421,
      "end": 492
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 502,
                "end": 508
              },
              "start": 500,
              "end": 508
            },
            "start": 498,
            "end": 508
          },
          "init": null,
          "definite": false,
          "start": 498,
          "end": 508
        }
      ],
      "declare": false,
      "start": 494,
      "end": 509
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 514,
            "end": 516
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 521
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 524,
                      "end": 525
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 527,
                          "end": 528
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 532,
                        "end": 533
                      },
                      "id": null,
                      "generator": false,
                      "start": 527,
                      "end": 533
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 524,
                    "end": 533
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 535,
                      "end": 536
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 544,
                        "end": 545
                      },
                      "id": null,
                      "generator": false,
                      "start": 538,
                      "end": 545
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 535,
                    "end": 545
                  }
                ],
                "start": 522,
                "end": 547
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 549,
                "end": 550
              }
            ],
            "optional": false,
            "start": 519,
            "end": 551
          },
          "definite": false,
          "start": 514,
          "end": 551
        }
      ],
      "declare": false,
      "start": 510,
      "end": 552
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 557,
            "end": 559
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 562,
              "end": 564
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 567,
                      "end": 568
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 570,
                          "end": 571
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 575,
                        "end": 576
                      },
                      "id": null,
                      "generator": false,
                      "start": 570,
                      "end": 576
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 567,
                    "end": 576
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 578,
                      "end": 579
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 587,
                        "end": 588
                      },
                      "id": null,
                      "generator": false,
                      "start": 581,
                      "end": 588
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 578,
                    "end": 588
                  }
                ],
                "start": 565,
                "end": 590
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 592,
                  "end": 594
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 595,
                  "end": 596
                },
                "optional": false,
                "computed": false,
                "start": 592,
                "end": 596
              }
            ],
            "optional": false,
            "start": 562,
            "end": 597
          },
          "definite": false,
          "start": 557,
          "end": 597
        }
      ],
      "declare": false,
      "start": 553,
      "end": 598
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 603,
            "end": 605
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 608,
              "end": 610
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 613,
                      "end": 614
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 616,
                          "end": 617
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 621,
                        "end": 622
                      },
                      "id": null,
                      "generator": false,
                      "start": 616,
                      "end": 622
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 613,
                    "end": 622
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 624,
                      "end": 625
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 633,
                          "end": 635
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 636,
                          "end": 637
                        },
                        "optional": false,
                        "computed": false,
                        "start": 633,
                        "end": 637
                      },
                      "id": null,
                      "generator": false,
                      "start": 627,
                      "end": 637
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 624,
                    "end": 637
                  }
                ],
                "start": 611,
                "end": 639
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 641,
                "end": 642
              }
            ],
            "optional": false,
            "start": 608,
            "end": 643
          },
          "definite": false,
          "start": 603,
          "end": 643
        }
      ],
      "declare": false,
      "start": 599,
      "end": 644
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 654,
                  "end": 656
                },
                "typeArguments": null,
                "start": 654,
                "end": 656
              },
              "start": 652,
              "end": 656
            },
            "start": 650,
            "end": 656
          },
          "init": null,
          "definite": false,
          "start": 650,
          "end": 656
        }
      ],
      "declare": false,
      "start": 646,
      "end": 657
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 662,
            "end": 664
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 667,
              "end": 669
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 672,
                      "end": 673
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 675,
                          "end": 676
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 680,
                        "end": 681
                      },
                      "id": null,
                      "generator": false,
                      "start": 675,
                      "end": 681
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 672,
                    "end": 681
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 683,
                      "end": 684
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 692,
                          "end": 694
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 695,
                          "end": 696
                        },
                        "optional": false,
                        "computed": false,
                        "start": 692,
                        "end": 696
                      },
                      "id": null,
                      "generator": false,
                      "start": 686,
                      "end": 696
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 683,
                    "end": 696
                  }
                ],
                "start": 670,
                "end": 698
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 700,
                  "end": 702
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 703,
                  "end": 704
                },
                "optional": false,
                "computed": false,
                "start": 700,
                "end": 704
              }
            ],
            "optional": false,
            "start": 667,
            "end": 705
          },
          "definite": false,
          "start": 662,
          "end": 705
        }
      ],
      "declare": false,
      "start": 658,
      "end": 706
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
            "name": "v3",
            "optional": false,
            "typeAnnotation": null,
            "start": 712,
            "end": 714
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 717,
              "end": 719
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 722,
                      "end": 723
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 725,
                          "end": 726
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 730,
                        "end": 731
                      },
                      "id": null,
                      "generator": false,
                      "start": 725,
                      "end": 731
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 722,
                    "end": 731
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 733,
                      "end": 734
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 742,
                          "end": 744
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 745,
                          "end": 746
                        },
                        "optional": false,
                        "computed": false,
                        "start": 742,
                        "end": 746
                      },
                      "id": null,
                      "generator": false,
                      "start": 736,
                      "end": 746
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 733,
                    "end": 746
                  }
                ],
                "start": 720,
                "end": 748
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 750,
                  "end": 752
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 753,
                  "end": 754
                },
                "optional": false,
                "computed": false,
                "start": 750,
                "end": 754
              }
            ],
            "optional": false,
            "start": 717,
            "end": 755
          },
          "definite": false,
          "start": 712,
          "end": 755
        }
      ],
      "declare": false,
      "start": 708,
      "end": 756
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 766
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Computed",
    "start": 10,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "read",
    "start": 28,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
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
    "value": "T",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "write",
    "start": 43,
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
    "value": "value",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 63,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 72,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 77,
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
    "value": "x",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "Computed",
    "start": 82,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 100,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "read",
    "start": 216,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 225,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "write",
    "start": 235,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 242,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 248,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 255,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 265,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "write",
    "start": 275,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 282,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 288,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 295,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "read",
    "start": 306,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 315,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 325,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 330,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 339,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 344,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 421,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 429,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 438,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "w",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 462,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 474,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
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
    "value": "b",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "var",
    "start": 494,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 498,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 502,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 510,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 514,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 519,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 529,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 541,
    "end": 543
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 547,
    "end": 548
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 553,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 557,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 562,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 572,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 584,
    "end": 586
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 592,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 599,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 603,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 608,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 618,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "r",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 630,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 633,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 639,
    "end": 640
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 643,
    "end": 644
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 646,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 650,
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
    "value": "E1",
    "start": 654,
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
    "value": "var",
    "start": 658,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 662,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 667,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 677,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 689,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 692,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 700,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 708,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 712,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 717,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 727,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 739,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 742,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 750,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 753,
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
    "value": ";",
    "start": 755,
    "end": 756
  }
]
```
