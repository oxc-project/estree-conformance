__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Choice",
        "optional": false,
        "typeAnnotation": null,
        "start": 11,
        "end": 17
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Unknown",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 27
            },
            "initializer": null,
            "computed": false,
            "start": 20,
            "end": 27
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Yes",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 32
            },
            "initializer": null,
            "computed": false,
            "start": 29,
            "end": 32
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "No",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 36
            },
            "initializer": null,
            "computed": false,
            "start": 34,
            "end": 36
          }
        ],
        "start": 18,
        "end": 38
      },
      "const": true,
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "EmptyStatement",
      "start": 38,
      "end": 39
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "YesNo",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 51
      },
      "typeParameters": null,
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
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 60
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 64
              },
              "start": 54,
              "end": 64
            },
            "typeArguments": null,
            "start": 54,
            "end": 64
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 73
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "No",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 76
              },
              "start": 67,
              "end": 76
            },
            "typeArguments": null,
            "start": 67,
            "end": 76
          }
        ],
        "start": 54,
        "end": 76
      },
      "declare": false,
      "start": 41,
      "end": 77
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoYes",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 88
      },
      "typeParameters": null,
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
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 97
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "No",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 100
              },
              "start": 91,
              "end": 100
            },
            "typeArguments": null,
            "start": 91,
            "end": 100
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 109
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 113
              },
              "start": 103,
              "end": 113
            },
            "typeArguments": null,
            "start": 103,
            "end": 113
          }
        ],
        "start": 91,
        "end": 113
      },
      "declare": false,
      "start": 78,
      "end": 114
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnknownYesNo",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 132
      },
      "typeParameters": null,
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
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 141
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unknown",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 149
              },
              "start": 135,
              "end": 149
            },
            "typeArguments": null,
            "start": 135,
            "end": 149
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 158
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 162
              },
              "start": 152,
              "end": 162
            },
            "typeArguments": null,
            "start": 152,
            "end": 162
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 171
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "No",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 174
              },
              "start": 165,
              "end": 174
            },
            "typeArguments": null,
            "start": 165,
            "end": 174
          }
        ],
        "start": 135,
        "end": 174
      },
      "declare": false,
      "start": 115,
      "end": 175
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 188
      },
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "YesNo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 204,
                        "end": 209
                      },
                      "typeArguments": null,
                      "start": 204,
                      "end": 209
                    },
                    "start": 202,
                    "end": 209
                  },
                  "start": 201,
                  "end": 209
                },
                "init": null,
                "definite": false,
                "start": 201,
                "end": 209
              }
            ],
            "declare": false,
            "start": 197,
            "end": 210
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NoYes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 222,
                        "end": 227
                      },
                      "typeArguments": null,
                      "start": 222,
                      "end": 227
                    },
                    "start": 220,
                    "end": 227
                  },
                  "start": 219,
                  "end": 227
                },
                "init": null,
                "definite": false,
                "start": 219,
                "end": 227
              }
            ],
            "declare": false,
            "start": 215,
            "end": 228
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Choice",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 240,
                              "end": 246
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Yes",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 247,
                              "end": 250
                            },
                            "start": 240,
                            "end": 250
                          },
                          "typeArguments": null,
                          "start": 240,
                          "end": 250
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Choice",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 253,
                              "end": 259
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "No",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 260,
                              "end": 262
                            },
                            "start": 253,
                            "end": 262
                          },
                          "typeArguments": null,
                          "start": 253,
                          "end": 262
                        }
                      ],
                      "start": 240,
                      "end": 262
                    },
                    "start": 238,
                    "end": 262
                  },
                  "start": 237,
                  "end": 262
                },
                "init": null,
                "definite": false,
                "start": 237,
                "end": 262
              }
            ],
            "declare": false,
            "start": 233,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
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
                              "name": "Choice",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 275,
                              "end": 281
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "No",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 282,
                              "end": 284
                            },
                            "start": 275,
                            "end": 284
                          },
                          "typeArguments": null,
                          "start": 275,
                          "end": 284
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Choice",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 287,
                              "end": 293
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Yes",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 294,
                              "end": 297
                            },
                            "start": 287,
                            "end": 297
                          },
                          "typeArguments": null,
                          "start": 287,
                          "end": 297
                        }
                      ],
                      "start": 275,
                      "end": 297
                    },
                    "start": 273,
                    "end": 297
                  },
                  "start": 272,
                  "end": 297
                },
                "init": null,
                "definite": false,
                "start": 272,
                "end": 297
              }
            ],
            "declare": false,
            "start": 268,
            "end": 298
          }
        ],
        "start": 191,
        "end": 300
      },
      "expression": false,
      "start": 177,
      "end": 300
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 313
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 322
              },
              "typeArguments": null,
              "start": 317,
              "end": 322
            },
            "start": 315,
            "end": 322
          },
          "start": 314,
          "end": 322
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
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 327,
                "end": 339
              },
              "typeArguments": null,
              "start": 327,
              "end": 339
            },
            "start": 325,
            "end": 339
          },
          "start": 324,
          "end": 339
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 344,
                "end": 350
              },
              "typeArguments": null,
              "start": 344,
              "end": 350
            },
            "start": 342,
            "end": 350
          },
          "start": 341,
          "end": 350
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 359
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 362,
                "end": 363
              },
              "start": 358,
              "end": 363
            },
            "directive": null,
            "start": 358,
            "end": 364
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 370
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 373,
                "end": 374
              },
              "start": 369,
              "end": 374
            },
            "directive": null,
            "start": 369,
            "end": 375
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 380,
                "end": 381
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 384,
                "end": 385
              },
              "start": 380,
              "end": 385
            },
            "directive": null,
            "start": 380,
            "end": 386
          }
        ],
        "start": 352,
        "end": 388
      },
      "expression": false,
      "start": 302,
      "end": 388
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 399,
        "end": 401
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 411
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 412,
                  "end": 415
                },
                "start": 405,
                "end": 415
              },
              "typeArguments": null,
              "start": 405,
              "end": 415
            },
            "start": 403,
            "end": 415
          },
          "start": 402,
          "end": 415
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
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 420,
                "end": 425
              },
              "typeArguments": null,
              "start": 420,
              "end": 425
            },
            "start": 418,
            "end": 425
          },
          "start": 417,
          "end": 425
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 437,
                  "end": 438
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 441,
                    "end": 442
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 445,
                    "end": 446
                  },
                  "start": 441,
                  "end": 446
                },
                "definite": false,
                "start": 437,
                "end": 446
              }
            ],
            "declare": false,
            "start": 433,
            "end": 447
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 456,
                  "end": 457
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 460,
                    "end": 461
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 464,
                    "end": 465
                  },
                  "start": 460,
                  "end": 465
                },
                "definite": false,
                "start": 456,
                "end": 465
              }
            ],
            "declare": false,
            "start": 452,
            "end": 466
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 475,
                  "end": 476
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 479,
                    "end": 480
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 483,
                    "end": 484
                  },
                  "start": 479,
                  "end": 484
                },
                "definite": false,
                "start": 475,
                "end": 484
              }
            ],
            "declare": false,
            "start": 471,
            "end": 485
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 494,
                  "end": 495
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 498,
                    "end": 499
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 502,
                    "end": 503
                  },
                  "start": 498,
                  "end": 503
                },
                "definite": false,
                "start": 494,
                "end": 503
              }
            ],
            "declare": false,
            "start": 490,
            "end": 504
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 513,
                  "end": 514
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 517,
                    "end": 518
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 521,
                    "end": 522
                  },
                  "start": 517,
                  "end": 522
                },
                "definite": false,
                "start": 513,
                "end": 522
              }
            ],
            "declare": false,
            "start": 509,
            "end": 523
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 532,
                  "end": 533
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 536,
                    "end": 537
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 540,
                    "end": 541
                  },
                  "start": 536,
                  "end": 541
                },
                "definite": false,
                "start": 532,
                "end": 541
              }
            ],
            "declare": false,
            "start": 528,
            "end": 542
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 551,
                  "end": 552
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 555,
                    "end": 556
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 559,
                    "end": 560
                  },
                  "start": 555,
                  "end": 560
                },
                "definite": false,
                "start": 551,
                "end": 560
              }
            ],
            "declare": false,
            "start": 547,
            "end": 561
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 570,
                  "end": 571
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 574,
                    "end": 575
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 578,
                    "end": 579
                  },
                  "start": 574,
                  "end": 579
                },
                "definite": false,
                "start": 570,
                "end": 579
              }
            ],
            "declare": false,
            "start": 566,
            "end": 580
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 589,
                  "end": 590
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 595
                  },
                  "prefix": true,
                  "start": 593,
                  "end": 595
                },
                "definite": false,
                "start": 589,
                "end": 595
              }
            ],
            "declare": false,
            "start": 585,
            "end": 596
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 605,
                  "end": 606
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "~",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 610,
                    "end": 611
                  },
                  "prefix": true,
                  "start": 609,
                  "end": 611
                },
                "definite": false,
                "start": 605,
                "end": 611
              }
            ],
            "declare": false,
            "start": 601,
            "end": 612
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 621,
                  "end": 622
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 625,
                    "end": 626
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 630,
                    "end": 631
                  },
                  "start": 625,
                  "end": 631
                },
                "definite": false,
                "start": 621,
                "end": 631
              }
            ],
            "declare": false,
            "start": 617,
            "end": 632
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 641,
                  "end": 642
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 645,
                    "end": 646
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 650,
                    "end": 651
                  },
                  "start": 645,
                  "end": 651
                },
                "definite": false,
                "start": 641,
                "end": 651
              }
            ],
            "declare": false,
            "start": 637,
            "end": 652
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 661,
                  "end": 662
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 665,
                    "end": 666
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 671,
                    "end": 672
                  },
                  "start": 665,
                  "end": 672
                },
                "definite": false,
                "start": 661,
                "end": 672
              }
            ],
            "declare": false,
            "start": 657,
            "end": 673
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 682,
                  "end": 683
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 686,
                    "end": 687
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 692,
                    "end": 693
                  },
                  "start": 686,
                  "end": 693
                },
                "definite": false,
                "start": 682,
                "end": 693
              }
            ],
            "declare": false,
            "start": 678,
            "end": 694
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 703,
                  "end": 704
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 707,
                    "end": 708
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 711,
                    "end": 712
                  },
                  "start": 707,
                  "end": 712
                },
                "definite": false,
                "start": 703,
                "end": 712
              }
            ],
            "declare": false,
            "start": 699,
            "end": 713
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 722,
                  "end": 723
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 726,
                    "end": 727
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 730,
                    "end": 731
                  },
                  "start": 726,
                  "end": 731
                },
                "definite": false,
                "start": 722,
                "end": 731
              }
            ],
            "declare": false,
            "start": 718,
            "end": 732
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 741,
                  "end": 742
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 745,
                    "end": 746
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 750,
                    "end": 751
                  },
                  "start": 745,
                  "end": 751
                },
                "definite": false,
                "start": 741,
                "end": 751
              }
            ],
            "declare": false,
            "start": 737,
            "end": 752
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 761,
                  "end": 762
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 765,
                    "end": 766
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 770,
                    "end": 771
                  },
                  "start": 765,
                  "end": 771
                },
                "definite": false,
                "start": 761,
                "end": 771
              }
            ],
            "declare": false,
            "start": 757,
            "end": 772
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 781,
                  "end": 782
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 786,
                    "end": 787
                  },
                  "prefix": true,
                  "start": 785,
                  "end": 787
                },
                "definite": false,
                "start": 781,
                "end": 787
              }
            ],
            "declare": false,
            "start": 777,
            "end": 788
          }
        ],
        "start": 427,
        "end": 790
      },
      "expression": false,
      "start": 390,
      "end": 790
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 801,
        "end": 803
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 807,
                  "end": 813
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 814,
                  "end": 817
                },
                "start": 807,
                "end": 817
              },
              "typeArguments": null,
              "start": 807,
              "end": 817
            },
            "start": 805,
            "end": 817
          },
          "start": 804,
          "end": 817
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
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 822,
                "end": 827
              },
              "typeArguments": null,
              "start": 822,
              "end": 827
            },
            "start": 820,
            "end": 827
          },
          "start": 819,
          "end": 827
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 835,
                "end": 836
              },
              "start": 835,
              "end": 838
            },
            "directive": null,
            "start": 835,
            "end": 839
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 844,
                "end": 845
              },
              "start": 844,
              "end": 847
            },
            "directive": null,
            "start": 844,
            "end": 848
          }
        ],
        "start": 829,
        "end": 850
      },
      "expression": false,
      "start": 792,
      "end": 850
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 869,
        "end": 870
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 874,
                  "end": 880
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 881,
                  "end": 884
                },
                "start": 874,
                "end": 884
              },
              "typeArguments": null,
              "start": 874,
              "end": 884
            },
            "start": 872,
            "end": 884
          },
          "start": 871,
          "end": 884
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 887,
          "end": 893
        },
        "start": 885,
        "end": 893
      },
      "body": null,
      "expression": false,
      "start": 852,
      "end": 894
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 912,
        "end": 913
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 917,
                  "end": 923
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 924,
                  "end": 926
                },
                "start": 917,
                "end": 926
              },
              "typeArguments": null,
              "start": 917,
              "end": 926
            },
            "start": 915,
            "end": 926
          },
          "start": 914,
          "end": 926
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 929,
          "end": 936
        },
        "start": 927,
        "end": 936
      },
      "body": null,
      "expression": false,
      "start": 895,
      "end": 937
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 955,
        "end": 956
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 960,
                "end": 966
              },
              "typeArguments": null,
              "start": 960,
              "end": 966
            },
            "start": 958,
            "end": 966
          },
          "start": 957,
          "end": 966
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 969,
          "end": 975
        },
        "start": 967,
        "end": 975
      },
      "body": null,
      "expression": false,
      "start": 938,
      "end": 976
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 987,
        "end": 989
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 993,
                "end": 998
              },
              "typeArguments": null,
              "start": 993,
              "end": 998
            },
            "start": 991,
            "end": 998
          },
          "start": 990,
          "end": 998
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
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1003,
                "end": 1015
              },
              "typeArguments": null,
              "start": 1003,
              "end": 1015
            },
            "start": 1001,
            "end": 1015
          },
          "start": 1000,
          "end": 1015
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 1020,
                "end": 1026
              },
              "typeArguments": null,
              "start": 1020,
              "end": 1026
            },
            "start": 1018,
            "end": 1026
          },
          "start": 1017,
          "end": 1026
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
                  "name": "z1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1038,
                  "end": 1040
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1043,
                    "end": 1044
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Choice",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1045,
                        "end": 1051
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Yes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1052,
                        "end": 1055
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1045,
                      "end": 1055
                    }
                  ],
                  "optional": false,
                  "start": 1043,
                  "end": 1056
                },
                "definite": false,
                "start": 1038,
                "end": 1056
              }
            ],
            "declare": false,
            "start": 1034,
            "end": 1057
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
                  "name": "z2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1066,
                  "end": 1068
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1071,
                    "end": 1072
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Choice",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1073,
                        "end": 1079
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1080,
                        "end": 1082
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1073,
                      "end": 1082
                    }
                  ],
                  "optional": false,
                  "start": 1071,
                  "end": 1083
                },
                "definite": false,
                "start": 1066,
                "end": 1083
              }
            ],
            "declare": false,
            "start": 1062,
            "end": 1084
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
                  "name": "z3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1093,
                  "end": 1095
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1098,
                    "end": 1099
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1100,
                      "end": 1101
                    }
                  ],
                  "optional": false,
                  "start": 1098,
                  "end": 1102
                },
                "definite": false,
                "start": 1093,
                "end": 1102
              }
            ],
            "declare": false,
            "start": 1089,
            "end": 1103
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
                  "name": "z4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1112,
                  "end": 1114
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1117,
                    "end": 1118
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1119,
                      "end": 1120
                    }
                  ],
                  "optional": false,
                  "start": 1117,
                  "end": 1121
                },
                "definite": false,
                "start": 1112,
                "end": 1121
              }
            ],
            "declare": false,
            "start": 1108,
            "end": 1122
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
                  "name": "z5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1131,
                  "end": 1133
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1136,
                    "end": 1137
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1138,
                      "end": 1139
                    }
                  ],
                  "optional": false,
                  "start": 1136,
                  "end": 1140
                },
                "definite": false,
                "start": 1131,
                "end": 1140
              }
            ],
            "declare": false,
            "start": 1127,
            "end": 1141
          }
        ],
        "start": 1028,
        "end": 1143
      },
      "expression": false,
      "start": 978,
      "end": 1143
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertNever",
        "optional": false,
        "typeAnnotation": null,
        "start": 1154,
        "end": 1165
      },
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
              "type": "TSNeverKeyword",
              "start": 1169,
              "end": 1174
            },
            "start": 1167,
            "end": 1174
          },
          "start": 1166,
          "end": 1174
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 1177,
          "end": 1182
        },
        "start": 1175,
        "end": 1182
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 1199,
                "end": 1204
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Unexpected value",
                  "raw": "\"Unexpected value\"",
                  "start": 1205,
                  "end": 1223
                }
              ],
              "start": 1195,
              "end": 1224
            },
            "start": 1189,
            "end": 1225
          }
        ],
        "start": 1183,
        "end": 1227
      },
      "expression": false,
      "start": 1145,
      "end": 1227
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1238,
        "end": 1241
      },
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
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1245,
                "end": 1250
              },
              "typeArguments": null,
              "start": 1245,
              "end": 1250
            },
            "start": 1243,
            "end": 1250
          },
          "start": 1242,
          "end": 1250
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1266,
              "end": 1267
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1284,
                    "end": 1290
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1291,
                    "end": 1294
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1284,
                  "end": 1294
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "true",
                      "raw": "\"true\"",
                      "start": 1303,
                      "end": 1309
                    },
                    "start": 1296,
                    "end": 1310
                  }
                ],
                "start": 1279,
                "end": 1310
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1324,
                    "end": 1330
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1331,
                    "end": 1333
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1324,
                  "end": 1333
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "false",
                      "raw": "\"false\"",
                      "start": 1342,
                      "end": 1349
                    },
                    "start": 1335,
                    "end": 1350
                  }
                ],
                "start": 1319,
                "end": 1350
              }
            ],
            "start": 1258,
            "end": 1356
          }
        ],
        "start": 1252,
        "end": 1358
      },
      "expression": false,
      "start": 1229,
      "end": 1358
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1369,
        "end": 1372
      },
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
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1376,
                "end": 1381
              },
              "typeArguments": null,
              "start": 1376,
              "end": 1381
            },
            "start": 1374,
            "end": 1381
          },
          "start": 1373,
          "end": 1381
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1397,
              "end": 1398
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1415,
                    "end": 1421
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1422,
                    "end": 1425
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1415,
                  "end": 1425
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "true",
                      "raw": "\"true\"",
                      "start": 1434,
                      "end": 1440
                    },
                    "start": 1427,
                    "end": 1441
                  }
                ],
                "start": 1410,
                "end": 1441
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1455,
                    "end": 1461
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1462,
                    "end": 1464
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1455,
                  "end": 1464
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "false",
                      "raw": "\"false\"",
                      "start": 1473,
                      "end": 1480
                    },
                    "start": 1466,
                    "end": 1481
                  }
                ],
                "start": 1450,
                "end": 1481
              }
            ],
            "start": 1389,
            "end": 1487
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null,
                "start": 1499,
                "end": 1510
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1511,
                  "end": 1512
                }
              ],
              "optional": false,
              "start": 1499,
              "end": 1513
            },
            "start": 1492,
            "end": 1514
          }
        ],
        "start": 1383,
        "end": 1516
      },
      "expression": false,
      "start": 1360,
      "end": 1516
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1527,
        "end": 1530
      },
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
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1534,
                "end": 1546
              },
              "typeArguments": null,
              "start": 1534,
              "end": 1546
            },
            "start": 1532,
            "end": 1546
          },
          "start": 1531,
          "end": 1546
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1558,
              "end": 1559
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1571,
                    "end": 1572
                  },
                  "directive": null,
                  "start": 1571,
                  "end": 1573
                }
              ],
              "start": 1561,
              "end": 1579
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1599,
                    "end": 1600
                  },
                  "directive": null,
                  "start": 1599,
                  "end": 1601
                }
              ],
              "start": 1589,
              "end": 1607
            },
            "start": 1554,
            "end": 1607
          }
        ],
        "start": 1548,
        "end": 1609
      },
      "expression": false,
      "start": 1518,
      "end": 1609
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1620,
        "end": 1623
      },
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
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1627,
                "end": 1639
              },
              "typeArguments": null,
              "start": 1627,
              "end": 1639
            },
            "start": 1625,
            "end": 1639
          },
          "start": 1624,
          "end": 1639
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1651,
                "end": 1652
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1657,
                  "end": 1663
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1664,
                  "end": 1667
                },
                "optional": false,
                "computed": false,
                "start": 1657,
                "end": 1667
              },
              "start": 1651,
              "end": 1667
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1679,
                    "end": 1680
                  },
                  "directive": null,
                  "start": 1679,
                  "end": 1681
                }
              ],
              "start": 1669,
              "end": 1687
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1707,
                    "end": 1708
                  },
                  "directive": null,
                  "start": 1707,
                  "end": 1709
                }
              ],
              "start": 1697,
              "end": 1715
            },
            "start": 1647,
            "end": 1715
          }
        ],
        "start": 1641,
        "end": 1717
      },
      "expression": false,
      "start": 1611,
      "end": 1717
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 1724,
        "end": 1728
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1737,
                  "end": 1741
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Choice",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1743,
                        "end": 1749
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Yes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1750,
                        "end": 1753
                      },
                      "start": 1743,
                      "end": 1753
                    },
                    "typeArguments": null,
                    "start": 1743,
                    "end": 1753
                  },
                  "start": 1741,
                  "end": 1753
                },
                "accessibility": null,
                "static": false,
                "start": 1737,
                "end": 1754
              },
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
                  "start": 1755,
                  "end": 1756
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1758,
                    "end": 1764
                  },
                  "start": 1756,
                  "end": 1764
                },
                "accessibility": null,
                "static": false,
                "start": 1755,
                "end": 1764
              }
            ],
            "start": 1735,
            "end": 1766
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1775,
                  "end": 1779
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Choice",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1781,
                        "end": 1787
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1788,
                        "end": 1790
                      },
                      "start": 1781,
                      "end": 1790
                    },
                    "typeArguments": null,
                    "start": 1781,
                    "end": 1790
                  },
                  "start": 1779,
                  "end": 1790
                },
                "accessibility": null,
                "static": false,
                "start": 1775,
                "end": 1791
              },
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
                  "start": 1792,
                  "end": 1793
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1795,
                    "end": 1801
                  },
                  "start": 1793,
                  "end": 1801
                },
                "accessibility": null,
                "static": false,
                "start": 1792,
                "end": 1801
              }
            ],
            "start": 1773,
            "end": 1803
          }
        ],
        "start": 1735,
        "end": 1803
      },
      "declare": false,
      "start": 1719,
      "end": 1804
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1815,
        "end": 1818
      },
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
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1822,
                "end": 1826
              },
              "typeArguments": null,
              "start": 1822,
              "end": 1826
            },
            "start": 1820,
            "end": 1826
          },
          "start": 1819,
          "end": 1826
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1842,
                "end": 1843
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1844,
                "end": 1848
              },
              "optional": false,
              "computed": false,
              "start": 1842,
              "end": 1848
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1865,
                    "end": 1871
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1872,
                    "end": 1875
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1865,
                  "end": 1875
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1884,
                        "end": 1885
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1886,
                        "end": 1887
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1884,
                      "end": 1887
                    },
                    "start": 1877,
                    "end": 1888
                  }
                ],
                "start": 1860,
                "end": 1888
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1902,
                    "end": 1908
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1909,
                    "end": 1911
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1902,
                  "end": 1911
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1920,
                        "end": 1921
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1922,
                        "end": 1923
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1920,
                      "end": 1923
                    },
                    "start": 1913,
                    "end": 1924
                  }
                ],
                "start": 1897,
                "end": 1924
              }
            ],
            "start": 1834,
            "end": 1930
          }
        ],
        "start": 1828,
        "end": 1932
      },
      "expression": false,
      "start": 1806,
      "end": 1932
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 1943,
        "end": 1946
      },
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
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1950,
                "end": 1954
              },
              "typeArguments": null,
              "start": 1950,
              "end": 1954
            },
            "start": 1948,
            "end": 1954
          },
          "start": 1947,
          "end": 1954
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1970,
                "end": 1971
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1972,
                "end": 1976
              },
              "optional": false,
              "computed": false,
              "start": 1970,
              "end": 1976
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1993,
                    "end": 1999
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2000,
                    "end": 2003
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1993,
                  "end": 2003
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2012,
                        "end": 2013
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2014,
                        "end": 2015
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2012,
                      "end": 2015
                    },
                    "start": 2005,
                    "end": 2016
                  }
                ],
                "start": 1988,
                "end": 2016
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2030,
                    "end": 2036
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2037,
                    "end": 2039
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2030,
                  "end": 2039
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2048,
                        "end": 2049
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2050,
                        "end": 2051
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2048,
                      "end": 2051
                    },
                    "start": 2041,
                    "end": 2052
                  }
                ],
                "start": 2025,
                "end": 2052
              }
            ],
            "start": 1962,
            "end": 2058
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null,
                "start": 2070,
                "end": 2081
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2082,
                  "end": 2083
                }
              ],
              "optional": false,
              "start": 2070,
              "end": 2084
            },
            "start": 2063,
            "end": 2085
          }
        ],
        "start": 1956,
        "end": 2087
      },
      "expression": false,
      "start": 1934,
      "end": 2087
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2087
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 6,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 11,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "Unknown",
    "start": 20,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 34,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 41,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 46,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 74,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 78,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "NoYes",
    "start": 83,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 98,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 103,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 110,
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
    "value": "type",
    "start": 115,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 120,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "Unknown",
    "start": 142,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 165,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 172,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 177,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 197,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 204,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 215,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "NoYes",
    "start": 222,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 233,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 240,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 247,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 253,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 260,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 268,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 275,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 282,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 287,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 294,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 302,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 311,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 317,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 327,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 344,
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
    "value": "{",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "function",
    "start": 390,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 399,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 412,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "YesNo",
    "start": 420,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 433,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 452,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 471,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "*",
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
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 490,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 509,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 528,
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
    "value": "=",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 547,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 566,
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
    "value": "=",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 585,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 601,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 617,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 627,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 637,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 647,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 657,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 667,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 678,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 688,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 693,
    "end": 694
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 699,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 718,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 737,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 747,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 757,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 767,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 771,
    "end": 772
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 777,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 789,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 792,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 801,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 807,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 814,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 822,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 836,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 845,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 852,
    "end": 859
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 860,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 874,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 881,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 887,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 895,
    "end": 902
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 903,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 917,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 924,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 929,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 938,
    "end": 945
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 946,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 960,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 969,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 975,
    "end": 976
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 978,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 987,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 993,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 1003,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1020,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1034,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 1038,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1045,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1052,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1062,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 1066,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1073,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1080,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1089,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "z3",
    "start": 1093,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1108,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "z4",
    "start": 1112,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1127,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "z5",
    "start": 1131,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1145,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 1154,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1169,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "never",
    "start": 1177,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1189,
    "end": 1194
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1195,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 1199,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "String",
    "value": "\"Unexpected value\"",
    "start": 1205,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1229,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1238,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 1245,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1258,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1279,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1284,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1291,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1296,
    "end": 1302
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 1303,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1319,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1324,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1331,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1335,
    "end": 1341
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 1342,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1360,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1369,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 1376,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1389,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "case",
    "start": 1410,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1415,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1422,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1427,
    "end": 1433
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 1434,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1450,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1455,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1462,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1466,
    "end": 1472
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 1473,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1492,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 1499,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1518,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1527,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 1534,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1554,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1584,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1611,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1620,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 1627,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1647,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1653,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1657,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1664,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1692,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1719,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 1724,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1737,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1743,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1750,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1758,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1775,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1781,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1788,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1795,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1806,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1815,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 1822,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1834,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1844,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1860,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1865,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1872,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1877,
    "end": 1883
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1897,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1902,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1909,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1913,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1934,
    "end": 1942
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 1943,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 1950,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1962,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1972,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1988,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1993,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 2000,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2005,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2025,
    "end": 2029
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 2030,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 2037,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2041,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2063,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 2070,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2086,
    "end": 2087
  }
]
```
