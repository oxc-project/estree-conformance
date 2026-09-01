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
        "name": "ActionsObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 23
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "State",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 29
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 24,
            "end": 29
          }
        ],
        "start": 23,
        "end": 30
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 44,
                    "end": 50
                  },
                  "start": 42,
                  "end": 50
                },
                "start": 38,
                "end": 50
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "State",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 61,
                          "end": 66
                        },
                        "typeArguments": null,
                        "start": 61,
                        "end": 66
                      },
                      "start": 59,
                      "end": 66
                    },
                    "start": 54,
                    "end": 66
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 71,
                      "end": 76
                    },
                    "typeArguments": null,
                    "start": 71,
                    "end": 76
                  },
                  "start": 68,
                  "end": 76
                },
                "start": 53,
                "end": 76
              },
              "start": 51,
              "end": 76
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 37,
            "end": 77
          }
        ],
        "start": 31,
        "end": 79
      },
      "declare": false,
      "start": 0,
      "end": 79
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Options",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 98
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "State",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 104
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 99,
            "end": 104
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Actions",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 113
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 106,
            "end": 113
          }
        ],
        "start": 98,
        "end": 114
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 126
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "State",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 129,
                  "end": 134
                },
                "typeArguments": null,
                "start": 129,
                "end": 134
              },
              "start": 127,
              "end": 134
            },
            "accessibility": null,
            "static": false,
            "start": 121,
            "end": 135
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "view",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 144
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
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "State",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 155,
                          "end": 160
                        },
                        "typeArguments": null,
                        "start": 155,
                        "end": 160
                      },
                      "start": 153,
                      "end": 160
                    },
                    "start": 148,
                    "end": 160
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "actions",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Actions",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 171,
                          "end": 178
                        },
                        "typeArguments": null,
                        "start": 171,
                        "end": 178
                      },
                      "start": 169,
                      "end": 178
                    },
                    "start": 162,
                    "end": 178
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 183,
                    "end": 186
                  },
                  "start": 180,
                  "end": 186
                },
                "start": 147,
                "end": 186
              },
              "start": 145,
              "end": 186
            },
            "accessibility": null,
            "static": false,
            "start": 140,
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
              "name": "actions",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 199
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 201,
                    "end": 207
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Actions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 210,
                      "end": 217
                    },
                    "typeArguments": null,
                    "start": 210,
                    "end": 217
                  }
                ],
                "start": 201,
                "end": 217
              },
              "start": 199,
              "end": 217
            },
            "accessibility": null,
            "static": false,
            "start": 192,
            "end": 218
          }
        ],
        "start": 115,
        "end": 220
      },
      "declare": false,
      "start": 81,
      "end": 220
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "app",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 242
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
              "name": "State",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 248
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 243,
            "end": 248
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Actions",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 257
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ActionsObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 279
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 280,
                      "end": 285
                    },
                    "typeArguments": null,
                    "start": 280,
                    "end": 285
                  }
                ],
                "start": 279,
                "end": 286
              },
              "start": 266,
              "end": 286
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 250,
            "end": 286
          }
        ],
        "start": 242,
        "end": 287
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Options",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 300
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 301,
                      "end": 306
                    },
                    "typeArguments": null,
                    "start": 301,
                    "end": 306
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Actions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 308,
                      "end": 315
                    },
                    "typeArguments": null,
                    "start": 308,
                    "end": 315
                  }
                ],
                "start": 300,
                "end": 316
              },
              "start": 293,
              "end": 316
            },
            "start": 291,
            "end": 316
          },
          "start": 288,
          "end": 316
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 319,
          "end": 323
        },
        "start": 317,
        "end": 323
      },
      "body": null,
      "expression": false,
      "start": 222,
      "end": 324
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "app",
          "optional": false,
          "typeAnnotation": null,
          "start": 326,
          "end": 329
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
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 336,
                  "end": 341
                },
                "value": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 343,
                  "end": 346
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 336,
                "end": 346
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "actions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 359
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 371,
                        "end": 374
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
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 376,
                            "end": 377
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 381,
                          "end": 382
                        },
                        "id": null,
                        "generator": false,
                        "start": 376,
                        "end": 382
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 371,
                      "end": 382
                    }
                  ],
                  "start": 361,
                  "end": 424
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 352,
                "end": 424
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "view",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 430,
                  "end": 434
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
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 437,
                      "end": 438
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 440,
                      "end": 441
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 446,
                      "end": 455
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 459,
                      "end": 462
                    },
                    "start": 446,
                    "end": 462
                  },
                  "id": null,
                  "generator": false,
                  "start": 436,
                  "end": 462
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 430,
                "end": 462
              }
            ],
            "start": 330,
            "end": 465
          }
        ],
        "optional": false,
        "start": 326,
        "end": 466
      },
      "directive": null,
      "start": 326,
      "end": 467
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 480,
        "end": 483
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 493
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 499,
                        "end": 505
                      },
                      "start": 497,
                      "end": 505
                    },
                    "start": 496,
                    "end": 505
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 510,
                    "end": 514
                  },
                  "start": 507,
                  "end": 514
                },
                "start": 495,
                "end": 514
              },
              "start": 493,
              "end": 514
            },
            "accessibility": null,
            "static": false,
            "start": 490,
            "end": 515
          }
        ],
        "start": 484,
        "end": 517
      },
      "declare": false,
      "start": 470,
      "end": 517
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 536,
        "end": 539
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
              "start": 540,
              "end": 541
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 550,
                "end": 553
              },
              "typeArguments": null,
              "start": 550,
              "end": 553
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 540,
            "end": 553
          }
        ],
        "start": 539,
        "end": 554
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 558,
                  "end": 564
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 567,
                    "end": 568
                  },
                  "typeArguments": null,
                  "start": 567,
                  "end": 568
                }
              ],
              "start": 558,
              "end": 568
            },
            "start": 556,
            "end": 568
          },
          "start": 555,
          "end": 568
        }
      ],
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
            "start": 571,
            "end": 572
          },
          "typeArguments": null,
          "start": 571,
          "end": 572
        },
        "start": 569,
        "end": 572
      },
      "body": null,
      "expression": false,
      "start": 519,
      "end": 573
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 582
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 585,
              "end": 588
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
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 595,
                      "end": 598
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
                          "typeAnnotation": null,
                          "start": 599,
                          "end": 600
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 602,
                        "end": 643
                      },
                      "expression": false,
                      "start": 598,
                      "end": 643
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 595,
                    "end": 643
                  }
                ],
                "start": 589,
                "end": 645
              }
            ],
            "optional": false,
            "start": 585,
            "end": 646
          },
          "definite": false,
          "start": 581,
          "end": 646
        }
      ],
      "declare": false,
      "start": 575,
      "end": 647
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Options2",
        "optional": false,
        "typeAnnotation": null,
        "start": 659,
        "end": 667
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "State",
              "optional": false,
              "typeAnnotation": null,
              "start": 668,
              "end": 673
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 668,
            "end": 673
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Actions",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 682
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 675,
            "end": 682
          }
        ],
        "start": 667,
        "end": 683
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": null,
              "start": 690,
              "end": 695
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "State",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 698,
                  "end": 703
                },
                "typeArguments": null,
                "start": 698,
                "end": 703
              },
              "start": 696,
              "end": 703
            },
            "accessibility": null,
            "static": false,
            "start": 690,
            "end": 704
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "view",
              "optional": false,
              "typeAnnotation": null,
              "start": 709,
              "end": 713
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
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "State",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 724,
                          "end": 729
                        },
                        "typeArguments": null,
                        "start": 724,
                        "end": 729
                      },
                      "start": 722,
                      "end": 729
                    },
                    "start": 717,
                    "end": 729
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "actions",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Actions",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 740,
                          "end": 747
                        },
                        "typeArguments": null,
                        "start": 740,
                        "end": 747
                      },
                      "start": 738,
                      "end": 747
                    },
                    "start": 731,
                    "end": 747
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 752,
                    "end": 755
                  },
                  "start": 749,
                  "end": 755
                },
                "start": 716,
                "end": 755
              },
              "start": 714,
              "end": 755
            },
            "accessibility": null,
            "static": false,
            "start": 709,
            "end": 756
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "actions",
              "optional": false,
              "typeAnnotation": null,
              "start": 761,
              "end": 768
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Actions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 771,
                  "end": 778
                },
                "typeArguments": null,
                "start": 771,
                "end": 778
              },
              "start": 769,
              "end": 778
            },
            "accessibility": null,
            "static": false,
            "start": 761,
            "end": 779
          }
        ],
        "start": 684,
        "end": 781
      },
      "declare": false,
      "start": 649,
      "end": 781
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "app2",
        "optional": false,
        "typeAnnotation": null,
        "start": 800,
        "end": 804
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
              "name": "State",
              "optional": false,
              "typeAnnotation": null,
              "start": 805,
              "end": 810
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 805,
            "end": 810
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Actions",
              "optional": false,
              "typeAnnotation": null,
              "start": 812,
              "end": 819
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ActionsObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 828,
                "end": 841
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 842,
                      "end": 847
                    },
                    "typeArguments": null,
                    "start": 842,
                    "end": 847
                  }
                ],
                "start": 841,
                "end": 848
              },
              "start": 828,
              "end": 848
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 812,
            "end": 848
          }
        ],
        "start": 804,
        "end": 849
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Options2",
                "optional": false,
                "typeAnnotation": null,
                "start": 855,
                "end": 863
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 864,
                      "end": 869
                    },
                    "typeArguments": null,
                    "start": 864,
                    "end": 869
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Actions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 871,
                      "end": 878
                    },
                    "typeArguments": null,
                    "start": 871,
                    "end": 878
                  }
                ],
                "start": 863,
                "end": 879
              },
              "start": 855,
              "end": 879
            },
            "start": 853,
            "end": 879
          },
          "start": 850,
          "end": 879
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 882,
          "end": 886
        },
        "start": 880,
        "end": 886
      },
      "body": null,
      "expression": false,
      "start": 783,
      "end": 887
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "app2",
          "optional": false,
          "typeAnnotation": null,
          "start": 889,
          "end": 893
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
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 900,
                  "end": 905
                },
                "value": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 907,
                  "end": 910
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 900,
                "end": 910
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "actions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 916,
                  "end": 923
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 935,
                        "end": 938
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
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 940,
                            "end": 941
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 945,
                          "end": 946
                        },
                        "id": null,
                        "generator": false,
                        "start": 940,
                        "end": 946
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 935,
                      "end": 946
                    }
                  ],
                  "start": 925,
                  "end": 988
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 916,
                "end": 988
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "view",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 994,
                  "end": 998
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
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1001,
                      "end": 1002
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1004,
                      "end": 1005
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1010,
                      "end": 1019
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1023,
                      "end": 1026
                    },
                    "start": 1010,
                    "end": 1026
                  },
                  "id": null,
                  "generator": false,
                  "start": 1000,
                  "end": 1026
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 994,
                "end": 1026
              }
            ],
            "start": 894,
            "end": 1029
          }
        ],
        "optional": false,
        "start": 889,
        "end": 1030
      },
      "directive": null,
      "start": 889,
      "end": 1031
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionsArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 1039,
        "end": 1051
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "State",
              "optional": false,
              "typeAnnotation": null,
              "start": 1052,
              "end": 1057
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1052,
            "end": 1057
          }
        ],
        "start": 1051,
        "end": 1058
      },
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "State",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1070,
                    "end": 1075
                  },
                  "typeArguments": null,
                  "start": 1070,
                  "end": 1075
                },
                "start": 1068,
                "end": 1075
              },
              "start": 1063,
              "end": 1075
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "State",
                "optional": false,
                "typeAnnotation": null,
                "start": 1080,
                "end": 1085
              },
              "typeArguments": null,
              "start": 1080,
              "end": 1085
            },
            "start": 1077,
            "end": 1085
          },
          "start": 1062,
          "end": 1085
        },
        "start": 1061,
        "end": 1088
      },
      "declare": false,
      "start": 1034,
      "end": 1089
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "app3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1108,
        "end": 1112
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
              "name": "State",
              "optional": false,
              "typeAnnotation": null,
              "start": 1113,
              "end": 1118
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1113,
            "end": 1118
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Actions",
              "optional": false,
              "typeAnnotation": null,
              "start": 1120,
              "end": 1127
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ActionsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 1136,
                "end": 1148
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1149,
                      "end": 1154
                    },
                    "typeArguments": null,
                    "start": 1149,
                    "end": 1154
                  }
                ],
                "start": 1148,
                "end": 1155
              },
              "start": 1136,
              "end": 1155
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1120,
            "end": 1155
          }
        ],
        "start": 1112,
        "end": 1156
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Options",
                "optional": false,
                "typeAnnotation": null,
                "start": 1162,
                "end": 1169
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1170,
                      "end": 1175
                    },
                    "typeArguments": null,
                    "start": 1170,
                    "end": 1175
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Actions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1177,
                      "end": 1184
                    },
                    "typeArguments": null,
                    "start": 1177,
                    "end": 1184
                  }
                ],
                "start": 1169,
                "end": 1185
              },
              "start": 1162,
              "end": 1185
            },
            "start": 1160,
            "end": 1185
          },
          "start": 1157,
          "end": 1185
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1188,
          "end": 1192
        },
        "start": 1186,
        "end": 1192
      },
      "body": null,
      "expression": false,
      "start": 1091,
      "end": 1193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "app3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1195,
          "end": 1199
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
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1206,
                  "end": 1211
                },
                "value": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 1213,
                  "end": 1216
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1206,
                "end": 1216
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "actions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1222,
                  "end": 1229
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1241,
                          "end": 1242
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1246,
                        "end": 1247
                      },
                      "id": null,
                      "generator": false,
                      "start": 1241,
                      "end": 1247
                    }
                  ],
                  "start": 1231,
                  "end": 1289
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1222,
                "end": 1289
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "view",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1295,
                  "end": 1299
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
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1302,
                      "end": 1303
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1305,
                      "end": 1306
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1311,
                      "end": 1320
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1324,
                      "end": 1327
                    },
                    "start": 1311,
                    "end": 1327
                  },
                  "id": null,
                  "generator": false,
                  "start": 1301,
                  "end": 1327
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1295,
                "end": 1327
              }
            ],
            "start": 1200,
            "end": 1330
          }
        ],
        "optional": false,
        "start": 1195,
        "end": 1331
      },
      "directive": null,
      "start": 1195,
      "end": 1332
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 1344,
        "end": 1347
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 1371,
                "end": 1378
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1379,
                "end": 1381
              },
              "declare": false,
              "start": 1361,
              "end": 1381
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1354,
            "end": 1381
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "typeAnnotation": null,
                "start": 1403,
                "end": 1420
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1421,
                "end": 1423
              },
              "declare": false,
              "start": 1393,
              "end": 1423
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1386,
            "end": 1423
          }
        ],
        "start": 1348,
        "end": 1425
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1334,
      "end": 1425
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionsObjectOr",
        "optional": false,
        "typeAnnotation": null,
        "start": 1437,
        "end": 1452
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "State",
              "optional": false,
              "typeAnnotation": null,
              "start": 1453,
              "end": 1458
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1453,
            "end": 1458
          }
        ],
        "start": 1452,
        "end": 1459
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1473,
                    "end": 1479
                  },
                  "start": 1471,
                  "end": 1479
                },
                "start": 1467,
                "end": 1479
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "state",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "State",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1491,
                              "end": 1496
                            },
                            "typeArguments": null,
                            "start": 1491,
                            "end": 1496
                          },
                          "start": 1489,
                          "end": 1496
                        },
                        "start": 1484,
                        "end": 1496
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "State",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1501,
                          "end": 1506
                        },
                        "typeArguments": null,
                        "start": 1501,
                        "end": 1506
                      },
                      "start": 1498,
                      "end": 1506
                    },
                    "start": 1483,
                    "end": 1506
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1510,
                      "end": 1515
                    },
                    "typeArguments": null,
                    "start": 1510,
                    "end": 1515
                  }
                ],
                "start": 1482,
                "end": 1515
              },
              "start": 1480,
              "end": 1515
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1466,
            "end": 1516
          }
        ],
        "start": 1460,
        "end": 1518
      },
      "declare": false,
      "start": 1427,
      "end": 1518
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "App4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1537,
        "end": 1541
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
              "name": "State",
              "optional": false,
              "typeAnnotation": null,
              "start": 1542,
              "end": 1547
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1542,
            "end": 1547
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Actions",
              "optional": false,
              "typeAnnotation": null,
              "start": 1549,
              "end": 1556
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ActionsObjectOr",
                "optional": false,
                "typeAnnotation": null,
                "start": 1565,
                "end": 1580
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1581,
                      "end": 1586
                    },
                    "typeArguments": null,
                    "start": 1581,
                    "end": 1586
                  }
                ],
                "start": 1580,
                "end": 1587
              },
              "start": 1565,
              "end": 1587
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1549,
            "end": 1587
          }
        ],
        "start": 1541,
        "end": 1588
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1596,
                      "end": 1603
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1604,
                            "end": 1609
                          },
                          "typeArguments": null,
                          "start": 1604,
                          "end": 1609
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Actions",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1611,
                            "end": 1618
                          },
                          "typeArguments": null,
                          "start": 1611,
                          "end": 1618
                        }
                      ],
                      "start": 1603,
                      "end": 1619
                    },
                    "start": 1596,
                    "end": 1619
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "actions",
                      "raw": "\"actions\"",
                      "start": 1620,
                      "end": 1629
                    },
                    "start": 1620,
                    "end": 1629
                  },
                  "start": 1596,
                  "end": 1630
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
                        "name": "state",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1635,
                        "end": 1640
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1642,
                            "end": 1647
                          },
                          "typeArguments": null,
                          "start": 1642,
                          "end": 1647
                        },
                        "start": 1640,
                        "end": 1647
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1635,
                      "end": 1647
                    }
                  ],
                  "start": 1633,
                  "end": 1649
                }
              ],
              "start": 1596,
              "end": 1649
            },
            "start": 1594,
            "end": 1649
          },
          "start": 1589,
          "end": 1649
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 1652,
              "end": 1655
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 1656,
              "end": 1663
            },
            "start": 1652,
            "end": 1663
          },
          "typeArguments": null,
          "start": 1652,
          "end": 1663
        },
        "start": 1650,
        "end": 1663
      },
      "body": null,
      "expression": false,
      "start": 1520,
      "end": 1664
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
            "start": 1672,
            "end": 1673
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "App4",
                "start": 1677,
                "end": 1681
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "state",
                    "start": 1682,
                    "end": 1687
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 100,
                      "raw": "100",
                      "start": 1689,
                      "end": 1692
                    },
                    "start": 1688,
                    "end": 1693
                  },
                  "start": 1682,
                  "end": 1693
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 1694,
                    "end": 1697
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1699,
                          "end": 1700
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1704,
                        "end": 1705
                      },
                      "id": null,
                      "generator": false,
                      "start": 1699,
                      "end": 1705
                    },
                    "start": 1698,
                    "end": 1706
                  },
                  "start": 1694,
                  "end": 1706
                }
              ],
              "selfClosing": true,
              "start": 1676,
              "end": 1709
            },
            "children": [],
            "closingElement": null,
            "start": 1676,
            "end": 1709
          },
          "definite": false,
          "start": 1672,
          "end": 1709
        }
      ],
      "declare": false,
      "start": 1666,
      "end": 1710
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1797
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
    "value": "ActionsObject",
    "start": 10,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 24,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 38,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 54,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 68,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 71,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 81,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 91,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 99,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "Actions",
    "start": 106,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 121,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 129,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "view",
    "start": 140,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 148,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 155,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "actions",
    "start": 162,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "Actions",
    "start": 171,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 180,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 183,
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
    "value": "actions",
    "start": 192,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "Actions",
    "start": 210,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 222,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 230,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 239,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 243,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "Actions",
    "start": 250,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 258,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "ActionsObject",
    "start": 266,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 280,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 288,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 293,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 301,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "Actions",
    "start": 308,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 319,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 326,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 336,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 341,
    "end": 342
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 343,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "actions",
    "start": 352,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 371,
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
    "value": "s",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 378,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "view",
    "start": 430,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 443,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 446,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 456,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 459,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "interface",
    "start": 470,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 480,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 490,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 499,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 507,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 510,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 519,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 527,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 536,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 542,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 550,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 558,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "T",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 575,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 585,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 595,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 649,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "Options2",
    "start": 659,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 668,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "Actions",
    "start": 675,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "state",
    "start": 690,
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
    "value": "State",
    "start": 698,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "view",
    "start": 709,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 717,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 724,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "actions",
    "start": 731,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "Actions",
    "start": 740,
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
    "value": "=>",
    "start": 749,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 752,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "actions",
    "start": 761,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "Actions",
    "start": 771,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 778,
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
    "value": "declare",
    "start": 783,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 791,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "app2",
    "start": 800,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 805,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "Actions",
    "start": 812,
    "end": 819
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 820,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "ActionsObject",
    "start": 828,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 842,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 850,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "Options2",
    "start": 855,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 864,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "Actions",
    "start": 871,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 880,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 882,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "app2",
    "start": 889,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 900,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 905,
    "end": 906
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 907,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "actions",
    "start": 916,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 935,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 942,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 945,
    "end": 946
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
    "value": "view",
    "start": 994,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "=>",
    "start": 1007,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1010,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1020,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1023,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1034,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "ActionsArray",
    "start": 1039,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1052,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1063,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1070,
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
    "type": "Identifier",
    "value": "State",
    "start": 1080,
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
    "value": "[",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1091,
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
    "value": "app3",
    "start": 1108,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1113,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "Actions",
    "start": 1120,
    "end": 1127
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1128,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "ActionsArray",
    "start": 1136,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1149,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1157,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 1162,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1170,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "Actions",
    "start": 1177,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1188,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "app3",
    "start": 1195,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1206,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 1213,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "actions",
    "start": 1222,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1243,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "view",
    "start": 1295,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1308,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1311,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1321,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1324,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1334,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1344,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1354,
    "end": 1360
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1361,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1371,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1386,
    "end": 1392
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1393,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 1403,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1427,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "ActionsObjectOr",
    "start": 1437,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1453,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1467,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1473,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1484,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1491,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1498,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1501,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1510,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1520,
    "end": 1527
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1528,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "App4",
    "start": 1537,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1542,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "Actions",
    "start": 1549,
    "end": 1556
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1557,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "ActionsObjectOr",
    "start": 1565,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1581,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1589,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 1596,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1604,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "Actions",
    "start": 1611,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "String",
    "value": "\"actions\"",
    "start": 1620,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1635,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1642,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1652,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1656,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1666,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "JSXIdentifier",
    "value": "App4",
    "start": 1677,
    "end": 1681
  },
  {
    "type": "JSXIdentifier",
    "value": "state",
    "start": 1682,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 1689,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 1694,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1701,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1709,
    "end": 1710
  }
]
```
