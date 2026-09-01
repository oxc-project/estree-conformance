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
        "name": "MyThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 164
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 178
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 179,
                "end": 182
              }
            ],
            "start": 178,
            "end": 183
          },
          "start": 173,
          "end": 183
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 184,
        "end": 187
      },
      "declare": false,
      "start": 147,
      "end": 187
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyThing2",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 206
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
              "start": 207,
              "end": 208
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 207,
            "end": 208
          }
        ],
        "start": 206,
        "end": 209
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 223
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
                  "start": 224,
                  "end": 225
                },
                "typeArguments": null,
                "start": 224,
                "end": 225
              }
            ],
            "start": 223,
            "end": 226
          },
          "start": 218,
          "end": 226
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 227,
        "end": 230
      },
      "declare": false,
      "start": 188,
      "end": 230
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 244
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 249
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 251,
                "end": 258
              },
              "typeArguments": null,
              "start": 251,
              "end": 258
            },
            "start": 249,
            "end": 258
          },
          "value": null,
          "start": 245,
          "end": 258
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 260,
        "end": 263
      },
      "expression": false,
      "start": 232,
      "end": 263
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 269
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 284
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 288,
                  "end": 289
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 291,
                      "end": 298
                    },
                    "typeArguments": null,
                    "start": 291,
                    "end": 298
                  },
                  "start": 289,
                  "end": 298
                },
                "value": null,
                "start": 285,
                "end": 298
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 300,
              "end": 303
            },
            "expression": false,
            "start": 272,
            "end": 303
          },
          "definite": false,
          "start": 268,
          "end": 303
        }
      ],
      "declare": false,
      "start": 264,
      "end": 303
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 310
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 318
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 320,
                      "end": 327
                    },
                    "typeArguments": null,
                    "start": 320,
                    "end": 327
                  },
                  "start": 318,
                  "end": 327
                },
                "value": null,
                "start": 314,
                "end": 327
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 332,
                  "end": 333
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 335,
                      "end": 342
                    },
                    "typeArguments": null,
                    "start": 335,
                    "end": 342
                  },
                  "start": 333,
                  "end": 342
                },
                "value": null,
                "start": 329,
                "end": 342
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 347,
              "end": 350
            },
            "id": null,
            "generator": false,
            "start": 313,
            "end": 350
          },
          "definite": false,
          "start": 308,
          "end": 350
        }
      ],
      "declare": false,
      "start": 304,
      "end": 350
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
        "start": 358,
        "end": 359
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
              "start": 366,
              "end": 369
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 373,
                    "end": 374
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyThing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 376,
                        "end": 383
                      },
                      "typeArguments": null,
                      "start": 376,
                      "end": 383
                    },
                    "start": 374,
                    "end": 383
                  },
                  "value": null,
                  "start": 370,
                  "end": 383
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 385,
                "end": 388
              },
              "expression": false,
              "start": 369,
              "end": 388
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 366,
            "end": 388
          }
        ],
        "start": 360,
        "end": 390
      },
      "abstract": false,
      "declare": false,
      "start": 352,
      "end": 390
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 402,
        "end": 403
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
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 415
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 417,
                      "end": 424
                    },
                    "typeArguments": null,
                    "start": 417,
                    "end": 424
                  },
                  "start": 415,
                  "end": 424
                },
                "value": null,
                "start": 411,
                "end": 424
              }
            ],
            "returnType": null,
            "start": 410,
            "end": 426
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 434
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 438,
                  "end": 439
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 441,
                      "end": 448
                    },
                    "typeArguments": null,
                    "start": 441,
                    "end": 448
                  },
                  "start": 439,
                  "end": 448
                },
                "value": null,
                "start": 435,
                "end": 448
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 454
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 456,
                      "end": 463
                    },
                    "typeArguments": null,
                    "start": 456,
                    "end": 463
                  },
                  "start": 454,
                  "end": 463
                },
                "value": null,
                "start": 450,
                "end": 463
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 431,
            "end": 465
          }
        ],
        "start": 404,
        "end": 467
      },
      "declare": false,
      "start": 392,
      "end": 467
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 486,
                          "end": 487
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MyThing",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 489,
                              "end": 496
                            },
                            "typeArguments": null,
                            "start": 489,
                            "end": 496
                          },
                          "start": 487,
                          "end": 496
                        },
                        "value": null,
                        "start": 483,
                        "end": 496
                      }
                    ],
                    "returnType": null,
                    "start": 482,
                    "end": 498
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 503,
                      "end": 506
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 510,
                          "end": 511
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MyThing",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 513,
                              "end": 520
                            },
                            "typeArguments": null,
                            "start": 513,
                            "end": 520
                          },
                          "start": 511,
                          "end": 520
                        },
                        "value": null,
                        "start": 507,
                        "end": 520
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 503,
                    "end": 522
                  }
                ],
                "start": 476,
                "end": 524
              },
              "start": 474,
              "end": 524
            },
            "start": 473,
            "end": 524
          },
          "init": null,
          "definite": false,
          "start": 473,
          "end": 524
        }
      ],
      "declare": false,
      "start": 469,
      "end": 524
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
            "start": 530,
            "end": 531
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
                  "start": 540,
                  "end": 543
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
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 547,
                        "end": 548
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyThing",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 550,
                            "end": 557
                          },
                          "typeArguments": null,
                          "start": 550,
                          "end": 557
                        },
                        "start": 548,
                        "end": 557
                      },
                      "value": null,
                      "start": 544,
                      "end": 557
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 559,
                    "end": 562
                  },
                  "expression": false,
                  "start": 543,
                  "end": 562
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 540,
                "end": 562
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 568,
                  "end": 569
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 580,
                    "end": 583
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 587,
                        "end": 588
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyThing",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 590,
                            "end": 597
                          },
                          "typeArguments": null,
                          "start": 590,
                          "end": 597
                        },
                        "start": 588,
                        "end": 597
                      },
                      "value": null,
                      "start": 584,
                      "end": 597
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 602,
                        "end": 603
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyThing",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 605,
                            "end": 612
                          },
                          "typeArguments": null,
                          "start": 605,
                          "end": 612
                        },
                        "start": 603,
                        "end": 612
                      },
                      "value": null,
                      "start": 599,
                      "end": 612
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 614,
                    "end": 617
                  },
                  "expression": false,
                  "start": 571,
                  "end": 617
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 568,
                "end": 617
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
                  "start": 623,
                  "end": 624
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 630,
                        "end": 631
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyThing",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 633,
                            "end": 640
                          },
                          "typeArguments": null,
                          "start": 633,
                          "end": 640
                        },
                        "start": 631,
                        "end": 640
                      },
                      "value": null,
                      "start": 627,
                      "end": 640
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 645,
                    "end": 648
                  },
                  "id": null,
                  "generator": false,
                  "start": 626,
                  "end": 648
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 623,
                "end": 648
              }
            ],
            "start": 534,
            "end": 650
          },
          "definite": false,
          "start": 530,
          "end": 650
        }
      ],
      "declare": false,
      "start": 526,
      "end": 650
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 664,
        "end": 668
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 672,
            "end": 673
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyThing2",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 683
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 684,
                    "end": 690
                  }
                ],
                "start": 683,
                "end": 691
              },
              "start": 675,
              "end": 691
            },
            "start": 673,
            "end": 691
          },
          "value": null,
          "start": 669,
          "end": 691
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 693,
        "end": 696
      },
      "expression": false,
      "start": 655,
      "end": 696
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 701,
            "end": 703
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 715,
              "end": 718
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 722,
                  "end": 723
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 725,
                      "end": 733
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 734,
                          "end": 740
                        }
                      ],
                      "start": 733,
                      "end": 741
                    },
                    "start": 725,
                    "end": 741
                  },
                  "start": 723,
                  "end": 741
                },
                "value": null,
                "start": 719,
                "end": 741
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 743,
              "end": 746
            },
            "expression": false,
            "start": 706,
            "end": 746
          },
          "definite": false,
          "start": 701,
          "end": 746
        }
      ],
      "declare": false,
      "start": 697,
      "end": 746
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 751,
            "end": 753
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 760,
                  "end": 761
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 763,
                      "end": 771
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 772,
                          "end": 778
                        }
                      ],
                      "start": 771,
                      "end": 779
                    },
                    "start": 763,
                    "end": 779
                  },
                  "start": 761,
                  "end": 779
                },
                "value": null,
                "start": 757,
                "end": 779
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 784,
                  "end": 785
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 787,
                      "end": 795
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 796,
                          "end": 802
                        }
                      ],
                      "start": 795,
                      "end": 803
                    },
                    "start": 787,
                    "end": 803
                  },
                  "start": 785,
                  "end": 803
                },
                "value": null,
                "start": 781,
                "end": 803
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 808,
              "end": 811
            },
            "id": null,
            "generator": false,
            "start": 756,
            "end": 811
          },
          "definite": false,
          "start": 751,
          "end": 811
        }
      ],
      "declare": false,
      "start": 747,
      "end": 811
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 819,
        "end": 821
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
              "start": 828,
              "end": 831
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 835,
                    "end": 836
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyThing2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 838,
                        "end": 846
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 847,
                            "end": 853
                          }
                        ],
                        "start": 846,
                        "end": 854
                      },
                      "start": 838,
                      "end": 854
                    },
                    "start": 836,
                    "end": 854
                  },
                  "value": null,
                  "start": 832,
                  "end": 854
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 856,
                "end": 859
              },
              "expression": false,
              "start": 831,
              "end": 859
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 828,
            "end": 859
          }
        ],
        "start": 822,
        "end": 861
      },
      "abstract": false,
      "declare": false,
      "start": 813,
      "end": 861
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 873,
        "end": 875
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
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 886,
                  "end": 887
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 889,
                      "end": 897
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 898,
                          "end": 904
                        }
                      ],
                      "start": 897,
                      "end": 905
                    },
                    "start": 889,
                    "end": 905
                  },
                  "start": 887,
                  "end": 905
                },
                "value": null,
                "start": 883,
                "end": 905
              }
            ],
            "returnType": null,
            "start": 882,
            "end": 907
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 912,
              "end": 915
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 919,
                  "end": 920
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 922,
                      "end": 930
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 931,
                          "end": 937
                        }
                      ],
                      "start": 930,
                      "end": 938
                    },
                    "start": 922,
                    "end": 938
                  },
                  "start": 920,
                  "end": 938
                },
                "value": null,
                "start": 916,
                "end": 938
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 943,
                  "end": 944
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 946,
                      "end": 954
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 955,
                          "end": 961
                        }
                      ],
                      "start": 954,
                      "end": 962
                    },
                    "start": 946,
                    "end": 962
                  },
                  "start": 944,
                  "end": 962
                },
                "value": null,
                "start": 940,
                "end": 962
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 912,
            "end": 964
          }
        ],
        "start": 876,
        "end": 966
      },
      "declare": false,
      "start": 863,
      "end": 966
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 986,
                          "end": 987
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MyThing2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 989,
                              "end": 997
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 998,
                                  "end": 1004
                                }
                              ],
                              "start": 997,
                              "end": 1005
                            },
                            "start": 989,
                            "end": 1005
                          },
                          "start": 987,
                          "end": 1005
                        },
                        "value": null,
                        "start": 983,
                        "end": 1005
                      }
                    ],
                    "returnType": null,
                    "start": 982,
                    "end": 1007
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1012,
                      "end": 1015
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1019,
                          "end": 1020
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MyThing2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1022,
                              "end": 1030
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1031,
                                  "end": 1037
                                }
                              ],
                              "start": 1030,
                              "end": 1038
                            },
                            "start": 1022,
                            "end": 1038
                          },
                          "start": 1020,
                          "end": 1038
                        },
                        "value": null,
                        "start": 1016,
                        "end": 1038
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1012,
                    "end": 1040
                  }
                ],
                "start": 976,
                "end": 1042
              },
              "start": 974,
              "end": 1042
            },
            "start": 972,
            "end": 1042
          },
          "init": null,
          "definite": false,
          "start": 972,
          "end": 1042
        }
      ],
      "declare": false,
      "start": 968,
      "end": 1042
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1048,
            "end": 1050
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
                  "start": 1059,
                  "end": 1062
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
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1066,
                        "end": 1067
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyThing2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1069,
                            "end": 1077
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1078,
                                "end": 1084
                              }
                            ],
                            "start": 1077,
                            "end": 1085
                          },
                          "start": 1069,
                          "end": 1085
                        },
                        "start": 1067,
                        "end": 1085
                      },
                      "value": null,
                      "start": 1063,
                      "end": 1085
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1087,
                    "end": 1090
                  },
                  "expression": false,
                  "start": 1062,
                  "end": 1090
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1059,
                "end": 1090
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1096,
                  "end": 1097
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1108,
                    "end": 1111
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1115,
                        "end": 1116
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyThing2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1118,
                            "end": 1126
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1127,
                                "end": 1133
                              }
                            ],
                            "start": 1126,
                            "end": 1134
                          },
                          "start": 1118,
                          "end": 1134
                        },
                        "start": 1116,
                        "end": 1134
                      },
                      "value": null,
                      "start": 1112,
                      "end": 1134
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1139,
                        "end": 1140
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyThing2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1142,
                            "end": 1150
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1151,
                                "end": 1157
                              }
                            ],
                            "start": 1150,
                            "end": 1158
                          },
                          "start": 1142,
                          "end": 1158
                        },
                        "start": 1140,
                        "end": 1158
                      },
                      "value": null,
                      "start": 1136,
                      "end": 1158
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1160,
                    "end": 1163
                  },
                  "expression": false,
                  "start": 1099,
                  "end": 1163
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1096,
                "end": 1163
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
                  "start": 1169,
                  "end": 1170
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1176,
                        "end": 1177
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyThing2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1179,
                            "end": 1187
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1188,
                                "end": 1194
                              }
                            ],
                            "start": 1187,
                            "end": 1195
                          },
                          "start": 1179,
                          "end": 1195
                        },
                        "start": 1177,
                        "end": 1195
                      },
                      "value": null,
                      "start": 1173,
                      "end": 1195
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1200,
                    "end": 1203
                  },
                  "id": null,
                  "generator": false,
                  "start": 1172,
                  "end": 1203
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1169,
                "end": 1203
              }
            ],
            "start": 1053,
            "end": 1205
          },
          "definite": false,
          "start": 1048,
          "end": 1205
        }
      ],
      "declare": false,
      "start": 1044,
      "end": 1205
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 147,
  "end": 1205
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 147,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "MyThing",
    "start": 157,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 165,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 173,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 188,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "MyThing2",
    "start": 198,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 210,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 218,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 232,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 241,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 245,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "MyThing",
    "start": 251,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 264,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 272,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 281,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 285,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "MyThing",
    "start": 291,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 304,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 308,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 314,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "MyThing",
    "start": 320,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 329,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "MyThing",
    "start": 335,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "=>",
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
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 352,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 366,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 370,
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
    "value": "MyThing",
    "start": 376,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 392,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "type": "Punctuator",
    "value": "(",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 411,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "MyThing",
    "start": 417,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 431,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 435,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "MyThing",
    "start": 441,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 450,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "MyThing",
    "start": 456,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
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
    "type": "Keyword",
    "value": "var",
    "start": 469,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 483,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "MyThing",
    "start": 489,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 503,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 507,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "MyThing",
    "start": 513,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 526,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 540,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 544,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "MyThing",
    "start": 550,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 569,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 571,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 580,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 584,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "MyThing",
    "start": 590,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 599,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "MyThing",
    "start": 605,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Punctuator",
    "value": "(",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 627,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "MyThing",
    "start": 633,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 642,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 649,
    "end": 650
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 655,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 664,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 669,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "MyThing2",
    "start": 675,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 684,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 695,
    "end": 696
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 697,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 701,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 704,
    "end": 705
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 706,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 715,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 719,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "MyThing2",
    "start": 725,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 734,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 745,
    "end": 746
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 747,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 751,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 757,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "MyThing2",
    "start": 763,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 772,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 781,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "MyThing2",
    "start": 787,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 796,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "=>",
    "start": 805,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 813,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 819,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 828,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 832,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "MyThing2",
    "start": 838,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 847,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "{",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 860,
    "end": 861
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 863,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 873,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 883,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "MyThing2",
    "start": 889,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 898,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 912,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 916,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "MyThing2",
    "start": 922,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 931,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 940,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "MyThing2",
    "start": 946,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 955,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 965,
    "end": 966
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 968,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 972,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 983,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "MyThing2",
    "start": 989,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 998,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1012,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1016,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "MyThing2",
    "start": 1022,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1031,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1044,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1048,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1059,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1063,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "MyThing2",
    "start": 1069,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1078,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1099,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1108,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1112,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "MyThing2",
    "start": 1118,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1127,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1136,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "MyThing2",
    "start": 1142,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1151,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1173,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "MyThing2",
    "start": 1179,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1188,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1197,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1204,
    "end": 1205
  }
]
```
