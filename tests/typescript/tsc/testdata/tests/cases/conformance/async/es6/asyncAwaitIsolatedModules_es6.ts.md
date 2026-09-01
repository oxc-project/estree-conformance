__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "importKind": "value",
          "start": 9,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "missing",
        "raw": "\"missing\"",
        "start": 26,
        "end": 35
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 36
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 60
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 61,
                      "end": 67
                    }
                  ],
                  "start": 60,
                  "end": 68
                },
                "start": 53,
                "end": 68
              },
              "start": 51,
              "end": 68
            },
            "start": 50,
            "end": 68
          },
          "init": null,
          "definite": false,
          "start": 50,
          "end": 68
        }
      ],
      "declare": true,
      "start": 38,
      "end": 69
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
            "name": "mp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 86,
                  "end": 95
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 96,
                      "end": 102
                    }
                  ],
                  "start": 95,
                  "end": 103
                },
                "start": 86,
                "end": 103
              },
              "start": 84,
              "end": 103
            },
            "start": 82,
            "end": 103
          },
          "init": null,
          "definite": false,
          "start": 82,
          "end": 103
        }
      ],
      "declare": true,
      "start": 70,
      "end": 104
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f0",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 123
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 126,
        "end": 129
      },
      "expression": false,
      "start": 106,
      "end": 129
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 147
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
            "start": 151,
            "end": 158
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 159,
                "end": 163
              }
            ],
            "start": 158,
            "end": 164
          },
          "start": 151,
          "end": 164
        },
        "start": 149,
        "end": 164
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 165,
        "end": 168
      },
      "expression": false,
      "start": 130,
      "end": 168
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 186
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
            "name": "MyPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 199
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 200,
                "end": 204
              }
            ],
            "start": 199,
            "end": 205
          },
          "start": 190,
          "end": 205
        },
        "start": 188,
        "end": 205
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 206,
        "end": 209
      },
      "expression": false,
      "start": 169,
      "end": 209
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 217
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": true,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 237,
              "end": 240
            },
            "expression": false,
            "start": 220,
            "end": 240
          },
          "definite": false,
          "start": 215,
          "end": 240
        }
      ],
      "declare": false,
      "start": 211,
      "end": 240
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
            "name": "f5",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 247
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
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
                  "start": 268,
                  "end": 275
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 276,
                      "end": 280
                    }
                  ],
                  "start": 275,
                  "end": 281
                },
                "start": 268,
                "end": 281
              },
              "start": 266,
              "end": 281
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 282,
              "end": 285
            },
            "expression": false,
            "start": 250,
            "end": 285
          },
          "definite": false,
          "start": 245,
          "end": 285
        }
      ],
      "declare": false,
      "start": 241,
      "end": 285
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
            "name": "f6",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 292
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
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
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 313,
                  "end": 322
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 323,
                      "end": 327
                    }
                  ],
                  "start": 322,
                  "end": 328
                },
                "start": 313,
                "end": 328
              },
              "start": 311,
              "end": 328
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 329,
              "end": 332
            },
            "expression": false,
            "start": 295,
            "end": 332
          },
          "definite": false,
          "start": 290,
          "end": 332
        }
      ],
      "declare": false,
      "start": 286,
      "end": 332
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
            "name": "f7",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 340
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 355,
              "end": 358
            },
            "id": null,
            "generator": false,
            "start": 343,
            "end": 358
          },
          "definite": false,
          "start": 338,
          "end": 358
        }
      ],
      "declare": false,
      "start": 334,
      "end": 359
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
            "name": "f8",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 366
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
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
                  "start": 379,
                  "end": 386
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 387,
                      "end": 391
                    }
                  ],
                  "start": 386,
                  "end": 392
                },
                "start": 379,
                "end": 392
              },
              "start": 377,
              "end": 392
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 396,
              "end": 399
            },
            "id": null,
            "generator": false,
            "start": 369,
            "end": 399
          },
          "definite": false,
          "start": 364,
          "end": 399
        }
      ],
      "declare": false,
      "start": 360,
      "end": 400
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
            "name": "f9",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 407
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 420,
                  "end": 429
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 430,
                      "end": 434
                    }
                  ],
                  "start": 429,
                  "end": 435
                },
                "start": 420,
                "end": 435
              },
              "start": 418,
              "end": 435
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 439,
              "end": 442
            },
            "id": null,
            "generator": false,
            "start": 410,
            "end": 442
          },
          "definite": false,
          "start": 405,
          "end": 442
        }
      ],
      "declare": false,
      "start": 401,
      "end": 443
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
            "name": "f10",
            "optional": false,
            "typeAnnotation": null,
            "start": 449,
            "end": 452
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 468
            },
            "id": null,
            "generator": false,
            "start": 455,
            "end": 468
          },
          "definite": false,
          "start": 449,
          "end": 468
        }
      ],
      "declare": false,
      "start": 445,
      "end": 469
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
            "name": "f11",
            "optional": false,
            "typeAnnotation": null,
            "start": 474,
            "end": 477
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "mp",
              "optional": false,
              "typeAnnotation": null,
              "start": 492,
              "end": 494
            },
            "id": null,
            "generator": false,
            "start": 480,
            "end": 494
          },
          "definite": false,
          "start": 474,
          "end": 494
        }
      ],
      "declare": false,
      "start": 470,
      "end": 495
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
            "name": "f12",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 503
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
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
                  "start": 516,
                  "end": 523
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 524,
                      "end": 530
                    }
                  ],
                  "start": 523,
                  "end": 531
                },
                "start": 516,
                "end": 531
              },
              "start": 514,
              "end": 531
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "mp",
              "optional": false,
              "typeAnnotation": null,
              "start": 535,
              "end": 537
            },
            "id": null,
            "generator": false,
            "start": 506,
            "end": 537
          },
          "definite": false,
          "start": 500,
          "end": 537
        }
      ],
      "declare": false,
      "start": 496,
      "end": 538
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
            "name": "f13",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 546
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 559,
                  "end": 568
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 569,
                      "end": 575
                    }
                  ],
                  "start": 568,
                  "end": 576
                },
                "start": 559,
                "end": 576
              },
              "start": 557,
              "end": 576
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 580,
              "end": 581
            },
            "id": null,
            "generator": false,
            "start": 549,
            "end": 581
          },
          "definite": false,
          "start": 543,
          "end": 581
        }
      ],
      "declare": false,
      "start": 539,
      "end": 582
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 588,
            "end": 589
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
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 601,
                  "end": 603
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 606,
                    "end": 609
                  },
                  "expression": false,
                  "start": 603,
                  "end": 609
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 595,
                "end": 609
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 618,
                  "end": 620
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                        "start": 624,
                        "end": 631
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 632,
                            "end": 636
                          }
                        ],
                        "start": 631,
                        "end": 637
                      },
                      "start": 624,
                      "end": 637
                    },
                    "start": 622,
                    "end": 637
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 638,
                    "end": 641
                  },
                  "expression": false,
                  "start": 620,
                  "end": 641
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 612,
                "end": 641
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 650,
                  "end": 652
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                        "name": "MyPromise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 656,
                        "end": 665
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 666,
                            "end": 670
                          }
                        ],
                        "start": 665,
                        "end": 671
                      },
                      "start": 656,
                      "end": 671
                    },
                    "start": 654,
                    "end": 671
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 672,
                    "end": 675
                  },
                  "expression": false,
                  "start": 652,
                  "end": 675
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 644,
                "end": 675
              }
            ],
            "start": 592,
            "end": 677
          },
          "definite": false,
          "start": 588,
          "end": 677
        }
      ],
      "declare": false,
      "start": 584,
      "end": 678
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
        "start": 686,
        "end": 687
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
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 697,
              "end": 699
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 702,
                "end": 705
              },
              "expression": false,
              "start": 699,
              "end": 705
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 691,
            "end": 705
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 713,
              "end": 715
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "start": 719,
                    "end": 726
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 727,
                        "end": 731
                      }
                    ],
                    "start": 726,
                    "end": 732
                  },
                  "start": 719,
                  "end": 732
                },
                "start": 717,
                "end": 732
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 733,
                "end": 736
              },
              "expression": false,
              "start": 715,
              "end": 736
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 707,
            "end": 736
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 744,
              "end": 746
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "name": "MyPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 750,
                    "end": 759
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 760,
                        "end": 764
                      }
                    ],
                    "start": 759,
                    "end": 765
                  },
                  "start": 750,
                  "end": 765
                },
                "start": 748,
                "end": 765
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 766,
                "end": 769
              },
              "expression": false,
              "start": 746,
              "end": 769
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 738,
            "end": 769
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 784,
              "end": 786
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 789,
                "end": 792
              },
              "expression": false,
              "start": 786,
              "end": 792
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 771,
            "end": 792
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m5",
              "optional": false,
              "typeAnnotation": null,
              "start": 807,
              "end": 809
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "start": 813,
                    "end": 820
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 821,
                        "end": 825
                      }
                    ],
                    "start": 820,
                    "end": 826
                  },
                  "start": 813,
                  "end": 826
                },
                "start": 811,
                "end": 826
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 827,
                "end": 830
              },
              "expression": false,
              "start": 809,
              "end": 830
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 794,
            "end": 830
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m6",
              "optional": false,
              "typeAnnotation": null,
              "start": 845,
              "end": 847
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "name": "MyPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 851,
                    "end": 860
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 861,
                        "end": 865
                      }
                    ],
                    "start": 860,
                    "end": 866
                  },
                  "start": 851,
                  "end": 866
                },
                "start": 849,
                "end": 866
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 867,
                "end": 870
              },
              "expression": false,
              "start": 847,
              "end": 870
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 832,
            "end": 870
          }
        ],
        "start": 688,
        "end": 872
      },
      "abstract": false,
      "declare": false,
      "start": 680,
      "end": 872
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 884,
        "end": 885
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 911,
                "end": 913
              },
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 916,
                "end": 919
              },
              "expression": false,
              "start": 896,
              "end": 919
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 889,
            "end": 919
          }
        ],
        "start": 886,
        "end": 921
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 874,
      "end": 921
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 921
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 9,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 21,
    "end": 25
  },
  {
    "type": "String",
    "value": "\"missing\"",
    "start": 26,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 38,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 46,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 53,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 61,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 70,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 78,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "mp",
    "start": 82,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 86,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 106,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 112,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "f0",
    "start": 121,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 130,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 136,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 145,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 151,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 169,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 175,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 184,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 190,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 200,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 211,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 215,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 220,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 226,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 241,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 245,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 250,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 256,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 268,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 276,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 286,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 290,
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
    "value": "async",
    "start": 295,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 301,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 313,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 323,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 334,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 338,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 343,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 352,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "let",
    "start": 360,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 369,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 379,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 387,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 393,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 401,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 405,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 410,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 420,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 430,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 436,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 445,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 449,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 455,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 464,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 470,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 474,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 480,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 489,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "mp",
    "start": 492,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 496,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 500,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 506,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 516,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 524,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 532,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "mp",
    "start": 535,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 539,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 543,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 549,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 555,
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
    "value": ":",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 559,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 569,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 577,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 584,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 595,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 601,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 612,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 618,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 621,
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
    "value": "Promise",
    "start": 624,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 631,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 632,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 644,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 650,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 656,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 666,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 680,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 691,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 697,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 707,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 713,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "Promise",
    "start": 719,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 726,
    "end": 727
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 727,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 738,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 744,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 750,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 760,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 771,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 778,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 784,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 791,
    "end": 792
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 794,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 801,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 807,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 813,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 820,
    "end": 821
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 821,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 829,
    "end": 830
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 832,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 839,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 845,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 851,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 860,
    "end": 861
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 861,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 874,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 886,
    "end": 887
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 889,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 896,
    "end": 901
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 902,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 911,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 920,
    "end": 921
  }
]
```
