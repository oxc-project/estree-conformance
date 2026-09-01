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
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 129
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 133,
                    "end": 139
                  },
                  "start": 131,
                  "end": 139
                },
                "start": 130,
                "end": 139
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 142,
                "end": 146
              },
              "start": 140,
              "end": 146
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 128,
            "end": 147
          }
        ],
        "start": 122,
        "end": 149
      },
      "declare": false,
      "start": 110,
      "end": 149
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
                  "start": 165,
                  "end": 166
                },
                "typeArguments": null,
                "start": 165,
                "end": 166
              },
              "start": 163,
              "end": 166
            },
            "start": 162,
            "end": 166
          },
          "init": null,
          "definite": false,
          "start": 162,
          "end": 166
        }
      ],
      "declare": true,
      "start": 150,
      "end": 167
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
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 185,
                      "end": 186
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 190,
                            "end": 196
                          },
                          "start": 188,
                          "end": 196
                        },
                        "start": 187,
                        "end": 196
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 199,
                        "end": 203
                      },
                      "start": 197,
                      "end": 203
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 185,
                    "end": 203
                  }
                ],
                "start": 183,
                "end": 205
              },
              "start": 181,
              "end": 205
            },
            "start": 180,
            "end": 205
          },
          "init": null,
          "definite": false,
          "start": 180,
          "end": 205
        }
      ],
      "declare": true,
      "start": 168,
      "end": 206
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
          "start": 208,
          "end": 209
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 212,
          "end": 213
        },
        "start": 208,
        "end": 213
      },
      "directive": null,
      "start": 208,
      "end": 214
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
          "start": 215,
          "end": 216
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 220
        },
        "start": 215,
        "end": 220
      },
      "directive": null,
      "start": 215,
      "end": 221
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 234
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 242
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 246,
                    "end": 252
                  },
                  "start": 244,
                  "end": 252
                },
                "start": 243,
                "end": 252
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 255,
                "end": 261
              },
              "start": 253,
              "end": 261
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 241,
            "end": 262
          }
        ],
        "start": 235,
        "end": 264
      },
      "declare": false,
      "start": 223,
      "end": 264
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
                  "start": 280,
                  "end": 281
                },
                "typeArguments": null,
                "start": 280,
                "end": 281
              },
              "start": 278,
              "end": 281
            },
            "start": 277,
            "end": 281
          },
          "init": null,
          "definite": false,
          "start": 277,
          "end": 281
        }
      ],
      "declare": true,
      "start": 265,
      "end": 282
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
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 301,
                      "end": 302
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 306,
                            "end": 312
                          },
                          "start": 304,
                          "end": 312
                        },
                        "start": 303,
                        "end": 312
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 315,
                        "end": 321
                      },
                      "start": 313,
                      "end": 321
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 301,
                    "end": 321
                  }
                ],
                "start": 299,
                "end": 323
              },
              "start": 297,
              "end": 323
            },
            "start": 295,
            "end": 323
          },
          "init": null,
          "definite": false,
          "start": 295,
          "end": 323
        }
      ],
      "declare": true,
      "start": 283,
      "end": 324
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
          "start": 325,
          "end": 326
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 329,
          "end": 330
        },
        "start": 325,
        "end": 330
      },
      "directive": null,
      "start": 325,
      "end": 331
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
          "start": 332,
          "end": 333
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 336,
          "end": 338
        },
        "start": 332,
        "end": 338
      },
      "directive": null,
      "start": 332,
      "end": 339
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
          "start": 340,
          "end": 341
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 344,
          "end": 345
        },
        "start": 340,
        "end": 345
      },
      "directive": null,
      "start": 340,
      "end": 346
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
          "start": 347,
          "end": 348
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 351,
          "end": 353
        },
        "start": 347,
        "end": 353
      },
      "directive": null,
      "start": 347,
      "end": 354
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
          "start": 356,
          "end": 357
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 362,
                "end": 363
              },
              "value": {
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
                  "start": 371,
                  "end": 372
                },
                "id": null,
                "generator": false,
                "start": 365,
                "end": 372
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 362,
              "end": 372
            }
          ],
          "start": 360,
          "end": 374
        },
        "start": 356,
        "end": 374
      },
      "directive": null,
      "start": 356,
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
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 377
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 383
              },
              "value": {
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
                          "start": 391,
                          "end": 392
                        },
                        "typeArguments": null,
                        "start": 391,
                        "end": 392
                      },
                      "start": 390,
                      "end": 392
                    },
                    "start": 389,
                    "end": 392
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 397,
                  "end": 398
                },
                "id": null,
                "generator": false,
                "start": 385,
                "end": 398
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 382,
              "end": 398
            }
          ],
          "start": 380,
          "end": 400
        },
        "start": 376,
        "end": 400
      },
      "directive": null,
      "start": 376,
      "end": 401
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
          "start": 402,
          "end": 403
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 408,
                "end": 409
              },
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 420,
                  "end": 421
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 433,
                        "end": 434
                      },
                      "start": 426,
                      "end": 434
                    }
                  ],
                  "start": 424,
                  "end": 436
                },
                "expression": false,
                "start": 411,
                "end": 436
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 408,
              "end": 436
            }
          ],
          "start": 406,
          "end": 438
        },
        "start": 402,
        "end": 438
      },
      "directive": null,
      "start": 402,
      "end": 439
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
          "start": 440,
          "end": 441
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 446,
                "end": 447
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 451,
                        "end": 457
                      },
                      "start": 449,
                      "end": 457
                    },
                    "start": 448,
                    "end": 457
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
                        "start": 468,
                        "end": 470
                      },
                      "start": 461,
                      "end": 471
                    }
                  ],
                  "start": 459,
                  "end": 473
                },
                "expression": false,
                "start": 447,
                "end": 473
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 446,
              "end": 473
            }
          ],
          "start": 444,
          "end": 475
        },
        "start": 440,
        "end": 475
      },
      "directive": null,
      "start": 440,
      "end": 475
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
          "start": 476,
          "end": 477
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 482,
                "end": 483
              },
              "value": {
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
                  "start": 491,
                  "end": 492
                },
                "id": null,
                "generator": false,
                "start": 485,
                "end": 492
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 482,
              "end": 492
            }
          ],
          "start": 480,
          "end": 494
        },
        "start": 476,
        "end": 494
      },
      "directive": null,
      "start": 476,
      "end": 494
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
          "start": 495,
          "end": 496
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 501,
                "end": 502
              },
              "value": {
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
                        "start": 505,
                        "end": 506
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 505,
                      "end": 506
                    }
                  ],
                  "start": 504,
                  "end": 507
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
                          "start": 511,
                          "end": 512
                        },
                        "typeArguments": null,
                        "start": 511,
                        "end": 512
                      },
                      "start": 509,
                      "end": 512
                    },
                    "start": 508,
                    "end": 512
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 517,
                  "end": 518
                },
                "id": null,
                "generator": false,
                "start": 504,
                "end": 518
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 501,
              "end": 518
            }
          ],
          "start": 499,
          "end": 520
        },
        "start": 495,
        "end": 520
      },
      "directive": null,
      "start": 495,
      "end": 521
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
          "start": 522,
          "end": 523
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 528,
                "end": 529
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 544,
                        "end": 550
                      },
                      "start": 542,
                      "end": 550
                    },
                    "start": 541,
                    "end": 550
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
                        "start": 561,
                        "end": 563
                      },
                      "start": 554,
                      "end": 564
                    }
                  ],
                  "start": 552,
                  "end": 566
                },
                "expression": false,
                "start": 531,
                "end": 566
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 528,
              "end": 566
            }
          ],
          "start": 526,
          "end": 568
        },
        "start": 522,
        "end": 568
      },
      "directive": null,
      "start": 522,
      "end": 568
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
          "start": 580,
          "end": 581
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
            "start": 590,
            "end": 591
          },
          "id": null,
          "generator": false,
          "start": 584,
          "end": 591
        },
        "start": 580,
        "end": 591
      },
      "directive": null,
      "start": 580,
      "end": 592
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
          "start": 593,
          "end": 594
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
                  "start": 610,
                  "end": 616
                },
                "start": 608,
                "end": 616
              },
              "start": 607,
              "end": 616
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
                  "start": 627,
                  "end": 629
                },
                "start": 620,
                "end": 630
              }
            ],
            "start": 618,
            "end": 632
          },
          "expression": false,
          "start": 597,
          "end": 632
        },
        "start": 593,
        "end": 632
      },
      "directive": null,
      "start": 593,
      "end": 632
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
          "start": 633,
          "end": 634
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
            "start": 643,
            "end": 644
          },
          "id": null,
          "generator": false,
          "start": 637,
          "end": 644
        },
        "start": 633,
        "end": 644
      },
      "directive": null,
      "start": 633,
      "end": 645
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
          "start": 646,
          "end": 647
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
                  "start": 663,
                  "end": 669
                },
                "start": 661,
                "end": 669
              },
              "start": 660,
              "end": 669
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
                  "start": 680,
                  "end": 682
                },
                "start": 673,
                "end": 683
              }
            ],
            "start": 671,
            "end": 685
          },
          "expression": false,
          "start": 650,
          "end": 685
        },
        "start": 646,
        "end": 685
      },
      "directive": null,
      "start": 646,
      "end": 685
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S2",
        "optional": false,
        "typeAnnotation": null,
        "start": 697,
        "end": 699
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 707
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 711,
                    "end": 717
                  },
                  "start": 709,
                  "end": 717
                },
                "start": 708,
                "end": 717
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 720,
                "end": 724
              },
              "start": 718,
              "end": 724
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 706,
            "end": 725
          }
        ],
        "start": 700,
        "end": 727
      },
      "declare": false,
      "start": 687,
      "end": 727
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
                  "start": 744,
                  "end": 746
                },
                "typeArguments": null,
                "start": 744,
                "end": 746
              },
              "start": 742,
              "end": 746
            },
            "start": 740,
            "end": 746
          },
          "init": null,
          "definite": false,
          "start": 740,
          "end": 746
        }
      ],
      "declare": true,
      "start": 728,
      "end": 747
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
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 766,
                      "end": 767
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 771,
                            "end": 777
                          },
                          "start": 769,
                          "end": 777
                        },
                        "start": 768,
                        "end": 777
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 780,
                        "end": 784
                      },
                      "start": 778,
                      "end": 784
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 766,
                    "end": 784
                  }
                ],
                "start": 764,
                "end": 786
              },
              "start": 762,
              "end": 786
            },
            "start": 760,
            "end": 786
          },
          "init": null,
          "definite": false,
          "start": 760,
          "end": 786
        }
      ],
      "declare": true,
      "start": 748,
      "end": 787
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
          "start": 808,
          "end": 809
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 812,
          "end": 814
        },
        "start": 808,
        "end": 814
      },
      "directive": null,
      "start": 808,
      "end": 815
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
          "start": 816,
          "end": 817
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null,
          "start": 820,
          "end": 822
        },
        "start": 816,
        "end": 822
      },
      "directive": null,
      "start": 816,
      "end": 823
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
          "start": 824,
          "end": 825
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
                  "start": 832,
                  "end": 838
                },
                "start": 830,
                "end": 838
              },
              "start": 829,
              "end": 838
            }
          ],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 843,
            "end": 844
          },
          "id": null,
          "generator": false,
          "start": 828,
          "end": 844
        },
        "start": 824,
        "end": 844
      },
      "directive": null,
      "start": 824,
      "end": 845
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
          "start": 846,
          "end": 847
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
                  "start": 863,
                  "end": 869
                },
                "start": 861,
                "end": 869
              },
              "start": 860,
              "end": 869
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
                  "start": 880,
                  "end": 882
                },
                "start": 873,
                "end": 883
              }
            ],
            "start": 871,
            "end": 885
          },
          "expression": false,
          "start": 850,
          "end": 885
        },
        "start": 846,
        "end": 885
      },
      "directive": null,
      "start": 846,
      "end": 885
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
          "start": 886,
          "end": 887
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 890,
          "end": 892
        },
        "start": 886,
        "end": 892
      },
      "directive": null,
      "start": 886,
      "end": 893
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
          "start": 894,
          "end": 895
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null,
          "start": 898,
          "end": 900
        },
        "start": 894,
        "end": 900
      },
      "directive": null,
      "start": 894,
      "end": 901
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
          "start": 902,
          "end": 903
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
                  "start": 910,
                  "end": 916
                },
                "start": 908,
                "end": 916
              },
              "start": 907,
              "end": 916
            }
          ],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 921,
            "end": 922
          },
          "id": null,
          "generator": false,
          "start": 906,
          "end": 922
        },
        "start": 902,
        "end": 922
      },
      "directive": null,
      "start": 902,
      "end": 923
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
          "start": 924,
          "end": 925
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
                  "start": 941,
                  "end": 947
                },
                "start": 939,
                "end": 947
              },
              "start": 938,
              "end": 947
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
                  "start": 958,
                  "end": 960
                },
                "start": 951,
                "end": 961
              }
            ],
            "start": 949,
            "end": 963
          },
          "expression": false,
          "start": 928,
          "end": 963
        },
        "start": 924,
        "end": 963
      },
      "directive": null,
      "start": 924,
      "end": 963
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 110,
  "end": 963
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
    "type": "Identifier",
    "value": "f",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 142,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 150,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 158,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 168,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 176,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "number",
    "start": 190,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 199,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 223,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "number",
    "start": 246,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 255,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 265,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 273,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 283,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 291,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 295,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 315,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
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
    "value": "t",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 336,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 351,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 368,
    "end": 370
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "t",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
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
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 394,
    "end": 396
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 411,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 426,
    "end": 432
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "number",
    "start": 451,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 461,
    "end": 467
  },
  {
    "type": "String",
    "value": "''",
    "start": 468,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "{",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 488,
    "end": 490
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 514,
    "end": 516
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "f",
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
    "value": "function",
    "start": 531,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 544,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 554,
    "end": 560
  },
  {
    "type": "String",
    "value": "''",
    "start": 561,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 587,
    "end": 589
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 595,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 597,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 610,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 618,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 620,
    "end": 626
  },
  {
    "type": "String",
    "value": "''",
    "start": 627,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 640,
    "end": 642
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 650,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 663,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 671,
    "end": 672
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 673,
    "end": 679
  },
  {
    "type": "String",
    "value": "''",
    "start": 680,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 684,
    "end": 685
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 687,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 697,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 711,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 720,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 728,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 736,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 740,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 744,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 748,
    "end": 755
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 756,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 760,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "string",
    "start": 771,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 778,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 780,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 812,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 820,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 829,
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
    "value": "string",
    "start": 832,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 840,
    "end": 842
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 848,
    "end": 849
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 850,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 863,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 871,
    "end": 872
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 873,
    "end": 879
  },
  {
    "type": "String",
    "value": "''",
    "start": 880,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 890,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 898,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 910,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 918,
    "end": 920
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 926,
    "end": 927
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 928,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 941,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 949,
    "end": 950
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 951,
    "end": 957
  },
  {
    "type": "String",
    "value": "''",
    "start": 958,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 962,
    "end": 963
  }
]
```
