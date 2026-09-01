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
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
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
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "value",
                  "raw": "\"value\"",
                  "start": 21,
                  "end": 28
                },
                "start": 21,
                "end": 28
              },
              "start": 19,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 16,
            "end": 29
          }
        ],
        "start": 14,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 51
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 62
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 66
                },
                "typeArguments": null,
                "start": 63,
                "end": 66
              }
            ],
            "start": 62,
            "end": 67
          },
          "start": 55,
          "end": 67
        },
        "start": 53,
        "end": 67
      },
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
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 86
                  },
                  "value": {
                    "type": "Literal",
                    "value": "value",
                    "raw": "\"value\"",
                    "start": 88,
                    "end": 95
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 83,
                  "end": 95
                }
              ],
              "start": 81,
              "end": 97
            },
            "start": 74,
            "end": 98
          }
        ],
        "start": 68,
        "end": 100
      },
      "expression": false,
      "start": 33,
      "end": 100
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 120
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 131
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 135
                },
                "typeArguments": null,
                "start": 132,
                "end": 135
              }
            ],
            "start": 131,
            "end": 136
          },
          "start": 124,
          "end": 136
        },
        "start": 122,
        "end": 136
      },
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
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 161
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 162,
                      "end": 169
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 183,
                            "end": 190
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
                                    "name": "key",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 193,
                                    "end": 196
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "value",
                                    "raw": "\"value\"",
                                    "start": 198,
                                    "end": 205
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 193,
                                  "end": 205
                                }
                              ],
                              "start": 191,
                              "end": 207
                            }
                          ],
                          "optional": false,
                          "start": 183,
                          "end": 208
                        },
                        "directive": null,
                        "start": 183,
                        "end": 209
                      }
                    ],
                    "start": 173,
                    "end": 215
                  },
                  "id": null,
                  "generator": false,
                  "start": 162,
                  "end": 215
                }
              ],
              "start": 150,
              "end": 216
            },
            "start": 143,
            "end": 217
          }
        ],
        "start": 137,
        "end": 219
      },
      "expression": false,
      "start": 102,
      "end": 219
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 239
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 250
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 254
                },
                "typeArguments": null,
                "start": 251,
                "end": 254
              }
            ],
            "start": 250,
            "end": 255
          },
          "start": 243,
          "end": 255
        },
        "start": 241,
        "end": 255
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "AwaitExpression",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 280
                    },
                    "value": {
                      "type": "Literal",
                      "value": "value",
                      "raw": "\"value\"",
                      "start": 282,
                      "end": 289
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 277,
                    "end": 289
                  }
                ],
                "start": 275,
                "end": 291
              },
              "start": 269,
              "end": 291
            },
            "start": 262,
            "end": 292
          }
        ],
        "start": 256,
        "end": 294
      },
      "expression": false,
      "start": 221,
      "end": 294
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 314
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 318,
            "end": 325
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 329
                },
                "typeArguments": null,
                "start": 326,
                "end": 329
              }
            ],
            "start": 325,
            "end": 330
          },
          "start": 318,
          "end": 330
        },
        "start": 316,
        "end": 330
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "AwaitExpression",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 354,
                  "end": 361
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 362,
                        "end": 369
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 383,
                              "end": 390
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
                                      "name": "key",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 393,
                                      "end": 396
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": "value",
                                      "raw": "\"value\"",
                                      "start": 398,
                                      "end": 405
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 393,
                                    "end": 405
                                  }
                                ],
                                "start": 391,
                                "end": 407
                              }
                            ],
                            "optional": false,
                            "start": 383,
                            "end": 408
                          },
                          "directive": null,
                          "start": 383,
                          "end": 409
                        }
                      ],
                      "start": 373,
                      "end": 415
                    },
                    "id": null,
                    "generator": false,
                    "start": 362,
                    "end": 415
                  }
                ],
                "start": 350,
                "end": 416
              },
              "start": 344,
              "end": 416
            },
            "start": 337,
            "end": 417
          }
        ],
        "start": 331,
        "end": 419
      },
      "expression": false,
      "start": 296,
      "end": 419
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Context",
        "optional": false,
        "typeAnnotation": null,
        "start": 435,
        "end": 442
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
              "type": "Identifier",
              "decorators": [],
              "name": "_runnable",
              "optional": false,
              "typeAnnotation": null,
              "start": 455,
              "end": 464
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 447,
            "end": 465
          }
        ],
        "start": 443,
        "end": 467
      },
      "abstract": false,
      "declare": true,
      "start": 421,
      "end": 467
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Done",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 477
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "err",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 487,
                "end": 490
              },
              "start": 485,
              "end": 490
            },
            "start": 481,
            "end": 490
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 495,
            "end": 499
          },
          "start": 492,
          "end": 499
        },
        "start": 480,
        "end": 499
      },
      "declare": false,
      "start": 468,
      "end": 500
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Func",
        "optional": false,
        "typeAnnotation": null,
        "start": 506,
        "end": 510
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 520,
                  "end": 527
                },
                "typeArguments": null,
                "start": 520,
                "end": 527
              },
              "start": 518,
              "end": 527
            },
            "start": 514,
            "end": 527
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "done",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Done",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 539
                },
                "typeArguments": null,
                "start": 535,
                "end": 539
              },
              "start": 533,
              "end": 539
            },
            "start": 529,
            "end": 539
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 544,
            "end": 548
          },
          "start": 541,
          "end": 548
        },
        "start": 513,
        "end": 548
      },
      "declare": false,
      "start": 501,
      "end": 549
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AsyncFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 555,
        "end": 564
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 574,
                  "end": 581
                },
                "typeArguments": null,
                "start": 574,
                "end": 581
              },
              "start": 572,
              "end": 581
            },
            "start": 568,
            "end": 581
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PromiseLike",
              "optional": false,
              "typeAnnotation": null,
              "start": 586,
              "end": 597
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 598,
                  "end": 601
                }
              ],
              "start": 597,
              "end": 602
            },
            "start": 586,
            "end": 602
          },
          "start": 583,
          "end": 602
        },
        "start": 567,
        "end": 602
      },
      "declare": false,
      "start": 550,
      "end": 603
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 615,
        "end": 627
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Func",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 637,
                      "end": 641
                    },
                    "typeArguments": null,
                    "start": 637,
                    "end": 641
                  },
                  "start": 635,
                  "end": 641
                },
                "start": 633,
                "end": 641
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 644,
                "end": 648
              },
              "start": 642,
              "end": 648
            },
            "start": 632,
            "end": 649
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncFunc",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 657,
                      "end": 666
                    },
                    "typeArguments": null,
                    "start": 657,
                    "end": 666
                  },
                  "start": 655,
                  "end": 666
                },
                "start": 653,
                "end": 666
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 669,
                "end": 673
              },
              "start": 667,
              "end": 673
            },
            "start": 652,
            "end": 674
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "title",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 685,
                    "end": 691
                  },
                  "start": 683,
                  "end": 691
                },
                "start": 678,
                "end": 691
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Func",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 698,
                      "end": 702
                    },
                    "typeArguments": null,
                    "start": 698,
                    "end": 702
                  },
                  "start": 696,
                  "end": 702
                },
                "start": 693,
                "end": 702
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 705,
                "end": 709
              },
              "start": 703,
              "end": 709
            },
            "start": 677,
            "end": 710
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "title",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 721,
                    "end": 727
                  },
                  "start": 719,
                  "end": 727
                },
                "start": 714,
                "end": 727
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncFunc",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 734,
                      "end": 743
                    },
                    "typeArguments": null,
                    "start": 734,
                    "end": 743
                  },
                  "start": 732,
                  "end": 743
                },
                "start": 729,
                "end": 743
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 746,
                "end": 750
              },
              "start": 744,
              "end": 750
            },
            "start": 713,
            "end": 751
          }
        ],
        "start": 628,
        "end": 753
      },
      "declare": false,
      "start": 605,
      "end": 753
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
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 787
                },
                "typeArguments": null,
                "start": 775,
                "end": 787
              },
              "start": 773,
              "end": 787
            },
            "start": 769,
            "end": 787
          },
          "init": null,
          "definite": false,
          "start": 769,
          "end": 787
        }
      ],
      "declare": true,
      "start": 755,
      "end": 788
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ProcessTreeNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 800,
        "end": 815
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
              "name": "pid",
              "optional": false,
              "typeAnnotation": null,
              "start": 820,
              "end": 823
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 825,
                "end": 831
              },
              "start": 823,
              "end": 831
            },
            "accessibility": null,
            "static": false,
            "start": 820,
            "end": 832
          },
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
              "start": 835,
              "end": 839
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 841,
                "end": 847
              },
              "start": 839,
              "end": 847
            },
            "accessibility": null,
            "static": false,
            "start": 835,
            "end": 848
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "memory",
              "optional": false,
              "typeAnnotation": null,
              "start": 851,
              "end": 857
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 860,
                "end": 866
              },
              "start": 858,
              "end": 866
            },
            "accessibility": null,
            "static": false,
            "start": 851,
            "end": 867
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commandLine",
              "optional": false,
              "typeAnnotation": null,
              "start": 870,
              "end": 881
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 884,
                "end": 890
              },
              "start": 882,
              "end": 890
            },
            "accessibility": null,
            "static": false,
            "start": 870,
            "end": 891
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 894,
              "end": 902
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ProcessTreeNode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 904,
                    "end": 919
                  },
                  "typeArguments": null,
                  "start": 904,
                  "end": 919
                },
                "start": 904,
                "end": 921
              },
              "start": 902,
              "end": 921
            },
            "accessibility": null,
            "static": false,
            "start": 894,
            "end": 922
          }
        ],
        "start": 816,
        "end": 924
      },
      "declare": false,
      "start": 790,
      "end": 924
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "getProcessTree",
          "optional": false,
          "typeAnnotation": null,
          "start": 950,
          "end": 964
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "rootPid",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 977,
                "end": 983
              },
              "start": 975,
              "end": 983
            },
            "start": 968,
            "end": 983
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "callback",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tree",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ProcessTreeNode",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1004,
                          "end": 1019
                        },
                        "typeArguments": null,
                        "start": 1004,
                        "end": 1019
                      },
                      "start": 1002,
                      "end": 1019
                    },
                    "start": 998,
                    "end": 1019
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1024,
                    "end": 1028
                  },
                  "start": 1021,
                  "end": 1028
                },
                "start": 997,
                "end": 1028
              },
              "start": 995,
              "end": 1028
            },
            "start": 987,
            "end": 1028
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1032,
            "end": 1036
          },
          "start": 1030,
          "end": 1036
        },
        "body": null,
        "expression": false,
        "start": 933,
        "end": 1037
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 926,
      "end": 1037
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1039,
          "end": 1043
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "windows-process-tree",
            "raw": "\"windows-process-tree\"",
            "start": 1044,
            "end": 1066
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
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
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1095,
                      "end": 1102
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1104,
                            "end": 1111
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "reject",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1113,
                            "end": 1119
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getProcessTree",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1130,
                                  "end": 1144
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 123,
                                    "raw": "123",
                                    "start": 1145,
                                    "end": 1148
                                  },
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "expression": false,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "tree",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1151,
                                        "end": 1155
                                      }
                                    ],
                                    "returnType": null,
                                    "body": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "IfStatement",
                                          "test": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "tree",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1172,
                                            "end": 1176
                                          },
                                          "consequent": {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "resolve",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1188,
                                                    "end": 1195
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [],
                                                  "optional": false,
                                                  "start": 1188,
                                                  "end": 1197
                                                },
                                                "directive": null,
                                                "start": 1188,
                                                "end": 1198
                                              }
                                            ],
                                            "start": 1178,
                                            "end": 1206
                                          },
                                          "alternate": {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "reject",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1222,
                                                    "end": 1228
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [
                                                    {
                                                      "type": "NewExpression",
                                                      "callee": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "Error",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1233,
                                                        "end": 1238
                                                      },
                                                      "typeArguments": null,
                                                      "arguments": [
                                                        {
                                                          "type": "Literal",
                                                          "value": "windows-process-tree",
                                                          "raw": "\"windows-process-tree\"",
                                                          "start": 1239,
                                                          "end": 1261
                                                        }
                                                      ],
                                                      "start": 1229,
                                                      "end": 1262
                                                    }
                                                  ],
                                                  "optional": false,
                                                  "start": 1222,
                                                  "end": 1263
                                                },
                                                "directive": null,
                                                "start": 1222,
                                                "end": 1264
                                              }
                                            ],
                                            "start": 1212,
                                            "end": 1272
                                          },
                                          "start": 1168,
                                          "end": 1272
                                        }
                                      ],
                                      "start": 1160,
                                      "end": 1278
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 1150,
                                    "end": 1278
                                  }
                                ],
                                "optional": false,
                                "start": 1130,
                                "end": 1279
                              },
                              "directive": null,
                              "start": 1130,
                              "end": 1280
                            }
                          ],
                          "start": 1124,
                          "end": 1284
                        },
                        "id": null,
                        "generator": false,
                        "start": 1103,
                        "end": 1284
                      }
                    ],
                    "start": 1091,
                    "end": 1285
                  },
                  "start": 1084,
                  "end": 1286
                }
              ],
              "start": 1080,
              "end": 1288
            },
            "id": null,
            "generator": false,
            "start": 1068,
            "end": 1288
          }
        ],
        "optional": false,
        "start": 1039,
        "end": 1289
      },
      "directive": null,
      "start": 1039,
      "end": 1290
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ILocalExtension",
        "optional": false,
        "typeAnnotation": null,
        "start": 1302,
        "end": 1317
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
              "name": "isApplicationScoped",
              "optional": false,
              "typeAnnotation": null,
              "start": 1322,
              "end": 1341
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1343,
                "end": 1350
              },
              "start": 1341,
              "end": 1350
            },
            "accessibility": null,
            "static": false,
            "start": 1322,
            "end": 1351
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "publisherId",
              "optional": false,
              "typeAnnotation": null,
              "start": 1354,
              "end": 1365
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1367,
                    "end": 1373
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 1376,
                    "end": 1380
                  }
                ],
                "start": 1367,
                "end": 1380
              },
              "start": 1365,
              "end": 1380
            },
            "accessibility": null,
            "static": false,
            "start": 1354,
            "end": 1381
          }
        ],
        "start": 1318,
        "end": 1383
      },
      "declare": false,
      "start": 1292,
      "end": 1383
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Metadata",
        "optional": false,
        "typeAnnotation": null,
        "start": 1389,
        "end": 1397
      },
      "typeParameters": null,
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
              "name": "updated",
              "optional": false,
              "typeAnnotation": null,
              "start": 1404,
              "end": 1411
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1413,
                "end": 1420
              },
              "start": 1411,
              "end": 1420
            },
            "accessibility": null,
            "static": false,
            "start": 1404,
            "end": 1421
          }
        ],
        "start": 1400,
        "end": 1423
      },
      "declare": false,
      "start": 1384,
      "end": 1424
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "scanMetadata",
        "optional": false,
        "typeAnnotation": null,
        "start": 1442,
        "end": 1454
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "local",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ILocalExtension",
                "optional": false,
                "typeAnnotation": null,
                "start": 1465,
                "end": 1480
              },
              "typeArguments": null,
              "start": 1465,
              "end": 1480
            },
            "start": 1463,
            "end": 1480
          },
          "start": 1458,
          "end": 1480
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1484,
            "end": 1491
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Metadata",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1492,
                      "end": 1500
                    },
                    "typeArguments": null,
                    "start": 1492,
                    "end": 1500
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1503,
                    "end": 1512
                  }
                ],
                "start": 1492,
                "end": 1512
              }
            ],
            "start": 1491,
            "end": 1513
          },
          "start": 1484,
          "end": 1513
        },
        "start": 1482,
        "end": 1513
      },
      "body": null,
      "expression": false,
      "start": 1425,
      "end": 1514
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "copyExtensions",
        "optional": false,
        "typeAnnotation": null,
        "start": 1531,
        "end": 1545
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fromExtensions",
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
                  "name": "ILocalExtension",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1565,
                  "end": 1580
                },
                "typeArguments": null,
                "start": 1565,
                "end": 1580
              },
              "start": 1565,
              "end": 1582
            },
            "start": 1563,
            "end": 1582
          },
          "start": 1549,
          "end": 1582
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1586,
            "end": 1593
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 1594,
                "end": 1598
              }
            ],
            "start": 1593,
            "end": 1599
          },
          "start": 1586,
          "end": 1599
        },
        "start": 1584,
        "end": 1599
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "extensions",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ILocalExtension",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1623,
                              "end": 1638
                            },
                            "typeArguments": null,
                            "start": 1623,
                            "end": 1638
                          },
                          {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Metadata",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1640,
                                  "end": 1648
                                },
                                "typeArguments": null,
                                "start": 1640,
                                "end": 1648
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 1651,
                                "end": 1660
                              }
                            ],
                            "start": 1640,
                            "end": 1660
                          }
                        ],
                        "start": 1622,
                        "end": 1661
                      },
                      "start": 1622,
                      "end": 1663
                    },
                    "start": 1620,
                    "end": 1663
                  },
                  "start": 1610,
                  "end": 1663
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1676,
                        "end": 1683
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "all",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1684,
                        "end": 1687
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1676,
                      "end": 1687
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fromExtensions",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1695,
                                "end": 1709
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "filter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1719,
                                "end": 1725
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1695,
                              "end": 1725
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "e",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1727,
                                    "end": 1728
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "e",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1734,
                                      "end": 1735
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "isApplicationScoped",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1736,
                                      "end": 1755
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1734,
                                    "end": 1755
                                  },
                                  "prefix": true,
                                  "start": 1733,
                                  "end": 1755
                                },
                                "id": null,
                                "generator": false,
                                "start": 1726,
                                "end": 1755
                              }
                            ],
                            "optional": false,
                            "start": 1695,
                            "end": 1756
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "map",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1766,
                            "end": 1769
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1695,
                          "end": 1769
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": true,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1777,
                                "end": 1778
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1784,
                                  "end": 1785
                                },
                                {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "scanMetadata",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1793,
                                      "end": 1805
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "e",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1806,
                                        "end": 1807
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1793,
                                    "end": 1808
                                  },
                                  "start": 1787,
                                  "end": 1808
                                }
                              ],
                              "start": 1783,
                              "end": 1809
                            },
                            "id": null,
                            "generator": false,
                            "start": 1770,
                            "end": 1809
                          }
                        ],
                        "optional": false,
                        "start": 1695,
                        "end": 1810
                      }
                    ],
                    "optional": false,
                    "start": 1676,
                    "end": 1816
                  },
                  "start": 1670,
                  "end": 1816
                },
                "definite": false,
                "start": 1610,
                "end": 1816
              }
            ],
            "declare": false,
            "start": 1604,
            "end": 1817
          }
        ],
        "start": 1600,
        "end": 1819
      },
      "expression": false,
      "start": 1516,
      "end": 1819
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1819
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
    "value": "Obj",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 16,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 21,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 33,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 39,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 55,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 63,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 102,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 108,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 124,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 132,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 143,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 150,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 154,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 162,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 170,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 183,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 193,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 198,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 221,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 227,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 236,
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
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 243,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 251,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 262,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 269,
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
    "value": "key",
    "start": 277,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 282,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 296,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 302,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 311,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 318,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 326,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 337,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 344,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 350,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 354,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 362,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 370,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 383,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 393,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 398,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 415,
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
    "type": "Identifier",
    "value": "declare",
    "start": 421,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 429,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 435,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 447,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "_runnable",
    "start": 455,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 468,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "Done",
    "start": 473,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 481,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 487,
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
    "value": "=>",
    "start": 492,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 495,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 501,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 506,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 514,
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
    "value": "Context",
    "start": 520,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 529,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "Done",
    "start": 535,
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
    "type": "Keyword",
    "value": "void",
    "start": 544,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 550,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "AsyncFunc",
    "start": 555,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 568,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 574,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 583,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 586,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 598,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 605,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "TestFunction",
    "start": 615,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 633,
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
    "value": "Func",
    "start": 637,
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
    "value": ":",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 644,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 653,
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
    "value": "AsyncFunc",
    "start": 657,
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
    "value": ":",
    "start": 667,
    "end": 668
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 669,
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
    "value": "(",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 678,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 685,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 693,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 698,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 705,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 714,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 721,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 729,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "AsyncFunc",
    "start": 734,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 746,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 755,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 763,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "test",
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
    "type": "Identifier",
    "value": "TestFunction",
    "start": 775,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 790,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "ProcessTreeNode",
    "start": 800,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "pid",
    "start": 820,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 825,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 835,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 841,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "memory",
    "start": 851,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 860,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "commandLine",
    "start": 870,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 884,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 894,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "ProcessTreeNode",
    "start": 904,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 923,
    "end": 924
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 926,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 933,
    "end": 940
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 941,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "getProcessTree",
    "start": 950,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "rootPid",
    "start": 968,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 977,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 987,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "tree",
    "start": 998,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "ProcessTreeNode",
    "start": 1004,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1021,
    "end": 1023
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1024,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1032,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1039,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "String",
    "value": "\"windows-process-tree\"",
    "start": 1044,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1068,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1077,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1084,
    "end": 1090
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1091,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1095,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1104,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 1113,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1121,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "getProcessTree",
    "start": 1130,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1145,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "tree",
    "start": 1151,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1157,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1168,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "tree",
    "start": 1172,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1188,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1207,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 1222,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1229,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 1233,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "String",
    "value": "\"windows-process-tree\"",
    "start": 1239,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1292,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "ILocalExtension",
    "start": 1302,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "isApplicationScoped",
    "start": 1322,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1343,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "publisherId",
    "start": 1354,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1367,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1376,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1384,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "Metadata",
    "start": 1389,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "updated",
    "start": 1404,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1413,
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
    "type": "Punctuator",
    "value": ";",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1425,
    "end": 1432
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1433,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "scanMetadata",
    "start": 1442,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "local",
    "start": 1458,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "ILocalExtension",
    "start": 1465,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1484,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "Metadata",
    "start": 1492,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1503,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1516,
    "end": 1521
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1522,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "copyExtensions",
    "start": 1531,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "fromExtensions",
    "start": 1549,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "ILocalExtension",
    "start": 1565,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1586,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1594,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1604,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "extensions",
    "start": 1610,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "ILocalExtension",
    "start": 1623,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "Metadata",
    "start": 1640,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1651,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1670,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1676,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 1684,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "fromExtensions",
    "start": 1695,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 1719,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1730,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "isApplicationScoped",
    "start": 1736,
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
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1766,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1770,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1780,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1787,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "scanMetadata",
    "start": 1793,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1818,
    "end": 1819
  }
]
```
