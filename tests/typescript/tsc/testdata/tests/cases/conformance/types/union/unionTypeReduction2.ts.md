__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
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
                    "start": 17,
                    "end": 18
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 22,
                      "end": 26
                    },
                    "start": 20,
                    "end": 26
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 17,
                  "end": 26
                }
              ],
              "start": 15,
              "end": 28
            },
            "start": 13,
            "end": 28
          },
          "start": 12,
          "end": 28
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                    "start": 35,
                    "end": 36
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
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 41,
                          "end": 47
                        },
                        "start": 39,
                        "end": 47
                      },
                      "start": 37,
                      "end": 47
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 50,
                      "end": 54
                    },
                    "start": 48,
                    "end": 54
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 35,
                  "end": 54
                }
              ],
              "start": 33,
              "end": 56
            },
            "start": 31,
            "end": 56
          },
          "start": 30,
          "end": 56
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 69
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 74,
                        "end": 78
                      },
                      "prefix": true,
                      "start": 73,
                      "end": 78
                    },
                    "prefix": true,
                    "start": 72,
                    "end": 78
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 82
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 85,
                    "end": 86
                  },
                  "start": 72,
                  "end": 86
                },
                "definite": false,
                "start": 68,
                "end": 86
              }
            ],
            "declare": false,
            "start": 64,
            "end": 87
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 121
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 123
                },
                "optional": false,
                "computed": false,
                "start": 120,
                "end": 123
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 120,
              "end": 125
            },
            "directive": null,
            "start": 120,
            "end": 126
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 132
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 133,
                  "end": 134
                },
                "optional": false,
                "computed": false,
                "start": 131,
                "end": 134
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 135,
                  "end": 142
                }
              ],
              "optional": false,
              "start": 131,
              "end": 143
            },
            "directive": null,
            "start": 131,
            "end": 144
          }
        ],
        "start": 58,
        "end": 146
      },
      "expression": false,
      "start": 0,
      "end": 146
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 159
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
                    "start": 165,
                    "end": 166
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
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 170,
                              "end": 176
                            },
                            {
                              "type": "TSUndefinedKeyword",
                              "start": 179,
                              "end": 188
                            }
                          ],
                          "start": 170,
                          "end": 188
                        },
                        "start": 168,
                        "end": 188
                      },
                      "start": 167,
                      "end": 188
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 191,
                      "end": 195
                    },
                    "start": 189,
                    "end": 195
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 165,
                  "end": 195
                }
              ],
              "start": 163,
              "end": 197
            },
            "start": 161,
            "end": 197
          },
          "start": 160,
          "end": 197
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                    "start": 204,
                    "end": 205
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
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 210,
                          "end": 216
                        },
                        "start": 208,
                        "end": 216
                      },
                      "start": 206,
                      "end": 216
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 219,
                      "end": 223
                    },
                    "start": 217,
                    "end": 223
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 204,
                  "end": 223
                }
              ],
              "start": 202,
              "end": 225
            },
            "start": 200,
            "end": 225
          },
          "start": 199,
          "end": 225
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 238
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 243,
                        "end": 247
                      },
                      "prefix": true,
                      "start": 242,
                      "end": 247
                    },
                    "prefix": true,
                    "start": 241,
                    "end": 247
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 250,
                    "end": 251
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 254,
                    "end": 255
                  },
                  "start": 241,
                  "end": 255
                },
                "definite": false,
                "start": 237,
                "end": 255
              }
            ],
            "declare": false,
            "start": 233,
            "end": 256
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 289,
                  "end": 290
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 292
                },
                "optional": false,
                "computed": false,
                "start": 289,
                "end": 292
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 289,
              "end": 294
            },
            "directive": null,
            "start": 289,
            "end": 295
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 300,
                  "end": 301
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 302,
                  "end": 303
                },
                "optional": false,
                "computed": false,
                "start": 300,
                "end": 303
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 304,
                  "end": 311
                }
              ],
              "optional": false,
              "start": 300,
              "end": 312
            },
            "directive": null,
            "start": 300,
            "end": 313
          }
        ],
        "start": 227,
        "end": 315
      },
      "expression": false,
      "start": 148,
      "end": 315
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 326,
        "end": 328
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
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 338,
                  "end": 342
                },
                "start": 335,
                "end": 342
              },
              "start": 332,
              "end": 342
            },
            "start": 330,
            "end": 342
          },
          "start": 329,
          "end": 342
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 352,
                      "end": 358
                    },
                    "start": 350,
                    "end": 358
                  },
                  "start": 348,
                  "end": 358
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 363,
                  "end": 367
                },
                "start": 360,
                "end": 367
              },
              "start": 347,
              "end": 367
            },
            "start": 345,
            "end": 367
          },
          "start": 344,
          "end": 367
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 379,
                  "end": 380
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 385,
                        "end": 389
                      },
                      "prefix": true,
                      "start": 384,
                      "end": 389
                    },
                    "prefix": true,
                    "start": 383,
                    "end": 389
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 392,
                    "end": 393
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 396,
                    "end": 397
                  },
                  "start": 383,
                  "end": 397
                },
                "definite": false,
                "start": 379,
                "end": 397
              }
            ],
            "declare": false,
            "start": 375,
            "end": 398
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 428,
                "end": 429
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 428,
              "end": 431
            },
            "directive": null,
            "start": 428,
            "end": 432
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 437,
                "end": 438
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 439,
                  "end": 446
                }
              ],
              "optional": false,
              "start": 437,
              "end": 447
            },
            "directive": null,
            "start": 437,
            "end": 448
          }
        ],
        "start": 369,
        "end": 450
      },
      "expression": false,
      "start": 317,
      "end": 450
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 461,
        "end": 463
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
              "type": "TSFunctionType",
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 471,
                          "end": 477
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 480,
                          "end": 489
                        }
                      ],
                      "start": 471,
                      "end": 489
                    },
                    "start": 469,
                    "end": 489
                  },
                  "start": 468,
                  "end": 489
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 494,
                  "end": 498
                },
                "start": 491,
                "end": 498
              },
              "start": 467,
              "end": 498
            },
            "start": 465,
            "end": 498
          },
          "start": 464,
          "end": 498
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 508,
                      "end": 514
                    },
                    "start": 506,
                    "end": 514
                  },
                  "start": 504,
                  "end": 514
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 519,
                  "end": 523
                },
                "start": 516,
                "end": 523
              },
              "start": 503,
              "end": 523
            },
            "start": 501,
            "end": 523
          },
          "start": 500,
          "end": 523
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 536
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 541,
                        "end": 545
                      },
                      "prefix": true,
                      "start": 540,
                      "end": 545
                    },
                    "prefix": true,
                    "start": 539,
                    "end": 545
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 548,
                    "end": 549
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
                    "end": 553
                  },
                  "start": 539,
                  "end": 553
                },
                "definite": false,
                "start": 535,
                "end": 553
              }
            ],
            "declare": false,
            "start": 531,
            "end": 554
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
              "arguments": [],
              "optional": false,
              "start": 584,
              "end": 587
            },
            "directive": null,
            "start": 584,
            "end": 588
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 593,
                "end": 594
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 595,
                  "end": 602
                }
              ],
              "optional": false,
              "start": 593,
              "end": 603
            },
            "directive": null,
            "start": 593,
            "end": 604
          }
        ],
        "start": 525,
        "end": 606
      },
      "expression": false,
      "start": 452,
      "end": 606
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 617,
        "end": 619
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
              "type": "TSFunctionType",
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 627,
                          "end": 633
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 636,
                          "end": 645
                        }
                      ],
                      "start": 627,
                      "end": 645
                    },
                    "start": 625,
                    "end": 645
                  },
                  "start": 624,
                  "end": 645
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 650,
                  "end": 654
                },
                "start": 647,
                "end": 654
              },
              "start": 623,
              "end": 654
            },
            "start": 621,
            "end": 654
          },
          "start": 620,
          "end": 654
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "'hello'",
                        "start": 664,
                        "end": 671
                      },
                      "start": 664,
                      "end": 671
                    },
                    "start": 662,
                    "end": 671
                  },
                  "start": 660,
                  "end": 671
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 676,
                  "end": 680
                },
                "start": 673,
                "end": 680
              },
              "start": 659,
              "end": 680
            },
            "start": 657,
            "end": 680
          },
          "start": 656,
          "end": 680
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 692,
                  "end": 693
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 698,
                        "end": 702
                      },
                      "prefix": true,
                      "start": 697,
                      "end": 702
                    },
                    "prefix": true,
                    "start": 696,
                    "end": 702
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 705,
                    "end": 706
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 709,
                    "end": 710
                  },
                  "start": 696,
                  "end": 710
                },
                "definite": false,
                "start": 692,
                "end": 710
              }
            ],
            "declare": false,
            "start": 688,
            "end": 711
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 742,
                "end": 743
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 742,
              "end": 745
            },
            "directive": null,
            "start": 742,
            "end": 746
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 751,
                "end": 752
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 753,
                  "end": 760
                }
              ],
              "optional": false,
              "start": 751,
              "end": 761
            },
            "directive": null,
            "start": 751,
            "end": 762
          }
        ],
        "start": 682,
        "end": 764
      },
      "expression": false,
      "start": 608,
      "end": 764
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 775,
        "end": 777
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
              "type": "TSFunctionType",
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "hello",
                            "raw": "'hello'",
                            "start": 785,
                            "end": 792
                          },
                          "start": 785,
                          "end": 792
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 795,
                          "end": 804
                        }
                      ],
                      "start": 785,
                      "end": 804
                    },
                    "start": 783,
                    "end": 804
                  },
                  "start": 782,
                  "end": 804
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 809,
                  "end": 813
                },
                "start": 806,
                "end": 813
              },
              "start": 781,
              "end": 813
            },
            "start": 779,
            "end": 813
          },
          "start": 778,
          "end": 813
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 823,
                      "end": 829
                    },
                    "start": 821,
                    "end": 829
                  },
                  "start": 819,
                  "end": 829
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 834,
                  "end": 838
                },
                "start": 831,
                "end": 838
              },
              "start": 818,
              "end": 838
            },
            "start": 816,
            "end": 838
          },
          "start": 815,
          "end": 838
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 850,
                  "end": 851
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 856,
                        "end": 860
                      },
                      "prefix": true,
                      "start": 855,
                      "end": 860
                    },
                    "prefix": true,
                    "start": 854,
                    "end": 860
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 863,
                    "end": 864
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 867,
                    "end": 868
                  },
                  "start": 854,
                  "end": 868
                },
                "definite": false,
                "start": 850,
                "end": 868
              }
            ],
            "declare": false,
            "start": 846,
            "end": 869
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 911,
                "end": 912
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 911,
              "end": 914
            },
            "directive": null,
            "start": 911,
            "end": 915
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 930,
                "end": 931
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 932,
                  "end": 939
                }
              ],
              "optional": false,
              "start": 930,
              "end": 940
            },
            "directive": null,
            "start": 930,
            "end": 941
          }
        ],
        "start": 840,
        "end": 943
      },
      "expression": false,
      "start": 766,
      "end": 943
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 950,
        "end": 951
      },
      "typeParameters": null,
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
              "start": 960,
              "end": 961
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 965,
                "end": 969
              },
              "start": 963,
              "end": 969
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 960,
            "end": 970
          }
        ],
        "start": 954,
        "end": 972
      },
      "declare": false,
      "start": 945,
      "end": 972
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 979,
        "end": 980
      },
      "typeParameters": null,
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
              "start": 989,
              "end": 990
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
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 995,
                    "end": 1001
                  },
                  "start": 993,
                  "end": 1001
                },
                "start": 991,
                "end": 1001
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1004,
                "end": 1008
              },
              "start": 1002,
              "end": 1008
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 989,
            "end": 1009
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1014,
              "end": 1015
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1019,
                "end": 1023
              },
              "start": 1017,
              "end": 1023
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1014,
            "end": 1024
          }
        ],
        "start": 983,
        "end": 1026
      },
      "declare": false,
      "start": 974,
      "end": 1026
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1037,
        "end": 1040
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1044,
                "end": 1045
              },
              "typeArguments": null,
              "start": 1044,
              "end": 1045
            },
            "start": 1042,
            "end": 1045
          },
          "start": 1041,
          "end": 1045
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1050,
                "end": 1051
              },
              "typeArguments": null,
              "start": 1050,
              "end": 1051
            },
            "start": 1048,
            "end": 1051
          },
          "start": 1047,
          "end": 1051
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1063,
                  "end": 1064
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1069,
                        "end": 1073
                      },
                      "prefix": true,
                      "start": 1068,
                      "end": 1073
                    },
                    "prefix": true,
                    "start": 1067,
                    "end": 1073
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1076,
                    "end": 1077
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1080,
                    "end": 1081
                  },
                  "start": 1067,
                  "end": 1081
                },
                "definite": false,
                "start": 1063,
                "end": 1081
              }
            ],
            "declare": false,
            "start": 1059,
            "end": 1082
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1097,
                  "end": 1098
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1099,
                  "end": 1100
                },
                "optional": false,
                "computed": false,
                "start": 1097,
                "end": 1100
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1097,
              "end": 1102
            },
            "directive": null,
            "start": 1097,
            "end": 1103
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1108,
                  "end": 1109
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1110,
                  "end": 1111
                },
                "optional": false,
                "computed": false,
                "start": 1108,
                "end": 1111
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 1112,
                  "end": 1119
                }
              ],
              "optional": false,
              "start": 1108,
              "end": 1120
            },
            "directive": null,
            "start": 1108,
            "end": 1121
          }
        ],
        "start": 1053,
        "end": 1123
      },
      "expression": false,
      "start": 1028,
      "end": 1123
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReturnVal",
        "optional": false,
        "typeAnnotation": null,
        "start": 1157,
        "end": 1166
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
              "name": "something",
              "optional": false,
              "typeAnnotation": null,
              "start": 1173,
              "end": 1182
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1186,
                "end": 1190
              },
              "start": 1184,
              "end": 1190
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1173,
            "end": 1191
          }
        ],
        "start": 1167,
        "end": 1193
      },
      "declare": false,
      "start": 1147,
      "end": 1193
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
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReturnVal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1204,
                  "end": 1213
                },
                "typeArguments": null,
                "start": 1204,
                "end": 1213
              },
              "start": 1202,
              "end": 1213
            },
            "start": 1201,
            "end": 1213
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "something",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1218,
                  "end": 1227
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1230,
                    "end": 1233
                  },
                  "expression": false,
                  "start": 1227,
                  "end": 1233
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1218,
                "end": 1233
              }
            ],
            "start": 1216,
            "end": 1235
          },
          "definite": false,
          "start": 1201,
          "end": 1235
        }
      ],
      "declare": false,
      "start": 1195,
      "end": 1235
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
            "name": "val",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReturnVal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1256,
                  "end": 1265
                },
                "typeArguments": null,
                "start": 1256,
                "end": 1265
              },
              "start": 1254,
              "end": 1265
            },
            "start": 1251,
            "end": 1265
          },
          "init": null,
          "definite": false,
          "start": 1251,
          "end": 1265
        }
      ],
      "declare": true,
      "start": 1237,
      "end": 1266
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "run",
        "optional": false,
        "typeAnnotation": null,
        "start": 1276,
        "end": 1279
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
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
                    "name": "something",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1291,
                    "end": 1300
                  },
                  "computed": false,
                  "optional": true,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1306,
                          "end": 1312
                        },
                        "start": 1304,
                        "end": 1312
                      },
                      "start": 1302,
                      "end": 1312
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1315,
                      "end": 1319
                    },
                    "start": 1313,
                    "end": 1319
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1291,
                  "end": 1319
                }
              ],
              "start": 1289,
              "end": 1321
            },
            "start": 1287,
            "end": 1321
          },
          "start": 1280,
          "end": 1321
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "something",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1335,
                  "end": 1344
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1347,
                      "end": 1354
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1355,
                      "end": 1364
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1347,
                    "end": 1364
                  },
                  "operator": "??",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1368,
                      "end": 1371
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1372,
                      "end": 1381
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1368,
                    "end": 1381
                  },
                  "start": 1347,
                  "end": 1381
                },
                "definite": false,
                "start": 1335,
                "end": 1381
              }
            ],
            "declare": false,
            "start": 1329,
            "end": 1382
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "something",
                "optional": false,
                "typeAnnotation": null,
                "start": 1387,
                "end": 1396
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1397,
                  "end": 1399
                }
              ],
              "optional": false,
              "start": 1387,
              "end": 1400
            },
            "directive": null,
            "start": 1387,
            "end": 1401
          }
        ],
        "start": 1323,
        "end": 1403
      },
      "expression": false,
      "start": 1267,
      "end": 1403
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1403
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 22,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 64,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 73,
    "end": 74
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 74,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 135,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 148,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 157,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 179,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 191,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 210,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 219,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 233,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 242,
    "end": 243
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 243,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 300,
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
    "value": "f",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 304,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 317,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 326,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 335,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 338,
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
    "value": "y",
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
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 352,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 360,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 363,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 375,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 384,
    "end": 385
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 385,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "f",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 438,
    "end": 439
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 439,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 452,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 461,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 471,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 480,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 491,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 494,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 508,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 516,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 519,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 531,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 540,
    "end": 541
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 541,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
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
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "f",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 594,
    "end": 595
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 595,
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
    "value": ";",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 605,
    "end": 606
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 608,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 617,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 627,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 636,
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
    "value": "=>",
    "start": 647,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 650,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 657,
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
    "value": "?",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 662,
    "end": 663
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 664,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 673,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 676,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 688,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 697,
    "end": 698
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 698,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 709,
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
    "value": "f",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 753,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 763,
    "end": 764
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 766,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 775,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 783,
    "end": 784
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 785,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 795,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 806,
    "end": 808
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 809,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 823,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 831,
    "end": 833
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 834,
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
    "value": "{",
    "start": 840,
    "end": 841
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 846,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 855,
    "end": 856
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 856,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 931,
    "end": 932
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 932,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 945,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 963,
    "end": 964
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 965,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 974,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 995,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1004,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1019,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1028,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1037,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1059,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1069,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Identifier",
    "value": "z",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1112,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1147,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "ReturnVal",
    "start": 1157,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 1173,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1186,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1195,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "ReturnVal",
    "start": 1204,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 1218,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1237,
    "end": 1244
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1245,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1251,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "ReturnVal",
    "start": 1256,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1267,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "run",
    "start": 1276,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1280,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 1291,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1306,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1315,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1329,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 1335,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1347,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 1355,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1365,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1368,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 1372,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 1387,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "String",
    "value": "''",
    "start": 1397,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1402,
    "end": 1403
  }
]
```
