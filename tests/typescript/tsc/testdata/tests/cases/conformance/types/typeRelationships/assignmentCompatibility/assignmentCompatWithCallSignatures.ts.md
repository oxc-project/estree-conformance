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
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 121
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 132,
                    "end": 138
                  },
                  "start": 130,
                  "end": 138
                },
                "start": 129,
                "end": 138
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 141,
                "end": 145
              },
              "start": 139,
              "end": 145
            },
            "start": 128,
            "end": 146
          }
        ],
        "start": 122,
        "end": 148
      },
      "declare": false,
      "start": 110,
      "end": 148
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
            "name": "t",
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
                  "start": 164,
                  "end": 165
                },
                "typeArguments": null,
                "start": 164,
                "end": 165
              },
              "start": 162,
              "end": 165
            },
            "start": 161,
            "end": 165
          },
          "init": null,
          "definite": false,
          "start": 161,
          "end": 165
        }
      ],
      "declare": true,
      "start": 149,
      "end": 166
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 188,
                            "end": 194
                          },
                          "start": 186,
                          "end": 194
                        },
                        "start": 185,
                        "end": 194
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 197,
                        "end": 201
                      },
                      "start": 195,
                      "end": 201
                    },
                    "start": 184,
                    "end": 201
                  }
                ],
                "start": 182,
                "end": 203
              },
              "start": 180,
              "end": 203
            },
            "start": 179,
            "end": 203
          },
          "init": null,
          "definite": false,
          "start": 179,
          "end": 203
        }
      ],
      "declare": true,
      "start": 167,
      "end": 204
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 206,
          "end": 207
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 210,
          "end": 211
        },
        "start": 206,
        "end": 211
      },
      "directive": null,
      "start": 206,
      "end": 212
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 213,
          "end": 214
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 217,
          "end": 218
        },
        "start": 213,
        "end": 218
      },
      "directive": null,
      "start": 213,
      "end": 219
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 232
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 243,
                    "end": 249
                  },
                  "start": 241,
                  "end": 249
                },
                "start": 240,
                "end": 249
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 252,
                "end": 258
              },
              "start": 250,
              "end": 258
            },
            "start": 239,
            "end": 259
          }
        ],
        "start": 233,
        "end": 261
      },
      "declare": false,
      "start": 221,
      "end": 261
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 278
                },
                "typeArguments": null,
                "start": 277,
                "end": 278
              },
              "start": 275,
              "end": 278
            },
            "start": 274,
            "end": 278
          },
          "init": null,
          "definite": false,
          "start": 274,
          "end": 278
        }
      ],
      "declare": true,
      "start": 262,
      "end": 279
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 302,
                            "end": 308
                          },
                          "start": 300,
                          "end": 308
                        },
                        "start": 299,
                        "end": 308
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 311,
                        "end": 317
                      },
                      "start": 309,
                      "end": 317
                    },
                    "start": 298,
                    "end": 317
                  }
                ],
                "start": 296,
                "end": 319
              },
              "start": 294,
              "end": 319
            },
            "start": 292,
            "end": 319
          },
          "init": null,
          "definite": false,
          "start": 292,
          "end": 319
        }
      ],
      "declare": true,
      "start": 280,
      "end": 320
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 321,
          "end": 322
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 325,
          "end": 326
        },
        "start": 321,
        "end": 326
      },
      "directive": null,
      "start": 321,
      "end": 327
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 328,
          "end": 329
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 332,
          "end": 334
        },
        "start": 328,
        "end": 334
      },
      "directive": null,
      "start": 328,
      "end": 335
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 336,
          "end": 337
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 340,
          "end": 341
        },
        "start": 336,
        "end": 341
      },
      "directive": null,
      "start": 336,
      "end": 342
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 343,
          "end": 344
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 347,
          "end": 349
        },
        "start": 343,
        "end": 349
      },
      "directive": null,
      "start": 343,
      "end": 350
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 352,
          "end": 353
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
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
                  "start": 357,
                  "end": 358
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 357,
                "end": 358
              }
            ],
            "start": 356,
            "end": 359
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
              "start": 360,
              "end": 364
            }
          ],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 369,
            "end": 370
          },
          "id": null,
          "generator": false,
          "start": 356,
          "end": 370
        },
        "start": 352,
        "end": 370
      },
      "directive": null,
      "start": 352,
      "end": 371
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 372,
          "end": 373
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 382,
            "end": 383
          },
          "id": null,
          "generator": false,
          "start": 376,
          "end": 383
        },
        "start": 372,
        "end": 383
      },
      "directive": null,
      "start": 372,
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
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 385,
          "end": 386
        },
        "right": {
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 402,
                  "end": 408
                },
                "start": 400,
                "end": 408
              },
              "start": 399,
              "end": 408
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 419,
                  "end": 421
                },
                "start": 412,
                "end": 422
              }
            ],
            "start": 410,
            "end": 424
          },
          "expression": false,
          "start": 389,
          "end": 424
        },
        "start": 385,
        "end": 424
      },
      "directive": null,
      "start": 385,
      "end": 424
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 425,
          "end": 426
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
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
                  "start": 430,
                  "end": 431
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 430,
                "end": 431
              }
            ],
            "start": 429,
            "end": 432
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
                    "start": 436,
                    "end": 437
                  },
                  "typeArguments": null,
                  "start": 436,
                  "end": 437
                },
                "start": 434,
                "end": 437
              },
              "start": 433,
              "end": 437
            }
          ],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 442,
            "end": 443
          },
          "id": null,
          "generator": false,
          "start": 429,
          "end": 443
        },
        "start": 425,
        "end": 443
      },
      "directive": null,
      "start": 425,
      "end": 444
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 445,
          "end": 446
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 455,
            "end": 456
          },
          "id": null,
          "generator": false,
          "start": 449,
          "end": 456
        },
        "start": 445,
        "end": 456
      },
      "directive": null,
      "start": 445,
      "end": 457
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 458,
          "end": 459
        },
        "right": {
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 475,
                  "end": 481
                },
                "start": 473,
                "end": 481
              },
              "start": 472,
              "end": 481
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 492,
                  "end": 494
                },
                "start": 485,
                "end": 495
              }
            ],
            "start": 483,
            "end": 497
          },
          "expression": false,
          "start": 462,
          "end": 497
        },
        "start": 458,
        "end": 497
      },
      "directive": null,
      "start": 458,
      "end": 497
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S2",
        "optional": false,
        "typeAnnotation": null,
        "start": 509,
        "end": 511
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 522,
                    "end": 528
                  },
                  "start": 520,
                  "end": 528
                },
                "start": 519,
                "end": 528
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 531,
                "end": 535
              },
              "start": 529,
              "end": 535
            },
            "start": 518,
            "end": 536
          }
        ],
        "start": 512,
        "end": 538
      },
      "declare": false,
      "start": 499,
      "end": 538
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
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 555,
                  "end": 557
                },
                "typeArguments": null,
                "start": 555,
                "end": 557
              },
              "start": 553,
              "end": 557
            },
            "start": 551,
            "end": 557
          },
          "init": null,
          "definite": false,
          "start": 551,
          "end": 557
        }
      ],
      "declare": true,
      "start": 539,
      "end": 558
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
            "name": "a3",
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 581,
                            "end": 587
                          },
                          "start": 579,
                          "end": 587
                        },
                        "start": 578,
                        "end": 587
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 590,
                        "end": 594
                      },
                      "start": 588,
                      "end": 594
                    },
                    "start": 577,
                    "end": 594
                  }
                ],
                "start": 575,
                "end": 596
              },
              "start": 573,
              "end": 596
            },
            "start": 571,
            "end": 596
          },
          "init": null,
          "definite": false,
          "start": 571,
          "end": 596
        }
      ],
      "declare": true,
      "start": 559,
      "end": 597
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 618,
          "end": 619
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 622,
          "end": 624
        },
        "start": 618,
        "end": 624
      },
      "directive": null,
      "start": 618,
      "end": 625
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 626,
          "end": 627
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null,
          "start": 630,
          "end": 632
        },
        "start": 626,
        "end": 632
      },
      "directive": null,
      "start": 626,
      "end": 633
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 634,
          "end": 635
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
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
                  "type": "TSStringKeyword",
                  "start": 642,
                  "end": 648
                },
                "start": 640,
                "end": 648
              },
              "start": 639,
              "end": 648
            }
          ],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 653,
            "end": 654
          },
          "id": null,
          "generator": false,
          "start": 638,
          "end": 654
        },
        "start": 634,
        "end": 654
      },
      "directive": null,
      "start": 634,
      "end": 655
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 656,
          "end": 657
        },
        "right": {
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 673,
                  "end": 679
                },
                "start": 671,
                "end": 679
              },
              "start": 670,
              "end": 679
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 690,
                  "end": 692
                },
                "start": 683,
                "end": 693
              }
            ],
            "start": 681,
            "end": 695
          },
          "expression": false,
          "start": 660,
          "end": 695
        },
        "start": 656,
        "end": 695
      },
      "directive": null,
      "start": 656,
      "end": 695
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 696,
          "end": 697
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 700,
          "end": 702
        },
        "start": 696,
        "end": 702
      },
      "directive": null,
      "start": 696,
      "end": 703
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 704,
          "end": 705
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null,
          "start": 708,
          "end": 710
        },
        "start": 704,
        "end": 710
      },
      "directive": null,
      "start": 704,
      "end": 711
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 712,
          "end": 713
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
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
                  "type": "TSStringKeyword",
                  "start": 720,
                  "end": 726
                },
                "start": 718,
                "end": 726
              },
              "start": 717,
              "end": 726
            }
          ],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 731,
            "end": 732
          },
          "id": null,
          "generator": false,
          "start": 716,
          "end": 732
        },
        "start": 712,
        "end": 732
      },
      "directive": null,
      "start": 712,
      "end": 733
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 734,
          "end": 735
        },
        "right": {
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 751,
                  "end": 757
                },
                "start": 749,
                "end": 757
              },
              "start": 748,
              "end": 757
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 768,
                  "end": 770
                },
                "start": 761,
                "end": 771
              }
            ],
            "start": 759,
            "end": 773
          },
          "expression": false,
          "start": 738,
          "end": 773
        },
        "start": 734,
        "end": 773
      },
      "directive": null,
      "start": 734,
      "end": 773
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 110,
  "end": 773
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 110,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 141,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 149,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 157,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 167,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 175,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 188,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 197,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 221,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 262,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 270,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 274,
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
    "value": "S",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 280,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 288,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 292,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "number",
    "start": 302,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 311,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 332,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 347,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "T",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 366,
    "end": 368
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 379,
    "end": 381
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "t",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 389,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 402,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 412,
    "end": 418
  },
  {
    "type": "String",
    "value": "''",
    "start": 419,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 439,
    "end": 441
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 452,
    "end": 454
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 462,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 475,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 485,
    "end": 491
  },
  {
    "type": "String",
    "value": "''",
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
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 499,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 509,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 522,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 531,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 539,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 547,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 551,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 555,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 559,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 567,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 571,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 581,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 590,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 622,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 630,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 642,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 650,
    "end": 652
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 660,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 673,
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
    "value": "{",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 683,
    "end": 689
  },
  {
    "type": "String",
    "value": "''",
    "start": 690,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 700,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 708,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "=",
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
    "value": "x",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 720,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 728,
    "end": 730
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 736,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 738,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 751,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 761,
    "end": 767
  },
  {
    "type": "String",
    "value": "''",
    "start": 768,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 772,
    "end": 773
  }
]
```
