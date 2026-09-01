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
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 420,
                "end": 432
              },
              "typeArguments": null,
              "start": 420,
              "end": 432
            },
            "start": 418,
            "end": 432
          },
          "start": 417,
          "end": 432
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
                  "start": 444,
                  "end": 445
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 448,
                    "end": 449
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 452,
                    "end": 453
                  },
                  "start": 448,
                  "end": 453
                },
                "definite": false,
                "start": 444,
                "end": 453
              }
            ],
            "declare": false,
            "start": 440,
            "end": 454
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
                  "start": 463,
                  "end": 464
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 467,
                    "end": 468
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 471,
                    "end": 472
                  },
                  "start": 467,
                  "end": 472
                },
                "definite": false,
                "start": 463,
                "end": 472
              }
            ],
            "declare": false,
            "start": 459,
            "end": 473
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
                  "start": 482,
                  "end": 483
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 486,
                    "end": 487
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 490,
                    "end": 491
                  },
                  "start": 486,
                  "end": 491
                },
                "definite": false,
                "start": 482,
                "end": 491
              }
            ],
            "declare": false,
            "start": 478,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 501,
                  "end": 502
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 505,
                    "end": 506
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 509,
                    "end": 510
                  },
                  "start": 505,
                  "end": 510
                },
                "definite": false,
                "start": 501,
                "end": 510
              }
            ],
            "declare": false,
            "start": 497,
            "end": 511
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
                  "start": 520,
                  "end": 521
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 524,
                    "end": 525
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 528,
                    "end": 529
                  },
                  "start": 524,
                  "end": 529
                },
                "definite": false,
                "start": 520,
                "end": 529
              }
            ],
            "declare": false,
            "start": 516,
            "end": 530
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
                  "start": 539,
                  "end": 540
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 543,
                    "end": 544
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 547,
                    "end": 548
                  },
                  "start": 543,
                  "end": 548
                },
                "definite": false,
                "start": 539,
                "end": 548
              }
            ],
            "declare": false,
            "start": 535,
            "end": 549
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
                  "start": 558,
                  "end": 559
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 562,
                    "end": 563
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 566,
                    "end": 567
                  },
                  "start": 562,
                  "end": 567
                },
                "definite": false,
                "start": 558,
                "end": 567
              }
            ],
            "declare": false,
            "start": 554,
            "end": 568
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
                  "start": 577,
                  "end": 578
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 581,
                    "end": 582
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 585,
                    "end": 586
                  },
                  "start": 581,
                  "end": 586
                },
                "definite": false,
                "start": 577,
                "end": 586
              }
            ],
            "declare": false,
            "start": 573,
            "end": 587
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
                  "start": 596,
                  "end": 597
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
                    "start": 601,
                    "end": 602
                  },
                  "prefix": true,
                  "start": 600,
                  "end": 602
                },
                "definite": false,
                "start": 596,
                "end": 602
              }
            ],
            "declare": false,
            "start": 592,
            "end": 603
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
                  "start": 612,
                  "end": 613
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
                    "start": 617,
                    "end": 618
                  },
                  "prefix": true,
                  "start": 616,
                  "end": 618
                },
                "definite": false,
                "start": 612,
                "end": 618
              }
            ],
            "declare": false,
            "start": 608,
            "end": 619
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
                  "start": 628,
                  "end": 629
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 632,
                    "end": 633
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 637,
                    "end": 638
                  },
                  "start": 632,
                  "end": 638
                },
                "definite": false,
                "start": 628,
                "end": 638
              }
            ],
            "declare": false,
            "start": 624,
            "end": 639
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
                  "start": 648,
                  "end": 649
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 652,
                    "end": 653
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 657,
                    "end": 658
                  },
                  "start": 652,
                  "end": 658
                },
                "definite": false,
                "start": 648,
                "end": 658
              }
            ],
            "declare": false,
            "start": 644,
            "end": 659
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
                  "start": 668,
                  "end": 669
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 672,
                    "end": 673
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 678,
                    "end": 679
                  },
                  "start": 672,
                  "end": 679
                },
                "definite": false,
                "start": 668,
                "end": 679
              }
            ],
            "declare": false,
            "start": 664,
            "end": 680
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
                  "start": 689,
                  "end": 690
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 693,
                    "end": 694
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 699,
                    "end": 700
                  },
                  "start": 693,
                  "end": 700
                },
                "definite": false,
                "start": 689,
                "end": 700
              }
            ],
            "declare": false,
            "start": 685,
            "end": 701
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
                  "start": 710,
                  "end": 711
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 714,
                    "end": 715
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 718,
                    "end": 719
                  },
                  "start": 714,
                  "end": 719
                },
                "definite": false,
                "start": 710,
                "end": 719
              }
            ],
            "declare": false,
            "start": 706,
            "end": 720
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
                  "start": 729,
                  "end": 730
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 733,
                    "end": 734
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 737,
                    "end": 738
                  },
                  "start": 733,
                  "end": 738
                },
                "definite": false,
                "start": 729,
                "end": 738
              }
            ],
            "declare": false,
            "start": 725,
            "end": 739
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
                  "start": 748,
                  "end": 749
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 752,
                    "end": 753
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 757,
                    "end": 758
                  },
                  "start": 752,
                  "end": 758
                },
                "definite": false,
                "start": 748,
                "end": 758
              }
            ],
            "declare": false,
            "start": 744,
            "end": 759
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
                  "start": 768,
                  "end": 769
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 772,
                    "end": 773
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 777,
                    "end": 778
                  },
                  "start": 772,
                  "end": 778
                },
                "definite": false,
                "start": 768,
                "end": 778
              }
            ],
            "declare": false,
            "start": 764,
            "end": 779
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
                  "start": 788,
                  "end": 789
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
                    "start": 793,
                    "end": 794
                  },
                  "prefix": true,
                  "start": 792,
                  "end": 794
                },
                "definite": false,
                "start": 788,
                "end": 794
              }
            ],
            "declare": false,
            "start": 784,
            "end": 795
          }
        ],
        "start": 434,
        "end": 797
      },
      "expression": false,
      "start": 390,
      "end": 797
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 808,
        "end": 810
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
                  "start": 814,
                  "end": 820
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 821,
                  "end": 824
                },
                "start": 814,
                "end": 824
              },
              "typeArguments": null,
              "start": 814,
              "end": 824
            },
            "start": 812,
            "end": 824
          },
          "start": 811,
          "end": 824
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
                "start": 829,
                "end": 841
              },
              "typeArguments": null,
              "start": 829,
              "end": 841
            },
            "start": 827,
            "end": 841
          },
          "start": 826,
          "end": 841
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
                "start": 849,
                "end": 850
              },
              "start": 849,
              "end": 852
            },
            "directive": null,
            "start": 849,
            "end": 853
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
                "start": 858,
                "end": 859
              },
              "start": 858,
              "end": 861
            },
            "directive": null,
            "start": 858,
            "end": 862
          }
        ],
        "start": 843,
        "end": 864
      },
      "expression": false,
      "start": 799,
      "end": 864
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 883,
        "end": 884
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
                  "start": 888,
                  "end": 894
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 895,
                  "end": 898
                },
                "start": 888,
                "end": 898
              },
              "typeArguments": null,
              "start": 888,
              "end": 898
            },
            "start": 886,
            "end": 898
          },
          "start": 885,
          "end": 898
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 901,
          "end": 907
        },
        "start": 899,
        "end": 907
      },
      "body": null,
      "expression": false,
      "start": 866,
      "end": 908
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 926,
        "end": 927
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
                  "start": 931,
                  "end": 937
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 938,
                  "end": 940
                },
                "start": 931,
                "end": 940
              },
              "typeArguments": null,
              "start": 931,
              "end": 940
            },
            "start": 929,
            "end": 940
          },
          "start": 928,
          "end": 940
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 943,
          "end": 950
        },
        "start": 941,
        "end": 950
      },
      "body": null,
      "expression": false,
      "start": 909,
      "end": 951
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 969,
        "end": 970
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
                "start": 974,
                "end": 980
              },
              "typeArguments": null,
              "start": 974,
              "end": 980
            },
            "start": 972,
            "end": 980
          },
          "start": 971,
          "end": 980
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 983,
          "end": 989
        },
        "start": 981,
        "end": 989
      },
      "body": null,
      "expression": false,
      "start": 952,
      "end": 990
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1001,
        "end": 1003
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
                "start": 1007,
                "end": 1012
              },
              "typeArguments": null,
              "start": 1007,
              "end": 1012
            },
            "start": 1005,
            "end": 1012
          },
          "start": 1004,
          "end": 1012
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
                "start": 1017,
                "end": 1029
              },
              "typeArguments": null,
              "start": 1017,
              "end": 1029
            },
            "start": 1015,
            "end": 1029
          },
          "start": 1014,
          "end": 1029
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
                "start": 1034,
                "end": 1040
              },
              "typeArguments": null,
              "start": 1034,
              "end": 1040
            },
            "start": 1032,
            "end": 1040
          },
          "start": 1031,
          "end": 1040
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
                  "start": 1052,
                  "end": 1054
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1057,
                    "end": 1058
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
                        "start": 1059,
                        "end": 1065
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Yes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1066,
                        "end": 1069
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1059,
                      "end": 1069
                    }
                  ],
                  "optional": false,
                  "start": 1057,
                  "end": 1070
                },
                "definite": false,
                "start": 1052,
                "end": 1070
              }
            ],
            "declare": false,
            "start": 1048,
            "end": 1071
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
                  "start": 1080,
                  "end": 1082
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1085,
                    "end": 1086
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
                        "start": 1087,
                        "end": 1093
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1094,
                        "end": 1096
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1087,
                      "end": 1096
                    }
                  ],
                  "optional": false,
                  "start": 1085,
                  "end": 1097
                },
                "definite": false,
                "start": 1080,
                "end": 1097
              }
            ],
            "declare": false,
            "start": 1076,
            "end": 1098
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
                  "start": 1107,
                  "end": 1109
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1112,
                    "end": 1113
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1114,
                      "end": 1115
                    }
                  ],
                  "optional": false,
                  "start": 1112,
                  "end": 1116
                },
                "definite": false,
                "start": 1107,
                "end": 1116
              }
            ],
            "declare": false,
            "start": 1103,
            "end": 1117
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
                  "start": 1126,
                  "end": 1128
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1131,
                    "end": 1132
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1133,
                      "end": 1134
                    }
                  ],
                  "optional": false,
                  "start": 1131,
                  "end": 1135
                },
                "definite": false,
                "start": 1126,
                "end": 1135
              }
            ],
            "declare": false,
            "start": 1122,
            "end": 1136
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
                  "start": 1145,
                  "end": 1147
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1150,
                    "end": 1151
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1152,
                      "end": 1153
                    }
                  ],
                  "optional": false,
                  "start": 1150,
                  "end": 1154
                },
                "definite": false,
                "start": 1145,
                "end": 1154
              }
            ],
            "declare": false,
            "start": 1141,
            "end": 1155
          }
        ],
        "start": 1042,
        "end": 1157
      },
      "expression": false,
      "start": 992,
      "end": 1157
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertNever",
        "optional": false,
        "typeAnnotation": null,
        "start": 1168,
        "end": 1179
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
              "start": 1183,
              "end": 1188
            },
            "start": 1181,
            "end": 1188
          },
          "start": 1180,
          "end": 1188
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 1191,
          "end": 1196
        },
        "start": 1189,
        "end": 1196
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
                "start": 1213,
                "end": 1218
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Unexpected value",
                  "raw": "\"Unexpected value\"",
                  "start": 1219,
                  "end": 1237
                }
              ],
              "start": 1209,
              "end": 1238
            },
            "start": 1203,
            "end": 1239
          }
        ],
        "start": 1197,
        "end": 1241
      },
      "expression": false,
      "start": 1159,
      "end": 1241
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1252,
        "end": 1255
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
                "start": 1259,
                "end": 1264
              },
              "typeArguments": null,
              "start": 1259,
              "end": 1264
            },
            "start": 1257,
            "end": 1264
          },
          "start": 1256,
          "end": 1264
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
              "start": 1280,
              "end": 1281
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
                    "start": 1298,
                    "end": 1304
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1305,
                    "end": 1308
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1298,
                  "end": 1308
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "true",
                      "raw": "\"true\"",
                      "start": 1317,
                      "end": 1323
                    },
                    "start": 1310,
                    "end": 1324
                  }
                ],
                "start": 1293,
                "end": 1324
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
                    "start": 1338,
                    "end": 1344
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1345,
                    "end": 1347
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1338,
                  "end": 1347
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "false",
                      "raw": "\"false\"",
                      "start": 1356,
                      "end": 1363
                    },
                    "start": 1349,
                    "end": 1364
                  }
                ],
                "start": 1333,
                "end": 1364
              }
            ],
            "start": 1272,
            "end": 1370
          }
        ],
        "start": 1266,
        "end": 1372
      },
      "expression": false,
      "start": 1243,
      "end": 1372
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1383,
        "end": 1386
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
                "start": 1390,
                "end": 1395
              },
              "typeArguments": null,
              "start": 1390,
              "end": 1395
            },
            "start": 1388,
            "end": 1395
          },
          "start": 1387,
          "end": 1395
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
              "start": 1411,
              "end": 1412
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
                    "start": 1429,
                    "end": 1435
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1436,
                    "end": 1439
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1429,
                  "end": 1439
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "true",
                      "raw": "\"true\"",
                      "start": 1448,
                      "end": 1454
                    },
                    "start": 1441,
                    "end": 1455
                  }
                ],
                "start": 1424,
                "end": 1455
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
                    "start": 1469,
                    "end": 1475
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1476,
                    "end": 1478
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1469,
                  "end": 1478
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "false",
                      "raw": "\"false\"",
                      "start": 1487,
                      "end": 1494
                    },
                    "start": 1480,
                    "end": 1495
                  }
                ],
                "start": 1464,
                "end": 1495
              }
            ],
            "start": 1403,
            "end": 1501
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
                "start": 1513,
                "end": 1524
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1525,
                  "end": 1526
                }
              ],
              "optional": false,
              "start": 1513,
              "end": 1527
            },
            "start": 1506,
            "end": 1528
          }
        ],
        "start": 1397,
        "end": 1530
      },
      "expression": false,
      "start": 1374,
      "end": 1530
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1541,
        "end": 1544
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
                "start": 1548,
                "end": 1560
              },
              "typeArguments": null,
              "start": 1548,
              "end": 1560
            },
            "start": 1546,
            "end": 1560
          },
          "start": 1545,
          "end": 1560
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
              "start": 1572,
              "end": 1573
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
                    "start": 1585,
                    "end": 1586
                  },
                  "directive": null,
                  "start": 1585,
                  "end": 1587
                }
              ],
              "start": 1575,
              "end": 1593
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
                    "start": 1613,
                    "end": 1614
                  },
                  "directive": null,
                  "start": 1613,
                  "end": 1615
                }
              ],
              "start": 1603,
              "end": 1621
            },
            "start": 1568,
            "end": 1621
          }
        ],
        "start": 1562,
        "end": 1623
      },
      "expression": false,
      "start": 1532,
      "end": 1623
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1634,
        "end": 1637
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
                "start": 1641,
                "end": 1653
              },
              "typeArguments": null,
              "start": 1641,
              "end": 1653
            },
            "start": 1639,
            "end": 1653
          },
          "start": 1638,
          "end": 1653
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
                "start": 1665,
                "end": 1666
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
                  "start": 1671,
                  "end": 1677
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1678,
                  "end": 1681
                },
                "optional": false,
                "computed": false,
                "start": 1671,
                "end": 1681
              },
              "start": 1665,
              "end": 1681
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
                    "start": 1693,
                    "end": 1694
                  },
                  "directive": null,
                  "start": 1693,
                  "end": 1695
                }
              ],
              "start": 1683,
              "end": 1701
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
                    "start": 1721,
                    "end": 1722
                  },
                  "directive": null,
                  "start": 1721,
                  "end": 1723
                }
              ],
              "start": 1711,
              "end": 1729
            },
            "start": 1661,
            "end": 1729
          }
        ],
        "start": 1655,
        "end": 1731
      },
      "expression": false,
      "start": 1625,
      "end": 1731
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 1738,
        "end": 1742
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
                  "start": 1751,
                  "end": 1755
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
                        "start": 1757,
                        "end": 1763
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Yes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1764,
                        "end": 1767
                      },
                      "start": 1757,
                      "end": 1767
                    },
                    "typeArguments": null,
                    "start": 1757,
                    "end": 1767
                  },
                  "start": 1755,
                  "end": 1767
                },
                "accessibility": null,
                "static": false,
                "start": 1751,
                "end": 1768
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
                  "start": 1769,
                  "end": 1770
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1772,
                    "end": 1778
                  },
                  "start": 1770,
                  "end": 1778
                },
                "accessibility": null,
                "static": false,
                "start": 1769,
                "end": 1778
              }
            ],
            "start": 1749,
            "end": 1780
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
                  "start": 1789,
                  "end": 1793
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
                        "start": 1795,
                        "end": 1801
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1802,
                        "end": 1804
                      },
                      "start": 1795,
                      "end": 1804
                    },
                    "typeArguments": null,
                    "start": 1795,
                    "end": 1804
                  },
                  "start": 1793,
                  "end": 1804
                },
                "accessibility": null,
                "static": false,
                "start": 1789,
                "end": 1805
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
                  "start": 1806,
                  "end": 1807
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1809,
                    "end": 1815
                  },
                  "start": 1807,
                  "end": 1815
                },
                "accessibility": null,
                "static": false,
                "start": 1806,
                "end": 1815
              }
            ],
            "start": 1787,
            "end": 1817
          }
        ],
        "start": 1749,
        "end": 1817
      },
      "declare": false,
      "start": 1733,
      "end": 1818
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1829,
        "end": 1832
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
                "start": 1836,
                "end": 1840
              },
              "typeArguments": null,
              "start": 1836,
              "end": 1840
            },
            "start": 1834,
            "end": 1840
          },
          "start": 1833,
          "end": 1840
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
                "start": 1856,
                "end": 1857
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1858,
                "end": 1862
              },
              "optional": false,
              "computed": false,
              "start": 1856,
              "end": 1862
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
                    "start": 1879,
                    "end": 1885
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1886,
                    "end": 1889
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1879,
                  "end": 1889
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
                        "start": 1898,
                        "end": 1899
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1900,
                        "end": 1901
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1898,
                      "end": 1901
                    },
                    "start": 1891,
                    "end": 1902
                  }
                ],
                "start": 1874,
                "end": 1902
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
                    "start": 1916,
                    "end": 1922
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1923,
                    "end": 1925
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1916,
                  "end": 1925
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
                        "start": 1934,
                        "end": 1935
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1936,
                        "end": 1937
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1934,
                      "end": 1937
                    },
                    "start": 1927,
                    "end": 1938
                  }
                ],
                "start": 1911,
                "end": 1938
              }
            ],
            "start": 1848,
            "end": 1944
          }
        ],
        "start": 1842,
        "end": 1946
      },
      "expression": false,
      "start": 1820,
      "end": 1946
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 1957,
        "end": 1960
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
                "start": 1964,
                "end": 1968
              },
              "typeArguments": null,
              "start": 1964,
              "end": 1968
            },
            "start": 1962,
            "end": 1968
          },
          "start": 1961,
          "end": 1968
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
                "start": 1984,
                "end": 1985
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1986,
                "end": 1990
              },
              "optional": false,
              "computed": false,
              "start": 1984,
              "end": 1990
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
                    "start": 2007,
                    "end": 2013
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2014,
                    "end": 2017
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2007,
                  "end": 2017
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
                        "start": 2026,
                        "end": 2027
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2028,
                        "end": 2029
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2026,
                      "end": 2029
                    },
                    "start": 2019,
                    "end": 2030
                  }
                ],
                "start": 2002,
                "end": 2030
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
                    "start": 2044,
                    "end": 2050
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2051,
                    "end": 2053
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2044,
                  "end": 2053
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
                        "start": 2062,
                        "end": 2063
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2064,
                        "end": 2065
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2062,
                      "end": 2065
                    },
                    "start": 2055,
                    "end": 2066
                  }
                ],
                "start": 2039,
                "end": 2066
              }
            ],
            "start": 1976,
            "end": 2072
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
                "start": 2084,
                "end": 2095
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2096,
                  "end": 2097
                }
              ],
              "optional": false,
              "start": 2084,
              "end": 2098
            },
            "start": 2077,
            "end": 2099
          }
        ],
        "start": 1970,
        "end": 2101
      },
      "expression": false,
      "start": 1948,
      "end": 2101
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2101
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
    "value": "UnknownYesNo",
    "start": 420,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 440,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 453,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 459,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 478,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "start": 497,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 516,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 535,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 554,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 558,
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
    "value": "a",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 573,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "var",
    "start": 592,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "var",
    "start": 608,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 624,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 634,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 644,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 654,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 664,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 674,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 685,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 695,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 706,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 719,
    "end": 720
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 725,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 738,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 744,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 754,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 758,
    "end": 759
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 764,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 774,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 778,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 784,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 796,
    "end": 797
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 799,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 808,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 814,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 821,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 829,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 850,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 859,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 866,
    "end": 873
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 874,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 888,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 895,
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
    "value": ":",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 901,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 909,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 917,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 931,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 938,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 943,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 952,
    "end": 959
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 960,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 974,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 983,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 989,
    "end": 990
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 992,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1001,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 1007,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 1017,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1034,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1048,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 1052,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1059,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1066,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1076,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 1080,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1087,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1094,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1103,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "z3",
    "start": 1107,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1122,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "z4",
    "start": 1126,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1141,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "z5",
    "start": 1145,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1159,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 1168,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1180,
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
    "value": "never",
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
    "value": ":",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1191,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1203,
    "end": 1208
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1209,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 1213,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "String",
    "value": "\"Unexpected value\"",
    "start": 1219,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1243,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1252,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 1259,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1272,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1293,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1298,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1305,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1310,
    "end": 1316
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 1317,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1333,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1338,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1345,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1349,
    "end": 1355
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 1356,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1374,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1383,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 1390,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1403,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1424,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1429,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1436,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1441,
    "end": 1447
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 1448,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1464,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1469,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1476,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1480,
    "end": 1486
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 1487,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1506,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 1513,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1532,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1541,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 1548,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1568,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1598,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1625,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1634,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 1641,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1661,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1667,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1671,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1678,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1706,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1733,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 1738,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1751,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1757,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1764,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1772,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1789,
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
    "value": "Choice",
    "start": 1795,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1802,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1809,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1820,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1829,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 1836,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1848,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1858,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1874,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1879,
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
    "value": "Yes",
    "start": 1886,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1891,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1911,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1916,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1923,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1927,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1948,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 1957,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 1964,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1976,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1986,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2002,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 2007,
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
    "value": "Yes",
    "start": 2014,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2019,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2039,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 2044,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 2051,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2055,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2077,
    "end": 2083
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 2084,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2100,
    "end": 2101
  }
]
```
