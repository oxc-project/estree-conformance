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
            "start": 117,
            "end": 122
          },
          "start": 112,
          "end": 122
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 128,
        "end": 135
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 105,
      "end": 136
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
                        "start": 180,
                        "end": 181
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 180,
                      "end": 181
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TParam",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 183,
                        "end": 189
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 183,
                      "end": 189
                    }
                  ],
                  "start": 179,
                  "end": 190
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
                              "start": 202,
                              "end": 207
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
                                  "start": 209,
                                  "end": 210
                                },
                                "typeArguments": null,
                                "start": 209,
                                "end": 210
                              },
                              "start": 207,
                              "end": 210
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 202,
                            "end": 211
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
                              "start": 214,
                              "end": 222
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
                                          "start": 233,
                                          "end": 240
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
                                                "start": 241,
                                                "end": 242
                                              },
                                              "typeArguments": null,
                                              "start": 241,
                                              "end": 242
                                            }
                                          ],
                                          "start": 240,
                                          "end": 243
                                        },
                                        "start": 233,
                                        "end": 243
                                      },
                                      "start": 231,
                                      "end": 243
                                    },
                                    "start": 226,
                                    "end": 243
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
                                      "start": 248,
                                      "end": 254
                                    },
                                    "typeArguments": null,
                                    "start": 248,
                                    "end": 254
                                  },
                                  "start": 245,
                                  "end": 254
                                },
                                "start": 225,
                                "end": 254
                              },
                              "start": 223,
                              "end": 254
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 214,
                            "end": 255
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
                              "start": 258,
                              "end": 266
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
                                          "start": 277,
                                          "end": 284
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
                                                "start": 285,
                                                "end": 291
                                              },
                                              "typeArguments": null,
                                              "start": 285,
                                              "end": 291
                                            }
                                          ],
                                          "start": 284,
                                          "end": 292
                                        },
                                        "start": 277,
                                        "end": 292
                                      },
                                      "start": 275,
                                      "end": 292
                                    },
                                    "start": 270,
                                    "end": 292
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
                                            "start": 297,
                                            "end": 302
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "ReactElement",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 303,
                                            "end": 315
                                          },
                                          "start": 297,
                                          "end": 315
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSAnyKeyword",
                                              "start": 316,
                                              "end": 319
                                            }
                                          ],
                                          "start": 315,
                                          "end": 320
                                        },
                                        "start": 297,
                                        "end": 320
                                      },
                                      {
                                        "type": "TSNullKeyword",
                                        "start": 323,
                                        "end": 327
                                      }
                                    ],
                                    "start": 297,
                                    "end": 327
                                  },
                                  "start": 294,
                                  "end": 327
                                },
                                "start": 269,
                                "end": 327
                              },
                              "start": 267,
                              "end": 327
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 258,
                            "end": 328
                          }
                        ],
                        "start": 198,
                        "end": 330
                      },
                      "start": 196,
                      "end": 330
                    },
                    "start": 191,
                    "end": 330
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
                        "start": 335,
                        "end": 340
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReactElement",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 341,
                        "end": 353
                      },
                      "start": 335,
                      "end": 353
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 354,
                          "end": 357
                        }
                      ],
                      "start": 353,
                      "end": 358
                    },
                    "start": 335,
                    "end": 358
                  },
                  "start": 332,
                  "end": 358
                },
                "start": 179,
                "end": 358
              },
              "start": 177,
              "end": 358
            },
            "start": 152,
            "end": 358
          },
          "init": null,
          "definite": false,
          "start": 152,
          "end": 358
        }
      ],
      "declare": true,
      "start": 138,
      "end": 359
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
                        "start": 406,
                        "end": 407
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 406,
                      "end": 407
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TParam",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 409,
                        "end": 415
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 409,
                      "end": 415
                    }
                  ],
                  "start": 405,
                  "end": 416
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
                              "start": 428,
                              "end": 433
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
                                  "start": 435,
                                  "end": 436
                                },
                                "typeArguments": null,
                                "start": 435,
                                "end": 436
                              },
                              "start": 433,
                              "end": 436
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 428,
                            "end": 437
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
                              "start": 440,
                              "end": 448
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
                                          "start": 459,
                                          "end": 466
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
                                                "start": 467,
                                                "end": 468
                                              },
                                              "typeArguments": null,
                                              "start": 467,
                                              "end": 468
                                            }
                                          ],
                                          "start": 466,
                                          "end": 469
                                        },
                                        "start": 459,
                                        "end": 469
                                      },
                                      "start": 457,
                                      "end": 469
                                    },
                                    "start": 452,
                                    "end": 469
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
                                      "start": 474,
                                      "end": 480
                                    },
                                    "typeArguments": null,
                                    "start": 474,
                                    "end": 480
                                  },
                                  "start": 471,
                                  "end": 480
                                },
                                "start": 451,
                                "end": 480
                              },
                              "start": 449,
                              "end": 480
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 440,
                            "end": 481
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
                              "start": 484,
                              "end": 495
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
                                          "start": 506,
                                          "end": 513
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
                                                "start": 514,
                                                "end": 520
                                              },
                                              "typeArguments": null,
                                              "start": 514,
                                              "end": 520
                                            }
                                          ],
                                          "start": 513,
                                          "end": 521
                                        },
                                        "start": 506,
                                        "end": 521
                                      },
                                      "start": 504,
                                      "end": 521
                                    },
                                    "start": 499,
                                    "end": 521
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
                                            "start": 526,
                                            "end": 531
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "ReactElement",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 532,
                                            "end": 544
                                          },
                                          "start": 526,
                                          "end": 544
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSAnyKeyword",
                                              "start": 545,
                                              "end": 548
                                            }
                                          ],
                                          "start": 544,
                                          "end": 549
                                        },
                                        "start": 526,
                                        "end": 549
                                      },
                                      {
                                        "type": "TSNullKeyword",
                                        "start": 552,
                                        "end": 556
                                      }
                                    ],
                                    "start": 526,
                                    "end": 556
                                  },
                                  "start": 523,
                                  "end": 556
                                },
                                "start": 498,
                                "end": 556
                              },
                              "start": 496,
                              "end": 556
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 484,
                            "end": 557
                          }
                        ],
                        "start": 424,
                        "end": 559
                      },
                      "start": 422,
                      "end": 559
                    },
                    "start": 417,
                    "end": 559
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
                        "start": 564,
                        "end": 569
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReactElement",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 570,
                        "end": 582
                      },
                      "start": 564,
                      "end": 582
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 583,
                          "end": 586
                        }
                      ],
                      "start": 582,
                      "end": 587
                    },
                    "start": 564,
                    "end": 587
                  },
                  "start": 561,
                  "end": 587
                },
                "start": 405,
                "end": 587
              },
              "start": 403,
              "end": 587
            },
            "start": 375,
            "end": 587
          },
          "init": null,
          "definite": false,
          "start": 375,
          "end": 587
        }
      ],
      "declare": true,
      "start": 361,
      "end": 588
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
            "start": 596,
            "end": 599
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
                      "start": 625,
                      "end": 627
                    },
                    "children": [
                      {
                        "type": "JSXText",
                        "value": "\n      ",
                        "raw": "\n      ",
                        "start": 627,
                        "end": 634
                      },
                      {
                        "type": "JSXElement",
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "TestComponentWithChildren",
                            "start": 635,
                            "end": 660
                          },
                          "typeArguments": null,
                          "attributes": [
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "state",
                                "start": 661,
                                "end": 666
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
                                        "start": 670,
                                        "end": 673
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": 123,
                                        "raw": "123",
                                        "start": 675,
                                        "end": 678
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 670,
                                      "end": 678
                                    }
                                  ],
                                  "start": 668,
                                  "end": 680
                                },
                                "start": 667,
                                "end": 681
                              },
                              "start": 661,
                              "end": 681
                            },
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "selector",
                                "start": 682,
                                "end": 690
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
                                      "start": 693,
                                      "end": 698
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
                                      "start": 703,
                                      "end": 708
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "foo",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 709,
                                      "end": 712
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 703,
                                    "end": 712
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 692,
                                  "end": 712
                                },
                                "start": 691,
                                "end": 713
                              },
                              "start": 682,
                              "end": 713
                            }
                          ],
                          "selfClosing": false,
                          "start": 634,
                          "end": 714
                        },
                        "children": [
                          {
                            "type": "JSXText",
                            "value": "\n        ",
                            "raw": "\n        ",
                            "start": 714,
                            "end": 723
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
                                  "start": 725,
                                  "end": 733
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
                                    "start": 739,
                                    "end": 742
                                  },
                                  "typeArguments": null,
                                  "attributes": [],
                                  "selfClosing": false,
                                  "start": 738,
                                  "end": 743
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
                                          "start": 744,
                                          "end": 748
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "max",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 749,
                                          "end": 752
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 744,
                                        "end": 752
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "selected",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 753,
                                          "end": 761
                                        },
                                        {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 763,
                                          "end": 764
                                        }
                                      ],
                                      "optional": false,
                                      "start": 744,
                                      "end": 765
                                    },
                                    "start": 743,
                                    "end": 766
                                  }
                                ],
                                "closingElement": {
                                  "type": "JSXClosingElement",
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "name": "div",
                                    "start": 768,
                                    "end": 771
                                  },
                                  "start": 766,
                                  "end": 772
                                },
                                "start": 738,
                                "end": 772
                              },
                              "id": null,
                              "generator": false,
                              "start": 724,
                              "end": 772
                            },
                            "start": 723,
                            "end": 773
                          },
                          {
                            "type": "JSXText",
                            "value": "\n      ",
                            "raw": "\n      ",
                            "start": 773,
                            "end": 780
                          }
                        ],
                        "closingElement": {
                          "type": "JSXClosingElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "TestComponentWithChildren",
                            "start": 782,
                            "end": 807
                          },
                          "start": 780,
                          "end": 808
                        },
                        "start": 634,
                        "end": 808
                      },
                      {
                        "type": "JSXText",
                        "value": "\n\n      ",
                        "raw": "\n\n      ",
                        "start": 808,
                        "end": 816
                      },
                      {
                        "type": "JSXElement",
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "TestComponentWithoutChildren",
                            "start": 817,
                            "end": 845
                          },
                          "typeArguments": null,
                          "attributes": [
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "state",
                                "start": 854,
                                "end": 859
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
                                        "start": 863,
                                        "end": 866
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": 123,
                                        "raw": "123",
                                        "start": 868,
                                        "end": 871
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 863,
                                      "end": 871
                                    }
                                  ],
                                  "start": 861,
                                  "end": 873
                                },
                                "start": 860,
                                "end": 874
                              },
                              "start": 854,
                              "end": 874
                            },
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "selector",
                                "start": 883,
                                "end": 891
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
                                      "start": 894,
                                      "end": 899
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
                                      "start": 904,
                                      "end": 909
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "foo",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 910,
                                      "end": 913
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 904,
                                    "end": 913
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 893,
                                  "end": 913
                                },
                                "start": 892,
                                "end": 914
                              },
                              "start": 883,
                              "end": 914
                            },
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "notChildren",
                                "start": 923,
                                "end": 934
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
                                      "start": 937,
                                      "end": 945
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
                                        "start": 951,
                                        "end": 954
                                      },
                                      "typeArguments": null,
                                      "attributes": [],
                                      "selfClosing": false,
                                      "start": 950,
                                      "end": 955
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
                                              "start": 956,
                                              "end": 960
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "max",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 961,
                                              "end": 964
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 956,
                                            "end": 964
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "selected",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 965,
                                              "end": 973
                                            },
                                            {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0",
                                              "start": 975,
                                              "end": 976
                                            }
                                          ],
                                          "optional": false,
                                          "start": 956,
                                          "end": 977
                                        },
                                        "start": 955,
                                        "end": 978
                                      }
                                    ],
                                    "closingElement": {
                                      "type": "JSXClosingElement",
                                      "name": {
                                        "type": "JSXIdentifier",
                                        "name": "div",
                                        "start": 980,
                                        "end": 983
                                      },
                                      "start": 978,
                                      "end": 984
                                    },
                                    "start": 950,
                                    "end": 984
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 936,
                                  "end": 984
                                },
                                "start": 935,
                                "end": 985
                              },
                              "start": 923,
                              "end": 985
                            }
                          ],
                          "selfClosing": true,
                          "start": 816,
                          "end": 994
                        },
                        "children": [],
                        "closingElement": null,
                        "start": 816,
                        "end": 994
                      },
                      {
                        "type": "JSXText",
                        "value": "\n    ",
                        "raw": "\n    ",
                        "start": 994,
                        "end": 999
                      }
                    ],
                    "closingFragment": {
                      "type": "JSXClosingFragment",
                      "start": 999,
                      "end": 1002
                    },
                    "start": 625,
                    "end": 1002
                  },
                  "start": 612,
                  "end": 1007
                }
              ],
              "start": 608,
              "end": 1009
            },
            "id": null,
            "generator": false,
            "start": 602,
            "end": 1009
          },
          "definite": false,
          "start": 596,
          "end": 1009
        }
      ],
      "declare": false,
      "start": 590,
      "end": 1010
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "State",
        "optional": false,
        "typeAnnotation": null,
        "start": 1082,
        "end": 1087
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
              "start": 1092,
              "end": 1097
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1099,
                "end": 1106
              },
              "start": 1097,
              "end": 1106
            },
            "accessibility": null,
            "static": false,
            "start": 1092,
            "end": 1106
          }
        ],
        "start": 1088,
        "end": 1108
      },
      "declare": false,
      "start": 1072,
      "end": 1108
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
                        "start": 1136,
                        "end": 1145
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
                          "start": 1148,
                          "end": 1153
                        },
                        "typeArguments": null,
                        "start": 1148,
                        "end": 1153
                      },
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1136,
                      "end": 1153
                    }
                  ],
                  "start": 1135,
                  "end": 1154
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
                              "start": 1166,
                              "end": 1174
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
                                          "start": 1185,
                                          "end": 1190
                                        },
                                        "typeArguments": null,
                                        "start": 1185,
                                        "end": 1190
                                      },
                                      "start": 1183,
                                      "end": 1190
                                    },
                                    "start": 1178,
                                    "end": 1190
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
                                      "start": 1195,
                                      "end": 1204
                                    },
                                    "typeArguments": null,
                                    "start": 1195,
                                    "end": 1204
                                  },
                                  "start": 1192,
                                  "end": 1204
                                },
                                "start": 1177,
                                "end": 1204
                              },
                              "start": 1175,
                              "end": 1204
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1166,
                            "end": 1204
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
                              "start": 1207,
                              "end": 1215
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
                                          "start": 1225,
                                          "end": 1234
                                        },
                                        "typeArguments": null,
                                        "start": 1225,
                                        "end": 1234
                                      },
                                      "start": 1223,
                                      "end": 1234
                                    },
                                    "start": 1218,
                                    "end": 1234
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 1239,
                                    "end": 1243
                                  },
                                  "start": 1236,
                                  "end": 1243
                                },
                                "start": 1217,
                                "end": 1243
                              },
                              "start": 1215,
                              "end": 1243
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1207,
                            "end": 1243
                          }
                        ],
                        "start": 1162,
                        "end": 1245
                      },
                      "start": 1160,
                      "end": 1245
                    },
                    "start": 1155,
                    "end": 1245
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
                        "start": 1250,
                        "end": 1255
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReactElement",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1256,
                        "end": 1268
                      },
                      "start": 1250,
                      "end": 1268
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 1269,
                          "end": 1272
                        }
                      ],
                      "start": 1268,
                      "end": 1273
                    },
                    "start": 1250,
                    "end": 1273
                  },
                  "start": 1247,
                  "end": 1273
                },
                "start": 1135,
                "end": 1273
              },
              "start": 1133,
              "end": 1273
            },
            "start": 1124,
            "end": 1273
          },
          "init": null,
          "definite": false,
          "start": 1124,
          "end": 1273
        }
      ],
      "declare": true,
      "start": 1110,
      "end": 1273
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
            "start": 1281,
            "end": 1288
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Subscribe",
                "start": 1296,
                "end": 1305
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "selector",
                    "start": 1310,
                    "end": 1318
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
                          "start": 1321,
                          "end": 1326
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
                                    "start": 1347,
                                    "end": 1352
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1353,
                                    "end": 1358
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1347,
                                  "end": 1358
                                }
                              ],
                              "start": 1346,
                              "end": 1359
                            },
                            "start": 1339,
                            "end": 1359
                          }
                        ],
                        "start": 1331,
                        "end": 1365
                      },
                      "id": null,
                      "generator": false,
                      "start": 1320,
                      "end": 1365
                    },
                    "start": 1319,
                    "end": 1366
                  },
                  "start": 1310,
                  "end": 1366
                }
              ],
              "selfClosing": false,
              "start": 1295,
              "end": 1370
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 1370,
                "end": 1375
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
                            "start": 1378,
                            "end": 1383
                          },
                          "right": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 1386,
                            "end": 1391
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1378,
                          "end": 1391
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1377,
                      "end": 1392
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
                              "start": 1405,
                              "end": 1412
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1413,
                              "end": 1416
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1405,
                            "end": 1416
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1417,
                              "end": 1422
                            }
                          ],
                          "optional": false,
                          "start": 1405,
                          "end": 1423
                        },
                        "directive": null,
                        "start": 1405,
                        "end": 1423
                      }
                    ],
                    "start": 1397,
                    "end": 1429
                  },
                  "id": null,
                  "generator": false,
                  "start": 1376,
                  "end": 1429
                },
                "start": 1375,
                "end": 1430
              },
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 1430,
                "end": 1433
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Subscribe",
                "start": 1435,
                "end": 1444
              },
              "start": 1433,
              "end": 1445
            },
            "start": 1295,
            "end": 1445
          },
          "definite": false,
          "start": 1281,
          "end": 1447
        }
      ],
      "declare": false,
      "start": 1275,
      "end": 1447
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 105,
  "end": 1447
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 114,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 117,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 123,
    "end": 127
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 128,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 138,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 146,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "TestComponentWithChildren",
    "start": 152,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "TParam",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 191,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 202,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "selector",
    "start": 214,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 226,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 233,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 245,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "TParam",
    "start": 248,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 258,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 270,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 277,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "TParam",
    "start": 285,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 294,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 297,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 303,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 316,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 321,
    "end": 322
  },
  {
    "type": "Null",
    "value": "null",
    "start": 323,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 332,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 335,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 341,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 354,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "declare",
    "start": 361,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 369,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "TestComponentWithoutChildren",
    "start": 375,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "TParam",
    "start": 409,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 417,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 428,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "selector",
    "start": 440,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 452,
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
    "value": "NoInfer",
    "start": 459,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 471,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "TParam",
    "start": 474,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "notChildren",
    "start": 484,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "state",
    "start": 499,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 506,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "TParam",
    "start": 514,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 523,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 526,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 532,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 545,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 550,
    "end": 551
  },
  {
    "type": "Null",
    "value": "null",
    "start": 552,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 561,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 564,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 570,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 583,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 587,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 590,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "App",
    "start": 596,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 605,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 608,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 612,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 626,
    "end": 627
  },
  {
    "type": "JSXText",
    "value": "\n      ",
    "start": 627,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 634,
    "end": 635
  },
  {
    "type": "JSXIdentifier",
    "value": "TestComponentWithChildren",
    "start": 635,
    "end": 660
  },
  {
    "type": "JSXIdentifier",
    "value": "state",
    "start": 661,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "{",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 670,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 673,
    "end": 674
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 675,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 680,
    "end": 681
  },
  {
    "type": "JSXIdentifier",
    "value": "selector",
    "start": 682,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 693,
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
    "type": "JSXIdentifier",
    "value": "state",
    "start": 703,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 708,
    "end": 709
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 709,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 713,
    "end": 714
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 714,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "selected",
    "start": 725,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 735,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 738,
    "end": 739
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 739,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 743,
    "end": 744
  },
  {
    "type": "JSXIdentifier",
    "value": "Math",
    "start": 744,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 748,
    "end": 749
  },
  {
    "type": "JSXIdentifier",
    "value": "max",
    "start": 749,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "selected",
    "start": 753,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 761,
    "end": 762
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 767,
    "end": 768
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 768,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 772,
    "end": 773
  },
  {
    "type": "JSXText",
    "value": "\n      ",
    "start": 773,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 781,
    "end": 782
  },
  {
    "type": "JSXIdentifier",
    "value": "TestComponentWithChildren",
    "start": 782,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 807,
    "end": 808
  },
  {
    "type": "JSXText",
    "value": "\n\n      ",
    "start": 808,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 816,
    "end": 817
  },
  {
    "type": "JSXIdentifier",
    "value": "TestComponentWithoutChildren",
    "start": 817,
    "end": 845
  },
  {
    "type": "JSXIdentifier",
    "value": "state",
    "start": 854,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "{",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 863,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 866,
    "end": 867
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 868,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 873,
    "end": 874
  },
  {
    "type": "JSXIdentifier",
    "value": "selector",
    "start": 883,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 894,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 901,
    "end": 903
  },
  {
    "type": "JSXIdentifier",
    "value": "state",
    "start": 904,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 909,
    "end": 910
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 910,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 913,
    "end": 914
  },
  {
    "type": "JSXIdentifier",
    "value": "notChildren",
    "start": 923,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "selected",
    "start": 937,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 947,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 950,
    "end": 951
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 951,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 955,
    "end": 956
  },
  {
    "type": "JSXIdentifier",
    "value": "Math",
    "start": 956,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 960,
    "end": 961
  },
  {
    "type": "JSXIdentifier",
    "value": "max",
    "start": 961,
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
    "value": "selected",
    "start": 965,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 973,
    "end": 974
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 979,
    "end": 980
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 980,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 993,
    "end": 994
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 994,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1001,
    "end": 1002
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
    "type": "Punctuator",
    "value": "}",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1072,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1082,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1092,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1099,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1110,
    "end": 1117
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1118,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "Subscribe",
    "start": 1124,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "TSelected",
    "start": 1136,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1148,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1155,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "selector",
    "start": 1166,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1178,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1185,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1192,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "TSelected",
    "start": 1195,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 1207,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1218,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "TSelected",
    "start": 1225,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1236,
    "end": 1238
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1239,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1247,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 1250,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 1256,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1269,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1275,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "_result",
    "start": 1281,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "JSXIdentifier",
    "value": "Subscribe",
    "start": 1296,
    "end": 1305
  },
  {
    "type": "JSXIdentifier",
    "value": "selector",
    "start": 1310,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1321,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1328,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1339,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "JSXIdentifier",
    "value": "state",
    "start": 1347,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "JSXIdentifier",
    "value": "value",
    "start": 1353,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 1370,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1378,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1386,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1394,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "JSXIdentifier",
    "value": "console",
    "start": 1405,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "JSXIdentifier",
    "value": "log",
    "start": 1413,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1417,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 1430,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "JSXIdentifier",
    "value": "Subscribe",
    "start": 1435,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1446,
    "end": 1447
  }
]
```
