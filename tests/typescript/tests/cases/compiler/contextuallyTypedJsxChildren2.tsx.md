__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 121
          },
          "start": 111,
          "end": 121
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 127,
        "end": 134
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 104,
      "end": 135
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
            "name": "TestComponentWithChildren",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 179,
                        "end": 180
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 179,
                      "end": 180
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TParam",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 182,
                        "end": 188
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 182,
                      "end": 188
                    }
                  ],
                  "start": 178,
                  "end": 189
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
                              "start": 201,
                              "end": 206
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
                                  "start": 208,
                                  "end": 209
                                },
                                "typeArguments": null,
                                "start": 208,
                                "end": 209
                              },
                              "start": 206,
                              "end": 209
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 201,
                            "end": 210
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "selector",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 213,
                              "end": 221
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
                                          "name": "NoInfer",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 232,
                                          "end": 239
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
                                                "start": 240,
                                                "end": 241
                                              },
                                              "typeArguments": null,
                                              "start": 240,
                                              "end": 241
                                            }
                                          ],
                                          "start": 239,
                                          "end": 242
                                        },
                                        "start": 232,
                                        "end": 242
                                      },
                                      "start": 230,
                                      "end": 242
                                    },
                                    "start": 225,
                                    "end": 242
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TParam",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 247,
                                      "end": 253
                                    },
                                    "typeArguments": null,
                                    "start": 247,
                                    "end": 253
                                  },
                                  "start": 244,
                                  "end": 253
                                },
                                "start": 224,
                                "end": 253
                              },
                              "start": 222,
                              "end": 253
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 213,
                            "end": 254
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 257,
                              "end": 265
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
                                          "name": "NoInfer",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 276,
                                          "end": 283
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "TParam",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 284,
                                                "end": 290
                                              },
                                              "typeArguments": null,
                                              "start": 284,
                                              "end": 290
                                            }
                                          ],
                                          "start": 283,
                                          "end": 291
                                        },
                                        "start": 276,
                                        "end": 291
                                      },
                                      "start": 274,
                                      "end": 291
                                    },
                                    "start": 269,
                                    "end": 291
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSUnionType",
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "TSQualifiedName",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "React",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 296,
                                            "end": 301
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "ReactElement",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 302,
                                            "end": 314
                                          },
                                          "start": 296,
                                          "end": 314
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSAnyKeyword",
                                              "start": 315,
                                              "end": 318
                                            }
                                          ],
                                          "start": 314,
                                          "end": 319
                                        },
                                        "start": 296,
                                        "end": 319
                                      },
                                      {
                                        "type": "TSNullKeyword",
                                        "start": 322,
                                        "end": 326
                                      }
                                    ],
                                    "start": 296,
                                    "end": 326
                                  },
                                  "start": 293,
                                  "end": 326
                                },
                                "start": 268,
                                "end": 326
                              },
                              "start": 266,
                              "end": 326
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 257,
                            "end": 327
                          }
                        ],
                        "start": 197,
                        "end": 329
                      },
                      "start": 195,
                      "end": 329
                    },
                    "start": 190,
                    "end": 329
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
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 334,
                        "end": 339
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReactElement",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 340,
                        "end": 352
                      },
                      "start": 334,
                      "end": 352
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 353,
                          "end": 356
                        }
                      ],
                      "start": 352,
                      "end": 357
                    },
                    "start": 334,
                    "end": 357
                  },
                  "start": 331,
                  "end": 357
                },
                "start": 178,
                "end": 357
              },
              "start": 176,
              "end": 357
            },
            "start": 151,
            "end": 357
          },
          "init": null,
          "definite": false,
          "start": 151,
          "end": 357
        }
      ],
      "declare": true,
      "start": 137,
      "end": 358
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
            "name": "TestComponentWithoutChildren",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 405,
                        "end": 406
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 405,
                      "end": 406
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TParam",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 408,
                        "end": 414
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 408,
                      "end": 414
                    }
                  ],
                  "start": 404,
                  "end": 415
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
                              "start": 427,
                              "end": 432
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
                                  "start": 434,
                                  "end": 435
                                },
                                "typeArguments": null,
                                "start": 434,
                                "end": 435
                              },
                              "start": 432,
                              "end": 435
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 427,
                            "end": 436
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "selector",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 439,
                              "end": 447
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
                                          "name": "NoInfer",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 458,
                                          "end": 465
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
                                                "start": 466,
                                                "end": 467
                                              },
                                              "typeArguments": null,
                                              "start": 466,
                                              "end": 467
                                            }
                                          ],
                                          "start": 465,
                                          "end": 468
                                        },
                                        "start": 458,
                                        "end": 468
                                      },
                                      "start": 456,
                                      "end": 468
                                    },
                                    "start": 451,
                                    "end": 468
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TParam",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 473,
                                      "end": 479
                                    },
                                    "typeArguments": null,
                                    "start": 473,
                                    "end": 479
                                  },
                                  "start": 470,
                                  "end": 479
                                },
                                "start": 450,
                                "end": 479
                              },
                              "start": 448,
                              "end": 479
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 439,
                            "end": 480
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "notChildren",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 483,
                              "end": 494
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
                                          "name": "NoInfer",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 505,
                                          "end": 512
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "TParam",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 513,
                                                "end": 519
                                              },
                                              "typeArguments": null,
                                              "start": 513,
                                              "end": 519
                                            }
                                          ],
                                          "start": 512,
                                          "end": 520
                                        },
                                        "start": 505,
                                        "end": 520
                                      },
                                      "start": 503,
                                      "end": 520
                                    },
                                    "start": 498,
                                    "end": 520
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSUnionType",
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "TSQualifiedName",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "React",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 525,
                                            "end": 530
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "ReactElement",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 531,
                                            "end": 543
                                          },
                                          "start": 525,
                                          "end": 543
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSAnyKeyword",
                                              "start": 544,
                                              "end": 547
                                            }
                                          ],
                                          "start": 543,
                                          "end": 548
                                        },
                                        "start": 525,
                                        "end": 548
                                      },
                                      {
                                        "type": "TSNullKeyword",
                                        "start": 551,
                                        "end": 555
                                      }
                                    ],
                                    "start": 525,
                                    "end": 555
                                  },
                                  "start": 522,
                                  "end": 555
                                },
                                "start": 497,
                                "end": 555
                              },
                              "start": 495,
                              "end": 555
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 483,
                            "end": 556
                          }
                        ],
                        "start": 423,
                        "end": 558
                      },
                      "start": 421,
                      "end": 558
                    },
                    "start": 416,
                    "end": 558
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
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 563,
                        "end": 568
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReactElement",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 569,
                        "end": 581
                      },
                      "start": 563,
                      "end": 581
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 582,
                          "end": 585
                        }
                      ],
                      "start": 581,
                      "end": 586
                    },
                    "start": 563,
                    "end": 586
                  },
                  "start": 560,
                  "end": 586
                },
                "start": 404,
                "end": 586
              },
              "start": 402,
              "end": 586
            },
            "start": 374,
            "end": 586
          },
          "init": null,
          "definite": false,
          "start": 374,
          "end": 586
        }
      ],
      "declare": true,
      "start": 360,
      "end": 587
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
            "name": "App",
            "optional": false,
            "typeAnnotation": null,
            "start": 595,
            "end": 598
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "JSXFragment",
                    "openingFragment": {
                      "type": "JSXOpeningFragment",
                      "start": 624,
                      "end": 626
                    },
                    "children": [
                      {
                        "type": "JSXText",
                        "value": "\n      ",
                        "raw": "\n      ",
                        "start": 626,
                        "end": 633
                      },
                      {
                        "type": "JSXElement",
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "TestComponentWithChildren",
                            "start": 634,
                            "end": 659
                          },
                          "typeArguments": null,
                          "attributes": [
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "state",
                                "start": 660,
                                "end": 665
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "expression": {
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
                                        "start": 669,
                                        "end": 672
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": 123,
                                        "raw": "123",
                                        "start": 674,
                                        "end": 677
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 669,
                                      "end": 677
                                    }
                                  ],
                                  "start": 667,
                                  "end": 679
                                },
                                "start": 666,
                                "end": 680
                              },
                              "start": 660,
                              "end": 680
                            },
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "selector",
                                "start": 681,
                                "end": 689
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
                                      "name": "state",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 692,
                                      "end": 697
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "state",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 702,
                                      "end": 707
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "foo",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 708,
                                      "end": 711
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 702,
                                    "end": 711
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 691,
                                  "end": 711
                                },
                                "start": 690,
                                "end": 712
                              },
                              "start": 681,
                              "end": 712
                            }
                          ],
                          "selfClosing": false,
                          "start": 633,
                          "end": 713
                        },
                        "children": [
                          {
                            "type": "JSXText",
                            "value": "\n        ",
                            "raw": "\n        ",
                            "start": 713,
                            "end": 722
                          },
                          {
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
                                  "name": "selected",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 724,
                                  "end": 732
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "JSXElement",
                                "openingElement": {
                                  "type": "JSXOpeningElement",
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "name": "div",
                                    "start": 738,
                                    "end": 741
                                  },
                                  "typeArguments": null,
                                  "attributes": [],
                                  "selfClosing": false,
                                  "start": 737,
                                  "end": 742
                                },
                                "children": [
                                  {
                                    "type": "JSXExpressionContainer",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Math",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 743,
                                          "end": 747
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "max",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 748,
                                          "end": 751
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 743,
                                        "end": 751
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "selected",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 752,
                                          "end": 760
                                        },
                                        {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 762,
                                          "end": 763
                                        }
                                      ],
                                      "optional": false,
                                      "start": 743,
                                      "end": 764
                                    },
                                    "start": 742,
                                    "end": 765
                                  }
                                ],
                                "closingElement": {
                                  "type": "JSXClosingElement",
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "name": "div",
                                    "start": 767,
                                    "end": 770
                                  },
                                  "start": 765,
                                  "end": 771
                                },
                                "start": 737,
                                "end": 771
                              },
                              "id": null,
                              "generator": false,
                              "start": 723,
                              "end": 771
                            },
                            "start": 722,
                            "end": 772
                          },
                          {
                            "type": "JSXText",
                            "value": "\n      ",
                            "raw": "\n      ",
                            "start": 772,
                            "end": 779
                          }
                        ],
                        "closingElement": {
                          "type": "JSXClosingElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "TestComponentWithChildren",
                            "start": 781,
                            "end": 806
                          },
                          "start": 779,
                          "end": 807
                        },
                        "start": 633,
                        "end": 807
                      },
                      {
                        "type": "JSXText",
                        "value": "\n\n      ",
                        "raw": "\n\n      ",
                        "start": 807,
                        "end": 815
                      },
                      {
                        "type": "JSXElement",
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "TestComponentWithoutChildren",
                            "start": 816,
                            "end": 844
                          },
                          "typeArguments": null,
                          "attributes": [
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "state",
                                "start": 853,
                                "end": 858
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "expression": {
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
                                        "start": 862,
                                        "end": 865
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": 123,
                                        "raw": "123",
                                        "start": 867,
                                        "end": 870
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 862,
                                      "end": 870
                                    }
                                  ],
                                  "start": 860,
                                  "end": 872
                                },
                                "start": 859,
                                "end": 873
                              },
                              "start": 853,
                              "end": 873
                            },
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "selector",
                                "start": 882,
                                "end": 890
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
                                      "name": "state",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 893,
                                      "end": 898
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "state",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 903,
                                      "end": 908
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "foo",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 909,
                                      "end": 912
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 903,
                                    "end": 912
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 892,
                                  "end": 912
                                },
                                "start": 891,
                                "end": 913
                              },
                              "start": 882,
                              "end": 913
                            },
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "notChildren",
                                "start": 922,
                                "end": 933
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
                                      "name": "selected",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 936,
                                      "end": 944
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "JSXElement",
                                    "openingElement": {
                                      "type": "JSXOpeningElement",
                                      "name": {
                                        "type": "JSXIdentifier",
                                        "name": "div",
                                        "start": 950,
                                        "end": 953
                                      },
                                      "typeArguments": null,
                                      "attributes": [],
                                      "selfClosing": false,
                                      "start": 949,
                                      "end": 954
                                    },
                                    "children": [
                                      {
                                        "type": "JSXExpressionContainer",
                                        "expression": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Math",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 955,
                                              "end": 959
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "max",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 960,
                                              "end": 963
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 955,
                                            "end": 963
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "selected",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 964,
                                              "end": 972
                                            },
                                            {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0",
                                              "start": 974,
                                              "end": 975
                                            }
                                          ],
                                          "optional": false,
                                          "start": 955,
                                          "end": 976
                                        },
                                        "start": 954,
                                        "end": 977
                                      }
                                    ],
                                    "closingElement": {
                                      "type": "JSXClosingElement",
                                      "name": {
                                        "type": "JSXIdentifier",
                                        "name": "div",
                                        "start": 979,
                                        "end": 982
                                      },
                                      "start": 977,
                                      "end": 983
                                    },
                                    "start": 949,
                                    "end": 983
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 935,
                                  "end": 983
                                },
                                "start": 934,
                                "end": 984
                              },
                              "start": 922,
                              "end": 984
                            }
                          ],
                          "selfClosing": true,
                          "start": 815,
                          "end": 993
                        },
                        "children": [],
                        "closingElement": null,
                        "start": 815,
                        "end": 993
                      },
                      {
                        "type": "JSXText",
                        "value": "\n    ",
                        "raw": "\n    ",
                        "start": 993,
                        "end": 998
                      }
                    ],
                    "closingFragment": {
                      "type": "JSXClosingFragment",
                      "start": 998,
                      "end": 1001
                    },
                    "start": 624,
                    "end": 1001
                  },
                  "start": 611,
                  "end": 1006
                }
              ],
              "start": 607,
              "end": 1008
            },
            "id": null,
            "generator": false,
            "start": 601,
            "end": 1008
          },
          "definite": false,
          "start": 595,
          "end": 1008
        }
      ],
      "declare": false,
      "start": 589,
      "end": 1009
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "State",
        "optional": false,
        "typeAnnotation": null,
        "start": 1080,
        "end": 1085
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1090,
              "end": 1095
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1097,
                "end": 1104
              },
              "start": 1095,
              "end": 1104
            },
            "accessibility": null,
            "static": false,
            "start": 1090,
            "end": 1104
          }
        ],
        "start": 1086,
        "end": 1106
      },
      "declare": false,
      "start": 1070,
      "end": 1106
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
            "name": "Subscribe",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TSelected",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1134,
                        "end": 1143
                      },
                      "constraint": null,
                      "default": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "State",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1146,
                          "end": 1151
                        },
                        "typeArguments": null,
                        "start": 1146,
                        "end": 1151
                      },
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1134,
                      "end": 1151
                    }
                  ],
                  "start": 1133,
                  "end": 1152
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
                              "name": "selector",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1164,
                              "end": 1172
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
                                          "start": 1183,
                                          "end": 1188
                                        },
                                        "typeArguments": null,
                                        "start": 1183,
                                        "end": 1188
                                      },
                                      "start": 1181,
                                      "end": 1188
                                    },
                                    "start": 1176,
                                    "end": 1188
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TSelected",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1193,
                                      "end": 1202
                                    },
                                    "typeArguments": null,
                                    "start": 1193,
                                    "end": 1202
                                  },
                                  "start": 1190,
                                  "end": 1202
                                },
                                "start": 1175,
                                "end": 1202
                              },
                              "start": 1173,
                              "end": 1202
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1164,
                            "end": 1202
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
                              "start": 1205,
                              "end": 1213
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
                                          "name": "TSelected",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1223,
                                          "end": 1232
                                        },
                                        "typeArguments": null,
                                        "start": 1223,
                                        "end": 1232
                                      },
                                      "start": 1221,
                                      "end": 1232
                                    },
                                    "start": 1216,
                                    "end": 1232
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 1237,
                                    "end": 1241
                                  },
                                  "start": 1234,
                                  "end": 1241
                                },
                                "start": 1215,
                                "end": 1241
                              },
                              "start": 1213,
                              "end": 1241
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1205,
                            "end": 1241
                          }
                        ],
                        "start": 1160,
                        "end": 1243
                      },
                      "start": 1158,
                      "end": 1243
                    },
                    "start": 1153,
                    "end": 1243
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
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1248,
                        "end": 1253
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReactElement",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1254,
                        "end": 1266
                      },
                      "start": 1248,
                      "end": 1266
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 1267,
                          "end": 1270
                        }
                      ],
                      "start": 1266,
                      "end": 1271
                    },
                    "start": 1248,
                    "end": 1271
                  },
                  "start": 1245,
                  "end": 1271
                },
                "start": 1133,
                "end": 1271
              },
              "start": 1131,
              "end": 1271
            },
            "start": 1122,
            "end": 1271
          },
          "init": null,
          "definite": false,
          "start": 1122,
          "end": 1271
        }
      ],
      "declare": true,
      "start": 1108,
      "end": 1271
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
            "name": "_result",
            "optional": false,
            "typeAnnotation": null,
            "start": 1279,
            "end": 1286
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Subscribe",
                "start": 1294,
                "end": 1303
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "selector",
                    "start": 1308,
                    "end": 1316
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
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1319,
                          "end": 1324
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "state",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1345,
                                    "end": 1350
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1351,
                                    "end": 1356
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1345,
                                  "end": 1356
                                }
                              ],
                              "start": 1344,
                              "end": 1357
                            },
                            "start": 1337,
                            "end": 1357
                          }
                        ],
                        "start": 1329,
                        "end": 1363
                      },
                      "id": null,
                      "generator": false,
                      "start": 1318,
                      "end": 1363
                    },
                    "start": 1317,
                    "end": 1364
                  },
                  "start": 1308,
                  "end": 1364
                }
              ],
              "selfClosing": false,
              "start": 1293,
              "end": 1368
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 1368,
                "end": 1373
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1376,
                            "end": 1381
                          },
                          "right": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 1384,
                            "end": 1389
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1376,
                          "end": 1389
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1375,
                      "end": 1390
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
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1403,
                              "end": 1410
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1411,
                              "end": 1414
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1403,
                            "end": 1414
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1415,
                              "end": 1420
                            }
                          ],
                          "optional": false,
                          "start": 1403,
                          "end": 1421
                        },
                        "directive": null,
                        "start": 1403,
                        "end": 1421
                      }
                    ],
                    "start": 1395,
                    "end": 1427
                  },
                  "id": null,
                  "generator": false,
                  "start": 1374,
                  "end": 1427
                },
                "start": 1373,
                "end": 1428
              },
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 1428,
                "end": 1431
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Subscribe",
                "start": 1433,
                "end": 1442
              },
              "start": 1431,
              "end": 1443
            },
            "start": 1293,
            "end": 1443
          },
          "definite": false,
          "start": 1279,
          "end": 1445
        }
      ],
      "declare": false,
      "start": 1273,
      "end": 1445
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 104,
  "end": 1445
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 113,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 116,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 122,
    "end": 126
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 127,
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
    "value": "declare",
    "start": 137,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 145,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "TestComponentWithChildren",
    "start": 151,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "TParam",
    "start": 182,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 190,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 201,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "selector",
    "start": 213,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 232,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 244,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "TParam",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 257,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 269,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 276,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "TParam",
    "start": 284,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 293,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 296,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 302,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 315,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 320,
    "end": 321
  },
  {
    "type": "Null",
    "value": "null",
    "start": 322,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 331,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 334,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 340,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 353,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 360,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 368,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "TestComponentWithoutChildren",
    "start": 374,
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
    "value": "<",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "TParam",
    "start": 408,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 416,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 427,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "selector",
    "start": 439,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "(",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 451,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 458,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 470,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "TParam",
    "start": 473,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "notChildren",
    "start": 483,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 498,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 505,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "TParam",
    "start": 513,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 519,
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
    "value": "=>",
    "start": 522,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 525,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 531,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 544,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 549,
    "end": 550
  },
  {
    "type": "Null",
    "value": "null",
    "start": 551,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 560,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 563,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 569,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 582,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 589,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "App",
    "start": 595,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 604,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 611,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "<",
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
    "type": "JSXText",
    "value": "\n      ",
    "start": 626,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 633,
    "end": 634
  },
  {
    "type": "JSXIdentifier",
    "value": "TestComponentWithChildren",
    "start": 634,
    "end": 659
  },
  {
    "type": "JSXIdentifier",
    "value": "state",
    "start": 660,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 669,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 674,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 679,
    "end": 680
  },
  {
    "type": "JSXIdentifier",
    "value": "selector",
    "start": 681,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 692,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 699,
    "end": 701
  },
  {
    "type": "JSXIdentifier",
    "value": "state",
    "start": 702,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 707,
    "end": 708
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 708,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 712,
    "end": 713
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 713,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "selected",
    "start": 724,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 734,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 737,
    "end": 738
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 738,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 742,
    "end": 743
  },
  {
    "type": "JSXIdentifier",
    "value": "Math",
    "start": 743,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 747,
    "end": 748
  },
  {
    "type": "JSXIdentifier",
    "value": "max",
    "start": 748,
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
    "value": "selected",
    "start": 752,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 760,
    "end": 761
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 766,
    "end": 767
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 767,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 771,
    "end": 772
  },
  {
    "type": "JSXText",
    "value": "\n      ",
    "start": 772,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 780,
    "end": 781
  },
  {
    "type": "JSXIdentifier",
    "value": "TestComponentWithChildren",
    "start": 781,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 806,
    "end": 807
  },
  {
    "type": "JSXText",
    "value": "\n\n      ",
    "start": 807,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 815,
    "end": 816
  },
  {
    "type": "JSXIdentifier",
    "value": "TestComponentWithoutChildren",
    "start": 816,
    "end": 844
  },
  {
    "type": "JSXIdentifier",
    "value": "state",
    "start": 853,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 862,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 867,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 872,
    "end": 873
  },
  {
    "type": "JSXIdentifier",
    "value": "selector",
    "start": 882,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 893,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 900,
    "end": 902
  },
  {
    "type": "JSXIdentifier",
    "value": "state",
    "start": 903,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 908,
    "end": 909
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 909,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 912,
    "end": 913
  },
  {
    "type": "JSXIdentifier",
    "value": "notChildren",
    "start": 922,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "selected",
    "start": 936,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 946,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 949,
    "end": 950
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 950,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 954,
    "end": 955
  },
  {
    "type": "JSXIdentifier",
    "value": "Math",
    "start": 955,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 959,
    "end": 960
  },
  {
    "type": "JSXIdentifier",
    "value": "max",
    "start": 960,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "selected",
    "start": 964,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 972,
    "end": 973
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 978,
    "end": 979
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 979,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 992,
    "end": 993
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 993,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1070,
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
    "value": "{",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1090,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1097,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1108,
    "end": 1115
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1116,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "Subscribe",
    "start": 1122,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "TSelected",
    "start": 1134,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1146,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1153,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "selector",
    "start": 1164,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1176,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1183,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1190,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "TSelected",
    "start": 1193,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 1205,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1216,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "TSelected",
    "start": 1223,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1234,
    "end": 1236
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1237,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1245,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 1248,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 1254,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1267,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1273,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "_result",
    "start": 1279,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "JSXIdentifier",
    "value": "Subscribe",
    "start": 1294,
    "end": 1303
  },
  {
    "type": "JSXIdentifier",
    "value": "selector",
    "start": 1308,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1319,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1326,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1337,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "JSXIdentifier",
    "value": "state",
    "start": 1345,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "JSXIdentifier",
    "value": "value",
    "start": 1351,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 1368,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1376,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1384,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1392,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "JSXIdentifier",
    "value": "console",
    "start": 1403,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "JSXIdentifier",
    "value": "log",
    "start": 1411,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1415,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 1428,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "JSXIdentifier",
    "value": "Subscribe",
    "start": 1433,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1444,
    "end": 1445
  }
]
```
