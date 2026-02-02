__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 55
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 66,
          "end": 73
        },
        "start": 58,
        "end": 74
      },
      "importKind": "value",
      "start": 43,
      "end": 74
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentSpecific1",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 111
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 113
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 112,
            "end": 113
          }
        ],
        "start": 111,
        "end": 114
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
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
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 123
                  },
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
                        "start": 125,
                        "end": 126
                      },
                      "typeArguments": null,
                      "start": 125,
                      "end": 126
                    },
                    "start": 123,
                    "end": 126
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 119,
                  "end": 127
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "ignore-prop",
                    "raw": "\"ignore-prop\"",
                    "start": 128,
                    "end": 141
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 143,
                      "end": 149
                    },
                    "start": 141,
                    "end": 149
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 128,
                  "end": 149
                }
              ],
              "start": 118,
              "end": 150
            },
            "start": 116,
            "end": 150
          },
          "start": 115,
          "end": 150
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
              "start": 153,
              "end": 156
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 164
            },
            "start": 153,
            "end": 164
          },
          "typeArguments": null,
          "start": 153,
          "end": 164
        },
        "start": 151,
        "end": 164
      },
      "body": null,
      "expression": false,
      "start": 76,
      "end": 165
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentSpecific2",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 201
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 203
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 202,
            "end": 203
          }
        ],
        "start": 201,
        "end": 204
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
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
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 213
                  },
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
                        "start": 215,
                        "end": 216
                      },
                      "typeArguments": null,
                      "start": 215,
                      "end": 216
                    },
                    "start": 213,
                    "end": 216
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 209,
                  "end": 216
                }
              ],
              "start": 208,
              "end": 217
            },
            "start": 206,
            "end": 217
          },
          "start": 205,
          "end": 217
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
              "start": 220,
              "end": 223
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 231
            },
            "start": 220,
            "end": 231
          },
          "typeArguments": null,
          "start": 220,
          "end": 231
        },
        "start": 218,
        "end": 231
      },
      "body": null,
      "expression": false,
      "start": 166,
      "end": 232
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 252,
        "end": 255
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
              "start": 256,
              "end": 257
            },
            "constraint": {
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
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 267,
                    "end": 271
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 273,
                      "end": 279
                    },
                    "start": 271,
                    "end": 279
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 267,
                  "end": 279
                }
              ],
              "start": 266,
              "end": 280
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 256,
            "end": 280
          }
        ],
        "start": 255,
        "end": 281
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                "start": 287,
                "end": 288
              },
              "typeArguments": null,
              "start": 287,
              "end": 288
            },
            "start": 285,
            "end": 288
          },
          "start": 282,
          "end": 288
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 300,
                  "end": 302
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "ComponentSpecific1",
                      "start": 306,
                      "end": 324
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 329,
                          "end": 332
                        },
                        "start": 325,
                        "end": 333
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-prop",
                          "start": 334,
                          "end": 345
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 347,
                            "end": 349
                          },
                          "start": 346,
                          "end": 350
                        },
                        "start": 334,
                        "end": 350
                      }
                    ],
                    "selfClosing": true,
                    "start": 305,
                    "end": 353
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 305,
                  "end": 353
                },
                "definite": false,
                "start": 300,
                "end": 353
              }
            ],
            "declare": false,
            "start": 296,
            "end": 354
          }
        ],
        "start": 290,
        "end": 357
      },
      "expression": false,
      "start": 243,
      "end": 357
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 377,
        "end": 380
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
              "start": 381,
              "end": 382
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 381,
            "end": 382
          }
        ],
        "start": 380,
        "end": 383
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                "start": 389,
                "end": 390
              },
              "typeArguments": null,
              "start": 389,
              "end": 390
            },
            "start": 387,
            "end": 390
          },
          "start": 384,
          "end": 390
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 402,
                  "end": 404
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "ComponentSpecific1",
                      "start": 408,
                      "end": 426
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 431,
                          "end": 434
                        },
                        "start": 427,
                        "end": 435
                      }
                    ],
                    "selfClosing": true,
                    "start": 407,
                    "end": 438
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 407,
                  "end": 438
                },
                "definite": false,
                "start": 402,
                "end": 438
              }
            ],
            "declare": false,
            "start": 398,
            "end": 438
          }
        ],
        "start": 392,
        "end": 440
      },
      "expression": false,
      "start": 368,
      "end": 440
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Link",
        "optional": false,
        "typeAnnotation": null,
        "start": 459,
        "end": 463
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 464,
              "end": 465
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 464,
            "end": 465
          }
        ],
        "start": 463,
        "end": 466
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
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
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 471,
                    "end": 475
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
                          "name": "arg",
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
                                "start": 483,
                                "end": 484
                              },
                              "typeArguments": null,
                              "start": 483,
                              "end": 484
                            },
                            "start": 481,
                            "end": 484
                          },
                          "start": 478,
                          "end": 484
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 487,
                          "end": 491
                        },
                        "start": 485,
                        "end": 491
                      },
                      "start": 477,
                      "end": 491
                    },
                    "start": 475,
                    "end": 491
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 471,
                  "end": 491
                }
              ],
              "start": 470,
              "end": 492
            },
            "start": 468,
            "end": 492
          },
          "start": 467,
          "end": 492
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
              "start": 495,
              "end": 498
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 499,
              "end": 506
            },
            "start": 495,
            "end": 506
          },
          "typeArguments": null,
          "start": 495,
          "end": 506
        },
        "start": 493,
        "end": 506
      },
      "body": null,
      "expression": false,
      "start": 442,
      "end": 507
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createLink",
        "optional": false,
        "typeAnnotation": null,
        "start": 527,
        "end": 537
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 548,
                      "end": 554
                    },
                    "start": 546,
                    "end": 554
                  },
                  "start": 545,
                  "end": 554
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 559,
                      "end": 565
                    },
                    "start": 557,
                    "end": 565
                  },
                  "start": 556,
                  "end": 565
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 568,
                  "end": 572
                },
                "start": 566,
                "end": 572
              },
              "start": 544,
              "end": 572
            },
            "start": 542,
            "end": 572
          },
          "start": 538,
          "end": 572
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "start": 584,
                  "end": 585
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Link",
                      "start": 589,
                      "end": 593
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "func",
                          "start": 594,
                          "end": 598
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "func",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 600,
                            "end": 604
                          },
                          "start": 599,
                          "end": 605
                        },
                        "start": 594,
                        "end": 605
                      }
                    ],
                    "selfClosing": true,
                    "start": 588,
                    "end": 608
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 588,
                  "end": 608
                },
                "definite": false,
                "start": 584,
                "end": 608
              }
            ],
            "declare": false,
            "start": 580,
            "end": 608
          }
        ],
        "start": 574,
        "end": 610
      },
      "expression": false,
      "start": 518,
      "end": 610
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferParamProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 622,
        "end": 636
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
              "start": 637,
              "end": 638
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 637,
            "end": 638
          }
        ],
        "start": 636,
        "end": 639
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
              "name": "values",
              "optional": false,
              "typeAnnotation": null,
              "start": 646,
              "end": 652
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 654,
                  "end": 659
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
                        "start": 660,
                        "end": 661
                      },
                      "typeArguments": null,
                      "start": 660,
                      "end": 661
                    }
                  ],
                  "start": 659,
                  "end": 662
                },
                "start": 654,
                "end": 662
              },
              "start": 652,
              "end": 662
            },
            "accessibility": null,
            "static": false,
            "start": 646,
            "end": 663
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "selectHandler",
              "optional": false,
              "typeAnnotation": null,
              "start": 668,
              "end": 681
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
                    "name": "selectedVal",
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
                          "start": 697,
                          "end": 698
                        },
                        "typeArguments": null,
                        "start": 697,
                        "end": 698
                      },
                      "start": 695,
                      "end": 698
                    },
                    "start": 684,
                    "end": 698
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 703,
                    "end": 707
                  },
                  "start": 700,
                  "end": 707
                },
                "start": 683,
                "end": 707
              },
              "start": 681,
              "end": 707
            },
            "accessibility": null,
            "static": false,
            "start": 668,
            "end": 708
          }
        ],
        "start": 640,
        "end": 710
      },
      "declare": false,
      "start": 612,
      "end": 710
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferParamComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 729,
        "end": 748
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
              "start": 749,
              "end": 750
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 749,
            "end": 750
          }
        ],
        "start": 748,
        "end": 751
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InferParamProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 758,
                "end": 772
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
                      "start": 773,
                      "end": 774
                    },
                    "typeArguments": null,
                    "start": 773,
                    "end": 774
                  }
                ],
                "start": 772,
                "end": 775
              },
              "start": 758,
              "end": 775
            },
            "start": 756,
            "end": 775
          },
          "start": 752,
          "end": 775
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
              "start": 778,
              "end": 781
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 782,
              "end": 789
            },
            "start": 778,
            "end": 789
          },
          "typeArguments": null,
          "start": 778,
          "end": 789
        },
        "start": 776,
        "end": 789
      },
      "body": null,
      "expression": false,
      "start": 712,
      "end": 790
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 805,
            "end": 806
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "InferParamComponent",
                "start": 810,
                "end": 829
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "values",
                    "start": 830,
                    "end": 836
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 839,
                          "end": 840
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 842,
                          "end": 843
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 845,
                          "end": 846
                        },
                        {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 848,
                          "end": 849
                        }
                      ],
                      "start": 838,
                      "end": 850
                    },
                    "start": 837,
                    "end": 851
                  },
                  "start": 830,
                  "end": 851
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "selectHandler",
                    "start": 852,
                    "end": 865
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 873,
                              "end": 879
                            },
                            "start": 871,
                            "end": 879
                          },
                          "start": 868,
                          "end": 879
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 884,
                        "end": 887
                      },
                      "id": null,
                      "generator": false,
                      "start": 867,
                      "end": 887
                    },
                    "start": 866,
                    "end": 888
                  },
                  "start": 852,
                  "end": 888
                }
              ],
              "selfClosing": true,
              "start": 809,
              "end": 891
            },
            "children": [],
            "closingElement": null,
            "start": 809,
            "end": 891
          },
          "definite": false,
          "start": 805,
          "end": 891
        }
      ],
      "declare": false,
      "start": 801,
      "end": 892
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 892
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 76,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 84,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "ComponentSpecific1",
    "start": 93,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 112,
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
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 126,
    "end": 127
  },
  {
    "type": "String",
    "value": "\"ignore-prop\"",
    "start": 128,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 143,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 153,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 157,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 166,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 174,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "ComponentSpecific2",
    "start": 183,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 209,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 220,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 224,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 243,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 252,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 258,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 267,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 273,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 279,
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
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 282,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 296,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 300,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 305,
    "end": 306
  },
  {
    "type": "JSXIdentifier",
    "value": "ComponentSpecific1",
    "start": 306,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 326,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 329,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 332,
    "end": 333
  },
  {
    "type": "JSXIdentifier",
    "value": "ignore-prop",
    "start": 334,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 346,
    "end": 347
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 347,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 368,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 377,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 384,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 398,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 402,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 407,
    "end": 408
  },
  {
    "type": "JSXIdentifier",
    "value": "ComponentSpecific1",
    "start": 408,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 428,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 431,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 442,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 450,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "Link",
    "start": 459,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 471,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 478,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 485,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 487,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 495,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 499,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 518,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "createLink",
    "start": 527,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 538,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 548,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "string",
    "start": 559,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 566,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 568,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 574,
    "end": 575
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 580,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 588,
    "end": 589
  },
  {
    "type": "JSXIdentifier",
    "value": "Link",
    "start": 589,
    "end": 593
  },
  {
    "type": "JSXIdentifier",
    "value": "func",
    "start": 594,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 600,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 612,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "InferParamProp",
    "start": 622,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 646,
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
    "value": "Array",
    "start": 654,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "selectHandler",
    "start": 668,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "selectedVal",
    "start": 684,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 700,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 703,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 712,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 720,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "InferParamComponent",
    "start": 729,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 752,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "InferParamProp",
    "start": 758,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 778,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 782,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 801,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 809,
    "end": 810
  },
  {
    "type": "JSXIdentifier",
    "value": "InferParamComponent",
    "start": 810,
    "end": 829
  },
  {
    "type": "JSXIdentifier",
    "value": "values",
    "start": 830,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "[",
    "start": 838,
    "end": 839
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 840,
    "end": 841
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 843,
    "end": 844
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 846,
    "end": 847
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 850,
    "end": 851
  },
  {
    "type": "JSXIdentifier",
    "value": "selectHandler",
    "start": 852,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 868,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 873,
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
    "value": "=>",
    "start": 881,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  }
]
```
