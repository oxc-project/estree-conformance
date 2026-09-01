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
            "initializer": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 30,
              "end": 32
            },
            "computed": false,
            "start": 20,
            "end": 32
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Yes",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 37
            },
            "initializer": {
              "type": "Literal",
              "value": "yes",
              "raw": "\"yes\"",
              "start": 40,
              "end": 45
            },
            "computed": false,
            "start": 34,
            "end": 45
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "No",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 49
            },
            "initializer": {
              "type": "Literal",
              "value": "no",
              "raw": "\"no\"",
              "start": 52,
              "end": 56
            },
            "computed": false,
            "start": 47,
            "end": 56
          }
        ],
        "start": 18,
        "end": 58
      },
      "const": true,
      "declare": false,
      "start": 0,
      "end": 58
    },
    {
      "type": "EmptyStatement",
      "start": 58,
      "end": 59
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "YesNo",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 71
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
                "start": 74,
                "end": 80
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 84
              },
              "start": 74,
              "end": 84
            },
            "typeArguments": null,
            "start": 74,
            "end": 84
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
                "start": 87,
                "end": 93
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "No",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 96
              },
              "start": 87,
              "end": 96
            },
            "typeArguments": null,
            "start": 87,
            "end": 96
          }
        ],
        "start": 74,
        "end": 96
      },
      "declare": false,
      "start": 61,
      "end": 97
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoYes",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 108
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
                "start": 111,
                "end": 117
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "No",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 120
              },
              "start": 111,
              "end": 120
            },
            "typeArguments": null,
            "start": 111,
            "end": 120
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
                "start": 123,
                "end": 129
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 133
              },
              "start": 123,
              "end": 133
            },
            "typeArguments": null,
            "start": 123,
            "end": 133
          }
        ],
        "start": 111,
        "end": 133
      },
      "declare": false,
      "start": 98,
      "end": 134
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnknownYesNo",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 152
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
                "start": 155,
                "end": 161
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unknown",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 169
              },
              "start": 155,
              "end": 169
            },
            "typeArguments": null,
            "start": 155,
            "end": 169
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
                "start": 172,
                "end": 178
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 182
              },
              "start": 172,
              "end": 182
            },
            "typeArguments": null,
            "start": 172,
            "end": 182
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
                "start": 185,
                "end": 191
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "No",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 194
              },
              "start": 185,
              "end": 194
            },
            "typeArguments": null,
            "start": 185,
            "end": 194
          }
        ],
        "start": 155,
        "end": 194
      },
      "declare": false,
      "start": 135,
      "end": 195
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 208
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
                        "start": 224,
                        "end": 229
                      },
                      "typeArguments": null,
                      "start": 224,
                      "end": 229
                    },
                    "start": 222,
                    "end": 229
                  },
                  "start": 221,
                  "end": 229
                },
                "init": null,
                "definite": false,
                "start": 221,
                "end": 229
              }
            ],
            "declare": false,
            "start": 217,
            "end": 230
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
                        "start": 242,
                        "end": 247
                      },
                      "typeArguments": null,
                      "start": 242,
                      "end": 247
                    },
                    "start": 240,
                    "end": 247
                  },
                  "start": 239,
                  "end": 247
                },
                "init": null,
                "definite": false,
                "start": 239,
                "end": 247
              }
            ],
            "declare": false,
            "start": 235,
            "end": 248
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
                              "start": 260,
                              "end": 266
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Yes",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 267,
                              "end": 270
                            },
                            "start": 260,
                            "end": 270
                          },
                          "typeArguments": null,
                          "start": 260,
                          "end": 270
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
                              "start": 273,
                              "end": 279
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "No",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 280,
                              "end": 282
                            },
                            "start": 273,
                            "end": 282
                          },
                          "typeArguments": null,
                          "start": 273,
                          "end": 282
                        }
                      ],
                      "start": 260,
                      "end": 282
                    },
                    "start": 258,
                    "end": 282
                  },
                  "start": 257,
                  "end": 282
                },
                "init": null,
                "definite": false,
                "start": 257,
                "end": 282
              }
            ],
            "declare": false,
            "start": 253,
            "end": 283
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
                              "start": 295,
                              "end": 301
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "No",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 302,
                              "end": 304
                            },
                            "start": 295,
                            "end": 304
                          },
                          "typeArguments": null,
                          "start": 295,
                          "end": 304
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
                              "start": 307,
                              "end": 313
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Yes",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 314,
                              "end": 317
                            },
                            "start": 307,
                            "end": 317
                          },
                          "typeArguments": null,
                          "start": 307,
                          "end": 317
                        }
                      ],
                      "start": 295,
                      "end": 317
                    },
                    "start": 293,
                    "end": 317
                  },
                  "start": 292,
                  "end": 317
                },
                "init": null,
                "definite": false,
                "start": 292,
                "end": 317
              }
            ],
            "declare": false,
            "start": 288,
            "end": 318
          }
        ],
        "start": 211,
        "end": 320
      },
      "expression": false,
      "start": 197,
      "end": 320
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 331,
        "end": 333
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
                "start": 337,
                "end": 342
              },
              "typeArguments": null,
              "start": 337,
              "end": 342
            },
            "start": 335,
            "end": 342
          },
          "start": 334,
          "end": 342
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
                "start": 347,
                "end": 359
              },
              "typeArguments": null,
              "start": 347,
              "end": 359
            },
            "start": 345,
            "end": 359
          },
          "start": 344,
          "end": 359
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
                "start": 364,
                "end": 370
              },
              "typeArguments": null,
              "start": 364,
              "end": 370
            },
            "start": 362,
            "end": 370
          },
          "start": 361,
          "end": 370
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
                "start": 378,
                "end": 379
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 383
              },
              "start": 378,
              "end": 383
            },
            "directive": null,
            "start": 378,
            "end": 384
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
                "start": 389,
                "end": 390
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 393,
                "end": 394
              },
              "start": 389,
              "end": 394
            },
            "directive": null,
            "start": 389,
            "end": 395
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
                "start": 400,
                "end": 401
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 405
              },
              "start": 400,
              "end": 405
            },
            "directive": null,
            "start": 400,
            "end": 406
          }
        ],
        "start": 372,
        "end": 408
      },
      "expression": false,
      "start": 322,
      "end": 408
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 419,
        "end": 421
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
                  "start": 425,
                  "end": 431
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 435
                },
                "start": 425,
                "end": 435
              },
              "typeArguments": null,
              "start": 425,
              "end": 435
            },
            "start": 423,
            "end": 435
          },
          "start": 422,
          "end": 435
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
                "start": 440,
                "end": 445
              },
              "typeArguments": null,
              "start": 440,
              "end": 445
            },
            "start": 438,
            "end": 445
          },
          "start": 437,
          "end": 445
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
                  "start": 457,
                  "end": 458
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 461,
                    "end": 462
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 465,
                    "end": 466
                  },
                  "start": 461,
                  "end": 466
                },
                "definite": false,
                "start": 457,
                "end": 466
              }
            ],
            "declare": false,
            "start": 453,
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 476,
                  "end": 477
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 480,
                    "end": 481
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 485,
                    "end": 486
                  },
                  "start": 480,
                  "end": 486
                },
                "definite": false,
                "start": 476,
                "end": 486
              }
            ],
            "declare": false,
            "start": 472,
            "end": 487
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
                  "start": 496,
                  "end": 497
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 500,
                    "end": 501
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 505,
                    "end": 506
                  },
                  "start": 500,
                  "end": 506
                },
                "definite": false,
                "start": 496,
                "end": 506
              }
            ],
            "declare": false,
            "start": 492,
            "end": 507
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
                  "start": 516,
                  "end": 517
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 520,
                    "end": 521
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 526,
                    "end": 527
                  },
                  "start": 520,
                  "end": 527
                },
                "definite": false,
                "start": 516,
                "end": 527
              }
            ],
            "declare": false,
            "start": 512,
            "end": 528
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
                  "start": 537,
                  "end": 538
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 541,
                    "end": 542
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 547,
                    "end": 548
                  },
                  "start": 541,
                  "end": 548
                },
                "definite": false,
                "start": 537,
                "end": 548
              }
            ],
            "declare": false,
            "start": 533,
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
                  "name": "y",
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
                  "operator": ">",
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
                  "name": "y",
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
                  "operator": "<",
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 596,
                  "end": 597
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 600,
                    "end": 601
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 605,
                    "end": 606
                  },
                  "start": 600,
                  "end": 606
                },
                "definite": false,
                "start": 596,
                "end": 606
              }
            ],
            "declare": false,
            "start": 592,
            "end": 607
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
                  "start": 616,
                  "end": 617
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 620,
                    "end": 621
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 625,
                    "end": 626
                  },
                  "start": 620,
                  "end": 626
                },
                "definite": false,
                "start": 616,
                "end": 626
              }
            ],
            "declare": false,
            "start": 612,
            "end": 627
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
                  "start": 636,
                  "end": 637
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
                    "start": 641,
                    "end": 642
                  },
                  "prefix": true,
                  "start": 640,
                  "end": 642
                },
                "definite": false,
                "start": 636,
                "end": 642
              }
            ],
            "declare": false,
            "start": 632,
            "end": 643
          }
        ],
        "start": 447,
        "end": 645
      },
      "expression": false,
      "start": 410,
      "end": 645
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 664,
        "end": 665
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
                  "start": 669,
                  "end": 675
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 676,
                  "end": 679
                },
                "start": 669,
                "end": 679
              },
              "typeArguments": null,
              "start": 669,
              "end": 679
            },
            "start": 667,
            "end": 679
          },
          "start": 666,
          "end": 679
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 682,
          "end": 688
        },
        "start": 680,
        "end": 688
      },
      "body": null,
      "expression": false,
      "start": 647,
      "end": 689
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 707,
        "end": 708
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
                  "start": 712,
                  "end": 718
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 719,
                  "end": 721
                },
                "start": 712,
                "end": 721
              },
              "typeArguments": null,
              "start": 712,
              "end": 721
            },
            "start": 710,
            "end": 721
          },
          "start": 709,
          "end": 721
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 724,
          "end": 731
        },
        "start": 722,
        "end": 731
      },
      "body": null,
      "expression": false,
      "start": 690,
      "end": 732
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 750,
        "end": 751
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
                "start": 755,
                "end": 761
              },
              "typeArguments": null,
              "start": 755,
              "end": 761
            },
            "start": 753,
            "end": 761
          },
          "start": 752,
          "end": 761
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 764,
          "end": 770
        },
        "start": 762,
        "end": 770
      },
      "body": null,
      "expression": false,
      "start": 733,
      "end": 771
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 782,
        "end": 784
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
                "start": 788,
                "end": 793
              },
              "typeArguments": null,
              "start": 788,
              "end": 793
            },
            "start": 786,
            "end": 793
          },
          "start": 785,
          "end": 793
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
                "start": 798,
                "end": 810
              },
              "typeArguments": null,
              "start": 798,
              "end": 810
            },
            "start": 796,
            "end": 810
          },
          "start": 795,
          "end": 810
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
                "start": 815,
                "end": 821
              },
              "typeArguments": null,
              "start": 815,
              "end": 821
            },
            "start": 813,
            "end": 821
          },
          "start": 812,
          "end": 821
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
                  "start": 833,
                  "end": 835
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 838,
                    "end": 839
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
                        "start": 840,
                        "end": 846
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Yes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 847,
                        "end": 850
                      },
                      "optional": false,
                      "computed": false,
                      "start": 840,
                      "end": 850
                    }
                  ],
                  "optional": false,
                  "start": 838,
                  "end": 851
                },
                "definite": false,
                "start": 833,
                "end": 851
              }
            ],
            "declare": false,
            "start": 829,
            "end": 852
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
                  "start": 861,
                  "end": 863
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 866,
                    "end": 867
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
                        "start": 868,
                        "end": 874
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 875,
                        "end": 877
                      },
                      "optional": false,
                      "computed": false,
                      "start": 868,
                      "end": 877
                    }
                  ],
                  "optional": false,
                  "start": 866,
                  "end": 878
                },
                "definite": false,
                "start": 861,
                "end": 878
              }
            ],
            "declare": false,
            "start": 857,
            "end": 879
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
                  "start": 888,
                  "end": 890
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 893,
                    "end": 894
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 895,
                      "end": 896
                    }
                  ],
                  "optional": false,
                  "start": 893,
                  "end": 897
                },
                "definite": false,
                "start": 888,
                "end": 897
              }
            ],
            "declare": false,
            "start": 884,
            "end": 898
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
                  "start": 907,
                  "end": 909
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 912,
                    "end": 913
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 914,
                      "end": 915
                    }
                  ],
                  "optional": false,
                  "start": 912,
                  "end": 916
                },
                "definite": false,
                "start": 907,
                "end": 916
              }
            ],
            "declare": false,
            "start": 903,
            "end": 917
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
                  "start": 926,
                  "end": 928
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 931,
                    "end": 932
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 933,
                      "end": 934
                    }
                  ],
                  "optional": false,
                  "start": 931,
                  "end": 935
                },
                "definite": false,
                "start": 926,
                "end": 935
              }
            ],
            "declare": false,
            "start": 922,
            "end": 936
          }
        ],
        "start": 823,
        "end": 938
      },
      "expression": false,
      "start": 773,
      "end": 938
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertNever",
        "optional": false,
        "typeAnnotation": null,
        "start": 949,
        "end": 960
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
              "start": 964,
              "end": 969
            },
            "start": 962,
            "end": 969
          },
          "start": 961,
          "end": 969
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 972,
          "end": 977
        },
        "start": 970,
        "end": 977
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
                "start": 994,
                "end": 999
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Unexpected value",
                  "raw": "\"Unexpected value\"",
                  "start": 1000,
                  "end": 1018
                }
              ],
              "start": 990,
              "end": 1019
            },
            "start": 984,
            "end": 1020
          }
        ],
        "start": 978,
        "end": 1022
      },
      "expression": false,
      "start": 940,
      "end": 1022
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1033,
        "end": 1036
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
                "start": 1040,
                "end": 1045
              },
              "typeArguments": null,
              "start": 1040,
              "end": 1045
            },
            "start": 1038,
            "end": 1045
          },
          "start": 1037,
          "end": 1045
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
              "start": 1061,
              "end": 1062
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
                    "start": 1079,
                    "end": 1085
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1086,
                    "end": 1089
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1079,
                  "end": 1089
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "true",
                      "raw": "\"true\"",
                      "start": 1098,
                      "end": 1104
                    },
                    "start": 1091,
                    "end": 1105
                  }
                ],
                "start": 1074,
                "end": 1105
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
                    "start": 1119,
                    "end": 1125
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1126,
                    "end": 1128
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1119,
                  "end": 1128
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "false",
                      "raw": "\"false\"",
                      "start": 1137,
                      "end": 1144
                    },
                    "start": 1130,
                    "end": 1145
                  }
                ],
                "start": 1114,
                "end": 1145
              }
            ],
            "start": 1053,
            "end": 1151
          }
        ],
        "start": 1047,
        "end": 1153
      },
      "expression": false,
      "start": 1024,
      "end": 1153
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1164,
        "end": 1167
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
                "start": 1171,
                "end": 1176
              },
              "typeArguments": null,
              "start": 1171,
              "end": 1176
            },
            "start": 1169,
            "end": 1176
          },
          "start": 1168,
          "end": 1176
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
              "start": 1192,
              "end": 1193
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
                    "start": 1210,
                    "end": 1216
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1217,
                    "end": 1220
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1210,
                  "end": 1220
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "true",
                      "raw": "\"true\"",
                      "start": 1229,
                      "end": 1235
                    },
                    "start": 1222,
                    "end": 1236
                  }
                ],
                "start": 1205,
                "end": 1236
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
                    "start": 1250,
                    "end": 1256
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1257,
                    "end": 1259
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1250,
                  "end": 1259
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "false",
                      "raw": "\"false\"",
                      "start": 1268,
                      "end": 1275
                    },
                    "start": 1261,
                    "end": 1276
                  }
                ],
                "start": 1245,
                "end": 1276
              }
            ],
            "start": 1184,
            "end": 1282
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
                "start": 1294,
                "end": 1305
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1306,
                  "end": 1307
                }
              ],
              "optional": false,
              "start": 1294,
              "end": 1308
            },
            "start": 1287,
            "end": 1309
          }
        ],
        "start": 1178,
        "end": 1311
      },
      "expression": false,
      "start": 1155,
      "end": 1311
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1322,
        "end": 1325
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
                "start": 1329,
                "end": 1341
              },
              "typeArguments": null,
              "start": 1329,
              "end": 1341
            },
            "start": 1327,
            "end": 1341
          },
          "start": 1326,
          "end": 1341
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
              "start": 1353,
              "end": 1354
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
                    "start": 1366,
                    "end": 1367
                  },
                  "directive": null,
                  "start": 1366,
                  "end": 1368
                }
              ],
              "start": 1356,
              "end": 1374
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
                    "start": 1394,
                    "end": 1395
                  },
                  "directive": null,
                  "start": 1394,
                  "end": 1396
                }
              ],
              "start": 1384,
              "end": 1402
            },
            "start": 1349,
            "end": 1402
          }
        ],
        "start": 1343,
        "end": 1404
      },
      "expression": false,
      "start": 1313,
      "end": 1404
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1415,
        "end": 1418
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
                "start": 1422,
                "end": 1434
              },
              "typeArguments": null,
              "start": 1422,
              "end": 1434
            },
            "start": 1420,
            "end": 1434
          },
          "start": 1419,
          "end": 1434
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
                "start": 1446,
                "end": 1447
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
                  "start": 1452,
                  "end": 1458
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1459,
                  "end": 1462
                },
                "optional": false,
                "computed": false,
                "start": 1452,
                "end": 1462
              },
              "start": 1446,
              "end": 1462
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
                    "start": 1474,
                    "end": 1475
                  },
                  "directive": null,
                  "start": 1474,
                  "end": 1476
                }
              ],
              "start": 1464,
              "end": 1482
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
                    "start": 1502,
                    "end": 1503
                  },
                  "directive": null,
                  "start": 1502,
                  "end": 1504
                }
              ],
              "start": 1492,
              "end": 1510
            },
            "start": 1442,
            "end": 1510
          }
        ],
        "start": 1436,
        "end": 1512
      },
      "expression": false,
      "start": 1406,
      "end": 1512
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 1519,
        "end": 1523
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
                  "start": 1532,
                  "end": 1536
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
                        "start": 1538,
                        "end": 1544
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Yes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1545,
                        "end": 1548
                      },
                      "start": 1538,
                      "end": 1548
                    },
                    "typeArguments": null,
                    "start": 1538,
                    "end": 1548
                  },
                  "start": 1536,
                  "end": 1548
                },
                "accessibility": null,
                "static": false,
                "start": 1532,
                "end": 1549
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
                  "start": 1550,
                  "end": 1551
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1553,
                    "end": 1559
                  },
                  "start": 1551,
                  "end": 1559
                },
                "accessibility": null,
                "static": false,
                "start": 1550,
                "end": 1559
              }
            ],
            "start": 1530,
            "end": 1561
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
                  "start": 1570,
                  "end": 1574
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
                        "start": 1576,
                        "end": 1582
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1583,
                        "end": 1585
                      },
                      "start": 1576,
                      "end": 1585
                    },
                    "typeArguments": null,
                    "start": 1576,
                    "end": 1585
                  },
                  "start": 1574,
                  "end": 1585
                },
                "accessibility": null,
                "static": false,
                "start": 1570,
                "end": 1586
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
                  "start": 1587,
                  "end": 1588
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1590,
                    "end": 1596
                  },
                  "start": 1588,
                  "end": 1596
                },
                "accessibility": null,
                "static": false,
                "start": 1587,
                "end": 1596
              }
            ],
            "start": 1568,
            "end": 1598
          }
        ],
        "start": 1530,
        "end": 1598
      },
      "declare": false,
      "start": 1514,
      "end": 1599
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1610,
        "end": 1613
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
                "start": 1617,
                "end": 1621
              },
              "typeArguments": null,
              "start": 1617,
              "end": 1621
            },
            "start": 1615,
            "end": 1621
          },
          "start": 1614,
          "end": 1621
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
                "start": 1637,
                "end": 1638
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1639,
                "end": 1643
              },
              "optional": false,
              "computed": false,
              "start": 1637,
              "end": 1643
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
                    "start": 1660,
                    "end": 1666
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1667,
                    "end": 1670
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1660,
                  "end": 1670
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
                        "start": 1679,
                        "end": 1680
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1681,
                        "end": 1682
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1679,
                      "end": 1682
                    },
                    "start": 1672,
                    "end": 1683
                  }
                ],
                "start": 1655,
                "end": 1683
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
                    "start": 1697,
                    "end": 1703
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1704,
                    "end": 1706
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1697,
                  "end": 1706
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
                        "start": 1715,
                        "end": 1716
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1717,
                        "end": 1718
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1715,
                      "end": 1718
                    },
                    "start": 1708,
                    "end": 1719
                  }
                ],
                "start": 1692,
                "end": 1719
              }
            ],
            "start": 1629,
            "end": 1725
          }
        ],
        "start": 1623,
        "end": 1727
      },
      "expression": false,
      "start": 1601,
      "end": 1727
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 1738,
        "end": 1741
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
                "start": 1745,
                "end": 1749
              },
              "typeArguments": null,
              "start": 1745,
              "end": 1749
            },
            "start": 1743,
            "end": 1749
          },
          "start": 1742,
          "end": 1749
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
                "start": 1765,
                "end": 1766
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1767,
                "end": 1771
              },
              "optional": false,
              "computed": false,
              "start": 1765,
              "end": 1771
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
                    "start": 1788,
                    "end": 1794
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1795,
                    "end": 1798
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1788,
                  "end": 1798
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
                        "start": 1807,
                        "end": 1808
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1809,
                        "end": 1810
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1807,
                      "end": 1810
                    },
                    "start": 1800,
                    "end": 1811
                  }
                ],
                "start": 1783,
                "end": 1811
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
                    "start": 1825,
                    "end": 1831
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1832,
                    "end": 1834
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1825,
                  "end": 1834
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
                        "start": 1843,
                        "end": 1844
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1845,
                        "end": 1846
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1843,
                      "end": 1846
                    },
                    "start": 1836,
                    "end": 1847
                  }
                ],
                "start": 1820,
                "end": 1847
              }
            ],
            "start": 1757,
            "end": 1853
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
                "start": 1865,
                "end": 1876
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1877,
                  "end": 1878
                }
              ],
              "optional": false,
              "start": 1865,
              "end": 1879
            },
            "start": 1858,
            "end": 1880
          }
        ],
        "start": 1751,
        "end": 1882
      },
      "expression": false,
      "start": 1729,
      "end": 1882
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1882
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
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 30,
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
    "value": "Yes",
    "start": 34,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"yes\"",
    "start": 40,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 47,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51
  },
  {
    "type": "String",
    "value": "\"no\"",
    "start": 52,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 61,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 66,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 81,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 98,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "NoYes",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 111,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 118,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 123,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 130,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 135,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 140,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "Unknown",
    "start": 162,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 172,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 185,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 197,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 206,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 217,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "YesNo",
    "start": 224,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 235,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 239,
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
    "value": "NoYes",
    "start": 242,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 253,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 260,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 267,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 273,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 288,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 295,
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
    "value": "No",
    "start": 302,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 307,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 322,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 331,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 337,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 347,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 364,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 410,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 419,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 425,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 432,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 440,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 453,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "var",
    "start": 472,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 476,
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
    "value": "a",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 482,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 492,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 502,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 505,
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
    "value": "var",
    "start": 512,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 522,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 533,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 543,
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
    "value": "y",
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
    "value": ">",
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
    "value": "y",
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
    "value": "<",
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
    "value": "y",
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
    "type": "Identifier",
    "value": "a",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 602,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 606,
    "end": 607
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 612,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 622,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 632,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Identifier",
    "value": "declare",
    "start": 647,
    "end": 654
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 655,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "Choice",
    "start": 669,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 676,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 682,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 690,
    "end": 697
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 698,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 712,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 719,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 721,
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
    "value": "boolean",
    "start": 724,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 733,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 741,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "g",
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
    "value": "x",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 755,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 764,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 773,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 782,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 788,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 798,
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
    "value": "c",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 815,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 823,
    "end": 824
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 829,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 833,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 840,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 847,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 857,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 861,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "g",
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
    "value": "Choice",
    "start": 868,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 875,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 878,
    "end": 879
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 884,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "z3",
    "start": 888,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 897,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 903,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "z4",
    "start": 907,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 910,
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
    "value": "b",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 916,
    "end": 917
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 922,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "z5",
    "start": 926,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 940,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 949,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 964,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 972,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 978,
    "end": 979
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 984,
    "end": 989
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 990,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 994,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 999,
    "end": 1000
  },
  {
    "type": "String",
    "value": "\"Unexpected value\"",
    "start": 1000,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1024,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1033,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 1040,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1053,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1074,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1079,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1086,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1091,
    "end": 1097
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 1098,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1114,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1119,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1126,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1130,
    "end": 1136
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 1137,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1155,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1164,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 1171,
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
    "type": "Keyword",
    "value": "switch",
    "start": 1184,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1205,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1210,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1217,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1222,
    "end": 1228
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 1229,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1245,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1250,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1257,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1261,
    "end": 1267
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 1268,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1287,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 1294,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1313,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1322,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 1329,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1349,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1379,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1406,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1415,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 1422,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1442,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1448,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1452,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1459,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1487,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1514,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 1519,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1532,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1538,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1545,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1553,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1570,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1576,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1583,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1590,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1601,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1610,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 1617,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1629,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1639,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1655,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1660,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1667,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1672,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1692,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1697,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1704,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1708,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1729,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 1738,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 1745,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1757,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1767,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1783,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1788,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1795,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1800,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1820,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1825,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1832,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1836,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1858,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 1865,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1881,
    "end": 1882
  }
]
```
