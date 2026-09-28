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
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 90
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
              "start": 91,
              "end": 92
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 91,
            "end": 92
          }
        ],
        "start": 90,
        "end": 93
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 114
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
                  "start": 116,
                  "end": 117
                },
                "typeArguments": null,
                "start": 116,
                "end": 117
              },
              "start": 114,
              "end": 117
            },
            "accessibility": null,
            "static": false,
            "start": 100,
            "end": 118
          }
        ],
        "start": 94,
        "end": 120
      },
      "declare": false,
      "start": 77,
      "end": 120
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Content",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 133
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 135
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 134,
            "end": 135
          }
        ],
        "start": 133,
        "end": 136
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 140
          },
          "typeArguments": null,
          "start": 139,
          "end": 140
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 152
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 159,
                    "end": 160
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 159,
                  "end": 160
                },
                "start": 153,
                "end": 160
              }
            ],
            "start": 152,
            "end": 161
          },
          "start": 149,
          "end": 161
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 165
          },
          "typeArguments": null,
          "start": 164,
          "end": 165
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 168,
          "end": 173
        },
        "start": 139,
        "end": 173
      },
      "declare": false,
      "start": 121,
      "end": 174
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BoxLike",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 187
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 189
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 188,
            "end": 189
          }
        ],
        "start": 187,
        "end": 190
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "typeAnnotation": null,
          "start": 193,
          "end": 196
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Content",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 204
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 206
                    },
                    "typeArguments": null,
                    "start": 205,
                    "end": 206
                  }
                ],
                "start": 204,
                "end": 207
              },
              "start": 197,
              "end": 207
            }
          ],
          "start": 196,
          "end": 208
        },
        "start": 193,
        "end": 208
      },
      "declare": false,
      "start": 175,
      "end": 209
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "box",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 231
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
              "start": 232,
              "end": 233
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 232,
            "end": 233
          }
        ],
        "start": 231,
        "end": 234
      },
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
                "start": 242,
                "end": 243
              },
              "typeArguments": null,
              "start": 242,
              "end": 243
            },
            "start": 240,
            "end": 243
          },
          "start": 235,
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
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 246,
            "end": 249
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
                  "start": 250,
                  "end": 251
                },
                "typeArguments": null,
                "start": 250,
                "end": 251
              }
            ],
            "start": 249,
            "end": 252
          },
          "start": 246,
          "end": 252
        },
        "start": 244,
        "end": 252
      },
      "body": null,
      "expression": false,
      "start": 211,
      "end": 253
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 272
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
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 274
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BoxLike",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 290
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 291,
                      "end": 292
                    },
                    "typeArguments": null,
                    "start": 291,
                    "end": 292
                  }
                ],
                "start": 290,
                "end": 293
              },
              "start": 283,
              "end": 293
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 273,
            "end": 293
          }
        ],
        "start": 272,
        "end": 294
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 299
              },
              "typeArguments": null,
              "start": 298,
              "end": 299
            },
            "start": 296,
            "end": 299
          },
          "start": 295,
          "end": 299
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 303
          },
          "typeArguments": null,
          "start": 302,
          "end": 303
        },
        "start": 300,
        "end": 303
      },
      "body": null,
      "expression": false,
      "start": 254,
      "end": 304
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 322,
        "end": 324
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
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 326
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BoxLike",
                "optional": false,
                "typeAnnotation": null,
                "start": 335,
                "end": 342
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 343,
                      "end": 344
                    },
                    "typeArguments": null,
                    "start": 343,
                    "end": 344
                  }
                ],
                "start": 342,
                "end": 345
              },
              "start": 335,
              "end": 345
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 325,
            "end": 345
          }
        ],
        "start": 324,
        "end": 346
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "body",
          "optional": false,
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
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 359,
                    "end": 360
                  },
                  "typeArguments": null,
                  "start": 359,
                  "end": 360
                },
                "start": 356,
                "end": 360
              },
              "start": 353,
              "end": 360
            },
            "start": 351,
            "end": 360
          },
          "start": 347,
          "end": 360
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 363,
            "end": 364
          },
          "typeArguments": null,
          "start": 363,
          "end": 364
        },
        "start": 361,
        "end": 364
      },
      "body": null,
      "expression": false,
      "start": 305,
      "end": 365
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null,
        "start": 383,
        "end": 385
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
              "start": 386,
              "end": 387
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 386,
            "end": 387
          }
        ],
        "start": 385,
        "end": 388
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
                "start": 392,
                "end": 393
              },
              "typeArguments": null,
              "start": 392,
              "end": 393
            },
            "start": 390,
            "end": 393
          },
          "start": 389,
          "end": 393
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
            "start": 396,
            "end": 397
          },
          "typeArguments": null,
          "start": 396,
          "end": 397
        },
        "start": 394,
        "end": 397
      },
      "body": null,
      "expression": false,
      "start": 366,
      "end": 398
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 419,
                      "end": 420
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 422,
                        "end": 428
                      },
                      "start": 420,
                      "end": 428
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 419,
                    "end": 428
                  }
                ],
                "start": 417,
                "end": 430
              },
              "start": 415,
              "end": 430
            },
            "start": 414,
            "end": 430
          },
          "init": null,
          "definite": false,
          "start": 414,
          "end": 430
        }
      ],
      "declare": true,
      "start": 400,
      "end": 431
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 451,
                      "end": 452
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 454,
                        "end": 460
                      },
                      "start": 452,
                      "end": 460
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 451,
                    "end": 460
                  }
                ],
                "start": 449,
                "end": 462
              },
              "start": 447,
              "end": 462
            },
            "start": 446,
            "end": 462
          },
          "init": null,
          "definite": false,
          "start": 446,
          "end": 462
        }
      ],
      "declare": true,
      "start": 432,
      "end": 463
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
            "name": "neverValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 490,
                "end": 495
              },
              "start": 488,
              "end": 495
            },
            "start": 478,
            "end": 495
          },
          "init": null,
          "definite": false,
          "start": 478,
          "end": 495
        }
      ],
      "declare": true,
      "start": 464,
      "end": 496
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 579,
            "end": 581
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 584,
              "end": 585
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "box",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 586,
                  "end": 589
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 591,
                          "end": 592
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 594,
                          "end": 595
                        }
                      ],
                      "start": 590,
                      "end": 596
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 600,
                        "end": 605
                      },
                      "typeArguments": null,
                      "start": 600,
                      "end": 605
                    },
                    "start": 590,
                    "end": 605
                  }
                ],
                "optional": false,
                "start": 586,
                "end": 606
              }
            ],
            "optional": false,
            "start": 584,
            "end": 607
          },
          "definite": false,
          "start": 579,
          "end": 607
        }
      ],
      "declare": false,
      "start": 573,
      "end": 608
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
            "name": "check1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 643,
                  "end": 646
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 650,
                                "end": 651
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 653,
                                  "end": 659
                                },
                                "start": 651,
                                "end": 659
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 650,
                              "end": 659
                            }
                          ],
                          "start": 648,
                          "end": 661
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
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 665,
                                "end": 666
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 668,
                                  "end": 674
                                },
                                "start": 666,
                                "end": 674
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 665,
                              "end": 674
                            }
                          ],
                          "start": 663,
                          "end": 676
                        }
                      ],
                      "start": 647,
                      "end": 677
                    }
                  ],
                  "start": 646,
                  "end": 678
                },
                "start": 643,
                "end": 678
              },
              "start": 641,
              "end": 678
            },
            "start": 635,
            "end": 678
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 681,
            "end": 683
          },
          "definite": false,
          "start": 635,
          "end": 683
        }
      ],
      "declare": false,
      "start": 629,
      "end": 684
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
            "name": "ok1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 696,
                  "end": 699
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeOperator",
                      "operator": "readonly",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 712,
                                  "end": 713
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 715,
                                    "end": 721
                                  },
                                  "start": 713,
                                  "end": 721
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 712,
                                "end": 721
                              }
                            ],
                            "start": 710,
                            "end": 723
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
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 727,
                                  "end": 728
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 730,
                                    "end": 736
                                  },
                                  "start": 728,
                                  "end": 736
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 727,
                                "end": 736
                              }
                            ],
                            "start": 725,
                            "end": 738
                          }
                        ],
                        "start": 709,
                        "end": 739
                      },
                      "start": 700,
                      "end": 739
                    }
                  ],
                  "start": 699,
                  "end": 740
                },
                "start": 696,
                "end": 740
              },
              "start": 694,
              "end": 740
            },
            "start": 691,
            "end": 740
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 743,
            "end": 745
          },
          "definite": false,
          "start": 691,
          "end": 745
        }
      ],
      "declare": false,
      "start": 685,
      "end": 746
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 784,
            "end": 786
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
              "end": 791
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 798,
                    "end": 801
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 803,
                            "end": 804
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 806,
                            "end": 807
                          }
                        ],
                        "start": 802,
                        "end": 808
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 812,
                          "end": 817
                        },
                        "typeArguments": null,
                        "start": 812,
                        "end": 817
                      },
                      "start": 802,
                      "end": 817
                    }
                  ],
                  "optional": false,
                  "start": 798,
                  "end": 818
                },
                "id": null,
                "generator": false,
                "start": 792,
                "end": 818
              }
            ],
            "optional": false,
            "start": 789,
            "end": 819
          },
          "definite": false,
          "start": 784,
          "end": 819
        }
      ],
      "declare": false,
      "start": 778,
      "end": 820
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
            "name": "ok2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 832,
                  "end": 835
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeOperator",
                      "operator": "readonly",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 848,
                                  "end": 849
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 851,
                                    "end": 857
                                  },
                                  "start": 849,
                                  "end": 857
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 848,
                                "end": 857
                              }
                            ],
                            "start": 846,
                            "end": 859
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
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 863,
                                  "end": 864
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 866,
                                    "end": 872
                                  },
                                  "start": 864,
                                  "end": 872
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 863,
                                "end": 872
                              }
                            ],
                            "start": 861,
                            "end": 874
                          }
                        ],
                        "start": 845,
                        "end": 875
                      },
                      "start": 836,
                      "end": 875
                    }
                  ],
                  "start": 835,
                  "end": 876
                },
                "start": 832,
                "end": 876
              },
              "start": 830,
              "end": 876
            },
            "start": 827,
            "end": 876
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 879,
            "end": 881
          },
          "definite": false,
          "start": 827,
          "end": 881
        }
      ],
      "declare": false,
      "start": 821,
      "end": 882
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 951,
            "end": 953
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 956,
              "end": 957
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 960,
                      "end": 965
                    },
                    "value": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 968,
                            "end": 969
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 971,
                            "end": 972
                          }
                        ],
                        "start": 967,
                        "end": 973
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 977,
                          "end": 982
                        },
                        "typeArguments": null,
                        "start": 977,
                        "end": 982
                      },
                      "start": 967,
                      "end": 982
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 960,
                    "end": 982
                  }
                ],
                "start": 958,
                "end": 984
              }
            ],
            "optional": false,
            "start": 956,
            "end": 985
          },
          "definite": false,
          "start": 951,
          "end": 985
        }
      ],
      "declare": false,
      "start": 945,
      "end": 986
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1004,
        "end": 1005
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
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 1006,
              "end": 1007
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Box",
                "optional": false,
                "typeAnnotation": null,
                "start": 1016,
                "end": 1019
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 1020,
                    "end": 1027
                  }
                ],
                "start": 1019,
                "end": 1028
              },
              "start": 1016,
              "end": 1028
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1006,
            "end": 1028
          }
        ],
        "start": 1005,
        "end": 1029
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 1033,
                "end": 1034
              },
              "typeArguments": null,
              "start": 1033,
              "end": 1034
            },
            "start": 1031,
            "end": 1034
          },
          "start": 1030,
          "end": 1034
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 1037,
            "end": 1038
          },
          "typeArguments": null,
          "start": 1037,
          "end": 1038
        },
        "start": 1035,
        "end": 1038
      },
      "body": null,
      "expression": false,
      "start": 987,
      "end": 1039
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1046,
            "end": 1048
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1051,
              "end": 1052
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "box",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1053,
                  "end": 1056
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1058,
                          "end": 1059
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1061,
                          "end": 1062
                        }
                      ],
                      "start": 1057,
                      "end": 1063
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1067,
                        "end": 1072
                      },
                      "typeArguments": null,
                      "start": 1067,
                      "end": 1072
                    },
                    "start": 1057,
                    "end": 1072
                  }
                ],
                "optional": false,
                "start": 1053,
                "end": 1073
              }
            ],
            "optional": false,
            "start": 1051,
            "end": 1074
          },
          "definite": false,
          "start": 1046,
          "end": 1074
        }
      ],
      "declare": false,
      "start": 1040,
      "end": 1075
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 1093,
        "end": 1094
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
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 1095,
              "end": 1096
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Box",
                "optional": false,
                "typeAnnotation": null,
                "start": 1105,
                "end": 1108
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1109,
                        "end": 1110
                      },
                      "typeArguments": null,
                      "start": 1109,
                      "end": 1110
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "value",
                        "raw": "\"value\"",
                        "start": 1111,
                        "end": 1118
                      },
                      "start": 1111,
                      "end": 1118
                    },
                    "start": 1109,
                    "end": 1119
                  }
                ],
                "start": 1108,
                "end": 1120
              },
              "start": 1105,
              "end": 1120
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1095,
            "end": 1120
          }
        ],
        "start": 1094,
        "end": 1121
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 1125,
                "end": 1126
              },
              "typeArguments": null,
              "start": 1125,
              "end": 1126
            },
            "start": 1123,
            "end": 1126
          },
          "start": 1122,
          "end": 1126
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 1129,
            "end": 1130
          },
          "typeArguments": null,
          "start": 1129,
          "end": 1130
        },
        "start": 1127,
        "end": 1130
      },
      "body": null,
      "expression": false,
      "start": 1076,
      "end": 1131
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1138,
            "end": 1140
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 1143,
              "end": 1144
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "box",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1145,
                  "end": 1148
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1150,
                          "end": 1151
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1153,
                          "end": 1154
                        }
                      ],
                      "start": 1149,
                      "end": 1155
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1159,
                        "end": 1164
                      },
                      "typeArguments": null,
                      "start": 1159,
                      "end": 1164
                    },
                    "start": 1149,
                    "end": 1164
                  }
                ],
                "optional": false,
                "start": 1145,
                "end": 1165
              }
            ],
            "optional": false,
            "start": 1143,
            "end": 1166
          },
          "definite": false,
          "start": 1138,
          "end": 1166
        }
      ],
      "declare": false,
      "start": 1132,
      "end": 1167
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 1263,
            "end": 1264
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1267,
              "end": 1269
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "neverValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1277,
                    "end": 1287
                  },
                  "typeArguments": null,
                  "start": 1270,
                  "end": 1287
                }
              ],
              "start": 1269,
              "end": 1288
            },
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1290,
                      "end": 1291
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1293,
                      "end": 1294
                    }
                  ],
                  "start": 1289,
                  "end": 1295
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1299,
                    "end": 1304
                  },
                  "typeArguments": null,
                  "start": 1299,
                  "end": 1304
                },
                "start": 1289,
                "end": 1304
              }
            ],
            "optional": false,
            "start": 1267,
            "end": 1305
          },
          "definite": false,
          "start": 1263,
          "end": 1305
        }
      ],
      "declare": false,
      "start": 1257,
      "end": 1306
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 77,
  "end": 1306
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 77,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 87,
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
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 100,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 109,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 121,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "Content",
    "start": 126,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 134,
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
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 141,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 149,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 168,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 175,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "BoxLike",
    "start": 180,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 188,
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
    "value": "=",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 193,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "Content",
    "start": 197,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "declare",
    "start": 211,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 219,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "value",
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
    "value": "T",
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
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 246,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 254,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 262,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 275,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "BoxLike",
    "start": 283,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 305,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 313,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 322,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 327,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "BoxLike",
    "start": 335,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 347,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 356,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 366,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 374,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 383,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 400,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 408,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 422,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 432,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 440,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 454,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 464,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 472,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "neverValue",
    "start": 478,
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
    "value": "never",
    "start": 490,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 573,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 579,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 586,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 597,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 600,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 629,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "check1",
    "start": 635,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 643,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 653,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 668,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 681,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 683,
    "end": 684
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 685,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "ok1",
    "start": 691,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 696,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 700,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 715,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 730,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 743,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 745,
    "end": 746
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 778,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 784,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 789,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 795,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 798,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 809,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 812,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 819,
    "end": 820
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 821,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "ok2",
    "start": 827,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 832,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 836,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "number",
    "start": 851,
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
    "value": ",",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 866,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 879,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 945,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 951,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 960,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 974,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 977,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 987,
    "end": 994
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 995,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1008,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 1016,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1020,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1040,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 1046,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1053,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1064,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1067,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1076,
    "end": 1083
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1084,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1097,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 1105,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 1111,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1132,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 1138,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1145,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1156,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1159,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1257,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1267,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1270,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "neverValue",
    "start": 1277,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1287,
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
    "value": "[",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1296,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1299,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1305,
    "end": 1306
  }
]
```
